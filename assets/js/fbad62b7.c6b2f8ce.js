"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8193],{94481:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var l=a(87462),n=(a(67294),a(3905));a(8209);const s={title:"Matplotlib \u306e set_xticks \u306e\u4f7f\u3044\u3069\u3053\u308d (\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b)",tags:["Python","acorr","xcorr","Matplotlib","set_xticks","set_xticklabelss"]},p=void 0,i={permalink:"/blog/2022/06/10/pltxticks",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-06-10-pltxticks/index.md",source:"@site/blog/2022-06-10-pltxticks/index.md",title:"Matplotlib \u306e set_xticks \u306e\u4f7f\u3044\u3069\u3053\u308d (\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b)",description:"\u4fe1\u53f7\u306e\u751f\u6210\u3068\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b",date:"2022-06-10T00:00:00.000Z",formattedDate:"2022\u5e746\u670810\u65e5",tags:[{label:"Python",permalink:"/blog/tags/python"},{label:"acorr",permalink:"/blog/tags/acorr"},{label:"xcorr",permalink:"/blog/tags/xcorr"},{label:"Matplotlib",permalink:"/blog/tags/matplotlib"},{label:"set_xticks",permalink:"/blog/tags/set-xticks"},{label:"set_xticklabelss",permalink:"/blog/tags/set-xticklabelss"}],readingTime:2.35,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Matplotlib \u306e set_xticks \u306e\u4f7f\u3044\u3069\u3053\u308d (\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b)",tags:["Python","acorr","xcorr","Matplotlib","set_xticks","set_xticklabelss"]},prevItem:{title:"Python \u3067\u30ea\u30b9\u30c8\u306b\u5bfe\u3057\u3066 * \u3092\u4f7f\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u4e8b\u9805",permalink:"/blog/2022/06/11/pyinplace"},nextItem:{title:"cublas \u306e\u4f7f\u3044\u65b9\u30e1\u30e2",permalink:"/blog/2022/05/20/cublas"}},o={authorsImageUrls:[]},r=[{value:"\u4fe1\u53f7\u306e\u751f\u6210\u3068\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b",id:"\u4fe1\u53f7\u306e\u751f\u6210\u3068\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b",level:2},{value:"\u6a2a\u8ef8\u306e\u66f8\u304d\u63db\u3048",id:"\u6a2a\u8ef8\u306e\u66f8\u304d\u63db\u3048",level:2},{value:"\u76ee\u76db\u308a\u306e\u5e45\u3092\u5909\u66f4",id:"\u76ee\u76db\u308a\u306e\u5e45\u3092\u5909\u66f4",level:2},{value:"\u6a2a\u8ef8\u30e9\u30d9\u30eb\u3092\u975e\u8868\u793a\u306b\u8a2d\u5b9a",id:"\u6a2a\u8ef8\u30e9\u30d9\u30eb\u3092\u975e\u8868\u793a\u306b\u8a2d\u5b9a",level:2}],k={toc:r},c="wrapper";function m(t){let{components:e,...s}=t;return(0,n.kt)(c,(0,l.Z)({},k,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4fe1\u53f7\u306e\u751f\u6210\u3068\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b"},"\u4fe1\u53f7\u306e\u751f\u6210\u3068\u81ea\u5df1\u76f8\u95a2\u306e\u4f8b"),(0,n.kt)("p",null,"\u4f8b\u3068\u3057\u3066\u3001\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u6ce2\u6570 300 \u3067 3 \u79d2\u306e\u77e9\u5f62\u6ce2\u3092\u8003\u3048\u308b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'import numpy as np\nimport matplotlib.pyplot as plt\n\n# \u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u6570\nn: int = 900\n\n# \u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u6ce2\u6570\nfs: int = 300\n\nprint(\n    f"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u6570: {n:d}\\n"\n    f"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u6ce2\u6570: {fs:d}\\n"\n    f"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u6642\u9593: {n/fs:.2f} \u79d2"\n)\n\n# \u6642\u9593\u306e\u914d\u5217\nt: np.ndarray = np.arange(n) / fs\n\n# \u4fe1\u53f7\u306e\u5468\u6ce2\u6570 [Hz]\nf: float = 2\n\n# \u4fe1\u53f7\nx = np.sum([np.sin(f * 2 * np.pi * (2 * i + 1) * t) / (2 * i + 1) for i in range(5)], axis=0)\n\nfig, ax = plt.subplots()\nax.plot(t, x)\nplt.show()\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u51fa\u529b:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre"},"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u6570: 900\n\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u6ce2\u6570: 300\n\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u6642\u9593: 3.00 \u79d2\n")),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"signal",src:a(88715).Z,width:"386",height:"250"}))),(0,n.kt)("p",null,"\u4f8b\u3048\u3070\u3053\u306e\u4fe1\u53f7\u306b\u3064\u3044\u3066\u3001\n1 \u79d2\u306e\u81ea\u5df1\u76f8\u95a2\u3092\u3068\u308b\u3068\u3001"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'fig, ax = plt.subplots()\nax.acorr(x, maxlags=fs, usevlines=False, linestyle="-", marker=None, lw=1)\nplt.show()\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u51fa\u529b:"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"acorr",src:a(40134).Z,width:"386",height:"248"}))),(0,n.kt)("p",null,"\u3068\u6a2a\u8ef8\u6642\u9593\u304c\u5b9f\u969b\u306e\u6642\u9593\u3068\u306f\u7570\u306a\u308b\u3002"),(0,n.kt)("h2",{id:"\u6a2a\u8ef8\u306e\u66f8\u304d\u63db\u3048"},"\u6a2a\u8ef8\u306e\u66f8\u304d\u63db\u3048"),(0,n.kt)("p",null,"\u4e0a\u8a18\u306e\u65b9\u6cd5\u3067\u306f\u6a2a\u8ef8\u306e\u6642\u9593\u304c\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3068\u306a\u3063\u3066\u3057\u307e\u3044\u3001\u6642\u9593\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u306a\u3044\u3002"),(0,n.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"matplotlib.axes.Axes.set_xticks")," \u3068 ",(0,n.kt)("inlineCode",{parentName:"p"},"matplotlib.axes.Axes.set_xticklabels")," \u3092\u8a2d\u5b9a\u3057\u3001\u4f8b\u3048\u3070\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u3066\u6a2a\u8ef8\u306e\u6570\u5b57\u3092\u66f8\u304d\u63db\u3048\u308b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'fig, ax = plt.subplots()\nax.acorr(x, maxlags=fs, usevlines=False, linestyle="-", marker=None, lw=1)\nax.set_xticks(np.arange(-300, 301, 100))\nax.set_xticklabels(np.arange(-3, 4))\nplt.show()\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u51fa\u529b:"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"acorr",src:a(47930).Z,width:"386",height:"248"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"set_xticks")," \u306f\u6a2a\u8ef8\u76ee\u76db\u308a\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3067\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"set_xticklabels")," \u306f\u76ee\u76db\u308a\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306b\u5bfe\u5fdc\u3057\u305f\u30e9\u30d9\u30eb\u3067\u3042\u308b\u3002"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"set_xticks")," \u3067 ","[-300, 200, ..., 300]"," \u3092\u8a2d\u5b9a\u3057\u3066\u304a\u308a\u3001\n",(0,n.kt)("inlineCode",{parentName:"p"},"set_xticklabels")," \u3067 ","[-3, -2, ..., 3]"," \u3092\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u3002"),(0,n.kt)("h2",{id:"\u76ee\u76db\u308a\u306e\u5e45\u3092\u5909\u66f4"},"\u76ee\u76db\u308a\u306e\u5e45\u3092\u5909\u66f4"),(0,n.kt)("p",null,"\u4e0a\u3068\u540c\u3058\u3088\u3046\u306b\u3001\n",(0,n.kt)("inlineCode",{parentName:"p"},"set_xticks")," \u3067 ","[-300, -250, ..., 300]"," \u3092\u8a2d\u5b9a\u3057\u3001\n",(0,n.kt)("inlineCode",{parentName:"p"},"set_xticklabels")," \u3067 ","[-3., -2.5, ..., 3.]"," \u3092\u8a2d\u5b9a\u3059\u308b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'fig, ax = plt.subplots()\nax.acorr(x, maxlags=fs, usevlines=False, linestyle="-", marker=None, lw=1)\nax.set_xticks(np.arange(-300, 301, 50))\nax.set_xticklabels(np.arange(-3, 3.1, 0.5))\nplt.show()\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u51fa\u529b"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"acorr",src:a(82980).Z,width:"386",height:"248"}))),(0,n.kt)("h2",{id:"\u6a2a\u8ef8\u30e9\u30d9\u30eb\u3092\u975e\u8868\u793a\u306b\u8a2d\u5b9a"},"\u6a2a\u8ef8\u30e9\u30d9\u30eb\u3092\u975e\u8868\u793a\u306b\u8a2d\u5b9a"),(0,n.kt)("p",null,"\u6a2a\u8ef8\u30e9\u30d9\u30eb\u3092\u8a2d\u5b9a\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u7a7a\u914d\u5217\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3067\u304d\u308b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'fig, ax = plt.subplots()\nax.acorr(x, maxlags=fs, usevlines=False, linestyle="-", marker=None, lw=1)\nax.set_xticklabels([])\nplt.show()\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u51fa\u529b:"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"acorr",src:a(81084).Z,width:"386",height:"236"}))))}m.isMDXComponent=!0},47930:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/acorr-01-cc99894b8b837f7a8067df257ddedb4b.png"},81084:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/acorr-02-de26d21e8c97b9fb22fcf09ea4fa36a3.png"},82980:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/acorr-03-968aa3ea6e47765ddd78ef98ce513035.png"},40134:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/acorr-62725bba89b72a83a62fd657d2779496.png"},88715:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/signal-fb91aefc80cda8c82640dcb0baf7fc5e.png"}}]);