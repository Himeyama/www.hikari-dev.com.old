"use strict";(self.webpackChunkwww_hikari_dev_com=self.webpackChunkwww_hikari_dev_com||[]).push([[9557],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72687:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"cublas \u306e\u4f7f\u3044\u65b9\u30e1\u30e2",tags:["cublas","GPU","C"]},c=void 0,u={permalink:"/2022/05/20/cublas",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-05-20-cublas.md",source:"@site/blog/2022-05-20-cublas.md",title:"cublas \u306e\u4f7f\u3044\u65b9\u30e1\u30e2",description:"\u3053\u306e\u8a18\u4e8b\u306f\u66f8\u304d\u304b\u3051\u3067\u3059\u3002",date:"2022-05-20T00:00:00.000Z",formattedDate:"2022\u5e745\u670820\u65e5",tags:[{label:"cublas",permalink:"/tags/cublas"},{label:"GPU",permalink:"/tags/gpu"},{label:"C",permalink:"/tags/c"}],readingTime:.5,truncated:!1,authors:[],frontMatter:{title:"cublas \u306e\u4f7f\u3044\u65b9\u30e1\u30e2",tags:["cublas","GPU","C"]},prevItem:{title:"Matplotlib \u306e set_xticks \u306e\u4f7f\u3044\u3069\u3053\u308d (\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b)",permalink:"/2022/06/10/pltxticks"},nextItem:{title:"\u81ea\u4f5c gem \u306e\u4f5c\u308a\u65b9",permalink:"/2022/05/12/create-gem"}},p={authorsImageUrls:[]},s=[{value:"cublasSetMatrix()",id:"cublassetmatrix",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u3053\u306e\u8a18\u4e8b\u306f\u66f8\u304d\u304b\u3051\u3067\u3059\u3002")),(0,i.kt)("h2",{id:"cublassetmatrix"},"cublasSetMatrix()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"cublasStatus_t\ncublasSetMatrix(int rows, int cols, int elemSize,\n                const void *A, int lda, void *B, int ldb)\n")),(0,i.kt)("p",null,"\u30db\u30b9\u30c8\u30e1\u30e2\u30ea\u30fc\u4e0a\u306e\u884c\u5217 ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," \u304b\u3089\u3001GPU \u30e1\u30e2\u30ea\u30fc\u4e0a\u306b\u3042\u308b\u884c\u5217 ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," \u306b ",(0,i.kt)("inlineCode",{parentName:"p"},"row")," \xd7 ",(0,i.kt)("inlineCode",{parentName:"p"},"col")," \u306e\u8981\u7d20\u3092\u30b3\u30d4\u30fc\u3059\u308b\u95a2\u6570\u3002\n\u5404\u8981\u7d20\u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"elemSize")," \u30d0\u30a4\u30c8\u3067\u3042\u308a\u3001\u884c\u5217\u306f\u5217\u512a\u5148\u3067\u683c\u7d0d\u3055\u308c\u3001\n\u5148\u982d\u306e\u6b21\u5143\u306f\u305d\u308c\u305e\u308c ",(0,i.kt)("inlineCode",{parentName:"p"},"lda"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ldb")," \u3067\u6307\u5b9a\u3059\u308b\u3002"),(0,i.kt)("p",null,"\u53c2\u8003: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/cublas/index.html#cublassetmatrix"},"https://docs.nvidia.com/cuda/cublas/index.html#cublassetmatrix")))}f.isMDXComponent=!0}}]);