"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7595],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],c={title:"git \u306e\u30e1\u30e2",tags:["git"]},l=void 0,s={permalink:"/blog/2022/07/05/git-memo",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-07-05-git-memo.md",source:"@site/blog/2022-07-05-git-memo.md",title:"git \u306e\u30e1\u30e2",description:"\u30d6\u30e9\u30f3\u30c1 (git branch / git checkout)",date:"2022-07-05T00:00:00.000Z",formattedDate:"2022\u5e747\u67085\u65e5",tags:[{label:"git",permalink:"/blog/tags/git"}],readingTime:.76,truncated:!1,authors:[],frontMatter:{title:"git \u306e\u30e1\u30e2",tags:["git"]},nextItem:{title:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u5206\u985e\u554f\u984c\u3092\u3056\u307e\u3056\u307e\u306a\u30e2\u30c7\u30eb\u3067\u8a66\u3059",permalink:"/blog/2022/07/03/classifier"}},p={authorsImageUrls:[]},m=[{value:"\u30d6\u30e9\u30f3\u30c1 (git branch / git checkout)",id:"\u30d6\u30e9\u30f3\u30c1-git-branch--git-checkout",level:2},{value:"\u30d6\u30e9\u30f3\u30c1\u306e\u5207\u308a\u66ff\u3048",id:"\u30d6\u30e9\u30f3\u30c1\u306e\u5207\u308a\u66ff\u3048",level:3},{value:"\u30d6\u30e9\u30f3\u30c1\u306e\u524a\u9664",id:"\u30d6\u30e9\u30f3\u30c1\u306e\u524a\u9664",level:3},{value:"\u7a7a\u306e\u30d6\u30e9\u30f3\u30c1\u4f5c\u6210",id:"\u7a7a\u306e\u30d6\u30e9\u30f3\u30c1\u4f5c\u6210",level:3},{value:"\u30ed\u30b0",id:"\u30ed\u30b0",level:2},{value:"\u30ed\u30b0\u3092\u8868\u793a",id:"\u30ed\u30b0\u3092\u8868\u793a",level:3},{value:"\u904e\u53bb\u306b\u623b\u308b",id:"\u904e\u53bb\u306b\u623b\u308b",level:2},{value:"\u904e\u53bb\u304b\u3089\u623b\u308b",id:"\u904e\u53bb\u304b\u3089\u623b\u308b",level:3},{value:"\u30b3\u30df\u30c3\u30c8\u3092\u53d6\u308a\u6d88\u3059 (git reset)",id:"\u30b3\u30df\u30c3\u30c8\u3092\u53d6\u308a\u6d88\u3059-git-reset",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30d6\u30e9\u30f3\u30c1-git-branch--git-checkout"},"\u30d6\u30e9\u30f3\u30c1 (git branch / git checkout)"),(0,i.kt)("h3",{id:"\u30d6\u30e9\u30f3\u30c1\u306e\u5207\u308a\u66ff\u3048"},"\u30d6\u30e9\u30f3\u30c1\u306e\u5207\u308a\u66ff\u3048"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <\u30d6\u30e9\u30f3\u30c1\u540d>\n")),(0,i.kt)("h3",{id:"\u30d6\u30e9\u30f3\u30c1\u306e\u524a\u9664"},"\u30d6\u30e9\u30f3\u30c1\u306e\u524a\u9664"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -d <\u30d6\u30e9\u30f3\u30c1\u540d>\n")),(0,i.kt)("h3",{id:"\u7a7a\u306e\u30d6\u30e9\u30f3\u30c1\u4f5c\u6210"},"\u7a7a\u306e\u30d6\u30e9\u30f3\u30c1\u4f5c\u6210"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout --orphan=<\u30d6\u30e9\u30f3\u30c1\u540d>\ngit reset --hard\n")),(0,i.kt)("h2",{id:"\u30ed\u30b0"},"\u30ed\u30b0"),(0,i.kt)("h3",{id:"\u30ed\u30b0\u3092\u8868\u793a"},"\u30ed\u30b0\u3092\u8868\u793a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git log --decorate=full --graph --all\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"vscode \u3092\u4f7f\u3048\u308b\u306e\u306a\u3089\u3070\u3001\u62e1\u5f35\u6a5f\u80fd ",(0,i.kt)("inlineCode",{parentName:"p"},"Git Graph")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u3088\u3044\u3002"))),(0,i.kt)("h2",{id:"\u904e\u53bb\u306b\u623b\u308b"},"\u904e\u53bb\u306b\u623b\u308b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u30b3\u30df\u30c3\u30c8 ID \u3092\u8abf\u3079\u308b\ngit log\n\ngit checkout <\u30b3\u30df\u30c3\u30c8 ID>\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30b3\u30df\u30c3\u30c8 ID \u306f 4 \u6587\u5b57\u3067\u7701\u7565\u53ef"))),(0,i.kt)("h3",{id:"\u904e\u53bb\u304b\u3089\u623b\u308b"},"\u904e\u53bb\u304b\u3089\u623b\u308b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <\u30d6\u30e9\u30f3\u30c1\u540d>\n")),(0,i.kt)("h2",{id:"\u30b3\u30df\u30c3\u30c8\u3092\u53d6\u308a\u6d88\u3059-git-reset"},"\u30b3\u30df\u30c3\u30c8\u3092\u53d6\u308a\u6d88\u3059 (git reset)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git reset --soft @^\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"@ \u306f HEAD \u3068\u540c\u3058\u3002\u76f4\u524d\u306e\u3082\u306e\u306f ^ \u3067\u8868\u3059\u3002"))))}u.isMDXComponent=!0}}]);