---
title: man ページの日本語設定
tags: [man, Linux, Ubuntu]
---

## インストール
Ubuntu で man ページを日本語で表示するようにする。

```sh
sudo apt update
sudo apt install language-pack-ja manpages-ja
```

## 表示
```sh
LANG=ja_JP.UTF8 man ls
```

![man ls](man-ls.png)
