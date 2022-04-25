"use strict";(self.webpackChunkwww_hikari_dev_com=self.webpackChunkwww_hikari_dev_com||[]).push([[2413],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=u(t),m=l,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(k,o(o({ref:n},i),{},{components:t})):a.createElement(k,o({ref:n},i))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},50625:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),o=["components"],p={title:"Ubuntu 22.04 \u3067 LDAP \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u8a2d\u5b9a",tags:["Ubuntu","Ubuntu 22.04","LDAP","OpenLDAP"]},s=void 0,u={permalink:"/2022/04/24/ubuntu2204-ldap",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-04-24-ubuntu2204-ldap/index.md",source:"@site/blog/2022-04-24-ubuntu2204-ldap/index.md",title:"Ubuntu 22.04 \u3067 LDAP \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u8a2d\u5b9a",description:"\u4ee5\u4e0b\u306f\u3059\u3079\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u8a2d\u5b9a\u3067\u3059\u3002",date:"2022-04-24T00:00:00.000Z",formattedDate:"2022\u5e744\u670824\u65e5",tags:[{label:"Ubuntu",permalink:"/tags/ubuntu"},{label:"Ubuntu 22.04",permalink:"/tags/ubuntu-22-04"},{label:"LDAP",permalink:"/tags/ldap"},{label:"OpenLDAP",permalink:"/tags/open-ldap"}],readingTime:3.24,truncated:!1,authors:[],frontMatter:{title:"Ubuntu 22.04 \u3067 LDAP \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u8a2d\u5b9a",tags:["Ubuntu","Ubuntu 22.04","LDAP","OpenLDAP"]},nextItem:{title:"man \u30da\u30fc\u30b8\u306e\u65e5\u672c\u8a9e\u8a2d\u5b9a",permalink:"/2022/04/15/manja"}},i={authorsImageUrls:[]},d=[{value:"libnss-ldapd\u3001libpam-ldapd \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"libnss-ldapdlibpam-ldapd-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u81ea\u52d5\u751f\u6210",id:"\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u81ea\u52d5\u751f\u6210",level:2},{value:"nslcd (Name Service LDAP Connection Daemon) \u306e\u518d\u8d77\u52d5",id:"nslcd-name-service-ldap-connection-daemon-\u306e\u518d\u8d77\u52d5",level:2},{value:"\u63a5\u7d9a\u78ba\u8a8d",id:"\u63a5\u7d9a\u78ba\u8a8d",level:2},{value:"\u5099\u8003",id:"\u5099\u8003",level:2}],c={toc:d};function m(e){var n=e.components,p=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,p,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306f\u3059\u3079\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u8a2d\u5b9a\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"ldapsearch")," \u30b3\u30de\u30f3\u30c9\u3067 LDAP \u304c\u53c2\u7167\u53ef\u80fd\u3067\u3042\u308b\u5834\u5408\u3001\nUbuntu \u3067\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u3088\u3046\u306a\u8a2d\u5b9a\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f8b"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ldapsearch -x -h localhost -b dc=example,dc=net\n"))),(0,r.kt)("p",null,"\u4eca\u56de\u306f\u3001nscd (+nslcd) \u3092\u7528\u3044\u3001sssd \u306f",(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u3057\u307e\u305b\u3093"),"\u3002"),(0,r.kt)("p",null,"\u8a2d\u5b9a\u306f TUI \u306b\u3088\u3063\u3066\u64cd\u4f5c\u3059\u308b\u305f\u3081\u3001\nnano \u3068\u3044\u3063\u305f\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u3088\u3063\u3066\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3059\u308b",(0,r.kt)("strong",{parentName:"p"},"\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093"),"\u3002"),(0,r.kt)("h2",{id:"libnss-ldapdlibpam-ldapd-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"libnss-ldapd\u3001libpam-ldapd \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,"\u5fc5\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install libnss-ldapd libpam-ldapd\n\n# \u5fc5\u8981\u3067\u3042\u308c\u3070\n# sudo apt install ldap-auth-config\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"libnss-ldap")," \u30d1\u30c3\u30b1\u30fc\u30b8\u3060\u3068\u3001\u30ed\u30b0\u30a4\u30f3\u30eb\u30fc\u30d7\u30d0\u30b0\u304c\u5b58\u5728\u3059\u308b\u306e\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"libnss-ldapd")," \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"libpam-ldapd")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u306a\u3044\u3068",(0,r.kt)("strong",{parentName:"p"},"\u8a8d\u8a3c\u3067\u304d\u306a\u3044"),"\u305f\u3081\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"nslcd \u3068 libnss-ldapd \u306e\u8a2d\u5b9a\u753b\u9762\u304c\u51fa\u308b\u306e\u3067\u3001\u9069\u5f53\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"nslcd \u306e\u8a2d\u5b9a")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Configuring nslcd (1)",src:t(53933).Z,width:"2382",height:"1406"})),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Configuring nslcd (2)",src:t(78833).Z,width:"2382",height:"1406"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u624b\u52d5\u3067\u884c\u3046\u5834\u5408 (",(0,r.kt)("strong",{parentName:"p"},"\u4efb\u610f"),")"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/nslcd.conf\n"))),(0,r.kt)("p",null,"\u518d\u8a2d\u5b9a\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002(",(0,r.kt)("strong",{parentName:"p"},"\u4efb\u610f"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg-reconfigure nslcd\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"libnss-ldapd \u306e\u8a2d\u5b9a")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Configuring libnss-ldapd (2)",src:t(28717).Z,width:"2382",height:"1406"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u624b\u52d5\u3067\u884c\u3046\u5834\u5408 (",(0,r.kt)("strong",{parentName:"p"},"\u4efb\u610f"),")"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/nsswhich.conf\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- passwd:         files systemd\n+ passwd:         files systemd ldap\n- group:          files systemd\n+ group:          files systemd ldap\n- shadow:         files\n+ shadow:         files ldap\n- hosts:          files mdns4_minimal [NOTFOUND=return] dns\n+ hosts:          files mdns4_minimal [NOTFOUND=return] dns ldap\n")),(0,r.kt)("p",null,"\u518d\u8a2d\u5b9a\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002(",(0,r.kt)("strong",{parentName:"p"},"\u4efb\u610f"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg-reconfigure libnss-ldapd\n")),(0,r.kt)("h2",{id:"\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u81ea\u52d5\u751f\u6210"},"\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u81ea\u52d5\u751f\u6210"),(0,r.kt)("p",null,"LDAP \u306b\u30ed\u30b0\u30a4\u30f3\u5f8c\u3001\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc\u3092\u81ea\u52d5\u751f\u6210\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u30b3\u30de\u30f3\u30c9\u3067\u8ffd\u52a0"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo pam-auth-update --enable mkhomedir\n"))),(0,r.kt)("h1",{id:"\u7121\u52b9\u5316"},"\u7121\u52b9\u5316"),(0,r.kt)("h1",{id:"sudo-pam-auth-update---remove-mkhomedir"},"sudo pam-auth-update --remove mkhomedir"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n> TUI \u3067\u8ffd\u52a0 (\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc\u306e\u3053\u3068\u4ee5\u5916\u3082\u3044\u8a2d\u5b9a\u53ef\u80fd) **\u4efb\u610f**\n```sh\nsudo pam-auth-update\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"PAM configuration",src:t(48541).Z,width:"2382",height:"1406"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u624b\u52d5\u3067\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f (sudo nano /etc/pam.d/common-session) \u306b\u4ee5\u4e0b\u3092\u8ffd\u52a0 (",(0,r.kt)("strong",{parentName:"p"},"\u4efb\u610f"),")"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"session optional                        pam_mkhomedir.so\n"))),(0,r.kt)("h2",{id:"nslcd-name-service-ldap-connection-daemon-\u306e\u518d\u8d77\u52d5"},"nslcd (Name Service LDAP Connection Daemon) \u306e\u518d\u8d77\u52d5"),(0,r.kt)("p",null,"\u518d\u8d77\u52d5\u3059\u308b\u3068\u3001LDAP \u306e\u60c5\u5831\u3092\u8a8d\u8b58\u3059\u308b\u3088\u3046\u306b\u306a\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service nslcd restart\n")),(0,r.kt)("h2",{id:"\u63a5\u7d9a\u78ba\u8a8d"},"\u63a5\u7d9a\u78ba\u8a8d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ getent passwd\nroot:x:0:0:root:/root:/bin/bash\n...\n")),(0,r.kt)("h2",{id:"\u5099\u8003"},"\u5099\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ldapsearch -x -h localhost -b dc=example,dc=net")," \u3067 LDAP \u306e\u60c5\u5831\u3092\u53c2\u7167\u3067\u304d\u308b\u5834\u5408\u306b\u304b\u304e\u308a\u3001\nbind DN \u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"ldap-auth-config")," \u3092\u5225\u9014\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u8a2d\u5b9a\u3057\u305f\u307b\u3046\u304c\u3044\u3044\u304b\u3082\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u30eb\u30fc\u30d7\u304c\u8d77\u3053\u308b\u5834\u5408\u306f\u518d\u8d77\u52d5\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getent passwd")," \u3067 LDAP \u306e\u30e6\u30fc\u30b6\u30fc\u306b\u53c2\u7167\u3067\u304d\u305a\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"ldapsearch -x -h localhost -b dc=example,dc=net")," \u30b3\u30de\u30f3\u30c9\u3067\u60c5\u5831\u3092\u53c2\u7167\u3067\u304d\u308b\u5834\u5408\u306f\u3001LDAP \u306e\u30a2\u30af\u30bb\u30b9\u6a29\u9650 (olcAccess) \u304c\u539f\u56e0\u3067\u3042\u308b\u3053\u3068\u3092\u7591\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30b9\u30af\u30b7\u30e7\u306f SSH \u3067 Ubuntu \u306b\u63a5\u7d9a\u3057\u305f\u3082\u306e\u3092 Windows \u3067\u64ae\u3063\u3066\u3044\u307e\u3059\u3002")))}m.isMDXComponent=!0},28717:function(e,n,t){n.Z=t.p+"assets/images/libnss-ldapd-5154c531a2435ac9d4eb646bc4a314a4.png"},53933:function(e,n,t){n.Z=t.p+"assets/images/nslcd-1-1de61947e4a6f25bf632e4a59fc189ae.png"},78833:function(e,n,t){n.Z=t.p+"assets/images/nslcd-2-1e6e638e539d4bf5b55bd0b264393f2a.png"},48541:function(e,n,t){n.Z=t.p+"assets/images/pam-conf-683aa9a8253d8036c8ed95b8dc3e9cc7.png"}}]);