---
title: WSA に apk をインストール
tags: [WSA, Windows, apk, Android, adb]
---

## 前提条件
- WSA インストール済み
- adb コマンド実行可能

## ADB で WSA に接続する
```ps
PS> adb connect <IP アドレス>
connected to <IP アドレス>:5555
PS> adb devices
List of devices attached
<IP アドレス>:5555      device

```

## ADB で XXX.apk を WSA にインストール
```ps
PS> adb install XXX.apk
Performing Streamed Install
Success
```