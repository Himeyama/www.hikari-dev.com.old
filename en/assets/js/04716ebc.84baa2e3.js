"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2156],{85162:(e,a,t)=>{t.d(a,{Z:()=>i});var l=t(67294),n=t(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>u});var l=t(87462),n=t(67294),s=t(86010),i=t(72389),r=t(80008),o=t(39235),m=t(97736);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:a,block:t,defaultValue:i,values:d,groupId:u,className:g}=e,c=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??c.map((e=>{let{props:{value:a,label:t,attributes:l}}=e;return{value:a,label:t,attributes:l}})),b=(0,r.l)(k,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??c.find((e=>e.props.default))?.props.value??c[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:v}=(0,o.U)(),[y,T]=(0,n.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:_}=(0,m.o5)();if(null!=u){const e=h[u];null!=e&&e!==y&&k.some((a=>a.value===e))&&T(e)}const N=e=>{const a=e.currentTarget,t=x.indexOf(a),l=k[t].value;l!==y&&(_(a),T(l),null!=u&&v(u,String(l)))},Z=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}a?.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",p.tabList)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},g)},k.map((e=>{let{value:a,label:t,attributes:i}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:e=>x.push(e),onKeyDown:Z,onFocus:N,onClick:N},i,{className:(0,s.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":y===a})}),t??a)}))),a?(0,n.cloneElement)(c.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},c.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function u(e){const a=(0,i.Z)();return n.createElement(d,(0,l.Z)({key:String(a)},e))}},79363:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>m,toc:()=>d});var l=t(87462),n=(t(67294),t(3905)),s=(t(8209),t(65488)),i=t(85162);const r={tags:["\u6a5f\u68b0\u5b66\u7fd2","\u5206\u985e","Python","Matplotlib","pyplot","scikit-learn","k\u6700\u8fd1\u508d\u6cd5","kNN","\u30cb\u30e5\u30fc\u30e9\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af","LightGBM","\u6c7a\u5b9a\u6728","\u30e9\u30f3\u30c0\u30e0\u30d5\u30a9\u30ec\u30b9\u30c8","SVM","\u30b5\u30dd\u30fc\u30c8\u30d9\u30af\u30bf\u30fc\u30de\u30b7\u30fc\u30f3","\u30ed\u30b8\u30b9\u30c6\u30a3\u30c3\u30af\u56de\u5e30","\u30cb\u30e5\u30fc\u30e9\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af","AI"],title:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u5206\u985e\u554f\u984c\u3092\u3056\u307e\u3056\u307e\u306a\u30e2\u30c7\u30eb\u3067\u8a66\u3059"},o=void 0,m={permalink:"/en/blog/2022/07/03/classifier",editUrl:"https://github.com/himeyama/www.hikari-dev.com/blog/2022-07-03-classifier/index.mdx",source:"@site/blog/2022-07-03-classifier/index.mdx",title:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u5206\u985e\u554f\u984c\u3092\u3056\u307e\u3056\u307e\u306a\u30e2\u30c7\u30eb\u3067\u8a66\u3059",description:"\u9818\u57df\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b\u95a2\u6570\u306e\u7528\u610f",date:"2022-07-03T00:00:00.000Z",formattedDate:"July 3, 2022",tags:[{label:"\u6a5f\u68b0\u5b66\u7fd2",permalink:"/en/blog/tags/\u6a5f\u68b0\u5b66\u7fd2"},{label:"\u5206\u985e",permalink:"/en/blog/tags/\u5206\u985e"},{label:"Python",permalink:"/en/blog/tags/python"},{label:"Matplotlib",permalink:"/en/blog/tags/matplotlib"},{label:"pyplot",permalink:"/en/blog/tags/pyplot"},{label:"scikit-learn",permalink:"/en/blog/tags/scikit-learn"},{label:"k\u6700\u8fd1\u508d\u6cd5",permalink:"/en/blog/tags/k\u6700\u8fd1\u508d\u6cd5"},{label:"kNN",permalink:"/en/blog/tags/k-nn"},{label:"\u30cb\u30e5\u30fc\u30e9\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",permalink:"/en/blog/tags/\u30cb\u30e5\u30fc\u30e9\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"},{label:"LightGBM",permalink:"/en/blog/tags/light-gbm"},{label:"\u6c7a\u5b9a\u6728",permalink:"/en/blog/tags/\u6c7a\u5b9a\u6728"},{label:"\u30e9\u30f3\u30c0\u30e0\u30d5\u30a9\u30ec\u30b9\u30c8",permalink:"/en/blog/tags/\u30e9\u30f3\u30c0\u30e0\u30d5\u30a9\u30ec\u30b9\u30c8"},{label:"SVM",permalink:"/en/blog/tags/svm"},{label:"\u30b5\u30dd\u30fc\u30c8\u30d9\u30af\u30bf\u30fc\u30de\u30b7\u30fc\u30f3",permalink:"/en/blog/tags/\u30b5\u30dd\u30fc\u30c8\u30d9\u30af\u30bf\u30fc\u30de\u30b7\u30fc\u30f3"},{label:"\u30ed\u30b8\u30b9\u30c6\u30a3\u30c3\u30af\u56de\u5e30",permalink:"/en/blog/tags/\u30ed\u30b8\u30b9\u30c6\u30a3\u30c3\u30af\u56de\u5e30"},{label:"AI",permalink:"/en/blog/tags/ai"}],readingTime:2.455,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["\u6a5f\u68b0\u5b66\u7fd2","\u5206\u985e","Python","Matplotlib","pyplot","scikit-learn","k\u6700\u8fd1\u508d\u6cd5","kNN","\u30cb\u30e5\u30fc\u30e9\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af","LightGBM","\u6c7a\u5b9a\u6728","\u30e9\u30f3\u30c0\u30e0\u30d5\u30a9\u30ec\u30b9\u30c8","SVM","\u30b5\u30dd\u30fc\u30c8\u30d9\u30af\u30bf\u30fc\u30de\u30b7\u30fc\u30f3","\u30ed\u30b8\u30b9\u30c6\u30a3\u30c3\u30af\u56de\u5e30","\u30cb\u30e5\u30fc\u30e9\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af","AI"],title:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u5206\u985e\u554f\u984c\u3092\u3056\u307e\u3056\u307e\u306a\u30e2\u30c7\u30eb\u3067\u8a66\u3059"},prevItem:{title:"git \u306e\u30e1\u30e2",permalink:"/en/blog/2022/07/05/git-memo"},nextItem:{title:"JavaScript \u306e\u30e1\u30e2",permalink:"/en/blog/2022/06/27/js"}},p={authorsImageUrls:[]},d=[{value:"\u9818\u57df\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b\u95a2\u6570\u306e\u7528\u610f",id:"\u9818\u57df\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b\u95a2\u6570\u306e\u7528\u610f",level:2},{value:"iris \u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f",id:"iris-\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f",level:2},{value:"\u69d8\u3005\u306a\u30e2\u30c7\u30eb\u3092\u8a66\u3059",id:"\u69d8\u3005\u306a\u30e2\u30c7\u30eb\u3092\u8a66\u3059",level:2},{value:"kNN (k \u6700\u8fd1\u508d\u6cd5)",id:"knn-k-\u6700\u8fd1\u508d\u6cd5",level:3},{value:"\u6c7a\u5b9a\u6728",id:"\u6c7a\u5b9a\u6728",level:3},{value:"\u30e9\u30f3\u30c0\u30e0\u30d5\u30a9\u30ec\u30b9\u30c8",id:"\u30e9\u30f3\u30c0\u30e0\u30d5\u30a9\u30ec\u30b9\u30c8",level:3},{value:"SVM (\u30b5\u30dd\u30fc\u30c8\u30d9\u30af\u30bf\u30fc\u30de\u30b7\u30fc\u30f3)",id:"svm-\u30b5\u30dd\u30fc\u30c8\u30d9\u30af\u30bf\u30fc\u30de\u30b7\u30fc\u30f3",level:3},{value:"\u30ed\u30b8\u30b9\u30c6\u30a3\u30c3\u30af\u56de\u5e30",id:"\u30ed\u30b8\u30b9\u30c6\u30a3\u30c3\u30af\u56de\u5e30",level:3},{value:"\u30cb\u30e5\u30fc\u30e9\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",id:"\u30cb\u30e5\u30fc\u30e9\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",level:3},{value:"LightGBM",id:"lightgbm",level:3}],u={toc:d},g="wrapper";function c(e){let{components:a,...r}=e;return(0,n.kt)(g,(0,l.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u9818\u57df\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b\u95a2\u6570\u306e\u7528\u610f"},"\u9818\u57df\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b\u95a2\u6570\u306e\u7528\u610f"),(0,n.kt)("p",null,"\u4e0b\u306e\u30b3\u30fc\u30c9\u306f\u9818\u57df\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b\u95a2\u6570 ",(0,n.kt)("inlineCode",{parentName:"p"},"visualize_model")," \u3067\u3059\u3002\n\u3044\u308d\u3044\u308d\u53c2\u8003\u306b\u3057\u306a\u304c\u3089\u9069\u5f53\u306b\u4f5c\u308a\u307e\u3057\u305f\u3002\n\u7db2\u76ee\u72b6\u306e\u4e00\u3064\u4e00\u3064\u306e\u70b9\u306b\u5bfe\u3057\u4e88\u6e2c\u3092\u884c\u3044\u9818\u57df\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b\u4ed5\u7d44\u307f\u3067\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"import numpy as np\nimport matplotlib.pyplot as plt\n\ndef visualize_model(X, y, model, feature_names, target_names, step: float = 0.01):\n    x1 = np.arange(X[:, 0].min(), X[:, 0].max(), step)\n    x2 = np.arange(X[:, 1].min(), X[:, 1].max(), step)\n\n    xx1, xx2 = np.meshgrid(x1, x2)\n    x1x2 = np.array([xx1.ravel(), xx2.ravel()]).T\n\n    fig, ax = plt.subplots()\n    ax.contourf(\n        xx1,\n        xx2,\n        model.predict(x1x2).reshape((x2.size, x1.size)),\n        alpha=0.2\n    )\n\n    ax.set_xlabel(feature_names[0])\n    ax.set_ylabel(feature_names[1])\n    for _y in np.unique(y):\n        ax.scatter(*X[y == _y].T, label=target_names[_y])\n    ax.legend()\n    plt.show()\n")),(0,n.kt)("h2",{id:"iris-\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f"},"iris \u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f"),(0,n.kt)("p",null,"iris \u30c7\u30fc\u30bf\u3092\u7528\u610f\u3057\u3001\u4eca\u56de\u306f ",(0,n.kt)("inlineCode",{parentName:"p"},"sepal width")," \u3068 ",(0,n.kt)("inlineCode",{parentName:"p"},"sepal length")," \u306b\u3088\u308b\u5b66\u7fd2\u3068\u4e88\u6e2c\u3092\u884c\u3044\u307e\u3059\u3002\n(\u7279\u5fb4\u91cf\u306f 4 \u3064\u306e\u3046\u3061 2 \u3064\u3060\u3051\u4f7f\u7528\u3057\u307e\u3059\u3002)"),(0,n.kt)("p",null,"\u4eca\u56de\u3001\u8a55\u4fa1\u3057\u306a\u3044\u306e\u3067\u5168\u3066\u8a13\u7df4\u30c7\u30fc\u30bf\u3067\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"from sklearn.datasets import load_iris\n\niris = load_iris()\nX, y = iris.data[:, [0, 1]], iris.target\nfeature_names = iris.feature_names[0:2]\n")),(0,n.kt)("h2",{id:"\u69d8\u3005\u306a\u30e2\u30c7\u30eb\u3092\u8a66\u3059"},"\u69d8\u3005\u306a\u30e2\u30c7\u30eb\u3092\u8a66\u3059"),(0,n.kt)("h3",{id:"knn-k-\u6700\u8fd1\u508d\u6cd5"},"kNN (k \u6700\u8fd1\u508d\u6cd5)"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"\u30b3\u30fc\u30c9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"from sklearn.neighbors import KNeighborsClassifier\n\nmodel = KNeighborsClassifier(n_neighbors=3)\nmodel.fit(X, y)\nvisualize_model(X, y, model, feature_names, iris.target_names)\n"))),(0,n.kt)(i.Z,{value:"\u7d50\u679c",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kNN",src:t(30353).Z,width:"432",height:"288"})))),(0,n.kt)("h3",{id:"\u6c7a\u5b9a\u6728"},"\u6c7a\u5b9a\u6728"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"\u30b3\u30fc\u30c9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"from sklearn.tree import DecisionTreeClassifier\n\nmodel = DecisionTreeClassifier()\nmodel.fit(X, y)\nvisualize_model(X, y, model, feature_names, iris.target_names)\n"))),(0,n.kt)(i.Z,{value:"\u7d50\u679c",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"DecisionTree",src:t(7115).Z,width:"432",height:"288"})))),(0,n.kt)("h3",{id:"\u30e9\u30f3\u30c0\u30e0\u30d5\u30a9\u30ec\u30b9\u30c8"},"\u30e9\u30f3\u30c0\u30e0\u30d5\u30a9\u30ec\u30b9\u30c8"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"\u30b3\u30fc\u30c9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"from sklearn.ensemble import RandomForestClassifier\n\nmodel = RandomForestClassifier()\nmodel.fit(X, y)\nvisualize_model(X, y, model, feature_names, iris.target_names)\n"))),(0,n.kt)(i.Z,{value:"\u7d50\u679c",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RandomForest",src:t(90742).Z,width:"432",height:"288"})))),(0,n.kt)("h3",{id:"svm-\u30b5\u30dd\u30fc\u30c8\u30d9\u30af\u30bf\u30fc\u30de\u30b7\u30fc\u30f3"},"SVM (\u30b5\u30dd\u30fc\u30c8\u30d9\u30af\u30bf\u30fc\u30de\u30b7\u30fc\u30f3)"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"\u30b3\u30fc\u30c9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"from sklearn.svm import SVC\n\nmodel = SVC()\nmodel.fit(X, y)\nvisualize_model(X, y, model, feature_names, iris.target_names)\n"))),(0,n.kt)(i.Z,{value:"\u7d50\u679c",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SVM",src:t(30906).Z,width:"432",height:"288"})))),(0,n.kt)("h3",{id:"\u30ed\u30b8\u30b9\u30c6\u30a3\u30c3\u30af\u56de\u5e30"},"\u30ed\u30b8\u30b9\u30c6\u30a3\u30c3\u30af\u56de\u5e30"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"\u30b3\u30fc\u30c9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"from sklearn.linear_model import LogisticRegression\n\nmodel = LogisticRegression()\nmodel.fit(X, y)\nvisualize_model(X, y, model, feature_names, iris.target_names)\n"))),(0,n.kt)(i.Z,{value:"\u7d50\u679c",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LogisticRegression",src:t(47991).Z,width:"432",height:"288"})))),(0,n.kt)("h3",{id:"\u30cb\u30e5\u30fc\u30e9\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"},"\u30cb\u30e5\u30fc\u30e9\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"\u30b3\u30fc\u30c9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"from sklearn.neural_network import MLPClassifier\n\nmodel = MLPClassifier()\nmodel.fit(X, y)\nvisualize_model(X, y, model, feature_names, iris.target_names)\n"))),(0,n.kt)(i.Z,{value:"\u7d50\u679c",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"MLP",src:t(72950).Z,width:"432",height:"288"})))),(0,n.kt)("h3",{id:"lightgbm"},"LightGBM"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"\u30b3\u30fc\u30c9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"from lightgbm import LGBMClassifier\n\nmodel = LGBMClassifier()\nmodel.fit(X, y)\nvisualize_model(X, y, model, feature_names, iris.target_names)\n"))),(0,n.kt)(i.Z,{value:"\u7d50\u679c",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LightGBM",src:t(43566).Z,width:"432",height:"288"})))))}c.isMDXComponent=!0},7115:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/DecisionTree-1a931c4b6e0813caeab7d2cb625e4adf.png"},43566:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/LGBM-036f18371975390a1c55944c80ca482d.png"},47991:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/LogisticRegression-fa0a352990826880dd84f7fa3173245b.png"},72950:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/MLP-626707ad1f9e5011ffff39b8fb3586cb.png"},90742:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/RandomForest-f482d6aa1835fe83c1c3a7dfc5e4f553.png"},30906:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/SVM-73d05e0d1538c81ec96740c07262468f.png"},30353:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/kNN-28fc5686c7a1374860ad658813b97f67.png"}}]);