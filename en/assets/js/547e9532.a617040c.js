"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[181],{33785:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var t=n(87462),l=(n(67294),n(3905));n(8209);const s={title:"Ubuntu 22.04 \u3067 LDAP \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u8a2d\u5b9a",tags:["Ubuntu","Ubuntu 22.04","LDAP","OpenLDAP"]},p=void 0,d={permalink:"/en/blog/2022/04/24/ubuntu2204-ldap",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-04-24-ubuntu2204-ldap/index.md",source:"@site/blog/2022-04-24-ubuntu2204-ldap/index.md",title:"Ubuntu 22.04 \u3067 LDAP \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u8a2d\u5b9a",description:"\u4ee5\u4e0b\u306f\u3059\u3079\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u8a2d\u5b9a\u3067\u3059\u3002",date:"2022-04-24T00:00:00.000Z",formattedDate:"April 24, 2022",tags:[{label:"Ubuntu",permalink:"/en/blog/tags/ubuntu"},{label:"Ubuntu 22.04",permalink:"/en/blog/tags/ubuntu-22-04"},{label:"LDAP",permalink:"/en/blog/tags/ldap"},{label:"OpenLDAP",permalink:"/en/blog/tags/open-ldap"}],readingTime:3.24,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Ubuntu 22.04 \u3067 LDAP \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u8a2d\u5b9a",tags:["Ubuntu","Ubuntu 22.04","LDAP","OpenLDAP"]},prevItem:{title:"Ubuntu \u3067 gsettings \u3092\u4f7f\u7528\u3057 Dock \u306e\u8a2d\u5b9a\u3092\u884c\u3046",permalink:"/en/blog/2022/04/27/ubuntu-dock"},nextItem:{title:"man \u30da\u30fc\u30b8\u306e\u65e5\u672c\u8a9e\u8a2d\u5b9a",permalink:"/en/blog/2022/04/15/manja"}},o={authorsImageUrls:[]},u=[{value:"libnss-ldapd\u3001libpam-ldapd \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"libnss-ldapdlibpam-ldapd-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u81ea\u52d5\u751f\u6210",id:"\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u81ea\u52d5\u751f\u6210",level:2},{value:"nslcd (Name Service LDAP Connection Daemon) \u306e\u518d\u8d77\u52d5",id:"nslcd-name-service-ldap-connection-daemon-\u306e\u518d\u8d77\u52d5",level:2},{value:"\u63a5\u7d9a\u78ba\u8a8d",id:"\u63a5\u7d9a\u78ba\u8a8d",level:2},{value:"\u5099\u8003",id:"\u5099\u8003",level:2}],i={toc:u},r="wrapper";function m(e){let{components:a,...s}=e;return(0,l.kt)(r,(0,t.Z)({},i,s,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306f\u3059\u3079\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u8a2d\u5b9a\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"ldapsearch")," \u30b3\u30de\u30f3\u30c9\u3067 LDAP \u304c\u53c2\u7167\u53ef\u80fd\u3067\u3042\u308b\u5834\u5408\u3001\nUbuntu \u3067\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u3088\u3046\u306a\u8a2d\u5b9a\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ldapsearch -x -h localhost -b dc=example,dc=net\n")),(0,l.kt)("p",null,"\u4eca\u56de\u306f\u3001nscd (+nslcd) \u3092\u7528\u3044\u3001sssd \u306f",(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u3057\u307e\u305b\u3093"),"\u3002"),(0,l.kt)("p",null,"\u8a2d\u5b9a\u306f TUI \u306b\u3088\u3063\u3066\u64cd\u4f5c\u3059\u308b\u305f\u3081\u3001\nnano \u3068\u3044\u3063\u305f\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u3088\u3063\u3066\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3059\u308b",(0,l.kt)("strong",{parentName:"p"},"\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093"),"\u3002"),(0,l.kt)("h2",{id:"libnss-ldapdlibpam-ldapd-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"libnss-ldapd\u3001libpam-ldapd \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("p",null,"\u5fc5\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install libnss-ldapd libpam-ldapd\n\n# \u5fc5\u8981\u3067\u3042\u308c\u3070\n# sudo apt install ldap-auth-config\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"libnss-ldap")," \u30d1\u30c3\u30b1\u30fc\u30b8\u3060\u3068\u3001\u30ed\u30b0\u30a4\u30f3\u30eb\u30fc\u30d7\u30d0\u30b0\u304c\u5b58\u5728\u3059\u308b\u306e\u3067 ",(0,l.kt)("inlineCode",{parentName:"p"},"libnss-ldapd")," \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"libpam-ldapd")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u306a\u3044\u3068",(0,l.kt)("strong",{parentName:"p"},"\u8a8d\u8a3c\u3067\u304d\u306a\u3044"),"\u305f\u3081\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"nslcd \u3068 libnss-ldapd \u306e\u8a2d\u5b9a\u753b\u9762\u304c\u51fa\u308b\u306e\u3067\u3001\u9069\u5f53\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"nslcd \u306e\u8a2d\u5b9a")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configuring nslcd (1)",src:n(53933).Z,width:"2382",height:"1406"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configuring nslcd (2)",src:n(78833).Z,width:"2382",height:"1406"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u624b\u52d5\u3067\u884c\u3046\u5834\u5408 (",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u610f"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/nslcd.conf\n")),(0,l.kt)("p",null,"\u518d\u8a2d\u5b9a\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002(",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u610f"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg-reconfigure nslcd\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"libnss-ldapd \u306e\u8a2d\u5b9a")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configuring libnss-ldapd (2)",src:n(28717).Z,width:"2382",height:"1406"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u624b\u52d5\u3067\u884c\u3046\u5834\u5408 (",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u610f"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-babash"},"sudo nano /etc/nsswhich.conf\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"- passwd:         files systemd\n+ passwd:         files systemd ldap\n- group:          files systemd\n+ group:          files systemd ldap\n- bashadow:         files\n+ bashadow:         files ldap\n- hosts:          files mdns4_minimal [NOTFOUND=return] dns\n+ hosts:          files mdns4_minimal [NOTFOUND=return] dns ldap\n")),(0,l.kt)("p",null,"\u518d\u8a2d\u5b9a\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002(",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u610f"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg-reconfigure libnss-ldapd\n")),(0,l.kt)("h2",{id:"\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u81ea\u52d5\u751f\u6210"},"\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u81ea\u52d5\u751f\u6210"),(0,l.kt)("p",null,"LDAP \u306b\u30ed\u30b0\u30a4\u30f3\u5f8c\u3001\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc\u3092\u81ea\u52d5\u751f\u6210\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u30b3\u30de\u30f3\u30c9\u3067\u8ffd\u52a0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pam-auth-update --enable mkhomedir\n\n# \u7121\u52b9\u5316\n# sudo pam-auth-update --remove mkhomedir\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TUI \u3067\u8ffd\u52a0 (\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc\u306e\u3053\u3068\u4ee5\u5916\u3082\u3044\u8a2d\u5b9a\u53ef\u80fd) ",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u610f"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pam-auth-update\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"PAM configuration",src:n(48541).Z,width:"2382",height:"1406"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u624b\u52d5\u3067\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f (sudo nano /etc/pam.d/common-session) \u306b\u4ee5\u4e0b\u3092\u8ffd\u52a0 (",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u610f"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"session optional                        pam_mkhomedir.so\n")),(0,l.kt)("h2",{id:"nslcd-name-service-ldap-connection-daemon-\u306e\u518d\u8d77\u52d5"},"nslcd (Name Service LDAP Connection Daemon) \u306e\u518d\u8d77\u52d5"),(0,l.kt)("p",null,"\u518d\u8d77\u52d5\u3059\u308b\u3068\u3001LDAP \u306e\u60c5\u5831\u3092\u8a8d\u8b58\u3059\u308b\u3088\u3046\u306b\u306a\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service nslcd restart\n")),(0,l.kt)("h2",{id:"\u63a5\u7d9a\u78ba\u8a8d"},"\u63a5\u7d9a\u78ba\u8a8d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ getent passwd\nroot:x:0:0:root:/root:/bin/babash\n...\n")),(0,l.kt)("h2",{id:"\u5099\u8003"},"\u5099\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ldapsearch -x -h localhost -b dc=example,dc=net")," \u3067 LDAP \u306e\u60c5\u5831\u3092\u53c2\u7167\u3067\u304d\u308b\u5834\u5408\u306b\u304b\u304e\u308a\u3001\nbind DN \u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"ldap-auth-config")," \u3092\u5225\u9014\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u8a2d\u5b9a\u3057\u305f\u307b\u3046\u304c\u3044\u3044\u304b\u3082\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u30eb\u30fc\u30d7\u304c\u8d77\u3053\u308b\u5834\u5408\u306f\u518d\u8d77\u52d5\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getent passwd")," \u3067 LDAP \u306e\u30e6\u30fc\u30b6\u30fc\u306b\u53c2\u7167\u3067\u304d\u305a\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"ldapsearch -x -h localhost -b dc=example,dc=net")," \u30b3\u30de\u30f3\u30c9\u3067\u60c5\u5831\u3092\u53c2\u7167\u3067\u304d\u308b\u5834\u5408\u306f\u3001LDAP \u306e\u30a2\u30af\u30bb\u30b9\u6a29\u9650 (olcAccess) \u304c\u539f\u56e0\u3067\u3042\u308b\u3053\u3068\u3092\u7591\u3044\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u30b9\u30af\u30b7\u30e7\u306f Sbash \u3067 Ubuntu \u306b\u63a5\u7d9a\u3057\u305f\u3082\u306e\u3092 Windows \u3067\u64ae\u3063\u3066\u3044\u307e\u3059\u3002")))}m.isMDXComponent=!0},28717:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/libnss-ldapd-5154c531a2435ac9d4eb646bc4a314a4.png"},53933:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nslcd-1-1de61947e4a6f25bf632e4a59fc189ae.png"},78833:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nslcd-2-1e6e638e539d4bf5b55bd0b264393f2a.png"},48541:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/pam-conf-683aa9a8253d8036c8ed95b8dc3e9cc7.png"}}]);