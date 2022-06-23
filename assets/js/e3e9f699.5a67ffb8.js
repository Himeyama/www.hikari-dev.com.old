"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5285],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(n),m=r,f=k["".concat(s,".").concat(m)]||k[m]||u[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4273:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"Matplotlib \u306e set_xticks \u306e\u4f7f\u3044\u3069\u3053\u308d (\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b)",tags:["Python","acorr","xcorr","Matplotlib","set_xticks","set_xticklabelss"]},s=void 0,p={permalink:"/2022/06/10/pltxticks",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-06-10-pltxticks/index.md",source:"@site/blog/2022-06-10-pltxticks/index.md",title:"Matplotlib \u306e set_xticks \u306e\u4f7f\u3044\u3069\u3053\u308d (\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b)",description:"\u4fe1\u53f7\u306e\u751f\u6210\u3068\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b",date:"2022-06-10T00:00:00.000Z",formattedDate:"2022\u5e746\u670810\u65e5",tags:[{label:"Python",permalink:"/tags/python"},{label:"acorr",permalink:"/tags/acorr"},{label:"xcorr",permalink:"/tags/xcorr"},{label:"Matplotlib",permalink:"/tags/matplotlib"},{label:"set_xticks",permalink:"/tags/set-xticks"},{label:"set_xticklabelss",permalink:"/tags/set-xticklabelss"}],readingTime:2.35,truncated:!1,authors:[],frontMatter:{title:"Matplotlib \u306e set_xticks \u306e\u4f7f\u3044\u3069\u3053\u308d (\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b)",tags:["Python","acorr","xcorr","Matplotlib","set_xticks","set_xticklabelss"]},prevItem:{title:"Python \u3067\u30ea\u30b9\u30c8\u306b\u5bfe\u3057\u3066 * \u3092\u4f7f\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u4e8b\u9805",permalink:"/2022/06/11/pyinplace"},nextItem:{title:"cublas \u306e\u4f7f\u3044\u65b9\u30e1\u30e2",permalink:"/2022/05/20/cublas"}},c={authorsImageUrls:[]},u=[{value:"\u4fe1\u53f7\u306e\u751f\u6210\u3068\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b",id:"\u4fe1\u53f7\u306e\u751f\u6210\u3068\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b",level:2},{value:"\u6a2a\u8ef8\u306e\u66f8\u304d\u63db\u3048",id:"\u6a2a\u8ef8\u306e\u66f8\u304d\u63db\u3048",level:2},{value:"\u76ee\u76db\u308a\u306e\u5e45\u3092\u5909\u66f4",id:"\u76ee\u76db\u308a\u306e\u5e45\u3092\u5909\u66f4",level:2},{value:"\u6a2a\u8ef8\u30e9\u30d9\u30eb\u3092\u975e\u8868\u793a\u306b\u8a2d\u5b9a",id:"\u6a2a\u8ef8\u30e9\u30d9\u30eb\u3092\u975e\u8868\u793a\u306b\u8a2d\u5b9a",level:2}],k={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4fe1\u53f7\u306e\u751f\u6210\u3068\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b"},"\u4fe1\u53f7\u306e\u751f\u6210\u3068\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b"),(0,l.kt)("p",null,"\u4f8b\u3068\u3057\u3066\u3001\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u6ce2\u6570 300 \u3067 3 \u79d2\u306e\u77e9\u5f62\u6ce2\u3092\u8003\u3048\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import numpy as np\nimport matplotlib.pyplot as plt\n\n# \u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u6570\nn: int = 900\n\n# \u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u6ce2\u6570\nfs: int = 300\n\nprint(\n    f"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u6570: {n:d}\\n"\n    f"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u6ce2\u6570: {fs:d}\\n"\n    f"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u6642\u9593: {n/fs:.2f} \u79d2"\n)\n\n# \u6642\u9593\u306e\u914d\u5217\nt: np.ndarray = np.arange(n) / fs\n\n# \u4fe1\u53f7\u306e\u5468\u6ce2\u6570 [Hz]\nf: float = 2\n\n# \u4fe1\u53f7\nx = np.sum([np.sin(f * 2 * np.pi * (2 * i + 1) * t) / (2 * i + 1) for i in range(5)], axis=0)\n\nfig, ax = plt.subplots()\nax.plot(t, x)\nplt.show()\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u51fa\u529b:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u6570: 900\n\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u6ce2\u6570: 300\n\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u6642\u9593: 3.00 \u79d2\n")),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{alt:"signal",src:n(8715).Z,width:"386",height:"250"}))),(0,l.kt)("p",null,"\u4f8b\u3048\u3070\u3053\u306e\u4fe1\u53f7\u306b\u3064\u3044\u3066\u3001\n1 \u79d2\u306e\u81ea\u5df1\u76f8\u95a2\u3092\u3068\u308b\u3068\u3001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'fig, ax = plt.subplots()\nax.acorr(x, maxlags=fs, usevlines=False, linestyle="-", marker=None, lw=1)\nplt.show()\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u51fa\u529b:"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{alt:"acorr",src:n(134).Z,width:"386",height:"248"}))),(0,l.kt)("p",null,"\u3068\u6a2a\u8ef8\u6642\u9593\u304c\u5b9f\u969b\u306e\u6642\u9593\u3068\u306f\u7570\u306a\u308b\u3002"),(0,l.kt)("h2",{id:"\u6a2a\u8ef8\u306e\u66f8\u304d\u63db\u3048"},"\u6a2a\u8ef8\u306e\u66f8\u304d\u63db\u3048"),(0,l.kt)("p",null,"\u4e0a\u8a18\u306e\u65b9\u6cd5\u3067\u306f\u6a2a\u8ef8\u306e\u6642\u9593\u304c\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3068\u306a\u3063\u3066\u3057\u307e\u3044\u3001\u6642\u9593\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u306a\u3044\u3002"),(0,l.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"matplotlib.axes.Axes.set_xticks")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"matplotlib.axes.Axes.set_xticklabels")," \u3092\u8a2d\u5b9a\u3057\u3001\u4f8b\u3048\u3070\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u3066\u6a2a\u8ef8\u306e\u6570\u5b57\u3092\u66f8\u304d\u63db\u3048\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'fig, ax = plt.subplots()\nax.acorr(x, maxlags=fs, usevlines=False, linestyle="-", marker=None, lw=1)\nax.set_xticks(np.arange(-300, 301, 100))\nax.set_xticklabels(np.arange(-3, 4))\nplt.show()\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u51fa\u529b:"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{alt:"acorr",src:n(7930).Z,width:"386",height:"248"}))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"set_xticks")," \u306f\u6a2a\u8ef8\u76ee\u76db\u308a\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"set_xticklabels")," \u306f\u76ee\u76db\u308a\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306b\u5bfe\u5fdc\u3057\u305f\u30e9\u30d9\u30eb\u3067\u3042\u308b\u3002"),(0,l.kt)("p",null,"\u3053\u3053\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"set_xticks")," \u3067 ","[-300, 200, ..., 300]"," \u3092\u8a2d\u5b9a\u3057\u3066\u304a\u308a\u3001\n",(0,l.kt)("inlineCode",{parentName:"p"},"set_xticklabels")," \u3067 ","[-3, -2, ..., 3]"," \u3092\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u3002"),(0,l.kt)("h2",{id:"\u76ee\u76db\u308a\u306e\u5e45\u3092\u5909\u66f4"},"\u76ee\u76db\u308a\u306e\u5e45\u3092\u5909\u66f4"),(0,l.kt)("p",null,"\u4e0a\u3068\u540c\u3058\u3088\u3046\u306b\u3001\n",(0,l.kt)("inlineCode",{parentName:"p"},"set_xticks")," \u3067 ","[-300, -250, ..., 300]"," \u3092\u8a2d\u5b9a\u3057\u3001\n",(0,l.kt)("inlineCode",{parentName:"p"},"set_xticklabels")," \u3067 ","[-3., -2.5, ..., 3.]"," \u3092\u8a2d\u5b9a\u3059\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'fig, ax = plt.subplots()\nax.acorr(x, maxlags=fs, usevlines=False, linestyle="-", marker=None, lw=1)\nax.set_xticks(np.arange(-300, 301, 50))\nax.set_xticklabels(np.arange(-3, 3.1, 0.5))\nplt.show()\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u51fa\u529b"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{alt:"acorr",src:n(2980).Z,width:"386",height:"248"}))),(0,l.kt)("h2",{id:"\u6a2a\u8ef8\u30e9\u30d9\u30eb\u3092\u975e\u8868\u793a\u306b\u8a2d\u5b9a"},"\u6a2a\u8ef8\u30e9\u30d9\u30eb\u3092\u975e\u8868\u793a\u306b\u8a2d\u5b9a"),(0,l.kt)("p",null,"\u6a2a\u8ef8\u30e9\u30d9\u30eb\u3092\u8a2d\u5b9a\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u7a7a\u914d\u5217\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3067\u304d\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'fig, ax = plt.subplots()\nax.acorr(x, maxlags=fs, usevlines=False, linestyle="-", marker=None, lw=1)\nax.set_xticklabels([])\nplt.show()\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u51fa\u529b:"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{alt:"acorr",src:n(1084).Z,width:"386",height:"236"}))))}m.isMDXComponent=!0},7930:function(e,t,n){t.Z=n.p+"assets/images/acorr-01-cc99894b8b837f7a8067df257ddedb4b.png"},1084:function(e,t,n){t.Z=n.p+"assets/images/acorr-02-de26d21e8c97b9fb22fcf09ea4fa36a3.png"},2980:function(e,t,n){t.Z=n.p+"assets/images/acorr-03-968aa3ea6e47765ddd78ef98ce513035.png"},134:function(e,t,n){t.Z=n.p+"assets/images/acorr-62725bba89b72a83a62fd657d2779496.png"},8715:function(e,t,n){t.Z=n.p+"assets/images/signal-fb91aefc80cda8c82640dcb0baf7fc5e.png"}}]);