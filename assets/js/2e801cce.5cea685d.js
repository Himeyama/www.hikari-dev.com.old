"use strict";(self.webpackChunkwww_hikari_dev_com=self.webpackChunkwww_hikari_dev_com||[]).push([[450],{6029:function(t){t.exports=JSON.parse('{"blogPosts":[{"id":"/2022/03/12/","metadata":{"permalink":"/2022/03/12/","editUrl":"https://github.com/himeyama/www.hikari-dev.com/blog/2022-03-12.md","source":"@site/blog/2022-03-12.md","title":"Blog \u74b0\u5883\u306e\u79fb\u884c","description":"\u3072\u304b\u308a\u3076\u30d6\u30ed\u30b0\u74b0\u5883\u306e\u79fb\u884c","date":"2022-03-12T00:00:00.000Z","formattedDate":"2022\u5e743\u670812\u65e5","tags":[{"label":"Blog","permalink":"/tags/blog"}],"readingTime":0.18,"truncated":false,"authors":[],"frontMatter":{"title":"Blog \u74b0\u5883\u306e\u79fb\u884c","tags":["Blog"],"description":"\u3072\u304b\u308a\u3076\u30d6\u30ed\u30b0\u74b0\u5883\u306e\u79fb\u884c"},"nextItem":{"title":"termux \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5","permalink":"/2022/03/12/termux"}},"content":"\u30d6\u30ed\u30b0\u306e\u74b0\u5883\u3092 jekyll \u304b\u3089 Docusaurus \u306b\u79fb\u884c\u3057\u307e\u3057\u305f\u3002\\n\u30a2\u30af\u30bb\u30b9\u306e\u591a\u3044\u8a18\u4e8b\u306b\u95a2\u3057\u3066\u306f jekyll \u304b\u3089\u79fb\u884c\u4e88\u5b9a\u3067\u3059\u3002"},{"id":"/2022/03/12/termux","metadata":{"permalink":"/2022/03/12/termux","editUrl":"https://github.com/himeyama/www.hikari-dev.com/blog/2022-03-12-termux/index.md","source":"@site/blog/2022-03-12-termux/index.md","title":"termux \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5","description":"GitHub \u306e termux-app \u30ea\u30dd\u30b8\u30c8\u30ea\u306e Releases (https://github.com/termux/termux-app/releases/) \u306b\u884c\u304d\u3001","date":"2022-03-12T00:00:00.000Z","formattedDate":"2022\u5e743\u670812\u65e5","tags":[{"label":"Android","permalink":"/tags/android"},{"label":"Linux","permalink":"/tags/linux"}],"readingTime":0.165,"truncated":false,"authors":[],"frontMatter":{"title":"termux \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5","tags":["Android","Linux"]},"prevItem":{"title":"Blog \u74b0\u5883\u306e\u79fb\u884c","permalink":"/2022/03/12/"},"nextItem":{"title":"WSA \u306b apk \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb","permalink":"/2022/03/12/wsa-install-apk"}},"content":"GitHub \u306e termux-app \u30ea\u30dd\u30b8\u30c8\u30ea\u306e Releases (https://github.com/termux/termux-app/releases/) \u306b\u884c\u304d\u3001\\n`termux-app_*_arm64_*.apk` \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3002\\n\\n![termux github releases](release-termux.png)\\n\u3053\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f\u4e0a\u304b\u3089 2 \u756a\u76ee\u306e 29.9 MB \u306e\u3084\u3064"},{"id":"/2022/03/12/wsa-install-apk","metadata":{"permalink":"/2022/03/12/wsa-install-apk","editUrl":"https://github.com/himeyama/www.hikari-dev.com/blog/2022-03-12-wsa-install-apk/index.md","source":"@site/blog/2022-03-12-wsa-install-apk/index.md","title":"WSA \u306b apk \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb","description":"\u524d\u63d0\u6761\u4ef6","date":"2022-03-12T00:00:00.000Z","formattedDate":"2022\u5e743\u670812\u65e5","tags":[{"label":"WSA","permalink":"/tags/wsa"},{"label":"Windows","permalink":"/tags/windows"},{"label":"apk","permalink":"/tags/apk"},{"label":"Android","permalink":"/tags/android"},{"label":"adb","permalink":"/tags/adb"}],"readingTime":0.31,"truncated":false,"authors":[],"frontMatter":{"title":"WSA \u306b apk \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb","tags":["WSA","Windows","apk","Android","adb"]},"prevItem":{"title":"termux \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5","permalink":"/2022/03/12/termux"},"nextItem":{"title":"Arduino \u3067 delay() \u3092\u4f7f\u308f\u306a\u3044","permalink":"/2021/08/16/arduino-no-dalay"}},"content":"## \u524d\u63d0\u6761\u4ef6\\n- WSA \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6e08\u307f\\n- adb \u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u53ef\u80fd\\n\\n## ADB \u3067 WSA \u306b\u63a5\u7d9a\u3059\u308b\\n```ps\\nPS> adb connect <IP \u30a2\u30c9\u30ec\u30b9>\\nconnected to <IP \u30a2\u30c9\u30ec\u30b9>:5555\\nPS> adb devices\\nList of devices attached\\n<IP \u30a2\u30c9\u30ec\u30b9>:5555      device\\n\\n```\\n\\n## ADB \u3067 XXX.apk \u3092 WSA \u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\\n```ps\\nPS> adb install XXX.apk\\nPerforming Streamed Install\\nSuccess\\n```"},{"id":"/2021/08/16/arduino-no-dalay","metadata":{"permalink":"/2021/08/16/arduino-no-dalay","editUrl":"https://github.com/himeyama/www.hikari-dev.com/blog/2021-08-16-arduino-no-dalay.md","source":"@site/blog/2021-08-16-arduino-no-dalay.md","title":"Arduino \u3067 delay() \u3092\u4f7f\u308f\u306a\u3044","description":"Arduino \u3067 delay() \u3092\u4f7f\u3046\u3068\u3001\u5f85\u6a5f\u6642\u9593\u4e2d\u306b\u4f55\u3082\u3067\u304d\u306a\u3044\u3002","date":"2021-08-16T00:00:00.000Z","formattedDate":"2021\u5e748\u670816\u65e5","tags":[{"label":"Arduino","permalink":"/tags/arduino"}],"readingTime":0.625,"truncated":false,"authors":[],"frontMatter":{"title":"Arduino \u3067 delay() \u3092\u4f7f\u308f\u306a\u3044","tags":["Arduino"]},"prevItem":{"title":"WSA \u306b apk \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb","permalink":"/2022/03/12/wsa-install-apk"}},"content":"Arduino \u3067 `delay()` \u3092\u4f7f\u3046\u3068\u3001\u5f85\u6a5f\u6642\u9593\u4e2d\u306b\u4f55\u3082\u3067\u304d\u306a\u3044\u3002\\n`millis()` \u3092\u4f7f\u7528\u3057\u305f 1 \u79d2\u5468\u671f\u306e LED \u70b9\u6ec5\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u305f\u3002\\n\\n# \u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\\n1. `millis()` \u3067\u6642\u9593\u3092\u53d6\u5f97\u3057\u6642\u9593\u3067\u5272\u3063\u3066\u3001`t` \u306b\u4ee3\u5165\\n1. \u524d\u56de\u306e t \u3068\u65b0\u305f\u306a t \u3092\u6bd4\u8f03\u3057\u3066\u7570\u306a\u308b\u5834\u5408\u306b\u95a2\u6570\u3092\u5b9f\u884c\\n\\n> \u4f8b\\n\\n```cpp\\nunsigned long t = 0, ot;\\n\\nvoid setup(){\\n  pinMode(LED_BUILTIN, OUTPUT);\\n}\\n\\nvoid loop() {\\n  ot = t;\\n  t = millis() / 500;\\n  if(ot != t){\\n    if(t % 2){\\n      digitalWrite(LED_BUILTIN, LOW);\\n    }else{\\n      digitalWrite(LED_BUILTIN, HIGH);\\n    }\\n  }\\n}\\n```"}]}')}}]);