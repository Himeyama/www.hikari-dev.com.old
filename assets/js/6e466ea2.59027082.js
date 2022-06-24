"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1342],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var A=n.createContext({}),c=function(e){var t=n.useContext(A),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(A.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,A=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,m=p["".concat(A,".").concat(g)]||p[g]||u[g]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var A in t)hasOwnProperty.call(t,A)&&(l[A]=t[A]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9234:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return A},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"WSL Distro Manager \u3092\u8a66\u3059",tags:["Windows","WSL","\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea"]},A=void 0,c={permalink:"/blog/2022/06/22/wsl2-distro-manager",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-06-22-wsl2-distro-manager/index.md",source:"@site/blog/2022-06-22-wsl2-distro-manager/index.md",title:"WSL Distro Manager \u3092\u8a66\u3059",description:"WSL2 \u3092\u7ba1\u7406\u3059\u308b GUI \u30c4\u30fc\u30eb\u3067\u3042\u308b WSL Distro Manager (wsl2-distro-manager) \u3092\u8a66\u3059\u3002",date:"2022-06-22T00:00:00.000Z",formattedDate:"2022\u5e746\u670822\u65e5",tags:[{label:"Windows",permalink:"/blog/tags/windows"},{label:"WSL",permalink:"/blog/tags/wsl"},{label:"\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea",permalink:"/blog/tags/\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea"}],readingTime:.91,truncated:!1,authors:[],frontMatter:{title:"WSL Distro Manager \u3092\u8a66\u3059",tags:["Windows","WSL","\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea"]},prevItem:{title:"\u307f\u3093\u306a\u306e\u81ea\u52d5\u7ffb\u8a33\uff20TexTra \u306e Web API \u3092\u53e9\u3044\u3066\u7ffb\u8a33\u3059\u308b\u7c21\u5358\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u3066\u307f\u305f",permalink:"/blog/2022/06/22/TexTra-ruby"},nextItem:{title:"Python \u3067\u30ea\u30b9\u30c8\u306b\u5bfe\u3057\u3066 * \u3092\u4f7f\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u4e8b\u9805",permalink:"/blog/2022/06/11/pyinplace"}},s={authorsImageUrls:[]},u=[{value:"\u5b9f\u884c\u65b9\u6cd5",id:"\u5b9f\u884c\u65b9\u6cd5",level:2}],p={toc:u};function g(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"WSL2 \u3092\u7ba1\u7406\u3059\u308b GUI \u30c4\u30fc\u30eb\u3067\u3042\u308b WSL Distro Manager (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bostrot/wsl2-distro-manager"},"wsl2-distro-manager"),") \u3092\u8a66\u3059\u3002"),(0,i.kt)("h2",{id:"\u5b9f\u884c\u65b9\u6cd5"},"\u5b9f\u884c\u65b9\u6cd5"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/bostrot/wsl2-distro-manager/releases/"},"https://github.com/bostrot/wsl2-distro-manager/releases/")," \u304b\u3089\nwsl2-distro-manager-vx.x.x.zip \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3002"),(0,i.kt)("p",null,"\u5c55\u958b\u3057\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%")," \u306b\u3067\u3082\u30b3\u30d4\u30fc\u3057\u3066\u304a\u304f\u3002"),(0,i.kt)("p",null,"wsl2distromanager.exe \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u8b66\u544a\u304c\u51fa\u308b\u304c\u3001\u305f\u3076\u3093\u554f\u984c\u306a\u3044\u306e\u3067\u300c\u8a73\u7d30\u60c5\u5831\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u300c\u5b9f\u884c\u300d\u3059\u308b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wsl2distromanager",src:r(2534).Z,width:"728",height:"556"})),(0,i.kt)("p",null,"\u4ee5\u4e0b\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u51fa\u3066\u3001\u30c4\u30fc\u30eb\u304c\u8d77\u52d5\u3059\u308b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wsl2distromanager",src:r(4792).Z,width:"650",height:"500"})),(0,i.kt)("p",null,"\u6298\u308a\u7573\u307f\u3092\u958b\u304f\u3068\u3001\u30a2\u30a4\u30b3\u30f3\u304c\u51fa\u3066\u304f\u308b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wsl2distromanager",src:r(24).Z,width:"270",height:"120"})),(0,i.kt)("p",null,"\u3053\u308c\u3089\u306e\u30a2\u30a4\u30b3\u30f3\u3067\u3001"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WSL \u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u958b\u304f"),(0,i.kt)("li",{parentName:"ul"},"WSL \u3092 VSCode \u3067\u958b\u304f"),(0,i.kt)("li",{parentName:"ul"},"WSL \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8907\u88fd"),(0,i.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u540d\u306e\u5909\u66f4"),(0,i.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u6d88\u53bb"),(0,i.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a")),(0,i.kt)("p",null,"\u304c\u53ef\u80fd\u3002"),(0,i.kt)("p",null,"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u8ffd\u52a0\u306f\u3001\u5de6\u30a2\u30a4\u30b3\u30f3\u30e1\u30cb\u30e5\u30fc\u306e\u300c\uff0b\u300d\u304b\u3089\u53ef\u80fd\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wsl2distromanager",src:r(6040).Z,width:"650",height:"500"})),(0,i.kt)("p",null,"WSL \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u3042\u308b ",(0,i.kt)("inlineCode",{parentName:"p"},".wslconfig")," \u306b\u66f8\u304f\u3088\u3046\u306a\u8a2d\u5b9a\u306f\u5de6\u30a2\u30a4\u30b3\u30f3\u30e1\u30cb\u30e5\u30fc\u306e\u4e0a\u306e\u6b6f\u8eca\u300c\u2699\u300d\u304b\u3089\u53ef\u80fd\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wsl2distromanager",src:r(7232).Z,width:"650",height:"500"})))}g.isMDXComponent=!0},2534:function(e,t,r){t.Z=r.p+"assets/images/sc01-11de0ee0a9afe4565cc37b97c4de03de.png"},4792:function(e,t,r){t.Z=r.p+"assets/images/sc02-8b9f8ec72632c97935189bf5526a0e0d.png"},24:function(e,t){t.Z="data:image/png;base64,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"},6040:function(e,t,r){t.Z=r.p+"assets/images/sc04-93ecb834a3e9d7d55f608b0da7e231b9.png"},7232:function(e,t,r){t.Z=r.p+"assets/images/sc05-772aef65e67bc5630b0534676d23ee42.png"}}]);