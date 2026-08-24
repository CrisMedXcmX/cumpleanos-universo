(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dl="174",Od=0,yc=1,Fd=2,Zh=1,Bd=2,Zn=3,Mi=0,Le=1,ke=2,gi=0,Ms=1,jt=2,Mc=3,Sc=4,zd=5,Gi=100,Gd=101,kd=102,Vd=103,Hd=104,Wd=200,Xd=201,qd=202,Yd=203,Ca=204,Ra=205,Zd=206,$d=207,Jd=208,Kd=209,jd=210,Qd=211,tf=212,ef=213,nf=214,Pa=0,La=1,Ia=2,As=3,Da=4,Ua=5,Na=6,Oa=7,$h=0,sf=1,rf=2,_i=0,of=1,af=2,lf=3,Jh=4,cf=5,hf=6,uf=7,Kh=300,Cs=301,Rs=302,Fa=303,Ba=304,Co=306,Un=1e3,Vi=1001,za=1002,Pn=1003,df=1004,Pr=1005,On=1006,Bo=1007,Hi=1008,ni=1009,jh=1010,Qh=1011,hr=1012,Ul=1013,Ji=1014,jn=1015,wr=1016,Nl=1017,Ol=1018,Ps=1020,tu=35902,eu=1021,nu=1022,Rn=1023,iu=1024,su=1025,Ss=1026,Ls=1027,ru=1028,Fl=1029,ou=1030,Bl=1031,zl=1033,ro=33776,oo=33777,ao=33778,lo=33779,Ga=35840,ka=35841,Va=35842,Ha=35843,Wa=36196,Xa=37492,qa=37496,Ya=37808,Za=37809,$a=37810,Ja=37811,Ka=37812,ja=37813,Qa=37814,tl=37815,el=37816,nl=37817,il=37818,sl=37819,rl=37820,ol=37821,co=36492,al=36494,ll=36495,au=36283,cl=36284,hl=36285,ul=36286,ff=3200,pf=3201,lu=0,mf=1,di="",ln="srgb",Is="srgb-linear",mo="linear",ae="srgb",ns=7680,wc=519,gf=512,_f=513,vf=514,cu=515,xf=516,yf=517,Mf=518,Sf=519,Tc=35044,Ec="300 es",Qn=2e3,go=2001;class Gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=Math.PI/180,dl=180/Math.PI;function ks(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[r&255]+ze[r>>8&255]+ze[r>>16&255]+ze[r>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Zt(r,t,e){return Math.max(t,Math.min(e,r))}function wf(r,t){return(r%t+t)%t}function Go(r,t,e){return(1-e)*r+e*t}function Zs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],x=i[4],v=i[7],b=i[2],C=i[5],w=i[8];return s[0]=o*g+a*M+l*b,s[3]=o*m+a*x+l*C,s[6]=o*p+a*v+l*w,s[1]=c*g+h*M+u*b,s[4]=c*m+h*x+u*C,s[7]=c*p+h*v+u*w,s[2]=d*g+f*M+_*b,s[5]=d*m+f*x+_*C,s[8]=d*p+f*v+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ko.makeScale(t,e)),this}rotate(t){return this.premultiply(ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new Vt;function hu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function _o(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tf(){const r=_o("canvas");return r.style.display="block",r}const bc={};function Oi(r){r in bc||(bc[r]=!0,console.warn(r))}function Ef(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function bf(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Af(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ac=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cf(){const r={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ae&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?mo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Is]:{primaries:t,whitePoint:n,transfer:mo,toXYZ:Ac,fromXYZ:Cc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Ac,fromXYZ:Cc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),r}const ee=Cf();function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let is;class Rf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=_o("canvas")),is.width=t.width,is.height=t.height;const n=is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=is}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_o("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pf=0;class Gl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vo(i[o].image)):s.push(Vo(i[o]))}else s=Vo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Vo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lf=0;class qe extends Gs{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=Vi,i=Vi,s=On,o=Hi,a=Rn,l=ni,c=qe.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ks(),this.name="",this.source=new Gl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Un:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Un:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Kh;qe.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(f+1)/2,b=(p+1)/2,C=(h+d)/4,w=(u+g)/4,A=(_+m)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=w/n):v>b?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=A/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=w/s,i=A/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class If extends Gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new qe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Gl(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends If{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class uu extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-a;const p=l*d+c*f+h*_+u*g,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),C=Math.atan2(b,p*M);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}const v=a*M;if(l=l*m+d*v,c=c*m+f*v,h=h*m+_*v,u=u*m+g*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ho.copy(this).projectOnVector(t),this.sub(Ho)}reflect(t){return this.sub(Ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new P,Rc=new Vs;class Tr{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(s,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Ir.subVectors(this.max,$s),ss.subVectors(t.a,$s),rs.subVectors(t.b,$s),os.subVectors(t.c,$s),oi.subVectors(rs,ss),ai.subVectors(os,rs),Ci.subVectors(ss,os);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ci.z,Ci.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ci.z,0,-Ci.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ci.y,Ci.x,0];return!Wo(e,ss,rs,os,Ir)||(e=[1,0,0,0,1,0,0,0,1],!Wo(e,ss,rs,os,Ir))?!1:(Dr.crossVectors(oi,ai),e=[Dr.x,Dr.y,Dr.z],Wo(e,ss,rs,os,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new P,new P,new P,new P,new P,new P,new P,new P],En=new P,Lr=new Tr,ss=new P,rs=new P,os=new P,oi=new P,ai=new P,Ci=new P,$s=new P,Ir=new P,Dr=new P,Ri=new P;function Wo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ri.fromArray(r,s);const a=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Uf=new Tr,Js=new P,Xo=new P;class Er{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Uf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);const e=Js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Xo)),this.expandByPoint(Js.copy(t.center).sub(Xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new P,qo=new P,Ur=new P,li=new P,Yo=new P,Nr=new P,Zo=new P;class Ro{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qo.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),li.copy(this.origin).sub(qo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ur),a=li.dot(this.direction),l=-li.dot(Ur),c=li.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qo).addScaledVector(Ur,d),f}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,i,s){Yo.subVectors(e,t),Nr.subVectors(n,t),Zo.crossVectors(Yo,Nr);let o=this.direction.dot(Zo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,t);const l=a*this.direction.dot(Nr.crossVectors(li,Nr));if(l<0)return null;const c=a*this.direction.dot(Yo.cross(li));if(c<0||l+c>o)return null;const h=-a*li.dot(Zo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,_,g,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,_,g,m)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/as.setFromMatrixColumn(t,0).length(),s=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Of)}lookAt(t,e,n){const i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ci.crossVectors(n,on),ci.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ci.crossVectors(n,on)),ci.normalize(),Or.crossVectors(on,ci),i[0]=ci.x,i[4]=Or.x,i[8]=on.x,i[1]=ci.y,i[5]=Or.y,i[9]=on.y,i[2]=ci.z,i[6]=Or.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],b=n[15],C=i[0],w=i[4],A=i[8],S=i[12],y=i[1],L=i[5],U=i[9],D=i[13],O=i[2],k=i[6],G=i[10],q=i[14],V=i[3],rt=i[7],lt=i[11],mt=i[15];return s[0]=o*C+a*y+l*O+c*V,s[4]=o*w+a*L+l*k+c*rt,s[8]=o*A+a*U+l*G+c*lt,s[12]=o*S+a*D+l*q+c*mt,s[1]=h*C+u*y+d*O+f*V,s[5]=h*w+u*L+d*k+f*rt,s[9]=h*A+u*U+d*G+f*lt,s[13]=h*S+u*D+d*q+f*mt,s[2]=_*C+g*y+m*O+p*V,s[6]=_*w+g*L+m*k+p*rt,s[10]=_*A+g*U+m*G+p*lt,s[14]=_*S+g*D+m*q+p*mt,s[3]=M*C+x*y+v*O+b*V,s[7]=M*w+x*L+v*k+b*rt,s[11]=M*A+x*U+v*G+b*lt,s[15]=M*S+x*D+v*q+b*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+g*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],M=u*m*c-g*d*c+g*l*f-a*m*f-u*l*p+a*d*p,x=_*d*c-h*m*c-_*l*f+o*m*f+h*l*p-o*d*p,v=h*g*c-_*u*c+_*a*f-o*g*f-h*a*p+o*u*p,b=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,C=e*M+n*x+i*v+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=M*w,t[1]=(g*d*s-u*m*s-g*i*f+n*m*f+u*i*p-n*d*p)*w,t[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*w,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*w,t[4]=x*w,t[5]=(h*m*s-_*d*s+_*i*f-e*m*f-h*i*p+e*d*p)*w,t[6]=(_*l*s-o*m*s-_*i*c+e*m*c+o*i*p-e*l*p)*w,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*w,t[8]=v*w,t[9]=(_*u*s-h*g*s-_*n*f+e*g*f+h*n*p-e*u*p)*w,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*w,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*w,t[12]=b*w,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*w,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,_=s*u,g=o*h,m=o*u,p=a*u,M=l*c,x=l*h,v=l*u,b=n.x,C=n.y,w=n.z;return i[0]=(1-(g+p))*b,i[1]=(f+v)*b,i[2]=(_-x)*b,i[3]=0,i[4]=(f-v)*C,i[5]=(1-(d+p))*C,i[6]=(m+M)*C,i[7]=0,i[8]=(_+x)*w,i[9]=(m-M)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=as.set(i[0],i[1],i[2]).length();const o=as.set(i[4],i[5],i[6]).length(),a=as.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],bn.copy(this);const c=1/s,h=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Qn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,_;if(a===Qn)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===go)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Qn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*c,f=(n+i)*h;let _,g;if(a===Qn)_=(o+s)*u,g=-2*u;else if(a===go)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const as=new P,bn=new ce,Nf=new P(0,0,0),Of=new P(1,1,1),ci=new P,Or=new P,on=new P,Pc=new ce,Lc=new Vs;class zn{constructor(t=0,e=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class kl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ff=0;const Ic=new P,ls=new Vs,Xn=new ce,Fr=new P,Ks=new P,Bf=new P,zf=new Vs,Dc=new P(1,0,0),Uc=new P(0,1,0),Nc=new P(0,0,1),Oc={type:"added"},Gf={type:"removed"},cs={type:"childadded",child:null},$o={type:"childremoved",child:null};class Ne extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new P,e=new zn,n=new Vs,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new Vt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Dc,t)}rotateY(t){return this.rotateOnAxis(Uc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dc,t)}translateY(t){return this.translateOnAxis(Uc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ks,Fr,this.up):Xn.lookAt(Fr,Ks,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),ls.setFromRotationMatrix(Xn),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oc),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gf),$o.child=t,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oc),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ne.DEFAULT_UP=new P(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new P,qn=new P,Jo=new P,Yn=new P,hs=new P,us=new P,Fc=new P,Ko=new P,jo=new P,Qo=new P,ta=new le,ea=new le,na=new le;class Cn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),An.subVectors(t,e),i.cross(An);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){An.subVectors(i,e),qn.subVectors(n,e),Jo.subVectors(t,e);const o=An.dot(An),a=An.dot(qn),l=An.dot(Jo),c=qn.dot(qn),h=qn.dot(Jo),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return ta.setScalar(0),ea.setScalar(0),na.setScalar(0),ta.fromBufferAttribute(t,e),ea.fromBufferAttribute(t,n),na.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ta,s.x),o.addScaledVector(ea,s.y),o.addScaledVector(na,s.z),o}static isFrontFacing(t,e,n,i){return An.subVectors(n,e),qn.subVectors(t,e),An.cross(qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),An.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;hs.subVectors(i,n),us.subVectors(s,n),Ko.subVectors(t,n);const l=hs.dot(Ko),c=us.dot(Ko);if(l<=0&&c<=0)return e.copy(n);jo.subVectors(t,i);const h=hs.dot(jo),u=us.dot(jo);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(hs,o);Qo.subVectors(t,s);const f=hs.dot(Qo),_=us.dot(Qo);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(us,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Fc.subVectors(s,i),a=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(Fc,a);const p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(hs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function ia(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=wf(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ia(o,s,t+1/3),this.g=ia(o,s,t),this.b=ia(o,s,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ee.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Zt(Ge.r*255,0,255))*65536+Math.round(Zt(Ge.g*255,0,255))*256+Math.round(Zt(Ge.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,i=Ge.g,s=Ge.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=ln){ee.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,i=Ge.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Br);const n=Go(hi.h,Br.h,e),i=Go(hi.s,Br.s,e),s=Go(hi.l,Br.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Lt;Lt.NAMES=du;let kf=0;class Qi extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Ms,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Ra,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fe extends Qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new P,zr=new ct;let Vf=0;class pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tc&&(t.usage=this.usage),t}}class fu extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pu extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hf=0;const xn=new ce,sa=new Ne,ds=new P,an=new Tr,js=new Tr,Ue=new P;class me extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hu(t)?pu:fu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(an.min,js.min),an.expandByPoint(Ue),Ue.addVectors(an.max,js.max),an.expandByPoint(Ue)):(an.expandByPoint(js.min),an.expandByPoint(js.max))}an.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(t,c),Ue.add(ds)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new P,l[A]=new P;const c=new P,h=new P,u=new P,d=new ct,f=new ct,_=new ct,g=new P,m=new P;function p(A,S,y){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,S),_.fromBufferAttribute(s,y),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(L),a[A].add(g),a[S].add(g),a[y].add(g),l[A].add(m),l[S].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let A=0,S=M.length;A<S;++A){const y=M[A],L=y.start,U=y.count;for(let D=L,O=L+U;D<O;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const x=new P,v=new P,b=new P,C=new P;function w(A){b.fromBufferAttribute(i,A),C.copy(b);const S=a[A];x.copy(S),x.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(C,S);const L=v.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,L)}for(let A=0,S=M.length;A<S;++A){const y=M[A],L=y.start,U=y.count;for(let D=L,O=L+U;D<O;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new ce,Pi=new Ro,Gr=new Er,zc=new P,kr=new P,Vr=new P,Hr=new P,ra=new P,Wr=new P,Gc=new P,Xr=new P;class K extends Ne{constructor(t=new me,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(ra.fromBufferAttribute(u,t),o?Wr.addScaledVector(ra,h):Wr.addScaledVector(ra.sub(e),h))}e.add(Wr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Pi.copy(t.ray).recast(t.near),!(Gr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Gr,zc)===null||Pi.origin.distanceToSquared(zc)>(t.far-t.near)**2))&&(Bc.copy(s).invert(),Pi.copy(t.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=x;v<b;v+=3){const C=a.getX(v),w=a.getX(v+1),A=a.getX(v+2);i=qr(this,p,t,n,c,h,u,C,w,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=qr(this,o,t,n,c,h,u,M,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=x;v<b;v+=3){const C=v,w=v+1,A=v+2;i=qr(this,p,t,n,c,h,u,C,w,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=m,x=m+1,v=m+2;i=qr(this,o,t,n,c,h,u,M,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Wf(r,t,e,n,i,s,o,a){let l;if(t.side===Le?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Mi,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Xr);return c<e.near||c>e.far?null:{distance:c,point:Xr.clone(),object:r}}function qr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,kr),r.getVertexPosition(l,Vr),r.getVertexPosition(c,Hr);const h=Wf(r,t,e,n,kr,Vr,Hr,Gc);if(h){const u=new P;Cn.getBarycoord(Gc,kr,Vr,Hr,u),i&&(h.uv=Cn.getInterpolatedAttribute(i,a,l,c,u,new ct)),s&&(h.uv1=Cn.getInterpolatedAttribute(s,a,l,c,u,new ct)),o&&(h.normal=Cn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};Cn.getNormal(kr,Vr,Hr,d.normal),h.face=d,h.barycoord=u}return h}class $e extends me{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function _(g,m,p,M,x,v,b,C,w,A,S){const y=v/w,L=b/A,U=v/2,D=b/2,O=C/2,k=w+1,G=A+1;let q=0,V=0;const rt=new P;for(let lt=0;lt<G;lt++){const mt=lt*L-D;for(let Pt=0;Pt<k;Pt++){const Wt=Pt*y-U;rt[g]=Wt*M,rt[m]=mt*x,rt[p]=O,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[m]=0,rt[p]=C>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Pt/w),u.push(1-lt/A),q+=1}}for(let lt=0;lt<A;lt++)for(let mt=0;mt<w;mt++){const Pt=d+mt+k*lt,Wt=d+mt+k*(lt+1),Y=d+(mt+1)+k*(lt+1),et=d+(mt+1)+k*lt;l.push(Pt,Wt,et),l.push(Wt,Y,et),V+=6}a.addGroup(f,V,S),f+=V,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Xe(r){const t={};for(let e=0;e<r.length;e++){const n=Ds(r[e]);for(const i in n)t[i]=n[i]}return t}function Xf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function mu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const qf={clone:Ds,merge:Xe};var Yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gu extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new P,kc=new ct,Vc=new ct;class hn extends gu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,kc,Vc),e.subVectors(Vc,kc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fs=-90,ps=1;class $f extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hn(fs,ps,t,e);i.layers=this.layers,this.add(i);const s=new hn(fs,ps,t,e);s.layers=this.layers,this.add(s);const o=new hn(fs,ps,t,e);o.layers=this.layers,this.add(o);const a=new hn(fs,ps,t,e);a.layers=this.layers,this.add(a);const l=new hn(fs,ps,t,e);l.layers=this.layers,this.add(l);const c=new hn(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class _u extends qe{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jf extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _u(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:On}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $e(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:gi});s.uniforms.tEquirect.value=e;const o=new K(i,s),a=e.minFilter;return e.minFilter===Hi&&(e.minFilter=On),new $f(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class Kt extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kf={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Vl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new Vl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class jf extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const aa=new P,Qf=new P,tp=new Vt;class Fi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=aa.subVectors(n,e).cross(Qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(aa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tp.getNormalMatrix(t),i=this.coplanarPoint(aa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Er,Yr=new P;class Hl{constructor(t=new Fi,e=new Fi,n=new Fi,i=new Fi,s=new Fi,o=new Fi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],M=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-f,v-p).normalize(),n[1].setComponents(l+s,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+h,m+_,v+M).normalize(),n[3].setComponents(l-o,d-h,m-_,v-M).normalize(),n[4].setComponents(l-a,d-u,m-g,v-x).normalize(),e===Qn)n[5].setComponents(l+a,d+u,m+g,v+x).normalize();else if(e===go)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Yr.x=i.normal.x>0?t.max.x:t.min.x,Yr.y=i.normal.y>0?t.max.y:t.min.y,Yr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Po extends Qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vo=new P,xo=new P,Hc=new ce,Qs=new Ro,Zr=new Er,la=new P,Wc=new P;class Wl extends Ne{constructor(t=new me,e=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)vo.fromBufferAttribute(e,i-1),xo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=vo.distanceTo(xo);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=s,t.ray.intersectsSphere(Zr)===!1)return;Hc.copy(i).invert(),Qs.copy(t.ray).applyMatrix4(Hc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=h.getX(g),M=h.getX(g+1),x=$r(this,t,Qs,l,p,M,g);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(f),p=$r(this,t,Qs,l,g,m,_-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=$r(this,t,Qs,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=$r(this,t,Qs,l,_-1,f,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $r(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(vo.fromBufferAttribute(a,i),xo.fromBufferAttribute(a,s),e.distanceSqToSegment(vo,xo,la,Wc)>n)return;la.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(la);if(!(c<t.near||c>t.far))return{distance:c,point:Wc.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}class Us extends Qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xc=new ce,fl=new Ro,Jr=new Er,Kr=new P;class Si extends Ne{constructor(t=new me,e=new Us){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=s,t.ray.intersectsSphere(Jr)===!1)return;Xc.copy(i).invert(),fl.copy(t.ray).applyMatrix4(Xc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);Kr.fromBufferAttribute(u,m),qc(Kr,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=d,g=f;_<g;_++)Kr.fromBufferAttribute(u,_),qc(Kr,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qc(r,t,e,n,i,s,o){const a=fl.distanceSqToPoint(r);if(a<e){const l=new P;fl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Jn extends qe{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vu extends qe{constructor(t,e,n,i,s,o,a,l,c,h=Ss){if(h!==Ss&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=Ji),n===void 0&&h===Ls&&(n=Ps),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ct:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],s=[],o=[],a=new P,l=new ce;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Zt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Zt(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xl extends kn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ep extends Xl{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ql(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const jr=new P,ca=new ql,ha=new ql,ua=new ql;class np extends kn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(jr.subVectors(i[0],i[1]).add(i[0]),c=jr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(jr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),ca.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,m),ha.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,m),ua.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ha.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ua.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ca.calc(l),ha.calc(l),ua.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yc(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function ip(r,t){const e=1-r;return e*e*t}function sp(r,t){return 2*(1-r)*r*t}function rp(r,t){return r*r*t}function rr(r,t,e,n){return ip(r,t)+sp(r,e)+rp(r,n)}function op(r,t){const e=1-r;return e*e*e*t}function ap(r,t){const e=1-r;return 3*e*e*r*t}function lp(r,t){return 3*(1-r)*r*r*t}function cp(r,t){return r*r*r*t}function or(r,t,e,n,i){return op(r,t)+ap(r,e)+lp(r,n)+cp(r,i)}class xu extends kn{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(or(t,i.x,s.x,o.x,a.x),or(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hp extends kn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(or(t,i.x,s.x,o.x,a.x),or(t,i.y,s.y,o.y,a.y),or(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yu extends kn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class up extends kn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mu extends kn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(rr(t,i.x,s.x,o.x),rr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dp extends kn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(rr(t,i.x,s.x,o.x),rr(t,i.y,s.y,o.y),rr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Su extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Yc(a,l.x,c.x,h.x,u.x),Yc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var pl=Object.freeze({__proto__:null,ArcCurve:ep,CatmullRomCurve3:np,CubicBezierCurve:xu,CubicBezierCurve3:hp,EllipseCurve:Xl,LineCurve:yu,LineCurve3:up,QuadraticBezierCurve:Mu,QuadraticBezierCurve3:dp,SplineCurve:Su});class fp extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new pl[i.type]().fromJSON(i))}return this}}class Zc extends fp{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new yu(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Mu(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new xu(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Su(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Xl(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Te extends me{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(f,2));function M(){const v=new P,b=new P;let C=0;const w=(e-t)/n;for(let A=0;A<=s;A++){const S=[],y=A/s,L=y*(e-t)+t;for(let U=0;U<=i;U++){const D=U/i,O=D*l+a,k=Math.sin(O),G=Math.cos(O);b.x=L*k,b.y=-y*n+m,b.z=L*G,u.push(b.x,b.y,b.z),v.set(k,w,G).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-y),S.push(_++)}g.push(S)}for(let A=0;A<i;A++)for(let S=0;S<s;S++){const y=g[S][A],L=g[S+1][A],U=g[S+1][A+1],D=g[S][A+1];(t>0||S!==0)&&(h.push(y,L,D),C+=3),(e>0||S!==s-1)&&(h.push(L,U,D),C+=3)}c.addGroup(p,C,0),p+=C}function x(v){const b=_,C=new ct,w=new P;let A=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),_++;const L=_;for(let U=0;U<=i;U++){const O=U/i*l+a,k=Math.cos(O),G=Math.sin(O);w.x=S*G,w.y=m*y,w.z=S*k,u.push(w.x,w.y,w.z),d.push(0,y,0),C.x=k*.5+.5,C.y=G*.5*y+.5,f.push(C.x,C.y),_++}for(let U=0;U<i;U++){const D=b+U,O=L+U;v===!0?h.push(O,O+1,D):h.push(O+1,O,D),A+=3}c.addGroup(p,A,v===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yl extends Te{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Yl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zl extends me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new he(s,3)),this.setAttribute("normal",new he(s.slice(),3)),this.setAttribute("uv",new he(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new P,v=new P,b=new P;for(let C=0;C<e.length;C+=3)f(e[C+0],x),f(e[C+1],v),f(e[C+2],b),l(x,v,b,M)}function l(M,x,v,b){const C=b+1,w=[];for(let A=0;A<=C;A++){w[A]=[];const S=M.clone().lerp(v,A/C),y=x.clone().lerp(v,A/C),L=C-A;for(let U=0;U<=L;U++)U===0&&A===C?w[A][U]=S:w[A][U]=S.clone().lerp(y,U/L)}for(let A=0;A<C;A++)for(let S=0;S<2*(C-A)-1;S++){const y=Math.floor(S/2);S%2===0?(d(w[A][y+1]),d(w[A+1][y]),d(w[A][y])):(d(w[A][y+1]),d(w[A+1][y+1]),d(w[A+1][y]))}}function c(M){const x=new P;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(M),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){const M=new P;for(let x=0;x<s.length;x+=3){M.x=s[x+0],M.y=s[x+1],M.z=s[x+2];const v=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;o.push(v,1-b)}_(),u()}function u(){for(let M=0;M<o.length;M+=6){const x=o[M+0],v=o[M+2],b=o[M+4],C=Math.max(x,v,b),w=Math.min(x,v,b);C>.9&&w<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function _(){const M=new P,x=new P,v=new P,b=new P,C=new ct,w=new ct,A=new ct;for(let S=0,y=0;S<s.length;S+=9,y+=6){M.set(s[S+0],s[S+1],s[S+2]),x.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),C.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),A.set(o[y+4],o[y+5]),b.copy(M).add(x).add(v).divideScalar(3);const L=m(b);g(C,y+0,M,L),g(w,y+2,x,L),g(A,y+4,v,L)}}function g(M,x,v,b){b<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.vertices,t.indices,t.radius,t.details)}}class $l extends Zl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $l(t.radius,t.detail)}}class ur extends Zc{constructor(t){super(t),this.uuid=ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Zc().fromJSON(i))}return this}}class pp{static triangulate(t,e,n=2){const i=e&&e.length,s=i?e[0]*n:t.length;let o=wu(t,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,h,u,d,f,_;if(i&&(o=xp(t,e,o,n)),t.length>80*n){l=h=t[0],c=u=t[1];for(let g=n;g<s;g+=n)d=t[g],f=t[g+1],d<l&&(l=d),f<c&&(c=f),d>h&&(h=d),f>u&&(u=f);_=Math.max(h-l,u-c),_=_!==0?32767/_:0}return dr(o,a,n,l,c,_,0),a}}function wu(r,t,e,n,i){let s,o;if(i===Pp(r,t,e,n)>0)for(s=t;s<e;s+=n)o=$c(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=$c(s,r[s],r[s+1],o);return o&&Lo(o,o.next)&&(pr(o),o=o.next),o}function ji(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Lo(e,e.next)||Me(e.prev,e,e.next)===0)){if(pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Tp(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?gp(r,n,i,s):mp(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),pr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=_p(ji(r),t,e),dr(r,t,e,n,i,s,2)):o===2&&vp(r,t,e,n,i,s):dr(ji(r),t,e,n,i,s,1);break}}}function mp(r){const t=r.prev,e=r,n=r.next;if(Me(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&_s(i,a,s,l,o,c,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function gp(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Me(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,g=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=ml(f,_,t,e,n),M=ml(g,m,t,e,n);let x=r.prevZ,v=r.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==o&&_s(a,h,l,u,c,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&_s(a,h,l,u,c,d,v.x,v.y)&&Me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==o&&_s(a,h,l,u,c,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&_s(a,h,l,u,c,d,v.x,v.y)&&Me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _p(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Lo(i,s)&&Tu(i,n,n.next,s)&&fr(i,s)&&fr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),pr(n),pr(n.next),n=r=s),n=n.next}while(n!==r);return ji(n)}function vp(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ap(o,a)){let l=Eu(o,a);o=ji(o,o.next),l=ji(l,l.next),dr(o,t,e,n,i,s,0),dr(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function xp(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=wu(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(bp(c));for(i.sort(yp),s=0;s<i.length;s++)e=Mp(i[s],e);return e}function yp(r,t){return r.x-t.x}function Mp(r,t){const e=Sp(r,t);if(!e)return t;const n=Eu(e,r);return ji(n,n.next),ji(e,e.next)}function Sp(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&_s(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),fr(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&wp(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function wp(r,t){return Me(r.prev,r,t.prev)<0&&Me(t.next,r,r.next)<0}function Tp(r,t,e,n){let i=r;do i.z===0&&(i.z=ml(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Ep(i)}function Ep(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function ml(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function bp(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function _s(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Ap(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Cp(r,t)&&(fr(r,t)&&fr(t,r)&&Rp(r,t)&&(Me(r.prev,r,t.prev)||Me(r,t.prev,t))||Lo(r,t)&&Me(r.prev,r,r.next)>0&&Me(t.prev,t,t.next)>0)}function Me(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Lo(r,t){return r.x===t.x&&r.y===t.y}function Tu(r,t,e,n){const i=to(Me(r,t,e)),s=to(Me(r,t,n)),o=to(Me(e,n,r)),a=to(Me(e,n,t));return!!(i!==s&&o!==a||i===0&&Qr(r,e,t)||s===0&&Qr(r,n,t)||o===0&&Qr(e,r,n)||a===0&&Qr(e,t,n))}function Qr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function to(r){return r>0?1:r<0?-1:0}function Cp(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Tu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function fr(r,t){return Me(r.prev,r,r.next)<0?Me(r,t,r.next)>=0&&Me(r,r.prev,t)>=0:Me(r,t,r.prev)<0||Me(r,r.next,t)<0}function Rp(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Eu(r,t){const e=new gl(r.i,r.x,r.y),n=new gl(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function $c(r,t,e,n){const i=new gl(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function gl(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pp(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class vi{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return vi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Jc(t),Kc(n,t);let o=t.length;e.forEach(Jc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Kc(n,e[l]);const a=pp.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Jc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Kc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Io extends me{constructor(t=new ur([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new he(i,3)),this.setAttribute("uv",new he(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Lp;let x,v=!1,b,C,w,A;p&&(x=p.getSpacedPoints(h),v=!0,d=!1,b=p.computeFrenetFrames(h,!1),C=new P,w=new P,A=new P),d||(m=0,f=0,_=0,g=0);const S=a.extractPoints(c);let y=S.shape;const L=S.holes;if(!vi.isClockWise(y)){y=y.reverse();for(let tt=0,j=L.length;tt<j;tt++){const I=L[tt];vi.isClockWise(I)&&(L[tt]=I.reverse())}}const D=vi.triangulateShape(y,L),O=y;for(let tt=0,j=L.length;tt<j;tt++){const I=L[tt];y=y.concat(I)}function k(tt,j,I){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(j,I)}const G=y.length,q=D.length;function V(tt,j,I){let wt,nt,vt;const ot=tt.x-j.x,It=tt.y-j.y,gt=I.x-tt.x,R=I.y-tt.y,T=ot*ot+It*It,z=ot*R-It*gt;if(Math.abs(z)>Number.EPSILON){const Z=Math.sqrt(T),Q=Math.sqrt(gt*gt+R*R),$=j.x-It/Z,At=j.y+ot/Z,ht=I.x-R/Q,yt=I.y+gt/Q,qt=((ht-$)*R-(yt-At)*gt)/(ot*R-It*gt);wt=$+ot*qt-tt.x,nt=At+It*qt-tt.y;const it=wt*wt+nt*nt;if(it<=2)return new ct(wt,nt);vt=Math.sqrt(it/2)}else{let Z=!1;ot>Number.EPSILON?gt>Number.EPSILON&&(Z=!0):ot<-Number.EPSILON?gt<-Number.EPSILON&&(Z=!0):Math.sign(It)===Math.sign(R)&&(Z=!0),Z?(wt=-It,nt=ot,vt=Math.sqrt(T)):(wt=ot,nt=It,vt=Math.sqrt(T/2))}return new ct(wt/vt,nt/vt)}const rt=[];for(let tt=0,j=O.length,I=j-1,wt=tt+1;tt<j;tt++,I++,wt++)I===j&&(I=0),wt===j&&(wt=0),rt[tt]=V(O[tt],O[I],O[wt]);const lt=[];let mt,Pt=rt.concat();for(let tt=0,j=L.length;tt<j;tt++){const I=L[tt];mt=[];for(let wt=0,nt=I.length,vt=nt-1,ot=wt+1;wt<nt;wt++,vt++,ot++)vt===nt&&(vt=0),ot===nt&&(ot=0),mt[wt]=V(I[wt],I[vt],I[ot]);lt.push(mt),Pt=Pt.concat(mt)}for(let tt=0;tt<m;tt++){const j=tt/m,I=f*Math.cos(j*Math.PI/2),wt=_*Math.sin(j*Math.PI/2)+g;for(let nt=0,vt=O.length;nt<vt;nt++){const ot=k(O[nt],rt[nt],wt);at(ot.x,ot.y,-I)}for(let nt=0,vt=L.length;nt<vt;nt++){const ot=L[nt];mt=lt[nt];for(let It=0,gt=ot.length;It<gt;It++){const R=k(ot[It],mt[It],wt);at(R.x,R.y,-I)}}}const Wt=_+g;for(let tt=0;tt<G;tt++){const j=d?k(y[tt],Pt[tt],Wt):y[tt];v?(w.copy(b.normals[0]).multiplyScalar(j.x),C.copy(b.binormals[0]).multiplyScalar(j.y),A.copy(x[0]).add(w).add(C),at(A.x,A.y,A.z)):at(j.x,j.y,0)}for(let tt=1;tt<=h;tt++)for(let j=0;j<G;j++){const I=d?k(y[j],Pt[j],Wt):y[j];v?(w.copy(b.normals[tt]).multiplyScalar(I.x),C.copy(b.binormals[tt]).multiplyScalar(I.y),A.copy(x[tt]).add(w).add(C),at(A.x,A.y,A.z)):at(I.x,I.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const j=tt/m,I=f*Math.cos(j*Math.PI/2),wt=_*Math.sin(j*Math.PI/2)+g;for(let nt=0,vt=O.length;nt<vt;nt++){const ot=k(O[nt],rt[nt],wt);at(ot.x,ot.y,u+I)}for(let nt=0,vt=L.length;nt<vt;nt++){const ot=L[nt];mt=lt[nt];for(let It=0,gt=ot.length;It<gt;It++){const R=k(ot[It],mt[It],wt);v?at(R.x,R.y+x[h-1].y,x[h-1].x+I):at(R.x,R.y,u+I)}}}Y(),et();function Y(){const tt=i.length/3;if(d){let j=0,I=G*j;for(let wt=0;wt<q;wt++){const nt=D[wt];Rt(nt[2]+I,nt[1]+I,nt[0]+I)}j=h+m*2,I=G*j;for(let wt=0;wt<q;wt++){const nt=D[wt];Rt(nt[0]+I,nt[1]+I,nt[2]+I)}}else{for(let j=0;j<q;j++){const I=D[j];Rt(I[2],I[1],I[0])}for(let j=0;j<q;j++){const I=D[j];Rt(I[0]+G*h,I[1]+G*h,I[2]+G*h)}}n.addGroup(tt,i.length/3-tt,0)}function et(){const tt=i.length/3;let j=0;xt(O,j),j+=O.length;for(let I=0,wt=L.length;I<wt;I++){const nt=L[I];xt(nt,j),j+=nt.length}n.addGroup(tt,i.length/3-tt,1)}function xt(tt,j){let I=tt.length;for(;--I>=0;){const wt=I;let nt=I-1;nt<0&&(nt=tt.length-1);for(let vt=0,ot=h+m*2;vt<ot;vt++){const It=G*vt,gt=G*(vt+1),R=j+wt+It,T=j+nt+It,z=j+nt+gt,Z=j+wt+gt;Xt(R,T,z,Z)}}}function at(tt,j,I){l.push(tt),l.push(j),l.push(I)}function Rt(tt,j,I){Tt(tt),Tt(j),Tt(I);const wt=i.length/3,nt=M.generateTopUV(n,i,wt-3,wt-2,wt-1);$t(nt[0]),$t(nt[1]),$t(nt[2])}function Xt(tt,j,I,wt){Tt(tt),Tt(j),Tt(wt),Tt(j),Tt(I),Tt(wt);const nt=i.length/3,vt=M.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);$t(vt[0]),$t(vt[1]),$t(vt[3]),$t(vt[1]),$t(vt[2]),$t(vt[3])}function Tt(tt){i.push(l[tt*3+0]),i.push(l[tt*3+1]),i.push(l[tt*3+2])}function $t(tt){s.push(tt.x),s.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ip(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new pl[i.type]().fromJSON(i)),new Io(n,t.options)}}const Lp={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ct(s,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],_=t[i*3+2],g=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(d,1-_),new ct(g,1-p)]:[new ct(a,1-l),new ct(h,1-u),new ct(f,1-_),new ct(m,1-p)]}};function Ip(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Hs extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let x=0;x<c;x++){const v=x*u-s;_.push(v,-M,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,v=M+c*(p+1),b=M+1+c*(p+1),C=M+1+c*p;f.push(x,v,C),f.push(v,b,C)}this.setIndex(f),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(g,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xi extends me{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new P,_=new ct;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const M=p+m,x=M,v=M+n+1,b=M+n+2,C=M+1;a.push(x,v,C),a.push(v,b,C)}}this.setIndex(a),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Jl extends me{constructor(t=new ur([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new he(i,3)),this.setAttribute("normal",new he(s,3)),this.setAttribute("uv",new he(o,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const _=d.holes;vi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=_.length;m<p;m++){const M=_[m];vi.isClockWise(M)===!0&&(_[m]=M.reverse())}const g=vi.triangulateShape(f,_);for(let m=0,p=_.length;m<p;m++){const M=_[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){const M=f[m];i.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=g.length;m<p;m++){const M=g[m],x=M[0]+u,v=M[1]+u,b=M[2]+u;n.push(x,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Dp(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Jl(n,t.curveSegments)}}function Dp(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class kt extends me{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const C=b/e;u.x=-t*Math.cos(i+C*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+C*s)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(C+v,1-x),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=h[p][M+1],v=h[p][M],b=h[p+1][M],C=h[p+1][M+1];(p!==0||o>0)&&f.push(x,v,C),(p!==n-1||l<Math.PI)&&f.push(v,b,C)}this.setIndex(f),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(g,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bn extends me{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,M=(i+1)*f+_;o.push(g,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class re extends Qi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Up extends re{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Np extends Qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Op extends Qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Kl extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const da=new ce,jc=new P,Qc=new P;class bu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(jc),Qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qc),e.updateMatrixWorld(),da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const th=new ce,tr=new P,fa=new P;class Fp extends bu{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),fa.copy(n.position),fa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fa),n.updateMatrixWorld(),i.makeTranslation(-tr.x,-tr.y,-tr.z),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th)}}class yo extends Kl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Au extends gu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bp extends bu{constructor(){super(new Au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eh extends Kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Bp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zp extends Kl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gp extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class kp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nh(){return performance.now()}const ih=new ce;class Cu{constructor(t,e,n=0,i=1/0){this.ray=new Ro(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ih.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ih),this}intersectObject(t,e=!0,n=[]){return _l(t,this,n,e),n.sort(sh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)_l(t[i],this,n,e);return n.sort(sh),n}}function sh(r,t){return r.distance-t.distance}function _l(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)_l(s[o],t,e,!0)}}function rh(r,t,e,n){const i=Vp(n);switch(e){case eu:return r*t;case iu:return r*t;case su:return r*t*2;case ru:return r*t/i.components*i.byteLength;case Fl:return r*t/i.components*i.byteLength;case ou:return r*t*2/i.components*i.byteLength;case Bl:return r*t*2/i.components*i.byteLength;case nu:return r*t*3/i.components*i.byteLength;case Rn:return r*t*4/i.components*i.byteLength;case zl:return r*t*4/i.components*i.byteLength;case ro:case oo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ao:case lo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ka:case Ha:return Math.max(r,16)*Math.max(t,8)/4;case Ga:case Va:return Math.max(r,8)*Math.max(t,8)/2;case Wa:case Xa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case tl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case el:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case nl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case il:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case sl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ol:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case co:case al:case ll:return Math.ceil(r/4)*Math.ceil(t/4)*16;case au:case cl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case hl:case ul:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vp(r){switch(r){case ni:case jh:return{byteLength:1,components:1};case hr:case Qh:case wr:return{byteLength:2,components:1};case Nl:case Ol:return{byteLength:2,components:4};case Ji:case Ul:case jn:return{byteLength:4,components:1};case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ru(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Hp(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const g=u[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
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
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
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
#endif`,Kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,im=`#ifdef USE_IRIDESCENCE
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Om=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Vm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,C0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ag=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ug=`#define PHONG
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
}`,dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,fg=`#define STANDARD
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
}`,pg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,mg=`#define TOON
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
}`,gg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_g=`uniform float size;
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Mg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:Zp,alphatest_pars_fragment:$p,aomap_fragment:Jp,aomap_pars_fragment:Kp,batching_pars_vertex:jp,batching_vertex:Qp,begin_vertex:tm,beginnormal_vertex:em,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:am,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:dm,common:fm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:_m,emissivemap_fragment:vm,emissivemap_pars_fragment:xm,colorspace_fragment:ym,colorspace_pars_fragment:Mm,envmap_fragment:Sm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Tm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Om,envmap_vertex:bm,fog_vertex:Am,fog_pars_vertex:Cm,fog_fragment:Rm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Im,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Um,lights_pars_begin:Nm,lights_toon_fragment:Fm,lights_toon_pars_fragment:Bm,lights_phong_fragment:zm,lights_phong_pars_fragment:Gm,lights_physical_fragment:km,lights_physical_pars_fragment:Vm,lights_fragment_begin:Hm,lights_fragment_maps:Wm,lights_fragment_end:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:$m,map_fragment:Jm,map_pars_fragment:Km,map_particle_fragment:jm,map_particle_pars_fragment:Qm,metalnessmap_fragment:t0,metalnessmap_pars_fragment:e0,morphinstance_vertex:n0,morphcolor_vertex:i0,morphnormal_vertex:s0,morphtarget_pars_vertex:r0,morphtarget_vertex:o0,normal_fragment_begin:a0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:h0,normal_vertex:u0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:_0,packing:v0,premultiplied_alpha_fragment:x0,project_vertex:y0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:b0,shadowmap_vertex:A0,shadowmask_pars_fragment:C0,skinbase_vertex:R0,skinning_pars_vertex:P0,skinning_vertex:L0,skinnormal_vertex:I0,specularmap_fragment:D0,specularmap_pars_fragment:U0,tonemapping_fragment:N0,tonemapping_pars_fragment:O0,transmission_fragment:F0,transmission_pars_fragment:B0,uv_pars_fragment:z0,uv_pars_vertex:G0,uv_vertex:k0,worldpos_vertex:V0,background_vert:H0,background_frag:W0,backgroundCube_vert:X0,backgroundCube_frag:q0,cube_vert:Y0,cube_frag:Z0,depth_vert:$0,depth_frag:J0,distanceRGBA_vert:K0,distanceRGBA_frag:j0,equirect_vert:Q0,equirect_frag:tg,linedashed_vert:eg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:og,meshmatcap_vert:ag,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:_g,points_frag:vg,shadow_vert:xg,shadow_frag:yg,sprite_vert:Mg,sprite_frag:Sg},pt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Dn={basic:{uniforms:Xe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Xe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Xe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Xe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Xe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Xe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Xe([pt.points,pt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Xe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Xe([pt.common,pt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Xe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Xe([pt.sprite,pt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Xe([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Xe([pt.lights,pt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Dn.physical={uniforms:Xe([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const eo={r:0,b:0,g:0},Ii=new zn,wg=new ce;function Tg(r,t,e,n,i,s,o){const a=new Lt(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function g(x){let v=!1;const b=_(x);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,v){const b=_(v);b&&(b.isCubeTexture||b.mapping===Co)?(h===void 0&&(h=new K(new $e(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Ds(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ii.copy(v.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(Ii)),h.material.toneMapped=ee.getTransfer(b.colorSpace)!==ae,(u!==b||d!==b.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new K(new Hs(2,2),new Ln({name:"BackgroundMaterial",uniforms:Ds(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ee.getTransfer(b.colorSpace)!==ae,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(eo,mu(r)),n.buffers.color.setClear(eo.r,eo.g,eo.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:g,addToRenderList:m,dispose:M}}function Eg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(y,L,U,D,O){let k=!1;const G=u(D,U,L);s!==G&&(s=G,c(s.object)),k=f(y,D,U,O),k&&_(y,D,U,O),O!==null&&t.update(O,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(y,L,U,D),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,L,U){const D=U.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let k=O[L.id];k===void 0&&(k={},O[L.id]=k);let G=k[D];return G===void 0&&(G=d(l()),k[D]=G),G}function d(y){const L=[],U=[],D=[];for(let O=0;O<e;O++)L[O]=0,U[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:D,object:y,attributes:{},index:null}}function f(y,L,U,D){const O=s.attributes,k=L.attributes;let G=0;const q=U.getAttributes();for(const V in q)if(q[V].location>=0){const lt=O[V];let mt=k[V];if(mt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),lt===void 0||lt.attribute!==mt||mt&&lt.data!==mt.data)return!0;G++}return s.attributesNum!==G||s.index!==D}function _(y,L,U,D){const O={},k=L.attributes;let G=0;const q=U.getAttributes();for(const V in q)if(q[V].location>=0){let lt=k[V];lt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor));const mt={};mt.attribute=lt,lt&&lt.data&&(mt.data=lt.data),O[V]=mt,G++}s.attributes=O,s.attributesNum=G,s.index=D}function g(){const y=s.newAttributes;for(let L=0,U=y.length;L<U;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const U=s.newAttributes,D=s.enabledAttributes,O=s.attributeDivisors;U[y]=1,D[y]===0&&(r.enableVertexAttribArray(y),D[y]=1),O[y]!==L&&(r.vertexAttribDivisor(y,L),O[y]=L)}function M(){const y=s.newAttributes,L=s.enabledAttributes;for(let U=0,D=L.length;U<D;U++)L[U]!==y[U]&&(r.disableVertexAttribArray(U),L[U]=0)}function x(y,L,U,D,O,k,G){G===!0?r.vertexAttribIPointer(y,L,U,O,k):r.vertexAttribPointer(y,L,U,D,O,k)}function v(y,L,U,D){g();const O=D.attributes,k=U.getAttributes(),G=L.defaultAttributeValues;for(const q in k){const V=k[q];if(V.location>=0){let rt=O[q];if(rt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const lt=rt.normalized,mt=rt.itemSize,Pt=t.get(rt);if(Pt===void 0)continue;const Wt=Pt.buffer,Y=Pt.type,et=Pt.bytesPerElement,xt=Y===r.INT||Y===r.UNSIGNED_INT||rt.gpuType===Ul;if(rt.isInterleavedBufferAttribute){const at=rt.data,Rt=at.stride,Xt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Tt=0;Tt<V.locationSize;Tt++)p(V.location+Tt,at.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Tt=0;Tt<V.locationSize;Tt++)m(V.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,Wt);for(let Tt=0;Tt<V.locationSize;Tt++)x(V.location+Tt,mt/V.locationSize,Y,lt,Rt*et,(Xt+mt/V.locationSize*Tt)*et,xt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)p(V.location+at,rt.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);r.bindBuffer(r.ARRAY_BUFFER,Wt);for(let at=0;at<V.locationSize;at++)x(V.location+at,mt/V.locationSize,Y,lt,mt*et,mt/V.locationSize*at*et,xt)}}else if(G!==void 0){const lt=G[q];if(lt!==void 0)switch(lt.length){case 2:r.vertexAttrib2fv(V.location,lt);break;case 3:r.vertexAttrib3fv(V.location,lt);break;case 4:r.vertexAttrib4fv(V.location,lt);break;default:r.vertexAttrib1fv(V.location,lt)}}}}M()}function b(){A();for(const y in n){const L=n[y];for(const U in L){const D=L[U];for(const O in D)h(D[O].object),delete D[O];delete L[U]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const U in L){const D=L[U];for(const O in D)h(D[O].object),delete D[O];delete L[U]}delete n[y.id]}function w(y){for(const L in n){const U=n[L];if(U[y.id]===void 0)continue;const D=U[y.id];for(const O in D)h(D[O].object),delete D[O];delete U[y.id]}}function A(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function bg(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ag(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Rn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ni&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==jn&&!A)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:C}}function Cg(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Fi,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,x=M*4;let v=p.clippingState||null;l.value=v,v=h(_,d,x,f);for(let b=0;b!==x;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==g;++x,v+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Rg(r){let t=new WeakMap;function e(o,a){return a===Fa?o.mapping=Cs:a===Ba&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fa||a===Ba)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jf(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const vs=4,oh=[.125,.215,.35,.446,.526,.582],ki=20,pa=new Au,ah=new Lt;let ma=null,ga=0,_a=0,va=!1;const Bi=(1+Math.sqrt(5))/2,ms=1/Bi,lh=[new P(-Bi,ms,0),new P(Bi,ms,0),new P(-ms,0,Bi),new P(ms,0,Bi),new P(0,Bi,-ms),new P(0,Bi,ms),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Pg=new P;class ch{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=Pg}=s;ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=va,t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:wr,format:Rn,colorSpace:Is,depthBuffer:!1},i=hh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(s)),this._blurMaterial=Ig(s,t,e)}return i}_compileMaterial(t){const e=new K(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,i,s){const l=new hn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ah),u.toneMapping=_i,u.autoClear=!1;const _=new fe({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new K(new $e,_);let m=!1;const p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,m=!0):(_.color.copy(ah),m=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const v=this._cubeSize;no(i,x*v,M>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Cs||t.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new K(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;no(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lh[(i-s-1)%lh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new K(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ki-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):ki;m>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let M=0;for(let w=0;w<ki;++w){const A=w/g,S=Math.exp(-A*A/2);p.push(S),w===0?M+=S:w<m&&(M+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const v=this._sizeLods[i],b=3*v*(i>x-vs?i-x+vs:0),C=4*(this._cubeSize-v);no(e,b,C,3*v,2*v),l.setRenderTarget(e),l.render(u,pa)}}function Lg(r){const t=[],e=[],n=[];let i=r;const s=r-vs+1+oh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-vs?l=oh[o-r+vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),x=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let C=0;C<f;C++){const w=C%3*2/3-1,A=C>2?0:-1,S=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];M.set(S,g*_*C),x.set(d,m*_*C);const y=[C,C,C,C,C,C];v.set(y,p*_*C)}const b=new me;b.setAttribute("position",new pe(M,g)),b.setAttribute("uv",new pe(x,m)),b.setAttribute("faceIndex",new pe(v,p)),t.push(b),i>vs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hh(r,t,e){const n=new Ki(r,t,e);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ig(r,t,e){const n=new Float32Array(ki),i=new P(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function uh(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function dh(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fa||l===Ba,h=l===Cs||l===Rs;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ch(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ch(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ug(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ng(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let x=0,v=M.length;x<v;x+=3){const b=M[x+0],C=M[x+1],w=M[x+2];d.push(b,C,C,w,w,b)}}else if(_!==void 0){const M=_.array;g=_.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const b=x+0,C=x+1,w=x+2;d.push(b,C,C,w,w,b)}}else return;const m=new(hu(d)?pu:fu)(d,1);m.version=g;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Og(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function u(d,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M]*g[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Bg(r,t,e){const n=new WeakMap,i=new le;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,C=1;b>t.maxTextureSize&&(C=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const w=new Float32Array(b*C*4*u),A=new uu(w,b,C,u);A.type=jn,A.needsUpdate=!0;const S=v*4;for(let L=0;L<u;L++){const U=p[L],D=M[L],O=x[L],k=b*C*4*L;for(let G=0;G<U.count;G++){const q=G*S;_===!0&&(i.fromBufferAttribute(U,G),w[k+q+0]=i.x,w[k+q+1]=i.y,w[k+q+2]=i.z,w[k+q+3]=0),g===!0&&(i.fromBufferAttribute(D,G),w[k+q+4]=i.x,w[k+q+5]=i.y,w[k+q+6]=i.z,w[k+q+7]=0),m===!0&&(i.fromBufferAttribute(O,G),w[k+q+8]=i.x,w[k+q+9]=i.y,w[k+q+10]=i.z,w[k+q+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new ct(b,C)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function zg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Pu=new qe,fh=new vu(1,1),Lu=new uu,Iu=new Df,Du=new _u,ph=[],mh=[],gh=new Float32Array(16),_h=new Float32Array(9),vh=new Float32Array(4);function Ws(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=ph[i];if(s===void 0&&(s=new Float32Array(i),ph[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ie(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function De(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Do(r,t){let e=mh[t];e===void 0&&(e=new Int32Array(t),mh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Gg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function kg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2fv(this.addr,t),De(e,t)}}function Vg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;r.uniform3fv(this.addr,t),De(e,t)}}function Hg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4fv(this.addr,t),De(e,t)}}function Wg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;vh.set(n),r.uniformMatrix2fv(this.addr,!1,vh),De(e,n)}}function Xg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;_h.set(n),r.uniformMatrix3fv(this.addr,!1,_h),De(e,n)}}function qg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;gh.set(n),r.uniformMatrix4fv(this.addr,!1,gh),De(e,n)}}function Yg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Zg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2iv(this.addr,t),De(e,t)}}function $g(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3iv(this.addr,t),De(e,t)}}function Jg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4iv(this.addr,t),De(e,t)}}function Kg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function jg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2uiv(this.addr,t),De(e,t)}}function Qg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3uiv(this.addr,t),De(e,t)}}function t_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4uiv(this.addr,t),De(e,t)}}function e_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(fh.compareFunction=cu,s=fh):s=Pu,e.setTexture2D(t||s,i)}function n_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Iu,i)}function i_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Du,i)}function s_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Lu,i)}function r_(r){switch(r){case 5126:return Gg;case 35664:return kg;case 35665:return Vg;case 35666:return Hg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return $g;case 35669:case 35673:return Jg;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}function o_(r,t){r.uniform1fv(this.addr,t)}function a_(r,t){const e=Ws(t,this.size,2);r.uniform2fv(this.addr,e)}function l_(r,t){const e=Ws(t,this.size,3);r.uniform3fv(this.addr,e)}function c_(r,t){const e=Ws(t,this.size,4);r.uniform4fv(this.addr,e)}function h_(r,t){const e=Ws(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function u_(r,t){const e=Ws(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function d_(r,t){const e=Ws(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function f_(r,t){r.uniform1iv(this.addr,t)}function p_(r,t){r.uniform2iv(this.addr,t)}function m_(r,t){r.uniform3iv(this.addr,t)}function g_(r,t){r.uniform4iv(this.addr,t)}function __(r,t){r.uniform1uiv(this.addr,t)}function v_(r,t){r.uniform2uiv(this.addr,t)}function x_(r,t){r.uniform3uiv(this.addr,t)}function y_(r,t){r.uniform4uiv(this.addr,t)}function M_(r,t,e){const n=this.cache,i=t.length,s=Do(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Pu,s[o])}function S_(r,t,e){const n=this.cache,i=t.length,s=Do(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Iu,s[o])}function w_(r,t,e){const n=this.cache,i=t.length,s=Do(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Du,s[o])}function T_(r,t,e){const n=this.cache,i=t.length,s=Do(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Lu,s[o])}function E_(r){switch(r){case 5126:return o_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return __;case 36294:return v_;case 36295:return x_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return T_}}class b_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=r_(e.type)}}class A_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E_(e.type)}}class C_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function xh(r,t){r.seq.push(t),r.map[t.id]=t}function R_(r,t,e){const n=r.name,i=n.length;for(xa.lastIndex=0;;){const s=xa.exec(n),o=xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){xh(e,c===void 0?new b_(a,r,t):new A_(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new C_(a),xh(e,u)),e=u}}}class ho{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);R_(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function yh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const P_=37297;let L_=0;function I_(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Mh=new Vt;function D_(r){ee._getMatrix(Mh,ee.workingColorSpace,r);const t=`mat3( ${Mh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(r)){case mo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Sh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+I_(r.getShaderSource(t),o)}else return i}function U_(r,t){const e=D_(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function N_(r,t){let e;switch(t){case of:e="Linear";break;case af:e="Reinhard";break;case lf:e="Cineon";break;case Jh:e="ACESFilmic";break;case hf:e="AgX";break;case uf:e="Neutral";break;case cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const io=new P;function O_(){ee.getLuminanceCoefficients(io);const r=io.x.toFixed(4),t=io.y.toFixed(4),e=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function B_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function z_(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function nr(r){return r!==""}function wh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Th(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(r){return r.replace(G_,V_)}const k_=new Map;function V_(r,t){let e=Ht[t];if(e===void 0){const n=k_.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vl(e)}const H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(r){return r.replace(H_,W_)}function W_(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X_(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function q_(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Cs:case Rs:t="ENVMAP_TYPE_CUBE";break;case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y_(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function Z_(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $h:t="ENVMAP_BLENDING_MULTIPLY";break;case sf:t="ENVMAP_BLENDING_MIX";break;case rf:t="ENVMAP_BLENDING_ADD";break}return t}function $_(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function J_(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=X_(e),c=q_(e),h=Y_(e),u=Z_(e),d=$_(e),f=F_(e),_=B_(s),g=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(m=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Ht.tonemapping_pars_fragment:"",e.toneMapping!==_i?N_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,U_("linearToOutputTexel",e.outputColorSpace),O_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),o=vl(o),o=wh(o,e),o=Th(o,e),a=vl(a),a=wh(a,e),a=Th(a,e),o=Eh(o),a=Eh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,v=M+p+a,b=yh(i,i.VERTEX_SHADER,x),C=yh(i,i.FRAGMENT_SHADER,v);i.attachShader(g,b),i.attachShader(g,C),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(L){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),D=i.getShaderInfoLog(b).trim(),O=i.getShaderInfoLog(C).trim();let k=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,C);else{const q=Sh(i,b,"vertex"),V=Sh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+q+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||O==="")&&(G=!1);G&&(L.diagnostics={runnable:k,programLog:U,vertexShader:{log:D,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(b),i.deleteShader(C),A=new ho(i,g),S=z_(i,g)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,P_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=L_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=C,this}let K_=0;class j_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Q_(t),e.set(t,n)),n}}class Q_{constructor(t){this.id=K_++,this.code=t,this.usedTimes=0}}function tv(r,t,e,n,i,s,o){const a=new kl,l=new j_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,L,U,D){const O=U.fog,k=D.geometry,G=S.isMeshStandardMaterial?U.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),V=q&&q.mapping===Co?q.image.height:null,rt=_[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const lt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,mt=lt!==void 0?lt.length:0;let Pt=0;k.morphAttributes.position!==void 0&&(Pt=1),k.morphAttributes.normal!==void 0&&(Pt=2),k.morphAttributes.color!==void 0&&(Pt=3);let Wt,Y,et,xt;if(rt){const ne=Dn[rt];Wt=ne.vertexShader,Y=ne.fragmentShader}else Wt=S.vertexShader,Y=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),xt=l.getFragmentShaderID(S);const at=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),Xt=D.isInstancedMesh===!0,Tt=D.isBatchedMesh===!0,$t=!!S.map,tt=!!S.matcap,j=!!q,I=!!S.aoMap,wt=!!S.lightMap,nt=!!S.bumpMap,vt=!!S.normalMap,ot=!!S.displacementMap,It=!!S.emissiveMap,gt=!!S.metalnessMap,R=!!S.roughnessMap,T=S.anisotropy>0,z=S.clearcoat>0,Z=S.dispersion>0,Q=S.iridescence>0,$=S.sheen>0,At=S.transmission>0,ht=T&&!!S.anisotropyMap,yt=z&&!!S.clearcoatMap,qt=z&&!!S.clearcoatNormalMap,it=z&&!!S.clearcoatRoughnessMap,Mt=Q&&!!S.iridescenceMap,Ut=Q&&!!S.iridescenceThicknessMap,Ot=$&&!!S.sheenColorMap,St=$&&!!S.sheenRoughnessMap,Yt=!!S.specularMap,zt=!!S.specularColorMap,oe=!!S.specularIntensityMap,N=At&&!!S.transmissionMap,ut=At&&!!S.thicknessMap,X=!!S.gradientMap,J=!!S.alphaMap,dt=S.alphaTest>0,ft=!!S.alphaHash,Ft=!!S.extensions;let ge=_i;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ge=r.toneMapping);const Pe={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:Wt,fragmentShader:Y,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&D._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&D.instanceColor!==null,instancingMorph:Xt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?r.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Is,alphaToCoverage:!!S.alphaToCoverage,map:$t,matcap:tt,envMap:j,envMapMode:j&&q.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:wt,bumpMap:nt,normalMap:vt,displacementMap:d&&ot,emissiveMap:It,normalMapObjectSpace:vt&&S.normalMapType===mf,normalMapTangentSpace:vt&&S.normalMapType===lu,metalnessMap:gt,roughnessMap:R,anisotropy:T,anisotropyMap:ht,clearcoat:z,clearcoatMap:yt,clearcoatNormalMap:qt,clearcoatRoughnessMap:it,dispersion:Z,iridescence:Q,iridescenceMap:Mt,iridescenceThicknessMap:Ut,sheen:$,sheenColorMap:Ot,sheenRoughnessMap:St,specularMap:Yt,specularColorMap:zt,specularIntensityMap:oe,transmission:At,transmissionMap:N,thicknessMap:ut,gradientMap:X,opaque:S.transparent===!1&&S.blending===Ms&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:dt,alphaHash:ft,combine:S.combine,mapUv:$t&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:wt&&g(S.lightMap.channel),bumpMapUv:nt&&g(S.bumpMap.channel),normalMapUv:vt&&g(S.normalMap.channel),displacementMapUv:ot&&g(S.displacementMap.channel),emissiveMapUv:It&&g(S.emissiveMap.channel),metalnessMapUv:gt&&g(S.metalnessMap.channel),roughnessMapUv:R&&g(S.roughnessMap.channel),anisotropyMapUv:ht&&g(S.anisotropyMap.channel),clearcoatMapUv:yt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:qt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(S.sheenRoughnessMap.channel),specularMapUv:Yt&&g(S.specularMap.channel),specularColorMapUv:zt&&g(S.specularColorMap.channel),specularIntensityMapUv:oe&&g(S.specularIntensityMap.channel),transmissionMapUv:N&&g(S.transmissionMap.channel),thicknessMapUv:ut&&g(S.thicknessMap.channel),alphaMapUv:J&&g(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(vt||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&($t||J),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Pt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:ge,decodeVideoTexture:$t&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:It&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ke,flipSided:S.side===Le,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)y.push(L),y.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(M(y,S),x(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=_[S.type];let L;if(y){const U=Dn[y];L=qf.clone(U.uniforms)}else L=S.uniforms;return L}function b(S,y){let L;for(let U=0,D=h.length;U<D;U++){const O=h[U];if(O.cacheKey===y){L=O,++L.usedTimes;break}}return L===void 0&&(L=new J_(r,y,S,s),h.push(L)),L}function C(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:A}}function ev(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function nv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ah(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ch(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||nv),n.length>1&&n.sort(d||Ah),i.length>1&&i.sort(d||Ah)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function iv(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ch,r.set(n,[o])):i>=s.length?(o=new Ch,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function sv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Lt};break;case"SpotLight":e={position:new P,direction:new P,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function rv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ov=0;function av(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function lv(r){const t=new sv,e=rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,s=new ce,o=new ce;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,x=0,v=0,b=0,C=0,w=0;c.sort(av);for(let S=0,y=c.length;S<y;S++){const L=c[S],U=L.color,D=L.intensity,O=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*D,u+=U.g*D,d+=U.b*D;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],D);w++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,V=e.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=G,f++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(U).multiplyScalar(D),G.distance=O,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[g]=G;const q=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,q.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[g]=q.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=k,v++}g++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(U).multiplyScalar(D),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const q=L.shadow,V=e.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=k,n.pointShadowMatrix[_]=L.shadow.matrix,x++}n.point[_]=G,_++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(D),G.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==_||A.spotLength!==g||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==M||A.numPointShadows!==x||A.numSpotShadows!==v||A.numSpotMaps!==b||A.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+b-C,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,A.directionalLength=f,A.pointLength=_,A.spotLength=g,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=M,A.numPointShadows=x,A.numSpotShadows=v,A.numSpotMaps=b,A.numLightProbes=w,n.version=ov++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Rh(r){const t=new lv(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cv(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Rh(r),t.set(i,[a])):s>=o.length?(a=new Rh(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dv(r,t,e){let n=new Hl;const i=new ct,s=new ct,o=new le,a=new Np({depthPacking:pf}),l=new Op,c={},h=e.maxTextureSize,u={[Mi]:Le,[Le]:Mi,[ke]:ke},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:hv,fragmentShader:uv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new me;_.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new K(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let p=this.type;this.render=function(C,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=r.getRenderTarget(),y=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),U=r.state;U.setBlending(gi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=p!==Zn&&this.type===Zn,O=p===Zn&&this.type!==Zn;for(let k=0,G=C.length;k<G;k++){const q=C[k],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const rt=V.getFrameExtents();if(i.multiply(rt),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/rt.x),i.x=s.x*rt.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/rt.y),i.y=s.y*rt.y,V.mapSize.y=s.y)),V.map===null||D===!0||O===!0){const mt=this.type!==Zn?{minFilter:Pn,magFilter:Pn}:{};V.map!==null&&V.map.dispose(),V.map=new Ki(i.x,i.y,mt),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const lt=V.getViewportCount();for(let mt=0;mt<lt;mt++){const Pt=V.getViewport(mt);o.set(s.x*Pt.x,s.y*Pt.y,s.x*Pt.z,s.y*Pt.w),U.viewport(o),V.updateMatrices(q,mt),n=V.getFrustum(),v(w,A,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Zn&&M(V,A),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,y,L)};function M(C,w){const A=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ki(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(w,null,A,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(w,null,A,f,g,null)}function x(C,w,A,S){let y=null;const L=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)y=L;else if(y=A.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=y.uuid,D=w.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let k=O[D];k===void 0&&(k=y.clone(),O[D]=k,w.addEventListener("dispose",b)),y=k}if(y.visible=w.visible,y.wireframe=w.wireframe,S===Zn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=r.properties.get(y);U.light=A}return y}function v(C,w,A,S,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Zn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const D=t.update(C),O=C.material;if(Array.isArray(O)){const k=D.groups;for(let G=0,q=k.length;G<q;G++){const V=k[G],rt=O[V.materialIndex];if(rt&&rt.visible){const lt=x(C,rt,S,y);C.onBeforeShadow(r,C,w,A,D,lt,V),r.renderBufferDirect(A,null,D,lt,C,V),C.onAfterShadow(r,C,w,A,D,lt,V)}}}else if(O.visible){const k=x(C,O,S,y);C.onBeforeShadow(r,C,w,A,D,k,null),r.renderBufferDirect(A,null,D,k,C,null),C.onAfterShadow(r,C,w,A,D,k,null)}}const U=C.children;for(let D=0,O=U.length;D<O;D++)v(U[D],w,A,S,y)}function b(C){C.target.removeEventListener("dispose",b);for(const A in c){const S=c[A],y=C.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const fv={[Pa]:La,[Ia]:Na,[Da]:Oa,[As]:Ua,[La]:Pa,[Na]:Ia,[Oa]:Da,[Ua]:As};function pv(r,t){function e(){let N=!1;const ut=new le;let X=null;const J=new le(0,0,0,0);return{setMask:function(dt){X!==dt&&!N&&(r.colorMask(dt,dt,dt,dt),X=dt)},setLocked:function(dt){N=dt},setClear:function(dt,ft,Ft,ge,Pe){Pe===!0&&(dt*=ge,ft*=ge,Ft*=ge),ut.set(dt,ft,Ft,ge),J.equals(ut)===!1&&(r.clearColor(dt,ft,Ft,ge),J.copy(ut))},reset:function(){N=!1,X=null,J.set(-1,0,0,0)}}}function n(){let N=!1,ut=!1,X=null,J=null,dt=null;return{setReversed:function(ft){if(ut!==ft){const Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const ge=dt;dt=null,this.setClear(ge)}ut=ft},getReversed:function(){return ut},setTest:function(ft){ft?at(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(ft){X!==ft&&!N&&(r.depthMask(ft),X=ft)},setFunc:function(ft){if(ut&&(ft=fv[ft]),J!==ft){switch(ft){case Pa:r.depthFunc(r.NEVER);break;case La:r.depthFunc(r.ALWAYS);break;case Ia:r.depthFunc(r.LESS);break;case As:r.depthFunc(r.LEQUAL);break;case Da:r.depthFunc(r.EQUAL);break;case Ua:r.depthFunc(r.GEQUAL);break;case Na:r.depthFunc(r.GREATER);break;case Oa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ft}},setLocked:function(ft){N=ft},setClear:function(ft){dt!==ft&&(ut&&(ft=1-ft),r.clearDepth(ft),dt=ft)},reset:function(){N=!1,X=null,J=null,dt=null,ut=!1}}}function i(){let N=!1,ut=null,X=null,J=null,dt=null,ft=null,Ft=null,ge=null,Pe=null;return{setTest:function(ne){N||(ne?at(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(ne){ut!==ne&&!N&&(r.stencilMask(ne),ut=ne)},setFunc:function(ne,nn,wn){(X!==ne||J!==nn||dt!==wn)&&(r.stencilFunc(ne,nn,wn),X=ne,J=nn,dt=wn)},setOp:function(ne,nn,wn){(ft!==ne||Ft!==nn||ge!==wn)&&(r.stencilOp(ne,nn,wn),ft=ne,Ft=nn,ge=wn)},setLocked:function(ne){N=ne},setClear:function(ne){Pe!==ne&&(r.clearStencil(ne),Pe=ne)},reset:function(){N=!1,ut=null,X=null,J=null,dt=null,ft=null,Ft=null,ge=null,Pe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,x=null,v=null,b=null,C=null,w=new Lt(0,0,0),A=0,S=!1,y=null,L=null,U=null,D=null,O=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=q>=2);let rt=null,lt={};const mt=r.getParameter(r.SCISSOR_BOX),Pt=r.getParameter(r.VIEWPORT),Wt=new le().fromArray(mt),Y=new le().fromArray(Pt);function et(N,ut,X,J){const dt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(N,ft),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<X;Ft++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(ut+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return ft}const xt={};xt[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(r.DEPTH_TEST),o.setFunc(As),nt(!1),vt(yc),at(r.CULL_FACE),I(gi);function at(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function Rt(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Xt(N,ut){return u[N]!==ut?(r.bindFramebuffer(N,ut),u[N]=ut,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function Tt(N,ut){let X=f,J=!1;if(N){X=d.get(ut),X===void 0&&(X=[],d.set(ut,X));const dt=N.textures;if(X.length!==dt.length||X[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,Ft=dt.length;ft<Ft;ft++)X[ft]=r.COLOR_ATTACHMENT0+ft;X.length=dt.length,J=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,J=!0);J&&r.drawBuffers(X)}function $t(N){return _!==N?(r.useProgram(N),_=N,!0):!1}const tt={[Gi]:r.FUNC_ADD,[Gd]:r.FUNC_SUBTRACT,[kd]:r.FUNC_REVERSE_SUBTRACT};tt[Vd]=r.MIN,tt[Hd]=r.MAX;const j={[Wd]:r.ZERO,[Xd]:r.ONE,[qd]:r.SRC_COLOR,[Ca]:r.SRC_ALPHA,[jd]:r.SRC_ALPHA_SATURATE,[Jd]:r.DST_COLOR,[Zd]:r.DST_ALPHA,[Yd]:r.ONE_MINUS_SRC_COLOR,[Ra]:r.ONE_MINUS_SRC_ALPHA,[Kd]:r.ONE_MINUS_DST_COLOR,[$d]:r.ONE_MINUS_DST_ALPHA,[Qd]:r.CONSTANT_COLOR,[tf]:r.ONE_MINUS_CONSTANT_COLOR,[ef]:r.CONSTANT_ALPHA,[nf]:r.ONE_MINUS_CONSTANT_ALPHA};function I(N,ut,X,J,dt,ft,Ft,ge,Pe,ne){if(N===gi){g===!0&&(Rt(r.BLEND),g=!1);return}if(g===!1&&(at(r.BLEND),g=!0),N!==zd){if(N!==m||ne!==S){if((p!==Gi||v!==Gi)&&(r.blendEquation(r.FUNC_ADD),p=Gi,v=Gi),ne)switch(N){case Ms:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jt:r.blendFunc(r.ONE,r.ONE);break;case Mc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ms:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jt:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Mc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,x=null,b=null,C=null,w.set(0,0,0),A=0,m=N,S=ne}return}dt=dt||ut,ft=ft||X,Ft=Ft||J,(ut!==p||dt!==v)&&(r.blendEquationSeparate(tt[ut],tt[dt]),p=ut,v=dt),(X!==M||J!==x||ft!==b||Ft!==C)&&(r.blendFuncSeparate(j[X],j[J],j[ft],j[Ft]),M=X,x=J,b=ft,C=Ft),(ge.equals(w)===!1||Pe!==A)&&(r.blendColor(ge.r,ge.g,ge.b,Pe),w.copy(ge),A=Pe),m=N,S=!1}function wt(N,ut){N.side===ke?Rt(r.CULL_FACE):at(r.CULL_FACE);let X=N.side===Le;ut&&(X=!X),nt(X),N.blending===Ms&&N.transparent===!1?I(gi):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),It(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?at(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function nt(N){y!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),y=N)}function vt(N){N!==Od?(at(r.CULL_FACE),N!==L&&(N===yc?r.cullFace(r.BACK):N===Fd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),L=N}function ot(N){N!==U&&(G&&r.lineWidth(N),U=N)}function It(N,ut,X){N?(at(r.POLYGON_OFFSET_FILL),(D!==ut||O!==X)&&(r.polygonOffset(ut,X),D=ut,O=X)):Rt(r.POLYGON_OFFSET_FILL)}function gt(N){N?at(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function R(N){N===void 0&&(N=r.TEXTURE0+k-1),rt!==N&&(r.activeTexture(N),rt=N)}function T(N,ut,X){X===void 0&&(rt===null?X=r.TEXTURE0+k-1:X=rt);let J=lt[X];J===void 0&&(J={type:void 0,texture:void 0},lt[X]=J),(J.type!==N||J.texture!==ut)&&(rt!==X&&(r.activeTexture(X),rt=X),r.bindTexture(N,ut||xt[N]),J.type=N,J.texture=ut)}function z(){const N=lt[rt];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{r.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{r.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{r.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{r.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qt(){try{r.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{r.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{r.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{r.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(N){Wt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Wt.copy(N))}function St(N){Y.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function Yt(N,ut){let X=c.get(ut);X===void 0&&(X=new WeakMap,c.set(ut,X));let J=X.get(N);J===void 0&&(J=r.getUniformBlockIndex(ut,N.name),X.set(N,J))}function zt(N,ut){const J=c.get(ut).get(N);l.get(ut)!==J&&(r.uniformBlockBinding(ut,J,N.__bindingPointIndex),l.set(ut,J))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},rt=null,lt={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,x=null,v=null,b=null,C=null,w=new Lt(0,0,0),A=0,S=!1,y=null,L=null,U=null,D=null,O=null,Wt.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:at,disable:Rt,bindFramebuffer:Xt,drawBuffers:Tt,useProgram:$t,setBlending:I,setMaterial:wt,setFlipSided:nt,setCullFace:vt,setLineWidth:ot,setPolygonOffset:It,setScissorTest:gt,activeTexture:R,bindTexture:T,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:Mt,texImage3D:Ut,updateUBOMapping:Yt,uniformBlockBinding:zt,texStorage2D:qt,texStorage3D:it,texSubImage2D:$,texSubImage3D:At,compressedTexSubImage2D:ht,compressedTexSubImage3D:yt,scissor:Ot,viewport:St,reset:oe}}function mv(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,T){return f?new OffscreenCanvas(R,T):_o("canvas")}function g(R,T,z){let Z=1;const Q=gt(R);if((Q.width>z||Q.height>z)&&(Z=z/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Z*Q.width),At=Math.floor(Z*Q.height);u===void 0&&(u=_($,At));const ht=T?_($,At):u;return ht.width=$,ht.height=At,ht.getContext("2d").drawImage(R,0,0,$,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+At+")."),ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,T,z,Z,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=T;if(T===r.RED&&(z===r.FLOAT&&($=r.R32F),z===r.HALF_FLOAT&&($=r.R16F),z===r.UNSIGNED_BYTE&&($=r.R8)),T===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.R8UI),z===r.UNSIGNED_SHORT&&($=r.R16UI),z===r.UNSIGNED_INT&&($=r.R32UI),z===r.BYTE&&($=r.R8I),z===r.SHORT&&($=r.R16I),z===r.INT&&($=r.R32I)),T===r.RG&&(z===r.FLOAT&&($=r.RG32F),z===r.HALF_FLOAT&&($=r.RG16F),z===r.UNSIGNED_BYTE&&($=r.RG8)),T===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RG8UI),z===r.UNSIGNED_SHORT&&($=r.RG16UI),z===r.UNSIGNED_INT&&($=r.RG32UI),z===r.BYTE&&($=r.RG8I),z===r.SHORT&&($=r.RG16I),z===r.INT&&($=r.RG32I)),T===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RGB8UI),z===r.UNSIGNED_SHORT&&($=r.RGB16UI),z===r.UNSIGNED_INT&&($=r.RGB32UI),z===r.BYTE&&($=r.RGB8I),z===r.SHORT&&($=r.RGB16I),z===r.INT&&($=r.RGB32I)),T===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RGBA8UI),z===r.UNSIGNED_SHORT&&($=r.RGBA16UI),z===r.UNSIGNED_INT&&($=r.RGBA32UI),z===r.BYTE&&($=r.RGBA8I),z===r.SHORT&&($=r.RGBA16I),z===r.INT&&($=r.RGBA32I)),T===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),T===r.RGBA){const At=Q?mo:ee.getTransfer(Z);z===r.FLOAT&&($=r.RGBA32F),z===r.HALF_FLOAT&&($=r.RGBA16F),z===r.UNSIGNED_BYTE&&($=At===ae?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(R,T){let z;return R?T===null||T===Ji||T===Ps?z=r.DEPTH24_STENCIL8:T===jn?z=r.DEPTH32F_STENCIL8:T===hr&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ji||T===Ps?z=r.DEPTH_COMPONENT24:T===jn?z=r.DEPTH_COMPONENT32F:T===hr&&(z=r.DEPTH_COMPONENT16),z}function b(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Pn&&R.minFilter!==On?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function C(R){const T=R.target;T.removeEventListener("dispose",C),A(T),T.isVideoTexture&&h.delete(T)}function w(R){const T=R.target;T.removeEventListener("dispose",w),y(T)}function A(R){const T=n.get(R);if(T.__webglInit===void 0)return;const z=R.source,Z=d.get(z);if(Z){const Q=Z[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys(Z).length===0&&d.delete(z)}n.remove(R)}function S(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const z=R.source,Z=d.get(z);delete Z[T.__cacheKey],o.memory.textures--}function y(R){const T=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let Q=0;Q<T.__webglFramebuffer[Z].length;Q++)r.deleteFramebuffer(T.__webglFramebuffer[Z][Q]);else r.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)r.deleteFramebuffer(T.__webglFramebuffer[Z]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const z=R.textures;for(let Z=0,Q=z.length;Z<Q;Z++){const $=n.get(z[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(R)}let L=0;function U(){L=0}function D(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function O(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function k(R,T){const z=n.get(R);if(R.isVideoTexture&&ot(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,R,T);return}}e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+T)}function G(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Y(z,R,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+T)}function q(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Y(z,R,T);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+T)}function V(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){et(z,R,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+T)}const rt={[Un]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[za]:r.MIRRORED_REPEAT},lt={[Pn]:r.NEAREST,[df]:r.NEAREST_MIPMAP_NEAREST,[Pr]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Bo]:r.LINEAR_MIPMAP_NEAREST,[Hi]:r.LINEAR_MIPMAP_LINEAR},mt={[gf]:r.NEVER,[Sf]:r.ALWAYS,[_f]:r.LESS,[cu]:r.LEQUAL,[vf]:r.EQUAL,[Mf]:r.GEQUAL,[xf]:r.GREATER,[yf]:r.NOTEQUAL};function Pt(R,T){if(T.type===jn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===On||T.magFilter===Bo||T.magFilter===Pr||T.magFilter===Hi||T.minFilter===On||T.minFilter===Bo||T.minFilter===Pr||T.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,rt[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,rt[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,rt[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,lt[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,lt[T.minFilter]),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,mt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pn||T.minFilter!==Pr&&T.minFilter!==Hi||T.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Wt(R,T){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",C));const Z=T.source;let Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));const $=O(T);if($!==R.__cacheKey){Q[$]===void 0&&(Q[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[$].usedTimes++;const At=Q[R.__cacheKey];At!==void 0&&(Q[R.__cacheKey].usedTimes--,At.usedTimes===0&&S(T)),R.__cacheKey=$,R.__webglTexture=Q[$].texture}return z}function Y(R,T,z){let Z=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=r.TEXTURE_3D);const Q=Wt(R,T),$=T.source;e.bindTexture(Z,R.__webglTexture,r.TEXTURE0+z);const At=n.get($);if($.version!==At.__version||Q===!0){e.activeTexture(r.TEXTURE0+z);const ht=ee.getPrimaries(ee.workingColorSpace),yt=T.colorSpace===di?null:ee.getPrimaries(T.colorSpace),qt=T.colorSpace===di||ht===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let it=g(T.image,!1,i.maxTextureSize);it=It(T,it);const Mt=s.convert(T.format,T.colorSpace),Ut=s.convert(T.type);let Ot=x(T.internalFormat,Mt,Ut,T.colorSpace,T.isVideoTexture);Pt(Z,T);let St;const Yt=T.mipmaps,zt=T.isVideoTexture!==!0,oe=At.__version===void 0||Q===!0,N=$.dataReady,ut=b(T,it);if(T.isDepthTexture)Ot=v(T.format===Ls,T.type),oe&&(zt?e.texStorage2D(r.TEXTURE_2D,1,Ot,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Ot,it.width,it.height,0,Mt,Ut,null));else if(T.isDataTexture)if(Yt.length>0){zt&&oe&&e.texStorage2D(r.TEXTURE_2D,ut,Ot,Yt[0].width,Yt[0].height);for(let X=0,J=Yt.length;X<J;X++)St=Yt[X],zt?N&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,St.width,St.height,Mt,Ut,St.data):e.texImage2D(r.TEXTURE_2D,X,Ot,St.width,St.height,0,Mt,Ut,St.data);T.generateMipmaps=!1}else zt?(oe&&e.texStorage2D(r.TEXTURE_2D,ut,Ot,it.width,it.height),N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,Mt,Ut,it.data)):e.texImage2D(r.TEXTURE_2D,0,Ot,it.width,it.height,0,Mt,Ut,it.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){zt&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Ot,Yt[0].width,Yt[0].height,it.depth);for(let X=0,J=Yt.length;X<J;X++)if(St=Yt[X],T.format!==Rn)if(Mt!==null)if(zt){if(N)if(T.layerUpdates.size>0){const dt=rh(St.width,St.height,T.format,T.type);for(const ft of T.layerUpdates){const Ft=St.data.subarray(ft*dt/St.data.BYTES_PER_ELEMENT,(ft+1)*dt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,ft,St.width,St.height,1,Mt,Ft)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,it.depth,Mt,St.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Ot,St.width,St.height,it.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,it.depth,Mt,Ut,St.data):e.texImage3D(r.TEXTURE_2D_ARRAY,X,Ot,St.width,St.height,it.depth,0,Mt,Ut,St.data)}else{zt&&oe&&e.texStorage2D(r.TEXTURE_2D,ut,Ot,Yt[0].width,Yt[0].height);for(let X=0,J=Yt.length;X<J;X++)St=Yt[X],T.format!==Rn?Mt!==null?zt?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(r.TEXTURE_2D,X,Ot,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?N&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,St.width,St.height,Mt,Ut,St.data):e.texImage2D(r.TEXTURE_2D,X,Ot,St.width,St.height,0,Mt,Ut,St.data)}else if(T.isDataArrayTexture)if(zt){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Ot,it.width,it.height,it.depth),N)if(T.layerUpdates.size>0){const X=rh(it.width,it.height,T.format,T.type);for(const J of T.layerUpdates){const dt=it.data.subarray(J*X/it.data.BYTES_PER_ELEMENT,(J+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,Mt,Ut,dt)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Mt,Ut,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,it.width,it.height,it.depth,0,Mt,Ut,it.data);else if(T.isData3DTexture)zt?(oe&&e.texStorage3D(r.TEXTURE_3D,ut,Ot,it.width,it.height,it.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Mt,Ut,it.data)):e.texImage3D(r.TEXTURE_3D,0,Ot,it.width,it.height,it.depth,0,Mt,Ut,it.data);else if(T.isFramebufferTexture){if(oe)if(zt)e.texStorage2D(r.TEXTURE_2D,ut,Ot,it.width,it.height);else{let X=it.width,J=it.height;for(let dt=0;dt<ut;dt++)e.texImage2D(r.TEXTURE_2D,dt,Ot,X,J,0,Mt,Ut,null),X>>=1,J>>=1}}else if(Yt.length>0){if(zt&&oe){const X=gt(Yt[0]);e.texStorage2D(r.TEXTURE_2D,ut,Ot,X.width,X.height)}for(let X=0,J=Yt.length;X<J;X++)St=Yt[X],zt?N&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,Mt,Ut,St):e.texImage2D(r.TEXTURE_2D,X,Ot,Mt,Ut,St);T.generateMipmaps=!1}else if(zt){if(oe){const X=gt(it);e.texStorage2D(r.TEXTURE_2D,ut,Ot,X.width,X.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt,Ut,it)}else e.texImage2D(r.TEXTURE_2D,0,Ot,Mt,Ut,it);m(T)&&p(Z),At.__version=$.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function et(R,T,z){if(T.image.length!==6)return;const Z=Wt(R,T),Q=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);const $=n.get(Q);if(Q.version!==$.__version||Z===!0){e.activeTexture(r.TEXTURE0+z);const At=ee.getPrimaries(ee.workingColorSpace),ht=T.colorSpace===di?null:ee.getPrimaries(T.colorSpace),yt=T.colorSpace===di||At===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const qt=T.isCompressedTexture||T.image[0].isCompressedTexture,it=T.image[0]&&T.image[0].isDataTexture,Mt=[];for(let J=0;J<6;J++)!qt&&!it?Mt[J]=g(T.image[J],!0,i.maxCubemapSize):Mt[J]=it?T.image[J].image:T.image[J],Mt[J]=It(T,Mt[J]);const Ut=Mt[0],Ot=s.convert(T.format,T.colorSpace),St=s.convert(T.type),Yt=x(T.internalFormat,Ot,St,T.colorSpace),zt=T.isVideoTexture!==!0,oe=$.__version===void 0||Z===!0,N=Q.dataReady;let ut=b(T,Ut);Pt(r.TEXTURE_CUBE_MAP,T);let X;if(qt){zt&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Yt,Ut.width,Ut.height);for(let J=0;J<6;J++){X=Mt[J].mipmaps;for(let dt=0;dt<X.length;dt++){const ft=X[dt];T.format!==Rn?Ot!==null?zt?N&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,ft.width,ft.height,Ot,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,ft.width,ft.height,Ot,St,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Yt,ft.width,ft.height,0,Ot,St,ft.data)}}}else{if(X=T.mipmaps,zt&&oe){X.length>0&&ut++;const J=gt(Mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Yt,J.width,J.height)}for(let J=0;J<6;J++)if(it){zt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Mt[J].width,Mt[J].height,Ot,St,Mt[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,Mt[J].width,Mt[J].height,0,Ot,St,Mt[J].data);for(let dt=0;dt<X.length;dt++){const Ft=X[dt].image[J].image;zt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Ft.width,Ft.height,Ot,St,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Yt,Ft.width,Ft.height,0,Ot,St,Ft.data)}}else{zt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ot,St,Mt[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,Ot,St,Mt[J]);for(let dt=0;dt<X.length;dt++){const ft=X[dt];zt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Ot,St,ft.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Yt,Ot,St,ft.image[J])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),$.__version=Q.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function xt(R,T,z,Z,Q,$){const At=s.convert(z.format,z.colorSpace),ht=s.convert(z.type),yt=x(z.internalFormat,At,ht,z.colorSpace),qt=n.get(T),it=n.get(z);if(it.__renderTarget=T,!qt.__hasExternalTextures){const Mt=Math.max(1,T.width>>$),Ut=Math.max(1,T.height>>$);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,yt,Mt,Ut,T.depth,0,At,ht,null):e.texImage2D(Q,$,yt,Mt,Ut,0,At,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),vt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,Q,it.__webglTexture,0,nt(T)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,Q,it.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(R,T,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer){const Z=T.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,$=v(T.stencilBuffer,Q),At=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=nt(T);vt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,$,T.width,T.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,R)}else{const Z=T.textures;for(let Q=0;Q<Z.length;Q++){const $=Z[Q],At=s.convert($.format,$.colorSpace),ht=s.convert($.type),yt=x($.internalFormat,At,ht,$.colorSpace),qt=nt(T);z&&vt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,yt,T.width,T.height):vt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,yt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,yt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const Q=Z.__webglTexture,$=nt(T);if(T.depthTexture.format===Ss)vt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Ls)vt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Xt(R){const T=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=Z}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Rt(T.__webglFramebuffer,R)}else if(z){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=r.createRenderbuffer(),at(T.__webglDepthbuffer[Z],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),at(T.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(R,T,z){const Z=n.get(R);T!==void 0&&xt(Z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Xt(R)}function $t(R){const T=R.texture,z=n.get(R),Z=n.get(T);R.addEventListener("dispose",w);const Q=R.textures,$=R.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=T.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[ht]=[];for(let yt=0;yt<T.mipmaps.length;yt++)z.__webglFramebuffer[ht][yt]=r.createFramebuffer()}else z.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let ht=0;ht<T.mipmaps.length;ht++)z.__webglFramebuffer[ht]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(At)for(let ht=0,yt=Q.length;ht<yt;ht++){const qt=n.get(Q[ht]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&vt(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){const yt=Q[ht];z.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ht]);const qt=s.convert(yt.format,yt.colorSpace),it=s.convert(yt.type),Mt=x(yt.internalFormat,qt,it,yt.colorSpace,R.isXRRenderTarget===!0),Ut=nt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,Mt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,z.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),at(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Pt(r.TEXTURE_CUBE_MAP,T);for(let ht=0;ht<6;ht++)if(T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)xt(z.__webglFramebuffer[ht][yt],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt);else xt(z.__webglFramebuffer[ht],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(T)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ht=0,yt=Q.length;ht<yt;ht++){const qt=Q[ht],it=n.get(qt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),Pt(r.TEXTURE_2D,qt),xt(z.__webglFramebuffer,R,qt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),m(qt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,Z.__webglTexture),Pt(ht,T),T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)xt(z.__webglFramebuffer[yt],R,T,r.COLOR_ATTACHMENT0,ht,yt);else xt(z.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,ht,0);m(T)&&p(ht),e.unbindTexture()}R.depthBuffer&&Xt(R)}function tt(R){const T=R.textures;for(let z=0,Z=T.length;z<Z;z++){const Q=T[z];if(m(Q)){const $=M(R),At=n.get(Q).__webglTexture;e.bindTexture($,At),p($),e.unbindTexture()}}}const j=[],I=[];function wt(R){if(R.samples>0){if(vt(R)===!1){const T=R.textures,z=R.width,Z=R.height;let Q=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=n.get(R),ht=T.length>1;if(ht)for(let yt=0;yt<T.length;yt++)e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let yt=0;yt<T.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const qt=n.get(T[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qt,0)}r.blitFramebuffer(0,0,z,Z,0,0,z,Z,Q,r.NEAREST),l===!0&&(j.length=0,I.length=0,j.push(r.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(j.push($),I.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let yt=0;yt<T.length;yt++){e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const qt=n.get(T[yt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,qt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function nt(R){return Math.min(i.maxSamples,R.samples)}function vt(R){const T=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ot(R){const T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function It(R,T){const z=R.colorSpace,Z=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Is&&z!==di&&(ee.getTransfer(z)===ae?(Z!==Rn||Q!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),T}function gt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=Tt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=vt}function gv(r,t){function e(n,i=di){let s;const o=ee.getTransfer(i);if(n===ni)return r.UNSIGNED_BYTE;if(n===Nl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return r.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===jh)return r.BYTE;if(n===Qh)return r.SHORT;if(n===hr)return r.UNSIGNED_SHORT;if(n===Ul)return r.INT;if(n===Ji)return r.UNSIGNED_INT;if(n===jn)return r.FLOAT;if(n===wr)return r.HALF_FLOAT;if(n===eu)return r.ALPHA;if(n===nu)return r.RGB;if(n===Rn)return r.RGBA;if(n===iu)return r.LUMINANCE;if(n===su)return r.LUMINANCE_ALPHA;if(n===Ss)return r.DEPTH_COMPONENT;if(n===Ls)return r.DEPTH_STENCIL;if(n===ru)return r.RED;if(n===Fl)return r.RED_INTEGER;if(n===ou)return r.RG;if(n===Bl)return r.RG_INTEGER;if(n===zl)return r.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===lo)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===ka||n===Va||n===Ha)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ga)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===Xa||n===qa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wa||n===Xa)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ya)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===al||n===ll)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===co)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===au||n===cl||n===hl||n===ul)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===co)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const _v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vv=`
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

}`;class xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new qe,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ln({vertexShader:_v,fragmentShader:vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new K(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yv extends Gs{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=new xv,m=e.getContextAttributes();let p=null,M=null;const x=[],v=[],b=new ct;let C=null;const w=new hn;w.viewport=new le;const A=new hn;A.viewport=new le;const S=[w,A],y=new Gp;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=x[Y];return et===void 0&&(et=new oa,x[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=x[Y];return et===void 0&&(et=new oa,x[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=x[Y];return et===void 0&&(et=new oa,x[Y]=et),et.getHandSpace()};function D(Y){const et=v.indexOf(Y.inputSource);if(et===-1)return;const xt=x[et];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||o),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",k);for(let Y=0;Y<x.length;Y++){const et=v[Y];et!==null&&(v[Y]=null,x[Y].disconnect(et))}L=null,U=null,g.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",O),i.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,at=null,Rt=null;m.depth&&(Rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=m.stencil?Ls:Ss,at=m.stencil?Ps:Ji);const Xt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Xt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ki(d.textureWidth,d.textureHeight,{format:Rn,type:ni,depthTexture:new vu(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ki(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(Y){for(let et=0;et<Y.removed.length;et++){const xt=Y.removed[et],at=v.indexOf(xt);at>=0&&(v[at]=null,x[at].disconnect(xt))}for(let et=0;et<Y.added.length;et++){const xt=Y.added[et];let at=v.indexOf(xt);if(at===-1){for(let Xt=0;Xt<x.length;Xt++)if(Xt>=v.length){v.push(xt),at=Xt;break}else if(v[Xt]===null){v[Xt]=xt,at=Xt;break}if(at===-1)break}const Rt=x[at];Rt&&Rt.connect(xt)}}const G=new P,q=new P;function V(Y,et,xt){G.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(xt.matrixWorld);const at=G.distanceTo(q),Rt=et.projectionMatrix.elements,Xt=xt.projectionMatrix.elements,Tt=Rt[14]/(Rt[10]-1),$t=Rt[14]/(Rt[10]+1),tt=(Rt[9]+1)/Rt[5],j=(Rt[9]-1)/Rt[5],I=(Rt[8]-1)/Rt[0],wt=(Xt[8]+1)/Xt[0],nt=Tt*I,vt=Tt*wt,ot=at/(-I+wt),It=ot*-I;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const gt=Tt+ot,R=$t+ot,T=nt-It,z=vt+(at-It),Z=tt*$t/R*gt,Q=j*$t/R*gt;Y.projectionMatrix.makePerspective(T,z,Z,Q,gt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let et=Y.near,xt=Y.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),y.near=A.near=w.near=et,y.far=A.far=w.far=xt,(L!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,U=y.far),w.layers.mask=Y.layers.mask|2,A.layers.mask=Y.layers.mask|4,y.layers.mask=w.layers.mask|A.layers.mask;const at=Y.parent,Rt=y.cameras;rt(y,at);for(let Xt=0;Xt<Rt.length;Xt++)rt(Rt[Xt],at);Rt.length===2?V(y,w,A):y.projectionMatrix.copy(w.projectionMatrix),lt(Y,y,at)};function lt(Y,et,xt){xt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=dl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let mt=null;function Pt(Y,et){if(h=et.getViewerPose(c||o),_=et,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let at=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let Tt=0;Tt<xt.length;Tt++){const $t=xt[Tt];let tt=null;if(f!==null)tt=f.getViewport($t);else{const I=u.getViewSubImage(d,$t);tt=I.viewport,Tt===0&&(t.setRenderTargetTextures(M,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(M))}let j=S[Tt];j===void 0&&(j=new hn,j.layers.enable(Tt),j.viewport=new le,S[Tt]=j),j.matrix.fromArray($t.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray($t.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(tt.x,tt.y,tt.width,tt.height),Tt===0&&(y.matrix.copy(j.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(j)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Tt=u.getDepthInformation(xt[0]);Tt&&Tt.isValid&&Tt.texture&&g.init(t,Tt,i.renderState)}}for(let xt=0;xt<x.length;xt++){const at=v[xt],Rt=x[xt];at!==null&&Rt!==void 0&&Rt.update(at,et,c||o)}mt&&mt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const Wt=new Ru;Wt.setAnimationLoop(Pt),this.setAnimationLoop=function(Y){mt=Y},this.dispose=function(){}}}const Di=new zn,Mv=new ce;function Sv(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,Di.copy(v),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(Mv.makeRotationFromEuler(Di)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wv(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=i[M.id];v===void 0&&(_(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(M,b);const C=t.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function h(M){const x=u();M.__bindingPointIndex=x;const v=r.createBuffer(),b=M.__size,C=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,b,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],v=M.uniforms,b=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let C=0,w=v.length;C<w;C++){const A=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,y=A.length;S<y;S++){const L=A[S];if(f(L,C,S,b)===!0){const U=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let k=0;k<D.length;k++){const G=D[k],q=g(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,U+O,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,O),O+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,x,v,b){const C=M.value,w=x+"_"+v;if(b[w]===void 0)return typeof C=="number"||typeof C=="boolean"?b[w]=C:b[w]=C.clone(),!0;{const A=b[w];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return b[w]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function _(M){const x=M.uniforms;let v=0;const b=16;for(let w=0,A=x.length;w<A;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,L=S.length;y<L;y++){const U=S[y],D=Array.isArray(U.value)?U.value:[U.value];for(let O=0,k=D.length;O<k;O++){const G=D[O],q=g(G),V=v%b,rt=V%q.boundary,lt=V+rt;v+=rt,lt!==0&&b-lt<q.storage&&(v+=b-lt),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=q.storage}}}const C=v%b;return C>0&&(v+=b-C),M.__size=v,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Tv{constructor(t={}){const{canvas:e=Tf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=_i,this.toneMappingExposure=1;const v=this;let b=!1,C=0,w=0,A=null,S=-1,y=null;const L=new le,U=new le;let D=null;const O=new Lt(0);let k=0,G=e.width,q=e.height,V=1,rt=null,lt=null;const mt=new le(0,0,G,q),Pt=new le(0,0,G,q);let Wt=!1;const Y=new Hl;let et=!1,xt=!1;this.transmissionResolutionScale=1;const at=new ce,Rt=new ce,Xt=new P,Tt=new le,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function j(){return A===null?V:1}let I=n;function wt(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dl}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){const F="webgl2";if(I=wt(F,E),I===null)throw wt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let nt,vt,ot,It,gt,R,T,z,Z,Q,$,At,ht,yt,qt,it,Mt,Ut,Ot,St,Yt,zt,oe,N;function ut(){nt=new Ug(I),nt.init(),zt=new gv(I,nt),vt=new Ag(I,nt,t,zt),ot=new pv(I,nt),vt.reverseDepthBuffer&&d&&ot.buffers.depth.setReversed(!0),It=new Fg(I),gt=new ev,R=new mv(I,nt,ot,gt,vt,zt,It),T=new Rg(v),z=new Dg(v),Z=new Hp(I),oe=new Eg(I,Z),Q=new Ng(I,Z,It,oe),$=new zg(I,Q,Z,It),Ot=new Bg(I,vt,R),it=new Cg(gt),At=new tv(v,T,z,nt,vt,oe,it),ht=new Sv(v,gt),yt=new iv,qt=new cv(nt),Ut=new Tg(v,T,z,ot,$,f,l),Mt=new dv(v,$,vt),N=new wv(I,It,vt,ot),St=new bg(I,nt,It),Yt=new Og(I,nt,It),It.programs=At.programs,v.capabilities=vt,v.extensions=nt,v.properties=gt,v.renderLists=yt,v.shadowMap=Mt,v.state=ot,v.info=It}ut();const X=new yv(v,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,q,!1))},this.getSize=function(E){return E.set(G,q)},this.setSize=function(E,F,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,q=F,e.width=Math.floor(E*V),e.height=Math.floor(F*V),H===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(G*V,q*V).floor()},this.setDrawingBufferSize=function(E,F,H){G=E,q=F,V=H,e.width=Math.floor(E*H),e.height=Math.floor(F*H),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,F,H,W){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,F,H,W),ot.viewport(L.copy(mt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Pt)},this.setScissor=function(E,F,H,W){E.isVector4?Pt.set(E.x,E.y,E.z,E.w):Pt.set(E,F,H,W),ot.scissor(U.copy(Pt).multiplyScalar(V).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(E){ot.setScissorTest(Wt=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,H=!0){let W=0;if(E){let B=!1;if(A!==null){const st=A.texture.format;B=st===zl||st===Bl||st===Fl}if(B){const st=A.texture.type,_t=st===ni||st===Ji||st===hr||st===Ps||st===Nl||st===Ol,Et=Ut.getClearColor(),bt=Ut.getClearAlpha(),Bt=Et.r,Gt=Et.g,Dt=Et.b;_t?(_[0]=Bt,_[1]=Gt,_[2]=Dt,_[3]=bt,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=Bt,g[1]=Gt,g[2]=Dt,g[3]=bt,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT),H&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Ut.dispose(),yt.dispose(),qt.dispose(),gt.dispose(),T.dispose(),z.dispose(),$.dispose(),oe.dispose(),N.dispose(),At.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ar),X.removeEventListener("sessionend",Xs),Vn.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=It.autoReset,F=Mt.enabled,H=Mt.autoUpdate,W=Mt.needsUpdate,B=Mt.type;ut(),It.autoReset=E,Mt.enabled=F,Mt.autoUpdate=H,Mt.needsUpdate=W,Mt.type=B}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ft(E){const F=E.target;F.removeEventListener("dispose",Ft),ge(F)}function ge(E){Pe(E),gt.remove(E)}function Pe(E){const F=gt.get(E).programs;F!==void 0&&(F.forEach(function(H){At.releaseProgram(H)}),E.isShaderMaterial&&At.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,H,W,B,st){F===null&&(F=$t);const _t=B.isMesh&&B.matrixWorld.determinant()<0,Et=Pd(E,F,H,W,B);ot.setMaterial(W,_t);let bt=H.index,Bt=1;if(W.wireframe===!0){if(bt=Q.getWireframeAttribute(H),bt===void 0)return;Bt=2}const Gt=H.drawRange,Dt=H.attributes.position;let Qt=Gt.start*Bt,ie=(Gt.start+Gt.count)*Bt;st!==null&&(Qt=Math.max(Qt,st.start*Bt),ie=Math.min(ie,(st.start+st.count)*Bt)),bt!==null?(Qt=Math.max(Qt,0),ie=Math.min(ie,bt.count)):Dt!=null&&(Qt=Math.max(Qt,0),ie=Math.min(ie,Dt.count));const Ae=ie-Qt;if(Ae<0||Ae===1/0)return;oe.setup(B,W,Et,H,bt);let we,te=St;if(bt!==null&&(we=Z.get(bt),te=Yt,te.setIndex(we)),B.isMesh)W.wireframe===!0?(ot.setLineWidth(W.wireframeLinewidth*j()),te.setMode(I.LINES)):te.setMode(I.TRIANGLES);else if(B.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),ot.setLineWidth(Nt*j()),B.isLineSegments?te.setMode(I.LINES):B.isLineLoop?te.setMode(I.LINE_LOOP):te.setMode(I.LINE_STRIP)}else B.isPoints?te.setMode(I.POINTS):B.isSprite&&te.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))te.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Nt=B._multiDrawStarts,Fe=B._multiDrawCounts,se=B._multiDrawCount,Tn=bt?Z.get(bt).bytesPerElement:1,es=gt.get(W).currentProgram.getUniforms();for(let rn=0;rn<se;rn++)es.setValue(I,"_gl_DrawID",rn),te.render(Nt[rn]/Tn,Fe[rn])}else if(B.isInstancedMesh)te.renderInstances(Qt,Ae,B.count);else if(H.isInstancedBufferGeometry){const Nt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Fe=Math.min(H.instanceCount,Nt);te.renderInstances(Qt,Ae,Fe)}else te.render(Qt,Ae)};function ne(E,F,H){E.transparent===!0&&E.side===ke&&E.forceSinglePass===!1?(E.side=Le,E.needsUpdate=!0,Rr(E,F,H),E.side=Mi,E.needsUpdate=!0,Rr(E,F,H),E.side=ke):Rr(E,F,H)}this.compile=function(E,F,H=null){H===null&&(H=E),p=qt.get(H),p.init(F),x.push(p),H.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const W=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const st=B.material;if(st)if(Array.isArray(st))for(let _t=0;_t<st.length;_t++){const Et=st[_t];ne(Et,H,B),W.add(Et)}else ne(st,H,B),W.add(st)}),p=x.pop(),W},this.compileAsync=function(E,F,H=null){const W=this.compile(E,F,H);return new Promise(B=>{function st(){if(W.forEach(function(_t){gt.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){B(E);return}setTimeout(st,10)}nt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let nn=null;function wn(E){nn&&nn(E)}function Ar(){Vn.stop()}function Xs(){Vn.start()}const Vn=new Ru;Vn.setAnimationLoop(wn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(E){nn=E,X.setAnimationLoop(E),E===null?Vn.stop():Vn.start()},X.addEventListener("sessionstart",Ar),X.addEventListener("sessionend",Xs),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,A),p=qt.get(E,x.length),p.init(F),x.push(p),Rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Rt),xt=this.localClippingEnabled,et=it.init(this.clippingPlanes,xt),m=yt.get(E,M.length),m.init(),M.push(m),X.enabled===!0&&X.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&qs(st,F,-1/0,v.sortObjects)}qs(E,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,lt),tt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,tt&&Ut.addToRenderList(m,E),this.info.render.frame++,et===!0&&it.beginShadows();const H=p.state.shadowsArray;Mt.render(H,E,F),et===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const st=F.cameras;if(B.length>0)for(let _t=0,Et=st.length;_t<Et;_t++){const bt=st[_t];ri(W,B,E,bt)}tt&&Ut.render(E);for(let _t=0,Et=st.length;_t<Et;_t++){const bt=st[_t];sn(m,E,bt,bt.viewport)}}else B.length>0&&ri(W,B,E,F),tt&&Ut.render(E),sn(m,E,F);A!==null&&w===0&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,F),oe.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],et===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function qs(E,F,H,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){W&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Rt);const _t=$.update(E),Et=E.material;Et.visible&&m.push(E,_t,Et,H,Tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const _t=$.update(E),Et=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Tt.copy(_t.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(Rt)),Array.isArray(Et)){const bt=_t.groups;for(let Bt=0,Gt=bt.length;Bt<Gt;Bt++){const Dt=bt[Bt],Qt=Et[Dt.materialIndex];Qt&&Qt.visible&&m.push(E,_t,Qt,H,Tt.z,Dt)}}else Et.visible&&m.push(E,_t,Et,H,Tt.z,null)}}const st=E.children;for(let _t=0,Et=st.length;_t<Et;_t++)qs(st[_t],F,H,W)}function sn(E,F,H,W){const B=E.opaque,st=E.transmissive,_t=E.transparent;p.setupLightsView(H),et===!0&&it.setGlobalState(v.clippingPlanes,H),W&&ot.viewport(L.copy(W)),B.length>0&&Cr(B,F,H),st.length>0&&Cr(st,F,H),_t.length>0&&Cr(_t,F,H),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function ri(E,F,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ki(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?wr:ni,minFilter:Hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const st=p.state.transmissionRenderTarget[W.id],_t=W.viewport||L;st.setSize(_t.z*v.transmissionResolutionScale,_t.w*v.transmissionResolutionScale);const Et=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),tt&&Ut.render(H);const bt=v.toneMapping;v.toneMapping=_i;const Bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),et===!0&&it.setGlobalState(v.clippingPlanes,W),Cr(E,H,W),R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Dt=0,Qt=F.length;Dt<Qt;Dt++){const ie=F[Dt],Ae=ie.object,we=ie.geometry,te=ie.material,Nt=ie.group;if(te.side===ke&&Ae.layers.test(W.layers)){const Fe=te.side;te.side=Le,te.needsUpdate=!0,_c(Ae,H,W,we,te,Nt),te.side=Fe,te.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st))}v.setRenderTarget(Et),v.setClearColor(O,k),Bt!==void 0&&(W.viewport=Bt),v.toneMapping=bt}function Cr(E,F,H){const W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,st=E.length;B<st;B++){const _t=E[B],Et=_t.object,bt=_t.geometry,Bt=W===null?_t.material:W,Gt=_t.group;Et.layers.test(H.layers)&&_c(Et,F,H,bt,Bt,Gt)}}function _c(E,F,H,W,B,st){E.onBeforeRender(v,F,H,W,B,st),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,F,H,W,E,st),B.transparent===!0&&B.side===ke&&B.forceSinglePass===!1?(B.side=Le,B.needsUpdate=!0,v.renderBufferDirect(H,F,W,B,E,st),B.side=Mi,B.needsUpdate=!0,v.renderBufferDirect(H,F,W,B,E,st),B.side=ke):v.renderBufferDirect(H,F,W,B,E,st),E.onAfterRender(v,F,H,W,B,st)}function Rr(E,F,H){F.isScene!==!0&&(F=$t);const W=gt.get(E),B=p.state.lights,st=p.state.shadowsArray,_t=B.state.version,Et=At.getParameters(E,B.state,st,F,H),bt=At.getProgramCacheKey(Et);let Bt=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?z:T).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",Ft),Bt=new Map,W.programs=Bt);let Gt=Bt.get(bt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===_t)return xc(E,Et),Gt}else Et.uniforms=At.getUniforms(E),E.onBeforeCompile(Et,v),Gt=At.acquireProgram(Et,bt),Bt.set(bt,Gt),W.uniforms=Et.uniforms;const Dt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=it.uniform),xc(E,Et),W.needsLights=Id(E),W.lightsStateVersion=_t,W.needsLights&&(Dt.ambientLightColor.value=B.state.ambient,Dt.lightProbe.value=B.state.probe,Dt.directionalLights.value=B.state.directional,Dt.directionalLightShadows.value=B.state.directionalShadow,Dt.spotLights.value=B.state.spot,Dt.spotLightShadows.value=B.state.spotShadow,Dt.rectAreaLights.value=B.state.rectArea,Dt.ltc_1.value=B.state.rectAreaLTC1,Dt.ltc_2.value=B.state.rectAreaLTC2,Dt.pointLights.value=B.state.point,Dt.pointLightShadows.value=B.state.pointShadow,Dt.hemisphereLights.value=B.state.hemi,Dt.directionalShadowMap.value=B.state.directionalShadowMap,Dt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Dt.spotShadowMap.value=B.state.spotShadowMap,Dt.spotLightMatrix.value=B.state.spotLightMatrix,Dt.spotLightMap.value=B.state.spotLightMap,Dt.pointShadowMap.value=B.state.pointShadowMap,Dt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function vc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=ho.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function xc(E,F){const H=gt.get(E);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Pd(E,F,H,W,B){F.isScene!==!0&&(F=$t),R.resetTextureUnits();const st=F.fog,_t=W.isMeshStandardMaterial?F.environment:null,Et=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Is,bt=(W.isMeshStandardMaterial?z:T).get(W.envMap||_t),Bt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Dt=!!H.morphAttributes.position,Qt=!!H.morphAttributes.normal,ie=!!H.morphAttributes.color;let Ae=_i;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const we=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,te=we!==void 0?we.length:0,Nt=gt.get(W),Fe=p.state.lights;if(et===!0&&(xt===!0||E!==y)){const We=E===y&&W.id===S;it.setState(W,E,We)}let se=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Fe.state.version||Nt.outputColorSpace!==Et||B.isBatchedMesh&&Nt.batching===!1||!B.isBatchedMesh&&Nt.batching===!0||B.isBatchedMesh&&Nt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Nt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Nt.instancing===!1||!B.isInstancedMesh&&Nt.instancing===!0||B.isSkinnedMesh&&Nt.skinning===!1||!B.isSkinnedMesh&&Nt.skinning===!0||B.isInstancedMesh&&Nt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Nt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Nt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Nt.instancingMorph===!1&&B.morphTexture!==null||Nt.envMap!==bt||W.fog===!0&&Nt.fog!==st||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==it.numPlanes||Nt.numIntersection!==it.numIntersection)||Nt.vertexAlphas!==Bt||Nt.vertexTangents!==Gt||Nt.morphTargets!==Dt||Nt.morphNormals!==Qt||Nt.morphColors!==ie||Nt.toneMapping!==Ae||Nt.morphTargetsCount!==te)&&(se=!0):(se=!0,Nt.__version=W.version);let Tn=Nt.currentProgram;se===!0&&(Tn=Rr(W,F,B));let es=!1,rn=!1,Ys=!1;const _e=Tn.getUniforms(),_n=Nt.uniforms;if(ot.useProgram(Tn.program)&&(es=!0,rn=!0,Ys=!0),W.id!==S&&(S=W.id,rn=!0),es||y!==E){ot.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),bf(at),Af(at),_e.setValue(I,"projectionMatrix",at)):_e.setValue(I,"projectionMatrix",E.projectionMatrix),_e.setValue(I,"viewMatrix",E.matrixWorldInverse);const Ye=_e.map.cameraPosition;Ye!==void 0&&Ye.setValue(I,Xt.setFromMatrixPosition(E.matrixWorld)),vt.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_e.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,rn=!0,Ys=!0)}if(B.isSkinnedMesh){_e.setOptional(I,B,"bindMatrix"),_e.setOptional(I,B,"bindMatrixInverse");const We=B.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),_e.setValue(I,"boneTexture",We.boneTexture,R))}B.isBatchedMesh&&(_e.setOptional(I,B,"batchingTexture"),_e.setValue(I,"batchingTexture",B._matricesTexture,R),_e.setOptional(I,B,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",B._indirectTexture,R),_e.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",B._colorsTexture,R));const vn=H.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Ot.update(B,H,Tn),(rn||Nt.receiveShadow!==B.receiveShadow)&&(Nt.receiveShadow=B.receiveShadow,_e.setValue(I,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(_n.envMap.value=bt,_n.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),rn&&(_e.setValue(I,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&Ld(_n,Ys),st&&W.fog===!0&&ht.refreshFogUniforms(_n,st),ht.refreshMaterialUniforms(_n,W,V,q,p.state.transmissionRenderTarget[E.id]),ho.upload(I,vc(Nt),_n,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ho.upload(I,vc(Nt),_n,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_e.setValue(I,"center",B.center),_e.setValue(I,"modelViewMatrix",B.modelViewMatrix),_e.setValue(I,"normalMatrix",B.normalMatrix),_e.setValue(I,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const We=W.uniformsGroups;for(let Ye=0,Fo=We.length;Ye<Fo;Ye++){const Ai=We[Ye];N.update(Ai,Tn),N.bind(Ai,Tn)}}return Tn}function Ld(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Id(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,F,H){gt.get(E.texture).__webglTexture=F,gt.get(E.depthTexture).__webglTexture=H;const W=gt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const H=gt.get(E);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const Dd=I.createFramebuffer();this.setRenderTarget=function(E,F=0,H=0){A=E,C=F,w=H;let W=!0,B=null,st=!1,_t=!1;if(E){const bt=gt.get(E);if(bt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(bt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(bt.__hasExternalTextures)R.rebindTextures(E,gt.get(E.texture).__webglTexture,gt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Dt=E.depthTexture;if(bt.__boundDepthTexture!==Dt){if(Dt!==null&&gt.has(Dt)&&(E.width!==Dt.image.width||E.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(_t=!0);const Gt=gt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?B=Gt[F][H]:B=Gt[F],st=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?B=gt.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?B=Gt[H]:B=Gt,L.copy(E.viewport),U.copy(E.scissor),D=E.scissorTest}else L.copy(mt).multiplyScalar(V).floor(),U.copy(Pt).multiplyScalar(V).floor(),D=Wt;if(H!==0&&(B=Dd),ot.bindFramebuffer(I.FRAMEBUFFER,B)&&W&&ot.drawBuffers(E,B),ot.viewport(L),ot.scissor(U),ot.setScissorTest(D),st){const bt=gt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,H)}else if(_t){const bt=gt.get(E.texture),Bt=F;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,H,Bt)}else if(E!==null&&H!==0){const bt=gt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bt.__webglTexture,H)}S=-1},this.readRenderTargetPixels=function(E,F,H,W,B,st,_t){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){ot.bindFramebuffer(I.FRAMEBUFFER,Et);try{const bt=E.texture,Bt=bt.format,Gt=bt.type;if(!vt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&H>=0&&H<=E.height-B&&I.readPixels(F,H,W,B,zt.convert(Bt),zt.convert(Gt),st)}finally{const bt=A!==null?gt.get(A).__webglFramebuffer:null;ot.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(E,F,H,W,B,st,_t){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){const bt=E.texture,Bt=bt.format,Gt=bt.type;if(!vt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-W&&H>=0&&H<=E.height-B){ot.bindFramebuffer(I.FRAMEBUFFER,Et);const Dt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Dt),I.bufferData(I.PIXEL_PACK_BUFFER,st.byteLength,I.STREAM_READ),I.readPixels(F,H,W,B,zt.convert(Bt),zt.convert(Gt),0);const Qt=A!==null?gt.get(A).__webglFramebuffer:null;ot.bindFramebuffer(I.FRAMEBUFFER,Qt);const ie=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ef(I,ie,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Dt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,st),I.deleteBuffer(Dt),I.deleteSync(ie),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,H=0){E.isTexture!==!0&&(Oi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-H),B=Math.floor(E.image.width*W),st=Math.floor(E.image.height*W),_t=F!==null?F.x:0,Et=F!==null?F.y:0;R.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,_t,Et,B,st),ot.unbindTexture()};const Ud=I.createFramebuffer(),Nd=I.createFramebuffer();this.copyTextureToTexture=function(E,F,H=null,W=null,B=0,st=null){E.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],F=arguments[2],st=arguments[3]||0,H=null),st===null&&(B!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=B,B=0):st=0);let _t,Et,bt,Bt,Gt,Dt,Qt,ie,Ae;const we=E.isCompressedTexture?E.mipmaps[st]:E.image;if(H!==null)_t=H.max.x-H.min.x,Et=H.max.y-H.min.y,bt=H.isBox3?H.max.z-H.min.z:1,Bt=H.min.x,Gt=H.min.y,Dt=H.isBox3?H.min.z:0;else{const vn=Math.pow(2,-B);_t=Math.floor(we.width*vn),Et=Math.floor(we.height*vn),E.isDataArrayTexture?bt=we.depth:E.isData3DTexture?bt=Math.floor(we.depth*vn):bt=1,Bt=0,Gt=0,Dt=0}W!==null?(Qt=W.x,ie=W.y,Ae=W.z):(Qt=0,ie=0,Ae=0);const te=zt.convert(F.format),Nt=zt.convert(F.type);let Fe;F.isData3DTexture?(R.setTexture3D(F,0),Fe=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Fe=I.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Fe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const se=I.getParameter(I.UNPACK_ROW_LENGTH),Tn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),es=I.getParameter(I.UNPACK_SKIP_PIXELS),rn=I.getParameter(I.UNPACK_SKIP_ROWS),Ys=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,we.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,we.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Dt);const _e=E.isDataArrayTexture||E.isData3DTexture,_n=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const vn=gt.get(E),We=gt.get(F),Ye=gt.get(vn.__renderTarget),Fo=gt.get(We.__renderTarget);ot.bindFramebuffer(I.READ_FRAMEBUFFER,Ye.__webglFramebuffer),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fo.__webglFramebuffer);for(let Ai=0;Ai<bt;Ai++)_e&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(E).__webglTexture,B,Dt+Ai),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(F).__webglTexture,st,Ae+Ai)),I.blitFramebuffer(Bt,Gt,_t,Et,Qt,ie,_t,Et,I.DEPTH_BUFFER_BIT,I.NEAREST);ot.bindFramebuffer(I.READ_FRAMEBUFFER,null),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||gt.has(E)){const vn=gt.get(E),We=gt.get(F);ot.bindFramebuffer(I.READ_FRAMEBUFFER,Ud),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,Nd);for(let Ye=0;Ye<bt;Ye++)_e?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vn.__webglTexture,B,Dt+Ye):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vn.__webglTexture,B),_n?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,We.__webglTexture,st,Ae+Ye):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,We.__webglTexture,st),B!==0?I.blitFramebuffer(Bt,Gt,_t,Et,Qt,ie,_t,Et,I.COLOR_BUFFER_BIT,I.NEAREST):_n?I.copyTexSubImage3D(Fe,st,Qt,ie,Ae+Ye,Bt,Gt,_t,Et):I.copyTexSubImage2D(Fe,st,Qt,ie,Bt,Gt,_t,Et);ot.bindFramebuffer(I.READ_FRAMEBUFFER,null),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _n?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Fe,st,Qt,ie,Ae,_t,Et,bt,te,Nt,we.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Fe,st,Qt,ie,Ae,_t,Et,bt,te,we.data):I.texSubImage3D(Fe,st,Qt,ie,Ae,_t,Et,bt,te,Nt,we):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,st,Qt,ie,_t,Et,te,Nt,we.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,st,Qt,ie,we.width,we.height,te,we.data):I.texSubImage2D(I.TEXTURE_2D,st,Qt,ie,_t,Et,te,Nt,we);I.pixelStorei(I.UNPACK_ROW_LENGTH,se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,es),I.pixelStorei(I.UNPACK_SKIP_ROWS,rn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ys),st===0&&F.generateMipmaps&&I.generateMipmap(Fe),ot.unbindTexture()},this.copyTextureToTexture3D=function(E,F,H=null,W=null,B=0){return E.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,E=arguments[2],F=arguments[3],B=arguments[4]||0),Oi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,H,W,B)},this.initRenderTarget=function(E){gt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),ot.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,ot.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const ei={recipientName:"Mi Amor",senderName:"Siempre tuyo",birthdayDate:"Un día especial",intro:{badge:"✦ UNA HISTORIA ESPECIAL ✦",quoteLine1:"Nuestro Universo",quoteLine2:"Un viaje a través de las estrellas creado para ti",dedication:"Esta experiencia fue creada con todo mi amor ❤️",startButton:"INICIAR VIAJE"},memories:[{id:"memory-1",icon:"🌙",title:"Nuestro primer momento",subtitle:"El inicio de algo mágico",date:"Aquel primer día",snoopyDialogue:"¡Woof! 🐾 ¡Aterrizamos en las coordenadas del Capítulo I! Desde aquel primer instante en que sus miradas se cruzaron, supe que empezaba la historia más bonita de todas...",description:"Recuerdo perfectamente el momento en que nuestras miradas se cruzaron por primera vez. No sabía entonces que en ese instante mi mundo cambiaría para siempre y empezaría la historia más bonita de mi vida.",image:"assets/foto1.jpg",color:15967922,emissive:7215924,tag:"Capítulo I"},{id:"memory-2",icon:"✨",title:"Ese día que no voy a olvidar",subtitle:"Grabado en el corazón",date:"Un instante eterno",snoopyDialogue:"¡Aterrizaje perfecto, capitán! ✨ Este planeta guarda una tarde mágica e inolvidable. El tiempo se detuvo y las risas quedaron grabadas para siempre en el cosmos.",description:"Hay días que se quedan grabados para siempre. Aquella tarde en la que el tiempo pareció detenerse, donde las risas no faltaron y entendí que contigo cualquier lugar ordinario se convierte en el lugar más especial.",image:"assets/foto2.jpg",color:16111487,emissive:5915920,tag:"Capítulo II"},{id:"memory-3",icon:"❤️",title:"6 Momentos que Hacen Sonreír mi Corazón",subtitle:"Colección especial de fotos y memorias",date:"Nuestra Galería",snoopyDialogue:"¡Guau! 💖 ¡Detecté una colección de 6 momentos extraordinarios en este planeta! Cada foto guarda un abrazo o una sonrisa. ¡Toca cada una para verla de cerca!",description:"Cada una de estas 6 fotografías guarda una historia, una risa o un instante que hace que mi mundo sea perfecto a tu lado:",isGallery:!0,gallery:[{id:1,title:"1. Risas Inolvidables",description:"Esa risa espontánea y contagiosa que ilumina cualquier día por más gris que parezca.",image:"assets/galeria1.jpg"},{id:2,title:"2. Nuestras Aventuras",description:"Cualquier viaje o salida improvisada donde lo único que importaba era estar juntos.",image:"assets/galeria2.jpg"},{id:3,title:"3. La Magia de tu Mirada",description:"La complicidad y la paz infinita que siento cada vez que me miras.",image:"assets/galeria3.jpg"},{id:4,title:"4. Días Simples, Recuerdos Eternos",description:"Esos momentos cotidianos donde no necesitamos nada más que nuestra compañía.",image:"assets/galeria4.jpg"},{id:5,title:"5. Tu Apoyo Incondicional",description:"Gracias por estar siempre ahí, por tus abrazos cálidos y por creer siempre en mí.",image:"assets/galeria5.jpg"},{id:6,title:"6. Por Todo lo que Eres",description:"Por tu dulzura, tu bondad, tu belleza y por ser mi persona favorita en todo el universo.",image:"assets/galeria6.jpg"}],color:15087958,emissive:4853273,tag:"Capítulo III"},{id:"memory-4",icon:"🪐",title:"Los momentos que nos quedan por vivir",subtitle:"Un futuro infinito",date:"Por siempre",snoopyDialogue:"¡Mirando hacia el horizonte! 🪐 Todo lo vivido hasta hoy es maravilloso, pero lo que viene será aún más grandioso. ¡Nos queda un universo entero por explorar!",description:"Esto es solo el comienzo. Sueño con todos los viajes que haremos, los atardeceres que veremos juntos, las metas que celebraremos y cada uno de los cumpleaños que vendrán. El universo entero nos espera.",image:"assets/foto4.jpg",color:7395071,emissive:932690,tag:"Capítulo IV"}],letterSection:{title:"Una carta para ti",subtitle:"Toca el sello del sobre para abrirla",sealText:"TOCA PARA ABRIR",dateStamp:"En tu cumpleaños",letterText:["Hoy no quiero simplemente decirte feliz cumpleaños.","Quiero recordarte lo extraordinariamente especial que eres para mí.","Gracias por cada sonrisa compartida, cada mirada cómplice, cada conversación de madrugada y cada recuerdo inolvidable que hemos construido juntos.","Eres esa luz cálida que hace que todo valga la pena, mi refugio de calma y mi mayor alegría en este universo.","Espero poder seguir creando infinitas memorias y celebrando la vida a tu lado.","Feliz cumpleaños, mi amor. ❤️"],signOff:"Con todo mi amor y devoción,",signature:"Tu persona favorita"},finale:{preTitle1:"Y ahora...",preTitle2:"Es tu día. ✨",mainTitle:"¡Feliz Cumpleaños, Mi Amor! ❤️",heartMessage:"Te quiero muchísimo.",wishMessage:"Espero seguir celebrando muchos cumpleaños a tu lado."},easterEggs:{goldenStar:{title:"✦ Estrella de los Deseos ✦",message:"Deseo que este nuevo año de vida te traiga toda la paz, amor y felicidad del mundo. Eres mi estrella más brillante. ✨"},moonMessage:{title:"🌙 Un secreto en la Luna",message:"Dicen que la luna es hermosa, pero se queda pequeña comparada con tu luz. Te amo."},constellationInitial:"❤️",loveKeys:["¡Eres la casualidad más bonita de mi vida!","Mi universo entero gira a tu alrededor.","Gracias por existir tal y como eres.","Cada segundo contigo es un regalo."]},audio:{musicUrl:"assets/music.mp3",volume:.6,enableAmbientSynthFallback:!0}};class Ev{constructor(t){this.container=t,this.width=window.innerWidth,this.height=window.innerHeight,this.quality=this.detectOptimalQuality(),this.scene=new jf,this.scene.fog=new Vl(197388,.0012);const e=this.width<768&&this.width<this.height;this.camera=new hn(e?66:55,this.width/this.height,.1,2500),this.camera.position.set(0,0,120),this.renderer=new Tv({antialias:this.quality!=="low",alpha:!0,powerPreference:"high-performance"}),this.applyQualitySettings(),this.renderer.setSize(this.width,this.height),this.renderer.toneMapping=Jh,this.renderer.toneMappingExposure=1.15,this.renderer.outputColorSpace=ln,this.container.appendChild(this.renderer.domElement),this.clock=new kp,this.updateCallbacks=[],this.mouse={x:0,y:0,targetX:0,targetY:0},this.setupEvents()}detectOptimalQuality(){const t=/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)||window.innerWidth<768,e=navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;return t||e?"medium":"high"}setQuality(t){["high","medium","low"].includes(t)&&(this.quality=t,this.applyQualitySettings())}applyQualitySettings(){let t=1;this.quality==="high"?t=Math.min(window.devicePixelRatio||1,2):this.quality==="medium"?t=Math.min(window.devicePixelRatio||1,1.5):t=1,this.renderer.setPixelRatio(t)}setupEvents(){window.addEventListener("resize",this.onResize.bind(this)),window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this),{passive:!0})}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.width<768&&this.width<this.height?this.camera.fov=66:this.camera.fov=55,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.applyQualitySettings()}onMouseMove(t){this.mouse.targetX=t.clientX/this.width*2-1,this.mouse.targetY=-(t.clientY/this.height)*2+1}onTouchMove(t){if(t.touches.length>0){const e=t.touches[0];this.mouse.targetX=e.clientX/this.width*2-1,this.mouse.targetY=-(e.clientY/this.height)*2+1}}onUpdate(t){this.updateCallbacks.push(t)}start(){const t=()=>{requestAnimationFrame(t);const e=Math.min(this.clock.getDelta(),.1),n=this.clock.getElapsedTime();this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.05,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.05;for(const i of this.updateCallbacks)i(e,n,this.mouse);this.renderer.render(this.scene,this.camera)};t()}}class bv{constructor(t){this.scene=t,this.setupLights()}setupLights(){this.ambientLight=new zp(2102584,1.2),this.scene.add(this.ambientLight),this.mainLight=new eh(16775917,2.2),this.mainLight.position.set(40,60,50),this.scene.add(this.mainLight),this.rimLight=new eh(15087958,2.5),this.rimLight.position.set(-50,-30,-40),this.scene.add(this.rimLight),this.auroraLight=new yo(7395071,2,300),this.auroraLight.position.set(0,50,-80),this.scene.add(this.auroraLight),this.pedestalLight=new yo(16111487,0,150),this.pedestalLight.position.set(0,0,0),this.scene.add(this.pedestalLight)}setPedestalLightIntensity(t){this.pedestalLight.intensity=t}}function $n(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Uu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},mr={duration:.5,overwrite:!1,delay:0},Ql,Be,ve,Mn=1e8,de=1/Mn,xl=Math.PI*2,Av=xl/4,Cv=0,Nu=Math.sqrt,Rv=Math.cos,Pv=Math.sin,Oe=function(t){return typeof t=="string"},Ee=function(t){return typeof t=="function"},ii=function(t){return typeof t=="number"},tc=function(t){return typeof t>"u"},Gn=function(t){return typeof t=="object"},Ke=function(t){return t!==!1},ec=function(){return typeof window<"u"},so=function(t){return Ee(t)||Oe(t)},Ou=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},He=Array.isArray,Lv=/random\([^)]+\)/g,Iv=/,\s*/g,Ph=/(?:-?\.?\d|\.)+/gi,Fu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ya=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bu=/[+-]=-?[.\d]+/,Dv=/[^,'"\[\]\s]+/gi,Uv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ye,In,yl,nc,mn={},Mo={},zu,Gu=function(t){return(Mo=Ns(t,mn))&&en},ic=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},gr=function(t,e){return!e&&console.warn(t)},ku=function(t,e){return t&&(mn[t]=e)&&Mo&&(Mo[t]=e)||mn},_r=function(){return 0},Nv={suppressEvents:!0,isStart:!0,kill:!1},uo={suppressEvents:!0,kill:!1},Ov={suppressEvents:!0},sc={},xi=[],Ml={},Vu,cn={},Ma={},Lh=30,fo=[],rc="",oc=function(t){var e=t[0],n,i;if(Gn(e)||Ee(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=fo.length;i--&&!fo[i].targetTest(e););n=fo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new hd(t[i],n)))||t.splice(i,1);return t},qi=function(t){return t._gsap||oc(Sn(t))[0]._gsap},Hu=function(t,e,n){return(n=t[e])&&Ee(n)?t[e]():tc(n)&&t.getAttribute&&t.getAttribute(e)||n},je=function(t,e){return(t=t.split(",")).forEach(e)||t},be=function(t){return Math.round(t*1e5)/1e5||0},xe=function(t){return Math.round(t*1e7)/1e7||0},Ts=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Fv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},So=function(){var t=xi.length,e=xi.slice(0),n,i;for(Ml={},xi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ac=function(t){return!!(t._initted||t._startAt||t.add)},Wu=function(t,e,n,i){xi.length&&!Be&&So(),t.render(e,n,!!(Be&&e<0&&ac(t))),xi.length&&!Be&&So()},Xu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Dv).length<2?e:Oe(t)?t.trim():t},qu=function(t){return t},gn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Bv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ns=function(t,e){for(var n in e)t[n]=e[n];return t},Ih=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Gn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},wo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ar=function(t){var e=t.parent||ye,n=t.keyframes?Bv(He(t.keyframes)):gn;if(Ke(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},zv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Yu=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Uo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},wi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Yi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Gv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Sl=function(t,e,n,i){return t._startAt&&(Be?t._startAt.revert(uo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},kv=function r(t){return!t||t._ts&&r(t.parent)},Dh=function(t){return t._repeat?Os(t._tTime,t=t.duration()+t._rDelay)*t:0},Os=function(t,e){var n=Math.floor(t=xe(t/e));return t&&n===t?n-1:n},To=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},No=function(t){return t._end=xe(t._start+(t._tDur/Math.abs(t._ts||t._rts||de)||0))},Oo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=xe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),No(t),n._dirty||Yi(n,t)),t},Zu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=To(t.rawTime(),e),(!e._dur||br(0,e.totalDuration(),n)-e._tTime>de)&&e.render(n,!0)),Yi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-de}},Nn=function(t,e,n,i){return e.parent&&wi(e),e._start=xe((ii(n)?n:n||t!==ye?yn(t,n,e):t._time)+e._delay),e._end=xe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Yu(t,e,"_first","_last",t._sort?"_start":0),wl(e)||(t._recent=e),i||Zu(t,e),t._ts<0&&Oo(t,t._tTime),t},$u=function(t,e){return(mn.ScrollTrigger||ic("scrollTrigger",e))&&mn.ScrollTrigger.create(e,t)},Ju=function(t,e,n,i,s){if(cc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Be&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Vu!==un.frame)return xi.push(t),t._lazy=[s,i],1},Vv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},wl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Hv=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Vv(t)&&!(!t._initted&&wl(t))||(t._ts<0||t._dp._ts<0)&&!wl(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=br(0,t._tDur,e),h=Os(l,a),t._yoyo&&h&1&&(o=1-o),h!==Os(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Be||i||t._zTime===de||!e&&t._zTime){if(!t._initted&&Ju(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?de:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Sl(t,e,n,!0),t._onUpdate&&!n&&dn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&dn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&wi(t,1),!n&&!Be&&(dn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Wv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Fs=function(t,e,n,i){var s=t._repeat,o=xe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:xe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Oo(t,t._tTime=t._tDur*a),t.parent&&No(t),n||Yi(t.parent,t),t},Uh=function(t){return t instanceof Je?Yi(t):Fs(t,t._dur)},Xv={_start:0,endTime:_r,totalDuration:_r},yn=function r(t,e,n){var i=t.labels,s=t._recent||Xv,o=t.duration()>=Mn?s.endTime(!1):t._dur,a,l,c;return Oe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(He(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},lr=function(t,e,n){var i=ii(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ke(l.vars.inherit)&&l.parent;o.immediateRender=Ke(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Re(e[0],o,e[s+1])},bi=function(t,e){return t||t===0?e(t):e},br=function(t,e,n){return n<t?t:n>e?e:n},Ve=function(t,e){return!Oe(t)||!(e=Uv.exec(t))?"":e[1]},qv=function(t,e,n){return bi(n,function(i){return br(t,e,i)})},Tl=[].slice,Ku=function(t,e){return t&&Gn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Gn(t[0]))&&!t.nodeType&&t!==In},Yv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Oe(i)&&!e||Ku(i,1)?(s=n).push.apply(s,Sn(i)):n.push(i)})||n},Sn=function(t,e,n){return ve&&!e&&ve.selector?ve.selector(t):Oe(t)&&!n&&(yl||!Bs())?Tl.call((e||nc).querySelectorAll(t),0):He(t)?Yv(t,n):Ku(t)?Tl.call(t,0):t?[t]:[]},El=function(t){return t=Sn(t)[0]||gr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Sn(e,n.querySelectorAll?n:n===t?gr("Invalid scope")||nc.createElement("div"):t)}},ju=function(t){return t.sort(function(){return .5-Math.random()})},Qu=function(t){if(Ee(t))return t;var e=Gn(t)?t:{each:t},n=Zi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Oe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=o[g],p,M,x,v,b,C,w,A,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,Mn])[1],!S){for(w=-Mn;w<(w=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],p=l?Math.min(S,g)*h-.5:i%S,M=S===Mn?0:l?g*u/S-.5:i/S|0,w=0,A=Mn,C=0;C<g;C++)x=C%S-p,v=M-(C/S|0),m[C]=b=c?Math.abs(c==="y"?v:x):Nu(x*x+v*v),b>w&&(w=b),b<A&&(A=b);i==="random"&&ju(m),m.max=w-A,m.min=A,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ve(e.amount||e.each)||0,n=n&&g<0?ox(n):n}return g=(m[d]-m.min)/m.max||0,xe(m.b+(n?n(g):g)*m.v)+m.u}},bl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=xe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ii(n)?0:Ve(n))}},td=function(t,e){var n=He(t),i,s;return!n&&Gn(t)&&(i=n=t.radius||Mn,t.values?(t=Sn(t.values),(s=!ii(t[0]))&&(i*=i)):t=bl(t.increment)),bi(e,n?Ee(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Mn,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,s||h===o||ii(o)?h:h+Ve(o)}:bl(t))},ed=function(t,e,n,i){return bi(He(t)?!e:n===!0?!!(n=0):!i,function(){return He(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Zv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},$v=function(t,e){return function(n){return t(parseFloat(n))+(e||Ve(n))}},Jv=function(t,e,n){return id(t,e,0,1,n)},nd=function(t,e,n){return bi(n,function(i){return t[~~e(i)]})},Kv=function r(t,e,n){var i=e-t;return He(t)?nd(t,r(0,t.length),e):bi(n,function(s){return(i+(s-t)%i)%i+t})},jv=function r(t,e,n){var i=e-t,s=i*2;return He(t)?nd(t,r(0,t.length-1),e):bi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},vr=function(t){return t.replace(Lv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Iv);return ed(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},id=function(t,e,n,i,s){var o=e-t,a=i-n;return bi(s,function(l){return n+((l-t)/o*a||0)})},Qv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Oe(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(He(t)&&!He(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=Ns(He(t)?[]:{},t));if(!h){for(l in e)lc.call(a,t,l,"get",e[l]);s=function(_){return dc(_,a)||(o?t.p:t)}}}return bi(n,s)},Nh=function(t,e,n){var i=t.labels,s=Mn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},dn=function(t,e,n){var i=t.vars,s=i[e],o=ve,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&xi.length&&So(),a&&(ve=a),h=l?s.apply(c,l):s.call(c),ve=o,h},ir=function(t){return wi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Be),t.progress()<1&&dn(t,"onInterrupt"),t},ys,sd=[],rd=function(t){if(t)if(t=!t.name&&t.default||t,ec()||t.headless){var e=t.name,n=Ee(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:_r,render:dc,add:lc,kill:gx,modifier:mx,rawVars:0},o={targetTest:0,get:0,getSetter:uc,aliases:{},register:0};if(Bs(),t!==i){if(cn[e])return;gn(i,gn(wo(t,s),o)),Ns(i.prototype,Ns(s,wo(t,o))),cn[i.prop=e]=i,t.targetTest&&(fo.push(i),sc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ku(e,i),t.register&&t.register(en,i,Qe)}else sd.push(t)},ue=255,sr={aqua:[0,ue,ue],lime:[0,ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ue],navy:[0,0,128],white:[ue,ue,ue],olive:[128,128,0],yellow:[ue,ue,0],orange:[ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ue,0,0],pink:[ue,192,203],cyan:[0,ue,ue],transparent:[ue,ue,ue,0]},Sa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ue+.5|0},od=function(t,e,n){var i=t?ii(t)?[t>>16,t>>8&ue,t&ue]:0:sr.black,s,o,a,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),sr[t])i=sr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ue,i&ue,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ue,t&ue]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Ph),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Sa(l+1/3,s,o),i[1]=Sa(l,s,o),i[2]=Sa(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Fu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ph)||sr.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/ue,o=i[1]/ue,a=i[2]/ue,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ad=function(t){var e=[],n=[],i=-1;return t.split(yi).forEach(function(s){var o=s.match(xs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Oh=function(t,e,n){var i="",s=(t+i).match(yi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=od(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=ad(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(yi,"1").split(xs),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(yi),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},yi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in sr)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),tx=/hsl[a]?\(/,ld=function(t){var e=t.join(" "),n;if(yi.lastIndex=0,yi.test(e))return n=tx.test(e),t[1]=Oh(t[1],n),t[0]=Oh(t[0],n,ad(t[1])),!0},xr,un=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,_=function g(m){var p=r()-i,M=m===!0,x,v,b,C;if((p>t||p<0)&&(n+=p-e),i+=p,b=i-n,x=b-o,(x>0||M)&&(C=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,o+=x+(x>=s?4:s-x),v=1),M||(l=c(g)),v)for(f=0;f<a.length;f++)a[f](b,d,C,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){zu&&(!yl&&ec()&&(In=yl=window,nc=In.document||{},mn.gsap=en,(In.gsapVersions||(In.gsapVersions=[])).push(en.version),Gu(Mo||In.GreenSockGlobals||!In.gsap&&In||{}),sd.forEach(rd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},xr=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),xr=0,c=_r},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,M){var x=p?function(v,b,C,w){m(v,b,C,w),u.remove(x)}:m;return u.remove(m),a[M?"unshift":"push"](x),Bs(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u})(),Bs=function(){return!xr&&un.wake()},Jt={},ex=/^[\d.\-M][\d.\-,\s]/,nx=/["']/g,ix=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(nx,"").trim():+c,i=l.substr(a+1).trim();return e},sx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},rx=function(t){var e=(t+"").split("("),n=Jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ix(e[1])]:sx(t).split(",").map(Xu)):Jt._CE&&ex.test(t)?Jt._CE("",t):n},ox=function(t){return function(e){return 1-t(1-e)}},Zi=function(t,e){return t&&(Ee(t)?t:Jt[t]||rx(t))||e},ts=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return je(t,function(a){Jt[a]=mn[a]=s,Jt[o=a.toLowerCase()]=n;for(var l in s)Jt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Jt[a+"."+l]=s[l]}),s},cd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},wa=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/xl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Pv((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:cd(a);return s=xl/s,l.config=function(c,h){return r(t,c,h)},l},Ta=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:cd(n);return i.config=function(s){return r(t,s)},i};je("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ts(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;ts("Elastic",wa("in"),wa("out"),wa());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ts("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ts("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ts("Circ",function(r){return-(Nu(1-r*r)-1)});ts("Sine",function(r){return r===1?1:-Rv(r*Av)+1});ts("Back",Ta("in"),Ta("out"),Ta());Jt.SteppedEase=Jt.steps=mn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-de;return function(a){return((i*br(0,o,a)|0)+s)*n}}};mr.ease=Jt["quad.out"];je("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return rc+=r+","+r+"Params,"});var hd=function(t,e){this.id=Cv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Hu,this.set=e?e.getSetter:uc},yr=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Fs(this,+e.duration,1,1),this.data=e.data,ve&&(this._ctx=ve,ve.data.push(this)),xr||un.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Fs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Bs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Oo(this,n),!s._dp||s.parent||Zu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Nn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===de||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Dh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Dh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Os(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-de?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?To(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-de?0:this._rts,this.totalTime(br(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),No(this),Gv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Bs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==de&&(this._tTime-=de)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=xe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Nn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ke(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?To(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ov);var i=Be;return Be=n,ac(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Be=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Uh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Uh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(yn(this,n),Ke(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ke(i)),this._dur||(this._zTime=-de),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-de:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-de,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-de)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ee(n)?n:qu,l=function(){var h=i.then;i.then=null,s&&s(),Ee(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ir(this)},r})();gn(yr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-de,_prom:0,_ps:!1,_rts:1});var Je=(function(r){Uu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ke(n.sortChildren),ye&&Nn(n.parent||ye,$n(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&$u($n(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return lr(0,arguments,this),this},e.from=function(i,s,o){return lr(1,arguments,this),this},e.fromTo=function(i,s,o,a){return lr(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,ar(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Re(i,s,yn(this,o),1),this},e.call=function(i,s,o){return Nn(this,Re.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Re(i,o,yn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,ar(o).immediateRender=Ke(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,ar(a).immediateRender=Ke(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:xe(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,M,x,v,b,C,w;if(this!==ye&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,v=this._start,x=this._ts,p=!x,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=xe(h%m),h===l?(g=this._repeat,d=c):(b=xe(h/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=Os(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),C&&g&1&&(d=c-d,w=1),g!==b&&!this._lock){var A=C&&b&1,S=A===(C&&g&1);if(g<b&&(A=!A),a=A?0:h%c?c:h,this._lock=1,this.render(a||(w?0:xe(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Wv(this,xe(a),xe(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!b&&(dn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=-de);break}}f=_}else{f=this._last;for(var y=i<0?i:d;f;){if(_=f._prev,(f._act||y<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o||Be&&ac(f)),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=y?-de:de);break}}f=_}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-de)._zTime=d>=a?1:-1,this._ts))return this._start=v,No(this),this.render(i,s,o);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&wi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(dn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ii(s)||(s=yn(this,s,i)),!(i instanceof yr)){if(He(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Oe(i))return this.addLabel(i,s);if(Ee(i))i=Re.delayedCall(0,i);else return this}return this!==i?Nn(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Mn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Re?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Oe(i)?this.removeLabel(i):Ee(i)?this.killTweensOf(i):(i.parent===this&&Uo(this,i),i===this._recent&&(this._recent=this._last),Yi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xe(un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=yn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Re.delayedCall(0,s||_r,o);return a.data="isPause",this._hasPause=1,Nn(this,a,yn(this,i))},e.removePause=function(i){var s=this._first;for(i=yn(this,i);s;)s._start===i&&s.data==="isPause"&&wi(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)fi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Sn(i),l=this._first,c=ii(s),h;l;)l instanceof Re?Fv(l._targets,a)&&(c?(!fi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=yn(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Re.to(o,gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||de,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Fs(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,gn({startAt:{time:yn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Nh(this,yn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Nh(this,yn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+de)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=xe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Yi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yi(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Mn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Nn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=xe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Fs(o,o===ye&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ye._ts&&(Wu(ye,To(i,ye)),Vu=un.frame),un.frame>=Lh){Lh+=pn.autoSleep||120;var s=ye._first;if((!s||!s._ts)&&pn.autoSleep&&un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||un.sleep()}}},t})(yr);gn(Je.prototype,{_lock:0,_hasPause:0,_forcing:0});var ax=function(t,e,n,i,s,o,a){var l=new Qe(this._pt,t,e,0,1,gd,null,s),c=0,h=0,u,d,f,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=vr(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(ya)||[];u=ya.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Ts(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=ya.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Bu.test(i)||p)&&(l.e=0),this._pt=l,l},lc=function(t,e,n,i,s,o,a,l,c,h){Ee(i)&&(i=i(s||0,t,o));var u=t[e],d=n!=="get"?n:Ee(u)?c?t[e.indexOf("set")||!Ee(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Ee(u)?c?dx:pd:hc,_;if(Oe(i)&&(~i.indexOf("random(")&&(i=vr(i)),i.charAt(1)==="="&&(_=Ts(d,i)+(Ve(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Al)return!isNaN(d*i)&&i!==""?(_=new Qe(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?px:md,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&ic(e,i),ax.call(this,t,e,d,i,f,l||pn.stringFilter,c))},lx=function(t,e,n,i,s){if(Ee(t)&&(t=cr(t,s,e,n,i)),!Gn(t)||t.style&&t.nodeType||He(t)||Ou(t))return Oe(t)?cr(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=cr(t[a],s,e,n,i);return o},ud=function(t,e,n,i,s,o){var a,l,c,h;if(cn[t]&&(a=new cn[t]).init(s,a.rawVars?e[t]:lx(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Qe(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ys))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},fi,Al,cc=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!Ql,v=t.timeline,b=i.easeReverse||u,C,w,A,S,y,L,U,D,O,k,G,q,V;if(v&&(!d||!s)&&(s="none"),t._ease=Zi(s,mr.ease),t._rEase=b&&(Zi(b)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||d&&!i.stagger){if(D=m[0]?qi(m[0]).harness:0,q=D&&i[D.prop],C=wo(i,sc),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?uo:Nv),g._lazy=0),o){if(wi(t._startAt=Re.set(m,gn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Ke(l),startAt:null,delay:0,onUpdate:c&&function(){return dn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be||!a&&!f)&&t._startAt.revert(uo),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),A=gn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Ke(l),immediateRender:a,stagger:0,parent:p},C),q&&(A[D.prop]=q),wi(t._startAt=Re.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be?t._startAt.revert(uo):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,de,de);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Ke(l)||l&&!_,w=0;w<m.length;w++){if(y=m[w],U=y._gsap||oc(m)[w]._gsap,t._ptLookup[w]=k={},Ml[U.id]&&xi.length&&So(),G=M===m?w:M.indexOf(y),D&&(O=new D).init(y,q||C,t,G,M)!==!1&&(t._pt=S=new Qe(t._pt,y,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(rt){k[rt]=S}),O.priority&&(L=1)),!D||q)for(A in C)cn[A]&&(O=ud(A,C,t,G,y,M))?O.priority&&(L=1):k[A]=S=lc.call(t,y,A,"get",C[A],G,M,0,i.stringFilter);t._op&&t._op[w]&&t.kill(y,t._op[w]),x&&t._pt&&(fi=t,ye.killTweensOf(y,k,t.globalTime(e)),V=!t.parent,fi=0),t._pt&&l&&(Ml[U.id]=1)}L&&_d(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,d&&e<=0&&v.render(Mn,!0,!0)},cx=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Al=1,t.vars[e]="+=0",cc(t,a),Al=0,l?gr(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=be(n)+Ve(u.e)),u.b&&(u.b=h.s+Ve(u.b))},hx=function(t,e){var n=t[0]?qi(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ns({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ux=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(He(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},cr=function(t,e,n,i,s){return Ee(t)?t.call(e,n,i,s):Oe(t)&&~t.indexOf("random(")?vr(t):t},dd=rc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",fd={};je(dd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return fd[r]=1});var Re=(function(r){Uu(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ar(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||ye,M=(He(n)||Ou(n)?ii(n[0]):"length"in i)?[n]:Sn(n),x,v,b,C,w,A,S,y;if(a._targets=M.length?oc(M):gr("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||so(c)||so(h)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(x=a.timeline=new Je({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:M}),x.kill(),x.parent=x._dp=$n(a),x._start=0,d||so(c)||so(h)){if(C=M.length,S=d&&Qu(d),Gn(d))for(w in d)~dd.indexOf(w)&&(y||(y={}),y[w]=d[w]);for(v=0;v<C;v++)b=wo(i,fd),b.stagger=0,L&&(b.easeReverse=L),y&&Ns(b,y),A=M[v],b.duration=+cr(c,$n(a),v,A,M),b.delay=(+cr(h,$n(a),v,A,M)||0)-a._delay,!d&&C===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),x.to(A,b,S?S(v,A,M):0),x._ease=Jt.none;x.duration()?c=h=0:a.timeline=0}else if(_){ar(gn(x.vars.defaults,{ease:"none"})),x._ease=Zi(_.ease||i.ease||"none");var U=0,D,O,k;if(He(_))_.forEach(function(G){return x.to(M,G,">")}),x.duration();else{b={};for(w in _)w==="ease"||w==="easeEach"||ux(w,_[w],b,_.easeEach);for(w in b)for(D=b[w].sort(function(G,q){return G.t-q.t}),U=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*c},k[w]=O.v,x.to(M,k,U),U+=k.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!Ql&&(fi=$n(a),ye.killTweensOf(M),fi=0),Nn(p,$n(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===xe(p._time)&&Ke(u)&&kv($n(a))&&p.data!=="nested")&&(a._tTime=-de,a.render(Math.max(0,-h)||0)),m&&$u($n(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-de&&!h?l:i<de?0:i,d,f,_,g,m,p,M,x;if(!c)Hv(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(d=xe(u%g),u===l?(_=this._repeat,d=c):(m=xe(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=Os(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(xe(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Ju(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=d<a;if(v!==this._inv){var b=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(d/c);if(this._from&&(this.ratio=M=1-M),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!s&&!m&&(dn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Sl(this,i,s,o),dn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Sl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&wi(this,1),!s&&!(h&&!a)&&(u||a||p)&&(dn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){xr||un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||cc(this,c),h=this._ease(c/this._dur),cx(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Oo(this,0),this.parent||Yu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ir(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Be),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,fi&&fi.vars.overwrite!==!0)._first||ir(this),this.parent&&o!==this.timeline.totalDuration()&&Fs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Sn(i):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&zv(a,l))return s==="all"&&(this._pt=0),ir(this);for(u=this._op=this._op||[],s!=="all"&&(Oe(s)&&(g={},je(s,function(M){return g[M]=1}),s=g),s=hx(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Uo(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ir(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return lr(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return lr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return ye.killTweensOf(i,s,o)},t})(yr);gn(Re.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});je("staggerTo,staggerFrom,staggerFromTo",function(r){Re[r]=function(){var t=new Je,e=Tl.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var hc=function(t,e,n){return t[e]=n},pd=function(t,e,n){return t[e](n)},dx=function(t,e,n,i){return t[e](i.fp,n)},fx=function(t,e,n){return t.setAttribute(e,n)},uc=function(t,e){return Ee(t[e])?pd:tc(t[e])&&t.setAttribute?fx:hc},md=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},px=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},gd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},dc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},mx=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},gx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Uo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},_x=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},_d=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Qe=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||md,this.d=l||this,this.set=c||hc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=_x,this.m=n,this.mt=s,this.tween=i},r})();je(rc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return sc[r]=1});mn.TweenMax=mn.TweenLite=Re;mn.TimelineLite=mn.TimelineMax=Je;ye=new Je({sortChildren:!1,defaults:mr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=ld;var $i=[],po={},vx=[],Fh=0,xx=0,Ea=function(t){return(po[t]||vx).map(function(e){return e()})},Cl=function(){var t=Date.now(),e=[];t-Fh>2&&(Ea("matchMediaInit"),$i.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=In.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Ea("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Fh=t,Ea("matchMedia"))},vd=(function(){function r(e,n){this.selector=n&&El(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xx++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ee(n)&&(s=i,i=n,n=Ee);var o=this,a=function(){var c=ve,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=El(s)),ve=o,u=i.apply(o,arguments),Ee(u)&&o._r.push(u),ve=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ee?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=ve;ve=null,n(this),ve=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Re&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Je?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Re)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=$i.length;o--;)$i[o].id===this.id&&$i.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),yx=(function(){function r(e){this.contexts=[],this.scope=e,ve&&ve.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Gn(n)||(n={matches:n});var o=new vd(0,s||this.scope),a=o.conditions={},l,c,h;ve&&!o.selector&&(o.selector=ve.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=In.matchMedia(n[c]),l&&($i.indexOf(o)<0&&$i.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Cl):l.addEventListener("change",Cl)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Eo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return rd(i)})},timeline:function(t){return new Je(t)},getTweensOf:function(t,e){return ye.getTweensOf(t,e)},getProperty:function(t,e,n,i){Oe(t)&&(t=Sn(t)[0]);var s=qi(t||{}).get,o=n?qu:Xu;return n==="native"&&(n=""),t&&(e?o((cn[e]&&cn[e].get||s)(t,e,n,i)):function(a,l,c){return o((cn[a]&&cn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Sn(t),t.length>1){var i=t.map(function(h){return en.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=cn[e],a=qi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;ys._pt=0,u.init(t,n?h+n:h,ys,0,[t]),u.render(1,u),ys._pt&&dc(1,ys)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=en.to(t,gn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return ye.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Zi(t.ease,mr.ease)),Ih(mr,t||{})},config:function(t){return Ih(pn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!cn[a]&&!mn[a]&&gr(e+" effect requires "+a+" plugin.")}),Ma[e]=function(a,l,c){return n(Sn(a),gn(l||{},s),c)},o&&(Je.prototype[e]=function(a,l,c){return this.add(Ma[e](a,Gn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Jt[t]=Zi(e)},parseEase:function(t,e){return arguments.length?Zi(t,e):Jt},getById:function(t){return ye.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Je(t),i,s;for(n.smoothChildTiming=Ke(t.smoothChildTiming),ye.remove(n),n._dp=0,n._time=n._tTime=ye._time,i=ye._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Re&&i.vars.onComplete===i._targets[0]))&&Nn(n,i,i._start-i._delay),i=s;return Nn(ye,n,0),n},context:function(t,e){return t?new vd(t,e):ve},matchMedia:function(t){return new yx(t)},matchMediaRefresh:function(){return $i.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Cl()},addEventListener:function(t,e){var n=po[t]||(po[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=po[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Kv,wrapYoyo:jv,distribute:Qu,random:ed,snap:td,normalize:Jv,getUnit:Ve,clamp:qv,splitColor:od,toArray:Sn,selector:El,mapRange:id,pipe:Zv,unitize:$v,interpolate:Qv,shuffle:ju},install:Gu,effects:Ma,ticker:un,updateRoot:Je.updateRoot,plugins:cn,globalTimeline:ye,core:{PropTween:Qe,globals:ku,Tween:Re,Timeline:Je,Animation:yr,getCache:qi,_removeLinkedListItem:Uo,reverting:function(){return Be},context:function(t){return t&&ve&&(ve.data.push(t),t._ctx=ve),ve},suppressOverwrites:function(t){return Ql=t}}};je("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Eo[r]=Re[r]});un.add(Je.updateRoot);ys=Eo.to({},{duration:0});var Mx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Sx=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Mx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},ba=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Oe(s)&&(l={},je(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Sx(a,s)}}}},en=Eo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Be?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ba("roundProps",bl),ba("modifiers"),ba("snap",td))||Eo;Re.version=Je.version=en.version="3.15.0";zu=1;ec()&&Bs();Jt.Power0;Jt.Power1;Jt.Power2;Jt.Power3;Jt.Power4;Jt.Linear;Jt.Quad;Jt.Cubic;Jt.Quart;Jt.Quint;Jt.Strong;Jt.Elastic;Jt.Back;Jt.SteppedEase;Jt.Bounce;Jt.Sine;Jt.Expo;Jt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bh,pi,Es,fc,Wi,zh,pc,wx=function(){return typeof window<"u"},si={},zi=180/Math.PI,bs=Math.PI/180,gs=Math.atan2,Gh=1e8,mc=/([A-Z])/g,Tx=/(left|right|width|margin|padding|x)/i,Ex=/[\s,\(]\S/,Fn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},bx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ax=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Cx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Rx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},xd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Px=function(t,e,n){return t.style[e]=n},Lx=function(t,e,n){return t.style.setProperty(e,n)},Ix=function(t,e,n){return t._gsap[e]=n},Dx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ux=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Nx=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Se="transform",tn=Se+"Origin",Ox=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in si&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Fn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Kn(i,a)}):this.tfm[t]=o.x?o[t]:Kn(i,t),t===tn&&(this.tfm.zOrigin=o.zOrigin);else return Fn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Se)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(tn,e,"")),t=Se}(s||e)&&this.props.push(t,e,s[t])},Md=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Fx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(mc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=pc(),(!s||!s.isStart)&&!n[Se]&&(Md(n),i.zOrigin&&n[tn]&&(n[tn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Sd=function(t,e){var n={target:t,props:[],revert:Fx,save:Ox};return t._gsap||en.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},wd,Pl=function(t,e){var n=pi.createElementNS?pi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):pi.createElement(t);return n&&n.style?n:pi.createElement(t)},fn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(mc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,zs(e)||e,1)||""},kh="O,Moz,ms,Ms,Webkit".split(","),zs=function(t,e,n){var i=e||Wi,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(kh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?kh[o]:"")+t},Ll=function(){wx()&&window.document&&(Bh=window,pi=Bh.document,Es=pi.documentElement,Wi=Pl("div")||{style:{}},Pl("div"),Se=zs(Se),tn=Se+"Origin",Wi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wd=!!zs("perspective"),pc=en.core.reverting,fc=1)},Vh=function(t){var e=t.ownerSVGElement,n=Pl("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Es.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Es.removeChild(n),s},Hh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Td=function(t){var e,n;try{e=t.getBBox()}catch{e=Vh(t),n=1}return e&&(e.width||e.height)||n||(e=Vh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Hh(t,["x","cx","x1"])||0,y:+Hh(t,["y","cy","y1"])||0,width:0,height:0}:e},Ed=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Td(t))},Ti=function(t,e){if(e){var n=t.style,i;e in si&&e!==tn&&(e=Se),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(mc,"-$1").toLowerCase())):n.removeAttribute(e)}},mi=function(t,e,n,i,s,o){var a=new Qe(t._pt,e,n,0,1,o?yd:xd);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Wh={deg:1,rad:1,turn:1},Bx={grid:1,flex:1},Ei=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Wi.style,l=Tx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!s||Wh[i]||Wh[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&Ed(t),(f||o==="%")&&(si[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],be(f?s/_*u:s/100*_);if(a[l?"width":"height"]=u+(d?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===pi||!g.appendChild)&&(g=pi.body),m=g._gsap,m&&f&&m.width&&l&&m.time===un.time&&!m.uncache)return be(s/m.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,_=t[h],M?t.style[e]=M:Ti(t,e)}else(f||o==="%")&&!Bx[fn(g,"display")]&&(a.position=fn(t,"position")),g===t&&(a.position="static"),g.appendChild(Wi),_=Wi[h],g.removeChild(Wi),a.position="absolute";return l&&f&&(m=qi(g),m.time=un.time,m.width=g[h]),be(d?_*s/u:_&&s?u/_*s:0)},Kn=function(t,e,n,i){var s;return fc||Ll(),e in Fn&&e!=="transform"&&(e=Fn[e],~e.indexOf(",")&&(e=e.split(",")[0])),si[e]&&e!=="transform"?(s=Sr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ao(fn(t,tn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=bo[e]&&bo[e](t,e,n)||fn(t,e)||Hu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ei(t,e,s,n)+n:s},zx=function(t,e,n,i){if(!n||n==="none"){var s=zs(e,t,1),o=s&&fn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=fn(t,"borderTopColor"))}var a=new Qe(this._pt,t.style,e,0,1,gd),l=0,c=0,h,u,d,f,_,g,m,p,M,x,v,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=fn(t,e)||i,g?t.style[e]=g:Ti(t,e)),h=[n,i],ld(h),n=h[0],i=h[1],d=n.match(xs)||[],b=i.match(xs)||[],b.length){for(;u=xs.exec(i);)m=u[0],M=i.substring(l,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),m.charAt(1)==="="&&(m=Ts(f,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=xs.lastIndex-x.length,x||(x=x||pn.units[e]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(f=Ei(t,e,g,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?yd:xd;return Bu.test(i)&&(a.e=0),this._pt=a,a},Xh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Xh[n]||n,e[1]=Xh[i]||i,e.join(" ")},kx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],si[a]&&(l=1,a=a==="transformOrigin"?tn:Se),Ti(n,a);l&&(Ti(n,Se),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Sr(n,1),o.uncache=1,Md(i)))}},bo={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Qe(t._pt,e,n,0,0,kx);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Mr=[1,0,0,1,0,0],bd={},Ad=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},qh=function(t){var e=fn(t,Se);return Ad(e)?Mr:e.substr(7).match(Fu).map(be)},gc=function(t,e){var n=t._gsap||qi(t),i=t.style,s=qh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Mr:s):(s===Mr&&!t.offsetParent&&t!==Es&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Es.appendChild(t)),s=qh(t),l?i.display=l:Ti(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Es.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Il=function(t,e,n,i,s,o){var a=t._gsap,l=s||gc(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],x=e.split(" "),v=parseFloat(x[0])||0,b=parseFloat(x[1])||0,C,w,A,S;n?l!==Mr&&(w=f*m-_*g)&&(A=v*(m/w)+b*(-g/w)+(g*M-m*p)/w,S=v*(-_/w)+b*(f/w)-(f*M-_*p)/w,v=A,b=S):(C=Td(t),v=C.x+(~x[0].indexOf("%")?v/100*C.width:v),b=C.y+(~(x[1]||x[0]).indexOf("%")?b/100*C.height:b)),i||i!==!1&&a.smooth?(p=v-c,M=b-h,a.xOffset=u+(p*f+M*g)-p,a.yOffset=d+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[tn]="0px 0px",o&&(mi(o,a,"xOrigin",c,v),mi(o,a,"yOrigin",h,b),mi(o,a,"xOffset",u,a.xOffset),mi(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},Sr=function(t,e){var n=t._gsap||new hd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=fn(t,tn)||"0",h,u,d,f,_,g,m,p,M,x,v,b,C,w,A,S,y,L,U,D,O,k,G,q,V,rt,lt,mt,Pt,Wt,Y,et;return h=u=d=g=m=p=M=x=v=0,f=_=1,n.svg=!!(t.getCTM&&Ed(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Se]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Se]!=="none"?l[Se]:"")),i.scale=i.rotate=i.translate="none"),w=gc(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),Il(t,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,C=n.yOrigin||0,w!==Mr&&(L=w[0],U=w[1],D=w[2],O=w[3],h=k=w[4],u=G=w[5],w.length===6?(f=Math.sqrt(L*L+U*U),_=Math.sqrt(O*O+D*D),g=L||U?gs(U,L)*zi:0,M=D||O?gs(D,O)*zi+g:0,M&&(_*=Math.abs(Math.cos(M*bs))),n.svg&&(h-=b-(b*L+C*D),u-=C-(b*U+C*O))):(et=w[6],Wt=w[7],lt=w[8],mt=w[9],Pt=w[10],Y=w[11],h=w[12],u=w[13],d=w[14],A=gs(et,Pt),m=A*zi,A&&(S=Math.cos(-A),y=Math.sin(-A),q=k*S+lt*y,V=G*S+mt*y,rt=et*S+Pt*y,lt=k*-y+lt*S,mt=G*-y+mt*S,Pt=et*-y+Pt*S,Y=Wt*-y+Y*S,k=q,G=V,et=rt),A=gs(-D,Pt),p=A*zi,A&&(S=Math.cos(-A),y=Math.sin(-A),q=L*S-lt*y,V=U*S-mt*y,rt=D*S-Pt*y,Y=O*y+Y*S,L=q,U=V,D=rt),A=gs(U,L),g=A*zi,A&&(S=Math.cos(A),y=Math.sin(A),q=L*S+U*y,V=k*S+G*y,U=U*S-L*y,G=G*S-k*y,L=q,k=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=be(Math.sqrt(L*L+U*U+D*D)),_=be(Math.sqrt(G*G+et*et)),A=gs(k,G),M=Math.abs(A)>2e-4?A*zi:0,v=Y?1/(Y<0?-Y:Y):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ad(fn(t,Se)),q&&t.setAttribute("transform",q))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=be(f),n.scaleY=be(_),n.rotation=be(g)+a,n.rotationX=be(m)+a,n.rotationY=be(p)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[tn]=Ao(c)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?Hx:wd?Cd:Vx,n.uncache=0,n},Ao=function(t){return(t=t.split(" "))[0]+" "+t[1]},Aa=function(t,e,n){var i=Ve(e);return be(parseFloat(e)+parseFloat(Ei(t,"x",n+"px",i)))+i},Vx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Cd(t,e)},Ui="0deg",er="0px",Ni=") ",Cd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,x=n.zOrigin,v="",b=p==="auto"&&t&&t!==1||p===!0;if(x&&(u!==Ui||h!==Ui)){var C=parseFloat(h)*bs,w=Math.sin(C),A=Math.cos(C),S;C=parseFloat(u)*bs,S=Math.cos(C),o=Aa(M,o,w*S*-x),a=Aa(M,a,-Math.sin(C)*-x),l=Aa(M,l,A*S*-x+x)}m!==er&&(v+="perspective("+m+Ni),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(b||o!==er||a!==er||l!==er)&&(v+=l!==er||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ni),c!==Ui&&(v+="rotate("+c+Ni),h!==Ui&&(v+="rotateY("+h+Ni),u!==Ui&&(v+="rotateX("+u+Ni),(d!==Ui||f!==Ui)&&(v+="skew("+d+", "+f+Ni),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Ni),M.style[Se]=v||"translate(0, 0)"},Hx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,x=parseFloat(o),v=parseFloat(a),b,C,w,A,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=bs,c*=bs,b=Math.cos(l)*u,C=Math.sin(l)*u,w=Math.sin(l-c)*-d,A=Math.cos(l-c)*d,c&&(h*=bs,S=Math.tan(c-h),S=Math.sqrt(1+S*S),w*=S,A*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),b*=S,C*=S)),b=be(b),C=be(C),w=be(w),A=be(A)):(b=u,A=d,C=w=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=Ei(f,"x",o,"px"),v=Ei(f,"y",a,"px")),(_||g||m||p)&&(x=be(x+_-(_*b+g*w)+m),v=be(v+g-(_*C+g*A)+p)),(i||s)&&(S=f.getBBox(),x=be(x+i/100*S.width),v=be(v+s/100*S.height)),S="matrix("+b+","+C+","+w+","+A+","+x+","+v+")",f.setAttribute("transform",S),M&&(f.style[Se]=S)},Wx=function(t,e,n,i,s){var o=360,a=Oe(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?zi:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Gh)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Gh)%o-~~(c/o)*o)),t._pt=d=new Qe(t._pt,e,n,i,c,bx),d.e=h,d.u="deg",t._props.push(n),d},Yh=function(t,e){for(var n in e)t[n]=e[n];return t},Xx=function(t,e,n){var i=Yh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Se]=e,a=Sr(n,1),Ti(n,Se),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Se],o[Se]=e,a=Sr(n,1),o[Se]=c);for(l in si)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Ve(c),_=Ve(h),u=f!==_?Ei(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new Qe(t._pt,a,l,u,d-u,Rl),t._pt.u=_||0,t._props.push(l));Yh(a,i)};je("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});bo[t>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return Kn(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var Rd={name:"css",register:Ll,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,M,x,v,b,C,w,A,S;fc||Ll(),this.styles=this.styles||Sd(t),A=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(cn[g]&&ud(g,e,n,i,t,s)))){if(f=typeof h,_=bo[g],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=vr(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",yi.lastIndex=0,yi.test(c)||(m=Ve(c),p=Ve(h),p?m!==p&&(c=Ei(t,g,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),A.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Oe(c)&&~c.indexOf("random(")&&(c=vr(c)),Ve(c+"")||c==="auto"||(c+=pn.units[g]||Ve(Kn(t,g))||""),(c+"").charAt(1)==="="&&(c=Kn(t,g))):c=Kn(t,g),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in Fn&&(g==="autoAlpha"&&(d===1&&Kn(t,"visibility")==="hidden"&&u&&(d=0),A.push("visibility",0,a.visibility),mi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Fn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in si,x){if(this.styles.save(g),S=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=fn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var y=t.style.perspective;t.style.perspective=h,h=fn(t,"perspective"),y?t.style.perspective=y:Ti(t,"perspective")}u=parseFloat(h)}if(v||(b=t._gsap,b.renderTransform&&!e.parseTransform||Sr(t,e.parseTransform),C=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new Qe(this._pt,a,Se,0,1,b.renderTransform,b,0,-1),v.dep=1),g==="scale")this._pt=new Qe(this._pt,b,"scaleY",b.scaleY,(M?Ts(b.scaleY,M+u):u)-b.scaleY||0,Rl),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){A.push(tn,0,a[tn]),h=Gx(h),b.svg?Il(t,h,0,C,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&mi(this,b,"zOrigin",b.zOrigin,p),mi(this,a,g,Ao(c),Ao(h)));continue}else if(g==="svgOrigin"){Il(t,h,1,C,0,this);continue}else if(g in bd){Wx(this,b,g,d,M?Ts(d,M+h):h);continue}else if(g==="smoothOrigin"){mi(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){Xx(this,h,t);continue}}else g in a||(g=zs(g)||g);if(x||(u||u===0)&&(d||d===0)&&!Ex.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),p=Ve(h)||(g in pn.units?pn.units[g]:m),m!==p&&(d=Ei(t,g,c,p)),this._pt=new Qe(this._pt,x?b:a,g,d,(M?Ts(d,M+u):u)-d,!x&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Rx:Rl),this._pt.u=p||0,x&&S!==h?(this._pt.b=c,this._pt.e=S,this._pt.r=Cx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Ax);else if(g in a)zx.call(this,t,g,c,M?M+h:h);else if(g in t)this.add(t,g,c||t[g],M?M+h:h,i,s);else if(g!=="parseTransform"){ic(g,h);continue}x||(g in a?A.push(g,0,a[g]):typeof t[g]=="function"?A.push(g,2,t[g]()):A.push(g,1,c||t[g])),o.push(g)}}w&&_d(this)},render:function(t,e){if(e.tween._time||!pc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Kn,aliases:Fn,getSetter:function(t,e,n){var i=Fn[e];return i&&i.indexOf(",")<0&&(e=i),e in si&&e!==tn&&(t._gsap.x||Kn(t,"x"))?n&&zh===n?e==="scale"?Dx:Ix:(zh=n||{})&&(e==="scale"?Ux:Nx):t.style&&!tc(t.style[e])?Px:~e.indexOf("-")?Lx:uc(t,e)},core:{_removeProperty:Ti,_getMatrix:gc}};en.utils.checkPrefix=zs;en.core.getStyleSaver=Sd;(function(r,t,e,n){var i=je(r+","+t+","+e,function(s){si[s]=1});je(t,function(s){pn.units[s]="deg",bd[s]=1}),Fn[i[13]]=r+","+t,je(n,function(s){var o=s.split(":");Fn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");je("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){pn.units[r]="px"});en.registerPlugin(Rd);var Ct=en.registerPlugin(Rd)||en;Ct.core.Tween;class qx{constructor(t,e){this.camera=t,this.domElement=e,this.currentTarget=new P(0,0,0),this.targetPosition=new P(0,0,100),this.orbitRadius=95,this.orbitAngles={theta:0,phi:Math.PI/2},this.isDragging=!1,this.touchStartPos={x:0,y:0},this.previousTouch={x:0,y:0},this.velocity={x:0,y:0},this.touchPinchDist=0,this.friction=.93,this.minPhi=Math.PI*.38,this.maxPhi=Math.PI*.62,this.currentTween=null,this.setupIntuitiveTouchAndMouse()}setupIntuitiveTouchAndMouse(){const t=s=>{var a;return((a=document.getElementById("intro-screen"))==null?void 0:a.classList.contains("active"))?!0:!!s.closest(".modal-backdrop.active, .top-nav, .universe-hud, .cosmic-button, .wax-seal, .parchment-container, .memory-card-modal, .planet-3d-tag, .game-title-section.active")},e=s=>{if(!t(s.target)){if(s.touches.length===1)this.isDragging=!0,this.velocity.x=0,this.velocity.y=0,this.touchStartPos.x=s.touches[0].clientX,this.touchStartPos.y=s.touches[0].clientY,this.previousTouch.x=s.touches[0].clientX,this.previousTouch.y=s.touches[0].clientY;else if(s.touches.length===2){this.isDragging=!1;const o=s.touches[0].clientX-s.touches[1].clientX,a=s.touches[0].clientY-s.touches[1].clientY;this.touchPinchDist=Math.sqrt(o*o+a*a)}}},n=s=>{if(!t(s.target)){if(s.touches.length===1&&this.isDragging){s.cancelable&&s.preventDefault();const o=s.touches[0].clientX,a=s.touches[0].clientY,l=o-this.previousTouch.x,c=a-this.previousTouch.y,h=.0055;this.orbitAngles.theta-=l*h,this.orbitAngles.phi=Math.max(this.minPhi,Math.min(this.maxPhi,this.orbitAngles.phi-c*(h*.7))),this.velocity.x=-l*h,this.velocity.y=-c*(h*.7),this.previousTouch.x=o,this.previousTouch.y=a}else if(s.touches.length===2){s.cancelable&&s.preventDefault();const o=s.touches[0].clientX-s.touches[1].clientX,a=s.touches[0].clientY-s.touches[1].clientY,l=Math.sqrt(o*o+a*a);if(this.touchPinchDist>0){const c=this.touchPinchDist-l;this.orbitRadius=Math.max(40,Math.min(150,this.orbitRadius+c*.35))}this.touchPinchDist=l}}},i=()=>{this.isDragging=!1,this.touchPinchDist=0};window.addEventListener("touchstart",e,{passive:!0}),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",i,{passive:!0}),window.addEventListener("touchcancel",i,{passive:!0}),window.addEventListener("mousedown",s=>{t(s.target)||(this.isDragging=!0,this.velocity.x=0,this.velocity.y=0,this.previousTouch.x=s.clientX,this.previousTouch.y=s.clientY)}),window.addEventListener("mousemove",s=>{if(!this.isDragging)return;const o=s.clientX-this.previousTouch.x,a=s.clientY-this.previousTouch.y,l=.0045;this.orbitAngles.theta-=o*l,this.orbitAngles.phi=Math.max(this.minPhi,Math.min(this.maxPhi,this.orbitAngles.phi-a*(l*.7))),this.velocity.x=-o*l,this.velocity.y=-a*(l*.7),this.previousTouch.x=s.clientX,this.previousTouch.y=s.clientY}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("wheel",s=>{var a;(a=document.getElementById("intro-screen"))!=null&&a.classList.contains("active")||s.target.closest(".memory-card-modal")||s.target.closest(".parchment-container")||(this.orbitRadius=Math.max(40,Math.min(150,this.orbitRadius+s.deltaY*.07)))},{passive:!0})}moveTo(t,e,n=2,i="power2.inOut",s=null){this.currentTween&&this.currentTween.kill(),this.velocity.x=0,this.velocity.y=0;const o=t instanceof P?t:new P(t.x,t.y,t.z),a=e instanceof P?e:new P(e.x,e.y,e.z),l=o.clone().sub(a),c=l.length(),h=Math.acos(Math.max(-1,Math.min(1,l.y/c))),u=Math.atan2(l.x,l.z),d={tx:this.currentTarget.x,ty:this.currentTarget.y,tz:this.currentTarget.z,radius:this.orbitRadius,theta:this.orbitAngles.theta,phi:this.orbitAngles.phi},f=u-this.orbitAngles.theta,_=Math.max(-.06,Math.min(.06,f*.08));this.currentTween=Ct.to(d,{tx:a.x,ty:a.y,tz:a.z,radius:c,theta:u,phi:h,duration:n,ease:i,onUpdate:()=>{if(this.currentTarget.set(d.tx,d.ty,d.tz),this.orbitRadius=d.radius,this.orbitAngles.theta=d.theta,this.orbitAngles.phi=d.phi,this.applyOrbitPosition(),this.currentTween){const g=this.currentTween.progress();this.camera.rotation.z=Math.sin(g*Math.PI)*_}},onComplete:()=>{this.camera.rotation.z=0,s&&s()}})}escortCompanionToPlanet(t,e,n=3.2,i=null){this.currentTween&&this.currentTween.kill(),this.velocity.x=0,this.velocity.y=0;const s=window.innerWidth<768,o=s?new P(1.5,4,18):new P(12,5,24),a=this.camera.position.clone(),l=e.clone().add(o),c=e.clone(),h={t:0};this.currentTween=Ct.to(h,{t:1,duration:n,ease:"power2.inOut",onUpdate:()=>{const u=h.t,d=t.position.clone(),f=s?new P(-14,5.5,14):new P(-18,6.5,18),_=d.clone().add(f);let g;if(u<.22){const M=u/.22,x=M*M;g=a.clone().lerp(_,x)}else if(u<=.84)g=_;else{const M=(u-.84)/.16,x=M*(2-M);g=_.clone().lerp(l,x)}this.camera.position.copy(g);let m;if(u<=.84)m=d.clone().add(new P(6,1.2,-3));else{const M=(u-.84)/.16;m=d.clone().lerp(c,M)}this.currentTarget.copy(m),this.camera.lookAt(this.currentTarget);const p=Math.sin(u*Math.PI)*(s?.04:.065);this.camera.rotation.z=p},onComplete:()=>{this.camera.position.copy(l),this.currentTarget.copy(c),this.camera.lookAt(this.currentTarget),this.camera.rotation.z=0;const u=this.camera.position.clone().sub(this.currentTarget);this.orbitRadius=u.length(),this.orbitAngles.phi=Math.acos(Math.max(-1,Math.min(1,u.y/this.orbitRadius))),this.orbitAngles.theta=Math.atan2(u.x,u.z),i&&i()}})}applyOrbitPosition(){this.camera.position.x=this.currentTarget.x+this.orbitRadius*Math.sin(this.orbitAngles.phi)*Math.sin(this.orbitAngles.theta),this.camera.position.y=this.currentTarget.y+this.orbitRadius*Math.cos(this.orbitAngles.phi),this.camera.position.z=this.currentTarget.z+this.orbitRadius*Math.sin(this.orbitAngles.phi)*Math.cos(this.orbitAngles.theta),this.camera.lookAt(this.currentTarget)}update(t,e,n){if(!this.currentTween||!this.currentTween.isActive()){if(!this.isDragging)if(Math.abs(this.velocity.x)>1e-4||Math.abs(this.velocity.y)>1e-4)this.orbitAngles.theta+=this.velocity.x,this.orbitAngles.phi=Math.max(this.minPhi,Math.min(this.maxPhi,this.orbitAngles.phi+this.velocity.y)),this.velocity.x*=this.friction,this.velocity.y*=this.friction;else{this.orbitAngles.theta+=t*.018;const i=Math.PI/2;this.orbitAngles.phi+=(i-this.orbitAngles.phi)*.04}this.applyOrbitPosition()}}shake(t=1,e=.35){this.shakeTween&&this.shakeTween.kill();const n={intensity:t};this.shakeTween=Ct.to(n,{intensity:0,duration:e,ease:"power2.out",onUpdate:()=>{const i=n.intensity;i>.01&&(this.camera.position.x+=(Math.random()-.5)*i*1.6,this.camera.position.y+=(Math.random()-.5)*i*1.6,this.camera.position.z+=(Math.random()-.5)*i*1)},onComplete:()=>{this.shakeTween=null}})}}class Yx{constructor(){this.config=ei.audio,this.isPlaying=!1,this.isMuted=!1,this.audioElement=null,this.hasCustomAudio=!1,this.audioCtx=null,this.synthGain=null,this.synthInterval=null,this.padOscillators=[],this.initAudioElement()}initAudioElement(){try{this.audioElement=new Audio,this.audioElement.src=this.config.musicUrl,this.audioElement.loop=!0,this.audioElement.volume=this.config.volume||.6,this.audioElement.addEventListener("canplaythrough",()=>{this.hasCustomAudio=!0}),this.audioElement.addEventListener("error",()=>{this.hasCustomAudio=!1})}catch{this.hasCustomAudio=!1}}initWebAudio(){if(!this.audioCtx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t,this.synthGain=this.audioCtx.createGain(),this.synthGain.gain.setValueAtTime(.15,this.audioCtx.currentTime),this.synthGain.connect(this.audioCtx.destination))}this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}togglePlay(){return this.isPlaying?this.pause():this.play(),this.isPlaying}play(){this.initWebAudio(),this.hasCustomAudio&&this.audioElement?this.audioElement.play().then(()=>{this.isPlaying=!0}).catch(()=>{this.startAmbientSynth(),this.isPlaying=!0}):(this.startAmbientSynth(),this.isPlaying=!0)}pause(){this.audioElement&&this.hasCustomAudio&&this.audioElement.pause(),this.stopAmbientSynth(),this.isPlaying=!1}startAmbientSynth(){if(!this.audioCtx||this.synthInterval)return;const t=[[155.56,196,233.08,311.13],[130.81,196,233.08,261.63],[103.83,155.56,207.65,261.63],[116.54,174.61,233.08,293.66]];let e=0;const n=()=>{if(!this.audioCtx||!this.isPlaying)return;const i=this.audioCtx.currentTime,s=t[e];e=(e+1)%t.length,s.forEach((o,a)=>{const l=this.audioCtx.createOscillator(),c=this.audioCtx.createGain(),h=this.audioCtx.createBiquadFilter();l.type=a%2===0?"sine":"triangle",l.frequency.setValueAtTime(o,i),h.type="lowpass",h.frequency.setValueAtTime(450+Math.sin(i)*100,i),c.gain.setValueAtTime(.001,i),c.gain.exponentialRampToValueAtTime(.045,i+2.5),c.gain.exponentialRampToValueAtTime(.001,i+7.5),l.connect(h),h.connect(c),c.connect(this.synthGain),l.start(i),l.stop(i+8)}),this.playStardustChime()};n(),this.synthInterval=setInterval(n,7e3)}stopAmbientSynth(){this.synthInterval&&(clearInterval(this.synthInterval),this.synthInterval=null)}playStardustChime(){if(!this.audioCtx||!this.isPlaying)return;const t=this.audioCtx.currentTime,e=[587.33,659.25,783.99,880,1046.5,1174.66,1318.51],n=e[Math.floor(Math.random()*e.length)],i=this.audioCtx.createOscillator(),s=this.audioCtx.createGain();i.type="sine",i.frequency.setValueAtTime(n,t+1.2),s.gain.setValueAtTime(.001,t+1.2),s.gain.exponentialRampToValueAtTime(.03,t+1.3),s.gain.exponentialRampToValueAtTime(1e-4,t+3.5),i.connect(s),s.connect(this.synthGain),i.start(t+1.2),i.stop(t+3.8)}playClickSound(){if(this.audioCtx)try{const t=this.audioCtx.currentTime,e=this.audioCtx.createOscillator(),n=this.audioCtx.createGain();e.type="sine",e.frequency.setValueAtTime(880,t),e.frequency.exponentialRampToValueAtTime(1320,t+.08),n.gain.setValueAtTime(.04,t),n.gain.exponentialRampToValueAtTime(.001,t+.12),e.connect(n),n.connect(this.audioCtx.destination),e.start(t),e.stop(t+.12)}catch{}}playHeartbeatSound(){if(this.audioCtx)try{const t=this.audioCtx.currentTime,e=this.audioCtx.createOscillator(),n=this.audioCtx.createGain();e.type="sine",e.frequency.setValueAtTime(65,t),e.frequency.exponentialRampToValueAtTime(40,t+.12),n.gain.setValueAtTime(.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.14),e.connect(n),n.connect(this.audioCtx.destination),e.start(t),e.stop(t+.15);const i=this.audioCtx.createOscillator(),s=this.audioCtx.createGain();i.type="sine",i.frequency.setValueAtTime(75,t+.15),i.frequency.exponentialRampToValueAtTime(45,t+.28),s.gain.setValueAtTime(.07,t+.15),s.gain.exponentialRampToValueAtTime(.001,t+.32),i.connect(s),s.connect(this.audioCtx.destination),i.start(t+.15),i.stop(t+.35)}catch{}}playTypewriterKey(){if(this.initWebAudio(),!!this.audioCtx)try{const t=this.audioCtx.currentTime,e=this.audioCtx.createOscillator(),n=this.audioCtx.createGain();e.type="triangle";const i=[659.25,783.99,880,987.77,1046.5],s=i[Math.floor(Math.random()*i.length)];e.frequency.setValueAtTime(s,t),n.gain.setValueAtTime(.015,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.05),e.connect(n),n.connect(this.audioCtx.destination),e.start(t),e.stop(t+.06)}catch{}}playStardustChime(){if(this.initWebAudio(),!!this.audioCtx)try{const t=this.audioCtx.currentTime;[1046.5,1318.51,1567.98,2093].forEach((e,n)=>{const i=this.audioCtx.createOscillator(),s=this.audioCtx.createGain();i.type="sine",i.frequency.setValueAtTime(e,t+n*.06),s.gain.setValueAtTime(.02,t+n*.06),s.gain.exponentialRampToValueAtTime(1e-4,t+n*.06+.35),i.connect(s),s.connect(this.audioCtx.destination),i.start(t+n*.06),i.stop(t+n*.06+.4)})}catch{}}playSupernovaBlast(){if(this.initWebAudio(),!!this.audioCtx)try{const t=this.audioCtx.currentTime,e=[261.63,329.63,392,523.25,659.25];e.forEach((o,a)=>{const l=this.audioCtx.createOscillator(),c=this.audioCtx.createGain(),h=this.audioCtx.createBiquadFilter();l.type="sine",l.frequency.setValueAtTime(o*.75,t),l.frequency.exponentialRampToValueAtTime(o*1.5,t+1.35),h.type="lowpass",h.frequency.setValueAtTime(300,t),h.frequency.exponentialRampToValueAtTime(3200,t+1.35),c.gain.setValueAtTime(.001,t),c.gain.linearRampToValueAtTime(.045/e.length,t+1.25),c.gain.exponentialRampToValueAtTime(1e-4,t+1.42),l.connect(h),h.connect(c),c.connect(this.audioCtx.destination),l.start(t),l.stop(t+1.45)});const n=this.audioCtx.createOscillator(),i=this.audioCtx.createGain();n.type="sine",n.frequency.setValueAtTime(95,t+1.35),n.frequency.exponentialRampToValueAtTime(28,t+3.8),i.gain.setValueAtTime(.001,t+1.35),i.gain.linearRampToValueAtTime(.22,t+1.45),i.gain.exponentialRampToValueAtTime(1e-4,t+4.2),n.connect(i),i.connect(this.audioCtx.destination),n.start(t+1.35),n.stop(t+4.4),[155.56,233.08,311.13,392,466.16,587.33,783.99,1174.66].forEach((o,a)=>{const l=this.audioCtx.createOscillator(),c=this.audioCtx.createGain(),h=this.audioCtx.createBiquadFilter();l.type="sine",l.frequency.setValueAtTime(o,t+1.4),h.type="lowpass",h.frequency.setValueAtTime(1800,t+1.4),h.frequency.exponentialRampToValueAtTime(600,t+4.5);const u=a*.04;c.gain.setValueAtTime(.001,t+1.4+u),c.gain.linearRampToValueAtTime(.055,t+1.55+u),c.gain.exponentialRampToValueAtTime(1e-4,t+4.5),l.connect(h),h.connect(c),c.connect(this.audioCtx.destination),l.start(t+1.4+u),l.stop(t+4.8)}),[1046.5,1318.51,1567.98,2093,2637.02].forEach((o,a)=>{const l=this.audioCtx.createOscillator(),c=this.audioCtx.createGain();l.type="sine",l.frequency.setValueAtTime(o,t+1.7+a*.14),c.gain.setValueAtTime(.025,t+1.7+a*.14),c.gain.exponentialRampToValueAtTime(1e-4,t+1.7+a*.14+1.8),l.connect(c),c.connect(this.audioCtx.destination),l.start(t+1.7+a*.14),l.stop(t+1.7+a*.14+2)})}catch{}}playSolarHitSound(t=1){if(this.initWebAudio(),!!this.audioCtx)try{const e=this.audioCtx.currentTime;if(t===1){[523.25,1046.5,1567.98].forEach((o,a)=>{const l=this.audioCtx.createOscillator(),c=this.audioCtx.createGain();l.type="sine",l.frequency.setValueAtTime(o,e+a*.02);const h=a===0?.08:.04;c.gain.setValueAtTime(h,e+a*.02),c.gain.exponentialRampToValueAtTime(1e-4,e+a*.02+.45),l.connect(c),c.connect(this.audioCtx.destination),l.start(e+a*.02),l.stop(e+a*.02+.5)});const i=this.audioCtx.createOscillator(),s=this.audioCtx.createGain();i.type="sine",i.frequency.setValueAtTime(90,e),i.frequency.exponentialRampToValueAtTime(45,e+.09),s.gain.setValueAtTime(.06,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.1),i.connect(s),s.connect(this.audioCtx.destination),i.start(e),i.stop(e+.11)}else if(t===2){[659.25,987.77,1318.51,1975.53].forEach((o,a)=>{const l=this.audioCtx.createOscillator(),c=this.audioCtx.createGain();l.type="sine",l.frequency.setValueAtTime(o,e+a*.025);const h=a===0?.09:.05;c.gain.setValueAtTime(h,e+a*.025),c.gain.exponentialRampToValueAtTime(1e-4,e+a*.025+.65),l.connect(c),c.connect(this.audioCtx.destination),l.start(e+a*.025),l.stop(e+a*.025+.7)});const i=this.audioCtx.createOscillator(),s=this.audioCtx.createGain();i.type="sine",i.frequency.setValueAtTime(110,e),i.frequency.exponentialRampToValueAtTime(50,e+.12),s.gain.setValueAtTime(.08,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.13),i.connect(s),s.connect(this.audioCtx.destination),i.start(e),i.stop(e+.14)}else{[783.99,1046.5,1318.51,1567.98,2093].forEach((o,a)=>{const l=this.audioCtx.createOscillator(),c=this.audioCtx.createGain();l.type="sine",l.frequency.setValueAtTime(o,e+a*.03),c.gain.setValueAtTime(.07,e+a*.03),c.gain.exponentialRampToValueAtTime(1e-4,e+a*.03+.95),l.connect(c),c.connect(this.audioCtx.destination),l.start(e+a*.03),l.stop(e+a*.03+1)});const i=this.audioCtx.createOscillator(),s=this.audioCtx.createGain();i.type="sine",i.frequency.setValueAtTime(130,e),i.frequency.exponentialRampToValueAtTime(40,e+.22),s.gain.setValueAtTime(.1,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.24),i.connect(s),s.connect(this.audioCtx.destination),i.start(e),i.stop(e+.25)}}catch{}}}class Zx{constructor(t,e="high"){this.scene=t,this.quality=e,this.shootingStars=[],this.goldenStar=null,this.createStarLayers(),this.createGoldenEasterEggStar()}createStarLayers(){let t=4e3;this.quality==="medium"&&(t=2200),this.quality==="low"&&(t=1e3);const e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t),o=[new Lt(16777215),new Lt(16111487),new Lt(15967922),new Lt(7395071),new Lt(16763890)];for(let l=0;l<t;l++){const c=250+Math.random()*800,h=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1);e[l*3]=c*Math.sin(u)*Math.cos(h),e[l*3+1]=c*Math.sin(u)*Math.sin(h),e[l*3+2]=c*Math.cos(u);const d=o[Math.floor(Math.random()*o.length)];n[l*3]=d.r,n[l*3+1]=d.g,n[l*3+2]=d.b,i[l]=Math.random()*3.5+1.2,s[l]=Math.random()*Math.PI*2}const a=new me;a.setAttribute("position",new pe(e,3)),a.setAttribute("color",new pe(n,3)),a.setAttribute("size",new pe(i,1)),a.setAttribute("phase",new pe(s,1)),this.starMaterial=new Ln({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)}},vertexShader:`
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float size;
        attribute float phase;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vColor = color;
          // Efecto de parpadeo (twinkle) suave
          float twinkle = sin(uTime * 1.8 + phase) * 0.4 + 0.6;
          vAlpha = twinkle;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z) * twinkle;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          // Crear un punto circular suave con caída radial
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float intensity = pow(1.0 - (dist * 2.0), 1.5);
          gl_FragColor = vec4(vColor, vAlpha * intensity);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,vertexColors:!0}),this.starPoints=new Si(a,this.starMaterial),this.scene.add(this.starPoints)}createGoldenEasterEggStar(){const t=new kt(1.5,16,16),e=new fe({color:16769126,wireframe:!1});this.goldenStar=new K(t,e),this.goldenStar.position.set(45,35,-40),this.goldenStar.userData={isEasterEggStar:!0};const n=new kt(3.5,16,16),i=new fe({color:16111487,transparent:!0,opacity:.35,blending:jt}),s=new K(n,i);this.goldenStar.add(s),this.scene.add(this.goldenStar)}spawnShootingStar(){if(this.shootingStars.length>=3)return;const t=(Math.random()-.5)*300,e=80+Math.random()*80,n=-50-Math.random()*150,i=40+Math.random()*30,s=new P(-1.2,-.6,.4).normalize(),o=[new P(0,0,0),s.clone().multiplyScalar(-i)],a=new me().setFromPoints(o),l=new Po({color:16772292,transparent:!0,opacity:.9,blending:jt,linewidth:2}),c=new Wl(a,l);c.position.set(t,e,n);const h={mesh:c,dir:s,speed:180+Math.random()*100,life:0,maxLife:1.4};this.shootingStars.push(h),this.scene.add(c)}update(t,e){if(this.starMaterial&&(this.starMaterial.uniforms.uTime.value=e),this.starPoints&&(this.starPoints.rotation.y=e*.008,this.starPoints.rotation.x=e*.003),this.goldenStar){const n=1+Math.sin(e*4)*.25;this.goldenStar.scale.set(n,n,n)}Math.random()<.015&&this.spawnShootingStar();for(let n=this.shootingStars.length-1;n>=0;n--){const i=this.shootingStars[n];i.life+=t,i.mesh.position.addScaledVector(i.dir,i.speed*t);const s=1-i.life/i.maxLife;i.mesh.material.opacity=Math.max(0,s),i.life>=i.maxLife&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.shootingStars.splice(n,1))}}}class $x{constructor(t,e="high"){this.scene=t,this.quality=e,this.galaxyGroup=new Kt,this.galaxyGroup.position.set(25,-12,-420),this.galaxyGroup.rotation.x=Math.PI/3.4,this.galaxyGroup.rotation.z=-Math.PI/5.2,this.scene.add(this.galaxyGroup),this.createRealisticNebulaClouds(),this.createRealisticGalaxyStars(),this.createGalacticCoreGlow()}createRealisticNebulaClouds(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createRadialGradient(256,256,10,256,256,256);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.2,"rgba(255, 230, 210, 0.85)"),n.addColorStop(.45,"rgba(180, 100, 230, 0.45)"),n.addColorStop(.7,"rgba(70, 40, 150, 0.18)"),n.addColorStop(.9,"rgba(30, 20, 80, 0.05)"),n.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=n,e.fillRect(0,0,512,512);const i=new Jn(t);[{color:16765286,size:220,pos:[0,0,0],opacity:.28},{color:15087958,size:300,pos:[-40,5,30],opacity:.22},{color:10309341,size:360,pos:[50,-5,-40],opacity:.2},{color:7395071,size:340,pos:[-80,8,-60],opacity:.18},{color:16196997,size:280,pos:[70,-8,60],opacity:.19},{color:4415982,size:400,pos:[0,0,0],opacity:.15}].forEach(o=>{const a=new Hs(o.size,o.size),l=new fe({map:i,color:o.color,transparent:!0,opacity:o.opacity,blending:jt,depthWrite:!1,side:ke}),c=new K(a,l);c.position.set(...o.pos),c.rotation.x=(Math.random()-.5)*.15,c.rotation.y=(Math.random()-.5)*.15,c.rotation.z=Math.random()*Math.PI*2,this.galaxyGroup.add(c)})}createRealisticGalaxyStars(){let t=65e3;this.quality==="medium"&&(t=38e3),this.quality==="low"&&(t=18e3);const e=4,n=360,i=55,s=new Float32Array(t*3),o=new Float32Array(t*3),a=new Float32Array(t),l=new Float32Array(t),c=new Lt(16774102),h=new Lt(16763554),u=new Lt(16745554),d=new Lt(16722554),f=new Lt(8444159),_=new Lt(10995179),g=new Lt(11895693);for(let p=0;p<t;p++){let M,x,v,b;if(p<t*.32){M=Math.pow(Math.random(),2.2)*i;const w=Math.random()*Math.PI*2,A=Math.acos(Math.random()*2-1);x=M*Math.sin(A)*Math.cos(w)*1.35,v=M*Math.cos(A)*.42,b=M*Math.sin(A)*Math.sin(w)*.85;const S=M/i,y=c.clone().lerp(h,S);Math.random()<.25&&y.lerp(u,Math.random()*.6),o[p*3]=y.r,o[p*3+1]=y.g,o[p*3+2]=y.b,a[p]=Math.random()*2.8+1.2,l[p]=Math.random()}else{M=i+Math.pow(Math.random(),1.15)*(n-i);const w=(M-i)/(n-i),S=p%e*(Math.PI*2/e),y=Math.log(M/i+.1)*2.4,L=S+y,U=Math.pow(Math.random(),2.5)*(18+w*38),D=Math.random()*Math.PI*2;x=Math.cos(L)*M+Math.cos(D)*U,v=(Math.random()-.5)*(12+w*26)*Math.pow(1-w*.3,2),b=Math.sin(L)*M+Math.sin(D)*U;let O;Math.random()<.18?O=d.clone().lerp(h,Math.random()*.4):w<.4?O=u.clone().lerp(f,w/.4):w<.8?O=f.clone().lerp(_,(w-.4)/.4):O=_.clone().lerp(g,(w-.8)/.2),o[p*3]=O.r,o[p*3+1]=O.g,o[p*3+2]=O.b;const G=Math.random()<.06;a[p]=G?Math.random()*4.2+2.5:Math.random()*2.2+.8,l[p]=Math.random()}s[p*3]=x,s[p*3+1]=v,s[p*3+2]=b}const m=new me;m.setAttribute("position",new pe(s,3)),m.setAttribute("color",new pe(o,3)),m.setAttribute("aSize",new pe(a,1)),m.setAttribute("aTemp",new pe(l,1)),this.material=new Ln({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)}},vertexShader:`
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float aSize;
        attribute float aTemp;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vColor = color;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // Parpadeo estelar suave y armónico
          float twinkle = sin(uTime * 0.65 + aTemp * 6.28318) * 0.18 + 0.82;
          
          // Escala óptica con perspectiva astronómica
          gl_PointSize = aSize * uPixelRatio * (280.0 / -mvPosition.z) * twinkle;
          gl_Position = projectionMatrix * mvPosition;
          
          vAlpha = 0.6 + aTemp * 0.4;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          // 1. Núcleo estelar brillante (Airy Disk de alta energía)
          float core = 1.0 - smoothstep(0.0, 0.12, dist);
          
          // 2. Halo difuso exterior (Caída exponencial de luz estelar)
          float halo = exp(-dist * 5.2);
          
          // 3. Fusión de luz estelar de alta pureza
          float intensity = core * 1.8 + halo * 0.9;
          
          // Corona ligeramente blanca en el centro de cada estrella
          vec3 finalColor = mix(vColor, vec3(1.0), core * 0.65);
          
          gl_FragColor = vec4(finalColor, vAlpha * intensity);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,vertexColors:!0}),this.points=new Si(m,this.material),this.galaxyGroup.add(this.points)}createGalacticCoreGlow(){const t=new kt(14,32,32);t.scale(1.4,.55,1);const e=new fe({color:16775917,transparent:!0,opacity:.65,blending:jt}),n=new K(t,e);this.galaxyGroup.add(n);const i=new kt(28,24,24);i.scale(1.5,.5,1.1);const s=new fe({color:16765286,transparent:!0,opacity:.35,blending:jt}),o=new K(i,s);this.galaxyGroup.add(o);const a=new kt(55,20,20);a.scale(1.6,.45,1.2);const l=new fe({color:10309341,transparent:!0,opacity:.18,blending:jt}),c=new K(a,l);this.galaxyGroup.add(c)}update(t,e){this.material&&(this.material.uniforms.uTime.value=e),this.galaxyGroup&&(this.galaxyGroup.rotation.y=e*.0035)}}class Jx{constructor(t,e,n="high"){this.scene=t,this.camera=e,this.quality=n,this.planets=[],this.hoveredPlanet=null,this.moon=null,this.raycaster=new Cu,this.mouse=new ct,this.initTextures(),this.initPlanets(),this.initRomanticMoon()}initTextures(){this.textures=[this.createQuartzEarthTexture(),this.createGasGiantTexture(),this.createCrimsonMagmaTexture(),this.createIceAuroraTexture()],this.cloudsTexture=this.createCloudsTexture(),this.saturnRingsTexture=this.createSaturnRingsTexture()}createQuartzEarthTexture(){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#fca3b9"),n.addColorStop(.5,"#f47293"),n.addColorStop(1,"#8b264e"),e.fillStyle=n,e.fillRect(0,0,512,256),e.fillStyle="#ffe3ec";for(let s=0;s<35;s++){const o=Math.random()*512,a=40+Math.random()*176,l=18+Math.random()*45;e.beginPath(),e.arc(o,a,l,0,Math.PI*2),e.fill()}e.fillStyle="#fff4cc",e.fillRect(0,0,512,24),e.fillRect(0,232,512,24);const i=new Jn(t);return i.wrapS=Un,i}createCloudsTexture(){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d");e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,512,256);for(let i=0;i<60;i++){const s=Math.random()*512,o=Math.random()*256,a=25+Math.random()*70,l=8+Math.random()*18;e.beginPath(),e.ellipse(s,o,a,l,Math.random()*.4,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill()}const n=new Jn(t);return n.wrapS=Un,n}createGasGiantTexture(){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d"),n=["#f5d77f","#d49b28","#ffd885","#b37714","#ffe8a3","#e0a936","#f7ebc6"],i=256/n.length;n.forEach((o,a)=>{e.fillStyle=o,e.fillRect(0,a*i,512,i+2)}),e.fillStyle="#fff2bf",e.beginPath(),e.ellipse(320,145,42,18,0,0,Math.PI*2),e.fill();const s=new Jn(t);return s.wrapS=Un,s}createSaturnRingsTexture(){const t=document.createElement("canvas");t.width=256,t.height=1;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,256,0);return n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.15,"rgba(245, 215, 127, 0.3)"),n.addColorStop(.35,"rgba(255, 235, 160, 0.95)"),n.addColorStop(.65,"rgba(255, 225, 140, 0.9)"),n.addColorStop(.68,"rgba(0,0,0,0)"),n.addColorStop(.72,"rgba(230, 185, 90, 0.8)"),n.addColorStop(.95,"rgba(210, 160, 60, 0.4)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,256,1),new Jn(t)}createCrimsonMagmaTexture(){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d");e.fillStyle="#1c030d",e.fillRect(0,0,512,256),e.fillStyle="#ff2b54";for(let i=0;i<50;i++){const s=Math.random()*512,o=Math.random()*256,a=8+Math.random()*32;e.beginPath(),e.arc(s,o,a,0,Math.PI*2),e.fill()}e.fillStyle="#ffd166";for(let i=0;i<25;i++){const s=Math.random()*512,o=Math.random()*256;e.fillRect(s,o,18+Math.random()*40,3+Math.random()*6)}const n=new Jn(t);return n.wrapS=Un,n}createIceAuroraTexture(){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#0077b6"),n.addColorStop(.5,"#0096c7"),n.addColorStop(1,"#023e8a"),e.fillStyle=n,e.fillRect(0,0,512,256),e.fillStyle="#90e0ef";for(let s=0;s<40;s++){const o=Math.random()*512,a=Math.random()*256,l=12+Math.random()*38;e.beginPath(),e.arc(o,a,l,0,Math.PI*2),e.fill()}e.fillStyle="#caf0f8",e.beginPath(),e.arc(160,90,30,0,Math.PI*2),e.fill();const i=new Jn(t);return i.wrapS=Un,i}initPlanets(){const t=ei.memories,e=this.quality==="low"?32:64,n=[new P(-95,24,45),new P(-38,48,-85),new P(52,36,-75),new P(108,16,50)];t.forEach((i,s)=>{const o=new Kt,a=n[s]||new P((s-1.5)*55,20,-20);o.position.copy(a);const l=5.4,c=new kt(l,e,e),h=new re({map:this.textures[s]||null,color:i.color||16777215,emissive:i.emissive||2229521,emissiveIntensity:.85,roughness:s===1?.45:s===2?.3:.2,metalness:s===0?.15:.1}),u=new K(c,h);u.userData={type:"memoryPlanet",index:s,memoryId:i.id,title:i.title,data:i},o.add(u);const d=new kt(l*1.18,32,32),f=new fe({color:i.color,transparent:!0,opacity:.3,blending:jt,side:Le}),_=new K(d,f);o.add(_);let g=null,m=null,p=null,M=null,x=null,v=null;if(s===0){const y=new kt(l*1.03,32,32),L=new re({map:this.cloudsTexture,transparent:!0,opacity:.5,blending:jt});g=new K(y,L),o.add(g);const U=new kt(1.1,16,16),D=new re({color:16777215,emissive:16556985,emissiveIntensity:.9,roughness:.2});p=new K(U,D),p.position.set(11,2,0),o.add(p)}else if(s===1){const y=new Xi(l*1.45,l*2.6,64),L=y.attributes.position,U=y.attributes.uv;for(let O=0;O<L.count;O++){const k=L.getX(O),G=L.getY(O),V=(Math.sqrt(k*k+G*G)-l*1.45)/(l*2.6-l*1.45);U.setXY(O,V,.5)}const D=new fe({map:this.saturnRingsTexture,color:16774348,transparent:!0,opacity:.88,side:ke,blending:jt});M=new K(y,D),M.rotation.x=Math.PI/2.35,o.add(M)}else if(s===2){m=new Kt;const y=new $l(.32,0),L=new re({color:4854304,emissive:16724821,emissiveIntensity:.5,roughness:.8});for(let U=0;U<28;U++){const D=new K(y,L),O=U/28*Math.PI*2,k=l*(1.6+Math.random()*.7);D.position.set(Math.cos(O)*k,(Math.random()-.5)*2.2,Math.sin(O)*k),D.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),m.add(D)}o.add(m)}else if(s===3){const y=new Xi(l*1.35,l*1.5,48),L=new fe({color:9494767,transparent:!0,opacity:.45,side:ke,blending:jt});x=new K(y,L),x.rotation.y=Math.PI/2,o.add(x),v=new Kt;const U=new Xi(.5,l*.6,24),D=new fe({color:7395071,transparent:!0,opacity:.6,blending:jt,side:ke}),O=new K(U,D);O.position.y=l*.98,O.rotation.x=Math.PI/2;const k=O.clone();k.position.y=-l*.98,v.add(O),v.add(k),o.add(v)}const b=this.quality==="low"?14:28,C=new me,w=new Float32Array(b*3);for(let y=0;y<b;y++){const L=y/b*Math.PI*2,U=l*(1.7+Math.random()*.8);w[y*3]=Math.cos(L)*U,w[y*3+1]=(Math.random()-.5)*2,w[y*3+2]=Math.sin(L)*U}C.setAttribute("position",new pe(w,3));const A=new Us({color:16777215,size:1,transparent:!0,opacity:.85,blending:jt}),S=new Si(C,A);o.add(S),this.scene.add(o),this.planets.push({group:o,mesh:u,halo:_,orbitalPoints:S,cloudsMesh:g,crystalMoon:p,saturnRing:M,asteroidGroup:m,polarRing:x,aurorasGroup:v,basePos:a.clone(),data:i,index:s,hoverScale:1,floatOffset:Math.random()*Math.PI*2})})}initRomanticMoon(){const t=new Kt;t.position.set(0,75,-135);const e=new kt(6.2,32,32),n=new re({color:16775917,emissive:9072693,emissiveIntensity:.9,roughness:.55}),i=new K(e,n);i.userData={type:"moon",isMoon:!0},t.add(i);const s=new re({color:15260861,emissive:4864536,emissiveIntensity:.5,roughness:.8});[{r:1.1,pos:[2.8,1.2,4.8]},{r:.8,pos:[-3.2,2.5,4.2]},{r:1.4,pos:[-1.5,-3.8,4.4]},{r:.9,pos:[3.5,-2.4,4.1]},{r:.6,pos:[.5,3.4,4.9]}].forEach(It=>{const gt=new Te(It.r,It.r*1.15,.35,16),R=new K(gt,s),T=new P(...It.pos).normalize().multiplyScalar(6.15);R.position.copy(T),R.quaternion.setFromUnitVectors(new P(0,1,0),T.clone().normalize()),t.add(R)});const o=new kt(6.6,24,24),a=new fe({color:16111487,transparent:!0,opacity:.35,blending:jt,side:Le}),l=new K(o,a);t.add(l);const c=new Kt;c.position.set(0,6.1,.4),c.scale.set(1.4,1.4,1.4),t.add(c);const h=new re({color:16777215,roughness:.3,metalness:.05}),u=new re({color:1118481,roughness:.35}),d=new re({color:14222377,roughness:.4,emissive:7208984,emissiveIntensity:.4}),f=new kt(.85,16,16);f.scale(.85,1.15,.85);const _=new K(f,h);_.position.set(0,.9,0),c.add(_);const g=new kt(.42,12,12);g.scale(.9,.7,.4);const m=new K(g,u);m.position.set(0,1,-.72),c.add(m);const p=new Bn(.52,.09,8,20);p.rotateX(Math.PI/2);const M=new K(p,d);M.position.set(0,1.85,0),c.add(M);const x=new Kt;x.position.set(0,2.3,.1),c.add(x);const v=new kt(.78,16,16),b=new K(v,h);b.position.set(0,.2,-.15),x.add(b);const C=new Te(.48,.65,1.15,16);C.rotateX(Math.PI/2);const w=new K(C,h);w.position.set(0,0,.55),x.add(w);const A=new kt(.24,16,16),S=new K(A,u);S.position.set(0,.15,1.18),x.add(S);const y=new re({color:328965,roughness:.1,metalness:.2}),L=new fe({color:16777215}),U=new kt(.18,16,16);U.scale(.75,1.25,.45);const D=new K(U,y);D.position.set(.36,.38,.52),D.rotation.y=.32,D.rotation.z=-.12;const O=new K(new kt(.045,8,8),L);O.position.set(.04,.08,.08),D.add(O),x.add(D);const k=new K(U,y);k.position.set(-.36,.38,.52),k.rotation.y=-.32,k.rotation.z=.12;const G=new K(new kt(.045,8,8),L);G.position.set(-.04,.08,.08),k.add(G),x.add(k);const q=new Te(.025,.025,.28,8);q.rotateZ(Math.PI/3);const V=new K(q,u);V.position.set(.38,.65,.45),V.rotation.y=.25;const rt=new K(q,u);rt.position.set(-.38,.65,.45),rt.rotation.y=-.25,rt.rotation.z=-Math.PI/3,x.add(V),x.add(rt);const lt=new kt(.32,12,12);lt.scale(.45,1.5,.8);const mt=new K(lt,u);mt.position.set(.75,.1,-.2),mt.rotation.z=-.35;const Pt=new K(lt,u);Pt.position.set(-.75,.1,-.2),Pt.rotation.z=.35,x.add(mt),x.add(Pt);const Wt=new kt(.32,12,12);Wt.scale(.85,.6,1.35);const Y=new K(Wt,h);Y.position.set(.38,.15,.2);const et=new K(Wt,h);et.position.set(-.38,.15,.2),c.add(Y),c.add(et);const xt=new Te(.08,.14,.6,8);xt.rotateX(-Math.PI/3);const at=new K(xt,h);at.position.set(0,.6,-.85),c.add(at);const Rt=new Te(.14,.16,.75,10);Rt.rotateZ(.25);const Xt=new K(Rt,h);Xt.position.set(-.75,1,0),c.add(Xt);const Tt=new Kt;Tt.position.set(.68,1.45,0),c.add(Tt);const $t=new Te(.14,.16,.95,10);$t.translate(0,.45,0);const tt=new K($t,h);tt.position.set(0,0,0),Tt.add(tt);const j=new kt(.22,10,10);j.scale(1.1,1.1,.75);const I=new K(j,h);I.position.set(0,.95,0),Tt.add(I),Tt.rotation.z=-1.4;const wt=new ur;wt.moveTo(0,-.2),wt.bezierCurveTo(-.2,-.05,-.35,.15,-.35,.3),wt.bezierCurveTo(-.35,.45,-.2,.55,0,.4),wt.bezierCurveTo(.2,.55,.35,.45,.35,.3),wt.bezierCurveTo(.35,.15,.2,-.05,0,-.2);const nt=new Io(wt,{depth:.1,bevelEnabled:!0,bevelSize:.02});nt.scale(.8,.8,.8),nt.center();const vt=new re({color:16724838,emissive:16724838,emissiveIntensity:.9,roughness:.2}),ot=new K(nt,vt);ot.position.set(0,3.8,.2),c.add(ot),this.scene.add(t),this.moon={group:t,mesh:i,snoopy:c,wavingArm:Tt,floatingHeart:ot,isWavingFast:!1}}triggerMoonSnoopyWave(){this.triggerMoonSnoopyClick()}triggerMoonSnoopyClick(){this.moon&&(this.moon.isWavingFast=!0,this.moon.snoopy&&(Ct.killTweensOf(this.moon.snoopy.position),Ct.killTweensOf(this.moon.snoopy.rotation),Ct.killTweensOf(this.moon.snoopy.scale),Ct.to(this.moon.snoopy.position,{y:7.6,duration:.28,yoyo:!0,repeat:1,ease:"power2.out"}),Ct.to(this.moon.snoopy.rotation,{y:this.moon.snoopy.rotation.y+Math.PI*2,duration:.65,ease:"back.out(1.8)"}),Ct.to(this.moon.snoopy.scale,{x:1.8,y:1.8,z:1.8,duration:.2,yoyo:!0,repeat:1,ease:"back.out(2)"})),this.moon.floatingHeart&&Ct.to(this.moon.floatingHeart.scale,{x:1.6,y:1.6,z:1.6,duration:.22,yoyo:!0,repeat:3,ease:"power1.inOut"}),setTimeout(()=>{this.moon&&(this.moon.isWavingFast=!1)},4500))}getIntersectedObject(t,e){this.raycaster.setFromCamera(t,e);const n=this.planets.map(s=>s.mesh);this.moon&&(this.moon.mesh&&n.push(this.moon.mesh),this.moon.snoopy&&this.moon.snoopy.traverse(s=>{s.isMesh&&(s.userData={type:"moon",isMoon:!0,isMoonSnoopy:!0},n.push(s))}));const i=this.raycaster.intersectObjects(n,!0);return i.length>0?i[0].object:null}setHoveredPlanet(t){this.planets.forEach(e=>{e.isHovered=t&&e.mesh===t})}getScreenPositions(t,e){return this.planets.map(n=>{const i=new P;n.mesh.getWorldPosition(i);const s=i.clone().project(this.camera),o=(s.x*.5+.5)*t,a=(-(s.y*.5)+.5)*e,l=s.z<1;return{index:n.index,data:n.data,x:o,y:a,visible:l}})}update(t,e){if(this.planets.forEach((n,i)=>{if(n.mesh.rotation.y+=t*.35,n.cloudsMesh&&(n.cloudsMesh.rotation.y+=t*.48),n.crystalMoon){const a=e*.9;n.crystalMoon.position.x=Math.cos(a)*11,n.crystalMoon.position.z=Math.sin(a)*11}n.asteroidGroup&&(n.asteroidGroup.rotation.y+=t*.4),n.orbitalPoints&&(n.orbitalPoints.rotation.y+=t*.28);const s=Math.sin(e*1.2+n.floatOffset)*.7;n.group.position.y=n.basePos.y+s;const o=n.isHovered?1.18:1;n.hoverScale+=(o-n.hoverScale)*.12,n.mesh.scale.set(n.hoverScale,n.hoverScale,n.hoverScale),n.isHovered?n.mesh.material.emissiveIntensity=1.6:n.mesh.material.emissiveIntensity=.85}),this.moon){if(this.moon.mesh.rotation.y+=t*.15,this.moon.group.position.y=75+Math.sin(e*.8)*.9,this.moon.wavingArm){const n=this.moon.isWavingFast?10:5.5,i=Math.sin(e*n)*.42;this.moon.wavingArm.rotation.z=-1.45+i,this.moon.wavingArm.rotation.x=Math.cos(e*n*.5)*.2}this.moon.floatingHeart&&(this.moon.floatingHeart.position.y=3.8+Math.sin(e*3)*.15,this.moon.floatingHeart.rotation.y=e*1.5)}}setPlanetsDimmed(t,e=1.2){this.planets.forEach(n=>{Ct.to(n.group.scale,{x:t?.001:1,y:t?.001:1,z:t?.001:1,duration:e,ease:"power2.inOut"})}),this.moon&&this.moon.group&&Ct.to(this.moon.group.scale,{x:t?.001:1,y:t?.001:1,z:t?.001:1,duration:e,ease:"power2.inOut"})}expandPlanetsSupernova(t=3.8){this.disintegratePlanetsSupernova(t)}disintegratePlanetsSupernova(t=3.8){this.planets.forEach(e=>{const n=e.basePos.clone().normalize(),i=e.basePos.clone().add(n.multiplyScalar(75));Ct.to(e.group.position,{x:i.x,y:i.y+12,z:i.z,duration:t,ease:"power2.out"}),Ct.to(e.group.scale,{x:1e-4,y:1e-4,z:1e-4,duration:t*.9,ease:"power2.inOut",onComplete:()=>{e.group.visible=!1}})}),this.moon&&this.moon.group&&Ct.to(this.moon.group.scale,{x:1e-4,y:1e-4,z:1e-4,duration:t*.9,ease:"power2.inOut",onComplete:()=>{this.moon.group.visible=!1}})}restorePlanetsPosition(t=1.4){this.planets.forEach(e=>{e.group.visible=!0,Ct.to(e.group.scale,{x:1,y:1,z:1,duration:t,ease:"power2.out"}),Ct.to(e.group.position,{x:e.basePos.x,y:e.basePos.y,z:e.basePos.z,duration:t,ease:"power2.inOut"})}),this.moon&&this.moon.group&&(this.moon.group.visible=!0,Ct.to(this.moon.group.scale,{x:1,y:1,z:1,duration:t,ease:"power2.out"}))}}class Kx{constructor(t,e){this.scene=t,this.sound=e,this.group=new Kt,this.group.position.set(0,12,0),this.scene.add(this.group),this.isExploding=!1,this.isHovered=!1,this.isDisappeared=!1,this.hitCount=0,this.maxHits=3,this.initSunTexture(),this.initSun(),this.initSupernovaShockwave()}initSunTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createRadialGradient(256,256,20,256,256,256);n.addColorStop(0,"#ffffff"),n.addColorStop(.2,"#ffe066"),n.addColorStop(.5,"#ff8800"),n.addColorStop(.8,"#ff2200"),n.addColorStop(1,"#990000"),e.fillStyle=n,e.fillRect(0,0,512,512);for(let i=0;i<400;i++){const s=Math.random()*512,o=Math.random()*512,a=Math.random()*22+4;e.beginPath(),e.arc(s,o,a,0,Math.PI*2),e.fillStyle=Math.random()<.5?"rgba(255, 255, 200, 0.45)":"rgba(255, 60, 0, 0.4)",e.fill()}this.sunTexture=new Jn(t),this.sunTexture.wrapS=Un,this.sunTexture.wrapT=Un}initSun(){this.sunGroup=new Kt,this.group.add(this.sunGroup);const t=new kt(8.5,48,48);this.coreMat=new re({map:this.sunTexture,color:16771701,emissive:16731392,emissiveIntensity:3.5,emissiveMap:this.sunTexture,roughness:.1,metalness:.05}),this.coreMesh=new K(t,this.coreMat),this.coreMesh.userData={type:"centralSun",isSun:!0},this.sunGroup.add(this.coreMesh);const e=new kt(10.8,32,32);this.coronaMat1=new fe({color:16755200,transparent:!0,opacity:.45,blending:jt,side:Le}),this.coronaMesh1=new K(e,this.coronaMat1),this.sunGroup.add(this.coronaMesh1);const n=new kt(13.8,32,32);this.coronaMat2=new fe({color:16724736,transparent:!0,opacity:.35,blending:jt,side:Le}),this.coronaMesh2=new K(n,this.coronaMat2),this.sunGroup.add(this.coronaMesh2);const i=new kt(17.5,24,24);this.coronaMat3=new fe({color:16768256,transparent:!0,opacity:.18,blending:jt,side:Le}),this.coronaMesh3=new K(i,this.coronaMat3),this.sunGroup.add(this.coronaMesh3);const s=new Bn(13,.45,16,64);this.flareMat1=new fe({color:16737792,transparent:!0,opacity:.65,blending:jt}),this.flareRing1=new K(s,this.flareMat1),this.flareRing1.rotation.x=Math.PI/2.2,this.sunGroup.add(this.flareRing1);const o=new Bn(15.5,.38,16,64);this.flareMat2=new fe({color:16711748,transparent:!0,opacity:.55,blending:jt}),this.flareRing2=new K(o,this.flareMat2),this.flareRing2.rotation.x=-Math.PI/2.6,this.flareRing2.rotation.y=Math.PI/3,this.sunGroup.add(this.flareRing2);const a=new Bn(17.2,.3,16,64);this.flareMat3=new fe({color:16763904,transparent:!0,opacity:.45,blending:jt}),this.flareRing3=new K(a,this.flareMat3),this.flareRing3.rotation.z=Math.PI/2.5,this.sunGroup.add(this.flareRing3),this.sunLight=new yo(16768358,3.5,450),this.sunLight.position.set(0,0,0),this.sunGroup.add(this.sunLight);const l=260,c=new me,h=new Float32Array(l*3);for(let u=0;u<l;u++){const d=Math.random(),f=Math.random(),_=d*2*Math.PI,g=Math.acos(2*f-1),m=9.5+Math.random()*7.5;h[u*3]=m*Math.sin(g)*Math.cos(_),h[u*3+1]=m*Math.sin(g)*Math.sin(_),h[u*3+2]=m*Math.cos(g)}c.setAttribute("position",new pe(h,3)),this.pMat=new Us({color:16771701,size:1.8,transparent:!0,opacity:.85,blending:jt}),this.particles=new Si(c,this.pMat),this.sunGroup.add(this.particles)}initSupernovaShockwave(){this.shockwaveGroup=new Kt,this.group.add(this.shockwaveGroup);const t=new Xi(.5,5,64);this.shockMat=new fe({color:16772829,transparent:!0,opacity:0,side:ke,blending:jt}),this.shockRing=new K(t,this.shockMat),this.shockRing.rotation.x=Math.PI/2,this.shockwaveGroup.add(this.shockRing);const e=new kt(1,32,32);this.blastMat=new fe({color:16777215,transparent:!0,opacity:0,blending:jt}),this.blastSphere=new K(e,this.blastMat),this.shockwaveGroup.add(this.blastSphere);const n=400,i=new me,s=new Float32Array(n*3);this.bpVel=[];for(let o=0;o<n;o++){s[o*3]=0,s[o*3+1]=0,s[o*3+2]=0;const a=new P((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2).normalize().multiplyScalar(40+Math.random()*80);this.bpVel.push(a)}i.setAttribute("position",new pe(s,3)),this.bpMat=new Us({color:16768880,size:2.2,transparent:!0,opacity:0,blending:jt}),this.blastParticles=new Si(i,this.bpMat),this.shockwaveGroup.add(this.blastParticles)}shake(t=1,e=.35){this.shakeTween&&this.shakeTween.kill();const n={intensity:t};this.shakeTween=Ct.to(n,{intensity:0,duration:e,ease:"power2.out",onUpdate:()=>{const i=n.intensity;i>.01?(this.sunGroup.position.x=(Math.random()-.5)*i*2.4,this.sunGroup.position.y=(Math.random()-.5)*i*2.4,this.sunGroup.position.z=(Math.random()-.5)*i*2.4):this.sunGroup.position.set(0,0,0)},onComplete:()=>{this.sunGroup.position.set(0,0,0),this.shakeTween=null}})}registerHit(t=null,e=null){return this.isExploding||this.isDisappeared?null:(this.hitCount++,this.hitCount===1?(this.sound&&this.sound.playSolarHitSound(1),this.shake(1.4,.3),Ct.to(this.sunGroup.scale,{x:1.35,y:1.35,z:1.35,duration:.18,yoyo:!0,repeat:1,ease:"power2.out"}),this.coreMat.emissiveIntensity=5.5,Ct.to(this.coreMat,{emissiveIntensity:3.5,duration:.8,ease:"power2.out"}),{hit:1,maxHits:3,message:"⚡ Energía Solar: 1/3 (¡Toca 2 veces más!)"}):this.hitCount===2?(this.sound&&this.sound.playSolarHitSound(2),this.shake(2.8,.4),Ct.to(this.sunGroup.scale,{x:1.6,y:1.6,z:1.6,duration:.16,yoyo:!0,repeat:1,ease:"power2.out"}),this.coreMat.emissiveIntensity=8,this.coreMat.emissive.setHex(16777215),Ct.to(this.coreMat,{emissiveIntensity:4.5,duration:.8,ease:"power2.out",onComplete:()=>{!this.isExploding&&!this.isDisappeared&&this.coreMat.emissive.setHex(16731392)}}),{hit:2,maxHits:3,message:"🔥 ¡Sobrecarga Inminente! 2/3 (¡Un toque final!)"}):(this.shake(4.8,.65),this.triggerSupernova(t,e),{hit:3,maxHits:3,message:"💥 ¡SUPERNOVA DESATADA! 💥"}))}triggerSupernova(t=null,e=null){this.isExploding||this.isDisappeared||(this.isExploding=!0,this.sound&&this.sound.playSupernovaBlast(),Ct.to(this.sunGroup.scale,{x:.22,y:.22,z:.22,duration:1.4,ease:"power2.in",onStart:()=>{this.coreMat.emissiveIntensity=12,this.coreMat.emissive.setHex(16777215)},onComplete:()=>{this.sunGroup.visible=!1,this.sunLight.intensity=0,this.isDisappeared=!0,this.blastSphere.scale.set(1,1,1),this.blastMat.opacity=1,Ct.to(this.blastSphere.scale,{x:95,y:95,z:95,duration:3.2,ease:"power2.out"}),Ct.to(this.blastMat,{opacity:0,duration:2.8,ease:"power2.in"}),this.shockRing.scale.set(1,1,1),this.shockMat.opacity=1,Ct.to(this.shockRing.scale,{x:75,y:75,z:75,duration:4.5,ease:"power3.out"}),Ct.to(this.shockMat,{opacity:0,duration:4.2,ease:"power2.in"}),this.bpMat.opacity=1;const n=this.blastParticles.geometry.attributes.position,i=n.array,s={t:0};Ct.to(s,{t:1,duration:4.5,ease:"power2.out",onUpdate:()=>{for(let o=0;o<this.bpVel.length;o++)i[o*3]=this.bpVel[o].x*s.t,i[o*3+1]=this.bpVel[o].y*s.t,i[o*3+2]=this.bpVel[o].z*s.t;n.needsUpdate=!0}}),Ct.to(this.bpMat,{opacity:0,duration:3.8,delay:.6,ease:"power2.in",onComplete:()=>{this.isExploding=!1,e&&e()}}),t&&t()}}))}setHovered(t){this.isHovered=t}update(t,e){if(!this.isExploding&&!this.isDisappeared){this.coreMesh.rotation.y+=t*.35,this.coronaMesh1.rotation.y-=t*.25,this.coronaMesh2.rotation.x+=t*.2,this.coronaMesh3.rotation.z-=t*.15,this.flareRing1.rotation.z+=t*.6,this.flareRing2.rotation.z-=t*.5,this.flareRing3.rotation.y+=t*.45,this.particles.rotation.y+=t*.3;const n=Math.sin(e*2.5)*.08,s=(this.isHovered?1.18:1)+n;this.sunGroup.scale.set(s,s,s),this.group.position.y=12+Math.sin(e*1.5)*1.2,this.isHovered?this.coreMat.emissiveIntensity=4.8:this.coreMat.emissiveIntensity=3.5+Math.sin(e*3.5)*.6}}restoreSun(t=1.5){this.isExploding=!1,this.isDisappeared=!1,this.hitCount=0,this.sunGroup.visible=!0,this.coreMat.emissiveIntensity=3.5,this.coreMat.emissive.setHex(16731392),this.sunLight.intensity=3.5,Ct.fromTo(this.sunGroup.scale,{x:.001,y:.001,z:.001},{x:1,y:1,z:1,duration:t,ease:"back.out(1.5)"})}}class jx{constructor(t,e="high"){this.scene=t,this.quality=e,this.morphProgress={value:0},this.heartGroup=new Kt,this.scene.add(this.heartGroup),this.isActive=!1,this.initHeartParticles(),this.initConfettiStardust()}initHeartParticles(){let t=3800;this.quality==="medium"&&(t=2200),this.quality==="low"&&(t=1e3),this.count=t,this.originPositions=new Float32Array(t*3),this.targetPositions=new Float32Array(t*3),this.currentPositions=new Float32Array(t*3);const e=new Float32Array(t*3),n=new Float32Array(t),i=new Float32Array(t),s=[new Lt(16730994),new Lt(15087958),new Lt(16741775),new Lt(16111487),new Lt(16777215)];for(let o=0;o<t;o++){const a=80+Math.random()*250,l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1);this.originPositions[o*3]=a*Math.sin(c)*Math.cos(l),this.originPositions[o*3+1]=a*Math.sin(c)*Math.sin(l),this.originPositions[o*3+2]=a*Math.cos(c),this.currentPositions[o*3]=this.originPositions[o*3],this.currentPositions[o*3+1]=this.originPositions[o*3+1],this.currentPositions[o*3+2]=this.originPositions[o*3+2];const h=Math.random()*Math.PI*2,u=1.1+(Math.random()-.5)*.2,d=Math.pow(Math.random(),.6),f=16*Math.pow(Math.sin(h),3)*u*d,_=(13*Math.cos(h)-5*Math.cos(2*h)-2*Math.cos(3*h)-Math.cos(4*h))*u*d,g=Math.max(.5,10*(1-Math.abs(_)/22)),m=(Math.random()-.5)*g*d;this.targetPositions[o*3]=f,this.targetPositions[o*3+1]=_,this.targetPositions[o*3+2]=m;const p=s[Math.floor(Math.random()*s.length)];e[o*3]=p.r,e[o*3+1]=p.g,e[o*3+2]=p.b,n[o]=2+Math.random()*3.5,i[o]=Math.random()*Math.PI*2}this.geometry=new me,this.geometry.setAttribute("position",new pe(this.currentPositions,3)),this.geometry.setAttribute("color",new pe(e,3)),this.geometry.setAttribute("size",new pe(n,1)),this.material=new Ln({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)},uMorph:{value:0}},vertexShader:`
        uniform float uTime;
        uniform float uPixelRatio;
        uniform float uMorph;
        attribute float size;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          float twinkle = sin(uTime * 3.0 + position.x) * 0.3 + 0.7;
          gl_PointSize = size * uPixelRatio * (280.0 / -mvPosition.z) * twinkle;
          gl_Position = projectionMatrix * mvPosition;
          
          vAlpha = 0.4 + uMorph * 0.6;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float intensity = pow(1.0 - (dist * 2.0), 2.0);
          gl_FragColor = vec4(vColor, vAlpha * intensity);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,vertexColors:!0}),this.points=new Si(this.geometry,this.material),this.heartGroup.add(this.points),this.heartGroup.position.set(0,0,0)}initConfettiStardust(){const t=this.quality==="low"?60:150;this.confettiData=[];const e=new me,n=new Float32Array(t*3),i=new Float32Array(t*3),s=[new Lt(16111487),new Lt(15087958),new Lt(16777215),new Lt(7395071)];for(let a=0;a<t;a++){n[a*3]=(Math.random()-.5)*80,n[a*3+1]=-40+Math.random()*80,n[a*3+2]=(Math.random()-.5)*60;const l=s[Math.floor(Math.random()*s.length)];i[a*3]=l.r,i[a*3+1]=l.g,i[a*3+2]=l.b,this.confettiData.push({speedY:4+Math.random()*8,swaySpeed:1+Math.random()*2,swayOffset:Math.random()*Math.PI*2})}e.setAttribute("position",new pe(n,3)),e.setAttribute("color",new pe(i,3));const o=new Us({size:2.2,vertexColors:!0,transparent:!0,opacity:0,blending:jt});this.confettiPoints=new Si(e,o),this.heartGroup.add(this.confettiPoints)}morphToHeart(t=3.5,e=null){this.isActive=!0,Ct.to(this.morphProgress,{value:1,duration:t,ease:"power3.inOut",onUpdate:()=>{const n=this.morphProgress.value;this.material.uniforms.uMorph.value=n;const i=this.geometry.attributes.position.array;for(let s=0;s<this.count*3;s++)i[s]=this.originPositions[s]+(this.targetPositions[s]-this.originPositions[s])*n;this.geometry.attributes.position.needsUpdate=!0},onComplete:()=>{this.confettiPoints&&Ct.to(this.confettiPoints.material,{opacity:.85,duration:1.5}),e&&e()}})}resetToCosmos(){this.isActive=!1,this.morphProgress.value=0,this.material.uniforms.uMorph.value=0,this.confettiPoints&&(this.confettiPoints.material.opacity=0);const t=this.geometry.attributes.position.array;for(let e=0;e<this.count*3;e++)t[e]=this.originPositions[e];this.geometry.attributes.position.needsUpdate=!0,this.heartGroup.scale.set(1,1,1)}update(t,e){if(this.material&&(this.material.uniforms.uTime.value=e),this.isActive&&this.morphProgress.value>.8){const n=e*3.5,i=Math.pow(Math.max(0,Math.sin(n)),6)*.14,s=Math.pow(Math.max(0,Math.sin(n+.5)),6)*.08,o=1+i+s;if(this.heartGroup.scale.set(o,o,o),this.heartGroup.rotation.y=Math.sin(e*.5)*.15,this.confettiPoints&&this.confettiPoints.material.opacity>0){const a=this.confettiPoints.geometry.attributes.position.array;for(let l=0;l<this.confettiData.length;l++){const c=this.confettiData[l];a[l*3+1]-=c.speedY*t,a[l*3]+=Math.sin(e*c.swaySpeed+c.swayOffset)*.15,a[l*3+1]<-35&&(a[l*3+1]=40,a[l*3]=(Math.random()-.5)*80)}this.confettiPoints.geometry.attributes.position.needsUpdate=!0}}}}class Qx{constructor(t){this.scene=t,this.group=new Kt,this.scene.add(this.group),this.isVisible=!1,this.createHeartConstellation()}createHeartConstellation(){const t=[new P(0,15,-120),new P(8,22,-120),new P(18,22,-120),new P(22,14,-120),new P(18,4,-120),new P(0,-12,-120),new P(-18,4,-120),new P(-22,14,-120),new P(-18,22,-120),new P(-8,22,-120),new P(0,15,-120)],e=new me().setFromPoints(t);this.lineMaterial=new Po({color:16111487,transparent:!0,opacity:0,linewidth:1.5,blending:jt}),this.line=new Wl(e,this.lineMaterial),this.group.add(this.line);const n=new kt(.7,8,8),i=new fe({color:16774875,transparent:!0,opacity:0});this.starMeshes=[],t.forEach(s=>{const o=new K(n,i);o.position.copy(s),this.group.add(o),this.starMeshes.push(o)})}toggleConstellation(){this.isVisible=!this.isVisible;const t=this.isVisible?.75:0;return Ct.to(this.lineMaterial,{opacity:t,duration:1.2}),this.starMeshes.forEach(e=>{Ct.to(e.material,{opacity:t>0?1:0,duration:1.2})}),this.isVisible}update(t,e){if(this.isVisible){const n=.5+Math.sin(e*2)*.25;this.lineMaterial.opacity=n}}}class ty{constructor(t){this.scene=t,this.group=new Kt,this.scene.add(this.group),this.isFlying=!0,this.flightSpeed=26,this.startX=-280,this.endX=280,this.baseY=22,this.baseZ=-35,this.isDoingBarrelRoll=!1,this.isOrbitingPlanet=!1,this.orbitPlanetCenter=new P,this.orbitRadius=8,this.orbitAngle=0,this.orbitSpeed=.85,this.currentThrottle=1,this.smokePuffs=[],this.buildHighQuality3DSnoopyAndPlane(),this.resetFlight()}buildHighQuality3DSnoopyAndPlane(){this.planeMeshGroup=new Kt;const t=new re({color:14222377,roughness:.25,metalness:.35,emissive:4849679,emissiveIntensity:.4}),e=new re({color:10289672,roughness:.3,metalness:.2}),n=new re({color:16119285,metalness:.95,roughness:.1}),i=new re({color:16111487,metalness:.85,roughness:.2,emissive:4864528,emissiveIntensity:.3}),s=new re({color:2829634,metalness:.8,roughness:.3}),o=new re({color:5779214,roughness:.6}),a=new re({color:1118481,roughness:.8}),l=new re({color:16777215,roughness:.3,metalness:.05}),c=new re({color:1118481,roughness:.3}),h=new Up({color:7395071,metalness:.2,roughness:.05,transmission:.6,thickness:.5,emissive:1920619,emissiveIntensity:.6}),u=new re({color:16711764,roughness:.4,emissive:7208996,emissiveIntensity:.5}),d=new Kt,f=new Te(1.6,.7,9.5,24);f.rotateZ(Math.PI/2);const _=new K(f,t);d.add(_);const g=new kt(1.6,24,24);g.scale(.9,1,1);const m=new K(g,s);m.position.set(4.5,0,0),d.add(m);const p=new Te(1.2,1.2,2.2,16),M=new fe({color:657935}),x=new K(p,M);x.position.set(-.2,.8,0),d.add(x);const v=new Bn(1.25,.15,12,24);v.rotateX(Math.PI/2);const b=new K(v,o);b.position.set(-.2,1.45,0),d.add(b);const C=new Te(.9,.9,.6,16,1,!1,0,Math.PI);C.rotateZ(Math.PI/2);const w=new K(C,h);w.position.set(1.1,1.8,0),w.rotation.y=Math.PI/2,d.add(w);const A=new Te(.18,.18,2.2,12);A.rotateZ(Math.PI/3);const S=new K(A,s);S.position.set(2,-.4,1.6);const y=new K(A,s);y.position.set(2,-.4,-1.6),d.add(S),d.add(y);const L=new Kt,U=new $e(2.8,.22,15),D=new K(U,t);D.position.set(1,3.85,0),L.add(D);const O=new $e(2.4,.18,13),k=new K(O,t);k.position.set(.8,-.8,0),L.add(k);const G=[{x:.9,y:1.525,z:5.8},{x:.9,y:1.525,z:-5.8},{x:.9,y:1.525,z:2.8},{x:.9,y:1.525,z:-2.8}],q=new Te(.08,.08,4.65,8);G.forEach(sn=>{const ri=new K(q,e);ri.position.set(sn.x,sn.y,sn.z),L.add(ri)});const V=[{x:.3,y:2.625,z:1.2},{x:.3,y:2.625,z:-1.2},{x:1.5,y:2.625,z:1.2},{x:1.5,y:2.625,z:-1.2}],rt=new Te(.07,.07,2.45,8);V.forEach(sn=>{const ri=new K(rt,e);ri.position.set(sn.x,sn.y,sn.z),L.add(ri)});const lt=new Kt;lt.position.set(-4.2,0,0);const mt=new $e(2.4,2.4,.15),Pt=new K(mt,t);Pt.position.set(0,1.4,0),Pt.rotation.z=-.35,lt.add(Pt);const Wt=new $e(1.6,.15,5.5),Y=new K(Wt,t);Y.position.set(.2,.3,0),lt.add(Y);const et=new Kt;et.position.set(1.6,-1.8,0);const xt=new Te(.7,.7,.35,16);xt.rotateX(Math.PI/2);const at=new K(xt,a);at.position.set(0,0,1.8);const Rt=new K(xt,a);Rt.position.set(0,0,-1.8);const Xt=new Te(.06,.06,3.6);Xt.rotateX(Math.PI/2);const Tt=new K(Xt,n),$t=new Te(.08,.08,1.8),tt=new K($t,e);tt.position.set(0,.6,1.5),tt.rotation.z=.2;const j=new K($t,e);j.position.set(0,.6,-1.5),j.rotation.z=.2,et.add(at),et.add(Rt),et.add(Tt),et.add(tt),et.add(j),this.propellerGroup=new Kt,this.propellerGroup.position.set(5.4,0,0);const I=new Yl(.7,1.2,16);I.rotateZ(-Math.PI/2);const wt=new K(I,n);this.propellerGroup.add(wt);const nt=new $e(.12,4.4,.45),vt=new K(nt,i),ot=vt.clone();ot.rotation.x=Math.PI/2,this.propellerGroup.add(vt),this.propellerGroup.add(ot);const It=new Xi(.4,2.3,24);It.rotateY(Math.PI/2);const gt=new fe({color:16111487,transparent:!0,opacity:.35,side:ke,blending:jt});this.propellerBlur=new K(It,gt),this.propellerGroup.add(this.propellerBlur),this.snoopyGroup=new Kt,this.snoopyGroup.position.set(-.2,.95,0);const R=new kt(1.1,16,16);R.scale(.9,1.2,.85);const T=new K(R,l);T.position.set(0,.2,0),this.snoopyGroup.add(T);const z=new Kt;z.position.set(.35,1.2,0);const Z=new kt(1.1,24,24);Z.scale(1.1,1.05,.95);const Q=new K(Z,l);z.add(Q);const $=new Te(.75,.85,1.6,24);$.rotateZ(Math.PI/2);const At=new K($,l);At.position.set(1,-.15,0),z.add(At);const ht=new kt(.75,24,24),yt=new K(ht,l);yt.position.set(1.8,-.15,0),z.add(yt);const qt=new kt(.3,16,16);qt.scale(.8,1,1);const it=new K(qt,c);it.position.set(2.45,.05,0),z.add(it);const Mt=new kt(.12,12,12);Mt.scale(.5,1.2,.5);const Ut=new K(Mt,c);Ut.position.set(.9,.35,.72),Ut.rotation.y=.3;const Ot=new K(Mt,c);Ot.position.set(.9,.35,-.72),Ot.rotation.y=-.3,z.add(Ut),z.add(Ot),this.earLGroup=new Kt,this.earLGroup.position.set(-.1,.3,.95);const St=new kt(.55,16,16);St.scale(.45,1.8,.6);const Yt=new K(St,c);Yt.position.set(0,-.6,0),Yt.rotation.z=-.2,this.earLGroup.add(Yt),z.add(this.earLGroup),this.earRGroup=new Kt,this.earRGroup.position.set(-.1,.3,-.95);const zt=new K(St,c);zt.position.set(0,-.6,0),zt.rotation.z=-.2,this.earRGroup.add(zt),z.add(this.earRGroup);const oe=new kt(1.15,24,24);oe.scale(1.02,.75,.98);const N=new K(oe,o);N.position.set(0,.5,0),z.add(N);const ut=new re({color:16111487,metalness:.9,roughness:.1}),X=new K(new Bn(.32,.1,12,24),ut);X.position.set(.8,.75,.5),X.rotation.y=Math.PI/3.2;const J=new K(new Te(.3,.3,.05,16),h);J.position.copy(X.position),J.rotation.copy(X.rotation),J.rotateX(Math.PI/2);const dt=new K(new Bn(.32,.1,12,24),ut);dt.position.set(.8,.75,-.5),dt.rotation.y=-Math.PI/3.2;const ft=new K(new Te(.3,.3,.05,16),h);ft.position.copy(dt.position),ft.rotation.copy(dt.rotation),ft.rotateX(Math.PI/2),z.add(X),z.add(J),z.add(dt),z.add(ft),this.snoopyGroup.add(z);const Ft=new kt(.35,12,12);Ft.scale(1.2,.8,.8);const ge=new K(Ft,l);ge.position.set(1.2,.5,.7);const Pe=new K(Ft,l);Pe.position.set(1.2,.5,-.7),this.snoopyGroup.add(ge),this.snoopyGroup.add(Pe),this.scarfGroup=new Kt,this.scarfGroup.position.set(-.6,.9,.3);const ne=new K(new kt(.35,12,12),u);this.scarfGroup.add(ne);const nn=new $e(2.8,.45,.12);this.scarfTail=new K(nn,u),this.scarfTail.position.set(-1.4,0,0),this.scarfGroup.add(this.scarfTail),this.snoopyGroup.add(this.scarfGroup),this.heartStreamerGroup=new Kt,this.heartStreamerGroup.position.set(-8.5,.6,0);const wn=new me().setFromPoints([new P(4.2,0,0),new P(0,0,0)]),Ar=new Wl(wn,new Po({color:16111487,transparent:!0,opacity:.8}));this.heartStreamerGroup.add(Ar);const Xs=new kt(1.6,16,16);Xs.scale(1,.9,.4);const Vn=new re({color:16711764,roughness:.2,emissive:16711764,emissiveIntensity:.7});this.trailingHeart=new K(Xs,Vn),this.trailingHeart.position.set(-.2,0,0),this.heartStreamerGroup.add(this.trailingHeart);const qs=new K(new kt(2.3,16,16),new fe({color:16741775,transparent:!0,opacity:.35,blending:jt}));this.heartStreamerGroup.add(qs),this.planeMeshGroup.add(d),this.planeMeshGroup.add(L),this.planeMeshGroup.add(lt),this.planeMeshGroup.add(et),this.planeMeshGroup.add(this.propellerGroup),this.planeMeshGroup.add(this.snoopyGroup),this.planeMeshGroup.add(this.heartStreamerGroup),this.planeMeshGroup.traverse(sn=>{sn.isMesh&&(sn.userData={isSnoopyPlane:!0})}),this.planeMeshGroup.scale.set(.85,.85,.85),this.group.add(this.planeMeshGroup)}resetFlight(){this.group.position.set(this.startX,this.baseY,this.baseZ),this.planeMeshGroup.quaternion.identity(),this.planeMeshGroup.scale.set(.85,.85,.85),this.isFlying=!0,this.isOrbitingPlanet=!1,this.currentThrottle=1}triggerBarrelRoll(){this.isDoingBarrelRoll||(this.isDoingBarrelRoll=!0,Ct.to(this.planeMeshGroup.rotation,{x:Math.PI*2,duration:1.2,ease:"power2.inOut",onComplete:()=>{this.planeMeshGroup.rotation.x=0,this.isDoingBarrelRoll=!1}}))}spawnSmokeParticle(){if(this.smokePuffs.length>35)return;const t=this.planeMeshGroup.scale.x,e=.45*t,n=new kt(e,8,8),i=new fe({color:Math.random()>.4?16111487:15967922,transparent:!0,opacity:.85,blending:jt}),s=new K(n,i),o=new P;this.planeMeshGroup.getWorldPosition(o),s.position.copy(o).add(new P(-4*t,-.2*t,0)),this.scene.add(s),this.smokePuffs.push({mesh:s,life:0,maxLife:1.8,scale:1})}orientNoseAlongVelocity(t,e=0){const n=t.clone().normalize();if(n.lengthSq()<1e-4)return;const i=new P(0,1,0);let s=new P().crossVectors(n,i).normalize();s.lengthSq()<.001&&(s=new P(0,0,1));const o=new P().crossVectors(s,n).normalize(),a=new ce().makeBasis(n,o,s);if(this.planeMeshGroup.quaternion.setFromRotationMatrix(a),Math.abs(e)>1e-4){const l=new Vs().setFromAxisAngle(n,e);this.planeMeshGroup.quaternion.premultiply(l)}}flyToOrbitPlanet(t,e=.5,n=2,i=null){this.flyToPlanet(t,n,i)}flyToPlanet(t,e=3.2,n=null){this.isFlying=!1,this.isOrbitingPlanet=!1,this.flightTween&&this.flightTween.kill(),this.scaleTween&&this.scaleTween.kill();const i=window.innerWidth<768,s=i?.28:.35;this.orbitRadius=i?12:14.2,this.orbitPlanetCenter.copy(t);const o=this.group.position.clone(),a=Math.PI*.75,l=t.clone().add(new P(Math.cos(a)*this.orbitRadius,3.8,Math.sin(a)*this.orbitRadius)),c=new P(14,0,0),h=o.clone().add(c),u=new P(l.x-(l.x-o.x)*.25,Math.max(o.y,l.y)+9,(o.z+l.z)*.5+8),d=e,f={t:0};this.flightTween=Ct.to(f,{t:1,duration:d,ease:"power2.inOut",onUpdate:()=>{const _=f.t,g=1-_;let m=g*g*g*o.x+3*g*g*_*h.x+3*g*_*_*u.x+_*_*_*l.x,p=g*g*g*o.y+3*g*g*_*h.y+3*g*_*_*u.y+_*_*_*l.y,M=g*g*g*o.z+3*g*g*_*h.z+3*g*_*_*u.z+_*_*_*l.z;const x=new P(m,p,M),v=x.clone().sub(t),b=v.length(),C=this.orbitRadius*.92;b<C&&b>.001&&(v.normalize().multiplyScalar(C),x.copy(t).add(v),m=x.x,p=x.y,M=x.z);const w=3*g*g*(h.x-o.x)+6*g*_*(u.x-h.x)+3*_*_*(l.x-u.x),A=3*g*g*(h.y-o.y)+6*g*_*(u.y-h.y)+3*_*_*(l.y-u.y),S=3*g*g*(h.z-o.z)+6*g*_*(u.z-h.z)+3*_*_*(l.z-u.z);this.group.position.set(m,p,M);const y=new P(w,A,S),L=Math.sin(_*Math.PI)*.42;this.orientNoseAlongVelocity(y,L),this.currentThrottle=1+Math.sin(_*Math.PI)*.6,Math.random()<.6&&this.spawnSmokeParticle()},onComplete:()=>{this.isOrbitingPlanet=!0,this.orbitAngle=a,this.currentThrottle=.75,n&&n()}}),this.scaleTween=Ct.to(this.planeMeshGroup.scale,{x:s,y:s,z:s,duration:d,ease:"power2.inOut"})}resumeCosmicFlight(){!this.isOrbitingPlanet&&this.isFlying||(this.isOrbitingPlanet=!1,this.flightTween&&this.flightTween.kill(),this.scaleTween&&this.scaleTween.kill(),this.currentThrottle=1.2,this.scaleTween=Ct.to(this.planeMeshGroup.scale,{x:.85,y:.85,z:.85,duration:1.4,ease:"power2.inOut"}),Ct.to(this.planeMeshGroup.rotation,{x:Math.PI*2,y:0,z:0,duration:1.1,ease:"power2.inOut",onComplete:()=>{this.planeMeshGroup.rotation.set(0,0,0),this.isFlying=!0,this.currentThrottle=1}}),Ct.to(this.group.position,{y:this.baseY,z:this.baseZ,duration:1.4,ease:"power2.in"}))}flyAroundHeart(){this.group.visible=!0,this.flightTween&&this.flightTween.kill(),this.scaleTween&&this.scaleTween.kill(),this.isFlying=!1,this.isOrbitingPlanet=!0,this.orbitPlanetCenter.set(0,3,0),this.orbitRadius=28,this.orbitSpeed=.55,this.orbitAngle=Math.PI/4,this.currentThrottle=1,Ct.to(this.planeMeshGroup.scale,{x:1.05,y:1.05,z:1.05,duration:1.5,ease:"power2.out"})}update(t,e){if(this.propellerGroup&&(this.propellerGroup.rotation.x+=t*(42*this.currentThrottle)),this.earLGroup&&this.earRGroup){const n=Math.sin(e*16*this.currentThrottle)*(.12*this.currentThrottle);this.earLGroup.rotation.z=-.2+n,this.earRGroup.rotation.z=-.2+n}if(this.scarfTail&&(this.scarfTail.rotation.y=Math.sin(e*18*this.currentThrottle)*.45,this.scarfTail.rotation.z=.2+Math.cos(e*15*this.currentThrottle)*.2),this.heartStreamerGroup){this.heartStreamerGroup.position.y=.6+Math.sin(e*4)*.4;const n=1+Math.sin(e*5)*.18;this.trailingHeart.scale.set(n,n,n)}if(this.isOrbitingPlanet){this.orbitAngle+=t*this.orbitSpeed;const n=Math.cos(this.orbitAngle)*this.orbitRadius,i=Math.sin(this.orbitAngle)*this.orbitRadius,s=Math.sin(this.orbitAngle*1.5)*1.8+3.5;this.group.position.set(this.orbitPlanetCenter.x+n,this.orbitPlanetCenter.y+s,this.orbitPlanetCenter.z+i);const o=new P(-Math.sin(this.orbitAngle),Math.cos(this.orbitAngle*1.5)*.22,Math.cos(this.orbitAngle)).normalize();this.orientNoseAlongVelocity(o,-.36),Math.random()<.25&&this.spawnSmokeParticle()}else if(this.isFlying){this.group.position.x+=this.flightSpeed*t;const n=Math.sin(e*1.4)*3.8;if(this.group.position.y=this.baseY+n,this.isDoingBarrelRoll||this.orientNoseAlongVelocity(new P(1,Math.cos(e*1.4)*.2,0),0),Math.random()<.4&&this.spawnSmokeParticle(),this.group.position.x>this.endX){this.isFlying=!1;const i=8e3+Math.random()*6e3;setTimeout(()=>{this.baseY=20+(Math.random()-.5)*16,this.baseZ=-35+(Math.random()-.5)*8,this.resetFlight()},i)}}for(let n=this.smokePuffs.length-1;n>=0;n--){const i=this.smokePuffs[n];i.life+=t,i.scale+=t*2,i.mesh.scale.set(i.scale,i.scale,i.scale),i.mesh.position.x-=t*5;const s=1-i.life/i.maxLife;i.mesh.material.opacity=Math.max(0,s*.8),i.life>=i.maxLife&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.smokePuffs.splice(n,1))}}}class ey{constructor(t,e){this.scene=t,this.sound=e,this.group=new Kt,this.group.position.set(0,12,0),this.group.visible=!1,this.group.scale.set(.001,.001,.001),this.scene.add(this.group),this.hitCount=0,this.maxHits=3,this.isOpen=!1,this.isOpening=!1,this.isHovered=!1,this.initMaterials(),this.initEnvelopeModel(),this.initStardustAura()}initMaterials(){this.envelopeMat=new re({color:2231332,roughness:.35,metalness:.15,emissive:3870251,emissiveIntensity:.5}),this.goldTrimMat=new re({color:16111487,roughness:.2,metalness:.85,emissive:7560216,emissiveIntensity:.35}),this.waxMat=new re({color:12852794,roughness:.25,metalness:.3,emissive:7208984,emissiveIntensity:.7}),this.sealHeartMat=new re({color:16770688,roughness:.1,metalness:.9,emissive:16765286,emissiveIntensity:.9});const t=document.createElement("canvas");t.width=512,t.height=720;const e=t.getContext("2d"),n=e.createRadialGradient(256,360,40,256,360,400);n.addColorStop(0,"#fffefb"),n.addColorStop(.7,"#faf1dd"),n.addColorStop(1,"#ebd8b2"),e.fillStyle=n,e.fillRect(0,0,512,720),e.strokeStyle="rgba(212, 175, 55, 0.85)",e.lineWidth=6,e.strokeRect(16,16,480,688),e.fillStyle="#b8860b",e.font="bold 22px sans-serif",e.textAlign="center",e.fillText("✦  ✦  ✦",256,65),e.fillStyle="#1c0512",e.font="bold 28px sans-serif",e.fillText("Una carta para ti",256,115),this.parchmentSheetTex=new Jn(t),this.sheetMat=new re({map:this.parchmentSheetTex,roughness:.35,metalness:.05,emissive:16777215,emissiveMap:this.parchmentSheetTex,emissiveIntensity:.35,side:ke})}initEnvelopeModel(){this.envelopeMeshGroup=new Kt,this.group.add(this.envelopeMeshGroup);const t=new $e(15,10.5,.3);this.backMesh=new K(t,this.envelopeMat),this.backMesh.position.z=-.2,this.envelopeMeshGroup.add(this.backMesh);const e=new $e(15,8,.3);this.frontMesh=new K(e,this.envelopeMat),this.frontMesh.position.set(0,-1.25,.2),this.envelopeMeshGroup.add(this.frontMesh);const n=new $e(15.2,10.7,.15),i=new K(n,this.goldTrimMat);i.position.z=-.3,this.envelopeMeshGroup.add(i);const s=new Hs(13.6,19.2);this.sheetMesh=new K(s,this.sheetMat),this.sheetMesh.position.set(0,-3.5,0),this.sheetMesh.scale.set(.72,.45,1),this.sheetMesh.visible=!1,this.envelopeMeshGroup.add(this.sheetMesh),this.flapPivot=new Kt,this.flapPivot.position.set(0,5.25,.22),this.envelopeMeshGroup.add(this.flapPivot);const o=new ur;o.moveTo(-7.5,0),o.lineTo(7.5,0),o.lineTo(0,-5.5),o.closePath();const a=new Jl(o);this.flapMesh=new K(a,this.envelopeMat),this.flapMesh.userData={type:"letter3D",isLetter:!0},this.flapPivot.add(this.flapMesh);const l=new K(a,this.goldTrimMat);l.position.z=-.04,l.scale.set(1.015,1.015,1),this.flapPivot.add(l),this.sealGroup=new Kt,this.sealGroup.position.set(0,-5.3,.18),this.flapPivot.add(this.sealGroup);const c=new Te(1.3,1.35,.25,24);c.rotateX(Math.PI/2),this.sealBase=new K(c,this.waxMat),this.sealBase.userData={type:"letter3D",isLetter:!0},this.sealGroup.add(this.sealBase);const h=new Bn(1.25,.18,12,24),u=new K(h,this.waxMat);this.sealGroup.add(u);const d=new ur;d.moveTo(0,-.4),d.bezierCurveTo(-.4,-.1,-.65,.3,-.65,.55),d.bezierCurveTo(-.65,.85,-.35,1.05,0,.75),d.bezierCurveTo(.35,1.05,.65,.85,.65,.55),d.bezierCurveTo(.65,.3,.4,-.1,0,-.4);const f={depth:.14,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.04,bevelThickness:.04},_=new Io(d,f);_.scale(.85,.85,.85),_.center(),this.sealHeartMesh=new K(_,this.sealHeartMat),this.sealHeartMesh.position.z=.15,this.sealHeartMesh.userData={type:"letter3D",isLetter:!0},this.sealGroup.add(this.sealHeartMesh),this.sealLight=new yo(16765286,2.2,32),this.sealLight.position.set(0,0,1.4),this.sealGroup.add(this.sealLight)}initStardustAura(){const e=new me,n=new Float32Array(195);this.pOrbit=[];for(let i=0;i<65;i++){const s=9+Math.random()*8,o=Math.random()*Math.PI*2,a=(Math.random()-.5)*12,l=.35+Math.random()*.7;n[i*3]=Math.cos(o)*s,n[i*3+1]=a,n[i*3+2]=Math.sin(o)*s,this.pOrbit.push({radius:s,angle:o,y:a,speed:l})}e.setAttribute("position",new pe(n,3)),this.auraMat=new Us({color:16765286,size:1.4,transparent:!0,opacity:.8,blending:jt}),this.auraParticles=new Si(e,this.auraMat),this.group.add(this.auraParticles)}spawnLetter(){this.group.visible=!0,this.hitCount=0,this.isOpen=!1,this.isOpening=!1,this.flapPivot.rotation.x=0,this.sheetMesh.visible=!1,this.sheetMesh.position.set(0,-3.5,0),this.sheetMesh.scale.set(.72,.45,1),this.envelopeMeshGroup.position.set(0,0,0),this.envelopeMeshGroup.scale.set(1,1,1),this.sealGroup.scale.set(1,1,1),this.waxMat.emissiveIntensity=.7,this.waxMat.emissive.setHex(7208984),Ct.fromTo(this.group.scale,{x:.001,y:.001,z:.001},{x:1,y:1,z:1,duration:1.8,ease:"back.out(1.5)"})}shake(t=1,e=.32){this.shakeTween&&this.shakeTween.kill();const n={intensity:t};this.shakeTween=Ct.to(n,{intensity:0,duration:e,ease:"power2.out",onUpdate:()=>{const i=n.intensity;i>.01?(this.envelopeMeshGroup.position.x=(Math.random()-.5)*i*1.8,this.envelopeMeshGroup.position.y=(Math.random()-.5)*i*1.8,this.envelopeMeshGroup.position.z=(Math.random()-.5)*i*1.2):this.envelopeMeshGroup.position.set(0,0,0)},onComplete:()=>{this.envelopeMeshGroup.position.set(0,0,0),this.shakeTween=null}})}registerHit(t=null){return this.isOpening||this.isOpen||!this.group.visible?null:(this.hitCount++,this.hitCount===1?(this.sound&&this.sound.playSolarHitSound(1),this.shake(1.2,.28),Ct.to(this.envelopeMeshGroup.scale,{x:1.2,y:1.2,z:1.2,duration:.16,yoyo:!0,repeat:1,ease:"power2.out"}),this.waxMat.emissiveIntensity=2.2,this.sealHeartMat.emissiveIntensity=3,this.sealLight.intensity=4,Ct.to(this.waxMat,{emissiveIntensity:.7,duration:.8}),Ct.to(this.sealHeartMat,{emissiveIntensity:.9,duration:.8}),Ct.to(this.sealLight,{intensity:2.2,duration:.8}),{hit:1,maxHits:3,message:"💌 ⚡ Sello Cósmico: 1/3 (¡Toca 2 veces más para abrir la carta!)"}):this.hitCount===2?(this.sound&&this.sound.playSolarHitSound(2),this.shake(2.4,.38),Ct.to(this.envelopeMeshGroup.scale,{x:1.35,y:1.35,z:1.35,duration:.15,yoyo:!0,repeat:1,ease:"power2.out"}),this.waxMat.emissiveIntensity=5,this.waxMat.emissive.setHex(16724838),this.sealHeartMat.emissiveIntensity=6,this.sealLight.intensity=8,Ct.to(this.waxMat,{emissiveIntensity:1.2,duration:.8,onComplete:()=>this.waxMat.emissive.setHex(7208984)}),Ct.to(this.sealHeartMat,{emissiveIntensity:1.2,duration:.8}),Ct.to(this.sealLight,{intensity:2.2,duration:.8}),{hit:2,maxHits:3,message:"💌 🔥 ¡Sello a punto de romperse: 2/3! (¡Un toque final!)"}):(this.openEnvelopeAnimation(t),{hit:3,maxHits:3,message:"💌 ✨ ¡CARTA ABIERTA! ✨"}))}openEnvelopeAnimation(t=null){if(this.isOpening||this.isOpen)return;this.isOpening=!0,this.sound&&(this.sound.playStardustChime(),this.sound.playSolarHitSound(2)),this.shake(3.2,.45),Ct.timeline().to(this.sealGroup.scale,{x:1.8,y:1.8,z:1.8,duration:.35,ease:"power2.out"}).to(this.sealGroup.scale,{x:.001,y:.001,z:.001,duration:.3,ease:"power2.in"}).to(this.flapPivot.rotation,{x:-Math.PI*.96,duration:1,ease:"power2.inOut",onStart:()=>{this.sheetMesh.visible=!0}},"-=0.2").to(this.sheetMesh.position,{y:7.5,z:3.5,duration:1.4,ease:"power2.out"},"-=0.4").to(this.sheetMesh.scale,{x:1,y:1,duration:1.4,ease:"power2.out"},"-=1.4").to(this.group.scale,{x:.001,y:.001,z:.001,duration:.8,ease:"power2.in",onComplete:()=>{this.isOpen=!0,this.isOpening=!1,this.group.visible=!1,t&&t()}},"-=0.2")}hideLetter(){Ct.to(this.group.scale,{x:.001,y:.001,z:.001,duration:.8,ease:"power2.in",onComplete:()=>{this.group.visible=!1,this.isOpen=!1,this.isOpening=!1}})}getIntersectedObject(t){return!this.group.visible||this.isOpening||this.isOpen?null:t.intersectObjects([this.backMesh,this.frontMesh,this.flapMesh,this.sealBase,this.sealHeartMesh],!0).length>0?this:null}update(t,e){if(this.group.visible&&!this.isOpen&&(this.group.position.y=12+Math.sin(e*2)*.7,this.group.rotation.y=Math.sin(e*1.2)*.1,this.auraParticles)){const n=this.auraParticles.geometry.attributes.position,i=n.array;for(let s=0;s<this.pOrbit.length;s++){const o=this.pOrbit[s];o.angle+=t*o.speed,i[s*3]=Math.cos(o.angle)*o.radius,i[s*3+1]=o.y+Math.sin(e*2+s)*.5,i[s*3+2]=Math.sin(o.angle)*o.radius}n.needsUpdate=!0}}}class ny{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.width=window.innerWidth,this.height=window.innerHeight,this.particles=[],this.hearts=[],this.mouse={x:-100,y:-100,isMoving:!1},this.lastSpawn=0,this.resize(),this.initEvents(),this.startLoop()}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height}initEvents(){window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("mousemove",t=>{this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.spawnTrailParticle(t.clientX,t.clientY)}),window.addEventListener("touchmove",t=>{if(t.touches.length>0){const e=t.touches[0];this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.spawnTrailParticle(e.clientX,e.clientY)}},{passive:!0}),window.addEventListener("click",t=>{this.spawnClickHeart(t.clientX,t.clientY),this.spawnSparkleBurst(t.clientX,t.clientY)})}spawnTrailParticle(t,e){const n=performance.now();n-this.lastSpawn<25||(this.lastSpawn=n,!(this.particles.length>80)&&this.particles.push({x:t+(Math.random()-.5)*8,y:e+(Math.random()-.5)*8,vx:(Math.random()-.5)*1.2,vy:(Math.random()-.5)*1.2-.5,size:Math.random()*2.8+1.2,alpha:.9,color:Math.random()>.4?"#f5d77f":"#f3a6b2",decay:.025+Math.random()*.02}))}spawnClickHeart(t,e){for(let n=0;n<3;n++)this.hearts.push({x:t+(Math.random()-.5)*20,y:e+(Math.random()-.5)*20,vx:(Math.random()-.5)*2,vy:-1.8-Math.random()*2.5,size:14+Math.random()*10,alpha:1,rotation:(Math.random()-.5)*.4,decay:.016+Math.random()*.01})}spawnSparkleBurst(t,e){for(let n=0;n<8;n++){const i=n/8*Math.PI*2,s=2+Math.random()*3;this.particles.push({x:t,y:e,vx:Math.cos(i)*s,vy:Math.sin(i)*s,size:Math.random()*3+1.5,alpha:1,color:"#ffffff",decay:.035})}}drawHeart(t,e,n,i,s,o){t.save(),t.translate(e,n),t.rotate(o),t.globalAlpha=Math.max(0,s),t.fillStyle="#e63956",t.shadowColor="#ff4b72",t.shadowBlur=12;const a=i/20;t.beginPath(),t.moveTo(0,a*-5),t.bezierCurveTo(a*5,a*-15,a*15,a*-5,0,a*12),t.bezierCurveTo(a*-15,a*-5,a*-5,a*-15,0,a*-5),t.fill(),t.restore()}startLoop(){const t=()=>{this.ctx.clearRect(0,0,this.width,this.height);for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.x+=n.vx,n.y+=n.vy,n.alpha-=n.decay,n.alpha<=0){this.particles.splice(e,1);continue}this.ctx.save(),this.ctx.globalAlpha=n.alpha,this.ctx.fillStyle=n.color,this.ctx.shadowColor=n.color,this.ctx.shadowBlur=6,this.ctx.beginPath(),this.ctx.arc(n.x,n.y,n.size,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()}for(let e=this.hearts.length-1;e>=0;e--){const n=this.hearts[e];if(n.x+=n.vx,n.y+=n.vy,n.alpha-=n.decay,n.alpha<=0){this.hearts.splice(e,1);continue}this.drawHeart(this.ctx,n.x,n.y,n.size,n.alpha,n.rotation)}requestAnimationFrame(t)};t()}}class iy{constructor(t,e,n,i){this.planetsSystem=t,this.cameraController=e,this.soundManager=n,this.snoopyPlane=i,this.memories=ei.memories,this.currentIndex=0,this.isOpen=!1,this.isTransitioning=!1,this.dialogueTypewriterTimer=null,this.modal=document.getElementById("memory-modal"),this.cardModal=this.modal.querySelector(".memory-card-modal"),this.labelsContainer=document.getElementById("labels-container"),this.tagEl=document.getElementById("memory-tag"),this.dateEl=document.getElementById("memory-date"),this.indicatorEl=document.getElementById("memory-indicator"),this.snoopyDialogueEl=document.getElementById("snoopy-dialogue-text"),this.singleView=document.getElementById("single-memory-view"),this.titleEl=document.getElementById("memory-title"),this.descEl=document.getElementById("memory-desc"),this.imgEl=document.getElementById("memory-img"),this.galleryView=document.getElementById("gallery-6-view"),this.galleryMainTitle=document.getElementById("gallery-main-title"),this.galleryMainDesc=document.getElementById("gallery-main-desc"),this.galleryGridContainer=document.getElementById("gallery-grid-container"),this.btnClose=document.getElementById("btn-close-memory"),this.btnPrev=document.getElementById("btn-prev-memory"),this.btnNext=document.getElementById("btn-next-memory"),this.initLabels(),this.initEvents()}initLabels(){this.labelsContainer.innerHTML="",this.labelElements=[],this.memories.forEach((t,e)=>{const n=document.createElement("div");n.className="planet-3d-tag",n.innerHTML=`
        <span class="tag-dot"></span>
        <span class="tag-icon">${t.icon}</span>
        <span class="tag-text">${t.title}</span>
      `,n.addEventListener("click",i=>{i.stopPropagation(),this.openMemory(e)}),this.labelsContainer.appendChild(n),this.labelElements.push(n)})}initEvents(){this.btnClose.addEventListener("click",()=>this.closeMemory()),this.btnPrev.addEventListener("click",()=>this.prevMemory()),this.btnNext.addEventListener("click",()=>this.nextMemory()),this.modal.addEventListener("click",t=>{t.target===this.modal&&this.closeMemory()}),this.imgEl.addEventListener("error",()=>{this.imgEl.src=`assets/foto${this.currentIndex+1}.svg`})}openMemory(t){if(this.isTransitioning)return;this.isTransitioning=!0,this.currentIndex=t;const e=this.memories[t];if(!e){this.isTransitioning=!1;return}this.isOpen=!0,this.soundManager.playClickSound(),this.modal.classList.remove("active"),this.dialogueTypewriterTimer&&(clearInterval(this.dialogueTypewriterTimer),this.dialogueTypewriterTimer=null),this.onMemoryOpened&&this.onMemoryOpened(t),this.labelsContainer.style.display="none";const n=document.getElementById("space-guidance");n&&n.classList.remove("visible");const i=this.planetsSystem.planets[t];if(i){const s=i.basePos.clone(),o=4.2;this.snoopyPlane&&this.snoopyPlane.flyToPlanet(s,o);const a=e.description||e.snoopyDialogue;this.cameraController.escortCompanionToPlanet(this.snoopyPlane.group,s,o,()=>{this.tagEl&&(this.tagEl.textContent=e.tag||`Capítulo ${t+1}`),this.dateEl&&(this.dateEl.textContent=e.date||""),this.indicatorEl&&(this.indicatorEl.textContent=`${t+1} / ${this.memories.length}`),e.isGallery&&Array.isArray(e.gallery)?(this.cardModal.classList.add("is-gallery"),this.singleView&&(this.singleView.style.display="none"),this.galleryView&&(this.galleryView.style.display="flex"),this.galleryMainTitle&&(this.galleryMainTitle.textContent=e.title),this.galleryMainDesc&&(this.galleryMainDesc.textContent=e.description),this.renderGalleryItems(e.gallery)):(this.cardModal.classList.remove("is-gallery"),this.galleryView&&(this.galleryView.style.display="none"),this.singleView&&(this.singleView.style.display="block"),this.titleEl&&(this.titleEl.textContent=e.title),this.descEl&&(this.descEl.textContent=e.description),this.imgEl&&(this.imgEl.src=e.image)),this.modal.classList.add("active"),this.soundManager.playStardustChime(),this.playSnoopyDialogue(a),this.isTransitioning=!1})}else this.isTransitioning=!1}playSnoopyDialogue(t){if(this.dialogueTypewriterTimer&&(clearInterval(this.dialogueTypewriterTimer),this.dialogueTypewriterTimer=null),!this.snoopyDialogueEl)return;this.snoopyDialogueEl.textContent="";let e=0;const n=22;this.dialogueTypewriterTimer=setInterval(()=>{e<t.length?(this.snoopyDialogueEl.textContent+=t[e],e%4===0&&t[e]!==" "&&this.soundManager&&typeof this.soundManager.playTypewriterKey=="function"&&this.soundManager.playTypewriterKey(),e++):(clearInterval(this.dialogueTypewriterTimer),this.dialogueTypewriterTimer=null)},n)}renderGalleryItems(t){this.galleryGridContainer.innerHTML="",t.forEach((e,n)=>{const i=document.createElement("div");i.className="gallery-item-card",i.innerHTML=`
        <div class="gallery-thumb-wrap">
          <img src="${e.image}" alt="${e.title}" class="gallery-thumb-img" loading="lazy" />
        </div>
        <div class="gallery-item-info">
          <h4 class="gallery-item-title">${e.title}</h4>
          <p class="gallery-item-desc">${e.description}</p>
        </div>
      `;const s=i.querySelector(".gallery-thumb-img");s.addEventListener("error",()=>{s.src=`assets/galeria${n+1}.svg`}),this.galleryGridContainer.appendChild(i)})}closeMemory(){this.isOpen=!1,this.soundManager.playClickSound(),this.modal.classList.remove("active"),this.dialogueTypewriterTimer&&(clearInterval(this.dialogueTypewriterTimer),this.dialogueTypewriterTimer=null),this.snoopyPlane&&this.snoopyPlane.resumeCosmicFlight(),this.cameraController.moveTo(new P(0,18,90),new P(0,0,0),2,"power2.inOut",()=>{const t=document.getElementById("space-guidance");t&&t.classList.add("visible")})}closeModal(){this.closeMemory()}nextMemory(){this.currentIndex>=this.memories.length-1?(this.closeMemory(),this.onNextAfterLastMemory&&this.onNextAfterLastMemory()):this.openMemory(this.currentIndex+1)}prevMemory(){const t=(this.currentIndex-1+this.memories.length)%this.memories.length;this.openMemory(t)}updateLabels(t,e){if(this.isOpen){this.labelsContainer.style.display="none";return}this.labelsContainer.style.display="block",this.planetsSystem.getScreenPositions(t,e).forEach((i,s)=>{const o=this.labelElements[s];o&&(i.visible&&i.x>0&&i.x<t&&i.y>0&&i.y<e?(o.style.display="flex",o.style.left=`${i.x}px`,o.style.top=`${i.y-25}px`):o.style.display="none")})}}class sy{constructor(t,e){this.soundManager=t,this.onCompleteCallback=e,this.config=ei.letterSection,this.isOpened=!1,this.isTyping=!1,this.hasFinishedTyping=!1,this.overlay=document.getElementById("letter-overlay"),this.envelopeWrapper=document.getElementById("envelope-wrapper"),this.envelopeCard=document.getElementById("envelope-card"),this.btnOpen=document.getElementById("btn-open-letter"),this.parchmentWrapper=document.getElementById("parchment-wrapper"),this.letterTitle=document.getElementById("letter-title"),this.letterDate=document.getElementById("letter-date"),this.letterBody=document.getElementById("letter-body"),this.letterSignOff=document.getElementById("letter-sign-off"),this.letterSignature=document.getElementById("letter-signature"),this.btnAfterLetter=document.getElementById("btn-after-letter"),this.initContents(),this.initEvents()}initContents(){this.letterTitle.textContent=this.config.title,this.letterDate.textContent=this.config.dateStamp||ei.birthdayDate,this.letterSignOff.textContent=this.config.signOff,this.letterSignature.textContent=this.config.signature||ei.senderName,this.btnAfterLetter&&(this.btnAfterLetter.innerHTML="<span>Reiniciar viaje ✦</span>")}initEvents(){const t=()=>{this.isOpened||this.openLetter()};this.btnOpen&&this.btnOpen.addEventListener("click",t),this.envelopeCard&&this.envelopeCard.addEventListener("click",t),this.parchmentWrapper&&this.parchmentWrapper.addEventListener("click",e=>{this.isTyping&&!e.target.closest("#btn-after-letter")&&this.skipTypewriter()}),this.btnAfterLetter&&this.btnAfterLetter.addEventListener("click",()=>{this.soundManager.playClickSound(),this.hideSection(),this.onCompleteCallback&&this.onCompleteCallback()})}showSection(){this.overlay.classList.add("active"),this.envelopeWrapper&&this.envelopeWrapper.classList.remove("hidden"),this.hideBackgroundHUD()}hideSection(){this.overlay.classList.remove("active"),this.isOpened=!1,this.restoreBackgroundHUD()}openLetterDirectly(){this.overlay.classList.add("active"),this.envelopeWrapper&&this.envelopeWrapper.classList.add("hidden"),this.parchmentWrapper&&this.parchmentWrapper.classList.add("visible"),this.isOpened=!0,this.hideBackgroundHUD(),this.startTypewriter()}openLetter(){this.isOpened=!0,this.soundManager.playClickSound(),this.soundManager.playStardustChime(),this.hideBackgroundHUD(),Ct.to(this.envelopeWrapper,{opacity:0,scale:.8,duration:.5,ease:"power2.in",onComplete:()=>{this.envelopeWrapper.classList.add("hidden"),this.parchmentWrapper.classList.add("visible"),this.startTypewriter()}})}hideBackgroundHUD(){const t=document.getElementById("universe-hud");t&&(t.style.opacity="0",t.style.pointerEvents="none",t.style.transition="opacity 0.4s ease");const e=document.getElementById("top-nav");e&&(e.style.opacity="0",e.style.pointerEvents="none",e.style.transition="opacity 0.4s ease");const n=document.getElementById("space-guidance");n&&(n.style.display="none");const i=document.getElementById("labels-container");i&&(i.style.display="none")}restoreBackgroundHUD(){const t=document.getElementById("universe-hud");t&&(t.style.opacity="1",t.style.pointerEvents="auto");const e=document.getElementById("top-nav");e&&(e.style.opacity="1",e.style.pointerEvents="auto");const n=document.getElementById("space-guidance");n&&(n.style.display="flex");const i=document.getElementById("labels-container");i&&(i.style.display="block")}skipTypewriter(){if(this.hasFinishedTyping)return;this.isTyping=!1,this.hasFinishedTyping=!0,this.soundManager&&this.soundManager.playStardustChime(),this.letterBody.innerHTML="",this.config.letterText.forEach(e=>{const n=document.createElement("p");n.textContent=e,this.letterBody.appendChild(n)}),this.letterBody.scrollTop=0,Ct.to(this.btnAfterLetter,{opacity:1,y:0,duration:.5,ease:"power2.out"})}async startTypewriter(){if(this.isTyping)return;this.isTyping=!0,this.hasFinishedTyping=!1,this.letterBody.innerHTML="",this.btnAfterLetter&&(this.btnAfterLetter.style.opacity="0",this.btnAfterLetter.style.transform="translateY(10px)");const t=this.config.letterText;for(let e=0;e<t.length&&this.isTyping;e++){const n=t[e],i=document.createElement("p");this.letterBody.appendChild(i);const s=document.createElement("span");s.className="typewriter-cursor",i.appendChild(s);for(let o=0;o<n.length&&this.isTyping;o++){s.insertAdjacentText("beforebegin",n[o]),this.letterBody.scrollTop=this.letterBody.scrollHeight;const a=n[o]===" "?8:n[o]==="."||n[o]===","?35:12;await new Promise(l=>setTimeout(l,a))}s.remove(),this.letterBody.scrollTop=this.letterBody.scrollHeight,await new Promise(o=>setTimeout(o,90))}this.hasFinishedTyping=!0,this.isTyping=!1,Ct.to(this.btnAfterLetter,{opacity:1,y:0,duration:.6,ease:"power2.out"})}}class ry{constructor(t,e){this.soundManager=t,this.constellationsSystem=e,this.config=ei.easterEggs,this.toastContainer=document.getElementById("toast-container"),this.btnSecretStar=document.getElementById("btn-secret-star"),this.secretModal=document.getElementById("secret-modal"),this.btnCloseSecret=document.getElementById("btn-close-secret"),this.btnDismissSecret=document.getElementById("btn-dismiss-secret"),this.secretTitle=document.getElementById("secret-title"),this.secretText=document.getElementById("secret-text"),this.btnLoveBurst=document.getElementById("btn-love-burst"),this.initEvents()}initEvents(){this.btnLoveBurst&&this.btnLoveBurst.addEventListener("click",()=>{this.triggerLoveShower()}),this.btnSecretStar&&this.btnSecretStar.addEventListener("click",()=>{this.openSecretStarModal()});const t=()=>{this.soundManager.playClickSound(),this.secretModal.classList.remove("active")};this.btnCloseSecret.addEventListener("click",t),this.btnDismissSecret.addEventListener("click",t),this.secretModal.addEventListener("click",e=>{e.target===this.secretModal&&t()}),window.addEventListener("keydown",e=>{e.key==="l"||e.key==="L"?this.triggerLoveShower():(e.key==="c"||e.key==="C")&&this.toggleConstellations()})}openSecretStarModal(){this.soundManager.playClickSound(),this.soundManager.playStardustChime(),this.secretTitle.textContent=this.config.goldenStar.title,this.secretText.textContent=this.config.goldenStar.message,this.secretModal.classList.add("active")}triggerMoonSecret(){this.soundManager.playStardustChime(),this.showToast(this.config.moonMessage.message,"🌙")}triggerLoveShower(){this.soundManager.playStardustChime();const t=this.config.loveKeys,e=t[Math.floor(Math.random()*t.length)];this.showToast(e,"❤️")}toggleConstellations(){if(this.constellationsSystem){const t=this.constellationsSystem.toggleConstellation();this.soundManager.playStardustChime(),this.showToast(t?"✨ Constelación de Nuestro Amor revelada":"✨ Constelación oculta","🌌")}}showToast(t,e="✦"){this.toastContainer||(this.toastContainer=document.getElementById("toast-container"),this.toastContainer||(this.toastContainer=document.createElement("div"),this.toastContainer.id="toast-container",this.toastContainer.className="toast-container",document.body.appendChild(this.toastContainer)));const n=document.createElement("div");n.className="toast-msg",n.innerHTML=`<span>${e}</span> ${t}`,this.toastContainer.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(10px)",n.style.transition="opacity 0.4s ease, transform 0.4s ease",setTimeout(()=>n.remove(),400)},4500)}}class oy{constructor(t,e){this.appScene=t,this.soundManager=e,this.btnQuality=document.getElementById("btn-quality"),this.qualityLabel=document.getElementById("quality-label"),this.btnFullscreen=document.getElementById("btn-fullscreen"),this.levels=["high","medium","low"],this.labels={high:"Alta",medium:"Media",low:"Baja"},this.init()}init(){this.updateLabel(),this.btnQuality&&this.btnQuality.addEventListener("click",()=>{this.cycleQuality()}),this.btnFullscreen&&this.btnFullscreen.addEventListener("click",()=>{this.toggleFullscreen()})}updateLabel(){const t=this.labels[this.appScene.quality]||"Alta";this.qualityLabel&&(this.qualityLabel.textContent=t),this.btnQuality&&this.btnQuality.setAttribute("title",`Calidad Gráfica: ${t}`)}cycleQuality(){const e=(this.levels.indexOf(this.appScene.quality)+1)%this.levels.length,n=this.levels[e];this.appScene.setQuality(n),this.updateLabel(),this.soundManager.playClickSound()}toggleFullscreen(){this.soundManager.playClickSound(),document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}}class ay{constructor(t,e,n,i,s,o,a=null,l=null,c=null,h=null){this.appScene=t,this.camera=e,this.sound=n,this.heartMorph=i,this.letterModal=s,this.memoryModal=o,this.memoryPlanets=a,this.centralSun=l,this.snoopyPlane=c,this.letter3D=h,this.currentStep=0,this.totalSteps=5,this.visitedPlanets=new Set,this.visitedSun=!1,this.introScreen=document.getElementById("intro-screen"),this.universeHud=document.getElementById("universe-hud"),this.spaceGuidance=document.getElementById("space-guidance"),this.finaleScreen=document.getElementById("finale-screen"),this.btnStart=document.getElementById("btn-start-journey"),this.btnPrev=document.getElementById("btn-prev-stage"),this.btnNext=document.getElementById("btn-next-stage"),this.stepButtons=[document.getElementById("step-btn-0"),document.getElementById("step-btn-1"),document.getElementById("step-btn-2"),document.getElementById("step-btn-3"),document.getElementById("step-btn-4")],this.finaleStep1=document.getElementById("finale-step1"),this.finaleStep2=document.getElementById("finale-step2"),this.finaleReveal=document.getElementById("finale-main-reveal"),this.finaleMainTitle=document.getElementById("finale-main-title"),this.finaleLoveMsg=document.getElementById("finale-love-msg"),this.finaleWishMsg=document.getElementById("finale-wish-msg"),this.btnMakeWish=document.getElementById("btn-make-wish"),this.btnReplay=document.getElementById("btn-replay"),this.btnFreeModeFinale=document.getElementById("btn-free-mode-finale"),this.btnAudio=document.getElementById("btn-audio"),this.initTexts(),this.initEvents()}initTexts(){const t=ei,e=document.getElementById("intro-badge"),n=document.getElementById("intro-line1"),i=document.getElementById("intro-line2"),s=document.getElementById("intro-dedication"),o=document.getElementById("intro-start-text");e&&(e.textContent=t.intro.badge),n&&(n.textContent=t.intro.quoteLine1),i&&(i.textContent=t.intro.quoteLine2),s&&(s.textContent=t.intro.dedication),o&&(o.textContent=t.intro.startButton),this.finaleStep1&&(this.finaleStep1.textContent=t.finale.preTitle1),this.finaleStep2&&(this.finaleStep2.textContent=t.finale.preTitle2),this.finaleMainTitle&&(this.finaleMainTitle.textContent=t.finale.mainTitle),this.finaleLoveMsg&&(this.finaleLoveMsg.textContent=t.finale.heartMessage),this.finaleWishMsg&&(this.finaleWishMsg.textContent=t.finale.wishMessage)}initEvents(){this.btnStart.addEventListener("click",()=>{this.sound.play(),this.updateAudioButtonState(!0),this.introScreen.classList.remove("active"),this.universeHud.classList.add("visible"),this.spaceGuidance.classList.add("visible"),this.showUniverseOverview()}),this.btnAudio.addEventListener("click",()=>{const t=this.sound.togglePlay();this.updateAudioButtonState(t)}),this.btnPrev.addEventListener("click",()=>{this.sound.playClickSound(),this.goToStep(Math.max(0,this.currentStep-1))}),this.btnNext.addEventListener("click",()=>{this.sound.playClickSound();const t=this.currentStep+1;t<4?this.goToStep(t):this.focusSunAndPrompt()}),this.stepButtons.forEach((t,e)=>{t&&t.addEventListener("click",()=>{this.sound.playClickSound(),e<4?this.goToStep(e):this.focusSunAndPrompt()})}),this.memoryModal&&(this.memoryModal.onMemoryOpened=t=>{this.markPlanetVisited(t),this.currentStep=t,this.updateTimelineUI()},this.memoryModal.onNextAfterLastMemory=()=>{this.focusSunAndPrompt()}),this.btnMakeWish&&this.btnMakeWish.addEventListener("click",()=>{this.sound.playStardustChime(),this.sound.playHeartbeatSound(),this.btnMakeWish.innerHTML="✨ ¡Deseo enviado al universo con amor! ❤️",this.btnMakeWish.disabled=!0}),this.btnReplay&&this.btnReplay.addEventListener("click",()=>{this.sound.playClickSound(),window.location.reload()}),this.btnFreeModeFinale&&this.btnFreeModeFinale.addEventListener("click",()=>{this.sound.playClickSound(),this.finaleScreen.classList.remove("active"),this.universeHud.classList.add("visible"),this.memoryPlanets&&(this.memoryPlanets.setPlanetsDimmed(!1,1.2),this.memoryPlanets.restorePlanetsPosition(1.2))}),window.addEventListener("keydown",t=>{this.introScreen.classList.contains("active")||(t.key==="ArrowRight"?this.goToStep(Math.min(this.totalSteps-1,this.currentStep+1)):t.key==="ArrowLeft"&&this.goToStep(Math.max(0,this.currentStep-1)))})}markPlanetVisited(t){this.visitedPlanets.add(t);const e=this.stepButtons[t];if(e){e.classList.add("visited"),e.classList.remove("unvisited");const n=e.querySelector(".step-status-icon");n&&(n.textContent="✓")}}markSunVisited(){this.visitedSun=!0;const t=this.stepButtons[4];t&&(t.classList.add("visited"),t.classList.remove("unvisited"))}showUniverseOverview(){this.currentStep=-1,this.updateTimelineUI(),this.spaceGuidance&&this.spaceGuidance.classList.add("visible"),this.memoryPlanets&&(this.memoryPlanets.restorePlanetsPosition(1),this.memoryPlanets.setPlanetsDimmed(!1,1)),this.letterModal.hideSection();const e=window.innerWidth<768?new P(0,26,140):new P(0,32,160);this.camera.moveTo(e,new P(0,10,-5),2.5,"power2.inOut")}goToStep(t){this.currentStep=t,this.updateTimelineUI(),this.spaceGuidance&&this.spaceGuidance.classList.remove("visible"),t<4?(this.memoryPlanets&&(this.memoryPlanets.restorePlanetsPosition(1),this.memoryPlanets.setPlanetsDimmed(!1,1)),this.letterModal.hideSection(),this.markPlanetVisited(t),this.memoryModal.openMemory(t)):t===4&&this.focusSunAndPrompt()}focusSunAndPrompt(){this.currentStep=4,this.updateTimelineUI(),this.spaceGuidance&&this.spaceGuidance.classList.remove("visible"),this.memoryModal&&(typeof this.memoryModal.closeMemory=="function"?this.memoryModal.closeMemory():typeof this.memoryModal.closeModal=="function"&&this.memoryModal.closeModal());const t=this.centralSun?this.centralSun.group.position.clone():new P(0,12,0),n=window.innerWidth<768?new P(0,14,46):new P(0,16,52);this.camera.moveTo(n,t,2.2,"power2.inOut"),this.showToast("☀️ ✨ ¡Has llegado al Sol Central! Toca el Sol 3 veces para detonar la supernova 💥","☀️")}touchSun(t,e){this.markSunVisited(),this.currentStep=4,this.updateTimelineUI(),this.memoryModal&&(typeof this.memoryModal.closeMemory=="function"?this.memoryModal.closeMemory():typeof this.memoryModal.closeModal=="function"&&this.memoryModal.closeModal());const n=this.centralSun?this.centralSun.group.position.clone():new P(0,12,0),i=window.innerWidth<768,s=n.clone().add(i?new P(0,6,32):new P(0,8,38));if(this.camera&&this.camera.camera&&this.camera.camera.position.distanceTo(n)>55&&this.camera.moveTo(s,n,1.8,"power2.inOut"),this.centralSun){const o=this.centralSun.registerHit(()=>{const a=i?new P(0,36,165):new P(0,52,210);this.camera.moveTo(a,new P(0,12,0),4.8,"power2.out"),this.memoryPlanets&&this.memoryPlanets.disintegratePlanetsSupernova(3.8);const l=document.getElementById("labels-container");l&&(l.style.display="none"),setTimeout(()=>{if(this.letter3D){this.letter3D.spawnLetter();const c=new P(0,12,0),h=i?new P(0,12.2,30):new P(0,13.5,36);this.camera.moveTo(h,c,2.2,"power2.inOut")}else this.letterModal.openLetterDirectly()},3400)});o&&o.hit&&(this.camera&&typeof this.camera.shake=="function"&&(o.hit===1?this.camera.shake(1.5,.32):o.hit===2?this.camera.shake(3,.42):o.hit>=3&&this.camera.shake(5.5,.75)),this.spawnFloatingHitNumber(o.hit,3,t,e,"sun"))}else this.letter3D?this.letter3D.spawnLetter():this.letterModal.openLetterDirectly()}touchLetter3D(t,e){if(!this.letter3D||!this.letter3D.group.visible)return;const n=this.letter3D.registerHit(()=>{this.letterModal&&this.letterModal.openLetterDirectly()});n&&n.hit&&(this.camera&&typeof this.camera.shake=="function"&&(n.hit===1?this.camera.shake(1.2,.25):n.hit===2?this.camera.shake(2.2,.35):n.hit>=3&&this.camera.shake(3.8,.55)),this.spawnFloatingHitNumber(n.hit,3,t,e,"letter"))}openSunSupernova(t,e){this.touchSun(t,e)}spawnFloatingHitNumber(t,e=3,n,i,s="sun"){const o=n??window.innerWidth/2,a=i??window.innerHeight/2,l=document.createElement("div");l.className="floating-hit-counter";const c=t>=e;l.innerHTML=`<span class="hit-num">${t}</span>`,l.style.cssText=`
      position: fixed;
      left: ${o}px;
      top: ${a}px;
      transform: translate(-50%, -50%) scale(0.6);
      pointer-events: none;
      user-select: none;
      z-index: 9999;
      font-family: 'Outfit', sans-serif;
      font-size: ${c?"3.2rem":t===2?"2.5rem":"2.0rem"};
      font-weight: 800;
      letter-spacing: 1px;
      color: ${c?"#ffd166":t===2?"#ff6b81":"#ffffff"};
      text-shadow: 0 0 16px ${c?"rgba(255, 209, 102, 0.95)":"rgba(230, 57, 86, 0.85)"},
                   0 0 30px rgba(255, 209, 102, 0.6),
                   0 4px 12px rgba(0, 0, 0, 0.95);
      opacity: 0;
    `,document.body.appendChild(l),Ct.timeline({onComplete:()=>{l.remove()}}).to(l,{opacity:1,scale:1.35,y:-28,duration:.16,ease:"back.out(2.5)"}).to(l,{opacity:0,scale:.9,y:-80,duration:.52,ease:"power2.in"},"+=0.12")}showToast(t,e="✦"){let n=document.getElementById("toast-container");n||(n=document.createElement("div"),n.id="toast-container",n.className="toast-container",document.body.appendChild(n));const i=document.createElement("div");i.className="toast-msg",i.style.background="rgba(230, 57, 86, 0.85)",i.style.borderColor="#ffd166",i.style.boxShadow="0 0 20px rgba(255, 209, 102, 0.4)",i.innerHTML=`<span>${e}</span> ${t}`,n.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(10px)",i.style.transition="opacity 0.4s ease, transform 0.4s ease",setTimeout(()=>i.remove(),400)},3200)}updateTimelineUI(){this.stepButtons.forEach((t,e)=>{t&&(e===this.currentStep?t.classList.add("active"):t.classList.remove("active"))}),this.updateWalkthroughGuidance()}updateWalkthroughGuidance(){var e,n,i,s,o;const t=document.getElementById("guidance-text");this.stepButtons.forEach(a=>a==null?void 0:a.classList.remove("walkthrough-highlight")),this.visitedPlanets.has(0)?this.visitedPlanets.has(1)?this.visitedPlanets.has(2)?this.visitedPlanets.has(3)?((o=this.stepButtons[4])==null||o.classList.add("walkthrough-highlight"),t&&(t.innerHTML="☀️ ✨ ¡Todos los recuerdos explorados! Toca el <strong>Sol Central</strong> para detonar la supernova 💥")):((s=this.stepButtons[3])==null||s.classList.add("walkthrough-highlight"),t&&(t.innerHTML="✨ <strong>Paso 4:</strong> Explora el <strong>Planeta 4 (Capítulo IV)</strong>")):((i=this.stepButtons[2])==null||i.classList.add("walkthrough-highlight"),t&&(t.innerHTML="✨ <strong>Paso 3:</strong> Descubre la galería en el <strong>Planeta 3 (Capítulo III)</strong>")):((n=this.stepButtons[1])==null||n.classList.add("walkthrough-highlight"),t&&(t.innerHTML="✨ <strong>Paso 2:</strong> Continúa al <strong>Planeta 2 (Capítulo II)</strong>")):((e=this.stepButtons[0])==null||e.classList.add("walkthrough-highlight"),t&&(t.innerHTML="✨ <strong>Paso 1:</strong> Toca el <strong>Planeta 1 (Capítulo I)</strong> en la barra inferior para comenzar la historia"))}updateAudioButtonState(t){t?this.btnAudio.classList.add("playing"):this.btnAudio.classList.remove("playing")}showFinaleStage(){this.introScreen.classList.remove("active"),this.spaceGuidance.classList.remove("visible"),this.letterModal.hideSection(),this.finaleScreen.classList.add("active"),this.memoryPlanets&&this.memoryPlanets.setPlanetsDimmed(!0,1.5),this.universeHud.classList.remove("visible"),this.camera.moveTo(new P(0,0,80),new P(0,0,0),3,"power2.inOut"),Ct.timeline().to(this.finaleStep1,{opacity:1,y:0,duration:1.2,ease:"power2.out"}).to(this.finaleStep1,{opacity:0,y:-20,duration:.8,delay:1.5,ease:"power2.in"}).to(this.finaleStep2,{opacity:1,y:0,duration:1.2,ease:"power2.out"}).to(this.finaleStep2,{opacity:0,y:-20,duration:.8,delay:1.5,ease:"power2.in"}).call(()=>{this.finaleReveal.style.display="flex",this.sound.playHeartbeatSound(),this.heartMorph.morphToHeart(3.2),this.snoopyPlane&&(this.snoopyPlane.group.visible=!0,this.snoopyPlane.flyAroundHeart())}).to(this.finaleReveal,{opacity:1,duration:1.5,ease:"power2.out"})}resetJourney(){this.sound&&(this.sound.playClickSound(),this.sound.playStardustChime()),this.visitedPlanets.clear(),this.visitedSun=!1,this.currentStep=0,this.updateTimelineUI(),this.letter3D&&(this.letter3D.btnContinue&&(this.letter3D.btnContinue.style.pointerEvents="none",this.letter3D.btnContinue.style.opacity="0",this.letter3D.btnContinue.style.transform="translateX(-50%) translateY(30px)"),this.letter3D.group.visible=!1,this.letter3D.isOpen=!1,this.letter3D.isOpening=!1,this.letter3D.isTyping=!1),this.centralSun&&this.centralSun.restoreSun(1.8),this.memoryPlanets&&this.memoryPlanets.restorePlanetsPosition(1.8);const t=document.getElementById("top-nav");t&&(t.style.opacity="1",t.style.pointerEvents="auto");const e=document.getElementById("universe-hud");e&&(e.style.opacity="1",e.style.pointerEvents="auto");const n=document.getElementById("labels-container");n&&(n.style.display="block");const s=window.innerWidth<768?new P(0,24,115):new P(0,28,125);this.camera.moveTo(s,new P(0,12,0),2.2,"power2.inOut"),this.showToast("✨ ¡Universo reiniciado con éxito! Puedes explorar de nuevo 🪐","🌌")}}document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("webgl-container"),t=new Ev(r);new bv(t.scene);const e=new qx(t.camera,t.renderer.domElement),n=new Yx,i=new Zx(t.scene,t.quality),s=new $x(t.scene,t.quality),o=new Jx(t.scene,t.camera,t.quality),a=new Kx(t.scene,n),l=new jx(t.scene,t.quality),c=new Qx(t.scene),h=new ty(t.scene),u=new ey(t.scene,n,()=>{_&&_.resetJourney()}),d=document.getElementById("cursor-canvas");new ny(d);const f=new iy(o,e,n,h);let _=null;const g=new sy(n,()=>{_&&_.resetJourney()});new ry(n,c),new oy(t,n),_=new ay(t,e,n,l,g,f,o,a,h,u);const m=new Cu,p=new ct;window.addEventListener("mousemove",w=>{var U;if((U=document.getElementById("intro-screen"))==null?void 0:U.classList.contains("active")){document.body.style.cursor="default";return}p.x=w.clientX/window.innerWidth*2-1,p.y=-(w.clientY/window.innerHeight)*2+1;const S=o.getIntersectedObject(p,t.camera);o.setHoveredPlanet(S),m.setFromCamera(p,t.camera);const y=m.intersectObject(a.coreMesh);a.setHovered(y.length>0);const L=u.getIntersectedObject(m);S||y.length>0||L?document.body.style.cursor="pointer":document.body.style.cursor="default"});let M={x:0,y:0},x=!1;window.addEventListener("touchstart",w=>{var S;(S=document.getElementById("intro-screen"))!=null&&S.classList.contains("active")||w.touches.length===1&&(M.x=w.touches[0].clientX,M.y=w.touches[0].clientY,x=!1)},{passive:!0}),window.addEventListener("touchmove",w=>{var S;if(!((S=document.getElementById("intro-screen"))!=null&&S.classList.contains("active"))&&w.touches.length===1){const y=Math.abs(w.touches[0].clientX-M.x),L=Math.abs(w.touches[0].clientY-M.y);(y>7||L>7)&&(x=!0)}},{passive:!0});const v=document.getElementById("btn-exit-moon");let b=!1;const C=()=>{if(!b)return;b=!1,v&&v.classList.remove("visible");const A=window.innerWidth<768?new P(0,26,135):new P(0,32,155);e.moveTo(A,new P(0,12,0),2,"power2.inOut",()=>{const S=document.getElementById("space-guidance");S&&S.classList.add("visible")}),h&&h.resumeCosmicFlight()};v&&v.addEventListener("click",w=>{w.stopPropagation(),n.playClickSound(),C()}),window.addEventListener("click",w=>{var L;if((L=document.getElementById("intro-screen"))==null?void 0:L.classList.contains("active"))return;if(x){x=!1;return}if(w.target.closest(".modal-backdrop.active")||w.target.closest(".top-nav")||w.target.closest(".universe-hud")||w.target.closest(".planet-3d-tag")||w.target.closest(".letter-overlay.active")||w.target.closest(".exit-moon-btn")||w.target.closest("button"))return;if(p.x=w.clientX/window.innerWidth*2-1,p.y=-(w.clientY/window.innerHeight)*2+1,m.setFromCamera(p,t.camera),u&&u.group.visible&&u.getIntersectedObject(m)){_.touchLetter3D(w.clientX,w.clientY);return}if(m.intersectObject(a.coreMesh).length>0){b&&C(),_.openSunSupernova(w.clientX,w.clientY);return}const y=o.getIntersectedObject(p,t.camera);if(y){if(y.userData&&y.userData.type==="memoryPlanet")b&&C(),f.openMemory(y.userData.index);else if(y.userData&&y.userData.isMoon){if(b){n.playStardustChime(),o&&o.triggerMoonSnoopyClick();return}b=!0;const U=new P(0,81.6,-134.6),D=3;n.playStardustChime();const O=document.getElementById("space-guidance");O&&O.classList.remove("visible"),h&&h.flyToPlanet(U,D),o&&o.triggerMoonSnoopyClick(),h&&e.escortCompanionToPlanet(h.group,U,D,()=>{v&&v.classList.add("visible")})}}}),t.onUpdate((w,A,S)=>{e.update(w,A,S),i.update(w,A),s.update(w,A),o.update(w,A),a.update(w,A),u.update(w,A),l.update(w,A),c.update(w,A),h.update(w,A);const y=document.getElementById("intro-screen").classList.contains("active"),L=document.getElementById("finale-screen").classList.contains("active"),U=u&&u.group.visible,D=a&&(a.isExploding||a.isDisappeared),O=document.getElementById("labels-container");!y&&!L&&!U&&!D?(O&&(O.style.display="block"),f.updateLabels(window.innerWidth,window.innerHeight)):O&&(O.style.display="none")}),t.start(),console.log("🌌 Universo Romántico iniciado con éxito para",ei.recipientName)});
