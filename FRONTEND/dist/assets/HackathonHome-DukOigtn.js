import{a as ue,j as d,R as $l}from"./vendor-query-13Iz25eN.js";import{A as ss,X as Kd,bU as Zd,C as Jd,an as Qd,bV as eu,bW as Kl,bX as tu,Q as ia,a7 as Zl,bS as Jl,a$ as Ql,S as nu,y as iu,ar as su,z as au,bY as ru,L as ec,I as ou,bZ as tc,bQ as nc,bo as lu,b_ as cu}from"./vendor-icons-BmMFIZvw.js";const Jr="186",du=0,Yo=1,uu=2,Ks=1,hu=2,Ji=3,oi=0,Ht=1,xn=2,Dn=0,es=1,as=2,qo=3,$o=4,fu=5,Ii=100,pu=101,mu=102,gu=103,xu=104,_u=200,vu=201,bu=202,Su=203,ic=204,sc=205,Mu=206,yu=207,Eu=208,Tu=209,wu=210,Au=211,Ru=212,Cu=213,Nu=214,cr=0,dr=1,ur=2,rs=3,hr=4,fr=5,pr=6,mr=7,ac=0,Iu=1,Du=2,bn=0,rc=1,oc=2,lc=3,Qr=4,cc=5,dc=6,uc=7,hc=300,li=301,Oi=302,Na=303,Ia=304,da=306,gr=1e3,In=1001,xr=1002,Ct=1003,Pu=1004,ws=1005,Ut=1006,Da=1007,ii=1008,$t=1009,fc=1010,pc=1011,os=1012,eo=1013,Sn=1014,_n=1015,Mn=1016,to=1017,no=1018,ls=1020,mc=35902,gc=35899,xc=1021,_c=1022,rn=1023,Ln=1026,si=1027,vc=1028,io=1029,ci=1030,so=1031,ao=1033,Zs=33776,Js=33777,Qs=33778,ea=33779,_r=35840,vr=35841,br=35842,Sr=35843,Mr=36196,yr=37492,Er=37496,Tr=37488,wr=37489,sa=37490,Ar=37491,Rr=37808,Cr=37809,Nr=37810,Ir=37811,Dr=37812,Pr=37813,Lr=37814,Ur=37815,Fr=37816,Or=37817,Br=37818,kr=37819,zr=37820,Gr=37821,Vr=36492,Hr=36494,Wr=36495,Xr=36283,jr=36284,aa=36285,Yr=36286,Lu=3200,qr=0,Uu=1,Xn="",en="srgb",ra="srgb-linear",oa="linear",at="srgb",Pa=7680,Fu=519,Ou=512,Bu=513,ku=514,ro=515,zu=516,Gu=517,oo=518,Vu=519,Hu=35044,Ko="300 es",vn=2e3,cs=2001;function Wu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xu(){const i=la("canvas");return i.style.display="block",i}const Zo={};function Jo(...i){const e="THREE."+i.shift();console.log(e,...i)}function bc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=bc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=bc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Li(...i){const e=i.join(" ");e in Zo||(Zo[e]=!0,Ne(...i))}function ju(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Yu={[cr]:dr,[ur]:pr,[hr]:mr,[rs]:fr,[dr]:cr,[pr]:ur,[mr]:hr,[fr]:rs};class ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qo=1234567;const ts=Math.PI/180,ds=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function lo(i,e){return(i%e+e)%e}function qu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $u(i,e,t){return i!==e?(t-i)/(e-i):0}function ns(i,e,t){return(1-t)*i+t*e}function Ku(i,e,t,n){return ns(i,e,1-Math.exp(-t*n))}function Zu(i,e=1){return e-Math.abs(lo(i,e*2)-e)}function Ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function eh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function th(i,e){return i+Math.random()*(e-i)}function nh(i){return i*(.5-Math.random())}function ih(i){i!==void 0&&(Qo=i);let e=Qo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sh(i){return i*ts}function ah(i){return i*ds}function rh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function oh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ch(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),h=r((e+n)/2),m=a((e-n)/2),u=r((e-n)/2),p=a((n-e)/2),v=r((n-e)/2);switch(s){case"XYX":i.set(o*h,l*m,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*m,o*c);break;case"ZXZ":i.set(l*m,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*h,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xi={DEG2RAD:ts,RAD2DEG:ds,generateUUID:zi,clamp:We,euclideanModulo:lo,mapLinear:qu,inverseLerp:$u,lerp:ns,damp:Ku,pingpong:Zu,smoothstep:Ju,smootherstep:Qu,randInt:eh,randFloat:th,randFloatSpread:nh,seededRandom:ih,degToRad:sh,radToDeg:ah,isPowerOfTwo:rh,ceilPowerOfTwo:oh,floorPowerOfTwo:lh,setQuaternionFromProperEuler:ch,normalize:Ft,denormalize:Di},_o=class _o{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_o.prototype.isVector2=!0;let Ke=_o;class Gi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],u=a[r+0],p=a[r+1],v=a[r+2],M=a[r+3];if(m!==M||l!==u||c!==p||h!==v){let x=l*u+c*p+h*v+m*M;x<0&&(u=-u,p=-p,v=-v,M=-M,x=-x);let f=1-o;if(x<.9995){const w=Math.acos(x),I=Math.sin(w);f=Math.sin(f*w)/I,o=Math.sin(o*w)/I,l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,m=m*f+M*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,m=m*f+M*o;const w=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=w,c*=w,h*=w,m*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=a[r],u=a[r+1],p=a[r+2],v=a[r+3];return e[t]=o*v+h*m+l*p-c*u,e[t+1]=l*v+h*u+c*m-o*p,e[t+2]=c*v+h*p+o*u-l*m,e[t+3]=h*v-o*m-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(a/2),u=l(n/2),p=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*h*m+c*p*v,this._y=c*p*m-u*h*v,this._z=c*h*v+u*p*m,this._w=c*h*m-u*p*v;break;case"YXZ":this._x=u*h*m+c*p*v,this._y=c*p*m-u*h*v,this._z=c*h*v-u*p*m,this._w=c*h*m+u*p*v;break;case"ZXY":this._x=u*h*m-c*p*v,this._y=c*p*m+u*h*v,this._z=c*h*v+u*p*m,this._w=c*h*m-u*p*v;break;case"ZYX":this._x=u*h*m-c*p*v,this._y=c*p*m+u*h*v,this._z=c*h*v-u*p*m,this._w=c*h*m+u*p*v;break;case"YZX":this._x=u*h*m+c*p*v,this._y=c*p*m+u*h*v,this._z=c*h*v-u*p*m,this._w=c*h*m-u*p*v;break;case"XZY":this._x=u*h*m-c*p*v,this._y=c*p*m-u*h*v,this._z=c*h*v+u*p*m,this._w=c*h*m+u*p*v;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],m=t[10],u=n+o+m;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(n>o&&n>m){const p=2*Math.sqrt(1+n-o-m);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>m){const p=2*Math.sqrt(1+o-n-m);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+m-n-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vo=class vo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(el.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(el.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),h=2*(o*t-a*s),m=2*(a*n-r*t);return this.x=t+l*c+r*m-o*h,this.y=n+l*h+o*c-a*m,this.z=s+l*m+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vo.prototype.isVector3=!0;let G=vo;const La=new G,el=new Gi,bo=class bo{constructor(e,t,n,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],u=n[2],p=n[5],v=n[8],M=s[0],x=s[3],f=s[6],w=s[1],I=s[4],S=s[7],E=s[2],y=s[5],R=s[8];return a[0]=r*M+o*w+l*E,a[3]=r*x+o*I+l*y,a[6]=r*f+o*S+l*R,a[1]=c*M+h*w+m*E,a[4]=c*x+h*I+m*y,a[7]=c*f+h*S+m*R,a[2]=u*M+p*w+v*E,a[5]=u*x+p*I+v*y,a[8]=u*f+p*S+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],m=h*r-o*c,u=o*l-h*a,p=c*a-r*l,v=t*m+n*u+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=m*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*r)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*a-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(r*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Li("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return Li("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return Li("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bo.prototype.isMatrix3=!0;let Pe=bo;const Ua=new Pe,tl=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dh(){const i={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===at&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===at&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Li("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Li("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ra]:{primaries:e,whitePoint:n,transfer:oa,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:n,transfer:at,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}const $e=dh();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class uh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=la("canvas")),_i.width=e.width,_i.height=e.height;const s=_i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=la("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Pn(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hh=0;class co{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Fa(s[r].image)):a.push(Fa(s[r]))}else a=Fa(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let fh=0;const Oa=new G;class Bt extends ui{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=In,s=In,a=Ut,r=ii,o=rn,l=$t,c=Bt.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=zi(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oa).x}get height(){return this.source.getSize(Oa).y}get depth(){return this.source.getSize(Oa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=hc;Bt.DEFAULT_ANISOTROPY=1;const So=class So{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],h=l[4],m=l[8],u=l[1],p=l[5],v=l[9],M=l[2],x=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(m-M)<.01&&Math.abs(v-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+M)<.1&&Math.abs(v+x)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(c+1)/2,S=(p+1)/2,E=(f+1)/2,y=(h+u)/4,R=(m+M)/4,_=(v+x)/4;return I>S&&I>E?I<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(I),s=y/n,a=R/n):S>E?S<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(S),n=y/s,a=_/s):E<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),n=R/a,s=_/a),this.set(n,s,a,t),this}let w=Math.sqrt((x-v)*(x-v)+(m-M)*(m-M)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(x-v)/w,this.y=(m-M)/w,this.z=(u-h)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};So.prototype.isVector4=!0;let pt=So;class ph extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},a=new Bt(s),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new co(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sc extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mh extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ca=class ca{constructor(e,t,n,s,a,r,o,l,c,h,m,u,p,v,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,h,m,u,p,v,M,x)}set(e,t,n,s,a,r,o,l,c,h,m,u,p,v,M,x){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=m,f[14]=u,f[3]=p,f[7]=v,f[11]=M,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ca().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),a=1/vi.setFromMatrixColumn(e,1).length(),r=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const u=r*h,p=r*m,v=o*h,M=o*m;t[0]=l*h,t[4]=-l*m,t[8]=c,t[1]=p+v*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=v+p*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,p=l*m,v=c*h,M=c*m;t[0]=u+M*o,t[4]=v*o-p,t[8]=r*c,t[1]=r*m,t[5]=r*h,t[9]=-o,t[2]=p*o-v,t[6]=M+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,p=l*m,v=c*h,M=c*m;t[0]=u-M*o,t[4]=-r*m,t[8]=v+p*o,t[1]=p+v*o,t[5]=r*h,t[9]=M-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,p=r*m,v=o*h,M=o*m;t[0]=l*h,t[4]=v*c-p,t[8]=u*c+M,t[1]=l*m,t[5]=M*c+u,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,p=r*c,v=o*l,M=o*c;t[0]=l*h,t[4]=M-u*m,t[8]=v*m+p,t[1]=m,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*m+v,t[10]=u-M*m}else if(e.order==="XZY"){const u=r*l,p=r*c,v=o*l,M=o*c;t[0]=l*h,t[4]=-m,t[8]=c*h,t[1]=u*m+M,t[5]=r*h,t[9]=p*m-v,t[2]=v*m-p,t[6]=o*h,t[10]=M*m+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gh,e,xh)}lookAt(e,t,n){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),kn.crossVectors(n,jt),kn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),kn.crossVectors(n,jt)),kn.normalize(),As.crossVectors(jt,kn),s[0]=kn.x,s[4]=As.x,s[8]=jt.x,s[1]=kn.y,s[5]=As.y,s[9]=jt.y,s[2]=kn.z,s[6]=As.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],u=n[9],p=n[13],v=n[2],M=n[6],x=n[10],f=n[14],w=n[3],I=n[7],S=n[11],E=n[15],y=s[0],R=s[4],_=s[8],T=s[12],C=s[1],L=s[5],F=s[9],V=s[13],D=s[2],z=s[6],j=s[10],Y=s[14],ie=s[3],W=s[7],Z=s[11],ee=s[15];return a[0]=r*y+o*C+l*D+c*ie,a[4]=r*R+o*L+l*z+c*W,a[8]=r*_+o*F+l*j+c*Z,a[12]=r*T+o*V+l*Y+c*ee,a[1]=h*y+m*C+u*D+p*ie,a[5]=h*R+m*L+u*z+p*W,a[9]=h*_+m*F+u*j+p*Z,a[13]=h*T+m*V+u*Y+p*ee,a[2]=v*y+M*C+x*D+f*ie,a[6]=v*R+M*L+x*z+f*W,a[10]=v*_+M*F+x*j+f*Z,a[14]=v*T+M*V+x*Y+f*ee,a[3]=w*y+I*C+S*D+E*ie,a[7]=w*R+I*L+S*z+E*W,a[11]=w*_+I*F+S*j+E*Z,a[15]=w*T+I*V+S*Y+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],m=e[6],u=e[10],p=e[14],v=e[3],M=e[7],x=e[11],f=e[15],w=l*p-c*u,I=o*p-c*m,S=o*u-l*m,E=r*p-c*h,y=r*u-l*h,R=r*m-o*h;return t*(M*w-x*I+f*S)-n*(v*w-x*E+f*y)+s*(v*I-M*E+f*R)-a*(v*S-M*y+x*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-n*(a*h-o*l)+s*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],m=e[9],u=e[10],p=e[11],v=e[12],M=e[13],x=e[14],f=e[15],w=t*o-n*r,I=t*l-s*r,S=t*c-a*r,E=n*l-s*o,y=n*c-a*o,R=s*c-a*l,_=h*M-m*v,T=h*x-u*v,C=h*f-p*v,L=m*x-u*M,F=m*f-p*M,V=u*f-p*x,D=w*V-I*F+S*L+E*C-y*T+R*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=(o*V-l*F+c*L)*z,e[1]=(s*F-n*V-a*L)*z,e[2]=(M*R-x*y+f*E)*z,e[3]=(u*y-m*R-p*E)*z,e[4]=(l*C-r*V-c*T)*z,e[5]=(t*V-s*C+a*T)*z,e[6]=(x*S-v*R-f*I)*z,e[7]=(h*R-u*S+p*I)*z,e[8]=(r*F-o*C+c*_)*z,e[9]=(n*C-t*F-a*_)*z,e[10]=(v*y-M*S+f*w)*z,e[11]=(m*S-h*y-p*w)*z,e[12]=(o*T-r*L-l*_)*z,e[13]=(t*L-n*T+s*_)*z,e[14]=(M*I-v*E-x*w)*z,e[15]=(h*E-m*I+u*w)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,m=o+o,u=a*c,p=a*h,v=a*m,M=r*h,x=r*m,f=o*m,w=l*c,I=l*h,S=l*m,E=n.x,y=n.y,R=n.z;return s[0]=(1-(M+f))*E,s[1]=(p+S)*E,s[2]=(v-I)*E,s[3]=0,s[4]=(p-S)*y,s[5]=(1-(u+f))*y,s[6]=(x+w)*y,s[7]=0,s[8]=(v+I)*R,s[9]=(x-w)*R,s[10]=(1-(u+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),l=vi.set(s[8],s[9],s[10]).length();a<0&&(r=-r),tn.copy(this);const c=1/r,h=1/o,m=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=m,tn.elements[9]*=m,tn.elements[10]*=m,t.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,a,r,o=vn,l=!1){const c=this.elements,h=2*a/(t-e),m=2*a/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s);let v,M;if(l)v=a/(r-a),M=r*a/(r-a);else if(o===vn)v=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===cs)v=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=vn,l=!1){const c=this.elements,h=2/(t-e),m=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s);let v,M;if(l)v=1/(r-a),M=r/(r-a);else if(o===vn)v=-2/(r-a),M=-(r+a)/(r-a);else if(o===cs)v=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ca.prototype.isMatrix4=!0;let mt=ca;const vi=new G,tn=new mt,gh=new G(0,0,0),xh=new G(1,1,1),kn=new G,As=new G,jt=new G,il=new mt,sl=new Gi;class qn{constructor(e=0,t=0,n=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-We(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _h=0;const al=new G,bi=new Gi,Tn=new mt,Rs=new G,ji=new G,vh=new G,bh=new Gi,rl=new G(1,0,0),ol=new G(0,1,0),ll=new G(0,0,1),cl={type:"added"},Sh={type:"removed"},Si={type:"childadded",child:null},Ba={type:"childremoved",child:null};class Nt extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new G,t=new qn,n=new Gi,s=new G(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Pe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(rl,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rl,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rs.copy(e):Rs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(ji,Rs,this.up):Tn.lookAt(Rs,ji,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(Tn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cl),Si.child=e,this.dispatchEvent(Si),Si.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sh),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cl),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,vh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const m=l[c];a(e.shapes,m)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),m=r(e.shapes),u=r(e.skeletons),p=r(e.animations),v=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Nt.DEFAULT_UP=new G(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jn extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mh={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),f=this._getHandJoint(c,M);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=h.position.distanceTo(m.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function za(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=lo(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=za(r,a,e+1/3),this.g=za(r,a,e),this.b=za(r,a,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function n(a){a!==void 0&&parseFloat(a)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=yc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return $e.workingToColorSpace(Pt.copy(this),e),Math.round(We(Pt.r*255,0,255))*65536+Math.round(We(Pt.g*255,0,255))*256+Math.round(We(Pt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Pt.copy(this),t);const n=Pt.r,s=Pt.g,a=Pt.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const m=r-o;switch(c=h<=.5?m/(r+o):m/(2-r-o),r){case n:l=(s-a)/m+(s<a?6:0);break;case s:l=(a-n)/m+2;break;case a:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=en){$e.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,s=Pt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Cs);const n=ns(zn.h,Cs.h,t),s=ns(zn.s,Cs.s,t),a=ns(zn.l,Cs.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new He;He.NAMES=yc;class uo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new uo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yh extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nn=new G,wn=new G,Ga=new G,An=new G,Mi=new G,yi=new G,dl=new G,Va=new G,Ha=new G,Wa=new G,Xa=new pt,ja=new pt,Ya=new pt;class an{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){nn.subVectors(s,t),wn.subVectors(n,t),Ga.subVectors(e,t);const r=nn.dot(nn),o=nn.dot(wn),l=nn.dot(Ga),c=wn.dot(wn),h=wn.dot(Ga),m=r*c-o*o;if(m===0)return a.set(0,0,0),null;const u=1/m,p=(c*l-o*h)*u,v=(r*h-o*l)*u;return a.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,An.x),l.addScaledVector(r,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return Xa.setScalar(0),ja.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,n),Ya.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Xa,a.x),r.addScaledVector(ja,a.y),r.addScaledVector(Ya,a.z),r}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),wn.subVectors(e,t),nn.cross(wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),nn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;Mi.subVectors(s,n),yi.subVectors(a,n),Va.subVectors(e,n);const l=Mi.dot(Va),c=yi.dot(Va);if(l<=0&&c<=0)return t.copy(n);Ha.subVectors(e,s);const h=Mi.dot(Ha),m=yi.dot(Ha);if(h>=0&&m<=h)return t.copy(s);const u=l*m-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Mi,r);Wa.subVectors(e,a);const p=Mi.dot(Wa),v=yi.dot(Wa);if(v>=0&&p<=v)return t.copy(a);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(yi,o);const x=h*v-p*m;if(x<=0&&m-h>=0&&p-v>=0)return dl.subVectors(a,s),o=(m-h)/(m-h+(p-v)),t.copy(s).addScaledVector(dl,o);const f=1/(x+M+u);return r=M*f,o=u*f,t.copy(n).addScaledVector(Mi,r).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hs{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,sn):sn.fromBufferAttribute(a,r),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),Is.subVectors(this.max,Yi),Ei.subVectors(e.a,Yi),Ti.subVectors(e.b,Yi),wi.subVectors(e.c,Yi),Gn.subVectors(Ti,Ei),Vn.subVectors(wi,Ti),Zn.subVectors(Ei,wi);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-Zn.z,Zn.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,Zn.z,0,-Zn.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-Zn.y,Zn.x,0];return!qa(t,Ei,Ti,wi,Is)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,Ei,Ti,wi,Is))?!1:(Ds.crossVectors(Gn,Vn),t=[Ds.x,Ds.y,Ds.z],qa(t,Ei,Ti,wi,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new G,new G,new G,new G,new G,new G,new G,new G],sn=new G,Ns=new hs,Ei=new G,Ti=new G,wi=new G,Gn=new G,Vn=new G,Zn=new G,Yi=new G,Is=new G,Ds=new G,Jn=new G;function qa(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Jn.fromArray(i,a);const o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vt=new G,Ps=new Ke;let Eh=0;class ln extends ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hu,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ec extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tc extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Th=new hs,qi=new G,$a=new G;class ua{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Th.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add($a)),this.expandByPoint(qi.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wh=0;const Qt=new mt,Ka=new Nt,Ai=new G,Yt=new hs,$i=new hs,Et=new G;class Wt extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?Tc:Ec)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Pe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new kt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Yt.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Yt.min,$i.min),Yt.expandByPoint(Et),Et.addVectors(Yt.max,$i.max),Yt.expandByPoint(Et)):(Yt.expandByPoint($i.min),Yt.expandByPoint($i.max))}Yt.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Et.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(e,c),Et.add(Ai)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new G,l[_]=new G;const c=new G,h=new G,m=new G,u=new Ke,p=new Ke,v=new Ke,M=new G,x=new G;function f(_,T,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),m.fromBufferAttribute(n,C),u.fromBufferAttribute(a,_),p.fromBufferAttribute(a,T),v.fromBufferAttribute(a,C),h.sub(c),m.sub(c),p.sub(u),v.sub(u);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(m,-p.y).multiplyScalar(L),x.copy(m).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(L),o[_].add(M),o[T].add(M),o[C].add(M),l[_].add(x),l[T].add(x),l[C].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,T=w.length;_<T;++_){const C=w[_],L=C.start,F=C.count;for(let V=L,D=L+F;V<D;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const I=new G,S=new G,E=new G,y=new G;function R(_){E.fromBufferAttribute(s,_),y.copy(E);const T=o[_];I.copy(T),I.sub(E.multiplyScalar(E.dot(T))).normalize(),S.crossVectors(y,T);const L=S.dot(l[_])<0?-1:1;r.setXYZW(_,I.x,I.y,I.z,L)}for(let _=0,T=w.length;_<T;++_){const C=w[_],L=C.start,F=C.count;for(let V=L,D=L+F;V<D;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new G,a=new G,r=new G,o=new G,l=new G,c=new G,h=new G,m=new G;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),M=e.getX(u+1),x=e.getX(u+2);s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,M),r.fromBufferAttribute(t,x),h.subVectors(r,a),m.subVectors(s,a),h.cross(m),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,a),m.subVectors(s,a),h.cross(m),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,m=o.normalized,u=new c.constructor(l.length*h);let p=0,v=0;for(let M=0,x=l.length;M<x;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[v++]=c[p++]}return new ln(u,h,m)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,m=c.length;h<m;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let m=0,u=c.length;m<u;m++){const p=c[m];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],m=a[c];for(let u=0,p=m.length;u<p;u++)h.push(m[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const m=r[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new G,Ah=new G,Rh=new Pe;class Wn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Za.subVectors(n,t).cross(Ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Za),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rh.getNormalMatrix(e),s=this.coplanarPoint(Za).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ch=0;class Vi extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=es,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cn=new G,Ja=new G,Ls=new G,Us=new G;class wc{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ja.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),Us.copy(this.origin).sub(Ja);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Ls),o=Us.dot(this.direction),l=-Us.dot(Ls),c=Us.lengthSq(),h=Math.abs(1-r*r);let m,u,p,v;if(h>0)if(m=r*l-o,u=r*o-l,v=a*h,m>=0)if(u>=-v)if(u<=v){const M=1/h;m*=M,u*=M,p=m*(m+r*u+2*o)+u*(r*m+u+2*l)+c}else u=a,m=Math.max(0,-(r*u+o)),p=-m*m+u*(u+2*l)+c;else u=-a,m=Math.max(0,-(r*u+o)),p=-m*m+u*(u+2*l)+c;else u<=-v?(m=Math.max(0,-(-r*a+o)),u=m>0?-a:Math.min(Math.max(-a,-l),a),p=-m*m+u*(u+2*l)+c):u<=v?(m=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(m=Math.max(0,-(r*a+o)),u=m>0?a:Math.min(Math.max(-a,-l),a),p=-m*m+u*(u+2*l)+c);else u=r>0?-a:a,m=Math.max(0,-(r*u+o)),p=-m*m+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ja).addScaledVector(Ls,u),p}intersectSphere(e,t){if(e.radius<0)return null;Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),m>=0?(o=(e.min.z-u.z)*m,l=(e.max.z-u.z)*m):(o=(e.max.z-u.z)*m,l=(e.min.z-u.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,m=e.x-r.x,u=e.y-r.y,p=e.z-r.z,v=t.x-r.x,M=t.y-r.y,x=t.z-r.z,f=n.x-r.x,w=n.y-r.y,I=n.z-r.z,S=Math.abs(l),E=Math.abs(c),y=Math.abs(h);let R,_,T,C,L,F,V,D,z,j,Y,ie;if(S>=E&&S>=y?(T=l,F=m,z=v,ie=f,l>=0?(R=c,_=h,C=u,L=p,V=M,D=x,j=w,Y=I):(R=h,_=c,C=p,L=u,V=x,D=M,j=I,Y=w)):E>=y?(T=c,F=u,z=M,ie=w,c>=0?(R=h,_=l,C=p,L=m,V=x,D=v,j=I,Y=f):(R=l,_=h,C=m,L=p,V=v,D=x,j=f,Y=I)):(T=h,F=p,z=x,ie=I,h>=0?(R=l,_=c,C=m,L=u,V=v,D=M,j=f,Y=w):(R=c,_=l,C=u,L=m,V=M,D=v,j=w,Y=f)),T===0)return null;const W=R/T,Z=_/T,ee=1/T,be=C-W*F,we=L-Z*F,it=V-W*z,Ve=D-Z*z,Xe=j-W*ie,$=Y-Z*ie,te=Xe*Ve-$*it,ve=be*$-we*Xe,Ie=it*we-Ve*be;if(s){if(te<0||ve<0||Ie<0)return null}else if((te<0||ve<0||Ie<0)&&(te>0||ve>0||Ie>0))return null;const ge=te+ve+Ie;if(ge===0)return null;const Be=ee*(te*F+ve*z+Ie*ie);return(ge>0?Be<0:Be>0)?null:this.at(Be/ge,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ai extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ul=new mt,Qn=new wc,Fs=new ua,hl=new G,Os=new G,Bs=new G,ks=new G,Qa=new G,zs=new G,fl=new G,Gs=new G;class ht extends Nt{constructor(e=new Wt,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){zs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],m=a[l];h!==0&&(Qa.fromBufferAttribute(m,e),r?zs.addScaledVector(Qa,h):zs.addScaledVector(Qa.sub(t),h))}t.add(zs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(a),Qn.copy(e.ray).recast(e.near),!(Fs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Fs,hl)===null||Qn.origin.distanceToSquared(hl)>(e.far-e.near)**2))&&(ul.copy(a).invert(),Qn.copy(e.ray).applyMatrix4(ul),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,m=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){const x=u[v],f=r[x.materialIndex],w=Math.max(x.start,p.start),I=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let S=w,E=I;S<E;S+=3){const y=o.getX(S),R=o.getX(S+1),_=o.getX(S+2);s=Vs(this,f,e,n,c,h,m,y,R,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let x=v,f=M;x<f;x+=3){const w=o.getX(x),I=o.getX(x+1),S=o.getX(x+2);s=Vs(this,r,e,n,c,h,m,w,I,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){const x=u[v],f=r[x.materialIndex],w=Math.max(x.start,p.start),I=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let S=w,E=I;S<E;S+=3){const y=S,R=S+1,_=S+2;s=Vs(this,f,e,n,c,h,m,y,R,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let x=v,f=M;x<f;x+=3){const w=x,I=x+1,S=x+2;s=Vs(this,r,e,n,c,h,m,w,I,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Nh(i,e,t,n,s,a,r,o){let l;if(e.side===Ht?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===oi,o),l===null)return null;Gs.copy(o),Gs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Gs);return c<t.near||c>t.far?null:{distance:c,point:Gs.clone(),object:i}}function Vs(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,Os),i.getVertexPosition(l,Bs),i.getVertexPosition(c,ks);const h=Nh(i,e,t,n,Os,Bs,ks,fl);if(h){const m=new G;an.getBarycoord(fl,Os,Bs,ks,m),s&&(h.uv=an.getInterpolatedAttribute(s,o,l,c,m,new Ke)),a&&(h.uv1=an.getInterpolatedAttribute(a,o,l,c,m,new Ke)),r&&(h.normal=an.getInterpolatedAttribute(r,o,l,c,m,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new G,materialIndex:0};an.getNormal(Os,Bs,ks,u.normal),h.face=u,h.barycoord=m}return h}class Ih extends Bt{constructor(e=null,t=1,n=1,s,a,r,o,l,c=Ct,h=Ct,m,u){super(null,r,o,l,c,h,s,a,m,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ei=new ua,Dh=new Ke(.5,.5),Hs=new G;class ho{constructor(e=new Wn,t=new Wn,n=new Wn,s=new Wn,a=new Wn,r=new Wn){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){const s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],m=a[5],u=a[6],p=a[7],v=a[8],M=a[9],x=a[10],f=a[11],w=a[12],I=a[13],S=a[14],E=a[15];if(s[0].setComponents(c-r,p-h,f-v,E-w).normalize(),s[1].setComponents(c+r,p+h,f+v,E+w).normalize(),s[2].setComponents(c+o,p+m,f+M,E+I).normalize(),s[3].setComponents(c-o,p-m,f-M,E-I).normalize(),n)s[4].setComponents(l,u,x,S).normalize(),s[5].setComponents(c-l,p-u,f-x,E-S).normalize();else if(s[4].setComponents(c-l,p-u,f-x,E-S).normalize(),t===vn)s[5].setComponents(c+l,p+u,f+x,E+S).normalize();else if(t===cs)s[5].setComponents(l,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);const t=Dh.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Hs.x=s.normal.x>0?e.max.x:e.min.x,Hs.y=s.normal.y>0?e.max.y:e.min.y,Hs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fo extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pl=new mt,$r=new wc,Ws=new ua,Xs=new G;class Ac extends Nt{constructor(e=new Wt,t=new fo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ws.radius+=a,e.ray.intersectsSphere(Ws)===!1)return;pl.copy(s).invert(),$r.copy(e.ray).applyMatrix4(pl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let v=u,M=p;v<M;v++){const x=c.getX(v);Xs.fromBufferAttribute(m,x),ml(Xs,x,l,s,e,t,this)}}else{const u=Math.max(0,r.start),p=Math.min(m.count,r.start+r.count);for(let v=u,M=p;v<M;v++)Xs.fromBufferAttribute(m,v),ml(Xs,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ml(i,e,t,n,s,a,r){const o=$r.distanceSqToPoint(i);if(o<t){const l=new G;$r.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Rc extends Bt{constructor(e=[],t=li,n,s,a,r,o,l,c,h){super(e,t,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class us extends Bt{constructor(e,t,n=Sn,s,a,r,o=Ct,l=Ct,c,h=Ln,m=1){if(h!==Ln&&h!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:m};super(u,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ph extends us{constructor(e,t=Sn,n=li,s,a,r=Ct,o=Ct,l,c=Ln){const h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,t,n,s,a,r,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cc extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class di extends Wt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],m=[];let u=0,p=0;v("z","y","x",-1,-1,n,t,e,r,a,0),v("z","y","x",1,-1,n,t,-e,r,a,1),v("x","z","y",1,1,e,n,t,s,r,2),v("x","z","y",1,-1,e,n,-t,s,r,3),v("x","y","z",1,-1,e,t,n,s,a,4),v("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(m,2));function v(M,x,f,w,I,S,E,y,R,_,T){const C=S/R,L=E/_,F=S/2,V=E/2,D=y/2,z=R+1,j=_+1;let Y=0,ie=0;const W=new G;for(let Z=0;Z<j;Z++){const ee=Z*L-V;for(let be=0;be<z;be++){const we=be*C-F;W[M]=we*w,W[x]=ee*I,W[f]=D,c.push(W.x,W.y,W.z),W[M]=0,W[x]=0,W[f]=y>0?1:-1,h.push(W.x,W.y,W.z),m.push(be/R),m.push(1-Z/_),Y+=1}}for(let Z=0;Z<_;Z++)for(let ee=0;ee<R;ee++){const be=u+ee+z*Z,we=u+ee+z*(Z+1),it=u+(ee+1)+z*(Z+1),Ve=u+(ee+1)+z*Z;l.push(be,we,Ve),l.push(we,it,Ve),ie+=6}o.addGroup(p,ie,T),p+=ie,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fi extends Wt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],m=[],u=[],p=[];let v=0;const M=[],x=n/2;let f=0;w(),r===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new kt(m,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(p,2));function w(){const S=new G,E=new G;let y=0;const R=(t-e)/n;for(let _=0;_<=a;_++){const T=[],C=_/a,L=C*(t-e)+e;for(let F=0;F<=s;F++){const V=F/s,D=V*l+o,z=Math.sin(D),j=Math.cos(D);E.x=L*z,E.y=-C*n+x,E.z=L*j,m.push(E.x,E.y,E.z),S.set(z,R,j).normalize(),u.push(S.x,S.y,S.z),p.push(V,1-C),T.push(v++)}M.push(T)}for(let _=0;_<s;_++)for(let T=0;T<a;T++){const C=M[T][_],L=M[T+1][_],F=M[T+1][_+1],V=M[T][_+1];(e>0||T!==0)&&(h.push(C,L,V),y+=3),(t>0||T!==a-1)&&(h.push(L,F,V),y+=3)}c.addGroup(f,y,0),f+=y}function I(S){const E=v,y=new Ke,R=new G;let _=0;const T=S===!0?e:t,C=S===!0?1:-1;for(let F=1;F<=s;F++)m.push(0,x*C,0),u.push(0,C,0),p.push(.5,.5),v++;const L=v;for(let F=0;F<=s;F++){const D=F/s*l+o,z=Math.cos(D),j=Math.sin(D);R.x=T*j,R.y=x*C,R.z=T*z,m.push(R.x,R.y,R.z),u.push(0,C,0),y.x=z*.5+.5,y.y=j*.5*C+.5,p.push(y.x,y.y),v++}for(let F=0;F<s;F++){const V=E+F,D=L+F;S===!0?h.push(D,D+1,V):h.push(D+1,D,V),_+=3}c.addGroup(f,_,S===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class po extends Fi{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new po(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ri extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=e/o,u=t/l,p=[],v=[],M=[],x=[];for(let f=0;f<h;f++){const w=f*u-r;for(let I=0;I<c;I++){const S=I*m-a;v.push(S,-w,0),M.push(0,0,1),x.push(I/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const I=w+c*f,S=w+c*(f+1),E=w+1+c*(f+1),y=w+1+c*f;p.push(I,S,y),p.push(S,E,y)}this.setIndex(p),this.setAttribute("position",new kt(v,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.widthSegments,e.heightSegments)}}class is extends Wt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],m=new G,u=new G,p=[],v=[],M=[],x=[];for(let f=0;f<=n;f++){const w=[],I=f/n,S=r+I*o,E=e*Math.cos(S),y=Math.sqrt(e*e-E*E);let R=0;f===0&&r===0?R=.5/t:f===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const T=_/t,C=s+T*a;m.x=-y*Math.cos(C),m.y=E,m.z=y*Math.sin(C),v.push(m.x,m.y,m.z),u.copy(m).normalize(),M.push(u.x,u.y,u.z),x.push(T+R,1-I),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const I=h[f][w+1],S=h[f][w],E=h[f+1][w],y=h[f+1][w+1];(f!==0||r>0)&&p.push(I,S,y),(f!==n-1||l<Math.PI)&&p.push(S,E,y)}this.setIndex(p),this.setAttribute("position",new kt(v,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Bi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(gl(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(gl(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=Bi(i[t]);for(const s in n)e[s]=n[s]}return e}function gl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Uh={clone:Bi,merge:Ot};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Lh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bh extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class er extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kh extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zh extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mo extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const tr=new mt,xl=new G,_l=new G;class Ic{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(xl),_l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_l),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(tr,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===cs||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(tr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const js=new G,Ys=new Gi,pn=new G;class Dc extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(js,Ys,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,Ys,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(js,Ys,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,Ys,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new G,vl=new Ke,bl=new Ke;class qt extends Dc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,vl,bl),t.subVectors(bl,vl)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Gh extends Ic{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}}class Sl extends mo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class go extends Dc{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vh extends Ic{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hh extends mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Vh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Wh extends mo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ri=-90,Ci=1;class Xh extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(Ri,Ci,e,t);s.layers=this.layers,this.add(s);const a=new qt(Ri,Ci,e,t);a.layers=this.layers,this.add(a);const r=new qt(Ri,Ci,e,t);r.layers=this.layers,this.add(r);const o=new qt(Ri,Ci,e,t);o.layers=this.layers,this.add(o);const l=new qt(Ri,Ci,e,t);l.layers=this.layers,this.add(l);const c=new qt(Ri,Ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,m=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(m,u,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class jh extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Yh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Mo=class Mo{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=s,this}};Mo.prototype.isMatrix2=!0;let Ml=Mo;function yl(i,e,t,n){const s=qh(n);switch(t){case xc:return i*e;case vc:return i*e/s.components*s.byteLength;case io:return i*e/s.components*s.byteLength;case ci:return i*e*2/s.components*s.byteLength;case so:return i*e*2/s.components*s.byteLength;case _c:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case ao:return i*e*4/s.components*s.byteLength;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qs:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vr:case Sr:return Math.max(i,16)*Math.max(e,8)/4;case _r:case br:return Math.max(i,8)*Math.max(e,8)/2;case Mr:case yr:case Tr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Er:case sa:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ir:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Lr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ur:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Or:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Br:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case kr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vr:case Hr:case Wr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xr:case jr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case aa:case Yr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qh(i){switch(i){case $t:case fc:return{byteLength:1,components:1};case os:case pc:case Mn:return{byteLength:2,components:1};case to:case no:return{byteLength:2,components:4};case Sn:case eo:case _n:return{byteLength:4,components:1};case mc:case gc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);function Pc(){let i=null,e=!1,t=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function $h(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){const h=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,h);else{m.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<m.length;p++){const v=m[u],M=m[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,m[u]=M)}m.length=u+1;for(let p=0,v=m.length;p<v;p++){const M=m[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$f=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,op=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_m=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Kh,alphahash_pars_fragment:Zh,alphamap_fragment:Jh,alphamap_pars_fragment:Qh,alphatest_fragment:ef,alphatest_pars_fragment:tf,aomap_fragment:nf,aomap_pars_fragment:sf,batching_pars_vertex:af,batching_vertex:rf,begin_vertex:of,beginnormal_vertex:lf,bsdfs:cf,iridescence_fragment:df,bumpmap_pars_fragment:uf,clipping_planes_fragment:hf,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:pf,clipping_planes_vertex:mf,color_fragment:gf,color_pars_fragment:xf,color_pars_vertex:_f,color_vertex:vf,common:bf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:yf,displacementmap_vertex:Ef,emissivemap_fragment:Tf,emissivemap_pars_fragment:wf,colorspace_fragment:Af,colorspace_pars_fragment:Rf,envmap_fragment:Cf,envmap_common_pars_fragment:Nf,envmap_pars_fragment:If,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Hf,envmap_vertex:Pf,fog_vertex:Lf,fog_pars_vertex:Uf,fog_fragment:Ff,fog_pars_fragment:Of,gradientmap_pars_fragment:Bf,lightmap_pars_fragment:kf,lights_lambert_fragment:zf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Vf,lights_toon_fragment:Wf,lights_toon_pars_fragment:Xf,lights_phong_fragment:jf,lights_phong_pars_fragment:Yf,lights_physical_fragment:qf,lights_physical_pars_fragment:$f,lights_fragment_begin:Kf,lights_fragment_maps:Zf,lights_fragment_end:Jf,lightprobes_pars_fragment:Qf,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:sp,map_pars_fragment:ap,map_particle_fragment:rp,map_particle_pars_fragment:op,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:dp,morphcolor_vertex:up,morphnormal_vertex:hp,morphtarget_pars_vertex:fp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:xp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:Ep,opaque_fragment:Tp,packing:wp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Np,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Pp,shadowmap_pars_vertex:Lp,shadowmap_vertex:Up,shadowmask_pars_fragment:Fp,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:kp,skinnormal_vertex:zp,specularmap_fragment:Gp,specularmap_pars_fragment:Vp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:jp,uv_pars_fragment:Yp,uv_pars_vertex:qp,uv_vertex:$p,worldpos_vertex:Kp,background_vert:Zp,background_frag:Jp,backgroundCube_vert:Qp,backgroundCube_frag:em,cube_vert:tm,cube_frag:nm,depth_vert:im,depth_frag:sm,distance_vert:am,distance_frag:rm,equirect_vert:om,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:dm,meshbasic_vert:um,meshbasic_frag:hm,meshlambert_vert:fm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:xm,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:bm,meshphysical_vert:Sm,meshphysical_frag:Mm,meshtoon_vert:ym,meshtoon_frag:Em,points_vert:Tm,points_frag:wm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Nm},pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},gn={basic:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ot([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ot([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ot([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ot([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ot([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ot([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Ot([pe.common,pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Ot([pe.lights,pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};gn.physical={uniforms:Ot([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const qs={r:0,b:0,g:0},Im=new mt,Lc=new Pe;Lc.set(-1,0,0,0,1,0,0,0,1);function Dm(i,e,t,n,s,a){const r=new He(0);let o=s===!0?0:1,l,c,h=null,m=0,u=null;function p(w){let I=w.isScene===!0?w.background:null;if(I&&I.isTexture){const S=w.backgroundBlurriness>0;I=e.get(I,S)}return I}function v(w){let I=!1;const S=p(w);S===null?x(r,o):S&&S.isColor&&(x(S,1),I=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(w,I){const S=p(I);S&&(S.isCubeTexture||S.mapping===da)?(c===void 0&&(c=new ht(new di(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Bi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(I.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lc),c.material.toneMapped=$e.getTransfer(S.colorSpace)!==at,(h!==S||m!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,m=S.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ht(new ri(2,2),new cn({name:"BackgroundMaterial",uniforms:Bi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=$e.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||m!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,m=S.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function x(w,I){w.getRGB(qs,Nc(i)),t.buffers.color.setClear(qs.r,qs.g,qs.b,I,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(w,I=1){r.set(w),o=I,x(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,x(r,o)},render:v,addToRenderList:M,dispose:f}}function Pm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let a=s,r=!1;function o(L,F,V,D,z){let j=!1;const Y=m(L,D,V,F);a!==Y&&(a=Y,c(a.object)),j=p(L,D,V,z),j&&v(L,D,V,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,S(L,F,V,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function m(L,F,V,D){const z=D.wireframe===!0;let j=n[F.id];j===void 0&&(j={},n[F.id]=j);const Y=L.isInstancedMesh===!0?L.id:0;let ie=j[Y];ie===void 0&&(ie={},j[Y]=ie);let W=ie[V.id];W===void 0&&(W={},ie[V.id]=W);let Z=W[z];return Z===void 0&&(Z=u(l()),W[z]=Z),Z}function u(L){const F=[],V=[],D=[];for(let z=0;z<t;z++)F[z]=0,V[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:D,object:L,attributes:{},index:null}}function p(L,F,V,D){const z=a.attributes,j=F.attributes;let Y=0;const ie=V.getAttributes();for(const W in ie)if(ie[W].location>=0){const ee=z[W];let be=j[W];if(be===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),ee===void 0||ee.attribute!==be||be&&ee.data!==be.data)return!0;Y++}return a.attributesNum!==Y||a.index!==D}function v(L,F,V,D){const z={},j=F.attributes;let Y=0;const ie=V.getAttributes();for(const W in ie)if(ie[W].location>=0){let ee=j[W];ee===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const be={};be.attribute=ee,ee&&ee.data&&(be.data=ee.data),z[W]=be,Y++}a.attributes=z,a.attributesNum=Y,a.index=D}function M(){const L=a.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function x(L){f(L,0)}function f(L,F){const V=a.newAttributes,D=a.enabledAttributes,z=a.attributeDivisors;V[L]=1,D[L]===0&&(i.enableVertexAttribArray(L),D[L]=1),z[L]!==F&&(i.vertexAttribDivisor(L,F),z[L]=F)}function w(){const L=a.newAttributes,F=a.enabledAttributes;for(let V=0,D=F.length;V<D;V++)F[V]!==L[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function I(L,F,V,D,z,j,Y){Y===!0?i.vertexAttribIPointer(L,F,V,z,j):i.vertexAttribPointer(L,F,V,D,z,j)}function S(L,F,V,D){M();const z=D.attributes,j=V.getAttributes(),Y=F.defaultAttributeValues;for(const ie in j){const W=j[ie];if(W.location>=0){let Z=z[ie];if(Z===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const ee=Z.normalized,be=Z.itemSize,we=e.get(Z);if(we===void 0)continue;const it=we.buffer,Ve=we.type,Xe=we.bytesPerElement,$=Ve===i.INT||Ve===i.UNSIGNED_INT||Z.gpuType===eo;if(Z.isInterleavedBufferAttribute){const te=Z.data,ve=te.stride,Ie=Z.offset;if(te.isInstancedInterleavedBuffer){for(let ge=0;ge<W.locationSize;ge++)f(W.location+ge,te.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ge=0;ge<W.locationSize;ge++)x(W.location+ge);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ge=0;ge<W.locationSize;ge++)I(W.location+ge,be/W.locationSize,Ve,ee,ve*Xe,(Ie+be/W.locationSize*ge)*Xe,$)}else{if(Z.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)f(W.location+te,Z.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let te=0;te<W.locationSize;te++)x(W.location+te);i.bindBuffer(i.ARRAY_BUFFER,it);for(let te=0;te<W.locationSize;te++)I(W.location+te,be/W.locationSize,Ve,ee,be*Xe,be/W.locationSize*te*Xe,$)}}else if(Y!==void 0){const ee=Y[ie];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}w()}function E(){T();for(const L in n){const F=n[L];for(const V in F){const D=F[V];for(const z in D){const j=D[z];for(const Y in j)h(j[Y].object),delete j[Y];delete D[z]}}delete n[L]}}function y(L){if(n[L.id]===void 0)return;const F=n[L.id];for(const V in F){const D=F[V];for(const z in D){const j=D[z];for(const Y in j)h(j[Y].object),delete j[Y];delete D[z]}}delete n[L.id]}function R(L){for(const F in n){const V=n[F];for(const D in V){const z=V[D];if(z[L.id]===void 0)continue;const j=z[L.id];for(const Y in j)h(j[Y].object),delete j[Y];delete z[L.id]}}}function _(L){for(const F in n){const V=n[F],D=L.isInstancedMesh===!0?L.id:0,z=V[D];if(z!==void 0){for(const j in z){const Y=z[j];for(const ie in Y)h(Y[ie].object),delete Y[ie];delete z[j]}delete V[D],Object.keys(V).length===0&&delete n[F]}}}function T(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:x,disableUnusedAttributes:w}}function Lm(i,e,t){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Um(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==$t&&R!==_n&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const m=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:w,maxVaryings:I,maxFragmentUniforms:S,maxSamples:E,samples:y}}function Fm(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new Wn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){const p=m.length!==0||u||n!==0||s;return s=u,n=m.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,u){t=h(m,u,0)},this.setState=function(m,u,p){const v=m.clippingPlanes,M=m.clipIntersection,x=m.clipShadows,f=i.get(m);if(!s||v===null||v.length===0||a&&!x)a?h(null):c();else{const w=a?0:n,I=w*4;let S=f.clippingState||null;l.value=S,S=h(v,u,I,p);for(let E=0;E!==I;++E)S[E]=t[E];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,u,p,v){const M=m!==null?m.length:0;let x=null;if(M!==0){if(x=l.value,v!==!0||x===null){const f=p+M*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(x===null||x.length<f)&&(x=new Float32Array(f));for(let I=0,S=p;I!==M;++I,S+=4)r.copy(m[I]).applyMatrix4(w,o),r.normal.toArray(x,S),x[S+3]=r.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}const Pi=4,Om=6,Bm=20,km=256,Ki=new go,El=new He;let nr=null,ir=0,sr=0,ar=!1;const zm=new G,ti=new G;class Tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){const{size:r=256,position:o=zm}=a;nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nr,ir,sr),this._renderer.xr.enabled=ar,e.scissorTest=!1,Ni(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Mn,format:rn,colorSpace:ra,depthBuffer:!1},s=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gm(a)),this._blurMaterial=Hm(a,e,t),this._ggxMaterial=Vm(a,e,t)}return s}_compileMaterial(e){const t=new ht(new Wt,e);this._renderer.compile(t,Ki)}_sceneToCubeUV(e,t,n,s,a){const l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,p=m.toneMapping;m.getClearColor(El),m.toneMapping=bn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new di,new ai({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,x=M.material;let f=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,f=!0):(x.color.copy(El),f=!0);for(let I=0;I<6;I++){const S=I%3;S===0?(l.up.set(0,c[I],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[I],a.y,a.z)):S===1?(l.up.set(0,0,c[I]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[I],a.z)):(l.up.set(0,c[I],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[I]));const E=this._cubeSize;Ni(s,S*E,I>2?E:0,E,E),m.setRenderTarget(s),f&&m.render(M,l),m.render(e,l)}m.toneMapping=p,m.autoClear=u,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===li||e.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ni(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Ki)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),m=Math.sqrt(c*c-h*h),u=c*1.25,p=m*u,{_lodMax:v}=this,M=this._sizeLods[n],x=3*M*(n>v-Pi?n-v+Pi:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,Ni(a,x,f,3*M,2*M),s.setRenderTarget(a),s.render(o,Ki),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-n,Ni(e,x,f,3*M,2*M),s.setRenderTarget(e),s.render(o,Ki)}_blur(e,t,n,s){const a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,n,r),this._blurPass(a,e,n,n,r)}_blurPass(e,t,n,s,a){const r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],m=3*h*(s>this._lodMax-Pi?s-this._lodMax+Pi:0),u=4*(this._cubeSize-h);Ni(t,m,u,3*h,2*h),r.setRenderTarget(t),r.render(l,Ki)}}function Gm(i){const e=[],t=[];let n=i;const s=i-Pi+1+Om;for(let a=0;a<s;a++){const r=Math.pow(2,n);e.push(r);const o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,u=6,p=3,v=new Float32Array(p*u*m),M=new Float32Array(p*u*m);for(let f=0;f<m;f++){const w=f%3*2/3-1,I=f>2?0:-1,S=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];v.set(S,p*u*f);for(let E=0;E<u;E++){const y=h[E*2]*2-1,R=h[E*2+1]*2-1;f===0?ti.set(1,R,y):f===1?ti.set(-y,1,-R):f===2?ti.set(-y,R,1):f===3?ti.set(-1,R,-y):f===4?ti.set(-y,-1,R):ti.set(y,R,-1),ti.toArray(M,(f*u+E)*p)}}const x=new Wt;x.setAttribute("position",new ln(v,p)),x.setAttribute("outputDirection",new ln(M,p)),t.push(new ht(x,null)),n>Pi&&n--}return{lodMeshes:t,sizeLods:e}}function wl(i,e,t){const n=new on(i,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ni(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Vm(i,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:km,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Hm(i,e,t){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Al(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Rl(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ha(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Uc extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new di(5,5,5),a=new cn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Dn});a.uniforms.tEquirect.value=t;const r=new ht(s,a),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=Ut),new Xh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}function Wm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?r(u):a(u)}function a(u){if(u&&u.isTexture){const p=u.mapping;if(p===Na||p===Ia)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const M=new Uc(v.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const p=u.mapping,v=p===Na||p===Ia,M=p===li||p===Oi;if(v||M){let x=t.get(u);const f=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Tl(i)),x=v?n.fromEquirectangular(u,x):n.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),x.texture;if(x!==void 0)return x.texture;{const w=u.image;return v&&w&&w.height>0||M&&w&&l(w)?(n===null&&(n=new Tl(i)),x=v?n.fromEquirectangular(u):n.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function o(u,p){return p===Na?u.mapping=li:p===Ia&&(u.mapping=Oi),u}function l(u){let p=0;const v=6;for(let M=0;M<v;M++)u[M]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Xm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Li("WebGLRenderer: "+n+" extension not supported."),s}}}function jm(i,e,t,n){const s={},a=new WeakMap;function r(m){const u=m.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete s[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(m,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,t.memory.geometries++),u}function l(m){const u=m.attributes;for(const p in u)e.update(u[p],i.ARRAY_BUFFER)}function c(m){const u=[],p=m.index,v=m.attributes.position;let M=0;if(v===void 0)return;if(p!==null){const w=p.array;M=p.version;for(let I=0,S=w.length;I<S;I+=3){const E=w[I+0],y=w[I+1],R=w[I+2];u.push(E,y,y,R,R,E)}}else{const w=v.array;M=v.version;for(let I=0,S=w.length/3-1;I<S;I+=3){const E=I+0,y=I+1,R=I+2;u.push(E,y,y,R,R,E)}}const x=new(v.count>=65535?Tc:Ec)(u,1);x.version=M;const f=a.get(m);f&&e.remove(f),a.set(m,x)}function h(m){const u=a.get(m);if(u){const p=m.index;p!==null&&u.version<p.version&&c(m)}else c(m);return a.get(m)}return{get:o,update:l,getWireframeAttribute:h}}function Ym(i,e,t){let n;function s(m){n=m}let a,r;function o(m){a=m.type,r=m.bytesPerElement}function l(m,u){i.drawElements(n,u,a,m*r),t.update(u,n,1)}function c(m,u,p){p!==0&&(i.drawElementsInstanced(n,u,a,m*r,p),t.update(u,n,p))}function h(m,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,m,0,p);let M=0;for(let x=0;x<p;x++)M+=u[x];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function qm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:et("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $m(i,e,t){const n=new WeakMap,s=new pt;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==m){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let I=0;p===!0&&(I=1),v===!0&&(I=2),M===!0&&(I=3);let S=o.attributes.position.count*I,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const y=new Float32Array(S*E*4*m),R=new Sc(y,S,E,m);R.type=_n,R.needsUpdate=!0;const _=I*4;for(let C=0;C<m;C++){const L=x[C],F=f[C],V=w[C],D=S*E*4*C;for(let z=0;z<L.count;z++){const j=z*_;p===!0&&(s.fromBufferAttribute(L,z),y[D+j+0]=s.x,y[D+j+1]=s.y,y[D+j+2]=s.z,y[D+j+3]=0),v===!0&&(s.fromBufferAttribute(F,z),y[D+j+4]=s.x,y[D+j+5]=s.y,y[D+j+6]=s.z,y[D+j+7]=0),M===!0&&(s.fromBufferAttribute(V,z),y[D+j+8]=s.x,y[D+j+9]=s.y,y[D+j+10]=s.z,y[D+j+11]=V.itemSize===4?s.w:1)}}u={count:m,texture:R,size:new Ke(S,E)},n.set(o,u),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function Km(i,e,t,n,s){let a=new WeakMap;function r(c){const h=s.render.frame,m=c.geometry,u=e.get(c,m);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;a.get(p)!==h&&(p.update(),a.set(p,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const Zm={[rc]:"LINEAR_TONE_MAPPING",[oc]:"REINHARD_TONE_MAPPING",[lc]:"CINEON_TONE_MAPPING",[Qr]:"ACES_FILMIC_TONE_MAPPING",[dc]:"AGX_TONE_MAPPING",[uc]:"NEUTRAL_TONE_MAPPING",[cc]:"CUSTOM_TONE_MAPPING"};function Jm(i,e,t,n,s,a){const r=new on(e,t,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Wt;c.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new kt([0,2,0,0,2,0],2));const h=new Bh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new ht(c,h),u=new go(-1,1,1,-1,0,1);let p=null,v=null,M=!1,x,f=null,w=[],I=!1;this.setSize=function(S,E){r.setSize(S,E),o!==null&&o.setSize(S,E),l!==null&&l.setSize(S,E);for(let y=0;y<w.length;y++){const R=w[y];R.setSize&&R.setSize(S,E)}},this.setEffects=function(S){w=S,I=w.length>0&&w[0].isRenderPass===!0;const E=r.width,y=r.height;w.length>0&&o===null&&(o=new on(E,y,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new on(E,y,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<w.length;R++){const _=w[R];_.setSize&&_.setSize(E,y)}},this.begin=function(S,E){if(M||S.toneMapping===bn&&w.length===0)return!1;if(f=E,E!==null){const y=E.width,R=E.height;(r.width!==y||r.height!==R)&&this.setSize(y,R)}return I===!1&&S.setRenderTarget(r),x=S.toneMapping,S.toneMapping=bn,!0},this.hasRenderPass=function(){return I},this.end=function(S,E){S.toneMapping=x,M=!0;let y=r,R=o;for(let _=0;_<w.length;_++){const T=w[_];T.enabled!==!1&&(T.render(S,R,y,E),T.needsSwap!==!1&&(y=R,R=R===o?l:o))}if(p!==S.outputColorSpace||v!==S.toneMapping){p=S.outputColorSpace,v=S.toneMapping,h.defines={},$e.getTransfer(p)===at&&(h.defines.SRGB_TRANSFER="");const _=Zm[v];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(f),S.render(m,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Fc=new Bt,Kr=new us(1,1),Oc=new Sc,Bc=new mh,kc=new Rc,Cl=[],Nl=[],Il=new Float32Array(16),Dl=new Float32Array(9),Pl=new Float32Array(4);function Hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Cl[s];if(a===void 0&&(a=new Float32Array(s),Cl[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fa(i,e){let t=Nl[e];t===void 0&&(t=new Int32Array(e),Nl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function i0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Pl.set(n),i.uniformMatrix2fv(this.addr,!1,Pl),St(t,n)}}function s0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Dl.set(n),i.uniformMatrix3fv(this.addr,!1,Dl),St(t,n)}}function a0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),St(t,n)}}function r0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function d0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function p0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Kr.compareFunction=t.isReversedDepthBuffer()?oo:ro,a=Kr):a=Fc,t.setTexture2D(e||a,s)}function m0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bc,s)}function g0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kc,s)}function x0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Oc,s)}function _0(i){switch(i){case 5126:return Qm;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return a0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return d0;case 36294:return u0;case 36295:return h0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return x0}}function v0(i,e){i.uniform1fv(this.addr,e)}function b0(i,e){const t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function S0(i,e){const t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function M0(i,e){const t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function y0(i,e){const t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function E0(i,e){const t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function T0(i,e){const t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function w0(i,e){i.uniform1iv(this.addr,e)}function A0(i,e){i.uniform2iv(this.addr,e)}function R0(i,e){i.uniform3iv(this.addr,e)}function C0(i,e){i.uniform4iv(this.addr,e)}function N0(i,e){i.uniform1uiv(this.addr,e)}function I0(i,e){i.uniform2uiv(this.addr,e)}function D0(i,e){i.uniform3uiv(this.addr,e)}function P0(i,e){i.uniform4uiv(this.addr,e)}function L0(i,e,t){const n=this.cache,s=e.length,a=fa(t,s);bt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=Kr:r=Fc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function U0(i,e,t){const n=this.cache,s=e.length,a=fa(t,s);bt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Bc,a[r])}function F0(i,e,t){const n=this.cache,s=e.length,a=fa(t,s);bt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||kc,a[r])}function O0(i,e,t){const n=this.cache,s=e.length,a=fa(t,s);bt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Oc,a[r])}function B0(i){switch(i){case 5126:return v0;case 35664:return b0;case 35665:return S0;case 35666:return M0;case 35674:return y0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return w0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return N0;case 36294:return I0;case 36295:return D0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}class k0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_0(t.type)}}class z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B0(t.type)}}class G0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const rr=/(\w+)(\])?(\[|\.)?/g;function Ll(i,e){i.seq.push(e),i.map[e.id]=e}function V0(i,e,t){const n=i.name,s=n.length;for(rr.lastIndex=0;;){const a=rr.exec(n),r=rr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Ll(t,c===void 0?new k0(o,i,e):new z0(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new G0(o),Ll(t,m)),t=m}}}class ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);V0(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Ul(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const H0=37297;let W0=0;function X0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Fl=new Pe;function j0(i){$e._getMatrix(Fl,$e.workingColorSpace,i);const e=`mat3( ${Fl.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case oa:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ol(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+X0(i.getShaderSource(e),o)}else return a}function Y0(i,e){const t=j0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const q0={[rc]:"Linear",[oc]:"Reinhard",[lc]:"Cineon",[Qr]:"ACESFilmic",[dc]:"AgX",[uc]:"Neutral",[cc]:"Custom"};function $0(i,e){const t=q0[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $s=new G;function K0(){$e.getLuminanceCoefficients($s);const i=$s.x.toFixed(4),e=$s.y.toFixed(4),t=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function J0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Qi(i){return i!==""}function Bl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zr(i){return i.replace(eg,ng)}const tg=new Map;function ng(i,e){let t=ke[e];if(t===void 0){const n=tg.get(e);if(n!==void 0)t=ke[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zr(t)}const ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(i){return i.replace(ig,sg)}function sg(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Gl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ag={[Ks]:"SHADOWMAP_TYPE_PCF",[Ji]:"SHADOWMAP_TYPE_VSM"};function rg(i){return ag[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const og={[li]:"ENVMAP_TYPE_CUBE",[Oi]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE_UV"};function lg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":og[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const cg={[Oi]:"ENVMAP_MODE_REFRACTION"};function dg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":cg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ug={[ac]:"ENVMAP_BLENDING_MULTIPLY",[Iu]:"ENVMAP_BLENDING_MIX",[Du]:"ENVMAP_BLENDING_ADD"};function hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ug[i.combine]||"ENVMAP_BLENDING_NONE"}function fg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function pg(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=rg(t),c=lg(t),h=dg(t),m=hg(t),u=fg(t),p=Z0(t),v=J0(a),M=s.createProgram();let x,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qi).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qi).join(`
`),f.length>0&&(f+=`
`)):(x=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),f=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?ke.tonemapping_pars_fragment:"",t.toneMapping!==bn?$0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Y0("linearToOutputTexel",t.outputColorSpace),K0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),r=Zr(r),r=Bl(r,t),r=kl(r,t),o=Zr(o),o=Bl(o,t),o=kl(o,t),r=zl(r),o=zl(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const I=w+x+r,S=w+f+o,E=Ul(s,s.VERTEX_SHADER,I),y=Ul(s,s.FRAGMENT_SHADER,S);s.attachShader(M,E),s.attachShader(M,y),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(M)||"",V=s.getShaderInfoLog(E)||"",D=s.getShaderInfoLog(y)||"",z=F.trim(),j=V.trim(),Y=D.trim();let ie=!0,W=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,y);else{const Z=Ol(s,E,"vertex"),ee=Ol(s,y,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+Z+`
`+ee)}else z!==""?Ne("WebGLProgram: Program Info Log:",z):(j===""||Y==="")&&(W=!1);W&&(L.diagnostics={runnable:ie,programLog:z,vertexShader:{log:j,prefix:x},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(E),s.deleteShader(y),_=new ta(s,M),T=Q0(s,M)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,H0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=y,this}let mg=0;class gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xg(e),t.set(e,n)),n}}class xg{constructor(e){this.id=mg++,this.code=e,this.usedTimes=0}}function _g(i){return i===ci||i===sa||i===aa}function vg(i,e,t,n,s,a){const r=new Mc,o=new gg,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,T,C,L,F,V){const D=L.fog,z=F.geometry,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ie=e.get(_.envMap||j,Y),W=ie&&ie.mapping===da?ie.image.height:null,Z=p[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,be=ee!==void 0?ee.length:0;let we=0;z.morphAttributes.position!==void 0&&(we=1),z.morphAttributes.normal!==void 0&&(we=2),z.morphAttributes.color!==void 0&&(we=3);let it,Ve,Xe,$;if(Z){const Fe=gn[Z];it=Fe.vertexShader,Ve=Fe.fragmentShader}else{it=_.vertexShader,Ve=_.fragmentShader;const Fe=o.getVertexShaderStage(_),Je=o.getFragmentShaderStage(_);o.update(_,Fe,Je),Xe=Fe.id,$=Je.id}const te=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,Be=!!_.map,xt=!!_.matcap,ze=!!ie,je=!!_.aoMap,Ze=!!_.lightMap,Le=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,_t=!!_.displacementMap,wt=!!_.emissiveMap,ut=!!_.metalnessMap,gt=!!_.roughnessMap,U=_.anisotropy>0,Mt=_.clearcoat>0,Ye=_.dispersion>0,A=_.retroreflectivity>0,g=_.iridescence>0,O=_.sheen>0,H=_.transmission>0,q=U&&!!_.anisotropyMap,se=Mt&&!!_.clearcoatMap,ae=Mt&&!!_.clearcoatNormalMap,K=Mt&&!!_.clearcoatRoughnessMap,Q=g&&!!_.iridescenceMap,le=g&&!!_.iridescenceThicknessMap,Ee=O&&!!_.sheenColorMap,de=O&&!!_.sheenRoughnessMap,re=!!_.specularMap,Ae=!!_.specularColorMap,Ce=!!_.specularIntensityMap,De=H&&!!_.transmissionMap,P=H&&!!_.thicknessMap,ce=!!_.gradientMap,J=!!_.alphaMap,oe=_.alphaTest>0,me=!!_.alphaHash,ne=!!_.extensions;let Re=bn;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Re=i.toneMapping);const ye={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:it,fragmentShader:Ve,defines:_.defines,customVertexShaderID:Xe,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ge,batchingColor:ge&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:xt,envMap:ze,envMapMode:ze&&ie.mapping,envMapCubeUVHeight:W,aoMap:je,lightMap:Ze,bumpMap:Le,normalMap:dt,displacementMap:_t,emissiveMap:wt,normalMapObjectSpace:dt&&_.normalMapType===Uu,normalMapTangentSpace:dt&&_.normalMapType===qr,packedNormalMap:dt&&_.normalMapType===qr&&_g(_.normalMap.format),metalnessMap:ut,roughnessMap:gt,anisotropy:U,anisotropyMap:q,clearcoat:Mt,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:K,dispersion:Ye,retroreflection:A,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:le,sheen:O,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:re,specularColorMap:Ae,specularIntensityMap:Ce,transmission:H,transmissionMap:De,thicknessMap:P,gradientMap:ce,opaque:_.transparent===!1&&_.blending===es&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:oe,alphaHash:me,combine:_.combine,mapUv:Be&&v(_.map.channel),aoMapUv:je&&v(_.aoMap.channel),lightMapUv:Ze&&v(_.lightMap.channel),bumpMapUv:Le&&v(_.bumpMap.channel),normalMapUv:dt&&v(_.normalMap.channel),displacementMapUv:_t&&v(_.displacementMap.channel),emissiveMapUv:wt&&v(_.emissiveMap.channel),metalnessMapUv:ut&&v(_.metalnessMap.channel),roughnessMapUv:gt&&v(_.roughnessMap.channel),anisotropyMapUv:q&&v(_.anisotropyMap.channel),clearcoatMapUv:se&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:de&&v(_.sheenRoughnessMap.channel),specularMapUv:re&&v(_.specularMap.channel),specularColorMapUv:Ae&&v(_.specularColorMap.channel),specularIntensityMapUv:Ce&&v(_.specularIntensityMap.channel),transmissionMapUv:De&&v(_.transmissionMap.channel),thicknessMapUv:P&&v(_.thicknessMap.channel),alphaMapUv:J&&v(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(dt||U),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Be||J),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:we,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===at,decodeVideoTextureEmissive:wt&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===at,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xn,flipSided:_.side===Ht,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function x(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(T,_),w(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function f(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function I(_){const T=p[_.type];let C;if(T){const L=gn[T];C=Uh.clone(L.uniforms)}else C=_.uniforms;return C}function S(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new pg(i,T,_,s),c.push(C),h.set(T,C)),C}function E(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:I,acquireProgram:S,releaseProgram:E,releaseShaderCache:y,programs:c,dispose:R}}function bg(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Sg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hl(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,M,x,f){let w=i[e];return w===void 0?(w={id:u.id,object:u,geometry:p,material:v,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:x,group:f},i[e]=w):(w.id=u.id,w.object=u,w.geometry=p,w.material=v,w.materialVariant=r(u),w.groupOrder=M,w.renderOrder=u.renderOrder,w.z=x,w.group=f),e++,w}function l(u,p,v,M,x,f,w){w.reversedDepth===!0&&(x=-x);const I=o(u,p,v,M,x,f);v.transmission>0?n.push(I):v.transparent===!0?s.push(I):t.push(I)}function c(u,p,v,M,x,f){const w=o(u,p,v,M,x,f);v.transmission>0?n.unshift(w):v.transparent===!0?s.unshift(w):t.unshift(w)}function h(u,p){t.length>1&&t.sort(u||Sg),n.length>1&&n.sort(p||Vl),s.length>1&&s.sort(p||Vl)}function m(){for(let u=e,p=i.length;u<p;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:m,sort:h}}function Mg(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Hl,i.set(n,[r])):s>=a.length?(r=new Hl,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function yg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new He};break;case"SpotLight":t={position:new G,direction:new G,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Eg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tg=0;function wg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ag(i){const e=new yg,t=Eg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,a=new mt,r=new mt;function o(c){let h=0,m=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,v=0,M=0,x=0,f=0,w=0,I=0,S=0,E=0,y=0,R=0,_=0,T=0,C=0;c.sort(wg);for(let F=0,V=c.length;F<V;F++){const D=c[F],z=D.color,j=D.intensity,Y=D.distance;let ie=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ci?ie=D.shadow.map.texture:ie=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*j,m+=z.g*j,u+=z.b*j;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],j);C++}else if(D.isSunLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[v]=ee,n.sunShadowMap[v]=ie;const be=Z.getViewportCount();for(let we=0;we<be;we++)n.sunShadowMatrix[M+we]=Z.getMatrix(we),n.sunShadowCascade[M+we]=Z._cascadeData[we];M+=be,v++}n.sun[p]=W,p++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.directionalShadow[x]=ee,n.directionalShadowMap[x]=ie,n.directionalShadowMatrix[x]=D.shadow.matrix,E++}n.directional[x]=W,x++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(z).multiplyScalar(j),W.distance=Y,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[w]=W;const Z=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,Z.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[w]=Z.matrix,D.castShadow){const ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.spotShadow[w]=ee,n.spotShadowMap[w]=ie,R++}w++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(z).multiplyScalar(j),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[I]=W,I++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=ie,n.pointShadowMatrix[f]=D.shadow.matrix,y++}n.point[f]=W,f++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(j),W.groundColor.copy(D.groundColor).multiplyScalar(j),n.hemi[S]=W,S++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=u;const L=n.hash;(L.sunLength!==p||L.directionalLength!==x||L.pointLength!==f||L.spotLength!==w||L.rectAreaLength!==I||L.hemiLength!==S||L.numSunShadows!==v||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==R||L.numSpotMaps!==_||L.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=x,n.spot.length=w,n.rectArea.length=I,n.point.length=f,n.hemi.length=S,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.sunLength=p,L.directionalLength=x,L.pointLength=f,L.spotLength=w,L.rectAreaLength=I,L.hemiLength=S,L.numSunShadows=v,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=R,L.numSpotMaps=_,L.numLightProbes=C,n.version=Tg++)}function l(c,h){let m=0,u=0,p=0,v=0,M=0,x=0;const f=h.matrixWorldInverse;for(let w=0,I=c.length;w<I;w++){const S=c[w];if(S.isSunLight){const E=n.sun[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),m++}else if(S.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(S.isSpotLight){const E=n.spot[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),v++}else if(S.isRectAreaLight){const E=n.rectArea[M];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),r.identity(),a.copy(S.matrixWorld),a.premultiply(f),r.extractRotation(a),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),M++}else if(S.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),x++}}}return{setup:o,setupView:l,state:n}}function Wl(i){const e=new Ag(i),t=[],n=[],s=[];function a(u){m.camera=u,t.length=0,n.length=0,s.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:m,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function Rg(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Wl(i),e.set(s,[o])):a>=r.length?(o=new Wl(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ig=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Dg=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Xl=new mt,Zi=new G,or=new G;function Pg(i,e,t){let n=new ho;const s=new Ke,a=new Ke,r=new pt,o=new kh,l=new zh,c={},h=t.maxTextureSize,m={[oi]:Ht,[Ht]:oi,[xn]:xn},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Cg,fragmentShader:Ng}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Wt;v.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ht(v,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let f=this.type;this.render=function(y,R,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;this.type===hu&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ks);const T=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Dn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=f!==this.type;V&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=y.length;D<z;D++){const j=y[D],Y=j.shadow;if(Y===void 0){Ne("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ie=Y.getFrameExtents();s.multiply(ie),a.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ie.x),s.x=a.x*ie.x,Y.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ie.y),s.y=a.y*ie.y,Y.mapSize.y=a.y));const W=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=W,Y.map===null||V===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ji){if(j.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new on(s.x,s.y,{format:ci,type:Mn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),Y.map.texture.name=j.name+".shadowMap",Y.map.depthTexture=new us(s.x,s.y,_n),Y.map.depthTexture.name=j.name+".shadowMapDepth",Y.map.depthTexture.format=Ln,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ct,Y.map.depthTexture.magFilter=Ct}else j.isPointLight?(Y.map=new Uc(s.x),Y.map.depthTexture=new Ph(s.x,Sn)):(Y.map=new on(s.x,s.y),Y.map.depthTexture=new us(s.x,s.y,Sn)),Y.map.depthTexture.name=j.name+".shadowMap",Y.map.depthTexture.format=Ln,this.type===Ks?(Y.map.depthTexture.compareFunction=W?oo:ro,Y.map.depthTexture.minFilter=Ut,Y.map.depthTexture.magFilter=Ut):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ct,Y.map.depthTexture.magFilter=Ct);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const Z=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();j.isPointLight!==!0&&Y.updateMatrices(j,_);for(let ee=0;ee<Z;ee++){const be=Y.getCamera(ee);if(j.isPointLight){const we=Y.camera,it=Y.matrix,Ve=j.distance||we.far;Ve!==we.far&&(we.far=Ve,we.updateProjectionMatrix()),Zi.setFromMatrixPosition(j.matrixWorld),we.position.copy(Zi),or.copy(we.position),or.add(Ig[ee]),we.up.copy(Dg[ee]),we.lookAt(or),we.updateMatrixWorld(),it.makeTranslation(-Zi.x,-Zi.y,-Zi.z),Xl.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Xl,we.coordinateSystem,we.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(Y.map),i.clear());const we=Y.getViewport(ee);r.set(a.x*we.x,a.y*we.y,a.x*we.z,a.y*we.w),F.viewport(r)}n=Y.getFrustum(ee),S(R,_,be,j,this.type)}Y.isPointLightShadow!==!0&&this.type===Ji&&w(Y,_),Y.needsUpdate=!1}f=this.type,x.needsUpdate=!1,i.setRenderTarget(T,C,L)};function w(y,R){const _=e.update(M);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null?y.mapPass=new on(s.x,s.y,{format:ci,type:Mn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,M,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value.set(y.map.width,y.map.height),p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(R,null,_,p,M,null)}function I(y,R,_,T){let C=null;const L=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=C.uuid,V=R.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let z=D[V];z===void 0&&(z=C.clone(),D[V]=z,R.addEventListener("dispose",E)),C=z}if(C.visible=R.visible,C.wireframe=R.wireframe,T===Ji?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:m[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=_}return C}function S(y,R,_,T,C){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&C===Ji)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const V=e.update(y),D=y.material;if(Array.isArray(D)){const z=V.groups;for(let j=0,Y=z.length;j<Y;j++){const ie=z[j],W=D[ie.materialIndex];if(W&&W.visible){const Z=I(y,W,T,C);y.onBeforeShadow(i,y,R,_,V,Z,ie),i.renderBufferDirect(_,null,V,Z,y,ie),y.onAfterShadow(i,y,R,_,V,Z,ie)}}}else if(D.visible){const z=I(y,D,T,C);y.onBeforeShadow(i,y,R,_,V,z,null),i.renderBufferDirect(_,null,V,z,y,null),y.onAfterShadow(i,y,R,_,V,z,null)}}const F=y.children;for(let V=0,D=F.length;V<D;V++)S(F[V],R,_,T,C)}function E(y){y.target.removeEventListener("dispose",E);for(const _ in c){const T=c[_],C=y.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Lg(i,e){function t(){let P=!1;const ce=new pt;let J=null;const oe=new pt(0,0,0,0);return{setMask:function(me){J!==me&&!P&&(i.colorMask(me,me,me,me),J=me)},setLocked:function(me){P=me},setClear:function(me,ne,Re,ye,Fe){Fe===!0&&(me*=ye,ne*=ye,Re*=ye),ce.set(me,ne,Re,ye),oe.equals(ce)===!1&&(i.clearColor(me,ne,Re,ye),oe.copy(ce))},reset:function(){P=!1,J=null,oe.set(-1,0,0,0)}}}function n(){let P=!1,ce=!1,J=null,oe=null,me=null;return{setReversed:function(ne){if(ce!==ne){const Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;const ye=me;me=null,this.setClear(ye)}},getReversed:function(){return ce},setTest:function(ne){ne?te(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(ne){J!==ne&&!P&&(i.depthMask(ne),J=ne)},setFunc:function(ne){if(ce&&(ne=Yu[ne]),oe!==ne){switch(ne){case cr:i.depthFunc(i.NEVER);break;case dr:i.depthFunc(i.ALWAYS);break;case ur:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case hr:i.depthFunc(i.EQUAL);break;case fr:i.depthFunc(i.GEQUAL);break;case pr:i.depthFunc(i.GREATER);break;case mr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=ne}},setLocked:function(ne){P=ne},setClear:function(ne){me!==ne&&(me=ne,ce&&(ne=1-ne),i.clearDepth(ne))},reset:function(){P=!1,J=null,oe=null,me=null,ce=!1}}}function s(){let P=!1,ce=null,J=null,oe=null,me=null,ne=null,Re=null,ye=null,Fe=null;return{setTest:function(Je){P||(Je?te(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!P&&(i.stencilMask(Je),ce=Je)},setFunc:function(Je,Xt,zt){(J!==Je||oe!==Xt||me!==zt)&&(i.stencilFunc(Je,Xt,zt),J=Je,oe=Xt,me=zt)},setOp:function(Je,Xt,zt){(ne!==Je||Re!==Xt||ye!==zt)&&(i.stencilOp(Je,Xt,zt),ne=Je,Re=Xt,ye=zt)},setLocked:function(Je){P=Je},setClear:function(Je){Fe!==Je&&(i.clearStencil(Je),Fe=Je)},reset:function(){P=!1,ce=null,J=null,oe=null,me=null,ne=null,Re=null,ye=null,Fe=null}}}const a=new t,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},m={},u={},p=new WeakMap,v=[],M=null,x=!1,f=null,w=null,I=null,S=null,E=null,y=null,R=null,_=new He(0,0,0),T=0,C=!1,L=null,F=null,V=null,D=null,z=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ie=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=ie>=2);let Z=null,ee={};const be=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),it=new pt().fromArray(be),Ve=new pt().fromArray(we);function Xe(P,ce,J,oe){const me=new Uint8Array(4),ne=i.createTexture();i.bindTexture(P,ne),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<J;Re++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ce+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ne}const $={};$[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),te(i.DEPTH_TEST),r.setFunc(rs),Le(!1),dt(Yo),te(i.CULL_FACE),je(Dn);function te(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function ve(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ie(P,ce){return u[P]!==ce?(i.bindFramebuffer(P,ce),u[P]=ce,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function ge(P,ce){let J=v,oe=!1;if(P){J=p.get(ce),J===void 0&&(J=[],p.set(ce,J));const me=P.textures;if(J.length!==me.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Re=me.length;ne<Re;ne++)J[ne]=i.COLOR_ATTACHMENT0+ne;J.length=me.length,oe=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,oe=!0);oe&&i.drawBuffers(J)}function Be(P){return M!==P?(i.useProgram(P),M=P,!0):!1}const xt={[Ii]:i.FUNC_ADD,[pu]:i.FUNC_SUBTRACT,[mu]:i.FUNC_REVERSE_SUBTRACT};xt[gu]=i.MIN,xt[xu]=i.MAX;const ze={[_u]:i.ZERO,[vu]:i.ONE,[bu]:i.SRC_COLOR,[ic]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[Su]:i.ONE_MINUS_SRC_COLOR,[sc]:i.ONE_MINUS_SRC_ALPHA,[Tu]:i.ONE_MINUS_DST_COLOR,[yu]:i.ONE_MINUS_DST_ALPHA,[Au]:i.CONSTANT_COLOR,[Ru]:i.ONE_MINUS_CONSTANT_COLOR,[Cu]:i.CONSTANT_ALPHA,[Nu]:i.ONE_MINUS_CONSTANT_ALPHA};function je(P,ce,J,oe,me,ne,Re,ye,Fe,Je){if(P===Dn){x===!0&&(ve(i.BLEND),x=!1);return}if(x===!1&&(te(i.BLEND),x=!0),P!==fu){if(P!==f||Je!==C){if((w!==Ii||E!==Ii)&&(i.blendEquation(i.FUNC_ADD),w=Ii,E=Ii),Je)switch(P){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case as:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",P);break}else switch(P){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qo:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $o:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",P);break}I=null,S=null,y=null,R=null,_.set(0,0,0),T=0,f=P,C=Je}return}me=me||ce,ne=ne||J,Re=Re||oe,(ce!==w||me!==E)&&(i.blendEquationSeparate(xt[ce],xt[me]),w=ce,E=me),(J!==I||oe!==S||ne!==y||Re!==R)&&(i.blendFuncSeparate(ze[J],ze[oe],ze[ne],ze[Re]),I=J,S=oe,y=ne,R=Re),(ye.equals(_)===!1||Fe!==T)&&(i.blendColor(ye.r,ye.g,ye.b,Fe),_.copy(ye),T=Fe),f=P,C=!1}function Ze(P,ce){P.side===xn?ve(i.CULL_FACE):te(i.CULL_FACE);let J=P.side===Ht;ce&&(J=!J),Le(J),P.blending===es&&P.transparent===!1?je(Dn):je(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),a.setMask(P.colorWrite);const oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),wt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(P){L!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),L=P)}function dt(P){P!==du?(te(i.CULL_FACE),P!==F&&(P===Yo?i.cullFace(i.BACK):P===uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),F=P}function _t(P){P!==V&&(Y&&i.lineWidth(P),V=P)}function wt(P,ce,J){P?(te(i.POLYGON_OFFSET_FILL),(D!==ce||z!==J)&&(D=ce,z=J,r.getReversed()&&(ce=-ce),i.polygonOffset(ce,J))):ve(i.POLYGON_OFFSET_FILL)}function ut(P){P?te(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function gt(P){P===void 0&&(P=i.TEXTURE0+j-1),Z!==P&&(i.activeTexture(P),Z=P)}function U(P,ce,J){J===void 0&&(Z===null?J=i.TEXTURE0+j-1:J=Z);let oe=ee[J];oe===void 0&&(oe={type:void 0,texture:void 0},ee[J]=oe),(oe.type!==P||oe.texture!==ce)&&(Z!==J&&(i.activeTexture(J),Z=J),i.bindTexture(P,ce||$[P]),oe.type=P,oe.texture=ce)}function Mt(){const P=ee[Z];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function g(){try{i.texSubImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function O(){try{i.texSubImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function se(){try{i.texStorage2D(...arguments)}catch(P){et("WebGLState:",P)}}function ae(){try{i.texStorage3D(...arguments)}catch(P){et("WebGLState:",P)}}function K(){try{i.texImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function Q(){try{i.texImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function le(P){return m[P]!==void 0?m[P]:i.getParameter(P)}function Ee(P,ce){m[P]!==ce&&(i.pixelStorei(P,ce),m[P]=ce)}function de(P){it.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),it.copy(P))}function re(P){Ve.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ve.copy(P))}function Ae(P,ce){let J=c.get(ce);J===void 0&&(J=new WeakMap,c.set(ce,J));let oe=J.get(P);oe===void 0&&(oe=i.getUniformBlockIndex(ce,P.name),J.set(P,oe))}function Ce(P,ce){const oe=c.get(ce).get(P);l.get(ce)!==oe&&(i.uniformBlockBinding(ce,oe,P.__bindingPointIndex),l.set(ce,oe))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},Z=null,ee={},u={},p=new WeakMap,v=[],M=null,x=!1,f=null,w=null,I=null,S=null,E=null,y=null,R=null,_=new He(0,0,0),T=0,C=!1,L=null,F=null,V=null,D=null,z=null,it.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:te,disable:ve,bindFramebuffer:Ie,drawBuffers:ge,useProgram:Be,setBlending:je,setMaterial:Ze,setFlipSided:Le,setCullFace:dt,setLineWidth:_t,setPolygonOffset:wt,setScissorTest:ut,activeTexture:gt,bindTexture:U,unbindTexture:Mt,compressedTexImage2D:Ye,compressedTexImage3D:A,texImage2D:K,texImage3D:Q,pixelStorei:Ee,getParameter:le,updateUBOMapping:Ae,uniformBlockBinding:Ce,texStorage2D:se,texStorage3D:ae,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:de,viewport:re,reset:De}}function Ug(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,h=new WeakMap,m=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,g){return v?new OffscreenCanvas(A,g):la("canvas")}function x(A,g,O){let H=1;const q=Ye(A);if((q.width>O||q.height>O)&&(H=O/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(H*q.width),ae=Math.floor(H*q.height);u===void 0&&(u=M(se,ae));const K=g?M(se,ae):u;return K.width=se,K.height=ae,K.getContext("2d").drawImage(A,0,0,se,ae),Ne("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+se+"x"+ae+")."),K}else return"data"in A&&Ne("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function f(A){return A.generateMipmaps}function w(A){i.generateMipmap(A)}function I(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,g,O,H,q,se=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae;H&&(ae=e.get("EXT_texture_norm16"),ae||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.R16_EXT),O===i.SHORT&&ae&&(K=ae.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),g===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.RG16_EXT),O===i.SHORT&&ae&&(K=ae.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&ae&&(K=ae.RGB16_EXT),O===i.SHORT&&ae&&(K=ae.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),g===i.RGBA){const Q=se?oa:$e.getTransfer(q);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=Q===at?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.RGBA16_EXT),O===i.SHORT&&ae&&(K=ae.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(A,g){let O;return A?g===null||g===Sn||g===ls?O=i.DEPTH24_STENCIL8:g===_n?O=i.DEPTH32F_STENCIL8:g===os&&(O=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Sn||g===ls?O=i.DEPTH_COMPONENT24:g===_n?O=i.DEPTH_COMPONENT32F:g===os&&(O=i.DEPTH_COMPONENT16),O}function y(A,g){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ct&&A.minFilter!==Ut?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),T(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&m.delete(g)}function _(A){const g=A.target;g.removeEventListener("dispose",_),L(g)}function T(A){const g=n.get(A);if(g.__webglInit===void 0)return;const O=A.source,H=p.get(O);if(H){const q=H[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(A),Object.keys(H).length===0&&p.delete(O)}n.remove(A)}function C(A){const g=n.get(A);i.deleteTexture(g.__webglTexture);const O=A.source,H=p.get(O);delete H[g.__cacheKey],r.memory.textures--}function L(A){const g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let q=0;q<g.__webglFramebuffer[H].length;q++)i.deleteFramebuffer(g.__webglFramebuffer[H][q]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=A.textures;for(let H=0,q=O.length;H<q;H++){const se=n.get(O[H]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),r.memory.textures--),n.remove(O[H])}n.remove(A)}let F=0;function V(){F=0}function D(){return F}function z(A){F=A}function j(){const A=F;return A>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function Y(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function ie(A,g){const O=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const H=A.image;if(H===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(O,A,g);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function W(A,g){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ve(O,A,g);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function Z(A,g){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ve(O,A,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function ee(A,g){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ie(O,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const be={[gr]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[xr]:i.MIRRORED_REPEAT},we={[Ct]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},it={[Ou]:i.NEVER,[Vu]:i.ALWAYS,[Bu]:i.LESS,[ro]:i.LEQUAL,[ku]:i.EQUAL,[oo]:i.GEQUAL,[zu]:i.GREATER,[Gu]:i.NOTEQUAL};function Ve(A,g){if(g.type===_n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ut||g.magFilter===Da||g.magFilter===ws||g.magFilter===ii||g.minFilter===Ut||g.minFilter===Da||g.minFilter===ws||g.minFilter===ii)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,be[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,be[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,be[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,we[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,we[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,it[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ct||g.minFilter!==ws&&g.minFilter!==ii||g.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Xe(A,g){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const H=g.source;let q=p.get(H);q===void 0&&(q={},p.set(H,q));const se=Y(g);if(se!==A.__cacheKey){q[se]===void 0&&(q[se]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),q[se].usedTimes++;const ae=q[A.__cacheKey];ae!==void 0&&(q[A.__cacheKey].usedTimes--,ae.usedTimes===0&&C(g)),A.__cacheKey=se,A.__webglTexture=q[se].texture}return O}function $(A,g,O){return Math.floor(Math.floor(A/O)/g)}function te(A,g,O,H){const se=A.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,H,g.data);else{se.sort((Ee,de)=>Ee.start-de.start);let ae=0;for(let Ee=1;Ee<se.length;Ee++){const de=se[ae],re=se[Ee],Ae=de.start+de.count,Ce=$(re.start,g.width,4),De=$(de.start,g.width,4);re.start<=Ae+1&&Ce===De&&$(re.start+re.count-1,g.width,4)===Ce?de.count=Math.max(de.count,re.start+re.count-de.start):(++ae,se[ae]=re)}se.length=ae+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ee=0,de=se.length;Ee<de;Ee++){const re=se[Ee],Ae=Math.floor(re.start/4),Ce=Math.ceil(re.count/4),De=Ae%g.width,P=Math.floor(Ae/g.width),ce=Ce,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,De),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,De,P,ce,J,O,H,g.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function ve(A,g,O){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const q=Xe(A,g),se=g.source;t.bindTexture(H,A.__webglTexture,i.TEXTURE0+O);const ae=n.get(se);if(se.version!==ae.__version||q===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const J=$e.getPrimaries($e.workingColorSpace),oe=g.colorSpace===Xn?null:$e.getPrimaries(g.colorSpace),me=g.colorSpace===Xn||J===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=x(g.image,!1,s.maxTextureSize);Q=Mt(g,Q);const le=a.convert(g.format,g.colorSpace),Ee=a.convert(g.type);let de=S(g.internalFormat,le,Ee,g.normalized,g.colorSpace,g.isVideoTexture);Ve(H,g);let re;const Ae=g.mipmaps,Ce=g.isVideoTexture!==!0,De=ae.__version===void 0||q===!0,P=se.dataReady,ce=y(g,Q);if(g.isDepthTexture)de=E(g.format===si,g.type),De&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,de,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,de,Q.width,Q.height,0,le,Ee,null));else if(g.isDataTexture)if(Ae.length>0){Ce&&De&&t.texStorage2D(i.TEXTURE_2D,ce,de,Ae[0].width,Ae[0].height);for(let J=0,oe=Ae.length;J<oe;J++)re=Ae[J],Ce?P&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,le,Ee,re.data):t.texImage2D(i.TEXTURE_2D,J,de,re.width,re.height,0,le,Ee,re.data);g.generateMipmaps=!1}else Ce?(De&&t.texStorage2D(i.TEXTURE_2D,ce,de,Q.width,Q.height),P&&te(g,Q,le,Ee)):t.texImage2D(i.TEXTURE_2D,0,de,Q.width,Q.height,0,le,Ee,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ce&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,de,Ae[0].width,Ae[0].height,Q.depth);for(let J=0,oe=Ae.length;J<oe;J++)if(re=Ae[J],g.format!==rn)if(le!==null)if(Ce){if(P)if(g.layerUpdates.size>0){const me=yl(re.width,re.height,g.format,g.type);for(const ne of g.layerUpdates){const Re=re.data.subarray(ne*me/re.data.BYTES_PER_ELEMENT,(ne+1)*me/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ne,re.width,re.height,1,le,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,Q.depth,le,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,de,re.width,re.height,Q.depth,0,re.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,Q.depth,le,Ee,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,de,re.width,re.height,Q.depth,0,le,Ee,re.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ce&&De&&t.texStorage2D(i.TEXTURE_2D,ce,de,Ae[0].width,Ae[0].height);for(let J=0,oe=Ae.length;J<oe;J++)re=Ae[J],g.format!==rn?le!==null?Ce?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,le,re.data):t.compressedTexImage2D(i.TEXTURE_2D,J,de,re.width,re.height,0,re.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?P&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,le,Ee,re.data):t.texImage2D(i.TEXTURE_2D,J,de,re.width,re.height,0,le,Ee,re.data)}else if(g.isDataArrayTexture)if(Ce){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,de,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const J=yl(Q.width,Q.height,g.format,g.type);for(const oe of g.layerUpdates){const me=Q.data.subarray(oe*J/Q.data.BYTES_PER_ELEMENT,(oe+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,Q.width,Q.height,1,le,Ee,me)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,Ee,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,Q.width,Q.height,Q.depth,0,le,Ee,Q.data);else if(g.isData3DTexture)Ce?(De&&t.texStorage3D(i.TEXTURE_3D,ce,de,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,Ee,Q.data)):t.texImage3D(i.TEXTURE_3D,0,de,Q.width,Q.height,Q.depth,0,le,Ee,Q.data);else if(g.isFramebufferTexture){if(De)if(Ce)t.texStorage2D(i.TEXTURE_2D,ce,de,Q.width,Q.height);else{let J=Q.width,oe=Q.height;for(let me=0;me<ce;me++)t.texImage2D(i.TEXTURE_2D,me,de,J,oe,0,le,Ee,null),J>>=1,oe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),m.add(g),J.onpaint=oe=>{const me=oe.changedElements;for(const ne of m)me.includes(ne.image)&&(ne.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const me=i.RGBA,ne=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,ne,Re,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ce&&De){const J=Ye(Ae[0]);t.texStorage2D(i.TEXTURE_2D,ce,de,J.width,J.height)}for(let J=0,oe=Ae.length;J<oe;J++)re=Ae[J],Ce?P&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,le,Ee,re):t.texImage2D(i.TEXTURE_2D,J,de,le,Ee,re);g.generateMipmaps=!1}else if(Ce){if(De){const J=Ye(Q);t.texStorage2D(i.TEXTURE_2D,ce,de,J.width,J.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Ee,Q)}else t.texImage2D(i.TEXTURE_2D,0,de,le,Ee,Q);f(g)&&w(H),ae.__version=se.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Ie(A,g,O){if(g.image.length!==6)return;const H=Xe(A,g),q=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const se=n.get(q);if(q.version!==se.__version||H===!0){t.activeTexture(i.TEXTURE0+O);const ae=$e.getPrimaries($e.workingColorSpace),K=g.colorSpace===Xn?null:$e.getPrimaries(g.colorSpace),Q=g.colorSpace===Xn||ae===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const le=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,de=[];for(let ne=0;ne<6;ne++)!le&&!Ee?de[ne]=x(g.image[ne],!0,s.maxCubemapSize):de[ne]=Ee?g.image[ne].image:g.image[ne],de[ne]=Mt(g,de[ne]);const re=de[0],Ae=a.convert(g.format,g.colorSpace),Ce=a.convert(g.type),De=S(g.internalFormat,Ae,Ce,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,ce=se.__version===void 0||H===!0,J=q.dataReady;let oe=y(g,re);Ve(i.TEXTURE_CUBE_MAP,g);let me;if(le){P&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,De,re.width,re.height);for(let ne=0;ne<6;ne++){me=de[ne].mipmaps;for(let Re=0;Re<me.length;Re++){const ye=me[Re];g.format!==rn?Ae!==null?P?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,ye.width,ye.height,Ae,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,De,ye.width,ye.height,0,ye.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,ye.width,ye.height,Ae,Ce,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,De,ye.width,ye.height,0,Ae,Ce,ye.data)}}}else{if(me=g.mipmaps,P&&ce){me.length>0&&oe++;const ne=Ye(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,De,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ee){P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de[ne].width,de[ne].height,Ae,Ce,de[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,de[ne].width,de[ne].height,0,Ae,Ce,de[ne].data);for(let Re=0;Re<me.length;Re++){const Fe=me[Re].image[ne].image;P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Fe.width,Fe.height,Ae,Ce,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,De,Fe.width,Fe.height,0,Ae,Ce,Fe.data)}}else{P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae,Ce,de[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,Ae,Ce,de[ne]);for(let Re=0;Re<me.length;Re++){const ye=me[Re];P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Ae,Ce,ye.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,De,Ae,Ce,ye.image[ne])}}}f(g)&&w(i.TEXTURE_CUBE_MAP),se.__version=q.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function ge(A,g,O,H,q,se){const ae=a.convert(O.format,O.colorSpace),K=a.convert(O.type),Q=S(O.internalFormat,ae,K,O.normalized,O.colorSpace),le=n.get(g),Ee=n.get(O);if(Ee.__renderTarget=g,!le.__hasExternalTextures){const de=Math.max(1,g.width>>se),re=Math.max(1,g.height>>se);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,se,Q,de,re,g.depth,0,ae,K,null):t.texImage2D(q,se,Q,de,re,0,ae,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,q,Ee.__webglTexture,0,ut(g)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,q,Ee.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(A,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){const H=g.depthTexture,q=H&&H.isDepthTexture?H.type:null,se=E(g.stencilBuffer,q),ae=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(g),se,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(g),se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,se,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,A)}else{const H=g.textures;for(let q=0;q<H.length;q++){const se=H[q],ae=a.convert(se.format,se.colorSpace),K=a.convert(se.type),Q=S(se.internalFormat,ae,K,se.normalized,se.colorSpace);gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(g),Q,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(g),Q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(A,g,O){const H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(g.depthTexture);if(q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g.depthTexture);const le=a.convert(g.depthTexture.format),Ee=a.convert(g.depthTexture.type);let de;g.depthTexture.format===Ln?de=i.DEPTH_COMPONENT24:g.depthTexture.format===si&&(de=i.DEPTH24_STENCIL8);for(let re=0;re<6;re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,de,g.width,g.height,0,le,Ee,null)}}else ie(g.depthTexture,0);const se=q.__webglTexture,ae=ut(g),K=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Q=g.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ln)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,se,0);else if(g.depthTexture.format===si)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(A){const g=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=H}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)xt(g.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?xt(g.__webglFramebuffer[0],A,0):xt(g.__webglFramebuffer,A,0)}else if(O){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),Be(g.__webglDepthbuffer[H],A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,se)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Be(g.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(A,g,O){const H=n.get(A);g!==void 0&&ge(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ze(A)}function Ze(A){const g=A.texture,O=n.get(A),H=n.get(g);A.addEventListener("dispose",_);const q=A.textures,se=A.isWebGLCubeRenderTarget===!0,ae=q.length>1;if(ae||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,r.memory.textures++),se){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let Q=0;Q<g.mipmaps.length;Q++)O.__webglFramebuffer[K][Q]=i.createFramebuffer()}else O.__webglFramebuffer[K]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)O.__webglFramebuffer[K]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ae)for(let K=0,Q=q.length;K<Q;K++){const le=n.get(q[K]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&gt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const Q=q[K];O.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const le=a.convert(Q.format,Q.colorSpace),Ee=a.convert(Q.type),de=S(Q.internalFormat,le,Ee,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),re=ut(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,de,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,O.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(O.__webglFramebuffer[K][Q],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else ge(O.__webglFramebuffer[K],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(g)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let K=0,Q=q.length;K<Q;K++){const le=q[K],Ee=n.get(le);let de=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Ee.__webglTexture),Ve(de,le),ge(O.__webglFramebuffer,A,le,i.COLOR_ATTACHMENT0+K,de,0),f(le)&&w(de)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,H.__webglTexture),Ve(K,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(O.__webglFramebuffer[Q],A,g,i.COLOR_ATTACHMENT0,K,Q);else ge(O.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,K,0);f(g)&&w(K),t.unbindTexture()}A.depthBuffer&&ze(A)}function Le(A){const g=A.textures;for(let O=0,H=g.length;O<H;O++){const q=g[O];if(f(q)){const se=I(A),ae=n.get(q).__webglTexture;t.bindTexture(se,ae),w(se),t.unbindTexture()}}}const dt=[],_t=[];function wt(A){if(A.samples>0){if(gt(A)===!1){const g=A.textures,O=A.width,H=A.height;let q=i.COLOR_BUFFER_BIT;const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(A),K=g.length>1;if(K)for(let le=0;le<g.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Q=A.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let le=0;le<g.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const Ee=n.get(g[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,O,H,0,0,O,H,q,i.NEAREST),l===!0&&(dt.length=0,_t.length=0,dt.push(i.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(dt.push(se),_t.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let le=0;le<g.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const Ee=n.get(g[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ut(A){return Math.min(s.maxSamples,A.samples)}function gt(A){const g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(A){const g=r.render.frame;h.get(A)!==g&&(h.set(A,g),A.update())}function Mt(A,g){const O=A.colorSpace,H=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ra&&O!==Xn&&($e.getTransfer(O)===at?(H!==rn||q!==$t)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",O)),g}function Ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=ie,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=je,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Fg(i,e){function t(n,s=Xn){let a;const r=$e.getTransfer(s);if(n===$t)return i.UNSIGNED_BYTE;if(n===to)return i.UNSIGNED_SHORT_4_4_4_4;if(n===no)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fc)return i.BYTE;if(n===pc)return i.SHORT;if(n===os)return i.UNSIGNED_SHORT;if(n===eo)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===xc)return i.ALPHA;if(n===_c)return i.RGB;if(n===rn)return i.RGBA;if(n===Ln)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===io)return i.RED_INTEGER;if(n===ci)return i.RG;if(n===so)return i.RG_INTEGER;if(n===ao)return i.RGBA_INTEGER;if(n===Zs||n===Js||n===Qs||n===ea)if(r===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Zs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Zs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_r||n===vr||n===br||n===Sr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===_r)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===br)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mr||n===yr||n===Er||n===Tr||n===wr||n===sa||n===Ar)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Mr||n===yr)return r===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Er)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tr)return a.COMPRESSED_R11_EAC;if(n===wr)return a.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return a.COMPRESSED_RG11_EAC;if(n===Ar)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rr||n===Cr||n===Nr||n===Ir||n===Dr||n===Pr||n===Lr||n===Ur||n===Fr||n===Or||n===Br||n===kr||n===zr||n===Gr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Rr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ir)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ur)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Or)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Br)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===Hr||n===Wr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Vr)return r===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xr||n===jr||n===aa||n===Yr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Xr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===jr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Cc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cn({vertexShader:Og,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zg extends ui{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,m=null,u=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",x=new kg,f={},w=t.getContextAttributes();let I=null,S=null;const E=[],y=[],R=new Ke;let _=null,T=null;const C=new qt;C.viewport=new pt;const L=new qt;L.viewport=new pt;const F=[C,L],V=new jh;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=E[$];return te===void 0&&(te=new ka,E[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=E[$];return te===void 0&&(te=new ka,E[$]=te),te.getGripSpace()},this.getHand=function($){let te=E[$];return te===void 0&&(te=new ka,E[$]=te),te.getHandSpace()};function j($){const te=y.indexOf($.inputSource);if(te===-1)return;const ve=E[te];ve!==void 0&&(ve.update($.inputSource,$.frame,c||r),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ie);for(let $=0;$<E.length;$++){const te=y[$];te!==null&&(y[$]=null,E[$].disconnect(te))}D=null,z=null,x.reset();for(const $ in f)delete f[$];if(e.setRenderTarget(I),p=null,u=null,m=null,s=null,S=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),T!==null){const $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ie),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ie=null,ge=null;w.depth&&(ge=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=w.stencil?si:Ln,Ie=w.stencil?ls:Sn);const Be={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};m=this.getBinding(),u=m.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new on(u.textureWidth,u.textureHeight,{format:rn,type:$t,depthTexture:new us(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new on(p.framebufferWidth,p.framebufferHeight,{format:rn,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie($){for(let te=0;te<$.removed.length;te++){const ve=$.removed[te],Ie=y.indexOf(ve);Ie>=0&&(y[Ie]=null,E[Ie].disconnect(ve))}for(let te=0;te<$.added.length;te++){const ve=$.added[te];let Ie=y.indexOf(ve);if(Ie===-1){for(let Be=0;Be<E.length;Be++)if(Be>=y.length){y.push(ve),Ie=Be;break}else if(y[Be]===null){y[Be]=ve,Ie=Be;break}if(Ie===-1)break}const ge=E[Ie];ge&&ge.connect(ve)}}const W=new G,Z=new G;function ee($,te,ve){W.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);const Ie=W.distanceTo(Z),ge=te.projectionMatrix.elements,Be=ve.projectionMatrix.elements,xt=ge[14]/(ge[10]-1),ze=ge[14]/(ge[10]+1),je=(ge[9]+1)/ge[5],Ze=(ge[9]-1)/ge[5],Le=(ge[8]-1)/ge[0],dt=(Be[8]+1)/Be[0],_t=xt*Le,wt=xt*dt,ut=Ie/(-Le+dt),gt=ut*-Le;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(gt),$.translateZ(ut),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ge[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const U=xt+ut,Mt=ze+ut,Ye=_t-gt,A=wt+(Ie-gt),g=je*ze/Mt*U,O=Ze*ze/Mt*U;$.projectionMatrix.makePerspective(Ye,A,g,O,U,Mt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function be($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let te=$.near,ve=$.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),V.near=L.near=C.near=te,V.far=L.far=C.far=ve,(D!==V.near||z!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,z=V.far),V.layers.mask=$.layers.mask|6,C.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;const Ie=$.parent,ge=V.cameras;be(V,Ie);for(let Be=0;Be<ge.length;Be++)be(ge[Be],Ie);ge.length===2?ee(V,C,L):V.projectionMatrix.copy(C.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),we($,V,Ie)};function we($,te,ve){ve===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ds*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(V)},this.getCameraTexture=function($){return f[$]};let it=null;function Ve($,te){if(h=te.getViewerPose(c||r),v=te,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ie=!1;ve.length!==V.cameras.length&&(V.cameras.length=0,Ie=!0);for(let ze=0;ze<ve.length;ze++){const je=ve[ze];let Ze=null;if(p!==null)Ze=p.getViewport(je);else{const dt=m.getViewSubImage(u,je);Ze=dt.viewport,ze===0&&(e.setRenderTargetTextures(S,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(S))}let Le=F[ze];Le===void 0&&(Le=new qt,Le.layers.enable(ze),Le.viewport=new pt,F[ze]=Le),Le.matrix.fromArray(je.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(je.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ze===0&&(V.matrix.copy(Le.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ie===!0&&V.cameras.push(Le)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){m=n.getBinding();const ze=m.getDepthInformation(ve[0]);ze&&ze.isValid&&ze.texture&&x.init(ze,s.renderState)}if(ge&&ge.includes("camera-access")&&M){e.state.unbindTexture(),m=n.getBinding();for(let ze=0;ze<ve.length;ze++){const je=ve[ze].camera;if(je){let Ze=f[je];Ze||(Ze=new Cc,f[je]=Ze);const Le=m.getCameraImage(je);Ze.sourceTexture=Le}}}}for(let ve=0;ve<E.length;ve++){const Ie=y[ve],ge=E[ve];Ie!==null&&ge!==void 0&&ge.update(Ie,te,c||r)}it&&it($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}const Xe=new Pc;Xe.setAnimationLoop(Ve),this.setAnimationLoop=function($){it=$},this.dispose=function(){}}}const Gg=new mt,zc=new Pe;zc.set(-1,0,0,0,1,0,0,0,1);function Vg(i,e){function t(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function n(x,f){f.color.getRGB(x.fogColor.value,Nc(i)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function s(x,f,w,I,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(x,f):f.isMeshLambertMaterial?(a(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(x,f),m(x,f)):f.isMeshPhongMaterial?(a(x,f),h(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(x,f),u(x,f),f.isMeshPhysicalMaterial&&p(x,f,S)):f.isMeshMatcapMaterial?(a(x,f),v(x,f)):f.isMeshDepthMaterial?a(x,f):f.isMeshDistanceMaterial?(a(x,f),M(x,f)):f.isMeshNormalMaterial?a(x,f):f.isLineBasicMaterial?(r(x,f),f.isLineDashedMaterial&&o(x,f)):f.isPointsMaterial?l(x,f,w,I):f.isSpriteMaterial?c(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,t(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===Ht&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,t(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===Ht&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,t(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,t(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const w=e.get(f),I=w.envMap,S=w.envMapRotation;I&&(x.envMap.value=I,x.envMapRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(S)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(zc),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,x.aoMapTransform))}function r(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform))}function o(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,w,I){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*w,x.scale.value=I*.5,f.map&&(x.map.value=f.map,t(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function c(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function m(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function u(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function p(x,f,w){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.retroreflectivity>0&&(x.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,f){f.matcap&&(x.matcap.value=f.matcap)}function M(x,f){const w=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hg(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const y=E.program;n.uniformBlockBinding(S,y)}function c(S,E){let y=s[S.id];y===void 0&&(x(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",w));const R=E.program;n.updateUBOMapping(S,R);const _=e.render.frame;a[S.id]!==_&&(u(S),a[S.id]=_)}function h(S){const E=m();S.__bindingPointIndex=E;const y=i.createBuffer(),R=S.__size,_=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function m(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const E=s[S.id],y=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,T=y.length;_<T;_++){const C=y[_];if(Array.isArray(C))for(let L=0,F=C.length;L<F;L++)p(C[L],_,L,R);else p(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,y,R){if(M(S,E,y,R)===!0){const _=S.__offset,T=S.value;if(Array.isArray(T)){let C=0;for(let L=0;L<T.length;L++){const F=T[L],V=f(F);v(F,S.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,S.__data)}}function v(S,E,y){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,y)}function M(S,E,y,R){const _=S.value,T=E+"_"+y;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const C=R[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function x(S){const E=S.uniforms;let y=0;const R=16;for(let T=0,C=E.length;T<C;T++){const L=Array.isArray(E[T])?E[T]:[E[T]];for(let F=0,V=L.length;F<V;F++){const D=L[F],z=Array.isArray(D.value)?D.value:[D.value];for(let j=0,Y=z.length;j<Y;j++){const ie=z[j],W=f(ie),Z=y%R,ee=Z%W.boundary,be=Z+ee;y+=ee,be!==0&&R-be<W.storage&&(y+=R-be),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=W.storage}}}const _=y%R;return _>0&&(y+=R-_),S.__size=y,S.__cache={},this}function f(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",S),E}function w(S){const E=S.target;E.removeEventListener("dispose",w);const y=r.indexOf(E.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function I(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},a={}}return{bind:l,update:c,dispose:I}}const Wg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function Xg(){return mn===null&&(mn=new Ih(Wg,16,16,ci,Mn),mn.name="DFG_LUT",mn.minFilter=Ut,mn.magFilter=Ut,mn.wrapS=In,mn.wrapT=In,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class jg{constructor(e={}){const{canvas:t=Xu(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:p=$t}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=r;const M=p,x=new Set([ao,so,io]),f=new Set([$t,Sn,os,ls,to,no]),w=new Uint32Array(4),I=new Int32Array(4),S=new G;let E=null,y=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,F=null,V=null,D=null,z=null;this._outputColorSpace=en;let j=0,Y=0,ie=null,W=-1,Z=null;const ee=new pt,be=new pt;let we=null;const it=new He(0);let Ve=0,Xe=t.width,$=t.height,te=1,ve=null,Ie=null;const ge=new pt(0,0,Xe,$),Be=new pt(0,0,Xe,$);let xt=!1;const ze=new ho;let je=!1,Ze=!1;const Le=new mt,dt=new G,_t=new pt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function gt(){return ie===null?te:1}let U=n;function Mt(b,N){return t.getContext(b,N)}let Ye,A,g,O,H,q,se,ae,K,Q,le,Ee,de,re,Ae,Ce,De,P,ce,J,oe,me,ne;try{const b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jr}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",Xt,!1),U===null){const N="webgl2";if(U=Mt(N,b),U===null)throw Mt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(b){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),et("WebGLRenderer: "+b.message),b}function Re(){Ye=new Xm(U),Ye.init(),oe=new Fg(U,Ye),A=new Um(U,Ye,e,oe),g=new Lg(U,Ye),A.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),V=U.createFramebuffer(),D=U.createFramebuffer(),z=U.createFramebuffer(),O=new qm(U),H=new bg,q=new Ug(U,Ye,g,H,A,oe,O),se=new Wm(C),ae=new $h(U),me=new Pm(U,ae),K=new jm(U,ae,O,me),Q=new Km(U,K,ae,me,O),P=new $m(U,A,q),Ae=new Fm(H),le=new vg(C,se,Ye,A,me,Ae),Ee=new Vg(C,H),de=new Mg,re=new Rg(Ye),De=new Dm(C,se,g,Q,v,l),Ce=new Pg(C,Q,A),ne=new Hg(U,O,A,g),ce=new Lm(U,Ye,O),J=new Ym(U,Ye,O),O.programs=le.programs,C.capabilities=A,C.extensions=Ye,C.properties=H,C.renderLists=de,C.shadowMap=Ce,C.state=g,C.info=O}M!==$t&&(T=new Jm(M,t.width,t.height,o,s,a));const ye=new zg(C,U);this.xr=ye,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(Xe,$,!1))},this.getSize=function(b){return b.set(Xe,$)},this.setSize=function(b,N,X=!0){if(ye.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=b,$=N,t.width=Math.floor(b*te),t.height=Math.floor(N*te),X===!0&&(t.style.width=b+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Xe*te,$*te).floor()},this.setDrawingBufferSize=function(b,N,X){Xe=b,$=N,te=X,t.width=Math.floor(b*X),t.height=Math.floor(N*X),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(M===$t){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ee)},this.getViewport=function(b){return b.copy(ge)},this.setViewport=function(b,N,X,B){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,N,X,B),g.viewport(ee.copy(ge).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(Be)},this.setScissor=function(b,N,X,B){b.isVector4?Be.set(b.x,b.y,b.z,b.w):Be.set(b,N,X,B),g.scissor(be.copy(Be).multiplyScalar(te).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(b){g.setScissorTest(xt=b)},this.setOpaqueSort=function(b){ve=b},this.setTransparentSort=function(b){Ie=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,X=!0){let B=0;if(b){let k=!1;if(ie!==null){const fe=ie.texture.format;k=x.has(fe)}if(k){const fe=ie.texture.type,_e=f.has(fe),he=De.getClearColor(),Se=De.getClearAlpha(),Te=he.r,Ue=he.g,Ge=he.b;_e?(w[0]=Te,w[1]=Ue,w[2]=Ge,w[3]=Se,U.clearBufferuiv(U.COLOR,0,w)):(I[0]=Te,I[1]=Ue,I[2]=Ge,I[3]=Se,U.clearBufferiv(U.COLOR,0,I))}else B|=U.COLOR_BUFFER_BIT}N&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),De.dispose(),de.dispose(),re.dispose(),H.dispose(),se.dispose(),Q.dispose(),me.dispose(),ne.dispose(),le.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ms),ye.removeEventListener("sessionend",gs),yn.stop()};function Fe(b){b.preventDefault(),Jo("WebGLRenderer: Context Lost."),L=!0}function Je(){Jo("WebGLRenderer: Context Restored."),L=!1;const b=O.autoReset,N=Ce.enabled,X=Ce.autoUpdate,B=Ce.needsUpdate,k=Ce.type;Re(),O.autoReset=b,Ce.enabled=N,Ce.autoUpdate=X,Ce.needsUpdate=B,Ce.type=k}function Xt(b){et("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zt(b){const N=b.target;N.removeEventListener("dispose",zt),pa(N)}function pa(b){ma(b),H.remove(b)}function ma(b){const N=H.get(b).programs;N!==void 0&&(N.forEach(function(X){le.releaseProgram(X)}),b.isShaderMaterial&&le.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,X,B,k,fe){N===null&&(N=wt);const _e=k.isMesh&&k.matrixWorld.determinantAffine()<0,he=_a(b,N,X,B,k);g.setMaterial(B,_e);let Se=X.index,Te=1;if(B.wireframe===!0){if(Se=K.getWireframeAttribute(X),Se===void 0)return;Te=2}const Ue=X.drawRange,Ge=X.attributes.position;let Me=Ue.start*Te,Qe=(Ue.start+Ue.count)*Te;fe!==null&&(Me=Math.max(Me,fe.start*Te),Qe=Math.min(Qe,(fe.start+fe.count)*Te)),Se!==null?(Me=Math.max(Me,0),Qe=Math.min(Qe,Se.count)):Ge!=null&&(Me=Math.max(Me,0),Qe=Math.min(Qe,Ge.count));const tt=Qe-Me;if(tt<0||tt===1/0)return;me.setup(k,B,he,X,Se);let ot,nt=ce;if(Se!==null&&(ot=ae.get(Se),nt=J,nt.setIndex(ot)),k.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*gt()),nt.setMode(U.LINES)):nt.setMode(U.TRIANGLES);else if(k.isLine){let yt=B.linewidth;yt===void 0&&(yt=1),g.setLineWidth(yt*gt()),k.isLineSegments?nt.setMode(U.LINES):k.isLineLoop?nt.setMode(U.LINE_LOOP):nt.setMode(U.LINE_STRIP)}else k.isPoints?nt.setMode(U.POINTS):k.isSprite&&nt.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))nt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const yt=k._multiDrawStarts,xe=k._multiDrawCounts,At=k._multiDrawCount,qe=Se?ae.get(Se).bytesPerElement:1,Gt=H.get(B).currentProgram.getUniforms();for(let It=0;It<At;It++)Gt.setValue(U,"_gl_DrawID",It),nt.render(yt[It]/qe,xe[It])}else if(k.isInstancedMesh)nt.renderInstances(Me,tt,k.count);else if(X.isInstancedBufferGeometry){const yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xe=Math.min(X.instanceCount,yt);nt.renderInstances(Me,tt,xe)}else nt.render(Me,tt)};function ps(b,N,X,B){F!==null&&b.isNodeMaterial&&F.setObject(B,b),je===!0&&Ae.setState(b,X,!1),b.transparent===!0&&b.side===xn&&b.forceSinglePass===!1?(b.side=Ht,b.needsUpdate=!0,fi(b,N,B),b.side=oi,b.needsUpdate=!0,fi(b,N,B),b.side=xn):fi(b,N,B)}this.compile=function(b,N,X=null){X===null&&(X=b),F!==null&&F.renderStart(b,N,X),y=re.get(X),y.init(N),_.push(y),X.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(y.pushLight(k),k.castShadow&&y.pushShadow(k))}),b!==X&&b.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(y.pushLight(k),k.castShadow&&y.pushShadow(k))}),y.setupLights(),F!==null&&F.updateLights(y.state.lightsArray),Ze=this.localClippingEnabled,je=Ae.init(this.clippingPlanes,Ze),je===!0&&Ae.setGlobalState(this.clippingPlanes,N),F!==null&&Ce.render(y.state.shadowsArray,X,N);const B=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const fe=k.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){const he=fe[_e];ps(he,X,N,k),B.add(he)}else ps(fe,X,N,k),B.add(fe)}),y=_.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(b,N,X=null){const B=this.compile(b,N,X);return new Promise(k=>{function fe(){if(B.forEach(function(_e){const Se=H.get(_e).currentProgram;(Se===void 0||Se.isReady())&&B.delete(_e)}),B.size===0){k(b);return}setTimeout(fe,10)}Ye.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Wi=null;function ga(b){Wi&&Wi(b)}function ms(){yn.stop()}function gs(){yn.start()}const yn=new Pc;yn.setAnimationLoop(ga),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(b){Wi=b,ye.setAnimationLoop(b),b===null?yn.stop():yn.start()},ye.addEventListener("sessionstart",ms),ye.addEventListener("sessionend",gs),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(b,N);const X=ye.enabled===!0&&ye.isPresenting===!0,B=T!==null&&(ie===null||X)&&T.begin(C,ie);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(N),N=ye.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,N,ie),y=re.get(b,_.length),y.init(N),y.state.textureUnits=q.getTextureUnits(),_.push(y),Le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ze.setFromProjectionMatrix(Le,vn,N.reversedDepth),Ze=this.localClippingEnabled,je=Ae.init(this.clippingPlanes,Ze),E=de.get(b,R.length),E.init(),R.push(E),ye.enabled===!0&&ye.isPresenting===!0){const _e=C.xr.getDepthSensingMesh();_e!==null&&hi(_e,N,-1/0,C.sortObjects)}hi(b,N,0,C.sortObjects),E.finish(),F!==null&&F.updateLights(y.state.lightsArray),C.sortObjects===!0&&E.sort(ve,Ie),ut=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ut&&De.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Ae.beginShadows();const k=y.state.shadowsArray;if(Ce.render(k,b,N),je===!0&&Ae.endShadows(),(B&&T.hasRenderPass())===!1){const _e=E.opaque,he=E.transmissive;if(y.setupLights(),N.isArrayCamera){const Se=N.cameras;if(he.length>0)for(let Te=0,Ue=Se.length;Te<Ue;Te++){const Ge=Se[Te];xs(_e,he,b,Ge)}ut&&De.render(b);for(let Te=0,Ue=Se.length;Te<Ue;Te++){const Ge=Se[Te];Kt(E,b,Ge,Ge.viewport)}}else he.length>0&&xs(_e,he,b,N),ut&&De.render(b),Kt(E,b,N)}ie!==null&&Y===0&&(q.updateMultisampleRenderTarget(ie),q.updateRenderTargetMipmap(ie)),B&&T.end(C),b.isScene===!0&&b.onAfterRender(C,b,N),me.resetDefaultState(),W=-1,Z=null,_.pop(),_.length>0?(y=_[_.length-1],q.setTextureUnits(y.state.textureUnits),je===!0&&Ae.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,F!==null&&F.renderEnd()};function hi(b,N,X,B){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLightProbeGrid)y.pushLightProbeGrid(b);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ze)){B&&_t.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Le);const _e=Q.update(b),he=b.material;he.visible&&E.push(b,_e,he,X,_t.z,null,N)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ze))){const _e=Q.update(b),he=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_t.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),_t.copy(_e.boundingSphere.center)),_t.applyMatrix4(b.matrixWorld).applyMatrix4(Le)),Array.isArray(he)){const Se=_e.groups;for(let Te=0,Ue=Se.length;Te<Ue;Te++){const Ge=Se[Te],Me=he[Ge.materialIndex];Me&&Me.visible&&E.push(b,_e,Me,X,_t.z,Ge,N)}}else he.visible&&E.push(b,_e,he,X,_t.z,null,N)}}const fe=b.children;for(let _e=0,he=fe.length;_e<he;_e++)hi(fe[_e],N,X,B)}function Kt(b,N,X,B){const{opaque:k,transmissive:fe,transparent:_e}=b;y.setupLightsView(X),je===!0&&Ae.setGlobalState(C.clippingPlanes,X),B&&g.viewport(ee.copy(B)),k.length>0&&Un(k,N,X),fe.length>0&&Un(fe,N,X),_e.length>0&&Un(_e,N,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function xs(b,N,X,B){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[B.id]===void 0){const Me=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[B.id]=new on(1,1,{generateMipmaps:!0,type:Me?Mn:$t,minFilter:ii,samples:Math.max(4,A.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const fe=y.state.transmissionRenderTarget[B.id],_e=B.viewport||ee;fe.setSize(_e.z*C.transmissionResolutionScale,_e.w*C.transmissionResolutionScale);const he=C.getRenderTarget(),Se=C.getActiveCubeFace(),Te=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(it),Ve=C.getClearAlpha(),Ve<1&&C.setClearColor(16777215,.5),C.clear(),ut&&De.render(X);const Ue=C.toneMapping;C.toneMapping=bn;const Ge=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),y.setupLightsView(B),je===!0&&Ae.setGlobalState(C.clippingPlanes,B),Un(b,X,B),q.updateMultisampleRenderTarget(fe),q.updateRenderTargetMipmap(fe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Qe=0,tt=N.length;Qe<tt;Qe++){const ot=N[Qe],{object:nt,geometry:yt,material:xe,group:At}=ot;if(xe.side===xn&&nt.layers.test(B.layers)){const qe=xe.side;xe.side=Ht,xe.needsUpdate=!0,_s(nt,X,B,yt,xe,At),xe.side=qe,xe.needsUpdate=!0,Me=!0}}Me===!0&&(q.updateMultisampleRenderTarget(fe),q.updateRenderTargetMipmap(fe))}C.setRenderTarget(he,Se,Te),C.setClearColor(it,Ve),Ge!==void 0&&(B.viewport=Ge),C.toneMapping=Ue}function Un(b,N,X){const B=N.isScene===!0?N.overrideMaterial:null;for(let k=0,fe=b.length;k<fe;k++){const _e=b[k],{object:he,geometry:Se,group:Te}=_e;let Ue=_e.material;Ue.allowOverride===!0&&B!==null&&(Ue=B),he.layers.test(X.layers)&&_s(he,N,X,Se,Ue,Te)}}function _s(b,N,X,B,k,fe){F!==null&&k.isNodeMaterial&&F.setObject(b,k),b.onBeforeRender(C,N,X,B,k,fe),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(C,N,X,B,b,fe),k.transparent===!0&&k.side===xn&&k.forceSinglePass===!1?(k.side=Ht,k.needsUpdate=!0,C.renderBufferDirect(X,N,B,k,b,fe),k.side=oi,k.needsUpdate=!0,C.renderBufferDirect(X,N,B,k,b,fe),k.side=xn):C.renderBufferDirect(X,N,B,k,b,fe),b.onAfterRender(C,N,X,B,k,fe)}function fi(b,N,X){N.isScene!==!0&&(N=wt);const B=H.get(b),k=y.state.lights,fe=y.state.shadowsArray,_e=k.state.version,he=le.getParameters(b,k.state,fe,N,X,y.state.lightProbeGridArray),Se=le.getProgramCacheKey(he);let Te=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;const Ue=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=se.get(b.envMap||B.environment,Ue),B.envMapRotation=B.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",zt),Te=new Map,B.programs=Te);let Ge=Te.get(Se);if(Ge!==void 0){if(B.currentProgram===Ge&&B.lightsStateVersion===_e)return bs(b,he),Ge}else he.uniforms=le.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,X,he),b.onBeforeCompile(he,C),Ge=le.acquireProgram(he,Se),Te.set(Se,Ge),B.uniforms=he.uniforms;const Me=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Me.clippingPlanes=Ae.uniform),bs(b,he),B.needsLights=va(b),B.lightsStateVersion=_e,B.needsLights&&(Me.ambientLightColor.value=k.state.ambient,Me.lightProbe.value=k.state.probe,Me.sunLights.value=k.state.sun,Me.sunLightShadows.value=k.state.sunShadow,Me.directionalLights.value=k.state.directional,Me.directionalLightShadows.value=k.state.directionalShadow,Me.spotLights.value=k.state.spot,Me.spotLightShadows.value=k.state.spotShadow,Me.rectAreaLights.value=k.state.rectArea,Me.ltc_1.value=k.state.rectAreaLTC1,Me.ltc_2.value=k.state.rectAreaLTC2,Me.pointLights.value=k.state.point,Me.pointLightShadows.value=k.state.pointShadow,Me.hemisphereLights.value=k.state.hemi,Me.sunShadowMatrix.value=k.state.sunShadowMatrix,Me.sunShadowCascade.value=k.state.sunShadowCascade,Me.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Me.spotLightMatrix.value=k.state.spotLightMatrix,Me.spotLightMap.value=k.state.spotLightMap,Me.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=y.state.lightProbeGridArray.length>0,B.currentProgram=Ge,B.uniformsList=null,Ge}function vs(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=ta.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function bs(b,N){const X=H.get(b);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function xa(b,N){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(N.matrixWorld);for(let X=0,B=b.length;X<B;X++){const k=b[X];if(k.texture!==null&&k.boundingBox.containsPoint(S))return k}return null}function _a(b,N,X,B,k){N.isScene!==!0&&(N=wt),q.resetTextureUnits();const fe=N.fog,_e=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,he=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:$e.workingColorSpace,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Te=se.get(B.envMap||_e,Se),Ue=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,tt=!!X.morphAttributes.color;let ot=bn;B.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ot=C.toneMapping);const nt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=nt!==void 0?nt.length:0,xe=H.get(B),At=y.state.lights;if(je===!0&&(Ze===!0||b!==Z)){const rt=b===Z&&B.id===W;Ae.setState(B,b,rt)}let qe=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==At.state.version||xe.outputColorSpace!==he||k.isBatchedMesh&&xe.batching===!1||!k.isBatchedMesh&&xe.batching===!0||k.isBatchedMesh&&xe.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&xe.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&xe.instancing===!1||!k.isInstancedMesh&&xe.instancing===!0||k.isSkinnedMesh&&xe.skinning===!1||!k.isSkinnedMesh&&xe.skinning===!0||k.isInstancedMesh&&xe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&xe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&xe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&xe.instancingMorph===!1&&k.morphTexture!==null||xe.envMap!==Te||B.fog===!0&&xe.fog!==fe||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ae.numPlanes||xe.numIntersection!==Ae.numIntersection)||xe.vertexAlphas!==Ue||xe.vertexTangents!==Ge||xe.morphTargets!==Me||xe.morphNormals!==Qe||xe.morphColors!==tt||xe.toneMapping!==ot||xe.morphTargetsCount!==yt||!!xe.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,xe.__version=B.version);let Gt=xe.currentProgram;qe===!0&&(Gt=fi(B,N,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Gt,xe));let It=!1,dn=!1,Fn=!1;const st=Gt.getUniforms(),ft=xe.uniforms;if(g.useProgram(Gt.program)&&(It=!0,dn=!0,Fn=!0),B.id!==W&&(W=B.id,dn=!0),xe.needsLights){const rt=xa(y.state.lightProbeGridArray,k);xe.lightProbeGrid!==rt&&(xe.lightProbeGrid=rt,dn=!0)}if(It||Z!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),st.setValue(U,"projectionMatrix",b.projectionMatrix),st.setValue(U,"viewMatrix",b.matrixWorldInverse);const hn=st.map.cameraPosition;hn!==void 0&&hn.setValue(U,dt.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&st.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&st.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),Z!==b&&(Z=b,dn=!0,Fn=!0)}if(xe.needsLights&&(At.state.sunShadowMap.length>0&&st.setValue(U,"sunShadowMap",At.state.sunShadowMap,q),At.state.directionalShadowMap.length>0&&st.setValue(U,"directionalShadowMap",At.state.directionalShadowMap,q),At.state.spotShadowMap.length>0&&st.setValue(U,"spotShadowMap",At.state.spotShadowMap,q),At.state.pointShadowMap.length>0&&st.setValue(U,"pointShadowMap",At.state.pointShadowMap,q)),k.isSkinnedMesh){st.setOptional(U,k,"bindMatrix"),st.setOptional(U,k,"bindMatrixInverse");const rt=k.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),st.setValue(U,"boneTexture",rt.boneTexture,q))}k.isBatchedMesh&&(st.setOptional(U,k,"batchingTexture"),st.setValue(U,"batchingTexture",k._matricesTexture,q),st.setOptional(U,k,"batchingIdTexture"),st.setValue(U,"batchingIdTexture",k._indirectTexture,q),st.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&st.setValue(U,"batchingColorTexture",k._colorsTexture,q));const un=X.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&P.update(k,X,Gt),(dn||xe.receiveShadow!==k.receiveShadow)&&(xe.receiveShadow=k.receiveShadow,st.setValue(U,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(ft.envMapIntensity.value=N.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=Xg()),dn){if(st.setValue(U,"toneMappingExposure",C.toneMappingExposure),xe.needsLights&&$n(ft,Fn),fe&&B.fog===!0&&Ee.refreshFogUniforms(ft,fe),Ee.refreshMaterialUniforms(ft,B,te,$,y.state.transmissionRenderTarget[b.id]),xe.needsLights&&xe.lightProbeGrid){const rt=xe.lightProbeGrid;ft.probesSH.value=rt.texture,ft.probesMin.value.copy(rt.boundingBox.min),ft.probesMax.value.copy(rt.boundingBox.max),ft.probesResolution.value.copy(rt.resolution)}ta.upload(U,vs(xe),ft,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ta.upload(U,vs(xe),ft,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&st.setValue(U,"center",k.center),st.setValue(U,"modelViewMatrix",k.modelViewMatrix),st.setValue(U,"normalMatrix",k.normalMatrix),st.setValue(U,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){const rt=B.uniformsGroups;for(let hn=0,On=rt.length;hn<On;hn++){const Ms=rt[hn];ne.update(Ms,Gt),ne.bind(Ms,Gt)}}return Gt}function $n(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function va(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(b,N,X){const B=H.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(b.texture).__webglTexture=N,H.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:X,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const X=H.get(b);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,X=0){ie=b,j=N,Y=X;let B=null,k=!1,fe=!1;if(b){const he=H.get(b);if(he.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),ee.copy(b.viewport),be.copy(b.scissor),we=b.scissorTest,g.viewport(ee),g.scissor(be),g.setScissorTest(we),W=-1;return}else if(he.__webglFramebuffer===void 0)q.setupRenderTarget(b);else if(he.__hasExternalTextures)q.rebindTextures(b,H.get(b.texture).__webglTexture,H.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ue=b.depthTexture;if(he.__boundDepthTexture!==Ue){if(Ue!==null&&H.has(Ue)&&(b.width!==Ue.image.width||b.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(b)}}const Se=b.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(fe=!0);const Te=H.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?B=Te[N][X]:B=Te[N],k=!0):b.samples>0&&q.useMultisampledRTT(b)===!1?B=H.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?B=Te[X]:B=Te,ee.copy(b.viewport),be.copy(b.scissor),we=b.scissorTest}else ee.copy(ge).multiplyScalar(te).floor(),be.copy(Be).multiplyScalar(te).floor(),we=xt;if(X!==0&&(B=V),g.bindFramebuffer(U.FRAMEBUFFER,B)&&g.drawBuffers(b,B),g.viewport(ee),g.scissor(be),g.setScissorTest(we),k){const he=H.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,X)}else if(fe){const he=N;for(let Se=0;Se<b.textures.length;Se++){const Te=H.get(b.textures[Se]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Se,Te.__webglTexture,X,he)}}else if(b!==null&&X!==0){const he=H.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,X)}W=-1};function Ss(b){const N=H.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=A.textureFormatReadable(b.format),N.__typeReadable=A.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,X,B,k,fe,_e,he=0){if(!(b&&b.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){g.bindFramebuffer(U.FRAMEBUFFER,Se);try{const Te=b.textures[he],Ue=Te.format,Ge=Te.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);const Me=Ss(Te);if(Me.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-B&&X>=0&&X<=b.height-k&&U.readPixels(N,X,B,k,oe.convert(Ue),oe.convert(Ge),fe)}finally{const Te=ie!==null?H.get(ie).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,N,X,B,k,fe,_e,he=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se)if(N>=0&&N<=b.width-B&&X>=0&&X<=b.height-k){g.bindFramebuffer(U.FRAMEBUFFER,Se);const Te=b.textures[he],Ue=Te.format,Ge=Te.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);const Me=Ss(Te);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Qe),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(N,X,B,k,oe.convert(Ue),oe.convert(Ge),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const tt=ie!==null?H.get(ie).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,tt);const ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ju(U,ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Qe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Qe),U.deleteSync(ot),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,X=0){const B=Math.pow(2,-X),k=Math.floor(b.image.width*B),fe=Math.floor(b.image.height*B),_e=N!==null?N.x:0,he=N!==null?N.y:0;q.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,_e,he,k,fe),g.unbindTexture()},this.copyTextureToTexture=function(b,N,X=null,B=null,k=0,fe=0){let _e,he,Se,Te,Ue,Ge,Me,Qe,tt;const ot=b.isCompressedTexture?b.mipmaps[fe]:b.image;if(X!==null)_e=X.max.x-X.min.x,he=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,Te=X.min.x,Ue=X.min.y,Ge=X.isBox3?X.min.z:0;else{const ft=Math.pow(2,-k);_e=Math.floor(ot.width*ft),he=Math.floor(ot.height*ft),b.isDataArrayTexture?Se=ot.depth:b.isData3DTexture?Se=Math.floor(ot.depth*ft):Se=1,Te=0,Ue=0,Ge=0}B!==null?(Me=B.x,Qe=B.y,tt=B.z):(Me=0,Qe=0,tt=0);const nt=oe.convert(N.format),yt=oe.convert(N.type);let xe;N.isData3DTexture?(q.setTexture3D(N,0),xe=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(q.setTexture2DArray(N,0),xe=U.TEXTURE_2D_ARRAY):(q.setTexture2D(N,0),xe=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const At=g.getParameter(U.UNPACK_ROW_LENGTH),qe=g.getParameter(U.UNPACK_IMAGE_HEIGHT),Gt=g.getParameter(U.UNPACK_SKIP_PIXELS),It=g.getParameter(U.UNPACK_SKIP_ROWS),dn=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(U.UNPACK_SKIP_ROWS,Ue),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);const Fn=b.isDataArrayTexture||b.isData3DTexture,st=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const ft=H.get(b),un=H.get(N),rt=H.get(ft.__renderTarget),hn=H.get(un.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,rt.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let On=0;On<Se;On++)Fn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(b).__webglTexture,k,Ge+On),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(N).__webglTexture,fe,tt+On)),U.blitFramebuffer(Te,Ue,_e,he,Me,Qe,_e,he,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||H.has(b)){const ft=H.get(b),un=H.get(N);g.bindFramebuffer(U.READ_FRAMEBUFFER,D),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let rt=0;rt<Se;rt++)Fn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ft.__webglTexture,k,Ge+rt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,k),st?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,un.__webglTexture,fe,tt+rt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,un.__webglTexture,fe),k!==0?U.blitFramebuffer(Te,Ue,_e,he,Me,Qe,_e,he,U.COLOR_BUFFER_BIT,U.NEAREST):st?U.copyTexSubImage3D(xe,fe,Me,Qe,tt+rt,Te,Ue,_e,he):U.copyTexSubImage2D(xe,fe,Me,Qe,Te,Ue,_e,he);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else st?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(xe,fe,Me,Qe,tt,_e,he,Se,nt,yt,ot.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(xe,fe,Me,Qe,tt,_e,he,Se,nt,ot.data):U.texSubImage3D(xe,fe,Me,Qe,tt,_e,he,Se,nt,yt,ot):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,Me,Qe,_e,he,nt,yt,ot.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,Me,Qe,ot.width,ot.height,nt,ot.data):U.texSubImage2D(U.TEXTURE_2D,fe,Me,Qe,_e,he,nt,yt,ot);g.pixelStorei(U.UNPACK_ROW_LENGTH,At),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qe),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Gt),g.pixelStorei(U.UNPACK_SKIP_ROWS,It),g.pixelStorei(U.UNPACK_SKIP_IMAGES,dn),fe===0&&N.generateMipmaps&&U.generateMipmap(xe),g.unbindTexture()},this.initRenderTarget=function(b){H.get(b).__webglFramebuffer===void 0&&q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?q.setTextureCube(b,0):b.isData3DTexture?q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?q.setTexture2DArray(b,0):q.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){j=0,Y=0,ie=null,g.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const Yn={fog:{color:263431,densityDesktop:.026,densityMobile:.034},lighting:{ambientIntensity:.85,ambientColor:791330,moonlightIntensity:2.1,moonlightColor:3718648,emergencyBeaconIntensity:2.8,emergencyBeaconColor:13637664,doorwayLightIntensity:4.5,doorwayHoverIntensity:12,doorwayColor:11735835},particles:{dustCountDesktop:420,dustCountMobile:150,dustColor:9741240},performance:{maxPixelRatio:1.5}};function Yg(i){const e=[],t=new ri(36,80,1,1),n=new er({color:329225,roughness:.18,metalness:.85}),s=new ht(t,n);s.rotation.x=-Math.PI/2,s.position.set(0,0,-12),i.add(s),e.push(t,n);const a=new di(.9,8.5,.9),r=new er({color:724242,roughness:.85,metalness:.15});e.push(a,r);const o=new ri(.12,1.9),l=new ai({color:13637664,transparent:!0,opacity:.55});e.push(o,l);for(let M=4;M>=-28;M-=5.5){const x=new ht(a,r);x.position.set(-3.8,4.25,M),i.add(x);const f=new ht(o,l);f.position.set(-3.34,3.4,M),f.rotation.y=Math.PI/2,i.add(f);const w=new ht(a,r);w.position.set(3.8,4.25,M),i.add(w);const I=new ht(o,l);I.position.set(3.34,3.4,M),I.rotation.y=-Math.PI/2,i.add(I)}const c=new di(3.6,6.2,.4),h=new er({color:263431,roughness:.95}),m=new ht(c,h);m.position.set(0,3.1,-29),i.add(m),e.push(c,h);const u=new ri(2.6,5.6),p=new ai({color:13637664,transparent:!0,opacity:.45}),v=new ht(u,p);return v.position.set(0,3,-28.75),i.add(v),e.push(u,p),{dispose:()=>{e.forEach(M=>M.dispose&&M.dispose())}}}function qg(i){const{lighting:e}=Yn,t=new Wh(e.ambientColor,e.ambientIntensity);i.add(t);const n=new Hh(e.moonlightColor,e.moonlightIntensity);n.position.set(8,14,5),n.target.position.set(0,1.5,0),i.add(n),i.add(n.target);const s=new Sl(e.emergencyBeaconColor,e.emergencyBeaconIntensity,14,1.4);s.position.set(-3.2,3.8,-8),i.add(s);const a=new Sl(e.doorwayColor,e.doorwayLightIntensity,24,1.1);a.position.set(0,2.5,-28),i.add(a);let r=!1;return{update:(o,l,c)=>{Math.sin(o*.2)>.97?(r=!0,n.intensity=e.moonlightIntensity*(Math.random()*.6+.4)):(r=!1,n.intensity=e.moonlightIntensity);const h=c>.75?e.doorwayLightIntensity+(c-.75)*8:e.doorwayLightIntensity,m=l?e.doorwayHoverIntensity:h;a.intensity+=(m-a.intensity)*.08},isFlickering:()=>r,dispose:()=>{i.remove(t),i.remove(n),i.remove(s),i.remove(a)}}}function $g(i){const e=[],t=[],n=new jn;n.position.set(0,0,-10),i.add(n);const s=(W,Z)=>{const ee=new cn({transparent:!0,side:xn,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new He(W)},uRimColor:{value:new He(Z)},uOpacity:{value:0}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec2 vUv;
        uniform float uTime;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec3 pos = position;
          
          // Billowing cloth / ectoplasm wind physics
          float wave = sin(pos.y * 3.5 + uTime * 2.2) * 0.08 +
                       cos(pos.x * 4.0 + uTime * 1.8) * 0.05 +
                       sin(pos.z * 3.0 + uTime * 1.6) * 0.06;
          float bottomFactor = clamp((2.5 - pos.y) / 2.5, 0.0, 1.0);
          pos.x += wave * bottomFactor;
          pos.z += wave * 0.7 * bottomFactor;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec2 vUv;
        uniform vec3 uColor;
        uniform vec3 uRimColor;
        uniform float uOpacity;
        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = 1.0 - abs(dot(normal, viewDir));
          fresnel = pow(fresnel, 2.3);

          float bottomFade = smoothstep(0.0, 0.22, vUv.y);
          vec3 col = mix(uColor, uRimColor, fresnel * 0.8);
          float alpha = uOpacity * bottomFade * (0.32 + fresnel * 0.68);
          gl_FragColor = vec4(col, alpha);
        }
      `});return t.push(ee),e.push(ee),ee},a=s(329224,13637664),r=s(131844,3718648),o=new Fi(.32,1.2,2.7,24,18,!0),l=new ht(o,a);l.position.y=1.35,n.add(l),e.push(o);const c=new Fi(.26,.9,2.4,20,14,!0),h=new ht(c,r);h.position.y=1.3,n.add(h),e.push(c);const m=new jn;m.position.set(0,2.65,0),n.add(m);const u=new po(.52,.9,20,10,!0),p=new ht(u,a);p.rotation.x=Math.PI*.9,p.position.set(0,.1,-.08),m.add(p),e.push(u);const v=new is(.3,14,14),M=new ai({color:0}),x=new ht(v,M);x.position.set(0,0,.05),m.add(x),e.push(v,M);const f=new is(.04,10,10),w=new ai({color:16777215,toneMapped:!1});e.push(f,w);const I=new ht(f,w);I.position.set(-.1,.02,.25),m.add(I);const S=new ht(f,w);S.position.set(.1,.02,.25),m.add(S);const E=new is(.08,8,8),y=new ai({color:13637664,transparent:!0,opacity:.8,blending:as});e.push(E,y);const R=new ht(E,y);R.position.set(-.1,.02,.25),m.add(R);const _=new ht(E,y);_.position.set(.1,.02,.25),m.add(_);const T=new Fi(.05,.12,.85,10,6,!0);e.push(T);const C=new jn;C.position.set(-.6,2.05,.1),C.rotation.set(.45,0,-.35);const L=new ht(T,a);L.position.y=-.42,C.add(L),n.add(C);const F=new jn;F.position.set(.6,2,.12),F.rotation.set(.55,0,.38);const V=new ht(T,a);V.position.y=-.42,F.add(V),n.add(F);const D=350,z=new Wt,j=new Float32Array(D*3);for(let W=0;W<D;W++){const Z=Math.random()*Math.PI*2,ee=.35+Math.random()*1.8;j[W*3]=Math.cos(Z)*ee,j[W*3+1]=Math.random()*3.2,j[W*3+2]=Math.sin(Z)*ee}z.setAttribute("position",new ln(j,3));const Y=new fo({color:13637664,size:.04,transparent:!0,opacity:.7,blending:as}),ie=new Ac(z,Y);return n.add(ie),e.push(z,Y),{group:n,head:m,setOpacity:W=>{t.forEach(Z=>{Z.uniforms.uOpacity.value=W}),Y.opacity=W*.75,w.opacity=W,y.opacity=W*.8},update:(W,Z)=>{t.forEach(be=>{be.uniforms.uTime.value=W}),n.position.y=Math.sin(W*1.3)*.12,m.rotation.y=Z.x*.4,m.rotation.x=-Z.y*.3,C.rotation.x=.45+Math.sin(W*1.6)*.05,F.rotation.x=.55+Math.cos(W*1.4)*.05;const ee=z.attributes.position.array;for(let be=0;be<D;be++)ee[be*3+1]+=.01,ee[be*3+1]>3.4&&(ee[be*3+1]=.1);z.attributes.position.needsUpdate=!0},dispose:()=>{i.remove(n),e.forEach(W=>W.dispose&&W.dispose())}}}const xo={pageSections:[{id:"hero",enabled:!0},{id:"case",enabled:!0},{id:"evidence",enabled:!0},{id:"investigation",enabled:!0},{id:"timeline",enabled:!0},{id:"council",enabled:!0},{id:"rewards",enabled:!0},{id:"benefits",enabled:!0},{id:"sponsors",enabled:!0},{id:"faq",enabled:!0},{id:"final",enabled:!0}],cameraStages:[{progressEnd:.15,name:"Arrival & Room Overview",camPos:{start:[-.2,1.85,6.8],end:[-.5,1.7,4.8]},lookAt:{start:[0,1.8,0],end:[-.2,1.7,-2]}},{progressEnd:.35,name:"The Evidence & Dossiers",camPos:{start:[-.5,1.7,4.8],end:[1.2,1.85,1.6]},lookAt:{start:[-.2,1.7,-2],end:[-.4,1.9,-5]}},{progressEnd:.55,name:"The Monolithic Hallway",camPos:{start:[1.2,1.85,1.6],end:[-.6,1.8,-6.5]},lookAt:{start:[-.4,1.9,-5],end:[0,1.8,-18]}},{progressEnd:.75,name:"The 36-Hour Deep Corridor",camPos:{start:[-.6,1.8,-6.5],end:[.4,1.8,-16]},lookAt:{start:[0,1.8,-18],end:[0,2,-26]}},{progressEnd:1,name:"The Final Illuminated Doorway",camPos:{start:[.4,1.8,-16],end:[0,2.1,-24.5]},lookAt:{start:[0,2,-26],end:[0,2.3,-28.5]}}],ghostEvents:[{id:"event_a_arrival_presence",label:"Distant Hallway Presence",sceneId:"hero",startProgress:.02,peakProgress:.08,endProgress:.16,position:[.3,1.4,-6.5],maxOpacity:.75,behavior:"subtle-dissolve",enabled:!0},{id:"event_b_pillar_shadow",label:"Silhouette Behind Arch Pillar",sceneId:"investigation",startProgress:.36,peakProgress:.44,endProgress:.52,position:[-2.8,1.2,-12],maxOpacity:.68,behavior:"peek-fade",enabled:!0},{id:"event_c_corridor_crossing",label:"Figure Crossing Corridor Depth",sceneId:"timeline",startProgress:.62,peakProgress:.7,endProgress:.78,position:[1.8,1.3,-20.5],maxOpacity:.72,behavior:"cross-mist",enabled:!0},{id:"event_d_final_portal_sentinel",label:"Distant Sentinel Near Doorway",sceneId:"final",startProgress:.88,peakProgress:.94,endProgress:1,position:[-1.4,1.5,-26.5],maxOpacity:.6,behavior:"threshold-fade",enabled:!0}]};function Kg(i){const e=$g(i),t=xo.ghostEvents.filter(s=>s.enabled);let n=0;return{update:(s,a,r)=>{let o=null,l=0;for(const c of t)if(r>=c.startProgress&&r<=c.endProgress){o=c,r<c.peakProgress?l=(r-c.startProgress)/(c.peakProgress-c.startProgress)*c.maxOpacity:l=(1-(r-c.peakProgress)/(c.endProgress-c.peakProgress))*c.maxOpacity;break}n+=(l-n)*.08,e.setOpacity(n),o&&n>.01?(e.group.position.x=o.position[0],e.group.position.z=o.position[2],e.update(s,a)):n>.01&&e.update(s,a)},dispose:()=>{e.dispose()}}}function Zg(i,e=!1){const t=e?Yn.particles.dustCountMobile:Yn.particles.dustCountDesktop,n=new Wt,s=new Float32Array(t*3);for(let o=0;o<t;o++)s[o*3]=(Math.random()-.5)*16,s[o*3+1]=Math.random()*6.5,s[o*3+2]=6-Math.random()*34;n.setAttribute("position",new ln(s,3));const a=new fo({color:Yn.particles.dustColor,size:.035,transparent:!0,opacity:.4,blending:as}),r=new Ac(n,a);return i.add(r),{update:()=>{const o=n.attributes.position.array;for(let l=1;l<o.length;l+=3)o[l]-=.0035,o[l]<.1&&(o[l]=6);n.attributes.position.needsUpdate=!0},dispose:()=>{i.remove(r),n.dispose(),a.dispose()}}}function Jg(i,e=!1){const t=e?Yn.fog.densityMobile:Yn.fog.densityDesktop;return i.fog=new uo(Yn.fog.color,t),{setDensity:n=>{i.fog&&(i.fog.density=n)},dispose:()=>{i.fog=null}}}function Qg(i){const e=xo.cameraStages,t=new G(...e[0].camPos.start),n=new G(...e[0].camPos.start),s=new G(...e[0].lookAt.start),a=new G(...e[0].lookAt.start);return i.position.copy(t),i.lookAt(s),{update:(r,o)=>{let l=e[0],c=0;for(let p=0;p<e.length;p++)if(r<=e[p].progressEnd){l=e[p],c=p===0?0:e[p-1].progressEnd;break}const h=l.progressEnd-c,m=h>0?Math.min(Math.max((r-c)/h,0),1):0,u=.5-.5*Math.cos(m*Math.PI);n.x=xi.lerp(l.camPos.start[0],l.camPos.end[0],u),n.y=xi.lerp(l.camPos.start[1],l.camPos.end[1],u),n.z=xi.lerp(l.camPos.start[2],l.camPos.end[2],u),a.x=xi.lerp(l.lookAt.start[0],l.lookAt.end[0],u),a.y=xi.lerp(l.lookAt.start[1],l.lookAt.end[1],u),a.z=xi.lerp(l.lookAt.start[2],l.lookAt.end[2],u),n.x+=o.x*.35,n.y+=o.y*.2,t.x+=(n.x-t.x)*.045,t.y+=(n.y-t.y)*.045,t.z+=(n.z-t.z)*.045,i.position.copy(t),s.x+=(a.x-s.x)*.045,s.y+=(a.y-s.y)*.045,s.z+=(a.z-s.z)*.045,i.lookAt(s)}}}function ex(){const i=xo.pageSections.filter(t=>t.enabled);let e=i[0]?i[0].id:"hero";return{getActiveScene:()=>e,update:t=>{const n=i.length;if(n===0)return;const s=Math.min(Math.floor(t*n),n-1);i[s]&&(e=i[s].id)}}}ue.memo(function({scrollProgress:e=0,finalDoorHovered:t=!1}){const n=ue.useRef(null);return ue.useEffect(()=>{const s=n.current;if(!s)return;try{const C=document.createElement("canvas");if(!(C.getContext("webgl2")||C.getContext("webgl")))return}catch{return}const a=window.innerWidth,r=window.innerHeight,o=a<768,l=new yh,c=new qt(50,a/r,.1,85),h=new jg({alpha:!0,antialias:!o,powerPreference:"high-performance"});h.setSize(a,r),h.setPixelRatio(Math.min(window.devicePixelRatio,Yn.performance.maxPixelRatio)),h.toneMapping=Qr,h.toneMappingExposure=1.25,s.appendChild(h.domElement);const m=ex(),u=Qg(c),p=Yg(l),v=qg(l),M=Jg(l,o),x=Zg(l,o),f=Kg(l),w={x:0,y:0,targetX:0,targetY:0},I=C=>{w.targetX=(C.clientX/window.innerWidth-.5)*2,w.targetY=-(C.clientY/window.innerHeight-.5)*2},S=()=>{const C=window.innerWidth,L=window.innerHeight;c.aspect=C/L,c.updateProjectionMatrix(),h.setSize(C,L)};window.addEventListener("mousemove",I,{passive:!0}),window.addEventListener("resize",S);let E=null,y=new Yh,R=!1;const _=()=>{R=document.hidden,R||y.start()};document.addEventListener("visibilitychange",_);const T=()=>{if(E=requestAnimationFrame(T),R)return;const C=y.getElapsedTime();w.x+=(w.targetX-w.x)*.05,w.y+=(w.targetY-w.y)*.05;const L=s.dataset.scrollProgress?parseFloat(s.dataset.scrollProgress):0,F=s.dataset.doorHovered==="true";m.update(L),u.update(L,w),v.update(C,F,L),x.update(),f.update(C,w,L),h.render(l,c)};return E=requestAnimationFrame(T),()=>{E&&cancelAnimationFrame(E),window.removeEventListener("mousemove",I),window.removeEventListener("resize",S),document.removeEventListener("visibilitychange",_),p.dispose(),v.dispose(),M.dispose(),x.dispose(),f.dispose(),h&&(h.dispose(),h.domElement&&h.domElement.parentNode&&h.domElement.parentNode.removeChild(h.domElement))}},[]),d.jsx("div",{ref:n,"data-scroll-progress":e,"data-door-hovered":t?"true":"false",className:"fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})});const tx=ue.memo(function(){return d.jsx("div",{className:"film-grain","aria-hidden":"true"})}),nx=ue.memo(function({intensity:e="medium"}){const t=e==="deep"?"radial-gradient(circle at center, transparent 35%, rgba(4, 4, 4, 0.85) 80%, #000000 100%)":"radial-gradient(circle at center, transparent 45%, rgba(6, 6, 6, 0.7) 85%, #050505 100%)";return d.jsx("div",{className:"fixed inset-0 pointer-events-none z-30",style:{background:t},"aria-hidden":"true"})}),ix=ue.memo(function(){return d.jsx("div",{className:"crt-scanlines","aria-hidden":"true"})});ue.memo(function(){return d.jsxs(d.Fragment,{children:[d.jsx(tx,{}),d.jsx(ix,{}),d.jsx(nx,{intensity:"medium"})]})});const sx=ue.memo(function(){const e=$l.useRef(null),[t,n]=ue.useState("default"),[s,a]=ue.useState(!1);return ue.useEffect(()=>{const r="ontouchstart"in window||navigator.maxTouchPoints>0,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(r||o)return;a(!0);let l=-100,c=-100,h=null;const m=()=>{e.current&&(e.current.style.transform=`translate3d(${l}px, ${c}px, 0) translate(-50%, -50%)`),h=null},u=p=>{l=p.clientX,c=p.clientY,h||(h=requestAnimationFrame(m));const v=p.target;v&&(v.closest("button[type='button'], .cta-button, a[href*='registration']")?n("cta"):v.closest(".evidence-card, [id='evidence']")?n("crosshair"):v.closest("a, button, input, summary, [role='button']")?n("hover"):n("default"))};return window.addEventListener("mousemove",u,{passive:!0}),()=>{window.removeEventListener("mousemove",u),h&&cancelAnimationFrame(h)}},[]),s?d.jsxs("div",{ref:e,className:"fixed top-0 left-0 pointer-events-none z-50 will-change-transform transform-gpu",style:{transform:"translate3d(-100px, -100px, 0) translate(-50%, -50%)"},"aria-hidden":"true",children:[d.jsx("div",{className:"w-80 h-80 rounded-full bg-radial from-amber-100/[0.035] via-[#B3131B]/[0.015] to-transparent blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}),t==="default"&&d.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#D01820] shadow-[0_0_8px_#D01820]"}),t==="hover"&&d.jsx("div",{className:"w-8 h-8 rounded-full border border-stone-300 bg-white/10 transition-all duration-200 shadow-[0_0_12px_rgba(255,255,255,0.3)] animate-ping"}),t==="crosshair"&&d.jsxs("div",{className:"relative w-7 h-7 flex items-center justify-center",children:[d.jsx("div",{className:"w-5 h-5 rounded-full border border-[#D01820] shadow-[0_0_8px_#D01820]"}),d.jsx("div",{className:"absolute w-7 h-[1px] bg-[#D01820]"}),d.jsx("div",{className:"absolute h-7 w-[1px] bg-[#D01820]"})]}),t==="cta"&&d.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-[#D01820] bg-[#D01820]/20 shadow-[0_0_20px_#D01820] transition-all duration-200 animate-pulse"})]}):null}),Vt={branding:{name:"BUILDX",subOrganizer:"A CODE-A-NOVA HACKATHON",tagline:"36 HOURS. ONE MYSTERY. INFINITE POSSIBILITIES.",missionDescription:"BUILDX is a 36-hour national-level online hackathon where developers, engineers, and designers investigate real challenges and engineer breakthrough software."},dates:{start:new Date(Date.now()+840*60*60*1e3).toISOString(),end:new Date(Date.now()+888*60*60*1e3).toISOString()},registration:{ctaText:"REGISTER NOW",targetUrl:"#registration"},socials:{github:"https://github.com",discord:"https://discord.gg",twitter:"https://twitter.com",linkedin:"https://linkedin.com"}},ax=[{id:"hero",label:"HOME",href:"#hero",enabled:!0},{id:"case",label:"THE CASE",href:"#case",enabled:!0},{id:"evidence",label:"EVIDENCE",href:"#evidence",enabled:!0},{id:"investigation",label:"INVESTIGATION",href:"#investigation-board",enabled:!0},{id:"timeline",label:"TIMELINE",href:"#timeline",enabled:!0},{id:"council",label:"THE COUNCIL",href:"#council",enabled:!0},{id:"rewards",label:"REWARDS",href:"#rewards",enabled:!0},{id:"sponsors",label:"SPONSORS",href:"#sponsors",enabled:!0},{id:"faq",label:"FAQ",href:"#faq",enabled:!0}];function ki({children:i,onClick:e,href:t,variant:n="primary",size:s="md",className:a="",icon:r=null,type:o="button"}){const l="relative inline-flex items-center justify-center font-mono-tech font-bold uppercase tracking-wider transition-all duration-200 rounded-xs cursor-pointer select-none overflow-hidden focus:outline-none focus:ring-1 focus:ring-[#D01820]",c={sm:"px-4 py-2 text-xs gap-1.5",md:"px-6 py-3 text-xs md:text-sm gap-2",lg:"px-8 py-4 text-sm md:text-base gap-2.5"}[s]||c.md,h={primary:"bg-[#B3131B] hover:bg-[#D01820] text-white border border-[#D01820] shadow-[0_0_20px_rgba(208,24,32,0.45)] hover:shadow-[0_0_30px_rgba(208,24,32,0.7)] hover:-translate-y-0.5 active:translate-y-0",secondary:"bg-[#141414] hover:bg-[#1a1a1a] text-slate-200 hover:text-white border border-white/20 hover:border-[#D01820] shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-0",outline:"bg-transparent hover:bg-white/[0.04] text-slate-300 hover:text-white border border-white/15 hover:border-white/35 hover:-translate-y-0.5 active:translate-y-0"}[n]||h.primary,m=d.jsxs(d.Fragment,{children:[r&&d.jsx("span",{className:"shrink-0",children:r}),d.jsx("span",{children:i})]});return t?d.jsx("a",{href:t,className:`${l} ${c} ${h} ${a}`,children:m}):d.jsx("button",{type:o,onClick:e,className:`${l} ${c} ${h} ${a}`,children:m})}const fs="/assets/buildx-logo-danger-CgCptXoH.png";function rx(){const[i,e]=ue.useState(!1),[t,n]=ue.useState(!1);ue.useEffect(()=>{const a=()=>{e(window.scrollY>30)};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),ue.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const s=ax.filter(a=>a.enabled);return d.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${i?"bg-[#06080c]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.9)] py-3.5":"bg-transparent py-5"}`,children:[d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("a",{href:"#hero",className:"flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#D01820] rounded-xs p-1 select-none",children:[d.jsx("div",{className:"h-7 sm:h-8 w-auto flex items-center filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_0_15px_rgba(208,24,32,0.4)]",children:d.jsx("img",{src:fs,alt:"BUILDX",className:"h-full w-auto object-contain select-none pointer-events-none brightness-[1.12] contrast-[1.15]",loading:"eager"})}),d.jsx("div",{className:"hidden sm:flex flex-col justify-center border-l border-white/10 pl-2.5",children:d.jsx("span",{className:"font-mono-tech text-[9px] text-slate-400 uppercase tracking-widest leading-tight",children:Vt.branding.subOrganizer})})]}),d.jsx("nav",{className:"hidden xl:flex items-center gap-6 select-none","aria-label":"Investigation Navigation",children:s.map(a=>d.jsxs("a",{href:a.href,className:"font-mono-tech text-xs font-semibold text-slate-300 hover:text-white transition-colors relative py-1 group tracking-wider select-none",children:[d.jsx("span",{children:a.label}),d.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D01820] group-hover:w-full transition-all duration-200"})]},a.id))}),d.jsx("div",{className:"hidden sm:flex items-center gap-4",children:d.jsx(ki,{href:Vt.registration.targetUrl,variant:"primary",size:"sm",icon:d.jsx(ss,{className:"w-3.5 h-3.5"}),children:Vt.registration.ctaText})}),d.jsx("button",{type:"button",onClick:()=>n(!t),className:"xl:hidden p-2 rounded-xs bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#D01820] focus:outline-none focus:ring-1 focus:ring-[#D01820]","aria-label":t?"Close menu":"Open menu","aria-expanded":t,children:t?d.jsx(Kd,{className:"w-5 h-5"}):d.jsx(Zd,{className:"w-5 h-5"})})]})}),t&&d.jsxs("div",{className:"xl:hidden fixed inset-0 top-[65px] bg-[#06080c]/98 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col justify-between z-50",children:[d.jsx("nav",{className:"flex flex-col space-y-4","aria-label":"Mobile Navigation",children:s.map(a=>d.jsx("a",{href:a.href,onClick:()=>n(!1),className:"font-mono-tech text-sm font-semibold text-slate-200 hover:text-[#D01820] py-2 border-b border-white/5 tracking-wider",children:a.label},a.id))}),d.jsx("div",{className:"pt-6",children:d.jsx(ki,{href:Vt.registration.targetUrl,variant:"primary",size:"md",className:"w-full justify-center",onClick:()=>n(!1),children:Vt.registration.ctaText})})]})]})}const ox="/assets/home-01-B5TPwGyb.png",lx="/assets/home-02-GYeOmjP7.png",cx="/assets/home-03-C0YqGtiM.png",dx="/assets/home-06-CDYhINdt.png",ux="/assets/home-07-mhPI3FPX.png",hx="/assets/home-08-DImn6Soa.jpg",fx="/assets/home-09-BbSIpgkj.png",px="/assets/home-10-8gRlvVta.png",mx="/assets/home-10-map-BTJAi2M0.png",gx="/assets/home-11-D1xNeUNu.png",xx="/assets/home-12-CZNKQUiN.png",_x="/assets/home-13-DKAaH4x_.png",vx="/assets/home-14-Ckk1lpIx.png",bx="/assets/home-15-tzb6WOWd.jpg",Sx="/assets/home-16-BpAvTrs1.jpg",Mx="/assets/home-17-CIi0gIxX.jpg",Tt=[{id:"scene-01",name:"The Abandoned Corridor // Presence",image:ox,nextSceneId:"scene-02"},{id:"scene-02",name:"The Open Gate Vault",image:lx,nextSceneId:"scene-03"},{id:"scene-03",name:"The Investigation Chamber // Entrance",image:cx,nextSceneId:"scene-06"},{id:"scene-06",name:"The Crime Board // Front Blackboard Manifest",image:dx,nextSceneId:"scene-07"},{id:"scene-07",name:"The Subterranean Trapdoor Hatch // Chamber Pull-Back",image:ux,nextSceneId:"scene-08"},{id:"scene-08",name:"The Subterranean Staircase // The Ghost at the Gate",image:hx,nextSceneId:"scene-09"},{id:"scene-09",name:"Ghost First-Person Eye View // Gripping the Vault Gate",image:fx,nextSceneId:"scene-10"},{id:"scene-10",name:"The Crypt Cathedral // Entrance & Advance",image:px,nextSceneId:"scene-10-map"},{id:"scene-10-map",name:"Sanctum Blueprint // Verifying Location",image:mx,nextSceneId:"scene-11"},{id:"scene-11",name:"The Sacrificial Altar // Advancing to the Vessel",image:gx,nextSceneId:"scene-12"},{id:"scene-12",name:"Reaching for the Ancient Scroll // Close-Up",image:xx,nextSceneId:"scene-13"},{id:"scene-13",name:"Unrolling the Sanctum Proclamation",image:_x,nextSceneId:"scene-14"},{id:"scene-14",name:"Save the Date // Hackathon Scroll Proclamation",image:vx,nextSceneId:"scene-15"},{id:"scene-15",name:"The Crypt Sanctorum // Cathedral of the Occult Rules",image:bx,nextSceneId:"scene-16"},{id:"scene-16",name:"Approaching the Sanctum Board // Process Overview",image:Sx,nextSceneId:"scene-17"},{id:"scene-17",name:"The Sacred Rules & Regulations // Full Sanctum Decrees",image:Mx,nextSceneId:null}],jl={initialLoad:{badge:"CASE FILE // 001",signalText:"THE SIGNAL IS STILL ACTIVE."}};function yx(i=0,e=!1,t=!1){const n=Math.min(Math.max(i,0),1);if(e)return{x:0,y:0,scale:1+n*.15,rotateZ:0,gateProximity:n};const s=1+n*.14,a=n>.02,r=n*Math.PI*14,o=Math.abs(Math.sin(r)),l=a?o*2.5-1.25:0,c=a?Math.sin(r*.5)*2:0,h=a?Math.sin(r*.5)*.2:0;return{x:c,y:l,scale:s,rotateZ:h,gateProximity:n}}function Ex(i=0,e=!1,t=!1){return yx(i,e,t)}function Tx(){const[i,e]=ue.useState(0),[t,n]=ue.useState(!1);return ue.useEffect(()=>{let s=!0;const a=[...Tt.map(m=>m.image),fs].filter(Boolean),r=a.length;let o=0;const l=()=>{if(o++,s){const m=Math.round(o/r*100);e(m)}},c=m=>new Promise(u=>{const p=new Image;p.src=m;const v=()=>{"decode"in p?p.decode().then(()=>{l(),u()}).catch(()=>{l(),u()}):(l(),u())};p.complete&&p.naturalWidth>0?v():(p.onload=v,p.onerror=()=>{l(),u()})});Promise.all(a.map(c)).then(()=>{s&&(e(100),setTimeout(()=>{s&&n(!0)},300))});const h=setTimeout(()=>{s&&(e(100),n(!0))},4e3);return()=>{s=!1,clearTimeout(h)}},[]),{progress:i,isReady:t}}const wx=ue.memo(function({imageSrc:e,sceneId:t="scene-01",scrollProgress:n=0,cameraTransform:s={},onRevealComplete:a}){const r=n>.005,[o,l]=ue.useState(()=>r?2:0),{progress:c,isReady:h}=Tx();ue.useEffect(()=>{if(n>.005){l(2),a&&a();return}if(h){const f=setTimeout(()=>{l(1)},400),w=setTimeout(()=>{l(2),a&&a()},950);return()=>{clearTimeout(f),clearTimeout(w)}}},[h,n>.005,a]),ue.useEffect(()=>{n>.005&&o<2&&(l(2),a&&a())},[n,o,a]);const{x:m=0,y:u=0,scale:p=1,rotateZ:v=0}=s,M=!r&&o<2,x=r?0:o===0?1:o===1?.35:0;return d.jsxs("div",{className:"absolute inset-0 w-full h-full overflow-hidden select-none bg-black",children:[d.jsxs("div",{className:"absolute -inset-x-[6%] -inset-y-[4%] w-[112%] h-[108%] will-change-transform transform-gpu",style:{transform:`translate3d(calc(${m}px + 4.2vw), ${u}px, 0) scale(${p}) rotate(${v}deg)`,transformOrigin:"54% 18%"},children:[d.jsx("img",{src:e,alt:"Paranormal Investigation Scene",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.05] contrast-[1.06]",loading:"eager",decoding:"async"}),t==="scene-01"&&n<.1&&d.jsx("div",{className:"absolute inset-0 pointer-events-none corridor-bulb-flare transform-gpu will-change-opacity",style:{background:"radial-gradient(circle at calc(54% + 4.2vw) 26%, rgba(255, 195, 80, 0.32) 0%, rgba(220, 130, 40, 0.15) 26%, transparent 60%)"}}),t==="scene-01"&&n<.1&&d.jsx("div",{className:"absolute inset-0 pointer-events-none bg-black corridor-blackout-shadow transform-gpu will-change-opacity"})]}),d.jsx("div",{className:"absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 ease-out",style:{opacity:x}}),M&&d.jsx("div",{className:`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/95 text-center pointer-events-none transition-opacity duration-500 ${o===1?"opacity-0":"opacity-100"}`,children:d.jsxs("div",{className:"space-y-3 font-mono max-w-sm px-4",children:[d.jsxs("div",{className:"text-xs text-[#D01820] tracking-widest uppercase animate-pulse flex items-center justify-center gap-2",children:[d.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-[#D01820] animate-ping"}),d.jsx("span",{children:jl.initialLoad.badge})]}),d.jsx("div",{className:"text-sm sm:text-base text-stone-200 tracking-widest uppercase font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]",children:jl.initialLoad.signalText}),d.jsxs("div",{className:"pt-2 flex flex-col items-center gap-2",children:[d.jsx("div",{className:"text-[11px] tracking-widest uppercase font-semibold text-stone-400",children:h?d.jsx("span",{className:"text-emerald-400 font-bold tracking-wider animate-pulse",children:"✓ ALL SCENE EVIDENCE DECODED // SYSTEM READY"}):d.jsxs("span",{children:["DECRYPTING EVIDENCE ARCHIVES [ ",c,"% ]"]})}),d.jsx("div",{className:"w-48 sm:w-56 h-1.5 bg-stone-900 border border-red-900/60 rounded-full overflow-hidden shadow-[0_0_10px_rgba(208,24,32,0.3)]",children:d.jsx("div",{className:"h-full bg-gradient-to-r from-red-700 via-[#D01820] to-amber-400 transition-all duration-150 rounded-full",style:{width:`${c}%`}})})]})]})})]})}),Gc={hero:{taglinePrimary:"36 HOURS. ONE MYSTERY.",taglineSecondary:"INFINITE POSSIBILITIES.",description:"An unknown anomaly has been detected deep inside the system. Assemble your team, investigate the technical evidence, and engineer a high-impact solution within 36 hours."},footer:{disclaimer:"BUILDX is an original technology hackathon event engineered by Code-A-Nova. All challenges, storylines, and assets are completely original.",copyright:"© 2026 CODE-A-NOVA. ALL RIGHTS RESERVED."}},na={caseId:"CASE FILE // ARCH-2026-BUILDX",status:{badge:"ANOMALOUS SIGNAL DETECTED"},briefing:{detail:"All automated telemetry stopped responding at 03:17 AM. Visual sweeps confirmed physical barriers locked from within. Deploy code, inspect anomalies, and breach the deeper vault before containment fails."},hackathonDetails:{duration:"36 HOURS",durationNarrative:"36 HOURS REMAIN TO BREACH",format:"NATIONAL LEVEL INVESTIGATION // ONLINE",prizePool:"₹50,000+",dates:"OCTOBER 24 - 26, 2026"},anomalies:[{id:"TRACK-01",code:"ANOMALY // AI-90",title:"SYNTHETIC INTELLIGENCE & SENTIENCE",risk:"CLASS A",description:"Agents and reasoning systems exhibiting unverified cognitive divergence.",bounty:"₹18,000"},{id:"TRACK-02",code:"ANOMALY // WEB3-44",title:"DECENTRALIZED VAULT PROTOCOLS",risk:"CLASS S",description:"Cryptographic consensus models designed to withstand hostile anomalous intrusion.",bounty:"₹15,000"},{id:"TRACK-03",code:"ANOMALY // SYS-07",title:"AUTONOMOUS INFRASTRUCTURE DEFENSE",risk:"CLASS B",description:"Self-healing low-latency telemetry pipelines monitoring breach frontiers.",bounty:"₹12,000"},{id:"TRACK-04",code:"ANOMALY // OPEN-X",title:"OPEN ANOMALY INVESTIGATION",risk:"UNSPECIFIED",description:"Cross-disciplinary breakthroughs tackling unprecedented technical anomalies.",bounty:"₹5,000+"}],investigationTimeline:[{time:"00:00 HR",title:"BREACH INITIATED",desc:"Access keys dispatched to all registered investigators."},{time:"12:00 HR",title:"CHECKPOINT 01 // SIGNAL LOCK",desc:"First telemetry review and anomaly validation."},{time:"24:00 HR",title:"SECTOR DEEPENING",desc:"Secondary challenges unlocked. Code audit begins."},{time:"36:00 HR",title:"CONTAINMENT SEAL // SUBMISSION",desc:"All terminals locked. Council adjudication begins."}]},Ax=ue.memo(function({scrollProgress:e=0,revealed:t=!1}){const{hero:n}=Gc,{hackathonDetails:s}=na,[a,r]=ue.useState(!1);ue.useEffect(()=>{(t||e>.02)&&r(!0)},[t,e]);let o=1,l=1,c=0;if(e>.03){const f=Math.min(Math.max((e-.03)/.16,0),1);o=1+f*.2,l=Math.max(1-f*1.35,0),c=-f*22}const h=e*Math.PI*46,m=e>.005,u=Math.abs(Math.sin(h)),p=m?u*6-3:0,v=m?Math.sin(h*.5)*5:0,M=m?Math.sin(h*.5)*.45:0,x=a?l:0;return x<=.005&&(e>.12||a)?null:d.jsx("div",{className:"absolute inset-y-0 left-0 z-25 flex flex-col justify-center pl-4 sm:pl-8 lg:pl-12 xl:pl-14 pr-4 max-w-md sm:max-w-lg lg:max-w-xl select-none will-change-transform transform-gpu origin-left",style:{opacity:x,transform:`translate3d(${c+v}px, ${p}px, 0) scale(${o}) rotate(${M}deg)`,pointerEvents:x>.4?"auto":"none"},children:d.jsxs("div",{className:"space-y-4 sm:space-y-5 pt-12 sm:pt-14",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-black/90 backdrop-blur-md border border-white/20 font-mono text-xs text-stone-200 tracking-wider uppercase shadow-lg",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-[#D01820] animate-pulse shadow-[0_0_8px_#D01820]"}),d.jsx("span",{className:"text-stone-400 font-semibold",children:"CASE //"}),d.jsx("span",{className:"text-white font-black tracking-wide",children:"BUILDX-001"}),d.jsx("span",{className:"text-stone-600 font-bold",children:"•"}),d.jsx("span",{className:"text-stone-200 font-bold",children:"A CODE-A-NOVA HACKATHON"})]}),d.jsxs("div",{className:"space-y-1.5 select-none",children:[d.jsx("div",{className:"relative max-w-[260px] sm:max-w-[340px] lg:max-w-[400px] py-1 filter drop-shadow-[0_6px_35px_rgba(0,0,0,0.95)] drop-shadow-[0_0_30px_rgba(208,24,32,0.55)] brightness-[1.12] contrast-[1.15]",children:d.jsx("img",{src:fs,alt:"BUILDX",className:"w-full h-auto object-contain select-none pointer-events-none",loading:"eager"})}),d.jsxs("p",{className:"font-mono text-xs sm:text-sm md:text-base font-black text-white tracking-wider uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] pt-1",children:[n.taglinePrimary," ",d.jsx("span",{className:"text-red-500 font-black drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]",children:n.taglineSecondary})]})]}),d.jsx("p",{className:"font-sans text-stone-100 text-xs sm:text-[13.5px] leading-relaxed max-w-md drop-shadow-md bg-black/85 backdrop-blur-md p-4 rounded-xs border-l-4 border-l-[#D01820] border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.85)] font-medium",children:n.description}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs",children:[d.jsxs("div",{className:"px-3.5 py-1.5 rounded-xs bg-black/90 border border-white/20 backdrop-blur-md shadow-lg flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400 font-semibold",children:"DURATION:"}),d.jsx("span",{className:"text-white font-bold tracking-wide",children:s.duration})]}),d.jsxs("div",{className:"px-3.5 py-1.5 rounded-xs bg-black/90 border border-emerald-900/60 backdrop-blur-md shadow-lg flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400 font-semibold",children:"BOUNTY:"}),d.jsx("span",{className:"text-emerald-300 font-bold tracking-wide drop-shadow-[0_0_10px_rgba(110,231,183,0.4)]",children:s.prizePool})]}),d.jsxs("div",{className:"px-3.5 py-1.5 rounded-xs bg-black/90 border border-cyan-900/60 backdrop-blur-md shadow-lg flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400 font-semibold",children:"SECTOR:"}),d.jsx("span",{className:"text-cyan-300 font-bold tracking-wide drop-shadow-[0_0_10px_rgba(103,232,249,0.4)]",children:"ONLINE NATIONAL"})]})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2",children:[d.jsx(ki,{href:"#register-modal",variant:"primary",size:"md",icon:d.jsx(ss,{className:"w-4 h-4"}),onClick:()=>{const f=document.querySelector("[data-register-trigger]");f&&f.click()},children:"ENTER THE CASE // REGISTER"}),d.jsx("button",{type:"button",onClick:()=>{const f=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:f*.85,behavior:"smooth"})},className:"px-4 py-2.5 rounded-xs border border-white/20 hover:border-[#D01820] bg-black/85 hover:bg-black backdrop-blur-md font-mono text-xs text-stone-100 hover:text-white font-bold tracking-wider uppercase transition-all shadow-xl",children:"EXPLORE EVIDENCE ↓"})]}),d.jsxs("div",{className:"pt-2 flex items-center gap-2 font-mono text-[11px] text-stone-300 uppercase tracking-widest font-semibold drop-shadow-md",children:[d.jsx(Jd,{className:"w-3.5 h-3.5 text-[#D01820] animate-bounce"}),d.jsx("span",{children:"SCROLL TO ENTER THE INVESTIGATION"})]})]})})}),Rx=ue.memo(function({scrollProgress:e=0}){const t=Math.min(Math.max((e-.18)/.03,0),1);if(t<=.005)return null;const n=t,s=t,a=t,r=t,o=t,l=Math.min(Math.max((e-.31)/.035,0),1),c=Math.pow(l,1.4),h=1+c*.45,m=-c*90,u=t*Math.max(1-Math.pow(l,1.3),0);if(u<=.005)return null;const p=e*Math.PI*46,M=Math.abs(Math.sin(p))*6-3,x=Math.sin(p*.5)*5;return d.jsxs("div",{className:"absolute inset-0 z-25 pointer-events-none select-none flex flex-col justify-between pl-6 sm:pl-12 lg:pl-16 pr-4 sm:pr-8 pt-20 sm:pt-22 lg:pt-24 pb-4 sm:pb-6 overflow-hidden will-change-transform transform-gpu",style:{opacity:u,transform:`translate3d(${m+x}px, ${M}px, 0) scale(${h})`,transformOrigin:"45% 48%",pointerEvents:u>.4?"auto":"none"},children:[d.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-700 -z-10",style:{opacity:Math.min(t*1.35,.95)*Math.max(1-Math.pow(l,1.2),0)},"aria-hidden":"true",children:[d.jsx("div",{className:"absolute -bottom-12 inset-x-0 h-[58vh] bg-gradient-to-t from-black via-stone-950/65 to-transparent filter blur-3xl pointer-events-none"}),d.jsx("div",{className:"absolute bottom-2 -left-[30%] w-[160%] h-80 bg-gradient-to-r from-transparent via-stone-400/[0.09] to-transparent filter blur-2xl animate-chamber-fog pointer-events-none"}),d.jsx("div",{className:"absolute bottom-16 -right-[30%] w-[160%] h-72 bg-gradient-to-l from-transparent via-red-600/[0.07] to-transparent filter blur-3xl animate-chamber-fog-reverse pointer-events-none"}),d.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-amber-500/[0.045] filter blur-[140px] pointer-events-none"})]}),d.jsxs("div",{className:"space-y-4 sm:space-y-5 relative z-10",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 transition-all duration-300 max-w-5xl",style:{opacity:n,transform:`translate3d(0, ${(1-n)*12}px, 0)`,filter:n>=.95?"none":`blur(${(1-n)*4}px)`},children:[d.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-black/90 border border-[#D01820]/70 shadow-[0_0_20px_rgba(208,24,32,0.4)] backdrop-blur-md",children:[d.jsx(Qd,{className:"w-4 h-4 text-[#D01820] animate-bounce"}),d.jsx("span",{className:"font-danger-heading text-xs sm:text-sm text-red-500 tracking-widest font-black",children:"LEVEL 4 ANOMALOUS CONTAINMENT BREACH"}),d.jsx("span",{className:"hidden sm:inline text-stone-500 font-mono",children:"|"}),d.jsx("span",{className:"hidden sm:inline font-danger-mono text-xs text-stone-200",children:"SECTOR 4 LOCKED FROM WITHIN"})]}),d.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-red-950/60 border border-[#D01820]/60 text-red-400 font-danger-mono text-xs backdrop-blur-sm shadow-md",children:[d.jsxs("span",{className:"relative flex h-2 w-2",children:[d.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D01820] opacity-75"}),d.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#D01820]"})]}),d.jsx("span",{className:"tracking-widest uppercase font-bold text-red-300",children:"SIGNAL LIVE: 03:17 AM"})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-6xl",children:[d.jsxs("div",{className:"lg:col-span-6 space-y-2.5 transition-all duration-300",style:{opacity:s,transform:`translate3d(${(1-s)*-16}px, 0, 0)`,filter:s>=.95?"none":`blur(${(1-s)*4}px)`},children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-black/85 border border-white/20 font-danger-mono text-[11px] text-stone-300 shadow-md",children:[d.jsx(eu,{className:"w-3.5 h-3.5 text-[#D01820]"}),d.jsx("span",{className:"text-white font-bold tracking-wider",children:"DOSSIER // ARCH-BUILDX-001"})]}),d.jsxs("div",{className:"space-y-1 select-none",children:[d.jsx("div",{className:"relative max-w-[260px] sm:max-w-sm lg:max-w-md filter drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_0_25px_rgba(208,24,32,0.4)]",children:d.jsx("img",{src:fs,alt:"BUILDX",className:"w-full h-auto object-contain select-none pointer-events-none",loading:"eager"})}),d.jsx("div",{className:"font-danger-glitch text-xs sm:text-sm text-red-500 tracking-widest pt-0.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]",children:"A CODE-A-NOVA PARANORMAL INVESTIGATION • 2026"})]}),d.jsxs("div",{className:"font-danger-mono text-xs sm:text-sm text-stone-200 font-bold uppercase tracking-wider flex items-center gap-2 drop-shadow-md",children:[d.jsx(Kl,{className:"w-3.5 h-3.5 text-[#D01820] animate-pulse"}),d.jsx("span",{children:"36 HOURS REMAIN BEFORE PERMANENT CONTAINMENT FAILURE"})]})]}),d.jsx("div",{className:"lg:col-span-6 transition-all duration-300",style:{opacity:a,transform:`translate3d(${(1-a)*16}px, 0, 0)`,filter:a>=.95?"none":`blur(${(1-a)*4}px)`},children:d.jsxs("div",{className:"relative bg-black/90 backdrop-blur-md border border-red-700/60 p-5 rounded-xs shadow-[0_12px_45px_rgba(0,0,0,0.95)] relative overflow-hidden group hover:border-[#D01820] transition-colors",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 danger-stripes"}),d.jsx("div",{className:"absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-red-500/[0.12] to-transparent pointer-events-none animate-classified-scan"}),d.jsx("div",{className:"absolute top-2 left-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsx("div",{className:"absolute top-2 right-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsx("div",{className:"absolute bottom-2 left-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsx("div",{className:"absolute bottom-2 right-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsxs("div",{className:"flex items-center justify-between border-b border-red-950/80 pb-2 mb-3",children:[d.jsxs("div",{className:"flex items-center gap-2 font-danger-heading text-xs text-red-400 font-bold",children:[d.jsx(tu,{className:"w-3.5 h-3.5 text-red-500"}),d.jsx("span",{className:"tracking-widest",children:"INCIDENT REPORT // CLASSIFIED"})]}),d.jsx("span",{className:"font-danger-mono text-[10px] px-2 py-0.5 rounded-xs bg-red-950/80 text-red-300 border border-red-900/60 font-bold",children:"EYES ONLY"})]}),d.jsxs("p",{className:"font-horror-dossier text-stone-100 text-xs sm:text-[13.5px] leading-relaxed tracking-wide font-medium drop-shadow-sm",children:['"At ',d.jsx("span",{className:"text-red-400 font-bold drop-shadow-[0_0_8px_rgba(248,113,113,0.3)]",children:"03:17 AM"}),', anomalous containment failed inside Sector 4. Visual sweeps confirm the entity has locked all deeper steel vaults from the inside. Your directive: deploy code, reconstruct the murder & anomaly board, and breach the vault before you are trapped in the darkness forever."']})]})})]})]}),d.jsxs("div",{className:"mt-auto space-y-3.5 sm:space-y-4 max-w-6xl pt-4 sm:pt-6",children:[d.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 sm:gap-3.5 transition-all duration-300",style:{opacity:r,transform:`translate3d(0, ${(1-r)*12}px, 0)`,filter:r>=.95?"none":`blur(${(1-r)*4}px)`},children:[d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-stone-700/80 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx(ia,{className:"w-3.5 h-3.5 text-[#D01820]"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"TIMELINE"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-white font-bold tracking-wider",children:"36 HOURS VIRTUAL"})]})]}),d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-emerald-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx(Zl,{className:"w-3.5 h-3.5 text-emerald-400"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"RECOVERY BOUNTY"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-emerald-300 font-bold tracking-wider",children:"₹50,000+ CASH"})]})]}),d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-cyan-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx(Jl,{className:"w-3.5 h-3.5 text-cyan-400"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"BREACH DATES"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-cyan-300 font-bold tracking-wider",children:"OCT 24 - 26, 2026"})]})]}),d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-amber-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx(Ql,{className:"w-3.5 h-3.5 text-amber-400"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"ACCESS CLEARANCE"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-amber-300 font-bold tracking-wider",children:"FREE REGISTRATION"})]})]})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-3.5 transition-all duration-300 pt-1",style:{opacity:o,transform:`translate3d(0, ${(1-o)*12}px, 0)`,filter:o>=.95?"none":`blur(${(1-o)*4}px)`,pointerEvents:o>.3?"auto":"none"},children:[d.jsx(ki,{href:"#register-modal",variant:"primary",size:"md",icon:d.jsx(ss,{className:"w-4 h-4"}),onClick:()=>{const f=document.querySelector("[data-register-trigger]");f&&f.click()},children:"BREACH THE VAULT // REGISTER NOW"}),d.jsxs("button",{type:"button",onClick:()=>{const f=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:f,behavior:"smooth"})},className:"px-4 py-2.5 rounded-xs border border-red-900/70 hover:border-[#D01820] bg-black/90 backdrop-blur-md font-danger-heading text-xs text-stone-100 hover:text-white tracking-widest uppercase transition-all shadow-xl flex items-center gap-2",children:[d.jsx("span",{children:"INSPECT CRIME BOARD EVIDENCE"}),d.jsx("span",{className:"text-[#D01820]",children:"↓"})]})]})]})]})}),Nn={global:{file:null},"scene-01":{file:null},"scene-02":{file:null},"scene-03":{file:null},"scene-06":{file:null},"scene-07":{file:null},"scene-08":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.16,loop:!0,fadeIn:.5,fadeOut:.5,continuous:!0},"scene-09":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.18,loop:!0,continuous:!0,fadeIn:.3,fadeOut:.6},"scene-10":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.16,loop:!0,continuous:!0,fadeIn:.4},"scene-10-map":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.15,loop:!0,continuous:!0},"scene-11":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.14,loop:!0,continuous:!0},"scene-12":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.13,loop:!0,continuous:!0},"scene-13":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.11,loop:!0,continuous:!0},"scene-14":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.09,loop:!0,continuous:!0},"scene-15":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.08,loop:!0,continuous:!0},"scene-16":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.07,loop:!0,continuous:!0},"scene-17":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.06,loop:!0,continuous:!0}};class Cx{constructor(){this.ambientAudio=null,this.gateAudio=null,this.dossierAudio=null,this.movementAudio=null,this.swishAudio=null,this.footstepAudio=null,this.isFootstepPlaying=!1,this.footstepIdleTimer=null,this.footstepFadeRaf=null,this.fadeRaf=null,this.isMuted=!1,this.isInitialized=!1}init(){typeof window>"u"||this.isInitialized||(this.isInitialized=!0,this.ambientAudio=null)}startFootsteps(e=.32){if(this.isMuted)return;const t=Math.min(Math.max(.15,e),.45);if(!this.footstepAudio){const l=new Audio("/hackathon-audio/footsteps-clean.wav");l.preload="auto",l.loop=!0,l.volume=0,this.footstepAudio=l}const n=this.footstepAudio;this.footstepFadeRaf&&(cancelAnimationFrame(this.footstepFadeRaf),this.footstepFadeRaf=null),n.paused&&(n.play().catch(()=>{}),this.isFootstepPlaying=!0);const s=n.volume,a=performance.now(),r=120,o=l=>{const c=l-a,h=Math.min(c/r,1);try{n.volume=Math.min(s+(t-s)*h,t)}catch{}h<1&&!n.paused&&!this.isMuted?this.footstepFadeRaf=requestAnimationFrame(o):this.footstepFadeRaf=null};this.footstepFadeRaf=requestAnimationFrame(o),this.footstepIdleTimer&&clearTimeout(this.footstepIdleTimer),this.footstepIdleTimer=setTimeout(()=>{this.stopFootsteps(180)},180)}stopFootsteps(e=180){if(!this.footstepAudio||this.footstepAudio.paused)return;const t=this.footstepAudio;this.footstepFadeRaf&&(cancelAnimationFrame(this.footstepFadeRaf),this.footstepFadeRaf=null);const n=t.volume,s=performance.now(),a=r=>{const o=r-s,l=Math.min(o/e,1);try{t.volume=Math.max(0,n*(1-l))}catch{}if(l<1)this.footstepFadeRaf=requestAnimationFrame(a);else{this.footstepFadeRaf=null;try{t.pause()}catch{}this.isFootstepPlaying=!1}};this.footstepFadeRaf=requestAnimationFrame(a)}playMovementPan(e=.32){if(this.isMuted)return;const t=Math.min(Math.max(.15,e),.4);try{if(this.movementAudio)try{this.movementAudio.pause(),this.movementAudio.currentTime=0}catch{}const n=new Audio("/hackathon-audio/movement-pan.wav");n.preload="auto",n.volume=t,n.play().catch(()=>{const s=new Audio("/hackathon-audio/movement.mp3");s.currentTime=2.5,s.volume=t,s.play().catch(()=>{}),this.movementAudio=s}),this.movementAudio=n}catch{}}playMovementSwish(e=.25){if(this.isMuted)return;const t=Math.min(Math.max(.12,e),.35);try{if(this.swishAudio)try{this.swishAudio.pause(),this.swishAudio.currentTime=0}catch{}const n=new Audio("/hackathon-audio/movement-swish.wav");n.preload="auto",n.volume=t,n.play().catch(()=>{const s=new Audio("/hackathon-audio/movement.mp3");s.currentTime=1,s.volume=t,s.play().catch(()=>{}),this.swishAudio=s}),this.swishAudio=n}catch{}}playGateOpen(e=.18){if(this.isMuted)return;const t=Math.min(Math.max(.12,e),.2);try{if(this.gateAudio)try{this.gateAudio.pause(),this.gateAudio.currentTime=0}catch{}const n=new Audio("/hackathon-audio/gate-open-trimmed.wav");n.preload="auto",n.volume=t,n.play().catch(()=>{const s=new Audio("/hackathon-audio/gate-open.mp3");s.currentTime=3,s.volume=t,s.play().catch(()=>{}),this.gateAudio=s}),this.gateAudio=n}catch{}}playHeavyGateBreach(e=.18){this.playGateOpen(e)}playDossierTransition(e=.2){if(this.isMuted)return;const t=Math.min(Math.max(.05,e),.25);try{if(this.dossierAudio)try{this.dossierAudio.pause(),this.dossierAudio.currentTime=0}catch{}const n=new Audio("/hackathon-audio/sound-effect.mp3");n.preload="auto",n.volume=t,n.play().catch(()=>{}),this.dossierAudio=n}catch{}}playRuleFocusLock(e=1,t=.2){if(this.isMuted)return;const n=Math.min(Math.max(.08,t),.24);try{if(typeof window<"u"){const a=window.AudioContext||window.webkitAudioContext;if(a){(!this.synthCtx||this.synthCtx.state==="closed")&&(this.synthCtx=new a),this.synthCtx.state==="suspended"&&this.synthCtx.resume();const r=this.synthCtx,o=r.createOscillator(),l=r.createGain(),c=500+(Math.max(1,e)-1)*40;o.type="sine",o.frequency.setValueAtTime(c,r.currentTime),o.frequency.exponentialRampToValueAtTime(c*1.45,r.currentTime+.035),l.gain.setValueAtTime(n*.4,r.currentTime),l.gain.exponentialRampToValueAtTime(.001,r.currentTime+.06),o.connect(l),l.connect(r.destination),o.start(),o.stop(r.currentTime+.07)}}const s=new Audio("/hackathon-audio/sound-effect.mp3");s.preload="auto",s.volume=n*.75,s.play().catch(()=>{})}catch{}}fadeGateAudio(e=400){if(!this.gateAudio||this.gateAudio.paused)return;const t=this.gateAudio,n=t.volume,s=performance.now(),a=r=>{const o=r-s,l=Math.min(o/e,1);try{t.volume=Math.max(0,n*(1-l))}catch{}if(l<1)requestAnimationFrame(a);else try{t.pause(),t.currentTime=0}catch{}};requestAnimationFrame(a)}playFootstep(e=.32){this.startFootsteps(e)}playDoorOpenCreak(){}playLockUnlatch(){}toggleMute(){if(this.isMuted=!this.isMuted,this.isMuted){if(this.footstepAudio){try{this.footstepAudio.pause()}catch{}this.isFootstepPlaying=!1}if(this.movementAudio)try{this.movementAudio.pause()}catch{}if(this.swishAudio)try{this.swishAudio.pause()}catch{}if(this.gateAudio)try{this.gateAudio.pause()}catch{}if(this.dossierAudio)try{this.dossierAudio.pause()}catch{}}return this.isMuted}setAmbientVolume(){}duck(){}restore(){}}const ct=new Cx;class Nx{constructor(){this.currentAudio=null,this.currentSceneId=null,this.lastPlayedSceneId=null,this.activeClipSessionId=0,this.isMuted=!1,this.isAutoplayBlocked=!1,this.isDucked=!1,this.triggerTimeoutId=null,this.rafId=null,this.isPausedByScrollStop=!1,this.isFadingOut=!1,this.isFadingToStop=!1,this.scrollIdleTimeout=null,this.scrollIdleDelay=160,this.fadeRafId=null,this.isClipFinished=!1,this.debugState={currentScene:"none",audioFile:"none",clipStart:0,clipEnd:0,currentTime:0,playbackStatus:"IDLE",volume:20,isMuted:!1},this.debugListeners=new Set,this.hasUnlockedGesture=!1,this.bindAutoplayUnlock()}setInitialScene(e="scene-01"){this.debugState.currentScene=e;const t=Nn[e];t&&(this.debugState.audioFile=t.file?t.file.split("/").pop():"none",this.debugState.clipStart=Number((t.clip?.start??0).toFixed(2)),this.debugState.clipEnd=Number((t.clip?.end??10).toFixed(2)),this.debugState.volume=Math.round((t.volume??.5)*100),this.debugState.playbackStatus="IDLE (SCROLL TO PLAY)"),this.notifyDebug()}bindAutoplayUnlock(){if(typeof window>"u")return;const e=()=>{if(this.hasUnlockedGesture=!0,this.isAutoplayBlocked=!1,ct.init(),this.pendingSceneId&&this.pendingSceneId===this.currentSceneId&&!this.isMuted){const t=this.pendingSceneId;this.pendingSceneId=null,this.playSceneVoice(t,!0)}window.removeEventListener("scroll",e),window.removeEventListener("pointerdown",e),window.removeEventListener("keydown",e),window.removeEventListener("touchstart",e)};window.addEventListener("scroll",e,{passive:!0,once:!0}),window.addEventListener("pointerdown",e,{passive:!0,once:!0}),window.addEventListener("keydown",e,{passive:!0,once:!0}),window.addEventListener("touchstart",e,{passive:!0,once:!0})}subscribeDebug(e){return this.debugListeners.add(e),e(this.getDebugState()),()=>{this.debugListeners.delete(e)}}notifyDebug(){if(this.debugListeners.size===0)return;const e=this.getDebugState();this.debugListeners.forEach(t=>{try{t(e)}catch(n){console.warn("Debug listener error:",n)}})}getDebugState(){return{...this.debugState,isMuted:this.isMuted,isAutoplayBlocked:this.isAutoplayBlocked,ambientVolume:ct.ambientVolume}}playAudioClip({file:e,start:t=0,end:n=0,volume:s=.5,duckAmbient:a=!1,duckVolume:r=.04,fadeIn:o=0,fadeOut:l=0,loop:c=!0,onEnd:h=null}){if(this.isMuted){this.debugState.playbackStatus="MUTED",this.notifyDebug();return}const m=Math.min(Math.max(0,s),.85);this.stopActiveClip();const u=++this.activeClipSessionId,p=new Audio(e);p.preload="auto",p.loop=!!c,p.volume=0,this.currentAudio=p,this.currentAudioFile=e,this.activeClipStart=t,this.activeClipEnd=n,this.activeClipLoop=!!c,this.debugState.audioFile=e.split("/").pop(),this.debugState.clipStart=Number(t.toFixed(2)),this.debugState.clipEnd=Number(n>0?n.toFixed(2):0),this.debugState.currentTime=Number(t.toFixed(2)),this.debugState.volume=Math.round(m*100),this.debugState.playbackStatus="LOADING",this.notifyDebug();let v=!1,M=!1;const x=async()=>{if(u===this.activeClipSessionId)try{await p.play(),this.isAutoplayBlocked=!1,v=!0,this.debugState.playbackStatus="PLAYING",this.notifyDebug();const w=o>0?o*1e3:350;this.debugState.playbackStatus="PLAYING (FADING IN)",this.notifyDebug(),this.fadeVolume(p,0,m,w,u,()=>{this.debugState.playbackStatus="PLAYING",this.notifyDebug()}),a&&(this.isDucked=!0,ct.duck(r,w));const I=()=>{if(!(u!==this.activeClipSessionId||!this.currentAudio)){if(!p.paused){const S=p.currentTime;this.debugState.currentTime=Number(S.toFixed(2)),n>0&&l>0&&!M&&S>=n-l&&S<n&&(M=!0,this.fadeVolume(p,p.volume,0,l*1e3,u));const E=this.activeClipEnd;if(E>0&&S>=E||!this.activeClipLoop&&p.ended)if(this.activeClipLoop&&E>0)try{p.currentTime=this.activeClipStart}catch{}else{this.isClipFinished=!0,this.stopActiveClip(),h&&h();return}this.notifyDebug()}this.rafId=requestAnimationFrame(I)}};this.rafId=requestAnimationFrame(I)}catch(w){w.name==="NotAllowedError"?(this.isAutoplayBlocked=!0,this.debugState.playbackStatus="BLOCKED",this.notifyDebug()):(console.warn("Audio clip playback notice for",e,w),this.debugState.playbackStatus="ERROR",this.notifyDebug())}},f=()=>{if(u!==this.activeClipSessionId)return;if(t>0)try{p.currentTime=t}catch{}const w=()=>{p.removeEventListener("seeked",w),p.removeEventListener("canplay",w),u===this.activeClipSessionId&&!v&&x()};Math.abs(p.currentTime-t)<=.15||t===0?x():(p.addEventListener("seeked",w,{once:!0}),p.addEventListener("canplay",w,{once:!0}))};p.readyState>=1?f():(p.addEventListener("loadedmetadata",f,{once:!0}),p.addEventListener("canplay",f,{once:!0})),p.addEventListener("error",()=>{u===this.activeClipSessionId&&(this.debugState.playbackStatus="UNAVAILABLE",this.notifyDebug(),this.isDucked&&(this.isDucked=!1,ct.restore()))},{once:!0})}fadeVolume(e,t,n,s,a,r=null){if(this.fadeRafId&&(cancelAnimationFrame(this.fadeRafId),this.fadeRafId=null),!e||s<=0){if(e)try{e.volume=n}catch{}r&&r();return}const o=performance.now(),l=c=>{if(a!==this.activeClipSessionId||!e)return;const h=c-o,m=Math.min(h/s,1),u=.5-.5*Math.cos(m*Math.PI),p=t+(n-t)*u;try{e.volume=Math.max(0,Math.min(1,p))}catch{}m<1?this.fadeRafId=requestAnimationFrame(l):(this.fadeRafId=null,r&&r())};this.fadeRafId=requestAnimationFrame(l)}stopActiveClip(){if(this.activeClipSessionId++,this.triggerTimeoutId&&(clearTimeout(this.triggerTimeoutId),this.triggerTimeoutId=null),this.scrollIdleTimeout&&(clearTimeout(this.scrollIdleTimeout),this.scrollIdleTimeout=null),this.fadeRafId&&(cancelAnimationFrame(this.fadeRafId),this.fadeRafId=null),this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.currentAudio){try{this.currentAudio.pause(),this.currentAudio.src="",this.currentAudio.load()}catch{}this.currentAudio=null}this.isPausedByScrollStop=!1,this.isFadingOut=!1,this.isFadingToStop=!1,this.currentAudioFile=null,this.isDucked&&(this.isDucked=!1,ct.restore()),this.debugState.playbackStatus="STOPPED",this.notifyDebug()}fadeOutAndStop(e=550){if(!this.currentAudio||this.isFadingOut&&this.isFadingToStop)return;this.isFadingOut=!0,this.isFadingToStop=!0;const t=this.currentAudio,n=this.activeClipSessionId;this.debugState.playbackStatus="FADING OUT...",this.notifyDebug(),this.isDucked&&(this.isDucked=!1,ct.restore(e)),this.fadeVolume(t,t.volume,0,e,n,()=>{if(this.isFadingToStop=!1,n===this.activeClipSessionId)this.stopActiveClip();else try{t.pause(),t.currentTime=0,t.removeAttribute("src"),t.src="",t.load()}catch{}})}onUserScrollActivity(e){if(this.isMuted)return;const t=e||this.currentSceneId||"scene-01",n=Nn[t]||Nn.global,s=Math.min(n?.volume??.5,.85);if(!n||!n.file){this.currentAudio&&!this.isFadingToStop&&this.fadeOutAndStop(550);return}if(this.isFadingToStop=!1,!this.currentAudio&&!this.isClipFinished)this.currentSceneId=t,this.lastPlayedSceneId=t,this.playSceneVoice(t,!0);else if(this.currentAudio&&!this.isClipFinished){const a=this.currentAudio,r=this.isPausedByScrollStop||a.paused,o=this.isFadingOut;(r||o)&&(this.isPausedByScrollStop=!1,this.isFadingOut=!1,a.paused&&a.play().catch(l=>{l.name==="NotAllowedError"&&(this.isAutoplayBlocked=!0,this.debugState.playbackStatus="BLOCKED",this.notifyDebug())}),this.debugState.playbackStatus="PLAYING (FADING IN)",this.notifyDebug(),this.fadeVolume(a,a.volume,s,300,this.activeClipSessionId,()=>{this.debugState.playbackStatus="PLAYING",this.notifyDebug()}),n?.duckAmbient!==!1&&(this.isDucked=!0,ct.duck(n?.duckVolume??.04,300)))}n?.continuous||n?.ignoreScrollIdle?this.scrollIdleTimeout&&(clearTimeout(this.scrollIdleTimeout),this.scrollIdleTimeout=null):(this.scrollIdleTimeout&&clearTimeout(this.scrollIdleTimeout),this.scrollIdleTimeout=setTimeout(()=>{this.handleScrollStopped()},this.scrollIdleDelay))}handleScrollStopped(){if(!this.currentAudio||this.isClipFinished||this.isPausedByScrollStop||this.isFadingOut)return;const e=Nn[this.currentSceneId]||Nn.global;if(e?.continuous||e?.ignoreScrollIdle)return;this.isFadingOut=!0;const t=this.currentAudio,n=this.activeClipSessionId,s=360;this.debugState.playbackStatus="FADING OUT...",this.notifyDebug(),this.isDucked&&(this.isDucked=!1,ct.restore(s)),this.fadeVolume(t,t.volume,0,s,n,()=>{if(this.activeClipSessionId===n&&this.isFadingOut&&t){try{t.pause()}catch{}this.isFadingOut=!1,this.isPausedByScrollStop=!0,this.debugState.playbackStatus="PAUSED (SCROLL STOPPED)",this.notifyDebug()}})}onSceneActive(e){if(!e||(this.debugState.currentScene=e,e===this.currentSceneId))return;this.currentSceneId=e,this.isClipFinished=!1;const t=Nn[e]||Nn.global;if(!t||!t.file){this.lastPlayedSceneId=e,this.debugState.audioFile="none",this.debugState.playbackStatus="FADING OUT (SCENE EXIT)",this.notifyDebug(),this.currentAudio&&this.fadeOutAndStop(550);return}if(this.currentAudio&&this.currentAudioFile===t.file){if(this.lastPlayedSceneId=e,t.clip?.start!==void 0){this.activeClipStart=t.clip.start,this.activeClipEnd=t.clip.end??0,this.activeClipLoop=t.loop??!0,this.debugState.clipStart=Number(this.activeClipStart.toFixed(2)),this.debugState.clipEnd=Number(this.activeClipEnd>0?this.activeClipEnd.toFixed(2):0),this.notifyDebug();const n=this.currentAudio.currentTime;if(n<this.activeClipStart||this.activeClipEnd>0&&n>=this.activeClipEnd)try{this.currentAudio.currentTime=this.activeClipStart}catch{}}if(t?.volume!==void 0&&!this.isMuted){const n=Math.min(t.volume,.85);this.fadeVolume(this.currentAudio,this.currentAudio.volume,n,500,this.activeClipSessionId)}return}if(this.currentAudio&&this.fadeOutAndStop(250),this.isMuted){this.debugState.playbackStatus="MUTED",this.notifyDebug();return}e!==this.lastPlayedSceneId&&(this.lastPlayedSceneId=e,this.playSceneVoice(e))}playSceneVoice(e,t=!1){const n=Nn[e]||Nn.global;if(!n||!n.file){this.debugState.audioFile="none",this.debugState.playbackStatus="NO_VOICE_CONFIG",this.notifyDebug();return}const s=()=>{this.currentSceneId===e&&this.playAudioClip({file:n.file,start:n.clip?.start??0,end:n.clip?.end??0,volume:Math.min(n.volume??.5,.85),duckAmbient:!1,duckVolume:.04,fadeIn:n.fadeIn??.35,fadeOut:n.fadeOut??.4,loop:n.loop??!0,onEnd:()=>{this.debugState.playbackStatus="STOPPED",this.notifyDebug()}})},a=t?0:n.triggerDelayMs||0;a>0?this.triggerTimeoutId=setTimeout(s,a):s()}toggleMute(){return this.isMuted=!this.isMuted,this.debugState.isMuted=this.isMuted,ct.isMuted=this.isMuted,this.isMuted?(this.stopActiveClip(),ct.ambientAudio&&ct.ambientAudio.pause(),this.debugState.playbackStatus="MUTED"):(ct.ambientAudio&&ct.ambientAudio.play().catch(()=>{}),this.currentSceneId&&(this.lastPlayedSceneId=null,this.playSceneVoice(this.currentSceneId,!0))),this.notifyDebug(),this.isMuted}replayCurrentScene(){this.currentSceneId&&(this.lastPlayedSceneId=null,this.playSceneVoice(this.currentSceneId,!0))}}const Lt=new Nx;class Ix{constructor(){this.audio=null,this.fadeRaf=null,this.isPlaying=!1,this.isFadingOut=!1,this.scrollIdleTimer=null,this.targetVolume=.3,typeof window<"u"&&Lt.subscribeDebug(e=>{e.isMuted&&this.stopImmediate()})}ensureAudio(){return!this.audio&&typeof window<"u"&&(this.audio=new Audio("/hackathon-audio/black-board-chalk.mp3"),this.audio.loop=!0,this.audio.preload="auto",this.audio.volume=0),this.audio}fadeVolume(e,t,n,s=null){this.fadeRaf&&(cancelAnimationFrame(this.fadeRaf),this.fadeRaf=null);const a=this.ensureAudio();if(!a)return;if(n<=0){a.volume=t,s&&s();return}const r=performance.now(),o=l=>{const c=l-r,h=Math.min(c/n,1),m=.5-.5*Math.cos(h*Math.PI),u=e+(t-e)*m;try{a.volume=Math.max(0,Math.min(1,u))}catch{}h<1?this.fadeRaf=requestAnimationFrame(o):(this.fadeRaf=null,s&&s())};this.fadeRaf=requestAnimationFrame(o)}play(){if(Lt.isMuted)return;const e=this.ensureAudio();e&&(this.isFadingOut=!1,e.paused&&e.play().catch(()=>{}),this.fadeVolume(e.volume,this.targetVolume,250),this.isPlaying=!0)}pauseWithFade(e=350){!this.audio||this.isFadingOut||this.audio.paused||(this.isFadingOut=!0,this.fadeVolume(this.audio.volume,0,e,()=>{if(this.audio)try{this.audio.pause()}catch{}this.isPlaying=!1,this.isFadingOut=!1}))}stopImmediate(){if(this.fadeRaf&&(cancelAnimationFrame(this.fadeRaf),this.fadeRaf=null),this.scrollIdleTimer&&(clearTimeout(this.scrollIdleTimer),this.scrollIdleTimer=null),this.audio)try{this.audio.pause(),this.audio.currentTime=0,this.audio.volume=0}catch{}this.isPlaying=!1,this.isFadingOut=!1}onWritingScrollActivity(){Lt.isMuted||((!this.isPlaying||this.isFadingOut)&&this.play(),this.scrollIdleTimer&&clearTimeout(this.scrollIdleTimer),this.scrollIdleTimer=setTimeout(()=>{this.pauseWithFade(280)},200))}}const lr=new Ix,Rt=ue.memo(function({words:e,progress:t=0,className:n="",cursorColor:s="bg-stone-200"}){const a=e.length,r=Math.min(Math.floor(t*(a+1)),a);return d.jsx("span",{className:n,children:e.map((o,l)=>{const c=typeof o=="string"?o:o.text,h=typeof o=="object"&&o.className||"",m=l<r,u=l===r-1&&t<.98&&t>.02;return d.jsxs("span",{className:`inline-block select-none transition-opacity duration-100 ${h}`,style:{opacity:m?1:0,marginRight:"0.26em"},children:[c,u&&d.jsx("span",{className:`inline-block w-1.5 h-3.5 ${s} ml-0.5 rounded-2xs opacity-90 shadow-[0_0_6px_rgba(255,255,255,0.8)] animate-pulse`})]},l)})})}),Dx=["★","CASE","FILE","//","BUILDX-2026",":","TOP","SECRET"],Px=["•","Sector","4","Crime","Manifest","•"],Lx=["EVIDENCE","RECORDED"],Ux=[{text:'"An'},{text:"unknown"},{text:"anomaly"},{text:"breached"},{text:"our"},{text:"core"},{text:"vault"},{text:"at"},{text:"03:17",className:"chalk-red font-bold underline decoration-wavy decoration-red-400/80"},{text:"AM."},{text:"Assemble"},{text:"your"},{text:"squad,"},{text:"decipher"},{text:"the"},{text:"evidence"},{text:"on"},{text:"this"},{text:"board,"},{text:"and"},{text:"engineer"},{text:"the"},{text:"containment"},{text:"breach"},{text:"solution"},{text:"before"},{text:"time"},{text:'expires."'}],Fx=["✦","TRACK","01","//","PARANORMAL","AI"],Ox=["Deep-learning","anomaly","detection,","neural","forensics,","and","autonomous","agents."],Bx=["[","BOUNTY","ELIGIBLE","•","MULTI-MODAL","]"],kx=["✦","TRACK","02","//","ZERO-TRUST","DEFENSE"],zx=["Vault","infrastructure","security,","authentication","recovery,","and","hardened","systems."],Gx=["[","BOUNTY","ELIGIBLE","•","CYBERSEC","]"],Vx=["✦","TRACK","03","//","OPEN","INNOVATION"],Hx=["Wildcard","engineering:","AI","tools,","Web3,","cloud","infrastructure,","and","impactful","apps."],Wx=["[","ALL","DOMAINS","OPEN","•","VIRTUAL","]"],Xx=["⏱","36","Hours","Hackathon"],jx=["🏆","₹50,000+","Prize","Pool"],Yx=["🛡","Free","Registration"],qx=["⚡","BREACH","THE","VAULT","//","REGISTER","➔"],Yl=ue.memo(function({scrollProgress:e=0,variant:t="front"}){const n=t==="mini-angled";if(ue.useEffect(()=>{if(n)return;e>=.38&&e<=.562?lr.onWritingScrollActivity():lr.pauseWithFade(350)},[e,n]),ue.useEffect(()=>()=>{n||lr.pauseWithFade(300)},[n]),!n&&(e<.36||e>.6))return null;const s=n?1:Math.min(Math.max((e-.38)/.03,0),1),a=n?1:Math.min(Math.max((e-.41)/.055,0),1),r=n?1:Math.min(Math.max((e-.465)/.02,0),1),o=n?1:Math.min(Math.max((e-.485)/.02,0),1),l=n?1:Math.min(Math.max((e-.505)/.02,0),1),c=n?1:Math.min(Math.max((e-.525)/.018,0),1),h=n?1:Math.min(Math.max((e-.543)/.018,0),1),u=1-(n?0:Math.min(Math.max((e-.56)/.04,0),1)),p=()=>{const v=document.querySelector("[data-register-trigger]");v?v.click():window.location.hash="register"};return n?d.jsx("div",{className:"absolute z-25 pointer-events-none select-none overflow-hidden",style:{left:"3.2%",top:"12.8%",width:"40.5%",height:"30.0%",transform:"perspective(1200px) rotateY(3deg) rotateX(0.5deg)",transformOrigin:"left center",mixBlendMode:"screen"},children:d.jsxs("div",{className:"w-full h-full px-2 py-1.5 flex flex-col justify-between opacity-95 text-stone-200",children:[d.jsxs("div",{className:"border-b border-stone-400/35 pb-1 flex items-baseline justify-between",children:[d.jsx("span",{className:"font-chalk-sketch-title text-xs sm:text-sm chalk-red tracking-wider",children:"★ CASE FILE // BUILDX-2026 : TOP SECRET"}),d.jsx("span",{className:"font-chalk-detective text-[10px] sm:text-xs chalk-yellow",children:"• Sector 4 Manifest •"})]}),d.jsxs("p",{className:"font-chalk-detective text-[11px] sm:text-xs lg:text-[13px] text-stone-200 leading-snug tracking-wide",children:['"An unknown anomaly breached our core vault at ',d.jsx("span",{className:"chalk-red font-bold",children:"03:17 AM"}),'. Assemble your squad, decipher the evidence on this board, and engineer the containment breach solution."']}),d.jsxs("div",{className:"grid grid-cols-3 gap-1 sm:gap-2 text-[9px] sm:text-[10px]",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-chalk-sketch-title text-[10px] sm:text-xs chalk-cyan tracking-wide",children:"[ 01: AI ANOMALY ]"}),d.jsx("div",{className:"font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5",children:"Deep neural forensics & agents"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"font-chalk-sketch-title text-[10px] sm:text-xs chalk-green tracking-wide",children:"[ 02: ZERO-TRUST ]"}),d.jsx("div",{className:"font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5",children:"Vault auth & hardened defense"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"font-chalk-sketch-title text-[10px] sm:text-xs chalk-yellow tracking-wide",children:"[ 03: OPEN TRACK ]"}),d.jsx("div",{className:"font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5",children:"Wildcard engineering & apps"})]})]}),d.jsxs("div",{className:"font-chalk-detective text-[9px] sm:text-[11px] flex items-center justify-between chalk-yellow pt-0.5 border-t border-stone-400/35",children:[d.jsx("span",{className:"text-stone-300",children:"⏱ 36 Hours"}),d.jsx("span",{className:"font-bold chalk-yellow",children:"🏆 ₹50,000+ Pool"}),d.jsx("span",{className:"chalk-green",children:"🛡 Free Registration"})]})]})}):d.jsx("div",{className:"absolute inset-0 z-25 pointer-events-none select-none flex items-center justify-center overflow-hidden transition-opacity duration-150",style:{opacity:u},children:d.jsxs("div",{className:"w-full max-w-5xl xl:max-w-[1180px] 2xl:max-w-[1240px] px-6 sm:px-10 lg:px-14 flex flex-col justify-center my-auto gap-3 sm:gap-4 -translate-y-3 sm:-translate-y-5",children:[d.jsxs("div",{className:"relative pb-2.5",children:[d.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-2",children:[d.jsx("div",{className:"flex items-center gap-2",children:d.jsx(Rt,{words:Dx,progress:s,className:"font-chalk-sketch-title text-xl sm:text-2xl md:text-[28px] chalk-red tracking-wider",cursorColor:"bg-red-400"})}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx(Rt,{words:Px,progress:s,className:"font-chalk-detective text-base sm:text-lg chalk-yellow tracking-wider",cursorColor:"bg-yellow-300"}),d.jsx("span",{className:"px-2 py-0.5 border border-dashed border-red-400/50 rounded-xs chalk-red font-chalk-sketch text-xs tracking-wider transition-opacity duration-200",style:{opacity:s>=.85?1:0},children:d.jsx(Rt,{words:Lx,progress:Math.min(s*1.2,1),cursorColor:"bg-red-400"})})]})]}),d.jsx("div",{className:"w-full h-0.5 border-b-2 border-dashed border-stone-400/35 transition-all duration-150 mt-2",style:{clipPath:`inset(0 ${(1-s)*100}% 0 0)`}})]}),d.jsx("div",{className:"min-h-[56px] sm:min-h-[64px] flex items-center",children:d.jsx("p",{className:"font-chalk-detective text-xl sm:text-2xl lg:text-[26px] chalk-white leading-relaxed tracking-wide",children:d.jsx(Rt,{words:Ux,progress:a,cursorColor:"bg-stone-200"})})}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5",children:[d.jsxs("div",{className:"chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200",style:{opacity:r>.05?1:0,clipPath:`inset(0 ${(1-Math.min(r*2,1))*100}% 0 0)`},children:[d.jsx("div",{className:"font-chalk-sketch-title text-sm sm:text-base chalk-cyan mb-1 flex items-center gap-1.5",children:d.jsx(Rt,{words:Fx,progress:Math.min(r*1.5,1),cursorColor:"bg-cyan-300"})}),d.jsx("p",{className:"font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]",children:d.jsx(Rt,{words:Ox,progress:Math.max((r-.25)/.65,0),cursorColor:"bg-stone-200"})}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-cyan pt-1 font-bold tracking-wider",children:d.jsx(Rt,{words:Bx,progress:Math.max((r-.6)/.4,0),cursorColor:"bg-cyan-300"})})]}),d.jsxs("div",{className:"chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200",style:{opacity:o>.05?1:0,clipPath:`inset(0 ${(1-Math.min(o*2,1))*100}% 0 0)`},children:[d.jsx("div",{className:"font-chalk-sketch-title text-sm sm:text-base chalk-green mb-1 flex items-center gap-1.5",children:d.jsx(Rt,{words:kx,progress:Math.min(o*1.5,1),cursorColor:"bg-emerald-300"})}),d.jsx("p",{className:"font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]",children:d.jsx(Rt,{words:zx,progress:Math.max((o-.25)/.65,0),cursorColor:"bg-stone-200"})}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-green pt-1 font-bold tracking-wider",children:d.jsx(Rt,{words:Gx,progress:Math.max((o-.6)/.4,0),cursorColor:"bg-emerald-300"})})]}),d.jsxs("div",{className:"chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200",style:{opacity:l>.05?1:0,clipPath:`inset(0 ${(1-Math.min(l*2,1))*100}% 0 0)`},children:[d.jsx("div",{className:"font-chalk-sketch-title text-sm sm:text-base chalk-yellow mb-1 flex items-center gap-1.5",children:d.jsx(Rt,{words:Vx,progress:Math.min(l*1.5,1),cursorColor:"bg-amber-300"})}),d.jsx("p",{className:"font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]",children:d.jsx(Rt,{words:Hx,progress:Math.max((l-.25)/.65,0),cursorColor:"bg-stone-200"})}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-yellow pt-1 font-bold tracking-wider",children:d.jsx(Rt,{words:Wx,progress:Math.max((l-.6)/.4,0),cursorColor:"bg-amber-300"})})]})]}),d.jsx("div",{className:"pt-2 border-t border-dashed border-stone-400/35 transition-opacity duration-200",style:{opacity:c>.05?1:0,clipPath:`inset(0 ${(1-Math.min(c*1.5,1))*100}% 0 0)`},children:d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[d.jsxs("div",{className:"flex flex-wrap items-center gap-3 sm:gap-6 font-chalk-detective text-base sm:text-lg md:text-xl",children:[d.jsxs("div",{className:"flex items-center gap-1.5 chalk-white",children:[d.jsx(ia,{className:"w-4 h-4 text-stone-300 transition-opacity duration-150",style:{opacity:c>.08?1:0}}),d.jsx(Rt,{words:Xx,progress:c,cursorColor:"bg-stone-200"})]}),d.jsxs("div",{className:"flex items-center gap-1.5 chalk-yellow font-bold",children:[d.jsx(Zl,{className:"w-4 h-4 text-amber-300 transition-opacity duration-150",style:{opacity:c>.35?1:0}}),d.jsx(Rt,{words:jx,progress:c,cursorColor:"bg-amber-300"})]}),d.jsxs("div",{className:"flex items-center gap-1.5 chalk-green",children:[d.jsx(nu,{className:"w-4 h-4 text-emerald-300 transition-opacity duration-150",style:{opacity:c>.65?1:0}}),d.jsx(Rt,{words:Yx,progress:c,cursorColor:"bg-emerald-300"})]})]}),d.jsx("div",{className:"transition-all duration-300",style:{opacity:h>.05?1:0,pointerEvents:h>.4?"auto":"none"},children:d.jsx("button",{type:"button",onClick:p,className:"chalk-btn-handdrawn font-chalk-sketch-title px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm chalk-red flex items-center gap-2 cursor-pointer select-none",children:d.jsx(Rt,{words:qx,progress:h,cursorColor:"bg-red-400"})})})]})})]})})}),ql=ue.memo(function({isActive:e=!1,intensity:t=1,reducedMotion:n=!1}){const[s,a]=ue.useState(0);if(ue.useEffect(()=>{if(!e){a(0);return}if(n){a(4);return}const l=[setTimeout(()=>a(1),30),setTimeout(()=>a(2),90),setTimeout(()=>a(3),180),setTimeout(()=>a(4),320),setTimeout(()=>a(0),480)];return()=>l.forEach(clearTimeout)},[e,n]),!e&&s===0)return null;let r="none",o="none";if(!n)switch(s){case 1:r=`translate3d(${-24*t}px, ${-6*t}px, 0) rotate(-2.8deg)`,o="brightness(1.5) contrast(1.3) blur(2px)";break;case 2:r=`translate3d(${18*t}px, ${4*t}px, 0) rotate(1.9deg)`,o="brightness(1.3) contrast(1.15) blur(1px)";break;case 3:r=`translate3d(${-8*t}px, ${-2*t}px, 0) rotate(-0.8deg)`,o="brightness(1.1) contrast(1.05)";break;case 4:r=`translate3d(${2*t}px, 0px, 0) rotate(0.2deg)`,o="none";break;default:r="none",o="none"}return d.jsx("div",{className:"pointer-events-none absolute inset-0 z-40 transition-transform ease-out",style:{transform:r,filter:o,transitionDuration:s===1?"40ms":"120ms"},children:s>0&&s<=2&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"absolute inset-0 opacity-40 mix-blend-screen pointer-events-none",style:{transform:`translate3d(${6*t}px, 0, 0)`,background:"rgba(255, 0, 40, 0.15)"}}),d.jsx("div",{className:"absolute inset-0 opacity-35 mix-blend-screen pointer-events-none",style:{transform:`translate3d(${-6*t}px, 0, 0)`,background:"rgba(0, 200, 255, 0.12)"}})]})})}),$x=ue.memo(function({scrollProgress:e=0,isImpactActive:t=!1,gateProximity:n=0}){const s=Math.min(Math.max((e-.68)/.1,0),1),a=1-s,o=Math.min(e*1.2,.55)*(1-s*.65),l=Math.min(.1+e*.18,.28)*(1-s*.85);return d.jsxs("div",{className:"pointer-events-none absolute inset-0 z-19 overflow-hidden select-none",children:[d.jsx("div",{className:"absolute inset-0 transition-opacity duration-300",style:{background:"radial-gradient(ellipse at 50% 50%, rgba(4,5,7,0.05) 35%, rgba(2,2,3,0.55) 75%, rgba(0,0,0,0.85) 100%)",opacity:o}}),d.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none transition-opacity duration-300 will-change-opacity transform-gpu",style:{background:"linear-gradient(to top, rgba(10,14,20,0.7) 0%, rgba(10,14,20,0.5) 25%, rgba(12,18,24,0.25) 50%, rgba(12,18,24,0.08) 75%, transparent 100%)",opacity:l}}),d.jsx("div",{className:"absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none",style:{backgroundImage:"radial-gradient(rgba(255,255,255,0.12) 1px, transparent 0)",backgroundSize:"3px 3px"}}),d.jsx("div",{className:`absolute inset-0 transition-opacity duration-300 pointer-events-none ${t?"opacity-75":"opacity-0"}`,style:{background:"radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(208,24,32,0.35) 85%, rgba(180,10,20,0.55) 100%)",mixBlendMode:"screen",opacity:t?.75*a:0}})]})});function Kx(i,e){return i<.09-(e==="scene-01"?-.005:.005)?"scene-01":i<.19-(e==="scene-02"?-.005:.005)?"scene-02":i<.36-(e==="scene-03"?-.005:.005)?"scene-03":i<.63-(e==="scene-06"?-.005:.005)?"scene-06":i<.77-(e==="scene-07"?-.005:.005)?"scene-07":i<.86-(e==="scene-08"?-.005:.005)?"scene-08":i<.922-(e==="scene-09"?-.005:.005)?"scene-09":i<.936-(e==="scene-10"?-.005:.005)?"scene-10":i<.944-(e==="scene-10-map"?-.005:.005)?"scene-10-map":i<.954-(e==="scene-11"?-.005:.005)?"scene-11":i<.963-(e==="scene-12"?-.005:.005)?"scene-12":i<.971-(e==="scene-13"?-.005:.005)?"scene-13":i<.978-(e==="scene-14"?-.005:.005)?"scene-14":i<.983-(e==="scene-15"?-.005:.005)?"scene-15":i<.987-(e==="scene-16"?-.005:.005)?"scene-16":"scene-17"}const Zx=[{num:"01",title:"PPT REGISTRATION",badge:"PHASE 01",desc:"Teams register & submit their initial idea/proposal PPT within the registration period."},{num:"02",title:"PPT SUBMISSION DEADLINE",badge:"PHASE 02",desc:"All teams must submit their PPT before the announced deadline. Late submissions not considered."},{num:"03",title:"PPT SHORTLISTING",badge:"PHASE 03",desc:"Submitted PPTs reviewed by organizing/judging panel. Shortlisted teams announced via official channels."},{num:"04",title:"CONFIRMATION & PAYMENT",badge:"PHASE 04",desc:"Shortlisted teams confirm participation & complete registration. ₹49 per team."},{num:"05",title:"36-HOUR HACKATHON",badge:"PHASE 05",desc:"Confirmed teams participate in the main 36-hour online hackathon & build their solution."},{num:"06",title:"FINAL SUBMISSION DEADLINE",badge:"PHASE 06",desc:"Teams submit final project, source code, demo/presentation & required details before deadline."},{num:"07",title:"EVALUATION & RESULTS",badge:"PHASE 07",desc:"Final submissions evaluated by judges; winners declared with ₹50,000+ bounty distribution."}],ni=[{p:0,x:.5,y:.5,s:1,rule:0},{p:.08,x:.227,y:.408,s:2.1,rule:1},{p:.17,x:.227,y:.408,s:2.1,rule:1},{p:.24,x:.407,y:.408,s:2.1,rule:2},{p:.33,x:.407,y:.408,s:2.1,rule:2},{p:.4,x:.581,y:.408,s:2.1,rule:3},{p:.48,x:.581,y:.408,s:2.1,rule:3},{p:.55,x:.764,y:.408,s:2.1,rule:4},{p:.62,x:.764,y:.408,s:2.1,rule:4},{p:.68,x:.5,y:.544,s:1.78,rule:0},{p:.74,x:.268,y:.68,s:2.1,rule:5},{p:.81,x:.268,y:.68,s:2.1,rule:5},{p:.87,x:.505,y:.68,s:2.1,rule:6},{p:.92,x:.505,y:.68,s:2.1,rule:6},{p:.96,x:.732,y:.68,s:2.1,rule:7},{p:1,x:.5,y:.5,s:1,rule:0}],Jx=ue.memo(function({scrollProgress:e=0}){const[t,n]=ue.useState(!1),[s,a]=ue.useState(!1),[r,o]=ue.useState(!1),[l,c]=ue.useState(!1),[h,m]=ue.useState(!1),u=ue.useRef(null),p=ue.useRef(!1);ue.useEffect(()=>{Lt.setInitialScene("scene-01");const Oe=()=>{p.current=!0;const lt=u.current||"scene-01";Lt.onUserScrollActivity(lt)};return window.addEventListener("scroll",Oe,{passive:!0}),window.addEventListener("wheel",Oe,{passive:!0}),window.addEventListener("touchmove",Oe,{passive:!0}),()=>{window.removeEventListener("scroll",Oe),window.removeEventListener("wheel",Oe),window.removeEventListener("touchmove",Oe),Lt.stopActiveClip()}},[]),ue.useEffect(()=>{const Oe=u.current||"scene-01",lt=Kx(e,Oe);lt!==u.current&&(u.current=lt,Lt.onSceneActive(lt)),e>.001&&(p.current=!0,Lt.onUserScrollActivity(lt))},[e]);const v=Tt[0],M=Tt[1],x=Tt[2],f=Tt[3],w=Tt[4],I=Tt[5],S=Tt[6],E=Tt[7],y=Tt[8],R=Tt[9],_=Tt[10],T=Tt[11],C=Tt[12],L=Tt[13],F=Tt[14],V=Tt[15];ue.useEffect(()=>{if(typeof window<"u"&&window.matchMedia){const Oe=window.matchMedia("(prefers-reduced-motion: reduce)");n(Oe.matches);const lt=Kn=>n(Kn.matches);if(Oe.addEventListener)return Oe.addEventListener("change",lt),()=>Oe.removeEventListener("change",lt)}},[]),ue.useEffect(()=>{[M?.image,x?.image,f?.image,w?.image,I?.image,S?.image,E?.image,y?.image,R?.image,_?.image,T?.image,C?.image,L?.image,F?.image,V?.image].forEach(Oe=>{if(Oe){const lt=new Image;lt.src=Oe}})},[M?.image,x?.image,f?.image,w?.image,I?.image,S?.image,E?.image,y?.image,R?.image,_?.image,T?.image,C?.image,L?.image,F?.image,V?.image]);const D=ue.useRef(new Set);ue.useEffect(()=>{[{id:"gate-1",min:.082,max:.118,resetMin:.065,resetMax:.135,heavy:!1},{id:"gate-2",min:.205,max:.235,resetMin:.185,resetMax:.255,heavy:!1},{id:"gate-3",min:.625,max:.655,resetMin:.6,resetMax:.675,heavy:!0},{id:"gate-4",min:.755,max:.785,resetMin:.73,resetMax:.81,heavy:!1},{id:"gate-5",min:.912,max:.938,resetMin:.885,resetMax:.955,heavy:!0},{id:"gate-6",min:.962,max:.982,resetMin:.945,resetMax:.99,heavy:!1}].forEach(lt=>{const Kn=e>=lt.min&&e<=lt.max,Ca=e<lt.resetMin||e>lt.resetMax;Kn&&!D.current.has(lt.id)?(D.current.add(lt.id),lt.id==="gate-5"?(ct.playGateOpen(.18),o(!0),setTimeout(()=>o(!1),560)):lt.heavy?(o(!0),setTimeout(()=>o(!1),560)):(a(!0),setTimeout(()=>a(!1),380))):Ca&&D.current.has(lt.id)&&(D.current.delete(lt.id),lt.id==="gate-5"&&ct.fadeGateAudio(400))})},[e]);const z=ue.useRef(!1);ue.useEffect(()=>{if(!p.current)return;const Oe=z.current,lt=e>=.188&&e<=.308,Kn=e<.178||e>.316;!Oe&&lt?(z.current=!0,ct.playDossierTransition(.2)):Oe&&Kn&&(z.current=!1,ct.playDossierTransition(.2))},[e]);const j=e>.001&&e<.999,Y=e*Math.PI*64,ie=Math.abs(Math.sin(Y)),W=j?ie*5.5-2.75:0,Z=j?Math.sin(Y*.5)*4.5:0,ee=j?Math.sin(Y*.5)*.4:0,be=ue.useRef(e);ue.useEffect(()=>{const Oe=Math.abs(e-be.current);be.current=e,j&&Oe>15e-5&&ct.startFootsteps(.32)},[e,j]);const we=ue.useRef(!1),it=ue.useRef(!1),Ve=ue.useRef(!1),Xe=ue.useRef(!1),$=ue.useRef(!1);ue.useEffect(()=>{p.current&&(e>=.976&&e<=.983?we.current||(we.current=!0,ct.playMovementPan(.32)):(e<.972||e>.986)&&(we.current=!1),e>=.982&&e<=.986?it.current||(it.current=!0,ct.playMovementSwish(.24)):(e<.978||e>.99)&&(it.current=!1),e>=.986&&e<=.989?Ve.current||(Ve.current=!0,ct.playMovementSwish(.26)):(e<.982||e>.995)&&(Ve.current=!1),e>=.635&&e<=.72?Xe.current||(Xe.current=!0,ct.playMovementPan(.26)):(e<.62||e>.74)&&(Xe.current=!1),e>=.95&&e<=.965?$.current||($.current=!0,ct.playMovementSwish(.26)):(e<.944||e>.97)&&($.current=!1))},[e]);const te=Math.min(Math.max(e/.12,0),1),ve=Ex(te,t,s),Ie=Math.min(Math.max((e-.09)/.03,0),1),ge=1-Ie,Be=Math.min(Math.max((e-.09)/.13,0),1),xt=1+Math.pow(Be,1.35)*1.85,ze=Math.min(Math.max((e-.19)/.03,0),1),je=Ie*(1-ze),Ze=Math.min(Math.max((e-.14)/.07,0),1),Le=Ze>.06?Math.pow(Ze,1.35)*115:0,dt=Ze>.06&&e<.22?{WebkitMaskImage:`radial-gradient(ellipse 55% 65% at 47.5% 50%, transparent ${Math.min(Le*.45,75)}%, rgba(0,0,0,0.6) ${Math.min(Le*.8,90)}%, black ${Math.min(Le+18,100)}%)`,maskImage:`radial-gradient(ellipse 55% 65% at 47.5% 50%, transparent ${Math.min(Le*.45,75)}%, rgba(0,0,0,0.6) ${Math.min(Le*.8,90)}%, black ${Math.min(Le+18,100)}%)`}:{},_t=Math.min(Math.max((e-.35)/.03,0),1),wt=Math.min(Ze*1.25,1)*(1-_t),ut=Math.min(Math.max((e-.19)/.11,0),1),gt=.86+Ze*.14+Math.pow(ut,1.15)*.55,U=-ut*18,Mt=Math.min(Math.max((e-.3)/.06,0),1),Ye=Math.pow(Mt,1.3),A=gt+Ye*.55,g=-Ye*370,O=U-Ye*35,H=-Ye*14,q=-Ye*1.8,se=Math.min(Math.max((e-.35)/.03,0),1),ae=Math.min(Math.max((e-.61)/.07,0),1),K=Math.pow(ae,1.35),Q=ae*Math.PI*6,le=Math.abs(Math.sin(Q)),Ee=ae>.02&&ae<.98,de=Ee?le*16-8:0,re=Ee?Math.sin(Q*.5)*12:0,Ae=Ee?Math.sin(Q*.5)*1.6:0,Ce=ae*16,De=1-K*.4,P=Ce+de,ce=re,J=Math.min(Math.max((e-.64)/.03,0),1),oe=se*(1-J),me=Math.min(Math.max((e-.63)/.03,0),1),ne=Math.min(Math.max((e-.76)/.025,0),1),Re=me*(1-ne),ye=1.32-K*.32,Fe=Math.min(Math.max((e-.67)/.08,0),1),Je=Math.pow(Fe,1.25),Xt=ye+Je*.95,zt=Fe*Math.PI*18,pa=Math.abs(Math.sin(zt)),ma=Fe>0&&Fe<1?pa*12-6:0,ps=Fe>0&&Fe<1?Math.sin(zt*.5)*8:0,Wi=Fe>0?ps:re,ga=Fe>0?ma:Ce+de,ms=Fe>0?Math.sin(zt*.5)*1.2:Ae,gs=Math.min(Math.max((e-.76)/.02,0),1),yn=Math.min(Math.max((e-.85)/.02,0),1),hi=gs*(1-yn),Kt=Math.min(Math.max((e-.77)/.08,0),1),xs=Math.pow(Kt,1.35),Un=Kt*Math.PI*26,_s=Math.abs(Math.sin(Un)),fi=Kt>0?_s*18-9:0,vs=Kt>0?Math.sin(Un*.5)*14:0,bs=Kt>0?Math.sin(Un*.5)*2:0,xa=1+xs*2.5,_a=Math.min(Math.max((e-.85)/.02,0),1),$n=Math.min(Math.max((e-.86)/.06,0),1),va=Math.sin($n*Math.PI*16)*7,Ss=Math.sin($n*Math.PI*36)*5,b=1+Math.pow($n,1.1)*.14,N=Math.min(Math.max((e-.915)/.013,0),1),X=Math.pow(N,2.2),B=Math.min(Math.max(Math.round($n*80+N*20),10),100),k=X*105,fe=b+X*.16,_e=Math.min(Math.max((e-.92)/.009,0),1),he=_a*(1-_e),Se=Math.min(Math.max((e-.916)/.006,0),1),Te=Math.min(Math.max((e-.93)/.006,0),1),Ue=Se*(1-Te),Ge=Math.min(Math.max((e-.916)/.008,0),1),Qe=-(1-Math.pow(Ge,1.4))*20,tt=Math.min(Math.max((e-.918)/.014,0),1),ot=Math.pow(tt,1.25),nt=tt*Math.PI*14,yt=Math.abs(Math.sin(nt)),xe=tt>0&&tt<1?yt*9-4.5:0,At=tt>0&&tt<1?Math.sin(nt*.5)*7:0,qe=tt>0&&tt<1?Math.sin(nt*.5)*.6:0,Gt=Math.min(Math.max((e-.925)/.008,0),1),It=Math.pow(Gt,1.35),dn=It*80,Fn=-It*6,st=-It*4.5,ft=1+ot*.35+It*.1,un=Qe+At+dn,rt=xe+Fn,hn=qe-It*.6,On=Math.min(Math.max((e-.93)/.006,0),1),Ms=Math.min(Math.max((e-.944)/.006,0),1),yo=On*(1-Ms),Vc=Math.min(Math.max((e-.93)/.006,0),1),Eo=Math.pow(Vc,.85),Hc=Math.min(Math.max((e-.942)/.006,0),1),Wc=Math.pow(Hc,1.4),Xc=(1-Eo)*40+Wc*50,jc=Math.sin((e-.93)*80)*2.5,Yc=.96+Eo*.08+(e-.934)*.3,To=Math.min(Math.max((e-.934)/.008,0),1),qc=Math.min(Math.max((e-.94)/.005,0),1),$c=Math.min(Math.max((e-.952)/.005,0),1),wo=qc*(1-$c),ys=Math.min(Math.max((e-.94)/.014,0),1),Kc=Math.pow(ys,1.25),Ao=ys*Math.PI*10,Zc=ys>0?Math.abs(Math.sin(Ao))*7-3.5:0,Jc=ys>0?Math.sin(Ao*.5)*5:0,Qc=1+Kc*.48,ed=Zc*.5,td=Jc,nd=Math.min(Math.max((e-.95)/.005,0),1),id=Math.min(Math.max((e-.961)/.005,0),1),Ro=nd*(1-id),sd=Math.min(Math.max((e-.95)/.011,0),1),ba=Math.pow(sd,1.25),ad=1+ba*.2,rd=ba*12,od=-ba*8,ld=Math.min(Math.max((e-.96)/.005,0),1),cd=Math.min(Math.max((e-.969)/.005,0),1),Co=ld*(1-cd),dd=Math.min(Math.max((e-.96)/.009,0),1),No=Math.pow(dd,.9),ud=.98+No*.05,hd=(1-No)*35,Io=Math.min(Math.max((e-.96)/.004,0),1),fd=Math.min(Math.max((e-.968)/.004,0),1),pd=Math.min(Math.max((e-.968)/.005,0),1),Do=Math.pow(pd,.95),md=1+Do*.04,gd=(1-Do)*20,pi=e*Math.PI*75,xd=Math.sin(pi*1.7)*2.2+Math.cos(pi*3.1)*1.3,_d=Math.cos(pi*1.3)*2.6+Math.sin(pi*2.5)*1.5,vd=Math.sin(pi*.9)*.55+Math.cos(pi*1.8)*.25,Es=Math.min(Math.max((e-.976)/.006,0),1),Zt=.5-.5*Math.cos(Es*Math.PI),Sa=Math.sin(Es*Math.PI),Po=Sa*3.8,Lo=Sa*.55,bd=Zt*240,Sd=-Zt*28,Md=-Zt*26,yd=Zt*20,Ed=md*(1-Zt*.14),Td=gd+bd,wd=Sd,Uo=Zt*5,Fo=fd*Math.max(1-Math.pow(Es,1.3),0),Oo=Math.min(Math.max((e-.968)/.003,0),1),Ad=Math.min(Math.max((e-.976)/.0025,0),1),Ma=Math.min(Math.max((e-.979)/.0032,0),1),ya=Math.pow(Ma,1.35),Rd=1.18+ya*.38,Cd=6-Zt*16,Nd=6-Zt*12,Id=-2.5+Zt*2.5,Bo=Sa*-1.5,Dd=Cd-ya*14,Pd=-ya*18,ko=Math.sin(Ma*Math.PI)*4.8,zo=Math.sin(Ma*Math.PI)*.7,Ld=Math.min(Math.max((e-.9822)/.0018,0),1),Go=Ad*(1-Ld),Ea=e*Math.PI*44,Ud=Math.sin(Ea)*2,Fd=Math.cos(Ea*.5)*1.8,Od=Math.sin(Ea*.5)*.22,Ts=1+Math.sin(e*Math.PI*32)*.06,Bd=Math.min(Math.max((e-.982)/.002,0),1),kd=.5-.5*Math.cos(Bd*Math.PI),zd=Math.min(Math.max((e-.986)/.002,0),1),Gd=.5-.5*Math.cos(zd*Math.PI),Vo=kd*(1-Gd),Vd=Math.min(Math.max((e-.9855)/.002,0),1),Ho=.5-.5*Math.cos(Vd*Math.PI),Jt=Math.min(Math.max((e-.9875)/.012,0),1);let fn=ni[0],mi=ni[1];for(let Oe=0;Oe<ni.length-1;Oe++)if(Jt>=ni[Oe].p&&Jt<=ni[Oe+1].p){fn=ni[Oe],mi=ni[Oe+1];break}const Hd=Math.max(mi.p-fn.p,1e-4),Wo=Math.min(Math.max((Jt-fn.p)/Hd,0),1),Ta=.5-.5*Math.cos(Wo*Math.PI),Wd=fn.x+(mi.x-fn.x)*Ta,Xd=fn.y+(mi.y-fn.y)*Ta,gi=t?1:fn.s+(mi.s-fn.s)*Ta,Bn=Wo>.45?mi.rule:fn.rule,En=Bn>0?Zx[Bn-1]:null,jd=t?0:-(Wd-.5)*gi*100,Yd=t?0:-(Xd-.5)*gi*100,wa=ue.useRef(0),Aa=ue.useRef(!1),Ra=ue.useRef(!1);ue.useEffect(()=>{p.current&&(Bn>0&&Bn!==wa.current?(wa.current=Bn,ct.playRuleFocusLock(Bn,.22)):Bn===0&&(wa.current=0),Jt>=.05&&Jt<=.12?Ra.current||(Ra.current=!0,ct.playMovementPan(.24)):(Jt<.02||Jt>.18)&&(Ra.current=!1),Jt>=.63&&Jt<=.72?Aa.current||(Aa.current=!0,ct.playMovementSwish(.3)):(Jt<.58||Jt>.76)&&(Aa.current=!1))},[Bn,Jt]);const Xo=()=>{const Oe=document.querySelector("[data-register-trigger]");Oe?Oe.click():window.location.hash="register"},jo=()=>{m(!0);const Oe=encodeURIComponent("BUILDX: The Occult Hackathon 2026 // Code-A-Nova"),lt=encodeURIComponent("36-hour occult coding hackathon organized by Code-A-Nova! Decipher paranormal anomalies, build cutting-edge software, and compete for ₹50,000+ in bounties. Venue: Online."),Kn=encodeURIComponent("Online // Organized by Code-A-Nova"),Ca=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${Oe}&dates=20261101T033000Z/20261102T153000Z&details=${lt}&location=${Kn}`;window.open(Ca,"_blank","noopener,noreferrer");try{const qd=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Code-A-Nova//BUILDX Hackathon//EN","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT","UID:buildx-hackathon-2026@code-a-nova.com","DTSTAMP:20260910T000000Z","DTSTART:20261101T033000Z","DTEND:20261102T153000Z","SUMMARY:BUILDX: The Occult Hackathon 2026 // Code-A-Nova","DESCRIPTION:36-hour occult coding hackathon organized by Code-A-Nova. Solve paranormal anomalies, build breakthrough software, and compete for ₹50,000+ in bounties. Venue: Online.","LOCATION:Online // Organized by Code-A-Nova","STATUS:CONFIRMED","END:VEVENT","END:VCALENDAR"].join(`\r
`),$d=new Blob([qd],{type:"text/calendar;charset=utf-8"}),Xi=document.createElement("a");Xi.href=window.URL.createObjectURL($d),Xi.setAttribute("download","BUILDX_Hackathon_Nov_1-2_2026.ics"),document.body.appendChild(Xi),Xi.click(),document.body.removeChild(Xi)}catch{}};return d.jsxs("div",{className:`relative w-full h-full overflow-hidden bg-black select-none will-change-transform ${r?"gate-breach-jhatka-active":s?"paranormal-jhatka-active":""}`,children:[ge>.005&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:ge,zIndex:20},children:d.jsx(wx,{imageSrc:v.image,sceneId:v.id,scrollProgress:e,cameraTransform:ve,onRevealComplete:()=>c(!0)})}),je>.005&&e<.25&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-transparent transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:je,zIndex:16,...dt},children:d.jsx("div",{className:"w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${Z}px, ${W}px, 0) scale(${xt}) rotate(${ee}deg)`,transformOrigin:"47.5% 50%"},children:d.jsx("img",{src:M.image,alt:"Open Iron Gate Vault Corridor",className:"w-full h-full object-cover object-center pointer-events-none select-none",loading:"eager",decoding:"async"})})}),wt>.005&&e<.4&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:wt,zIndex:e>=.3?18:14,perspective:"1200px"},children:d.jsx("div",{className:"w-full h-full will-change-transform transform-gpu",style:{transform:`perspective(1200px) translate3d(${g+Z}px, ${O+W}px, 0) scale(${A}) rotateY(${H}deg) rotateZ(${q+ee}deg)`,transformOrigin:"50% 48%"},children:d.jsx("img",{src:x.image,alt:"Investigation Room with Evidence Board and Desk",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.05]",loading:"eager",decoding:"async"})})}),oe>.005&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:oe,zIndex:22},children:d.jsx("div",{className:"w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${ce}px, ${P}px, 0) scale(${De}) rotate(${Ae*.4}deg)`,transformOrigin:"50% 50%"},children:d.jsx("img",{src:f.image,alt:"Blackboard Front Crime Board",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.05]",loading:"eager",decoding:"async"})})}),Re>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:Re,zIndex:23},children:[d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${Wi}px, ${ga}px, 0) scale(${Xt}) rotate(${ms}deg)`,transformOrigin:e>=.67?"67% 68%":"24% 28%"},children:[d.jsx("img",{src:w.image,alt:"Subterranean Trapdoor Hatch Room View",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.06]",loading:"eager",decoding:"async"}),d.jsx(Yl,{scrollProgress:e,variant:"mini-angled"}),Fe>.1&&e<.77&&d.jsx("div",{className:"absolute pointer-events-none transition-opacity duration-300",style:{left:"67%",top:"68%",transform:"translate(-50%, -50%)",opacity:Math.min(Fe*1.5,1)*(1-Math.min(Math.max((e-.75)/.02,0),1))},children:d.jsxs("div",{className:"relative flex items-center justify-center",children:[d.jsx("div",{className:"w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-emerald-400/80 animate-ping opacity-75"}),d.jsx("div",{className:"absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-dashed border-amber-400/60 animate-spin",style:{animationDuration:"8s"}}),d.jsx("div",{className:"absolute px-2 py-0.5 bg-black/80 border border-emerald-400 text-[10px] sm:text-xs text-emerald-300 font-mono tracking-widest whitespace-nowrap -bottom-6",children:"SUBTERRANEAN BREACH // ENTER"})]})})]}),Fe>.05&&d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-150",style:{opacity:Math.min(Fe*1.4,.85),background:"radial-gradient(ellipse at 67% 68%, rgba(16,185,129,0.25) 0%, transparent 60%), radial-gradient(circle at 67% 68%, transparent 35%, rgba(0,0,0,0.85) 100%)"}})]}),hi>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:hi,zIndex:25},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${vs}px, ${fi}px, 0) scale(${xa}) rotate(${bs}deg)`,transformOrigin:"60% 46%"},children:d.jsx("img",{src:I.image,alt:"The Ghost on Subterranean Staircase at Iron Gate",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.08]",loading:"eager",decoding:"async"})}),Kt>.7&&d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-color-dodge transition-opacity duration-100",style:{opacity:Math.min((Kt-.7)/.25,1)*.9,background:"radial-gradient(circle at 60% 46%, rgba(220,38,38,0.4) 0%, rgba(245,158,11,0.2) 40%, rgba(0,0,0,0.9) 100%)"}}),d.jsx("div",{className:"absolute top-20 left-6 sm:left-12 px-3 py-1 bg-red-950/80 border border-red-500/80 rounded-xs font-mono text-[11px] sm:text-xs text-red-300 tracking-widest pointer-events-none transition-opacity duration-200",style:{opacity:Kt>.1&&Kt<.85?1:0},children:"⚠️ ENTITY PROXIMITY CRITICAL // MERGING VISION..."})]}),he>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:he,zIndex:26,perspective:"1000px"},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${Ss+k}px, ${va}px, 0) scale(${fe})`,transformOrigin:"85% 50%"},children:d.jsx("img",{src:S.image,alt:"Ghost First-Person Eye View Gripping Vault Gate",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.10] contrast-[1.08]",loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-multiply transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 50%, transparent 45%, rgba(80, 0, 0, 0.4) 75%, rgba(10, 0, 0, 0.95) 100%)"}}),d.jsx("div",{className:"absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 text-center pointer-events-none transition-opacity duration-300",style:{opacity:$n>.08&&N<.7?1:0},children:d.jsxs("div",{className:"inline-block w-full max-w-md p-3 sm:p-3.5 rounded-xs bg-black/90 border border-red-500/90 shadow-[0_0_30px_rgba(220,38,38,0.55)] backdrop-blur-md",children:[d.jsxs("div",{className:"font-mono text-xs sm:text-sm text-red-400 font-bold tracking-widest flex items-center justify-center gap-2",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"}),d.jsx("span",{children:N>.15?"💥 OPENING THE DOOR // BREAKING THE GATE":"🔓 UNLOCKING THE DOOR // OPENING THE GATE"})]}),d.jsx("div",{className:"w-full bg-stone-900 border border-red-900/60 rounded-full h-1.5 overflow-hidden my-2",children:d.jsx("div",{className:"bg-gradient-to-r from-red-600 via-amber-500 to-emerald-400 h-full transition-all duration-75",style:{width:`${B}%`}})}),d.jsxs("div",{className:"flex justify-between items-center text-[10px] sm:text-xs font-mono text-stone-400 px-1",children:[d.jsx("span",{className:"text-red-300 font-semibold",children:N>.15?"FORCING HEAVY GATE OPEN...":"UNLOCKING ANCIENT LATCH..."}),d.jsxs("span",{className:"font-bold text-amber-400",children:[B,"%"]})]}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-yellow mt-1.5",children:N>.15?"Gate opening! Stepping forward into the inner crypt...":"Unlocking the door... Scroll down to push the gate open."})]})})]}),(r||N>.05&&N<.95)&&d.jsx("div",{className:"absolute inset-0 pointer-events-none z-35 mix-blend-screen transition-opacity duration-75",style:{background:"radial-gradient(ellipse at 85% 50%, rgba(255, 235, 180, 0.85) 0%, rgba(220, 38, 38, 0.5) 35%, transparent 75%)",opacity:r?.95:Math.sin(N*Math.PI)}}),Ue>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-200 will-change-transform transform-gpu",style:{opacity:Ue,zIndex:27,perspective:"1000px"},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`perspective(1000px) translate3d(${un}px, ${rt}px, 0) scale(${ft}) rotateY(${st}deg) rotateZ(${hn}deg)`,transformOrigin:"50% 0%"},children:d.jsx("img",{src:E.image,alt:"Crypt Cathedral with Red Carpet and Candles",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",style:{transform:"scaleX(-1)"},loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(ellipse at 50% 60%, rgba(245, 158, 11, 0.16) 0%, transparent 65%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.8) 100%)"}}),tt>.08&&tt<.95&&d.jsx("div",{className:"absolute top-20 left-6 sm:left-12 px-3 py-1 bg-black/85 border border-amber-500/70 rounded-xs font-mono text-[11px] sm:text-xs text-amber-300 tracking-widest pointer-events-none transition-opacity duration-200",children:"⚡ SANCTUM ENTERED // ADVANCING TOWARDS ALTAR"})]}),yo>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-200 will-change-transform transform-gpu",style:{opacity:yo,zIndex:28,perspective:"1000px"},children:[d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu flex items-center justify-center",style:{transform:`translate3d(0, ${Xc+jc}px, 0) scale(${Yc})`,transformOrigin:"50% 0%"},children:[d.jsx("img",{src:y.image,alt:"Sanctum Blueprint Held in Hands",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.06]",loading:"eager",decoding:"async"}),d.jsxs("div",{className:"absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 flex flex-col items-center gap-3",style:{opacity:To>.12?1:0,transform:`translate(-50%, calc(-50% + ${To>.12?0:18}px))`},children:[d.jsxs("div",{className:"relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center",children:[d.jsx("div",{className:"absolute inset-0 border-2 border-amber-400/50 rounded-full animate-ping opacity-35"}),d.jsx("div",{className:"absolute inset-2 border border-dashed border-red-500/80 rounded-full animate-spin [animation-duration:9s]"}),d.jsx("div",{className:"absolute inset-6 border border-amber-400/60 rounded-full"}),d.jsx("div",{className:"w-3.5 h-3.5 bg-red-500 rounded-full shadow-[0_0_16px_#ef4444]"})]}),d.jsxs("div",{className:"px-4 sm:px-5 py-2 sm:py-2.5 bg-black/92 border border-amber-500/80 rounded-xs shadow-[0_0_35px_rgba(245,158,11,0.45)] backdrop-blur-md text-center max-w-sm",children:[d.jsxs("div",{className:"font-mono text-[11px] sm:text-xs text-amber-300 font-bold tracking-widest flex items-center justify-center gap-2",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),d.jsx("span",{children:"LOCATION VERIFIED // 100% BLUEPRINT MATCH"})]}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm text-stone-200 mt-1",children:'"The chamber layout aligns. The sacrificial altar lies directly ahead."'})]})]})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 65%, rgba(245, 158, 11, 0.20) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)"}})]}),wo>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu",style:{opacity:wo,zIndex:29},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${td}px, ${ed}px, 0) scale(${Qc})`,transformOrigin:"50% 0%"},children:d.jsx("img",{src:R.image,alt:"The Sacrificial Altar with Body in White Dress",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 45%, rgba(245, 158, 11, 0.15) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 35%, rgba(0,0,0,0.85) 100%)"}})]}),Ro>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu",style:{opacity:Ro,zIndex:30},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${od}px, ${rd}px, 0) scale(${ad})`,transformOrigin:"50% 0%"},children:d.jsx("img",{src:_.image,alt:"Reaching for Scroll in Hand on Altar",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 45%, rgba(245, 158, 11, 0.15) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 35%, rgba(0,0,0,0.85) 100%)"}})]}),Co>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu",style:{opacity:Co,zIndex:31},children:[d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu flex items-center justify-center",style:{transform:`translate3d(0, ${hd}px, 0) scale(${ud})`,transformOrigin:"50% 0%"},children:[d.jsx("img",{src:T.image,alt:"Unrolling the Sanctum Scroll",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",loading:"eager",decoding:"async"}),d.jsxs("div",{className:"absolute bottom-[6%] sm:bottom-[7%] md:bottom-[8%] left-1/2 w-[86%] max-w-md sm:max-w-lg md:max-w-xl px-3 py-1 flex flex-col items-center text-center select-none pointer-events-auto",style:{opacity:Io,transform:`translate3d(-50%, 0, 0) perspective(900px) rotateX(8deg) rotateY(-1.5deg) rotateZ(2.2deg) scale(${.96+Io*.04})`,transformOrigin:"50% 50%",transition:"opacity 0.25s ease-out, transform 0.25s ease-out"},children:[d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm text-[#0a0a0a] font-bold tracking-widest uppercase leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]",children:"✦ OFFICIAL SANCTUM PROCLAMATION ✦"}),d.jsx("h2",{className:"font-ink-cursive text-3xl sm:text-5xl md:text-6xl text-[#8b0000] font-black tracking-tight leading-none my-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]",children:"Save The Date"}),d.jsx("div",{className:"font-ink-cursive text-sm sm:text-lg md:text-xl text-[#0a0a0a] font-bold leading-tight my-0.5",children:"BUILDX: The Occult Innovation Hackathon"}),d.jsx("div",{className:"w-24 sm:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#8b0000]/60 to-transparent my-0.5"}),d.jsxs("div",{className:"my-0.5",children:[d.jsx("div",{className:"font-ink-cursive text-2xl sm:text-3xl md:text-4xl text-[#8b0000] font-black tracking-normal leading-tight whitespace-nowrap drop-shadow-[0_1px_2px_rgba(139,0,0,0.3)]",children:"1st & 2nd November 2026"}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold leading-tight",children:"⚡ 36-Hour Challenge // ₹50,000+ Cash & Bounties"})]}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold leading-tight",children:"Venue: Online  ✦  Organized by Code-A-Nova"}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-1.5 sm:mt-2",children:[d.jsxs("button",{type:"button",onClick:jo,className:"px-3 sm:px-4 py-1 sm:py-1.5 bg-[#0a0a0a] hover:bg-[#1f1f1f] text-[#ffffff] border-2 border-[#8b0000] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all",children:[d.jsx("span",{children:"📅"}),d.jsx("span",{children:h?"✓ MARKED IN CALENDAR!":"MARK IN YOUR CALENDAR"})]}),d.jsx("button",{type:"button",onClick:Xo,className:"px-3.5 sm:px-4.5 py-1 sm:py-1.5 bg-[#8b0000] hover:bg-[#a00000] text-[#ffffff] border-2 border-[#0a0a0a] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer select-none hover:scale-105 active:scale-95 transition-transform",children:d.jsx("span",{children:"⚡ REGISTER ➔"})})]}),h&&d.jsx("div",{className:"mt-1 font-ink-cursive text-xs sm:text-sm text-[#0f5132] font-bold tracking-wide bg-[#d1e7dd]/90 px-2 py-0.5 rounded-xs border border-[#0f5132]/40 animate-pulse",children:"✓ Added to Calendar! Nov 1-2, 2026 // Online // Code-A-Nova"})]})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.16) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 38%, rgba(0,0,0,0.85) 100%)"}})]}),Fo>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 will-change-transform transform-gpu",style:{opacity:Fo,zIndex:33,perspective:"1200px",background:Es>.05?"transparent":"#000000"},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu flex items-center justify-center",style:{transform:`translate3d(calc(${wd}% + ${t?0:xd}px), ${Td+(t?0:_d)}px, 0) scale(${Ed}) rotateX(${Md}deg) rotateY(${yd}deg) rotateZ(${Bo*.8+(t?0:vd)}deg)`,transformOrigin:"50% 10%",filter:t?"none":Uo>.2?`blur(${Uo}px)`:"none"},children:d.jsxs("div",{className:`relative w-full h-full flex items-center justify-center ${t?"":"handheld-parchment-tremor"}`,children:[d.jsx("img",{src:C.image,alt:"Fully Unrolled Ancient Scroll Proclamation",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.07] contrast-[1.06]",loading:"eager",decoding:"async"}),d.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none px-4",style:{opacity:Oo*Math.max(1-Zt*1.5,0),transform:`scale(${.94+Oo*.06})`,transition:"opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)"},children:d.jsxs("div",{className:"relative w-full max-w-lg sm:max-w-xl md:max-w-2xl px-4 sm:px-6 py-2 flex flex-col items-center text-center select-none pointer-events-auto mt-10 sm:mt-14 md:mt-16",children:[d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold tracking-widest uppercase leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]",children:"✦ OFFICIAL SANCTUM PROCLAMATION ✦"}),d.jsx("h2",{className:`font-ink-cursive text-4xl sm:text-5xl md:text-6xl text-[#8b0000] font-black tracking-tight my-0 leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] ${t?"":"blood-ink-living-glow"}`,children:"Save The Date"}),d.jsx("div",{className:"font-ink-cursive text-sm sm:text-lg md:text-xl text-[#0f0f0f] font-bold leading-tight my-0.5",children:"BUILDX: The Occult Innovation Hackathon"}),d.jsx("div",{className:"w-28 sm:w-44 h-[1.5px] bg-gradient-to-r from-transparent via-[#8b0000]/60 to-transparent my-0.5 sm:my-1"}),d.jsxs("div",{className:"my-0.5",children:[d.jsx("div",{className:`font-ink-cursive text-2xl sm:text-4xl md:text-5xl text-[#8b0000] font-black leading-tight whitespace-nowrap drop-shadow-[0_1px_2px_rgba(139,0,0,0.3)] ${t?"":"blood-ink-living-glow"}`,children:"1st & 2nd November 2026"}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-base md:text-lg text-[#111111] font-bold leading-tight",children:"⚡ 36-Hour Challenge // ₹50,000+ Cash & Bounties"})]}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-base md:text-lg text-[#0a0a0a] font-bold leading-tight my-0.5 max-w-lg",children:"Venue: Online  ✦  Organized by Code-A-Nova"}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-1.5 sm:mt-2",children:[d.jsxs("button",{type:"button",onClick:jo,className:"px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#0a0a0a] hover:bg-[#1f1f1f] text-[#ffffff] border-2 border-[#8b0000] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all",children:[d.jsx("span",{children:"📅"}),d.jsx("span",{children:h?"✓ MARKED IN CALENDAR!":"MARK IN YOUR CALENDAR"})]}),d.jsx("button",{type:"button",onClick:Xo,className:"px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#8b0000] hover:bg-[#a00000] text-[#ffffff] border-2 border-[#0a0a0a] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer select-none hover:scale-105 active:scale-95 transition-transform",children:d.jsx("span",{children:"⚡ ENTER THE ARENA // REGISTER ➔"})})]}),h&&d.jsx("div",{className:"mt-1 font-ink-cursive text-xs sm:text-sm text-[#0f5132] font-bold tracking-wide bg-[#d1e7dd]/90 px-3 py-0.5 rounded-xs border border-[#0f5132]/40 animate-pulse",children:"✓ Google Calendar opened & .ics file downloaded! Nov 1-2, 2026 // Online // Code-A-Nova"})]})})]})}),d.jsx("div",{className:`absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-700 ${t?"":"candle-flame-parchment-pulse"}`,style:{background:"radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.20) 0%, transparent 65%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)"}})]}),Go>.005&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-500 will-change-transform transform-gpu",style:{opacity:Go,zIndex:32,perspective:"1200px"},children:d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu flex items-center justify-center",style:{transform:`translate3d(calc(${Dd}% + ${Fd}px), ${Pd+Ud}px, 0) scale(${Rd}) rotateX(${Id}deg) rotateY(${Nd}deg) rotateZ(${Bo+Od}deg)`,transformOrigin:"78% 50%",filter:t?"none":Po+ko>.3?`blur(${(Po+ko)*.65}px)`:"none"},children:[d.jsx("img",{src:L.image,alt:"The Crypt Sanctorum & Cathedral of the Occult Rules",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.06] contrast-[1.06]",loading:"eager",decoding:"async"}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-700",style:{background:`radial-gradient(circle at 78% 50%, rgba(245, 158, 11, ${.2*Ts}) 0%, transparent 45%), radial-gradient(circle at 35% 42%, rgba(220, 38, 38, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, transparent 45%, rgba(0,0,0,0.75) 100%)`}}),zo>.05&&!t&&d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{opacity:zo,background:"radial-gradient(ellipse 70% 50% at 75% 50%, rgba(245, 158, 11, 0.45) 0%, rgba(220, 38, 38, 0.20) 45%, transparent 75%)",filter:"blur(8px)"}}),Lo>.01&&!t&&d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-500",style:{opacity:Lo,background:`linear-gradient(${105+Zt*10}deg, transparent 20%, rgba(251, 191, 36, 0.15) 42%, rgba(245, 158, 11, 0.40) 50%, rgba(220, 38, 38, 0.25) 58%, transparent 80%)`,transform:`translateX(${(Zt-.5)*80}%) scaleY(0.85)`,filter:"blur(6px)"}}),d.jsx("div",{className:"absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 border border-red-900/60 rounded-xs font-mono text-[10px] sm:text-xs text-stone-400 tracking-widest uppercase pointer-events-none transition-opacity duration-300",style:{opacity:Math.min(Math.max((e-.989)/.003,0),1)*(1-Math.min(Math.max((e-.9935)/.0015,0),1))},children:"✦ CAMERA PAN: CRYPT ALTAR ➔ OCCULT RULES SANCTUARY ✦"})]})}),Vo>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none will-change-transform transform-gpu overflow-hidden pt-14 sm:pt-16 pb-0 px-0",style:{opacity:Vo,zIndex:34,backgroundColor:"#0a0604"},children:[d.jsx("img",{src:F?.image,alt:"Approaching the Sacred Rules & Regulations Sanctum Board",className:"w-full h-full pointer-events-none select-none brightness-[1.06] contrast-[1.07]",style:{objectFit:"cover",objectPosition:"center top"},loading:"eager",decoding:"async"}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen",style:{background:`radial-gradient(circle at 75% 45%, rgba(245, 158, 11, ${.22*Ts}) 0%, transparent 55%), radial-gradient(circle at 20% 60%, rgba(220, 38, 38, 0.16) 0%, transparent 50%)`}}),d.jsx("div",{className:"absolute top-16 sm:top-18 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/85 border border-red-900/60 rounded-xs font-mono text-[10px] sm:text-xs text-stone-400 tracking-widest uppercase pointer-events-none shadow-md",style:{opacity:Math.min(Math.max((e-.983)/.0015,0),1)*(1-Math.min(Math.max((e-.986)/.0015,0),1))},children:"✦ STEPPING FORWARD // SANCTUM PROCESS BOARD ✦"})]}),Ho>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none will-change-transform transform-gpu overflow-hidden pt-14 sm:pt-16 pb-0 px-0",style:{opacity:Ho,zIndex:35,backgroundColor:"#0a0604"},children:[d.jsxs("div",{className:"w-full h-full relative will-change-transform transform-gpu",style:{transform:`translate3d(${jd}%, ${Yd}%, 0) scale(${gi})`,transformOrigin:"50% 50%"},children:[d.jsx("img",{src:V?.image,alt:"Full Page Sacred Rules & Regulations Board - BUILDX Hackathon Process",className:"w-full h-full pointer-events-none select-none brightness-[1.05] contrast-[1.06]",style:{objectFit:"cover",objectPosition:"center top"},loading:"eager",decoding:"async"}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen",style:{background:`radial-gradient(circle at 10% 50%, rgba(245, 158, 11, ${.18*Ts}) 0%, transparent 40%), radial-gradient(circle at 90% 50%, rgba(245, 158, 11, ${.18*Ts}) 0%, transparent 40%)`}})]}),gi>1.25&&d.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300",style:{background:"radial-gradient(ellipse 52% 44% at 50% 50%, rgba(245,158,11,0.06) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.60) 72%, rgba(0,0,0,0.88) 100%)"}}),En&&gi>1.35&&d.jsx("div",{className:"absolute inset-0 pointer-events-none flex items-center justify-center",children:d.jsxs("div",{className:"relative w-[340px] sm:w-[460px] h-[210px] sm:h-[260px] border border-[#D01820]/40 rounded-xs shadow-[0_0_35px_rgba(208,24,32,0.25)] flex flex-col justify-between p-2",children:[d.jsx("div",{className:"absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#D01820]"}),d.jsx("div",{className:"absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#D01820]"}),d.jsx("div",{className:"absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#D01820]"}),d.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#D01820]"}),d.jsxs("div",{className:"flex items-center justify-between font-mono text-[9px] text-[#D01820] tracking-widest uppercase",children:[d.jsxs("span",{className:"flex items-center gap-1.5",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#D01820] animate-ping"}),"TARGET LOCKED // ",En.badge]}),d.jsx("span",{className:"text-amber-500 font-bold",children:"FOCUS ACTIVE"})]}),d.jsxs("div",{className:"flex items-center justify-between font-mono text-[9px] text-stone-400 tracking-wider",children:[d.jsxs("span",{children:["STEP ",En.num," OF 07"]}),d.jsx("span",{className:"text-[#D01820]/80",children:"BUILDX 2026 // CODE-A-NOVA"})]})]})}),En&&gi>1.25?d.jsxs("div",{className:"absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 w-[94%] max-w-xl px-4 py-2.5 bg-black/90 backdrop-blur-md border border-[#D01820]/80 rounded-xs shadow-[0_0_30px_rgba(208,24,32,0.35)] pointer-events-none transition-all duration-300 flex flex-col gap-1.5",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("span",{className:"px-2 py-0.5 bg-[#D01820] text-white font-mono text-[10px] sm:text-xs font-bold rounded-xs tracking-widest uppercase animate-pulse",children:["RULE ",En.num]}),d.jsx("span",{className:"font-mono text-xs sm:text-sm text-white font-bold tracking-wider uppercase",children:En.title})]}),d.jsx("div",{className:"flex items-center gap-1.5",children:[1,2,3,4,5,6,7].map(Oe=>d.jsx("span",{className:`w-2 h-2 rounded-full transition-all duration-300 ${parseInt(En.num,10)===Oe?"bg-[#D01820] scale-125 shadow-[0_0_8px_#D01820]":parseInt(En.num,10)>Oe?"bg-stone-500":"bg-stone-800"}`},Oe))})]}),d.jsx("div",{className:"font-mono text-[10px] sm:text-xs text-stone-300 tracking-wide leading-tight",children:En.desc})]}):d.jsx("div",{className:"absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/85 border border-[#D01820]/70 rounded-xs font-mono text-[10px] sm:text-xs text-stone-200 tracking-widest uppercase pointer-events-none shadow-[0_0_20px_rgba(208,24,32,0.3)]",children:"✦ SCROLL DOWN TO INSPECT RULES 01 ➔ 07 ✦"})]}),d.jsx($x,{scrollProgress:e,isImpactActive:s||r,gateProximity:e>=.76?1:Fe}),ge>.01&&d.jsx(Ax,{scrollProgress:e,revealed:l}),e>=.18&&e<=.37&&d.jsx(Rx,{scrollProgress:e}),e>=.36&&e<=.6&&d.jsx(Yl,{scrollProgress:e,variant:"front"}),d.jsx(ql,{isActive:s,reducedMotion:t,intensity:1.4}),d.jsx(ql,{isActive:r,reducedMotion:t,intensity:2.2}),d.jsx("div",{className:"sr-only opacity-0 pointer-events-none select-none","aria-hidden":"true",children:Tt.map(Oe=>d.jsx("img",{src:Oe.image,alt:"",loading:"eager",decoding:"sync"},Oe.id))})]})}),Qx={judges:[]};function e_({className:i=""}){const e=Vt.dates.countdownTarget,[t,n]=ue.useState({days:"36",hours:"00",minutes:"00",seconds:"00",isExpired:!1});ue.useEffect(()=>{if(!e)return;const a=new Date(e).getTime(),r=()=>{const l=Date.now(),c=a-l;if(c<=0){n({days:"00",hours:"00",minutes:"00",seconds:"00",isExpired:!0});return}const h=Math.floor(c/(1e3*60*60*24)),m=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(c%(1e3*60*60)/(1e3*60)),p=Math.floor(c%(1e3*60)/1e3);n({days:String(h).padStart(2,"0"),hours:String(m).padStart(2,"0"),minutes:String(u).padStart(2,"0"),seconds:String(p).padStart(2,"0"),isExpired:!1})};r();const o=setInterval(r,1e3);return()=>clearInterval(o)},[e]);const s=[{label:"DAYS",value:t.days},{label:"HOURS",value:t.hours},{label:"MINUTES",value:t.minutes},{label:"SECONDS",value:t.seconds}];return d.jsx("div",{className:`flex flex-col items-start ${i}`,children:d.jsxs("div",{className:"relative p-4 sm:p-5 rounded-xs bg-[#101010]/95 border border-white/15 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_15px_rgba(208,24,32,0.06)]",children:[d.jsx("div",{className:"absolute -top-1.5 -left-1.5 evidence-pin"}),d.jsxs("div",{className:"flex items-center justify-between gap-4 mb-3 border-b border-white/10 pb-2",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono-tech text-[11px] tracking-widest text-slate-300 uppercase font-bold",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#D01820] animate-pulse"}),d.jsx("span",{children:"THE INVESTIGATION BEGINS IN"})]}),d.jsx("span",{className:"font-mono-tech text-[9px] text-[#D01820] tracking-widest",children:"[CASE CLOCK]"})]}),d.jsx("div",{className:"flex items-center gap-2 sm:gap-3 md:gap-4",role:"timer","aria-label":`Countdown: ${t.days} days, ${t.hours} hours, ${t.minutes} minutes, ${t.seconds} seconds`,children:s.map((a,r)=>d.jsxs($l.Fragment,{children:[d.jsxs("div",{className:"flex flex-col items-center",children:[d.jsx("div",{className:"relative px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xs bg-[#090909] border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.9)]",children:d.jsx("span",{className:"font-mono-tech font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-widest tabular-nums drop-shadow-[0_0_8px_rgba(208,24,32,0.35)]",children:a.value})}),d.jsx("span",{className:"mt-1.5 font-mono-tech text-[9px] sm:text-[10px] text-slate-400 tracking-wider",children:a.label})]}),r<s.length-1&&d.jsx("span",{className:"font-mono-tech font-bold text-lg sm:text-xl text-[#D01820] -mt-4 select-none",children:":"})]},a.label))})]})})}const t_=ue.memo(function({isVisible:e=!0}){const{anomalies:t,briefing:n,hackathonDetails:s,status:a}=na;return d.jsxs("div",{id:"case-evidence",className:`relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-700 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-12 pointer-events-none"}`,children:[d.jsxs("div",{className:"border border-stone-800 bg-black/80 backdrop-blur-md p-6 sm:p-8 rounded-xs mb-12 shadow-2xl relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D01820] to-transparent"}),d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10 font-mono text-xs",children:[d.jsxs("div",{className:"flex items-center gap-2 text-[#D01820]",children:[d.jsx(Jl,{className:"w-4 h-4 animate-pulse"}),d.jsx("span",{className:"tracking-widest uppercase",children:na.caseId})]}),d.jsxs("div",{className:"inline-flex items-center gap-2 px-2.5 py-0.5 rounded-xs bg-[#D01820]/10 border border-[#D01820]/40 text-[#D01820]",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#D01820] animate-ping"}),d.jsx("span",{children:a.badge})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 items-center",children:[d.jsxs("div",{className:"lg:col-span-2 space-y-3",children:[d.jsxs("h2",{className:"font-serif font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-stone-100 uppercase leading-none",children:["BUILDX ",d.jsx("span",{className:"text-[#D01820]",children:"2026"})]}),d.jsx("p",{className:"font-mono text-lg sm:text-xl text-stone-300 tracking-wider uppercase font-bold",children:s.durationNarrative}),d.jsx("p",{className:"font-sans text-stone-400 text-sm leading-relaxed max-w-xl",children:n.detail})]}),d.jsxs("div",{className:"bg-stone-950/80 border border-stone-800 p-5 rounded-xs space-y-3",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-stone-400 uppercase tracking-wider",children:[d.jsx(ia,{className:"w-3.5 h-3.5 text-[#D01820]"}),d.jsx("span",{children:"CONTAINMENT COUNTDOWN"})]}),d.jsx(e_,{targetDate:"2026-10-24T09:00:00Z"}),d.jsxs("div",{className:"pt-2 font-mono text-[11px] text-stone-500 uppercase text-center",children:[s.dates," • ",s.format]})]})]}),d.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-white/5",children:[d.jsx(ki,{href:"#register-modal",variant:"primary",size:"lg",icon:d.jsx(ss,{className:"w-4 h-4"}),onClick:()=>{const r=document.querySelector("[data-register-trigger]");r&&r.click()},children:"ENTER THE CASE // REGISTER NOW"}),d.jsx("a",{href:"#dossiers",className:"px-5 py-3 rounded-xs border border-white/10 hover:border-stone-400 font-mono text-xs text-stone-300 tracking-wider uppercase transition-colors",children:"REVIEW ANOMALY DOSSIERS"})]})]}),d.jsxs("div",{id:"dossiers",className:"mb-14",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-4 font-mono text-xs text-[#D01820] tracking-widest uppercase",children:[d.jsx(Ql,{className:"w-4 h-4"}),d.jsx("span",{children:"ACTIVE SECTOR ANOMALIES // TRACKS"})]}),d.jsx("h3",{className:"font-serif text-2xl sm:text-3xl font-bold text-stone-100 uppercase tracking-tight mb-8",children:"SELECT YOUR INVESTIGATION VECTOR"}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.map(r=>d.jsxs("div",{className:"group relative bg-black/75 border border-stone-800 hover:border-[#D01820]/70 p-6 rounded-xs transition-all duration-300",children:[d.jsxs("div",{className:"flex items-center justify-between mb-3 font-mono text-xs",children:[d.jsx("span",{className:"text-[#D01820] font-bold",children:r.code}),d.jsx("span",{className:"px-2 py-0.5 bg-stone-900 text-stone-400 rounded-xs border border-stone-800",children:r.risk})]}),d.jsx("h4",{className:"font-mono text-lg font-bold text-stone-200 group-hover:text-white uppercase mb-2",children:r.title}),d.jsx("p",{className:"text-stone-400 text-xs sm:text-sm leading-relaxed mb-4",children:r.description}),d.jsxs("div",{className:"pt-3 border-t border-stone-800/80 flex items-center justify-between font-mono text-xs",children:[d.jsx("span",{className:"text-stone-500",children:"BOUNTY ALLOCATION:"}),d.jsx("span",{className:"text-emerald-400 font-bold",children:r.bounty})]})]},r.id))})]}),d.jsxs("div",{className:"border border-stone-800 bg-black/70 p-6 sm:p-8 rounded-xs mb-14",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-3 font-mono text-xs text-[#D01820] tracking-widest uppercase",children:[d.jsx(ia,{className:"w-4 h-4"}),d.jsx("span",{children:"36-HOUR RUN PROTOCOL"})]}),d.jsx("h3",{className:"font-serif text-2xl font-bold text-stone-100 uppercase tracking-tight mb-6",children:"INCIDENT TIMELINE"}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:na.investigationTimeline.map((r,o)=>d.jsxs("div",{className:"p-4 bg-stone-950/90 border border-stone-800/80 rounded-xs space-y-1.5",children:[d.jsx("span",{className:"font-mono text-xs text-[#D01820] font-bold",children:r.time}),d.jsx("h5",{className:"font-mono text-sm font-bold text-stone-200 uppercase",children:r.title}),d.jsx("p",{className:"text-stone-400 text-xs leading-relaxed",children:r.desc})]},o))})]}),d.jsxs("div",{className:"mb-14",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-3 font-mono text-xs text-[#D01820] tracking-widest uppercase",children:[d.jsx(iu,{className:"w-4 h-4"}),d.jsx("span",{children:"INVESTIGATION COUNCIL"})]}),d.jsx("h3",{className:"font-serif text-2xl sm:text-3xl font-bold text-stone-100 uppercase tracking-tight mb-6",children:"SENIOR ADJUDICATORS"}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Qx.judges.slice(0,3).map(r=>d.jsxs("div",{className:"bg-black/75 border border-stone-800 p-5 rounded-xs flex items-center gap-4",children:[d.jsx("div",{className:"w-12 h-12 rounded-full bg-stone-900 border border-[#D01820]/40 flex items-center justify-center font-mono font-bold text-sm text-stone-300",children:r.name.charAt(0)}),d.jsxs("div",{className:"font-mono text-xs",children:[d.jsx("div",{className:"font-bold text-stone-200 uppercase text-sm",children:r.name}),d.jsx("div",{className:"text-stone-400",children:r.role}),d.jsx("div",{className:"text-[#D01820] text-[11px]",children:r.organization})]})]},r.id))})]}),d.jsxs("div",{className:"text-center py-12 px-6 border border-[#D01820]/40 bg-gradient-to-b from-black to-[#D01820]/10 rounded-xs space-y-4",children:[d.jsx("div",{className:"font-mono text-xs text-[#D01820] tracking-widest uppercase",children:"[ FINAL PROTOCOL DIRECTIVE ]"}),d.jsx("h3",{className:"font-serif text-3xl sm:text-4xl font-black text-stone-100 uppercase tracking-tight",children:"WILL YOU ENTER THE BREACH?"}),d.jsx("p",{className:"font-sans text-stone-300 text-sm max-w-lg mx-auto leading-relaxed",children:"The signal is active. 36 hours. National competitors. Top industry mentors and bounties."}),d.jsx("div",{className:"pt-2",children:d.jsx(ki,{href:"#register-modal",variant:"primary",size:"lg",icon:d.jsx(ss,{className:"w-4 h-4"}),children:"ENTER THE CASE NOW"})})]})]})});function n_({data:i=Gc.footer}){return d.jsx("footer",{className:"border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-md",children:d.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"h-8 sm:h-9 w-auto flex items-center filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_0_15px_rgba(208,24,32,0.4)]",children:d.jsx("img",{src:fs,alt:"BUILDX",className:"h-full w-auto object-contain select-none pointer-events-none brightness-[1.12] contrast-[1.15]",loading:"lazy"})}),d.jsx("div",{className:"border-l border-white/10 pl-2.5",children:d.jsx("span",{className:"font-mono text-[9px] text-stone-400 uppercase tracking-widest block",children:Vt.branding.subOrganizer})})]}),d.jsxs("div",{className:"text-center md:text-left max-w-md font-mono text-[10px] text-stone-500 leading-relaxed",children:[d.jsx("p",{children:i.disclaimer}),d.jsx("p",{className:"pt-1 text-stone-400",children:i.copyright})]}),d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("a",{href:Vt.socials.github,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"GitHub Repository",children:d.jsx(su,{className:"w-4 h-4"})}),d.jsx("a",{href:Vt.socials.discord,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"Discord Community",children:d.jsx(au,{className:"w-4 h-4"})}),d.jsx("a",{href:Vt.socials.twitter,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"Twitter Feed",children:d.jsx(ru,{className:"w-4 h-4"})}),d.jsx("a",{href:Vt.socials.linkedin,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"LinkedIn Profile",children:d.jsx(ec,{className:"w-4 h-4"})})]})]})})}function i_({className:i="w-4 h-4"}){return d.jsx("svg",{className:i,viewBox:"0 0 24 24",fill:"currentColor",children:d.jsx("path",{d:"M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.777.82 2.795.82h.005c3.183 0 5.771-2.587 5.772-5.766 0-1.543-.601-2.993-1.693-4.086s-2.544-1.72-4.082-1.72zm6.915 1.155c1.42 1.42 2.203 3.308 2.203 5.313 0 4.143-3.372 7.516-7.517 7.516-1.258 0-2.493-.316-3.593-.914l-4.039 1.059 1.079-3.937c-.66-1.144-1.008-2.443-1.008-3.724 0-4.144 3.372-7.517 7.517-7.517 2.006 0 3.894.782 5.314 2.204zm-3.238 6.559c-.198-.099-1.171-.578-1.353-.644-.182-.065-.315-.099-.447.099s-.513.644-.629.776c-.116.133-.232.149-.43.05-.198-.099-.838-.309-1.597-.986-.591-.527-.99-1.178-1.106-1.376s-.012-.306.087-.404c.089-.089.198-.232.298-.348.099-.116.132-.198.198-.33.066-.133.033-.248-.017-.348s-.446-1.074-.612-1.47c-.161-.387-.325-.334-.447-.34l-.381-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653s.71 1.917.81 2.05c.099.132 1.397 2.133 3.385 2.99.473.204.843.326 1.131.418.475.151.907.13 1.248.079.38-.057 1.171-.479 1.337-.942.165-.463.165-.86.116-.942-.049-.083-.182-.133-.38-.232z"})})}const s_=ue.memo(function(){const e=[{name:"Instagram",href:"https://www.instagram.com/codenova31/",icon:d.jsx(ou,{className:"w-4 h-4"}),hoverClass:"hover:text-[#E1306C] hover:border-[#E1306C]/60 hover:shadow-[0_0_18px_rgba(225,48,108,0.45)]"},{name:"LinkedIn",href:"https://www.linkedin.com/company/code-a-nova/",icon:d.jsx(ec,{className:"w-4 h-4"}),hoverClass:"hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:shadow-[0_0_18px_rgba(10,102,194,0.45)]"},{name:"WhatsApp",href:"https://wa.me/?text=Hi%20Code-A-Nova%20Team",icon:d.jsx(i_,{className:"w-4 h-4"}),hoverClass:"hover:text-[#25D366] hover:border-[#25D366]/60 hover:shadow-[0_0_18px_rgba(37,211,102,0.45)]"}];return d.jsx("div",{className:"fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-2.5 pointer-events-auto select-none","aria-label":"Social links",children:e.map(t=>d.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",title:t.name,"aria-label":t.name,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-stone-400 transition-all duration-250 shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:scale-110 active:scale-95 ${t.hoverClass}`,children:t.icon},t.name))})}),a_=ue.memo(function(){const[e,t]=ue.useState(0),n=ue.useRef(null);return ue.useEffect(()=>{let s=0,a=0,r=null;const o=()=>{if(n.current){const c=n.current.offsetTop||0,m=(n.current.offsetHeight||1)-window.innerHeight;if(m>0){const u=(window.scrollY||window.pageYOffset||0)-c;a=Math.min(Math.max(u/m,0),1)}}},l=()=>{const c=a-s;Math.abs(c)>8e-5?(s+=c*.2,t(s)):s!==a&&(s=a,t(s)),r=requestAnimationFrame(l)};return window.addEventListener("scroll",o,{passive:!0}),o(),s=a,t(s),r=requestAnimationFrame(l),()=>{window.removeEventListener("scroll",o),r&&cancelAnimationFrame(r)}},[]),d.jsxs("div",{className:"relative w-full bg-black text-[#e5e5e5]",children:[d.jsx("div",{ref:n,className:"relative w-full",style:{height:"4600vh"},children:d.jsx("div",{className:"sticky top-0 w-full h-screen overflow-hidden z-10 bg-black",children:d.jsx(Jx,{scrollProgress:e})})}),d.jsxs("section",{id:"case-evidence-section",className:"relative z-20 w-full bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-800",children:[d.jsxs("div",{className:"max-w-6xl mx-auto mb-10 text-center",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-xs bg-[#D01820]/10 border border-[#D01820]/40 text-[#D01820] text-xs font-mono tracking-widest uppercase mb-4",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-[#D01820] animate-ping"}),d.jsx("span",{children:"CHAPTER II // CLASSIFIED ANOMALY ARCHIVES"})]}),d.jsx("h2",{className:"font-serif font-black text-4xl sm:text-6xl text-stone-100 tracking-tight uppercase leading-none",children:"INVESTIGATION CASE FILES"}),d.jsx("p",{className:"font-mono text-xs sm:text-sm text-stone-400 max-w-xl mx-auto mt-3 tracking-wider uppercase leading-relaxed",children:"The sanctum proclamation has been sealed. Explore the classified case briefs, anomaly challenge tracks, and lock in your registration below."})]}),d.jsx(t_,{isVisible:!0})]}),d.jsx(n_,{}),d.jsx(s_,{})]})}),r_=ue.memo(function(){const[e,t]=ue.useState(Lt.isMuted);ue.useEffect(()=>{ct.init();const s=Lt.subscribeDebug(a=>{t(a.isMuted)});return()=>s()},[]);const n=()=>{const s=Lt.toggleMute();t(s)};return d.jsx("div",{className:"fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 pointer-events-auto select-none",children:d.jsxs("button",{type:"button",onClick:n,title:e?"Turn Sound ON (Voiceover & Atmosphere)":"Turn Sound OFF (Silence Audio)","aria-label":e?"Sound Off - Click to enable":"Sound On - Click to mute",className:`group flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.85)] cursor-pointer hover:scale-105 active:scale-95 ${e?"border-stone-700/60 text-stone-400 hover:border-stone-500 hover:text-stone-200":"border-red-600/70 text-red-300 shadow-[0_0_20px_rgba(220,38,38,0.35)] hover:border-red-500"}`,children:[e?d.jsx(tc,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-500 group-hover:text-stone-300"}):d.jsxs("div",{className:"relative flex items-center justify-center",children:[d.jsx(nc,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 animate-pulse"}),d.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"})]}),d.jsx("span",{className:"font-mono text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold",children:e?"SOUND OFF":"SOUND ON"})]})})}),o_=ue.memo(function(){const[e,t]=ue.useState(!1),[n,s]=ue.useState(Lt.getDebugState());if(ue.useEffect(()=>{if(typeof window>"u")return;const l=()=>{const m=new URLSearchParams(window.location.search).get("storyDebug")==="true",u=window.location.hash.includes("storyDebug");t(m||u)};l(),window.addEventListener("hashchange",l),window.addEventListener("popstate",l);const c=Lt.subscribeDebug(h=>{s(h)});return()=>{window.removeEventListener("hashchange",l),window.removeEventListener("popstate",l),c()}},[]),!e)return null;const a=Math.max(.1,n.clipEnd-n.clipStart),r=Math.min(Math.max((n.currentTime-n.clipStart)/a,0),1),o=(l="")=>l.includes("FADING IN")||l==="LOADING"?"text-cyan-400 bg-cyan-950/70 border-cyan-500/50":l.includes("FADING OUT")||l.includes("PAUSED")?"text-amber-400 bg-amber-950/70 border-amber-500/50":l.includes("PLAYING")?"text-emerald-400 bg-emerald-950/70 border-emerald-500/50":l==="MUTED"?"text-amber-400 bg-amber-950/70 border-amber-500/50":l==="BLOCKED"?"text-rose-400 bg-rose-950/70 border-rose-500/50":"text-stone-400 bg-stone-900/70 border-stone-700/50";return d.jsxs("div",{className:"fixed top-20 right-4 sm:right-6 z-50 w-72 sm:w-80 bg-stone-950/95 border-2 border-red-800/80 rounded-xs p-3.5 backdrop-blur-md shadow-[0_0_35px_rgba(0,0,0,0.95)] text-stone-200 font-mono text-xs select-none pointer-events-auto",style:{boxShadow:"0 0 30px rgba(185, 28, 28, 0.35)"},children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-red-900/50 pb-2 mb-2.5",children:[d.jsxs("div",{className:"flex items-center gap-1.5 text-red-400 font-bold uppercase tracking-wider text-[11px]",children:[d.jsx(Kl,{className:"w-3.5 h-3.5 animate-pulse text-red-500"}),d.jsx("span",{children:"AUDIO DEBUG HUD"})]}),d.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded-xs bg-red-950/60 border border-red-800/50 text-red-300",children:"?storyDebug=true"})]}),d.jsxs("div",{className:"space-y-1.5 text-[11px]",children:[d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Current Scene:"}),d.jsx("span",{className:"font-bold text-white bg-stone-900 px-1.5 py-0.5 rounded-xs border border-stone-700",children:n.currentScene})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Current Audio:"}),d.jsx("span",{className:"font-bold text-amber-300 truncate max-w-[140px]",title:n.audioFile,children:n.audioFile})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Clip:"}),d.jsxs("span",{className:"font-semibold text-cyan-300",children:[n.clipStart.toFixed(1),"s → ",n.clipEnd.toFixed(1),"s"]})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Playhead:"}),d.jsxs("span",{className:"font-bold text-stone-100",children:[n.currentTime.toFixed(2),"s / ",n.clipEnd.toFixed(1),"s"]})]}),d.jsx("div",{className:"w-full bg-stone-900 h-1.5 rounded-full overflow-hidden border border-stone-800",children:d.jsx("div",{className:"h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-400 transition-all duration-75",style:{width:`${r*100}%`}})}),d.jsxs("div",{className:"flex items-center justify-between pt-1",children:[d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400",children:"Playback:"}),d.jsx("span",{className:`px-1.5 py-0.5 text-[10px] font-bold rounded-xs border ${o(n.playbackStatus)}`,children:n.playbackStatus})]}),d.jsxs("div",{className:"flex items-center gap-1 text-stone-300 text-[11px]",children:[d.jsx("span",{className:"text-stone-400",children:"Volume:"}),d.jsxs("span",{className:"font-bold text-white",children:[n.volume,"%"]})]})]}),n.isAutoplayBlocked&&d.jsx("div",{className:"text-[10px] text-amber-400 bg-amber-950/40 p-1.5 rounded-xs border border-amber-800/50 mt-1",children:"⚠ Autoplay waiting: Click or scroll to unlock audio"})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-1.5 mt-3 pt-2 border-t border-stone-800 text-[10px]",children:[d.jsxs("button",{type:"button",onClick:()=>Lt.replayCurrentScene(),className:"px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors",title:"Replay active scene voice clip",children:[d.jsx(lu,{className:"w-3 h-3 text-cyan-400"}),d.jsx("span",{children:"Replay"})]}),d.jsxs("button",{type:"button",onClick:()=>Lt.stopActiveClip(),className:"px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors",title:"Stop currently playing audio clip",children:[d.jsx(cu,{className:"w-3 h-3 text-rose-400"}),d.jsx("span",{children:"Stop"})]}),d.jsx("button",{type:"button",onClick:()=>Lt.toggleMute(),className:"px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors",title:"Toggle Master Sound",children:n.isMuted?d.jsxs(d.Fragment,{children:[d.jsx(tc,{className:"w-3 h-3 text-amber-400"}),d.jsx("span",{children:"Unmute"})]}):d.jsxs(d.Fragment,{children:[d.jsx(nc,{className:"w-3 h-3 text-emerald-400"}),d.jsx("span",{children:"Mute"})]})})]})]})});function d_(){return ue.useEffect(()=>{const i=document.title;document.title=`${Vt.branding.name} — ${Vt.branding.tagline}`;let e=document.querySelector('meta[name="description"]');const t=e?e.getAttribute("content"):null;return e&&e.setAttribute("content",Vt.branding.missionDescription),()=>{document.title=i,e&&t&&e.setAttribute("content",t)}},[]),d.jsxs("div",{className:"hackathon-theme-root bg-black text-[#e5e5e5] min-h-screen relative selection:bg-[#D01820]/40 selection:text-white",children:[d.jsx(sx,{}),d.jsx(rx,{}),d.jsx("main",{id:"main-content",className:"relative z-10 bg-black",children:d.jsx(a_,{})}),d.jsx(r_,{}),d.jsx(o_,{})]})}export{d_ as default};
