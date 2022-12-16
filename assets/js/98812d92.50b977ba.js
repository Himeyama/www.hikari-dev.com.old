"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9557],{5242:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var l=a(7462),n=(a(7294),a(3905));a(1839);const i={title:"cublas \u306e\u4f7f\u3044\u65b9\u30e1\u30e2",tags:["cublas","GPU","C"]},s=void 0,r={permalink:"/blog/2022/05/20/cublas",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-05-20-cublas.md",source:"@site/blog/2022-05-20-cublas.md",title:"cublas \u306e\u4f7f\u3044\u65b9\u30e1\u30e2",description:"\u3053\u306e\u8a18\u4e8b\u306f\u66f8\u304d\u304b\u3051\u3067\u3059\u3002",date:"2022-05-20T00:00:00.000Z",formattedDate:"2022\u5e745\u670820\u65e5",tags:[{label:"cublas",permalink:"/blog/tags/cublas"},{label:"GPU",permalink:"/blog/tags/gpu"},{label:"C",permalink:"/blog/tags/c"}],readingTime:.5,hasTruncateMarker:!1,authors:[],frontMatter:{title:"cublas \u306e\u4f7f\u3044\u65b9\u30e1\u30e2",tags:["cublas","GPU","C"]},prevItem:{title:"Matplotlib \u306e set_xticks \u306e\u4f7f\u3044\u3069\u3053\u308d (\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b)",permalink:"/blog/2022/06/10/pltxticks"},nextItem:{title:"\u81ea\u4f5c gem \u306e\u4f5c\u308a\u65b9",permalink:"/blog/2022/05/12/create-gem"}},c={authorsImageUrls:[]},o=[{value:"cublasSetMatrix()",id:"cublassetmatrix",level:2}],m={toc:o};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u3053\u306e\u8a18\u4e8b\u306f\u66f8\u304d\u304b\u3051\u3067\u3059\u3002")),(0,n.kt)("h2",{id:"cublassetmatrix"},"cublasSetMatrix()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"cublasStatus_t\ncublasSetMatrix(int rows, int cols, int elemSize,\n                const void *A, int lda, void *B, int ldb)\n")),(0,n.kt)("p",null,"\u30db\u30b9\u30c8\u30e1\u30e2\u30ea\u30fc\u4e0a\u306e\u884c\u5217 ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," \u304b\u3089\u3001GPU \u30e1\u30e2\u30ea\u30fc\u4e0a\u306b\u3042\u308b\u884c\u5217 ",(0,n.kt)("inlineCode",{parentName:"p"},"B")," \u306b ",(0,n.kt)("inlineCode",{parentName:"p"},"row")," \xd7 ",(0,n.kt)("inlineCode",{parentName:"p"},"col")," \u306e\u8981\u7d20\u3092\u30b3\u30d4\u30fc\u3059\u308b\u95a2\u6570\u3002\n\u5404\u8981\u7d20\u306f ",(0,n.kt)("inlineCode",{parentName:"p"},"elemSize")," \u30d0\u30a4\u30c8\u3067\u3042\u308a\u3001\u884c\u5217\u306f\u5217\u512a\u5148\u3067\u683c\u7d0d\u3055\u308c\u3001\n\u5148\u982d\u306e\u6b21\u5143\u306f\u305d\u308c\u305e\u308c ",(0,n.kt)("inlineCode",{parentName:"p"},"lda"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"ldb")," \u3067\u6307\u5b9a\u3059\u308b\u3002"),(0,n.kt)("p",null,"\u53c2\u8003: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/cublas/index.html#cublassetmatrix"},"https://docs.nvidia.com/cuda/cublas/index.html#cublassetmatrix")))}p.isMDXComponent=!0}}]);