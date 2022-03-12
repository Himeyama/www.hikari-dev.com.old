"use strict";(self.webpackChunkwww_hikari_dev_com=self.webpackChunkwww_hikari_dev_com||[]).push([[962],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9351:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"WSA \u306b apk \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",tags:["WSA","Windows","apk","Android","adb"]},c=void 0,p={permalink:"/2022/03/12/wsa-install-apk",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-03-12-wsa-install-apk/index.md",source:"@site/blog/2022-03-12-wsa-install-apk/index.md",title:"WSA \u306b apk \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"\u524d\u63d0\u6761\u4ef6",date:"2022-03-12T00:00:00.000Z",formattedDate:"2022\u5e743\u670812\u65e5",tags:[{label:"WSA",permalink:"/tags/wsa"},{label:"Windows",permalink:"/tags/windows"},{label:"apk",permalink:"/tags/apk"},{label:"Android",permalink:"/tags/android"},{label:"adb",permalink:"/tags/adb"}],readingTime:.31,truncated:!1,authors:[],frontMatter:{title:"WSA \u306b apk \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",tags:["WSA","Windows","apk","Android","adb"]},prevItem:{title:"termux \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",permalink:"/2022/03/12/termux"},nextItem:{title:"Arduino \u3067 delay() \u3092\u4f7f\u308f\u306a\u3044",permalink:"/2021/08/16/arduino-no-dalay"}},u={authorsImageUrls:[]},s=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"ADB \u3067 WSA \u306b\u63a5\u7d9a\u3059\u308b",id:"adb-\u3067-wsa-\u306b\u63a5\u7d9a\u3059\u308b",level:2},{value:"ADB \u3067 XXX.apk \u3092 WSA \u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"adb-\u3067-xxxapk-\u3092-wsa-\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WSA \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6e08\u307f"),(0,o.kt)("li",{parentName:"ul"},"adb \u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u53ef\u80fd")),(0,o.kt)("h2",{id:"adb-\u3067-wsa-\u306b\u63a5\u7d9a\u3059\u308b"},"ADB \u3067 WSA \u306b\u63a5\u7d9a\u3059\u308b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ps"},"PS> adb connect <IP \u30a2\u30c9\u30ec\u30b9>\nconnected to <IP \u30a2\u30c9\u30ec\u30b9>:5555\nPS> adb devices\nList of devices attached\n<IP \u30a2\u30c9\u30ec\u30b9>:5555      device\n\n")),(0,o.kt)("h2",{id:"adb-\u3067-xxxapk-\u3092-wsa-\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"ADB \u3067 XXX.apk \u3092 WSA \u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ps"},"PS> adb install XXX.apk\nPerforming Streamed Install\nSuccess\n")))}m.isMDXComponent=!0}}]);