import{g as i,S as y,i as h,o as v,a as x,_,r as S,d as l,e as c,f as s,t as d,F as f,h as m,j as u,k as a,y as b,s as k,m as w,q as $,G as g,J as q,K as B,L as C,M as I,N as L}from"./JACn959u.js";import{S as O}from"./D9H4mYkS.js";import{B as M}from"./DJkI4ohO.js";import{G as N}from"./UsEqxGIZ.js";import{F as j}from"./CXwkHOIN.js";import{u as P,a as A}from"./D5RLJVHS.js";import{u as G}from"./nY8ejQwu.js";import"./B5LS-qy9.js";import"./C_udwnQD.js";import"./BYKIk2QG.js";import"./9uk2aPJP.js";i.registerPlugin(y);const H=e=>{const t=h("pageContext");v(()=>{r(),t.$page.loader.ready.then(()=>{n()})}),x(()=>o());const r=()=>{i.set([e.value.querySelector(".main-header .col")],{opacity:0,scale:.98,y:-40}),i.set([e.value.querySelector(".marquee-inner")],{opacity:0,scale:.98,y:40})},n=()=>{i.to(e.value.querySelector(".bg"),{autoAlpha:0,ease:"power2.out",duration:1}),i.to(e.value.querySelector(".main-header .col"),{delay:.25,y:0,scale:1,opacity:1,ease:"power2.out",duration:2}),i.to(e.value.querySelector(".marquee-inner"),{delay:.25,y:0,scale:1,opacity:1,ease:"power2.out",duration:2})},o=()=>{}},T={class:"inner"},F={class:"row align-center main-header"},E={class:"xxlarge-18 small-24 xsmall-32 col"},V={class:"-h1"},R={class:"-body_large"},X={class:"-body"},z={class:"marquee"},D={class:"marquee-inner"},J={class:"inner"},K={class:"inner"},U={__name:"Header",props:{title:{type:String,default:""},description:{type:String,default:""},lowerText:{type:String,default:""},exchanges:{type:Array,default:()=>[]}},setup(e){const t=S(null);return H(t),(r,n)=>(l(),c("header",{ref_key:"el",ref:t,"data-component":"header"},[n[0]||(n[0]=s("span",{class:"bg"},null,-1)),s("div",T,[s("div",F,[s("div",E,[s("h1",V,d(e.title),1),s("p",R,d(e.description),1),s("p",X,d(e.lowerText),1)])]),s("div",z,[s("div",D,[s("div",J,[(l(!0),c(f,null,m(e.exchanges,(o,p)=>(l(),c("p",{key:p,class:"-body"},d(o),1))),128))]),s("div",K,[(l(!0),c(f,null,m(e.exchanges,(o,p)=>(l(),c("p",{key:p,class:"-body"},d(o),1))),128))])])])])],512))}},W=_(U,[["__scopeId","data-v-7cb9d0c8"]]);i.registerPlugin(y);const Q=e=>{const t=h("pageContext");v(()=>{r(),t.$page.loader.ready.then(()=>{n()})}),x(()=>o());const r=()=>{i.set([e.value.querySelector(".-h5")],{opacity:0,scale:.98,y:40})},n=()=>{i.to(e.value.querySelector(".-h5"),{y:0,scale:1,opacity:1,ease:"power2.out",duration:2})},o=()=>{}},Y={class:"row"},Z={class:"xxlarge-16 xxlarge-offset-8 small-24 small-offset-4 xsmall-32 xsmall-offset-0 col"},ee={class:"-h5"},te={class:"list"},se={class:"-body_large"},ae={__name:"MarketSolutions",props:{title:{type:String,default:""},solutions:{type:Array,default:()=>{}}},setup(e){const t=S(null);return Q(t),(r,n)=>(l(),c("section",{ref_key:"el",ref:t,"data-component":"market-solutions"},[s("div",Y,[s("div",Z,[s("h2",ee,d(e.title),1),s("div",te,[s("ul",null,[(l(!0),c(f,null,m(e.solutions,(o,p)=>(l(),c("li",{key:p},[s("p",se,[u(a(b),{asset:o.icon},null,8,["asset"]),k(" "+d(o.text),1)])]))),128))])])])])],512))}},oe=_(ae,[["__scopeId","data-v-9f0699a8"]]),re={id:"infrastructure-overview",ref:"el","data-component":"infrastructure-overview"},ne={__name:"InfrastructureOverview",props:{scrollingGroupList:{type:[Boolean,Array],default:!1}},setup(e){return(t,r)=>(l(),c("section",re,[u(a(O),{list:e.scrollingGroupList},null,8,["list"])],512))}},le=_(ne,[["__scopeId","data-v-23ed8c3f"]]),ie={__name:"ProfessionalClearing",props:{clearingHeader:{type:Object,default:()=>{}},clearingMarketSolutions:{type:Object,default:()=>{}},clearingInfrastructureOverview:{type:Object,default:()=>{}},clearingNews:{type:Object,default:()=>{}},footer:{type:Object,default:()=>{}}},setup(e){const{onEnter:t,onLeave:r}=B();return(n,o)=>(l(),w(a(q),{ref:"page",slug:"professional-clearing",class:"page","transition-enter":a(t),"transition-leave":a(r)},{default:$(()=>[u(a(W),g(e.clearingHeader,{"data-section-intersect":"dark"}),null,16),u(a(oe),g(e.clearingMarketSolutions,{"data-section-intersect":"light"}),null,16),u(a(le),g(e.clearingInfrastructureOverview,{"data-section-intersect":"light"}),null,16),u(a(M),{title:e.clearingNews.title,"selected-list":e.clearingNews.list,"is-widget":!0,"is-featured-widget":!0,"posts-count":e.clearingNews.postsCount,"data-section-intersect":"light"},null,8,["title","selected-list","posts-count"]),u(a(N),{theme:"blueberry-light","data-section-intersect":"light"}),u(a(j),g(e.footer,{theme:"light","data-section-intersect":"light"}),null,16)]),_:1},8,["transition-enter","transition-leave"]))}},ce=_(ie,[["__scopeId","data-v-3273060b"]]),Se={__name:"professional-clearing",async setup(e){let t,r;const{data:n}=([t,r]=C(()=>G("/cms/page?slug=professionalClearing","$eREmLXLBtX")),t=await t,r(),t);return P(n.value.pageSetup),A({bodyAttrs:{class:"professional-clearing"}}),(o,p)=>(l(),w(a(ce),I(L(a(n).sections)),null,16))}};export{Se as default};
