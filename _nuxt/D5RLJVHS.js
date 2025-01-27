import{an as h,r as d,ao as g,w as v,a as w,ap as y,aq as p,ar as b,as as _,at as T,O as q,au as E}from"./JACn959u.js";function l(t,n={}){const a=n.head||h();if(a)return a.ssr?a.push(t,n):j(a,t,n)}function j(t,n,a={}){const e=d(!1),r=d({});g(()=>{r.value=e.value?{}:_(n)});const i=t.push(r.value,a);return v(r,u=>{i.patch(u)}),b()&&(w(()=>{i.dispose()}),y(()=>{e.value=!0}),p(()=>{e.value=!1})),i}function A(t,n){const{title:a,titleTemplate:e,...r}=t;return l({title:a,titleTemplate:e,_flatMeta:r},{...n,transform(i){const s=T({...i._flatMeta});return delete i._flatMeta,{...i,meta:s}}})}var f={};const c=f.BASE_URL?f.BASE_URL:"http://localhost:3000",o="Clear Street",m="/social-preview.jpg",M=t=>{const n=q(),e=E().public.menuPayload;l({viewport:"width=device-width, initial-scale=1",charset:"utf-8",title:"ClearStreet",htmlAttrs:{lang:"en"},script:[{async:!0,defer:!0,src:"https://analytics.madebyburo.com/umami.js","data-website-id":"3302b21c-8d33-481d-97e0-6f976f4d59b9"},{async:!0,defer:!0,src:"https://stats.withburo.com/script.js","data-website-id":"81f89ae6-feb1-4dcb-adb0-f72f124c0312"},{async:!0,defer:!0,src:"https://cdn.userway.org/widget.js","data-account":"igpLZzDZkG"},{async:!0,defer:!0,src:"https://apis.google.com/js/api.js"}],link:[{rel:"icon",type:"image/png",href:"/icon.png"},{rel:"canonical",href:c+n.fullPath}]},{mode:"client"}),l({meta:[{name:"description",content:e.mainDescription},{name:"theme-color",content:"#2e21de"},{name:"google-site-verification",content:"2MALGn6Nd7TlogT0dytFBWxfRFLjR5PULpnKKATezsU"}],script:[{async:!0,defer:!0,type:"text/javascript",children:`
						!(function (f, b, e, v, n, t, s) {
						if (f.fbq) return
						n = f.fbq = function () {
							n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
						}
						if (!f._fbq) f._fbq = n
						n.push = n
						n.loaded = !0
						n.version = '2.0'
						n.queue = []
						t = b.createElement(e)
						t.async = !0
						t.src = v
						s = b.getElementsByTagName(e)[0]
						s.parentNode.insertBefore(t, s)
					})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
					fbq('init', '1253892159099136')
					fbq('track', 'PageView')
					`},{async:!0,defer:!0,type:"text/javascript",children:`
					!function(s,a,e,v,n,t,z){if(s.saq)return;n=s.saq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!s._saq)s._saq=n;n.push=n;n.loaded=!0;n.version='1.0';n.queue=[];t=a.createElement(e);t.async=!0;t.src=v;z=a.getElementsByTagName(e)[0];z.parentNode.insertBefore(t,z)}(window,document,'script','https://tags.srv.stackadapt.com/events.js');saq('ts', 'Yn8RPAfQFUNa5Zgk3mHNuw');
					`}]});function r(){let s;return n.fullPath==="/"?s=e.siteSettings.mainTitle+" — "+e.siteSettings.mainDescription:s=t.title?t.title+" | "+e.siteSettings.mainTitle+" — "+e.siteSettings.mainDescription:o,s}function i(){let s;return n.fullPath==="/"?s=e.siteSettings.mainTitle+" — "+e.siteSettings.mainDescription:s=t.title?t.title+" | "+e.siteSettings.mainTitle:o,s}A({charset:"utf-8",formatDetection:"telephone=no",title:r(),description:t.description?t.description:e.siteSettings.mainDescription,keywords:t.keywords?t.keywords:"",author:"Clear Street",ogTitle:t.title?i():o,ogDescription:t.description?t.description:e.siteSettings.mainDescription,ogImage:t.image?t.image.url:c+m,ogImageWidth:t.image?t.image.width:"1400",ogImageHeight:t.image?t.image.height:"700",ogType:"website",ogSiteName:t.title?i():o,ogUrl:c+n.fullPath,twitterTitle:t.title?i():o,twitterDescription:t.description?t.description:e.siteSettings.mainDescription,twitterImage:t.image?t.image.url:c+m,twitterCard:"summary_large_image"})};export{l as a,M as u};
