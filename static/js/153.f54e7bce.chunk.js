"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[153],{197:function(n,r,t){t.d(r,{SU:function(){return s},Y5:function(){return p},h6:function(){return u},r7:function(){return f},uV:function(){return l}});var e=t(4165),a=t(5861),o=t(1243),c="https://api.themoviedb.org/3/",i="53f1b4aea2aa13d93041449bfff0a14b",s=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"trending/movie/day?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r){var t,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({include_adult:!1,language:"en-US",page:1,query:r,api_key:i}),n.next=3,o.Z.get("".concat(c,"search/movie?").concat(t));case 3:return a=n.sent,n.abrupt("return",a.data.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"movie/").concat(r,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"movie/").concat(r,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"movie/").concat(r,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},4153:function(n,r,t){t.r(r),t.d(r,{default:function(){return U}});var e,a,o,c,i,s,u=t(4165),p=t(5861),l=t(9439),f=t(2791),d=t(7689),x=t(197),h=t(2546),v=t(168),g=t(7109),m=t(1087),Z=g.Z.div(e||(e=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  padding-bottom: 26px;\n  border-bottom: 1px solid black;\n"]))),b=g.Z.img(a||(a=(0,v.Z)(["\n  display: block;\n  border-radius: 5px;\n"]))),k=g.Z.div(o||(o=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n\n  > h1 {\n    font-size: 30px;\n  }\n\n  > p {\n    max-width: 800px;\n    font-size: 16px;\n    color: var(--primary-text-color);\n  }\n\n  > h3 {\n    font-size: 20px;\n  }\n"]))),w=g.Z.div(c||(c=(0,v.Z)(["\n  margin-top: 15px;\n  text-align: center;\n\n  > h3 {\n    margin-bottom: 15px;\n  }\n  > ul {\n    margin-top: 10px;\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n  }\n"]))),j=(0,g.Z)(m.rU)(i||(i=(0,v.Z)(["\n  text-decoration: none;\n  display: block;\n  margin-bottom: 15px;\n  outline: 1px solid var(--accent-color);\n\n  border-radius: 5px;\n  width: 60px;\n  padding: 4px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n  color: black;\n\n  transition: transform var(--transition), background-color var(--transition);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    background-color: var(--accent-color);\n  }\n"]))),y=t(184),S=function(n){var r=n.info,t=r.title,e=r.poster_path,a=r.vote_average,o=r.overview,c=r.genres,i=e?"https://image.tmdb.org/t/p/w342/".concat(e):"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",s=Math.round(10*a);return(0,y.jsxs)("main",{children:[(0,y.jsxs)(Z,{children:[(0,y.jsx)(b,{src:i,alt:t,width:342}),(0,y.jsxs)(k,{children:[(0,y.jsx)("h1",{children:t}),(0,y.jsxs)("p",{children:["User Score: ",s,"%"]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:o}),(0,y.jsx)("h3",{children:"Genres"}),(0,y.jsx)("p",{children:function(n){if(n)return n.map((function(n){return n.name})).join(", ")}(c)})]})]}),(0,y.jsxs)(w,{children:[(0,y.jsx)("h3",{children:"Additional information"}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:(0,y.jsx)(j,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(j,{to:"reviews",children:"Reviews"})})]}),(0,y.jsx)(f.Suspense,{fallback:(0,y.jsx)(h.Z,{}),children:(0,y.jsx)(d.j3,{})})]})]})},_=(0,g.Z)(m.rU)(s||(s=(0,v.Z)(["\n  text-decoration: none;\n  display: block;\n  margin-bottom: 20px;\n  outline: 1px solid var(--accent-color);\n  // background-color: var(--accent-color);\n  border-radius: 5px;\n  width: 60px;\n  padding: 4px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n  color: black;\n\n  transition: transform var(--transition), background-color var(--transition);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    // color: #ffffff;\n    background-color: var(--accent-color);\n  }\n"]))),U=function(){var n,r,t=(0,f.useState)({}),e=(0,l.Z)(t,2),a=e[0],o=e[1],c=(0,f.useState)(null),i=(0,l.Z)(c,2),s=i[0],v=i[1],g=(0,f.useState)(!1),m=(0,l.Z)(g,2),Z=m[0],b=m[1],k=(0,d.UO)().movieId,w=(0,d.TH)(),j=(0,f.useRef)(null!==(n=null===(r=w.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/");return(0,f.useEffect)((function(){function n(){return(n=(0,p.Z)((0,u.Z)().mark((function n(){var r,t;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b(!0),n.prev=1,n.next=4,(0,x.Y5)(k);case 4:if(0!==(r=n.sent).length){n.next=9;break}return t=new Error("Sorry, there is no info about movie you are searching for."),v(t),n.abrupt("return");case 9:o(r),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(1),console.log("error",n.t0),v(n.t0);case 16:return n.prev=16,b(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[1,12,16,19]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[k]),(0,y.jsxs)(y.Fragment,{children:[s&&(0,y.jsx)(d.Fg,{to:"/404"}),(0,y.jsx)(_,{to:j.current,children:"Back"}),Z&&(0,y.jsx)(h.Z,{}),(0,y.jsx)(S,{info:a})]})}}}]);
//# sourceMappingURL=153.f54e7bce.chunk.js.map