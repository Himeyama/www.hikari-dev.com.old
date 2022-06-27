"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9120],{55469:function(e,t,a){a.r(t),a.d(t,{assets:function(){return Z},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return g},metadata:function(){return y},toc:function(){return D}});var n=a(87462),r=a(63366),l=a(67294),u=a(3905),s=a(65488),o=a(85162),i=a(67855);function c(e){for(var t,a,n,r=e.map((function(e){return[new Date(Date.parse(e["\u516c\u8868\u65e5"])),e["\u5c45\u4f4f\u5730"]]})),l=r[0][0],u=r[r.length-1][0],s=parseInt((u-l)/864e5),o=(t=0,a=s,n=1,Array.from({length:(a-t)/n+1},(function(e,a){return t+a*n}))),i=new Date(l),c=0;i<=u;)o[c]=new Date(i),i.setDate(i.getDate()+1),c+=1;return o}function d(e,t,a){for(var n,r={},l=(0,i.Z)(e);!(n=l()).done;){var u=n.value;if(u["\u5c45\u4f4f\u5730"]==t){var s=new Date(Date.parse(u["\u516c\u8868\u65e5"])).toISOString();void 0===r[s]?r[s]=1:r[s]+=1}}for(var o,c=a.slice(),d=0,m=(0,i.Z)(a);!(o=m()).done;){var v=o.value,f=r[new Date(Date.parse(v)).toISOString()];c[d]=void 0===f?0:f,d+=1}return c}function m(e,t){var a=c(e).map((function(e){return e.getYear()+1900+"-"+(e.getMonth()+1)+"-"+e.getDate()})),n=function(e){for(var t=c(e),a=[],n=["#F44336","#E91E63","#9C27B0","#673Ab7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"],r=0,l=0,u=["\u5ca9\u56fd\u5e02","\u4e0b\u95a2\u5e02","\u5468\u5357\u5e02","\u5c71\u53e3\u5e02","\u4e0b\u677e\u5e02","\u9632\u5e9c\u5e02","\u5b87\u90e8\u5e02","\u5149\u5e02","\u5c71\u967d\u5c0f\u91ce\u7530\u5e02","\u67f3\u4e95\u5e02","\u5e73\u751f\u753a","\u5468\u9632\u5927\u5cf6\u753a","\u7f8e\u7962\u5e02","\u548c\u6728\u753a","\u7530\u5e03\u65bd\u753a","\u9577\u9580\u5e02","\u8429\u5e02","\u4e0a\u95a2\u753a","\u963f\u6b66\u753a"];l<u.length;l++){var s=u[l],o={label:s,data:[].concat(d(e,s,t)),borderColor:n[r],backgroundColor:n[r]};a.push(o),r+=1}return a}(e);if(-1!=t){a=a.slice(-t-1,-1);for(var r,l=(0,i.Z)(n);!(r=l()).done;){var u=r.value;u.data=u.data.slice(-t-1,-1)}}return{labels:a,datasets:n}}var v=a(55376),f=a(62728);function p(e){for(var t=e.sumCities,a=e.sumCities7,n=["\u5468\u9632\u5927\u5cf6\u753a","\u548c\u6728\u753a","\u4e0a\u95a2\u753a","\u7530\u5e03\u65bd\u753a","\u5e73\u751f\u753a","\u963f\u6b66\u753a"],r=[],u=1,c=0,d=["\u4e0b\u95a2\u5e02","\u5b87\u90e8\u5e02","\u5c71\u53e3\u5e02","\u8429\u5e02","\u9632\u5e9c\u5e02","\u4e0b\u677e\u5e02","\u5ca9\u56fd\u5e02","\u5149\u5e02","\u9577\u9580\u5e02","\u67f3\u4e95\u5e02","\u7f8e\u7962\u5e02","\u5468\u5357\u5e02","\u5c71\u967d\u5c0f\u91ce\u7530\u5e02","..."];c<d.length;c++){var m=d[c];if("..."!=m)r.push(l.createElement(o.Z,{key:u,value:m,label:m.slice(0,-1)},l.createElement("p",null,"\u967d\u6027\u8005\u5408\u8a08: ",t[m]," \u4eba"),l.createElement("p",null,"\u967d\u6027\u8005 1 \u65e5\u5e73\u5747 (\u904e\u53bb 1 \u9031\u9593): ",(a[m]/7).toFixed(2)," \u4eba"))),u+=1;else{for(var v,f=[],p=(0,i.Z)(n);!(v=p()).done;){var E=v.value;f.push(l.createElement(o.Z,{key:u,value:E,label:E.slice(0,-1)},l.createElement("p",null,"\u967d\u6027\u8005\u5408\u8a08: ",t[E]," \u4eba"),l.createElement("p",null,"\u967d\u6027\u8005 1 \u65e5\u5e73\u5747 (\u904e\u53bb 1 \u9031\u9593): ",(a[E]/7).toFixed(2)," \u4eba"))),u+=1}r.push(l.createElement(o.Z,{key:u,value:"etc",label:"\u305d\u306e\u4ed6"},l.createElement(s.Z,null,f))),u+=1}}return l.createElement(s.Z,null,r)}function E(){var e=(0,l.useState)(null),t=e[0],a=e[1],n=(0,l.useState)(!1),r=n[0],u=n[1],c=(0,l.useState)([]),d=(c[0],c[1]),f=(0,l.useState)({}),E=f[0],h=f[1],g=(0,l.useState)({}),b=g[0],y=g[1],Z=(0,l.useState)({}),D=Z[0],C=Z[1],k=(0,l.useState)({}),S=k[0],F=k[1],x=(0,l.useState)({}),w=x[0],B=x[1],A=(0,l.useState)({}),M=A[0],I=A[1],R=(0,l.useState)({}),j=R[0],L=R[1],O=(0,l.useState)({}),T=O[0],X=O[1];(0,l.useEffect)((function(){fetch("https://nishidayoshikatsu.github.io/covid19-yamaguchi-opendata/patients.json").then((function(e){return e.json()})).then((function(e){var t=e.data,a=m(t,-1);h(a),y(m(t,365)),C(m(t,183)),F(m(t,30)),B(m(t,14)),I(m(t,7));for(var n,r={},l=(0,i.Z)(a.datasets);!(n=l()).done;){var s=n.value,o=s.data.reduce((function(e,t){return e+t}),0);r[s.label]=o}r["\u5408\u8a08"]=Object.values(r).reduce((function(e,t){return e+t}),0),L(r);for(var c,v={},f=(0,i.Z)(a.datasets);!(c=f()).done;){var p=c.value,E=p.data.slice(-8,-1).reduce((function(e,t){return e+t}),0);v[p.label]=E}X(v),u(!0),d(e)}),(function(e){u(!0),a(e)}))}),[]);var _={maintainAspectRatio:!0,responsive:!0,plugins:{legend:{display:!1}}};return t?l.createElement("div",null,"Error: ",t.message):r?l.createElement("div",null,l.createElement("h2",null,"\u967d\u6027\u8005\u5408\u8a08 ",j["\u5408\u8a08"]," \u4eba"),l.createElement(s.Z,null,l.createElement(o.Z,{value:"all",label:"\u5168\u671f\u9593"},l.createElement(v.x1,{data:E,options:_})),l.createElement(o.Z,{value:"a-year",label:"1 \u5e74"},l.createElement(v.x1,{data:b,options:_})),l.createElement(o.Z,{value:"half-year",label:"\u534a\u5e74"},l.createElement(v.x1,{data:D,options:_})),l.createElement(o.Z,{value:"30days",label:"30 \u65e5",default:!0},l.createElement(v.x1,{data:S,options:_})),l.createElement(o.Z,{value:"14days",label:"14 \u65e5"},l.createElement(v.x1,{data:w,options:_})),l.createElement(o.Z,{value:"7days",label:"7 \u65e5"},l.createElement(v.x1,{data:M,options:_}))),l.createElement(p,{sumCities:j,sumCities7:T})):l.createElement("div",null,l.createElement("h2",null,"\u8aad\u307f\u8fbc\u307f\u4e2d..."))}f.kL.register.apply(f.kL,f.zX);var h=["components"],g={title:"\u5c71\u53e3\u770c\u5185\u306e\u65b0\u578b\u30b3\u30ed\u30ca\u30a6\u30a4\u30eb\u30b9\u60c5\u5831",tags:["React"]},b=void 0,y={unversionedId:"sars2-yamaguchi",id:"sars2-yamaguchi",title:"\u5c71\u53e3\u770c\u5185\u306e\u65b0\u578b\u30b3\u30ed\u30ca\u30a6\u30a4\u30eb\u30b9\u60c5\u5831",description:"",source:"@site/docs/sars2-yamaguchi.mdx",sourceDirName:".",slug:"/sars2-yamaguchi",permalink:"/docs/sars2-yamaguchi",draft:!1,tags:[{label:"React",permalink:"/docs/tags/react"}],version:"current",frontMatter:{title:"\u5c71\u53e3\u770c\u5185\u306e\u65b0\u578b\u30b3\u30ed\u30ca\u30a6\u30a4\u30eb\u30b9\u60c5\u5831",tags:["React"]},sidebar:"defaultSidebar",previous:{title:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",permalink:"/docs/"}},Z={},D=[],C={toc:D};function k(e){var t=e.components,a=(0,r.Z)(e,h);return(0,u.kt)("wrapper",(0,n.Z)({},C,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)(E,{mdxType:"Cov2Wave"}))}k.isMDXComponent=!0}}]);