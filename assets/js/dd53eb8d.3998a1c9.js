"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6222],{6918:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));t(1839);const l={title:"Rust \u3067\u4e71\u6570\u306e\u751f\u6210",tags:["Rust","\u4e71\u6570"]},i=void 0,s={permalink:"/blog/2022/11/27/rust-rand",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-11-27-rust-rand/index.md",source:"@site/blog/2022-11-27-rust-rand/index.md",title:"Rust \u3067\u4e71\u6570\u306e\u751f\u6210",description:"\u6ce8\u610f: \u30af\u30ec\u30fc\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u9055\u3046\u3068\u3001\u95a2\u6570\u3082\u7570\u306a\u308a\u307e\u3059\u3002",date:"2022-11-27T00:00:00.000Z",formattedDate:"2022\u5e7411\u670827\u65e5",tags:[{label:"Rust",permalink:"/blog/tags/rust"},{label:"\u4e71\u6570",permalink:"/blog/tags/\u4e71\u6570"}],readingTime:1.095,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Rust \u3067\u4e71\u6570\u306e\u751f\u6210",tags:["Rust","\u4e71\u6570"]},prevItem:{title:"CUDA \u306e\u30b0\u30ea\u30c3\u30c9\u6570\u3084\u30d6\u30ed\u30c3\u30af\u6570\u3084\u30b9\u30ec\u30c3\u30c9\u6570\u306e\u6c7a\u3081\u65b9\u3068\u30e1\u30e2",permalink:"/blog/2022/12/17/cuda-grid"},nextItem:{title:"Matplotlib \u306e\u65e5\u672c\u8a9e\u8c46\u8150\u6587\u5b57\u5316\u3051\u306e\u5bfe\u51e6\u6cd5",permalink:"/blog/2022/11/24/mojibake-plt"}},g={authorsImageUrls:[]},d=[{value:"\u4f9d\u5b58\u3059\u308b\u30af\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0",id:"\u4f9d\u5b58\u3059\u308b\u30af\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0",level:2},{value:"\u4e00\u69d8\u4e71\u6570\u3092\u751f\u6210\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f8b",id:"\u4e00\u69d8\u4e71\u6570\u3092\u751f\u6210\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f8b",level:2},{value:"\u6b63\u898f\u4e71\u6570\u3092\u751f\u6210\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f8b",id:"\u6b63\u898f\u4e71\u6570\u3092\u751f\u6210\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f8b",level:2},{value:"\u6307\u5b9a\u3057\u305f\u5206\u5e03\u306b\u5f93\u3046\u4e71\u6570",id:"\u6307\u5b9a\u3057\u305f\u5206\u5e03\u306b\u5f93\u3046\u4e71\u6570",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:d};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6ce8\u610f: \u30af\u30ec\u30fc\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u9055\u3046\u3068\u3001\u95a2\u6570\u3082\u7570\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u4f9d\u5b58\u3059\u308b\u30af\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0"},"\u4f9d\u5b58\u3059\u308b\u30af\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rand")," \u306b\u4f9d\u5b58\u3059\u308b\u306e\u3067\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo add rand\n")),(0,r.kt)("h2",{id:"\u4e00\u69d8\u4e71\u6570\u3092\u751f\u6210\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f8b"},"\u4e00\u69d8\u4e71\u6570\u3092\u751f\u6210\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use rand::Rng;\n\nfn main(){\n    let mut rng = rand::thread_rng();\n\n    // \u6d6e\u52d5\u5c0f\u6570\u70b9\u6570\n    let r: f64 = rng.gen_range(0.0..10000.0);\n    println!("{}", r);\n\n    // \u6574\u6570\n    let r: i32 = rng.gen_range(0..10000);\n    println!("{}", r);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo run\n    Finished dev [unoptimized + debuginfo] target(s) in 0.00s\n     Running `target/debug/test`\n9464.07133934519\n9606\n")),(0,r.kt)("h2",{id:"\u6b63\u898f\u4e71\u6570\u3092\u751f\u6210\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f8b"},"\u6b63\u898f\u4e71\u6570\u3092\u751f\u6210\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use rand::Rng;\n\nfn main(){\n    let mut rng = rand::thread_rng();\n\n    let r: f64 = rng.gen();\n    println!("{}", r);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo run\n   Compiling alg2opt v0.1.0 (/home/hikari/2-opt/alg2opt)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.26s\n     Running `target/debug/test`\n0.34703657185118175\n")),(0,r.kt)("h2",{id:"\u6307\u5b9a\u3057\u305f\u5206\u5e03\u306b\u5f93\u3046\u4e71\u6570"},"\u6307\u5b9a\u3057\u305f\u5206\u5e03\u306b\u5f93\u3046\u4e71\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use rand::Rng;\nuse rand::distributions::Uniform;\n\nfn main(){\n    let mut rng = rand::thread_rng();\n\n    let r: f64 = rng.sample(Uniform::new(10.0, 15.0));\n    println!("{}", r);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo run\n   Compiling alg2opt v0.1.0 (/home/hikari/2-opt/alg2opt)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.26s\n     Running `target/debug/test`\n12.13344856630783\n")),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/rand/0.8.5/rand/trait.Rng.html"},"https://docs.rs/rand/0.8.5/rand/trait.Rng.html")))}p.isMDXComponent=!0}}]);