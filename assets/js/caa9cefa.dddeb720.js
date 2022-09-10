"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4553],{3750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=a(7462),l=(a(7294),a(3905));a(1839);const n={title:"git \u306e\u30e1\u30e2",tags:["git"]},r=void 0,o={permalink:"/blog/2022/07/05/git-memo",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-07-05-git-memo.md",source:"@site/blog/2022-07-05-git-memo.md",title:"git \u306e\u30e1\u30e2",description:"\u30d6\u30e9\u30f3\u30c1 (git branch / git checkout)",date:"2022-07-05T00:00:00.000Z",formattedDate:"2022\u5e747\u67085\u65e5",tags:[{label:"git",permalink:"/blog/tags/git"}],readingTime:.76,hasTruncateMarker:!1,authors:[],frontMatter:{title:"git \u306e\u30e1\u30e2",tags:["git"]},prevItem:{title:"C \u8a00\u8a9e\u3067\u884c\u5217 (\u305d\u306e 1)",permalink:"/blog/2022/07/09/c-matrix"},nextItem:{title:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u5206\u985e\u554f\u984c\u3092\u3056\u307e\u3056\u307e\u306a\u30e2\u30c7\u30eb\u3067\u8a66\u3059",permalink:"/blog/2022/07/03/classifier"}},g={authorsImageUrls:[]},c=[{value:"\u30d6\u30e9\u30f3\u30c1 (git branch / git checkout)",id:"\u30d6\u30e9\u30f3\u30c1-git-branch--git-checkout",level:2},{value:"\u30d6\u30e9\u30f3\u30c1\u306e\u5207\u308a\u66ff\u3048",id:"\u30d6\u30e9\u30f3\u30c1\u306e\u5207\u308a\u66ff\u3048",level:3},{value:"\u30d6\u30e9\u30f3\u30c1\u306e\u524a\u9664",id:"\u30d6\u30e9\u30f3\u30c1\u306e\u524a\u9664",level:3},{value:"\u7a7a\u306e\u30d6\u30e9\u30f3\u30c1\u4f5c\u6210",id:"\u7a7a\u306e\u30d6\u30e9\u30f3\u30c1\u4f5c\u6210",level:3},{value:"\u30ed\u30b0",id:"\u30ed\u30b0",level:2},{value:"\u30ed\u30b0\u3092\u8868\u793a",id:"\u30ed\u30b0\u3092\u8868\u793a",level:3},{value:"\u904e\u53bb\u306b\u623b\u308b",id:"\u904e\u53bb\u306b\u623b\u308b",level:2},{value:"\u904e\u53bb\u304b\u3089\u623b\u308b",id:"\u904e\u53bb\u304b\u3089\u623b\u308b",level:3},{value:"\u30b3\u30df\u30c3\u30c8\u3092\u53d6\u308a\u6d88\u3059 (git reset)",id:"\u30b3\u30df\u30c3\u30c8\u3092\u53d6\u308a\u6d88\u3059-git-reset",level:2}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u30d6\u30e9\u30f3\u30c1-git-branch--git-checkout"},"\u30d6\u30e9\u30f3\u30c1 (git branch / git checkout)"),(0,l.kt)("h3",{id:"\u30d6\u30e9\u30f3\u30c1\u306e\u5207\u308a\u66ff\u3048"},"\u30d6\u30e9\u30f3\u30c1\u306e\u5207\u308a\u66ff\u3048"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <\u30d6\u30e9\u30f3\u30c1\u540d>\n")),(0,l.kt)("h3",{id:"\u30d6\u30e9\u30f3\u30c1\u306e\u524a\u9664"},"\u30d6\u30e9\u30f3\u30c1\u306e\u524a\u9664"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -d <\u30d6\u30e9\u30f3\u30c1\u540d>\n")),(0,l.kt)("h3",{id:"\u7a7a\u306e\u30d6\u30e9\u30f3\u30c1\u4f5c\u6210"},"\u7a7a\u306e\u30d6\u30e9\u30f3\u30c1\u4f5c\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout --orphan=<\u30d6\u30e9\u30f3\u30c1\u540d>\ngit reset --hard\n")),(0,l.kt)("h2",{id:"\u30ed\u30b0"},"\u30ed\u30b0"),(0,l.kt)("h3",{id:"\u30ed\u30b0\u3092\u8868\u793a"},"\u30ed\u30b0\u3092\u8868\u793a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git log --decorate=full --graph --all\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"vscode \u3092\u4f7f\u3048\u308b\u306e\u306a\u3089\u3070\u3001\u62e1\u5f35\u6a5f\u80fd ",(0,l.kt)("inlineCode",{parentName:"p"},"Git Graph")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u3088\u3044\u3002")),(0,l.kt)("h2",{id:"\u904e\u53bb\u306b\u623b\u308b"},"\u904e\u53bb\u306b\u623b\u308b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u30b3\u30df\u30c3\u30c8 ID \u3092\u8abf\u3079\u308b\ngit log\n\ngit checkout <\u30b3\u30df\u30c3\u30c8 ID>\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u30b3\u30df\u30c3\u30c8 ID \u306f 4 \u6587\u5b57\u3067\u7701\u7565\u53ef")),(0,l.kt)("h3",{id:"\u904e\u53bb\u304b\u3089\u623b\u308b"},"\u904e\u53bb\u304b\u3089\u623b\u308b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <\u30d6\u30e9\u30f3\u30c1\u540d>\n")),(0,l.kt)("h2",{id:"\u30b3\u30df\u30c3\u30c8\u3092\u53d6\u308a\u6d88\u3059-git-reset"},"\u30b3\u30df\u30c3\u30c8\u3092\u53d6\u308a\u6d88\u3059 (git reset)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git reset --soft @^\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"@ \u306f HEAD \u3068\u540c\u3058\u3002\u76f4\u524d\u306e\u3082\u306e\u306f ^ \u3067\u8868\u3059\u3002")))}m.isMDXComponent=!0}}]);