import{_ as m,d as n,m as p,q as d,j as r,k as t,M as i,N as c,G as u,J as _,K as g,L as b}from"./JACn959u.js";import{H as y,_ as h}from"./BWRavWXP.js";import{G as v}from"./UsEqxGIZ.js";import{F as w}from"./CXwkHOIN.js";import{u as j,a as O}from"./D5RLJVHS.js";import{u as x}from"./nY8ejQwu.js";import"./DsTGDOTz.js";import"./DJkI4ohO.js";import"./C_udwnQD.js";import"./BYKIk2QG.js";import"./Dy9fNSRM.js";import"./9uk2aPJP.js";const H={__name:"Blog",props:{newsHeader:{type:Object,default:()=>{}},navigation:{type:Object,default:()=>{}},blog:{type:Object,default:()=>{}},pressReleases:{type:Object,default:()=>{}},mediaAssets:{type:Object,default:()=>{}},whitepapers:{type:Object,default:()=>{}},conferences:{type:Object,default:()=>{}},spotifyPodcast:{type:Object,default:()=>{}},footer:{type:Object,default:()=>{}}},setup(s){const e=s,{onEnter:a,onLeave:o}=g();return(l,f)=>(n(),p(t(_),{ref:"page",slug:"blog",class:"page","transition-enter":t(a),"transition-leave":t(o)},{default:d(()=>[r(t(y),i(c(s.newsHeader)),null,16),r(t(h),{navigation:e.navigation,blog:e.blog,"press-releases":e.pressReleases,"media-assets":e.mediaAssets,whitepapers:e.whitepapers,conferences:e.conferences,"spotify-podcast":e.spotifyPodcast},null,8,["navigation","blog","press-releases","media-assets","whitepapers","conferences","spotify-podcast"]),r(t(v),{theme:"midnight"}),r(t(w),u(s.footer,{theme:"dark"}),null,16)]),_:1},8,["transition-enter","transition-leave"]))}},P=m(H,[["__scopeId","data-v-4faf8162"]]),T={__name:"index",async setup(s){let e,a;const{data:o}=([e,a]=b(()=>x("/cms/page?slug=news","$PevIfbb8s5")),e=await e,a(),e);return j(o.value.pageSetup),O({bodyAttrs:{class:"news"}}),(l,f)=>(n(),p(t(P),i(c(t(o).sections)),null,16))}};export{T as default};
