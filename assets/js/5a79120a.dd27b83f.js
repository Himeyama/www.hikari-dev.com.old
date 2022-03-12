"use strict";(self.webpackChunkwww_hikari_dev_com=self.webpackChunkwww_hikari_dev_com||[]).push([[175],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,s=f["".concat(u,".").concat(m)]||f[m]||d[m]||a;return n?r.createElement(s,i(i({ref:t},p),{},{components:n})):r.createElement(s,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Arduino \u3067 delay() \u3092\u4f7f\u308f\u306a\u3044",tags:["Arduino"]},u=void 0,c={permalink:"/2021/08/16/arduino-no-dalay",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2021-08-16-arduino-no-dalay.md",source:"@site/blog/2021-08-16-arduino-no-dalay.md",title:"Arduino \u3067 delay() \u3092\u4f7f\u308f\u306a\u3044",description:"Arduino \u3067 delay() \u3092\u4f7f\u3046\u3068\u3001\u5f85\u6a5f\u6642\u9593\u4e2d\u306b\u4f55\u3082\u3067\u304d\u306a\u3044\u3002",date:"2021-08-16T00:00:00.000Z",formattedDate:"2021\u5e748\u670816\u65e5",tags:[{label:"Arduino",permalink:"/tags/arduino"}],readingTime:.625,truncated:!1,authors:[],frontMatter:{title:"Arduino \u3067 delay() \u3092\u4f7f\u308f\u306a\u3044",tags:["Arduino"]},prevItem:{title:"WSA \u306b apk \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/2022/03/12/wsa-install-apk"}},p={authorsImageUrls:[]},d=[],f={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Arduino \u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"delay()")," \u3092\u4f7f\u3046\u3068\u3001\u5f85\u6a5f\u6642\u9593\u4e2d\u306b\u4f55\u3082\u3067\u304d\u306a\u3044\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"millis()")," \u3092\u4f7f\u7528\u3057\u305f 1 \u79d2\u5468\u671f\u306e LED \u70b9\u6ec5\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u305f\u3002"),(0,a.kt)("h1",{id:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"},"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"millis()")," \u3067\u6642\u9593\u3092\u53d6\u5f97\u3057\u6642\u9593\u3067\u5272\u3063\u3066\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"t")," \u306b\u4ee3\u5165"),(0,a.kt)("li",{parentName:"ol"},"\u524d\u56de\u306e t \u3068\u65b0\u305f\u306a t \u3092\u6bd4\u8f03\u3057\u3066\u7570\u306a\u308b\u5834\u5408\u306b\u95a2\u6570\u3092\u5b9f\u884c")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"unsigned long t = 0, ot;\n\nvoid setup(){\n  pinMode(LED_BUILTIN, OUTPUT);\n}\n\nvoid loop() {\n  ot = t;\n  t = millis() / 500;\n  if(ot != t){\n    if(t % 2){\n      digitalWrite(LED_BUILTIN, LOW);\n    }else{\n      digitalWrite(LED_BUILTIN, HIGH);\n    }\n  }\n}\n")))}m.isMDXComponent=!0}}]);