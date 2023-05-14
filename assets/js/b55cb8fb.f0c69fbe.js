"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1891],{8201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));n(1839);const i={title:"string (\u6587\u5b57\u5217) \u304b\u3089 MD5 (\u6587\u5b57\u5217) \u3092\u8fd4\u3059\u95a2\u6570 (C#)",tags:["C#","MD5"]},s=void 0,l={permalink:"/blog/2023/05/14/cs-md5",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2023-05-14-cs-md5/index.md",source:"@site/blog/2023-05-14-cs-md5/index.md",title:"string (\u6587\u5b57\u5217) \u304b\u3089 MD5 (\u6587\u5b57\u5217) \u3092\u8fd4\u3059\u95a2\u6570 (C#)",description:"\u4f7f\u7528\u3059\u308b\u95a2\u6570",date:"2023-05-14T00:00:00.000Z",formattedDate:"2023\u5e745\u670814\u65e5",tags:[{label:"C#",permalink:"/blog/tags/c"},{label:"MD5",permalink:"/blog/tags/md-5"}],readingTime:.385,hasTruncateMarker:!1,authors:[],frontMatter:{title:"string (\u6587\u5b57\u5217) \u304b\u3089 MD5 (\u6587\u5b57\u5217) \u3092\u8fd4\u3059\u95a2\u6570 (C#)",tags:["C#","MD5"]},nextItem:{title:"CUDA \u306e\u30b0\u30ea\u30c3\u30c9\u6570\u3084\u30d6\u30ed\u30c3\u30af\u6570\u3084\u30b9\u30ec\u30c3\u30c9\u6570\u306e\u6c7a\u3081\u65b9\u3068\u30e1\u30e2",permalink:"/blog/2022/12/17/cuda-grid"}},m={authorsImageUrls:[]},o=[{value:"\u4f7f\u7528\u3059\u308b\u95a2\u6570",id:"\u4f7f\u7528\u3059\u308b\u95a2\u6570",level:2},{value:"\u4f8b",id:"\u4f8b",level:2}],c={toc:o};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528\u3059\u308b\u95a2\u6570"},"\u4f7f\u7528\u3059\u308b\u95a2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"byte[] Encoding.UTF8.GetBytes(string)"),(0,a.kt)("br",{parentName:"li"}),"string \u304b\u3089 byte[] \u306b\u5909\u63db"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MD5 MD5.create()"),(0,a.kt)("br",{parentName:"li"}),"MD5 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u751f\u6210"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"byte[] md5.ComputeHash(byte[])"),(0,a.kt)("br",{parentName:"li"}),"byte[] \u304b\u3089 MD5 \u30cf\u30c3\u30b7\u30e5\u3092\u751f\u6210  ")),(0,a.kt)("h2",{id:"\u4f8b"},"\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'string str2MD5(string src)\n{\n    byte[] srcBytes = Encoding.UTF8.GetBytes(src);\n    string MD5src;\n    using (MD5 md5 = MD5.Create())\n    {\n        byte[] MD5srcBytes = md5.ComputeHash(srcBytes);\n        StringBuilder sb = new();\n        for (int i = 0; i < MD5srcBytes.Length; i++)\n            sb.Append(MD5srcBytes[i].ToString("x2"));\n        MD5src = sb.ToString();\n    }\n    return MD5src;\n}\n')))}d.isMDXComponent=!0}}]);