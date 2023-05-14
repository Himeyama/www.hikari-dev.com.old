"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1835],{5889:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>r,toc:()=>N});var n=t(7462),s=(t(7294),t(3905));t(1839);const m={title:"CUDA \u306e\u30b0\u30ea\u30c3\u30c9\u6570\u3084\u30d6\u30ed\u30c3\u30af\u6570\u3084\u30b9\u30ec\u30c3\u30c9\u6570\u306e\u6c7a\u3081\u65b9\u3068\u30e1\u30e2",tags:["CUDA"]},p=void 0,r={permalink:"/en/blog/2022/12/17/cuda-grid",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-12-17-cuda-grid/index.md",source:"@site/blog/2022-12-17-cuda-grid/index.md",title:"CUDA \u306e\u30b0\u30ea\u30c3\u30c9\u6570\u3084\u30d6\u30ed\u30c3\u30af\u6570\u3084\u30b9\u30ec\u30c3\u30c9\u6570\u306e\u6c7a\u3081\u65b9\u3068\u30e1\u30e2",description:"- \u30b9\u30ec\u30c3\u30c9: \u4e00\u3064\u306e\u51e6\u7406",date:"2022-12-17T00:00:00.000Z",formattedDate:"December 17, 2022",tags:[{label:"CUDA",permalink:"/en/blog/tags/cuda"}],readingTime:1.615,hasTruncateMarker:!1,authors:[],frontMatter:{title:"CUDA \u306e\u30b0\u30ea\u30c3\u30c9\u6570\u3084\u30d6\u30ed\u30c3\u30af\u6570\u3084\u30b9\u30ec\u30c3\u30c9\u6570\u306e\u6c7a\u3081\u65b9\u3068\u30e1\u30e2",tags:["CUDA"]},prevItem:{title:"string (\u6587\u5b57\u5217) \u304b\u3089 MD5 (\u6587\u5b57\u5217) \u3092\u8fd4\u3059\u95a2\u6570 (C#)",permalink:"/en/blog/2023/05/14/cs-md5"},nextItem:{title:"Rust \u3067\u4e71\u6570\u306e\u751f\u6210",permalink:"/en/blog/2022/11/27/rust-rand"}},l={authorsImageUrls:[]},N=[],i={toc:N};function k(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u30b9\u30ec\u30c3\u30c9: \u4e00\u3064\u306e\u51e6\u7406"),(0,s.kt)("li",{parentName:"ul"},"\u30d6\u30ed\u30c3\u30af: \u30b9\u30ec\u30c3\u30c9\u306e\u96c6\u307e\u308a (\u30b9\u30ec\u30c3\u30c9\u3092 3 \u6b21\u5143\u306b\u914d\u7f6e)"),(0,s.kt)("li",{parentName:"ul"},"\u30b0\u30ea\u30c3\u30c9: \u30d6\u30ed\u30c3\u30af\u306e\u96c6\u307e\u308a (\u30d6\u30ed\u30c3\u30af\u3092 3 \u6b21\u5143\u306b\u914d\u7f6e)")),(0,s.kt)("p",null,"\u30b9\u30ec\u30c3\u30c9\u6570\u3001\u30d6\u30ed\u30c3\u30af\u6570\u3001\u30b0\u30ea\u30c3\u30c9\u6570\u306b\u306f\u4e0a\u9650\u304c\u3042\u308a\u3001\n",(0,s.kt)("inlineCode",{parentName:"p"},"deviceQuery")," \u30b3\u30de\u30f3\u30c9\u3067\u53d6\u5f97\u53ef\u80fd\u3002"),(0,s.kt)("p",null,"RTX3080\u3001CUDA 11.8 \u3067\u306f\u3001\u4ee5\u4e0b\u306e\u901a\u308a\u3060\u3063\u305f\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Maximum number of threads per block:           1024\nMax dimension size of a thread block (x,y,z): (1024, 1024, 64)\nMax dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)\n")),(0,s.kt)("p",null,"\u3053\u306e\u5834\u5408\u3001"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"1 \u3064\u306e\u30d6\u30ed\u30c3\u30af\u306e\u6700\u5927\u30b9\u30ec\u30c3\u30c9\u6570\u306f 1024"),(0,s.kt)("li",{parentName:"ul"},"\u30d6\u30ed\u30c3\u30af\u306e\u5f62\u72b6\u304c (1024, 1024, 64) \u5185\u306b\u53ce\u307e\u308b",(0,s.kt)("br",{parentName:"li"}),"\u3064\u307e\u308a\u30011 \u3064\u306e\u30d6\u30ed\u30c3\u30af\u306e\u5f62\u72b6\u304c (a, b, c) \u3068\u3059\u308b\u3068\u3001\n",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"1024")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"abc \\leq 1024")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ab"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1024")))))," \u304b\u3064 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"1024")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\leq 1024")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1024")))))," \u304b\u3064 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"1024")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b \\leq 1024")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1024")))))," \u304b\u3064 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"64")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c \\leq 64")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"64")))))," \u3092\u6e80\u305f\u3059\u3053\u3068\u3067\u3042\u308b\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u30b0\u30ea\u30c3\u30c9\u306e\u5f62\u72b6\u304c (2147483647, 65535, 65535) \u5185\u306b\u53ce\u307e\u308b",(0,s.kt)("br",{parentName:"li"}),"\u3064\u307e\u308a\u30011 \u3064\u306e\u30b0\u30ea\u30c3\u30c9\u306e\u5f62\u72b6\u304c (d, e, f) \u3068\u3059\u308b\u3068\u3001\n",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"2147483647"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mn",{parentName:"mrow"},"65535"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mn",{parentName:"mrow"},"65535")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"def \\leq 2147483647 \\times 65535 \\times 65535")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2147483647"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"65535"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"65535")))))," \u304b\u3064 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"2147483647")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d \\leq 2147483647")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2147483647")))))," \u304b\u3064 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"65535")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e \\leq 65535")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"65535")))))," \u304b\u3064 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"65535")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f \\leq 65535")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"65535")))))," \u3092\u6e80\u305f\u3059\u3053\u3068\u3067\u3042\u308b\u3002")),(0,s.kt)("p",null,"\u30b0\u30ea\u30c3\u30c9\u3068\u30d6\u30ed\u30c3\u30af\u306e\u5f62\u72b6\u3092\u5b9a\u7fa9\u3059\u308b\u578b\u306f ",(0,s.kt)("inlineCode",{parentName:"p"},"dim3")," \u3067\u3042\u308b\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u4f8b"),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <stdio.h>\n\n__global__ void func1(){\n    printf("%d, %d, %d\\n", threadIdx.x, threadIdx.y, threadIdx.z);\n}\n\n__global__ void func2(){\n    int i = threadIdx.x + blockDim.x * threadIdx.y + blockDim.x * blockDim.y * threadIdx.z;\n    printf("%d\\n", i);\n}\n\nint main(){\n    dim3 grid(1, 1, 1);\n    dim3 block(4, 8, 32);\n\n    func1<<<grid, block>>>();\n    func2<<<grid, block>>>();\n    cudaDeviceSynchronize();\n}\n'))))}k.isMDXComponent=!0}}]);