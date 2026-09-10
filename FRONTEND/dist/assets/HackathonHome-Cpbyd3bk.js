import{a as xe,j as d,R as Sl}from"./vendor-query-13Iz25eN.js";import{A as Zi,X as zc,bU as Gc,C as Vc,an as Hc,bV as Wc,bW as Ml,bX as Xc,Q as Ks,a7 as bl,bS as yl,a$ as El,S as jc,y as Yc,ar as qc,z as $c,bY as Kc,L as Tl,I as Zc,bZ as wl,bQ as Al,bo as Jc,b_ as Qc}from"./vendor-icons-BmMFIZvw.js";const Lr="186",ed=0,_o=1,td=2,Hs=1,nd=2,Xi=3,ti=0,Gt=1,gn=2,Nn=0,Yi=1,Ji=2,vo=3,So=4,id=5,bi=100,sd=101,ad=102,rd=103,od=104,ld=200,cd=201,dd=202,ud=203,Rl=204,Cl=205,hd=206,fd=207,pd=208,md=209,gd=210,xd=211,_d=212,vd=213,Sd=214,Xa=0,ja=1,Ya=2,Qi=3,qa=4,$a=5,Ka=6,Za=7,Nl=0,Md=1,bd=2,vn=0,Il=1,Dl=2,Pl=3,Ur=4,Ll=5,Ul=6,Fl=7,Ol=300,ni=301,Ri=302,ha=303,fa=304,ia=306,Ja=1e3,Cn=1001,Qa=1002,At=1003,yd=1004,vs=1005,Pt=1006,pa=1007,Zn=1008,Yt=1009,Bl=1010,kl=1011,es=1012,Fr=1013,Sn=1014,xn=1015,Mn=1016,Or=1017,Br=1018,ts=1020,zl=35902,Gl=35899,Vl=1021,Hl=1022,rn=1023,Dn=1026,Jn=1027,Wl=1028,kr=1029,ii=1030,zr=1031,Gr=1033,Ws=33776,Xs=33777,js=33778,Ys=33779,er=35840,tr=35841,nr=35842,ir=35843,sr=36196,ar=37492,rr=37496,or=37488,lr=37489,Zs=37490,cr=37491,dr=37808,ur=37809,hr=37810,fr=37811,pr=37812,mr=37813,gr=37814,xr=37815,_r=37816,vr=37817,Sr=37818,Mr=37819,br=37820,yr=37821,Er=36492,Tr=36494,wr=36495,Ar=36283,Rr=36284,Js=36285,Cr=36286,Ed=3200,Nr=0,Td=1,Gn="",Qt="srgb",Qs="srgb-linear",ea="linear",at="srgb",ma=7680,wd=519,Ad=512,Rd=513,Cd=514,Vr=515,Nd=516,Id=517,Hr=518,Dd=519,Pd=35044,Mo="300 es",_n=2e3,ns=2001;function Ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ud(){const i=ta("canvas");return i.style.display="block",i}const bo={};function yo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Xl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Xl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Xl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ti(...i){const e=i.join(" ");e in bo||(bo[e]=!0,Ie(...i))}function Fd(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Od={[Xa]:ja,[Ya]:Ka,[qa]:Za,[Qi]:$a,[ja]:Xa,[Ka]:Ya,[Za]:qa,[$a]:Qi};class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eo=1234567;const qi=Math.PI/180,is=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Wr(i,e){return(i%e+e)%e}function Bd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kd(i,e,t){return i!==e?(t-i)/(e-i):0}function $i(i,e,t){return(1-t)*i+t*e}function zd(i,e,t,n){return $i(i,e,1-Math.exp(-t*n))}function Gd(i,e=1){return e-Math.abs(Wr(i,e*2)-e)}function Vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xd(i,e){return i+Math.random()*(e-i)}function jd(i){return i*(.5-Math.random())}function Yd(i){i!==void 0&&(Eo=i);let e=Eo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qd(i){return i*qi}function $d(i){return i*is}function Kd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qd(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),h=r((e+n)/2),p=a((e-n)/2),u=r((e-n)/2),m=a((n-e)/2),v=r((n-e)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*m,o*h,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const li={DEG2RAD:qi,RAD2DEG:is,generateUUID:Ii,clamp:Ve,euclideanModulo:Wr,mapLinear:Bd,inverseLerp:kd,lerp:$i,damp:zd,pingpong:Gd,smoothstep:Vd,smootherstep:Hd,randInt:Wd,randFloat:Xd,randFloatSpread:jd,seededRandom:Yd,degToRad:qd,radToDeg:$d,isPowerOfTwo:Kd,ceilPowerOfTwo:Zd,floorPowerOfTwo:Jd,setQuaternionFromProperEuler:Qd,normalize:Lt,denormalize:yi},Qr=class Qr{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qr.prototype.isVector2=!0;let je=Qr;class Di{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=a[r+0],m=a[r+1],v=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==m||h!==v){let x=l*u+c*m+h*v+p*b;x<0&&(u=-u,m=-m,v=-v,b=-b,x=-x);let f=1-o;if(x<.9995){const w=Math.acos(x),N=Math.sin(w);f=Math.sin(f*w)/N,o=Math.sin(o*w)/N,l=l*f+u*o,c=c*f+m*o,h=h*f+v*o,p=p*f+b*o}else{l=l*f+u*o,c=c*f+m*o,h=h*f+v*o,p=p*f+b*o;const w=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=w,c*=w,h*=w,p*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=a[r],u=a[r+1],m=a[r+2],v=a[r+3];return e[t]=o*v+h*p+l*m-c*u,e[t+1]=l*v+h*u+c*p-o*m,e[t+2]=c*v+h*m+o*u-l*p,e[t+3]=h*v-o*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(a/2),u=l(n/2),m=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*h*p+c*m*v,this._y=c*m*p-u*h*v,this._z=c*h*v+u*m*p,this._w=c*h*p-u*m*v;break;case"YXZ":this._x=u*h*p+c*m*v,this._y=c*m*p-u*h*v,this._z=c*h*v-u*m*p,this._w=c*h*p+u*m*v;break;case"ZXY":this._x=u*h*p-c*m*v,this._y=c*m*p+u*h*v,this._z=c*h*v+u*m*p,this._w=c*h*p-u*m*v;break;case"ZYX":this._x=u*h*p-c*m*v,this._y=c*m*p+u*h*v,this._z=c*h*v-u*m*p,this._w=c*h*p+u*m*v;break;case"YZX":this._x=u*h*p+c*m*v,this._y=c*m*p+u*h*v,this._z=c*h*v-u*m*p,this._w=c*h*p-u*m*v;break;case"XZY":this._x=u*h*p-c*m*v,this._y=c*m*p-u*h*v,this._z=c*h*v+u*m*p,this._w=c*h*p+u*m*v;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=n+o+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(r-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(a+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(a-c)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(r-s)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const eo=class eo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(To.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),h=2*(o*t-a*s),p=2*(a*n-r*t);return this.x=t+l*c+r*p-o*h,this.y=n+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eo.prototype.isVector3=!0;let G=eo;const ga=new G,To=new Di,to=class to{constructor(e,t,n,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],m=n[5],v=n[8],b=s[0],x=s[3],f=s[6],w=s[1],N=s[4],M=s[7],E=s[2],y=s[5],R=s[8];return a[0]=r*b+o*w+l*E,a[3]=r*x+o*N+l*y,a[6]=r*f+o*M+l*R,a[1]=c*b+h*w+p*E,a[4]=c*x+h*N+p*y,a[7]=c*f+h*M+p*R,a[2]=u*b+m*w+v*E,a[5]=u*x+m*N+v*y,a[8]=u*f+m*M+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*r-o*c,u=o*l-h*a,m=c*a-r*l,v=t*p+n*u+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=p*b,e[1]=(s*c-h*n)*b,e[2]=(o*n-s*r)*b,e[3]=u*b,e[4]=(h*t-s*l)*b,e[5]=(s*a-o*t)*b,e[6]=m*b,e[7]=(n*l-c*t)*b,e[8]=(r*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xa.makeScale(e,t)),this}rotate(e){return Ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return Ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};to.prototype.isMatrix3=!0;let Pe=to;const xa=new Pe,wo=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ao=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eu(){const i={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===at&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===at&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ti("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ti("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qs]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:wo,fromXYZ:Ao,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:wo,fromXYZ:Ao,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}const Xe=eu();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ci;class tu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ci===void 0&&(ci=ta("canvas")),ci.width=e.width,ci.height=e.height;const s=ci.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=In(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nu=0;class Xr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(_a(s[r].image)):a.push(_a(s[r]))}else a=_a(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function _a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let iu=0;const va=new G;class Ot extends ai{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Cn,s=Cn,a=Pt,r=Zn,o=rn,l=Yt,c=Ot.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Ii(),this.name="",this.source=new Xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ja:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ja:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Ol;Ot.DEFAULT_ANISOTROPY=1;const no=class no{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],m=l[5],v=l[9],b=l[2],x=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-b)<.01&&Math.abs(v-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+b)<.1&&Math.abs(v+x)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(c+1)/2,M=(m+1)/2,E=(f+1)/2,y=(h+u)/4,R=(p+b)/4,_=(v+x)/4;return N>M&&N>E?N<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(N),s=y/n,a=R/n):M>E?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=y/s,a=_/s):E<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),n=R/a,s=_/a),this.set(n,s,a,t),this}let w=Math.sqrt((x-v)*(x-v)+(p-b)*(p-b)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(x-v)/w,this.y=(p-b)/w,this.z=(u-h)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};no.prototype.isVector4=!0;let ht=no;class su extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},a=new Ot(s),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends su{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jl extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class au extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const na=class na{constructor(e,t,n,s,a,r,o,l,c,h,p,u,m,v,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,h,p,u,m,v,b,x)}set(e,t,n,s,a,r,o,l,c,h,p,u,m,v,b,x){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=m,f[7]=v,f[11]=b,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new na().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/di.setFromMatrixColumn(e,0).length(),a=1/di.setFromMatrixColumn(e,1).length(),r=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const u=r*h,m=r*p,v=o*h,b=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=m+v*c,t[5]=u-b*c,t[9]=-o*l,t[2]=b-u*c,t[6]=v+m*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,m=l*p,v=c*h,b=c*p;t[0]=u+b*o,t[4]=v*o-m,t[8]=r*c,t[1]=r*p,t[5]=r*h,t[9]=-o,t[2]=m*o-v,t[6]=b+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,m=l*p,v=c*h,b=c*p;t[0]=u-b*o,t[4]=-r*p,t[8]=v+m*o,t[1]=m+v*o,t[5]=r*h,t[9]=b-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,m=r*p,v=o*h,b=o*p;t[0]=l*h,t[4]=v*c-m,t[8]=u*c+b,t[1]=l*p,t[5]=b*c+u,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,m=r*c,v=o*l,b=o*c;t[0]=l*h,t[4]=b-u*p,t[8]=v*p+m,t[1]=p,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*p+v,t[10]=u-b*p}else if(e.order==="XZY"){const u=r*l,m=r*c,v=o*l,b=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+b,t[5]=r*h,t[9]=m*p-v,t[2]=v*p-m,t[6]=o*h,t[10]=b*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ru,e,ou)}lookAt(e,t,n){const s=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Un.crossVectors(n,Wt),Un.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Un.crossVectors(n,Wt)),Un.normalize(),Ss.crossVectors(Wt,Un),s[0]=Un.x,s[4]=Ss.x,s[8]=Wt.x,s[1]=Un.y,s[5]=Ss.y,s[9]=Wt.y,s[2]=Un.z,s[6]=Ss.z,s[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],m=n[13],v=n[2],b=n[6],x=n[10],f=n[14],w=n[3],N=n[7],M=n[11],E=n[15],y=s[0],R=s[4],_=s[8],T=s[12],C=s[1],L=s[5],F=s[9],z=s[13],I=s[2],V=s[6],j=s[10],Y=s[14],ie=s[3],W=s[7],Z=s[11],ee=s[15];return a[0]=r*y+o*C+l*I+c*ie,a[4]=r*R+o*L+l*V+c*W,a[8]=r*_+o*F+l*j+c*Z,a[12]=r*T+o*z+l*Y+c*ee,a[1]=h*y+p*C+u*I+m*ie,a[5]=h*R+p*L+u*V+m*W,a[9]=h*_+p*F+u*j+m*Z,a[13]=h*T+p*z+u*Y+m*ee,a[2]=v*y+b*C+x*I+f*ie,a[6]=v*R+b*L+x*V+f*W,a[10]=v*_+b*F+x*j+f*Z,a[14]=v*T+b*z+x*Y+f*ee,a[3]=w*y+N*C+M*I+E*ie,a[7]=w*R+N*L+M*V+E*W,a[11]=w*_+N*F+M*j+E*Z,a[15]=w*T+N*z+M*Y+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],m=e[14],v=e[3],b=e[7],x=e[11],f=e[15],w=l*m-c*u,N=o*m-c*p,M=o*u-l*p,E=r*m-c*h,y=r*u-l*h,R=r*p-o*h;return t*(b*w-x*N+f*M)-n*(v*w-x*E+f*y)+s*(v*N-b*E+f*R)-a*(v*M-b*y+x*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-n*(a*h-o*l)+s*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],m=e[11],v=e[12],b=e[13],x=e[14],f=e[15],w=t*o-n*r,N=t*l-s*r,M=t*c-a*r,E=n*l-s*o,y=n*c-a*o,R=s*c-a*l,_=h*b-p*v,T=h*x-u*v,C=h*f-m*v,L=p*x-u*b,F=p*f-m*b,z=u*f-m*x,I=w*z-N*F+M*L+E*C-y*T+R*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return e[0]=(o*z-l*F+c*L)*V,e[1]=(s*F-n*z-a*L)*V,e[2]=(b*R-x*y+f*E)*V,e[3]=(u*y-p*R-m*E)*V,e[4]=(l*C-r*z-c*T)*V,e[5]=(t*z-s*C+a*T)*V,e[6]=(x*M-v*R-f*N)*V,e[7]=(h*R-u*M+m*N)*V,e[8]=(r*F-o*C+c*_)*V,e[9]=(n*C-t*F-a*_)*V,e[10]=(v*y-b*M+f*w)*V,e[11]=(p*M-h*y-m*w)*V,e[12]=(o*T-r*L-l*_)*V,e[13]=(t*L-n*T+s*_)*V,e[14]=(b*N-v*E-x*w)*V,e[15]=(h*E-p*N+u*w)*V,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,p=o+o,u=a*c,m=a*h,v=a*p,b=r*h,x=r*p,f=o*p,w=l*c,N=l*h,M=l*p,E=n.x,y=n.y,R=n.z;return s[0]=(1-(b+f))*E,s[1]=(m+M)*E,s[2]=(v-N)*E,s[3]=0,s[4]=(m-M)*y,s[5]=(1-(u+f))*y,s[6]=(x+w)*y,s[7]=0,s[8]=(v+N)*R,s[9]=(x-w)*R,s[10]=(1-(u+b))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=di.set(s[0],s[1],s[2]).length();const o=di.set(s[4],s[5],s[6]).length(),l=di.set(s[8],s[9],s[10]).length();a<0&&(r=-r),tn.copy(this);const c=1/r,h=1/o,p=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=p,tn.elements[9]*=p,tn.elements[10]*=p,t.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,a,r,o=_n,l=!1){const c=this.elements,h=2*a/(t-e),p=2*a/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s);let v,b;if(l)v=a/(r-a),b=r*a/(r-a);else if(o===_n)v=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===ns)v=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=_n,l=!1){const c=this.elements,h=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s);let v,b;if(l)v=1/(r-a),b=r/(r-a);else if(o===_n)v=-2/(r-a),b=-(r+a)/(r-a);else if(o===ns)v=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};na.prototype.isMatrix4=!0;let ft=na;const di=new G,tn=new ft,ru=new G(0,0,0),ou=new G(1,1,1),Un=new G,Ss=new G,Wt=new G,Ro=new ft,Co=new Di;class Wn{constructor(e=0,t=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Co.setFromEuler(this),this.setFromQuaternion(Co,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lu=0;const No=new G,ui=new Di,yn=new ft,Ms=new G,ki=new G,cu=new G,du=new Di,Io=new G(1,0,0),Do=new G(0,1,0),Po=new G(0,0,1),Lo={type:"added"},uu={type:"removed"},hi={type:"childadded",child:null},Sa={type:"childremoved",child:null};class Rt extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new G,t=new Wn,n=new Di,s=new G(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Pe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Io,e)}rotateY(e){return this.rotateOnAxis(Do,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return No.copy(e).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Io,e)}translateY(e){return this.translateOnAxis(Do,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ki,Ms,this.up):yn.lookAt(Ms,ki,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(yn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lo),hi.child=e,this.dispatchEvent(hi),hi.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uu),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lo),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,cu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,du,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),p=r(e.shapes),u=r(e.skeletons),m=r(e.animations),v=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new G(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hu={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,n),f=this._getHandJoint(c,b);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&u>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},bs={h:0,s:0,l:0};function ba(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Wr(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=ba(r,a,e+1/3),this.g=ba(r,a,e),this.b=ba(r,a,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function n(a){a!==void 0&&parseFloat(a)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=ql[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Xe.workingToColorSpace(It.copy(this),e),Math.round(Ve(It.r*255,0,255))*65536+Math.round(Ve(It.g*255,0,255))*256+Math.round(Ve(It.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(It.copy(this),t);const n=It.r,s=It.g,a=It.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case n:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-n)/p+2;break;case a:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Qt){Xe.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(bs);const n=$i(Fn.h,bs.h,t),s=$i(Fn.s,bs.s,t),a=$i(Fn.l,bs.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new ze;ze.NAMES=ql;class jr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new jr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fu extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nn=new G,En=new G,ya=new G,Tn=new G,fi=new G,pi=new G,Uo=new G,Ea=new G,Ta=new G,wa=new G,Aa=new ht,Ra=new ht,Ca=new ht;class an{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){nn.subVectors(s,t),En.subVectors(n,t),ya.subVectors(e,t);const r=nn.dot(nn),o=nn.dot(En),l=nn.dot(ya),c=En.dot(En),h=En.dot(ya),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;const u=1/p,m=(c*l-o*h)*u,v=(r*h-o*l)*u;return a.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Tn.x),l.addScaledVector(r,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(e,t),Ra.fromBufferAttribute(e,n),Ca.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Aa,a.x),r.addScaledVector(Ra,a.y),r.addScaledVector(Ca,a.z),r}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),En.subVectors(e,t),nn.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),nn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;fi.subVectors(s,n),pi.subVectors(a,n),Ea.subVectors(e,n);const l=fi.dot(Ea),c=pi.dot(Ea);if(l<=0&&c<=0)return t.copy(n);Ta.subVectors(e,s);const h=fi.dot(Ta),p=pi.dot(Ta);if(h>=0&&p<=h)return t.copy(s);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(fi,r);wa.subVectors(e,a);const m=fi.dot(wa),v=pi.dot(wa);if(v>=0&&m<=v)return t.copy(a);const b=m*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(pi,o);const x=h*v-m*p;if(x<=0&&p-h>=0&&m-v>=0)return Uo.subVectors(a,s),o=(p-h)/(p-h+(m-v)),t.copy(s).addScaledVector(Uo,o);const f=1/(x+b+u);return r=b*f,o=u*f,t.copy(n).addScaledVector(fi,r).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class as{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,sn):sn.fromBufferAttribute(a,r),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),Es.subVectors(this.max,zi),mi.subVectors(e.a,zi),gi.subVectors(e.b,zi),xi.subVectors(e.c,zi),On.subVectors(gi,mi),Bn.subVectors(xi,gi),jn.subVectors(mi,xi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-jn.z,jn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,jn.z,0,-jn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-jn.y,jn.x,0];return!Na(t,mi,gi,xi,Es)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,mi,gi,xi,Es))?!1:(Ts.crossVectors(On,Bn),t=[Ts.x,Ts.y,Ts.z],Na(t,mi,gi,xi,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new G,new G,new G,new G,new G,new G,new G,new G],sn=new G,ys=new as,mi=new G,gi=new G,xi=new G,On=new G,Bn=new G,jn=new G,zi=new G,Es=new G,Ts=new G,Yn=new G;function Na(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Yn.fromArray(i,a);const o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _t=new G,ws=new je;let pu=0;class ln extends ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pd,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class $l extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kl extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}const mu=new as,Gi=new G,Ia=new G;class sa{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mu.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(Ia)),this.expandByPoint(Gi.copy(e.center).sub(Ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gu=0;const Jt=new ft,Da=new Rt,_i=new G,Xt=new as,Vi=new as,Et=new G;class Vt extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Kl:$l)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Pe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Xt.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Xt.min,Vi.min),Xt.expandByPoint(Et),Et.addVectors(Xt.max,Vi.max),Xt.expandByPoint(Et)):(Xt.expandByPoint(Vi.min),Xt.expandByPoint(Vi.max))}Xt.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Et.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(e,c),Et.add(_i)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new G,l[_]=new G;const c=new G,h=new G,p=new G,u=new je,m=new je,v=new je,b=new G,x=new G;function f(_,T,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),p.fromBufferAttribute(n,C),u.fromBufferAttribute(a,_),m.fromBufferAttribute(a,T),v.fromBufferAttribute(a,C),h.sub(c),p.sub(c),m.sub(u),v.sub(u);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(b.copy(h).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(L),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(L),o[_].add(b),o[T].add(b),o[C].add(b),l[_].add(x),l[T].add(x),l[C].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,T=w.length;_<T;++_){const C=w[_],L=C.start,F=C.count;for(let z=L,I=L+F;z<I;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const N=new G,M=new G,E=new G,y=new G;function R(_){E.fromBufferAttribute(s,_),y.copy(E);const T=o[_];N.copy(T),N.sub(E.multiplyScalar(E.dot(T))).normalize(),M.crossVectors(y,T);const L=M.dot(l[_])<0?-1:1;r.setXYZW(_,N.x,N.y,N.z,L)}for(let _=0,T=w.length;_<T;++_){const C=w[_],L=C.start,F=C.count;for(let z=L,I=L+F;z<I;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new G,a=new G,r=new G,o=new G,l=new G,c=new G,h=new G,p=new G;if(e)for(let u=0,m=e.count;u<m;u+=3){const v=e.getX(u+0),b=e.getX(u+1),x=e.getX(u+2);s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,b),r.fromBufferAttribute(t,x),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h);let m=0,v=0;for(let b=0,x=l.length;b<x;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*h;for(let f=0;f<h;f++)u[v++]=c[m++]}return new ln(u,h,p)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){const u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],p=a[c];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pa=new G,xu=new G,_u=new Pe;class zn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pa.subVectors(n,t).cross(xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Pa),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_u.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let vu=0;class Pi extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Yi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const An=new G,La=new G,As=new G,Rs=new G;class Zl{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){La.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Rs.copy(this.origin).sub(La);const a=e.distanceTo(t)*.5,r=-this.direction.dot(As),o=Rs.dot(this.direction),l=-Rs.dot(As),c=Rs.lengthSq(),h=Math.abs(1-r*r);let p,u,m,v;if(h>0)if(p=r*l-o,u=r*o-l,v=a*h,p>=0)if(u>=-v)if(u<=v){const b=1/h;p*=b,u*=b,m=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),m=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),m=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),m=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),m=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(La).addScaledVector(As,u),m}intersectSphere(e,t){if(e.radius<0)return null;An.subVectors(e.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-r.x,u=e.y-r.y,m=e.z-r.z,v=t.x-r.x,b=t.y-r.y,x=t.z-r.z,f=n.x-r.x,w=n.y-r.y,N=n.z-r.z,M=Math.abs(l),E=Math.abs(c),y=Math.abs(h);let R,_,T,C,L,F,z,I,V,j,Y,ie;if(M>=E&&M>=y?(T=l,F=p,V=v,ie=f,l>=0?(R=c,_=h,C=u,L=m,z=b,I=x,j=w,Y=N):(R=h,_=c,C=m,L=u,z=x,I=b,j=N,Y=w)):E>=y?(T=c,F=u,V=b,ie=w,c>=0?(R=h,_=l,C=m,L=p,z=x,I=v,j=N,Y=f):(R=l,_=h,C=p,L=m,z=v,I=x,j=f,Y=N)):(T=h,F=m,V=x,ie=N,h>=0?(R=l,_=c,C=p,L=u,z=v,I=b,j=f,Y=w):(R=c,_=l,C=u,L=p,z=b,I=v,j=w,Y=f)),T===0)return null;const W=R/T,Z=_/T,ee=1/T,be=C-W*F,Te=L-Z*F,et=z-W*V,Ge=I-Z*V,qe=j-W*ie,K=Y-Z*ie,te=qe*Ge-K*et,me=be*K-Te*qe,Ne=et*Te-Ge*be;if(s){if(te<0||me<0||Ne<0)return null}else if((te<0||me<0||Ne<0)&&(te>0||me>0||Ne>0))return null;const _e=te+me+Ne;if(_e===0)return null;const Ue=ee*(te*F+me*V+Ne*ie);return(_e>0?Ue<0:Ue>0)?null:this.at(Ue/_e,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qn extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fo=new ft,qn=new Zl,Cs=new sa,Oo=new G,Ns=new G,Is=new G,Ds=new G,Ua=new G,Ps=new G,Bo=new G,Ls=new G;class ct extends Rt{constructor(e=new Vt,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){Ps.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],p=a[l];h!==0&&(Ua.fromBufferAttribute(p,e),r?Ps.addScaledVector(Ua,h):Ps.addScaledVector(Ua.sub(t),h))}t.add(Ps)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(a),qn.copy(e.ray).recast(e.near),!(Cs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Cs,Oo)===null||qn.origin.distanceToSquared(Oo)>(e.far-e.near)**2))&&(Fo.copy(a).invert(),qn.copy(e.ray).applyMatrix4(Fo),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){const x=u[v],f=r[x.materialIndex],w=Math.max(x.start,m.start),N=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let M=w,E=N;M<E;M+=3){const y=o.getX(M),R=o.getX(M+1),_=o.getX(M+2);s=Us(this,f,e,n,c,h,p,y,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let x=v,f=b;x<f;x+=3){const w=o.getX(x),N=o.getX(x+1),M=o.getX(x+2);s=Us(this,r,e,n,c,h,p,w,N,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){const x=u[v],f=r[x.materialIndex],w=Math.max(x.start,m.start),N=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=w,E=N;M<E;M+=3){const y=M,R=M+1,_=M+2;s=Us(this,f,e,n,c,h,p,y,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let x=v,f=b;x<f;x+=3){const w=x,N=x+1,M=x+2;s=Us(this,r,e,n,c,h,p,w,N,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Su(i,e,t,n,s,a,r,o){let l;if(e.side===Gt?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===ti,o),l===null)return null;Ls.copy(o),Ls.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ls);return c<t.near||c>t.far?null:{distance:c,point:Ls.clone(),object:i}}function Us(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,Ns),i.getVertexPosition(l,Is),i.getVertexPosition(c,Ds);const h=Su(i,e,t,n,Ns,Is,Ds,Bo);if(h){const p=new G;an.getBarycoord(Bo,Ns,Is,Ds,p),s&&(h.uv=an.getInterpolatedAttribute(s,o,l,c,p,new je)),a&&(h.uv1=an.getInterpolatedAttribute(a,o,l,c,p,new je)),r&&(h.normal=an.getInterpolatedAttribute(r,o,l,c,p,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new G,materialIndex:0};an.getNormal(Ns,Is,Ds,u.normal),h.face=u,h.barycoord=p}return h}class Mu extends Ot{constructor(e=null,t=1,n=1,s,a,r,o,l,c=At,h=At,p,u){super(null,r,o,l,c,h,s,a,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $n=new sa,bu=new je(.5,.5),Fs=new G;class Yr{constructor(e=new zn,t=new zn,n=new zn,s=new zn,a=new zn,r=new zn){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n,n=!1){const s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],p=a[5],u=a[6],m=a[7],v=a[8],b=a[9],x=a[10],f=a[11],w=a[12],N=a[13],M=a[14],E=a[15];if(s[0].setComponents(c-r,m-h,f-v,E-w).normalize(),s[1].setComponents(c+r,m+h,f+v,E+w).normalize(),s[2].setComponents(c+o,m+p,f+b,E+N).normalize(),s[3].setComponents(c-o,m-p,f-b,E-N).normalize(),n)s[4].setComponents(l,u,x,M).normalize(),s[5].setComponents(c-l,m-u,f-x,E-M).normalize();else if(s[4].setComponents(c-l,m-u,f-x,E-M).normalize(),t===_n)s[5].setComponents(c+l,m+u,f+x,E+M).normalize();else if(t===ns)s[5].setComponents(l,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);const t=bu.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fs.x=s.normal.x>0?e.max.x:e.min.x,Fs.y=s.normal.y>0?e.max.y:e.min.y,Fs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qr extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ko=new ft,Ir=new Zl,Os=new sa,Bs=new G;class Jl extends Rt{constructor(e=new Vt,t=new qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),Os.radius+=a,e.ray.intersectsSphere(Os)===!1)return;ko.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(ko);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let v=u,b=m;v<b;v++){const x=c.getX(v);Bs.fromBufferAttribute(p,x),zo(Bs,x,l,s,e,t,this)}}else{const u=Math.max(0,r.start),m=Math.min(p.count,r.start+r.count);for(let v=u,b=m;v<b;v++)Bs.fromBufferAttribute(p,v),zo(Bs,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function zo(i,e,t,n,s,a,r){const o=Ir.distanceSqToPoint(i);if(o<t){const l=new G;Ir.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Ql extends Ot{constructor(e=[],t=ni,n,s,a,r,o,l,c,h){super(e,t,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ss extends Ot{constructor(e,t,n=Sn,s,a,r,o=At,l=At,c,h=Dn,p=1){if(h!==Dn&&h!==Jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class yu extends ss{constructor(e,t=Sn,n=ni,s,a,r=At,o=At,l,c=Dn){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ec extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class si extends Vt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],p=[];let u=0,m=0;v("z","y","x",-1,-1,n,t,e,r,a,0),v("z","y","x",1,-1,n,t,-e,r,a,1),v("x","z","y",1,1,e,n,t,s,r,2),v("x","z","y",1,-1,e,n,-t,s,r,3),v("x","y","z",1,-1,e,t,n,s,a,4),v("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(p,2));function v(b,x,f,w,N,M,E,y,R,_,T){const C=M/R,L=E/_,F=M/2,z=E/2,I=y/2,V=R+1,j=_+1;let Y=0,ie=0;const W=new G;for(let Z=0;Z<j;Z++){const ee=Z*L-z;for(let be=0;be<V;be++){const Te=be*C-F;W[b]=Te*w,W[x]=ee*N,W[f]=I,c.push(W.x,W.y,W.z),W[b]=0,W[x]=0,W[f]=y>0?1:-1,h.push(W.x,W.y,W.z),p.push(be/R),p.push(1-Z/_),Y+=1}}for(let Z=0;Z<_;Z++)for(let ee=0;ee<R;ee++){const be=u+ee+V*Z,Te=u+ee+V*(Z+1),et=u+(ee+1)+V*(Z+1),Ge=u+(ee+1)+V*Z;l.push(be,Te,Ge),l.push(Te,et,Ge),ie+=6}o.addGroup(m,ie,T),m+=ie,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ai extends Vt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],p=[],u=[],m=[];let v=0;const b=[],x=n/2;let f=0;w(),r===!1&&(e>0&&N(!0),t>0&&N(!1)),this.setIndex(h),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(m,2));function w(){const M=new G,E=new G;let y=0;const R=(t-e)/n;for(let _=0;_<=a;_++){const T=[],C=_/a,L=C*(t-e)+e;for(let F=0;F<=s;F++){const z=F/s,I=z*l+o,V=Math.sin(I),j=Math.cos(I);E.x=L*V,E.y=-C*n+x,E.z=L*j,p.push(E.x,E.y,E.z),M.set(V,R,j).normalize(),u.push(M.x,M.y,M.z),m.push(z,1-C),T.push(v++)}b.push(T)}for(let _=0;_<s;_++)for(let T=0;T<a;T++){const C=b[T][_],L=b[T+1][_],F=b[T+1][_+1],z=b[T][_+1];(e>0||T!==0)&&(h.push(C,L,z),y+=3),(t>0||T!==a-1)&&(h.push(L,F,z),y+=3)}c.addGroup(f,y,0),f+=y}function N(M){const E=v,y=new je,R=new G;let _=0;const T=M===!0?e:t,C=M===!0?1:-1;for(let F=1;F<=s;F++)p.push(0,x*C,0),u.push(0,C,0),m.push(.5,.5),v++;const L=v;for(let F=0;F<=s;F++){const I=F/s*l+o,V=Math.cos(I),j=Math.sin(I);R.x=T*j,R.y=x*C,R.z=T*V,p.push(R.x,R.y,R.z),u.push(0,C,0),y.x=V*.5+.5,y.y=j*.5*C+.5,m.push(y.x,y.y),v++}for(let F=0;F<s;F++){const z=E+F,I=L+F;M===!0?h.push(I,I+1,z):h.push(I+1,I,z),_+=3}c.addGroup(f,_,M===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $r extends Ai{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new $r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ei extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=e/o,u=t/l,m=[],v=[],b=[],x=[];for(let f=0;f<h;f++){const w=f*u-r;for(let N=0;N<c;N++){const M=N*p-a;v.push(M,-w,0),b.push(0,0,1),x.push(N/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const N=w+c*f,M=w+c*(f+1),E=w+1+c*(f+1),y=w+1+c*f;m.push(N,M,y),m.push(M,E,y)}this.setIndex(m),this.setAttribute("position",new Bt(v,3)),this.setAttribute("normal",new Bt(b,3)),this.setAttribute("uv",new Bt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ki extends Vt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],p=new G,u=new G,m=[],v=[],b=[],x=[];for(let f=0;f<=n;f++){const w=[],N=f/n,M=r+N*o,E=e*Math.cos(M),y=Math.sqrt(e*e-E*E);let R=0;f===0&&r===0?R=.5/t:f===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const T=_/t,C=s+T*a;p.x=-y*Math.cos(C),p.y=E,p.z=y*Math.sin(C),v.push(p.x,p.y,p.z),u.copy(p).normalize(),b.push(u.x,u.y,u.z),x.push(T+R,1-N),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const N=h[f][w+1],M=h[f][w],E=h[f+1][w],y=h[f+1][w+1];(f!==0||r>0)&&m.push(N,M,y),(f!==n-1||l<Math.PI)&&m.push(M,E,y)}this.setIndex(m),this.setAttribute("position",new Bt(v,3)),this.setAttribute("normal",new Bt(b,3)),this.setAttribute("uv",new Bt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ci(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Go(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Go(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Ci(i[t]);for(const s in n)e[s]=n[s]}return e}function Go(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Eu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Tu={clone:Ci,merge:Ft};var wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=Eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new je().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ft().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ru extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fa extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cu extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nu extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kr extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Oa=new ft,Vo=new G,Ho=new G;class nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vo),Ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ho),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Oa,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===ns||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ks=new G,zs=new Di,fn=new G;class ic extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ks,zs,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ks,zs,fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ks,zs,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ks,zs,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kn=new G,Wo=new je,Xo=new je;class jt extends ic{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,Wo,Xo),t.subVectors(Xo,Wo)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Iu extends nc{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}}class jo extends Kr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Iu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Zr extends ic{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Du extends nc{constructor(){super(new Zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pu extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Du}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Lu extends Kr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const vi=-90,Si=1;class Uu extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(vi,Si,e,t);s.layers=this.layers,this.add(s);const a=new jt(vi,Si,e,t);a.layers=this.layers,this.add(a);const r=new jt(vi,Si,e,t);r.layers=this.layers,this.add(r);const o=new jt(vi,Si,e,t);o.layers=this.layers,this.add(o);const l=new jt(vi,Si,e,t);l.layers=this.layers,this.add(l);const c=new jt(vi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Fu extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ou{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const io=class io{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=s,this}};io.prototype.isMatrix2=!0;let Yo=io;function qo(i,e,t,n){const s=Bu(n);switch(t){case Vl:return i*e;case Wl:return i*e/s.components*s.byteLength;case kr:return i*e/s.components*s.byteLength;case ii:return i*e*2/s.components*s.byteLength;case zr:return i*e*2/s.components*s.byteLength;case Hl:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case Gr:return i*e*4/s.components*s.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tr:case ir:return Math.max(i,16)*Math.max(e,8)/4;case er:case nr:return Math.max(i,8)*Math.max(e,8)/2;case sr:case ar:case or:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rr:case Zs:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ur:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case hr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _r:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case br:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Er:case Tr:case wr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ar:case Rr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Js:case Cr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bu(i){switch(i){case Yt:case Bl:return{byteLength:1,components:1};case es:case kl:case Mn:return{byteLength:2,components:1};case Or:case Br:return{byteLength:2,components:4};case Sn:case Fr:case xn:return{byteLength:4,components:1};case zl:case Gl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lr}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lr);function sc(){let i=null,e=!1,t=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ku(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((m,v)=>m.start-v.start);let u=0;for(let m=1;m<p.length;m++){const v=p[u],b=p[m];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++u,p[u]=b)}p.length=u+1;for(let m=0,v=p.length;m<v;m++){const b=p[m];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gu=`#ifdef USE_ALPHAHASH
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
#endif`,Vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ju=`#ifdef USE_AOMAP
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
#endif`,Yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qu=`#ifdef USE_BATCHING
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
#endif`,$u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qu=`#ifdef USE_IRIDESCENCE
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
#endif`,eh=`#ifdef USE_BUMPMAP
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
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ah=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ch=`#define PI 3.141592653589793
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
} // validated`,dh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uh=`vec3 transformedNormal = objectNormal;
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
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",xh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_h=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bh=`#ifdef USE_ENVMAP
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
#endif`,yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Th=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ah=`#ifdef USE_GRADIENTMAP
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
}`,Rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ch=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ih=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dh=`#ifdef USE_ENVMAP
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
#endif`,Ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oh=`PhysicalMaterial material;
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
#endif`,Bh=`uniform sampler2D dfgLUT;
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
}`,kh=`
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
#endif`,zh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$h=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kh=`#if defined( USE_POINTS_UV )
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
#endif`,Zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ef=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
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
#endif`,sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,df=`#ifdef USE_NORMALMAP
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
#endif`,uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wf=`float getShadowMask() {
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
}`,Af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rf=`#ifdef USE_SKINNING
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
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nf=`#ifdef USE_SKINNING
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
#endif`,If=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
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
#endif`,Ff=`#ifdef USE_TRANSMISSION
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
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vf=`uniform sampler2D t2D;
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`#include <common>
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
}`,qf=`#if DEPTH_PACKING == 3200
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
}`,$f=`#define DISTANCE
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
}`,Kf=`#define DISTANCE
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
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
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
}`,ep=`uniform vec3 diffuse;
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
}`,tp=`#include <common>
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
}`,np=`uniform vec3 diffuse;
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
}`,ip=`#define LAMBERT
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
}`,sp=`#define LAMBERT
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
}`,ap=`#define MATCAP
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
}`,rp=`#define MATCAP
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
}`,op=`#define NORMAL
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
}`,lp=`#define NORMAL
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
}`,cp=`#define PHONG
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
}`,dp=`#define PHONG
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
}`,up=`#define STANDARD
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
}`,hp=`#define STANDARD
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
}`,fp=`#define TOON
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
}`,pp=`#define TOON
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
}`,mp=`uniform float size;
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
}`,gp=`uniform vec3 diffuse;
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
}`,xp=`#include <common>
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
}`,_p=`uniform vec3 color;
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
}`,vp=`uniform float rotation;
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
}`,Sp=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:zu,alphahash_pars_fragment:Gu,alphamap_fragment:Vu,alphamap_pars_fragment:Hu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:ju,aomap_pars_fragment:Yu,batching_pars_vertex:qu,batching_vertex:$u,begin_vertex:Ku,beginnormal_vertex:Zu,bsdfs:Ju,iridescence_fragment:Qu,bumpmap_pars_fragment:eh,clipping_planes_fragment:th,clipping_planes_pars_fragment:nh,clipping_planes_pars_vertex:ih,clipping_planes_vertex:sh,color_fragment:ah,color_pars_fragment:rh,color_pars_vertex:oh,color_vertex:lh,common:ch,cube_uv_reflection_fragment:dh,defaultnormal_vertex:uh,displacementmap_pars_vertex:hh,displacementmap_vertex:fh,emissivemap_fragment:ph,emissivemap_pars_fragment:mh,colorspace_fragment:gh,colorspace_pars_fragment:xh,envmap_fragment:_h,envmap_common_pars_fragment:vh,envmap_pars_fragment:Sh,envmap_pars_vertex:Mh,envmap_physical_pars_fragment:Dh,envmap_vertex:bh,fog_vertex:yh,fog_pars_vertex:Eh,fog_fragment:Th,fog_pars_fragment:wh,gradientmap_pars_fragment:Ah,lightmap_pars_fragment:Rh,lights_lambert_fragment:Ch,lights_lambert_pars_fragment:Nh,lights_pars_begin:Ih,lights_toon_fragment:Ph,lights_toon_pars_fragment:Lh,lights_phong_fragment:Uh,lights_phong_pars_fragment:Fh,lights_physical_fragment:Oh,lights_physical_pars_fragment:Bh,lights_fragment_begin:kh,lights_fragment_maps:zh,lights_fragment_end:Gh,lightprobes_pars_fragment:Vh,logdepthbuf_fragment:Hh,logdepthbuf_pars_fragment:Wh,logdepthbuf_pars_vertex:Xh,logdepthbuf_vertex:jh,map_fragment:Yh,map_pars_fragment:qh,map_particle_fragment:$h,map_particle_pars_fragment:Kh,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:Jh,morphinstance_vertex:Qh,morphcolor_vertex:ef,morphnormal_vertex:tf,morphtarget_pars_vertex:nf,morphtarget_vertex:sf,normal_fragment_begin:af,normal_fragment_maps:rf,normal_pars_fragment:of,normal_pars_vertex:lf,normal_vertex:cf,normalmap_pars_fragment:df,clearcoat_normal_fragment_begin:uf,clearcoat_normal_fragment_maps:hf,clearcoat_pars_fragment:ff,iridescence_pars_fragment:pf,opaque_fragment:mf,packing:gf,premultiplied_alpha_fragment:xf,project_vertex:_f,dithering_fragment:vf,dithering_pars_fragment:Sf,roughnessmap_fragment:Mf,roughnessmap_pars_fragment:bf,shadowmap_pars_fragment:yf,shadowmap_pars_vertex:Ef,shadowmap_vertex:Tf,shadowmask_pars_fragment:wf,skinbase_vertex:Af,skinning_pars_vertex:Rf,skinning_vertex:Cf,skinnormal_vertex:Nf,specularmap_fragment:If,specularmap_pars_fragment:Df,tonemapping_fragment:Pf,tonemapping_pars_fragment:Lf,transmission_fragment:Uf,transmission_pars_fragment:Ff,uv_pars_fragment:Of,uv_pars_vertex:Bf,uv_vertex:kf,worldpos_vertex:zf,background_vert:Gf,background_frag:Vf,backgroundCube_vert:Hf,backgroundCube_frag:Wf,cube_vert:Xf,cube_frag:jf,depth_vert:Yf,depth_frag:qf,distance_vert:$f,distance_frag:Kf,equirect_vert:Zf,equirect_frag:Jf,linedashed_vert:Qf,linedashed_frag:ep,meshbasic_vert:tp,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:sp,meshmatcap_vert:ap,meshmatcap_frag:rp,meshnormal_vert:op,meshnormal_frag:lp,meshphong_vert:cp,meshphong_frag:dp,meshphysical_vert:up,meshphysical_frag:hp,meshtoon_vert:fp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:xp,shadow_frag:_p,sprite_vert:vp,sprite_frag:Sp},fe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},mn={basic:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ft([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ft([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ft([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ft([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ft([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ft([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ft([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ft([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Ft([fe.common,fe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Ft([fe.lights,fe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};mn.physical={uniforms:Ft([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Gs={r:0,b:0,g:0},Mp=new ft,ac=new Pe;ac.set(-1,0,0,0,1,0,0,0,1);function bp(i,e,t,n,s,a){const r=new ze(0);let o=s===!0?0:1,l,c,h=null,p=0,u=null;function m(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const M=w.backgroundBlurriness>0;N=e.get(N,M)}return N}function v(w){let N=!1;const M=m(w);M===null?x(r,o):M&&M.isColor&&(x(M,1),N=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(w,N){const M=m(N);M&&(M.isCubeTexture||M.mapping===ia)?(c===void 0&&(c=new ct(new si(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ci(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Mp.makeRotationFromEuler(N.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ac),c.material.toneMapped=Xe.getTransfer(M.colorSpace)!==at,(h!==M||p!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ct(new ei(2,2),new cn({name:"BackgroundMaterial",uniforms:Ci(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function x(w,N){w.getRGB(Gs,tc(i)),t.buffers.color.setClear(Gs.r,Gs.g,Gs.b,N,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(w,N=1){r.set(w),o=N,x(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,x(r,o)},render:v,addToRenderList:b,dispose:f}}function yp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let a=s,r=!1;function o(L,F,z,I,V){let j=!1;const Y=p(L,I,z,F);a!==Y&&(a=Y,c(a.object)),j=m(L,I,z,V),j&&v(L,I,z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,M(L,F,z,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function p(L,F,z,I){const V=I.wireframe===!0;let j=n[F.id];j===void 0&&(j={},n[F.id]=j);const Y=L.isInstancedMesh===!0?L.id:0;let ie=j[Y];ie===void 0&&(ie={},j[Y]=ie);let W=ie[z.id];W===void 0&&(W={},ie[z.id]=W);let Z=W[V];return Z===void 0&&(Z=u(l()),W[V]=Z),Z}function u(L){const F=[],z=[],I=[];for(let V=0;V<t;V++)F[V]=0,z[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:I,object:L,attributes:{},index:null}}function m(L,F,z,I){const V=a.attributes,j=F.attributes;let Y=0;const ie=z.getAttributes();for(const W in ie)if(ie[W].location>=0){const ee=V[W];let be=j[W];if(be===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),ee===void 0||ee.attribute!==be||be&&ee.data!==be.data)return!0;Y++}return a.attributesNum!==Y||a.index!==I}function v(L,F,z,I){const V={},j=F.attributes;let Y=0;const ie=z.getAttributes();for(const W in ie)if(ie[W].location>=0){let ee=j[W];ee===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const be={};be.attribute=ee,ee&&ee.data&&(be.data=ee.data),V[W]=be,Y++}a.attributes=V,a.attributesNum=Y,a.index=I}function b(){const L=a.newAttributes;for(let F=0,z=L.length;F<z;F++)L[F]=0}function x(L){f(L,0)}function f(L,F){const z=a.newAttributes,I=a.enabledAttributes,V=a.attributeDivisors;z[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),V[L]!==F&&(i.vertexAttribDivisor(L,F),V[L]=F)}function w(){const L=a.newAttributes,F=a.enabledAttributes;for(let z=0,I=F.length;z<I;z++)F[z]!==L[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function N(L,F,z,I,V,j,Y){Y===!0?i.vertexAttribIPointer(L,F,z,V,j):i.vertexAttribPointer(L,F,z,I,V,j)}function M(L,F,z,I){b();const V=I.attributes,j=z.getAttributes(),Y=F.defaultAttributeValues;for(const ie in j){const W=j[ie];if(W.location>=0){let Z=V[ie];if(Z===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const ee=Z.normalized,be=Z.itemSize,Te=e.get(Z);if(Te===void 0)continue;const et=Te.buffer,Ge=Te.type,qe=Te.bytesPerElement,K=Ge===i.INT||Ge===i.UNSIGNED_INT||Z.gpuType===Fr;if(Z.isInterleavedBufferAttribute){const te=Z.data,me=te.stride,Ne=Z.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<W.locationSize;_e++)f(W.location+_e,te.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<W.locationSize;_e++)x(W.location+_e);i.bindBuffer(i.ARRAY_BUFFER,et);for(let _e=0;_e<W.locationSize;_e++)N(W.location+_e,be/W.locationSize,Ge,ee,me*qe,(Ne+be/W.locationSize*_e)*qe,K)}else{if(Z.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)f(W.location+te,Z.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let te=0;te<W.locationSize;te++)x(W.location+te);i.bindBuffer(i.ARRAY_BUFFER,et);for(let te=0;te<W.locationSize;te++)N(W.location+te,be/W.locationSize,Ge,ee,be*qe,be/W.locationSize*te*qe,K)}}else if(Y!==void 0){const ee=Y[ie];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}w()}function E(){T();for(const L in n){const F=n[L];for(const z in F){const I=F[z];for(const V in I){const j=I[V];for(const Y in j)h(j[Y].object),delete j[Y];delete I[V]}}delete n[L]}}function y(L){if(n[L.id]===void 0)return;const F=n[L.id];for(const z in F){const I=F[z];for(const V in I){const j=I[V];for(const Y in j)h(j[Y].object),delete j[Y];delete I[V]}}delete n[L.id]}function R(L){for(const F in n){const z=n[F];for(const I in z){const V=z[I];if(V[L.id]===void 0)continue;const j=V[L.id];for(const Y in j)h(j[Y].object),delete j[Y];delete V[L.id]}}}function _(L){for(const F in n){const z=n[F],I=L.isInstancedMesh===!0?L.id:0,V=z[I];if(V!==void 0){for(const j in V){const Y=V[j];for(const ie in Y)h(Y[ie].object),delete Y[ie];delete V[j]}delete z[I],Object.keys(z).length===0&&delete n[F]}}}function T(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:x,disableUnusedAttributes:w}}function Ep(i,e,t){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];t.update(u,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Tp(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yt&&R!==xn&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:M,maxSamples:E,samples:y}}function wp(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new zn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,m){const v=p.clippingPlanes,b=p.clipIntersection,x=p.clipShadows,f=i.get(p);if(!s||v===null||v.length===0||a&&!x)a?h(null):c();else{const w=a?0:n,N=w*4;let M=f.clippingState||null;l.value=M,M=h(v,u,N,m);for(let E=0;E!==N;++E)M[E]=t[E];f.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,m,v){const b=p!==null?p.length:0;let x=null;if(b!==0){if(x=l.value,v!==!0||x===null){const f=m+b*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(x===null||x.length<f)&&(x=new Float32Array(f));for(let N=0,M=m;N!==b;++N,M+=4)r.copy(p[N]).applyMatrix4(w,o),r.normal.toArray(x,M),x[M+3]=r.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const Ei=4,Ap=6,Rp=20,Cp=256,Hi=new Zr,$o=new ze;let Ba=null,ka=0,za=0,Ga=!1;const Np=new G,Kn=new G;class Ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){const{size:r=256,position:o=Np}=a;Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,ka,za),this._renderer.xr.enabled=Ga,e.scissorTest=!1,Mi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Mn,format:rn,colorSpace:Qs,depthBuffer:!1},s=Zo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ip(a)),this._blurMaterial=Pp(a,e,t),this._ggxMaterial=Dp(a,e,t)}return s}_compileMaterial(e){const t=new ct(new Vt,e);this._renderer.compile(t,Hi)}_sceneToCubeUV(e,t,n,s,a){const l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor($o),p.toneMapping=vn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new si,new Qn({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let f=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,f=!0):(x.color.copy($o),f=!0);for(let N=0;N<6;N++){const M=N%3;M===0?(l.up.set(0,c[N],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[N],a.y,a.z)):M===1?(l.up.set(0,0,c[N]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[N],a.z)):(l.up.set(0,c[N],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[N]));const E=this._cubeSize;Mi(s,M*E,N>2?E:0,E,E),p.setRenderTarget(s),f&&p.render(b,l),p.render(e,l)}p.toneMapping=m,p.autoClear=u,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ni||e.mapping===Ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Mi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Hi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,m=p*u,{_lodMax:v}=this,b=this._sizeLods[n],x=3*b*(n>v-Ei?n-v+Ei:0),f=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,Mi(a,x,f,3*b,2*b),s.setRenderTarget(a),s.render(o,Hi),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-n,Mi(e,x,f,3*b,2*b),s.setRenderTarget(e),s.render(o,Hi)}_blur(e,t,n,s){const a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,n,r),this._blurPass(a,e,n,n,r)}_blurPass(e,t,n,s,a){const r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],p=3*h*(s>this._lodMax-Ei?s-this._lodMax+Ei:0),u=4*(this._cubeSize-h);Mi(t,p,u,3*h,2*h),r.setRenderTarget(t),r.render(l,Hi)}}function Ip(i){const e=[],t=[];let n=i;const s=i-Ei+1+Ap;for(let a=0;a<s;a++){const r=Math.pow(2,n);e.push(r);const o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,v=new Float32Array(m*u*p),b=new Float32Array(m*u*p);for(let f=0;f<p;f++){const w=f%3*2/3-1,N=f>2?0:-1,M=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];v.set(M,m*u*f);for(let E=0;E<u;E++){const y=h[E*2]*2-1,R=h[E*2+1]*2-1;f===0?Kn.set(1,R,y):f===1?Kn.set(-y,1,-R):f===2?Kn.set(-y,R,1):f===3?Kn.set(-1,R,-y):f===4?Kn.set(-y,-1,R):Kn.set(y,R,-1),Kn.toArray(b,(f*u+E)*m)}}const x=new Vt;x.setAttribute("position",new ln(v,m)),x.setAttribute("outputDirection",new ln(b,m)),t.push(new ct(x,null)),n>Ei&&n--}return{lodMeshes:t,sizeLods:e}}function Zo(i,e,t){const n=new on(i,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dp(i,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:aa(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Pp(i,e,t){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:Rp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:aa(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Jo(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Qo(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function aa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class rc extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ql(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new si(5,5,5),a=new cn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Nn});a.uniforms.tEquirect.value=t;const r=new ct(s,a),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Pt),new Uu(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}function Lp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?r(u):a(u)}function a(u){if(u&&u.isTexture){const m=u.mapping;if(m===ha||m===fa)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const b=new rc(v.height);return b.fromEquirectangularTexture(i,u),e.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const m=u.mapping,v=m===ha||m===fa,b=m===ni||m===Ri;if(v||b){let x=t.get(u);const f=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Ko(i)),x=v?n.fromEquirectangular(u,x):n.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),x.texture;if(x!==void 0)return x.texture;{const w=u.image;return v&&w&&w.height>0||b&&w&&l(w)?(n===null&&(n=new Ko(i)),x=v?n.fromEquirectangular(u):n.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function o(u,m){return m===ha?u.mapping=ni:m===fa&&(u.mapping=Ri),u}function l(u){let m=0;const v=6;for(let b=0;b<v;b++)u[b]!==void 0&&m++;return m===v}function c(u){const m=u.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Up(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ti("WebGLRenderer: "+n+" extension not supported."),s}}}function Fp(i,e,t,n){const s={},a=new WeakMap;function r(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete s[u.id];const m=a.get(u);m&&(e.remove(m),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function c(p){const u=[],m=p.index,v=p.attributes.position;let b=0;if(v===void 0)return;if(m!==null){const w=m.array;b=m.version;for(let N=0,M=w.length;N<M;N+=3){const E=w[N+0],y=w[N+1],R=w[N+2];u.push(E,y,y,R,R,E)}}else{const w=v.array;b=v.version;for(let N=0,M=w.length/3-1;N<M;N+=3){const E=N+0,y=N+1,R=N+2;u.push(E,y,y,R,R,E)}}const x=new(v.count>=65535?Kl:$l)(u,1);x.version=b;const f=a.get(p);f&&e.remove(f),a.set(p,x)}function h(p){const u=a.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Op(i,e,t){let n;function s(p){n=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){i.drawElements(n,u,a,p*r),t.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,a,p*r,m),t.update(u,n,m))}function h(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,p,0,m);let b=0;for(let x=0;x<m;x++)b+=u[x];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:Ze("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kp(i,e,t){const n=new WeakMap,s=new ht;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==p){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let N=0;m===!0&&(N=1),v===!0&&(N=2),b===!0&&(N=3);let M=o.attributes.position.count*N,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const y=new Float32Array(M*E*4*p),R=new jl(y,M,E,p);R.type=xn,R.needsUpdate=!0;const _=N*4;for(let C=0;C<p;C++){const L=x[C],F=f[C],z=w[C],I=M*E*4*C;for(let V=0;V<L.count;V++){const j=V*_;m===!0&&(s.fromBufferAttribute(L,V),y[I+j+0]=s.x,y[I+j+1]=s.y,y[I+j+2]=s.z,y[I+j+3]=0),v===!0&&(s.fromBufferAttribute(F,V),y[I+j+4]=s.x,y[I+j+5]=s.y,y[I+j+6]=s.z,y[I+j+7]=0),b===!0&&(s.fromBufferAttribute(z,V),y[I+j+8]=s.x,y[I+j+9]=s.y,y[I+j+10]=s.z,y[I+j+11]=z.itemSize===4?s.w:1)}}u={count:p,texture:R,size:new je(M,E)},n.set(o,u),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function zp(i,e,t,n,s){let a=new WeakMap;function r(c){const h=s.render.frame,p=c.geometry,u=e.get(c,p);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;a.get(m)!==h&&(m.update(),a.set(m,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const Gp={[Il]:"LINEAR_TONE_MAPPING",[Dl]:"REINHARD_TONE_MAPPING",[Pl]:"CINEON_TONE_MAPPING",[Ur]:"ACES_FILMIC_TONE_MAPPING",[Ul]:"AGX_TONE_MAPPING",[Fl]:"NEUTRAL_TONE_MAPPING",[Ll]:"CUSTOM_TONE_MAPPING"};function Vp(i,e,t,n,s,a){const r=new on(e,t,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Vt;c.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bt([0,2,0,0,2,0],2));const h=new Ru({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ct(c,h),u=new Zr(-1,1,1,-1,0,1);let m=null,v=null,b=!1,x,f=null,w=[],N=!1;this.setSize=function(M,E){r.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let y=0;y<w.length;y++){const R=w[y];R.setSize&&R.setSize(M,E)}},this.setEffects=function(M){w=M,N=w.length>0&&w[0].isRenderPass===!0;const E=r.width,y=r.height;w.length>0&&o===null&&(o=new on(E,y,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new on(E,y,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<w.length;R++){const _=w[R];_.setSize&&_.setSize(E,y)}},this.begin=function(M,E){if(b||M.toneMapping===vn&&w.length===0)return!1;if(f=E,E!==null){const y=E.width,R=E.height;(r.width!==y||r.height!==R)&&this.setSize(y,R)}return N===!1&&M.setRenderTarget(r),x=M.toneMapping,M.toneMapping=vn,!0},this.hasRenderPass=function(){return N},this.end=function(M,E){M.toneMapping=x,b=!0;let y=r,R=o;for(let _=0;_<w.length;_++){const T=w[_];T.enabled!==!1&&(T.render(M,R,y,E),T.needsSwap!==!1&&(y=R,R=R===o?l:o))}if(m!==M.outputColorSpace||v!==M.toneMapping){m=M.outputColorSpace,v=M.toneMapping,h.defines={},Xe.getTransfer(m)===at&&(h.defines.SRGB_TRANSFER="");const _=Gp[v];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(f),M.render(p,u),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const oc=new Ot,Dr=new ss(1,1),lc=new jl,cc=new au,dc=new Ql,el=[],tl=[],nl=new Float32Array(16),il=new Float32Array(9),sl=new Float32Array(4);function Li(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=el[s];if(a===void 0&&(a=new Float32Array(s),el[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ra(i,e){let t=tl[e];t===void 0&&(t=new Int32Array(e),tl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Yp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;sl.set(n),i.uniformMatrix2fv(this.addr,!1,sl),Mt(t,n)}}function qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;il.set(n),i.uniformMatrix3fv(this.addr,!1,il),Mt(t,n)}}function $p(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;nl.set(n),i.uniformMatrix4fv(this.addr,!1,nl),Mt(t,n)}}function Kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function em(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function sm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Dr.compareFunction=t.isReversedDepthBuffer()?Hr:Vr,a=Dr):a=oc,t.setTexture2D(e||a,s)}function am(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||cc,s)}function rm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||dc,s)}function om(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lc,s)}function lm(i){switch(i){case 5126:return Hp;case 35664:return Wp;case 35665:return Xp;case 35666:return jp;case 35674:return Yp;case 35675:return qp;case 35676:return $p;case 5124:case 35670:return Kp;case 35667:case 35671:return Zp;case 35668:case 35672:return Jp;case 35669:case 35673:return Qp;case 5125:return em;case 36294:return tm;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return om}}function cm(i,e){i.uniform1fv(this.addr,e)}function dm(i,e){const t=Li(e,this.size,2);i.uniform2fv(this.addr,t)}function um(i,e){const t=Li(e,this.size,3);i.uniform3fv(this.addr,t)}function hm(i,e){const t=Li(e,this.size,4);i.uniform4fv(this.addr,t)}function fm(i,e){const t=Li(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pm(i,e){const t=Li(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mm(i,e){const t=Li(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gm(i,e){i.uniform1iv(this.addr,e)}function xm(i,e){i.uniform2iv(this.addr,e)}function _m(i,e){i.uniform3iv(this.addr,e)}function vm(i,e){i.uniform4iv(this.addr,e)}function Sm(i,e){i.uniform1uiv(this.addr,e)}function Mm(i,e){i.uniform2uiv(this.addr,e)}function bm(i,e){i.uniform3uiv(this.addr,e)}function ym(i,e){i.uniform4uiv(this.addr,e)}function Em(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);St(n,a)||(i.uniform1iv(this.addr,a),Mt(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=Dr:r=oc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function Tm(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);St(n,a)||(i.uniform1iv(this.addr,a),Mt(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||cc,a[r])}function wm(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);St(n,a)||(i.uniform1iv(this.addr,a),Mt(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||dc,a[r])}function Am(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);St(n,a)||(i.uniform1iv(this.addr,a),Mt(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||lc,a[r])}function Rm(i){switch(i){case 5126:return cm;case 35664:return dm;case 35665:return um;case 35666:return hm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return xm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return Sm;case 36294:return Mm;case 36295:return bm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Am}}class Cm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lm(t.type)}}class Nm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rm(t.type)}}class Im{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function al(i,e){i.seq.push(e),i.map[e.id]=e}function Dm(i,e,t){const n=i.name,s=n.length;for(Va.lastIndex=0;;){const a=Va.exec(n),r=Va.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){al(t,c===void 0?new Cm(o,i,e):new Nm(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Im(o),al(t,p)),t=p}}}class qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);Dm(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function rl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Pm=37297;let Lm=0;function Um(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const ol=new Pe;function Fm(i){Xe._getMatrix(ol,Xe.workingColorSpace,i);const e=`mat3( ${ol.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case ea:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ll(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Um(i.getShaderSource(e),o)}else return a}function Om(i,e){const t=Fm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Bm={[Il]:"Linear",[Dl]:"Reinhard",[Pl]:"Cineon",[Ur]:"ACESFilmic",[Ul]:"AgX",[Fl]:"Neutral",[Ll]:"Custom"};function km(i,e){const t=Bm[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new G;function zm(){Xe.getLuminanceCoefficients(Vs);const i=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function Vm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function ji(i){return i!==""}function cl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pr(i){return i.replace(Wm,jm)}const Xm=new Map;function jm(i,e){let t=Oe[e];if(t===void 0){const n=Xm.get(e);if(n!==void 0)t=Oe[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pr(t)}const Ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(i){return i.replace(Ym,qm)}function qm(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function hl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const $m={[Hs]:"SHADOWMAP_TYPE_PCF",[Xi]:"SHADOWMAP_TYPE_VSM"};function Km(i){return $m[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zm={[ni]:"ENVMAP_TYPE_CUBE",[Ri]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE_UV"};function Jm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qm={[Ri]:"ENVMAP_MODE_REFRACTION"};function e0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const t0={[Nl]:"ENVMAP_BLENDING_MULTIPLY",[Md]:"ENVMAP_BLENDING_MIX",[bd]:"ENVMAP_BLENDING_ADD"};function n0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":t0[i.combine]||"ENVMAP_BLENDING_NONE"}function i0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s0(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=Km(t),c=Jm(t),h=e0(t),p=n0(t),u=i0(t),m=Gm(t),v=Vm(a),b=s.createProgram();let x,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ji).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ji).join(`
`),f.length>0&&(f+=`
`)):(x=[hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),f=[hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==vn?km("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Om("linearToOutputTexel",t.outputColorSpace),zm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),r=Pr(r),r=cl(r,t),r=dl(r,t),o=Pr(o),o=cl(o,t),o=dl(o,t),r=ul(r),o=ul(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const N=w+x+r,M=w+f+o,E=rl(s,s.VERTEX_SHADER,N),y=rl(s,s.FRAGMENT_SHADER,M);s.attachShader(b,E),s.attachShader(b,y),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function R(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(b)||"",z=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(y)||"",V=F.trim(),j=z.trim(),Y=I.trim();let ie=!0,W=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,E,y);else{const Z=ll(s,E,"vertex"),ee=ll(s,y,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+Z+`
`+ee)}else V!==""?Ie("WebGLProgram: Program Info Log:",V):(j===""||Y==="")&&(W=!1);W&&(L.diagnostics={runnable:ie,programLog:V,vertexShader:{log:j,prefix:x},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(E),s.deleteShader(y),_=new qs(s,b),T=Hm(s,b)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(b,Pm)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lm++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=y,this}let a0=0;class r0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new o0(e),t.set(e,n)),n}}class o0{constructor(e){this.id=a0++,this.code=e,this.usedTimes=0}}function l0(i){return i===ii||i===Zs||i===Js}function c0(i,e,t,n,s,a){const r=new Yl,o=new r0,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,T,C,L,F,z){const I=L.fog,V=F.geometry,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ie=e.get(_.envMap||j,Y),W=ie&&ie.mapping===ia?ie.image.height:null,Z=m[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,be=ee!==void 0?ee.length:0;let Te=0;V.morphAttributes.position!==void 0&&(Te=1),V.morphAttributes.normal!==void 0&&(Te=2),V.morphAttributes.color!==void 0&&(Te=3);let et,Ge,qe,K;if(Z){const ot=mn[Z];et=ot.vertexShader,Ge=ot.fragmentShader}else{et=_.vertexShader,Ge=_.fragmentShader;const ot=o.getVertexShaderStage(_),$e=o.getFragmentShaderStage(_);o.update(_,ot,$e),qe=ot.id,K=$e.id}const te=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ne=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,Ue=!!_.map,pt=!!_.matcap,Fe=!!ie,Ye=!!_.aoMap,rt=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,tt=!!_.normalMap,xt=!!_.displacementMap,Ct=!!_.emissiveMap,dt=!!_.metalnessMap,mt=!!_.roughnessMap,U=_.anisotropy>0,bt=_.clearcoat>0,He=_.dispersion>0,A=_.retroreflectivity>0,g=_.iridescence>0,O=_.sheen>0,H=_.transmission>0,q=U&&!!_.anisotropyMap,ae=bt&&!!_.clearcoatMap,oe=bt&&!!_.clearcoatNormalMap,$=bt&&!!_.clearcoatRoughnessMap,Q=g&&!!_.iridescenceMap,ce=g&&!!_.iridescenceThicknessMap,we=O&&!!_.sheenColorMap,ue=O&&!!_.sheenRoughnessMap,le=!!_.specularMap,Ae=!!_.specularColorMap,Ce=!!_.specularIntensityMap,De=H&&!!_.transmissionMap,P=H&&!!_.thicknessMap,se=!!_.gradientMap,J=!!_.alphaMap,de=_.alphaTest>0,he=!!_.alphaHash,ne=!!_.extensions;let Re=vn;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Re=i.toneMapping);const Ee={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:Ge,defines:_.defines,customVertexShaderID:qe,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,instancingMorph:Ne&&F.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ue,matcap:pt,envMap:Fe,envMapMode:Fe&&ie.mapping,envMapCubeUVHeight:W,aoMap:Ye,lightMap:rt,bumpMap:ke,normalMap:tt,displacementMap:xt,emissiveMap:Ct,normalMapObjectSpace:tt&&_.normalMapType===Td,normalMapTangentSpace:tt&&_.normalMapType===Nr,packedNormalMap:tt&&_.normalMapType===Nr&&l0(_.normalMap.format),metalnessMap:dt,roughnessMap:mt,anisotropy:U,anisotropyMap:q,clearcoat:bt,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:$,dispersion:He,retroreflection:A,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:ce,sheen:O,sheenColorMap:we,sheenRoughnessMap:ue,specularMap:le,specularColorMap:Ae,specularIntensityMap:Ce,transmission:H,transmissionMap:De,thicknessMap:P,gradientMap:se,opaque:_.transparent===!1&&_.blending===Yi&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:he,combine:_.combine,mapUv:Ue&&v(_.map.channel),aoMapUv:Ye&&v(_.aoMap.channel),lightMapUv:rt&&v(_.lightMap.channel),bumpMapUv:ke&&v(_.bumpMap.channel),normalMapUv:tt&&v(_.normalMap.channel),displacementMapUv:xt&&v(_.displacementMap.channel),emissiveMapUv:Ct&&v(_.emissiveMap.channel),metalnessMapUv:dt&&v(_.metalnessMap.channel),roughnessMapUv:mt&&v(_.roughnessMap.channel),anisotropyMapUv:q&&v(_.anisotropyMap.channel),clearcoatMapUv:ae&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&v(_.sheenRoughnessMap.channel),specularMapUv:le&&v(_.specularMap.channel),specularColorMapUv:Ae&&v(_.specularColorMap.channel),specularIntensityMapUv:Ce&&v(_.specularIntensityMap.channel),transmissionMapUv:De&&v(_.transmissionMap.channel),thicknessMapUv:P&&v(_.thicknessMap.channel),alphaMapUv:J&&v(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(tt||U),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Ue||J),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&tt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:me,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Te,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ue&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===at,decodeVideoTextureEmissive:Ct&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===at,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===Gt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function x(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(T,_),w(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function f(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function N(_){const T=m[_.type];let C;if(T){const L=mn[T];C=Tu.clone(L.uniforms)}else C=_.uniforms;return C}function M(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new s0(i,T,_,s),c.push(C),h.set(T,C)),C}function E(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function R(){o.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:N,acquireProgram:M,releaseProgram:E,releaseShaderCache:y,programs:c,dispose:R}}function d0(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function u0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pl(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,v,b,x,f){let w=i[e];return w===void 0?(w={id:u.id,object:u,geometry:m,material:v,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:x,group:f},i[e]=w):(w.id=u.id,w.object=u,w.geometry=m,w.material=v,w.materialVariant=r(u),w.groupOrder=b,w.renderOrder=u.renderOrder,w.z=x,w.group=f),e++,w}function l(u,m,v,b,x,f,w){w.reversedDepth===!0&&(x=-x);const N=o(u,m,v,b,x,f);v.transmission>0?n.push(N):v.transparent===!0?s.push(N):t.push(N)}function c(u,m,v,b,x,f){const w=o(u,m,v,b,x,f);v.transmission>0?n.unshift(w):v.transparent===!0?s.unshift(w):t.unshift(w)}function h(u,m){t.length>1&&t.sort(u||u0),n.length>1&&n.sort(m||fl),s.length>1&&s.sort(m||fl)}function p(){for(let u=e,m=i.length;u<m;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:p,sort:h}}function h0(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new pl,i.set(n,[r])):s>=a.length?(r=new pl,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function f0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new ze};break;case"SpotLight":t={position:new G,direction:new G,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function p0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let m0=0;function g0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function x0(i){const e=new f0,t=p0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,a=new ft,r=new ft;function o(c){let h=0,p=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,v=0,b=0,x=0,f=0,w=0,N=0,M=0,E=0,y=0,R=0,_=0,T=0,C=0;c.sort(g0);for(let F=0,z=c.length;F<z;F++){const I=c[F],V=I.color,j=I.intensity,Y=I.distance;let ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ii?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*j,p+=V.g*j,u+=V.b*j;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],j);C++}else if(I.isSunLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[v]=ee,n.sunShadowMap[v]=ie;const be=Z.getViewportCount();for(let Te=0;Te<be;Te++)n.sunShadowMatrix[b+Te]=Z.getMatrix(Te),n.sunShadowCascade[b+Te]=Z._cascadeData[Te];b+=be,v++}n.sun[m]=W,m++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.directionalShadow[x]=ee,n.directionalShadowMap[x]=ie,n.directionalShadowMatrix[x]=I.shadow.matrix,E++}n.directional[x]=W,x++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(V).multiplyScalar(j),W.distance=Y,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[w]=W;const Z=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,Z.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[w]=Z.matrix,I.castShadow){const ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.spotShadow[w]=ee,n.spotShadowMap[w]=ie,R++}w++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(V).multiplyScalar(j),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[N]=W,N++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const Z=I.shadow,ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=ie,n.pointShadowMatrix[f]=I.shadow.matrix,y++}n.point[f]=W,f++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(j),W.groundColor.copy(I.groundColor).multiplyScalar(j),n.hemi[M]=W,M++}}N>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;const L=n.hash;(L.sunLength!==m||L.directionalLength!==x||L.pointLength!==f||L.spotLength!==w||L.rectAreaLength!==N||L.hemiLength!==M||L.numSunShadows!==v||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==R||L.numSpotMaps!==_||L.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=x,n.spot.length=w,n.rectArea.length=N,n.point.length=f,n.hemi.length=M,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.sunLength=m,L.directionalLength=x,L.pointLength=f,L.spotLength=w,L.rectAreaLength=N,L.hemiLength=M,L.numSunShadows=v,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=R,L.numSpotMaps=_,L.numLightProbes=C,n.version=m0++)}function l(c,h){let p=0,u=0,m=0,v=0,b=0,x=0;const f=h.matrixWorldInverse;for(let w=0,N=c.length;w<N;w++){const M=c[w];if(M.isSunLight){const E=n.sun[p];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(f),p++}else if(M.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(M.isSpotLight){const E=n.spot[v];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),v++}else if(M.isRectAreaLight){const E=n.rectArea[b];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),r.identity(),a.copy(M.matrixWorld),a.premultiply(f),r.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),b++}else if(M.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(f),x++}}}return{setup:o,setupView:l,state:n}}function ml(i){const e=new x0(i),t=[],n=[],s=[];function a(u){p.camera=u,t.length=0,n.length=0,s.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function _0(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new ml(i),e.set(s,[o])):a>=r.length?(o=new ml(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
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
}`,M0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],b0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],gl=new ft,Wi=new G,Ha=new G;function y0(i,e,t){let n=new Yr;const s=new je,a=new je,r=new ht,o=new Cu,l=new Nu,c={},h=t.maxTextureSize,p={[ti]:Gt,[Gt]:ti,[gn]:gn},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:v0,fragmentShader:S0}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new Vt;v.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ct(v,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let f=this.type;this.render=function(y,R,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;this.type===nd&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hs);const T=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Nn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=f!==this.type;z&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=y.length;I<V;I++){const j=y[I],Y=j.shadow;if(Y===void 0){Ie("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ie=Y.getFrameExtents();s.multiply(ie),a.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ie.x),s.x=a.x*ie.x,Y.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ie.y),s.y=a.y*ie.y,Y.mapSize.y=a.y));const W=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=W,Y.map===null||z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Xi){if(j.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new on(s.x,s.y,{format:ii,type:Mn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),Y.map.texture.name=j.name+".shadowMap",Y.map.depthTexture=new ss(s.x,s.y,xn),Y.map.depthTexture.name=j.name+".shadowMapDepth",Y.map.depthTexture.format=Dn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=At,Y.map.depthTexture.magFilter=At}else j.isPointLight?(Y.map=new rc(s.x),Y.map.depthTexture=new yu(s.x,Sn)):(Y.map=new on(s.x,s.y),Y.map.depthTexture=new ss(s.x,s.y,Sn)),Y.map.depthTexture.name=j.name+".shadowMap",Y.map.depthTexture.format=Dn,this.type===Hs?(Y.map.depthTexture.compareFunction=W?Hr:Vr,Y.map.depthTexture.minFilter=Pt,Y.map.depthTexture.magFilter=Pt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=At,Y.map.depthTexture.magFilter=At);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const Z=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();j.isPointLight!==!0&&Y.updateMatrices(j,_);for(let ee=0;ee<Z;ee++){const be=Y.getCamera(ee);if(j.isPointLight){const Te=Y.camera,et=Y.matrix,Ge=j.distance||Te.far;Ge!==Te.far&&(Te.far=Ge,Te.updateProjectionMatrix()),Wi.setFromMatrixPosition(j.matrixWorld),Te.position.copy(Wi),Ha.copy(Te.position),Ha.add(M0[ee]),Te.up.copy(b0[ee]),Te.lookAt(Ha),Te.updateMatrixWorld(),et.makeTranslation(-Wi.x,-Wi.y,-Wi.z),gl.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(gl,Te.coordinateSystem,Te.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(Y.map),i.clear());const Te=Y.getViewport(ee);r.set(a.x*Te.x,a.y*Te.y,a.x*Te.z,a.y*Te.w),F.viewport(r)}n=Y.getFrustum(ee),M(R,_,be,j,this.type)}Y.isPointLightShadow!==!0&&this.type===Xi&&w(Y,_),Y.needsUpdate=!1}f=this.type,x.needsUpdate=!1,i.setRenderTarget(T,C,L)};function w(y,R){const _=e.update(b);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null?y.mapPass=new on(s.x,s.y,{format:ii,type:Mn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,b,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value.set(y.map.width,y.map.height),m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(R,null,_,m,b,null)}function N(y,R,_,T){let C=null;const L=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=C.uuid,z=R.uuid;let I=c[F];I===void 0&&(I={},c[F]=I);let V=I[z];V===void 0&&(V=C.clone(),I[z]=V,R.addEventListener("dispose",E)),C=V}if(C.visible=R.visible,C.wireframe=R.wireframe,T===Xi?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:p[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=_}return C}function M(y,R,_,T,C){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&C===Xi)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const z=e.update(y),I=y.material;if(Array.isArray(I)){const V=z.groups;for(let j=0,Y=V.length;j<Y;j++){const ie=V[j],W=I[ie.materialIndex];if(W&&W.visible){const Z=N(y,W,T,C);y.onBeforeShadow(i,y,R,_,z,Z,ie),i.renderBufferDirect(_,null,z,Z,y,ie),y.onAfterShadow(i,y,R,_,z,Z,ie)}}}else if(I.visible){const V=N(y,I,T,C);y.onBeforeShadow(i,y,R,_,z,V,null),i.renderBufferDirect(_,null,z,V,y,null),y.onAfterShadow(i,y,R,_,z,V,null)}}const F=y.children;for(let z=0,I=F.length;z<I;z++)M(F[z],R,_,T,C)}function E(y){y.target.removeEventListener("dispose",E);for(const _ in c){const T=c[_],C=y.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function E0(i,e){function t(){let P=!1;const se=new ht;let J=null;const de=new ht(0,0,0,0);return{setMask:function(he){J!==he&&!P&&(i.colorMask(he,he,he,he),J=he)},setLocked:function(he){P=he},setClear:function(he,ne,Re,Ee,ot){ot===!0&&(he*=Ee,ne*=Ee,Re*=Ee),se.set(he,ne,Re,Ee),de.equals(se)===!1&&(i.clearColor(he,ne,Re,Ee),de.copy(se))},reset:function(){P=!1,J=null,de.set(-1,0,0,0)}}}function n(){let P=!1,se=!1,J=null,de=null,he=null;return{setReversed:function(ne){if(se!==ne){const Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),se=ne;const Ee=he;he=null,this.setClear(Ee)}},getReversed:function(){return se},setTest:function(ne){ne?te(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ne){J!==ne&&!P&&(i.depthMask(ne),J=ne)},setFunc:function(ne){if(se&&(ne=Od[ne]),de!==ne){switch(ne){case Xa:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case qa:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=ne}},setLocked:function(ne){P=ne},setClear:function(ne){he!==ne&&(he=ne,se&&(ne=1-ne),i.clearDepth(ne))},reset:function(){P=!1,J=null,de=null,he=null,se=!1}}}function s(){let P=!1,se=null,J=null,de=null,he=null,ne=null,Re=null,Ee=null,ot=null;return{setTest:function($e){P||($e?te(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function($e){se!==$e&&!P&&(i.stencilMask($e),se=$e)},setFunc:function($e,Ht,qt){(J!==$e||de!==Ht||he!==qt)&&(i.stencilFunc($e,Ht,qt),J=$e,de=Ht,he=qt)},setOp:function($e,Ht,qt){(ne!==$e||Re!==Ht||Ee!==qt)&&(i.stencilOp($e,Ht,qt),ne=$e,Re=Ht,Ee=qt)},setLocked:function($e){P=$e},setClear:function($e){ot!==$e&&(i.clearStencil($e),ot=$e)},reset:function(){P=!1,se=null,J=null,de=null,he=null,ne=null,Re=null,Ee=null,ot=null}}}const a=new t,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},p={},u={},m=new WeakMap,v=[],b=null,x=!1,f=null,w=null,N=null,M=null,E=null,y=null,R=null,_=new ze(0,0,0),T=0,C=!1,L=null,F=null,z=null,I=null,V=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ie=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=ie>=2);let Z=null,ee={};const be=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),et=new ht().fromArray(be),Ge=new ht().fromArray(Te);function qe(P,se,J,de){const he=new Uint8Array(4),ne=i.createTexture();i.bindTexture(P,ne),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<J;Re++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(se+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ne}const K={};K[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),te(i.DEPTH_TEST),r.setFunc(Qi),ke(!1),tt(_o),te(i.CULL_FACE),Ye(Nn);function te(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function me(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ne(P,se){return u[P]!==se?(i.bindFramebuffer(P,se),u[P]=se,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function _e(P,se){let J=v,de=!1;if(P){J=m.get(se),J===void 0&&(J=[],m.set(se,J));const he=P.textures;if(J.length!==he.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Re=he.length;ne<Re;ne++)J[ne]=i.COLOR_ATTACHMENT0+ne;J.length=he.length,de=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,de=!0);de&&i.drawBuffers(J)}function Ue(P){return b!==P?(i.useProgram(P),b=P,!0):!1}const pt={[bi]:i.FUNC_ADD,[sd]:i.FUNC_SUBTRACT,[ad]:i.FUNC_REVERSE_SUBTRACT};pt[rd]=i.MIN,pt[od]=i.MAX;const Fe={[ld]:i.ZERO,[cd]:i.ONE,[dd]:i.SRC_COLOR,[Rl]:i.SRC_ALPHA,[gd]:i.SRC_ALPHA_SATURATE,[pd]:i.DST_COLOR,[hd]:i.DST_ALPHA,[ud]:i.ONE_MINUS_SRC_COLOR,[Cl]:i.ONE_MINUS_SRC_ALPHA,[md]:i.ONE_MINUS_DST_COLOR,[fd]:i.ONE_MINUS_DST_ALPHA,[xd]:i.CONSTANT_COLOR,[_d]:i.ONE_MINUS_CONSTANT_COLOR,[vd]:i.CONSTANT_ALPHA,[Sd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(P,se,J,de,he,ne,Re,Ee,ot,$e){if(P===Nn){x===!0&&(me(i.BLEND),x=!1);return}if(x===!1&&(te(i.BLEND),x=!0),P!==id){if(P!==f||$e!==C){if((w!==bi||E!==bi)&&(i.blendEquation(i.FUNC_ADD),w=bi,E=bi),$e)switch(P){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFunc(i.ONE,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case So:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",P);break}else switch(P){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vo:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case So:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",P);break}N=null,M=null,y=null,R=null,_.set(0,0,0),T=0,f=P,C=$e}return}he=he||se,ne=ne||J,Re=Re||de,(se!==w||he!==E)&&(i.blendEquationSeparate(pt[se],pt[he]),w=se,E=he),(J!==N||de!==M||ne!==y||Re!==R)&&(i.blendFuncSeparate(Fe[J],Fe[de],Fe[ne],Fe[Re]),N=J,M=de,y=ne,R=Re),(Ee.equals(_)===!1||ot!==T)&&(i.blendColor(Ee.r,Ee.g,Ee.b,ot),_.copy(Ee),T=ot),f=P,C=!1}function rt(P,se){P.side===gn?me(i.CULL_FACE):te(i.CULL_FACE);let J=P.side===Gt;se&&(J=!J),ke(J),P.blending===Yi&&P.transparent===!1?Ye(Nn):Ye(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),a.setMask(P.colorWrite);const de=P.stencilWrite;o.setTest(de),de&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ct(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(P){L!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),L=P)}function tt(P){P!==ed?(te(i.CULL_FACE),P!==F&&(P===_o?i.cullFace(i.BACK):P===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),F=P}function xt(P){P!==z&&(Y&&i.lineWidth(P),z=P)}function Ct(P,se,J){P?(te(i.POLYGON_OFFSET_FILL),(I!==se||V!==J)&&(I=se,V=J,r.getReversed()&&(se=-se),i.polygonOffset(se,J))):me(i.POLYGON_OFFSET_FILL)}function dt(P){P?te(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function mt(P){P===void 0&&(P=i.TEXTURE0+j-1),Z!==P&&(i.activeTexture(P),Z=P)}function U(P,se,J){J===void 0&&(Z===null?J=i.TEXTURE0+j-1:J=Z);let de=ee[J];de===void 0&&(de={type:void 0,texture:void 0},ee[J]=de),(de.type!==P||de.texture!==se)&&(Z!==J&&(i.activeTexture(J),Z=J),i.bindTexture(P,se||K[P]),de.type=P,de.texture=se)}function bt(){const P=ee[Z];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function He(){try{i.compressedTexImage2D(...arguments)}catch(P){Ze("WebGLState:",P)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(P){Ze("WebGLState:",P)}}function g(){try{i.texSubImage2D(...arguments)}catch(P){Ze("WebGLState:",P)}}function O(){try{i.texSubImage3D(...arguments)}catch(P){Ze("WebGLState:",P)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ze("WebGLState:",P)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ze("WebGLState:",P)}}function ae(){try{i.texStorage2D(...arguments)}catch(P){Ze("WebGLState:",P)}}function oe(){try{i.texStorage3D(...arguments)}catch(P){Ze("WebGLState:",P)}}function $(){try{i.texImage2D(...arguments)}catch(P){Ze("WebGLState:",P)}}function Q(){try{i.texImage3D(...arguments)}catch(P){Ze("WebGLState:",P)}}function ce(P){return p[P]!==void 0?p[P]:i.getParameter(P)}function we(P,se){p[P]!==se&&(i.pixelStorei(P,se),p[P]=se)}function ue(P){et.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),et.copy(P))}function le(P){Ge.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ge.copy(P))}function Ae(P,se){let J=c.get(se);J===void 0&&(J=new WeakMap,c.set(se,J));let de=J.get(P);de===void 0&&(de=i.getUniformBlockIndex(se,P.name),J.set(P,de))}function Ce(P,se){const de=c.get(se).get(P);l.get(se)!==de&&(i.uniformBlockBinding(se,de,P.__bindingPointIndex),l.set(se,de))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},Z=null,ee={},u={},m=new WeakMap,v=[],b=null,x=!1,f=null,w=null,N=null,M=null,E=null,y=null,R=null,_=new ze(0,0,0),T=0,C=!1,L=null,F=null,z=null,I=null,V=null,et.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:te,disable:me,bindFramebuffer:Ne,drawBuffers:_e,useProgram:Ue,setBlending:Ye,setMaterial:rt,setFlipSided:ke,setCullFace:tt,setLineWidth:xt,setPolygonOffset:Ct,setScissorTest:dt,activeTexture:mt,bindTexture:U,unbindTexture:bt,compressedTexImage2D:He,compressedTexImage3D:A,texImage2D:$,texImage3D:Q,pixelStorei:we,getParameter:ce,updateUBOMapping:Ae,uniformBlockBinding:Ce,texStorage2D:ae,texStorage3D:oe,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:ue,viewport:le,reset:De}}function T0(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,h=new WeakMap,p=new Set;let u;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,g){return v?new OffscreenCanvas(A,g):ta("canvas")}function x(A,g,O){let H=1;const q=He(A);if((q.width>O||q.height>O)&&(H=O/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ae=Math.floor(H*q.width),oe=Math.floor(H*q.height);u===void 0&&(u=b(ae,oe));const $=g?b(ae,oe):u;return $.width=ae,$.height=oe,$.getContext("2d").drawImage(A,0,0,ae,oe),Ie("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ae+"x"+oe+")."),$}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function f(A){return A.generateMipmaps}function w(A){i.generateMipmap(A)}function N(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,g,O,H,q,ae=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;H&&(oe=e.get("EXT_texture_norm16"),oe||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8),O===i.UNSIGNED_SHORT&&oe&&($=oe.R16_EXT),O===i.SHORT&&oe&&($=oe.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),g===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8),O===i.UNSIGNED_SHORT&&oe&&($=oe.RG16_EXT),O===i.SHORT&&oe&&($=oe.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&oe&&($=oe.RGB16_EXT),O===i.SHORT&&oe&&($=oe.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){const Q=ae?ea:Xe.getTransfer(q);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Q===at?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&oe&&($=oe.RGBA16_EXT),O===i.SHORT&&oe&&($=oe.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function E(A,g){let O;return A?g===null||g===Sn||g===ts?O=i.DEPTH24_STENCIL8:g===xn?O=i.DEPTH32F_STENCIL8:g===es&&(O=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Sn||g===ts?O=i.DEPTH_COMPONENT24:g===xn?O=i.DEPTH_COMPONENT32F:g===es&&(O=i.DEPTH_COMPONENT16),O}function y(A,g){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Pt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),T(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&p.delete(g)}function _(A){const g=A.target;g.removeEventListener("dispose",_),L(g)}function T(A){const g=n.get(A);if(g.__webglInit===void 0)return;const O=A.source,H=m.get(O);if(H){const q=H[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(A),Object.keys(H).length===0&&m.delete(O)}n.remove(A)}function C(A){const g=n.get(A);i.deleteTexture(g.__webglTexture);const O=A.source,H=m.get(O);delete H[g.__cacheKey],r.memory.textures--}function L(A){const g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let q=0;q<g.__webglFramebuffer[H].length;q++)i.deleteFramebuffer(g.__webglFramebuffer[H][q]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=A.textures;for(let H=0,q=O.length;H<q;H++){const ae=n.get(O[H]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),r.memory.textures--),n.remove(O[H])}n.remove(A)}let F=0;function z(){F=0}function I(){return F}function V(A){F=A}function j(){const A=F;return A>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function Y(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function ie(A,g){const O=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const H=A.image;if(H===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{me(O,A,g);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function W(A,g){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){me(O,A,g);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function Z(A,g){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){me(O,A,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function ee(A,g){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ne(O,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const be={[Ja]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},Te={[At]:i.NEAREST,[yd]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},et={[Ad]:i.NEVER,[Dd]:i.ALWAYS,[Rd]:i.LESS,[Vr]:i.LEQUAL,[Cd]:i.EQUAL,[Hr]:i.GEQUAL,[Nd]:i.GREATER,[Id]:i.NOTEQUAL};function Ge(A,g){if(g.type===xn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Pt||g.magFilter===pa||g.magFilter===vs||g.magFilter===Zn||g.minFilter===Pt||g.minFilter===pa||g.minFilter===vs||g.minFilter===Zn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,be[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,be[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,be[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Te[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Te[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,et[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===At||g.minFilter!==vs&&g.minFilter!==Zn||g.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function qe(A,g){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const H=g.source;let q=m.get(H);q===void 0&&(q={},m.set(H,q));const ae=Y(g);if(ae!==A.__cacheKey){q[ae]===void 0&&(q[ae]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),q[ae].usedTimes++;const oe=q[A.__cacheKey];oe!==void 0&&(q[A.__cacheKey].usedTimes--,oe.usedTimes===0&&C(g)),A.__cacheKey=ae,A.__webglTexture=q[ae].texture}return O}function K(A,g,O){return Math.floor(Math.floor(A/O)/g)}function te(A,g,O,H){const ae=A.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,H,g.data);else{ae.sort((we,ue)=>we.start-ue.start);let oe=0;for(let we=1;we<ae.length;we++){const ue=ae[oe],le=ae[we],Ae=ue.start+ue.count,Ce=K(le.start,g.width,4),De=K(ue.start,g.width,4);le.start<=Ae+1&&Ce===De&&K(le.start+le.count-1,g.width,4)===Ce?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++oe,ae[oe]=le)}ae.length=oe+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let we=0,ue=ae.length;we<ue;we++){const le=ae[we],Ae=Math.floor(le.start/4),Ce=Math.ceil(le.count/4),De=Ae%g.width,P=Math.floor(Ae/g.width),se=Ce,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,De),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,De,P,se,J,O,H,g.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function me(A,g,O){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const q=qe(A,g),ae=g.source;t.bindTexture(H,A.__webglTexture,i.TEXTURE0+O);const oe=n.get(ae);if(ae.version!==oe.__version||q===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const J=Xe.getPrimaries(Xe.workingColorSpace),de=g.colorSpace===Gn?null:Xe.getPrimaries(g.colorSpace),he=g.colorSpace===Gn||J===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=x(g.image,!1,s.maxTextureSize);Q=bt(g,Q);const ce=a.convert(g.format,g.colorSpace),we=a.convert(g.type);let ue=M(g.internalFormat,ce,we,g.normalized,g.colorSpace,g.isVideoTexture);Ge(H,g);let le;const Ae=g.mipmaps,Ce=g.isVideoTexture!==!0,De=oe.__version===void 0||q===!0,P=ae.dataReady,se=y(g,Q);if(g.isDepthTexture)ue=E(g.format===Jn,g.type),De&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,ue,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ue,Q.width,Q.height,0,ce,we,null));else if(g.isDataTexture)if(Ae.length>0){Ce&&De&&t.texStorage2D(i.TEXTURE_2D,se,ue,Ae[0].width,Ae[0].height);for(let J=0,de=Ae.length;J<de;J++)le=Ae[J],Ce?P&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,le.width,le.height,ce,we,le.data):t.texImage2D(i.TEXTURE_2D,J,ue,le.width,le.height,0,ce,we,le.data);g.generateMipmaps=!1}else Ce?(De&&t.texStorage2D(i.TEXTURE_2D,se,ue,Q.width,Q.height),P&&te(g,Q,ce,we)):t.texImage2D(i.TEXTURE_2D,0,ue,Q.width,Q.height,0,ce,we,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ce&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ue,Ae[0].width,Ae[0].height,Q.depth);for(let J=0,de=Ae.length;J<de;J++)if(le=Ae[J],g.format!==rn)if(ce!==null)if(Ce){if(P)if(g.layerUpdates.size>0){const he=qo(le.width,le.height,g.format,g.type);for(const ne of g.layerUpdates){const Re=le.data.subarray(ne*he/le.data.BYTES_PER_ELEMENT,(ne+1)*he/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ne,le.width,le.height,1,ce,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,Q.depth,ce,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ue,le.width,le.height,Q.depth,0,le.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,Q.depth,ce,we,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ue,le.width,le.height,Q.depth,0,ce,we,le.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ce&&De&&t.texStorage2D(i.TEXTURE_2D,se,ue,Ae[0].width,Ae[0].height);for(let J=0,de=Ae.length;J<de;J++)le=Ae[J],g.format!==rn?ce!==null?Ce?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ue,le.width,le.height,0,le.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?P&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,le.width,le.height,ce,we,le.data):t.texImage2D(i.TEXTURE_2D,J,ue,le.width,le.height,0,ce,we,le.data)}else if(g.isDataArrayTexture)if(Ce){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ue,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const J=qo(Q.width,Q.height,g.format,g.type);for(const de of g.layerUpdates){const he=Q.data.subarray(de*J/Q.data.BYTES_PER_ELEMENT,(de+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,Q.width,Q.height,1,ce,we,he)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,we,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,ce,we,Q.data);else if(g.isData3DTexture)Ce?(De&&t.texStorage3D(i.TEXTURE_3D,se,ue,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,we,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,ce,we,Q.data);else if(g.isFramebufferTexture){if(De)if(Ce)t.texStorage2D(i.TEXTURE_2D,se,ue,Q.width,Q.height);else{let J=Q.width,de=Q.height;for(let he=0;he<se;he++)t.texImage2D(i.TEXTURE_2D,he,ue,J,de,0,ce,we,null),J>>=1,de>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),p.add(g),J.onpaint=de=>{const he=de.changedElements;for(const ne of p)he.includes(ne.image)&&(ne.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const he=i.RGBA,ne=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,he,ne,Re,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ce&&De){const J=He(Ae[0]);t.texStorage2D(i.TEXTURE_2D,se,ue,J.width,J.height)}for(let J=0,de=Ae.length;J<de;J++)le=Ae[J],Ce?P&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ce,we,le):t.texImage2D(i.TEXTURE_2D,J,ue,ce,we,le);g.generateMipmaps=!1}else if(Ce){if(De){const J=He(Q);t.texStorage2D(i.TEXTURE_2D,se,ue,J.width,J.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,we,Q)}else t.texImage2D(i.TEXTURE_2D,0,ue,ce,we,Q);f(g)&&w(H),oe.__version=ae.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Ne(A,g,O){if(g.image.length!==6)return;const H=qe(A,g),q=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const ae=n.get(q);if(q.version!==ae.__version||H===!0){t.activeTexture(i.TEXTURE0+O);const oe=Xe.getPrimaries(Xe.workingColorSpace),$=g.colorSpace===Gn?null:Xe.getPrimaries(g.colorSpace),Q=g.colorSpace===Gn||oe===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ce=g.isCompressedTexture||g.image[0].isCompressedTexture,we=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!ce&&!we?ue[ne]=x(g.image[ne],!0,s.maxCubemapSize):ue[ne]=we?g.image[ne].image:g.image[ne],ue[ne]=bt(g,ue[ne]);const le=ue[0],Ae=a.convert(g.format,g.colorSpace),Ce=a.convert(g.type),De=M(g.internalFormat,Ae,Ce,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,se=ae.__version===void 0||H===!0,J=q.dataReady;let de=y(g,le);Ge(i.TEXTURE_CUBE_MAP,g);let he;if(ce){P&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,De,le.width,le.height);for(let ne=0;ne<6;ne++){he=ue[ne].mipmaps;for(let Re=0;Re<he.length;Re++){const Ee=he[Re];g.format!==rn?Ae!==null?P?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,De,Ee.width,Ee.height,0,Ee.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Ee.width,Ee.height,Ae,Ce,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,De,Ee.width,Ee.height,0,Ae,Ce,Ee.data)}}}else{if(he=g.mipmaps,P&&se){he.length>0&&de++;const ne=He(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,De,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(we){P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Ae,Ce,ue[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,ue[ne].width,ue[ne].height,0,Ae,Ce,ue[ne].data);for(let Re=0;Re<he.length;Re++){const ot=he[Re].image[ne].image;P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,ot.width,ot.height,Ae,Ce,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,De,ot.width,ot.height,0,Ae,Ce,ot.data)}}else{P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae,Ce,ue[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,Ae,Ce,ue[ne]);for(let Re=0;Re<he.length;Re++){const Ee=he[Re];P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Ae,Ce,Ee.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,De,Ae,Ce,Ee.image[ne])}}}f(g)&&w(i.TEXTURE_CUBE_MAP),ae.__version=q.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function _e(A,g,O,H,q,ae){const oe=a.convert(O.format,O.colorSpace),$=a.convert(O.type),Q=M(O.internalFormat,oe,$,O.normalized,O.colorSpace),ce=n.get(g),we=n.get(O);if(we.__renderTarget=g,!ce.__hasExternalTextures){const ue=Math.max(1,g.width>>ae),le=Math.max(1,g.height>>ae);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ae,Q,ue,le,g.depth,0,oe,$,null):t.texImage2D(q,ae,Q,ue,le,0,oe,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,q,we.__webglTexture,0,dt(g)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,q,we.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(A,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){const H=g.depthTexture,q=H&&H.isDepthTexture?H.type:null,ae=E(g.stencilBuffer,q),oe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(g),ae,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(g),ae,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ae,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,A)}else{const H=g.textures;for(let q=0;q<H.length;q++){const ae=H[q],oe=a.convert(ae.format,ae.colorSpace),$=a.convert(ae.type),Q=M(ae.internalFormat,oe,$,ae.normalized,ae.colorSpace);mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(g),Q,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(g),Q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(A,g,O){const H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(g.depthTexture);if(q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,g.depthTexture);const ce=a.convert(g.depthTexture.format),we=a.convert(g.depthTexture.type);let ue;g.depthTexture.format===Dn?ue=i.DEPTH_COMPONENT24:g.depthTexture.format===Jn&&(ue=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,g.width,g.height,0,ce,we,null)}}else ie(g.depthTexture,0);const ae=q.__webglTexture,oe=dt(g),$=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Q=g.depthTexture.format===Jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Dn)mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ae,0);else if(g.depthTexture.format===Jn)mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(A){const g=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=H}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)pt(g.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?pt(g.__webglFramebuffer[0],A,0):pt(g.__webglFramebuffer,A,0)}else if(O){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),Ue(g.__webglDepthbuffer[H],A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ae)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ue(g.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(A,g,O){const H=n.get(A);g!==void 0&&_e(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Fe(A)}function rt(A){const g=A.texture,O=n.get(A),H=n.get(g);A.addEventListener("dispose",_);const q=A.textures,ae=A.isWebGLCubeRenderTarget===!0,oe=q.length>1;if(oe||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,r.memory.textures++),ae){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let Q=0;Q<g.mipmaps.length;Q++)O.__webglFramebuffer[$][Q]=i.createFramebuffer()}else O.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)O.__webglFramebuffer[$]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(oe)for(let $=0,Q=q.length;$<Q;$++){const ce=n.get(q[$]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&mt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<q.length;$++){const Q=q[$];O.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[$]);const ce=a.convert(Q.format,Q.colorSpace),we=a.convert(Q.type),ue=M(Q.internalFormat,ce,we,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),le=dt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,O.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)_e(O.__webglFramebuffer[$][Q],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else _e(O.__webglFramebuffer[$],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(g)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let $=0,Q=q.length;$<Q;$++){const ce=q[$],we=n.get(ce);let ue=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,we.__webglTexture),Ge(ue,ce),_e(O.__webglFramebuffer,A,ce,i.COLOR_ATTACHMENT0+$,ue,0),f(ce)&&w(ue)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,H.__webglTexture),Ge($,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)_e(O.__webglFramebuffer[Q],A,g,i.COLOR_ATTACHMENT0,$,Q);else _e(O.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,$,0);f(g)&&w($),t.unbindTexture()}A.depthBuffer&&Fe(A)}function ke(A){const g=A.textures;for(let O=0,H=g.length;O<H;O++){const q=g[O];if(f(q)){const ae=N(A),oe=n.get(q).__webglTexture;t.bindTexture(ae,oe),w(ae),t.unbindTexture()}}}const tt=[],xt=[];function Ct(A){if(A.samples>0){if(mt(A)===!1){const g=A.textures,O=A.width,H=A.height;let q=i.COLOR_BUFFER_BIT;const ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(A),$=g.length>1;if($)for(let ce=0;ce<g.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Q=A.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ce=0;ce<g.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const we=n.get(g[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,O,H,0,0,O,H,q,i.NEAREST),l===!0&&(tt.length=0,xt.length=0,tt.push(i.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(tt.push(ae),xt.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ce=0;ce<g.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const we=n.get(g[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function dt(A){return Math.min(s.maxSamples,A.samples)}function mt(A){const g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(A){const g=r.render.frame;h.get(A)!==g&&(h.set(A,g),A.update())}function bt(A,g){const O=A.colorSpace,H=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Qs&&O!==Gn&&(Xe.getTransfer(O)===at?(H!==rn||q!==Yt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",O)),g}function He(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=z,this.getTextureUnits=I,this.setTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=Ye,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function w0(i,e){function t(n,s=Gn){let a;const r=Xe.getTransfer(s);if(n===Yt)return i.UNSIGNED_BYTE;if(n===Or)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Br)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bl)return i.BYTE;if(n===kl)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===Fr)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===Vl)return i.ALPHA;if(n===Hl)return i.RGB;if(n===rn)return i.RGBA;if(n===Dn)return i.DEPTH_COMPONENT;if(n===Jn)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===kr)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===zr)return i.RG_INTEGER;if(n===Gr)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===js||n===Ys)if(r===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ws)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ws)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===er||n===tr||n===nr||n===ir)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===er)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ir)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sr||n===ar||n===rr||n===or||n===lr||n===Zs||n===cr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===sr||n===ar)return r===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===rr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===or)return a.COMPRESSED_R11_EAC;if(n===lr)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Zs)return a.COMPRESSED_RG11_EAC;if(n===cr)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dr||n===ur||n===hr||n===fr||n===pr||n===mr||n===gr||n===xr||n===_r||n===vr||n===Sr||n===Mr||n===br||n===yr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===dr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ur)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_r)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===br)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yr)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===Tr||n===wr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Er)return r===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ar||n===Rr||n===Js||n===Cr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ar)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Rr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const A0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R0=`
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

}`;class C0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ec(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cn({vertexShader:A0,fragmentShader:R0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N0 extends ai{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,m=null,v=null;const b=typeof XRWebGLBinding<"u",x=new C0,f={},w=t.getContextAttributes();let N=null,M=null;const E=[],y=[],R=new je;let _=null,T=null;const C=new jt;C.viewport=new ht;const L=new jt;L.viewport=new ht;const F=[C,L],z=new Fu;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=E[K];return te===void 0&&(te=new Ma,E[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=E[K];return te===void 0&&(te=new Ma,E[K]=te),te.getGripSpace()},this.getHand=function(K){let te=E[K];return te===void 0&&(te=new Ma,E[K]=te),te.getHandSpace()};function j(K){const te=y.indexOf(K.inputSource);if(te===-1)return;const me=E[te];me!==void 0&&(me.update(K.inputSource,K.frame,c||r),me.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ie);for(let K=0;K<E.length;K++){const te=y[K];te!==null&&(y[K]=null,E[K].disconnect(te))}I=null,V=null,x.reset();for(const K in f)delete f[K];if(e.setRenderTarget(N),m=null,u=null,p=null,s=null,M=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(N=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ie),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ne=null,_e=null;w.depth&&(_e=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=w.stencil?Jn:Dn,Ne=w.stencil?ts:Sn);const Ue={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Ue),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new on(u.textureWidth,u.textureHeight,{format:rn,type:Yt,depthTexture:new ss(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const me={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new on(m.framebufferWidth,m.framebufferHeight,{format:rn,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(K){for(let te=0;te<K.removed.length;te++){const me=K.removed[te],Ne=y.indexOf(me);Ne>=0&&(y[Ne]=null,E[Ne].disconnect(me))}for(let te=0;te<K.added.length;te++){const me=K.added[te];let Ne=y.indexOf(me);if(Ne===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=y.length){y.push(me),Ne=Ue;break}else if(y[Ue]===null){y[Ue]=me,Ne=Ue;break}if(Ne===-1)break}const _e=E[Ne];_e&&_e.connect(me)}}const W=new G,Z=new G;function ee(K,te,me){W.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const Ne=W.distanceTo(Z),_e=te.projectionMatrix.elements,Ue=me.projectionMatrix.elements,pt=_e[14]/(_e[10]-1),Fe=_e[14]/(_e[10]+1),Ye=(_e[9]+1)/_e[5],rt=(_e[9]-1)/_e[5],ke=(_e[8]-1)/_e[0],tt=(Ue[8]+1)/Ue[0],xt=pt*ke,Ct=pt*tt,dt=Ne/(-ke+tt),mt=dt*-ke;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(mt),K.translateZ(dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_e[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const U=pt+dt,bt=Fe+dt,He=xt-mt,A=Ct+(Ne-mt),g=Ye*Fe/bt*U,O=rt*Fe/bt*U;K.projectionMatrix.makePerspective(He,A,g,O,U,bt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function be(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let te=K.near,me=K.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(me=x.depthFar)),z.near=L.near=C.near=te,z.far=L.far=C.far=me,(I!==z.near||V!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,V=z.far),z.layers.mask=K.layers.mask|6,C.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const Ne=K.parent,_e=z.cameras;be(z,Ne);for(let Ue=0;Ue<_e.length;Ue++)be(_e[Ue],Ne);_e.length===2?ee(z,C,L):z.projectionMatrix.copy(C.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),Te(K,z,Ne)};function Te(K,te,me){me===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=is*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(K){return f[K]};let et=null;function Ge(K,te){if(h=te.getViewerPose(c||r),v=te,h!==null){const me=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ne=!1;me.length!==z.cameras.length&&(z.cameras.length=0,Ne=!0);for(let Fe=0;Fe<me.length;Fe++){const Ye=me[Fe];let rt=null;if(m!==null)rt=m.getViewport(Ye);else{const tt=p.getViewSubImage(u,Ye);rt=tt.viewport,Fe===0&&(e.setRenderTargetTextures(M,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(M))}let ke=F[Fe];ke===void 0&&(ke=new jt,ke.layers.enable(Fe),ke.viewport=new ht,F[Fe]=ke),ke.matrix.fromArray(Ye.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ye.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(rt.x,rt.y,rt.width,rt.height),Fe===0&&(z.matrix.copy(ke.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ne===!0&&z.cameras.push(ke)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=n.getBinding();const Fe=p.getDepthInformation(me[0]);Fe&&Fe.isValid&&Fe.texture&&x.init(Fe,s.renderState)}if(_e&&_e.includes("camera-access")&&b){e.state.unbindTexture(),p=n.getBinding();for(let Fe=0;Fe<me.length;Fe++){const Ye=me[Fe].camera;if(Ye){let rt=f[Ye];rt||(rt=new ec,f[Ye]=rt);const ke=p.getCameraImage(Ye);rt.sourceTexture=ke}}}}for(let me=0;me<E.length;me++){const Ne=y[me],_e=E[me];Ne!==null&&_e!==void 0&&_e.update(Ne,te,c||r)}et&&et(K,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}const qe=new sc;qe.setAnimationLoop(Ge),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}}const I0=new ft,uc=new Pe;uc.set(-1,0,0,0,1,0,0,0,1);function D0(i,e){function t(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function n(x,f){f.color.getRGB(x.fogColor.value,tc(i)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function s(x,f,w,N,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(x,f):f.isMeshLambertMaterial?(a(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(x,f),p(x,f)):f.isMeshPhongMaterial?(a(x,f),h(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(x,f),u(x,f),f.isMeshPhysicalMaterial&&m(x,f,M)):f.isMeshMatcapMaterial?(a(x,f),v(x,f)):f.isMeshDepthMaterial?a(x,f):f.isMeshDistanceMaterial?(a(x,f),b(x,f)):f.isMeshNormalMaterial?a(x,f):f.isLineBasicMaterial?(r(x,f),f.isLineDashedMaterial&&o(x,f)):f.isPointsMaterial?l(x,f,w,N):f.isSpriteMaterial?c(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,t(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===Gt&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,t(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===Gt&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,t(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,t(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const w=e.get(f),N=w.envMap,M=w.envMapRotation;N&&(x.envMap.value=N,x.envMapRotation.value.setFromMatrix4(I0.makeRotationFromEuler(M)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(uc),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,x.aoMapTransform))}function r(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform))}function o(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,w,N){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*w,x.scale.value=N*.5,f.map&&(x.map.value=f.map,t(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function c(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function p(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function u(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function m(x,f,w){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gt&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.retroreflectivity>0&&(x.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,f){f.matcap&&(x.matcap.value=f.matcap)}function b(x,f){const w=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function P0(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const y=E.program;n.uniformBlockBinding(M,y)}function c(M,E){let y=s[M.id];y===void 0&&(x(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",w));const R=E.program;n.updateUBOMapping(M,R);const _=e.render.frame;a[M.id]!==_&&(u(M),a[M.id]=_)}function h(M){const E=p();M.__bindingPointIndex=E;const y=i.createBuffer(),R=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function p(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const E=s[M.id],y=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,T=y.length;_<T;_++){const C=y[_];if(Array.isArray(C))for(let L=0,F=C.length;L<F;L++)m(C[L],_,L,R);else m(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,E,y,R){if(b(M,E,y,R)===!0){const _=M.__offset,T=M.value;if(Array.isArray(T)){let C=0;for(let L=0;L<T.length;L++){const F=T[L],z=f(F);v(F,M.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function v(M,E,y){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,y)}function b(M,E,y,R){const _=M.value,T=E+"_"+y;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const C=R[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function x(M){const E=M.uniforms;let y=0;const R=16;for(let T=0,C=E.length;T<C;T++){const L=Array.isArray(E[T])?E[T]:[E[T]];for(let F=0,z=L.length;F<z;F++){const I=L[F],V=Array.isArray(I.value)?I.value:[I.value];for(let j=0,Y=V.length;j<Y;j++){const ie=V[j],W=f(ie),Z=y%R,ee=Z%W.boundary,be=Z+ee;y+=ee,be!==0&&R-be<W.storage&&(y+=R-be),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=W.storage}}}const _=y%R;return _>0&&(y+=R-_),M.__size=y,M.__cache={},this}function f(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",M),E}function w(M){const E=M.target;E.removeEventListener("dispose",w);const y=r.indexOf(E.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function N(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},a={}}return{bind:l,update:c,dispose:N}}const L0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pn=null;function U0(){return pn===null&&(pn=new Mu(L0,16,16,ii,Mn),pn.name="DFG_LUT",pn.minFilter=Pt,pn.magFilter=Pt,pn.wrapS=Cn,pn.wrapT=Cn,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}class F0{constructor(e={}){const{canvas:t=Ud(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Yt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=r;const b=m,x=new Set([Gr,zr,kr]),f=new Set([Yt,Sn,es,ts,Or,Br]),w=new Uint32Array(4),N=new Int32Array(4),M=new G;let E=null,y=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,F=null,z=null,I=null,V=null;this._outputColorSpace=Qt;let j=0,Y=0,ie=null,W=-1,Z=null;const ee=new ht,be=new ht;let Te=null;const et=new ze(0);let Ge=0,qe=t.width,K=t.height,te=1,me=null,Ne=null;const _e=new ht(0,0,qe,K),Ue=new ht(0,0,qe,K);let pt=!1;const Fe=new Yr;let Ye=!1,rt=!1;const ke=new ft,tt=new G,xt=new ht,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function mt(){return ie===null?te:1}let U=n;function bt(S,D){return t.getContext(S,D)}let He,A,g,O,H,q,ae,oe,$,Q,ce,we,ue,le,Ae,Ce,De,P,se,J,de,he,ne;try{const S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lr}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Ht,!1),U===null){const D="webgl2";if(U=bt(D,S),U===null)throw bt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(S){throw t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Ht,!1),Ze("WebGLRenderer: "+S.message),S}function Re(){He=new Up(U),He.init(),de=new w0(U,He),A=new Tp(U,He,e,de),g=new E0(U,He),A.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),z=U.createFramebuffer(),I=U.createFramebuffer(),V=U.createFramebuffer(),O=new Bp(U),H=new d0,q=new T0(U,He,g,H,A,de,O),ae=new Lp(C),oe=new ku(U),he=new yp(U,oe),$=new Fp(U,oe,O,he),Q=new zp(U,$,oe,he,O),P=new kp(U,A,q),Ae=new wp(H),ce=new c0(C,ae,He,A,he,Ae),we=new D0(C,H),ue=new h0,le=new _0(He),De=new bp(C,ae,g,Q,v,l),Ce=new y0(C,Q,A),ne=new P0(U,O,A,g),se=new Ep(U,He,O),J=new Op(U,He,O),O.programs=ce.programs,C.capabilities=A,C.extensions=He,C.properties=H,C.renderLists=ue,C.shadowMap=Ce,C.state=g,C.info=O}b!==Yt&&(T=new Vp(b,t.width,t.height,o,s,a));const Ee=new N0(C,U);this.xr=Ee,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=He.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=He.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(S){S!==void 0&&(te=S,this.setSize(qe,K,!1))},this.getSize=function(S){return S.set(qe,K)},this.setSize=function(S,D,X=!0){if(Ee.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=S,K=D,t.width=Math.floor(S*te),t.height=Math.floor(D*te),X===!0&&(t.style.width=S+"px",t.style.height=D+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(qe*te,K*te).floor()},this.setDrawingBufferSize=function(S,D,X){qe=S,K=D,te=X,t.width=Math.floor(S*X),t.height=Math.floor(D*X),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(b===Yt){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ee)},this.getViewport=function(S){return S.copy(_e)},this.setViewport=function(S,D,X,B){S.isVector4?_e.set(S.x,S.y,S.z,S.w):_e.set(S,D,X,B),g.viewport(ee.copy(_e).multiplyScalar(te).round())},this.getScissor=function(S){return S.copy(Ue)},this.setScissor=function(S,D,X,B){S.isVector4?Ue.set(S.x,S.y,S.z,S.w):Ue.set(S,D,X,B),g.scissor(be.copy(Ue).multiplyScalar(te).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(S){g.setScissorTest(pt=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){Ne=S},this.getClearColor=function(S){return S.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,X=!0){let B=0;if(S){let k=!1;if(ie!==null){const pe=ie.texture.format;k=x.has(pe)}if(k){const pe=ie.texture.type,ve=f.has(pe),re=De.getClearColor(),Se=De.getClearAlpha(),ye=re.r,Le=re.g,Be=re.b;ve?(w[0]=ye,w[1]=Le,w[2]=Be,w[3]=Se,U.clearBufferuiv(U.COLOR,0,w)):(N[0]=ye,N[1]=Le,N[2]=Be,N[3]=Se,U.clearBufferiv(U.COLOR,0,N))}else B|=U.COLOR_BUFFER_BIT}D&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Ht,!1),De.dispose(),ue.dispose(),le.dispose(),H.dispose(),ae.dispose(),Q.dispose(),he.dispose(),ne.dispose(),ce.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",ls),Ee.removeEventListener("sessionend",cs),bn.stop()};function ot(S){S.preventDefault(),yo("WebGLRenderer: Context Lost."),L=!0}function $e(){yo("WebGLRenderer: Context Restored."),L=!1;const S=O.autoReset,D=Ce.enabled,X=Ce.autoUpdate,B=Ce.needsUpdate,k=Ce.type;Re(),O.autoReset=S,Ce.enabled=D,Ce.autoUpdate=X,Ce.needsUpdate=B,Ce.type=k}function Ht(S){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function qt(S){const D=S.target;D.removeEventListener("dispose",qt),oa(D)}function oa(S){os(S),H.remove(S)}function os(S){const D=H.get(S).programs;D!==void 0&&(D.forEach(function(X){ce.releaseProgram(X)}),S.isShaderMaterial&&ce.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,X,B,k,pe){D===null&&(D=Ct);const ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,re=ms(S,D,X,B,k);g.setMaterial(B,ve);let Se=X.index,ye=1;if(B.wireframe===!0){if(Se=$.getWireframeAttribute(X),Se===void 0)return;ye=2}const Le=X.drawRange,Be=X.attributes.position;let Me=Le.start*ye,Ke=(Le.start+Le.count)*ye;pe!==null&&(Me=Math.max(Me,pe.start*ye),Ke=Math.min(Ke,(pe.start+pe.count)*ye)),Se!==null?(Me=Math.max(Me,0),Ke=Math.min(Ke,Se.count)):Be!=null&&(Me=Math.max(Me,0),Ke=Math.min(Ke,Be.count));const gt=Ke-Me;if(gt<0||gt===1/0)return;he.setup(k,B,re,X,Se);let Je,st=se;if(Se!==null&&(Je=oe.get(Se),st=J,st.setIndex(Je)),k.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*mt()),st.setMode(U.LINES)):st.setMode(U.TRIANGLES);else if(k.isLine){let yt=B.linewidth;yt===void 0&&(yt=1),g.setLineWidth(yt*mt()),k.isLineSegments?st.setMode(U.LINES):k.isLineLoop?st.setMode(U.LINE_LOOP):st.setMode(U.LINE_STRIP)}else k.isPoints?st.setMode(U.POINTS):k.isSprite&&st.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(He.get("WEBGL_multi_draw"))st.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const yt=k._multiDrawStarts,ge=k._multiDrawCounts,Tt=k._multiDrawCount,We=Se?oe.get(Se).bytesPerElement:1,kt=H.get(B).currentProgram.getUniforms();for(let Zt=0;Zt<Tt;Zt++)kt.setValue(U,"_gl_DrawID",Zt),st.render(yt[Zt]/We,ge[Zt])}else if(k.isInstancedMesh)st.renderInstances(Me,gt,k.count);else if(X.isInstancedBufferGeometry){const yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ge=Math.min(X.instanceCount,yt);st.renderInstances(Me,gt,ge)}else st.render(Me,gt)};function $t(S,D,X,B){F!==null&&S.isNodeMaterial&&F.setObject(B,S),Ye===!0&&Ae.setState(S,X,!1),S.transparent===!0&&S.side===gn&&S.forceSinglePass===!1?(S.side=Gt,S.needsUpdate=!0,ri(S,D,B),S.side=ti,S.needsUpdate=!0,ri(S,D,B),S.side=gn):ri(S,D,B)}this.compile=function(S,D,X=null){X===null&&(X=S),F!==null&&F.renderStart(S,D,X),y=le.get(X),y.init(D),_.push(y),X.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(y.pushLight(k),k.castShadow&&y.pushShadow(k))}),S!==X&&S.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(y.pushLight(k),k.castShadow&&y.pushShadow(k))}),y.setupLights(),F!==null&&F.updateLights(y.state.lightsArray),rt=this.localClippingEnabled,Ye=Ae.init(this.clippingPlanes,rt),Ye===!0&&Ae.setGlobalState(this.clippingPlanes,D),F!==null&&Ce.render(y.state.shadowsArray,X,D);const B=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pe=k.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const re=pe[ve];$t(re,X,D,k),B.add(re)}else $t(pe,X,D,k),B.add(pe)}),y=_.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(S,D,X=null){const B=this.compile(S,D,X);return new Promise(k=>{function pe(){if(B.forEach(function(ve){const Se=H.get(ve).currentProgram;(Se===void 0||Se.isReady())&&B.delete(ve)}),B.size===0){k(S);return}setTimeout(pe,10)}He.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ui=null;function Fi(S){Ui&&Ui(S)}function ls(){bn.stop()}function cs(){bn.start()}const bn=new sc;bn.setAnimationLoop(Fi),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(S){Ui=S,Ee.setAnimationLoop(S),S===null?bn.stop():bn.start()},Ee.addEventListener("sessionstart",ls),Ee.addEventListener("sessionend",cs),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(S,D);const X=Ee.enabled===!0&&Ee.isPresenting===!0,B=T!==null&&(ie===null||X)&&T.begin(C,ie);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(D),D=Ee.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,D,ie),y=le.get(S,_.length),y.init(D),y.state.textureUnits=q.getTextureUnits(),_.push(y),ke.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Fe.setFromProjectionMatrix(ke,_n,D.reversedDepth),rt=this.localClippingEnabled,Ye=Ae.init(this.clippingPlanes,rt),E=ue.get(S,R.length),E.init(),R.push(E),Ee.enabled===!0&&Ee.isPresenting===!0){const ve=C.xr.getDepthSensingMesh();ve!==null&&Oi(ve,D,-1/0,C.sortObjects)}Oi(S,D,0,C.sortObjects),E.finish(),F!==null&&F.updateLights(y.state.lightsArray),C.sortObjects===!0&&E.sort(me,Ne),dt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,dt&&De.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Ae.beginShadows();const k=y.state.shadowsArray;if(Ce.render(k,S,D),Ye===!0&&Ae.endShadows(),(B&&T.hasRenderPass())===!1){const ve=E.opaque,re=E.transmissive;if(y.setupLights(),D.isArrayCamera){const Se=D.cameras;if(re.length>0)for(let ye=0,Le=Se.length;ye<Le;ye++){const Be=Se[ye];us(ve,re,S,Be)}dt&&De.render(S);for(let ye=0,Le=Se.length;ye<Le;ye++){const Be=Se[ye];ds(E,S,Be,Be.viewport)}}else re.length>0&&us(ve,re,S,D),dt&&De.render(S),ds(E,S,D)}ie!==null&&Y===0&&(q.updateMultisampleRenderTarget(ie),q.updateRenderTargetMipmap(ie)),B&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,D),he.resetDefaultState(),W=-1,Z=null,_.pop(),_.length>0?(y=_[_.length-1],q.setTextureUnits(y.state.textureUnits),Ye===!0&&Ae.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,F!==null&&F.renderEnd()};function Oi(S,D,X,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)y.pushLightProbeGrid(S);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Fe)){B&&xt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ke);const ve=Q.update(S),re=S.material;re.visible&&E.push(S,ve,re,X,xt.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Fe))){const ve=Q.update(S),re=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),xt.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),xt.copy(ve.boundingSphere.center)),xt.applyMatrix4(S.matrixWorld).applyMatrix4(ke)),Array.isArray(re)){const Se=ve.groups;for(let ye=0,Le=Se.length;ye<Le;ye++){const Be=Se[ye],Me=re[Be.materialIndex];Me&&Me.visible&&E.push(S,ve,Me,X,xt.z,Be,D)}}else re.visible&&E.push(S,ve,re,X,xt.z,null,D)}}const pe=S.children;for(let ve=0,re=pe.length;ve<re;ve++)Oi(pe[ve],D,X,B)}function ds(S,D,X,B){const{opaque:k,transmissive:pe,transparent:ve}=S;y.setupLightsView(X),Ye===!0&&Ae.setGlobalState(C.clippingPlanes,X),B&&g.viewport(ee.copy(B)),k.length>0&&dn(k,D,X),pe.length>0&&dn(pe,D,X),ve.length>0&&dn(ve,D,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function us(S,D,X,B){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[B.id]===void 0){const Me=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[B.id]=new on(1,1,{generateMipmaps:!0,type:Me?Mn:Yt,minFilter:Zn,samples:Math.max(4,A.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const pe=y.state.transmissionRenderTarget[B.id],ve=B.viewport||ee;pe.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);const re=C.getRenderTarget(),Se=C.getActiveCubeFace(),ye=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(et),Ge=C.getClearAlpha(),Ge<1&&C.setClearColor(16777215,.5),C.clear(),dt&&De.render(X);const Le=C.toneMapping;C.toneMapping=vn;const Be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),y.setupLightsView(B),Ye===!0&&Ae.setGlobalState(C.clippingPlanes,B),dn(S,X,B),q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe),He.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Ke=0,gt=D.length;Ke<gt;Ke++){const Je=D[Ke],{object:st,geometry:yt,material:ge,group:Tt}=Je;if(ge.side===gn&&st.layers.test(B.layers)){const We=ge.side;ge.side=Gt,ge.needsUpdate=!0,hs(st,X,B,yt,ge,Tt),ge.side=We,ge.needsUpdate=!0,Me=!0}}Me===!0&&(q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe))}C.setRenderTarget(re,Se,ye),C.setClearColor(et,Ge),Be!==void 0&&(B.viewport=Be),C.toneMapping=Le}function dn(S,D,X){const B=D.isScene===!0?D.overrideMaterial:null;for(let k=0,pe=S.length;k<pe;k++){const ve=S[k],{object:re,geometry:Se,group:ye}=ve;let Le=ve.material;Le.allowOverride===!0&&B!==null&&(Le=B),re.layers.test(X.layers)&&hs(re,D,X,Se,Le,ye)}}function hs(S,D,X,B,k,pe){F!==null&&k.isNodeMaterial&&F.setObject(S,k),S.onBeforeRender(C,D,X,B,k,pe),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(C,D,X,B,S,pe),k.transparent===!0&&k.side===gn&&k.forceSinglePass===!1?(k.side=Gt,k.needsUpdate=!0,C.renderBufferDirect(X,D,B,k,S,pe),k.side=ti,k.needsUpdate=!0,C.renderBufferDirect(X,D,B,k,S,pe),k.side=gn):C.renderBufferDirect(X,D,B,k,S,pe),S.onAfterRender(C,D,X,B,k,pe)}function ri(S,D,X){D.isScene!==!0&&(D=Ct);const B=H.get(S),k=y.state.lights,pe=y.state.shadowsArray,ve=k.state.version,re=ce.getParameters(S,k.state,pe,D,X,y.state.lightProbeGridArray),Se=ce.getProgramCacheKey(re);let ye=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;const Le=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=ae.get(S.envMap||B.environment,Le),B.envMapRotation=B.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,ye===void 0&&(S.addEventListener("dispose",qt),ye=new Map,B.programs=ye);let Be=ye.get(Se);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===ve)return Kt(S,re),Be}else re.uniforms=ce.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,X,re),S.onBeforeCompile(re,C),Be=ce.acquireProgram(re,Se),ye.set(Se,Be),B.uniforms=re.uniforms;const Me=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Me.clippingPlanes=Ae.uniform),Kt(S,re),B.needsLights=ca(S),B.lightsStateVersion=ve,B.needsLights&&(Me.ambientLightColor.value=k.state.ambient,Me.lightProbe.value=k.state.probe,Me.sunLights.value=k.state.sun,Me.sunLightShadows.value=k.state.sunShadow,Me.directionalLights.value=k.state.directional,Me.directionalLightShadows.value=k.state.directionalShadow,Me.spotLights.value=k.state.spot,Me.spotLightShadows.value=k.state.spotShadow,Me.rectAreaLights.value=k.state.rectArea,Me.ltc_1.value=k.state.rectAreaLTC1,Me.ltc_2.value=k.state.rectAreaLTC2,Me.pointLights.value=k.state.point,Me.pointLightShadows.value=k.state.pointShadow,Me.hemisphereLights.value=k.state.hemi,Me.sunShadowMatrix.value=k.state.sunShadowMatrix,Me.sunShadowCascade.value=k.state.sunShadowCascade,Me.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Me.spotLightMatrix.value=k.state.spotLightMatrix,Me.spotLightMap.value=k.state.spotLightMap,Me.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=y.state.lightProbeGridArray.length>0,B.currentProgram=Be,B.uniformsList=null,Be}function fs(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=qs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Kt(S,D){const X=H.get(S);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function ps(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let X=0,B=S.length;X<B;X++){const k=S[X];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function ms(S,D,X,B,k){D.isScene!==!0&&(D=Ct),q.resetTextureUnits();const pe=D.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,re=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Xe.workingColorSpace,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,ye=ae.get(B.envMap||ve,Se),Le=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!X.morphAttributes.position,Ke=!!X.morphAttributes.normal,gt=!!X.morphAttributes.color;let Je=vn;B.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Je=C.toneMapping);const st=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=st!==void 0?st.length:0,ge=H.get(B),Tt=y.state.lights;if(Ye===!0&&(rt===!0||S!==Z)){const lt=S===Z&&B.id===W;Ae.setState(B,S,lt)}let We=!1;B.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Tt.state.version||ge.outputColorSpace!==re||k.isBatchedMesh&&ge.batching===!1||!k.isBatchedMesh&&ge.batching===!0||k.isBatchedMesh&&ge.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&ge.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&ge.instancing===!1||!k.isInstancedMesh&&ge.instancing===!0||k.isSkinnedMesh&&ge.skinning===!1||!k.isSkinnedMesh&&ge.skinning===!0||k.isInstancedMesh&&ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ge.instancingMorph===!1&&k.morphTexture!==null||ge.envMap!==ye||B.fog===!0&&ge.fog!==pe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ae.numPlanes||ge.numIntersection!==Ae.numIntersection)||ge.vertexAlphas!==Le||ge.vertexTangents!==Be||ge.morphTargets!==Me||ge.morphNormals!==Ke||ge.morphColors!==gt||ge.toneMapping!==Je||ge.morphTargetsCount!==yt||!!ge.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,ge.__version=B.version);let kt=ge.currentProgram;We===!0&&(kt=ri(B,D,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,kt,ge));let Zt=!1,un=!1,Pn=!1;const Qe=kt.getUniforms(),ut=ge.uniforms;if(g.useProgram(kt.program)&&(Zt=!0,un=!0,Pn=!0),B.id!==W&&(W=B.id,un=!0),ge.needsLights){const lt=ps(y.state.lightProbeGridArray,k);ge.lightProbeGrid!==lt&&(ge.lightProbeGrid=lt,un=!0)}if(Zt||Z!==S){g.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Qe.setValue(U,"projectionMatrix",S.projectionMatrix),Qe.setValue(U,"viewMatrix",S.matrixWorldInverse);const hn=Qe.map.cameraPosition;hn!==void 0&&hn.setValue(U,tt.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&Qe.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Qe.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),Z!==S&&(Z=S,un=!0,Pn=!0)}if(ge.needsLights&&(Tt.state.sunShadowMap.length>0&&Qe.setValue(U,"sunShadowMap",Tt.state.sunShadowMap,q),Tt.state.directionalShadowMap.length>0&&Qe.setValue(U,"directionalShadowMap",Tt.state.directionalShadowMap,q),Tt.state.spotShadowMap.length>0&&Qe.setValue(U,"spotShadowMap",Tt.state.spotShadowMap,q),Tt.state.pointShadowMap.length>0&&Qe.setValue(U,"pointShadowMap",Tt.state.pointShadowMap,q)),k.isSkinnedMesh){Qe.setOptional(U,k,"bindMatrix"),Qe.setOptional(U,k,"bindMatrixInverse");const lt=k.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),Qe.setValue(U,"boneTexture",lt.boneTexture,q))}k.isBatchedMesh&&(Qe.setOptional(U,k,"batchingTexture"),Qe.setValue(U,"batchingTexture",k._matricesTexture,q),Qe.setOptional(U,k,"batchingIdTexture"),Qe.setValue(U,"batchingIdTexture",k._indirectTexture,q),Qe.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&Qe.setValue(U,"batchingColorTexture",k._colorsTexture,q));const en=X.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&P.update(k,X,kt),(un||ge.receiveShadow!==k.receiveShadow)&&(ge.receiveShadow=k.receiveShadow,Qe.setValue(U,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(ut.envMapIntensity.value=D.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=U0()),un){if(Qe.setValue(U,"toneMappingExposure",C.toneMappingExposure),ge.needsLights&&la(ut,Pn),pe&&B.fog===!0&&we.refreshFogUniforms(ut,pe),we.refreshMaterialUniforms(ut,B,te,K,y.state.transmissionRenderTarget[S.id]),ge.needsLights&&ge.lightProbeGrid){const lt=ge.lightProbeGrid;ut.probesSH.value=lt.texture,ut.probesMin.value.copy(lt.boundingBox.min),ut.probesMax.value.copy(lt.boundingBox.max),ut.probesResolution.value.copy(lt.resolution)}qs.upload(U,fs(ge),ut,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(qs.upload(U,fs(ge),ut,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Qe.setValue(U,"center",k.center),Qe.setValue(U,"modelViewMatrix",k.modelViewMatrix),Qe.setValue(U,"normalMatrix",k.normalMatrix),Qe.setValue(U,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){const lt=B.uniformsGroups;for(let hn=0,Ln=lt.length;hn<Ln;hn++){const xs=lt[hn];ne.update(xs,kt),ne.bind(xs,kt)}}return kt}function la(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function ca(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(S,D,X){const B=H.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=D,H.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:X,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const X=H.get(S);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,X=0){ie=S,j=D,Y=X;let B=null,k=!1,pe=!1;if(S){const re=H.get(S);if(re.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,re.__webglFramebuffer),ee.copy(S.viewport),be.copy(S.scissor),Te=S.scissorTest,g.viewport(ee),g.scissor(be),g.setScissorTest(Te),W=-1;return}else if(re.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(re.__hasExternalTextures)q.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Le=S.depthTexture;if(re.__boundDepthTexture!==Le){if(Le!==null&&H.has(Le)&&(S.width!==Le.image.width||S.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}const Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);const ye=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ye[D])?B=ye[D][X]:B=ye[D],k=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?B=H.get(S).__webglMultisampledFramebuffer:Array.isArray(ye)?B=ye[X]:B=ye,ee.copy(S.viewport),be.copy(S.scissor),Te=S.scissorTest}else ee.copy(_e).multiplyScalar(te).floor(),be.copy(Ue).multiplyScalar(te).floor(),Te=pt;if(X!==0&&(B=z),g.bindFramebuffer(U.FRAMEBUFFER,B)&&g.drawBuffers(S,B),g.viewport(ee),g.scissor(be),g.setScissorTest(Te),k){const re=H.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,re.__webglTexture,X)}else if(pe){const re=D;for(let Se=0;Se<S.textures.length;Se++){const ye=H.get(S.textures[Se]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Se,ye.__webglTexture,X,re)}}else if(S!==null&&X!==0){const re=H.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,re.__webglTexture,X)}W=-1};function gs(S){const D=H.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=A.textureFormatReadable(S.format),D.__typeReadable=A.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,X,B,k,pe,ve,re=0){if(!(S&&S.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){g.bindFramebuffer(U.FRAMEBUFFER,Se);try{const ye=S.textures[re],Le=ye.format,Be=ye.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+re);const Me=gs(ye);if(Me.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&X>=0&&X<=S.height-k&&U.readPixels(D,X,B,k,de.convert(Le),de.convert(Be),pe)}finally{const ye=ie!==null?H.get(ie).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(S,D,X,B,k,pe,ve,re=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(D>=0&&D<=S.width-B&&X>=0&&X<=S.height-k){g.bindFramebuffer(U.FRAMEBUFFER,Se);const ye=S.textures[re],Le=ye.format,Be=ye.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+re);const Me=gs(ye);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.bufferData(U.PIXEL_PACK_BUFFER,pe.byteLength,U.STREAM_READ),U.readPixels(D,X,B,k,de.convert(Le),de.convert(Be),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const gt=ie!==null?H.get(ie).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,gt);const Je=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Fd(U,Je,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ke),U.deleteSync(Je),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,X=0){const B=Math.pow(2,-X),k=Math.floor(S.image.width*B),pe=Math.floor(S.image.height*B),ve=D!==null?D.x:0,re=D!==null?D.y:0;q.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,ve,re,k,pe),g.unbindTexture()},this.copyTextureToTexture=function(S,D,X=null,B=null,k=0,pe=0){let ve,re,Se,ye,Le,Be,Me,Ke,gt;const Je=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(X!==null)ve=X.max.x-X.min.x,re=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,ye=X.min.x,Le=X.min.y,Be=X.isBox3?X.min.z:0;else{const ut=Math.pow(2,-k);ve=Math.floor(Je.width*ut),re=Math.floor(Je.height*ut),S.isDataArrayTexture?Se=Je.depth:S.isData3DTexture?Se=Math.floor(Je.depth*ut):Se=1,ye=0,Le=0,Be=0}B!==null?(Me=B.x,Ke=B.y,gt=B.z):(Me=0,Ke=0,gt=0);const st=de.convert(D.format),yt=de.convert(D.type);let ge;D.isData3DTexture?(q.setTexture3D(D,0),ge=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(q.setTexture2DArray(D,0),ge=U.TEXTURE_2D_ARRAY):(q.setTexture2D(D,0),ge=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Tt=g.getParameter(U.UNPACK_ROW_LENGTH),We=g.getParameter(U.UNPACK_IMAGE_HEIGHT),kt=g.getParameter(U.UNPACK_SKIP_PIXELS),Zt=g.getParameter(U.UNPACK_SKIP_ROWS),un=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,Je.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,ye),g.pixelStorei(U.UNPACK_SKIP_ROWS,Le),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Be);const Pn=S.isDataArrayTexture||S.isData3DTexture,Qe=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const ut=H.get(S),en=H.get(D),lt=H.get(ut.__renderTarget),hn=H.get(en.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,lt.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let Ln=0;Ln<Se;Ln++)Pn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(S).__webglTexture,k,Be+Ln),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(D).__webglTexture,pe,gt+Ln)),U.blitFramebuffer(ye,Le,ve,re,Me,Ke,ve,re,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||H.has(S)){const ut=H.get(S),en=H.get(D);g.bindFramebuffer(U.READ_FRAMEBUFFER,I),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let lt=0;lt<Se;lt++)Pn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ut.__webglTexture,k,Be+lt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ut.__webglTexture,k),Qe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,en.__webglTexture,pe,gt+lt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,en.__webglTexture,pe),k!==0?U.blitFramebuffer(ye,Le,ve,re,Me,Ke,ve,re,U.COLOR_BUFFER_BIT,U.NEAREST):Qe?U.copyTexSubImage3D(ge,pe,Me,Ke,gt+lt,ye,Le,ve,re):U.copyTexSubImage2D(ge,pe,Me,Ke,ye,Le,ve,re);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Qe?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(ge,pe,Me,Ke,gt,ve,re,Se,st,yt,Je.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(ge,pe,Me,Ke,gt,ve,re,Se,st,Je.data):U.texSubImage3D(ge,pe,Me,Ke,gt,ve,re,Se,st,yt,Je):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pe,Me,Ke,ve,re,st,yt,Je.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pe,Me,Ke,Je.width,Je.height,st,Je.data):U.texSubImage2D(U.TEXTURE_2D,pe,Me,Ke,ve,re,st,yt,Je);g.pixelStorei(U.UNPACK_ROW_LENGTH,Tt),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,We),g.pixelStorei(U.UNPACK_SKIP_PIXELS,kt),g.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),g.pixelStorei(U.UNPACK_SKIP_IMAGES,un),pe===0&&D.generateMipmaps&&U.generateMipmap(ge),g.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),g.unbindTexture()},this.resetState=function(){j=0,Y=0,ie=null,g.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Hn={fog:{color:263431,densityDesktop:.026,densityMobile:.034},lighting:{ambientIntensity:.85,ambientColor:791330,moonlightIntensity:2.1,moonlightColor:3718648,emergencyBeaconIntensity:2.8,emergencyBeaconColor:13637664,doorwayLightIntensity:4.5,doorwayHoverIntensity:12,doorwayColor:11735835},particles:{dustCountDesktop:420,dustCountMobile:150,dustColor:9741240},performance:{maxPixelRatio:1.5}};function O0(i){const e=[],t=new ei(36,80,1,1),n=new Fa({color:329225,roughness:.18,metalness:.85}),s=new ct(t,n);s.rotation.x=-Math.PI/2,s.position.set(0,0,-12),i.add(s),e.push(t,n);const a=new si(.9,8.5,.9),r=new Fa({color:724242,roughness:.85,metalness:.15});e.push(a,r);const o=new ei(.12,1.9),l=new Qn({color:13637664,transparent:!0,opacity:.55});e.push(o,l);for(let b=4;b>=-28;b-=5.5){const x=new ct(a,r);x.position.set(-3.8,4.25,b),i.add(x);const f=new ct(o,l);f.position.set(-3.34,3.4,b),f.rotation.y=Math.PI/2,i.add(f);const w=new ct(a,r);w.position.set(3.8,4.25,b),i.add(w);const N=new ct(o,l);N.position.set(3.34,3.4,b),N.rotation.y=-Math.PI/2,i.add(N)}const c=new si(3.6,6.2,.4),h=new Fa({color:263431,roughness:.95}),p=new ct(c,h);p.position.set(0,3.1,-29),i.add(p),e.push(c,h);const u=new ei(2.6,5.6),m=new Qn({color:13637664,transparent:!0,opacity:.45}),v=new ct(u,m);return v.position.set(0,3,-28.75),i.add(v),e.push(u,m),{dispose:()=>{e.forEach(b=>b.dispose&&b.dispose())}}}function B0(i){const{lighting:e}=Hn,t=new Lu(e.ambientColor,e.ambientIntensity);i.add(t);const n=new Pu(e.moonlightColor,e.moonlightIntensity);n.position.set(8,14,5),n.target.position.set(0,1.5,0),i.add(n),i.add(n.target);const s=new jo(e.emergencyBeaconColor,e.emergencyBeaconIntensity,14,1.4);s.position.set(-3.2,3.8,-8),i.add(s);const a=new jo(e.doorwayColor,e.doorwayLightIntensity,24,1.1);a.position.set(0,2.5,-28),i.add(a);let r=!1;return{update:(o,l,c)=>{Math.sin(o*.2)>.97?(r=!0,n.intensity=e.moonlightIntensity*(Math.random()*.6+.4)):(r=!1,n.intensity=e.moonlightIntensity);const h=c>.75?e.doorwayLightIntensity+(c-.75)*8:e.doorwayLightIntensity,p=l?e.doorwayHoverIntensity:h;a.intensity+=(p-a.intensity)*.08},isFlickering:()=>r,dispose:()=>{i.remove(t),i.remove(n),i.remove(s),i.remove(a)}}}function k0(i){const e=[],t=[],n=new Vn;n.position.set(0,0,-10),i.add(n);const s=(W,Z)=>{const ee=new cn({transparent:!0,side:gn,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new ze(W)},uRimColor:{value:new ze(Z)},uOpacity:{value:0}},vertexShader:`
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
      `});return t.push(ee),e.push(ee),ee},a=s(329224,13637664),r=s(131844,3718648),o=new Ai(.32,1.2,2.7,24,18,!0),l=new ct(o,a);l.position.y=1.35,n.add(l),e.push(o);const c=new Ai(.26,.9,2.4,20,14,!0),h=new ct(c,r);h.position.y=1.3,n.add(h),e.push(c);const p=new Vn;p.position.set(0,2.65,0),n.add(p);const u=new $r(.52,.9,20,10,!0),m=new ct(u,a);m.rotation.x=Math.PI*.9,m.position.set(0,.1,-.08),p.add(m),e.push(u);const v=new Ki(.3,14,14),b=new Qn({color:0}),x=new ct(v,b);x.position.set(0,0,.05),p.add(x),e.push(v,b);const f=new Ki(.04,10,10),w=new Qn({color:16777215,toneMapped:!1});e.push(f,w);const N=new ct(f,w);N.position.set(-.1,.02,.25),p.add(N);const M=new ct(f,w);M.position.set(.1,.02,.25),p.add(M);const E=new Ki(.08,8,8),y=new Qn({color:13637664,transparent:!0,opacity:.8,blending:Ji});e.push(E,y);const R=new ct(E,y);R.position.set(-.1,.02,.25),p.add(R);const _=new ct(E,y);_.position.set(.1,.02,.25),p.add(_);const T=new Ai(.05,.12,.85,10,6,!0);e.push(T);const C=new Vn;C.position.set(-.6,2.05,.1),C.rotation.set(.45,0,-.35);const L=new ct(T,a);L.position.y=-.42,C.add(L),n.add(C);const F=new Vn;F.position.set(.6,2,.12),F.rotation.set(.55,0,.38);const z=new ct(T,a);z.position.y=-.42,F.add(z),n.add(F);const I=350,V=new Vt,j=new Float32Array(I*3);for(let W=0;W<I;W++){const Z=Math.random()*Math.PI*2,ee=.35+Math.random()*1.8;j[W*3]=Math.cos(Z)*ee,j[W*3+1]=Math.random()*3.2,j[W*3+2]=Math.sin(Z)*ee}V.setAttribute("position",new ln(j,3));const Y=new qr({color:13637664,size:.04,transparent:!0,opacity:.7,blending:Ji}),ie=new Jl(V,Y);return n.add(ie),e.push(V,Y),{group:n,head:p,setOpacity:W=>{t.forEach(Z=>{Z.uniforms.uOpacity.value=W}),Y.opacity=W*.75,w.opacity=W,y.opacity=W*.8},update:(W,Z)=>{t.forEach(be=>{be.uniforms.uTime.value=W}),n.position.y=Math.sin(W*1.3)*.12,p.rotation.y=Z.x*.4,p.rotation.x=-Z.y*.3,C.rotation.x=.45+Math.sin(W*1.6)*.05,F.rotation.x=.55+Math.cos(W*1.4)*.05;const ee=V.attributes.position.array;for(let be=0;be<I;be++)ee[be*3+1]+=.01,ee[be*3+1]>3.4&&(ee[be*3+1]=.1);V.attributes.position.needsUpdate=!0},dispose:()=>{i.remove(n),e.forEach(W=>W.dispose&&W.dispose())}}}const Jr={pageSections:[{id:"hero",enabled:!0},{id:"case",enabled:!0},{id:"evidence",enabled:!0},{id:"investigation",enabled:!0},{id:"timeline",enabled:!0},{id:"council",enabled:!0},{id:"rewards",enabled:!0},{id:"benefits",enabled:!0},{id:"sponsors",enabled:!0},{id:"faq",enabled:!0},{id:"final",enabled:!0}],cameraStages:[{progressEnd:.15,name:"Arrival & Room Overview",camPos:{start:[-.2,1.85,6.8],end:[-.5,1.7,4.8]},lookAt:{start:[0,1.8,0],end:[-.2,1.7,-2]}},{progressEnd:.35,name:"The Evidence & Dossiers",camPos:{start:[-.5,1.7,4.8],end:[1.2,1.85,1.6]},lookAt:{start:[-.2,1.7,-2],end:[-.4,1.9,-5]}},{progressEnd:.55,name:"The Monolithic Hallway",camPos:{start:[1.2,1.85,1.6],end:[-.6,1.8,-6.5]},lookAt:{start:[-.4,1.9,-5],end:[0,1.8,-18]}},{progressEnd:.75,name:"The 36-Hour Deep Corridor",camPos:{start:[-.6,1.8,-6.5],end:[.4,1.8,-16]},lookAt:{start:[0,1.8,-18],end:[0,2,-26]}},{progressEnd:1,name:"The Final Illuminated Doorway",camPos:{start:[.4,1.8,-16],end:[0,2.1,-24.5]},lookAt:{start:[0,2,-26],end:[0,2.3,-28.5]}}],ghostEvents:[{id:"event_a_arrival_presence",label:"Distant Hallway Presence",sceneId:"hero",startProgress:.02,peakProgress:.08,endProgress:.16,position:[.3,1.4,-6.5],maxOpacity:.75,behavior:"subtle-dissolve",enabled:!0},{id:"event_b_pillar_shadow",label:"Silhouette Behind Arch Pillar",sceneId:"investigation",startProgress:.36,peakProgress:.44,endProgress:.52,position:[-2.8,1.2,-12],maxOpacity:.68,behavior:"peek-fade",enabled:!0},{id:"event_c_corridor_crossing",label:"Figure Crossing Corridor Depth",sceneId:"timeline",startProgress:.62,peakProgress:.7,endProgress:.78,position:[1.8,1.3,-20.5],maxOpacity:.72,behavior:"cross-mist",enabled:!0},{id:"event_d_final_portal_sentinel",label:"Distant Sentinel Near Doorway",sceneId:"final",startProgress:.88,peakProgress:.94,endProgress:1,position:[-1.4,1.5,-26.5],maxOpacity:.6,behavior:"threshold-fade",enabled:!0}]};function z0(i){const e=k0(i),t=Jr.ghostEvents.filter(s=>s.enabled);let n=0;return{update:(s,a,r)=>{let o=null,l=0;for(const c of t)if(r>=c.startProgress&&r<=c.endProgress){o=c,r<c.peakProgress?l=(r-c.startProgress)/(c.peakProgress-c.startProgress)*c.maxOpacity:l=(1-(r-c.peakProgress)/(c.endProgress-c.peakProgress))*c.maxOpacity;break}n+=(l-n)*.08,e.setOpacity(n),o&&n>.01?(e.group.position.x=o.position[0],e.group.position.z=o.position[2],e.update(s,a)):n>.01&&e.update(s,a)},dispose:()=>{e.dispose()}}}function G0(i,e=!1){const t=e?Hn.particles.dustCountMobile:Hn.particles.dustCountDesktop,n=new Vt,s=new Float32Array(t*3);for(let o=0;o<t;o++)s[o*3]=(Math.random()-.5)*16,s[o*3+1]=Math.random()*6.5,s[o*3+2]=6-Math.random()*34;n.setAttribute("position",new ln(s,3));const a=new qr({color:Hn.particles.dustColor,size:.035,transparent:!0,opacity:.4,blending:Ji}),r=new Jl(n,a);return i.add(r),{update:()=>{const o=n.attributes.position.array;for(let l=1;l<o.length;l+=3)o[l]-=.0035,o[l]<.1&&(o[l]=6);n.attributes.position.needsUpdate=!0},dispose:()=>{i.remove(r),n.dispose(),a.dispose()}}}function V0(i,e=!1){const t=e?Hn.fog.densityMobile:Hn.fog.densityDesktop;return i.fog=new jr(Hn.fog.color,t),{setDensity:n=>{i.fog&&(i.fog.density=n)},dispose:()=>{i.fog=null}}}function H0(i){const e=Jr.cameraStages,t=new G(...e[0].camPos.start),n=new G(...e[0].camPos.start),s=new G(...e[0].lookAt.start),a=new G(...e[0].lookAt.start);return i.position.copy(t),i.lookAt(s),{update:(r,o)=>{let l=e[0],c=0;for(let m=0;m<e.length;m++)if(r<=e[m].progressEnd){l=e[m],c=m===0?0:e[m-1].progressEnd;break}const h=l.progressEnd-c,p=h>0?Math.min(Math.max((r-c)/h,0),1):0,u=.5-.5*Math.cos(p*Math.PI);n.x=li.lerp(l.camPos.start[0],l.camPos.end[0],u),n.y=li.lerp(l.camPos.start[1],l.camPos.end[1],u),n.z=li.lerp(l.camPos.start[2],l.camPos.end[2],u),a.x=li.lerp(l.lookAt.start[0],l.lookAt.end[0],u),a.y=li.lerp(l.lookAt.start[1],l.lookAt.end[1],u),a.z=li.lerp(l.lookAt.start[2],l.lookAt.end[2],u),n.x+=o.x*.35,n.y+=o.y*.2,t.x+=(n.x-t.x)*.045,t.y+=(n.y-t.y)*.045,t.z+=(n.z-t.z)*.045,i.position.copy(t),s.x+=(a.x-s.x)*.045,s.y+=(a.y-s.y)*.045,s.z+=(a.z-s.z)*.045,i.lookAt(s)}}}function W0(){const i=Jr.pageSections.filter(t=>t.enabled);let e=i[0]?i[0].id:"hero";return{getActiveScene:()=>e,update:t=>{const n=i.length;if(n===0)return;const s=Math.min(Math.floor(t*n),n-1);i[s]&&(e=i[s].id)}}}xe.memo(function({scrollProgress:e=0,finalDoorHovered:t=!1}){const n=xe.useRef(null);return xe.useEffect(()=>{const s=n.current;if(!s)return;try{const C=document.createElement("canvas");if(!(C.getContext("webgl2")||C.getContext("webgl")))return}catch{return}const a=window.innerWidth,r=window.innerHeight,o=a<768,l=new fu,c=new jt(50,a/r,.1,85),h=new F0({alpha:!0,antialias:!o,powerPreference:"high-performance"});h.setSize(a,r),h.setPixelRatio(Math.min(window.devicePixelRatio,Hn.performance.maxPixelRatio)),h.toneMapping=Ur,h.toneMappingExposure=1.25,s.appendChild(h.domElement);const p=W0(),u=H0(c),m=O0(l),v=B0(l),b=V0(l,o),x=G0(l,o),f=z0(l),w={x:0,y:0,targetX:0,targetY:0},N=C=>{w.targetX=(C.clientX/window.innerWidth-.5)*2,w.targetY=-(C.clientY/window.innerHeight-.5)*2},M=()=>{const C=window.innerWidth,L=window.innerHeight;c.aspect=C/L,c.updateProjectionMatrix(),h.setSize(C,L)};window.addEventListener("mousemove",N,{passive:!0}),window.addEventListener("resize",M);let E=null,y=new Ou,R=!1;const _=()=>{R=document.hidden,R||y.start()};document.addEventListener("visibilitychange",_);const T=()=>{if(E=requestAnimationFrame(T),R)return;const C=y.getElapsedTime();w.x+=(w.targetX-w.x)*.05,w.y+=(w.targetY-w.y)*.05;const L=s.dataset.scrollProgress?parseFloat(s.dataset.scrollProgress):0,F=s.dataset.doorHovered==="true";p.update(L),u.update(L,w),v.update(C,F,L),x.update(),f.update(C,w,L),h.render(l,c)};return E=requestAnimationFrame(T),()=>{E&&cancelAnimationFrame(E),window.removeEventListener("mousemove",N),window.removeEventListener("resize",M),document.removeEventListener("visibilitychange",_),m.dispose(),v.dispose(),b.dispose(),x.dispose(),f.dispose(),h&&(h.dispose(),h.domElement&&h.domElement.parentNode&&h.domElement.parentNode.removeChild(h.domElement))}},[]),d.jsx("div",{ref:n,"data-scroll-progress":e,"data-door-hovered":t?"true":"false",className:"fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})});const X0=xe.memo(function(){return d.jsx("div",{className:"film-grain","aria-hidden":"true"})}),j0=xe.memo(function({intensity:e="medium"}){const t=e==="deep"?"radial-gradient(circle at center, transparent 35%, rgba(4, 4, 4, 0.85) 80%, #000000 100%)":"radial-gradient(circle at center, transparent 45%, rgba(6, 6, 6, 0.7) 85%, #050505 100%)";return d.jsx("div",{className:"fixed inset-0 pointer-events-none z-30",style:{background:t},"aria-hidden":"true"})}),Y0=xe.memo(function(){return d.jsx("div",{className:"crt-scanlines","aria-hidden":"true"})});xe.memo(function(){return d.jsxs(d.Fragment,{children:[d.jsx(X0,{}),d.jsx(Y0,{}),d.jsx(j0,{intensity:"medium"})]})});const q0=xe.memo(function(){const e=Sl.useRef(null),[t,n]=xe.useState("default"),[s,a]=xe.useState(!1);return xe.useEffect(()=>{const r="ontouchstart"in window||navigator.maxTouchPoints>0,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(r||o)return;a(!0);let l=-100,c=-100,h=null;const p=()=>{e.current&&(e.current.style.transform=`translate3d(${l}px, ${c}px, 0) translate(-50%, -50%)`),h=null},u=m=>{l=m.clientX,c=m.clientY,h||(h=requestAnimationFrame(p));const v=m.target;v&&(v.closest("button[type='button'], .cta-button, a[href*='registration']")?n("cta"):v.closest(".evidence-card, [id='evidence']")?n("crosshair"):v.closest("a, button, input, summary, [role='button']")?n("hover"):n("default"))};return window.addEventListener("mousemove",u,{passive:!0}),()=>{window.removeEventListener("mousemove",u),h&&cancelAnimationFrame(h)}},[]),s?d.jsxs("div",{ref:e,className:"fixed top-0 left-0 pointer-events-none z-50 will-change-transform transform-gpu",style:{transform:"translate3d(-100px, -100px, 0) translate(-50%, -50%)"},"aria-hidden":"true",children:[d.jsx("div",{className:"w-80 h-80 rounded-full bg-radial from-amber-100/[0.035] via-[#B3131B]/[0.015] to-transparent blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}),t==="default"&&d.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#D01820] shadow-[0_0_8px_#D01820]"}),t==="hover"&&d.jsx("div",{className:"w-8 h-8 rounded-full border border-stone-300 bg-white/10 transition-all duration-200 shadow-[0_0_12px_rgba(255,255,255,0.3)] animate-ping"}),t==="crosshair"&&d.jsxs("div",{className:"relative w-7 h-7 flex items-center justify-center",children:[d.jsx("div",{className:"w-5 h-5 rounded-full border border-[#D01820] shadow-[0_0_8px_#D01820]"}),d.jsx("div",{className:"absolute w-7 h-[1px] bg-[#D01820]"}),d.jsx("div",{className:"absolute h-7 w-[1px] bg-[#D01820]"})]}),t==="cta"&&d.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-[#D01820] bg-[#D01820]/20 shadow-[0_0_20px_#D01820] transition-all duration-200 animate-pulse"})]}):null}),zt={branding:{name:"BUILDX",subOrganizer:"A CODE-A-NOVA HACKATHON",tagline:"36 HOURS. ONE MYSTERY. INFINITE POSSIBILITIES.",missionDescription:"BUILDX is a 36-hour national-level online hackathon where developers, engineers, and designers investigate real challenges and engineer breakthrough software."},dates:{start:new Date(Date.now()+840*60*60*1e3).toISOString(),end:new Date(Date.now()+888*60*60*1e3).toISOString()},registration:{ctaText:"REGISTER NOW",targetUrl:"#registration"},socials:{github:"https://github.com",discord:"https://discord.gg",twitter:"https://twitter.com",linkedin:"https://linkedin.com"}},$0=[{id:"hero",label:"HOME",href:"#hero",enabled:!0},{id:"case",label:"THE CASE",href:"#case",enabled:!0},{id:"evidence",label:"EVIDENCE",href:"#evidence",enabled:!0},{id:"investigation",label:"INVESTIGATION",href:"#investigation-board",enabled:!0},{id:"timeline",label:"TIMELINE",href:"#timeline",enabled:!0},{id:"council",label:"THE COUNCIL",href:"#council",enabled:!0},{id:"rewards",label:"REWARDS",href:"#rewards",enabled:!0},{id:"sponsors",label:"SPONSORS",href:"#sponsors",enabled:!0},{id:"faq",label:"FAQ",href:"#faq",enabled:!0}];function Ni({children:i,onClick:e,href:t,variant:n="primary",size:s="md",className:a="",icon:r=null,type:o="button"}){const l="relative inline-flex items-center justify-center font-mono-tech font-bold uppercase tracking-wider transition-all duration-200 rounded-xs cursor-pointer select-none overflow-hidden focus:outline-none focus:ring-1 focus:ring-[#D01820]",c={sm:"px-4 py-2 text-xs gap-1.5",md:"px-6 py-3 text-xs md:text-sm gap-2",lg:"px-8 py-4 text-sm md:text-base gap-2.5"}[s]||c.md,h={primary:"bg-[#B3131B] hover:bg-[#D01820] text-white border border-[#D01820] shadow-[0_0_20px_rgba(208,24,32,0.45)] hover:shadow-[0_0_30px_rgba(208,24,32,0.7)] hover:-translate-y-0.5 active:translate-y-0",secondary:"bg-[#141414] hover:bg-[#1a1a1a] text-slate-200 hover:text-white border border-white/20 hover:border-[#D01820] shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-0",outline:"bg-transparent hover:bg-white/[0.04] text-slate-300 hover:text-white border border-white/15 hover:border-white/35 hover:-translate-y-0.5 active:translate-y-0"}[n]||h.primary,p=d.jsxs(d.Fragment,{children:[r&&d.jsx("span",{className:"shrink-0",children:r}),d.jsx("span",{children:i})]});return t?d.jsx("a",{href:t,className:`${l} ${c} ${h} ${a}`,children:p}):d.jsx("button",{type:o,onClick:e,className:`${l} ${c} ${h} ${a}`,children:p})}const rs="/assets/buildx-logo-danger-CgCptXoH.png";function K0(){const[i,e]=xe.useState(!1),[t,n]=xe.useState(!1);xe.useEffect(()=>{const a=()=>{e(window.scrollY>30)};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),xe.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const s=$0.filter(a=>a.enabled);return d.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${i?"bg-[#06080c]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.9)] py-3.5":"bg-transparent py-5"}`,children:[d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("a",{href:"#hero",className:"flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#D01820] rounded-xs p-1 select-none",children:[d.jsx("div",{className:"h-7 sm:h-8 w-auto flex items-center filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_0_15px_rgba(208,24,32,0.4)]",children:d.jsx("img",{src:rs,alt:"BUILDX",className:"h-full w-auto object-contain select-none pointer-events-none brightness-[1.12] contrast-[1.15]",loading:"eager"})}),d.jsx("div",{className:"hidden sm:flex flex-col justify-center border-l border-white/10 pl-2.5",children:d.jsx("span",{className:"font-mono-tech text-[9px] text-slate-400 uppercase tracking-widest leading-tight",children:zt.branding.subOrganizer})})]}),d.jsx("nav",{className:"hidden xl:flex items-center gap-6 select-none","aria-label":"Investigation Navigation",children:s.map(a=>d.jsxs("a",{href:a.href,className:"font-mono-tech text-xs font-semibold text-slate-300 hover:text-white transition-colors relative py-1 group tracking-wider select-none",children:[d.jsx("span",{children:a.label}),d.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D01820] group-hover:w-full transition-all duration-200"})]},a.id))}),d.jsx("div",{className:"hidden sm:flex items-center gap-4",children:d.jsx(Ni,{href:zt.registration.targetUrl,variant:"primary",size:"sm",icon:d.jsx(Zi,{className:"w-3.5 h-3.5"}),children:zt.registration.ctaText})}),d.jsx("button",{type:"button",onClick:()=>n(!t),className:"xl:hidden p-2 rounded-xs bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#D01820] focus:outline-none focus:ring-1 focus:ring-[#D01820]","aria-label":t?"Close menu":"Open menu","aria-expanded":t,children:t?d.jsx(zc,{className:"w-5 h-5"}):d.jsx(Gc,{className:"w-5 h-5"})})]})}),t&&d.jsxs("div",{className:"xl:hidden fixed inset-0 top-[65px] bg-[#06080c]/98 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col justify-between z-50",children:[d.jsx("nav",{className:"flex flex-col space-y-4","aria-label":"Mobile Navigation",children:s.map(a=>d.jsx("a",{href:a.href,onClick:()=>n(!1),className:"font-mono-tech text-sm font-semibold text-slate-200 hover:text-[#D01820] py-2 border-b border-white/5 tracking-wider",children:a.label},a.id))}),d.jsx("div",{className:"pt-6",children:d.jsx(Ni,{href:zt.registration.targetUrl,variant:"primary",size:"md",className:"w-full justify-center",onClick:()=>n(!1),children:zt.registration.ctaText})})]})]})}const Z0="/assets/home-01-B5TPwGyb.png",J0="/assets/home-02-GYeOmjP7.png",Q0="/assets/home-03-C0YqGtiM.png",eg="/assets/home-06-CDYhINdt.png",tg="/assets/home-07-mhPI3FPX.png",ng="/assets/home-08-DImn6Soa.jpg",ig="/assets/home-09-BbSIpgkj.png",sg="/assets/home-10-8gRlvVta.png",ag="/assets/home-10-map-BTJAi2M0.png",rg="/assets/home-11-D1xNeUNu.png",og="/assets/home-12-CZNKQUiN.png",lg="/assets/home-13-DKAaH4x_.png",cg="/assets/home-14-Ckk1lpIx.png",Ut=[{id:"scene-01",name:"The Abandoned Corridor // Presence",image:Z0,nextSceneId:"scene-02"},{id:"scene-02",name:"The Open Gate Vault",image:J0,nextSceneId:"scene-03"},{id:"scene-03",name:"The Investigation Chamber // Entrance",image:Q0,nextSceneId:"scene-06"},{id:"scene-06",name:"The Crime Board // Front Blackboard Manifest",image:eg,nextSceneId:"scene-07"},{id:"scene-07",name:"The Subterranean Trapdoor Hatch // Chamber Pull-Back",image:tg,nextSceneId:"scene-08"},{id:"scene-08",name:"The Subterranean Staircase // The Ghost at the Gate",image:ng,nextSceneId:"scene-09"},{id:"scene-09",name:"Ghost First-Person Eye View // Gripping the Vault Gate",image:ig,nextSceneId:"scene-10"},{id:"scene-10",name:"The Crypt Cathedral // Entrance & Advance",image:sg,nextSceneId:"scene-10-map"},{id:"scene-10-map",name:"Sanctum Blueprint // Verifying Location",image:ag,nextSceneId:"scene-11"},{id:"scene-11",name:"The Sacrificial Altar // Advancing to the Vessel",image:rg,nextSceneId:"scene-12"},{id:"scene-12",name:"Reaching for the Ancient Scroll // Close-Up",image:og,nextSceneId:"scene-13"},{id:"scene-13",name:"Unrolling the Sanctum Proclamation",image:lg,nextSceneId:"scene-14"},{id:"scene-14",name:"Save the Date // Hackathon Scroll Proclamation",image:cg,nextSceneId:null}],xl={initialLoad:{badge:"CASE FILE // 001",signalText:"THE SIGNAL IS STILL ACTIVE."}};function dg(i=0,e=!1,t=!1){const n=Math.min(Math.max(i,0),1);if(e)return{x:0,y:0,scale:1+n*.15,rotateZ:0,gateProximity:n};const s=1+n*.14,a=n>.02,r=n*Math.PI*14,o=Math.abs(Math.sin(r)),l=a?o*2.5-1.25:0,c=a?Math.sin(r*.5)*2:0,h=a?Math.sin(r*.5)*.2:0;return{x:c,y:l,scale:s,rotateZ:h,gateProximity:n}}function ug(i=0,e=!1,t=!1){return dg(i,e,t)}function hg(){const[i,e]=xe.useState(0),[t,n]=xe.useState(!1);return xe.useEffect(()=>{let s=!0;const a=[...Ut.map(p=>p.image),rs].filter(Boolean),r=a.length;let o=0;const l=()=>{if(o++,s){const p=Math.round(o/r*100);e(p)}},c=p=>new Promise(u=>{const m=new Image;m.src=p;const v=()=>{"decode"in m?m.decode().then(()=>{l(),u()}).catch(()=>{l(),u()}):(l(),u())};m.complete&&m.naturalWidth>0?v():(m.onload=v,m.onerror=()=>{l(),u()})});Promise.all(a.map(c)).then(()=>{s&&(e(100),setTimeout(()=>{s&&n(!0)},300))});const h=setTimeout(()=>{s&&(e(100),n(!0))},4e3);return()=>{s=!1,clearTimeout(h)}},[]),{progress:i,isReady:t}}const fg=xe.memo(function({imageSrc:e,sceneId:t="scene-01",scrollProgress:n=0,cameraTransform:s={},onRevealComplete:a}){const r=n>.005,[o,l]=xe.useState(()=>r?2:0),{progress:c,isReady:h}=hg();xe.useEffect(()=>{if(n>.005){l(2),a&&a();return}if(h){const f=setTimeout(()=>{l(1)},400),w=setTimeout(()=>{l(2),a&&a()},950);return()=>{clearTimeout(f),clearTimeout(w)}}},[h,n>.005,a]),xe.useEffect(()=>{n>.005&&o<2&&(l(2),a&&a())},[n,o,a]);const{x:p=0,y:u=0,scale:m=1,rotateZ:v=0}=s,b=!r&&o<2,x=r?0:o===0?1:o===1?.35:0;return d.jsxs("div",{className:"absolute inset-0 w-full h-full overflow-hidden select-none bg-black",children:[d.jsxs("div",{className:"absolute -inset-x-[6%] -inset-y-[4%] w-[112%] h-[108%] will-change-transform transform-gpu",style:{transform:`translate3d(calc(${p}px + 4.2vw), ${u}px, 0) scale(${m}) rotate(${v}deg)`,transformOrigin:"54% 18%"},children:[d.jsx("img",{src:e,alt:"Paranormal Investigation Scene",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.05] contrast-[1.06]",loading:"eager",decoding:"async"}),t==="scene-01"&&n<.1&&d.jsx("div",{className:"absolute inset-0 pointer-events-none corridor-bulb-flare transform-gpu will-change-opacity",style:{background:"radial-gradient(circle at calc(54% + 4.2vw) 26%, rgba(255, 195, 80, 0.32) 0%, rgba(220, 130, 40, 0.15) 26%, transparent 60%)"}}),t==="scene-01"&&n<.1&&d.jsx("div",{className:"absolute inset-0 pointer-events-none bg-black corridor-blackout-shadow transform-gpu will-change-opacity"})]}),d.jsx("div",{className:"absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 ease-out",style:{opacity:x}}),b&&d.jsx("div",{className:`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/95 text-center pointer-events-none transition-opacity duration-500 ${o===1?"opacity-0":"opacity-100"}`,children:d.jsxs("div",{className:"space-y-3 font-mono max-w-sm px-4",children:[d.jsxs("div",{className:"text-xs text-[#D01820] tracking-widest uppercase animate-pulse flex items-center justify-center gap-2",children:[d.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-[#D01820] animate-ping"}),d.jsx("span",{children:xl.initialLoad.badge})]}),d.jsx("div",{className:"text-sm sm:text-base text-stone-200 tracking-widest uppercase font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]",children:xl.initialLoad.signalText}),d.jsxs("div",{className:"pt-2 flex flex-col items-center gap-2",children:[d.jsx("div",{className:"text-[11px] tracking-widest uppercase font-semibold text-stone-400",children:h?d.jsx("span",{className:"text-emerald-400 font-bold tracking-wider animate-pulse",children:"✓ ALL SCENE EVIDENCE DECODED // SYSTEM READY"}):d.jsxs("span",{children:["DECRYPTING EVIDENCE ARCHIVES [ ",c,"% ]"]})}),d.jsx("div",{className:"w-48 sm:w-56 h-1.5 bg-stone-900 border border-red-900/60 rounded-full overflow-hidden shadow-[0_0_10px_rgba(208,24,32,0.3)]",children:d.jsx("div",{className:"h-full bg-gradient-to-r from-red-700 via-[#D01820] to-amber-400 transition-all duration-150 rounded-full",style:{width:`${c}%`}})})]})]})})]})}),hc={hero:{taglinePrimary:"36 HOURS. ONE MYSTERY.",taglineSecondary:"INFINITE POSSIBILITIES.",description:"An unknown anomaly has been detected deep inside the system. Assemble your team, investigate the technical evidence, and engineer a high-impact solution within 36 hours."},footer:{disclaimer:"BUILDX is an original technology hackathon event engineered by Code-A-Nova. All challenges, storylines, and assets are completely original.",copyright:"© 2026 CODE-A-NOVA. ALL RIGHTS RESERVED."}},$s={caseId:"CASE FILE // ARCH-2026-BUILDX",status:{badge:"ANOMALOUS SIGNAL DETECTED"},briefing:{detail:"All automated telemetry stopped responding at 03:17 AM. Visual sweeps confirmed physical barriers locked from within. Deploy code, inspect anomalies, and breach the deeper vault before containment fails."},hackathonDetails:{duration:"36 HOURS",durationNarrative:"36 HOURS REMAIN TO BREACH",format:"NATIONAL LEVEL INVESTIGATION // ONLINE",prizePool:"₹50,000+",dates:"OCTOBER 24 - 26, 2026"},anomalies:[{id:"TRACK-01",code:"ANOMALY // AI-90",title:"SYNTHETIC INTELLIGENCE & SENTIENCE",risk:"CLASS A",description:"Agents and reasoning systems exhibiting unverified cognitive divergence.",bounty:"₹18,000"},{id:"TRACK-02",code:"ANOMALY // WEB3-44",title:"DECENTRALIZED VAULT PROTOCOLS",risk:"CLASS S",description:"Cryptographic consensus models designed to withstand hostile anomalous intrusion.",bounty:"₹15,000"},{id:"TRACK-03",code:"ANOMALY // SYS-07",title:"AUTONOMOUS INFRASTRUCTURE DEFENSE",risk:"CLASS B",description:"Self-healing low-latency telemetry pipelines monitoring breach frontiers.",bounty:"₹12,000"},{id:"TRACK-04",code:"ANOMALY // OPEN-X",title:"OPEN ANOMALY INVESTIGATION",risk:"UNSPECIFIED",description:"Cross-disciplinary breakthroughs tackling unprecedented technical anomalies.",bounty:"₹5,000+"}],investigationTimeline:[{time:"00:00 HR",title:"BREACH INITIATED",desc:"Access keys dispatched to all registered investigators."},{time:"12:00 HR",title:"CHECKPOINT 01 // SIGNAL LOCK",desc:"First telemetry review and anomaly validation."},{time:"24:00 HR",title:"SECTOR DEEPENING",desc:"Secondary challenges unlocked. Code audit begins."},{time:"36:00 HR",title:"CONTAINMENT SEAL // SUBMISSION",desc:"All terminals locked. Council adjudication begins."}]},pg=xe.memo(function({scrollProgress:e=0,revealed:t=!1}){const{hero:n}=hc,{hackathonDetails:s}=$s,[a,r]=xe.useState(!1);xe.useEffect(()=>{(t||e>.02)&&r(!0)},[t,e]);let o=1,l=1,c=0;if(e>.03){const f=Math.min(Math.max((e-.03)/.16,0),1);o=1+f*.2,l=Math.max(1-f*1.35,0),c=-f*22}const h=e*Math.PI*46,p=e>.005,u=Math.abs(Math.sin(h)),m=p?u*6-3:0,v=p?Math.sin(h*.5)*5:0,b=p?Math.sin(h*.5)*.45:0,x=a?l:0;return x<=.005&&(e>.12||a)?null:d.jsx("div",{className:"absolute inset-y-0 left-0 z-25 flex flex-col justify-center pl-4 sm:pl-8 lg:pl-12 xl:pl-14 pr-4 max-w-md sm:max-w-lg lg:max-w-xl select-none will-change-transform transform-gpu origin-left",style:{opacity:x,transform:`translate3d(${c+v}px, ${m}px, 0) scale(${o}) rotate(${b}deg)`,pointerEvents:x>.4?"auto":"none"},children:d.jsxs("div",{className:"space-y-4 sm:space-y-5 pt-12 sm:pt-14",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-black/90 backdrop-blur-md border border-white/20 font-mono text-xs text-stone-200 tracking-wider uppercase shadow-lg",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-[#D01820] animate-pulse shadow-[0_0_8px_#D01820]"}),d.jsx("span",{className:"text-stone-400 font-semibold",children:"CASE //"}),d.jsx("span",{className:"text-white font-black tracking-wide",children:"BUILDX-001"}),d.jsx("span",{className:"text-stone-600 font-bold",children:"•"}),d.jsx("span",{className:"text-stone-200 font-bold",children:"A CODE-A-NOVA HACKATHON"})]}),d.jsxs("div",{className:"space-y-1.5 select-none",children:[d.jsx("div",{className:"relative max-w-[260px] sm:max-w-[340px] lg:max-w-[400px] py-1 filter drop-shadow-[0_6px_35px_rgba(0,0,0,0.95)] drop-shadow-[0_0_30px_rgba(208,24,32,0.55)] brightness-[1.12] contrast-[1.15]",children:d.jsx("img",{src:rs,alt:"BUILDX",className:"w-full h-auto object-contain select-none pointer-events-none",loading:"eager"})}),d.jsxs("p",{className:"font-mono text-xs sm:text-sm md:text-base font-black text-white tracking-wider uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] pt-1",children:[n.taglinePrimary," ",d.jsx("span",{className:"text-red-500 font-black drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]",children:n.taglineSecondary})]})]}),d.jsx("p",{className:"font-sans text-stone-100 text-xs sm:text-[13.5px] leading-relaxed max-w-md drop-shadow-md bg-black/85 backdrop-blur-md p-4 rounded-xs border-l-4 border-l-[#D01820] border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.85)] font-medium",children:n.description}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs",children:[d.jsxs("div",{className:"px-3.5 py-1.5 rounded-xs bg-black/90 border border-white/20 backdrop-blur-md shadow-lg flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400 font-semibold",children:"DURATION:"}),d.jsx("span",{className:"text-white font-bold tracking-wide",children:s.duration})]}),d.jsxs("div",{className:"px-3.5 py-1.5 rounded-xs bg-black/90 border border-emerald-900/60 backdrop-blur-md shadow-lg flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400 font-semibold",children:"BOUNTY:"}),d.jsx("span",{className:"text-emerald-300 font-bold tracking-wide drop-shadow-[0_0_10px_rgba(110,231,183,0.4)]",children:s.prizePool})]}),d.jsxs("div",{className:"px-3.5 py-1.5 rounded-xs bg-black/90 border border-cyan-900/60 backdrop-blur-md shadow-lg flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400 font-semibold",children:"SECTOR:"}),d.jsx("span",{className:"text-cyan-300 font-bold tracking-wide drop-shadow-[0_0_10px_rgba(103,232,249,0.4)]",children:"ONLINE NATIONAL"})]})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2",children:[d.jsx(Ni,{href:"#register-modal",variant:"primary",size:"md",icon:d.jsx(Zi,{className:"w-4 h-4"}),onClick:()=>{const f=document.querySelector("[data-register-trigger]");f&&f.click()},children:"ENTER THE CASE // REGISTER"}),d.jsx("button",{type:"button",onClick:()=>{const f=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:f*.85,behavior:"smooth"})},className:"px-4 py-2.5 rounded-xs border border-white/20 hover:border-[#D01820] bg-black/85 hover:bg-black backdrop-blur-md font-mono text-xs text-stone-100 hover:text-white font-bold tracking-wider uppercase transition-all shadow-xl",children:"EXPLORE EVIDENCE ↓"})]}),d.jsxs("div",{className:"pt-2 flex items-center gap-2 font-mono text-[11px] text-stone-300 uppercase tracking-widest font-semibold drop-shadow-md",children:[d.jsx(Vc,{className:"w-3.5 h-3.5 text-[#D01820] animate-bounce"}),d.jsx("span",{children:"SCROLL TO ENTER THE INVESTIGATION"})]})]})})}),mg=xe.memo(function({scrollProgress:e=0}){const t=Math.min(Math.max((e-.18)/.03,0),1);if(t<=.005)return null;const n=t,s=t,a=t,r=t,o=t,l=Math.min(Math.max((e-.31)/.035,0),1),c=Math.pow(l,1.4),h=1+c*.45,p=-c*90,u=t*Math.max(1-Math.pow(l,1.3),0);if(u<=.005)return null;const m=e*Math.PI*46,b=Math.abs(Math.sin(m))*6-3,x=Math.sin(m*.5)*5;return d.jsxs("div",{className:"absolute inset-0 z-25 pointer-events-none select-none flex flex-col justify-between pl-6 sm:pl-12 lg:pl-16 pr-4 sm:pr-8 pt-20 sm:pt-22 lg:pt-24 pb-4 sm:pb-6 overflow-hidden will-change-transform transform-gpu",style:{opacity:u,transform:`translate3d(${p+x}px, ${b}px, 0) scale(${h})`,transformOrigin:"45% 48%",pointerEvents:u>.4?"auto":"none"},children:[d.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-700 -z-10",style:{opacity:Math.min(t*1.35,.95)*Math.max(1-Math.pow(l,1.2),0)},"aria-hidden":"true",children:[d.jsx("div",{className:"absolute -bottom-12 inset-x-0 h-[58vh] bg-gradient-to-t from-black via-stone-950/65 to-transparent filter blur-3xl pointer-events-none"}),d.jsx("div",{className:"absolute bottom-2 -left-[30%] w-[160%] h-80 bg-gradient-to-r from-transparent via-stone-400/[0.09] to-transparent filter blur-2xl animate-chamber-fog pointer-events-none"}),d.jsx("div",{className:"absolute bottom-16 -right-[30%] w-[160%] h-72 bg-gradient-to-l from-transparent via-red-600/[0.07] to-transparent filter blur-3xl animate-chamber-fog-reverse pointer-events-none"}),d.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-amber-500/[0.045] filter blur-[140px] pointer-events-none"})]}),d.jsxs("div",{className:"space-y-4 sm:space-y-5 relative z-10",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 transition-all duration-300 max-w-5xl",style:{opacity:n,transform:`translate3d(0, ${(1-n)*12}px, 0)`,filter:n>=.95?"none":`blur(${(1-n)*4}px)`},children:[d.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-black/90 border border-[#D01820]/70 shadow-[0_0_20px_rgba(208,24,32,0.4)] backdrop-blur-md",children:[d.jsx(Hc,{className:"w-4 h-4 text-[#D01820] animate-bounce"}),d.jsx("span",{className:"font-danger-heading text-xs sm:text-sm text-red-500 tracking-widest font-black",children:"LEVEL 4 ANOMALOUS CONTAINMENT BREACH"}),d.jsx("span",{className:"hidden sm:inline text-stone-500 font-mono",children:"|"}),d.jsx("span",{className:"hidden sm:inline font-danger-mono text-xs text-stone-200",children:"SECTOR 4 LOCKED FROM WITHIN"})]}),d.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-red-950/60 border border-[#D01820]/60 text-red-400 font-danger-mono text-xs backdrop-blur-sm shadow-md",children:[d.jsxs("span",{className:"relative flex h-2 w-2",children:[d.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D01820] opacity-75"}),d.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#D01820]"})]}),d.jsx("span",{className:"tracking-widest uppercase font-bold text-red-300",children:"SIGNAL LIVE: 03:17 AM"})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-6xl",children:[d.jsxs("div",{className:"lg:col-span-6 space-y-2.5 transition-all duration-300",style:{opacity:s,transform:`translate3d(${(1-s)*-16}px, 0, 0)`,filter:s>=.95?"none":`blur(${(1-s)*4}px)`},children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-black/85 border border-white/20 font-danger-mono text-[11px] text-stone-300 shadow-md",children:[d.jsx(Wc,{className:"w-3.5 h-3.5 text-[#D01820]"}),d.jsx("span",{className:"text-white font-bold tracking-wider",children:"DOSSIER // ARCH-BUILDX-001"})]}),d.jsxs("div",{className:"space-y-1 select-none",children:[d.jsx("div",{className:"relative max-w-[260px] sm:max-w-sm lg:max-w-md filter drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_0_25px_rgba(208,24,32,0.4)]",children:d.jsx("img",{src:rs,alt:"BUILDX",className:"w-full h-auto object-contain select-none pointer-events-none",loading:"eager"})}),d.jsx("div",{className:"font-danger-glitch text-xs sm:text-sm text-red-500 tracking-widest pt-0.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]",children:"A CODE-A-NOVA PARANORMAL INVESTIGATION • 2026"})]}),d.jsxs("div",{className:"font-danger-mono text-xs sm:text-sm text-stone-200 font-bold uppercase tracking-wider flex items-center gap-2 drop-shadow-md",children:[d.jsx(Ml,{className:"w-3.5 h-3.5 text-[#D01820] animate-pulse"}),d.jsx("span",{children:"36 HOURS REMAIN BEFORE PERMANENT CONTAINMENT FAILURE"})]})]}),d.jsx("div",{className:"lg:col-span-6 transition-all duration-300",style:{opacity:a,transform:`translate3d(${(1-a)*16}px, 0, 0)`,filter:a>=.95?"none":`blur(${(1-a)*4}px)`},children:d.jsxs("div",{className:"relative bg-black/90 backdrop-blur-md border border-red-700/60 p-5 rounded-xs shadow-[0_12px_45px_rgba(0,0,0,0.95)] relative overflow-hidden group hover:border-[#D01820] transition-colors",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 danger-stripes"}),d.jsx("div",{className:"absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-red-500/[0.12] to-transparent pointer-events-none animate-classified-scan"}),d.jsx("div",{className:"absolute top-2 left-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsx("div",{className:"absolute top-2 right-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsx("div",{className:"absolute bottom-2 left-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsx("div",{className:"absolute bottom-2 right-2 text-[#D01820]/60 font-mono text-[10px]",children:"+"}),d.jsxs("div",{className:"flex items-center justify-between border-b border-red-950/80 pb-2 mb-3",children:[d.jsxs("div",{className:"flex items-center gap-2 font-danger-heading text-xs text-red-400 font-bold",children:[d.jsx(Xc,{className:"w-3.5 h-3.5 text-red-500"}),d.jsx("span",{className:"tracking-widest",children:"INCIDENT REPORT // CLASSIFIED"})]}),d.jsx("span",{className:"font-danger-mono text-[10px] px-2 py-0.5 rounded-xs bg-red-950/80 text-red-300 border border-red-900/60 font-bold",children:"EYES ONLY"})]}),d.jsxs("p",{className:"font-horror-dossier text-stone-100 text-xs sm:text-[13.5px] leading-relaxed tracking-wide font-medium drop-shadow-sm",children:['"At ',d.jsx("span",{className:"text-red-400 font-bold drop-shadow-[0_0_8px_rgba(248,113,113,0.3)]",children:"03:17 AM"}),', anomalous containment failed inside Sector 4. Visual sweeps confirm the entity has locked all deeper steel vaults from the inside. Your directive: deploy code, reconstruct the murder & anomaly board, and breach the vault before you are trapped in the darkness forever."']})]})})]})]}),d.jsxs("div",{className:"mt-auto space-y-3.5 sm:space-y-4 max-w-6xl pt-4 sm:pt-6",children:[d.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 sm:gap-3.5 transition-all duration-300",style:{opacity:r,transform:`translate3d(0, ${(1-r)*12}px, 0)`,filter:r>=.95?"none":`blur(${(1-r)*4}px)`},children:[d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-stone-700/80 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx(Ks,{className:"w-3.5 h-3.5 text-[#D01820]"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"TIMELINE"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-white font-bold tracking-wider",children:"36 HOURS VIRTUAL"})]})]}),d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-emerald-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx(bl,{className:"w-3.5 h-3.5 text-emerald-400"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"RECOVERY BOUNTY"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-emerald-300 font-bold tracking-wider",children:"₹50,000+ CASH"})]})]}),d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-cyan-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx(yl,{className:"w-3.5 h-3.5 text-cyan-400"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"BREACH DATES"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-cyan-300 font-bold tracking-wider",children:"OCT 24 - 26, 2026"})]})]}),d.jsxs("div",{className:"px-3.5 py-2 rounded-xs bg-black/90 border border-amber-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl",children:[d.jsx(El,{className:"w-3.5 h-3.5 text-amber-400"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-danger-mono text-[9px] text-stone-400 uppercase font-semibold",children:"ACCESS CLEARANCE"}),d.jsx("div",{className:"font-danger-heading text-xs sm:text-sm text-amber-300 font-bold tracking-wider",children:"FREE REGISTRATION"})]})]})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-3.5 transition-all duration-300 pt-1",style:{opacity:o,transform:`translate3d(0, ${(1-o)*12}px, 0)`,filter:o>=.95?"none":`blur(${(1-o)*4}px)`,pointerEvents:o>.3?"auto":"none"},children:[d.jsx(Ni,{href:"#register-modal",variant:"primary",size:"md",icon:d.jsx(Zi,{className:"w-4 h-4"}),onClick:()=>{const f=document.querySelector("[data-register-trigger]");f&&f.click()},children:"BREACH THE VAULT // REGISTER NOW"}),d.jsxs("button",{type:"button",onClick:()=>{const f=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:f,behavior:"smooth"})},className:"px-4 py-2.5 rounded-xs border border-red-900/70 hover:border-[#D01820] bg-black/90 backdrop-blur-md font-danger-heading text-xs text-stone-100 hover:text-white tracking-widest uppercase transition-all shadow-xl flex items-center gap-2",children:[d.jsx("span",{children:"INSPECT CRIME BOARD EVIDENCE"}),d.jsx("span",{className:"text-[#D01820]",children:"↓"})]})]})]})]})}),Rn={global:{file:"/hackathon-audio/step and gate.mp3",clip:{start:2.5,end:8},volume:.5,trigger:"scroll",fadeIn:.35,fadeOut:.4,loop:!0},"scene-01":{file:"/hackathon-audio/step and gate.mp3",clip:{start:2.5,end:8},volume:.5,loop:!0},"scene-02":{file:"/hackathon-audio/step and gate.mp3",clip:{start:0,end:2.5},volume:.48,loop:!1},"scene-03":{file:"/hackathon-audio/step and gate.mp3",clip:{start:16.5,end:20},volume:.18,loop:!0},"scene-06":{file:null},"scene-07":{file:"/hackathon-audio/step and gate.mp3",clip:{start:22,end:28},volume:.48,loop:!0},"scene-08":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.16,loop:!0,fadeIn:.5,fadeOut:.5,continuous:!0},"scene-09":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.18,loop:!0,continuous:!0,fadeIn:.3,fadeOut:.6},"scene-10":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.16,loop:!0,continuous:!0,fadeIn:.4},"scene-10-map":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.15,loop:!0,continuous:!0},"scene-11":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.14,loop:!0,continuous:!0},"scene-12":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.13,loop:!0,continuous:!0},"scene-13":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.11,loop:!0,continuous:!0},"scene-14":{file:"/hackathon-audio/women-crying.mp3",clip:{start:0,end:14.5},volume:.09,loop:!0,continuous:!0}};class gg{constructor(){this.ambientAudio=null,this.gateAudio=null,this.dossierAudio=null,this.fadeRaf=null,this.isMuted=!1,this.isInitialized=!1}init(){typeof window>"u"||this.isInitialized||(this.isInitialized=!0,this.ambientAudio=null)}playGateOpen(e=.18){if(this.isMuted)return;const t=Math.min(Math.max(.12,e),.2);try{if(this.gateAudio)try{this.gateAudio.pause(),this.gateAudio.currentTime=0}catch{}const n=new Audio("/hackathon-audio/gate-open-trimmed.wav");n.preload="auto",n.volume=t,n.play().catch(()=>{const s=new Audio("/hackathon-audio/gate-open.mp3");s.currentTime=3,s.volume=t,s.play().catch(()=>{}),this.gateAudio=s}),this.gateAudio=n}catch{}}playHeavyGateBreach(e=.18){this.playGateOpen(e)}playDossierTransition(e=.2){if(this.isMuted)return;const t=Math.min(Math.max(.05,e),.25);try{if(this.dossierAudio)try{this.dossierAudio.pause(),this.dossierAudio.currentTime=0}catch{}const n=new Audio("/hackathon-audio/sound-effect.mp3");n.preload="auto",n.volume=t,n.play().catch(()=>{}),this.dossierAudio=n}catch{}}fadeGateAudio(e=400){if(!this.gateAudio||this.gateAudio.paused)return;const t=this.gateAudio,n=t.volume,s=performance.now(),a=r=>{const o=r-s,l=Math.min(o/e,1);try{t.volume=Math.max(0,n*(1-l))}catch{}if(l<1)requestAnimationFrame(a);else try{t.pause(),t.currentTime=0}catch{}};requestAnimationFrame(a)}playFootstep(){}playDoorOpenCreak(){}playLockUnlatch(){}toggleMute(){if(this.isMuted=!this.isMuted,this.isMuted){if(this.gateAudio)try{this.gateAudio.pause()}catch{}if(this.dossierAudio)try{this.dossierAudio.pause()}catch{}}return this.isMuted}setAmbientVolume(){}duck(){}restore(){}}const vt=new gg;class xg{constructor(){this.currentAudio=null,this.currentSceneId=null,this.lastPlayedSceneId=null,this.activeClipSessionId=0,this.isMuted=!1,this.isAutoplayBlocked=!1,this.isDucked=!1,this.triggerTimeoutId=null,this.rafId=null,this.isPausedByScrollStop=!1,this.isFadingOut=!1,this.isFadingToStop=!1,this.scrollIdleTimeout=null,this.scrollIdleDelay=160,this.fadeRafId=null,this.isClipFinished=!1,this.debugState={currentScene:"none",audioFile:"none",clipStart:0,clipEnd:0,currentTime:0,playbackStatus:"IDLE",volume:20,isMuted:!1},this.debugListeners=new Set,this.hasUnlockedGesture=!1,this.bindAutoplayUnlock()}setInitialScene(e="scene-01"){this.debugState.currentScene=e;const t=Rn[e];t&&(this.debugState.audioFile=t.file?t.file.split("/").pop():"none",this.debugState.clipStart=Number((t.clip?.start??0).toFixed(2)),this.debugState.clipEnd=Number((t.clip?.end??10).toFixed(2)),this.debugState.volume=Math.round((t.volume??.5)*100),this.debugState.playbackStatus="IDLE (SCROLL TO PLAY)"),this.notifyDebug()}bindAutoplayUnlock(){if(typeof window>"u")return;const e=()=>{if(this.hasUnlockedGesture=!0,this.isAutoplayBlocked=!1,vt.init(),this.pendingSceneId&&this.pendingSceneId===this.currentSceneId&&!this.isMuted){const t=this.pendingSceneId;this.pendingSceneId=null,this.playSceneVoice(t,!0)}window.removeEventListener("scroll",e),window.removeEventListener("pointerdown",e),window.removeEventListener("keydown",e),window.removeEventListener("touchstart",e)};window.addEventListener("scroll",e,{passive:!0,once:!0}),window.addEventListener("pointerdown",e,{passive:!0,once:!0}),window.addEventListener("keydown",e,{passive:!0,once:!0}),window.addEventListener("touchstart",e,{passive:!0,once:!0})}subscribeDebug(e){return this.debugListeners.add(e),e(this.getDebugState()),()=>{this.debugListeners.delete(e)}}notifyDebug(){if(this.debugListeners.size===0)return;const e=this.getDebugState();this.debugListeners.forEach(t=>{try{t(e)}catch(n){console.warn("Debug listener error:",n)}})}getDebugState(){return{...this.debugState,isMuted:this.isMuted,isAutoplayBlocked:this.isAutoplayBlocked,ambientVolume:vt.ambientVolume}}playAudioClip({file:e,start:t=0,end:n=0,volume:s=.5,duckAmbient:a=!1,duckVolume:r=.04,fadeIn:o=0,fadeOut:l=0,loop:c=!0,onEnd:h=null}){if(this.isMuted){this.debugState.playbackStatus="MUTED",this.notifyDebug();return}const p=Math.min(Math.max(0,s),.85);this.stopActiveClip();const u=++this.activeClipSessionId,m=new Audio(e);m.preload="auto",m.loop=!!c,m.volume=0,this.currentAudio=m,this.currentAudioFile=e,this.activeClipStart=t,this.activeClipEnd=n,this.activeClipLoop=!!c,this.debugState.audioFile=e.split("/").pop(),this.debugState.clipStart=Number(t.toFixed(2)),this.debugState.clipEnd=Number(n>0?n.toFixed(2):0),this.debugState.currentTime=Number(t.toFixed(2)),this.debugState.volume=Math.round(p*100),this.debugState.playbackStatus="LOADING",this.notifyDebug();let v=!1,b=!1;const x=async()=>{if(u===this.activeClipSessionId)try{await m.play(),this.isAutoplayBlocked=!1,v=!0,this.debugState.playbackStatus="PLAYING",this.notifyDebug();const w=o>0?o*1e3:350;this.debugState.playbackStatus="PLAYING (FADING IN)",this.notifyDebug(),this.fadeVolume(m,0,p,w,u,()=>{this.debugState.playbackStatus="PLAYING",this.notifyDebug()}),a&&(this.isDucked=!0,vt.duck(r,w));const N=()=>{if(!(u!==this.activeClipSessionId||!this.currentAudio)){if(!m.paused){const M=m.currentTime;this.debugState.currentTime=Number(M.toFixed(2)),n>0&&l>0&&!b&&M>=n-l&&M<n&&(b=!0,this.fadeVolume(m,m.volume,0,l*1e3,u));const E=this.activeClipEnd;if(E>0&&M>=E||!this.activeClipLoop&&m.ended)if(this.activeClipLoop&&E>0)try{m.currentTime=this.activeClipStart}catch{}else{this.isClipFinished=!0,this.stopActiveClip(),h&&h();return}this.notifyDebug()}this.rafId=requestAnimationFrame(N)}};this.rafId=requestAnimationFrame(N)}catch(w){w.name==="NotAllowedError"?(this.isAutoplayBlocked=!0,this.debugState.playbackStatus="BLOCKED",this.notifyDebug()):(console.warn("Audio clip playback notice for",e,w),this.debugState.playbackStatus="ERROR",this.notifyDebug())}},f=()=>{if(u!==this.activeClipSessionId)return;if(t>0)try{m.currentTime=t}catch{}const w=()=>{m.removeEventListener("seeked",w),m.removeEventListener("canplay",w),u===this.activeClipSessionId&&!v&&x()};Math.abs(m.currentTime-t)<=.15||t===0?x():(m.addEventListener("seeked",w,{once:!0}),m.addEventListener("canplay",w,{once:!0}))};m.readyState>=1?f():(m.addEventListener("loadedmetadata",f,{once:!0}),m.addEventListener("canplay",f,{once:!0})),m.addEventListener("error",()=>{u===this.activeClipSessionId&&(this.debugState.playbackStatus="UNAVAILABLE",this.notifyDebug(),this.isDucked&&(this.isDucked=!1,vt.restore()))},{once:!0})}fadeVolume(e,t,n,s,a,r=null){if(this.fadeRafId&&(cancelAnimationFrame(this.fadeRafId),this.fadeRafId=null),!e||s<=0){if(e)try{e.volume=n}catch{}r&&r();return}const o=performance.now(),l=c=>{if(a!==this.activeClipSessionId||!e)return;const h=c-o,p=Math.min(h/s,1),u=.5-.5*Math.cos(p*Math.PI),m=t+(n-t)*u;try{e.volume=Math.max(0,Math.min(1,m))}catch{}p<1?this.fadeRafId=requestAnimationFrame(l):(this.fadeRafId=null,r&&r())};this.fadeRafId=requestAnimationFrame(l)}stopActiveClip(){if(this.activeClipSessionId++,this.triggerTimeoutId&&(clearTimeout(this.triggerTimeoutId),this.triggerTimeoutId=null),this.scrollIdleTimeout&&(clearTimeout(this.scrollIdleTimeout),this.scrollIdleTimeout=null),this.fadeRafId&&(cancelAnimationFrame(this.fadeRafId),this.fadeRafId=null),this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.currentAudio){try{this.currentAudio.pause(),this.currentAudio.src="",this.currentAudio.load()}catch{}this.currentAudio=null}this.isPausedByScrollStop=!1,this.isFadingOut=!1,this.isFadingToStop=!1,this.currentAudioFile=null,this.isDucked&&(this.isDucked=!1,vt.restore()),this.debugState.playbackStatus="STOPPED",this.notifyDebug()}fadeOutAndStop(e=550){if(!this.currentAudio||this.isFadingOut&&this.isFadingToStop)return;this.isFadingOut=!0,this.isFadingToStop=!0;const t=this.currentAudio,n=this.activeClipSessionId;this.debugState.playbackStatus="FADING OUT...",this.notifyDebug(),this.isDucked&&(this.isDucked=!1,vt.restore(e)),this.fadeVolume(t,t.volume,0,e,n,()=>{if(this.isFadingToStop=!1,n===this.activeClipSessionId)this.stopActiveClip();else try{t.pause(),t.currentTime=0,t.removeAttribute("src"),t.src="",t.load()}catch{}})}onUserScrollActivity(e){if(this.isMuted)return;const t=e||this.currentSceneId||"scene-01",n=Rn[t]||Rn.global,s=Math.min(n?.volume??.5,.85);if(!n||!n.file){this.currentAudio&&!this.isFadingToStop&&this.fadeOutAndStop(550);return}if(this.isFadingToStop=!1,!this.currentAudio&&!this.isClipFinished)this.currentSceneId=t,this.lastPlayedSceneId=t,this.playSceneVoice(t,!0);else if(this.currentAudio&&!this.isClipFinished){const a=this.currentAudio,r=this.isPausedByScrollStop||a.paused,o=this.isFadingOut;(r||o)&&(this.isPausedByScrollStop=!1,this.isFadingOut=!1,a.paused&&a.play().catch(l=>{l.name==="NotAllowedError"&&(this.isAutoplayBlocked=!0,this.debugState.playbackStatus="BLOCKED",this.notifyDebug())}),this.debugState.playbackStatus="PLAYING (FADING IN)",this.notifyDebug(),this.fadeVolume(a,a.volume,s,300,this.activeClipSessionId,()=>{this.debugState.playbackStatus="PLAYING",this.notifyDebug()}),n?.duckAmbient!==!1&&(this.isDucked=!0,vt.duck(n?.duckVolume??.04,300)))}n?.continuous||n?.ignoreScrollIdle?this.scrollIdleTimeout&&(clearTimeout(this.scrollIdleTimeout),this.scrollIdleTimeout=null):(this.scrollIdleTimeout&&clearTimeout(this.scrollIdleTimeout),this.scrollIdleTimeout=setTimeout(()=>{this.handleScrollStopped()},this.scrollIdleDelay))}handleScrollStopped(){if(!this.currentAudio||this.isClipFinished||this.isPausedByScrollStop||this.isFadingOut)return;const e=Rn[this.currentSceneId]||Rn.global;if(e?.continuous||e?.ignoreScrollIdle)return;this.isFadingOut=!0;const t=this.currentAudio,n=this.activeClipSessionId,s=360;this.debugState.playbackStatus="FADING OUT...",this.notifyDebug(),this.isDucked&&(this.isDucked=!1,vt.restore(s)),this.fadeVolume(t,t.volume,0,s,n,()=>{if(this.activeClipSessionId===n&&this.isFadingOut&&t){try{t.pause()}catch{}this.isFadingOut=!1,this.isPausedByScrollStop=!0,this.debugState.playbackStatus="PAUSED (SCROLL STOPPED)",this.notifyDebug()}})}onSceneActive(e){if(!e||(this.debugState.currentScene=e,e===this.currentSceneId))return;this.currentSceneId=e,this.isClipFinished=!1;const t=Rn[e]||Rn.global;if(!t||!t.file){this.lastPlayedSceneId=e,this.debugState.audioFile="none",this.debugState.playbackStatus="FADING OUT (SCENE EXIT)",this.notifyDebug(),this.currentAudio&&this.fadeOutAndStop(550);return}if(this.currentAudio&&this.currentAudioFile===t.file){if(this.lastPlayedSceneId=e,t.clip?.start!==void 0){this.activeClipStart=t.clip.start,this.activeClipEnd=t.clip.end??0,this.activeClipLoop=t.loop??!0,this.debugState.clipStart=Number(this.activeClipStart.toFixed(2)),this.debugState.clipEnd=Number(this.activeClipEnd>0?this.activeClipEnd.toFixed(2):0),this.notifyDebug();const n=this.currentAudio.currentTime;if(n<this.activeClipStart||this.activeClipEnd>0&&n>=this.activeClipEnd)try{this.currentAudio.currentTime=this.activeClipStart}catch{}}if(t?.volume!==void 0&&!this.isMuted){const n=Math.min(t.volume,.85);this.fadeVolume(this.currentAudio,this.currentAudio.volume,n,500,this.activeClipSessionId)}return}if(this.currentAudio&&this.fadeOutAndStop(250),this.isMuted){this.debugState.playbackStatus="MUTED",this.notifyDebug();return}e!==this.lastPlayedSceneId&&(this.lastPlayedSceneId=e,this.playSceneVoice(e))}playSceneVoice(e,t=!1){const n=Rn[e]||Rn.global;if(!n||!n.file){this.debugState.audioFile="none",this.debugState.playbackStatus="NO_VOICE_CONFIG",this.notifyDebug();return}const s=()=>{this.currentSceneId===e&&this.playAudioClip({file:n.file,start:n.clip?.start??0,end:n.clip?.end??0,volume:Math.min(n.volume??.5,.85),duckAmbient:!1,duckVolume:.04,fadeIn:n.fadeIn??.35,fadeOut:n.fadeOut??.4,loop:n.loop??!0,onEnd:()=>{this.debugState.playbackStatus="STOPPED",this.notifyDebug()}})},a=t?0:n.triggerDelayMs||0;a>0?this.triggerTimeoutId=setTimeout(s,a):s()}toggleMute(){return this.isMuted=!this.isMuted,this.debugState.isMuted=this.isMuted,vt.isMuted=this.isMuted,this.isMuted?(this.stopActiveClip(),vt.ambientAudio&&vt.ambientAudio.pause(),this.debugState.playbackStatus="MUTED"):(vt.ambientAudio&&vt.ambientAudio.play().catch(()=>{}),this.currentSceneId&&(this.lastPlayedSceneId=null,this.playSceneVoice(this.currentSceneId,!0))),this.notifyDebug(),this.isMuted}replayCurrentScene(){this.currentSceneId&&(this.lastPlayedSceneId=null,this.playSceneVoice(this.currentSceneId,!0))}}const Dt=new xg;class _g{constructor(){this.audio=null,this.fadeRaf=null,this.isPlaying=!1,this.isFadingOut=!1,this.scrollIdleTimer=null,this.targetVolume=.3,typeof window<"u"&&Dt.subscribeDebug(e=>{e.isMuted&&this.stopImmediate()})}ensureAudio(){return!this.audio&&typeof window<"u"&&(this.audio=new Audio("/hackathon-audio/black-board-chalk.mp3"),this.audio.loop=!0,this.audio.preload="auto",this.audio.volume=0),this.audio}fadeVolume(e,t,n,s=null){this.fadeRaf&&(cancelAnimationFrame(this.fadeRaf),this.fadeRaf=null);const a=this.ensureAudio();if(!a)return;if(n<=0){a.volume=t,s&&s();return}const r=performance.now(),o=l=>{const c=l-r,h=Math.min(c/n,1),p=.5-.5*Math.cos(h*Math.PI),u=e+(t-e)*p;try{a.volume=Math.max(0,Math.min(1,u))}catch{}h<1?this.fadeRaf=requestAnimationFrame(o):(this.fadeRaf=null,s&&s())};this.fadeRaf=requestAnimationFrame(o)}play(){if(Dt.isMuted)return;const e=this.ensureAudio();e&&(this.isFadingOut=!1,e.paused&&e.play().catch(()=>{}),this.fadeVolume(e.volume,this.targetVolume,250),this.isPlaying=!0)}pauseWithFade(e=350){!this.audio||this.isFadingOut||this.audio.paused||(this.isFadingOut=!0,this.fadeVolume(this.audio.volume,0,e,()=>{if(this.audio)try{this.audio.pause()}catch{}this.isPlaying=!1,this.isFadingOut=!1}))}stopImmediate(){if(this.fadeRaf&&(cancelAnimationFrame(this.fadeRaf),this.fadeRaf=null),this.scrollIdleTimer&&(clearTimeout(this.scrollIdleTimer),this.scrollIdleTimer=null),this.audio)try{this.audio.pause(),this.audio.currentTime=0,this.audio.volume=0}catch{}this.isPlaying=!1,this.isFadingOut=!1}onWritingScrollActivity(){Dt.isMuted||((!this.isPlaying||this.isFadingOut)&&this.play(),this.scrollIdleTimer&&clearTimeout(this.scrollIdleTimer),this.scrollIdleTimer=setTimeout(()=>{this.pauseWithFade(280)},200))}}const Wa=new _g,wt=xe.memo(function({words:e,progress:t=0,className:n="",cursorColor:s="bg-stone-200"}){const a=e.length,r=Math.min(Math.floor(t*(a+1)),a);return d.jsx("span",{className:n,children:e.map((o,l)=>{const c=typeof o=="string"?o:o.text,h=typeof o=="object"&&o.className||"",p=l<r,u=l===r-1&&t<.98&&t>.02;return d.jsxs("span",{className:`inline-block select-none transition-opacity duration-100 ${h}`,style:{opacity:p?1:0,marginRight:"0.26em"},children:[c,u&&d.jsx("span",{className:`inline-block w-1.5 h-3.5 ${s} ml-0.5 rounded-2xs opacity-90 shadow-[0_0_6px_rgba(255,255,255,0.8)] animate-pulse`})]},l)})})}),vg=["★","CASE","FILE","//","BUILDX-2026",":","TOP","SECRET"],Sg=["•","Sector","4","Crime","Manifest","•"],Mg=["EVIDENCE","RECORDED"],bg=[{text:'"An'},{text:"unknown"},{text:"anomaly"},{text:"breached"},{text:"our"},{text:"core"},{text:"vault"},{text:"at"},{text:"03:17",className:"chalk-red font-bold underline decoration-wavy decoration-red-400/80"},{text:"AM."},{text:"Assemble"},{text:"your"},{text:"squad,"},{text:"decipher"},{text:"the"},{text:"evidence"},{text:"on"},{text:"this"},{text:"board,"},{text:"and"},{text:"engineer"},{text:"the"},{text:"containment"},{text:"breach"},{text:"solution"},{text:"before"},{text:"time"},{text:'expires."'}],yg=["✦","TRACK","01","//","PARANORMAL","AI"],Eg=["Deep-learning","anomaly","detection,","neural","forensics,","and","autonomous","agents."],Tg=["[","BOUNTY","ELIGIBLE","•","MULTI-MODAL","]"],wg=["✦","TRACK","02","//","ZERO-TRUST","DEFENSE"],Ag=["Vault","infrastructure","security,","authentication","recovery,","and","hardened","systems."],Rg=["[","BOUNTY","ELIGIBLE","•","CYBERSEC","]"],Cg=["✦","TRACK","03","//","OPEN","INNOVATION"],Ng=["Wildcard","engineering:","AI","tools,","Web3,","cloud","infrastructure,","and","impactful","apps."],Ig=["[","ALL","DOMAINS","OPEN","•","VIRTUAL","]"],Dg=["⏱","36","Hours","Hackathon"],Pg=["🏆","₹50,000+","Prize","Pool"],Lg=["🛡","Free","Registration"],Ug=["⚡","BREACH","THE","VAULT","//","REGISTER","➔"],_l=xe.memo(function({scrollProgress:e=0,variant:t="front"}){const n=t==="mini-angled";if(xe.useEffect(()=>{if(n)return;e>=.38&&e<=.562?Wa.onWritingScrollActivity():Wa.pauseWithFade(350)},[e,n]),xe.useEffect(()=>()=>{n||Wa.pauseWithFade(300)},[n]),!n&&(e<.36||e>.6))return null;const s=n?1:Math.min(Math.max((e-.38)/.03,0),1),a=n?1:Math.min(Math.max((e-.41)/.055,0),1),r=n?1:Math.min(Math.max((e-.465)/.02,0),1),o=n?1:Math.min(Math.max((e-.485)/.02,0),1),l=n?1:Math.min(Math.max((e-.505)/.02,0),1),c=n?1:Math.min(Math.max((e-.525)/.018,0),1),h=n?1:Math.min(Math.max((e-.543)/.018,0),1),u=1-(n?0:Math.min(Math.max((e-.56)/.04,0),1)),m=()=>{const v=document.querySelector("[data-register-trigger]");v?v.click():window.location.hash="register"};return n?d.jsx("div",{className:"absolute z-25 pointer-events-none select-none overflow-hidden",style:{left:"3.2%",top:"12.8%",width:"40.5%",height:"30.0%",transform:"perspective(1200px) rotateY(3deg) rotateX(0.5deg)",transformOrigin:"left center",mixBlendMode:"screen"},children:d.jsxs("div",{className:"w-full h-full px-2 py-1.5 flex flex-col justify-between opacity-95 text-stone-200",children:[d.jsxs("div",{className:"border-b border-stone-400/35 pb-1 flex items-baseline justify-between",children:[d.jsx("span",{className:"font-chalk-sketch-title text-xs sm:text-sm chalk-red tracking-wider",children:"★ CASE FILE // BUILDX-2026 : TOP SECRET"}),d.jsx("span",{className:"font-chalk-detective text-[10px] sm:text-xs chalk-yellow",children:"• Sector 4 Manifest •"})]}),d.jsxs("p",{className:"font-chalk-detective text-[11px] sm:text-xs lg:text-[13px] text-stone-200 leading-snug tracking-wide",children:['"An unknown anomaly breached our core vault at ',d.jsx("span",{className:"chalk-red font-bold",children:"03:17 AM"}),'. Assemble your squad, decipher the evidence on this board, and engineer the containment breach solution."']}),d.jsxs("div",{className:"grid grid-cols-3 gap-1 sm:gap-2 text-[9px] sm:text-[10px]",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-chalk-sketch-title text-[10px] sm:text-xs chalk-cyan tracking-wide",children:"[ 01: AI ANOMALY ]"}),d.jsx("div",{className:"font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5",children:"Deep neural forensics & agents"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"font-chalk-sketch-title text-[10px] sm:text-xs chalk-green tracking-wide",children:"[ 02: ZERO-TRUST ]"}),d.jsx("div",{className:"font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5",children:"Vault auth & hardened defense"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"font-chalk-sketch-title text-[10px] sm:text-xs chalk-yellow tracking-wide",children:"[ 03: OPEN TRACK ]"}),d.jsx("div",{className:"font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5",children:"Wildcard engineering & apps"})]})]}),d.jsxs("div",{className:"font-chalk-detective text-[9px] sm:text-[11px] flex items-center justify-between chalk-yellow pt-0.5 border-t border-stone-400/35",children:[d.jsx("span",{className:"text-stone-300",children:"⏱ 36 Hours"}),d.jsx("span",{className:"font-bold chalk-yellow",children:"🏆 ₹50,000+ Pool"}),d.jsx("span",{className:"chalk-green",children:"🛡 Free Registration"})]})]})}):d.jsx("div",{className:"absolute inset-0 z-25 pointer-events-none select-none flex items-center justify-center overflow-hidden transition-opacity duration-150",style:{opacity:u},children:d.jsxs("div",{className:"w-full max-w-5xl xl:max-w-[1180px] 2xl:max-w-[1240px] px-6 sm:px-10 lg:px-14 flex flex-col justify-center my-auto gap-3 sm:gap-4 -translate-y-3 sm:-translate-y-5",children:[d.jsxs("div",{className:"relative pb-2.5",children:[d.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-2",children:[d.jsx("div",{className:"flex items-center gap-2",children:d.jsx(wt,{words:vg,progress:s,className:"font-chalk-sketch-title text-xl sm:text-2xl md:text-[28px] chalk-red tracking-wider",cursorColor:"bg-red-400"})}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx(wt,{words:Sg,progress:s,className:"font-chalk-detective text-base sm:text-lg chalk-yellow tracking-wider",cursorColor:"bg-yellow-300"}),d.jsx("span",{className:"px-2 py-0.5 border border-dashed border-red-400/50 rounded-xs chalk-red font-chalk-sketch text-xs tracking-wider transition-opacity duration-200",style:{opacity:s>=.85?1:0},children:d.jsx(wt,{words:Mg,progress:Math.min(s*1.2,1),cursorColor:"bg-red-400"})})]})]}),d.jsx("div",{className:"w-full h-0.5 border-b-2 border-dashed border-stone-400/35 transition-all duration-150 mt-2",style:{clipPath:`inset(0 ${(1-s)*100}% 0 0)`}})]}),d.jsx("div",{className:"min-h-[56px] sm:min-h-[64px] flex items-center",children:d.jsx("p",{className:"font-chalk-detective text-xl sm:text-2xl lg:text-[26px] chalk-white leading-relaxed tracking-wide",children:d.jsx(wt,{words:bg,progress:a,cursorColor:"bg-stone-200"})})}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5",children:[d.jsxs("div",{className:"chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200",style:{opacity:r>.05?1:0,clipPath:`inset(0 ${(1-Math.min(r*2,1))*100}% 0 0)`},children:[d.jsx("div",{className:"font-chalk-sketch-title text-sm sm:text-base chalk-cyan mb-1 flex items-center gap-1.5",children:d.jsx(wt,{words:yg,progress:Math.min(r*1.5,1),cursorColor:"bg-cyan-300"})}),d.jsx("p",{className:"font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]",children:d.jsx(wt,{words:Eg,progress:Math.max((r-.25)/.65,0),cursorColor:"bg-stone-200"})}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-cyan pt-1 font-bold tracking-wider",children:d.jsx(wt,{words:Tg,progress:Math.max((r-.6)/.4,0),cursorColor:"bg-cyan-300"})})]}),d.jsxs("div",{className:"chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200",style:{opacity:o>.05?1:0,clipPath:`inset(0 ${(1-Math.min(o*2,1))*100}% 0 0)`},children:[d.jsx("div",{className:"font-chalk-sketch-title text-sm sm:text-base chalk-green mb-1 flex items-center gap-1.5",children:d.jsx(wt,{words:wg,progress:Math.min(o*1.5,1),cursorColor:"bg-emerald-300"})}),d.jsx("p",{className:"font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]",children:d.jsx(wt,{words:Ag,progress:Math.max((o-.25)/.65,0),cursorColor:"bg-stone-200"})}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-green pt-1 font-bold tracking-wider",children:d.jsx(wt,{words:Rg,progress:Math.max((o-.6)/.4,0),cursorColor:"bg-emerald-300"})})]}),d.jsxs("div",{className:"chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200",style:{opacity:l>.05?1:0,clipPath:`inset(0 ${(1-Math.min(l*2,1))*100}% 0 0)`},children:[d.jsx("div",{className:"font-chalk-sketch-title text-sm sm:text-base chalk-yellow mb-1 flex items-center gap-1.5",children:d.jsx(wt,{words:Cg,progress:Math.min(l*1.5,1),cursorColor:"bg-amber-300"})}),d.jsx("p",{className:"font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]",children:d.jsx(wt,{words:Ng,progress:Math.max((l-.25)/.65,0),cursorColor:"bg-stone-200"})}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-yellow pt-1 font-bold tracking-wider",children:d.jsx(wt,{words:Ig,progress:Math.max((l-.6)/.4,0),cursorColor:"bg-amber-300"})})]})]}),d.jsx("div",{className:"pt-2 border-t border-dashed border-stone-400/35 transition-opacity duration-200",style:{opacity:c>.05?1:0,clipPath:`inset(0 ${(1-Math.min(c*1.5,1))*100}% 0 0)`},children:d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[d.jsxs("div",{className:"flex flex-wrap items-center gap-3 sm:gap-6 font-chalk-detective text-base sm:text-lg md:text-xl",children:[d.jsxs("div",{className:"flex items-center gap-1.5 chalk-white",children:[d.jsx(Ks,{className:"w-4 h-4 text-stone-300 transition-opacity duration-150",style:{opacity:c>.08?1:0}}),d.jsx(wt,{words:Dg,progress:c,cursorColor:"bg-stone-200"})]}),d.jsxs("div",{className:"flex items-center gap-1.5 chalk-yellow font-bold",children:[d.jsx(bl,{className:"w-4 h-4 text-amber-300 transition-opacity duration-150",style:{opacity:c>.35?1:0}}),d.jsx(wt,{words:Pg,progress:c,cursorColor:"bg-amber-300"})]}),d.jsxs("div",{className:"flex items-center gap-1.5 chalk-green",children:[d.jsx(jc,{className:"w-4 h-4 text-emerald-300 transition-opacity duration-150",style:{opacity:c>.65?1:0}}),d.jsx(wt,{words:Lg,progress:c,cursorColor:"bg-emerald-300"})]})]}),d.jsx("div",{className:"transition-all duration-300",style:{opacity:h>.05?1:0,pointerEvents:h>.4?"auto":"none"},children:d.jsx("button",{type:"button",onClick:m,className:"chalk-btn-handdrawn font-chalk-sketch-title px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm chalk-red flex items-center gap-2 cursor-pointer select-none",children:d.jsx(wt,{words:Ug,progress:h,cursorColor:"bg-red-400"})})})]})})]})})}),vl=xe.memo(function({isActive:e=!1,intensity:t=1,reducedMotion:n=!1}){const[s,a]=xe.useState(0);if(xe.useEffect(()=>{if(!e){a(0);return}if(n){a(4);return}const l=[setTimeout(()=>a(1),30),setTimeout(()=>a(2),90),setTimeout(()=>a(3),180),setTimeout(()=>a(4),320),setTimeout(()=>a(0),480)];return()=>l.forEach(clearTimeout)},[e,n]),!e&&s===0)return null;let r="none",o="none";if(!n)switch(s){case 1:r=`translate3d(${-24*t}px, ${-6*t}px, 0) rotate(-2.8deg)`,o="brightness(1.5) contrast(1.3) blur(2px)";break;case 2:r=`translate3d(${18*t}px, ${4*t}px, 0) rotate(1.9deg)`,o="brightness(1.3) contrast(1.15) blur(1px)";break;case 3:r=`translate3d(${-8*t}px, ${-2*t}px, 0) rotate(-0.8deg)`,o="brightness(1.1) contrast(1.05)";break;case 4:r=`translate3d(${2*t}px, 0px, 0) rotate(0.2deg)`,o="none";break;default:r="none",o="none"}return d.jsx("div",{className:"pointer-events-none absolute inset-0 z-40 transition-transform ease-out",style:{transform:r,filter:o,transitionDuration:s===1?"40ms":"120ms"},children:s>0&&s<=2&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"absolute inset-0 opacity-40 mix-blend-screen pointer-events-none",style:{transform:`translate3d(${6*t}px, 0, 0)`,background:"rgba(255, 0, 40, 0.15)"}}),d.jsx("div",{className:"absolute inset-0 opacity-35 mix-blend-screen pointer-events-none",style:{transform:`translate3d(${-6*t}px, 0, 0)`,background:"rgba(0, 200, 255, 0.12)"}})]})})}),Fg=xe.memo(function({scrollProgress:e=0,isImpactActive:t=!1,gateProximity:n=0}){const s=Math.min(Math.max((e-.68)/.1,0),1),a=1-s,o=Math.min(e*1.2,.55)*(1-s*.65),l=Math.min(.1+e*.18,.28)*(1-s*.85);return d.jsxs("div",{className:"pointer-events-none absolute inset-0 z-19 overflow-hidden select-none",children:[d.jsx("div",{className:"absolute inset-0 transition-opacity duration-300",style:{background:"radial-gradient(ellipse at 50% 50%, rgba(4,5,7,0.05) 35%, rgba(2,2,3,0.55) 75%, rgba(0,0,0,0.85) 100%)",opacity:o}}),d.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none transition-opacity duration-300 will-change-opacity transform-gpu",style:{background:"linear-gradient(to top, rgba(10,14,20,0.7) 0%, rgba(10,14,20,0.5) 25%, rgba(12,18,24,0.25) 50%, rgba(12,18,24,0.08) 75%, transparent 100%)",opacity:l}}),d.jsx("div",{className:"absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none",style:{backgroundImage:"radial-gradient(rgba(255,255,255,0.12) 1px, transparent 0)",backgroundSize:"3px 3px"}}),d.jsx("div",{className:`absolute inset-0 transition-opacity duration-300 pointer-events-none ${t?"opacity-75":"opacity-0"}`,style:{background:"radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(208,24,32,0.35) 85%, rgba(180,10,20,0.55) 100%)",mixBlendMode:"screen",opacity:t?.75*a:0}})]})});function Og(i,e){return i<.09-(e==="scene-01"?-.005:.005)?"scene-01":i<.19-(e==="scene-02"?-.005:.005)?"scene-02":i<.36-(e==="scene-03"?-.005:.005)?"scene-03":i<.63-(e==="scene-06"?-.005:.005)?"scene-06":i<.77-(e==="scene-07"?-.005:.005)?"scene-07":i<.86-(e==="scene-08"?-.005:.005)?"scene-08":i<.922-(e==="scene-09"?-.005:.005)?"scene-09":i<.938-(e==="scene-10"?-.005:.005)?"scene-10":i<.948-(e==="scene-10-map"?-.005:.005)?"scene-10-map":i<.958-(e==="scene-11"?-.005:.005)?"scene-11":i<.968-(e==="scene-12"?-.005:.005)?"scene-12":i<.978-(e==="scene-13"?-.005:.005)?"scene-13":"scene-14"}const Bg=xe.memo(function({scrollProgress:e=0}){const[t,n]=xe.useState(!1),[s,a]=xe.useState(!1),[r,o]=xe.useState(!1),[l,c]=xe.useState(!1),[h,p]=xe.useState(!1),u=xe.useRef(null),m=xe.useRef(!1);xe.useEffect(()=>{Dt.setInitialScene("scene-01");const nt=()=>{m.current=!0;const it=u.current||"scene-01";Dt.onUserScrollActivity(it)};return window.addEventListener("scroll",nt,{passive:!0}),window.addEventListener("wheel",nt,{passive:!0}),window.addEventListener("touchmove",nt,{passive:!0}),()=>{window.removeEventListener("scroll",nt),window.removeEventListener("wheel",nt),window.removeEventListener("touchmove",nt),Dt.stopActiveClip()}},[]),xe.useEffect(()=>{const nt=u.current||"scene-01",it=Og(e,nt);it!==u.current&&(u.current=it,Dt.onSceneActive(it)),e>.001&&(m.current=!0,Dt.onUserScrollActivity(it))},[e]);const v=Ut[0],b=Ut[1],x=Ut[2],f=Ut[3],w=Ut[4],N=Ut[5],M=Ut[6],E=Ut[7],y=Ut[8],R=Ut[9],_=Ut[10],T=Ut[11],C=Ut[12];xe.useEffect(()=>{if(typeof window<"u"&&window.matchMedia){const nt=window.matchMedia("(prefers-reduced-motion: reduce)");n(nt.matches);const it=Xn=>n(Xn.matches);if(nt.addEventListener)return nt.addEventListener("change",it),()=>nt.removeEventListener("change",it)}},[]),xe.useEffect(()=>{[b?.image,x?.image,f?.image,w?.image,N?.image,M?.image,E?.image,y?.image,R?.image,_?.image,T?.image,C?.image].forEach(nt=>{if(nt){const it=new Image;it.src=nt}})},[b?.image,x?.image,f?.image,w?.image,N?.image,M?.image,E?.image,y?.image,R?.image,_?.image,T?.image,C?.image]);const L=xe.useRef(new Set);xe.useEffect(()=>{[{id:"gate-1",min:.082,max:.118,resetMin:.065,resetMax:.135,heavy:!1},{id:"gate-2",min:.205,max:.235,resetMin:.185,resetMax:.255,heavy:!1},{id:"gate-3",min:.625,max:.655,resetMin:.6,resetMax:.675,heavy:!0},{id:"gate-4",min:.755,max:.785,resetMin:.73,resetMax:.81,heavy:!1},{id:"gate-5",min:.912,max:.938,resetMin:.885,resetMax:.955,heavy:!0},{id:"gate-6",min:.962,max:.982,resetMin:.945,resetMax:.99,heavy:!1}].forEach(it=>{const Xn=e>=it.min&&e<=it.max,ua=e<it.resetMin||e>it.resetMax;Xn&&!L.current.has(it.id)?(L.current.add(it.id),it.id==="gate-5"?(vt.playGateOpen(.18),o(!0),setTimeout(()=>o(!1),560)):it.heavy?(o(!0),setTimeout(()=>o(!1),560)):(a(!0),setTimeout(()=>a(!1),380))):ua&&L.current.has(it.id)&&(L.current.delete(it.id),it.id==="gate-5"&&vt.fadeGateAudio(400))})},[e]);const F=xe.useRef(!1);xe.useEffect(()=>{if(!m.current)return;const nt=F.current,it=e>=.188&&e<=.308,Xn=e<.178||e>.316;!nt&&it?(F.current=!0,vt.playDossierTransition(.2)):nt&&Xn&&(F.current=!1,vt.playDossierTransition(.2))},[e]);const z=e>.002&&e<.988,I=e*Math.PI*64,V=Math.abs(Math.sin(I)),j=z?V*5.5-2.75:0,Y=z?Math.sin(I*.5)*4.5:0,ie=z?Math.sin(I*.5)*.4:0,W=xe.useRef(-1),Z=xe.useRef(e);xe.useEffect(()=>{const nt=Math.abs(e-Z.current);if(Z.current=e,z&&nt>2e-4){const it=Math.floor(e*64);it!==W.current&&(W.current=it,vt.playFootstep(.32))}},[e,z]);const ee=Math.min(Math.max(e/.12,0),1),be=ug(ee,t,s),Te=Math.min(Math.max((e-.09)/.03,0),1),et=1-Te,Ge=Math.min(Math.max((e-.09)/.13,0),1),qe=1+Math.pow(Ge,1.35)*1.85,K=Math.min(Math.max((e-.19)/.03,0),1),te=Te*(1-K),me=Math.min(Math.max((e-.14)/.07,0),1),Ne=me>.06?Math.pow(me,1.35)*115:0,_e=me>.06&&e<.22?{WebkitMaskImage:`radial-gradient(ellipse 55% 65% at 47.5% 50%, transparent ${Math.min(Ne*.45,75)}%, rgba(0,0,0,0.6) ${Math.min(Ne*.8,90)}%, black ${Math.min(Ne+18,100)}%)`,maskImage:`radial-gradient(ellipse 55% 65% at 47.5% 50%, transparent ${Math.min(Ne*.45,75)}%, rgba(0,0,0,0.6) ${Math.min(Ne*.8,90)}%, black ${Math.min(Ne+18,100)}%)`}:{},Ue=Math.min(Math.max((e-.35)/.03,0),1),pt=Math.min(me*1.25,1)*(1-Ue),Fe=Math.min(Math.max((e-.19)/.11,0),1),Ye=.86+me*.14+Math.pow(Fe,1.15)*.55,rt=-Fe*18,ke=Math.min(Math.max((e-.3)/.06,0),1),tt=Math.pow(ke,1.3),xt=Ye+tt*.55,Ct=-tt*370,dt=rt-tt*35,mt=-tt*14,U=-tt*1.8,bt=Math.min(Math.max((e-.35)/.03,0),1),He=Math.min(Math.max((e-.61)/.07,0),1),A=Math.pow(He,1.35),g=He*Math.PI*6,O=Math.abs(Math.sin(g)),H=He>.02&&He<.98,q=H?O*16-8:0,ae=H?Math.sin(g*.5)*12:0,oe=H?Math.sin(g*.5)*1.6:0,$=He*16,Q=1-A*.4,ce=$+q,we=ae,ue=Math.min(Math.max((e-.64)/.03,0),1),le=bt*(1-ue),Ae=Math.min(Math.max((e-.63)/.03,0),1),Ce=Math.min(Math.max((e-.76)/.025,0),1),De=Ae*(1-Ce),P=1.32-A*.32,se=Math.min(Math.max((e-.67)/.08,0),1),J=Math.pow(se,1.25),de=P+J*.95,he=se*Math.PI*18,ne=Math.abs(Math.sin(he)),Re=se>0&&se<1?ne*12-6:0,Ee=se>0&&se<1?Math.sin(he*.5)*8:0,ot=se>0?Ee:ae,$e=se>0?Re:$+q,Ht=se>0?Math.sin(he*.5)*1.2:oe,qt=Math.min(Math.max((e-.76)/.02,0),1),oa=Math.min(Math.max((e-.85)/.02,0),1),os=qt*(1-oa),$t=Math.min(Math.max((e-.77)/.08,0),1),Ui=Math.pow($t,1.35),Fi=$t*Math.PI*26,ls=Math.abs(Math.sin(Fi)),cs=$t>0?ls*18-9:0,bn=$t>0?Math.sin(Fi*.5)*14:0,Oi=$t>0?Math.sin(Fi*.5)*2:0,ds=1+Ui*2.5,us=Math.min(Math.max((e-.85)/.02,0),1),dn=Math.min(Math.max((e-.86)/.06,0),1),hs=Math.sin(dn*Math.PI*16)*7,ri=Math.sin(dn*Math.PI*36)*5,fs=1+Math.pow(dn,1.1)*.14,Kt=Math.min(Math.max((e-.915)/.013,0),1),ps=Math.pow(Kt,2.2),ms=Math.min(Math.max(Math.round(dn*80+Kt*20),10),100),la=ps*105,ca=fs+ps*.16,gs=Math.min(Math.max((e-.92)/.009,0),1),S=us*(1-gs),D=Math.min(Math.max((e-.916)/.006,0),1),X=Math.min(Math.max((e-.93)/.006,0),1),B=D*(1-X),k=Math.min(Math.max((e-.916)/.008,0),1),ve=-(1-Math.pow(k,1.4))*20,re=Math.min(Math.max((e-.918)/.014,0),1),Se=Math.pow(re,1.25),ye=re*Math.PI*14,Le=Math.abs(Math.sin(ye)),Be=re>0&&re<1?Le*9-4.5:0,Me=re>0&&re<1?Math.sin(ye*.5)*7:0,Ke=re>0&&re<1?Math.sin(ye*.5)*.6:0,gt=Math.min(Math.max((e-.925)/.008,0),1),Je=Math.pow(gt,1.35),st=Je*80,yt=-Je*6,ge=-Je*4.5,Tt=1+Se*.35+Je*.1,We=ve+Me+st,kt=Be+yt,Zt=Ke-Je*.6,un=Math.min(Math.max((e-.93)/.006,0),1),Pn=Math.min(Math.max((e-.944)/.006,0),1),Qe=un*(1-Pn),ut=Math.min(Math.max((e-.93)/.006,0),1),en=Math.pow(ut,.85),lt=Math.min(Math.max((e-.942)/.006,0),1),hn=Math.pow(lt,1.4),Ln=(1-en)*40+hn*50,xs=Math.sin((e-.93)*80)*2.5,fc=.96+en*.08+(e-.934)*.3,so=Math.min(Math.max((e-.934)/.008,0),1),pc=Math.min(Math.max((e-.944)/.006,0),1),mc=Math.min(Math.max((e-.958)/.006,0),1),ao=pc*(1-mc),_s=Math.min(Math.max((e-.944)/.016,0),1),gc=Math.pow(_s,1.25),ro=_s*Math.PI*10,xc=_s>0?Math.abs(Math.sin(ro))*7-3.5:0,_c=_s>0?Math.sin(ro*.5)*5:0,vc=1+gc*.48,Sc=xc*.5,Mc=_c,bc=Math.min(Math.max((e-.958)/.006,0),1),yc=Math.min(Math.max((e-.968)/.006,0),1),oo=bc*(1-yc),Ec=Math.min(Math.max((e-.958)/.012,0),1),da=Math.pow(Ec,1.25),Tc=1+da*.2,wc=da*12,Ac=-da*8,Rc=Math.min(Math.max((e-.968)/.006,0),1),Cc=Math.min(Math.max((e-.978)/.006,0),1),lo=Rc*(1-Cc),Nc=Math.min(Math.max((e-.968)/.012,0),1),co=Math.pow(Nc,.9),Ic=.98+co*.05,Dc=(1-co)*35,uo=Math.min(Math.max((e-.968)/.004,0),1),Pc=Math.min(Math.max((e-.978)/.006,0),1),Lc=Math.min(Math.max((e-.978)/.01,0),1),ho=Math.pow(Lc,.95),Uc=1+ho*.06,Fc=(1-ho)*20,Oc=Math.min(Math.max((e-.99)/.008,0),1),oi=Math.pow(Oc,1.25),fo=oi*48.8,po=Pc*(1-oi),mo=Math.min(Math.max((e-.978)/.004,0),1),go=()=>{const nt=document.querySelector("[data-register-trigger]");nt?nt.click():window.location.hash="register"},xo=()=>{p(!0);const nt=encodeURIComponent("BUILDX: The Occult Hackathon 2026 // Code-A-Nova"),it=encodeURIComponent("36-hour occult coding hackathon organized by Code-A-Nova! Decipher paranormal anomalies, build cutting-edge software, and compete for ₹50,000+ in bounties. Venue: Online."),Xn=encodeURIComponent("Online // Organized by Code-A-Nova"),ua=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${nt}&dates=20261101T033000Z/20261102T153000Z&details=${it}&location=${Xn}`;window.open(ua,"_blank","noopener,noreferrer");try{const Bc=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Code-A-Nova//BUILDX Hackathon//EN","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT","UID:buildx-hackathon-2026@code-a-nova.com","DTSTAMP:20260910T000000Z","DTSTART:20261101T033000Z","DTEND:20261102T153000Z","SUMMARY:BUILDX: The Occult Hackathon 2026 // Code-A-Nova","DESCRIPTION:36-hour occult coding hackathon organized by Code-A-Nova. Solve paranormal anomalies, build breakthrough software, and compete for ₹50,000+ in bounties. Venue: Online.","LOCATION:Online // Organized by Code-A-Nova","STATUS:CONFIRMED","END:VEVENT","END:VCALENDAR"].join(`\r
`),kc=new Blob([Bc],{type:"text/calendar;charset=utf-8"}),Bi=document.createElement("a");Bi.href=window.URL.createObjectURL(kc),Bi.setAttribute("download","BUILDX_Hackathon_Nov_1-2_2026.ics"),document.body.appendChild(Bi),Bi.click(),document.body.removeChild(Bi)}catch{}};return d.jsxs("div",{className:`relative w-full h-full overflow-hidden bg-black select-none will-change-transform ${r?"gate-breach-jhatka-active":s?"paranormal-jhatka-active":""}`,children:[et>.005&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:et,zIndex:20},children:d.jsx(fg,{imageSrc:v.image,sceneId:v.id,scrollProgress:e,cameraTransform:be,onRevealComplete:()=>c(!0)})}),te>.005&&e<.25&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-transparent transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:te,zIndex:16,..._e},children:d.jsx("div",{className:"w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${Y}px, ${j}px, 0) scale(${qe}) rotate(${ie}deg)`,transformOrigin:"47.5% 50%"},children:d.jsx("img",{src:b.image,alt:"Open Iron Gate Vault Corridor",className:"w-full h-full object-cover object-center pointer-events-none select-none",loading:"eager",decoding:"async"})})}),pt>.005&&e<.4&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:pt,zIndex:e>=.3?18:14,perspective:"1200px"},children:d.jsx("div",{className:"w-full h-full will-change-transform transform-gpu",style:{transform:`perspective(1200px) translate3d(${Ct+Y}px, ${dt+j}px, 0) scale(${xt}) rotateY(${mt}deg) rotateZ(${U+ie}deg)`,transformOrigin:"50% 48%"},children:d.jsx("img",{src:x.image,alt:"Investigation Room with Evidence Board and Desk",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.05]",loading:"eager",decoding:"async"})})}),le>.005&&d.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:le,zIndex:22},children:d.jsx("div",{className:"w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${we}px, ${ce}px, 0) scale(${Q}) rotate(${oe*.4}deg)`,transformOrigin:"50% 50%"},children:d.jsx("img",{src:f.image,alt:"Blackboard Front Crime Board",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.05]",loading:"eager",decoding:"async"})})}),De>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:De,zIndex:23},children:[d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${ot}px, ${$e}px, 0) scale(${de}) rotate(${Ht}deg)`,transformOrigin:e>=.67?"67% 68%":"24% 28%"},children:[d.jsx("img",{src:w.image,alt:"Subterranean Trapdoor Hatch Room View",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.06]",loading:"eager",decoding:"async"}),d.jsx(_l,{scrollProgress:e,variant:"mini-angled"}),se>.1&&e<.77&&d.jsx("div",{className:"absolute pointer-events-none transition-opacity duration-300",style:{left:"67%",top:"68%",transform:"translate(-50%, -50%)",opacity:Math.min(se*1.5,1)*(1-Math.min(Math.max((e-.75)/.02,0),1))},children:d.jsxs("div",{className:"relative flex items-center justify-center",children:[d.jsx("div",{className:"w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-emerald-400/80 animate-ping opacity-75"}),d.jsx("div",{className:"absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-dashed border-amber-400/60 animate-spin",style:{animationDuration:"8s"}}),d.jsx("div",{className:"absolute px-2 py-0.5 bg-black/80 border border-emerald-400 text-[10px] sm:text-xs text-emerald-300 font-mono tracking-widest whitespace-nowrap -bottom-6",children:"SUBTERRANEAN BREACH // ENTER"})]})})]}),se>.05&&d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-150",style:{opacity:Math.min(se*1.4,.85),background:"radial-gradient(ellipse at 67% 68%, rgba(16,185,129,0.25) 0%, transparent 60%), radial-gradient(circle at 67% 68%, transparent 35%, rgba(0,0,0,0.85) 100%)"}})]}),os>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:os,zIndex:25},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${bn}px, ${cs}px, 0) scale(${ds}) rotate(${Oi}deg)`,transformOrigin:"60% 46%"},children:d.jsx("img",{src:N.image,alt:"The Ghost on Subterranean Staircase at Iron Gate",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.08]",loading:"eager",decoding:"async"})}),$t>.7&&d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-color-dodge transition-opacity duration-100",style:{opacity:Math.min(($t-.7)/.25,1)*.9,background:"radial-gradient(circle at 60% 46%, rgba(220,38,38,0.4) 0%, rgba(245,158,11,0.2) 40%, rgba(0,0,0,0.9) 100%)"}}),d.jsx("div",{className:"absolute top-20 left-6 sm:left-12 px-3 py-1 bg-red-950/80 border border-red-500/80 rounded-xs font-mono text-[11px] sm:text-xs text-red-300 tracking-widest pointer-events-none transition-opacity duration-200",style:{opacity:$t>.1&&$t<.85?1:0},children:"⚠️ ENTITY PROXIMITY CRITICAL // MERGING VISION..."})]}),S>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu",style:{opacity:S,zIndex:26,perspective:"1000px"},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${ri+la}px, ${hs}px, 0) scale(${ca})`,transformOrigin:"85% 50%"},children:d.jsx("img",{src:M.image,alt:"Ghost First-Person Eye View Gripping Vault Gate",className:"w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.10] contrast-[1.08]",loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-multiply transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 50%, transparent 45%, rgba(80, 0, 0, 0.4) 75%, rgba(10, 0, 0, 0.95) 100%)"}}),d.jsx("div",{className:"absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 text-center pointer-events-none transition-opacity duration-300",style:{opacity:dn>.08&&Kt<.7?1:0},children:d.jsxs("div",{className:"inline-block w-full max-w-md p-3 sm:p-3.5 rounded-xs bg-black/90 border border-red-500/90 shadow-[0_0_30px_rgba(220,38,38,0.55)] backdrop-blur-md",children:[d.jsxs("div",{className:"font-mono text-xs sm:text-sm text-red-400 font-bold tracking-widest flex items-center justify-center gap-2",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"}),d.jsx("span",{children:Kt>.15?"💥 OPENING THE DOOR // BREAKING THE GATE":"🔓 UNLOCKING THE DOOR // OPENING THE GATE"})]}),d.jsx("div",{className:"w-full bg-stone-900 border border-red-900/60 rounded-full h-1.5 overflow-hidden my-2",children:d.jsx("div",{className:"bg-gradient-to-r from-red-600 via-amber-500 to-emerald-400 h-full transition-all duration-75",style:{width:`${ms}%`}})}),d.jsxs("div",{className:"flex justify-between items-center text-[10px] sm:text-xs font-mono text-stone-400 px-1",children:[d.jsx("span",{className:"text-red-300 font-semibold",children:Kt>.15?"FORCING HEAVY GATE OPEN...":"UNLOCKING ANCIENT LATCH..."}),d.jsxs("span",{className:"font-bold text-amber-400",children:[ms,"%"]})]}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm chalk-yellow mt-1.5",children:Kt>.15?"Gate opening! Stepping forward into the inner crypt...":"Unlocking the door... Scroll down to push the gate open."})]})})]}),(r||Kt>.05&&Kt<.95)&&d.jsx("div",{className:"absolute inset-0 pointer-events-none z-35 mix-blend-screen transition-opacity duration-75",style:{background:"radial-gradient(ellipse at 85% 50%, rgba(255, 235, 180, 0.85) 0%, rgba(220, 38, 38, 0.5) 35%, transparent 75%)",opacity:r?.95:Math.sin(Kt*Math.PI)}}),B>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-200 will-change-transform transform-gpu",style:{opacity:B,zIndex:27,perspective:"1000px"},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`perspective(1000px) translate3d(${We}px, ${kt}px, 0) scale(${Tt}) rotateY(${ge}deg) rotateZ(${Zt}deg)`,transformOrigin:"50% 0%"},children:d.jsx("img",{src:E.image,alt:"Crypt Cathedral with Red Carpet and Candles",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",style:{transform:"scaleX(-1)"},loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(ellipse at 50% 60%, rgba(245, 158, 11, 0.16) 0%, transparent 65%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.8) 100%)"}}),re>.08&&re<.95&&d.jsx("div",{className:"absolute top-20 left-6 sm:left-12 px-3 py-1 bg-black/85 border border-amber-500/70 rounded-xs font-mono text-[11px] sm:text-xs text-amber-300 tracking-widest pointer-events-none transition-opacity duration-200",children:"⚡ SANCTUM ENTERED // ADVANCING TOWARDS ALTAR"})]}),Qe>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-200 will-change-transform transform-gpu",style:{opacity:Qe,zIndex:28,perspective:"1000px"},children:[d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu flex items-center justify-center",style:{transform:`translate3d(0, ${Ln+xs}px, 0) scale(${fc})`,transformOrigin:"50% 0%"},children:[d.jsx("img",{src:y.image,alt:"Sanctum Blueprint Held in Hands",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.06]",loading:"eager",decoding:"async"}),d.jsxs("div",{className:"absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 flex flex-col items-center gap-3",style:{opacity:so>.12?1:0,transform:`translate(-50%, calc(-50% + ${so>.12?0:18}px))`},children:[d.jsxs("div",{className:"relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center",children:[d.jsx("div",{className:"absolute inset-0 border-2 border-amber-400/50 rounded-full animate-ping opacity-35"}),d.jsx("div",{className:"absolute inset-2 border border-dashed border-red-500/80 rounded-full animate-spin [animation-duration:9s]"}),d.jsx("div",{className:"absolute inset-6 border border-amber-400/60 rounded-full"}),d.jsx("div",{className:"w-3.5 h-3.5 bg-red-500 rounded-full shadow-[0_0_16px_#ef4444]"})]}),d.jsxs("div",{className:"px-4 sm:px-5 py-2 sm:py-2.5 bg-black/92 border border-amber-500/80 rounded-xs shadow-[0_0_35px_rgba(245,158,11,0.45)] backdrop-blur-md text-center max-w-sm",children:[d.jsxs("div",{className:"font-mono text-[11px] sm:text-xs text-amber-300 font-bold tracking-widest flex items-center justify-center gap-2",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),d.jsx("span",{children:"LOCATION VERIFIED // 100% BLUEPRINT MATCH"})]}),d.jsx("div",{className:"font-chalk-detective text-xs sm:text-sm text-stone-200 mt-1",children:'"The chamber layout aligns. The sacrificial altar lies directly ahead."'})]})]})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 65%, rgba(245, 158, 11, 0.20) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)"}})]}),ao>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu",style:{opacity:ao,zIndex:29},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${Mc}px, ${Sc}px, 0) scale(${vc})`,transformOrigin:"50% 0%"},children:d.jsx("img",{src:R.image,alt:"The Sacrificial Altar with Body in White Dress",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 45%, rgba(245, 158, 11, 0.15) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 35%, rgba(0,0,0,0.85) 100%)"}})]}),oo>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu",style:{opacity:oo,zIndex:30},children:[d.jsx("div",{className:"relative w-full h-full will-change-transform transform-gpu",style:{transform:`translate3d(${Ac}px, ${wc}px, 0) scale(${Tc})`,transformOrigin:"50% 0%"},children:d.jsx("img",{src:_.image,alt:"Reaching for Scroll in Hand on Altar",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",loading:"eager",decoding:"async"})}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 45%, rgba(245, 158, 11, 0.15) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 35%, rgba(0,0,0,0.85) 100%)"}})]}),lo>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu",style:{opacity:lo,zIndex:31},children:[d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu flex items-center justify-center",style:{transform:`translate3d(0, ${Dc}px, 0) scale(${Ic})`,transformOrigin:"50% 0%"},children:[d.jsx("img",{src:T.image,alt:"Unrolling the Sanctum Scroll",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]",loading:"eager",decoding:"async"}),d.jsxs("div",{className:"absolute bottom-[6%] sm:bottom-[7%] md:bottom-[8%] left-1/2 w-[86%] max-w-md sm:max-w-lg md:max-w-xl px-3 py-1 flex flex-col items-center text-center select-none pointer-events-auto",style:{opacity:uo,transform:`translate3d(-50%, 0, 0) perspective(900px) rotateX(8deg) rotateY(-1.5deg) rotateZ(2.2deg) scale(${.96+uo*.04})`,transformOrigin:"50% 50%",transition:"opacity 0.25s ease-out, transform 0.25s ease-out"},children:[d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm text-[#0a0a0a] font-bold tracking-widest uppercase leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]",children:"✦ OFFICIAL SANCTUM PROCLAMATION ✦"}),d.jsx("h2",{className:"font-ink-cursive text-3xl sm:text-5xl md:text-6xl text-[#8b0000] font-black tracking-tight leading-none my-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]",children:"Save The Date"}),d.jsx("div",{className:"font-ink-cursive text-sm sm:text-lg md:text-xl text-[#0a0a0a] font-bold leading-tight my-0.5",children:"BUILDX: The Occult Innovation Hackathon"}),d.jsx("div",{className:"w-24 sm:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#8b0000]/60 to-transparent my-0.5"}),d.jsxs("div",{className:"my-0.5",children:[d.jsx("div",{className:"font-ink-cursive text-2xl sm:text-3xl md:text-4xl text-[#8b0000] font-black tracking-normal leading-tight whitespace-nowrap drop-shadow-[0_1px_2px_rgba(139,0,0,0.3)]",children:"1st & 2nd November 2026"}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold leading-tight",children:"⚡ 36-Hour Challenge // ₹50,000+ Cash & Bounties"})]}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold leading-tight",children:"Venue: Online  ✦  Organized by Code-A-Nova"}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-1.5 sm:mt-2",children:[d.jsxs("button",{type:"button",onClick:xo,className:"px-3 sm:px-4 py-1 sm:py-1.5 bg-[#0a0a0a] hover:bg-[#1f1f1f] text-[#ffffff] border-2 border-[#8b0000] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all",children:[d.jsx("span",{children:"📅"}),d.jsx("span",{children:h?"✓ MARKED IN CALENDAR!":"MARK IN YOUR CALENDAR"})]}),d.jsx("button",{type:"button",onClick:go,className:"px-3.5 sm:px-4.5 py-1 sm:py-1.5 bg-[#8b0000] hover:bg-[#a00000] text-[#ffffff] border-2 border-[#0a0a0a] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer select-none hover:scale-105 active:scale-95 transition-transform",children:d.jsx("span",{children:"⚡ REGISTER ➔"})})]}),h&&d.jsx("div",{className:"mt-1 font-ink-cursive text-xs sm:text-sm text-[#0f5132] font-bold tracking-wide bg-[#d1e7dd]/90 px-2 py-0.5 rounded-xs border border-[#0f5132]/40 animate-pulse",children:"✓ Added to Calendar! Nov 1-2, 2026 // Online // Code-A-Nova"})]})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.16) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 38%, rgba(0,0,0,0.85) 100%)"}})]}),po>.005&&d.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu",style:{opacity:po,zIndex:32},children:[d.jsxs("div",{className:"relative w-full h-full will-change-transform transform-gpu flex items-center justify-center",style:{clipPath:oi>.002?`inset(0 ${fo}% 0 ${fo}% round 2px)`:"none",transform:`translate3d(0, ${Fc+oi*30}px, 0) scale(${Uc*(1-oi*.08)})`,transformOrigin:"50% 0%"},children:[d.jsx("img",{src:C.image,alt:"Fully Unrolled Ancient Scroll Proclamation",className:"w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.07] contrast-[1.06]",loading:"eager",decoding:"async"}),d.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none px-4",style:{opacity:Math.max(1-oi*1.6,0)*mo,transform:`scale(${.94+mo*.06})`,transition:"opacity 0.2s ease-out, transform 0.2s ease-out"},children:d.jsxs("div",{className:"relative w-full max-w-lg sm:max-w-xl md:max-w-2xl px-4 sm:px-6 py-2 flex flex-col items-center text-center select-none pointer-events-auto mt-10 sm:mt-14 md:mt-16",children:[d.jsx("div",{className:"font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold tracking-widest uppercase leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]",children:"✦ OFFICIAL SANCTUM PROCLAMATION ✦"}),d.jsx("h2",{className:"font-ink-cursive text-4xl sm:text-5xl md:text-6xl text-[#8b0000] font-black tracking-tight my-0 leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]",children:"Save The Date"}),d.jsx("div",{className:"font-ink-cursive text-sm sm:text-lg md:text-xl text-[#0f0f0f] font-bold leading-tight my-0.5",children:"BUILDX: The Occult Innovation Hackathon"}),d.jsx("div",{className:"w-28 sm:w-44 h-[1.5px] bg-gradient-to-r from-transparent via-[#8b0000]/60 to-transparent my-0.5 sm:my-1"}),d.jsxs("div",{className:"my-0.5",children:[d.jsx("div",{className:"font-ink-cursive text-2xl sm:text-4xl md:text-5xl text-[#8b0000] font-black leading-tight whitespace-nowrap drop-shadow-[0_1px_2px_rgba(139,0,0,0.3)]",children:"1st & 2nd November 2026"}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-base md:text-lg text-[#111111] font-bold leading-tight",children:"⚡ 36-Hour Challenge // ₹50,000+ Cash & Bounties"})]}),d.jsx("div",{className:"font-ink-cursive text-xs sm:text-base md:text-lg text-[#0a0a0a] font-bold leading-tight my-0.5 max-w-lg",children:"Venue: Online  ✦  Organized by Code-A-Nova"}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-1.5 sm:mt-2",children:[d.jsxs("button",{type:"button",onClick:xo,className:"px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#0a0a0a] hover:bg-[#1f1f1f] text-[#ffffff] border-2 border-[#8b0000] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all",children:[d.jsx("span",{children:"📅"}),d.jsx("span",{children:h?"✓ MARKED IN CALENDAR!":"MARK IN YOUR CALENDAR"})]}),d.jsx("button",{type:"button",onClick:go,className:"px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#8b0000] hover:bg-[#a00000] text-[#ffffff] border-2 border-[#0a0a0a] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer select-none hover:scale-105 active:scale-95 transition-transform",children:d.jsx("span",{children:"⚡ ENTER THE ARENA // REGISTER ➔"})})]}),h&&d.jsx("div",{className:"mt-1 font-ink-cursive text-xs sm:text-sm text-[#0f5132] font-bold tracking-wide bg-[#d1e7dd]/90 px-3 py-0.5 rounded-xs border border-[#0f5132]/40 animate-pulse",children:"✓ Google Calendar opened & .ics file downloaded! Nov 1-2, 2026 // Online // Code-A-Nova"})]})})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:"radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.18) 0%, transparent 65%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)"}})]}),d.jsx(Fg,{scrollProgress:e,isImpactActive:s||r,gateProximity:e>=.76?1:se}),et>.01&&d.jsx(pg,{scrollProgress:e,revealed:l}),e>=.18&&e<=.37&&d.jsx(mg,{scrollProgress:e}),e>=.36&&e<=.6&&d.jsx(_l,{scrollProgress:e,variant:"front"}),d.jsx(vl,{isActive:s,reducedMotion:t,intensity:1.4}),d.jsx(vl,{isActive:r,reducedMotion:t,intensity:2.2}),d.jsx("div",{className:"sr-only opacity-0 pointer-events-none select-none","aria-hidden":"true",children:Ut.map(nt=>d.jsx("img",{src:nt.image,alt:"",loading:"eager",decoding:"sync"},nt.id))})]})}),kg={judges:[]};function zg({className:i=""}){const e=zt.dates.countdownTarget,[t,n]=xe.useState({days:"36",hours:"00",minutes:"00",seconds:"00",isExpired:!1});xe.useEffect(()=>{if(!e)return;const a=new Date(e).getTime(),r=()=>{const l=Date.now(),c=a-l;if(c<=0){n({days:"00",hours:"00",minutes:"00",seconds:"00",isExpired:!0});return}const h=Math.floor(c/(1e3*60*60*24)),p=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(c%(1e3*60*60)/(1e3*60)),m=Math.floor(c%(1e3*60)/1e3);n({days:String(h).padStart(2,"0"),hours:String(p).padStart(2,"0"),minutes:String(u).padStart(2,"0"),seconds:String(m).padStart(2,"0"),isExpired:!1})};r();const o=setInterval(r,1e3);return()=>clearInterval(o)},[e]);const s=[{label:"DAYS",value:t.days},{label:"HOURS",value:t.hours},{label:"MINUTES",value:t.minutes},{label:"SECONDS",value:t.seconds}];return d.jsx("div",{className:`flex flex-col items-start ${i}`,children:d.jsxs("div",{className:"relative p-4 sm:p-5 rounded-xs bg-[#101010]/95 border border-white/15 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_15px_rgba(208,24,32,0.06)]",children:[d.jsx("div",{className:"absolute -top-1.5 -left-1.5 evidence-pin"}),d.jsxs("div",{className:"flex items-center justify-between gap-4 mb-3 border-b border-white/10 pb-2",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono-tech text-[11px] tracking-widest text-slate-300 uppercase font-bold",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#D01820] animate-pulse"}),d.jsx("span",{children:"THE INVESTIGATION BEGINS IN"})]}),d.jsx("span",{className:"font-mono-tech text-[9px] text-[#D01820] tracking-widest",children:"[CASE CLOCK]"})]}),d.jsx("div",{className:"flex items-center gap-2 sm:gap-3 md:gap-4",role:"timer","aria-label":`Countdown: ${t.days} days, ${t.hours} hours, ${t.minutes} minutes, ${t.seconds} seconds`,children:s.map((a,r)=>d.jsxs(Sl.Fragment,{children:[d.jsxs("div",{className:"flex flex-col items-center",children:[d.jsx("div",{className:"relative px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xs bg-[#090909] border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.9)]",children:d.jsx("span",{className:"font-mono-tech font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-widest tabular-nums drop-shadow-[0_0_8px_rgba(208,24,32,0.35)]",children:a.value})}),d.jsx("span",{className:"mt-1.5 font-mono-tech text-[9px] sm:text-[10px] text-slate-400 tracking-wider",children:a.label})]}),r<s.length-1&&d.jsx("span",{className:"font-mono-tech font-bold text-lg sm:text-xl text-[#D01820] -mt-4 select-none",children:":"})]},a.label))})]})})}const Gg=xe.memo(function({isVisible:e=!0}){const{anomalies:t,briefing:n,hackathonDetails:s,status:a}=$s;return d.jsxs("div",{id:"case-evidence",className:`relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-700 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-12 pointer-events-none"}`,children:[d.jsxs("div",{className:"border border-stone-800 bg-black/80 backdrop-blur-md p-6 sm:p-8 rounded-xs mb-12 shadow-2xl relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D01820] to-transparent"}),d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10 font-mono text-xs",children:[d.jsxs("div",{className:"flex items-center gap-2 text-[#D01820]",children:[d.jsx(yl,{className:"w-4 h-4 animate-pulse"}),d.jsx("span",{className:"tracking-widest uppercase",children:$s.caseId})]}),d.jsxs("div",{className:"inline-flex items-center gap-2 px-2.5 py-0.5 rounded-xs bg-[#D01820]/10 border border-[#D01820]/40 text-[#D01820]",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#D01820] animate-ping"}),d.jsx("span",{children:a.badge})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 items-center",children:[d.jsxs("div",{className:"lg:col-span-2 space-y-3",children:[d.jsxs("h2",{className:"font-serif font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-stone-100 uppercase leading-none",children:["BUILDX ",d.jsx("span",{className:"text-[#D01820]",children:"2026"})]}),d.jsx("p",{className:"font-mono text-lg sm:text-xl text-stone-300 tracking-wider uppercase font-bold",children:s.durationNarrative}),d.jsx("p",{className:"font-sans text-stone-400 text-sm leading-relaxed max-w-xl",children:n.detail})]}),d.jsxs("div",{className:"bg-stone-950/80 border border-stone-800 p-5 rounded-xs space-y-3",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-stone-400 uppercase tracking-wider",children:[d.jsx(Ks,{className:"w-3.5 h-3.5 text-[#D01820]"}),d.jsx("span",{children:"CONTAINMENT COUNTDOWN"})]}),d.jsx(zg,{targetDate:"2026-10-24T09:00:00Z"}),d.jsxs("div",{className:"pt-2 font-mono text-[11px] text-stone-500 uppercase text-center",children:[s.dates," • ",s.format]})]})]}),d.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-white/5",children:[d.jsx(Ni,{href:"#register-modal",variant:"primary",size:"lg",icon:d.jsx(Zi,{className:"w-4 h-4"}),onClick:()=>{const r=document.querySelector("[data-register-trigger]");r&&r.click()},children:"ENTER THE CASE // REGISTER NOW"}),d.jsx("a",{href:"#dossiers",className:"px-5 py-3 rounded-xs border border-white/10 hover:border-stone-400 font-mono text-xs text-stone-300 tracking-wider uppercase transition-colors",children:"REVIEW ANOMALY DOSSIERS"})]})]}),d.jsxs("div",{id:"dossiers",className:"mb-14",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-4 font-mono text-xs text-[#D01820] tracking-widest uppercase",children:[d.jsx(El,{className:"w-4 h-4"}),d.jsx("span",{children:"ACTIVE SECTOR ANOMALIES // TRACKS"})]}),d.jsx("h3",{className:"font-serif text-2xl sm:text-3xl font-bold text-stone-100 uppercase tracking-tight mb-8",children:"SELECT YOUR INVESTIGATION VECTOR"}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.map(r=>d.jsxs("div",{className:"group relative bg-black/75 border border-stone-800 hover:border-[#D01820]/70 p-6 rounded-xs transition-all duration-300",children:[d.jsxs("div",{className:"flex items-center justify-between mb-3 font-mono text-xs",children:[d.jsx("span",{className:"text-[#D01820] font-bold",children:r.code}),d.jsx("span",{className:"px-2 py-0.5 bg-stone-900 text-stone-400 rounded-xs border border-stone-800",children:r.risk})]}),d.jsx("h4",{className:"font-mono text-lg font-bold text-stone-200 group-hover:text-white uppercase mb-2",children:r.title}),d.jsx("p",{className:"text-stone-400 text-xs sm:text-sm leading-relaxed mb-4",children:r.description}),d.jsxs("div",{className:"pt-3 border-t border-stone-800/80 flex items-center justify-between font-mono text-xs",children:[d.jsx("span",{className:"text-stone-500",children:"BOUNTY ALLOCATION:"}),d.jsx("span",{className:"text-emerald-400 font-bold",children:r.bounty})]})]},r.id))})]}),d.jsxs("div",{className:"border border-stone-800 bg-black/70 p-6 sm:p-8 rounded-xs mb-14",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-3 font-mono text-xs text-[#D01820] tracking-widest uppercase",children:[d.jsx(Ks,{className:"w-4 h-4"}),d.jsx("span",{children:"36-HOUR RUN PROTOCOL"})]}),d.jsx("h3",{className:"font-serif text-2xl font-bold text-stone-100 uppercase tracking-tight mb-6",children:"INCIDENT TIMELINE"}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:$s.investigationTimeline.map((r,o)=>d.jsxs("div",{className:"p-4 bg-stone-950/90 border border-stone-800/80 rounded-xs space-y-1.5",children:[d.jsx("span",{className:"font-mono text-xs text-[#D01820] font-bold",children:r.time}),d.jsx("h5",{className:"font-mono text-sm font-bold text-stone-200 uppercase",children:r.title}),d.jsx("p",{className:"text-stone-400 text-xs leading-relaxed",children:r.desc})]},o))})]}),d.jsxs("div",{className:"mb-14",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-3 font-mono text-xs text-[#D01820] tracking-widest uppercase",children:[d.jsx(Yc,{className:"w-4 h-4"}),d.jsx("span",{children:"INVESTIGATION COUNCIL"})]}),d.jsx("h3",{className:"font-serif text-2xl sm:text-3xl font-bold text-stone-100 uppercase tracking-tight mb-6",children:"SENIOR ADJUDICATORS"}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:kg.judges.slice(0,3).map(r=>d.jsxs("div",{className:"bg-black/75 border border-stone-800 p-5 rounded-xs flex items-center gap-4",children:[d.jsx("div",{className:"w-12 h-12 rounded-full bg-stone-900 border border-[#D01820]/40 flex items-center justify-center font-mono font-bold text-sm text-stone-300",children:r.name.charAt(0)}),d.jsxs("div",{className:"font-mono text-xs",children:[d.jsx("div",{className:"font-bold text-stone-200 uppercase text-sm",children:r.name}),d.jsx("div",{className:"text-stone-400",children:r.role}),d.jsx("div",{className:"text-[#D01820] text-[11px]",children:r.organization})]})]},r.id))})]}),d.jsxs("div",{className:"text-center py-12 px-6 border border-[#D01820]/40 bg-gradient-to-b from-black to-[#D01820]/10 rounded-xs space-y-4",children:[d.jsx("div",{className:"font-mono text-xs text-[#D01820] tracking-widest uppercase",children:"[ FINAL PROTOCOL DIRECTIVE ]"}),d.jsx("h3",{className:"font-serif text-3xl sm:text-4xl font-black text-stone-100 uppercase tracking-tight",children:"WILL YOU ENTER THE BREACH?"}),d.jsx("p",{className:"font-sans text-stone-300 text-sm max-w-lg mx-auto leading-relaxed",children:"The signal is active. 36 hours. National competitors. Top industry mentors and bounties."}),d.jsx("div",{className:"pt-2",children:d.jsx(Ni,{href:"#register-modal",variant:"primary",size:"lg",icon:d.jsx(Zi,{className:"w-4 h-4"}),children:"ENTER THE CASE NOW"})})]})]})});function Vg({data:i=hc.footer}){return d.jsx("footer",{className:"border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-md",children:d.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"h-8 sm:h-9 w-auto flex items-center filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_0_15px_rgba(208,24,32,0.4)]",children:d.jsx("img",{src:rs,alt:"BUILDX",className:"h-full w-auto object-contain select-none pointer-events-none brightness-[1.12] contrast-[1.15]",loading:"lazy"})}),d.jsx("div",{className:"border-l border-white/10 pl-2.5",children:d.jsx("span",{className:"font-mono text-[9px] text-stone-400 uppercase tracking-widest block",children:zt.branding.subOrganizer})})]}),d.jsxs("div",{className:"text-center md:text-left max-w-md font-mono text-[10px] text-stone-500 leading-relaxed",children:[d.jsx("p",{children:i.disclaimer}),d.jsx("p",{className:"pt-1 text-stone-400",children:i.copyright})]}),d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("a",{href:zt.socials.github,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"GitHub Repository",children:d.jsx(qc,{className:"w-4 h-4"})}),d.jsx("a",{href:zt.socials.discord,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"Discord Community",children:d.jsx($c,{className:"w-4 h-4"})}),d.jsx("a",{href:zt.socials.twitter,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"Twitter Feed",children:d.jsx(Kc,{className:"w-4 h-4"})}),d.jsx("a",{href:zt.socials.linkedin,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors","aria-label":"LinkedIn Profile",children:d.jsx(Tl,{className:"w-4 h-4"})})]})]})})}function Hg({className:i="w-4 h-4"}){return d.jsx("svg",{className:i,viewBox:"0 0 24 24",fill:"currentColor",children:d.jsx("path",{d:"M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.777.82 2.795.82h.005c3.183 0 5.771-2.587 5.772-5.766 0-1.543-.601-2.993-1.693-4.086s-2.544-1.72-4.082-1.72zm6.915 1.155c1.42 1.42 2.203 3.308 2.203 5.313 0 4.143-3.372 7.516-7.517 7.516-1.258 0-2.493-.316-3.593-.914l-4.039 1.059 1.079-3.937c-.66-1.144-1.008-2.443-1.008-3.724 0-4.144 3.372-7.517 7.517-7.517 2.006 0 3.894.782 5.314 2.204zm-3.238 6.559c-.198-.099-1.171-.578-1.353-.644-.182-.065-.315-.099-.447.099s-.513.644-.629.776c-.116.133-.232.149-.43.05-.198-.099-.838-.309-1.597-.986-.591-.527-.99-1.178-1.106-1.376s-.012-.306.087-.404c.089-.089.198-.232.298-.348.099-.116.132-.198.198-.33.066-.133.033-.248-.017-.348s-.446-1.074-.612-1.47c-.161-.387-.325-.334-.447-.34l-.381-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653s.71 1.917.81 2.05c.099.132 1.397 2.133 3.385 2.99.473.204.843.326 1.131.418.475.151.907.13 1.248.079.38-.057 1.171-.479 1.337-.942.165-.463.165-.86.116-.942-.049-.083-.182-.133-.38-.232z"})})}const Wg=xe.memo(function(){const e=[{name:"Instagram",href:"https://www.instagram.com/codenova31/",icon:d.jsx(Zc,{className:"w-4 h-4"}),hoverClass:"hover:text-[#E1306C] hover:border-[#E1306C]/60 hover:shadow-[0_0_18px_rgba(225,48,108,0.45)]"},{name:"LinkedIn",href:"https://www.linkedin.com/company/code-a-nova/",icon:d.jsx(Tl,{className:"w-4 h-4"}),hoverClass:"hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:shadow-[0_0_18px_rgba(10,102,194,0.45)]"},{name:"WhatsApp",href:"https://wa.me/?text=Hi%20Code-A-Nova%20Team",icon:d.jsx(Hg,{className:"w-4 h-4"}),hoverClass:"hover:text-[#25D366] hover:border-[#25D366]/60 hover:shadow-[0_0_18px_rgba(37,211,102,0.45)]"}];return d.jsx("div",{className:"fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-2.5 pointer-events-auto select-none","aria-label":"Social links",children:e.map(t=>d.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",title:t.name,"aria-label":t.name,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-stone-400 transition-all duration-250 shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:scale-110 active:scale-95 ${t.hoverClass}`,children:t.icon},t.name))})}),Xg=xe.memo(function(){const[e,t]=xe.useState(0),n=xe.useRef(null);return xe.useEffect(()=>{let s=0,a=0,r=null;const o=()=>{if(n.current){const c=n.current.offsetTop||0,p=(n.current.offsetHeight||1)-window.innerHeight;if(p>0){const u=(window.scrollY||window.pageYOffset||0)-c;a=Math.min(Math.max(u/p,0),1)}}},l=()=>{const c=a-s;Math.abs(c)>8e-5?(s+=c*.2,t(s)):s!==a&&(s=a,t(s)),r=requestAnimationFrame(l)};return window.addEventListener("scroll",o,{passive:!0}),o(),s=a,t(s),r=requestAnimationFrame(l),()=>{window.removeEventListener("scroll",o),r&&cancelAnimationFrame(r)}},[]),d.jsxs("div",{className:"relative w-full bg-black text-[#e5e5e5]",children:[d.jsx("div",{ref:n,className:"relative w-full",style:{height:"2200vh"},children:d.jsx("div",{className:"sticky top-0 w-full h-screen overflow-hidden z-10 bg-black",children:d.jsx(Bg,{scrollProgress:e})})}),d.jsxs("section",{id:"case-evidence-section",className:"relative z-20 w-full bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-800",children:[d.jsxs("div",{className:"max-w-6xl mx-auto mb-10 text-center",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-xs bg-[#D01820]/10 border border-[#D01820]/40 text-[#D01820] text-xs font-mono tracking-widest uppercase mb-4",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-[#D01820] animate-ping"}),d.jsx("span",{children:"CHAPTER II // CLASSIFIED ANOMALY ARCHIVES"})]}),d.jsx("h2",{className:"font-serif font-black text-4xl sm:text-6xl text-stone-100 tracking-tight uppercase leading-none",children:"INVESTIGATION CASE FILES"}),d.jsx("p",{className:"font-mono text-xs sm:text-sm text-stone-400 max-w-xl mx-auto mt-3 tracking-wider uppercase leading-relaxed",children:"The sanctum proclamation has been sealed. Explore the classified case briefs, anomaly challenge tracks, and lock in your registration below."})]}),d.jsx(Gg,{isVisible:!0})]}),d.jsx(Vg,{}),d.jsx(Wg,{})]})}),jg=xe.memo(function(){const[e,t]=xe.useState(Dt.isMuted);xe.useEffect(()=>{vt.init();const s=Dt.subscribeDebug(a=>{t(a.isMuted)});return()=>s()},[]);const n=()=>{const s=Dt.toggleMute();t(s)};return d.jsx("div",{className:"fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 pointer-events-auto select-none",children:d.jsxs("button",{type:"button",onClick:n,title:e?"Turn Sound ON (Voiceover & Atmosphere)":"Turn Sound OFF (Silence Audio)","aria-label":e?"Sound Off - Click to enable":"Sound On - Click to mute",className:`group flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.85)] cursor-pointer hover:scale-105 active:scale-95 ${e?"border-stone-700/60 text-stone-400 hover:border-stone-500 hover:text-stone-200":"border-red-600/70 text-red-300 shadow-[0_0_20px_rgba(220,38,38,0.35)] hover:border-red-500"}`,children:[e?d.jsx(wl,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-500 group-hover:text-stone-300"}):d.jsxs("div",{className:"relative flex items-center justify-center",children:[d.jsx(Al,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 animate-pulse"}),d.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"})]}),d.jsx("span",{className:"font-mono text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold",children:e?"SOUND OFF":"SOUND ON"})]})})}),Yg=xe.memo(function(){const[e,t]=xe.useState(!1),[n,s]=xe.useState(Dt.getDebugState());if(xe.useEffect(()=>{if(typeof window>"u")return;const l=()=>{const p=new URLSearchParams(window.location.search).get("storyDebug")==="true",u=window.location.hash.includes("storyDebug");t(p||u)};l(),window.addEventListener("hashchange",l),window.addEventListener("popstate",l);const c=Dt.subscribeDebug(h=>{s(h)});return()=>{window.removeEventListener("hashchange",l),window.removeEventListener("popstate",l),c()}},[]),!e)return null;const a=Math.max(.1,n.clipEnd-n.clipStart),r=Math.min(Math.max((n.currentTime-n.clipStart)/a,0),1),o=(l="")=>l.includes("FADING IN")||l==="LOADING"?"text-cyan-400 bg-cyan-950/70 border-cyan-500/50":l.includes("FADING OUT")||l.includes("PAUSED")?"text-amber-400 bg-amber-950/70 border-amber-500/50":l.includes("PLAYING")?"text-emerald-400 bg-emerald-950/70 border-emerald-500/50":l==="MUTED"?"text-amber-400 bg-amber-950/70 border-amber-500/50":l==="BLOCKED"?"text-rose-400 bg-rose-950/70 border-rose-500/50":"text-stone-400 bg-stone-900/70 border-stone-700/50";return d.jsxs("div",{className:"fixed top-20 right-4 sm:right-6 z-50 w-72 sm:w-80 bg-stone-950/95 border-2 border-red-800/80 rounded-xs p-3.5 backdrop-blur-md shadow-[0_0_35px_rgba(0,0,0,0.95)] text-stone-200 font-mono text-xs select-none pointer-events-auto",style:{boxShadow:"0 0 30px rgba(185, 28, 28, 0.35)"},children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-red-900/50 pb-2 mb-2.5",children:[d.jsxs("div",{className:"flex items-center gap-1.5 text-red-400 font-bold uppercase tracking-wider text-[11px]",children:[d.jsx(Ml,{className:"w-3.5 h-3.5 animate-pulse text-red-500"}),d.jsx("span",{children:"AUDIO DEBUG HUD"})]}),d.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded-xs bg-red-950/60 border border-red-800/50 text-red-300",children:"?storyDebug=true"})]}),d.jsxs("div",{className:"space-y-1.5 text-[11px]",children:[d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Current Scene:"}),d.jsx("span",{className:"font-bold text-white bg-stone-900 px-1.5 py-0.5 rounded-xs border border-stone-700",children:n.currentScene})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Current Audio:"}),d.jsx("span",{className:"font-bold text-amber-300 truncate max-w-[140px]",title:n.audioFile,children:n.audioFile})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Clip:"}),d.jsxs("span",{className:"font-semibold text-cyan-300",children:[n.clipStart.toFixed(1),"s → ",n.clipEnd.toFixed(1),"s"]})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-stone-800/50",children:[d.jsx("span",{className:"text-stone-400",children:"Playhead:"}),d.jsxs("span",{className:"font-bold text-stone-100",children:[n.currentTime.toFixed(2),"s / ",n.clipEnd.toFixed(1),"s"]})]}),d.jsx("div",{className:"w-full bg-stone-900 h-1.5 rounded-full overflow-hidden border border-stone-800",children:d.jsx("div",{className:"h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-400 transition-all duration-75",style:{width:`${r*100}%`}})}),d.jsxs("div",{className:"flex items-center justify-between pt-1",children:[d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("span",{className:"text-stone-400",children:"Playback:"}),d.jsx("span",{className:`px-1.5 py-0.5 text-[10px] font-bold rounded-xs border ${o(n.playbackStatus)}`,children:n.playbackStatus})]}),d.jsxs("div",{className:"flex items-center gap-1 text-stone-300 text-[11px]",children:[d.jsx("span",{className:"text-stone-400",children:"Volume:"}),d.jsxs("span",{className:"font-bold text-white",children:[n.volume,"%"]})]})]}),n.isAutoplayBlocked&&d.jsx("div",{className:"text-[10px] text-amber-400 bg-amber-950/40 p-1.5 rounded-xs border border-amber-800/50 mt-1",children:"⚠ Autoplay waiting: Click or scroll to unlock audio"})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-1.5 mt-3 pt-2 border-t border-stone-800 text-[10px]",children:[d.jsxs("button",{type:"button",onClick:()=>Dt.replayCurrentScene(),className:"px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors",title:"Replay active scene voice clip",children:[d.jsx(Jc,{className:"w-3 h-3 text-cyan-400"}),d.jsx("span",{children:"Replay"})]}),d.jsxs("button",{type:"button",onClick:()=>Dt.stopActiveClip(),className:"px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors",title:"Stop currently playing audio clip",children:[d.jsx(Qc,{className:"w-3 h-3 text-rose-400"}),d.jsx("span",{children:"Stop"})]}),d.jsx("button",{type:"button",onClick:()=>Dt.toggleMute(),className:"px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors",title:"Toggle Master Sound",children:n.isMuted?d.jsxs(d.Fragment,{children:[d.jsx(wl,{className:"w-3 h-3 text-amber-400"}),d.jsx("span",{children:"Unmute"})]}):d.jsxs(d.Fragment,{children:[d.jsx(Al,{className:"w-3 h-3 text-emerald-400"}),d.jsx("span",{children:"Mute"})]})})]})]})});function Kg(){return xe.useEffect(()=>{const i=document.title;document.title=`${zt.branding.name} — ${zt.branding.tagline}`;let e=document.querySelector('meta[name="description"]');const t=e?e.getAttribute("content"):null;return e&&e.setAttribute("content",zt.branding.missionDescription),()=>{document.title=i,e&&t&&e.setAttribute("content",t)}},[]),d.jsxs("div",{className:"hackathon-theme-root bg-black text-[#e5e5e5] min-h-screen relative selection:bg-[#D01820]/40 selection:text-white",children:[d.jsx(q0,{}),d.jsx(K0,{}),d.jsx("main",{id:"main-content",className:"relative z-10 bg-black",children:d.jsx(Xg,{})}),d.jsx(jg,{}),d.jsx(Yg,{})]})}export{Kg as default};
