"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8962],{79184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));n(8209);const i={title:"Firefox \u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",tags:["Ubuntu","Ubuntu 22.04","Firefox"]},o=void 0,s={permalink:"/en/blog/2022/04/27/install-binary-firefox",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-04-27-install-binary-firefox/index.md",source:"@site/blog/2022-04-27-install-binary-firefox/index.md",title:"Firefox \u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"Ubuntu 22.04 \u306f snap \u7248\u306e Firefox \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3089\u3057\u304f\u3001",date:"2022-04-27T00:00:00.000Z",formattedDate:"April 27, 2022",tags:[{label:"Ubuntu",permalink:"/en/blog/tags/ubuntu"},{label:"Ubuntu 22.04",permalink:"/en/blog/tags/ubuntu-22-04"},{label:"Firefox",permalink:"/en/blog/tags/firefox"}],readingTime:.605,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Firefox \u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",tags:["Ubuntu","Ubuntu 22.04","Firefox"]},prevItem:{title:"Ubuntu \u7cfb\u306e Linux \u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u81ea\u4f5c\u65b9\u6cd5",permalink:"/en/blog/2022/05/12/create-jisaku-dist"},nextItem:{title:"Ubuntu \u3067 gsettings \u3092\u4f7f\u7528\u3057 Dock \u306e\u8a2d\u5b9a\u3092\u884c\u3046",permalink:"/en/blog/2022/04/27/ubuntu-dock"}},l={authorsImageUrls:[]},u=[{value:"apt / snap \u7248\u306e Firefox \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"apt--snap-\u7248\u306e-firefox-\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"Firefox \u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"firefox-\u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2}],f={toc:u},p="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ubuntu 22.04 \u306f snap \u7248\u306e Firefox \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3089\u3057\u304f\u3001\n\u74b0\u5883\u306b\u3088\u3063\u3066\u8d77\u52d5\u304c\u3067\u304d\u306a\u304b\u3063\u305f\u306e\u3067\u3001\u30d3\u30eb\u30c9\u6e08\u307f Firefox \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u65b9\u6cd5\u3092\u30e1\u30e2\u3002"),(0,r.kt)("h2",{id:"apt--snap-\u7248\u306e-firefox-\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"apt / snap \u7248\u306e Firefox \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt purge firefox\nsudo snap remove firefox\n")),(0,r.kt)("h2",{id:"firefox-\u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Firefox \u306e\u30d3\u30eb\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\nwget "https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=ja" --trust-server-names\n\n# \u5c55\u958b\ntar xvf firefox-*.tar.bz2\n\n# \u914d\u7f6e\nsudo cp -r firefox /usr/lib\n\n# \u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u306e\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092\u4f5c\u6210\nsudo ln -s /usr/lib/firefox/firefox /usr/bin/firefox\n\n# \u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u914d\u7f6e\nsudo mkdir -p /usr/share/applications\nsudo wget https://bit.ly/3Mwigwx -O /usr/share/applications/firefox.desktop\n')))}b.isMDXComponent=!0}}]);