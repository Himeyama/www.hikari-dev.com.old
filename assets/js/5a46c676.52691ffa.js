"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u4ee4\u548c 5 \u5e74\u5ea6 \u5927\u5b66\u5165\u5b66\u5171\u901a\u30c6\u30b9\u30c8\u30ab\u30a6\u30f3\u30c8\u30c0\u30a6\u30f3",tags:["React","JavaScript"]},c=void 0,i={unversionedId:"center-r5",id:"center-r5",title:"\u4ee4\u548c 5 \u5e74\u5ea6 \u5927\u5b66\u5165\u5b66\u5171\u901a\u30c6\u30b9\u30c8\u30ab\u30a6\u30f3\u30c8\u30c0\u30a6\u30f3",description:"",source:"@site/docs/center-r5.md",sourceDirName:".",slug:"/center-r5",permalink:"/docs/center-r5",draft:!1,tags:[{label:"React",permalink:"/docs/tags/react"},{label:"JavaScript",permalink:"/docs/tags/java-script"}],version:"current",frontMatter:{title:"\u4ee4\u548c 5 \u5e74\u5ea6 \u5927\u5b66\u5165\u5b66\u5171\u901a\u30c6\u30b9\u30c8\u30ab\u30a6\u30f3\u30c8\u30c0\u30a6\u30f3",tags:["React","JavaScript"]},sidebar:"defaultSidebar",next:{title:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",permalink:"/docs/"}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers live",showLineNumbers:!0,live:!0},'function Clock(props) {\n  const [date, setDate] = useState("");\n  \n  useEffect(() => {\n    var timerID = setInterval(() => countdown(), 0.016);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function countdown() {\n    time_left = (new Date(2023, 0, 14, 9, 30, 0) - new Date()) / 1000;\n    ms = time_left - parseInt(time_left) // \u30df\u30ea\u79d2\n    s = parseInt(time_left) % 60\n    d = parseInt(time_left / 86400)\n    h = parseInt((time_left - d * 86400) / 3600)\n    m = parseInt((time_left - d * 86400 - h * 3600) / 60)\n    setDate(`${d} \u65e5 ${h} \u6642\u9593 ${m} \u5206 ${s} \u79d2`);\n  }\n\n  return (\n    <div>\n      <p>\u4ee4\u548c 5 \u5e74\u5ea6 \u5927\u5b66\u5165\u5b66\u5171\u901a\u30c6\u30b9\u30c8 (\u4ee4\u548c 5 \u5e74 1 \u6708 14 \u65e5 (\u571f) 9:30) \u307e\u3067\u3042\u3068\u3001</p>\n      <h2>\u6b8b\u308a {date}</h2>\n    </div>\n  );\n}\n')))}u.isMDXComponent=!0}}]);