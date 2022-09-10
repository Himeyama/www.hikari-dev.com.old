"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[763],{5868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));a(1839);const s={title:"JavaScript \u306e\u30e1\u30e2",tags:["JavaScript"]},l=void 0,o={permalink:"/blog/2022/06/27/js",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-06-27-js.md",source:"@site/blog/2022-06-27-js.md",title:"JavaScript \u306e\u30e1\u30e2",description:"\u914d\u5217",date:"2022-06-27T00:00:00.000Z",formattedDate:"2022\u5e746\u670827\u65e5",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:2.02,hasTruncateMarker:!1,authors:[],frontMatter:{title:"JavaScript \u306e\u30e1\u30e2",tags:["JavaScript"]},prevItem:{title:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u5206\u985e\u554f\u984c\u3092\u3056\u307e\u3056\u307e\u306a\u30e2\u30c7\u30eb\u3067\u8a66\u3059",permalink:"/blog/2022/07/03/classifier"},nextItem:{title:"Ubuntu \u306b Docker \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",permalink:"/blog/2022/06/26/how-to-install-docker"}},i={authorsImageUrls:[]},m=[{value:"\u914d\u5217",id:"\u914d\u5217",level:2},{value:"\u914d\u5217\u306e\u30b3\u30d4\u30fc",id:"\u914d\u5217\u306e\u30b3\u30d4\u30fc",level:3},{value:"\u672b\u5c3e\u306e\u5024",id:"\u672b\u5c3e\u306e\u5024",level:3},{value:"\u914d\u5217\u3092\u53d6\u308a\u51fa\u3059",id:"\u914d\u5217\u3092\u53d6\u308a\u51fa\u3059",level:3},{value:"\u6570\u5217\u306e\u4f5c\u6210 (\u3044\u308f\u3086\u308b range)",id:"\u6570\u5217\u306e\u4f5c\u6210-\u3044\u308f\u3086\u308b-range",level:3},{value:"for-of",id:"for-of",level:3},{value:"map",id:"map",level:3},{value:"\u3059\u3079\u3066\u96f6\u306e\u914d\u5217 (zeros)",id:"\u3059\u3079\u3066\u96f6\u306e\u914d\u5217-zeros",level:3},{value:"\u5408\u8a08 (sum)",id:"\u5408\u8a08-sum",level:3},{value:"\u5e73\u5747 (mean)",id:"\u5e73\u5747-mean",level:3},{value:"\u6587\u5b57\u5217",id:"\u6587\u5b57\u5217",level:2},{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30ea\u30c6\u30e9\u30eb",id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30ea\u30c6\u30e9\u30eb",level:3},{value:"\u6570\u5024",id:"\u6570\u5024",level:2},{value:"\u6587\u5b57\u5217\u3092\u6570\u5024\u306b\u5909\u63db",id:"\u6587\u5b57\u5217\u3092\u6570\u5024\u306b\u5909\u63db",level:3},{value:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",id:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",level:3},{value:"\u65e5\u4ed8",id:"\u65e5\u4ed8",level:2}],u={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u914d\u5217"},"\u914d\u5217"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f8b: ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]"))),(0,r.kt)("h3",{id:"\u914d\u5217\u306e\u30b3\u30d4\u30fc"},"\u914d\u5217\u306e\u30b3\u30d4\u30fc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"// \u53c2\u7167\u6e21\u3057\nlet a = [1, 2, 3]\nlet b = a\nb[0] = -1\na // [-1, 2, 3]\n\n// \u30b3\u30d4\u30fc\na = [1, 2, 3]\nb = a.slice()\nb[0] = -1\na // [1, 2, 3]\nb // [-1, 2, 3]\n")),(0,r.kt)("h3",{id:"\u672b\u5c3e\u306e\u5024"},"\u672b\u5c3e\u306e\u5024"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"let a = [1, 2, 3]\na.at(-1)\n")),(0,r.kt)("h3",{id:"\u914d\u5217\u3092\u53d6\u308a\u51fa\u3059"},"\u914d\u5217\u3092\u53d6\u308a\u51fa\u3059"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"let a = [1, 2, 3, 4, 5]\na.slice(2) // [3, 4, 5]\n// \u6ce8\u610f\na.slice(2, -1) // [3, 4]\n")),(0,r.kt)("h3",{id:"\u6570\u5217\u306e\u4f5c\u6210-\u3044\u308f\u3086\u308b-range"},"\u6570\u5217\u306e\u4f5c\u6210 (\u3044\u308f\u3086\u308b range)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"const range = (start, stop, step) =>\n  Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));\n\nrange(0, 10, 1) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n")),(0,r.kt)("h3",{id:"for-of"},"for-of"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"for(let c of ['a', 'b', 'c']){\n  console.log(c)\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u7d50\u679c"',title:'"\u7d50\u679c"'},"a\nb\nc\n")),(0,r.kt)("h3",{id:"map"},"map"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"let a = [1, 2, 3].map(x => x ** 2)\n// [2, 4, 6]\n")),(0,r.kt)("h3",{id:"\u3059\u3079\u3066\u96f6\u306e\u914d\u5217-zeros"},"\u3059\u3079\u3066\u96f6\u306e\u914d\u5217 (zeros)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"Array.zeros = (n) => Array.from({ length: n}, () => 0);\n\nArray.zeros(5) // [0, 0, 0, 0, 0]\n")),(0,r.kt)("h3",{id:"\u5408\u8a08-sum"},"\u5408\u8a08 (sum)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"Array.prototype.sum = function(){ return this.reduce((prev, curr) => prev + curr, 0) }\n\n[1, 2, 3, 4].sum() // 10\n")),(0,r.kt)("h3",{id:"\u5e73\u5747-mean"},"\u5e73\u5747 (mean)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"Array.prototype.mean = function(){ return this.reduce((prev, curr) => prev + curr, 0) / this.length }\n\n[1, 2, 3, 4].mean() // 2.5\n")),(0,r.kt)("h2",{id:"\u6587\u5b57\u5217"},"\u6587\u5b57\u5217"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f8b: ",(0,r.kt)("inlineCode",{parentName:"p"},'"text"'))),(0,r.kt)("h3",{id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30ea\u30c6\u30e9\u30eb"},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30ea\u30c6\u30e9\u30eb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'let a = 100\n`${a / 10}` // "10"\n')),(0,r.kt)("h2",{id:"\u6570\u5024"},"\u6570\u5024"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f8b: ",(0,r.kt)("inlineCode",{parentName:"p"},"1"))),(0,r.kt)("h3",{id:"\u6587\u5b57\u5217\u3092\u6570\u5024\u306b\u5909\u63db"},"\u6587\u5b57\u5217\u3092\u6570\u5024\u306b\u5909\u63db"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"parseInt('100') // 100 \nparseFloat('100.1') // 100.1\n")),(0,r.kt)("h3",{id:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'// \u5c0f\u6570\u70b9\u4ee5\u4e0b 3 \u6841\n(1.2).toFixed(3) // "1.200"\n')),(0,r.kt)("h2",{id:"\u65e5\u4ed8"},"\u65e5\u4ed8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'let today = new Date\n\ntoday.toDateString() // "Sat Jan 01 2022"\ntoday.toISOString() // "2021-12-31T15:00:00.000Z"\ntoday.toLocaleDateString() // "2022/1/1"\ntoday.toLocaleString() // "2022/1/1 0:00:00" \ntoday.toLocaleTimeString() // "0:00:00"\ntoday.toString() // "Sat Jan 01 2022 00:00:00 GMT+0900 (\u65e5\u672c\u6a19\u6e96\u6642)"\ntoday.toTimeString() // "00:00:00 GMT+0900 (\u65e5\u672c\u6a19\u6e96\u6642)" \ntoday.toUTCString() // "Fri, 31 Dec 2021 15:00:00 GMT"\n')))}p.isMDXComponent=!0}}]);