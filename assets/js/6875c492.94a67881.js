"use strict";(self.webpackChunkwww_hikari_dev_com=self.webpackChunkwww_hikari_dev_com||[]).push([[610],{78665:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(63366),l=a(67294),n=a(86010),i=a(87014),s=a(39960),m="sidebar_a9qW",o="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",g="sidebarItem_CF0Q",u="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",p=a(95999);function h(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))}))))}var v=["sidebar","toc","children"];function E(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,r.Z)(e,v),o=t&&t.items.length>0;return l.createElement(i.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(h,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},36299:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),l=a(95999),n=a(71750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&r.createElement(n.Z,{permalink:i,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},48902:function(e,t,a){a.d(t,{Z:function(){return A}});var r=a(67294),l=a(86010),n=a(3905),i=a(95999),s=a(39960),m=a(44996),o=a(29366),c=a(18780),g=a(66),u=a(87462),d=a(63366),p="iconEdit_dcUD",h=["className"];function v(e){var t=e.className,a=(0,d.Z)(e,h);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(p,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function E(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},r.createElement(v,null),r.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var b="blogPostTitle_rzP5",f="blogPostData_Zg1s",_="blogPostDetailsFull_h6_j",N=a(7774),Z="tags_XVD_",k="tag_JSN8";function P(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(Z,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:k},r.createElement(N.Z,{name:t,permalink:a}))}))))}var w="image_o0gy";function T(e){return e.href?r.createElement(s.Z,e):r.createElement(r.Fragment,null,e.children)}function y(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,s=t.email,m=n||s&&"mailto:"+s||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(T,{href:m},r.createElement("img",{className:w,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(T,{href:m,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var I="authorCol_FlmR",L="imageOnlyAuthorRow_trpF",M="imageOnlyAuthorCol_S2np";function R(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?L:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?M:I),key:t},r.createElement(y,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function A(e){var t,a,u,d=(u=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return u(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,m.C)().withBaseUrl,h=e.children,v=e.frontMatter,N=e.assets,Z=e.metadata,k=e.truncated,w=e.isBlogPostPage,T=void 0!==w&&w,y=Z.date,I=Z.formattedDate,L=Z.permalink,M=Z.tags,A=Z.readingTime,C=Z.title,x=Z.editUrl,U=Z.authors,D=null!=(t=N.image)?t:v.image,B=!T&&k,F=M.length>0,O=T?"h1":"h2";return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:b,itemProp:"headline"},T?C:r.createElement(s.Z,{itemProp:"url",to:L},C)),r.createElement("div",{className:(0,l.Z)(f,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},I),void 0!==A&&r.createElement(r.Fragment,null," \xb7 ",d(A))),r.createElement(R,{authors:U,assets:N})),D&&r.createElement("meta",{itemProp:"image",content:p(D,{absolute:!0})}),r.createElement("div",{id:T?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:g.Z},h)),(F||k)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[_]=T,a))},F&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":B})},r.createElement(P,{tags:M})),T&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(E,{editUrl:x})),B&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":F})},r.createElement(s.Z,{to:Z.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:C})},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(67294),l=a(39960),n=a(78665),i=a(48902),s=a(95999),m=a(29366),o=a(36299);function c(e){var t,a=e.metadata,c=e.items,g=e.sidebar,u=e.listMetadata,d=a.allTagsPath,p=a.name,h=a.count,v=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:v(h),tagName:p});return r.createElement(n.Z,{title:E,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:g},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,E),r.createElement(l.Z,{href:d},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})),r.createElement(o.Z,{metadata:u}))}},71750:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(67294),l=a(39960);function n(e){var t=e.permalink,a=e.title,n=e.subLabel;return r.createElement(l.Z,{className:"pagination-nav__link",to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(67294),l=a(86010),n=a(39960),i="tag_hD8n",s="tagRegular_D6E_",m="tagWithCount_i0QQ";function o(e){var t,a=e.permalink,o=e.name,c=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(i,(t={},t[s]=!c,t[m]=c,t))},o,c&&r.createElement("span",null,c))}}}]);