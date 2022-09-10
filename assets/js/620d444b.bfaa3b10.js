"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8416],{3028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(1839);const l={title:"\u307f\u3093\u306a\u306e\u81ea\u52d5\u7ffb\u8a33\uff20TexTra \u306e Web API \u3092\u53e9\u3044\u3066\u7ffb\u8a33\u3059\u308b\u7c21\u5358\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u3066\u307f\u305f",tags:["Ruby","TexTra","WebAPI","\u307f\u3093\u306a\u306e\u81ea\u52d5\u7ffb\u8a33"]},s=void 0,i={permalink:"/blog/2022/06/22/TexTra-ruby",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-06-22-TexTra-ruby/index.md",source:"@site/blog/2022-06-22-TexTra-ruby/index.md",title:"\u307f\u3093\u306a\u306e\u81ea\u52d5\u7ffb\u8a33\uff20TexTra \u306e Web API \u3092\u53e9\u3044\u3066\u7ffb\u8a33\u3059\u308b\u7c21\u5358\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u3066\u307f\u305f",description:"Ruby \u3067 \u307f\u3093\u306a\u306e\u81ea\u52d5\u7ffb\u8a33\uff20TexTra \u306e Web API \u3092\u53e9\u304d\u7ffb\u8a33\u3059\u308b 2\u300130 \u884c\u306e\u7c21\u5358\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u305f\u3002",date:"2022-06-22T00:00:00.000Z",formattedDate:"2022\u5e746\u670822\u65e5",tags:[{label:"Ruby",permalink:"/blog/tags/ruby"},{label:"TexTra",permalink:"/blog/tags/tex-tra"},{label:"WebAPI",permalink:"/blog/tags/web-api"},{label:"\u307f\u3093\u306a\u306e\u81ea\u52d5\u7ffb\u8a33",permalink:"/blog/tags/\u307f\u3093\u306a\u306e\u81ea\u52d5\u7ffb\u8a33"}],readingTime:1.61,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u307f\u3093\u306a\u306e\u81ea\u52d5\u7ffb\u8a33\uff20TexTra \u306e Web API \u3092\u53e9\u3044\u3066\u7ffb\u8a33\u3059\u308b\u7c21\u5358\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u3066\u307f\u305f",tags:["Ruby","TexTra","WebAPI","\u307f\u3093\u306a\u306e\u81ea\u52d5\u7ffb\u8a33"]},prevItem:{title:"WSL \u3067 Ubuntu \u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3092\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3067\u63a5\u7d9a\u53ef\u80fd\u306a\u74b0\u5883\u3092\u4f5c\u308b",permalink:"/blog/2022/06/24/wsl-xrdp"},nextItem:{title:"WSL Distro Manager \u3092\u8a66\u3059",permalink:"/blog/2022/06/22/wsl2-distro-manager"}},o={authorsImageUrls:[]},p=[{value:"API key \u306e\u53d6\u5f97",id:"api-key-\u306e\u53d6\u5f97",level:2},{value:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",level:2},{value:"\u5bfe\u8a71\u7ffb\u8a33\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210",id:"\u5bfe\u8a71\u7ffb\u8a33\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210",level:2}],u={toc:p};function b(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ruby \u3067 \u307f\u3093\u306a\u306e\u81ea\u52d5\u7ffb\u8a33\uff20TexTra \u306e Web API \u3092\u53e9\u304d\u7ffb\u8a33\u3059\u308b 2\u300130 \u884c\u306e\u7c21\u5358\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u305f\u3002"),(0,r.kt)("h2",{id:"api-key-\u306e\u53d6\u5f97"},"API key \u306e\u53d6\u5f97"),(0,r.kt)("p",null,"TexTra \u306b\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u3067\u3001\u767b\u9332\u3057\u3066\u304a\u304f\u3002"),(0,r.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u5f8c\u3001\u4ee5\u4e0b\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3044\u304d\u3001API \u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"TexTra WebAPI",src:a(9605).Z,width:"1308",height:"314"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"TexTra WebAPI",src:a(997).Z,width:"528",height:"388"}))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u30ea\u30b9\u30c8\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\n\u300c\u6c4e\u7528NT \u3010\u82f1\u8a9e - \u65e5\u672c\u8a9e\u3011\u300d\u3092\u63a2\u3057\u3001\u53f3\u5074\u306e \u2139\ufe0f \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"TexTra WebAPI",src:a(4687).Z,width:"1830",height:"108"}))),(0,r.kt)("p",null,"API \u3092\u53e9\u304f\u306e\u306b\u5fc5\u8981\u306a\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u308b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"TexTra WebAPI Key",src:a(4360).Z,width:"1152",height:"1585"}))),(0,r.kt)("p",null,"\u53d6\u5f97\u3057\u305f\u60c5\u5831\u306f\u3001\u6f0f\u6d29\u3057\u306a\u3044\u3088\u3046\u6ce8\u610f\u3059\u308b\u3002"),(0,r.kt)("h2",{id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a"},"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".bashrc")," \u306b\u4ee5\u4e0b\u3092\u767b\u9332\u3059\u308b\u3002(bash \u306e\u5834\u5408\u306f\u3002)"),(0,r.kt)("p",null,"Ruby \u30b9\u30af\u30ea\u30d7\u30c8\u306b\u5bfe\u5fdc\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers title='~/.bashrc'",showLineNumbers:!0,title:"'~/.bashrc'"},"export TexTra_URI_EN_JA=https://mt-auto-minhon-mlt.ucri.jgn-x.jp/api/mt/generalNT_en_ja/\nexport TexTra_ID=\u3010TexTra \u306b\u767b\u9332\u3057\u305f ID\u3011\nexport TexTra_API_KEY=\u3010API key\u3011\nexport TexTra_API_SECRET=\u3010API secret\u3011\n")),(0,r.kt)("h2",{id:"\u5bfe\u8a71\u7ffb\u8a33\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210"},"\u5bfe\u8a71\u7ffb\u8a33\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"oauth")," Gem \u306b\u4f9d\u5b58\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"gem install oauth\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby",metastring:"showLineNumbers title='translate-dialog.rb'",showLineNumbers:!0,title:"'translate-dialog.rb'"},"#!/usr/bin/env ruby\n# frozen_string_literal: true\n\nrequire 'oauth'\nrequire 'json'\n\nconsumer = OAuth::Consumer.new(ENV['TexTra_API_KEY'], ENV['TexTra_API_SECRET'])\n@token = OAuth::AccessToken.new(consumer)\n\ndef translate(text)\n  response = @token.post(\n    ENV['TexTra_URI_EN_JA'], {\n      key: ENV['TexTra_API_KEY'],\n      type: 'json',\n      name: ENV['TexTra_ID'],\n      text: text\n    }\n  )\n  JSON.parse(response.body)['resultset']['result']['text']\nend\n\nloop do\n  print('\ud83c\uddfa\ud83c\uddf8> ')\n  input = gets.chop\n  break if input == ':q'\n\n  puts(\"\ud83c\uddef\ud83c\uddf5> #{translate(input)}\")\nend\n")),(0,r.kt)("p",null,"\u82f1\u8a9e\u3092\u5165\u529b\u3059\u308b\u3068\u7ffb\u8a33\u3055\u308c\u308b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},":q")," \u3067\u7d42\u4e86\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b9f\u884c\u7d50\u679c (\u3053\u3068\u308f\u3056\u3092\u4f8b\u306b)"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"TexTra Example",src:a(1165).Z,width:"920",height:"904"}))))}b.isMDXComponent=!0},1165:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example-9cee3d29ce1638d2870b80427d0bd307.png"},997:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/textra-api-6121e19a55e44743930b708ac5e44f18.png"},4360:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/textra-key-4a4153418643ff01ff6b00c555d3d4b3.png"},4687:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/textra-list-c9a277de256bb13852d7ef2d6c828b85.png"},9605:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/webapi-34d02596bd90c4e81beeb59d74d7db86.png"}}]);