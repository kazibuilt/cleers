import{V as W,E as I,C as A,O as k,W as J,S as N,a as X,M as L,P as U,b as Y,F as q,L as D,u as Q,c as E,R as O,d as Z,e as H,f as K,g as F,h as $}from"./5k4Fl3l9.js";import{c as j,l as ee,G as te,R as ae}from"./BqfMDtoE.js";const oe=e=>1/(1+e+.48*e*e+.235*e*e*e);function R(e,a,n,v=.25,h=.01,g=1/0,l=oe,f=.001){const p="velocity_"+a;if(e.__damp===void 0&&(e.__damp={}),e.__damp[p]===void 0&&(e.__damp[p]=0),Math.abs(e[a]-n)<=f)return e[a]=n,!1;v=Math.max(1e-4,v);const x=2/v,s=l(x*h);let c=e[a]-n;const r=n,o=g*v;c=Math.min(Math.max(c,-o),o),n=e[a]-c;const m=(e.__damp[p]+x*c)*h;e.__damp[p]=(e.__damp[p]-x*m)*s;let i=n+(c+m)*s;return r-e[a]>0==i>r&&(i=r,e.__damp[p]=(i-r)/h),e[a]=i,!0}const ne=`
	varying vec2 vUv;

	void main() {
		vUv = uv;
		gl_Position = vec4(position, 1.0);
	}
`,se=`
			
	uniform sampler2D uTexture;
	uniform float uBlurAmount;
			
	vec4 blur(sampler2D u_image, vec2 v_texCoord, float u_radius ){

		vec4 color = vec4(0.0);
		float total = 0.0;

		vec2 u_textureSize = vec2(textureSize(u_image, 0));

		float sigma = u_radius * 2.0;
		int radius = int(ceil(u_radius));

		for (int x = -8; x <= 8; x++) {
			for (int y = -8; y <= 8; y++) {
				float weight = exp(-(float(x*x + y*y)) / (2.0 * sigma * sigma));
				color += texture2D(u_image, v_texCoord + vec2(float(x), float(y)) / u_textureSize) * weight;
				total += weight;
			}
		}

		return color / total;
	}

	varying vec2 vUv;
				
	void main() {
		vec4 color = blur(uTexture, vUv, uBlurAmount);
		gl_FragColor = color;
	}
`;function re(e,a,n,v={}){const{damping:h=.8,acceleration:g=20,eps:l=.001}=v,f=c=>{const r=2*Math.PI;return c=(c%r+r)%r,c>Math.PI&&(c-=r),c};e.rotationVelocity||(e.rotationVelocity={x:0,y:0});const p=e.rotation,x=f(a.x-p.x);let s=f(a.y-p.y);s<0&&(s=s+2*Math.PI),e.rotationVelocity.x+=x*g*n,e.rotationVelocity.y+=s*g*n,e.rotationVelocity.x*=h,e.rotationVelocity.y*=h,e.rotation.x+=e.rotationVelocity.x*n,e.rotation.y+=e.rotationVelocity.y*n,Math.abs(x)<l&&Math.abs(e.rotationVelocity.x)<l&&(e.rotation.x=a.x,e.rotationVelocity.x=0),Math.abs(s)<l&&Math.abs(e.rotationVelocity.y)<l&&(e.rotation.y=a.y,e.rotationVelocity.y=0)}function ie(e,a){const n=new J(256,256),v=new N,h=new X,g=new A(a),l=new L(new U(2,2),new Y({uniforms:{uTexture:{value:g},uBlurAmount:{value:4}},vertexShader:ne,fragmentShader:se}));l.material.needsUpdate=!0,v.add(l),e.setRenderTarget(n),e.render(v,h),l.geometry.dispose(),l.material.dispose(),g.dispose();const f=new q(256,256);return f.minFilter=D,f.magFilter=D,e.copyFramebufferToTexture(f),e.setRenderTarget(null),n.dispose(),f}function le({gl:e,groundMesh:a,particlesMesh:n,globe:v}){const h=new W(0,0,4),g=new I;let l=null;const f=[],p=async r=>{const o=await ee("/globe/world.geojson.gz"),m=f.find(i=>JSON.stringify(r)===JSON.stringify(i.countries));if(m===void 0){let i;typeof OffscreenCanvas<"u"?i=new OffscreenCanvas(512,512):(i=document.createElement("canvas"),i.width=512,i.height=512);const t=i.getContext("2d");t.fillStyle="#000000",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="#ffffff";const w=(d,_,T)=>{const b=[];return d.forEach(([P,V])=>{const G=(P+180)*(_/360),z=T-(V+90)*(T/180);b.push([G,z])}),b},B=d=>{t.beginPath(),d.forEach(([_,T],b)=>{b===0?t.moveTo(_,T):t.lineTo(_,T)}),t.closePath(),t.fill()};o.forEach(d=>{const _=d.geometry.coordinates;r.forEach(T=>{if(d.properties.name===T){if(d.geometry.type==="MultiPolygon")_.forEach(b=>{const P=w(b[0],t.canvas.width,t.canvas.height);B(P)});else if(d.geometry.type==="Polygon"){const b=w(_[0],t.canvas.width,t.canvas.height);B(b)}}})}),t.drawImage(t.canvas,0,0,t.canvas.width,t.canvas.height);let M;typeof t.filter=="string"?(t.filter="blur(4px)",t.drawImage(t.canvas,0,0,t.canvas.width,t.canvas.height),M=new A(i)):M=ie(e,i);const u=o.filter(({properties:d})=>r.includes(d.name)).map(({properties:d})=>d.location),y=(d=>{let _=0,T=0;const b=d.length;for(let G=0;G<b;G++)_+=d[G][0],T+=d[G][1];const P=_/b,V=T/b;return[P,V]})(u),S={texture:M,countries:r,center:y};return f.push(S),i=null,S}else return m};let x=0;return{generate:async r=>{const o=await p(r);x===0?(a.material.uniforms.uBlobGroupA.value=l,a.material.uniforms.uBlobGroupB.value=o.texture,n.material.uniforms.uBlobGroupA.value=l,n.material.uniforms.uBlobGroupB.value=o.texture,x=1):(a.material.uniforms.uBlobGroupA.value=o.texture,a.material.uniforms.uBlobGroupB.value=l,n.material.uniforms.uBlobGroupA.value=o.texture,n.material.uniforms.uBlobGroupB.value=l,x=0),l=o.texture,a.material.needsUpdate=!0,n.material.needsUpdate=!0,o.center&&h.set(...j(o.center[0],o.center[1],0));function m(i,t){const w=i*(Math.PI/180),B=t*(Math.PI/180),M=Math.cos(w)*Math.cos(B),u=Math.sin(w),C=Math.cos(w)*Math.sin(B),y=new k;return y.position.set(M,u-.4,C),y.lookAt(0,0,0),new I().setFromQuaternion(y.quaternion,"YXZ")}o.center[0]&&o.center[1]&&g.copy(m(o.center[0],o.center[1]))},update:({timer:r})=>{const o=r.getElapsedTime();a.material.uniforms.uTime.value=o;const m=r.getDelta();R(a.material.uniforms.uBlobGroupFade,"value",x,.45,m),R(n.material.uniforms.uBlobGroupFade,"value",x,.45,m),re(v,g,m)}}}const me=()=>{const{scene:e,gl:a,camera:n}=Q(),{track:v,dispose:h}=ae(),{groundMesh:g,particlesMesh:l,globe:f}=te({rotation:[0,0,0],blob:!0});e.add(f),f.scale.setScalar(.9),f.position.set(0,-.5,0);const p=le({gl:a,groundMesh:g,particlesMesh:l,globe:f});E(({countries:u})=>{p.generate(u)},"zone");const s=new OffscreenCanvas(128,128).getContext("2d");s.imageSmoothingEnabled=!0;const c=new A(s.canvas);c.wrapS=O,c.wrapT=O;const r=a.capabilities.getMaxAnisotropy();c.anisotropy=r,c.needsUpdate=!0,g.material.uniforms.uMouseTexture.value=c,l.material.uniforms.uMouseTexture.value=c;let o;fetch("/globe/glow.png").then(u=>u.blob()).then(u=>createImageBitmap(u)).then(u=>{o=u}).catch(u=>{console.error("error loading image:",u)});const m=new F(9999),i=new F(9999),t=()=>{if(m.x!==i.x&&m.y!==i.y){const u=m.x,C=m.y,y=20;s.globalCompositeOperation="lighten",o&&(s.globalAlpha=1,s.drawImage(o,u-y*.5,C-y*.5,y,y))}s.globalCompositeOperation="source-over",s.globalAlpha=.02,s.fillRect(0,0,s.canvas.width,s.canvas.height),i.copy(m)},w=new L(new U(2,2,1,1),new Z({color:56831}));w.position.set(0,-.5,0),w.updateWorldMatrix(),w.visible=!1,e.add(w);const B=new $,M=new F;E(({clientX:u,clientY:C})=>{M.x=u*2-1,M.y=-C*2+1,B.setFromCamera(M,n);const y=B.intersectObject(w,!0);if(y.length>0){const S=y[0].uv;m.set(S.x*s.canvas.width,(1-(S.y+.05))*s.canvas.height)}},"mouse"),H(({timer:u})=>{t(),c.needsUpdate=!0,p.update({timer:u})}),K(()=>{h()}),v(e)};export{me as default};
