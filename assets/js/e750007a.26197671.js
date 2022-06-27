"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[699],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),d=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return s.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,g=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return n?s.createElement(g,i(i({ref:t},p),{},{components:n})):s.createElement(g,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var d=2;d<o;d++)i[d]=n[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1715:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return m}});var s=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],r={title:"WSL \u3067 Ubuntu \u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3092\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3067\u63a5\u7d9a\u53ef\u80fd\u306a\u74b0\u5883\u3092\u4f5c\u308b",tags:["Linux","WSL","Ubuntu","xrdp"]},l=void 0,d={permalink:"/blog/2022/06/24/wsl-xrdp",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-06-24-wsl-xrdp/index.md",source:"@site/blog/2022-06-24-wsl-xrdp/index.md",title:"WSL \u3067 Ubuntu \u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3092\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3067\u63a5\u7d9a\u53ef\u80fd\u306a\u74b0\u5883\u3092\u4f5c\u308b",description:"WSL with Ubuntu Desktop",date:"2022-06-24T00:00:00.000Z",formattedDate:"2022\u5e746\u670824\u65e5",tags:[{label:"Linux",permalink:"/blog/tags/linux"},{label:"WSL",permalink:"/blog/tags/wsl"},{label:"Ubuntu",permalink:"/blog/tags/ubuntu"},{label:"xrdp",permalink:"/blog/tags/xrdp"}],readingTime:4.185,truncated:!1,authors:[],frontMatter:{title:"WSL \u3067 Ubuntu \u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3092\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3067\u63a5\u7d9a\u53ef\u80fd\u306a\u74b0\u5883\u3092\u4f5c\u308b",tags:["Linux","WSL","Ubuntu","xrdp"]},prevItem:{title:"JavaScript \u306e\u30e1\u30e2",permalink:"/blog/2022/06/27/js"},nextItem:{title:"\u307f\u3093\u306a\u306e\u81ea\u52d5\u7ffb\u8a33\uff20TexTra \u306e Web API \u3092\u53e9\u3044\u3066\u7ffb\u8a33\u3059\u308b\u7c21\u5358\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u3066\u307f\u305f",permalink:"/blog/2022/06/22/TexTra-ruby"}},p={authorsImageUrls:[]},m=[{value:"\u516c\u958b\u9375\u306e\u53d6\u5f97",id:"\u516c\u958b\u9375\u306e\u53d6\u5f97",level:2},{value:"WSL \u5074\u306e\u8a2d\u5b9a",id:"wsl-\u5074\u306e\u8a2d\u5b9a",level:2},{value:"Systemd \u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306e\u74b0\u5883\u3092\u4f5c\u6210",id:"systemd-\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306e\u74b0\u5883\u3092\u4f5c\u6210",level:3},{value:"\u516c\u958b\u9375\u306e\u767b\u9332\u3068\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u74b0\u5883\u306e\u4f5c\u6210",id:"\u516c\u958b\u9375\u306e\u767b\u9332\u3068\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u74b0\u5883\u306e\u4f5c\u6210",level:3},{value:"\u6b21\u56de\u4ee5\u964d\u306e\u8d77\u52d5",id:"\u6b21\u56de\u4ee5\u964d\u306e\u8d77\u52d5",level:2}],u={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"WSL with Ubuntu Desktop",src:n(8897).Z,width:"1282",height:"832"})),(0,o.kt)("p",null,"\u4e0a\u306e\u753b\u50cf\u306e\u3088\u3046\u306b\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u63a5\u7d9a\u306b\u3088\u3063\u3066\u3001WSL \u306e Ubuntu \u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u306b\u63a5\u7d9a\u3059\u308b\u74b0\u5883\u3092\u4f5c\u308b\u3053\u3068\u304c\u76ee\u6a19\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u3068\u3066\u3082\u9762\u5012\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u516c\u958b\u9375\u306e\u53d6\u5f97"},"\u516c\u958b\u9375\u306e\u53d6\u5f97"),(0,o.kt)("p",null,"Windows \u5074\u304b\u3089 WSL \u306b ssh \u3067\u304d\u308b\u3088\u3046\u306b\u516c\u958b\u9375\u3092\u767b\u9332\u3057\u307e\u3059\u3002\nssh \u3092\u4f7f\u7528\u3059\u308b\u306e\u306f\u3001RDP \u306e\u30dd\u30fc\u30c8\u8ee2\u9001\u306e\u305f\u3081\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ps1",metastring:"showLineNumbers title='Windows \u5074'",showLineNumbers:!0,title:"'Windows","\u5074'":!0},"PS > cat .\\.ssh\\id_ed25519.pub\nssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKYztjZfIVMl5o0J2DrigTsl1XgbSKMUgYCpfOfhMtmw hikari@B450M-K\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Windows \u3067\u516c\u958b\u9375\u3092\u4f5c\u6210\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"PS > ssh-keygen -t ed25519\n")))),(0,o.kt)("h2",{id:"wsl-\u5074\u306e\u8a2d\u5b9a"},"WSL \u5074\u306e\u8a2d\u5b9a"),(0,o.kt)("h3",{id:"systemd-\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306e\u74b0\u5883\u3092\u4f5c\u6210"},"Systemd \u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306e\u74b0\u5883\u3092\u4f5c\u6210"),(0,o.kt)("p",null,"WSL \u306f Systemd \u304c\u52d5\u304d\u307e\u305b\u3093\u3002\n\u7121\u7406\u304f\u308a\u52d5\u304b\u3059\u305f\u3081\u306e\u30c4\u30fc\u30eb genie \u3092\u7528\u3044\u308b\u3068\u3046\u307e\u304f\u3044\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u8a73\u3057\u304f\u306f\u3001\u3088\u304f\u308f\u304b\u3089\u306a\u3044\u306e\u3067\u3001",(0,o.kt)("a",{parentName:"p",href:"https://qiita.com/sakai00kou/items/0b401faf6dd72ad63d87"},"https://qiita.com/sakai00kou/items/0b401faf6dd72ad63d87")," \u306e\u8a18\u4e8b\u3092\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u306f\u96d1\u306b\u3042\u307e\u308a\u7406\u89e3\u3057\u306a\u3044\u307e\u307e\u66f8\u3044\u3066\u3044\u308b\u306e\u3067\u3001\n\u81ea\u5df1\u8cac\u4efb\u3067\u304a\u9858\u3044\u3057\u307e\u3059\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"sudo apt install -y daemonize\n\nwget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb\nsudo apt install -y ./packages-microsoft-prod.deb\nrm ./packages-microsoft-prod.deb\nsudo apt update\nsudo apt install -y apt-transport-https dotnet-sdk-5.0 aspnetcore-runtime-5.0\n\nsudo wget -O /etc/apt/trusted.gpg.d/wsl-transdebian.gpg https://arkane-systems.github.io/wsl-transdebian/apt/wsl-transdebian.gpg\nsudo chmod a+r /etc/apt/trusted.gpg.d/wsl-transdebian.gpg\nsudo tee /etc/apt/sources.list.d/wsl-transdebian.list << EOF > /dev/null\ndeb https://arkane-systems.github.io/wsl-transdebian/apt/ $(lsb_release -cs) main\ndeb-src https://arkane-systems.github.io/wsl-transdebian/apt/ $(lsb_release -cs) main\nEOF\nsudo apt update\nsudo apt install -y systemd-genie\n\nsudo rm /etc/systemd/system/multipath-tools.service\nsudo rm /etc/systemd/system/sysinit.target.wants/multipathd.service\nsudo rm /etc/systemd/system/sockets.target.wants/multipathd.socket\nsudo rm /etc/systemd/system/multi-user.target.wants/atd.service\nsudo e2label /dev/sdc cloudimg-rootfs\nsudo systemctl disable multipathd.socket\n\ngenie -s\n")),(0,o.kt)("h3",{id:"\u516c\u958b\u9375\u306e\u767b\u9332\u3068\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u74b0\u5883\u306e\u4f5c\u6210"},"\u516c\u958b\u9375\u306e\u767b\u9332\u3068\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u74b0\u5883\u306e\u4f5c\u6210"),(0,o.kt)("p",null,"\u516c\u958b\u9375\u306e\u767b\u9332\u3068\u3001\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u74b0\u5883\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'$ sudo apt update\n$ sudo apt install -y xrdp ubuntu-desktop\n\n# snapd \u306e\u524a\u9664\nsudo apt purge -y snapd\n\n# ssh \u9375\u306e\u4f5c\u6210\n$ ssh-keygen -f $HOME/.ssh/id_ed25519 -t ed25519 -N ""\n\n# ssh \u306e\u958b\u59cb\n$ sudo service ssh start\n\n$ sudo gpasswd -a xrdp ssl-cert\n\n# xrdp \u306e\u30b5\u30fc\u30d3\u30b9\u958b\u59cb\n$ sudo service xrdp start\n$ sudo service dbus start\n\n# \u516c\u958b\u9375\u306e\u767b\u9332\n$ echo ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKYztjZfIVMl5o0J2DrigTsl1XgbSKMUgYCpfOfhMtmw hikari@B450M-K | tee -a .ssh/authorized_keys\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h3",{parentName:"div",id:"\u65e5\u672c\u8a9e\u5316\u306e\u8a2d\u5b9a"},"\u65e5\u672c\u8a9e\u5316\u306e\u8a2d\u5b9a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"wget -q https://www.ubuntulinux.jp/ubuntu-ja-archive-keyring.gpg -O- | sudo apt-key add -\nwget -q https://www.ubuntulinux.jp/ubuntu-jp-ppa-keyring.gpg -O- | sudo apt-key add -\nsudo wget https://www.ubuntulinux.jp/sources.list.d/focal.list -O /etc/apt/sources.list.d/ubuntu-ja.list\nsudo apt update\nsudo apt install -y language-pack-ja manpages-ja ubuntu-defaults-ja \nsudo update-locale LANG=ja_JP.UTF8\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h3",{parentName:"div",id:"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"sudo apt install -y gnome-tweaks gnome-shell-extension-ubuntu-dock \\\n    gnome-shell-extensions gnome-shell-extension-prefs \\\n    yaru-theme-icon yaru-theme-gtk yaru-theme-gnome-shell\n\ngnome-extensions enable ubuntu-dock@ubuntu.com\ngsettings set org.gnome.shell disable-user-extensions false\ngsettings set org.gnome.shell.extensions.dash-to-dock transparency-mode 'DYNAMIC'\ngsettings set org.gnome.shell.extensions.dash-to-dock customize-alphas true\ngsettings set org.gnome.shell.extensions.dash-to-dock background-opacity 0.8\ngsettings set org.gnome.shell.extensions.dash-to-dock max-alpha 0.8\ngsettings set org.gnome.shell.extensions.dash-to-dock show-apps-at-top true\ngsettings set org.gnome.shell.extensions.dash-to-dock custom-theme-shrink true\ngsettings set org.gnome.shell.extensions.dash-to-dock dock-fixed true\ngsettings set org.gnome.shell.extensions.dash-to-dock dock-position 'BOTTOM'\ngsettings set org.gnome.shell.extensions.dash-to-dock dash-max-icon-size 30\ngsettings set org.gnome.shell.extensions.dash-to-dock extend-height true\ngnome-extensions enable user-theme@gnome-shell-extensions.gcampax.github.com\ngsettings set org.gnome.shell.extensions.user-theme name Yaru-red-dark\ngsettings set org.gnome.desktop.wm.preferences button-layout appmenu:minimize,maximize,close\ngsettings set org.gnome.desktop.interface gtk-theme Yaru\ngsettings set org.gnome.desktop.sound theme-name Yaru\ngsettings set org.gnome.desktop.interface icon-theme Yaru\ngsettings set org.gnome.desktop.interface cursor-theme Yaru\n")))),(0,o.kt)("p",null,"\u516c\u958b\u9375\u306e\u767b\u9332\u5f8c\u3001Windows \u5074\u3067 ssh \u304c\u53ef\u80fd\u304b\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="ssh \u3067 WSL \u306b\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u304b\u30c6\u30b9\u30c8"',title:'"ssh',"\u3067":!0,WSL:!0,'\u306b\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u304b\u30c6\u30b9\u30c8"':!0},"PS > ssh $(wsl -- hostname -I).trim() -l $(wsl -- id -un)\n$ exit\n")),(0,o.kt)("p",null,"\u518d\u3073\u3001\u30dd\u30fc\u30c8\u8ee2\u9001\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066 WSL \u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ps1"},"PS > ssh $(wsl -- hostname -I).trim() -l $(wsl -- id -un) -L13389:localhost:3389\n")),(0,o.kt)("p",null,"\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u63a5\u7d9a\u3092\u958b\u304d\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:13389")," \u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"WSL XRDP Ubuntu",src:n(554).Z,width:"882",height:"620"})),(0,o.kt)("p",null,"\u30d1\u30b9\u30ef\u30fc\u30c9\u8a8d\u8a3c\u7d42\u4e86\u5f8c\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"WSL with Ubuntu Desktop",src:n(8897).Z,width:"1282",height:"832"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h2",{parentName:"div",id:"\u8a8d\u8a3c\u5f8c\u753b\u9762\u304c\u9ed2\u304f\u306a\u308b\u5834\u5408"},"\u8a8d\u8a3c\u5f8c\u753b\u9762\u304c\u9ed2\u304f\u306a\u308b\u5834\u5408"),(0,o.kt)("p",{parentName:"div"},"\u4e00\u5ea6 WSL \u3092\u7d42\u4e86\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wsl -t Ubuntu\n")))),(0,o.kt)("h2",{id:"\u6b21\u56de\u4ee5\u964d\u306e\u8d77\u52d5"},"\u6b21\u56de\u4ee5\u964d\u306e\u8d77\u52d5"),(0,o.kt)("p",null,"\u7d42\u4e86\u3059\u308b\u3054\u3068\u306b\u6bce\u56de\u30dd\u30fc\u30c8\u8ee2\u9001\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ps1"},"PS > ssh $(wsl -- hostname -I).trim() -l $(wsl -- id -un) -L13389:localhost:3389\n")),(0,o.kt)("p",null,"genie \u306f\u81ea\u52d5\u8d77\u52d5\u3057\u306a\u3044\u305f\u3081\u3001\u6bce\u56de\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"genie -s # \u5c11\u3057\u5f85\u3064\n")))}c.isMDXComponent=!0},8897:function(e,t,n){t.Z=n.p+"assets/images/wsl-with-ubuntu-desktop-93f2341ee9c8f8f48cba12134fdd3879.png"},554:function(e,t,n){t.Z=n.p+"assets/images/wsl-xrdp-ubuntu-5cad036b1434f3fdcf85e8cb6d98a673.png"}}]);