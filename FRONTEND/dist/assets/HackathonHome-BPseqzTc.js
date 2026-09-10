import{a as _e,j as d,R as yl}from"./vendor-query-13Iz25eN.js";import{A as Zi,X as Qc,bU as ed,C as td,an as nd,bV as id,bW as El,bX as sd,Q as $s,a7 as Tl,bS as wl,a$ as Al,S as ad,y as rd,ar as od,z as ld,bY as cd,L as Rl,I as dd,bZ as Cl,bQ as Nl,bo as ud,b_ as hd}from"./vendor-icons-BmMFIZvw.js";const Or="186",fd=0,bo=1,pd=2,Vs=1,md=2,Xi=3,ti=0,Gt=1,mn=2,Cn=0,Yi=1,Ji=2,Mo=3,yo=4,gd=5,yi=100,xd=101,_d=102,vd=103,Sd=104,bd=200,Md=201,yd=202,Ed=203,Il=204,Dl=205,Td=206,wd=207,Ad=208,Rd=209,Cd=210,Nd=211,Id=212,Dd=213,Pd=214,qa=0,$a=1,Ka=2,Qi=3,Za=4,Ja=5,Qa=6,er=7,Pl=0,Ld=1,Ud=2,_n=0,Ll=1,Ul=2,Fl=3,Br=4,Ol=5,Bl=6,kl=7,zl=300,ni=301,Ci=302,ma=303,ga=304,na=306,tr=1e3,Rn=1001,nr=1002,At=1003,Fd=1004,_s=1005,Lt=1006,xa=1007,Zn=1008,qt=1009,Gl=1010,Vl=1011,es=1012,kr=1013,vn=1014,gn=1015,Sn=1016,zr=1017,Gr=1018,ts=1020,Hl=35902,Wl=35899,Xl=1021,jl=1022,an=1023,In=1026,Jn=1027,Yl=1028,Vr=1029,ii=1030,Hr=1031,Wr=1033,Hs=33776,Ws=33777,Xs=33778,js=33779,ir=35840,sr=35841,ar=35842,rr=35843,or=36196,lr=37492,cr=37496,dr=37488,ur=37489,Ks=37490,hr=37491,fr=37808,pr=37809,mr=37810,gr=37811,xr=37812,_r=37813,vr=37814,Sr=37815,br=37816,Mr=37817,yr=37818,Er=37819,Tr=37820,wr=37821,Ar=36492,Rr=36494,Cr=36495,Nr=36283,Ir=36284,Zs=36285,Dr=36286,Od=3200,Pr=0,Bd=1,Gn="",Jt="srgb",Js="srgb-linear",Qs="linear",st="srgb",_a=7680,kd=519,zd=512,Gd=513,Vd=514,Xr=515,Hd=516,Wd=517,jr=518,Xd=519,jd=35044,Eo="300 es",xn=2e3,ns=2001;function Yd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qd(){const i=ea("canvas");return i.style.display="block",i}const To={};function wo(...i){const e="THREE."+i.shift();console.log(e,...i)}function ql(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=ql(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=ql(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function wi(...i){const e=i.join(" ");e in To||(To[e]=!0,Ie(...i))}function $d(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Kd={[qa]:$a,[Ka]:Qa,[Za]:er,[Qi]:Ja,[$a]:qa,[Qa]:Ka,[er]:Za,[Ja]:Qi};class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const qi=Math.PI/180,is=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Yr(i,e){return(i%e+e)%e}function Zd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jd(i,e,t){return i!==e?(t-i)/(e-i):0}function $i(i,e,t){return(1-t)*i+t*e}function Qd(i,e,t,n){return $i(i,e,1-Math.exp(-t*n))}function eu(i,e=1){return e-Math.abs(Yr(i,e*2)-e)}function tu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function iu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function su(i,e){return i+Math.random()*(e-i)}function au(i){return i*(.5-Math.random())}function ru(i){i!==void 0&&(Ao=i);let e=Ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ou(i){return i*qi}function lu(i){return i*is}function cu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hu(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),h=r((e+n)/2),p=a((e-n)/2),u=r((e-n)/2),m=a((n-e)/2),v=r((n-e)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*m,o*h,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ci={DEG2RAD:qi,RAD2DEG:is,generateUUID:Di,clamp:Ve,euclideanModulo:Yr,mapLinear:Zd,inverseLerp:Jd,lerp:$i,damp:Qd,pingpong:eu,smoothstep:tu,smootherstep:nu,randInt:iu,randFloat:su,randFloatSpread:au,seededRandom:ru,degToRad:ou,radToDeg:lu,isPowerOfTwo:cu,ceilPowerOfTwo:du,floorPowerOfTwo:uu,setQuaternionFromProperEuler:hu,normalize:Ut,denormalize:Ei},no=class no{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};no.prototype.isVector2=!0;let je=no;class Pi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=a[r+0],m=a[r+1],v=a[r+2],M=a[r+3];if(p!==M||l!==u||c!==m||h!==v){let x=l*u+c*m+h*v+p*M;x<0&&(u=-u,m=-m,v=-v,M=-M,x=-x);let f=1-o;if(x<.9995){const w=Math.acos(x),N=Math.sin(w);f=Math.sin(f*w)/N,o=Math.sin(o*w)/N,l=l*f+u*o,c=c*f+m*o,h=h*f+v*o,p=p*f+M*o}else{l=l*f+u*o,c=c*f+m*o,h=h*f+v*o,p=p*f+M*o;const w=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=w,c*=w,h*=w,p*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=a[r],u=a[r+1],m=a[r+2],v=a[r+3];return e[t]=o*v+h*p+l*m-c*u,e[t+1]=l*v+h*u+c*p-o*m,e[t+2]=c*v+h*m+o*u-l*p,e[t+3]=h*v-o*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(a/2),u=l(n/2),m=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*h*p+c*m*v,this._y=c*m*p-u*h*v,this._z=c*h*v+u*m*p,this._w=c*h*p-u*m*v;break;case"YXZ":this._x=u*h*p+c*m*v,this._y=c*m*p-u*h*v,this._z=c*h*v-u*m*p,this._w=c*h*p+u*m*v;break;case"ZXY":this._x=u*h*p-c*m*v,this._y=c*m*p+u*h*v,this._z=c*h*v+u*m*p,this._w=c*h*p-u*m*v;break;case"ZYX":this._x=u*h*p-c*m*v,this._y=c*m*p+u*h*v,this._z=c*h*v-u*m*p,this._w=c*h*p+u*m*v;break;case"YZX":this._x=u*h*p+c*m*v,this._y=c*m*p+u*h*v,this._z=c*h*v-u*m*p,this._w=c*h*p-u*m*v;break;case"XZY":this._x=u*h*p-c*m*v,this._y=c*m*p-u*h*v,this._z=c*h*v+u*m*p,this._w=c*h*p+u*m*v;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=n+o+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(r-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(a+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(a-c)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(r-s)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const io=class io{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ro.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),h=2*(o*t-a*s),p=2*(a*n-r*t);return this.x=t+l*c+r*p-o*h,this.y=n+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};io.prototype.isVector3=!0;let G=io;const va=new G,Ro=new Pi,so=class so{constructor(e,t,n,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],m=n[5],v=n[8],M=s[0],x=s[3],f=s[6],w=s[1],N=s[4],b=s[7],E=s[2],y=s[5],R=s[8];return a[0]=r*M+o*w+l*E,a[3]=r*x+o*N+l*y,a[6]=r*f+o*b+l*R,a[1]=c*M+h*w+p*E,a[4]=c*x+h*N+p*y,a[7]=c*f+h*b+p*R,a[2]=u*M+m*w+v*E,a[5]=u*x+m*N+v*y,a[8]=u*f+m*b+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*r-o*c,u=o*l-h*a,m=c*a-r*l,v=t*p+n*u+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=p*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*r)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*a-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(r*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};so.prototype.isMatrix3=!0;let Le=so;const Sa=new Le,Co=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),No=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fu(){const i={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===st&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===st&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?Qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Js]:{primaries:e,whitePoint:n,transfer:Qs,toXYZ:Co,fromXYZ:No,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Co,fromXYZ:No,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}const Xe=fu();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class pu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{di===void 0&&(di=ea("canvas")),di.width=e.width,di.height=e.height;const s=di.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Nn(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mu=0;class qr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ba(s[r].image)):a.push(ba(s[r]))}else a=ba(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let gu=0;const Ma=new G;class Ot extends ai{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Rn,s=Rn,a=Lt,r=Zn,o=an,l=qt,c=Ot.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Di(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=zl;Ot.DEFAULT_ANISOTROPY=1;const ao=class ao{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],m=l[5],v=l[9],M=l[2],x=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-M)<.01&&Math.abs(v-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+M)<.1&&Math.abs(v+x)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(c+1)/2,b=(m+1)/2,E=(f+1)/2,y=(h+u)/4,R=(p+M)/4,_=(v+x)/4;return N>b&&N>E?N<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(N),s=y/n,a=R/n):b>E?b<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),n=y/s,a=_/s):E<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),n=R/a,s=_/a),this.set(n,s,a,t),this}let w=Math.sqrt((x-v)*(x-v)+(p-M)*(p-M)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(x-v)/w,this.y=(p-M)/w,this.z=(u-h)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ao.prototype.isVector4=!0;let ft=ao;class xu extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},a=new Ot(s),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new qr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends xu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $l extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _u extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ta=class ta{constructor(e,t,n,s,a,r,o,l,c,h,p,u,m,v,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,h,p,u,m,v,M,x)}set(e,t,n,s,a,r,o,l,c,h,p,u,m,v,M,x){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=m,f[7]=v,f[11]=M,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ta().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ui.setFromMatrixColumn(e,0).length(),a=1/ui.setFromMatrixColumn(e,1).length(),r=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const u=r*h,m=r*p,v=o*h,M=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=m+v*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=v+m*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,m=l*p,v=c*h,M=c*p;t[0]=u+M*o,t[4]=v*o-m,t[8]=r*c,t[1]=r*p,t[5]=r*h,t[9]=-o,t[2]=m*o-v,t[6]=M+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,m=l*p,v=c*h,M=c*p;t[0]=u-M*o,t[4]=-r*p,t[8]=v+m*o,t[1]=m+v*o,t[5]=r*h,t[9]=M-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,m=r*p,v=o*h,M=o*p;t[0]=l*h,t[4]=v*c-m,t[8]=u*c+M,t[1]=l*p,t[5]=M*c+u,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,m=r*c,v=o*l,M=o*c;t[0]=l*h,t[4]=M-u*p,t[8]=v*p+m,t[1]=p,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*p+v,t[10]=u-M*p}else if(e.order==="XZY"){const u=r*l,m=r*c,v=o*l,M=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+M,t[5]=r*h,t[9]=m*p-v,t[2]=v*p-m,t[6]=o*h,t[10]=M*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vu,e,Su)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Un.crossVectors(n,Xt),Un.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Un.crossVectors(n,Xt)),Un.normalize(),vs.crossVectors(Xt,Un),s[0]=Un.x,s[4]=vs.x,s[8]=Xt.x,s[1]=Un.y,s[5]=vs.y,s[9]=Xt.y,s[2]=Un.z,s[6]=vs.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],m=n[13],v=n[2],M=n[6],x=n[10],f=n[14],w=n[3],N=n[7],b=n[11],E=n[15],y=s[0],R=s[4],_=s[8],T=s[12],C=s[1],L=s[5],F=s[9],V=s[13],I=s[2],z=s[6],q=s[10],$=s[14],ie=s[3],W=s[7],J=s[11],ee=s[15];return a[0]=r*y+o*C+l*I+c*ie,a[4]=r*R+o*L+l*z+c*W,a[8]=r*_+o*F+l*q+c*J,a[12]=r*T+o*V+l*$+c*ee,a[1]=h*y+p*C+u*I+m*ie,a[5]=h*R+p*L+u*z+m*W,a[9]=h*_+p*F+u*q+m*J,a[13]=h*T+p*V+u*$+m*ee,a[2]=v*y+M*C+x*I+f*ie,a[6]=v*R+M*L+x*z+f*W,a[10]=v*_+M*F+x*q+f*J,a[14]=v*T+M*V+x*$+f*ee,a[3]=w*y+N*C+b*I+E*ie,a[7]=w*R+N*L+b*z+E*W,a[11]=w*_+N*F+b*q+E*J,a[15]=w*T+N*V+b*$+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],m=e[14],v=e[3],M=e[7],x=e[11],f=e[15],w=l*m-c*u,N=o*m-c*p,b=o*u-l*p,E=r*m-c*h,y=r*u-l*h,R=r*p-o*h;return t*(M*w-x*N+f*b)-n*(v*w-x*E+f*y)+s*(v*N-M*E+f*R)-a*(v*b-M*y+x*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-n*(a*h-o*l)+s*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],m=e[11],v=e[12],M=e[13],x=e[14],f=e[15],w=t*o-n*r,N=t*l-s*r,b=t*c-a*r,E=n*l-s*o,y=n*c-a*o,R=s*c-a*l,_=h*M-p*v,T=h*x-u*v,C=h*f-m*v,L=p*x-u*M,F=p*f-m*M,V=u*f-m*x,I=w*V-N*F+b*L+E*C-y*T+R*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=(o*V-l*F+c*L)*z,e[1]=(s*F-n*V-a*L)*z,e[2]=(M*R-x*y+f*E)*z,e[3]=(u*y-p*R-m*E)*z,e[4]=(l*C-r*V-c*T)*z,e[5]=(t*V-s*C+a*T)*z,e[6]=(x*b-v*R-f*N)*z,e[7]=(h*R-u*b+m*N)*z,e[8]=(r*F-o*C+c*_)*z,e[9]=(n*C-t*F-a*_)*z,e[10]=(v*y-M*b+f*w)*z,e[11]=(p*b-h*y-m*w)*z,e[12]=(o*T-r*L-l*_)*z,e[13]=(t*L-n*T+s*_)*z,e[14]=(M*N-v*E-x*w)*z,e[15]=(h*E-p*N+u*w)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,p=o+o,u=a*c,m=a*h,v=a*p,M=r*h,x=r*p,f=o*p,w=l*c,N=l*h,b=l*p,E=n.x,y=n.y,R=n.z;return s[0]=(1-(M+f))*E,s[1]=(m+b)*E,s[2]=(v-N)*E,s[3]=0,s[4]=(m-b)*y,s[5]=(1-(u+f))*y,s[6]=(x+w)*y,s[7]=0,s[8]=(v+N)*R,s[9]=(x-w)*R,s[10]=(1-(u+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=ui.set(s[0],s[1],s[2]).length();const o=ui.set(s[4],s[5],s[6]).length(),l=ui.set(s[8],s[9],s[10]).length();a<0&&(r=-r),en.copy(this);const c=1/r,h=1/o,p=1/l;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=p,en.elements[9]*=p,en.elements[10]*=p,t.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,a,r,o=xn,l=!1){const c=this.elements,h=2*a/(t-e),p=2*a/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s);let v,M;if(l)v=a/(r-a),M=r*a/(r-a);else if(o===xn)v=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===ns)v=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=xn,l=!1){const c=this.elements,h=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s);let v,M;if(l)v=1/(r-a),M=r/(r-a);else if(o===xn)v=-2/(r-a),M=-(r+a)/(r-a);else if(o===ns)v=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ta.prototype.isMatrix4=!0;let pt=ta;const ui=new G,en=new pt,vu=new G(0,0,0),Su=new G(1,1,1),Un=new G,vs=new G,Xt=new G,Io=new pt,Do=new Pi;class Wn{constructor(e=0,t=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Do.setFromEuler(this),this.setFromQuaternion(Do,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bu=0;const Po=new G,hi=new Pi,Mn=new pt,Ss=new G,ki=new G,Mu=new G,yu=new Pi,Lo=new G(1,0,0),Uo=new G(0,1,0),Fo=new G(0,0,1),Oo={type:"added"},Eu={type:"removed"},fi={type:"childadded",child:null},ya={type:"childremoved",child:null};class Rt extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new G,t=new Wn,n=new Pi,s=new G(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Le}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Lo,e)}rotateY(e){return this.rotateOnAxis(Uo,e)}rotateZ(e){return this.rotateOnAxis(Fo,e)}translateOnAxis(e,t){return Po.copy(e).applyQuaternion(this.quaternion),this.position.add(Po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lo,e)}translateY(e){return this.translateOnAxis(Uo,e)}translateZ(e){return this.translateOnAxis(Fo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ss.copy(e):Ss.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ki,Ss,this.up):Mn.lookAt(Ss,ki,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(Mn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oo),fi.child=e,this.dispatchEvent(fi),fi.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eu),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,Mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,yu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),p=r(e.shapes),u=r(e.skeletons),m=r(e.animations),v=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new G(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tu={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),f=this._getHandJoint(c,M);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&u>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},bs={h:0,s:0,l:0};function Ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Yr(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Ta(r,a,e+1/3),this.g=Ta(r,a,e),this.b=Ta(r,a,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Jt){function n(a){a!==void 0&&parseFloat(a)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=Zl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Xe.workingToColorSpace(It.copy(this),e),Math.round(Ve(It.r*255,0,255))*65536+Math.round(Ve(It.g*255,0,255))*256+Math.round(Ve(It.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(It.copy(this),t);const n=It.r,s=It.g,a=It.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case n:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-n)/p+2;break;case a:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Jt){Xe.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(bs);const n=$i(Fn.h,bs.h,t),s=$i(Fn.s,bs.s,t),a=$i(Fn.l,bs.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ge;Ge.NAMES=Zl;class $r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new $r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wu extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const tn=new G,yn=new G,wa=new G,En=new G,pi=new G,mi=new G,Bo=new G,Aa=new G,Ra=new G,Ca=new G,Na=new ft,Ia=new ft,Da=new ft;class sn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){tn.subVectors(s,t),yn.subVectors(n,t),wa.subVectors(e,t);const r=tn.dot(tn),o=tn.dot(yn),l=tn.dot(wa),c=yn.dot(yn),h=yn.dot(wa),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;const u=1/p,m=(c*l-o*h)*u,v=(r*h-o*l)*u;return a.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,En.x),l.addScaledVector(r,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return Na.setScalar(0),Ia.setScalar(0),Da.setScalar(0),Na.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Na,a.x),r.addScaledVector(Ia,a.y),r.addScaledVector(Da,a.z),r}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),yn.subVectors(e,t),tn.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),tn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;pi.subVectors(s,n),mi.subVectors(a,n),Aa.subVectors(e,n);const l=pi.dot(Aa),c=mi.dot(Aa);if(l<=0&&c<=0)return t.copy(n);Ra.subVectors(e,s);const h=pi.dot(Ra),p=mi.dot(Ra);if(h>=0&&p<=h)return t.copy(s);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(pi,r);Ca.subVectors(e,a);const m=pi.dot(Ca),v=mi.dot(Ca);if(v>=0&&m<=v)return t.copy(a);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(mi,o);const x=h*v-m*p;if(x<=0&&p-h>=0&&m-v>=0)return Bo.subVectors(a,s),o=(p-h)/(p-h+(m-v)),t.copy(s).addScaledVector(Bo,o);const f=1/(x+M+u);return r=M*f,o=u*f,t.copy(n).addScaledVector(pi,r).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class as{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,nn):nn.fromBufferAttribute(a,r),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ms.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(e.matrixWorld),this.union(Ms)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),ys.subVectors(this.max,zi),gi.subVectors(e.a,zi),xi.subVectors(e.b,zi),_i.subVectors(e.c,zi),On.subVectors(xi,gi),Bn.subVectors(_i,xi),jn.subVectors(gi,_i);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-jn.z,jn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,jn.z,0,-jn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-jn.y,jn.x,0];return!Pa(t,gi,xi,_i,ys)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,gi,xi,_i,ys))?!1:(Es.crossVectors(On,Bn),t=[Es.x,Es.y,Es.z],Pa(t,gi,xi,_i,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new G,new G,new G,new G,new G,new G,new G,new G],nn=new G,Ms=new as,gi=new G,xi=new G,_i=new G,On=new G,Bn=new G,jn=new G,zi=new G,ys=new G,Es=new G,Yn=new G;function Pa(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Yn.fromArray(i,a);const o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _t=new G,Ts=new je;let Au=0;class on extends ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Au++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jd,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Jl extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ql extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ru=new as,Gi=new G,La=new G;class ia{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ru.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(La)),this.expandByPoint(Gi.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cu=0;const Zt=new pt,Ua=new Rt,vi=new G,jt=new as,Vi=new as,Et=new G;class Vt extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yd(e)?Ql:Jl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Le().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];jt.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(jt.min,Vi.min),jt.expandByPoint(Et),Et.addVectors(jt.max,Vi.max),jt.expandByPoint(Et)):(jt.expandByPoint(Vi.min),jt.expandByPoint(Vi.max))}jt.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Et.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(e,c),Et.add(vi)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new on(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new G,l[_]=new G;const c=new G,h=new G,p=new G,u=new je,m=new je,v=new je,M=new G,x=new G;function f(_,T,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),p.fromBufferAttribute(n,C),u.fromBufferAttribute(a,_),m.fromBufferAttribute(a,T),v.fromBufferAttribute(a,C),h.sub(c),p.sub(c),m.sub(u),v.sub(u);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(L),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(L),o[_].add(M),o[T].add(M),o[C].add(M),l[_].add(x),l[T].add(x),l[C].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,T=w.length;_<T;++_){const C=w[_],L=C.start,F=C.count;for(let V=L,I=L+F;V<I;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const N=new G,b=new G,E=new G,y=new G;function R(_){E.fromBufferAttribute(s,_),y.copy(E);const T=o[_];N.copy(T),N.sub(E.multiplyScalar(E.dot(T))).normalize(),b.crossVectors(y,T);const L=b.dot(l[_])<0?-1:1;r.setXYZW(_,N.x,N.y,N.z,L)}for(let _=0,T=w.length;_<T;++_){const C=w[_],L=C.start,F=C.count;for(let V=L,I=L+F;V<I;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new G,a=new G,r=new G,o=new G,l=new G,c=new G,h=new G,p=new G;if(e)for(let u=0,m=e.count;u<m;u+=3){const v=e.getX(u+0),M=e.getX(u+1),x=e.getX(u+2);s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,M),r.fromBufferAttribute(t,x),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h);let m=0,v=0;for(let M=0,x=l.length;M<x;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let f=0;f<h;f++)u[v++]=c[m++]}return new on(u,h,p)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){const u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],p=a[c];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fa=new G,Nu=new G,Iu=new Le;class zn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Fa.subVectors(n,t).cross(Nu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Fa),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Iu.getNormalMatrix(e),s=this.coplanarPoint(Fa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Du=0;class Li extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Yi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Dl,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wn=new G,Oa=new G,ws=new G,As=new G;class ec{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oa.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),As.copy(this.origin).sub(Oa);const a=e.distanceTo(t)*.5,r=-this.direction.dot(ws),o=As.dot(this.direction),l=-As.dot(ws),c=As.lengthSq(),h=Math.abs(1-r*r);let p,u,m,v;if(h>0)if(p=r*l-o,u=r*o-l,v=a*h,p>=0)if(u>=-v)if(u<=v){const M=1/h;p*=M,u*=M,m=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),m=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),m=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),m=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),m=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Oa).addScaledVector(ws,u),m}intersectSphere(e,t){if(e.radius<0)return null;wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-r.x,u=e.y-r.y,m=e.z-r.z,v=t.x-r.x,M=t.y-r.y,x=t.z-r.z,f=n.x-r.x,w=n.y-r.y,N=n.z-r.z,b=Math.abs(l),E=Math.abs(c),y=Math.abs(h);let R,_,T,C,L,F,V,I,z,q,$,ie;if(b>=E&&b>=y?(T=l,F=p,z=v,ie=f,l>=0?(R=c,_=h,C=u,L=m,V=M,I=x,q=w,$=N):(R=h,_=c,C=m,L=u,V=x,I=M,q=N,$=w)):E>=y?(T=c,F=u,z=M,ie=w,c>=0?(R=h,_=l,C=m,L=p,V=x,I=v,q=N,$=f):(R=l,_=h,C=p,L=m,V=v,I=x,q=f,$=N)):(T=h,F=m,z=x,ie=N,h>=0?(R=l,_=c,C=p,L=u,V=v,I=M,q=f,$=w):(R=c,_=l,C=u,L=p,V=M,I=v,q=w,$=f)),T===0)return null;const W=R/T,J=_/T,ee=1/T,Me=C-W*F,Ae=L-J*F,nt=V-W*z,ke=I-J*z,Ye=q-W*ie,Z=$-J*ie,te=Ye*ke-Z*nt,ve=Me*Z-Ae*Ye,Ne=nt*Ae-ke*Me;if(s){if(te<0||ve<0||Ne<0)return null}else if((te<0||ve<0||Ne<0)&&(te>0||ve>0||Ne>0))return null;const pe=te+ve+Ne;if(pe===0)return null;const Ue=ee*(te*F+ve*z+Ne*ie);return(pe>0?Ue<0:Ue>0)?null:this.at(Ue/pe,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qn extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ko=new pt,qn=new ec,Rs=new ia,zo=new G,Cs=new G,Ns=new G,Is=new G,Ba=new G,Ds=new G,Go=new G,Ps=new G;class ct extends Rt{constructor(e=new Vt,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){Ds.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],p=a[l];h!==0&&(Ba.fromBufferAttribute(p,e),r?Ds.addScaledVector(Ba,h):Ds.addScaledVector(Ba.sub(t),h))}t.add(Ds)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(a),qn.copy(e.ray).recast(e.near),!(Rs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Rs,zo)===null||qn.origin.distanceToSquared(zo)>(e.far-e.near)**2))&&(ko.copy(a).invert(),qn.copy(e.ray).applyMatrix4(ko),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){const x=u[v],f=r[x.materialIndex],w=Math.max(x.start,m.start),N=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let b=w,E=N;b<E;b+=3){const y=o.getX(b),R=o.getX(b+1),_=o.getX(b+2);s=Ls(this,f,e,n,c,h,p,y,R,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let x=v,f=M;x<f;x+=3){const w=o.getX(x),N=o.getX(x+1),b=o.getX(x+2);s=Ls(this,r,e,n,c,h,p,w,N,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){const x=u[v],f=r[x.materialIndex],w=Math.max(x.start,m.start),N=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let b=w,E=N;b<E;b+=3){const y=b,R=b+1,_=b+2;s=Ls(this,f,e,n,c,h,p,y,R,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let x=v,f=M;x<f;x+=3){const w=x,N=x+1,b=x+2;s=Ls(this,r,e,n,c,h,p,w,N,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Pu(i,e,t,n,s,a,r,o){let l;if(e.side===Gt?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===ti,o),l===null)return null;Ps.copy(o),Ps.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ps);return c<t.near||c>t.far?null:{distance:c,point:Ps.clone(),object:i}}function Ls(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,Cs),i.getVertexPosition(l,Ns),i.getVertexPosition(c,Is);const h=Pu(i,e,t,n,Cs,Ns,Is,Go);if(h){const p=new G;sn.getBarycoord(Go,Cs,Ns,Is,p),s&&(h.uv=sn.getInterpolatedAttribute(s,o,l,c,p,new je)),a&&(h.uv1=sn.getInterpolatedAttribute(a,o,l,c,p,new je)),r&&(h.normal=sn.getInterpolatedAttribute(r,o,l,c,p,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new G,materialIndex:0};sn.getNormal(Cs,Ns,Is,u.normal),h.face=u,h.barycoord=p}return h}class Lu extends Ot{constructor(e=null,t=1,n=1,s,a,r,o,l,c=At,h=At,p,u){super(null,r,o,l,c,h,s,a,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $n=new ia,Uu=new je(.5,.5),Us=new G;class Kr{constructor(e=new zn,t=new zn,n=new zn,s=new zn,a=new zn,r=new zn){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){const s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],p=a[5],u=a[6],m=a[7],v=a[8],M=a[9],x=a[10],f=a[11],w=a[12],N=a[13],b=a[14],E=a[15];if(s[0].setComponents(c-r,m-h,f-v,E-w).normalize(),s[1].setComponents(c+r,m+h,f+v,E+w).normalize(),s[2].setComponents(c+o,m+p,f+M,E+N).normalize(),s[3].setComponents(c-o,m-p,f-M,E-N).normalize(),n)s[4].setComponents(l,u,x,b).normalize(),s[5].setComponents(c-l,m-u,f-x,E-b).normalize();else if(s[4].setComponents(c-l,m-u,f-x,E-b).normalize(),t===xn)s[5].setComponents(c+l,m+u,f+x,E+b).normalize();else if(t===ns)s[5].setComponents(l,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);const t=Uu.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Us.x=s.normal.x>0?e.max.x:e.min.x,Us.y=s.normal.y>0?e.max.y:e.min.y,Us.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zr extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vo=new pt,Lr=new ec,Fs=new ia,Os=new G;class tc extends Rt{constructor(e=new Vt,t=new Zr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),Fs.radius+=a,e.ray.intersectsSphere(Fs)===!1)return;Vo.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Vo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let v=u,M=m;v<M;v++){const x=c.getX(v);Os.fromBufferAttribute(p,x),Ho(Os,x,l,s,e,t,this)}}else{const u=Math.max(0,r.start),m=Math.min(p.count,r.start+r.count);for(let v=u,M=m;v<M;v++)Os.fromBufferAttribute(p,v),Ho(Os,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ho(i,e,t,n,s,a,r){const o=Lr.distanceSqToPoint(i);if(o<t){const l=new G;Lr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class nc extends Ot{constructor(e=[],t=ni,n,s,a,r,o,l,c,h){super(e,t,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ss extends Ot{constructor(e,t,n=vn,s,a,r,o=At,l=At,c,h=In,p=1){if(h!==In&&h!==Jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Fu extends ss{constructor(e,t=vn,n=ni,s,a,r=At,o=At,l,c=In){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ic extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class si extends Vt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],p=[];let u=0,m=0;v("z","y","x",-1,-1,n,t,e,r,a,0),v("z","y","x",1,-1,n,t,-e,r,a,1),v("x","z","y",1,1,e,n,t,s,r,2),v("x","z","y",1,-1,e,n,-t,s,r,3),v("x","y","z",1,-1,e,t,n,s,a,4),v("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(p,2));function v(M,x,f,w,N,b,E,y,R,_,T){const C=b/R,L=E/_,F=b/2,V=E/2,I=y/2,z=R+1,q=_+1;let $=0,ie=0;const W=new G;for(let J=0;J<q;J++){const ee=J*L-V;for(let Me=0;Me<z;Me++){const Ae=Me*C-F;W[M]=Ae*w,W[x]=ee*N,W[f]=I,c.push(W.x,W.y,W.z),W[M]=0,W[x]=0,W[f]=y>0?1:-1,h.push(W.x,W.y,W.z),p.push(Me/R),p.push(1-J/_),$+=1}}for(let J=0;J<_;J++)for(let ee=0;ee<R;ee++){const Me=u+ee+z*J,Ae=u+ee+z*(J+1),nt=u+(ee+1)+z*(J+1),ke=u+(ee+1)+z*J;l.push(Me,Ae,ke),l.push(Ae,nt,ke),ie+=6}o.addGroup(m,ie,T),m+=ie,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ri extends Vt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],p=[],u=[],m=[];let v=0;const M=[],x=n/2;let f=0;w(),r===!1&&(e>0&&N(!0),t>0&&N(!1)),this.setIndex(h),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(m,2));function w(){const b=new G,E=new G;let y=0;const R=(t-e)/n;for(let _=0;_<=a;_++){const T=[],C=_/a,L=C*(t-e)+e;for(let F=0;F<=s;F++){const V=F/s,I=V*l+o,z=Math.sin(I),q=Math.cos(I);E.x=L*z,E.y=-C*n+x,E.z=L*q,p.push(E.x,E.y,E.z),b.set(z,R,q).normalize(),u.push(b.x,b.y,b.z),m.push(V,1-C),T.push(v++)}M.push(T)}for(let _=0;_<s;_++)for(let T=0;T<a;T++){const C=M[T][_],L=M[T+1][_],F=M[T+1][_+1],V=M[T][_+1];(e>0||T!==0)&&(h.push(C,L,V),y+=3),(t>0||T!==a-1)&&(h.push(L,F,V),y+=3)}c.addGroup(f,y,0),f+=y}function N(b){const E=v,y=new je,R=new G;let _=0;const T=b===!0?e:t,C=b===!0?1:-1;for(let F=1;F<=s;F++)p.push(0,x*C,0),u.push(0,C,0),m.push(.5,.5),v++;const L=v;for(let F=0;F<=s;F++){const I=F/s*l+o,z=Math.cos(I),q=Math.sin(I);R.x=T*q,R.y=x*C,R.z=T*z,p.push(R.x,R.y,R.z),u.push(0,C,0),y.x=z*.5+.5,y.y=q*.5*C+.5,m.push(y.x,y.y),v++}for(let F=0;F<s;F++){const V=E+F,I=L+F;b===!0?h.push(I,I+1,V):h.push(I+1,I,V),_+=3}c.addGroup(f,_,b===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jr extends Ri{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Jr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ei extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=e/o,u=t/l,m=[],v=[],M=[],x=[];for(let f=0;f<h;f++){const w=f*u-r;for(let N=0;N<c;N++){const b=N*p-a;v.push(b,-w,0),M.push(0,0,1),x.push(N/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const N=w+c*f,b=w+c*(f+1),E=w+1+c*(f+1),y=w+1+c*f;m.push(N,b,y),m.push(b,E,y)}this.setIndex(m),this.setAttribute("position",new Bt(v,3)),this.setAttribute("normal",new Bt(M,3)),this.setAttribute("uv",new Bt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ki extends Vt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],p=new G,u=new G,m=[],v=[],M=[],x=[];for(let f=0;f<=n;f++){const w=[],N=f/n,b=r+N*o,E=e*Math.cos(b),y=Math.sqrt(e*e-E*E);let R=0;f===0&&r===0?R=.5/t:f===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const T=_/t,C=s+T*a;p.x=-y*Math.cos(C),p.y=E,p.z=y*Math.sin(C),v.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),x.push(T+R,1-N),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const N=h[f][w+1],b=h[f][w],E=h[f+1][w],y=h[f+1][w+1];(f!==0||r>0)&&m.push(N,b,y),(f!==n-1||l<Math.PI)&&m.push(b,E,y)}this.setIndex(m),this.setAttribute("position",new Bt(v,3)),this.setAttribute("normal",new Bt(M,3)),this.setAttribute("uv",new Bt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ni(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Wo(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Wo(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Ni(i[t]);for(const s in n)e[s]=n[s]}return e}function Wo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ou(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Bu={clone:Ni,merge:Ft};var ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ku,this.fragmentShader=zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new je().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gu extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ka extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vu extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hu extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qr extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const za=new pt,Xo=new G,jo=new G;class ac{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Xo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xo),jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(za,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===ns||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bs=new G,ks=new Pi,hn=new G;class rc extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bs,ks,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bs,ks,hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Bs,ks,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bs,ks,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kn=new G,Yo=new je,qo=new je;class Yt extends rc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,Yo,qo),t.subVectors(qo,Yo)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wu extends ac{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}}class $o extends Qr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class eo extends rc{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xu extends ac{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ju extends Qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Xu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Yu extends Qr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Si=-90,bi=1;class qu extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(Si,bi,e,t);s.layers=this.layers,this.add(s);const a=new Yt(Si,bi,e,t);a.layers=this.layers,this.add(a);const r=new Yt(Si,bi,e,t);r.layers=this.layers,this.add(r);const o=new Yt(Si,bi,e,t);o.layers=this.layers,this.add(o);const l=new Yt(Si,bi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Si,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class $u extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ku{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ro=class ro{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=s,this}};ro.prototype.isMatrix2=!0;let Ko=ro;function Zo(i,e,t,n){const s=Zu(n);switch(t){case Xl:return i*e;case Yl:return i*e/s.components*s.byteLength;case Vr:return i*e/s.components*s.byteLength;case ii:return i*e*2/s.components*s.byteLength;case Hr:return i*e*2/s.components*s.byteLength;case jl:return i*e*3/s.components*s.byteLength;case an:return i*e*4/s.components*s.byteLength;case Wr:return i*e*4/s.components*s.byteLength;case Hs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xs:case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sr:case rr:return Math.max(i,16)*Math.max(e,8)/4;case ir:case ar:return Math.max(i,8)*Math.max(e,8)/2;case or:case lr:case dr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cr:case Ks:case hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _r:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case br:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Er:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ar:case Rr:case Cr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nr:case Ir:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zs:case Dr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zu(i){switch(i){case qt:case Gl:return{byteLength:1,components:1};case es:case Vl:case Sn:return{byteLength:2,components:1};case zr:case Gr:return{byteLength:2,components:4};case vn:case kr:case gn:return{byteLength:4,components:1};case Hl:case Wl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Or}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Or);function oc(){let i=null,e=!1,t=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Ju(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((m,v)=>m.start-v.start);let u=0;for(let m=1;m<p.length;m++){const v=p[u],M=p[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,p[u]=M)}p.length=u+1;for(let m=0,v=p.length;m<v;m++){const M=p[m];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eh=`#ifdef USE_ALPHAHASH
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
#endif`,th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
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
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oh=`#ifdef USE_BATCHING
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
#endif`,lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hh=`#ifdef USE_IRIDESCENCE
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
#endif`,fh=`#ifdef USE_BUMPMAP
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_h=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mh=`#define PI 3.141592653589793
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
} // validated`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eh=`vec3 transformedNormal = objectNormal;
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
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zh=`#ifdef USE_GRADIENTMAP
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
}`,Gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xh=`#ifdef USE_ENVMAP
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
#endif`,jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kh=`PhysicalMaterial material;
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
#endif`,Zh=`uniform sampler2D dfgLUT;
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
}`,Jh=`
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
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,df=`#if defined( USE_POINTS_UV )
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
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
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
#endif`,xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,If=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kf=`float getShadowMask() {
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
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qf=`#ifdef USE_TRANSMISSION
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
#endif`,$f=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
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
}`,op=`#if DEPTH_PACKING == 3200
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
}`,lp=`#define DISTANCE
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
}`,cp=`#define DISTANCE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#include <common>
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#define LAMBERT
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
}`,xp=`#define LAMBERT
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
}`,_p=`#define MATCAP
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
}`,vp=`#define MATCAP
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
}`,Sp=`#define NORMAL
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
}`,bp=`#define NORMAL
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
}`,Mp=`#define PHONG
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
}`,yp=`#define PHONG
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
}`,Ep=`#define STANDARD
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
}`,Tp=`#define STANDARD
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
}`,wp=`#define TOON
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
}`,Ap=`#define TOON
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
}`,Rp=`uniform float size;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Ip=`uniform vec3 color;
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
}`,Dp=`uniform float rotation;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Qu,alphahash_pars_fragment:eh,alphamap_fragment:th,alphamap_pars_fragment:nh,alphatest_fragment:ih,alphatest_pars_fragment:sh,aomap_fragment:ah,aomap_pars_fragment:rh,batching_pars_vertex:oh,batching_vertex:lh,begin_vertex:ch,beginnormal_vertex:dh,bsdfs:uh,iridescence_fragment:hh,bumpmap_pars_fragment:fh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:gh,clipping_planes_vertex:xh,color_fragment:_h,color_pars_fragment:vh,color_pars_vertex:Sh,color_vertex:bh,common:Mh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Eh,displacementmap_pars_vertex:Th,displacementmap_vertex:wh,emissivemap_fragment:Ah,emissivemap_pars_fragment:Rh,colorspace_fragment:Ch,colorspace_pars_fragment:Nh,envmap_fragment:Ih,envmap_common_pars_fragment:Dh,envmap_pars_fragment:Ph,envmap_pars_vertex:Lh,envmap_physical_pars_fragment:Xh,envmap_vertex:Uh,fog_vertex:Fh,fog_pars_vertex:Oh,fog_fragment:Bh,fog_pars_fragment:kh,gradientmap_pars_fragment:zh,lightmap_pars_fragment:Gh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Hh,lights_pars_begin:Wh,lights_toon_fragment:jh,lights_toon_pars_fragment:Yh,lights_phong_fragment:qh,lights_phong_pars_fragment:$h,lights_physical_fragment:Kh,lights_physical_pars_fragment:Zh,lights_fragment_begin:Jh,lights_fragment_maps:Qh,lights_fragment_end:ef,lightprobes_pars_fragment:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:af,logdepthbuf_vertex:rf,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:df,metalnessmap_fragment:uf,metalnessmap_pars_fragment:hf,morphinstance_vertex:ff,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:xf,normal_fragment_begin:_f,normal_fragment_maps:vf,normal_pars_fragment:Sf,normal_pars_vertex:bf,normal_vertex:Mf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:wf,iridescence_pars_fragment:Af,opaque_fragment:Rf,packing:Cf,premultiplied_alpha_fragment:Nf,project_vertex:If,dithering_fragment:Df,dithering_pars_fragment:Pf,roughnessmap_fragment:Lf,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Of,shadowmap_vertex:Bf,shadowmask_pars_fragment:kf,skinbase_vertex:zf,skinning_pars_vertex:Gf,skinning_vertex:Vf,skinnormal_vertex:Hf,specularmap_fragment:Wf,specularmap_pars_fragment:Xf,tonemapping_fragment:jf,tonemapping_pars_fragment:Yf,transmission_fragment:qf,transmission_pars_fragment:$f,uv_pars_fragment:Kf,uv_pars_vertex:Zf,uv_vertex:Jf,worldpos_vertex:Qf,background_vert:ep,background_frag:tp,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:sp,cube_frag:ap,depth_vert:rp,depth_frag:op,distance_vert:lp,distance_frag:cp,equirect_vert:dp,equirect_frag:up,linedashed_vert:hp,linedashed_frag:fp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:xp,meshmatcap_vert:_p,meshmatcap_frag:vp,meshnormal_vert:Sp,meshnormal_frag:bp,meshphong_vert:Mp,meshphong_frag:yp,meshphysical_vert:Ep,meshphysical_frag:Tp,meshtoon_vert:wp,meshtoon_frag:Ap,points_vert:Rp,points_frag:Cp,shadow_vert:Np,shadow_frag:Ip,sprite_vert:Dp,sprite_frag:Pp},fe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},pn={basic:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ft([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ft([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ft([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ft([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ft([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ft([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ft([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ft([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Ft([fe.common,fe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Ft([fe.lights,fe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};pn.physical={uniforms:Ft([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const zs={r:0,b:0,g:0},Lp=new pt,lc=new Le;lc.set(-1,0,0,0,1,0,0,0,1);function Up(i,e,t,n,s,a){const r=new Ge(0);let o=s===!0?0:1,l,c,h=null,p=0,u=null;function m(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const b=w.backgroundBlurriness>0;N=e.get(N,b)}return N}function v(w){let N=!1;const b=m(w);b===null?x(r,o):b&&b.isColor&&(x(b,1),N=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(w,N){const b=m(N);b&&(b.isCubeTexture||b.mapping===na)?(c===void 0&&(c=new ct(new si(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Ni(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lp.makeRotationFromEuler(N.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lc),c.material.toneMapped=Xe.getTransfer(b.colorSpace)!==st,(h!==b||p!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ct(new ei(2,2),new ln({name:"BackgroundMaterial",uniforms:Ni(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(b.colorSpace)!==st,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||p!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function x(w,N){w.getRGB(zs,sc(i)),t.buffers.color.setClear(zs.r,zs.g,zs.b,N,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(w,N=1){r.set(w),o=N,x(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,x(r,o)},render:v,addToRenderList:M,dispose:f}}function Fp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let a=s,r=!1;function o(L,F,V,I,z){let q=!1;const $=p(L,I,V,F);a!==$&&(a=$,c(a.object)),q=m(L,I,V,z),q&&v(L,I,V,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,b(L,F,V,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function p(L,F,V,I){const z=I.wireframe===!0;let q=n[F.id];q===void 0&&(q={},n[F.id]=q);const $=L.isInstancedMesh===!0?L.id:0;let ie=q[$];ie===void 0&&(ie={},q[$]=ie);let W=ie[V.id];W===void 0&&(W={},ie[V.id]=W);let J=W[z];return J===void 0&&(J=u(l()),W[z]=J),J}function u(L){const F=[],V=[],I=[];for(let z=0;z<t;z++)F[z]=0,V[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:I,object:L,attributes:{},index:null}}function m(L,F,V,I){const z=a.attributes,q=F.attributes;let $=0;const ie=V.getAttributes();for(const W in ie)if(ie[W].location>=0){const ee=z[W];let Me=q[W];if(Me===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(Me=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(Me=L.instanceColor)),ee===void 0||ee.attribute!==Me||Me&&ee.data!==Me.data)return!0;$++}return a.attributesNum!==$||a.index!==I}function v(L,F,V,I){const z={},q=F.attributes;let $=0;const ie=V.getAttributes();for(const W in ie)if(ie[W].location>=0){let ee=q[W];ee===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const Me={};Me.attribute=ee,ee&&ee.data&&(Me.data=ee.data),z[W]=Me,$++}a.attributes=z,a.attributesNum=$,a.index=I}function M(){const L=a.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function x(L){f(L,0)}function f(L,F){const V=a.newAttributes,I=a.enabledAttributes,z=a.attributeDivisors;V[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),z[L]!==F&&(i.vertexAttribDivisor(L,F),z[L]=F)}function w(){const L=a.newAttributes,F=a.enabledAttributes;for(let V=0,I=F.length;V<I;V++)F[V]!==L[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function N(L,F,V,I,z,q,$){$===!0?i.vertexAttribIPointer(L,F,V,z,q):i.vertexAttribPointer(L,F,V,I,z,q)}function b(L,F,V,I){M();const z=I.attributes,q=V.getAttributes(),$=F.defaultAttributeValues;for(const ie in q){const W=q[ie];if(W.location>=0){let J=z[ie];if(J===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const ee=J.normalized,Me=J.itemSize,Ae=e.get(J);if(Ae===void 0)continue;const nt=Ae.buffer,ke=Ae.type,Ye=Ae.bytesPerElement,Z=ke===i.INT||ke===i.UNSIGNED_INT||J.gpuType===kr;if(J.isInterleavedBufferAttribute){const te=J.data,ve=te.stride,Ne=J.offset;if(te.isInstancedInterleavedBuffer){for(let pe=0;pe<W.locationSize;pe++)f(W.location+pe,te.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let pe=0;pe<W.locationSize;pe++)x(W.location+pe);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let pe=0;pe<W.locationSize;pe++)N(W.location+pe,Me/W.locationSize,ke,ee,ve*Ye,(Ne+Me/W.locationSize*pe)*Ye,Z)}else{if(J.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)f(W.location+te,J.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let te=0;te<W.locationSize;te++)x(W.location+te);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let te=0;te<W.locationSize;te++)N(W.location+te,Me/W.locationSize,ke,ee,Me*Ye,Me/W.locationSize*te*Ye,Z)}}else if($!==void 0){const ee=$[ie];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}w()}function E(){T();for(const L in n){const F=n[L];for(const V in F){const I=F[V];for(const z in I){const q=I[z];for(const $ in q)h(q[$].object),delete q[$];delete I[z]}}delete n[L]}}function y(L){if(n[L.id]===void 0)return;const F=n[L.id];for(const V in F){const I=F[V];for(const z in I){const q=I[z];for(const $ in q)h(q[$].object),delete q[$];delete I[z]}}delete n[L.id]}function R(L){for(const F in n){const V=n[F];for(const I in V){const z=V[I];if(z[L.id]===void 0)continue;const q=z[L.id];for(const $ in q)h(q[$].object),delete q[$];delete z[L.id]}}}function _(L){for(const F in n){const V=n[F],I=L.isInstancedMesh===!0?L.id:0,z=V[I];if(z!==void 0){for(const q in z){const $=z[q];for(const ie in $)h($[ie].object),delete $[ie];delete z[q]}delete V[I],Object.keys(V).length===0&&delete n[F]}}}function T(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:x,disableUnusedAttributes:w}}function Op(i,e,t){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];t.update(u,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Bp(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==an&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qt&&R!==gn&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:b,maxSamples:E,samples:y}}function kp(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new zn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,m){const v=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,f=i.get(p);if(!s||v===null||v.length===0||a&&!x)a?h(null):c();else{const w=a?0:n,N=w*4;let b=f.clippingState||null;l.value=b,b=h(v,u,N,m);for(let E=0;E!==N;++E)b[E]=t[E];f.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,m,v){const M=p!==null?p.length:0;let x=null;if(M!==0){if(x=l.value,v!==!0||x===null){const f=m+M*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(x===null||x.length<f)&&(x=new Float32Array(f));for(let N=0,b=m;N!==M;++N,b+=4)r.copy(p[N]).applyMatrix4(w,o),r.normal.toArray(x,b),x[b+3]=r.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}const Ti=4,zp=6,Gp=20,Vp=256,Hi=new eo,Jo=new Ge;let Ga=null,Va=0,Ha=0,Wa=!1;const Hp=new G,Kn=new G;class Qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){const{size:r=256,position:o=Hp}=a;Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Va,Ha),this._renderer.xr.enabled=Wa,e.scissorTest=!1,Mi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Sn,format:an,colorSpace:Js,depthBuffer:!1},s=el(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wp(a)),this._blurMaterial=jp(a,e,t),this._ggxMaterial=Xp(a,e,t)}return s}_compileMaterial(e){const t=new ct(new Vt,e);this._renderer.compile(t,Hi)}_sceneToCubeUV(e,t,n,s,a){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(Jo),p.toneMapping=_n,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new si,new Qn({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,x=M.material;let f=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,f=!0):(x.color.copy(Jo),f=!0);for(let N=0;N<6;N++){const b=N%3;b===0?(l.up.set(0,c[N],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[N],a.y,a.z)):b===1?(l.up.set(0,0,c[N]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[N],a.z)):(l.up.set(0,c[N],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[N]));const E=this._cubeSize;Mi(s,b*E,N>2?E:0,E,E),p.setRenderTarget(s),f&&p.render(M,l),p.render(e,l)}p.toneMapping=m,p.autoClear=u,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ni||e.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tl());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Mi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Hi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,m=p*u,{_lodMax:v}=this,M=this._sizeLods[n],x=3*M*(n>v-Ti?n-v+Ti:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,Mi(a,x,f,3*M,2*M),s.setRenderTarget(a),s.render(o,Hi),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-n,Mi(e,x,f,3*M,2*M),s.setRenderTarget(e),s.render(o,Hi)}_blur(e,t,n,s){const a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,n,r),this._blurPass(a,e,n,n,r)}_blurPass(e,t,n,s,a){const r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],p=3*h*(s>this._lodMax-Ti?s-this._lodMax+Ti:0),u=4*(this._cubeSize-h);Mi(t,p,u,3*h,2*h),r.setRenderTarget(t),r.render(l,Hi)}}function Wp(i){const e=[],t=[];let n=i;const s=i-Ti+1+zp;for(let a=0;a<s;a++){const r=Math.pow(2,n);e.push(r);const o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,v=new Float32Array(m*u*p),M=new Float32Array(m*u*p);for(let f=0;f<p;f++){const w=f%3*2/3-1,N=f>2?0:-1,b=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];v.set(b,m*u*f);for(let E=0;E<u;E++){const y=h[E*2]*2-1,R=h[E*2+1]*2-1;f===0?Kn.set(1,R,y):f===1?Kn.set(-y,1,-R):f===2?Kn.set(-y,R,1):f===3?Kn.set(-1,R,-y):f===4?Kn.set(-y,-1,R):Kn.set(y,R,-1),Kn.toArray(M,(f*u+E)*m)}}const x=new Vt;x.setAttribute("position",new on(v,m)),x.setAttribute("outputDirection",new on(M,m)),t.push(new ct(x,null)),n>Ti&&n--}return{lodMeshes:t,sizeLods:e}}function el(i,e,t){const n=new rn(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xp(i,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function jp(i,e,t){return new ln({name:"SphericalGaussianBlur",defines:{SAMPLES:Gp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function tl(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function nl(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function sa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class cc extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new si(5,5,5),a=new ln({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Cn});a.uniforms.tEquirect.value=t;const r=new ct(s,a),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Lt),new qu(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}function Yp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?r(u):a(u)}function a(u){if(u&&u.isTexture){const m=u.mapping;if(m===ma||m===ga)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const M=new cc(v.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const m=u.mapping,v=m===ma||m===ga,M=m===ni||m===Ci;if(v||M){let x=t.get(u);const f=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Qo(i)),x=v?n.fromEquirectangular(u,x):n.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),x.texture;if(x!==void 0)return x.texture;{const w=u.image;return v&&w&&w.height>0||M&&w&&l(w)?(n===null&&(n=new Qo(i)),x=v?n.fromEquirectangular(u):n.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function o(u,m){return m===ma?u.mapping=ni:m===ga&&(u.mapping=Ci),u}function l(u){let m=0;const v=6;for(let M=0;M<v;M++)u[M]!==void 0&&m++;return m===v}function c(u){const m=u.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function qp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&wi("WebGLRenderer: "+n+" extension not supported."),s}}}function $p(i,e,t,n){const s={},a=new WeakMap;function r(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete s[u.id];const m=a.get(u);m&&(e.remove(m),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function c(p){const u=[],m=p.index,v=p.attributes.position;let M=0;if(v===void 0)return;if(m!==null){const w=m.array;M=m.version;for(let N=0,b=w.length;N<b;N+=3){const E=w[N+0],y=w[N+1],R=w[N+2];u.push(E,y,y,R,R,E)}}else{const w=v.array;M=v.version;for(let N=0,b=w.length/3-1;N<b;N+=3){const E=N+0,y=N+1,R=N+2;u.push(E,y,y,R,R,E)}}const x=new(v.count>=65535?Ql:Jl)(u,1);x.version=M;const f=a.get(p);f&&e.remove(f),a.set(p,x)}function h(p){const u=a.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Kp(i,e,t){let n;function s(p){n=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){i.drawElements(n,u,a,p*r),t.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,a,p*r,m),t.update(u,n,m))}function h(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,p,0,m);let M=0;for(let x=0;x<m;x++)M+=u[x];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Zp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:Je("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jp(i,e,t){const n=new WeakMap,s=new ft;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==p){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let N=0;m===!0&&(N=1),v===!0&&(N=2),M===!0&&(N=3);let b=o.attributes.position.count*N,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const y=new Float32Array(b*E*4*p),R=new $l(y,b,E,p);R.type=gn,R.needsUpdate=!0;const _=N*4;for(let C=0;C<p;C++){const L=x[C],F=f[C],V=w[C],I=b*E*4*C;for(let z=0;z<L.count;z++){const q=z*_;m===!0&&(s.fromBufferAttribute(L,z),y[I+q+0]=s.x,y[I+q+1]=s.y,y[I+q+2]=s.z,y[I+q+3]=0),v===!0&&(s.fromBufferAttribute(F,z),y[I+q+4]=s.x,y[I+q+5]=s.y,y[I+q+6]=s.z,y[I+q+7]=0),M===!0&&(s.fromBufferAttribute(V,z),y[I+q+8]=s.x,y[I+q+9]=s.y,y[I+q+10]=s.z,y[I+q+11]=V.itemSize===4?s.w:1)}}u={count:p,texture:R,size:new je(b,E)},n.set(o,u),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function Qp(i,e,t,n,s){let a=new WeakMap;function r(c){const h=s.render.frame,p=c.geometry,u=e.get(c,p);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;a.get(m)!==h&&(m.update(),a.set(m,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const em={[Ll]:"LINEAR_TONE_MAPPING",[Ul]:"REINHARD_TONE_MAPPING",[Fl]:"CINEON_TONE_MAPPING",[Br]:"ACES_FILMIC_TONE_MAPPING",[Bl]:"AGX_TONE_MAPPING",[kl]:"NEUTRAL_TONE_MAPPING",[Ol]:"CUSTOM_TONE_MAPPING"};function tm(i,e,t,n,s,a){const r=new rn(e,t,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Vt;c.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bt([0,2,0,0,2,0],2));const h=new Gu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ct(c,h),u=new eo(-1,1,1,-1,0,1);let m=null,v=null,M=!1,x,f=null,w=[],N=!1;this.setSize=function(b,E){r.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let y=0;y<w.length;y++){const R=w[y];R.setSize&&R.setSize(b,E)}},this.setEffects=function(b){w=b,N=w.length>0&&w[0].isRenderPass===!0;const E=r.width,y=r.height;w.length>0&&o===null&&(o=new rn(E,y,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(E,y,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<w.length;R++){const _=w[R];_.setSize&&_.setSize(E,y)}},this.begin=function(b,E){if(M||b.toneMapping===_n&&w.length===0)return!1;if(f=E,E!==null){const y=E.width,R=E.height;(r.width!==y||r.height!==R)&&this.setSize(y,R)}return N===!1&&b.setRenderTarget(r),x=b.toneMapping,b.toneMapping=_n,!0},this.hasRenderPass=function(){return N},this.end=function(b,E){b.toneMapping=x,M=!0;let y=r,R=o;for(let _=0;_<w.length;_++){const T=w[_];T.enabled!==!1&&(T.render(b,R,y,E),T.needsSwap!==!1&&(y=R,R=R===o?l:o))}if(m!==b.outputColorSpace||v!==b.toneMapping){m=b.outputColorSpace,v=b.toneMapping,h.defines={},Xe.getTransfer(m)===st&&(h.defines.SRGB_TRANSFER="");const _=em[v];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(f),b.render(p,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const dc=new Ot,Ur=new ss(1,1),uc=new $l,hc=new _u,fc=new nc,il=[],sl=[],al=new Float32Array(16),rl=new Float32Array(9),ol=new Float32Array(4);function Ui(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=il[s];if(a===void 0&&(a=new Float32Array(s),il[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function aa(i,e){let t=sl[e];t===void 0&&(t=new Int32Array(e),sl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;ol.set(n),i.uniformMatrix2fv(this.addr,!1,ol),bt(t,n)}}function om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;rl.set(n),i.uniformMatrix3fv(this.addr,!1,rl),bt(t,n)}}function lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;al.set(n),i.uniformMatrix4fv(this.addr,!1,al),bt(t,n)}}function cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function fm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function xm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Ur.compareFunction=t.isReversedDepthBuffer()?jr:Xr,a=Ur):a=dc,t.setTexture2D(e||a,s)}function _m(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hc,s)}function vm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fc,s)}function Sm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||uc,s)}function bm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return am;case 35674:return rm;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return dm;case 35668:case 35672:return um;case 35669:case 35673:return hm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return Sm}}function Mm(i,e){i.uniform1fv(this.addr,e)}function ym(i,e){const t=Ui(e,this.size,2);i.uniform2fv(this.addr,t)}function Em(i,e){const t=Ui(e,this.size,3);i.uniform3fv(this.addr,t)}function Tm(i,e){const t=Ui(e,this.size,4);i.uniform4fv(this.addr,t)}function wm(i,e){const t=Ui(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Am(i,e){const t=Ui(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rm(i,e){const t=Ui(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cm(i,e){i.uniform1iv(this.addr,e)}function Nm(i,e){i.uniform2iv(this.addr,e)}function Im(i,e){i.uniform3iv(this.addr,e)}function Dm(i,e){i.uniform4iv(this.addr,e)}function Pm(i,e){i.uniform1uiv(this.addr,e)}function Lm(i,e){i.uniform2uiv(this.addr,e)}function Um(i,e){i.uniform3uiv(this.addr,e)}function Fm(i,e){i.uniform4uiv(this.addr,e)}function Om(i,e,t){const n=this.cache,s=e.length,a=aa(t,s);St(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=Ur:r=dc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function Bm(i,e,t){const n=this.cache,s=e.length,a=aa(t,s);St(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||hc,a[r])}function km(i,e,t){const n=this.cache,s=e.length,a=aa(t,s);St(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||fc,a[r])}function zm(i,e,t){const n=this.cache,s=e.length,a=aa(t,s);St(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||uc,a[r])}function Gm(i){switch(i){case 5126:return Mm;case 35664:return ym;case 35665:return Em;case 35666:return Tm;case 35674:return wm;case 35675:return Am;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Nm;case 35668:case 35672:return Im;case 35669:case 35673:return Dm;case 5125:return Pm;case 36294:return Lm;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return zm}}class Vm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bm(t.type)}}class Hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gm(t.type)}}class Wm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function ll(i,e){i.seq.push(e),i.map[e.id]=e}function Xm(i,e,t){const n=i.name,s=n.length;for(Xa.lastIndex=0;;){const a=Xa.exec(n),r=Xa.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){ll(t,c===void 0?new Vm(o,i,e):new Hm(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Wm(o),ll(t,p)),t=p}}}class Ys{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);Xm(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function cl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const jm=37297;let Ym=0;function qm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const dl=new Le;function $m(i){Xe._getMatrix(dl,Xe.workingColorSpace,i);const e=`mat3( ${dl.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Qs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ul(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+qm(i.getShaderSource(e),o)}else return a}function Km(i,e){const t=$m(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Zm={[Ll]:"Linear",[Ul]:"Reinhard",[Fl]:"Cineon",[Br]:"ACESFilmic",[Bl]:"AgX",[kl]:"Neutral",[Ol]:"Custom"};function Jm(i,e){const t=Zm[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gs=new G;function Qm(){Xe.getLuminanceCoefficients(Gs);const i=Gs.x.toFixed(4),e=Gs.y.toFixed(4),t=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function t0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function ji(i){return i!==""}function hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fr(i){return i.replace(i0,a0)}const s0=new Map;function a0(i,e){let t=Oe[e];if(t===void 0){const n=s0.get(e);if(n!==void 0)t=Oe[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fr(t)}const r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(i){return i.replace(r0,o0)}function o0(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function ml(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const l0={[Vs]:"SHADOWMAP_TYPE_PCF",[Xi]:"SHADOWMAP_TYPE_VSM"};function c0(i){return l0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const d0={[ni]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE_UV"};function u0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":d0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const h0={[Ci]:"ENVMAP_MODE_REFRACTION"};function f0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":h0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const p0={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[Ld]:"ENVMAP_BLENDING_MIX",[Ud]:"ENVMAP_BLENDING_ADD"};function m0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":p0[i.combine]||"ENVMAP_BLENDING_NONE"}function g0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function x0(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=c0(t),c=u0(t),h=f0(t),p=m0(t),u=g0(t),m=e0(t),v=t0(a),M=s.createProgram();let x,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ji).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ji).join(`
`),f.length>0&&(f+=`
`)):(x=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),f=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Oe.tonemapping_pars_fragment:"",t.toneMapping!==_n?Jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Km("linearToOutputTexel",t.outputColorSpace),Qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),r=Fr(r),r=hl(r,t),r=fl(r,t),o=Fr(o),o=hl(o,t),o=fl(o,t),r=pl(r),o=pl(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const N=w+x+r,b=w+f+o,E=cl(s,s.VERTEX_SHADER,N),y=cl(s,s.FRAGMENT_SHADER,b);s.attachShader(M,E),s.attachShader(M,y),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(M)||"",V=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(y)||"",z=F.trim(),q=V.trim(),$=I.trim();let ie=!0,W=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,y);else{const J=ul(s,E,"vertex"),ee=ul(s,y,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+J+`
`+ee)}else z!==""?Ie("WebGLProgram: Program Info Log:",z):(q===""||$==="")&&(W=!1);W&&(L.diagnostics={runnable:ie,programLog:z,vertexShader:{log:q,prefix:x},fragmentShader:{log:$,prefix:f}})}s.deleteShader(E),s.deleteShader(y),_=new Ys(s,M),T=n0(s,M)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,jm)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ym++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=y,this}let _0=0;class v0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new S0(e),t.set(e,n)),n}}class S0{constructor(e){this.id=_0++,this.code=e,this.usedTimes=0}}function b0(i){return i===ii||i===Ks||i===Zs}function M0(i,e,t,n,s,a){const r=new Kl,o=new v0,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,T,C,L,F,V){const I=L.fog,z=F.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ie=e.get(_.envMap||q,$),W=ie&&ie.mapping===na?ie.image.height:null,J=m[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Me=ee!==void 0?ee.length:0;let Ae=0;z.morphAttributes.position!==void 0&&(Ae=1),z.morphAttributes.normal!==void 0&&(Ae=2),z.morphAttributes.color!==void 0&&(Ae=3);let nt,ke,Ye,Z;if(J){const rt=pn[J];nt=rt.vertexShader,ke=rt.fragmentShader}else{nt=_.vertexShader,ke=_.fragmentShader;const rt=o.getVertexShaderStage(_),Ke=o.getFragmentShaderStage(_);o.update(_,rt,Ke),Ye=rt.id,Z=Ke.id}const te=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ne=F.isInstancedMesh===!0,pe=F.isBatchedMesh===!0,Ue=!!_.map,xt=!!_.matcap,Fe=!!ie,He=!!_.aoMap,at=!!_.lightMap,ze=!!_.bumpMap&&_.wireframe===!1,lt=!!_.normalMap,ut=!!_.displacementMap,Ct=!!_.emissiveMap,dt=!!_.metalnessMap,mt=!!_.roughnessMap,U=_.anisotropy>0,Mt=_.clearcoat>0,Qe=_.dispersion>0,A=_.retroreflectivity>0,g=_.iridescence>0,O=_.sheen>0,H=_.transmission>0,Y=U&&!!_.anisotropyMap,se=Mt&&!!_.clearcoatMap,ae=Mt&&!!_.clearcoatNormalMap,K=Mt&&!!_.clearcoatRoughnessMap,Q=g&&!!_.iridescenceMap,re=g&&!!_.iridescenceThicknessMap,we=O&&!!_.sheenColorMap,de=O&&!!_.sheenRoughnessMap,oe=!!_.specularMap,Te=!!_.specularColorMap,Ce=!!_.specularIntensityMap,De=H&&!!_.transmissionMap,P=H&&!!_.thicknessMap,le=!!_.gradientMap,j=!!_.alphaMap,ce=_.alphaTest>0,me=!!_.alphaHash,ne=!!_.extensions;let Re=_n;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Re=i.toneMapping);const ye={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:nt,fragmentShader:ke,defines:_.defines,customVertexShaderID:Ye,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:pe,batchingColor:pe&&F._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,instancingMorph:Ne&&F.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ue,matcap:xt,envMap:Fe,envMapMode:Fe&&ie.mapping,envMapCubeUVHeight:W,aoMap:He,lightMap:at,bumpMap:ze,normalMap:lt,displacementMap:ut,emissiveMap:Ct,normalMapObjectSpace:lt&&_.normalMapType===Bd,normalMapTangentSpace:lt&&_.normalMapType===Pr,packedNormalMap:lt&&_.normalMapType===Pr&&b0(_.normalMap.format),metalnessMap:dt,roughnessMap:mt,anisotropy:U,anisotropyMap:Y,clearcoat:Mt,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:K,dispersion:Qe,retroreflection:A,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:O,sheenColorMap:we,sheenRoughnessMap:de,specularMap:oe,specularColorMap:Te,specularIntensityMap:Ce,transmission:H,transmissionMap:De,thicknessMap:P,gradientMap:le,opaque:_.transparent===!1&&_.blending===Yi&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:ce,alphaHash:me,combine:_.combine,mapUv:Ue&&v(_.map.channel),aoMapUv:He&&v(_.aoMap.channel),lightMapUv:at&&v(_.lightMap.channel),bumpMapUv:ze&&v(_.bumpMap.channel),normalMapUv:lt&&v(_.normalMap.channel),displacementMapUv:ut&&v(_.displacementMap.channel),emissiveMapUv:Ct&&v(_.emissiveMap.channel),metalnessMapUv:dt&&v(_.metalnessMap.channel),roughnessMapUv:mt&&v(_.roughnessMap.channel),anisotropyMapUv:Y&&v(_.anisotropyMap.channel),clearcoatMapUv:se&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:de&&v(_.sheenRoughnessMap.channel),specularMapUv:oe&&v(_.specularMap.channel),specularColorMapUv:Te&&v(_.specularColorMap.channel),specularIntensityMapUv:Ce&&v(_.specularIntensityMap.channel),transmissionMapUv:De&&v(_.transmissionMap.channel),thicknessMapUv:P&&v(_.thicknessMap.channel),alphaMapUv:j&&v(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(lt||U),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Ue||j),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ae,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ue&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:Ct&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mn,flipSided:_.side===Gt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function x(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(T,_),w(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function f(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function N(_){const T=m[_.type];let C;if(T){const L=pn[T];C=Bu.clone(L.uniforms)}else C=_.uniforms;return C}function b(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new x0(i,T,_,s),c.push(C),h.set(T,C)),C}function E(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:N,acquireProgram:b,releaseProgram:E,releaseShaderCache:y,programs:c,dispose:R}}function y0(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function E0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xl(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,v,M,x,f){let w=i[e];return w===void 0?(w={id:u.id,object:u,geometry:m,material:v,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:x,group:f},i[e]=w):(w.id=u.id,w.object=u,w.geometry=m,w.material=v,w.materialVariant=r(u),w.groupOrder=M,w.renderOrder=u.renderOrder,w.z=x,w.group=f),e++,w}function l(u,m,v,M,x,f,w){w.reversedDepth===!0&&(x=-x);const N=o(u,m,v,M,x,f);v.transmission>0?n.push(N):v.transparent===!0?s.push(N):t.push(N)}function c(u,m,v,M,x,f){const w=o(u,m,v,M,x,f);v.transmission>0?n.unshift(w):v.transparent===!0?s.unshift(w):t.unshift(w)}function h(u,m){t.length>1&&t.sort(u||E0),n.length>1&&n.sort(m||gl),s.length>1&&s.sort(m||gl)}function p(){for(let u=e,m=i.length;u<m;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:p,sort:h}}function T0(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new xl,i.set(n,[r])):s>=a.length?(r=new xl,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function w0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ge};break;case"SpotLight":t={position:new G,direction:new G,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function A0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let R0=0;function C0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function N0(i){const e=new w0,t=A0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,a=new pt,r=new pt;function o(c){let h=0,p=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,v=0,M=0,x=0,f=0,w=0,N=0,b=0,E=0,y=0,R=0,_=0,T=0,C=0;c.sort(C0);for(let F=0,V=c.length;F<V;F++){const I=c[F],z=I.color,q=I.intensity,$=I.distance;let ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ii?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*q,p+=z.g*q,u+=z.b*q;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],q);C++}else if(I.isSunLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[v]=ee,n.sunShadowMap[v]=ie;const Me=J.getViewportCount();for(let Ae=0;Ae<Me;Ae++)n.sunShadowMatrix[M+Ae]=J.getMatrix(Ae),n.sunShadowCascade[M+Ae]=J._cascadeData[Ae];M+=Me,v++}n.sun[m]=W,m++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.directionalShadow[x]=ee,n.directionalShadowMap[x]=ie,n.directionalShadowMatrix[x]=I.shadow.matrix,E++}n.directional[x]=W,x++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(q),W.distance=$,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[w]=W;const J=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,J.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[w]=J.matrix,I.castShadow){const ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.spotShadow[w]=ee,n.spotShadowMap[w]=ie,R++}w++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(z).multiplyScalar(q),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[N]=W,N++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const J=I.shadow,ee=t.get(I);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=ie,n.pointShadowMatrix[f]=I.shadow.matrix,y++}n.point[f]=W,f++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(q),W.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[b]=W,b++}}N>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;const L=n.hash;(L.sunLength!==m||L.directionalLength!==x||L.pointLength!==f||L.spotLength!==w||L.rectAreaLength!==N||L.hemiLength!==b||L.numSunShadows!==v||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==R||L.numSpotMaps!==_||L.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=x,n.spot.length=w,n.rectArea.length=N,n.point.length=f,n.hemi.length=b,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.sunLength=m,L.directionalLength=x,L.pointLength=f,L.spotLength=w,L.rectAreaLength=N,L.hemiLength=b,L.numSunShadows=v,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=R,L.numSpotMaps=_,L.numLightProbes=C,n.version=R0++)}function l(c,h){let p=0,u=0,m=0,v=0,M=0,x=0;const f=h.matrixWorldInverse;for(let w=0,N=c.length;w<N;w++){const b=c[w];if(b.isSunLight){const E=n.sun[p];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(f),p++}else if(b.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(b.isSpotLight){const E=n.spot[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),v++}else if(b.isRectAreaLight){const E=n.rectArea[M];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),r.identity(),a.copy(b.matrixWorld),a.premultiply(f),r.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),M++}else if(b.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(f),x++}}}return{setup:o,setupView:l,state:n}}function _l(i){const e=new N0(i),t=[],n=[],s=[];function a(u){p.camera=u,t.length=0,n.length=0,s.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function I0(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new _l(i),e.set(s,[o])):a>=r.length?(o=new _l(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
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
}`,L0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],U0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],vl=new pt,Wi=new G,ja=new G;function F0(i,e,t){let n=new Kr;const s=new je,a=new je,r=new ft,o=new Vu,l=new Hu,c={},h=t.maxTextureSize,p={[ti]:Gt,[Gt]:ti,[mn]:mn},u=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:D0,fragmentShader:P0}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new Vt;v.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ct(v,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let f=this.type;this.render=function(y,R,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;this.type===md&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vs);const T=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Cn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=f!==this.type;V&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=y.length;I<z;I++){const q=y[I],$=q.shadow;if($===void 0){Ie("WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ie=$.getFrameExtents();s.multiply(ie),a.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ie.x),s.x=a.x*ie.x,$.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ie.y),s.y=a.y*ie.y,$.mapSize.y=a.y));const W=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=W,$.map===null||V===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Xi){if(q.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new rn(s.x,s.y,{format:ii,type:Sn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),$.map.texture.name=q.name+".shadowMap",$.map.depthTexture=new ss(s.x,s.y,gn),$.map.depthTexture.name=q.name+".shadowMapDepth",$.map.depthTexture.format=In,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=At,$.map.depthTexture.magFilter=At}else q.isPointLight?($.map=new cc(s.x),$.map.depthTexture=new Fu(s.x,vn)):($.map=new rn(s.x,s.y),$.map.depthTexture=new ss(s.x,s.y,vn)),$.map.depthTexture.name=q.name+".shadowMap",$.map.depthTexture.format=In,this.type===Vs?($.map.depthTexture.compareFunction=W?jr:Xr,$.map.depthTexture.minFilter=Lt,$.map.depthTexture.magFilter=Lt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=At,$.map.depthTexture.magFilter=At);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);const J=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();q.isPointLight!==!0&&$.updateMatrices(q,_);for(let ee=0;ee<J;ee++){const Me=$.getCamera(ee);if(q.isPointLight){const Ae=$.camera,nt=$.matrix,ke=q.distance||Ae.far;ke!==Ae.far&&(Ae.far=ke,Ae.updateProjectionMatrix()),Wi.setFromMatrixPosition(q.matrixWorld),Ae.position.copy(Wi),ja.copy(Ae.position),ja.add(L0[ee]),Ae.up.copy(U0[ee]),Ae.lookAt(ja),Ae.updateMatrixWorld(),nt.makeTranslation(-Wi.x,-Wi.y,-Wi.z),vl.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),$._frustum.setFromProjectionMatrix(vl,Ae.coordinateSystem,Ae.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,ee),i.clear();else{ee===0&&(i.setRenderTarget($.map),i.clear());const Ae=$.getViewport(ee);r.set(a.x*Ae.x,a.y*Ae.y,a.x*Ae.z,a.y*Ae.w),F.viewport(r)}n=$.getFrustum(ee),b(R,_,Me,q,this.type)}$.isPointLightShadow!==!0&&this.type===Xi&&w($,_),$.needsUpdate=!1}f=this.type,x.needsUpdate=!1,i.setRenderTarget(T,C,L)};function w(y,R){const _=e.update(M);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null?y.mapPass=new rn(s.x,s.y,{format:ii,type:Sn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,M,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value.set(y.map.width,y.map.height),m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(R,null,_,m,M,null)}function N(y,R,_,T){let C=null;const L=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=C.uuid,V=R.uuid;let I=c[F];I===void 0&&(I={},c[F]=I);let z=I[V];z===void 0&&(z=C.clone(),I[V]=z,R.addEventListener("dispose",E)),C=z}if(C.visible=R.visible,C.wireframe=R.wireframe,T===Xi?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:p[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=_}return C}function b(y,R,_,T,C){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&C===Xi)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const V=e.update(y),I=y.material;if(Array.isArray(I)){const z=V.groups;for(let q=0,$=z.length;q<$;q++){const ie=z[q],W=I[ie.materialIndex];if(W&&W.visible){const J=N(y,W,T,C);y.onBeforeShadow(i,y,R,_,V,J,ie),i.renderBufferDirect(_,null,V,J,y,ie),y.onAfterShadow(i,y,R,_,V,J,ie)}}}else if(I.visible){const z=N(y,I,T,C);y.onBeforeShadow(i,y,R,_,V,z,null),i.renderBufferDirect(_,null,V,z,y,null),y.onAfterShadow(i,y,R,_,V,z,null)}}const F=y.children;for(let V=0,I=F.length;V<I;V++)b(F[V],R,_,T,C)}function E(y){y.target.removeEventListener("dispose",E);for(const _ in c){const T=c[_],C=y.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function O0(i,e){function t(){let P=!1;const le=new ft;let j=null;const ce=new ft(0,0,0,0);return{setMask:function(me){j!==me&&!P&&(i.colorMask(me,me,me,me),j=me)},setLocked:function(me){P=me},setClear:function(me,ne,Re,ye,rt){rt===!0&&(me*=ye,ne*=ye,Re*=ye),le.set(me,ne,Re,ye),ce.equals(le)===!1&&(i.clearColor(me,ne,Re,ye),ce.copy(le))},reset:function(){P=!1,j=null,ce.set(-1,0,0,0)}}}function n(){let P=!1,le=!1,j=null,ce=null,me=null;return{setReversed:function(ne){if(le!==ne){const Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),le=ne;const ye=me;me=null,this.setClear(ye)}},getReversed:function(){return le},setTest:function(ne){ne?te(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(ne){j!==ne&&!P&&(i.depthMask(ne),j=ne)},setFunc:function(ne){if(le&&(ne=Kd[ne]),ce!==ne){switch(ne){case qa:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case er:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ne}},setLocked:function(ne){P=ne},setClear:function(ne){me!==ne&&(me=ne,le&&(ne=1-ne),i.clearDepth(ne))},reset:function(){P=!1,j=null,ce=null,me=null,le=!1}}}function s(){let P=!1,le=null,j=null,ce=null,me=null,ne=null,Re=null,ye=null,rt=null;return{setTest:function(Ke){P||(Ke?te(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Ke){le!==Ke&&!P&&(i.stencilMask(Ke),le=Ke)},setFunc:function(Ke,Ht,$t){(j!==Ke||ce!==Ht||me!==$t)&&(i.stencilFunc(Ke,Ht,$t),j=Ke,ce=Ht,me=$t)},setOp:function(Ke,Ht,$t){(ne!==Ke||Re!==Ht||ye!==$t)&&(i.stencilOp(Ke,Ht,$t),ne=Ke,Re=Ht,ye=$t)},setLocked:function(Ke){P=Ke},setClear:function(Ke){rt!==Ke&&(i.clearStencil(Ke),rt=Ke)},reset:function(){P=!1,le=null,j=null,ce=null,me=null,ne=null,Re=null,ye=null,rt=null}}}const a=new t,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},p={},u={},m=new WeakMap,v=[],M=null,x=!1,f=null,w=null,N=null,b=null,E=null,y=null,R=null,_=new Ge(0,0,0),T=0,C=!1,L=null,F=null,V=null,I=null,z=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ie=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=ie>=2);let J=null,ee={};const Me=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),nt=new ft().fromArray(Me),ke=new ft().fromArray(Ae);function Ye(P,le,j,ce){const me=new Uint8Array(4),ne=i.createTexture();i.bindTexture(P,ne),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<j;Re++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(le+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ne}const Z={};Z[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),te(i.DEPTH_TEST),r.setFunc(Qi),ze(!1),lt(bo),te(i.CULL_FACE),He(Cn);function te(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function ve(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ne(P,le){return u[P]!==le?(i.bindFramebuffer(P,le),u[P]=le,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function pe(P,le){let j=v,ce=!1;if(P){j=m.get(le),j===void 0&&(j=[],m.set(le,j));const me=P.textures;if(j.length!==me.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Re=me.length;ne<Re;ne++)j[ne]=i.COLOR_ATTACHMENT0+ne;j.length=me.length,ce=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ce=!0);ce&&i.drawBuffers(j)}function Ue(P){return M!==P?(i.useProgram(P),M=P,!0):!1}const xt={[yi]:i.FUNC_ADD,[xd]:i.FUNC_SUBTRACT,[_d]:i.FUNC_REVERSE_SUBTRACT};xt[vd]=i.MIN,xt[Sd]=i.MAX;const Fe={[bd]:i.ZERO,[Md]:i.ONE,[yd]:i.SRC_COLOR,[Il]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ad]:i.DST_COLOR,[Td]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[Dl]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Nd]:i.CONSTANT_COLOR,[Id]:i.ONE_MINUS_CONSTANT_COLOR,[Dd]:i.CONSTANT_ALPHA,[Pd]:i.ONE_MINUS_CONSTANT_ALPHA};function He(P,le,j,ce,me,ne,Re,ye,rt,Ke){if(P===Cn){x===!0&&(ve(i.BLEND),x=!1);return}if(x===!1&&(te(i.BLEND),x=!0),P!==gd){if(P!==f||Ke!==C){if((w!==yi||E!==yi)&&(i.blendEquation(i.FUNC_ADD),w=yi,E=yi),Ke)switch(P){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFunc(i.ONE,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",P);break}else switch(P){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mo:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yo:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",P);break}N=null,b=null,y=null,R=null,_.set(0,0,0),T=0,f=P,C=Ke}return}me=me||le,ne=ne||j,Re=Re||ce,(le!==w||me!==E)&&(i.blendEquationSeparate(xt[le],xt[me]),w=le,E=me),(j!==N||ce!==b||ne!==y||Re!==R)&&(i.blendFuncSeparate(Fe[j],Fe[ce],Fe[ne],Fe[Re]),N=j,b=ce,y=ne,R=Re),(ye.equals(_)===!1||rt!==T)&&(i.blendColor(ye.r,ye.g,ye.b,rt),_.copy(ye),T=rt),f=P,C=!1}function at(P,le){P.side===mn?ve(i.CULL_FACE):te(i.CULL_FACE);let j=P.side===Gt;le&&(j=!j),ze(j),P.blending===Yi&&P.transparent===!1?He(Cn):He(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),a.setMask(P.colorWrite);const ce=P.stencilWrite;o.setTest(ce),ce&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ct(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(P){L!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),L=P)}function lt(P){P!==fd?(te(i.CULL_FACE),P!==F&&(P===bo?i.cullFace(i.BACK):P===pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),F=P}function ut(P){P!==V&&($&&i.lineWidth(P),V=P)}function Ct(P,le,j){P?(te(i.POLYGON_OFFSET_FILL),(I!==le||z!==j)&&(I=le,z=j,r.getReversed()&&(le=-le),i.polygonOffset(le,j))):ve(i.POLYGON_OFFSET_FILL)}function dt(P){P?te(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function mt(P){P===void 0&&(P=i.TEXTURE0+q-1),J!==P&&(i.activeTexture(P),J=P)}function U(P,le,j){j===void 0&&(J===null?j=i.TEXTURE0+q-1:j=J);let ce=ee[j];ce===void 0&&(ce={type:void 0,texture:void 0},ee[j]=ce),(ce.type!==P||ce.texture!==le)&&(J!==j&&(i.activeTexture(j),J=j),i.bindTexture(P,le||Z[P]),ce.type=P,ce.texture=le)}function Mt(){const P=ee[J];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(P){Je("WebGLState:",P)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(P){Je("WebGLState:",P)}}function g(){try{i.texSubImage2D(...arguments)}catch(P){Je("WebGLState:",P)}}function O(){try{i.texSubImage3D(...arguments)}catch(P){Je("WebGLState:",P)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Je("WebGLState:",P)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Je("WebGLState:",P)}}function se(){try{i.texStorage2D(...arguments)}catch(P){Je("WebGLState:",P)}}function ae(){try{i.texStorage3D(...arguments)}catch(P){Je("WebGLState:",P)}}function K(){try{i.texImage2D(...arguments)}catch(P){Je("WebGLState:",P)}}function Q(){try{i.texImage3D(...arguments)}catch(P){Je("WebGLState:",P)}}function re(P){return p[P]!==void 0?p[P]:i.getParameter(P)}function we(P,le){p[P]!==le&&(i.pixelStorei(P,le),p[P]=le)}function de(P){nt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),nt.copy(P))}function oe(P){ke.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ke.copy(P))}function Te(P,le){let j=c.get(le);j===void 0&&(j=new WeakMap,c.set(le,j));let ce=j.get(P);ce===void 0&&(ce=i.getUniformBlockIndex(le,P.name),j.set(P,ce))}function Ce(P,le){const ce=c.get(le).get(P);l.get(le)!==ce&&(i.uniformBlockBinding(le,ce,P.__bindingPointIndex),l.set(le,ce))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},J=null,ee={},u={},m=new WeakMap,v=[],M=null,x=!1,f=null,w=null,N=null,b=null,E=null,y=null,R=null,_=new Ge(0,0,0),T=0,C=!1,L=null,F=null,V=null,I=null,z=null,nt.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:te,disable:ve,bindFramebuffer:Ne,drawBuffers:pe,useProgram:Ue,setBlending:He,setMaterial:at,setFlipSided:ze,setCullFace:lt,setLineWidth:ut,setPolygonOffset:Ct,setScissorTest:dt,activeTexture:mt,bindTexture:U,unbindTexture:Mt,compressedTexImage2D:Qe,compressedTexImage3D:A,texImage2D:K,texImage3D:Q,pixelStorei:we,getParameter:re,updateUBOMapping:Te,uniformBlockBinding:Ce,texStorage2D:se,texStorage3D:ae,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:de,viewport:oe,reset:De}}function B0(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,h=new WeakMap,p=new Set;let u;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,g){return v?new OffscreenCanvas(A,g):ea("canvas")}function x(A,g,O){let H=1;const Y=Qe(A);if((Y.width>O||Y.height>O)&&(H=O/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(H*Y.width),ae=Math.floor(H*Y.height);u===void 0&&(u=M(se,ae));const K=g?M(se,ae):u;return K.width=se,K.height=ae,K.getContext("2d").drawImage(A,0,0,se,ae),Ie("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+se+"x"+ae+")."),K}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function f(A){return A.generateMipmaps}function w(A){i.generateMipmap(A)}function N(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,g,O,H,Y,se=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae;H&&(ae=e.get("EXT_texture_norm16"),ae||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.R16_EXT),O===i.SHORT&&ae&&(K=ae.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),g===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.RG16_EXT),O===i.SHORT&&ae&&(K=ae.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&ae&&(K=ae.RGB16_EXT),O===i.SHORT&&ae&&(K=ae.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),g===i.RGBA){const Q=se?Qs:Xe.getTransfer(Y);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=Q===st?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.RGBA16_EXT),O===i.SHORT&&ae&&(K=ae.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(A,g){let O;return A?g===null||g===vn||g===ts?O=i.DEPTH24_STENCIL8:g===gn?O=i.DEPTH32F_STENCIL8:g===es&&(O=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===vn||g===ts?O=i.DEPTH_COMPONENT24:g===gn?O=i.DEPTH_COMPONENT32F:g===es&&(O=i.DEPTH_COMPONENT16),O}function y(A,g){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Lt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),T(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&p.delete(g)}function _(A){const g=A.target;g.removeEventListener("dispose",_),L(g)}function T(A){const g=n.get(A);if(g.__webglInit===void 0)return;const O=A.source,H=m.get(O);if(H){const Y=H[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(A),Object.keys(H).length===0&&m.delete(O)}n.remove(A)}function C(A){const g=n.get(A);i.deleteTexture(g.__webglTexture);const O=A.source,H=m.get(O);delete H[g.__cacheKey],r.memory.textures--}function L(A){const g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let Y=0;Y<g.__webglFramebuffer[H].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[H][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=A.textures;for(let H=0,Y=O.length;H<Y;H++){const se=n.get(O[H]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),r.memory.textures--),n.remove(O[H])}n.remove(A)}let F=0;function V(){F=0}function I(){return F}function z(A){F=A}function q(){const A=F;return A>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function $(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function ie(A,g){const O=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const H=A.image;if(H===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(O,A,g);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function W(A,g){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ve(O,A,g);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function J(A,g){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ve(O,A,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function ee(A,g){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ne(O,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const Me={[tr]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[nr]:i.MIRRORED_REPEAT},Ae={[At]:i.NEAREST,[Fd]:i.NEAREST_MIPMAP_NEAREST,[_s]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},nt={[zd]:i.NEVER,[Xd]:i.ALWAYS,[Gd]:i.LESS,[Xr]:i.LEQUAL,[Vd]:i.EQUAL,[jr]:i.GEQUAL,[Hd]:i.GREATER,[Wd]:i.NOTEQUAL};function ke(A,g){if(g.type===gn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Lt||g.magFilter===xa||g.magFilter===_s||g.magFilter===Zn||g.minFilter===Lt||g.minFilter===xa||g.minFilter===_s||g.minFilter===Zn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Me[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Me[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Me[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ae[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ae[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,nt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===At||g.minFilter!==_s&&g.minFilter!==Zn||g.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(A,g){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const H=g.source;let Y=m.get(H);Y===void 0&&(Y={},m.set(H,Y));const se=$(g);if(se!==A.__cacheKey){Y[se]===void 0&&(Y[se]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),Y[se].usedTimes++;const ae=Y[A.__cacheKey];ae!==void 0&&(Y[A.__cacheKey].usedTimes--,ae.usedTimes===0&&C(g)),A.__cacheKey=se,A.__webglTexture=Y[se].texture}return O}function Z(A,g,O){return Math.floor(Math.floor(A/O)/g)}function te(A,g,O,H){const se=A.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,H,g.data);else{se.sort((we,de)=>we.start-de.start);let ae=0;for(let we=1;we<se.length;we++){const de=se[ae],oe=se[we],Te=de.start+de.count,Ce=Z(oe.start,g.width,4),De=Z(de.start,g.width,4);oe.start<=Te+1&&Ce===De&&Z(oe.start+oe.count-1,g.width,4)===Ce?de.count=Math.max(de.count,oe.start+oe.count-de.start):(++ae,se[ae]=oe)}se.length=ae+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let we=0,de=se.length;we<de;we++){const oe=se[we],Te=Math.floor(oe.start/4),Ce=Math.ceil(oe.count/4),De=Te%g.width,P=Math.floor(Te/g.width),le=Ce,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,De),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,De,P,le,j,O,H,g.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function ve(A,g,O){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const Y=Ye(A,g),se=g.source;t.bindTexture(H,A.__webglTexture,i.TEXTURE0+O);const ae=n.get(se);if(se.version!==ae.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const j=Xe.getPrimaries(Xe.workingColorSpace),ce=g.colorSpace===Gn?null:Xe.getPrimaries(g.colorSpace),me=g.colorSpace===Gn||j===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=x(g.image,!1,s.maxTextureSize);Q=Mt(g,Q);const re=a.convert(g.format,g.colorSpace),we=a.convert(g.type);let de=b(g.internalFormat,re,we,g.normalized,g.colorSpace,g.isVideoTexture);ke(H,g);let oe;const Te=g.mipmaps,Ce=g.isVideoTexture!==!0,De=ae.__version===void 0||Y===!0,P=se.dataReady,le=y(g,Q);if(g.isDepthTexture)de=E(g.format===Jn,g.type),De&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,de,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,de,Q.width,Q.height,0,re,we,null));else if(g.isDataTexture)if(Te.length>0){Ce&&De&&t.texStorage2D(i.TEXTURE_2D,le,de,Te[0].width,Te[0].height);for(let j=0,ce=Te.length;j<ce;j++)oe=Te[j],Ce?P&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,re,we,oe.data):t.texImage2D(i.TEXTURE_2D,j,de,oe.width,oe.height,0,re,we,oe.data);g.generateMipmaps=!1}else Ce?(De&&t.texStorage2D(i.TEXTURE_2D,le,de,Q.width,Q.height),P&&te(g,Q,re,we)):t.texImage2D(i.TEXTURE_2D,0,de,Q.width,Q.height,0,re,we,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ce&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,de,Te[0].width,Te[0].height,Q.depth);for(let j=0,ce=Te.length;j<ce;j++)if(oe=Te[j],g.format!==an)if(re!==null)if(Ce){if(P)if(g.layerUpdates.size>0){const me=Zo(oe.width,oe.height,g.format,g.type);for(const ne of g.layerUpdates){const Re=oe.data.subarray(ne*me/oe.data.BYTES_PER_ELEMENT,(ne+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ne,oe.width,oe.height,1,re,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,Q.depth,re,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,de,oe.width,oe.height,Q.depth,0,oe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,Q.depth,re,we,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,de,oe.width,oe.height,Q.depth,0,re,we,oe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ce&&De&&t.texStorage2D(i.TEXTURE_2D,le,de,Te[0].width,Te[0].height);for(let j=0,ce=Te.length;j<ce;j++)oe=Te[j],g.format!==an?re!==null?Ce?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,re,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,j,de,oe.width,oe.height,0,oe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?P&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,re,we,oe.data):t.texImage2D(i.TEXTURE_2D,j,de,oe.width,oe.height,0,re,we,oe.data)}else if(g.isDataArrayTexture)if(Ce){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,de,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const j=Zo(Q.width,Q.height,g.format,g.type);for(const ce of g.layerUpdates){const me=Q.data.subarray(ce*j/Q.data.BYTES_PER_ELEMENT,(ce+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,Q.width,Q.height,1,re,we,me)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,re,we,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,Q.width,Q.height,Q.depth,0,re,we,Q.data);else if(g.isData3DTexture)Ce?(De&&t.texStorage3D(i.TEXTURE_3D,le,de,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,re,we,Q.data)):t.texImage3D(i.TEXTURE_3D,0,de,Q.width,Q.height,Q.depth,0,re,we,Q.data);else if(g.isFramebufferTexture){if(De)if(Ce)t.texStorage2D(i.TEXTURE_2D,le,de,Q.width,Q.height);else{let j=Q.width,ce=Q.height;for(let me=0;me<le;me++)t.texImage2D(i.TEXTURE_2D,me,de,j,ce,0,re,we,null),j>>=1,ce>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),p.add(g),j.onpaint=ce=>{const me=ce.changedElements;for(const ne of p)me.includes(ne.image)&&(ne.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const me=i.RGBA,ne=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,ne,Re,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ce&&De){const j=Qe(Te[0]);t.texStorage2D(i.TEXTURE_2D,le,de,j.width,j.height)}for(let j=0,ce=Te.length;j<ce;j++)oe=Te[j],Ce?P&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,re,we,oe):t.texImage2D(i.TEXTURE_2D,j,de,re,we,oe);g.generateMipmaps=!1}else if(Ce){if(De){const j=Qe(Q);t.texStorage2D(i.TEXTURE_2D,le,de,j.width,j.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,we,Q)}else t.texImage2D(i.TEXTURE_2D,0,de,re,we,Q);f(g)&&w(H),ae.__version=se.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Ne(A,g,O){if(g.image.length!==6)return;const H=Ye(A,g),Y=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const se=n.get(Y);if(Y.version!==se.__version||H===!0){t.activeTexture(i.TEXTURE0+O);const ae=Xe.getPrimaries(Xe.workingColorSpace),K=g.colorSpace===Gn?null:Xe.getPrimaries(g.colorSpace),Q=g.colorSpace===Gn||ae===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const re=g.isCompressedTexture||g.image[0].isCompressedTexture,we=g.image[0]&&g.image[0].isDataTexture,de=[];for(let ne=0;ne<6;ne++)!re&&!we?de[ne]=x(g.image[ne],!0,s.maxCubemapSize):de[ne]=we?g.image[ne].image:g.image[ne],de[ne]=Mt(g,de[ne]);const oe=de[0],Te=a.convert(g.format,g.colorSpace),Ce=a.convert(g.type),De=b(g.internalFormat,Te,Ce,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,le=se.__version===void 0||H===!0,j=Y.dataReady;let ce=y(g,oe);ke(i.TEXTURE_CUBE_MAP,g);let me;if(re){P&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,De,oe.width,oe.height);for(let ne=0;ne<6;ne++){me=de[ne].mipmaps;for(let Re=0;Re<me.length;Re++){const ye=me[Re];g.format!==an?Te!==null?P?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,ye.width,ye.height,Te,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,De,ye.width,ye.height,0,ye.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,ye.width,ye.height,Te,Ce,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,De,ye.width,ye.height,0,Te,Ce,ye.data)}}}else{if(me=g.mipmaps,P&&le){me.length>0&&ce++;const ne=Qe(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,De,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(we){P?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de[ne].width,de[ne].height,Te,Ce,de[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,de[ne].width,de[ne].height,0,Te,Ce,de[ne].data);for(let Re=0;Re<me.length;Re++){const rt=me[Re].image[ne].image;P?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,rt.width,rt.height,Te,Ce,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,De,rt.width,rt.height,0,Te,Ce,rt.data)}}else{P?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,Ce,de[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,Te,Ce,de[ne]);for(let Re=0;Re<me.length;Re++){const ye=me[Re];P?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Te,Ce,ye.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,De,Te,Ce,ye.image[ne])}}}f(g)&&w(i.TEXTURE_CUBE_MAP),se.__version=Y.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function pe(A,g,O,H,Y,se){const ae=a.convert(O.format,O.colorSpace),K=a.convert(O.type),Q=b(O.internalFormat,ae,K,O.normalized,O.colorSpace),re=n.get(g),we=n.get(O);if(we.__renderTarget=g,!re.__hasExternalTextures){const de=Math.max(1,g.width>>se),oe=Math.max(1,g.height>>se);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,se,Q,de,oe,g.depth,0,ae,K,null):t.texImage2D(Y,se,Q,de,oe,0,ae,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Y,we.__webglTexture,0,dt(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Y,we.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(A,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){const H=g.depthTexture,Y=H&&H.isDepthTexture?H.type:null,se=E(g.stencilBuffer,Y),ae=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(g),se,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(g),se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,se,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,A)}else{const H=g.textures;for(let Y=0;Y<H.length;Y++){const se=H[Y],ae=a.convert(se.format,se.colorSpace),K=a.convert(se.type),Q=b(se.internalFormat,ae,K,se.normalized,se.colorSpace);mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(g),Q,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(g),Q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(A,g,O){const H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(i.TEXTURE_CUBE_MAP,g.depthTexture);const re=a.convert(g.depthTexture.format),we=a.convert(g.depthTexture.type);let de;g.depthTexture.format===In?de=i.DEPTH_COMPONENT24:g.depthTexture.format===Jn&&(de=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,de,g.width,g.height,0,re,we,null)}}else ie(g.depthTexture,0);const se=Y.__webglTexture,ae=dt(g),K=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Q=g.depthTexture.format===Jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===In)mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,se,0);else if(g.depthTexture.format===Jn)mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(A){const g=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=H}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)xt(g.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?xt(g.__webglFramebuffer[0],A,0):xt(g.__webglFramebuffer,A,0)}else if(O){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),Ue(g.__webglDepthbuffer[H],A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ue(g.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(A,g,O){const H=n.get(A);g!==void 0&&pe(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Fe(A)}function at(A){const g=A.texture,O=n.get(A),H=n.get(g);A.addEventListener("dispose",_);const Y=A.textures,se=A.isWebGLCubeRenderTarget===!0,ae=Y.length>1;if(ae||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,r.memory.textures++),se){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let Q=0;Q<g.mipmaps.length;Q++)O.__webglFramebuffer[K][Q]=i.createFramebuffer()}else O.__webglFramebuffer[K]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)O.__webglFramebuffer[K]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ae)for(let K=0,Q=Y.length;K<Q;K++){const re=n.get(Y[K]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&mt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){const Q=Y[K];O.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const re=a.convert(Q.format,Q.colorSpace),we=a.convert(Q.type),de=b(Q.internalFormat,re,we,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),oe=dt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,de,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,O.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),ke(i.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)pe(O.__webglFramebuffer[K][Q],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else pe(O.__webglFramebuffer[K],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(g)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let K=0,Q=Y.length;K<Q;K++){const re=Y[K],we=n.get(re);let de=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,we.__webglTexture),ke(de,re),pe(O.__webglFramebuffer,A,re,i.COLOR_ATTACHMENT0+K,de,0),f(re)&&w(de)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,H.__webglTexture),ke(K,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)pe(O.__webglFramebuffer[Q],A,g,i.COLOR_ATTACHMENT0,K,Q);else pe(O.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,K,0);f(g)&&w(K),t.unbindTexture()}A.depthBuffer&&Fe(A)}function ze(A){const g=A.textures;for(let O=0,H=g.length;O<H;O++){const Y=g[O];if(f(Y)){const se=N(A),ae=n.get(Y).__webglTexture;t.bindTexture(se,ae),w(se),t.unbindTexture()}}}const lt=[],ut=[];function Ct(A){if(A.samples>0){if(mt(A)===!1){const g=A.textures,O=A.width,H=A.height;let Y=i.COLOR_BUFFER_BIT;const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(A),K=g.length>1;if(K)for(let re=0;re<g.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Q=A.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let re=0;re<g.length;re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);const we=n.get(g[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,O,H,0,0,O,H,Y,i.NEAREST),l===!0&&(lt.length=0,ut.length=0,lt.push(i.COLOR_ATTACHMENT0+re),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(lt.push(se),ut.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let re=0;re<g.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);const we=n.get(g[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function dt(A){return Math.min(s.maxSamples,A.samples)}function mt(A){const g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(A){const g=r.render.frame;h.get(A)!==g&&(h.set(A,g),A.update())}function Mt(A,g){const O=A.colorSpace,H=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Js&&O!==Gn&&(Xe.getTransfer(O)===st?(H!==an||Y!==qt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",O)),g}function Qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=ie,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=He,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function k0(i,e){function t(n,s=Gn){let a;const r=Xe.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===zr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gl)return i.BYTE;if(n===Vl)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===kr)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===Xl)return i.ALPHA;if(n===jl)return i.RGB;if(n===an)return i.RGBA;if(n===In)return i.DEPTH_COMPONENT;if(n===Jn)return i.DEPTH_STENCIL;if(n===Yl)return i.RED;if(n===Vr)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===Hr)return i.RG_INTEGER;if(n===Wr)return i.RGBA_INTEGER;if(n===Hs||n===Ws||n===Xs||n===js)if(r===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ir||n===sr||n===ar||n===rr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ir)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ar)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===or||n===lr||n===cr||n===dr||n===ur||n===Ks||n===hr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===or||n===lr)return r===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===cr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===dr)return a.COMPRESSED_R11_EAC;if(n===ur)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Ks)return a.COMPRESSED_RG11_EAC;if(n===hr)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fr||n===pr||n===mr||n===gr||n===xr||n===_r||n===vr||n===Sr||n===br||n===Mr||n===yr||n===Er||n===Tr||n===wr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===fr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_r)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===br)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Er)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wr)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===Rr||n===Cr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ar)return r===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nr||n===Ir||n===Zs||n===Dr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Nr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ir)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G0=`
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

}`;class V0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ic(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ln({vertexShader:z0,fragmentShader:G0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H0 extends ai{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,m=null,v=null;const M=typeof XRWebGLBinding<"u",x=new V0,f={},w=t.getContextAttributes();let N=null,b=null;const E=[],y=[],R=new je;let _=null,T=null;const C=new Yt;C.viewport=new ft;const L=new Yt;L.viewport=new ft;const F=[C,L],V=new $u;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=E[Z];return te===void 0&&(te=new Ea,E[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=E[Z];return te===void 0&&(te=new Ea,E[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=E[Z];return te===void 0&&(te=new Ea,E[Z]=te),te.getHandSpace()};function q(Z){const te=y.indexOf(Z.inputSource);if(te===-1)return;const ve=E[te];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||r),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<E.length;Z++){const te=y[Z];te!==null&&(y[Z]=null,E[Z].disconnect(te))}I=null,z=null,x.reset();for(const Z in f)delete f[Z];if(e.setRenderTarget(N),m=null,u=null,p=null,s=null,b=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(N=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ie),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ne=null,pe=null;w.depth&&(pe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=w.stencil?Jn:In,Ne=w.stencil?ts:vn);const Ue={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Ue),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new rn(u.textureWidth,u.textureHeight,{format:an,type:qt,depthTexture:new ss(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new rn(m.framebufferWidth,m.framebufferHeight,{format:an,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(Z){for(let te=0;te<Z.removed.length;te++){const ve=Z.removed[te],Ne=y.indexOf(ve);Ne>=0&&(y[Ne]=null,E[Ne].disconnect(ve))}for(let te=0;te<Z.added.length;te++){const ve=Z.added[te];let Ne=y.indexOf(ve);if(Ne===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=y.length){y.push(ve),Ne=Ue;break}else if(y[Ue]===null){y[Ue]=ve,Ne=Ue;break}if(Ne===-1)break}const pe=E[Ne];pe&&pe.connect(ve)}}const W=new G,J=new G;function ee(Z,te,ve){W.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);const Ne=W.distanceTo(J),pe=te.projectionMatrix.elements,Ue=ve.projectionMatrix.elements,xt=pe[14]/(pe[10]-1),Fe=pe[14]/(pe[10]+1),He=(pe[9]+1)/pe[5],at=(pe[9]-1)/pe[5],ze=(pe[8]-1)/pe[0],lt=(Ue[8]+1)/Ue[0],ut=xt*ze,Ct=xt*lt,dt=Ne/(-ze+lt),mt=dt*-ze;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(mt),Z.translateZ(dt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),pe[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const U=xt+dt,Mt=Fe+dt,Qe=ut-mt,A=Ct+(Ne-mt),g=He*Fe/Mt*U,O=at*Fe/Mt*U;Z.projectionMatrix.makePerspective(Qe,A,g,O,U,Mt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Me(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let te=Z.near,ve=Z.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),V.near=L.near=C.near=te,V.far=L.far=C.far=ve,(I!==V.near||z!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,z=V.far),V.layers.mask=Z.layers.mask|6,C.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;const Ne=Z.parent,pe=V.cameras;Me(V,Ne);for(let Ue=0;Ue<pe.length;Ue++)Me(pe[Ue],Ne);pe.length===2?ee(V,C,L):V.projectionMatrix.copy(C.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ae(Z,V,Ne)};function Ae(Z,te,ve){ve===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=is*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(V)},this.getCameraTexture=function(Z){return f[Z]};let nt=null;function ke(Z,te){if(h=te.getViewerPose(c||r),v=te,h!==null){const ve=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Ne=!1;ve.length!==V.cameras.length&&(V.cameras.length=0,Ne=!0);for(let Fe=0;Fe<ve.length;Fe++){const He=ve[Fe];let at=null;if(m!==null)at=m.getViewport(He);else{const lt=p.getViewSubImage(u,He);at=lt.viewport,Fe===0&&(e.setRenderTargetTextures(b,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(b))}let ze=F[Fe];ze===void 0&&(ze=new Yt,ze.layers.enable(Fe),ze.viewport=new ft,F[Fe]=ze),ze.matrix.fromArray(He.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(He.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(at.x,at.y,at.width,at.height),Fe===0&&(V.matrix.copy(ze.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ne===!0&&V.cameras.push(ze)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();const Fe=p.getDepthInformation(ve[0]);Fe&&Fe.isValid&&Fe.texture&&x.init(Fe,s.renderState)}if(pe&&pe.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let Fe=0;Fe<ve.length;Fe++){const He=ve[Fe].camera;if(He){let at=f[He];at||(at=new ic,f[He]=at);const ze=p.getCameraImage(He);at.sourceTexture=ze}}}}for(let ve=0;ve<E.length;ve++){const Ne=y[ve],pe=E[ve];Ne!==null&&pe!==void 0&&pe.update(Ne,te,c||r)}nt&&nt(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}const Ye=new oc;Ye.setAnimationLoop(ke),this.setAnimationLoop=function(Z){nt=Z},this.dispose=function(){}}}const W0=new pt,pc=new Le;pc.set(-1,0,0,0,1,0,0,0,1);function X0(i,e){function t(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function n(x,f){f.color.getRGB(x.fogColor.value,sc(i)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function s(x,f,w,N,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(x,f):f.isMeshLambertMaterial?(a(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(x,f),p(x,f)):f.isMeshPhongMaterial?(a(x,f),h(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(x,f),u(x,f),f.isMeshPhysicalMaterial&&m(x,f,b)):f.isMeshMatcapMaterial?(a(x,f),v(x,f)):f.isMeshDepthMaterial?a(x,f):f.isMeshDistanceMaterial?(a(x,f),M(x,f)):f.isMeshNormalMaterial?a(x,f):f.isLineBasicMaterial?(r(x,f),f.isLineDashedMaterial&&o(x,f)):f.isPointsMaterial?l(x,f,w,N):f.isSpriteMaterial?c(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,t(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===Gt&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,t(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===Gt&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,t(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,t(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const w=e.get(f),N=w.envMap,b=w.envMapRotation;N&&(x.envMap.value=N,x.envMapRotation.value.setFromMatrix4(W0.makeRotationFromEuler(b)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(pc),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,x.aoMapTransform))}function r(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform))}function o(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,w,N){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*w,x.scale.value=N*.5,f.map&&(x.map.value=f.map,t(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function c(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function p(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function u(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function m(x,f,w){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gt&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.retroreflectivity>0&&(x.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,f){f.matcap&&(x.matcap.value=f.matcap)}function M(x,f){const w=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j0(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const y=E.program;n.uniformBlockBinding(b,y)}function c(b,E){let y=s[b.id];y===void 0&&(x(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",w));const R=E.program;n.updateUBOMapping(b,R);const _=e.render.frame;a[b.id]!==_&&(u(b),a[b.id]=_)}function h(b){const E=p();b.__bindingPointIndex=E;const y=i.createBuffer(),R=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function p(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const E=s[b.id],y=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,T=y.length;_<T;_++){const C=y[_];if(Array.isArray(C))for(let L=0,F=C.length;L<F;L++)m(C[L],_,L,R);else m(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,E,y,R){if(M(b,E,y,R)===!0){const _=b.__offset,T=b.value;if(Array.isArray(T)){let C=0;for(let L=0;L<T.length;L++){const F=T[L],V=f(F);v(F,b.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function v(b,E,y){typeof b=="number"||typeof b=="boolean"?E[0]=b:b.isMatrix3?(E[0]=b.elements[0],E[1]=b.elements[1],E[2]=b.elements[2],E[3]=0,E[4]=b.elements[3],E[5]=b.elements[4],E[6]=b.elements[5],E[7]=0,E[8]=b.elements[6],E[9]=b.elements[7],E[10]=b.elements[8],E[11]=0):ArrayBuffer.isView(b)?E.set(new b.constructor(b.buffer,b.byteOffset,E.length)):b.toArray(E,y)}function M(b,E,y,R){const _=b.value,T=E+"_"+y;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const C=R[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function x(b){const E=b.uniforms;let y=0;const R=16;for(let T=0,C=E.length;T<C;T++){const L=Array.isArray(E[T])?E[T]:[E[T]];for(let F=0,V=L.length;F<V;F++){const I=L[F],z=Array.isArray(I.value)?I.value:[I.value];for(let q=0,$=z.length;q<$;q++){const ie=z[q],W=f(ie),J=y%R,ee=J%W.boundary,Me=J+ee;y+=ee,Me!==0&&R-Me<W.storage&&(y+=R-Me),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=W.storage}}}const _=y%R;return _>0&&(y+=R-_),b.__size=y,b.__cache={},this}function f(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",b),E}function w(b){const E=b.target;E.removeEventListener("dispose",w);const y=r.indexOf(E.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function N(){for(const b in s)i.deleteBuffer(s[b]);r=[],s={},a={}}return{bind:l,update:c,dispose:N}}const Y0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function q0(){return fn===null&&(fn=new Lu(Y0,16,16,ii,Sn),fn.name="DFG_LUT",fn.minFilter=Lt,fn.magFilter=Lt,fn.wrapS=Rn,fn.wrapT=Rn,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class $0{constructor(e={}){const{canvas:t=qd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=qt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=r;const M=m,x=new Set([Wr,Hr,Vr]),f=new Set([qt,vn,es,ts,zr,Gr]),w=new Uint32Array(4),N=new Int32Array(4),b=new G;let E=null,y=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,F=null,V=null,I=null,z=null;this._outputColorSpace=Jt;let q=0,$=0,ie=null,W=-1,J=null;const ee=new ft,Me=new ft;let Ae=null;const nt=new Ge(0);let ke=0,Ye=t.width,Z=t.height,te=1,ve=null,Ne=null;const pe=new ft(0,0,Ye,Z),Ue=new ft(0,0,Ye,Z);let xt=!1;const Fe=new Kr;let He=!1,at=!1;const ze=new pt,lt=new G,ut=new ft,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function mt(){return ie===null?te:1}let U=n;function Mt(S,D){return t.getContext(S,D)}let Qe,A,g,O,H,Y,se,ae,K,Q,re,we,de,oe,Te,Ce,De,P,le,j,ce,me,ne;try{const S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Or}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Ht,!1),U===null){const D="webgl2";if(U=Mt(D,S),U===null)throw Mt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(S){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Ht,!1),Je("WebGLRenderer: "+S.message),S}function Re(){Qe=new qp(U),Qe.init(),ce=new k0(U,Qe),A=new Bp(U,Qe,e,ce),g=new O0(U,Qe),A.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),V=U.createFramebuffer(),I=U.createFramebuffer(),z=U.createFramebuffer(),O=new Zp(U),H=new y0,Y=new B0(U,Qe,g,H,A,ce,O),se=new Yp(C),ae=new Ju(U),me=new Fp(U,ae),K=new $p(U,ae,O,me),Q=new Qp(U,K,ae,me,O),P=new Jp(U,A,Y),Te=new kp(H),re=new M0(C,se,Qe,A,me,Te),we=new X0(C,H),de=new T0,oe=new I0(Qe),De=new Up(C,se,g,Q,v,l),Ce=new F0(C,Q,A),ne=new j0(U,O,A,g),le=new Op(U,Qe,O),j=new Kp(U,Qe,O),O.programs=re.programs,C.capabilities=A,C.extensions=Qe,C.properties=H,C.renderLists=de,C.shadowMap=Ce,C.state=g,C.info=O}M!==qt&&(T=new tm(M,t.width,t.height,o,s,a));const ye=new H0(C,U);this.xr=ye,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Qe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Qe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(S){S!==void 0&&(te=S,this.setSize(Ye,Z,!1))},this.getSize=function(S){return S.set(Ye,Z)},this.setSize=function(S,D,X=!0){if(ye.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=S,Z=D,t.width=Math.floor(S*te),t.height=Math.floor(D*te),X===!0&&(t.style.width=S+"px",t.style.height=D+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(Ye*te,Z*te).floor()},this.setDrawingBufferSize=function(S,D,X){Ye=S,Z=D,te=X,t.width=Math.floor(S*X),t.height=Math.floor(D*X),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(M===qt){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ee)},this.getViewport=function(S){return S.copy(pe)},this.setViewport=function(S,D,X,k){S.isVector4?pe.set(S.x,S.y,S.z,S.w):pe.set(S,D,X,k),g.viewport(ee.copy(pe).multiplyScalar(te).round())},this.getScissor=function(S){return S.copy(Ue)},this.setScissor=function(S,D,X,k){S.isVector4?Ue.set(S.x,S.y,S.z,S.w):Ue.set(S,D,X,k),g.scissor(Me.copy(Ue).multiplyScalar(te).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(S){g.setScissorTest(xt=S)},this.setOpaqueSort=function(S){ve=S},this.setTransparentSort=function(S){Ne=S},this.getClearColor=function(S){return S.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,X=!0){let k=0;if(S){let B=!1;if(ie!==null){const he=ie.texture.format;B=x.has(he)}if(B){const he=ie.texture.type,Se=f.has(he),ue=De.getClearColor(),ge=De.getClearAlpha(),Ee=ue.r,Pe=ue.g,Be=ue.b;Se?(w[0]=Ee,w[1]=Pe,w[2]=Be,w[3]=ge,U.clearBufferuiv(U.COLOR,0,w)):(N[0]=Ee,N[1]=Pe,N[2]=Be,N[3]=ge,U.clearBufferiv(U.COLOR,0,N))}else k|=U.COLOR_BUFFER_BIT}D&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Ht,!1),De.dispose(),de.dispose(),oe.dispose(),H.dispose(),se.dispose(),Q.dispose(),me.dispose(),ne.dispose(),re.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ri),ye.removeEventListener("sessionend",os),bn.stop()};function rt(S){S.preventDefault(),wo("WebGLRenderer: Context Lost."),L=!0}function Ke(){wo("WebGLRenderer: Context Restored."),L=!1;const S=O.autoReset,D=Ce.enabled,X=Ce.autoUpdate,k=Ce.needsUpdate,B=Ce.type;Re(),O.autoReset=S,Ce.enabled=D,Ce.autoUpdate=X,Ce.needsUpdate=k,Ce.type=B}function Ht(S){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function $t(S){const D=S.target;D.removeEventListener("dispose",$t),ra(D)}function ra(S){oa(S),H.remove(S)}function oa(S){const D=H.get(S).programs;D!==void 0&&(D.forEach(function(X){re.releaseProgram(X)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,X,k,B,he){D===null&&(D=Ct);const Se=B.isMesh&&B.matrixWorld.determinantAffine()<0,ue=hs(S,D,X,k,B);g.setMaterial(k,Se);let ge=X.index,Ee=1;if(k.wireframe===!0){if(ge=K.getWireframeAttribute(X),ge===void 0)return;Ee=2}const Pe=X.drawRange,Be=X.attributes.position;let be=Pe.start*Ee,Ze=(Pe.start+Pe.count)*Ee;he!==null&&(be=Math.max(be,he.start*Ee),Ze=Math.min(Ze,(he.start+he.count)*Ee)),ge!==null?(be=Math.max(be,0),Ze=Math.min(Ze,ge.count)):Be!=null&&(be=Math.max(be,0),Ze=Math.min(Ze,Be.count));const gt=Ze-be;if(gt<0||gt===1/0)return;me.setup(B,k,ue,X,ge);let ot,qe=le;if(ge!==null&&(ot=ae.get(ge),qe=j,qe.setIndex(ot)),B.isMesh)k.wireframe===!0?(g.setLineWidth(k.wireframeLinewidth*mt()),qe.setMode(U.LINES)):qe.setMode(U.TRIANGLES);else if(B.isLine){let yt=k.linewidth;yt===void 0&&(yt=1),g.setLineWidth(yt*mt()),B.isLineSegments?qe.setMode(U.LINES):B.isLineLoop?qe.setMode(U.LINE_LOOP):qe.setMode(U.LINE_STRIP)}else B.isPoints?qe.setMode(U.POINTS):B.isSprite&&qe.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))qe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const yt=B._multiDrawStarts,xe=B._multiDrawCounts,Tt=B._multiDrawCount,We=ge?ae.get(ge).bytesPerElement:1,kt=H.get(k).currentProgram.getUniforms();for(let Kt=0;Kt<Tt;Kt++)kt.setValue(U,"_gl_DrawID",Kt),qe.render(yt[Kt]/We,xe[Kt])}else if(B.isInstancedMesh)qe.renderInstances(be,gt,B.count);else if(X.isInstancedBufferGeometry){const yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xe=Math.min(X.instanceCount,yt);qe.renderInstances(be,gt,xe)}else qe.render(be,gt)};function Fi(S,D,X,k){F!==null&&S.isNodeMaterial&&F.setObject(k,S),He===!0&&Te.setState(S,X,!1),S.transparent===!0&&S.side===mn&&S.forceSinglePass===!1?(S.side=Gt,S.needsUpdate=!0,li(S,D,k),S.side=ti,S.needsUpdate=!0,li(S,D,k),S.side=mn):li(S,D,k)}this.compile=function(S,D,X=null){X===null&&(X=S),F!==null&&F.renderStart(S,D,X),y=oe.get(X),y.init(D),_.push(y),X.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),S!==X&&S.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),y.setupLights(),F!==null&&F.updateLights(y.state.lightsArray),at=this.localClippingEnabled,He=Te.init(this.clippingPlanes,at),He===!0&&Te.setGlobalState(this.clippingPlanes,D),F!==null&&Ce.render(y.state.shadowsArray,X,D);const k=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const he=B.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const ue=he[Se];Fi(ue,X,D,B),k.add(ue)}else Fi(he,X,D,B),k.add(he)}),y=_.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(S,D,X=null){const k=this.compile(S,D,X);return new Promise(B=>{function he(){if(k.forEach(function(Se){const ge=H.get(Se).currentProgram;(ge===void 0||ge.isReady())&&k.delete(Se)}),k.size===0){B(S);return}setTimeout(he,10)}Qe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Wt=null;function la(S){Wt&&Wt(S)}function ri(){bn.stop()}function os(){bn.start()}const bn=new oc;bn.setAnimationLoop(la),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(S){Wt=S,ye.setAnimationLoop(S),S===null?bn.stop():bn.start()},ye.addEventListener("sessionstart",ri),ye.addEventListener("sessionend",os),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(S,D);const X=ye.enabled===!0&&ye.isPresenting===!0,k=T!==null&&(ie===null||X)&&T.begin(C,ie);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(D),D=ye.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,D,ie),y=oe.get(S,_.length),y.init(D),y.state.textureUnits=Y.getTextureUnits(),_.push(y),ze.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Fe.setFromProjectionMatrix(ze,xn,D.reversedDepth),at=this.localClippingEnabled,He=Te.init(this.clippingPlanes,at),E=de.get(S,R.length),E.init(),R.push(E),ye.enabled===!0&&ye.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&Oi(Se,D,-1/0,C.sortObjects)}Oi(S,D,0,C.sortObjects),E.finish(),F!==null&&F.updateLights(y.state.lightsArray),C.sortObjects===!0&&E.sort(ve,Ne),dt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,dt&&De.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&Te.beginShadows();const B=y.state.shadowsArray;if(Ce.render(B,S,D),He===!0&&Te.endShadows(),(k&&T.hasRenderPass())===!1){const Se=E.opaque,ue=E.transmissive;if(y.setupLights(),D.isArrayCamera){const ge=D.cameras;if(ue.length>0)for(let Ee=0,Pe=ge.length;Ee<Pe;Ee++){const Be=ge[Ee];cs(Se,ue,S,Be)}dt&&De.render(S);for(let Ee=0,Pe=ge.length;Ee<Pe;Ee++){const Be=ge[Ee];ls(E,S,Be,Be.viewport)}}else ue.length>0&&cs(Se,ue,S,D),dt&&De.render(S),ls(E,S,D)}ie!==null&&$===0&&(Y.updateMultisampleRenderTarget(ie),Y.updateRenderTargetMipmap(ie)),k&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,D),me.resetDefaultState(),W=-1,J=null,_.pop(),_.length>0?(y=_[_.length-1],Y.setTextureUnits(y.state.textureUnits),He===!0&&Te.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,F!==null&&F.renderEnd()};function Oi(S,D,X,k){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)y.pushLightProbeGrid(S);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Fe)){k&&ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ze);const Se=Q.update(S),ue=S.material;ue.visible&&E.push(S,Se,ue,X,ut.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Fe))){const Se=Q.update(S),ue=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ut.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ut.copy(Se.boundingSphere.center)),ut.applyMatrix4(S.matrixWorld).applyMatrix4(ze)),Array.isArray(ue)){const ge=Se.groups;for(let Ee=0,Pe=ge.length;Ee<Pe;Ee++){const Be=ge[Ee],be=ue[Be.materialIndex];be&&be.visible&&E.push(S,Se,be,X,ut.z,Be,D)}}else ue.visible&&E.push(S,Se,ue,X,ut.z,null,D)}}const he=S.children;for(let Se=0,ue=he.length;Se<ue;Se++)Oi(he[Se],D,X,k)}function ls(S,D,X,k){const{opaque:B,transmissive:he,transparent:Se}=S;y.setupLightsView(X),He===!0&&Te.setGlobalState(C.clippingPlanes,X),k&&g.viewport(ee.copy(k)),B.length>0&&oi(B,D,X),he.length>0&&oi(he,D,X),Se.length>0&&oi(Se,D,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function cs(S,D,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[k.id]===void 0){const be=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[k.id]=new rn(1,1,{generateMipmaps:!0,type:be?Sn:qt,minFilter:Zn,samples:Math.max(4,A.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const he=y.state.transmissionRenderTarget[k.id],Se=k.viewport||ee;he.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const ue=C.getRenderTarget(),ge=C.getActiveCubeFace(),Ee=C.getActiveMipmapLevel();C.setRenderTarget(he),C.getClearColor(nt),ke=C.getClearAlpha(),ke<1&&C.setClearColor(16777215,.5),C.clear(),dt&&De.render(X);const Pe=C.toneMapping;C.toneMapping=_n;const Be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),y.setupLightsView(k),He===!0&&Te.setGlobalState(C.clippingPlanes,k),oi(S,X,k),Y.updateMultisampleRenderTarget(he),Y.updateRenderTargetMipmap(he),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ze=0,gt=D.length;Ze<gt;Ze++){const ot=D[Ze],{object:qe,geometry:yt,material:xe,group:Tt}=ot;if(xe.side===mn&&qe.layers.test(k.layers)){const We=xe.side;xe.side=Gt,xe.needsUpdate=!0,Dn(qe,X,k,yt,xe,Tt),xe.side=We,xe.needsUpdate=!0,be=!0}}be===!0&&(Y.updateMultisampleRenderTarget(he),Y.updateRenderTargetMipmap(he))}C.setRenderTarget(ue,ge,Ee),C.setClearColor(nt,ke),Be!==void 0&&(k.viewport=Be),C.toneMapping=Pe}function oi(S,D,X){const k=D.isScene===!0?D.overrideMaterial:null;for(let B=0,he=S.length;B<he;B++){const Se=S[B],{object:ue,geometry:ge,group:Ee}=Se;let Pe=Se.material;Pe.allowOverride===!0&&k!==null&&(Pe=k),ue.layers.test(X.layers)&&Dn(ue,D,X,ge,Pe,Ee)}}function Dn(S,D,X,k,B,he){F!==null&&B.isNodeMaterial&&F.setObject(S,B),S.onBeforeRender(C,D,X,k,B,he),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(C,D,X,k,S,he),B.transparent===!0&&B.side===mn&&B.forceSinglePass===!1?(B.side=Gt,B.needsUpdate=!0,C.renderBufferDirect(X,D,k,B,S,he),B.side=ti,B.needsUpdate=!0,C.renderBufferDirect(X,D,k,B,S,he),B.side=mn):C.renderBufferDirect(X,D,k,B,S,he),S.onAfterRender(C,D,X,k,B,he)}function li(S,D,X){D.isScene!==!0&&(D=Ct);const k=H.get(S),B=y.state.lights,he=y.state.shadowsArray,Se=B.state.version,ue=re.getParameters(S,B.state,he,D,X,y.state.lightProbeGridArray),ge=re.getProgramCacheKey(ue);let Ee=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;const Pe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=se.get(S.envMap||k.environment,Pe),k.envMapRotation=k.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ee===void 0&&(S.addEventListener("dispose",$t),Ee=new Map,k.programs=Ee);let Be=Ee.get(ge);if(Be!==void 0){if(k.currentProgram===Be&&k.lightsStateVersion===Se)return us(S,ue),Be}else ue.uniforms=re.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,X,ue),S.onBeforeCompile(ue,C),Be=re.acquireProgram(ue,ge),Ee.set(ge,Be),k.uniforms=ue.uniforms;const be=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=Te.uniform),us(S,ue),k.needsLights=ca(S),k.lightsStateVersion=Se,k.needsLights&&(be.ambientLightColor.value=B.state.ambient,be.lightProbe.value=B.state.probe,be.sunLights.value=B.state.sun,be.sunLightShadows.value=B.state.sunShadow,be.directionalLights.value=B.state.directional,be.directionalLightShadows.value=B.state.directionalShadow,be.spotLights.value=B.state.spot,be.spotLightShadows.value=B.state.spotShadow,be.rectAreaLights.value=B.state.rectArea,be.ltc_1.value=B.state.rectAreaLTC1,be.ltc_2.value=B.state.rectAreaLTC2,be.pointLights.value=B.state.point,be.pointLightShadows.value=B.state.pointShadow,be.hemisphereLights.value=B.state.hemi,be.sunShadowMatrix.value=B.state.sunShadowMatrix,be.sunShadowCascade.value=B.state.sunShadowCascade,be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,be.spotLightMatrix.value=B.state.spotLightMatrix,be.spotLightMap.value=B.state.spotLightMap,be.pointShadowMatrix.value=B.state.pointShadowMatrix),k.lightProbeGrid=y.state.lightProbeGridArray.length>0,k.currentProgram=Be,k.uniformsList=null,Be}function ds(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Ys.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function us(S,D){const X=H.get(S);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function Qt(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(D.matrixWorld);for(let X=0,k=S.length;X<k;X++){const B=S[X];if(B.texture!==null&&B.boundingBox.containsPoint(b))return B}return null}function hs(S,D,X,k,B){D.isScene!==!0&&(D=Ct),Y.resetTextureUnits();const he=D.fog,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,ue=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Xe.workingColorSpace,ge=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ee=se.get(k.envMap||Se,ge),Pe=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),be=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,gt=!!X.morphAttributes.color;let ot=_n;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ot=C.toneMapping);const qe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=qe!==void 0?qe.length:0,xe=H.get(k),Tt=y.state.lights;if(He===!0&&(at===!0||S!==J)){const it=S===J&&k.id===W;Te.setState(k,S,it)}let We=!1;k.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Tt.state.version||xe.outputColorSpace!==ue||B.isBatchedMesh&&xe.batching===!1||!B.isBatchedMesh&&xe.batching===!0||B.isBatchedMesh&&xe.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&xe.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&xe.instancing===!1||!B.isInstancedMesh&&xe.instancing===!0||B.isSkinnedMesh&&xe.skinning===!1||!B.isSkinnedMesh&&xe.skinning===!0||B.isInstancedMesh&&xe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&xe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&xe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&xe.instancingMorph===!1&&B.morphTexture!==null||xe.envMap!==Ee||k.fog===!0&&xe.fog!==he||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Te.numPlanes||xe.numIntersection!==Te.numIntersection)||xe.vertexAlphas!==Pe||xe.vertexTangents!==Be||xe.morphTargets!==be||xe.morphNormals!==Ze||xe.morphColors!==gt||xe.toneMapping!==ot||xe.morphTargetsCount!==yt||!!xe.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,xe.__version=k.version);let kt=xe.currentProgram;We===!0&&(kt=li(k,D,B),F&&k.isNodeMaterial&&F.onUpdateProgram(k,kt,xe));let Kt=!1,cn=!1,Pn=!1;const et=kt.getUniforms(),ht=xe.uniforms;if(g.useProgram(kt.program)&&(Kt=!0,cn=!0,Pn=!0),k.id!==W&&(W=k.id,cn=!0),xe.needsLights){const it=Qt(y.state.lightProbeGridArray,B);xe.lightProbeGrid!==it&&(xe.lightProbeGrid=it,cn=!0)}if(Kt||J!==S){g.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),et.setValue(U,"projectionMatrix",S.projectionMatrix),et.setValue(U,"viewMatrix",S.matrixWorldInverse);const un=et.map.cameraPosition;un!==void 0&&un.setValue(U,lt.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&et.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&et.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,cn=!0,Pn=!0)}if(xe.needsLights&&(Tt.state.sunShadowMap.length>0&&et.setValue(U,"sunShadowMap",Tt.state.sunShadowMap,Y),Tt.state.directionalShadowMap.length>0&&et.setValue(U,"directionalShadowMap",Tt.state.directionalShadowMap,Y),Tt.state.spotShadowMap.length>0&&et.setValue(U,"spotShadowMap",Tt.state.spotShadowMap,Y),Tt.state.pointShadowMap.length>0&&et.setValue(U,"pointShadowMap",Tt.state.pointShadowMap,Y)),B.isSkinnedMesh){et.setOptional(U,B,"bindMatrix"),et.setOptional(U,B,"bindMatrixInverse");const it=B.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),et.setValue(U,"boneTexture",it.boneTexture,Y))}B.isBatchedMesh&&(et.setOptional(U,B,"batchingTexture"),et.setValue(U,"batchingTexture",B._matricesTexture,Y),et.setOptional(U,B,"batchingIdTexture"),et.setValue(U,"batchingIdTexture",B._indirectTexture,Y),et.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&et.setValue(U,"batchingColorTexture",B._colorsTexture,Y));const dn=X.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&P.update(B,X,kt),(cn||xe.receiveShadow!==B.receiveShadow)&&(xe.receiveShadow=B.receiveShadow,et.setValue(U,"receiveShadow",B.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(ht.envMapIntensity.value=D.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=q0()),cn){if(et.setValue(U,"toneMappingExposure",C.toneMappingExposure),xe.needsLights&&fs(ht,Pn),he&&k.fog===!0&&we.refreshFogUniforms(ht,he),we.refreshMaterialUniforms(ht,k,te,Z,y.state.transmissionRenderTarget[S.id]),xe.needsLights&&xe.lightProbeGrid){const it=xe.lightProbeGrid;ht.probesSH.value=it.texture,ht.probesMin.value.copy(it.boundingBox.min),ht.probesMax.value.copy(it.boundingBox.max),ht.probesResolution.value.copy(it.resolution)}Ys.upload(U,ds(xe),ht,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ys.upload(U,ds(xe),ht,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&et.setValue(U,"center",B.center),et.setValue(U,"modelViewMatrix",B.modelViewMatrix),et.setValue(U,"normalMatrix",B.normalMatrix),et.setValue(U,"modelMatrix",B.matrixWorld),k.uniformsGroups!==void 0){const it=k.uniformsGroups;for(let un=0,Ln=it.length;un<Ln;un++){const ms=it[un];ne.update(ms,kt),ne.bind(ms,kt)}}return kt}function fs(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function ca(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(S,D,X){const k=H.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=D,H.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const X=H.get(S);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,X=0){ie=S,q=D,$=X;let k=null,B=!1,he=!1;if(S){const ue=H.get(S);if(ue.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,ue.__webglFramebuffer),ee.copy(S.viewport),Me.copy(S.scissor),Ae=S.scissorTest,g.viewport(ee),g.scissor(Me),g.setScissorTest(Ae),W=-1;return}else if(ue.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(ue.__hasExternalTextures)Y.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Pe=S.depthTexture;if(ue.__boundDepthTexture!==Pe){if(Pe!==null&&H.has(Pe)&&(S.width!==Pe.image.width||S.height!==Pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}const ge=S.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(he=!0);const Ee=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ee[D])?k=Ee[D][X]:k=Ee[D],B=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?k=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Ee)?k=Ee[X]:k=Ee,ee.copy(S.viewport),Me.copy(S.scissor),Ae=S.scissorTest}else ee.copy(pe).multiplyScalar(te).floor(),Me.copy(Ue).multiplyScalar(te).floor(),Ae=xt;if(X!==0&&(k=V),g.bindFramebuffer(U.FRAMEBUFFER,k)&&g.drawBuffers(S,k),g.viewport(ee),g.scissor(Me),g.setScissorTest(Ae),B){const ue=H.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue.__webglTexture,X)}else if(he){const ue=D;for(let ge=0;ge<S.textures.length;ge++){const Ee=H.get(S.textures[ge]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ge,Ee.__webglTexture,X,ue)}}else if(S!==null&&X!==0){const ue=H.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ue.__webglTexture,X)}W=-1};function ps(S){const D=H.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=A.textureFormatReadable(S.format),D.__typeReadable=A.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,X,k,B,he,Se,ue=0){if(!(S&&S.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(ge=ge[Se]),ge){g.bindFramebuffer(U.FRAMEBUFFER,ge);try{const Ee=S.textures[ue],Pe=Ee.format,Be=Ee.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);const be=ps(Ee);if(be.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-k&&X>=0&&X<=S.height-B&&U.readPixels(D,X,k,B,ce.convert(Pe),ce.convert(Be),he)}finally{const Ee=ie!==null?H.get(ie).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(S,D,X,k,B,he,Se,ue=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(ge=ge[Se]),ge)if(D>=0&&D<=S.width-k&&X>=0&&X<=S.height-B){g.bindFramebuffer(U.FRAMEBUFFER,ge);const Ee=S.textures[ue],Pe=Ee.format,Be=Ee.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);const be=ps(Ee);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),U.readPixels(D,X,k,B,ce.convert(Pe),ce.convert(Be),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const gt=ie!==null?H.get(ie).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,gt);const ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await $d(U,ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ze),U.deleteSync(ot),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,X=0){const k=Math.pow(2,-X),B=Math.floor(S.image.width*k),he=Math.floor(S.image.height*k),Se=D!==null?D.x:0,ue=D!==null?D.y:0;Y.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Se,ue,B,he),g.unbindTexture()},this.copyTextureToTexture=function(S,D,X=null,k=null,B=0,he=0){let Se,ue,ge,Ee,Pe,Be,be,Ze,gt;const ot=S.isCompressedTexture?S.mipmaps[he]:S.image;if(X!==null)Se=X.max.x-X.min.x,ue=X.max.y-X.min.y,ge=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,Pe=X.min.y,Be=X.isBox3?X.min.z:0;else{const ht=Math.pow(2,-B);Se=Math.floor(ot.width*ht),ue=Math.floor(ot.height*ht),S.isDataArrayTexture?ge=ot.depth:S.isData3DTexture?ge=Math.floor(ot.depth*ht):ge=1,Ee=0,Pe=0,Be=0}k!==null?(be=k.x,Ze=k.y,gt=k.z):(be=0,Ze=0,gt=0);const qe=ce.convert(D.format),yt=ce.convert(D.type);let xe;D.isData3DTexture?(Y.setTexture3D(D,0),xe=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Y.setTexture2DArray(D,0),xe=U.TEXTURE_2D_ARRAY):(Y.setTexture2D(D,0),xe=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Tt=g.getParameter(U.UNPACK_ROW_LENGTH),We=g.getParameter(U.UNPACK_IMAGE_HEIGHT),kt=g.getParameter(U.UNPACK_SKIP_PIXELS),Kt=g.getParameter(U.UNPACK_SKIP_ROWS),cn=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),g.pixelStorei(U.UNPACK_SKIP_ROWS,Pe),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Be);const Pn=S.isDataArrayTexture||S.isData3DTexture,et=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const ht=H.get(S),dn=H.get(D),it=H.get(ht.__renderTarget),un=H.get(dn.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,it.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let Ln=0;Ln<ge;Ln++)Pn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(S).__webglTexture,B,Be+Ln),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(D).__webglTexture,he,gt+Ln)),U.blitFramebuffer(Ee,Pe,Se,ue,be,Ze,Se,ue,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||H.has(S)){const ht=H.get(S),dn=H.get(D);g.bindFramebuffer(U.READ_FRAMEBUFFER,I),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let it=0;it<ge;it++)Pn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ht.__webglTexture,B,Be+it):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ht.__webglTexture,B),et?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,dn.__webglTexture,he,gt+it):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dn.__webglTexture,he),B!==0?U.blitFramebuffer(Ee,Pe,Se,ue,be,Ze,Se,ue,U.COLOR_BUFFER_BIT,U.NEAREST):et?U.copyTexSubImage3D(xe,he,be,Ze,gt+it,Ee,Pe,Se,ue):U.copyTexSubImage2D(xe,he,be,Ze,Ee,Pe,Se,ue);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else et?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(xe,he,be,Ze,gt,Se,ue,ge,qe,yt,ot.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(xe,he,be,Ze,gt,Se,ue,ge,qe,ot.data):U.texSubImage3D(xe,he,be,Ze,gt,Se,ue,ge,qe,yt,ot):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,be,Ze,Se,ue,qe,yt,ot.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,be,Ze,ot.width,ot.height,qe,ot.data):U.texSubImage2D(U.TEXTURE_2D,he,be,Ze,Se,ue,qe,yt,ot);g.pixelStorei(U.UNPACK_ROW_LENGTH,Tt),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,We),g.pixelStorei(U.UNPACK_SKIP_PIXELS,kt),g.pixelStorei(U.UNPACK_SKIP_ROWS,Kt),g.pixelStorei(U.UNPACK_SKIP_IMAGES,cn),he===0&&D.generateMipmaps&&U.generateMipmap(xe),g.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),g.unbindTexture()},this.resetState=function(){q=0,$=0,ie=null,g.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Hn={fog:{color:263431,densityDesktop:.026,densityMobile:.034},lighting:{ambientIntensity:.85,ambientColor:791330,moonlightIntensity:2.1,moonlightColor:3718648,emergencyBeaconIntensity:2.8,emergencyBeaconColor:13637664,doorwayLightIntensity:4.5,doorwayHoverIntensity:12,doorwayColor:11735835},particles:{dustCountDesktop:420,dustCountMobile:150,dustColor:9741240},performance:{maxPixelRatio:1.5}};function K0(i){const e=[],t=new ei(36,80,1,1),n=new ka({color:329225,roughness:.18,metalness:.85}),s=new ct(t,n);s.rotation.x=-Math.PI/2,s.position.set(0,0,-12),i.add(s),e.push(t,n);const a=new si(.9,8.5,.9),r=new ka({color:724242,roughness:.85,metalness:.15});e.push(a,r);const o=new ei(.12,1.9),l=new Qn({color:13637664,transparent:!0,opacity:.55});e.push(o,l);for(let M=4;M>=-28;M-=5.5){const x=new ct(a,r);x.position.set(-3.8,4.25,M),i.add(x);const f=new ct(o,l);f.position.set(-3.34,3.4,M),f.rotation.y=Math.PI/2,i.add(f);const w=new ct(a,r);w.position.set(3.8,4.25,M),i.add(w);const N=new ct(o,l);N.position.set(3.34,3.4,M),N.rotation.y=-Math.PI/2,i.add(N)}const c=new si(3.6,6.2,.4),h=new ka({color:263431,roughness:.95}),p=new ct(c,h);p.position.set(0,3.1,-29),i.add(p),e.push(c,h);const u=new ei(2.6,5.6),m=new Qn({color:13637664,transparent:!0,opacity:.45}),v=new ct(u,m);return v.position.set(0,3,-28.75),i.add(v),e.push(u,m),{dispose:()=>{e.forEach(M=>M.dispose&&M.dispose())}}}function Z0(i){const{lighting:e}=Hn,t=new Yu(e.ambientColor,e.ambientIntensity);i.add(t);const n=new ju(e.moonlightColor,e.moonlightIntensity);n.position.set(8,14,5),n.target.position.set(0,1.5,0),i.add(n),i.add(n.target);const s=new $o(e.emergencyBeaconColor,e.emergencyBeaconIntensity,14,1.4);s.position.set(-3.2,3.8,-8),i.add(s);const a=new $o(e.doorwayColor,e.doorwayLightIntensity,24,1.1);a.position.set(0,2.5,-28),i.add(a);let r=!1;return{update:(o,l,c)=>{Math.sin(o*.2)>.97?(r=!0,n.intensity=e.moonlightIntensity*(Math.random()*.6+.4)):(r=!1,n.intensity=e.moonlightIntensity);const h=c>.75?e.doorwayLightIntensity+(c-.75)*8:e.doorwayLightIntensity,p=l?e.doorwayHoverIntensity:h;a.intensity+=(p-a.intensity)*.08},isFlickering:()=>r,dispose:()=>{i.remove(t),i.remove(n),i.remove(s),i.remove(a)}}}function J0(i){const e=[],t=[],n=new Vn;n.position.set(0,0,-10),i.add(n);const s=(W,J)=>{const ee=new ln({transparent:!0,side:mn,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new Ge(W)},uRimColor:{value:new Ge(J)},uOpacity:{value:0}},vertexShader:`
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
      `});return t.push(ee),e.push(ee),ee},a=s(329224,13637664),r=s(131844,3718648),o=new Ri(.32,1.2,2.7,24,18,!0),l=new ct(o,a);l.position.y=1.35,n.add(l),e.push(o);const c=new Ri(.26,.9,2.4,20,14,!0),h=new ct(c,r);h.position.y=1.3,n.add(h),e.push(c);const p=new Vn;p.position.set(0,2.65,0),n.add(p);const u=new Jr(.52,.9,20,10,!0),m=new ct(u,a);m.rotation.x=Math.PI*.9,m.position.set(0,.1,-.08),p.add(m),e.push(u);const v=new Ki(.3,14,14),M=new Qn({color:0}),x=new ct(v,M);x.position.set(0,0,.05),p.add(x),e.push(v,M);const f=new Ki(.04,10,10),w=new Qn({color:16777215,toneMapped:!1});e.push(f,w);const N=new ct(f,w);N.position.set(-.1,.02,.25),p.add(N);const b=new ct(f,w);b.position.set(.1,.02,.25),p.add(b);const E=new Ki(.08,8,8),y=new Qn({color:13637664,transparent:!0,opacity:.8,blending:Ji});e.push(E,y);const R=new ct(E,y);R.position.set(-.1,.02,.25),p.add(R);const _=new ct(E,y);_.position.set(.1,.02,.25),p.add(_);const T=new Ri(.05,.12,.85,10,6,!0);e.push(T);const C=new Vn;C.position.set(-.6,2.05,.1),C.rotation.set(.45,0,-.35);const L=new ct(T,a);L.position.y=-.42,C.add(L),n.add(C);const F=new Vn;F.position.set(.6,2,.12),F.rotation.set(.55,0,.38);const V=new ct(T,a);V.position.y=-.42,F.add(V),n.add(F);const I=350,z=new Vt,q=new Float32Array(I*3);for(let W=0;W<I;W++){const J=Math.random()*Math.PI*2,ee=.35+Math.random()*1.8;q[W*3]=Math.cos(J)*ee,q[W*3+1]=Math.random()*3.2,q[W*3+2]=Math.sin(J)*ee}z.setAttribute("position",new on(q,3));const $=new Zr({color:13637664,size:.04,transparent:!0,opacity:.7,blending:Ji}),ie=new tc(z,$);return n.add(ie),e.push(z,$),{group:n,head:p,setOpacity:W=>{t.forEach(J=>{J.uniforms.uOpacity.value=W}),$.opacity=W*.75,w.opacity=W,y.opacity=W*.8},update:(W,J)=>{t.forEach(Me=>{Me.uniforms.uTime.value=W}),n.position.y=Math.sin(W*1.3)*.12,p.rotation.y=J.x*.4,p.rotation.x=-J.y*.3,C.rotation.x=.45+Math.sin(W*1.6)*.05,F.rotation.x=.55+Math.cos(W*1.4)*.05;const ee=z.attributes.position.array;for(let Me=0;Me<I;Me++)ee[Me*3+1]+=.01,ee[Me*3+1]>3.4&&(ee[Me*3+1]=.1);z.attributes.position.needsUpdate=!0},dispose:()=>{i.remove(n),e.forEach(W=>W.dispose&&W.dispose())}}}const to={pageSections:[{id:"hero",enabled:!0},{id:"case",enabled:!0},{id:"evidence",enabled:!0},{id:"investigation",enabled:!0},{id:"timeline",enabled:!0},{id:"council",enabled:!0},{id:"rewards",enabled:!0},{id:"benefits",enabled:!0},{id:"sponsors",enabled:!0},{id:"faq",enabled:!0},{id:"final",enabled:!0}],cameraStages:[{progressEnd:.15,name:"Arrival & Room Overview",camPos:{start:[-.2,1.85,6.8],end:[-.5,1.7,4.8]},lookAt:{start:[0,1.8,0],end:[-.2,1.7,-2]}},{progressEnd:.35,name:"The Evidence & Dossiers",camPos:{start:[-.5,1.7,4.8],end:[1.2,1.85,1.6]},lookAt:{start:[-.2,1.7,-2],end:[-.4,1.9,-5]}},{progressEnd:.55,name:"The Monolithic Hallway",camPos:{start:[1.2,1.85,1.6],end:[-.6,1.8,-6.5]},lookAt:{start:[-.4,1.9,-5],end:[0,1.8,-18]}},{progressEnd:.75,name:"The 36-Hour Deep Corridor",camPos:{start:[-.6,1.8,-6.5],end:[.4,1.8,-16]},lookAt:{start:[0,1.8,-18],end:[0,2,-26]}},{progressEnd:1,name:"The Final Illuminated Doorway",camPos:{start:[.4,1.8,-16],end:[0,2.1,-24.5]},lookAt:{start:[0,2,-26],end:[0,2.3,-28.5]}}],ghostEvents:[{id:"event_a_arrival_presence",label:"Distant Hallway Presence",sceneId:"hero",startProgress:.02,peakProgress:.08,endProgress:.16,position:[.3,1.4,-6.5],maxOpacity:.75,behavior:"subtle-dissolve",enabled:!0},{id:"event_b_pillar_shadow",label:"Silhouette Behind Arch Pillar",sceneId:"investigation",startProgress:.36,peakProgress:.44,endProgress:.52,position:[-2.8,1.2,-12],maxOpacity:.68,behavior:"peek-fade",enabled:!0},{id:"event_c_corridor_crossing",label:"Figure Crossing Corridor Depth",sceneId:"timeline",startProgress:.62,peakProgress:.7,endProgress:.78,position:[1.8,1.3,-20.5],maxOpacity:.72,behavior:"cross-mist",enabled:!0},{id:"event_d_final_portal_sentinel",label:"Distant Sentinel Near Doorway",sceneId:"final",startProgress:.88,peakProgress:.94,endProgress:1,position:[-1.4,1.5,-26.5],maxOpacity:.6,behavior:"threshold-fade",enabled:!0}]};function Q0(i){const e=J0(i),t=to.ghostEvents.filter(s=>s.enabled);let n=0;return{update:(s,a,r)=>{let o=null,l=0;for(const c of t)if(r>=c.startProgress&&r<=c.endProgress){o=c,r<c.peakProgress?l=(r-c.startProgress)/(c.peakProgress-c.startProgress)*c.maxOpacity:l=(1-(r-c.peakProgress)/(c.endProgress-c.peakProgress))*c.maxOpacity;break}n+=(l-n)*.08,e.setOpacity(n),o&&n>.01?(e.group.position.x=o.position[0],e.group.position.z=o.position[2],e.update(s,a)):n>.01&&e.update(s,a)},dispose:()=>{e.dispose()}}}function eg(i,e=!1){const t=e?Hn.particles.dustCountMobile:Hn.particles.dustCountDesktop,n=new Vt,s=new Float32Array(t*3);for(let o=0;o<t;o++)s[o*3]=(Math.random()-.5)*16,s[o*3+1]=Math.random()*6.5,s[o*3+2]=6-Math.random()*34;n.setAttribute("position",new on(s,3));const a=new Zr({color:Hn.particles.dustColor,size:.035,transparent:!0,opacity:.4,blending:Ji}),r=new tc(n,a);return i.add(r),{update:()=>{const o=n.attributes.position.array;for(let l=1;l<o.length;l+=3)o[l]-=.0035,o[l]<.1&&(o[l]=6);n.attributes.position.needsUpdate=!0},dispose:()=>{i.remove(r),n.dispose(),a.dispose()}}}function tg(i,e=!1){const t=e?Hn.fog.densityMobile:Hn.fog.densityDesktop;return i.fog=new $r(Hn.fog.color,t),{setDensity:n=>{i.fog&&(i.fog.density=n)},dispose:()=>{i.fog=null}}}function ng(i){const e=to.cameraStages,t=new G(...e[0].camPos.start),n=new G(...e[0].camPos.start),s=new G(...e[0].lookAt.start),a=new G(...e[0].lookAt.start);return i.position.copy(t),i.lookAt(s),{update:(r,o)=>{let l=e[0],c=0;for(let m=0;m<e.length;m++)if(r<=e[m].progressEnd){l=e[m],c=m===0?0:e[m-1].progressEnd;break}const h=l.progressEnd-c,p=h>0?Math.min(Math.max((r-c)/h,0),1):0,u=.5-.5*Math.cos(p*Math.PI);n.x=ci.lerp(l.camPos.start[0],l.camPos.end[0],u),n.y=ci.lerp(l.camPos.start[1],l.camPos.end[1],u),n.z=ci.lerp(l.camPos.start[2],l.camPos.end[2],u),a.x=ci.lerp(l.lookAt.start[0],l.lookAt.end[0],u),a.y=ci.lerp(l.lookAt.start[1],l.lookAt.end[1],u),a.z=ci.lerp(l.lookAt.start[2],l.lookAt.end[2],u),n.x+=o.x*.35,n.y+=o.y*.2,t.x+=(n.x-t.x)*.045,t.y+=(n.y-t.y)*.045,t.z+=(n.z-t.z)*.045,i.position.copy(t),s.x+=(a.x-s.x)*.045,s.y+=(a.y-s.y)*.045,s.z+=(a.z-s.z)*.045,i.lookAt(s)}}}function ig(){const i=to.pageSections.filter(t=>t.enabled);let e=i[0]?i[0].id:"hero";return{getActiveScene:()=>e,update:t=>{const n=i.length;if(n===0)return;const s=Math.min(Math.floor(t*n),n-1);i[s]&&(e=i[s].id)}}}_e.memo(function({scrollProgress:e=0,finalDoorHovered:t=!1}){const n=_e.useRef(null);return _e.useEffect(()=>{const s=n.current;if(!s)return;try{const C=document.createElement("canvas");if(!(C.getContext("webgl2")||C.getContext("webgl")))return}catch{return}const a=window.innerWidth,r=window.innerHeight,o=a<768,l=new wu,c=new Yt(50,a/r,.1,85),h=new $0({alpha:!0,antialias:!o,powerPreference:"high-performance"});h.setSize(a,r),h.setPixelRatio(Math.min(window.devicePixelRatio,Hn.performance.maxPixelRatio)),h.toneMapping=Br,h.toneMappingExposure=1.25,s.appendChild(h.domElement);const p=ig(),u=ng(c),m=K0(l),v=Z0(l),M=tg(l,o),x=eg(l,o),f=Q0(l),w={x:0,y:0,targetX:0,targetY:0},N=C=>{w.targetX=(C.clientX/window.innerWidth-.5)*2,w.targetY=-(C.clientY/window.innerHeight-.5)*2},b=()=>{const C=window.innerWidth,L=window.innerHeight;c.aspect=C/L,c.updateProjectionMatrix(),h.setSize(C,L)};window.addEventListener("mousemove",N,{passive:!0}),window.addEventListener("resize",b);let E=null,y=new Ku,R=!1;const _=()=>{R=document.hidden,R||y.start()};document.addEventListener("visibilitychange",_);const T=()=>{if(E=requestAnimationFrame(T),R)return;const C=y.getElapsedTime();w.x+=(w.targetX-w.x)*.05,w.y+=(w.targetY-w.y)*.05;const L=s.dataset.scrollProgress?parseFloat(s.dataset.scrollProgress):0,F=s.dataset.doorHovered==="true";p.update(L),u.update(L,w),v.update(C,F,L),x.update(),f.update(C,w,L),h.render(l,c)};return E=requestAnimationFrame(T),()=>{E&&cancelAnimationFrame(E),window.removeEventListener("mousemove",N),window.removeEventListener("resize",b),document.removeEventListener("visibilitychange",_),m.dispose(),v.dispose(),M.dispose(),x.dispose(),f.dispose(),h&&(h.dispose(),h.domElement&&h.domElement.parentNode&&h.domElement.parentNode.removeChild(h.domElement))}},[]),d.jsx("div",{ref:n,"data-scroll-progress":e,"data-door-hovered":t?"true":"false",className:"fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})});const sg=_e.memo(function(){return d.jsx("div",{className:"film-grain","aria-hidden":"true"})}),ag=_e.memo(function({intensity:e="medium"}){const t=e==="deep"?"radial-gradient(circle at center, transparent 35%, rgba(4, 4, 4, 0.85) 80%, #000000 100%)":"radial-gradient(circle at center, transparent 45%, rgba(6, 6, 6, 0.7) 85%, #050505 100%)";return d.jsx("div",{className:"fixed inset-0 pointer-events-none z-30",style:{background:t},"aria-hidden":"true"})}),rg=_e.memo(function(){return d.jsx("div",{className:"crt-scanlines","aria-hidden":"true"})});_e.memo(function(){return d.jsxs(d.Fragment,{children:[d.jsx(sg,{}),d.jsx(rg,{}),d.jsx(ag,{intensity:"medium"})]})});const og=_e.memo(function(){const e=yl.useRef(null),[t,n]=_e.useState("default"),[s,a]=_e.useState(!1);return _e.useEffect(()=>{const r="ontouchstart"in window||navigator.maxTouchPoints>0,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(r||o)return;a(!0);let l=-100,c=-100,h=null;const p=()=>{e.current&&(e.current.style.transform=`translate3d(${l}px, ${c}px, 0) translate(-50%, -50%)`),h=null},u=m=>{l=m.clientX,c=m.clientY,h||(h=requestAnimationFrame(p));const v=m.target;v&&(v.closest("button[type='button'], .cta-button, a[href*='registration']")?n("cta"):v.closest(".evidence-card, [id='evidence']")?n("crosshair"):v.closest("a, button, input, summary, [role='button']")?n("hover"):n("default"))};return window.addEventListener("mousemove",u,{passive:!0}),()=>{window.removeEventListener("mousemove",u),h&&cancelAnimationFrame(h)}},[]),s?d.jsxs("div",{ref:e,className:"fixed top-0 left-0 pointer-events-none z-50 will-change-transform transform-gpu",style:{transform:"translate3d(-100px, -100px, 0) translate(-50%, -50%)"},"aria-hidden":"true",children:[d.jsx("div",{className:"w-80 h-80 rounded-full bg-radial from-amber-100/[0.035] via-[#B3131B]/[0.015] to-transparent blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}),t==="default"&&d.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#D01820] shadow-[0_0_8px_#D01820]"}),t==="hover"&&d.jsx("div",{className:"w-8 h-8 rounded-full border border-stone-300 bg-white/10 transition-all duration-200 shadow-[0_0_12px_rgba(255,255,255,0.3)] animate-ping"}),t==="crosshair"&&d.jsxs("div",{className:"relative w-7 h-7 flex items-center justify-center",children:[d.jsx("div",{className:"w-5 h-5 rounded-full border border-[#D01820] shadow-[0_0_8px_#D01820]"}),d.jsx("div",{className:"absolute w-7 h-[1px] bg-[#D01820]"}),d.jsx("div",{className:"absolute h-7 w-[1px] bg-[#D01820]"})]}),t==="cta"&&d.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-[#D01820] bg-[#D01820]/20 shadow-[0_0_20px_#D01820] transition-all duration-200 animate-pulse"})]}):null}),zt={branding:{name:"BUILDX",subOrganizer:"A CODE-A-NOVA HACKATHON",tagline:"36 HOURS. ONE MYSTERY. INFINITE POSSIBILITIES.",missionDescription:"BUILDX is a 36-hour national-level online hackathon where developers, engineers, and designers investigate real challenges and engineer breakthrough software."},dates:{start:new Date(Date.now()+840*60*60*1e3).toISOString(),end:new Date(Date.now()+888*60*60*1e3).toISOString()},registration:{ctaText:"REGISTER NOW",targetUrl:"#registration"},socials:{github:"https://github.com",discord:"https://discord.gg",twitter:"https://twitter.com",linkedin:"https://linkedin.com"}},lg=[{id:"hero",label:"HOME",href:"#hero",enabled:!0},{id:"case",label:"THE CASE",href:"#case",enabled:!0},{id:"evidence",label:"EVIDENCE",href:"#evidence",enabled:!0},{id:"investigation",label:"INVESTIGATION",href:"#investigation-board",enabled:!0},{id:"timeline",label:"TIMELINE",href:"#timeline",enabled:!0},{id:"council",label:"THE COUNCIL",href:"#council",enabled:!0},{id:"rewards",label:"REWARDS",href:"#rewards",enabled:!0},{id:"sponsors",label:"SPONSORS",href:"#sponsors",enabled:!0},{id:"faq",label:"FAQ",href:"#faq",enabled:!0}];function Ii({children:i,onClick:e,href:t,variant:n="primary",size:s="md",className:a="",icon:r=null,type:o="button"}){const l="relative inline-flex items-center justify-center font-mono-tech font-bold uppercase tracking-wider transition-all duration-200 rounded-xs cursor-pointer select-none overflow-hidden focus:outline-none focus:ring-1 focus:ring-[#D01820]",c={sm:"px-4 py-2 text-xs gap-1.5",md:"px-6 py-3 text-xs md:text-sm gap-2",lg:"px-8 py-4 text-sm md:text-base gap-2.5"}[s]||c.md,h={primary:"bg-[#B3131B] hover:bg-[#D01820] text-white border border-[#D01820] shadow-[0_0_20px_rgba(208,24,32,0.45)] hover:shadow-[0_0_30px_rgba(208,24,32,0.7)] hover:-translate-y-0.5 active:translate-y-0",secondary:"bg-[#141414] hover:bg-[#1a1a1a] text-slate-200 hover:text-white border border-white/20 hover:border-[#D01820] shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-0",outline:"bg-transparent hover:bg-white/[0.04] text-slate-300 hover:text-white border border-white/15 hover:border-white/35 hover:-translate-y-0.5 active:translate-y-0"}[n]||h.primary,p=d.jsxs(d.Fragment,{children:[r&&d.jsx("span",{className:"shrink-0",children:r}),d.jsx("span",{children:i})]});return t?d.jsx("a",{href:t,className:`${l} ${c} ${h} ${a}`,children:p}):d.jsx("button",{type:o,onClick:e,className:`${l} ${c} ${h} ${a}`,children:p})}const rs="/assets/buildx-logo-danger-CgCptXoH.png";function cg(){const[i,e]=_e.useState(!1),[t,n]=_e.useState(!1);_e.useEffect(()=>{const a=()=>{e(window.scrollY>30)};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),_e.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const s=lg.filter(a=>a.enabled);return d.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${i?"bg-[#06080c]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.9)] py-3.5":"bg-transparent py-5"}`,children:[d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("a",{href:"#hero",className:"flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#D01820] rounded-xs p-1 select-none",children:[d.jsx("div",{className:"h-7 sm:h-8 w-auto flex items-center filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_0_15px_rgba(208,24,32,0.4)]",children:d.jsx("img",{src:rs,alt:"BUILDX",className:"h-full w-auto object-contain select-none pointer-events-none brightness-[1.12] contrast-[1.15]",loading:"eager"})}),d.jsx("div",{className:"hidden sm:flex flex-col justify-center border-l border-white/10 pl-2.5",children:d.jsx("span",{className:"font-mono-tech text-[9px] text-slate-400 uppercase tracking-widest leading-tight",children:zt.branding.subOrganizer})})]}),d.jsx("nav",{className:"hidden xl:flex items-center gap-6 select-none","aria-label":"Investigation Navigation",children:s.map(a=>d.jsxs("a",{href:a.href,className:"font-mono-tech text-xs font-semibold text-slate-300 hover:text-white transition-colors relative py-1 group tracking-wider select-none",children:[d.jsx("span",{children:a.label}),d.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D01820] group-hover:w-full transition-all duration-200"})]},a.id))}),d.jsx("div",{className:"hidden sm:flex items-center gap-4",children:d.jsx(Ii,{href:zt.registration.targetUrl,variant:"primary",size:"sm",icon:d.jsx(Zi,{className:"w-3.5 h-3.5"}),children:zt.registration.ctaText})}),d.jsx("button",{type:"button",onClick:()=>n(!t),className:"xl:hidden p-2 rounded-xs bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#D01820] focus:outline-none focus:ring-1 focus:ring-[#D01820]","aria-label":t?"Close menu":"Open menu","aria-expanded":t,children:t?d.jsx(Qc,{className:"w-5 h-5"}):d.jsx(ed,{className:"w-5 h-5"})})]})}),t&&d.jsxs("div",{className:"xl:hidden fixed inset-0 top-[65px] bg-[#06080c]/98 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col justify-between z-50",children:[d.jsx("nav",{className:"flex flex-col space-y-4","aria-label":"Mobile Navigation",children:s.map(a=>d.jsx("a",{href:a.href,onClick:()=>n(!1),className:"font-mono-tech text-sm font-semibold text-slate-200 hover:text-[#D01820] py-2 border-b border-white/5 tracking-wider",children:a.label},a.id))}),d.jsx("div",{className:"pt-6",children:d.jsx(Ii,{href:zt.registration.targetUrl,variant:"primary",size:"md",className:"w-full justify-center",onClick:()=>n(!1),children:zt.registration.ctaText})})]})]})}const dg="/assets/home-01-B5TPwGyb.png",ug="/assets/home-02-GYeOmjP7.png",hg="/assets/home-03-C0YqGtiM.png",fg="/assets/home-06-CDYhINdt.png",pg="/assets/home-07-mhPI3FPX.png",mg="/assets/home-08-DImn6Soa.jpg",gg="/assets/home-09-BbSIpgkj.png",xg="/assets/home-10-8gRlvVta.png",_g="/assets/home-10-map-BTJAi2M0.png",vg="/assets/home-11-D1xNeUNu.png",Sg="/assets/home-12-CZNKQUiN.png",bg="/assets/home-13-DKAaH4x_.png",Mg="/assets/home-14-Ckk1lpIx.png",yg="/assets/home-15-tzb6WOWd.jpg",Dt=[{id:"scene-01",name:"The Abandoned Corridor // Presence",image:dg,nextSceneId:"scene-02"},{id:"scene-02",name:"The Open Gate Vault",image:ug,nextSceneId:"scene-03"},{id:"scene-03",name:"The Investigation Chamber // Entrance",image:hg,nextSceneId:"scene-06"},{id:"scene-06",name:"The Crime Board // Front Blackboard Manifest",image:fg,nextSceneId:"scene-07"},{id:"scene-07",name:"The Subterranean Trapdoor Hatch // Chamber Pull-Back",image:pg,nextSceneId:"scene-08"},{id:"scene-08",name:"The Subterranean Staircase // The Ghost at the Gate",image:mg,nextSceneId:"scene-09"},{id:"scene-09",name:"Ghost First-Person Eye View // Gripping the Vault Gate",image:gg,nextSceneId:"scene-10"},{id:"scene-10",name:"The Crypt Cathedral // Entrance & Advance",image:xg,nextSceneId:"scene-10-map"},{id:"scene-10-map",name:"Sanctum Blueprint // Verifying Location",image:_g,nextSceneId:"scene-11"},{id:"scene-11",name:"The Sacrificial Altar // Advancing to the Vessel",image:vg,nextSceneId:"scene-12"},{id:"scene-12",name:"Reaching for the Ancient Scroll // Close-Up",image:Sg,nextSceneId:"scene-13"},{id:"scene-13",name:"Unrolling the Sanctum Proclamation",image:bg,nextSceneId:"scene-14"},{id:"scene-14",name:"Save the Date // Hackathon Scroll Proclamation",image:Mg,nextSceneId:"scene-15"},{id:"scene-15",name:"The Crypt Sanctorum // Cathedral of the Occult Rules",image:yg,nextSceneId:null}],Sl={initialLoad:{badge:"CASE FILE // 001",signalText:"THE SIGNAL IS STILL ACTIVE."}};function Eg(i=0,e=!1,t=!1){const n=Math.min(Math.max(i,0),1);if(e)return{x:0,y:0,scale:1+n*.15,rotateZ:0,gateProximity:n};const s=1+n*.14,a=n>.02,r=n*Math.PI*14,o=Math.abs(Math.sin(r)),l=a?o*2.5-1.25:0,c=a?Math.sin(r*.5)*2:0,h=a?Math.sin(r*.5)*.2:0;return{x:c,y:l,scale:s,rotateZ:h,gateProximity:n}}function Tg(i=0,e=!1,t=!1){return Eg(i,e,t)}function wg(){const[i,e]=_e.useState(0),[t,n]=_e.useState(!1);return _e.useEffect(()=>{let s=!0;const a=[...Dt.map(p=>p.image),rs].filter(Boolean),r=a.length;let o=0;const l=()=>{if(o++,s){const p=Math.round(o/r*100);e(p)}},c=p=>new Promise(u=>{const m=new Image;m.src=p;const v=()=>{"decode"in m?m.decode().then(()=>{l(),u()}).catch(()=>{l(),u()}):(l(),u())};m.complete&&m.naturalWidth>0?v():(m.onload=v,m.onerror=()=>{l(),u()})});Promise.all(a.map(c)).then(()=>{s&&(e(100),setTimeout(()=>{s&&n(!0)},300))});const h=setTimeout(()=>{s&&(e(100),n(!0))},4e3);return()=>{s=!1,clearTimeout(h)}},[]),{progress:i,isReady:t}}const Ag=_e.memo(function({imageSrc:e,sceneId:t="scene-01",scrollProgress:n=0,cameraTransform:s={},onRevealComplete:a}){const r=n>.005,[o,l]=_e.useState(()=>r?2:0),{progress:c,isReady:h}=wg();_e.useEffect(()=>{if(n>.005){l(2),a&&a();return}if(h){const f=setTimeout(()=>{l(1)},400),w=setTimeout(()=>{l(2),a&&a()},950);return()=>{clearTimeout(f),clearTimeout(w)}}},[h,n>.005,a]),_e.useEffect(()=>{n>.005&&o<2&&(l(2),a&&a())},[n,o,a]);const{x:p=0,y:u=0,scale:m=1,rotateZ:v=0}=s,M=!r&&o<2,x=r?0:o===0?1:o===1?.35:0;return d.jsxs("div",{className:"absolute inset-0 w-full h-full overflow-hidden select-none bg-black",children:[d.jsxs("div",{className:"absolute -inset-x-[6%] -inset-y-[4%] w-[112%] h-[108%] will-change-transform transform-gpu",style:{transform:`translate3d(calc(${p}px + 4.2vw), ${u}px, 0) scale(${m}) rotate(${v}deg)`,transformOrigin:"54% 18%"},children:[d.jsx("img",{src:e,alt:"Paranormal Investigation Scene",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.05] contrast-[1.06]",loading:"eager",decoding:"async"}),t==="scene-01"&&n<.1&&d.jsx("div",{className:"absolute inset-0 pointer-events-none corridor-bulb-flare transform-gpu will-change-opacity",style:{background:"radial-gradient(circle at calc(54% + 4.2vw) 26%, rgba(255, 195, 80, 0.32) 0%, rgba(220, 130, 40, 0.15) 26%, transparent 60%)"}}),t==="scene-01"&&n<.1&&d.jsx("div",{className:"absolute inset-0 pointer-events-none bg-black corridor-blackout-shadow transform-gpu will-change-opacity"})]}),d.jsx("div",{className:"absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 ease-out",style:{opacity:x}}),M&&d.jsx("div",{className:`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/95 text-center pointer-events-none transition-opacity duration-500 ${o===1?"opacity-0":"opacity-100"}`,children:d.jsxs("div",{className:"space-y-3 font-mono max-w-sm px-4",children:[d.jsxs("div",{className:"text-xs text-[#D01820] tracking-widest uppercase animate-pulse flex items-center justify-center gap-2",children:[d.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-[#D01820] animate-ping"}),d.jsx("span",{children:Sl.initialLoad.badge})]}),d.jsx("div",{className:"text-sm sm:text-base text-stone-200 tracking-widest uppercase font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]",children:Sl.initialLoad.signalText}),d.jsxs("div",{className:"pt-2 flex flex-col items-center gap-2",children:[d.jsx("div",{className:"text-[11px] tracking-widest uppercase font-semibold text-stone-400",children:h?d.jsx("span",{className:"text-emerald-400 font-bold tracking-wider animate-pulse",children:"✓ ALL SCENE EVIDENCE DECODED // SYSTEM READY"}):d.jsxs("span",{children:["DECRYPTING EVIDENCE ARCHIVES [ ",c,"% ]"]})}),d.jsx("div",{className:"w-48 sm:w-56 h-1.5 bg-stone-900 border border-red-900/60 rounded-full overflow-hidden shadow-[0_0_10px_rgba(208,24,32,0.3)]",children:d.jsx("div",{className:"h-full bg-gradient-to-r from-red-700 via-[#D01820] to-amber-400 transition-all duration-150 rounded-full",style:{width:`${c}%`}})})]})]})})]})}),mc={hero:{taglinePrimary:"36 HOURS. ONE MYSTERY.",taglineSecondary:"INFINITE POSSIBILITIES.",description:"An unknown anomaly has been detected deep inside the system. Assemble your team, investigate the technical evidence, and engineer a high-impact solution within 36 hours."},footer:{disclaimer:"BUILDX is an original technology hackathon event engineered by Code-A-Nova. All challenges, storylines, and assets are completely original.",copyright:"© 2026 CODE-A-NOVA. ALL RIGHTS RESERVED."}},qs={caseId:"CASE FILE // ARCH-2026-BUILDX",status:{badge:"ANOMALOUS SIGNAL DETECTED"},briefing:{detail:"All automated telemetry stopped responding at 03:17 AM. Visual sweeps confirmed physical barriers locked from within. Deploy code, inspect anomalies, and breach the deeper vault before containment fails."},hackathonDetails:{duration:"36 HOURS",durationNarrative:"36 HOURS REMAIN TO BREACH",format:"NATIONAL LEVEL INVESTIGATION // ONLINE",prizePool:"₹50,000+",dates:"OCTOBER 24 - 26, 2026"},anomalies:[{id:"TRACK-01",code:"ANOMALY // AI-90",title:"SYNTHETIC INTELLIGENCE & SENTIENCE",risk:"CLASS A",description:"Agents and reasoning systems exhibiting unverified cognitive divergence.",bounty:"₹18,000"},{id:"TRACK-02",code:"ANOMALY // WEB3-44",title:"DECENTRALIZED VAULT PROTOCOLS",risk:"CLASS S",description:"Cryptographic consensus models designed to withstand hostile anomalous intrusion.",bounty:"₹15,000"},{id:"TRACK-03",code:"ANOMALY // SYS-07",title:"AUTONOMOUS INFRASTRUCTURE DEFENSE",risk:"CLASS B",description:"Self-healing low-latency telemetry pipelines monitoring breach frontiers.",bounty:"₹12,000"},{id:"TRACK-04",code:"ANOMALY // OPEN-X",title:"OPEN ANOMALY INVESTIGATION",risk:"UNSPECIFIED",description:"Cross-disciplinary breakthroughs tackling unprecedented technical anomalies.",bounty:"₹5,000+"}],investigationTimeline:[{time:"00:00 HR",title:"BREACH INITIATED",desc:"Access keys dispatched to all registered investigators."},{time:"12:00 HR",title:"CHECKPOINT 01 // SIGNAL LOCK",desc:"First telemetry review and anomaly validation."},{time:"24:00 HR",title:"SECTOR DEEPENING",desc:"Secondary challenges unlocked. Code audit begins."},{time:"36:00 HR",title:"CONTAINMENT SEAL // SUBMISSION",desc:"All terminals locked. Council adjudication begins."}]},Rg=_e.memo(function({scrollProgress:e=0,revealed:t=!1}){const{hero:n}=mc,{hackathonDetails:s}=qs,[a,r]=_e.useState(!1);_e.useEffect(()=>{(t||e>.02)&&r(!0)},[t,e]);let o=1,l=1,c=0;if(e>.03){const f=Math.min(Math.max((e-.03)/.16,0),1);o=1+f*.2,l=Math.max(1-f*1.35,0),c=-f*22}const h=e*Math.PI*46,p=e>.005,u=Math.abs(Math.sin(h)),m=p?u*6-3:0,v=p?Math.sin(h*.5)*5:0,M=p?Math.sin(h*.5)*.45:0,x=a?l:0;return x<=.005&&(e>.12||a)?null:d.jsx("div",{className:"absolute inset-y-0 left-0 z-25 flex flex-col justify-center pl-4 sm:pl-8 lg:pl-12 xl:pl-14 pr-4 max-w-md sm:max-w-lg lg:max-w-xl select-none will-change-transform transform-gpu origin-left",style:{opacity:x,transform:`translate3d(${c+v}px, ${m}px, 0) scale(${o}) rotate(${M}deg)`,pointerEvents:x>.4?"auto":"none"},children:d.jsxs("div",{className:"space-y-4 sm:space-y-5 pt-12 sm:pt-14",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-black/90 backdrop-blur-md border border-white/20 font-mono text-xs text-stone-200 tracking-wider uppercase shadow-lg",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-[#D01820] animate-pulse shadow-[0_0_8px_#D01820]"}),d.jsx("span",{className:"text-stone-400 font-semibold",children:"CASE //"}),d.jsx("span",{className:"text-white font-black tracking-wide",children:"BUILDX-001"}),d.jsx("span",{className:"text-stone-600 font-bold",children:"•"}),d.jsx("span",{className:"text-stone-200 font-bold",children:"A CODE-A-NOVA HACKATHON"})]}),d.jsxs("div",{className:"space-y-1.5 select-none",children:[d.jsx("div",{className:"relative max-w-[260px] sm:max-w-[340px] lg:max-w-[400px] py-1 filter drop-shadow-[0_6px_35px_rgba(0,0,0,0.95)] drop-shadow-[0_0_30px_rgba(208,24,32,0.55)] brightness-[1.12] contrast-[1.15]",children:d.jsx("img",{src:rs,alt:"BUILDX",className:"w-full h-auto object-contain select-none pointer-events-none",loading:"eager"})}),d.jsxs("p",{className:"font-mono text-xs sm:text-sm md:text-base font-black text-white tracking-wider uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] pt-1",children:[n.taglinePrimary," ",d.jsx("span",{className:"text-red-500 font-black drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]",children:n.taglineSecondary})]})]}),d.jsx("p",{className:"font-sans text-stone-100 text-xs sm:text-[13.5px] leading-relaxed max-w-md drop-shadow-md bg-black/85 backdrop-blur-md p-4 rounded-xs border-l-4 border-l-[#D01820] border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.85)] font-medium",children:n.description}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs",children:[d.jsxs("div",{className:"px-3.5 py-1.5 rounded-xs bg-black/90 border border-white/20 backdrop-blur-md shadow-lg flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400 font-semibold",children:"DURATION:"}),d.jsx("span",{className:"text-white font-bold tracking-wide",children:s.duration})]}),d.jsxs("div",{className:"px-3.5 py-1.5 rounded-xs bg-black/90 border border-emerald-900/60 backdrop-blur-md shadow-lg flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400 font-semibold",children:"BOUNTY:"}),d.jsx("span",{className:"text-emerald-300 font-bold tracking-wide drop-shadow-[0_0_10px_rgba(110,231,183,0.4)]",children:s.prizePool})]}),d.jsxs("div",{className:"px-3.5 py-1.5 rounded-xs bg-black/90 border border-cyan-900/60 backdrop-blur-md shadow-lg flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400 font-semibold",children:"SECTOR:"}),d.jsx("span",{className:"text-cyan-300 font-bold tracking-wide drop-shadow-[0_0_10px_rgba(103,232,249,0.4)]",children:"ONLINE NATIONAL"})]})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2",children:[d.jsx(Ii,{href:"#register-modal",variant:"primary",size:"md",icon:d.jsx(Zi,{className:"w-4 h-4"}),onClick:()=>{const f=document.querySelector("[data-register-trigger]");f&&f.click()},children:"ENTER THE CASE // REGISTER"}),d.jsx("button",{type:"button",onClick:()=>{const f=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:f*.85,behavior:"smooth"})},className:"px-4 py-2.5 rounded-xs border border-white/20 hover:border-[#D01820] bg-black/85 hover:bg-black backdrop-blur-md font-mono text-xs text-stone-100 hover:text-white font-bold tracking-wider uppercase transition-all shadow-xl",children:"EXPLORE EVIDENCE ↓"})]}),d.jsxs("div",{className:"pt-2 flex items-center gap-2 font-mono text-[11px] text-stone-300 uppercase tracking-widest font-semibold drop-shadow-md",children:[d.jsx(td,{className:"w-3.5 h-3.5 text-[#D01820] animate-bounce"}),d.jsx("span",{children:"SCROLL TO ENTER THE INVESTIGATION"})]})]})})}),Cg=_e.memo(function({scrollProgress:e=0}){const t=Math.min(Math.max((e-.18)/.03,0),1);if(t<=.005)return null;const n=t,s=t,a=t,r=t,o=t,l=Math.min(Math.max((e-.31)/.035,0),1),c=Math.pow(l,1.4),h=1+c*.45,p=-c*90,u=t*Math.max(1-Math.pow(l,1.3),0);if(u<=.005)return null;const m=e*Math.PI*46,M=Math.abs(Math.sin(m))*6-3,x=Math.sin(m*.5)*5;return d.jsxs("div",{className:"absolute inset-0 z-25 pointer-events-none select-none flex flex-col justify-between pl-6 sm:pl-12 lg:pl-16 pr-4 sm:pr-8 pt-20 sm:pt-22 lg:pt-24 pb-4 sm:pb-6 overflow-hidden will-change-transform transform-gpu",style:{opacity:u,transform:`translate3d(${p+x}px, ${M}px, 0) scale(${h})`,transformOrigin:"45% 48%",pointerEvents:u>.4?"auto":"none"},children:[d.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-700 -z-10",style:{opacity:Math.min(t*1.35,.95)*Math.max(1-Math.pow(l,1.2),0)},"aria-hidden":"true",children:[d.jsx("div",{className:"absolute -bottom-12 inset-x-0 h-[58vh] bg-gradient-to-t from-black via-stone-950/65 to-transparent filter blur-3xl pointer-events-none"}),d.jsx("div",{className:"absolute bottom-2 -left-[30%] w-[160%] h-80 bg-gradient-to-r from-transparent via-stone-400/[0.09] to-transparent filter blur-2xl animate-chamber-fog pointer-events-none"}),d.jsx("div",{className:"absolute bottom-16 -right-[30%] w-[160%] h-72 bg-gradient-to-l from-transparent via-red-600/[0.07] to-transparent filter blur-3xl animate-chamber-fog-reverse pointer-events-none"}),d.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-amber-500/[0.045] filter blur-[140px] pointer-events-none"})]}),d.jsxs("div",{className:"space-y-4 sm:space-y-5 relative z-10",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 transition-all duration-300 max-w-5xl",style:{opacity:n,transform:`translate3d(0, ${(1-n)*12}px, 0)`,filter:n>=.95?"none":`blur(${(1-n)*4}px)`},children:[d.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-black/90 border border-[#D01820]/70 shadow-[0_0_20px_rgba(208,24,32,0.4)] backdrop-blur-md",children:[d.jsx(nd,{className:"w-4 h-4 text-[#D01820] animate-bounce"}),d.jsx("span",{className:"font-danger-heading text-xs sm:text-sm text-red-500 tracking-widest font-black",children:"LEVEL 4 ANOMALOUS CONTAINMENT BREACH"}),d.jsx("span",{className:"hidden sm:inline text-stone-500 font-mono",children:"|"}),d.jsx("span",{className:"hidden sm:inline font-danger-mono text-xs text-stone-200",children:"SECTOR 4 LOCKED FROM WITHIN"})]}),d.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-red-950/60 border border-[#D01820]/60 text-red-400 font-danger-mono text-xs backdrop-blur-sm shadow-md",children:[d.jsxs("span",{className:"relative flex h-2 w-2",children:[d.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D01820] opacity-75"}),d.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#D01820]"})]}),d.jsx("span",{className:"tracking-widest uppercase font-bold text-red-300",children:"SIGNAL LIVE: 03:17 AM"})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-6xl",children:[d.jsxs("div",{className:"lg:col-span-6 space-y-2.5 transition-all duration-300",style:{opacity:s,transform:`translate3d(${(1-s)*-16}px, 0, 0)`,filter:s>=.95?"none":`blur(${(1-s)*4}px)`},children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-black/85 border border-white/20 font-danger-mono text-[11px] text-stone-300 shadow-md",children:[d.jsx(id,{className:"w-3.5 h-3.5 text-[#D01820]"}),d.jsx("span",{className:"text-white font-bold tracking-wider",children:"DOSSIER // ARCH-BUILDX-001"})]}),d.jsxs("div",{className:"space-y-1 select-none",children:[d.jsx("div",{className:"relative max-w-[260px] sm:max-w-sm lg:max-w-md filter drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_0_25px_rgba(208,24,32,0.4)]",children:d.jsx("img",{src:rs,alt:"BUILDX",className:"w-full h-auto object-contain select-none pointer-events-none",loading:"eager"})}),d.jsx("div",{className:"font-danger-glitch text-xs sm:text-sm text-red-500 tracking-widest pt-0.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]",children:"A CODE-A-NOVA PARANORMAL INVESTIGATION • 2026"})]}),d.jsxs("div",{className:"font-danger-mono text-xs sm:text-sm text-stone-200 font-bold uppercase tracking-wider flex items-center gap-2 drop-shadow-md",children:[d.jsx(El,{className:"w-3.5 h-3.5 text-[#D01820] animate-pulse"}),d.jsx("span",{children:"36 HOURS REMAIN BEFORE PERMANENT CONTAINMENT FAILURE"})]})]}),d.jsx("div",{className:"lg:col-span-6 transition-all duration-300",style:{opacity:a,transform:`translate3d(${(1-a)*16}px, 0, 0)`,filter:a>=.95?"none":`blur(${(1-a)*4}px)`},children:d.jsxs("div",{className:"relative bg-black/90 backdrop-blur-md border border-red-700/60 p-5 rounded-xs shadow-[0_12px_45px_rgba(0,0,0,0.95)] relative overflow-hidden group hover:border-[#D01820] transition-colors",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 danger-stripes"}),d.jsx("div",{className:"absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-red-500/[0.12] to-transparent pointer-events-none animate-classified-scan"}),d.jsx("div",{className:"absolute top-2 left-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsx("div",{className:"absolute top-2 right-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsx("div",{className:"absolute bottom-2 left-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsx("div",{className:"absolute bottom-2 right-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsxs("div",{className:"flex items-center justify-between border-b border-red-950/80 pb-2 mb-3",children:[d.jsxs("div",{className:"flex items-center gap-2 font-danger-heading text-xs text-red-400 font-bold",children:[d.jsx(sd,{className:"w-3.5 h-3.5 text-red-500"}),d.jsx("span",{className:"tracking-widest",children:"INCIDENT REPORT // CLASSIFIED"})]}),d.jsx("span",{className:"font-danger-mono text-[10px] px-2 py-0.5 rounded-xs bg-red-950/80 text-red-300 border border-red-900/60 font-bold",children:"EYES ONLY"})]}),d.jsxs("p",{className:"font-horror-dossier text-stone-100 text-xs sm:text-[13.5px] leading-relaxed tracking-wide font-medium drop-shadow-sm",children:['"At ',d.jsx("span",{className:"text-red-400 font-bold drop-shadow-[0_0_8px_rgba(248,113,113,0.3)]",children:"03:17 AM"}),', anomalous containment failed inside Sector 4. Visual sweeps confirm the entity has locked all deeper steel vaults from the inside. Your directive: deploy code, reconstruct the murder & anomaly board, and breach the vault before you are trapped in the darkness forever."']})]})})]})]}),d.jsxs("div",{className:"mt-auto space-y-3.5 sm:space-y-4 max-w-6xl pt-4 sm:pt-6",children:[d.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 sm:gap-3.5 transition-all duration-300",style:{opacity:r,transform:`translate3d(0, ${(1-r)*12}px, 0)`,filter:r>=.95?"none":`blur(${(1-r)*4}px)`},children:[d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-stone-700/80 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx($s,{className:"w-3.5 h-3.5 text-[#D01820]"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"TIMELINE"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-white font-bold tracking-wider",children:"36 HOURS VIRTUAL"})]})]}),d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-emerald-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx(Tl,{className:"w-3.5 h-3.5 text-emerald-400"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"RECOVERY BOUNTY"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-emerald-300 font-bold tracking-wider",children:"₹50,000+ CASH"})]})]}),d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-cyan-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx(wl,{className:"w-3.5 h-3.5 text-cyan-400"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"BREACH DATES"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-cyan-300 font-bold tracking-wider",children:"OCT 24 - 26, 2026"})]})]}),d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-amber-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx(Al,{className:"w-3.5 h-3.5 text-amber-400"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"ACCESS CLEARANCE"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-amber-300 font-bold tracking-wider",children:"FREE REGISTRATION"})]})]})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-3.5 transition-all duration-300 pt-1",style:{opacity:o,transform:`translate3d(0, ${(1-o)*12}px, 0)`,filter:o>=.95?"none":`blur(${(1-o)*4}px)`,pointerEvents:o>.3?"auto":"none"},children:[d.jsx(Ii,{href:"#register-modal",variant:"primary",size:"md",icon:d.jsx(Zi,{className:"w-4 h-4"}),onClick:()=>{const f=document.querySelector("[data-register-trigger]");f&&f.click()},children:"BREACH THE VAULT // REGISTER NOW"}),d.jsxs("button",{type:"button",onClick:()=>{const f=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:f,behavior:"smooth"})},className:"px-4 py-2.5 rounded-xs border border-red-900/70 hover:border-[#D01820] bg-black/90 backdrop-blur-md font-danger-heading text-xs text-stone-100 hover:text-white tracking-widest uppercase transition-all shadow-xl flex items-center gap-2",children:[d.jsx("span",{children:"INSPECT CRIME BOARD EVIDENCE"}),d.jsx("span",{className:"text-[#D01820]",children:"↓"})]})]})]})]})}),An={global:{file:"/hackathon-audio/step and gate.mp3",clip:{start:2.5,end:8},volume:.5,trigger:"scroll",fadeIn:.35,fadeOut:.4,loop:!0},"scene-01":{file:"/hackathon-audio/step and gate.mp3",clip:{start:2.5,end:8},volume:.5,loop:!0},"scene-02":{file:"/hackathon-audio/step and gate.mp3",clip:{start:0,end:2.5},volume:.48,loop:!1},"scene-03":{file:"/hackathon-audio/step and gate.mp3",clip:{start:16.5,end:20},volume:.18,loop:!0},"scene-06":{file:null},"scene-07":{file:"/hackathon-audio/step and gate.mp3",clip:{start:22,end:28},volume:.48,loop:!0},"scene-08":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.16,loop:!0,fadeIn:.5,fadeOut:.5,continuous:!0},"scene-09":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.18,loop:!0,continuous:!0,fadeIn:.3,fadeOut:.6},"scene-10":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.16,loop:!0,continuous:!0,fadeIn:.4},"scene-10-map":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.15,loop:!0,continuous:!0},"scene-11":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.14,loop:!0,continuous:!0},"scene-12":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.13,loop:!0,continuous:!0},"scene-13":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.11,loop:!0,continuous:!0},"scene-14":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.09,loop:!0,continuous:!0},"scene-15":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.08,loop:!0,continuous:!0}};class Ng{constructor(){this.ambientAudio=null,this.gateAudio=null,this.dossierAudio=null,this.fadeRaf=null,this.isMuted=!1,this.isInitialized=!1}init(){typeof window>"u"||this.isInitialized||(this.isInitialized=!0,this.ambientAudio=null)}playGateOpen(e=.18){if(this.isMuted)return;const t=Math.min(Math.max(.12,e),.2);try{if(this.gateAudio)try{this.gateAudio.pause(),this.gateAudio.currentTime=0}catch{}const n=new Audio("/hackathon-audio/gate-open-trimmed.wav");n.preload="auto",n.volume=t,n.play().catch(()=>{const s=new Audio("/hackathon-audio/gate-open.mp3");s.currentTime=3,s.volume=t,s.play().catch(()=>{}),this.gateAudio=s}),this.gateAudio=n}catch{}}playHeavyGateBreach(e=.18){this.playGateOpen(e)}playDossierTransition(e=.2){if(this.isMuted)return;const t=Math.min(Math.max(.05,e),.25);try{if(this.dossierAudio)try{this.dossierAudio.pause(),this.dossierAudio.currentTime=0}catch{}const n=new Audio("/hackathon-audio/sound-effect.mp3");n.preload="auto",n.volume=t,n.play().catch(()=>{}),this.dossierAudio=n}catch{}}fadeGateAudio(e=400){if(!this.gateAudio||this.gateAudio.paused)return;const t=this.gateAudio,n=t.volume,s=performance.now(),a=r=>{const o=r-s,l=Math.min(o/e,1);try{t.volume=Math.max(0,n*(1-l))}catch{}if(l<1)requestAnimationFrame(a);else try{t.pause(),t.currentTime=0}catch{}};requestAnimationFrame(a)}playFootstep(){}playDoorOpenCreak(){}playLockUnlatch(){}toggleMute(){if(this.isMuted=!this.isMuted,this.isMuted){if(this.gateAudio)try{this.gateAudio.pause()}catch{}if(this.dossierAudio)try{this.dossierAudio.pause()}catch{}}return this.isMuted}setAmbientVolume(){}duck(){}restore(){}}const vt=new Ng;class Ig{constructor(){this.currentAudio=null,this.currentSceneId=null,this.lastPlayedSceneId=null,this.activeClipSessionId=0,this.isMuted=!1,this.isAutoplayBlocked=!1,this.isDucked=!1,this.triggerTimeoutId=null,this.rafId=null,this.isPausedByScrollStop=!1,this.isFadingOut=!1,this.isFadingToStop=!1,this.scrollIdleTimeout=null,this.scrollIdleDelay=160,this.fadeRafId=null,this.isClipFinished=!1,this.debugState={currentScene:"none",audioFile:"none",clipStart:0,clipEnd:0,currentTime:0,playbackStatus:"IDLE",volume:20,isMuted:!1},this.debugListeners=new Set,this.hasUnlockedGesture=!1,this.bindAutoplayUnlock()}setInitialScene(e="scene-01"){this.debugState.currentScene=e;const t=An[e];t&&(this.debugState.audioFile=t.file?t.file.split("/").pop():"none",this.debugState.clipStart=Number((t.clip?.start??0).toFixed(2)),this.debugState.clipEnd=Number((t.clip?.end??10).toFixed(2)),this.debugState.volume=Math.round((t.volume??.5)*100),this.debugState.playbackStatus="IDLE (SCROLL TO PLAY)"),this.notifyDebug()}bindAutoplayUnlock(){if(typeof window>"u")return;const e=()=>{if(this.hasUnlockedGesture=!0,this.isAutoplayBlocked=!1,vt.init(),this.pendingSceneId&&this.pendingSceneId===this.currentSceneId&&!this.isMuted){const t=this.pendingSceneId;this.pendingSceneId=null,this.playSceneVoice(t,!0)}window.removeEventListener("scroll",e),window.removeEventListener("pointerdown",e),window.removeEventListener("keydown",e),window.removeEventListener("touchstart",e)};window.addEventListener("scroll",e,{passive:!0,once:!0}),window.addEventListener("pointerdown",e,{passive:!0,once:!0}),window.addEventListener("keydown",e,{passive:!0,once:!0}),window.addEventListener("touchstart",e,{passive:!0,once:!0})}subscribeDebug(e){return this.debugListeners.add(e),e(this.getDebugState()),()=>{this.debugListeners.delete(e)}}notifyDebug(){if(this.debugListeners.size===0)return;const e=this.getDebugState();this.debugListeners.forEach(t=>{try{t(e)}catch(n){console.warn("Debug listener error:",n)}})}getDebugState(){return{...this.debugState,isMuted:this.isMuted,isAutoplayBlocked:this.isAutoplayBlocked,ambientVolume:vt.ambientVolume}}playAudioClip({file:e,start:t=0,end:n=0,volume:s=.5,duckAmbient:a=!1,duckVolume:r=.04,fadeIn:o=0,fadeOut:l=0,loop:c=!0,onEnd:h=null}){if(this.isMuted){this.debugState.playbackStatus="MUTED",this.notifyDebug();return}const p=Math.min(Math.max(0,s),.85);this.stopActiveClip();const u=++this.activeClipSessionId,m=new Audio(e);m.preload="auto",m.loop=!!c,m.volume=0,this.currentAudio=m,this.currentAudioFile=e,this.activeClipStart=t,this.activeClipEnd=n,this.activeClipLoop=!!c,this.debugState.audioFile=e.split("/").pop(),this.debugState.clipStart=Number(t.toFixed(2)),this.debugState.clipEnd=Number(n>0?n.toFixed(2):0),this.debugState.currentTime=Number(t.toFixed(2)),this.debugState.volume=Math.round(p*100),this.debugState.playbackStatus="LOADING",this.notifyDebug();let v=!1,M=!1;const x=async()=>{if(u===this.activeClipSessionId)try{await m.play(),this.isAutoplayBlocked=!1,v=!0,this.debugState.playbackStatus="PLAYING",this.notifyDebug();const w=o>0?o*1e3:350;this.debugState.playbackStatus="PLAYING (FADING IN)",this.notifyDebug(),this.fadeVolume(m,0,p,w,u,()=>{this.debugState.playbackStatus="PLAYING",this.notifyDebug()}),a&&(this.isDucked=!0,vt.duck(r,w));const N=()=>{if(!(u!==this.activeClipSessionId||!this.currentAudio)){if(!m.paused){const b=m.currentTime;this.debugState.currentTime=Number(b.toFixed(2)),n>0&&l>0&&!M&&b>=n-l&&b<n&&(M=!0,this.fadeVolume(m,m.volume,0,l*1e3,u));const E=this.activeClipEnd;if(E>0&&b>=E||!this.activeClipLoop&&m.ended)if(this.activeClipLoop&&E>0)try{m.currentTime=this.activeClipStart}catch{}else{this.isClipFinished=!0,this.stopActiveClip(),h&&h();return}this.notifyDebug()}this.rafId=requestAnimationFrame(N)}};this.rafId=requestAnimationFrame(N)}catch(w){w.name==="NotAllowedError"?(this.isAutoplayBlocked=!0,this.debugState.playbackStatus="BLOCKED",this.notifyDebug()):(console.warn("Audio clip playback notice for",e,w),this.debugState.playbackStatus="ERROR",this.notifyDebug())}},f=()=>{if(u!==this.activeClipSessionId)return;if(t>0)try{m.currentTime=t}catch{}const w=()=>{m.removeEventListener("seeked",w),m.removeEventListener("canplay",w),u===this.activeClipSessionId&&!v&&x()};Math.abs(m.currentTime-t)<=.15||t===0?x():(m.addEventListener("seeked",w,{once:!0}),m.addEventListener("canplay",w,{once:!0}))};m.readyState>=1?f():(m.addEventListener("loadedmetadata",f,{once:!0}),m.addEventListener("canplay",f,{once:!0})),m.addEventListener("error",()=>{u===this.activeClipSessionId&&(this.debugState.playbackStatus="UNAVAILABLE",this.notifyDebug(),this.isDucked&&(this.isDucked=!1,vt.restore()))},{once:!0})}fadeVolume(e,t,n,s,a,r=null){if(this.fadeRafId&&(cancelAnimationFrame(this.fadeRafId),this.fadeRafId=null),!e||s<=0){if(e)try{e.volume=n}catch{}r&&r();return}const o=performance.now(),l=c=>{if(a!==this.activeClipSessionId||!e)return;const h=c-o,p=Math.min(h/s,1),u=.5-.5*Math.cos(p*Math.PI),m=t+(n-t)*u;try{e.volume=Math.max(0,Math.min(1,m))}catch{}p<1?this.fadeRafId=requestAnimationFrame(l):(this.fadeRafId=null,r&&r())};this.fadeRafId=requestAnimationFrame(l)}stopActiveClip(){if(this.activeClipSessionId++,this.triggerTimeoutId&&(clearTimeout(this.triggerTimeoutId),this.triggerTimeoutId=null),this.scrollIdleTimeout&&(clearTimeout(this.scrollIdleTimeout),this.scrollIdleTimeout=null),this.fadeRafId&&(cancelAnimationFrame(this.fadeRafId),this.fadeRafId=null),this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.currentAudio){try{this.currentAudio.pause(),this.currentAudio.src="",this.currentAudio.load()}catch{}this.currentAudio=null}this.isPausedByScrollStop=!1,this.isFadingOut=!1,this.isFadingToStop=!1,this.currentAudioFile=null,this.isDucked&&(this.isDucked=!1,vt.restore()),this.debugState.playbackStatus="STOPPED",this.notifyDebug()}fadeOutAndStop(e=550){if(!this.currentAudio||this.isFadingOut&&this.isFadingToStop)return;this.isFadingOut=!0,this.isFadingToStop=!0;const t=this.currentAudio,n=this.activeClipSessionId;this.debugState.playbackStatus="FADING OUT...",this.notifyDebug(),this.isDucked&&(this.isDucked=!1,vt.restore(e)),this.fadeVolume(t,t.volume,0,e,n,()=>{if(this.isFadingToStop=!1,n===this.activeClipSessionId)this.stopActiveClip();else try{t.pause(),t.currentTime=0,t.removeAttribute("src"),t.src="",t.load()}catch{}})}onUserScrollActivity(e){if(this.isMuted)return;const t=e||this.currentSceneId||"scene-01",n=An[t]||An.global,s=Math.min(n?.volume??.5,.85);if(!n||!n.file){this.currentAudio&&!this.isFadingToStop&&this.fadeOutAndStop(550);return}if(this.isFadingToStop=!1,!this.currentAudio&&!this.isClipFinished)this.currentSceneId=t,this.lastPlayedSceneId=t,this.playSceneVoice(t,!0);else if(this.currentAudio&&!this.isClipFinished){const a=this.currentAudio,r=this.isPausedByScrollStop||a.paused,o=this.isFadingOut;(r||o)&&(this.isPausedByScrollStop=!1,this.isFadingOut=!1,a.paused&&a.play().catch(l=>{l.name==="NotAllowedError"&&(this.isAutoplayBlocked=!0,this.debugState.playbackStatus="BLOCKED",this.notifyDebug())}),this.debugState.playbackStatus="PLAYING (FADING IN)",this.notifyDebug(),this.fadeVolume(a,a.volume,s,300,this.activeClipSessionId,()=>{this.debugState.playbackStatus="PLAYING",this.notifyDebug()}),n?.duckAmbient!==!1&&(this.isDucked=!0,vt.duck(n?.duckVolume??.04,300)))}n?.continuous||n?.ignoreScrollIdle?this.scrollIdleTimeout&&(clearTimeout(this.scrollIdleTimeout),this.scrollIdleTimeout=null):(this.scrollIdleTimeout&&clearTimeout(this.scrollIdleTimeout),this.scrollIdleTimeout=setTimeout(()=>{this.handleScrollStopped()},this.scrollIdleDelay))}handleScrollStopped(){if(!this.currentAudio||this.isClipFinished||this.isPausedByScrollStop||this.isFadingOut)return;const e=An[this.currentSceneId]||An.global;if(e?.continuous||e?.ignoreScrollIdle)return;this.isFadingOut=!0;const t=this.currentAudio,n=this.activeClipSessionId,s=360;this.debugState.playbackStatus="FADING OUT...",this.notifyDebug(),this.isDucked&&(this.isDucked=!1,vt.restore(s)),this.fadeVolume(t,t.volume,0,s,n,()=>{if(this.activeClipSessionId===n&&this.isFadingOut&&t){try{t.pause()}catch{}this.isFadingOut=!1,this.isPausedByScrollStop=!0,this.debugState.playbackStatus="PAUSED (SCROLL STOPPED)",this.notifyDebug()}})}onSceneActive(e){if(!e||(this.debugState.currentScene=e,e===this.currentSceneId))return;this.currentSceneId=e,this.isClipFinished=!1;const t=An[e]||An.global;if(!t||!t.file){this.lastPlayedSceneId=e,this.debugState.audioFile="none",this.debugState.playbackStatus="FADING OUT (SCENE EXIT)",this.notifyDebug(),this.currentAudio&&this.fadeOutAndStop(550);return}if(this.currentAudio&&this.currentAudioFile===t.file){if(this.lastPlayedSceneId=e,t.clip?.start!==void 0){this.activeClipStart=t.clip.start,this.activeClipEnd=t.clip.end??0,this.activeClipLoop=t.loop??!0,this.debugState.clipStart=Number(this.activeClipStart.toFixed(2)),this.debugState.clipEnd=Number(this.activeClipEnd>0?this.activeClipEnd.toFixed(2):0),this.notifyDebug();const n=this.currentAudio.currentTime;if(n<this.activeClipStart||this.activeClipEnd>0&&n>=this.activeClipEnd)try{this.currentAudio.currentTime=this.activeClipStart}catch{}}if(t?.volume!==void 0&&!this.isMuted){const n=Math.min(t.volume,.85);this.fadeVolume(this.currentAudio,this.currentAudio.volume,n,500,this.activeClipSessionId)}return}if(this.currentAudio&&this.fadeOutAndStop(250),this.isMuted){this.debugState.playbackStatus="MUTED",this.notifyDebug();return}e!==this.lastPlayedSceneId&&(this.lastPlayedSceneId=e,this.playSceneVoice(e))}playSceneVoice(e,t=!1){const n=An[e]||An.global;if(!n||!n.file){this.debugState.audioFile="none",this.debugState.playbackStatus="NO_VOICE_CONFIG",this.notifyDebug();return}const s=()=>{this.currentSceneId===e&&this.playAudioClip({file:n.file,start:n.clip?.start??0,end:n.clip?.end??0,volume:Math.min(n.volume??.5,.85),duckAmbient:!1,duckVolume:.04,fadeIn:n.fadeIn??.35,fadeOut:n.fadeOut??.4,loop:n.loop??!0,onEnd:()=>{this.debugState.playbackStatus="STOPPED",this.notifyDebug()}})},a=t?0:n.triggerDelayMs||0;a>0?this.triggerTimeoutId=setTimeout(s,a):s()}toggleMute(){return this.isMuted=!this.isMuted,this.debugState.isMuted=this.isMuted,vt.isMuted=this.isMuted,this.isMuted?(this.stopActiveClip(),vt.ambientAudio&&vt.ambientAudio.pause(),this.debugState.playbackStatus="MUTED"):(vt.ambientAudio&&vt.ambientAudio.play().catch(()=>{}),this.currentSceneId&&(this.lastPlayedSceneId=null,this.playSceneVoice(this.currentSceneId,!0))),this.notifyDebug(),this.isMuted}replayCurrentScene(){this.currentSceneId&&(this.lastPlayedSceneId=null,this.playSceneVoice(this.currentSceneId,!0))}}const Pt=new Ig;class Dg{constructor(){this.audio=null,this.fadeRaf=null,this.isPlaying=!1,this.isFadingOut=!1,this.scrollIdleTimer=null,this.targetVolume=.3,typeof window<"u"&&Pt.subscribeDebug(e=>{e.isMuted&&this.stopImmediate()})}ensureAudio(){return!this.audio&&typeof window<"u"&&(this.audio=new Audio("/hackathon-audio/black-board-chalk.mp3"),this.audio.loop=!0,this.audio.preload="auto",this.audio.volume=0),this.audio}fadeVolume(e,t,n,s=null){this.fadeRaf&&(cancelAnimationFrame(this.fadeRaf),this.fadeRaf=null);const a=this.ensureAudio();if(!a)return;if(n<=0){a.volume=t,s&&s();return}const r=performance.now(),o=l=>{const c=l-r,h=Math.min(c/n,1),p=.5-.5*Math.cos(h*Math.PI),u=e+(t-e)*p;try{a.volume=Math.max(0,Math.min(1,u))}catch{}h<1?this.fadeRaf=requestAnimationFrame(o):(this.fadeRaf=null,s&&s())};this.fadeRaf=requestAnimationFrame(o)}play(){if(Pt.isMuted)return;const e=this.ensureAudio();e&&(this.isFadingOut=!1,e.paused&&e.play().catch(()=>{}),this.fadeVolume(e.volume,this.targetVolume,250),this.isPlaying=!0)}pauseWithFade(e=350){!this.audio||this.isFadingOut||this.audio.paused||(this.isFadingOut=!0,this.fadeVolume(this.audio.volume,0,e,()=>{if(this.audio)try{this.audio.pause()}catch{}this.isPlaying=!1,this.isFadingOut=!1}))}stopImmediate(){if(this.fadeRaf&&(cancelAnimationFrame(this.fadeRaf),this.fadeRaf=null),this.scrollIdleTimer&&(clearTimeout(this.scrollIdleTimer),this.scrollIdleTimer=null),this.audio)try{this.audio.pause(),this.audio.currentTime=0,this.audio.volume=0}catch{}this.isPlaying=!1,this.isFadingOut=!1}onWritingScrollActivity(){Pt.isMuted||((!this.isPlaying||this.isFadingOut)&&this.play(),this.scrollIdleTimer&&clearTimeout(this.scrollIdleTimer),this.scrollIdleTimer=setTimeout(()=>{this.pauseWithFade(280)},200))}}const Ya=new Dg,wt=_e.memo(function({words:e,progress:t=0,className:n="",cursorColor:s="bg-stone-200"}){const a=e.length,r=Math.min(Math.floor(t*(a+1)),a);return d.jsx("span",{className:n,children:e.map((o,l)=>{const c=typeof o=="string"?o:o.text,h=typeof o=="object"&&o.className||"",p=l<r,u=l===r-1&&t<.98&&t>.02;return d.jsxs("span",{className:`inline-block select-none transition-opacity duration-100 ${h}`,style:{opacity:p?1:0,marginRight:"0.26em"},children:[c,u&&d.jsx("span",{className:`inline-block w-1.5 h-3.5 ${s} ml-0.5 rounded-2xs opacity-90 shadow-[0_0_6px_rgba(255,255,255,0.8)] animate-pulse`})]},l)})})}),Pg=["★","CASE","FILE","//","BUILDX-2026",":","TOP","SECRET"],Lg=["•","Sector","4","Crime","Manifest","•"],Ug=["EVIDENCE","RECORDED"],Fg=[{text:'"An'},{text:"unknown"},{text:"anomaly"},{text:"breached"},{text:"our"},{text:"core"},{text:"vault"},{text:"at"},{text:"03:17",className:"chalk-red font-bold underline decoration-wavy decoration-red-400/80"},{text:"AM."},{text:"Assemble"},{text:"your"},{text:"squad,"},{text:"decipher"},{text:"the"},{text:"evidence"},{text:"on"},{text:"this"},{text:"board,"},{text:"and"},{text:"engineer"},{text:"the"},{text:"containment"},{text:"breach"},{text:"solution"},{text:"before"},{text:"time"},{text:'expires."'}],Og=["✦","TRACK","01","//","PARANORMAL","AI"],Bg=["Deep-learning","anomaly","detection,","neural","forensics,","and","autonomous","agents."],kg=["[","BOUNTY","ELIGIBLE","•","MULTI-MODAL","]"],zg=["✦","TRACK","02","//","ZERO-TRUST","DEFENSE"],Gg=["Vault","infrastructure","security,","authentication","recovery,","and","hardened","systems."],Vg=["[","BOUNTY","ELIGIBLE","•","CYBERSEC","]"],Hg=["✦","TRACK","03","//","OPEN","INNOVATION"],Wg=["Wildcard","engineering:","AI","tools,","Web3,","cloud","infrastructure,","and","impactful","apps."],Xg=["[","ALL","DOMAINS","OPEN","•","VIRTUAL","]"],jg=["⏱","36","Hours","Hackathon"],Yg=["🏆","₹50,000+","Prize","Pool"],qg=["🛡","Free","Registration"],$g=["⚡","BREACH","THE","VAULT","//","REGISTER","➔"],bl=_e.memo(function({scrollProgress:e=0,variant:t="front"}){const n=t==="mini-angled";if(_e.useEffect(()=>{if(n)return;e>=.38&&e<=.562?Ya.onWritingScrollActivity():Ya.pauseWithFade(350)},[e,n]),_e.useEffect(()=>()=>{n||Ya.pauseWithFade(300)},[n]),!n&&(e<.36||e>.6))return null;const s=n?1:Math.min(Math.max((e-.38)/.03,0),1),a=n?1:Math.min(Math.max((e-.41)/.055,0),1),r=n?1:Math.min(Math.max((e-.465)/.02,0),1),o=n?1:Math.min(Math.max((e-.485)/.02,0),1),l=n?1:Math.min(Math.max((e-.505)/.02,0),1),c=n?1:Math.min(Math.max((e-.525)/.018,0),1),h=n?1:Math.min(Math.max((e-.543)/.018,0),1),u=1-(n?0:Math.min(Math.max((e-.56)/.04,0),1)),m=()=>{const v=document.querySelector("[data-register-trigger]");v?v.click():window.location.hash="register"};return n?d.jsx("div",{className:"absolute z-25 pointer-events-none select-none overflow-hidden",style:{left:"3.2%",top:"12.8%",width:"40.5%",height:"30.0%",transform:"perspective(1200px) rotateY(3deg) rotateX(0.5deg)",transformOrigin:"left center",mixBlendMode:"screen"},children:d.jsxs("div",{className:"w-full h-full px-2 py-1.5 flex flex-col justify-between opacity-95 text-stone-200",children:[d.jsxs("div",{className:"border-b border-stone-400/35 pb-1 flex items-baseline justify-between",children:[d.jsx("span",{className:"font-chalk-sketch-title text-xs sm:text-sm chalk-red tracking-wider",children:"★ CASE FILE // BUILDX-2026 : TOP SECRET"}),d.jsx("span",{className:"font-chalk-detective text-[10px] sm:text-xs chalk-yellow",children:"• Sector 4 Manifest •"})]}),d.jsxs("p",{className:"font-chalk-detective text-[11px] sm:text-xs lg:text-[13px] text-stone-200 leading-snug tracking-wide",children:['"An unknown anomaly breached our core vault at ',d.jsx("span",{className:"chalk-red font-bold",children:"03:17 AM"}),'. Assemble your squad, decipher the evidence on this board, and engineer the containment breach solution."']}),d.jsxs("div",{className:"grid grid-cols-3 gap-1 sm:gap-2 text-[9px] sm:text-[10px]",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-chalk-sketch-title text-[10px] sm:text-xs chalk-cyan tracking-wide",children:"[ 01: AI ANOMALY ]"}),d.jsx("div",{className:"font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5",children:"Deep neural forensics & agents"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"font-chalk-sketch-title text-[10px] sm:text-xs chalk-green tracking-wide",children:"[ 02: ZERO-TRUST ]"}),d.jsx("div",{className:"font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5",children:"Vault auth & hardened defense"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"font-chalk-sketch-title text-[10px] sm:text-xs chalk-yellow tracking-wide",children:"[ 03: OPEN TRACK ]"}),d.jsx("div",{className:"font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5",children:"Wildcard engineering & apps"})]})]}),d.jsxs("div",{className:"font-chalk-detective text-[9px] sm:text-[11px] flex items-center justify-between chalk-yellow pt-0.5 border-t border-stone-400/35",children:[d.jsx("span",{className:"text-stone-300",children:"⏱ 36 Hours"}),d.jsx("span",{className:"font-bold chalk-yellow",children:"🏆 ₹50,000+ Pool"}),d.jsx("span",{className:"chalk-green",children:"🛡 Free Registration"})]})]})}):d.jsx("div",{className:"absolute inset-0 z-25 pointer-events-none select-none flex items-center justify-center overflow-hidden transition-opacity duration-150",style:{opacity:u},children:d.jsxs("div",{className:"w-full max-w-5xl xl:max-w-[1180px] 2xl:max-w-[1240px] px-6 sm:px-10 lg:px-14 flex flex-col justify-center my-auto gap-3 sm:gap-4 -translate-y-3 sm:-translate-y-5",children:[d.jsxs("div",{className:"relative pb-2.5",children:[d.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-2",children:[d.jsx("div",{className:"flex items-center gap-2",children:d.jsx(wt,{words:Pg,progress:s,className:"font-chalk-sketch-title text-xl sm:text-2xl md:text-[28px] chalk-red tracking-wider",cursorColor:"bg-red-400"})}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx(wt,{words:Lg,progress:s,className:"font-chalk-detective text-base sm:text-lg chalk-yellow tracking-wider",cursorColor:"bg-yellow-300"}),d.jsx("span",{className:"px-2 py-0.5 border border-dashed border-red-400/50 rounded-xs chalk-red font-chalk-sketch text-xs tracking-wider transition-opacity duration-200",style:{opacity:s>=.85?1:0},children:d.jsx(wt,{words:Ug,progress:Math.min(s*1.2,1),cursorColor:"bg-red-400"})})]})]}),d.jsx("div",{className:"w-full h-0.5 border-b-2 border-dashed border-stone-400/35 transition-all duration-150 mt-2",style:{clipPath:`inset(0 ${(1-s)*100}% 0 0)`}})]}),d.jsx("div",{className:"min-h-[56px] sm:min-h-[64px] flex items-center",children:d.jsx("p",{className:"font-chalk-detective text-xl sm:text-2xl lg:text-[26px] chalk-white leading-relaxed tracking-wide",children:d.jsx(wt,{words:Fg,progress:a,cursorColor:"bg-stone-200"})})}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5",children:[d.jsxs("div",{className:"chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200",style:{opacity:r>.05?1:0,clipPath:`inset(0 ${(1-Math.min(r*2,1))*100}% 0 0)`},children:[d.jsx("div",{className:"font-chalk-sketch-title text-sm sm:text-base chalk-cyan mb-1 flex items-center gap-1.5",children:d.jsx(wt,{words:Og,progress:Math.min(r*1.5,1),cursorColor:"bg-cyan-300"})}),d.jsx("p",{className:"font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]",children:d.jsx(wt,{words:Bg,progress:Math.max((r-.25)/.65,0),cursorColor:"bg-stone-200"})}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-cyan pt-1 font-bold tracking-wider",children:d.jsx(wt,{words:kg,progress:Math.max((r-.6)/.4,0),cursorColor:"bg-cyan-300"})})]}),d.jsxs("div",{className:"chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200",style:{opacity:o>.05?1:0,clipPath:`inset(0 ${(1-Math.min(o*2,1))*100}% 0 0)`},children:[d.jsx("div",{className:"font-chalk-sketch-title text-sm sm:text-base chalk-green mb-1 flex items-center gap-1.5",children:d.jsx(wt,{words:zg,progress:Math.min(o*1.5,1),cursorColor:"bg-emerald-300"})}),d.jsx("p",{className:"font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]",children:d.jsx(wt,{words:Gg,progress:Math.max((o-.25)/.65,0),cursorColor:"bg-stone-200"})}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-green pt-1 font-bold tracking-wider",children:d.jsx(wt,{words:Vg,progress:Math.max((o-.6)/.4,0),cursorColor:"bg-emerald-300"})})]}),d.jsxs("div",{className:"chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200",style:{opacity:l>.05?1:0,clipPath:`inset(0 ${(1-Math.min(l*2,1))*100}% 0 0)`},children:[d.jsx("div",{className:"font-chalk-sketch-title text-sm sm:text-base chalk-yellow mb-1 flex items-center gap-1.5",children:d.jsx(wt,{words:Hg,progress:Math.min(l*1.5,1),cursorColor:"bg-amber-300"})}),d.jsx("p",{className:"font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]",children:d.jsx(wt,{words:Wg,progress:Math.max((l-.25)/.65,0),cursorColor:"bg-stone-200"})}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-yellow pt-1 font-bold tracking-wider",children:d.jsx(wt,{words:Xg,progress:Math.max((l-.6)/.4,0),cursorColor:"bg-amber-300"})})]})]}),d.jsx("div",{className:"pt-2 border-t border-dashed border-stone-400/35 transition-opacity duration-200",style:{opacity:c>.05?1:0,clipPath:`inset(0 ${(1-Math.min(c*1.5,1))*100}% 0 0)`},children:d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[d.jsxs("div",{className:"flex flex-wrap items-center gap-3 sm:gap-6 font-chalk-detective text-base sm:text-lg md:text-xl",children:[d.jsxs("div",{className:"flex items-center gap-1.5 chalk-white",children:[d.jsx($s,{className:"w-4 h-4 text-stone-300 transition-opacity duration-150",style:{opacity:c>.08?1:0}}),d.jsx(wt,{words:jg,progress:c,cursorColor:"bg-stone-200"})]}),d.jsxs("div",{className:"flex items-center gap-1.5 chalk-yellow font-bold",children:[d.jsx(Tl,{className:"w-4 h-4 text-amber-300 transition-opacity duration-150",style:{opacity:c>.35?1:0}}),d.jsx(wt,{words:Yg,progress:c,cursorColor:"bg-amber-300"})]}),d.jsxs("div",{className:"flex items-center gap-1.5 chalk-green",children:[d.jsx(ad,{className:"w-4 h-4 text-emerald-300 transition-opacity duration-150",style:{opacity:c>.65?1:0}}),d.jsx(wt,{words:qg,progress:c,cursorColor:"bg-emerald-300"})]})]}),d.jsx("div",{className:"transition-all duration-300",style:{opacity:h>.05?1:0,pointerEvents:h>.4?"auto":"none"},children:d.jsx("button",{type:"button",onClick:m,className:"chalk-btn-handdrawn font-chalk-sketch-title px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm chalk-red flex items-center gap-2 cursor-pointer select-none",children:d.jsx(wt,{words:$g,progress:h,cursorColor:"bg-red-400"})})})]})})]})})}),Ml=_e.memo(function({isActive:e=!1,intensity:t=1,reducedMotion:n=!1}){const[s,a]=_e.useState(0);if(_e.useEffect(()=>{if(!e){a(0);return}if(n){a(4);return}const l=[setTimeout(()=>a(1),30),setTimeout(()=>a(2),90),setTimeout(()=>a(3),180),setTimeout(()=>a(4),320),setTimeout(()=>a(0),480)];return()=>l.forEach(clearTimeout)},[e,n]),!e&&s===0)return null;let r="none",o="none";if(!n)switch(s){case 1:r=`translate3d(${-24*t}px, ${-6*t}px, 0) rotate(-2.8deg)`,o="brightness(1.5) contrast(1.3) blur(2px)";break;case 2:r=`translate3d(${18*t}px, ${4*t}px, 0) rotate(1.9deg)`,o="brightness(1.3) contrast(1.15) blur(1px)";break;case 3:r=`translate3d(${-8*t}px, ${-2*t}px, 0) rotate(-0.8deg)`,o="brightness(1.1) contrast(1.05)";break;case 4:r=`translate3d(${2*t}px, 0px, 0) rotate(0.2deg)`,o="none";break;default:r="none",o="none"}return d.jsx("div",{className:"pointer-events-none absolute inset-0 z-40 transition-transform ease-out",style:{transform:r,filter:o,transitionDuration:s===1?"40ms":"120ms"},children:s>0&&s<=2&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"absolute inset-0 opacity-40 mix-blend-screen pointer-events-none",style:{transform:`translate3d(${6*t}px, 0, 0)`,background:"rgba(255, 0, 40, 0.15)"}}),d.jsx("div",{className:"absolute inset-0 opacity-35 mix-blend-screen pointer-events-none",style:{transform:`translate3d(${-6*t}px, 0, 0)`,background:"rgba(0, 200, 255, 0.12)"}})]})})}),Kg=_e.memo(function({scrollProgress:e=0,isImpactActive:t=!1,gateProximity:n=0}){const s=Math.min(Math.max((e-.68)/.1,0),1),a=1-s,o=Math.min(e*1.2,.55)*(1-s*.65),l=Math.min(.1+e*.18,.28)*(1-s*.85);return d.jsxs("div",{className:"pointer-events-none absolute inset-0 z-19 overflow-hidden select-none",children:[d.jsx("div",{className:"absolute inset-0 transition-opacity duration-300",style:{background:"radial-gradient(ellipse at 50% 50%, rgba(4,5,7,0.05) 35%, rgba(2,2,3,0.55) 75%, rgba(0,0,0,0.85) 100%)",opacity:o}}),d.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none transition-opacity duration-300 will-change-opacity transform-gpu",style:{background:"linear-gradient(to top, rgba(10,14,20,0.7) 0%, rgba(10,14,20,0.5) 25%, rgba(12,18,24,0.25) 50%, rgba(12,18,24,0.08) 75%, transparent 100%)",opacity:l}}),d.jsx("div",{className:"absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none",style:{backgroundImage:"radial-gradient(rgba(255,255,255,0.12) 1px, transparent 0)",backgroundSize:"3px 3px"}}),d.jsx("div",{className:`absolute inset-0 transition-opacity duration-300 pointer-events-none ${t?"opacity-75":"opacity-0"}`,style:{background:"radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(208,24,32,0.35) 85%, rgba(180,10,20,0.55) 100%)",mixBlendMode:"screen",opacity:t?.75*a:0}})]})});function Zg(i,e){return i<.09-(e==="scene-01"?-.005:.005)?"scene-01":i<.19-(e==="scene-02"?-.005:.005)?"scene-02":i<.36-(e==="scene-03"?-.005:.005)?"scene-03":i<.63-(e==="scene-06"?-.005:.005)?"scene-06":i<.77-(e==="scene-07"?-.005:.005)?"scene-07":i<.86-(e==="scene-08"?-.005:.005)?"scene-08":i<.922-(e==="scene-09"?-.005:.005)?"scene-09":i<.938-(e==="scene-10"?-.005:.005)?"scene-10":i<.948-(e==="scene-10-map"?-.005:.005)?"scene-10-map":i<.958-(e==="scene-11"?-.005:.005)?"scene-11":i<.968-(e==="scene-12"?-.005:.005)?"scene-12":i<.978-(e==="scene-13"?-.005:.005)?"scene-13":i<.988-(e==="scene-14"?-.005:.005)?"scene-14":"scene-15"}const Jg=_e.memo(function({scrollProgress:e=0}){const[t,n]=_e.useState(!1),[s,a]=_e.useState(!1),[r,o]=_e.useState(!1),[l,c]=_e.useState(!1),[h,p]=_e.useState(!1),u=_e.useRef(null),m=_e.useRef(!1);_e.useEffect(()=>{Pt.setInitialScene("scene-01");const $e=()=>{m.current=!0;const tt=u.current||"scene-01";Pt.onUserScrollActivity(tt)};return window.addEventListener("scroll",$e,{passive:!0}),window.addEventListener("wheel",$e,{passive:!0}),window.addEventListener("touchmove",$e,{passive:!0}),()=>{window.removeEventListener("scroll",$e),window.removeEventListener("wheel",$e),window.removeEventListener("touchmove",$e),Pt.stopActiveClip()}},[]),_e.useEffect(()=>{const $e=u.current||"scene-01",tt=Zg(e,$e);tt!==u.current&&(u.current=tt,Pt.onSceneActive(tt)),e>.001&&(m.current=!0,Pt.onUserScrollActivity(tt))},[e]);const v=Dt[0],M=Dt[1],x=Dt[2],f=Dt[3],w=Dt[4],N=Dt[5],b=Dt[6],E=Dt[7],y=Dt[8],R=Dt[9],_=Dt[10],T=Dt[11],C=Dt[12],L=Dt[13];_e.useEffect(()=>{if(typeof window<"u"&&window.matchMedia){const $e=window.matchMedia("(prefers-reduced-motion: reduce)");n($e.matches);const tt=Xn=>n(Xn.matches);if($e.addEventListener)return $e.addEventListener("change",tt),()=>$e.removeEventListener("change",tt)}},[]),_e.useEffect(()=>{[M?.image,x?.image,f?.image,w?.image,N?.image,b?.image,E?.image,y?.image,R?.image,_?.image,T?.image,C?.image,L?.image].forEach($e=>{if($e){const tt=new Image;tt.src=$e}})},[M?.image,x?.image,f?.image,w?.image,N?.image,b?.image,E?.image,y?.image,R?.image,_?.image,T?.image,C?.image,L?.image]);const F=_e.useRef(new Set);_e.useEffect(()=>{[{id:"gate-1",min:.082,max:.118,resetMin:.065,resetMax:.135,heavy:!1},{id:"gate-2",min:.205,max:.235,resetMin:.185,resetMax:.255,heavy:!1},{id:"gate-3",min:.625,max:.655,resetMin:.6,resetMax:.675,heavy:!0},{id:"gate-4",min:.755,max:.785,resetMin:.73,resetMax:.81,heavy:!1},{id:"gate-5",min:.912,max:.938,resetMin:.885,resetMax:.955,heavy:!0},{id:"gate-6",min:.962,max:.982,resetMin:.945,resetMax:.99,heavy:!1}].forEach(tt=>{const Xn=e>=tt.min&&e<=tt.max,pa=e<tt.resetMin||e>tt.resetMax;Xn&&!F.current.has(tt.id)?(F.current.add(tt.id),tt.id==="gate-5"?(vt.playGateOpen(.18),o(!0),setTimeout(()=>o(!1),560)):tt.heavy?(o(!0),setTimeout(()=>o(!1),560)):(a(!0),setTimeout(()=>a(!1),380))):pa&&F.current.has(tt.id)&&(F.current.delete(tt.id),tt.id==="gate-5"&&vt.fadeGateAudio(400))})},[e]);const V=_e.useRef(!1);_e.useEffect(()=>{if(!m.current)return;const $e=V.current,tt=e>=.188&&e<=.308,Xn=e<.178||e>.316;!$e&&tt?(V.current=!0,vt.playDossierTransition(.2)):$e&&Xn&&(V.current=!1,vt.playDossierTransition(.2))},[e]);const I=e>.002&&e<.988,z=e*Math.PI*64,q=Math.abs(Math.sin(z)),$=I?q*5.5-2.75:0,ie=I?Math.sin(z*.5)*4.5:0,W=I?Math.sin(z*.5)*.4:0,J=_e.useRef(-1),ee=_e.useRef(e);_e.useEffect(()=>{const $e=Math.abs(e-ee.current);if(ee.current=e,I&&$e>2e-4){const tt=Math.floor(e*64);tt!==J.current&&(J.current=tt,vt.playFootstep(.32))}},[e,I]);const Me=Math.min(Math.max(e/.12,0),1),Ae=Tg(Me,t,s),nt=Math.min(Math.max((e-.09)/.03,0),1),ke=1-nt,Ye=Math.min(Math.max((e-.09)/.13,0),1),Z=1+Math.pow(Ye,1.35)*1.85,te=Math.min(Math.max((e-.19)/.03,0),1),ve=nt*(1-te),Ne=Math.min(Math.max((e-.14)/.07,0),1),pe=Ne>.06?Math.pow(Ne,1.35)*115:0,Ue=Ne>.06&&e<.22?{WebkitMaskImage:`radial-gradient(ellipse 55% 65% at 47.5% 50%, transparent ${Math.min(pe*.45,75)}%, rgba(0,0,0,0.6) ${Math.min(pe*.8,90)}%, black ${Math.min(pe+18,100)}%)`,maskImage:`radial-gradient(ellipse 55% 65% at 47.5% 50%, transparent ${Math.min(pe*.45,75)}%, rgba(0,0,0,0.6) ${Math.min(pe*.8,90)}%, black ${Math.min(pe+18,100)}%)`}:{},xt=Math.min(Math.max((e-.35)/.03,0),1),Fe=Math.min(Ne*1.25,1)*(1-xt),He=Math.min(Math.max((e-.19)/.11,0),1),at=.86+Ne*.14+Math.pow(He,1.15)*.55,ze=-He*18,lt=Math.min(Math.max((e-.3)/.06,0),1),ut=Math.pow(lt,1.3),Ct=at+ut*.55,dt=-ut*370,mt=ze-ut*35,U=-ut*14,Mt=-ut*1.8,Qe=Math.min(Math.max((e-.35)/.03,0),1),A=Math.min(Math.max((e-.61)/.07,0),1),g=Math.pow(A,1.35),O=A*Math.PI*6,H=Math.abs(Math.sin(O)),Y=A>.02&&A<.98,se=Y?H*16-8:0,ae=Y?Math.sin(O*.5)*12:0,K=Y?Math.sin(O*.5)*1.6:0,Q=A*16,re=1-g*.4,we=Q+se,de=ae,oe=Math.min(Math.max((e-.64)/.03,0),1),Te=Qe*(1-oe),Ce=Math.min(Math.max((e-.63)/.03,0),1),De=Math.min(Math.max((e-.76)/.025,0),1),P=Ce*(1-De),le=1.32-g*.32,j=Math.min(Math.max((e-.67)/.08,0),1),ce=Math.pow(j,1.25),me=le+ce*.95,ne=j*Math.PI*18,Re=Math.abs(Math.sin(ne)),ye=j>0&&j<1?Re*12-6:0,rt=j>0&&j<1?Math.sin(ne*.5)*8:0,Ke=j>0?rt:ae,Ht=j>0?ye:Q+se,$t=j>0?Math.sin(ne*.5)*1.2:K,ra=Math.min(Math.max((e-.76)/.02,0),1),oa=Math.min(Math.max((e-.85)/.02,0),1),Fi=ra*(1-oa),Wt=Math.min(Math.max((e-.77)/.08,0),1),la=Math.pow(Wt,1.35),ri=Wt*Math.PI*26,os=Math.abs(Math.sin(ri)),bn=Wt>0?os*18-9:0,Oi=Wt>0?Math.sin(ri*.5)*14:0,ls=Wt>0?Math.sin(ri*.5)*2:0,cs=1+la*2.5,oi=Math.min(Math.max((e-.85)/.02,0),1),Dn=Math.min(Math.max((e-.86)/.06,0),1),li=Math.sin(Dn*Math.PI*16)*7,ds=Math.sin(Dn*Math.PI*36)*5,us=1+Math.pow(Dn,1.1)*.14,Qt=Math.min(Math.max((e-.915)/.013,0),1),hs=Math.pow(Qt,2.2),fs=Math.min(Math.max(Math.round(Dn*80+Qt*20),10),100),ca=hs*105,ps=us+hs*.16,S=Math.min(Math.max((e-.92)/.009,0),1),D=oi*(1-S),X=Math.min(Math.max((e-.916)/.006,0),1),k=Math.min(Math.max((e-.93)/.006,0),1),B=X*(1-k),he=Math.min(Math.max((e-.916)/.008,0),1),ue=-(1-Math.pow(he,1.4))*20,ge=Math.min(Math.max((e-.918)/.014,0),1),Ee=Math.pow(ge,1.25),Pe=ge*Math.PI*14,Be=Math.abs(Math.sin(Pe)),be=ge>0&&ge<1?Be*9-4.5:0,Ze=ge>0&&ge<1?Math.sin(Pe*.5)*7:0,gt=ge>0&&ge<1?Math.sin(Pe*.5)*.6:0,ot=Math.min(Math.max((e-.925)/.008,0),1),qe=Math.pow(ot,1.35),yt=qe*80,xe=-qe*6,Tt=-qe*4.5,We=1+Ee*.35+qe*.1,kt=ue+Ze+yt,Kt=be+xe,cn=gt-qe*.6,Pn=Math.min(Math.max((e-.93)/.006,0),1),et=Math.min(Math.max((e-.944)/.006,0),1),ht=Pn*(1-et),dn=Math.min(Math.max((e-.93)/.006,0),1),it=Math.pow(dn,.85),un=Math.min(Math.max((e-.942)/.006,0),1),Ln=Math.pow(un,1.4),ms=(1-it)*40+Ln*50,gc=Math.sin((e-.93)*80)*2.5,xc=.96+it*.08+(e-.934)*.3,oo=Math.min(Math.max((e-.934)/.008,0),1),_c=Math.min(Math.max((e-.944)/.006,0),1),vc=Math.min(Math.max((e-.958)/.006,0),1),lo=_c*(1-vc),gs=Math.min(Math.max((e-.944)/.016,0),1),Sc=Math.pow(gs,1.25),co=gs*Math.PI*10,bc=gs>0?Math.abs(Math.sin(co))*7-3.5:0,Mc=gs>0?Math.sin(co*.5)*5:0,yc=1+Sc*.48,Ec=bc*.5,Tc=Mc,wc=Math.min(Math.max((e-.958)/.006,0),1),Ac=Math.min(Math.max((e-.968)/.006,0),1),uo=wc*(1-Ac),Rc=Math.min(Math.max((e-.958)/.012,0),1),da=Math.pow(Rc,1.25),Cc=1+da*.2,Nc=da*12,Ic=-da*8,Dc=Math.min(Math.max((e-.968)/.006,0),1),Pc=Math.min(Math.max((e-.978)/.006,0),1),ho=Dc*(1-Pc),Lc=Math.min(Math.max((e-.968)/.012,0),1),fo=Math.pow(Lc,.9),Uc=.98+fo*.05,Fc=(1-fo)*35,po=Math.min(Math.max((e-.968)/.004,0),1),Oc=Math.min(Math.max((e-.978)/.005,0),1),Bc=Math.min(Math.max((e-.978)/.008,0),1),mo=Math.pow(Bc,.95),kc=1+mo*.05,zc=(1-mo)*20,go=Math.min(Math.max((e-.987)/.007,0),1),xs=Math.sin(go*Math.PI/2),Gc=-xs*100,Vc=-xs*10,xo=Oc*(1-Math.pow(go,1.4)),_o=Math.min(Math.max((e-.978)/.004,0),1),vo=Math.min(Math.max((e-.987)/.005,0),1),Hc=(1-xs)*100,Wc=(1-xs)*10,ua=Math.min(Math.max((e-.991)/.009,0),1),Xc=1+ua*.08,jc=-ua*15,Yc=-ua*22,ha=e*Math.PI*48,qc=Math.sin(ha)*1.8,$c=Math.cos(ha*.5)*1.6,Kc=Math.sin(ha*.5)*.2,fa=()=>{const $e=document.querySelector("[data-register-trigger]");$e?$e.click():window.location.hash="register"},So=()=>{p(!0);const $e=encodeURIComponent("BUILDX: The Occult Hackathon 2026 // Code-A-Nova"),tt=encodeURIComponent("36-hour occult coding hackathon organized by Code-A-Nova! Decipher paranormal anomalies, build cutting-edge software, and compete for ₹50,000+ in bounties. Venue: Online."),Xn=encodeURIComponent("Online // Organized by Code-A-Nova"),pa=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${$e}&dates=20261101T033000Z/20261102T153000Z&details=${tt}&location=${Xn}`;window.open(pa,"_blank","noopener,noreferrer");try{const Zc=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Code-A-Nova//BUILDX Hackathon//EN","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT","UID:buildx-hackathon-2026@code-a-nova.com","DTSTAMP:20260910T000000Z","DTSTART:20261101T033000Z","DTEND:20261102T153000Z","SUMMARY:BUILDX: The Occult Hackathon 2026 // Code-A-Nova","DESCRIPTION:36-hour occult coding hackathon organized by Code-A-Nova. Solve paranormal anomalies, build breakthrough software, and compete for ₹50,000+ in bounties. Venue: Online.","LOCATION:Online // Organized by Code-A-Nova","STATUS:CONFIRMED","END:VEVENT","END:VCALENDAR"].join(`\r
`),Jc=new Blob([Zc],{type:"text/calendar;charset=utf-8"}),Bi=document.createElement("a");Bi.href=window.URL.createObjectURL(Jc),Bi.setAttribute("download","BUILDX_Hackathon_Nov_1-2_2026.ics"),document.body.appendChild(Bi),Bi.click(),document.body.removeChild(Bi)}catch{}};return d.jsxs("div",{className:`relative w-full h-full overflow-hidden bg-black select-none will-change-transform ${r?"gate-breach-jhatka-active":s?"paranormal-jhatka-active":""}`,children:[ke>.005&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:ke,zIndex:20},children:d.jsx(Ag,{imageSrc:v.image,sceneId:v.id,scrollProgress:e,cameraTransform:Ae,onRevealComplete:()=>c(!0)})}),ve>.005&&e<.25&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-transparent transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:ve,zIndex:16,...Ue},children:d.jsx("div",{className:"w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${ie}px, ${$}px, 0) scale(${Z}) rotate(${W}deg)`,transformOrigin:"47.5% 50%"},children:d.jsx("img",{src:M.image,alt:"Open Iron Gate Vault Corridor",className:"w-full h-full object-cover object-center pointer-events-none select-none",loading:"eager",decoding:"async"})})}),Fe>.005&&e<.4&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:Fe,zIndex:e>=.3?18:14,perspective:"1200px"},children:d.jsx("div",{className:"w-full h-full will-change-transform transform-gpu",style:{transform:`perspective(1200px) translate3d(${dt+ie}px, ${mt+$}px, 0) scale(${Ct}) rotateY(${U}deg) rotateZ(${Mt+W}deg)`,transformOrigin:"50% 48%"},children:d.jsx("img",{src:x.image,alt:"Investigation Room with Evidence Board and Desk",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.05]",loading:"eager",decoding:"async"})})}),Te>.005&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:Te,zIndex:22},children:d.jsx("div",{className:"w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${de}px, ${we}px, 0) scale(${re}) rotate(${K*.4}deg)`,transformOrigin:"50% 50%"},children:d.jsx("img",{src:f.image,alt:"Blackboard Front Crime Board",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.05]",loading:"eager",decoding:"async"})})}),P>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:P,zIndex:23},children:[d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${Ke}px, ${Ht}px, 0) scale(${me}) rotate(${$t}deg)`,transformOrigin:e>=.67?"67% 68%":"24% 28%"},children:[d.jsx("img",{src:w.image,alt:"Subterranean Trapdoor Hatch Room View",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.06]",loading:"eager",decoding:"async"}),d.jsx(bl,{scrollProgress:e,variant:"mini-angled"}),j>.1&&e<.77&&d.jsx("div",{className:"absolute pointer-events-none transition-opacity duration-300",style:{left:"67%",top:"68%",transform:"translate(-50%, -50%)",opacity:Math.min(j*1.5,1)*(1-Math.min(Math.max((e-.75)/.02,0),1))},children:d.jsxs("div",{className:"relative flex items-center justify-center",children:[d.jsx("div",{className:"w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-emerald-400/80 animate-ping opacity-75"}),d.jsx("div",{className:"absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-dashed border-amber-400/60 animate-spin",style:{animationDuration:"8s"}}),d.jsx("div",{className:"absolute px-2 py-0.5 bg-black/80 border border-emerald-400 text-[10px] sm:text-xs text-emerald-300 font-mono tracking-widest whitespace-nowrap -bottom-6",children:"SUBTERRANEAN BREACH // ENTER"})]})})]}),j>.05&&d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-150",style:{opacity:Math.min(j*1.4,.85),background:"radial-gradient(ellipse at 67% 68%, rgba(16,185,129,0.25) 0%, transparent 60%), radial-gradient(circle at 67% 68%, transparent 35%, rgba(0,0,0,0.85) 100%)"}})]}),Fi>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:Fi,zIndex:25},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${Oi}px, ${bn}px, 0) scale(${cs}) rotate(${ls}deg)`,transformOrigin:"60% 46%"},children:d.jsx("img",{src:N.image,alt:"The Ghost on Subterranean Staircase at Iron Gate",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.08]",loading:"eager",decoding:"async"})}),Wt>.7&&d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-color-dodge transition-opacity duration-100",style:{opacity:Math.min((Wt-.7)/.25,1)*.9,background:"radial-gradient(circle at 60% 46%, rgba(220,38,38,0.4) 0%, rgba(245,158,11,0.2) 40%, rgba(0,0,0,0.9) 100%)"}}),d.jsx("div",{className:"absolute top-20 left-6 sm:left-12 px-3 py-1 bg-red-950/80 border border-red-500/80 rounded-xs font-mono text-[11px] sm:text-xs text-red-300 tracking-widest pointer-events-none transition-opacity duration-200",style:{opacity:Wt>.1&&Wt<.85?1:0},children:"⚠️ ENTITY PROXIMITY CRITICAL // MERGING VISION..."})]}),D>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:D,zIndex:26,perspective:"1000px"},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${ds+ca}px, ${li}px, 0) scale(${ps})`,transformOrigin:"85% 50%"},children:d.jsx("img",{src:b.image,alt:"Ghost First-Person Eye View Gripping Vault Gate",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.10] contrast-[1.08]",loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-multiply transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 50%, transparent 45%, rgba(80, 0, 0, 0.4) 75%, rgba(10, 0, 0, 0.95) 100%)"}}),d.jsx("div",{className:"absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 text-center pointer-events-none transition-opacity duration-300",style:{opacity:Dn>.08&&Qt<.7?1:0},children:d.jsxs("div",{className:"inline-block w-full max-w-md p-3 sm:p-3.5 rounded-xs bg-black/90 border border-red-500/90 shadow-[0_0_30px_rgba(220,38,38,0.55)] backdrop-blur-md",children:[d.jsxs("div",{className:"font-mono text-xs sm:text-sm text-red-400 font-bold tracking-widest flex items-center justify-center gap-2",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"}),d.jsx("span",{children:Qt>.15?"💥 OPENING THE DOOR // BREAKING THE GATE":"🔓 UNLOCKING THE DOOR // OPENING THE GATE"})]}),d.jsx("div",{className:"w-full bg-stone-900 border border-red-900/60 rounded-full h-1.5 overflow-hidden my-2",children:d.jsx("div",{className:"bg-gradient-to-r from-red-600 via-amber-500 to-emerald-400 h-full transition-all duration-75",style:{width:`${fs}%`}})}),d.jsxs("div",{className:"flex justify-between items-center text-[10px] sm:text-xs font-mono text-stone-400 px-1",children:[d.jsx("span",{className:"text-red-300 font-semibold",children:Qt>.15?"FORCING HEAVY GATE OPEN...":"UNLOCKING ANCIENT LATCH..."}),d.jsxs("span",{className:"font-bold text-amber-400",children:[fs,"%"]})]}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-yellow mt-1.5",children:Qt>.15?"Gate opening! Stepping forward into the inner crypt...":"Unlocking the door... Scroll down to push the gate open."})]})})]}),(r||Qt>.05&&Qt<.95)&&d.jsx("div",{className:"absolute inset-0 pointer-events-none z-35 mix-blend-screen transition-opacity duration-75",style:{background:"radial-gradient(ellipse at 85% 50%, rgba(255, 235, 180, 0.85) 0%, rgba(220, 38, 38, 0.5) 35%, transparent 75%)",opacity:r?.95:Math.sin(Qt*Math.PI)}}),B>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-200 will-change-transform transform-gpu",style:{opacity:B,zIndex:27,perspective:"1000px"},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`perspective(1000px) translate3d(${kt}px, ${Kt}px, 0) scale(${We}) rotateY(${Tt}deg) rotateZ(${cn}deg)`,transformOrigin:"50% 0%"},children:d.jsx("img",{src:E.image,alt:"Crypt Cathedral with Red Carpet and Candles",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",style:{transform:"scaleX(-1)"},loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(ellipse at 50% 60%, rgba(245, 158, 11, 0.16) 0%, transparent 65%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.8) 100%)"}}),ge>.08&&ge<.95&&d.jsx("div",{className:"absolute top-20 left-6 sm:left-12 px-3 py-1 bg-black/85 border border-amber-500/70 rounded-xs font-mono text-[11px] sm:text-xs text-amber-300 tracking-widest pointer-events-none transition-opacity duration-200",children:"⚡ SANCTUM ENTERED // ADVANCING TOWARDS ALTAR"})]}),ht>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-200 will-change-transform transform-gpu",style:{opacity:ht,zIndex:28,perspective:"1000px"},children:[d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu flex items-center justify-center",style:{transform:`translate3d(0, ${ms+gc}px, 0) scale(${xc})`,transformOrigin:"50% 0%"},children:[d.jsx("img",{src:y.image,alt:"Sanctum Blueprint Held in Hands",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.06]",loading:"eager",decoding:"async"}),d.jsxs("div",{className:"absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 flex flex-col items-center gap-3",style:{opacity:oo>.12?1:0,transform:`translate(-50%, calc(-50% + ${oo>.12?0:18}px))`},children:[d.jsxs("div",{className:"relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center",children:[d.jsx("div",{className:"absolute inset-0 border-2 border-amber-400/50 rounded-full animate-ping opacity-35"}),d.jsx("div",{className:"absolute inset-2 border border-dashed border-red-500/80 rounded-full animate-spin [animation-duration:9s]"}),d.jsx("div",{className:"absolute inset-6 border border-amber-400/60 rounded-full"}),d.jsx("div",{className:"w-3.5 h-3.5 bg-red-500 rounded-full shadow-[0_0_16px_#ef4444]"})]}),d.jsxs("div",{className:"px-4 sm:px-5 py-2 sm:py-2.5 bg-black/92 border border-amber-500/80 rounded-xs shadow-[0_0_35px_rgba(245,158,11,0.45)] backdrop-blur-md text-center max-w-sm",children:[d.jsxs("div",{className:"font-mono text-[11px] sm:text-xs text-amber-300 font-bold tracking-widest flex items-center justify-center gap-2",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),d.jsx("span",{children:"LOCATION VERIFIED // 100% BLUEPRINT MATCH"})]}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm text-stone-200 mt-1",children:'"The chamber layout aligns. The sacrificial altar lies directly ahead."'})]})]})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 65%, rgba(245, 158, 11, 0.20) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)"}})]}),lo>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu",style:{opacity:lo,zIndex:29},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${Tc}px, ${Ec}px, 0) scale(${yc})`,transformOrigin:"50% 0%"},children:d.jsx("img",{src:R.image,alt:"The Sacrificial Altar with Body in White Dress",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 45%, rgba(245, 158, 11, 0.15) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 35%, rgba(0,0,0,0.85) 100%)"}})]}),uo>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu",style:{opacity:uo,zIndex:30},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${Ic}px, ${Nc}px, 0) scale(${Cc})`,transformOrigin:"50% 0%"},children:d.jsx("img",{src:_.image,alt:"Reaching for Scroll in Hand on Altar",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 45%, rgba(245, 158, 11, 0.15) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 35%, rgba(0,0,0,0.85) 100%)"}})]}),ho>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu",style:{opacity:ho,zIndex:31},children:[d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu flex items-center justify-center",style:{transform:`translate3d(0, ${Fc}px, 0) scale(${Uc})`,transformOrigin:"50% 0%"},children:[d.jsx("img",{src:T.image,alt:"Unrolling the Sanctum Scroll",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",loading:"eager",decoding:"async"}),d.jsxs("div",{className:"absolute bottom-[6%] sm:bottom-[7%] md:bottom-[8%] left-1/2 w-[86%] max-w-md sm:max-w-lg md:max-w-xl px-3 py-1 flex flex-col items-center text-center select-none pointer-events-auto",style:{opacity:po,transform:`translate3d(-50%, 0, 0) perspective(900px) rotateX(8deg) rotateY(-1.5deg) rotateZ(2.2deg) scale(${.96+po*.04})`,transformOrigin:"50% 50%",transition:"opacity 0.25s ease-out, transform 0.25s ease-out"},children:[d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm text-[#0a0a0a] font-bold tracking-widest uppercase leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]",children:"✦ OFFICIAL SANCTUM PROCLAMATION ✦"}),d.jsx("h2",{className:"font-ink-cursive text-3xl sm:text-5xl md:text-6xl text-[#8b0000] font-black tracking-tight leading-none my-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]",children:"Save The Date"}),d.jsx("div",{className:"font-ink-cursive text-sm sm:text-lg md:text-xl text-[#0a0a0a] font-bold leading-tight my-0.5",children:"BUILDX: The Occult Innovation Hackathon"}),d.jsx("div",{className:"w-24 sm:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#8b0000]/60 to-transparent my-0.5"}),d.jsxs("div",{className:"my-0.5",children:[d.jsx("div",{className:"font-ink-cursive text-2xl sm:text-3xl md:text-4xl text-[#8b0000] font-black tracking-normal leading-tight whitespace-nowrap drop-shadow-[0_1px_2px_rgba(139,0,0,0.3)]",children:"1st & 2nd November 2026"}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold leading-tight",children:"⚡ 36-Hour Challenge // ₹50,000+ Cash & Bounties"})]}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold leading-tight",children:"Venue: Online  ✦  Organized by Code-A-Nova"}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-1.5 sm:mt-2",children:[d.jsxs("button",{type:"button",onClick:So,className:"px-3 sm:px-4 py-1 sm:py-1.5 bg-[#0a0a0a] hover:bg-[#1f1f1f] text-[#ffffff] border-2 border-[#8b0000] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all",children:[d.jsx("span",{children:"📅"}),d.jsx("span",{children:h?"✓ MARKED IN CALENDAR!":"MARK IN YOUR CALENDAR"})]}),d.jsx("button",{type:"button",onClick:fa,className:"px-3.5 sm:px-4.5 py-1 sm:py-1.5 bg-[#8b0000] hover:bg-[#a00000] text-[#ffffff] border-2 border-[#0a0a0a] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer select-none hover:scale-105 active:scale-95 transition-transform",children:d.jsx("span",{children:"⚡ REGISTER ➔"})})]}),h&&d.jsx("div",{className:"mt-1 font-ink-cursive text-xs sm:text-sm text-[#0f5132] font-bold tracking-wide bg-[#d1e7dd]/90 px-2 py-0.5 rounded-xs border border-[#0f5132]/40 animate-pulse",children:"✓ Added to Calendar! Nov 1-2, 2026 // Online // Code-A-Nova"})]})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.16) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 38%, rgba(0,0,0,0.85) 100%)"}})]}),xo>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-200 will-change-transform transform-gpu",style:{opacity:xo,zIndex:32,perspective:"1200px"},children:[d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu flex items-center justify-center",style:{transform:`translate3d(${Gc}%, ${zc}px, 0) scale(${kc}) rotateY(${Vc}deg)`,transformOrigin:"50% 0%"},children:[d.jsx("img",{src:C.image,alt:"Fully Unrolled Ancient Scroll Proclamation",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.07] contrast-[1.06]",loading:"eager",decoding:"async"}),d.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none px-4",style:{opacity:_o,transform:`scale(${.94+_o*.06})`,transition:"opacity 0.2s ease-out, transform 0.2s ease-out"},children:d.jsxs("div",{className:"relative w-full max-w-lg sm:max-w-xl md:max-w-2xl px-4 sm:px-6 py-2 flex flex-col items-center text-center select-none pointer-events-auto mt-10 sm:mt-14 md:mt-16",children:[d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold tracking-widest uppercase leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]",children:"✦ OFFICIAL SANCTUM PROCLAMATION ✦"}),d.jsx("h2",{className:"font-ink-cursive text-4xl sm:text-5xl md:text-6xl text-[#8b0000] font-black tracking-tight my-0 leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]",children:"Save The Date"}),d.jsx("div",{className:"font-ink-cursive text-sm sm:text-lg md:text-xl text-[#0f0f0f] font-bold leading-tight my-0.5",children:"BUILDX: The Occult Innovation Hackathon"}),d.jsx("div",{className:"w-28 sm:w-44 h-[1.5px] bg-gradient-to-r from-transparent via-[#8b0000]/60 to-transparent my-0.5 sm:my-1"}),d.jsxs("div",{className:"my-0.5",children:[d.jsx("div",{className:"font-ink-cursive text-2xl sm:text-4xl md:text-5xl text-[#8b0000] font-black leading-tight whitespace-nowrap drop-shadow-[0_1px_2px_rgba(139,0,0,0.3)]",children:"1st & 2nd November 2026"}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-base md:text-lg text-[#111111] font-bold leading-tight",children:"⚡ 36-Hour Challenge // ₹50,000+ Cash & Bounties"})]}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-base md:text-lg text-[#0a0a0a] font-bold leading-tight my-0.5 max-w-lg",children:"Venue: Online  ✦  Organized by Code-A-Nova"}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-1.5 sm:mt-2",children:[d.jsxs("button",{type:"button",onClick:So,className:"px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#0a0a0a] hover:bg-[#1f1f1f] text-[#ffffff] border-2 border-[#8b0000] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all",children:[d.jsx("span",{children:"📅"}),d.jsx("span",{children:h?"✓ MARKED IN CALENDAR!":"MARK IN YOUR CALENDAR"})]}),d.jsx("button",{type:"button",onClick:fa,className:"px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#8b0000] hover:bg-[#a00000] text-[#ffffff] border-2 border-[#0a0a0a] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer select-none hover:scale-105 active:scale-95 transition-transform",children:d.jsx("span",{children:"⚡ ENTER THE ARENA // REGISTER ➔"})})]}),h&&d.jsx("div",{className:"mt-1 font-ink-cursive text-xs sm:text-sm text-[#0f5132] font-bold tracking-wide bg-[#d1e7dd]/90 px-3 py-0.5 rounded-xs border border-[#0f5132]/40 animate-pulse",children:"✓ Google Calendar opened & .ics file downloaded! Nov 1-2, 2026 // Online // Code-A-Nova"})]})})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.18) 0%, transparent 65%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)"}})]}),vo>.005&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-200 will-change-transform transform-gpu",style:{opacity:vo,zIndex:33,perspective:"1200px"},children:d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu flex items-center justify-center",style:{transform:`translate3d(calc(${Hc}% + ${Yc+$c}px), ${jc+qc}px, 0) scale(${Xc}) rotateY(${Wc}deg) rotateZ(${Kc}deg)`,transformOrigin:"60% 50%"},children:[d.jsx("img",{src:L.image,alt:"The Crypt Sanctorum & Cathedral of the Occult Rules",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.06] contrast-[1.06]",loading:"eager",decoding:"async"}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 78% 50%, rgba(245, 158, 11, 0.22) 0%, transparent 45%), radial-gradient(circle at 35% 42%, rgba(220, 38, 38, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, transparent 45%, rgba(0,0,0,0.75) 100%)"}}),d.jsxs("div",{className:"absolute bottom-6 sm:bottom-10 right-4 sm:right-10 max-w-sm sm:max-w-md p-4 sm:p-5 rounded-xs bg-black/85 backdrop-blur-md border border-[#D01820]/70 shadow-[0_0_35px_rgba(0,0,0,0.9)] pointer-events-auto select-none transition-all duration-300",style:{opacity:Math.min(Math.max((e-.99)/.005,0),1),transform:`translate3d(0, ${(1-Math.min(Math.max((e-.99)/.005,0),1))*20}px, 0)`},children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2 font-mono text-[11px] sm:text-xs text-[#D01820] font-bold tracking-widest uppercase",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-[#D01820] animate-ping"}),d.jsx("span",{children:"SECTOR 00 // INNER SANCTUM SANCTORUM"})]}),d.jsx("h3",{className:"font-ink-cursive text-2xl sm:text-3xl text-stone-100 font-bold leading-tight mb-1",children:"The Sacred Rules of BUILDX"}),d.jsx("p",{className:"font-mono text-[11px] sm:text-xs text-stone-400 leading-relaxed uppercase mb-3",children:"The altar has accepted the proclamation. Decipher the tenets, obey the occult constraints, and forge your creation."}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[d.jsx("button",{type:"button",onClick:()=>{const $e=document.getElementById("case-evidence-section");$e&&$e.scrollIntoView({behavior:"smooth"})},className:"px-3.5 py-1.5 bg-[#D01820] hover:bg-[#b0141b] text-white font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase rounded-xs shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer",children:"EXPLORE RULES & CASE FILES ➔"}),d.jsx("button",{type:"button",onClick:fa,className:"px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase rounded-xs transition-all hover:scale-105 active:scale-95 cursor-pointer",children:"⚡ REGISTER NOW"})]})]}),d.jsx("div",{className:"absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 border border-red-900/60 rounded-xs font-mono text-[10px] sm:text-xs text-stone-400 tracking-widest uppercase pointer-events-none transition-opacity duration-300",style:{opacity:Math.min(Math.max((e-.989)/.004,0),1)*(1-Math.min(Math.max((e-.998)/.002,0),1))},children:"✦ CAMERA TRACKING: INNER ALTAR & RULES SANCTUARY ✦"})]})}),d.jsx(Kg,{scrollProgress:e,isImpactActive:s||r,gateProximity:e>=.76?1:j}),ke>.01&&d.jsx(Rg,{scrollProgress:e,revealed:l}),e>=.18&&e<=.37&&d.jsx(Cg,{scrollProgress:e}),e>=.36&&e<=.6&&d.jsx(bl,{scrollProgress:e,variant:"front"}),d.jsx(Ml,{isActive:s,reducedMotion:t,intensity:1.4}),d.jsx(Ml,{isActive:r,reducedMotion:t,intensity:2.2}),d.jsx("div",{className:"sr-only opacity-0 pointer-events-none select-none","aria-hidden":"true",children:Dt.map($e=>d.jsx("img",{src:$e.image,alt:"",loading:"eager",decoding:"sync"},$e.id))})]})}),Qg={judges:[]};function ex({className:i=""}){const e=zt.dates.countdownTarget,[t,n]=_e.useState({days:"36",hours:"00",minutes:"00",seconds:"00",isExpired:!1});_e.useEffect(()=>{if(!e)return;const a=new Date(e).getTime(),r=()=>{const l=Date.now(),c=a-l;if(c<=0){n({days:"00",hours:"00",minutes:"00",seconds:"00",isExpired:!0});return}const h=Math.floor(c/(1e3*60*60*24)),p=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(c%(1e3*60*60)/(1e3*60)),m=Math.floor(c%(1e3*60)/1e3);n({days:String(h).padStart(2,"0"),hours:String(p).padStart(2,"0"),minutes:String(u).padStart(2,"0"),seconds:String(m).padStart(2,"0"),isExpired:!1})};r();const o=setInterval(r,1e3);return()=>clearInterval(o)},[e]);const s=[{label:"DAYS",value:t.days},{label:"HOURS",value:t.hours},{label:"MINUTES",value:t.minutes},{label:"SECONDS",value:t.seconds}];return d.jsx("div",{className:`flex flex-col items-start ${i}`,children:d.jsxs("div",{className:"relative p-4 sm:p-5 rounded-xs bg-[#101010]/95 border border-white/15 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_15px_rgba(208,24,32,0.06)]",children:[d.jsx("div",{className:"absolute -top-1.5 -left-1.5 evidence-pin"}),d.jsxs("div",{className:"flex items-center justify-between gap-4 mb-3 border-b border-white/10 pb-2",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono-tech text-[11px] tracking-widest text-slate-300 uppercase font-bold",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#D01820] animate-pulse"}),d.jsx("span",{children:"THE INVESTIGATION BEGINS IN"})]}),d.jsx("span",{className:"font-mono-tech text-[9px] text-[#D01820] tracking-widest",children:"[CASE CLOCK]"})]}),d.jsx("div",{className:"flex items-center gap-2 sm:gap-3 md:gap-4",role:"timer","aria-label":`Countdown: ${t.days} days, ${t.hours} hours, ${t.minutes} minutes, ${t.seconds} seconds`,children:s.map((a,r)=>d.jsxs(yl.Fragment,{children:[d.jsxs("div",{className:"flex flex-col items-center",children:[d.jsx("div",{className:"relative px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xs bg-[#090909] border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.9)]",children:d.jsx("span",{className:"font-mono-tech font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-widest tabular-nums drop-shadow-[0_0_8px_rgba(208,24,32,0.35)]",children:a.value})}),d.jsx("span",{className:"mt-1.5 font-mono-tech text-[9px] sm:text-[10px] text-slate-400 tracking-wider",children:a.label})]}),r<s.length-1&&d.jsx("span",{className:"font-mono-tech font-bold text-lg sm:text-xl text-[#D01820] -mt-4 select-none",children:":"})]},a.label))})]})})}const tx=_e.memo(function({isVisible:e=!0}){const{anomalies:t,briefing:n,hackathonDetails:s,status:a}=qs;return d.jsxs("div",{id:"case-evidence",className:`relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-700 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-12 pointer-events-none"}`,children:[d.jsxs("div",{className:"border border-stone-800 bg-black/80 backdrop-blur-md p-6 sm:p-8 rounded-xs mb-12 shadow-2xl relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D01820] to-transparent"}),d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10 font-mono text-xs",children:[d.jsxs("div",{className:"flex items-center gap-2 text-[#D01820]",children:[d.jsx(wl,{className:"w-4 h-4 animate-pulse"}),d.jsx("span",{className:"tracking-widest uppercase",children:qs.caseId})]}),d.jsxs("div",{className:"inline-flex items-center gap-2 px-2.5 py-0.5 rounded-xs bg-[#D01820]/10 border border-[#D01820]/40 text-[#D01820]",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#D01820] animate-ping"}),d.jsx("span",{children:a.badge})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 items-center",children:[d.jsxs("div",{className:"lg:col-span-2 space-y-3",children:[d.jsxs("h2",{className:"font-serif font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-stone-100 uppercase leading-none",children:["BUILDX ",d.jsx("span",{className:"text-[#D01820]",children:"2026"})]}),d.jsx("p",{className:"font-mono text-lg sm:text-xl text-stone-300 tracking-wider uppercase font-bold",children:s.durationNarrative}),d.jsx("p",{className:"font-sans text-stone-400 text-sm leading-relaxed max-w-xl",children:n.detail})]}),d.jsxs("div",{className:"bg-stone-950/80 border border-stone-800 p-5 rounded-xs space-y-3",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-stone-400 uppercase tracking-wider",children:[d.jsx($s,{className:"w-3.5 h-3.5 text-[#D01820]"}),d.jsx("span",{children:"CONTAINMENT COUNTDOWN"})]}),d.jsx(ex,{targetDate:"2026-10-24T09:00:00Z"}),d.jsxs("div",{className:"pt-2 font-mono text-[11px] text-stone-500 uppercase text-center",children:[s.dates," • ",s.format]})]})]}),d.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-white/5",children:[d.jsx(Ii,{href:"#register-modal",variant:"primary",size:"lg",icon:d.jsx(Zi,{className:"w-4 h-4"}),onClick:()=>{const r=document.querySelector("[data-register-trigger]");r&&r.click()},children:"ENTER THE CASE // REGISTER NOW"}),d.jsx("a",{href:"#dossiers",className:"px-5 py-3 rounded-xs border border-white/10 hover:border-stone-400 font-mono text-xs text-stone-300 tracking-wider uppercase transition-colors",children:"REVIEW ANOMALY DOSSIERS"})]})]}),d.jsxs("div",{id:"dossiers",className:"mb-14",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-4 font-mono text-xs text-[#D01820] tracking-widest uppercase",children:[d.jsx(Al,{className:"w-4 h-4"}),d.jsx("span",{children:"ACTIVE SECTOR ANOMALIES // TRACKS"})]}),d.jsx("h3",{className:"font-serif text-2xl sm:text-3xl font-bold text-stone-100 uppercase tracking-tight mb-8",children:"SELECT YOUR INVESTIGATION VECTOR"}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.map(r=>d.jsxs("div",{className:"group relative bg-black/75 border border-stone-800 hover:border-[#D01820]/70 p-6 rounded-xs transition-all duration-300",children:[d.jsxs("div",{className:"flex items-center justify-between mb-3 font-mono text-xs",children:[d.jsx("span",{className:"text-[#D01820] font-bold",children:r.code}),d.jsx("span",{className:"px-2 py-0.5 bg-stone-900 text-stone-400 rounded-xs border border-stone-800",children:r.risk})]}),d.jsx("h4",{className:"font-mono text-lg font-bold text-stone-200 group-hover:text-white uppercase mb-2",children:r.title}),d.jsx("p",{className:"text-stone-400 text-xs sm:text-sm leading-relaxed mb-4",children:r.description}),d.jsxs("div",{className:"pt-3 border-t border-stone-800/80 flex items-center justify-between font-mono text-xs",children:[d.jsx("span",{className:"text-stone-500",children:"BOUNTY ALLOCATION:"}),d.jsx("span",{className:"text-emerald-400 font-bold",children:r.bounty})]})]},r.id))})]}),d.jsxs("div",{className:"border border-stone-800 bg-black/70 p-6 sm:p-8 rounded-xs mb-14",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-3 font-mono text-xs text-[#D01820] tracking-widest uppercase",children:[d.jsx($s,{className:"w-4 h-4"}),d.jsx("span",{children:"36-HOUR RUN PROTOCOL"})]}),d.jsx("h3",{className:"font-serif text-2xl font-bold text-stone-100 uppercase tracking-tight mb-6",children:"INCIDENT TIMELINE"}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:qs.investigationTimeline.map((r,o)=>d.jsxs("div",{className:"p-4 bg-stone-950/90 border border-stone-800/80 rounded-xs space-y-1.5",children:[d.jsx("span",{className:"font-mono text-xs text-[#D01820] font-bold",children:r.time}),d.jsx("h5",{className:"font-mono text-sm font-bold text-stone-200 uppercase",children:r.title}),d.jsx("p",{className:"text-stone-400 text-xs leading-relaxed",children:r.desc})]},o))})]}),d.jsxs("div",{className:"mb-14",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-3 font-mono text-xs text-[#D01820] tracking-widest uppercase",children:[d.jsx(rd,{className:"w-4 h-4"}),d.jsx("span",{children:"INVESTIGATION COUNCIL"})]}),d.jsx("h3",{className:"font-serif text-2xl sm:text-3xl font-bold text-stone-100 uppercase tracking-tight mb-6",children:"SENIOR ADJUDICATORS"}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Qg.judges.slice(0,3).map(r=>d.jsxs("div",{className:"bg-black/75 border border-stone-800 p-5 rounded-xs flex items-center gap-4",children:[d.jsx("div",{className:"w-12 h-12 rounded-full bg-stone-900 border border-[#D01820]/40 flex items-center justify-center font-mono font-bold text-sm text-stone-300",children:r.name.charAt(0)}),d.jsxs("div",{className:"font-mono text-xs",children:[d.jsx("div",{className:"font-bold text-stone-200 uppercase text-sm",children:r.name}),d.jsx("div",{className:"text-stone-400",children:r.role}),d.jsx("div",{className:"text-[#D01820] text-[11px]",children:r.organization})]})]},r.id))})]}),d.jsxs("div",{className:"text-center py-12 px-6 border border-[#D01820]/40 bg-gradient-to-b from-black to-[#D01820]/10 rounded-xs space-y-4",children:[d.jsx("div",{className:"font-mono text-xs text-[#D01820] tracking-widest uppercase",children:"[ FINAL PROTOCOL DIRECTIVE ]"}),d.jsx("h3",{className:"font-serif text-3xl sm:text-4xl font-black text-stone-100 uppercase tracking-tight",children:"WILL YOU ENTER THE BREACH?"}),d.jsx("p",{className:"font-sans text-stone-300 text-sm max-w-lg mx-auto leading-relaxed",children:"The signal is active. 36 hours. National competitors. Top industry mentors and bounties."}),d.jsx("div",{className:"pt-2",children:d.jsx(Ii,{href:"#register-modal",variant:"primary",size:"lg",icon:d.jsx(Zi,{className:"w-4 h-4"}),children:"ENTER THE CASE NOW"})})]})]})});function nx({data:i=mc.footer}){return d.jsx("footer",{className:"border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-md",children:d.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"h-8 sm:h-9 w-auto flex items-center filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_0_15px_rgba(208,24,32,0.4)]",children:d.jsx("img",{src:rs,alt:"BUILDX",className:"h-full w-auto object-contain select-none pointer-events-none brightness-[1.12] contrast-[1.15]",loading:"lazy"})}),d.jsx("div",{className:"border-l border-white/10 pl-2.5",children:d.jsx("span",{className:"font-mono text-[9px] text-stone-400 uppercase tracking-widest block",children:zt.branding.subOrganizer})})]}),d.jsxs("div",{className:"text-center md:text-left max-w-md font-mono text-[10px] text-stone-500 leading-relaxed",children:[d.jsx("p",{children:i.disclaimer}),d.jsx("p",{className:"pt-1 text-stone-400",children:i.copyright})]}),d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("a",{href:zt.socials.github,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"GitHub Repository",children:d.jsx(od,{className:"w-4 h-4"})}),d.jsx("a",{href:zt.socials.discord,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"Discord Community",children:d.jsx(ld,{className:"w-4 h-4"})}),d.jsx("a",{href:zt.socials.twitter,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"Twitter Feed",children:d.jsx(cd,{className:"w-4 h-4"})}),d.jsx("a",{href:zt.socials.linkedin,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"LinkedIn Profile",children:d.jsx(Rl,{className:"w-4 h-4"})})]})]})})}function ix({className:i="w-4 h-4"}){return d.jsx("svg",{className:i,viewBox:"0 0 24 24",fill:"currentColor",children:d.jsx("path",{d:"M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.777.82 2.795.82h.005c3.183 0 5.771-2.587 5.772-5.766 0-1.543-.601-2.993-1.693-4.086s-2.544-1.72-4.082-1.72zm6.915 1.155c1.42 1.42 2.203 3.308 2.203 5.313 0 4.143-3.372 7.516-7.517 7.516-1.258 0-2.493-.316-3.593-.914l-4.039 1.059 1.079-3.937c-.66-1.144-1.008-2.443-1.008-3.724 0-4.144 3.372-7.517 7.517-7.517 2.006 0 3.894.782 5.314 2.204zm-3.238 6.559c-.198-.099-1.171-.578-1.353-.644-.182-.065-.315-.099-.447.099s-.513.644-.629.776c-.116.133-.232.149-.43.05-.198-.099-.838-.309-1.597-.986-.591-.527-.99-1.178-1.106-1.376s-.012-.306.087-.404c.089-.089.198-.232.298-.348.099-.116.132-.198.198-.33.066-.133.033-.248-.017-.348s-.446-1.074-.612-1.47c-.161-.387-.325-.334-.447-.34l-.381-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653s.71 1.917.81 2.05c.099.132 1.397 2.133 3.385 2.99.473.204.843.326 1.131.418.475.151.907.13 1.248.079.38-.057 1.171-.479 1.337-.942.165-.463.165-.86.116-.942-.049-.083-.182-.133-.38-.232z"})})}const sx=_e.memo(function(){const e=[{name:"Instagram",href:"https://www.instagram.com/codenova31/",icon:d.jsx(dd,{className:"w-4 h-4"}),hoverClass:"hover:text-[#E1306C] hover:border-[#E1306C]/60 hover:shadow-[0_0_18px_rgba(225,48,108,0.45)]"},{name:"LinkedIn",href:"https://www.linkedin.com/company/code-a-nova/",icon:d.jsx(Rl,{className:"w-4 h-4"}),hoverClass:"hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:shadow-[0_0_18px_rgba(10,102,194,0.45)]"},{name:"WhatsApp",href:"https://wa.me/?text=Hi%20Code-A-Nova%20Team",icon:d.jsx(ix,{className:"w-4 h-4"}),hoverClass:"hover:text-[#25D366] hover:border-[#25D366]/60 hover:shadow-[0_0_18px_rgba(37,211,102,0.45)]"}];return d.jsx("div",{className:"fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-2.5 pointer-events-auto select-none","aria-label":"Social links",children:e.map(t=>d.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",title:t.name,"aria-label":t.name,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-stone-400 transition-all duration-250 shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:scale-110 active:scale-95 ${t.hoverClass}`,children:t.icon},t.name))})}),ax=_e.memo(function(){const[e,t]=_e.useState(0),n=_e.useRef(null);return _e.useEffect(()=>{let s=0,a=0,r=null;const o=()=>{if(n.current){const c=n.current.offsetTop||0,p=(n.current.offsetHeight||1)-window.innerHeight;if(p>0){const u=(window.scrollY||window.pageYOffset||0)-c;a=Math.min(Math.max(u/p,0),1)}}},l=()=>{const c=a-s;Math.abs(c)>8e-5?(s+=c*.2,t(s)):s!==a&&(s=a,t(s)),r=requestAnimationFrame(l)};return window.addEventListener("scroll",o,{passive:!0}),o(),s=a,t(s),r=requestAnimationFrame(l),()=>{window.removeEventListener("scroll",o),r&&cancelAnimationFrame(r)}},[]),d.jsxs("div",{className:"relative w-full bg-black text-[#e5e5e5]",children:[d.jsx("div",{ref:n,className:"relative w-full",style:{height:"2200vh"},children:d.jsx("div",{className:"sticky top-0 w-full h-screen overflow-hidden z-10 bg-black",children:d.jsx(Jg,{scrollProgress:e})})}),d.jsxs("section",{id:"case-evidence-section",className:"relative z-20 w-full bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-800",children:[d.jsxs("div",{className:"max-w-6xl mx-auto mb-10 text-center",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-xs bg-[#D01820]/10 border border-[#D01820]/40 text-[#D01820] text-xs font-mono tracking-widest uppercase mb-4",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-[#D01820] animate-ping"}),d.jsx("span",{children:"CHAPTER II // CLASSIFIED ANOMALY ARCHIVES"})]}),d.jsx("h2",{className:"font-serif font-black text-4xl sm:text-6xl text-stone-100 tracking-tight uppercase leading-none",children:"INVESTIGATION CASE FILES"}),d.jsx("p",{className:"font-mono text-xs sm:text-sm text-stone-400 max-w-xl mx-auto mt-3 tracking-wider uppercase leading-relaxed",children:"The sanctum proclamation has been sealed. Explore the classified case briefs, anomaly challenge tracks, and lock in your registration below."})]}),d.jsx(tx,{isVisible:!0})]}),d.jsx(nx,{}),d.jsx(sx,{})]})}),rx=_e.memo(function(){const[e,t]=_e.useState(Pt.isMuted);_e.useEffect(()=>{vt.init();const s=Pt.subscribeDebug(a=>{t(a.isMuted)});return()=>s()},[]);const n=()=>{const s=Pt.toggleMute();t(s)};return d.jsx("div",{className:"fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 pointer-events-auto select-none",children:d.jsxs("button",{type:"button",onClick:n,title:e?"Turn Sound ON (Voiceover & Atmosphere)":"Turn Sound OFF (Silence Audio)","aria-label":e?"Sound Off - Click to enable":"Sound On - Click to mute",className:`group flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.85)] cursor-pointer hover:scale-105 active:scale-95 ${e?"border-stone-700/60 text-stone-400 hover:border-stone-500 hover:text-stone-200":"border-red-600/70 text-red-300 shadow-[0_0_20px_rgba(220,38,38,0.35)] hover:border-red-500"}`,children:[e?d.jsx(Cl,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-500 group-hover:text-stone-300"}):d.jsxs("div",{className:"relative flex items-center justify-center",children:[d.jsx(Nl,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 animate-pulse"}),d.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"})]}),d.jsx("span",{className:"font-mono text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold",children:e?"SOUND OFF":"SOUND ON"})]})})}),ox=_e.memo(function(){const[e,t]=_e.useState(!1),[n,s]=_e.useState(Pt.getDebugState());if(_e.useEffect(()=>{if(typeof window>"u")return;const l=()=>{const p=new URLSearchParams(window.location.search).get("storyDebug")==="true",u=window.location.hash.includes("storyDebug");t(p||u)};l(),window.addEventListener("hashchange",l),window.addEventListener("popstate",l);const c=Pt.subscribeDebug(h=>{s(h)});return()=>{window.removeEventListener("hashchange",l),window.removeEventListener("popstate",l),c()}},[]),!e)return null;const a=Math.max(.1,n.clipEnd-n.clipStart),r=Math.min(Math.max((n.currentTime-n.clipStart)/a,0),1),o=(l="")=>l.includes("FADING IN")||l==="LOADING"?"text-cyan-400 bg-cyan-950/70 border-cyan-500/50":l.includes("FADING OUT")||l.includes("PAUSED")?"text-amber-400 bg-amber-950/70 border-amber-500/50":l.includes("PLAYING")?"text-emerald-400 bg-emerald-950/70 border-emerald-500/50":l==="MUTED"?"text-amber-400 bg-amber-950/70 border-amber-500/50":l==="BLOCKED"?"text-rose-400 bg-rose-950/70 border-rose-500/50":"text-stone-400 bg-stone-900/70 border-stone-700/50";return d.jsxs("div",{className:"fixed top-20 right-4 sm:right-6 z-50 w-72 sm:w-80 bg-stone-950/95 border-2 border-red-800/80 rounded-xs p-3.5 backdrop-blur-md shadow-[0_0_35px_rgba(0,0,0,0.95)] text-stone-200 font-mono text-xs select-none pointer-events-auto",style:{boxShadow:"0 0 30px rgba(185, 28, 28, 0.35)"},children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-red-900/50 pb-2 mb-2.5",children:[d.jsxs("div",{className:"flex items-center gap-1.5 text-red-400 font-bold uppercase tracking-wider text-[11px]",children:[d.jsx(El,{className:"w-3.5 h-3.5 animate-pulse text-red-500"}),d.jsx("span",{children:"AUDIO DEBUG HUD"})]}),d.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded-xs bg-red-950/60 border border-red-800/50 text-red-300",children:"?storyDebug=true"})]}),d.jsxs("div",{className:"space-y-1.5 text-[11px]",children:[d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Current Scene:"}),d.jsx("span",{className:"font-bold text-white bg-stone-900 px-1.5 py-0.5 rounded-xs border border-stone-700",children:n.currentScene})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Current Audio:"}),d.jsx("span",{className:"font-bold text-amber-300 truncate max-w-[140px]",title:n.audioFile,children:n.audioFile})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Clip:"}),d.jsxs("span",{className:"font-semibold text-cyan-300",children:[n.clipStart.toFixed(1),"s → ",n.clipEnd.toFixed(1),"s"]})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Playhead:"}),d.jsxs("span",{className:"font-bold text-stone-100",children:[n.currentTime.toFixed(2),"s / ",n.clipEnd.toFixed(1),"s"]})]}),d.jsx("div",{className:"w-full bg-stone-900 h-1.5 rounded-full overflow-hidden border border-stone-800",children:d.jsx("div",{className:"h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-400 transition-all duration-75",style:{width:`${r*100}%`}})}),d.jsxs("div",{className:"flex items-center justify-between pt-1",children:[d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400",children:"Playback:"}),d.jsx("span",{className:`px-1.5 py-0.5 text-[10px] font-bold rounded-xs border ${o(n.playbackStatus)}`,children:n.playbackStatus})]}),d.jsxs("div",{className:"flex items-center gap-1 text-stone-300 text-[11px]",children:[d.jsx("span",{className:"text-stone-400",children:"Volume:"}),d.jsxs("span",{className:"font-bold text-white",children:[n.volume,"%"]})]})]}),n.isAutoplayBlocked&&d.jsx("div",{className:"text-[10px] text-amber-400 bg-amber-950/40 p-1.5 rounded-xs border border-amber-800/50 mt-1",children:"⚠ Autoplay waiting: Click or scroll to unlock audio"})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-1.5 mt-3 pt-2 border-t border-stone-800 text-[10px]",children:[d.jsxs("button",{type:"button",onClick:()=>Pt.replayCurrentScene(),className:"px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors",title:"Replay active scene voice clip",children:[d.jsx(ud,{className:"w-3 h-3 text-cyan-400"}),d.jsx("span",{children:"Replay"})]}),d.jsxs("button",{type:"button",onClick:()=>Pt.stopActiveClip(),className:"px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors",title:"Stop currently playing audio clip",children:[d.jsx(hd,{className:"w-3 h-3 text-rose-400"}),d.jsx("span",{children:"Stop"})]}),d.jsx("button",{type:"button",onClick:()=>Pt.toggleMute(),className:"px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors",title:"Toggle Master Sound",children:n.isMuted?d.jsxs(d.Fragment,{children:[d.jsx(Cl,{className:"w-3 h-3 text-amber-400"}),d.jsx("span",{children:"Unmute"})]}):d.jsxs(d.Fragment,{children:[d.jsx(Nl,{className:"w-3 h-3 text-emerald-400"}),d.jsx("span",{children:"Mute"})]})})]})]})});function ux(){return _e.useEffect(()=>{const i=document.title;document.title=`${zt.branding.name} — ${zt.branding.tagline}`;let e=document.querySelector('meta[name="description"]');const t=e?e.getAttribute("content"):null;return e&&e.setAttribute("content",zt.branding.missionDescription),()=>{document.title=i,e&&t&&e.setAttribute("content",t)}},[]),d.jsxs("div",{className:"hackathon-theme-root bg-black text-[#e5e5e5] min-h-screen relative selection:bg-[#D01820]/40 selection:text-white",children:[d.jsx(og,{}),d.jsx(cg,{}),d.jsx("main",{id:"main-content",className:"relative z-10 bg-black",children:d.jsx(ax,{})}),d.jsx(rx,{}),d.jsx(ox,{})]})}export{ux as default};
