---
title: string (文字列) から MD5 (文字列) を返す関数 (C#)
tags: [C#, MD5]
---

## 使用する関数
- `byte[] Encoding.UTF8.GetBytes(string)`  
  string から byte[] に変換
- `MD5 MD5.create()`  
  MD5 インスタンスを生成
- `byte[] md5.ComputeHash(byte[])`  
  byte[] から MD5 ハッシュを生成  

## 例
```cs showLineNumbers
string str2MD5(string src)
{
    byte[] srcBytes = Encoding.UTF8.GetBytes(src);
    string MD5src;
    using (MD5 md5 = MD5.Create())
    {
        byte[] MD5srcBytes = md5.ComputeHash(srcBytes);
        StringBuilder sb = new();
        for (int i = 0; i < MD5srcBytes.Length; i++)
            sb.Append(MD5srcBytes[i].ToString("x2"));
        MD5src = sb.ToString();
    }
    return MD5src;
}
```
