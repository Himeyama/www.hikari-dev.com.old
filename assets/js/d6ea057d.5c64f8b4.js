"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2176],{79577:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(8209);const l={title:"Arduino \u3067 delay() \u3092\u4f7f\u308f\u306a\u3044",tags:["Arduino"]},o=void 0,r={permalink:"/blog/2021/08/16/arduino-no-dalay",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2021-08-16-arduino-no-dalay.md",source:"@site/blog/2021-08-16-arduino-no-dalay.md",title:"Arduino \u3067 delay() \u3092\u4f7f\u308f\u306a\u3044",description:"Arduino \u3067 delay() \u3092\u4f7f\u3046\u3068\u3001\u5f85\u6a5f\u6642\u9593\u4e2d\u306b\u4f55\u3082\u3067\u304d\u306a\u3044\u3002",date:"2021-08-16T00:00:00.000Z",formattedDate:"2021\u5e748\u670816\u65e5",tags:[{label:"Arduino",permalink:"/blog/tags/arduino"}],readingTime:.625,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Arduino \u3067 delay() \u3092\u4f7f\u308f\u306a\u3044",tags:["Arduino"]},prevItem:{title:"WSA \u306b apk \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/blog/2022/03/12/wsa-install-apk"}},d={authorsImageUrls:[]},p=[],s={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,i.kt)(u,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Arduino \u3067 ",(0,i.kt)("inlineCode",{parentName:"p"},"delay()")," \u3092\u4f7f\u3046\u3068\u3001\u5f85\u6a5f\u6642\u9593\u4e2d\u306b\u4f55\u3082\u3067\u304d\u306a\u3044\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"millis()")," \u3092\u4f7f\u7528\u3057\u305f 1 \u79d2\u5468\u671f\u306e LED \u70b9\u6ec5\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u305f\u3002"),(0,i.kt)("h1",{id:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"},"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"millis()")," \u3067\u6642\u9593\u3092\u53d6\u5f97\u3057\u6642\u9593\u3067\u5272\u3063\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"t")," \u306b\u4ee3\u5165"),(0,i.kt)("li",{parentName:"ol"},"\u524d\u56de\u306e t \u3068\u65b0\u305f\u306a t \u3092\u6bd4\u8f03\u3057\u3066\u7570\u306a\u308b\u5834\u5408\u306b\u95a2\u6570\u3092\u5b9f\u884c")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"unsigned long t = 0, ot;\n\nvoid setup(){\n  pinMode(LED_BUILTIN, OUTPUT);\n}\n\nvoid loop() {\n  ot = t;\n  t = millis() / 500;\n  if(ot != t){\n    if(t % 2){\n      digitalWrite(LED_BUILTIN, LOW);\n    }else{\n      digitalWrite(LED_BUILTIN, HIGH);\n    }\n  }\n}\n")))}m.isMDXComponent=!0}}]);