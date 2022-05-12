---
title: Ubuntu 系の自作ディストリビューションの作り方
tags: [Ubuntu, Linux]
---

**この記事は書きかけです。**

## 概要
1. iso ファイル (ディスクイメージ) を展開
2. squashfs ファイル (`/` の中、ファイルシステムイメージ) を展開
3. (2.) で展開してものに対し、カスタマイズするためのスクリプトを適用
4. (3.) から squashfs を作成 (`mksquashfs` コマンド)
5. (4.) を (1.) に入れて、チェックサムやファイルサイズ、パッケージのリストを更新
6. (5.) を iso ファイルを作成 (`xorriso` コマンドを使用)

この流れで、Ubuntu の改造ディストリビューションを作成できます。

## 用意するもの
- Ubuntu のイメージ

## 必要なパッケージのインストール
```bash
sudo apt install cd-boot-images-amd64
```

パッケージがないとかでインストールができない場合は以下を実行し再度実行してください。

```bash
echo "deb http://cz.archive.ubuntu.com/ubuntu jammy main" | sudo tee -a /etc/apt/sources.list
sudo apt update
```

## 展開とマウント

## カスタマイズするためのスクリプトの割り当て 

## ファイルシステムの作成

## ディスクイメージの作成

