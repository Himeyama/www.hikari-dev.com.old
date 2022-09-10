"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1070],{7281:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>m,default:()=>u,frontMatter:()=>p,metadata:()=>r,toc:()=>d});var l=a(7462),n=(a(7294),a(3905));a(1839);const p={title:"\u81ea\u4f5c gem \u306e\u4f5c\u308a\u65b9",tag:["Ruby","gem"]},m=void 0,r={permalink:"/blog/2022/05/12/create-gem",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-05-12-create-gem.md",source:"@site/blog/2022-05-12-create-gem.md",title:"\u81ea\u4f5c gem \u306e\u4f5c\u308a\u65b9",description:"gem \u3092\u4f5c\u6210 (bundle gem)",date:"2022-05-12T00:00:00.000Z",formattedDate:"2022\u5e745\u670812\u65e5",tags:[],readingTime:5.12,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u81ea\u4f5c gem \u306e\u4f5c\u308a\u65b9",tag:["Ruby","gem"]},prevItem:{title:"cublas \u306e\u4f7f\u3044\u65b9\u30e1\u30e2",permalink:"/blog/2022/05/20/cublas"},nextItem:{title:"Ubuntu \u7cfb\u306e Linux \u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u81ea\u4f5c\u65b9\u6cd5",permalink:"/blog/2022/05/12/create-jisaku-dist"}},i={authorsImageUrls:[]},d=[{value:"gem \u3092\u4f5c\u6210 (<code>bundle gem</code>)",id:"gem-\u3092\u4f5c\u6210-bundle-gem",level:2},{value:"<code>bundle gem</code> \u306e\u30aa\u30d7\u30b7\u30e7\u30f3",id:"bundle-gem-\u306e\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020",level:2},{value:"<code>gemspec</code> \u306e\u7de8\u96c6",id:"gemspec-\u306e\u7de8\u96c6",level:2},{value:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8ffd\u52a0",id:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8ffd\u52a0",level:3},{value:"<code>bundle install</code>",id:"bundle-install",level:2},{value:"\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5909\u66f4",id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5909\u66f4",level:2},{value:"\u30b3\u30f3\u30d1\u30a4\u30eb",id:"\u30b3\u30f3\u30d1\u30a4\u30eb",level:2},{value:"C \u62e1\u5f35",id:"c-\u62e1\u5f35",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc\u306e\u4f5c\u6210",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc\u306e\u4f5c\u6210",level:2},{value:"gem \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb (<code>rake install</code>)",id:"gem-\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb-rake-install",level:2},{value:"gem \u3092\u516c\u958b (<code>rake release</code>)",id:"gem-\u3092\u516c\u958b-rake-release",level:2},{value:"gem \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u751f\u6210 (<code>rake build</code>)",id:"gem-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u751f\u6210-rake-build",level:2}],k={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"gem-\u3092\u4f5c\u6210-bundle-gem"},"gem \u3092\u4f5c\u6210 (",(0,n.kt)("inlineCode",{parentName:"h2"},"bundle gem"),")"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"gem_name")," \u3068\u3044\u3046 gem \u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u4ee5\u4e0b\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bundle gem gem_name\n")),(0,n.kt)("h2",{id:"bundle-gem-\u306e\u30aa\u30d7\u30b7\u30e7\u30f3"},(0,n.kt)("inlineCode",{parentName:"h2"},"bundle gem")," \u306e\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"bundle gem")," \u306b\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u5b58\u5728\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u8a73\u7d30\u307e\u305f\u306f\u305d\u306e\u4ed6\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u77e5\u308a\u305f\u3044\u5834\u5408\u306f ",(0,n.kt)("a",{parentName:"p",href:"https://bundler.io/v2.3/man/bundle-gem.1.html"},"Bundler: bundle gem")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"--exe"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"-b"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"--bin")),(0,n.kt)("td",{parentName:"tr",align:"left"},"gem \u306b\u30d0\u30a4\u30ca\u30ea\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3081\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"--ext")),(0,n.kt)("td",{parentName:"tr",align:"left"},"gem \u306b C \u62e1\u5f35\u3092\u542b\u3081\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"--mit")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 MIT \u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"--ci")),(0,n.kt)("td",{parentName:"tr",align:"left"},"ci \u30b5\u30fc\u30d3\u30b9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"--linter")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30f3\u30bf\u30fc\u3068\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4f8b: \u30ea\u30f3\u30bf\u30fc\u306b ",(0,n.kt)("inlineCode",{parentName:"p"},"rubocop")," \u3092\u4f7f\u7528\u3057\u3001MIT \u30e9\u30a4\u30bb\u30f3\u30b9\u3067\u30b3\u30de\u30f3\u30c9\u3092\u542b\u307f\u3001C \u8a00\u8a9e\u62e1\u5f35\u3092\u542b\u3080 ",(0,n.kt)("inlineCode",{parentName:"p"},"myapp")," \u3068\u3044\u3046 gem \u3092\u4f5c\u6210\u3059\u308b\u5834\u5408"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bundle gem myapp --exe --ext --mit --ci=github --linter=rubocop\n"))),(0,n.kt)("h2",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020"),(0,n.kt)("p",null,"\u4e0a\u8a18\u30b3\u30de\u30f3\u30c9\u3067\u751f\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"myapp\n\u251c\u2500\u2500 Gemfile\n\u251c\u2500\u2500 LICENSE.txt\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 Rakefile\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u251c\u2500\u2500 console\n\u2502\xa0\xa0 \u2514\u2500\u2500 setup\n\u251c\u2500\u2500 exe\n\u2502\xa0\xa0 \u2514\u2500\u2500 myapp\n\u251c\u2500\u2500 ext\n\u2502\xa0\xa0 \u2514\u2500\u2500 myapp\n\u2502\xa0\xa0     \u251c\u2500\u2500 extconf.rb\n\u2502\xa0\xa0     \u251c\u2500\u2500 myapp.c\n\u2502\xa0\xa0     \u2514\u2500\u2500 myapp.h\n\u251c\u2500\u2500 lib\n\u2502\xa0\xa0 \u251c\u2500\u2500 myapp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 version.rb\n\u2502\xa0\xa0 \u2514\u2500\u2500 myapp.rb\n\u251c\u2500\u2500 myapp.gemspec\n\u2514\u2500\u2500 sig\n    \u2514\u2500\u2500 myapp.rbs\n")),(0,n.kt)("p",null,"\u5404\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"lib/: \u30e9\u30a4\u30d6\u30e9\u30ea\u30fc\u306e\u30b3\u30fc\u30c9 (",(0,n.kt)("inlineCode",{parentName:"li"},"require")," \u3067\u547c\u3073\u51fa\u3055\u308c\u308b)"),(0,n.kt)("li",{parentName:"ul"},"ext/: C \u8a00\u8a9e\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9 (\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6642\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"require")," \u3067\u547c\u3073\u51fa\u3055\u308c\u308b)"),(0,n.kt)("li",{parentName:"ul"},"exe/: \u30b3\u30de\u30f3\u30c9\u304c\u3042\u308b")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"myapp.gemspec")," \u304c\u3082\u3063\u3068\u3082\u91cd\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u3067\u3001gem \u306e\u69cb\u6210\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u57fa\u672c\u7684\u306b\u4e0a\u8a18 3 \u3064\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc (C \u8a00\u8a9e\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u306f\u30012 \u3064\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc) \u306e\u4e2d\u306b\u3042\u308b\u30d5\u30a1\u30a4\u30eb\u3068 gemspec \u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3057\u307e\u3059\u3002(\u5fc5\u8981\u306b\u5fdc\u3058\u3066 Rakefile \u3084 README.md \u3082\u7de8\u96c6\u3057\u307e\u3059\u3002)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Gemfile \u306f\u7de8\u96c6\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("h2",{id:"gemspec-\u306e\u7de8\u96c6"},(0,n.kt)("inlineCode",{parentName:"h2"},"gemspec")," \u306e\u7de8\u96c6"),(0,n.kt)("p",null,"gem \u3092\u4f5c\u308b\u305f\u3081\u306b ",(0,n.kt)("inlineCode",{parentName:"p"},"myapp.gemspec")," \u3092\u7de8\u96c6\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"TODO \u306e\u3042\u308b\u884c\u3084\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u306e\u884c\u3092\u30b3\u30e1\u30f3\u30c8\u30a2\u30a6\u30c8\u3057\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"spec.summary")," \u306e\u8a2d\u5b9a\u3092\u884c\u3048\u3070\u6700\u4f4e\u9650\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u5fc5\u9808\u3067\u3042\u308b\u9805\u76ee\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"spec.name"),(0,n.kt)("li",{parentName:"ul"},"spec.version"),(0,n.kt)("li",{parentName:"ul"},"spec.authors"),(0,n.kt)("li",{parentName:"ul"},"spec.summary")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"bundle install")," \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3001\u30a8\u30e9\u30fc\u304c\u306a\u3051\u308c\u3070\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,n.kt)("h3",{id:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8ffd\u52a0"},"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8ffd\u52a0"),(0,n.kt)("p",null,"gemspec \u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8ffd\u8a18\u3057\u3066\u4f9d\u5b58\u3057\u3066\u3044\u308b gem \u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rb"},'  spec.add_dependency "example-gem", "~> 1.0"\n')),(0,n.kt)("p",null,"gemspec \u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8ffd\u8a18\u3057\u958b\u767a\u6642\u306b\u5fc5\u8981\u306a gem \u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rb"},'  spec.add_development_dependency "example-gem", "~> 1.0"\n')),(0,n.kt)("p",null,"\u8a73\u3057\u304f\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"https://docs.ruby-lang.org/ja/latest/class/Gem=3a=3aSpecification.html"},"class Gem::Specification (Ruby 3.1) \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30de\u30cb\u30e5\u30a2\u30eb")," \u3084 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.ruby-lang.org/ja/latest/library/rubygems.html"},"library rubygems (Ruby 3.1 \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30de\u30cb\u30e5\u30a2\u30eb)")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"bundle-install"},(0,n.kt)("inlineCode",{parentName:"h2"},"bundle install")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"bundle install")," \u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3001Gemfile \u304a\u3088\u3073 gemspec \u306b\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b gem \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5909\u66f4"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5909\u66f4"),(0,n.kt)("p",null,"\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"lib/myapp/version.rb")," \u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30b3\u30f3\u30d1\u30a4\u30eb"},"\u30b3\u30f3\u30d1\u30a4\u30eb"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3001C \u62e1\u5f35\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u307e\u3059\u3002\n\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u306b\u3088\u308a\u3001\u5171\u6709\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc ",(0,n.kt)("inlineCode",{parentName:"p"},"lib/myapp/myapp.so")," \u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rb"},"rake compile\n")),(0,n.kt)("p",null,"\u30b3\u30f3\u30d1\u30a4\u30eb\u5f8c\u3001gem \u306b\u542b\u307e\u308c\u308b\u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u3059\u308b\u3068\u3001\n\u30a8\u30e9\u30fc\u306a\u304f\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rb"},"bundle exec myapp\n")),(0,n.kt)("h2",{id:"c-\u62e1\u5f35"},"C \u62e1\u5f35"),(0,n.kt)("p",null,"C \u8a00\u8a9e\u3067 Ruby \u3092\u62e1\u5f35\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/myapp/myapp.c")," \u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"},'void\nInit_myapp(void)\n{\n  rb_mMyapp = rb_define_module("Myapp");\n+ rb_p(rb_str_new2("Hello, world!"));\n}\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"rake compile")," \u3067\u30b3\u30f3\u30d1\u30a4\u30eb\u3092\u884c\u3044\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"bundle exec myapp")," \u3092\u5b9f\u884c\u3059\u308b\u3068\u3001",(0,n.kt)("inlineCode",{parentName:"p"},'"Hello, world!"')," \u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u4f8b\u306f\u3001C \u8a00\u8a9e\u304b\u3089 Ruby \u306e C API \u3092\u547c\u3073\u51fa\u3057\u8868\u793a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3001"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rb"},'p "Hello, world!"\n')),(0,n.kt)("p",null,"\u3068\u540c\u7b49\u3067\u3059\u3002"),(0,n.kt)("p",null,"Ruby \u306e C API \u3060\u3051\u3067\u306f\u306a\u304f\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5171\u6709\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc\u3092\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u305f\u3081\u3001\u30e9\u30c3\u30d1\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u307e\u305f\u3001C \u62e1\u5f35\u306b\u3088\u308a\u8a08\u7b97\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u9ad8\u901f\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc\u306e\u4f5c\u6210"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc\u306e\u4f5c\u6210"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"lib/myapp.rb")," \u3042\u305f\u308a\u3092\u7de8\u96c6\u3002"),(0,n.kt)("p",null,"\u65b0\u3057\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u305f\u5834\u5408\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"git add")," \u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"gem-\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb-rake-install"},"gem \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb (",(0,n.kt)("inlineCode",{parentName:"h2"},"rake install"),")"),(0,n.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e gem \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rake install\n")),(0,n.kt)("h2",{id:"gem-\u3092\u516c\u958b-rake-release"},"gem \u3092\u516c\u958b (",(0,n.kt)("inlineCode",{parentName:"h2"},"rake release"),")"),(0,n.kt)("p",null,"gem \u3092\u516c\u958b\u3059\u308b\u306b\u306f\u3001rubygems \u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u30ea\u30ea\u30fc\u30b9\u3059\u308b\u305f\u3073\u306b\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rake release\n")),(0,n.kt)("h2",{id:"gem-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u751f\u6210-rake-build"},"gem \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u751f\u6210 (",(0,n.kt)("inlineCode",{parentName:"h2"},"rake build"),")"),(0,n.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089 ",(0,n.kt)("inlineCode",{parentName:"p"},"pkg/myapp-x.x.x.gem")," \u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rake build\n")))}u.isMDXComponent=!0}}]);