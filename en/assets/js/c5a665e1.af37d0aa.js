"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[678],{4410:(a,s,e)=>{e.r(s),e.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var t=e(7462),n=(e(7294),e(3905)),p=e(1839);const l={title:"OpenLDAP \u306e slappasswd \u3067\u751f\u6210\u3055\u308c\u308b SSHA \u3068\u306f",tags:["OpenLDAP","SHA"]},r=void 0,d={permalink:"/en/blog/2022/04/10/ssha-openldap",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-04-10-ssha-openldap.md",source:"@site/blog/2022-04-10-ssha-openldap.md",title:"OpenLDAP \u306e slappasswd \u3067\u751f\u6210\u3055\u308c\u308b SSHA \u3068\u306f",description:"slappasswd \u30b3\u30de\u30f3\u30c9\u3068\u306f",date:"2022-04-10T00:00:00.000Z",formattedDate:"April 10, 2022",tags:[{label:"OpenLDAP",permalink:"/en/blog/tags/open-ldap"},{label:"SHA",permalink:"/en/blog/tags/sha"}],readingTime:1.18,hasTruncateMarker:!1,authors:[],frontMatter:{title:"OpenLDAP \u306e slappasswd \u3067\u751f\u6210\u3055\u308c\u308b SSHA \u3068\u306f",tags:["OpenLDAP","SHA"]},prevItem:{title:"man \u30da\u30fc\u30b8\u306e\u65e5\u672c\u8a9e\u8a2d\u5b9a",permalink:"/en/blog/2022/04/15/manja"},nextItem:{title:"Poetry \u3092\u7528\u3044\u305f Python \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",permalink:"/en/blog/2022/03/13/poetry-python-project"}},o={authorsImageUrls:[]},i=[{value:"slappasswd \u30b3\u30de\u30f3\u30c9\u3068\u306f",id:"slappasswd-\u30b3\u30de\u30f3\u30c9\u3068\u306f",level:2},{value:"\u8a8d\u8a3c\u306e\u4ed5\u7d44\u307f",id:"\u8a8d\u8a3c\u306e\u4ed5\u7d44\u307f",level:2}],h={toc:i};function m(a){let{components:s,...e}=a;return(0,n.kt)("wrapper",(0,t.Z)({},h,e,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"slappasswd-\u30b3\u30de\u30f3\u30c9\u3068\u306f"},"slappasswd \u30b3\u30de\u30f3\u30c9\u3068\u306f"),(0,n.kt)("p",null,"slappasswd \u30b3\u30de\u30f3\u30c9\u306f OpenLDAP \u7528\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u30b3\u30de\u30f3\u30c9\u3067\u3001\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f SSHA \u3092\u7528\u3044\u3066\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30cf\u30c3\u30b7\u30e5\u5316\u3059\u308b\u3002"),(0,n.kt)(p.G,{chart:'graph TD\n    pass["Password: \'admin\'"]\n    ssha["{SSHA}23AUBfRZytVFNpe7onuFhyCSJOHRzCWh"]\n    pass -- slappasswd --\x3e ssha',mdxType:"Mermaid"}),(0,n.kt)("h2",{id:"\u8a8d\u8a3c\u306e\u4ed5\u7d44\u307f"},"\u8a8d\u8a3c\u306e\u4ed5\u7d44\u307f"),(0,n.kt)("p",null,"SSHA \u3067\u306f\u751f\u6210\u3055\u308c\u305f\u30cf\u30c3\u30b7\u30e5\u306e\u672b\u5c3e 4 \u30d0\u30a4\u30c8\u304c\u30bd\u30eb\u30c8\u3068\u306a\u3063\u3066\u304a\u308a\u3001\n\u5165\u529b\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30bd\u30eb\u30c8\u304b\u3089\u30cf\u30c3\u30b7\u30e5\u3092\u751f\u6210\u3057\u3001\n\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30cf\u30c3\u30b7\u30e5\u3068\u4e00\u81f4\u3059\u308b\u304b\u3069\u3046\u304b\u3067\u8a8d\u8a3c\u3092\u884c\u3046\u3002"),(0,n.kt)(p.G,{chart:'graph TD\n    pass["Password: \'admin\' + Salt: D1 CC 25 A1"]\n    pass -- SHA --\x3e ssha["SSHA: DB 70 14 5 F4 59 CA D5 45 36 97 BB A2 7B 85 87 20 92 24 E1"]\n    salt["Salt: D1 CC 25 A1"] -- "Base64 (encode)" --\x3e sshabase64\n    ssha -- "Base64 (encode)" --\x3e sshabase64["23AUBfRZytVFNpe7onuFhyCSJOHRzCWh"]',mdxType:"Mermaid"}),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u306f\u3001\n\u9069\u5207\u306a\u30d1\u30b9\u30ef\u30fc\u30c9 (\u4f8b: admin) \u3092\u4e0e\u3048\u308b\u3068\u3001\u5143\u306e\u30cf\u30c3\u30b7\u30e5\u3068\u751f\u6210\u3055\u308c\u305f\u30cf\u30c3\u30b7\u30e5\u304c\u4e00\u81f4\u3059\u308b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rb"},"require 'base64'\nrequire 'digest'\n\npass = 'admin'\nssha = '{SSHA}23AUBfRZytVFNpe7onuFhyCSJOHRzCWh'\nssha =~ /{.+}(.+)/\nsalt256s = Base64.decode64(Regexp.last_match(1)).unpack('C*')[-4..-1]\n\nsalt = salt256s.pack('C*')\nb_ssha = Digest::SHA1.digest(pass + salt)\nBase64.strict_encode64(\n  (b_ssha.unpack('C*') + salt256s).pack('C*')\n)\n")))}m.isMDXComponent=!0}}]);