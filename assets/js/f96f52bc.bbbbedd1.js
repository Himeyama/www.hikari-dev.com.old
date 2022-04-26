"use strict";(self.webpackChunkwww_hikari_dev_com=self.webpackChunkwww_hikari_dev_com||[]).push([[3386],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=f(r),m=o,b=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var f=2;f<a;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},78161:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],u={title:"Firefox \u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",tags:["Ubuntu","Ubuntu 22.04","Firefox"]},l=void 0,f={permalink:"/2022/04/27/install-binary-firefox",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-04-27-install-binary-firefox/index.md",source:"@site/blog/2022-04-27-install-binary-firefox/index.md",title:"Firefox \u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"Ubuntu 22.04 \u306f snap \u7248\u306e Firefox \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3089\u3057\u304f\u3001",date:"2022-04-27T00:00:00.000Z",formattedDate:"2022\u5e744\u670827\u65e5",tags:[{label:"Ubuntu",permalink:"/tags/ubuntu"},{label:"Ubuntu 22.04",permalink:"/tags/ubuntu-22-04"},{label:"Firefox",permalink:"/tags/firefox"}],readingTime:.605,truncated:!1,authors:[],frontMatter:{title:"Firefox \u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",tags:["Ubuntu","Ubuntu 22.04","Firefox"]},nextItem:{title:"Ubuntu \u3067 gsettings \u3092\u4f7f\u7528\u3057 Dock \u306e\u8a2d\u5b9a\u3092\u884c\u3046",permalink:"/2022/04/27/ubuntu-dock"}},c={authorsImageUrls:[]},p=[{value:"apt / snap \u7248\u306e Firefox \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"apt--snap-\u7248\u306e-firefox-\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"Firefox \u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"firefox-\u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2}],s={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ubuntu 22.04 \u306f snap \u7248\u306e Firefox \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3089\u3057\u304f\u3001\n\u74b0\u5883\u306b\u3088\u3063\u3066\u8d77\u52d5\u304c\u3067\u304d\u306a\u304b\u3063\u305f\u306e\u3067\u3001\u30d3\u30eb\u30c9\u6e08\u307f Firefox \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u65b9\u6cd5\u3092\u30e1\u30e2\u3002"),(0,a.kt)("h2",{id:"apt--snap-\u7248\u306e-firefox-\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"apt / snap \u7248\u306e Firefox \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt purge firefox\nsudo snap remove firefox\n")),(0,a.kt)("h2",{id:"firefox-\u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Firefox \u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\nwget "https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=ja" --trust-server-names\n\n# \u5c55\u958b\ntar xvf firefox-*.tar.bz2\n\n# \u914d\u7f6e\nsudo cp -r firefox /usr/lib\n\n# \u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u306e\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092\u4f5c\u6210\nsudo ln -s /usr/lib/firefox/firefox /usr/bin/firefox\n\n# \u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u914d\u7f6e\nsudo mkdir -p /usr/local/share/applications\nsudo wget https://bit.ly/3Mwigwx -O /usr/local/share/applications/firefox.desktop\n')))}m.isMDXComponent=!0}}]);