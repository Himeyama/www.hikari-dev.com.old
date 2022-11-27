"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8298],{2964:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var l=a(7462),n=(a(7294),a(3905));a(1839);const p={title:"Matplotlib \u306e\u65e5\u672c\u8a9e\u8c46\u8150\u6587\u5b57\u5316\u3051\u306e\u5bfe\u51e6\u6cd5",tags:["Matplotlib","pyplot","python"]},i=void 0,o={permalink:"/en/blog/2022/11/24/mojibake-plt",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-11-24-mojibake-plt/index.md",source:"@site/blog/2022-11-24-mojibake-plt/index.md",title:"Matplotlib \u306e\u65e5\u672c\u8a9e\u8c46\u8150\u6587\u5b57\u5316\u3051\u306e\u5bfe\u51e6\u6cd5",description:"Matplotlib \u306e\u65e5\u672c\u8a9e\u306e\u8c46\u8150\u6587\u5b57\u5316\u3051\u306e\u5bfe\u51e6\u6cd5\u3092",date:"2022-11-24T00:00:00.000Z",formattedDate:"November 24, 2022",tags:[{label:"Matplotlib",permalink:"/en/blog/tags/matplotlib"},{label:"pyplot",permalink:"/en/blog/tags/pyplot"},{label:"python",permalink:"/en/blog/tags/python"}],readingTime:1.675,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Matplotlib \u306e\u65e5\u672c\u8a9e\u8c46\u8150\u6587\u5b57\u5316\u3051\u306e\u5bfe\u51e6\u6cd5",tags:["Matplotlib","pyplot","python"]},prevItem:{title:"Rust \u3067\u4e71\u6570\u306e\u751f\u6210",permalink:"/en/blog/2022/11/27/rust-rand"},nextItem:{title:"\u73fe\u5728\u306e\u30d1\u30bd\u30b3\u30f3\u5468\u308a\u306e\u74b0\u5883\u307e\u3068\u3081",permalink:"/en/blog/2022/07/15/pcenv"}},s={authorsImageUrls:[]},d=[{value:"\u30c7\u30fc\u30bf\u3092\u7528\u610f\u3059\u308b",id:"\u30c7\u30fc\u30bf\u3092\u7528\u610f\u3059\u308b",level:2},{value:"\u30b0\u30e9\u30d5\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b",id:"\u30b0\u30e9\u30d5\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b",level:2},{value:"\u5bfe\u51e6\u6cd5",id:"\u5bfe\u51e6\u6cd5",level:2}],r={toc:d};function m(t){let{components:e,...p}=t;return(0,n.kt)("wrapper",(0,l.Z)({},r,p,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Matplotlib \u306e\u65e5\u672c\u8a9e\u306e\u8c46\u8150\u6587\u5b57\u5316\u3051\u306e\u5bfe\u51e6\u6cd5\u3092\n\u65e5\u672c\u306e\u90fd\u9053\u5e9c\u770c\u5225\u4eba\u53e3\u306e\u30b0\u30e9\u30d5\u3092\u4f8b\u306b\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30c7\u30fc\u30bf\u3092\u7528\u610f\u3059\u308b"},"\u30c7\u30fc\u30bf\u3092\u7528\u610f\u3059\u308b"),(0,n.kt)("p",null,"\u307e\u305a\u3001\u30c7\u30fc\u30bf\u3092\u7528\u610f\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.e-stat.go.jp/dbview?sid=0003445078"},"https://www.e-stat.go.jp/dbview?sid=0003445078")),(0,n.kt)("p",null,"\u56fd\u52e2\u8abf\u67fb\u306e\u30b5\u30a4\u30c8\u304b\u3089\u3001\n\u300c\u56fd\u52e2\u8abf\u67fb \u4ee4\u548c\uff12\u5e74\u56fd\u52e2\u8abf\u67fb \u4eba\u53e3\u7b49\u57fa\u672c\u96c6\u8a08\u3000\uff08\u4e3b\u306a\u5185\u5bb9\uff1a\u7537\u5973\u30fb\u5e74\u9f62\u30fb\u914d\u5076\u95a2\u4fc2\uff0c\u4e16\u5e2f\u306e\u69cb\u6210\uff0c\u4f4f\u5c45\u306e\u72b6\u614b\uff0c\u6bcd\u5b50\u30fb\u7236\u5b50\u4e16\u5e2f\uff0c\u56fd\u7c4d\u306a\u3069\uff09\u300d\u306e CSV \u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nfrom sklearn.datasets import load_wine\nimport pandas as pd\n\ndf = pd.read_csv("FEH_00200521_221124023823.csv", encoding="shift_jis")\ndf = df[(df["area_code"].str.contains("\\d\\d000")) & (df["\u7537\u5973"] == "\u7dcf\u6570")].iloc[1:, :]\ndf = df.reset_index().drop("index", axis=1)\ndf["value"] = df["value"].astype(int)\n')),(0,n.kt)("h2",{id:"\u30b0\u30e9\u30d5\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b"},"\u30b0\u30e9\u30d5\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b"),(0,n.kt)("p",null,"\u6587\u5b57\u5316\u3051\u3057\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'fig, ax = plt.subplots(figsize=(4.8, 9.2))\ndf.plot(kind="barh", x="\u5168\u56fd\uff0c\u90fd\u9053\u5e9c\u770c\uff0c\u5e02\u533a\u753a\u6751\uff082000\u5e74\u5e02\u533a\u753a\u6751\u542b\u3080\uff09", y="value", label="\u4eba\u53e3", ax=ax)\nplt.show()\n')),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5157).Z,width:"1440",height:"2760"})),(0,n.kt)("h2",{id:"\u5bfe\u51e6\u6cd5"},"\u5bfe\u51e6\u6cd5"),(0,n.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 ",(0,n.kt)("a",{parentName:"p",href:"https://matplotlib.org/stable/api/text_api.html"},"https://matplotlib.org/stable/api/text_api.html"),"\n\u306b\u5bfe\u3057\u3066\u65e5\u672c\u8a9e\u30d5\u30a9\u30f3\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'.set_fontfamily("IPAexGothic")')," \u3067\u8a2d\u5b9a\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'fig, ax = plt.subplots(figsize=(4.8, 9.2))\ndf.plot(kind="barh", x="\u5168\u56fd\uff0c\u90fd\u9053\u5e9c\u770c\uff0c\u5e02\u533a\u753a\u6751\uff082000\u5e74\u5e02\u533a\u753a\u6751\u542b\u3080\uff09", y="value", label="\u4eba\u53e3", ax=ax)\nfor text in ax.get_yticklabels():\n    text.set_fontfamily("IPAexGothic")\nax.get_legend().get_texts()[0].set_fontfamily("IPAexGothic")\nax.set_ylabel(ax.get_ylabel()).set_fontfamily("IPAexGothic")\n')),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9090).Z,width:"1440",height:"2760"})),(0,n.kt)("p",null,"IPAexGothic \u306e\u826f\u304f\u306a\u3044\u3068\u3053\u308d\u306f\u592a\u5b57\u304c\u4f7f\u3048\u306a\u3044\u3068\u3053\u308d\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u306e 'sans-serif' \u306f\u592a\u5b57\u8868\u793a\u53ef\u80fd\u306a\u306e\u3067\u3001\n\u592a\u5b57\u3092\u4f7f\u7528\u3057\u305f\u3044\u306e\u306a\u3089\u3070\u3001\u65e5\u672c\u8a9e\u306b\u305b\u305a\u305d\u306e\u307e\u307e\u304c\u3044\u3044\u304b\u3082\u3002"))}m.isMDXComponent=!0},9090:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/\u65e5\u672c\u8a9e-8b56dba143b43090c381e4d8fa03f665.png"},5157:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/\u65e5\u672c\u8a9e\u8c46\u8150-32bbe769d3b7ce92a1352c1df900a43b.png"}}]);