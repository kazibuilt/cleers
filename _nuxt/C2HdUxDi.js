import{_ as I}from"./9uk2aPJP.js";import{_ as p,x as F,a8 as T,d as e,m as h,k as r,B as C,e as a,f as n,t as u,F as b,h as k,y as B,p as v,j as g,G as E,s as M,r as w,i as V,af as z,o as H,q as R,ag as j,ah as q,H as D,ai as G}from"./JACn959u.js";import{N as K}from"./DsTGDOTz.js";const P={__name:"CallToActionBtn",props:{theme:{type:String,default:"blueberry"},label:{type:String,default:""},type:{type:String,default:""},slug:{type:[Boolean,String],default:!1},href:{type:[Boolean,String],default:!1},section:{type:[Boolean,String],default:!1}},setup(t){const o=t,i=F(()=>{switch(o.type){case"section":return`#${T(o.section)}`;case"url":return o.url;case"external":return o.href;case"page":return o.slug}});return(s,l)=>(e(),h(r(C),{label:t.label,theme:t.theme,href:r(i)},null,8,["label","theme","href"]))}},U=p(P,[["__scopeId","data-v-0da63c70"]]),J={"data-component":"card-list"},O={class:"-caption title"},Q={class:"list"},W={class:"icon-container"},X={class:"label"},Y={__name:"CardList",props:{title:{type:String,default:"	"},list:{type:Array,default:()=>[]}},setup(t){return(o,i)=>(e(),a("div",J,[n("h5",O,u(t.title),1),n("ul",Q,[(e(!0),a(b,null,k(t.list,(s,l)=>(e(),a("li",{key:l,class:"card"},[n("div",W,[s.icon?(e(),h(r(B),{key:0,asset:s.icon,class:"icon"},null,8,["asset"])):v("",!0)]),n("span",X,u(s.title),1)]))),128))])]))}},Z=p(Y,[["__scopeId","data-v-c0764d79"]]),ee={"data-component":"related-news"},te={class:"-caption title"},se={class:"list"},ne={__name:"RelatedNews",props:{title:{type:String,default:"Related News"},list:{type:Array,default:()=>[]}},setup(t){return(o,i)=>(e(),a("div",ee,[n("h5",te,u(t.title),1),n("ul",se,[(e(!0),a(b,null,k(t.list,(s,l)=>(e(),a("li",{key:l,class:"card"},[g(r(K),E({ref_for:!0},s),null,16)]))),128))])]))}},ae=p(ne,[["__scopeId","data-v-77aebacc"]]),le={"data-component":"card-list"},oe={class:"-caption title"},ce={class:"list"},re={key:0,class:"icon-container"},ie={class:"-body_medium_regular label"},de={key:0,class:"sublist"},ue={__name:"IconList",props:{title:{type:String,default:"	"},list:{type:Array,default:()=>[]}},setup(t){return(o,i)=>(e(),a("div",le,[n("h5",oe,u(t.title),1),n("ul",ce,[(e(!0),a(b,null,k(t.list,(s,l)=>(e(),a("li",{key:l,class:"item"},[s.icon?(e(),a("div",re,[g(r(B),{asset:s.icon,class:"icon"},null,8,["asset"])])):v("",!0),n("span",ie,[M(u(s.title)+" ",1),s.sublist?(e(),a("ul",de,[(e(!0),a(b,null,k(s.sublist,(d,f)=>(e(),a("li",{key:f,class:"-body_medium_regular label"},u(d),1))),128))])):v("",!0)])]))),128))])]))}},_e=p(ue,[["__scopeId","data-v-6da60082"]]),pe={ref:"inner",class:"inner content"},fe={__name:"ContentModal",props:{type:{type:String,default:"portable-text"},closeFn:{type:Function,default:()=>{}},content:{type:[Boolean,Array],default:!1}},setup(t,{expose:o}){const i=t,s={types:{cta:U,cardList:Z,relatedNews:ae,list:_e},marks:{link:D},styles:{span:"span"}},l=w(null),d=w(null),f=V("$scroller"),{openAnimation:L,closeAnimation:N}=G(l),S=()=>y(),$=async()=>{L(),l.value.classList.add("open"),d.value.resize(),d.value.start(),window.addEventListener("keydown",x),f.value.stop()},y=()=>{N().then(()=>{var _,c,m;(_=l.value)==null||_.classList.remove("open"),(c=d.value)==null||c.stop(),(m=f.value)==null||m.start(),A()})},A=()=>{window.removeEventListener("keydown",x),i.closeFn()};function x(_){_.key==="Escape"&&y()}return z(()=>y()),H(()=>$()),o({open:$,close:y}),(_,c)=>{const m=I;return e(),h(q,{to:"body"},[n("div",{ref_key:"el",ref:l,"data-component":"content-modal"},[c[0]||(c[0]=n("span",{class:"bg"},null,-1)),c[1]||(c[1]=n("span",{class:"content-bg"},null,-1)),n("span",{class:"click-outside",onClick:S}),g(r(j),{ref_key:"modalScroller",ref:d},{default:R(()=>[n("div",pe,[t.type==="portable-text"?(e(),h(m,{key:0,blocks:t.content,serializers:s},null,8,["blocks"])):v("",!0)],512)]),_:1},512),g(r(C),{class:"close-btn",theme:"blueberry",icon:"close",onClick:S})],512)])}}},be=p(fe,[["__scopeId","data-v-6134a5f2"]]);export{be as C};
