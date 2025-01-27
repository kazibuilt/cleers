import{i as w,j as d,k as z,I as M,O as x,l as B,M as S,m as P,b as h,n as y,B as C,o as g,p as G,A as N,V as T,u as D,G as k,c as A,e as _}from"./5k4Fl3l9.js";async function F(e,i,s){const n=(await w(M,e,t=>{t.setOptions({imageOrientation:"flipY"})},null)).map(t=>{const a=new d(t);return a.colorSpace=z,a.needsUpdate=!0,a});return Array.isArray(e)?n:n[0]}function V(){const e=new Set,i=o=>{if(!o)return o;if(Array.isArray(o))return o.forEach(t=>i(t)),o;if((o.dispose||o instanceof x)&&e.add(o),o instanceof x)i(o.geometry),i(o.material),i(o.children);else if(o instanceof B){for(const t of Object.values(o))t instanceof d&&i(t);if(o.uniforms){for(const t of Object.values(o.uniforms))if(t){const a=t.value;(a instanceof d||Array.isArray(a))&&i(a)}}}return o};return{track:i,untrack:o=>{e.delete(o)},dispose:()=>{e.forEach(o=>{o instanceof x&&o.parent&&o.parent.remove(o),o.dispose&&o.dispose()}),e.clear()},log:()=>{if(e.size===0){console.info("🕵 BüroGL GC is empty");return}console.group("🕵 BüroGL GC tracking"),e.forEach(o=>{console.info(`${o.type}${o.isTexture?" (Texture)":""}
%c${o.name||o.uuid}`,"color: grey; font-size: 10px")}),console.groupEnd()}}}const O=`
//	Simplex 4D Noise 
//	by Ian McEwan, Stefan Gustavson (https://github.com/stegu/webgl-noise)
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip){
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
}

float snoise(vec4 v){
  const vec2  C = vec2( 0.138196601125010504,  // (5 - sqrt(5))/20  G4
                        0.309016994374947451); // (sqrt(5) - 1)/4   F4
// First corner
  vec4 i  = floor(v + dot(v, C.yyyy) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

// Other corners

// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
//  i0.x = dot( isX, vec3( 1.0 ) );
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  // i0 now contains the unique values 0,1,2,3 in each channel
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  //  x0 = x0 - 0.0 + 0.0 * C 
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

// Permutations
  i = mod(i, 289.0); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
// Gradients
// ( 7*7*6 points uniformly over a cube, mapped onto a 4-octahedron.)
// 7*7*6 = 294, which is close to the ring size 17*17 = 289.

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

// Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

// Mix contributions from the five corners
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}
`,U=`

varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vPosition;

void main() {

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
}
`,j=`

#include <common>
#include <dithering_pars_fragment>

uniform vec3 uColor;
uniform float uTime;
uniform sampler2D uMask;

uniform sampler2D uBlobGroupA;
uniform sampler2D uBlobGroupB;
uniform float uBlobGroupFade;

uniform sampler2D uMouseTexture;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;

${O}

float cubicPulse( float c, float w, float x ){
    x = abs(x - c);
    if( x>w ) return 0.0;
    x /= w;
    return 1.0 - x*x*(3.0-2.0*x);
}

void main() {

    float light = dot(vNormal, normalize(vec3(-0.5, 0.5, 1.))); 
    float newColor = clamp(light, 0.5, 1.);
    vec3 colorA = mix(uColor, uColor * newColor, 0.4);
    vec3 continents = texture2D(uMask, vUv).rgb;
    float mask = 1.-step(continents.r + continents.g + continents.b, 0.5);
    vec4 groundColor = vec4(vec3(mix( colorA, colorA + 0.02 , mask)), 1.0);

    gl_FragColor = groundColor;
    
    // blob
    #ifdef ZONE_BLOB

    float blobGroups = 1.- mix(texture2D( uBlobGroupA, vUv ).r, texture2D( uBlobGroupB, vUv ).r, uBlobGroupFade);

    float noise1 = snoise( vec4( vPosition, float(uTime * 0.2)) ); 
    float noise0 = snoise( vec4( vPosition * 0.5, float(uTime * 0.4 )) ); 

    vec4 zoneBlob = vec4( mix(vec3(0., 0.2, 1.) + noise0 * noise1, vec3(0.), blobGroups) , 0.95 );
	gl_FragColor += zoneBlob;
	
	// blob mouse
	vec2 fuv = vec2( vNormal.x /2. + 0.5, vNormal.y /2. + 0.5 ); 
	float mtx = texture2D(uMouseTexture, fuv).r;
	mtx = smoothstep( 0., 1., mtx);
	
	gl_FragColor.rgb = mix(groundColor.rgb, gl_FragColor.rgb, 1.-mtx);

	float border = cubicPulse(0.5,0.2,mtx);
 	gl_FragColor.rgb += mix( vec3(vec3(0., 0.2, 1.) + noise0 * noise1)*0.4, vec3(0), 1.-border);

    #endif

    #include <dithering_fragment>
}
`;function I(e){return new S(new P(1,18,18),new h({uniforms:{uColor:{value:new y(e.groundColor)},uMask:{value:null},uTime:{value:0},uBlobGroupA:{value:null},uBlobGroupB:{value:null},uBlobGroupFade:{value:0},uMouseTexture:{value:null}},defines:{ZONE_BLOB:e.blob},vertexShader:U,fragmentShader:j,transparent:!1,dithering:!0}))}const E=`

uniform float uScale;
uniform float uTime;
uniform float uTimeScale;
uniform sampler2D uNoise;
uniform sampler2D uMouseTexture;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 viewDirection;
varying vec3 vNormal;

#define PI 3.14159265358979;

float rand(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {

    vUv = uv;

    vec2 uvSample = fract( vec2( uv * 8. + vec2( float(uTime * uTimeScale), 0. )));
    vec3 distortion = texture2D(uNoise, uvSample).rgb * vec3(2.0) - vec3(1.0);
    distortion = distortion * 0.08;
	
    vec3 newposition = position + position * (distortion + 0.05) ; 
	
	vNormal = vec4(modelMatrix * vec4( position  ,1.0)).xyz ;

	mat3 normalMatrix = transpose(inverse(mat3(modelMatrix)));
	vNormal = normalize(normalMatrix * position);

	vec2 fUv = vNormal.xy * 0.5 + vec2(0.5, 0.5);
	float mtx = texture2D(uMouseTexture, fUv).r;
	mtx = clamp(mtx, 0., 1.);

	#ifdef ZONE_BLOB
	newposition += vNormal * mtx * 0.05; // z.change
	#endif

    vec4 mvPosition = modelViewMatrix * vec4(newposition, 1.0);

    float sizeShift = rand(position.xy);
    sizeShift = clamp(sizeShift, 0.4, 0.9);
	
    gl_PointSize = max(  uScale * sizeShift * (1. / -mvPosition.z), 0.1);

	float hoverScale = mtx * 1.;
	#ifdef ZONE_BLOB
	gl_PointSize = gl_PointSize + hoverScale;
	#endif

    gl_Position = projectionMatrix * (mvPosition);

	vPosition = vec4( modelMatrix * vec4(newposition, 1.0)).xyz;
    viewDirection = normalize(vPosition - cameraPosition );
}

`,L=`

uniform sampler2D uMask;
uniform vec3 uColor;
uniform sampler2D uBlobGroupA;
uniform sampler2D uBlobGroupB;
uniform float uBlobGroupFade;
uniform sampler2D uMouseTexture;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 viewDirection;
varying vec3 vNormal;

float rand(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
	vec2 mUv =  vNormal.xy * 0.5 + vec2(0.5, 0.5);
    float tmp = texture2D(uMouseTexture, mUv  ).r;
	tmp = clamp(tmp, 0.,1.);
	

    vec3 continents = texture2D(uMask, vUv).rgb;
   
    float tx = 1.-step(continents.r + continents.g + continents.b, 0.5);
	#ifdef ZONE_BLOB
    if(tx < 0.1 && tmp < 0.4)
        discard;
	#else
	if(tx < 0.1 )
        discard;
	#endif
 
    vec2 uv = vec2(gl_PointCoord.x, 1. - gl_PointCoord.y);
    vec2 cUv = 2. * uv - 1.;
    float disc = 1.-length(cUv);

	if(disc < 0.1)
        discard;
	

    float darkScale = 0.2;
    vec3 colorShift = mix(uColor, uColor * darkScale, rand(vUv));
    colorShift = mix( colorShift, colorShift * vec3(1.,1., 0.9), rand(vUv));

    #ifdef ZONE_BLOB

    float blobGroups = mix( texture2D( uBlobGroupA, vUv ).r, texture2D( uBlobGroupB, vUv ).r, uBlobGroupFade);
    vec3  colorShift2 = mix(colorShift, vec3(0.2, 0.2, 1.), blobGroups ); // group
	colorShift = mix( colorShift2, colorShift, tmp);

    #endif

    vec3 normal = normalize(vPosition );
    float fresnel = dot(viewDirection, normal) + 1.0 ;
    fresnel = pow(fresnel, 4.0);

    gl_FragColor = vec4(colorShift,( 1.- fresnel * 0.5 )  );	
}
`;function Z(e=1,i=1){const s=[],r=Math.random()*e,n=2/e,o=Math.PI*(3-Math.sqrt(5));for(let t=0;t<e;t++){const a=t*n-1+n/2,m=Math.sqrt(1-Math.pow(a,2)),c=(t+r)%e*o,v=Math.cos(c)*m,l=Math.sin(c)*m;s.push(new T(v*i,a*i,l*i))}return s}function q(e){const n=new C,o=new Float32Array(4e4*3),t=new Float32Array(4e4*2),a=Z(4e4,e.radius);for(let c=0;c<200;c++)for(let v=0;v<200;v++){const l=c+v*200,u=a[l];o[l*3+0]=u.x+Math.random()*.02,o[l*3+1]=u.y+Math.random()*.02,o[l*3+2]=u.z+Math.random()*.02;const f=u.clone().normalize(),p=Math.atan2(f.x,f.z)/(2*Math.PI)+.5,b=Math.asin(f.y)/Math.PI+.5;t[l*2+0]=p,t[l*2+1]=b}n.setAttribute("position",new g(o,3)),n.setAttribute("uv",new g(t,2));const m=new G(n,new h({vertexShader:E,fragmentShader:L,uniforms:{uColor:{value:new y(e.particleColor)},uNoise:{value:null},uMask:{value:null},uScale:{value:8},uTime:{value:0},uTimeScale:{value:.04},uBlobGroupA:{value:null},uBlobGroupB:{value:null},uBlobGroupFade:{value:0},uMouseTexture:{value:null}},defines:{ZONE_BLOB:e.blob},transparent:!0,depthWrite:!1,depthTest:!0,blending:N}));return m.rotation.y=Math.PI/2,m}function X(e={}){const{clearColor:i="#040313",groundColor:s="#040352",particleColor:r="#ffffff",radius:n=1,blob:o=!1}=e,{gl:t,scene:a,camera:m}=D();t.setClearColor(i,0);const c=new k,v=I({groundColor:s,radius:n,blob:o});c.add(v);const l=q({ground:v,globe:c,particleColor:r,radius:n,blob:o});return c.add(l),F(["/globe/world.png","/globe/noise3d.png"]).then(([u,f])=>{l.material.uniforms.uMask.value=u,l.material.uniforms.uNoise.value=f,v.material.uniforms.uMask.value=u}),A(({factor:u,fps:f})=>{let p=Math.max(.5,t.dpr*u);t.getPixelRatio()!==p&&t.setPixelRatio(p)},"factor"),_(({timer:u})=>{l.material.uniforms.uTime.value=u.getElapsedTime()}),t.compileAsync(a,m),{globe:c,groundMesh:v,particlesMesh:l}}async function Y(e){const i=new DecompressionStream("gzip"),s=e.stream().pipeThrough(i);return await new Response(s).blob()}function $(e){return new Promise((i,s)=>{fetch(e).then(async r=>{if(!r.ok)throw new Error("Network response was not ok");return r.blob()}).then(r=>Y(r)).then(r=>r.text()).then(r=>JSON.parse(r)).then(r=>i(r)).catch(s)})}const J=(e,i,s)=>{const r=(90-e)*(Math.PI/180),n=(i+180)*(Math.PI/180),o=-(s*Math.sin(r)*Math.cos(n)),t=s*Math.sin(r)*Math.sin(n),a=s*Math.cos(r);return[o,a,t]};export{X as G,V as R,J as c,$ as l};
