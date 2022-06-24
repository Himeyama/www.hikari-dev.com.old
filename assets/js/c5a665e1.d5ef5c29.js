"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[678],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(f,p(p({ref:t},c),{},{components:n})):a.createElement(f,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,p=new Array(s);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<s;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),p=["components"],o={title:"OpenLDAP \u306e slappasswd \u3067\u751f\u6210\u3055\u308c\u308b SSHA \u3068\u306f",tags:["OpenLDAP","SHA"]},l=void 0,i={permalink:"/blog/2022/04/10/ssha-openldap",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-04-10-ssha-openldap.md",source:"@site/blog/2022-04-10-ssha-openldap.md",title:"OpenLDAP \u306e slappasswd \u3067\u751f\u6210\u3055\u308c\u308b SSHA \u3068\u306f",description:"slappasswd \u30b3\u30de\u30f3\u30c9\u3068\u306f",date:"2022-04-10T00:00:00.000Z",formattedDate:"2022\u5e744\u670810\u65e5",tags:[{label:"OpenLDAP",permalink:"/blog/tags/open-ldap"},{label:"SHA",permalink:"/blog/tags/sha"}],readingTime:1.18,truncated:!1,authors:[],frontMatter:{title:"OpenLDAP \u306e slappasswd \u3067\u751f\u6210\u3055\u308c\u308b SSHA \u3068\u306f",tags:["OpenLDAP","SHA"]},prevItem:{title:"man \u30da\u30fc\u30b8\u306e\u65e5\u672c\u8a9e\u8a2d\u5b9a",permalink:"/blog/2022/04/15/manja"},nextItem:{title:"Poetry \u3092\u7528\u3044\u305f Python \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",permalink:"/blog/2022/03/13/poetry-python-project"}},c={authorsImageUrls:[]},u=[{value:"slappasswd \u30b3\u30de\u30f3\u30c9\u3068\u306f",id:"slappasswd-\u30b3\u30de\u30f3\u30c9\u3068\u306f",level:2},{value:"\u8a8d\u8a3c\u306e\u4ed5\u7d44\u307f",id:"\u8a8d\u8a3c\u306e\u4ed5\u7d44\u307f",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"slappasswd-\u30b3\u30de\u30f3\u30c9\u3068\u306f"},"slappasswd \u30b3\u30de\u30f3\u30c9\u3068\u306f"),(0,s.kt)("p",null,"slappasswd \u30b3\u30de\u30f3\u30c9\u306f OpenLDAP \u7528\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u30b3\u30de\u30f3\u30c9\u3067\u3001\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f SSHA \u3092\u7528\u3044\u3066\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30cf\u30c3\u30b7\u30e5\u5316\u3059\u308b\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-mermaid"},'graph TD\n    pass["Password: \'admin\'"]\n    ssha["{SSHA}23AUBfRZytVFNpe7onuFhyCSJOHRzCWh"]\n    pass -- slappasswd --\x3e ssha\n')),(0,s.kt)("h2",{id:"\u8a8d\u8a3c\u306e\u4ed5\u7d44\u307f"},"\u8a8d\u8a3c\u306e\u4ed5\u7d44\u307f"),(0,s.kt)("p",null,"SSHA \u3067\u306f\u751f\u6210\u3055\u308c\u305f\u30cf\u30c3\u30b7\u30e5\u306e\u672b\u5c3e 4 \u30d0\u30a4\u30c8\u304c\u30bd\u30eb\u30c8\u3068\u306a\u3063\u3066\u304a\u308a\u3001\n\u5165\u529b\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30bd\u30eb\u30c8\u304b\u3089\u30cf\u30c3\u30b7\u30e5\u3092\u751f\u6210\u3057\u3001\n\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30cf\u30c3\u30b7\u30e5\u3068\u4e00\u81f4\u3059\u308b\u304b\u3069\u3046\u304b\u3067\u8a8d\u8a3c\u3092\u884c\u3046\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-mermaid"},'graph TD\n    pass["Password: \'admin\' + Salt: D1 CC 25 A1"]\n    pass -- SHA --\x3e ssha["SSHA: DB 70 14 5 F4 59 CA D5 45 36 97 BB A2 7B 85 87 20 92 24 E1"]\n    salt["Salt: D1 CC 25 A1"] -- "Base64 (encode)" --\x3e sshabase64\n    ssha -- "Base64 (encode)" --\x3e sshabase64["23AUBfRZytVFNpe7onuFhyCSJOHRzCWh"]\n')),(0,s.kt)("p",null,"\u4ee5\u4e0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u306f\u3001\n\u9069\u5207\u306a\u30d1\u30b9\u30ef\u30fc\u30c9 (\u4f8b: admin) \u3092\u4e0e\u3048\u308b\u3068\u3001\u5143\u306e\u30cf\u30c3\u30b7\u30e5\u3068\u751f\u6210\u3055\u308c\u305f\u30cf\u30c3\u30b7\u30e5\u304c\u4e00\u81f4\u3059\u308b\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rb"},"require 'base64'\nrequire 'digest'\n\npass = 'admin'\nssha = '{SSHA}23AUBfRZytVFNpe7onuFhyCSJOHRzCWh'\nssha =~ /{.+}(.+)/\nsalt256s = Base64.decode64(Regexp.last_match(1)).unpack('C*')[-4..-1]\n\nsalt = salt256s.pack('C*')\nb_ssha = Digest::SHA1.digest(pass + salt)\nBase64.strict_encode64(\n  (b_ssha.unpack('C*') + salt256s).pack('C*')\n)\n")))}m.isMDXComponent=!0}}]);