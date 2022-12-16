---
title: CUDA のグリッド数やブロック数やスレッド数の決め方とメモ
tags: [CUDA]
---

- スレッド: 一つの処理
- ブロック: スレッドの集まり (スレッドを 3 次元に配置)
- グリッド: ブロックの集まり (ブロックを 3 次元に配置)

スレッド数、ブロック数、グリッド数には上限があり、
`deviceQuery` コマンドで取得可能。

RTX3080、CUDA 11.8 では、以下の通りだった。

```
Maximum number of threads per block:           1024
Max dimension size of a thread block (x,y,z): (1024, 1024, 64)
Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)
```

この場合、
- 1 つのブロックの最大スレッド数は 1024
- ブロックの形状が (1024, 1024, 64) 内に収まる  
  つまり、1 つのブロックの形状が (a, b, c) とすると、
$abc \leq 1024$ かつ $a \leq 1024$ かつ $b \leq 1024$ かつ $c \leq 64$ を満たすことである。
- グリッドの形状が (2147483647, 65535, 65535) 内に収まる  
  つまり、1 つのグリッドの形状が (d, e, f) とすると、
$def \leq 2147483647 \times 65535 \times 65535$ かつ $d \leq 2147483647$ かつ $e \leq 65535$ かつ $f \leq 65535$ を満たすことである。

グリッドとブロックの形状を定義する型は `dim3` である。

> 使用例
> 
> ```cpp
> #include <stdio.h>
> 
> __global__ void func1(){
>     printf("%d, %d, %d\n", threadIdx.x, threadIdx.y, threadIdx.z);
> }
> 
> __global__ void func2(){
>     int i = threadIdx.x + blockDim.x * threadIdx.y + blockDim.x * blockDim.y * threadIdx.z;
>     printf("%d\n", i);
> }
> 
> int main(){
>     dim3 grid(1, 1, 1);
>     dim3 block(4, 8, 32);
> 
>     func1<<<grid, block>>>();
>     func2<<<grid, block>>>();
>     cudaDeviceSynchronize();
> }
> ```
