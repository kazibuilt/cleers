import{_ as F,r as C,w as N,d as o,e as u,f as r,j as q,k as p,B as W,F as T,h as R,A as k,t as S,p as m,x as V,O as I,i as U,P as O,m as x,q as j,C as z,o as D,g as $,G,ad as H}from"./JACn959u.js";import{S as J}from"./C_udwnQD.js";const K={class:"xxlarge-8 xsmall-32 col prev-next pages-wrapper"},Q={class:"pages"},X=["data-number"],Y=["data-number"],Z={__name:"BlogNavigation",props:{currentPage:{type:[Number,Boolean],default:!1},pageCount:{type:[Number,Boolean],default:!1},pageClickFunc:{type:Function,default:()=>{}},prevNextClickFunc:{type:Function,default:()=>{}}},setup(e){const l=e,c=C(null);N(()=>l.currentPage,t=>{c.value.querySelector(".pages .truncation")&&(l.pageCount<4||(t>2&&t<l.pageCount-2?(c.value.querySelectorAll(".pages .truncation")[0].classList.add("visible"),c.value.querySelectorAll(".pages .truncation")[1].classList.add("visible")):(t<l.pageCount-2?c.value.querySelectorAll(".pages .truncation")[1].classList.add("visible"):c.value.querySelectorAll(".pages .truncation")[1].classList.remove("visible"),t>2?c.value.querySelectorAll(".pages .truncation")[0].classList.add("visible"):c.value.querySelectorAll(".pages .truncation")[0].classList.remove("visible"))))});const h=t=>{l.pageClickFunc(+t.target.dataset.number)},d=t=>{l.prevNextClickFunc(t)};function g(t){return s(t)||y(t)||n(t)}function s(t){if(t===l.currentPage)return!0}function y(t){if(t+1===l.currentPage||t-1===l.currentPage)return!0}function n(t){if(t===1||t===l.pageCount)return!0}return(t,v)=>(o(),u("div",{ref_key:"el",ref:c,"data-component":"blog-navigation",class:"row align-center"},[r("div",K,[r("div",{class:"prev-wrapper disabled",onClick:v[0]||(v[0]=f=>d(-1))},[q(p(W),{label:"Prev",theme:"blueberry"})]),r("div",Q,[(o(!0),u(T,null,R(e.pageCount,(f,P)=>(o(),u(T,{key:f},[r("p",{"data-number":f,class:k(`-body_large ${g(f)?"visible":"hidden"}`),onClick:h},[r("span",{"data-number":f},S(f),9,Y)],10,X),(P===0||P===e.pageCount-2)&&e.pageCount>=4?(o(),u("p",{key:0,class:k(`-body_large truncation ${P===e.pageCount-2?"visible":""}`)},v[2]||(v[2]=[r("span",null,"...",-1)]),2)):m("",!0)],64))),128))]),r("div",{class:"next-wrapper",onClick:v[1]||(v[1]=f=>d(1))},[q(p(W),{label:"Next",theme:"blueberry"})])])],512))}},_=F(Z,[["__scopeId","data-v-2b6b4aff"]]),ee={key:0,class:"-body label"},te={key:1,class:"-body length"},ae={key:0,class:"-body label"},le={key:1,class:"-body length"},se={__name:"CounterButton",props:{label:{type:[Boolean,String],default:!1},length:{type:[Boolean,Number],default:!1},href:{type:[Boolean,String],default:!1},as:{type:[Boolean,String],default:!1},to:{type:[Boolean,String],default:!1},hover:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},scrollToEl:{type:[Boolean],default:!1}},setup(e){const l=e,c=V(()=>l.label?l.label:l.href?"Link":"Button"),h=I(),d=U("$scroller"),g=O(),s=()=>{d.value.scrollTo(document.querySelector("[data-component='type-list']"),1.5),setTimeout(()=>{g.emit("change-news-type",l.to)},250)};return(y,n)=>{const t=z;return p(h).fullPath!=="/news"?(o(),x(t,{key:0,"data-component":"counter-button",to:e.to,"data-hover":e.hover,"data-disabled":e.disabled,"aria-label":p(c),title:e.to},{default:j(()=>[n[0]||(n[0]=r("span",{class:"bg"},null,-1)),e.label?(o(),u("span",ee,S(e.label),1)):m("",!0),e.length?(o(),u("span",te,S(e.length),1)):m("",!0)]),_:1},8,["to","data-hover","data-disabled","aria-label","title"])):(o(),u("button",{key:1,"data-component":"counter-button",onClick:s},[n[1]||(n[1]=r("span",{class:"bg"},null,-1)),e.label?(o(),u("span",ae,S(e.label),1)):m("",!0),e.length?(o(),u("span",le,S(e.length),1)):m("",!0)]))}}},oe={class:"row title-row"},ne={class:"xxlarge-8 xsmall-32 col"},re={class:"-h4"},ie={__name:"BlogList",props:{isWidget:{type:Boolean,default:!1},isFeaturedWidget:{type:Boolean,default:!1},title:{type:String,default:""},selectedList:{type:Array,default:()=>[]},blogCategories:{type:Array,default:()=>[]},postsCount:{type:[Number,Boolean],default:!1}},setup(e){const l=e,c=U("$scroller"),h=()=>c.value.scrollTo(d.value,1.5),d=C(null),g=C(19),s=C(1),y=C("All"),n=C(l.selectedList);let t=0;N(s,a=>{if("URLSearchParams"in window&&a!==1){const i=new URLSearchParams(window.location.search);i.set("page",a);const b=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+i.toString();window.history.pushState({path:b},"",b)}B(),a===1?document.querySelector(".prev-wrapper").classList.add("disabled"):document.querySelector(".prev-wrapper").classList.remove("disabled"),a===t?document.querySelector(".next-wrapper").classList.add("disabled"):document.querySelector(".next-wrapper").classList.remove("disabled"),L()}),N(y,a=>{if("URLSearchParams"in window&&a!==1){const i=new URLSearchParams(window.location.search);i.set("cat",a);const b=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+i.toString();window.history.pushState({path:b},"",b)}B(),setTimeout(()=>{s.value=1,A(),L()},200)}),D(()=>{E();const i=new URLSearchParams(window.location.search).get("page");i!==null&&i!==1&&(s.value=+i),B(),A(),setTimeout(()=>{L()},200)});const v=a=>{s.value=a,w(!0),h(),setTimeout(()=>{s.value=a,w(!1)},400)},f=a=>{a===1?s.value++:a===-1&&s.value--,w(!0),h(),setTimeout(()=>{w(!1)},400)},P=a=>{w(!0),setTimeout(()=>{y.value=a,w(!1)},400)},A=()=>{l.isFeaturedWidget===!1&&l.isWidget===!1&&(t=Math.round(l.selectedList.length/g.value))},L=()=>{d.value.querySelectorAll(".pages p").forEach(a=>{+a.dataset.number===s.value?a.classList.add("disabled"):a.classList.remove("disabled")})},B=()=>{l.isFeaturedWidget===!1&&l.isWidget===!1&&(y.value==="All"?(n.value=l.selectedList,n.value=n.value.slice((s.value-1)*g.value,s.value*g.value)):(n.value=l.selectedList.filter(a=>a.category.name===y.value),t=Math.ceil(n.value.length/g.value),n.value=n.value.slice((s.value-1)*g.value,s.value*g.value)))},w=a=>{const i=d.value.querySelector(".cards-row");a?$.fromTo(i,{opacity:1},{opacity:0,duration:.2,ease:"power1.in"}):$.fromTo(i,{opacity:0},{opacity:1,duration:.2,ease:"power1.out"})},E=()=>{const a=d.value;$.fromTo(a,{opacity:0},{opacity:1,duration:.5,ease:"power1.out"})};return(a,i)=>(o(),u("section",{ref_key:"$el",ref:d,"data-component":"blog-list",class:k(`${e.isWidget?"is-widget":"is-blog"}`)},[r("div",oe,[r("div",ne,[e.isWidget?m("",!0):(o(),x(p(J),{key:0,options:e.blogCategories,"click-func":P,"show-all":!0,class:"selector"},null,8,["options"]))]),r("div",{class:k(`${e.isWidget?"xxlarge-16 medium-28 medium-offset-2 small-32 small-offset-0":"xxlarge-24"}  xsmall-32  col title-col`)},[r("h2",re,S(e.title),1),e.isWidget&&e.postsCount?(o(),x(p(se),{key:0,label:"View all",length:e.postsCount,to:"/news/blog","scroll-to-el":!0},null,8,["length"])):m("",!0)],2)]),r("div",{class:k(`cards-row ${e.isWidget?"is-widget":"is-blog"} ${e.isFeaturedWidget?"is-featured-widget":!1}`)},[(o(!0),u(T,null,R(n.value,(b,M)=>(o(),u("div",{key:M,class:"card-wrapper"},[q(p(H),G({ref_for:!0},b,{class:"card"}),null,16)]))),128))],2),e.isWidget?m("",!0):(o(),x(p(_),{key:0,"page-count":p(t),"current-page":s.value,"page-click-func":v,"prev-next-click-func":f},null,8,["page-count","current-page"]))],2))}},de=F(ie,[["__scopeId","data-v-f57f19b9"]]);export{de as B,se as _};
