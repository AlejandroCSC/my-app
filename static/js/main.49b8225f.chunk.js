(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),l=n(36),a=n.n(l),r=(n(45),n(8)),i=n(3),o=n(37),j=n(1);function u(){return Object(j.jsx)("header",{className:"bg-gray-900",children:Object(j.jsxs)("div",{className:"container mx-auto  flex justify-between",children:[Object(j.jsxs)("nav",{children:[Object(j.jsx)(r.c,{to:"/",exact:!0,activeClassName:"text-white",className:"inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-blue-800 text-4xl font-bold cursive tracking-widest",children:"Alejandro"}),Object(j.jsx)(r.c,{to:"/post",activeClassName:"text-blue-100 bg-blue-700",className:"inline-flex items-center py-3 px-3 my-8 rounded text-blue-200 hover:text-blue-800",children:"Blog Posts"}),Object(j.jsx)(r.c,{to:"/project",activeClassName:"text-blue-100 bg-blue-700",className:"inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800",children:"Projects"}),Object(j.jsx)(r.c,{to:"/about",activeClassName:"text-blue-100 bg-blue-700",className:"inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800",children:"About Me!"})]}),Object(j.jsx)("div",{className:"inline-flex py-3 px-3 my-6",children:Object(j.jsx)(o.SocialIcon,{url:"https://github.com/AlejandroCSC",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}})})]})})}var b=n.p+"static/media/alan-veas-unsplash.0af9523f.jpg";function x(){return Object(j.jsxs)("main",{children:[Object(j.jsx)("img",{src:b,alt:"Alan Veas Unsplah",className:"absolute object-cover w-full h-full"}),Object(j.jsx)("section",{className:"relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8",children:Object(j.jsx)("h1",{className:"text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name",children:"Hello!"})})]})}function d(){return Object(j.jsx)("h1",{children:"About Page!"})}function h(){return Object(j.jsx)("h1",{children:"SinglePost Page!"})}var m=n(40),g=n(39),p=n.n(g)()({projectId:"u61z2vuh",dataset:"production"});function f(){var e=Object(c.useState)(null),t=Object(m.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){p.fetch('*[_type == "post"]{\n        title,\n        slug,\n        mainImage{\n          asset->{\n            _id,\n            url\n          },\n          alt\n        }\n      }').then((function(e){return s(e)})).catch(console.error)}),[]),Object(j.jsx)("main",{className:"bg-green 100 min-h-screen p-12",children:Object(j.jsxs)("section",{className:"container mx-auto",children:[Object(j.jsx)("h1",{className:"text-5xl flec justify-center cursive",children:"Blog Posts Page"}),Object(j.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Welcome to my page of blog posts"}),Object(j.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:n&&n.map((function(e,t){return Object(j.jsx)("article",{children:Object(j.jsx)(r.b,{to:"/post/"+e.slug.current,children:Object(j.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400",children:[Object(j.jsx)("img",{src:e.mainImage.asset.url,alt:e.mainImage.alt,className:"w-full h-full rounded-r object-cover absolute"}),Object(j.jsx)("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4",children:Object(j.jsx)("h3",{className:"text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)})}))})]})})}function O(){return Object(j.jsx)("h1",{children:"Project Page!"})}var v=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{component:x,path:"/",exact:!0}),Object(j.jsx)(i.a,{component:d,path:"/about"}),Object(j.jsx)(i.a,{component:h,path:"/post/:slug"}),Object(j.jsx)(i.a,{component:f,path:"/post"}),Object(j.jsx)(i.a,{component:O,path:"/project"})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,l=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),l(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),N()},45:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.49b8225f.chunk.js.map