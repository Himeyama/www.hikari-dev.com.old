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
```bash
# /mnt/d/ubuntu-22.04-desktop-amd64.iso はディスクイメージのパスです。
# 状況に応じて変更してください。
DISKIMAGE=/mnt/d/ubuntu-22.04-desktop-amd64.iso

# 作業ディレクトリーの作成
mkdir ~/my-distribution
cd ~/my-distribution

# ディスクイメージのシンボリックリンクを作成します。
ln -s $DISK_IMAGE image.iso

# ディスクイメージをマウント
# 警告が出ますが無視してください。
mkdir mnt
sudo mount -o loop image.iso mnt

# ディスクイメージのコピー
# マウントした場所は書き換えができないのでコピーします。
# ただし、ディストリビューションのファイルシステムである /casper/filesystem.squashfs は除外してコピーします。
mkdir disk
rsync -P -a --exclude=/casper/filesystem.squashfs mnt/ disk

# ファイルシステムイメージのマウント
mkdir mntfs
sudo mount -t squashfs -o loop mnt/casper/filesystem.squashfs mntfs

# ファイルシステムをコピー
# マウントした場所は書き換えできないので、コピーします。
mkdir squashfs
sudo rsync -P -a mntfs/ squashfs

# マウントは不要になったのでアンマウントします。
sudo umount mntfs
sudo umount mnt
rm -r mntfs mnt

# シンボリックリンクも不要なので削除します
rm image.iso

# リリースノートの URL を設定します。
echo "http://" | tee disk/.disk/release_notes_url

# ディスク情報を設定します。
today=$(date +"%Y%m%d")
echo -n "MyDistribution 22.04 LTS \"Jammy Jellyfish\" - Release amd64 ($today)" | tee 
echo -n "MyDistribution 22.04 LTS \"Jammy Jellyfish\" - Release amd64 ($today)" | sudo tee di
sk/.disk/info

# インストーラーの言語を日本語に設定します。
cat | sudo tee -a disk/preseed/ubuntu.seed <<EOF
d-i debian-installer/language string ja
d-i debian-installer/locale string ja_JP.UTF-8
d-i keyboard-configuration/layoutcode string jp
d-i keyboard-configuration/modelcode jp106
d-i keyboard-configuration/layout select Japanese
d-i keyboard-configuration/variant select Japanese
EOF

# grub.cfg の日本語化
splash=$(echo "splash --- debian-installer/language=ja" \
"debian-installer/locale=ja_JP.UTF-8" \
"keyboard-configuration/layoutcode?=jp" \
"keyboard-configuration/modelcode?=pc105")
sudo sed -i "s#splash ---#$splash#" disk/boot/grub/grub.cfg
```

## カスタマイズするためのスクリプトの割り当て 

## ファイルシステムの作成

## ディスクイメージの作成

