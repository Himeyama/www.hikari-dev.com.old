---
title: Rust で乱数の生成
tags: [Rust, 乱数]
---

注意: クレートのバージョンが違うと、関数も異なります。

## 依存するクレートを追加
`rand` に依存するので追加します。

```bash
cargo add rand
```

## 一様乱数を生成するプログラムの例

```rust
use rand::Rng;

fn main(){
    let mut rng = rand::thread_rng();

    // 浮動小数点数
    let r: f64 = rng.gen_range(0.0..10000.0);
    println!("{}", r);

    // 整数
    let r: i32 = rng.gen_range(0..10000);
    println!("{}", r);
}
```

```bash
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.00s
     Running `target/debug/test`
9464.07133934519
9606
```

## 正規乱数を生成するプログラムの例

```rust
use rand::Rng;

fn main(){
    let mut rng = rand::thread_rng();

    let r: f64 = rng.gen();
    println!("{}", r);
}
```

```bash
$ cargo run
   Compiling alg2opt v0.1.0 (/home/hikari/2-opt/alg2opt)
    Finished dev [unoptimized + debuginfo] target(s) in 0.26s
     Running `target/debug/test`
0.34703657185118175
```

## 指定した分布に従う乱数

```rust
use rand::Rng;
use rand::distributions::Uniform;

fn main(){
    let mut rng = rand::thread_rng();

    let r: f64 = rng.sample(Uniform::new(10.0, 15.0));
    println!("{}", r);
}
```

```bash
$ cargo run
   Compiling alg2opt v0.1.0 (/home/hikari/2-opt/alg2opt)
    Finished dev [unoptimized + debuginfo] target(s) in 0.26s
     Running `target/debug/test`
12.13344856630783
```

## 参考
https://docs.rs/rand/0.8.5/rand/trait.Rng.html
