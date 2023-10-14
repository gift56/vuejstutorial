(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ei(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const te={},Yt=[],De=()=>{},Ll=()=>!1,Ul=/^on[^a-z]/,Lr=t=>Ul.test(t),ti=t=>t.startsWith("onUpdate:"),de=Object.assign,ni=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fl=Object.prototype.hasOwnProperty,V=(t,e)=>Fl.call(t,e),B=Array.isArray,Xt=t=>Ur(t)==="[object Map]",_a=t=>Ur(t)==="[object Set]",H=t=>typeof t=="function",ue=t=>typeof t=="string",ri=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",ya=t=>ne(t)&&H(t.then)&&H(t.catch),ba=Object.prototype.toString,Ur=t=>ba.call(t),Bl=t=>Ur(t).slice(8,-1),va=t=>Ur(t)==="[object Object]",si=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cr=ei(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$l=/-(\w)/g,Ge=Fr(t=>t.replace($l,(e,n)=>n?n.toUpperCase():"")),jl=/\B([A-Z])/g,hn=Fr(t=>t.replace(jl,"-$1").toLowerCase()),Br=Fr(t=>t.charAt(0).toUpperCase()+t.slice(1)),os=Fr(t=>t?`on${Br(t)}`:""),Nn=(t,e)=>!Object.is(t,e),as=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Hl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hi;const As=()=>Hi||(Hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ii(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ue(r)?Kl(r):ii(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ue(t))return t;if(ne(t))return t}}const Wl=/;(?![^(]*\))/g,zl=/:([^]+)/,Vl=/\/\*[^]*?\*\//g;function Kl(t){const e={};return t.replace(Vl,"").split(Wl).forEach(n=>{if(n){const r=n.split(zl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function oi(t){let e="";if(ue(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=oi(t[n]);r&&(e+=r+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ql="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gl=ei(ql);function wa(t){return!!t||t===""}const Ft=t=>ue(t)?t:t==null?"":B(t)||ne(t)&&(t.toString===ba||!H(t.toString))?JSON.stringify(t,Ea,2):String(t),Ea=(t,e)=>e&&e.__v_isRef?Ea(t,e.value):Xt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:_a(e)?{[`Set(${e.size})`]:[...e.values()]}:ne(e)&&!B(e)&&!va(e)?String(e):e;let Ce;class Jl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!e&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ce;try{return Ce=this,e()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Yl(t,e=Ce){e&&e.active&&e.effects.push(t)}function Xl(){return Ce}const ai=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ia=t=>(t.w&Tt)>0,Ta=t=>(t.n&Tt)>0,Ql=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Tt},Zl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ia(s)&&!Ta(s)?s.delete(t):e[n++]=s,s.w&=~Tt,s.n&=~Tt}e.length=n}},Os=new WeakMap;let Tn=0,Tt=1;const Cs=30;let Pe;const Dt=Symbol(""),Ps=Symbol("");class ci{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yl(this,r)}run(){if(!this.active)return this.fn();let e=Pe,n=vt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pe,Pe=this,vt=!0,Tt=1<<++Tn,Tn<=Cs?Ql(this):Wi(this),this.fn()}finally{Tn<=Cs&&Zl(this),Tt=1<<--Tn,Pe=this.parent,vt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(Wi(this),this.onStop&&this.onStop(),this.active=!1)}}function Wi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vt=!0;const Sa=[];function pn(){Sa.push(vt),vt=!1}function mn(){const t=Sa.pop();vt=t===void 0?!0:t}function we(t,e,n){if(vt&&Pe){let r=Os.get(t);r||Os.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ai()),Ra(s)}}function Ra(t,e){let n=!1;Tn<=Cs?Ta(t)||(t.n|=Tt,n=!Ia(t)):n=!t.has(Pe),n&&(t.add(Pe),Pe.deps.push(t))}function st(t,e,n,r,s,i){const o=Os.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?si(n)&&a.push(o.get("length")):(a.push(o.get(Dt)),Xt(t)&&a.push(o.get(Ps)));break;case"delete":B(t)||(a.push(o.get(Dt)),Xt(t)&&a.push(o.get(Ps)));break;case"set":Xt(t)&&a.push(o.get(Dt));break}if(a.length===1)a[0]&&ks(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);ks(ai(c))}}function ks(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&zi(r);for(const r of n)r.computed||zi(r)}function zi(t,e){(t!==Pe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const eu=ei("__proto__,__v_isRef,__isVue"),Aa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ri)),tu=li(),nu=li(!1,!0),ru=li(!0),Vi=su();function su(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pn();const r=K(this)[e].apply(this,n);return mn(),r}}),t}function iu(t){const e=K(this);return we(e,"has",t),e.hasOwnProperty(t)}function li(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?wu:xa:e?ka:Pa).get(r))return r;const o=B(r);if(!t){if(o&&V(Vi,s))return Reflect.get(Vi,s,i);if(s==="hasOwnProperty")return iu}const a=Reflect.get(r,s,i);return(ri(s)?Aa.has(s):eu(s))||(t||we(r,"get",s),e)?a:ge(a)?o&&si(s)?a:a.value:ne(a)?t?Da(a):jr(a):a}}const ou=Oa(),au=Oa(!0);function Oa(t=!1){return function(n,r,s,i){let o=n[r];if(sn(o)&&ge(o)&&!ge(s))return!1;if(!t&&(!wr(s)&&!sn(s)&&(o=K(o),s=K(s)),!B(n)&&ge(o)&&!ge(s)))return o.value=s,!0;const a=B(n)&&si(r)?Number(r)<n.length:V(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?Nn(s,o)&&st(n,"set",r,s):st(n,"add",r,s)),c}}function cu(t,e){const n=V(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&st(t,"delete",e,void 0),r}function lu(t,e){const n=Reflect.has(t,e);return(!ri(e)||!Aa.has(e))&&we(t,"has",e),n}function uu(t){return we(t,"iterate",B(t)?"length":Dt),Reflect.ownKeys(t)}const Ca={get:tu,set:ou,deleteProperty:cu,has:lu,ownKeys:uu},fu={get:ru,set(t,e){return!0},deleteProperty(t,e){return!0}},du=de({},Ca,{get:nu,set:au}),ui=t=>t,$r=t=>Reflect.getPrototypeOf(t);function tr(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&we(s,"get",e),we(s,"get",i));const{has:o}=$r(s),a=r?ui:n?hi:Dn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function nr(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&we(r,"has",t),we(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function rr(t,e=!1){return t=t.__v_raw,!e&&we(K(t),"iterate",Dt),Reflect.get(t,"size",t)}function Ki(t){t=K(t);const e=K(this);return $r(e).has.call(e,t)||(e.add(t),st(e,"add",t,t)),this}function qi(t,e){e=K(e);const n=K(this),{has:r,get:s}=$r(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Nn(e,o)&&st(n,"set",t,e):st(n,"add",t,e),this}function Gi(t){const e=K(this),{has:n,get:r}=$r(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&st(e,"delete",t,void 0),i}function Ji(){const t=K(this),e=t.size!==0,n=t.clear();return e&&st(t,"clear",void 0,void 0),n}function sr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?ui:t?hi:Dn;return!t&&we(a,"iterate",Dt),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function ir(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Xt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?ui:e?hi:Dn;return!e&&we(i,"iterate",c?Ps:Dt),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[l(d[0]),l(d[1])]:l(d),done:p}},[Symbol.iterator](){return this}}}}function lt(t){return function(...e){return t==="delete"?!1:this}}function hu(){const t={get(i){return tr(this,i)},get size(){return rr(this)},has:nr,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:sr(!1,!1)},e={get(i){return tr(this,i,!1,!0)},get size(){return rr(this)},has:nr,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:sr(!1,!0)},n={get(i){return tr(this,i,!0)},get size(){return rr(this,!0)},has(i){return nr.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:sr(!0,!1)},r={get(i){return tr(this,i,!0,!0)},get size(){return rr(this,!0)},has(i){return nr.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:sr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ir(i,!1,!1),n[i]=ir(i,!0,!1),e[i]=ir(i,!1,!0),r[i]=ir(i,!0,!0)}),[t,n,e,r]}const[pu,mu,gu,_u]=hu();function fi(t,e){const n=e?t?_u:gu:t?mu:pu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,i)}const yu={get:fi(!1,!1)},bu={get:fi(!1,!0)},vu={get:fi(!0,!1)},Pa=new WeakMap,ka=new WeakMap,xa=new WeakMap,wu=new WeakMap;function Eu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iu(t){return t.__v_skip||!Object.isExtensible(t)?0:Eu(Bl(t))}function jr(t){return sn(t)?t:di(t,!1,Ca,yu,Pa)}function Na(t){return di(t,!1,du,bu,ka)}function Da(t){return di(t,!0,fu,vu,xa)}function di(t,e,n,r,s){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Iu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Qt(t){return sn(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function sn(t){return!!(t&&t.__v_isReadonly)}function wr(t){return!!(t&&t.__v_isShallow)}function Ma(t){return Qt(t)||sn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function La(t){return vr(t,"__v_skip",!0),t}const Dn=t=>ne(t)?jr(t):t,hi=t=>ne(t)?Da(t):t;function Ua(t){vt&&Pe&&(t=K(t),Ra(t.dep||(t.dep=ai())))}function Fa(t,e){t=K(t);const n=t.dep;n&&ks(n)}function ge(t){return!!(t&&t.__v_isRef===!0)}function Tu(t){return Ba(t,!1)}function Su(t){return Ba(t,!0)}function Ba(t,e){return ge(t)?t:new Ru(t,e)}class Ru{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:Dn(e)}get value(){return Ua(this),this._value}set value(e){const n=this.__v_isShallow||wr(e)||sn(e);e=n?e:K(e),Nn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Dn(e),Fa(this))}}function Zt(t){return ge(t)?t.value:t}const Au={get:(t,e,n)=>Zt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ge(s)&&!ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $a(t){return Qt(t)?t:new Proxy(t,Au)}class Ou{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ci(e,()=>{this._dirty||(this._dirty=!0,Fa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Ua(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Cu(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=De):(r=t.get,s=t.set),new Ou(r,s,i||!s,n)}function wt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Hr(i,e,n)}return s}function Me(t,e,n,r){if(H(t)){const i=wt(t,e,n,r);return i&&ya(i)&&i.catch(o=>{Hr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Me(t[i],e,n,r));return s}function Hr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){wt(c,null,10,[t,o,a]);return}}Pu(t,n,s,r)}function Pu(t,e,n,r=!0){console.error(t)}let Mn=!1,xs=!1;const me=[];let ze=0;const en=[];let Ze=null,xt=0;const ja=Promise.resolve();let pi=null;function Ha(t){const e=pi||ja;return t?e.then(this?t.bind(this):t):e}function ku(t){let e=ze+1,n=me.length;for(;e<n;){const r=e+n>>>1;Ln(me[r])<t?e=r+1:n=r}return e}function mi(t){(!me.length||!me.includes(t,Mn&&t.allowRecurse?ze+1:ze))&&(t.id==null?me.push(t):me.splice(ku(t.id),0,t),Wa())}function Wa(){!Mn&&!xs&&(xs=!0,pi=ja.then(Va))}function xu(t){const e=me.indexOf(t);e>ze&&me.splice(e,1)}function Nu(t){B(t)?en.push(...t):(!Ze||!Ze.includes(t,t.allowRecurse?xt+1:xt))&&en.push(t),Wa()}function Yi(t,e=Mn?ze+1:0){for(;e<me.length;e++){const n=me[e];n&&n.pre&&(me.splice(e,1),e--,n())}}function za(t){if(en.length){const e=[...new Set(en)];if(en.length=0,Ze){Ze.push(...e);return}for(Ze=e,Ze.sort((n,r)=>Ln(n)-Ln(r)),xt=0;xt<Ze.length;xt++)Ze[xt]();Ze=null,xt=0}}const Ln=t=>t.id==null?1/0:t.id,Du=(t,e)=>{const n=Ln(t)-Ln(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Va(t){xs=!1,Mn=!0,me.sort(Du);const e=De;try{for(ze=0;ze<me.length;ze++){const n=me[ze];n&&n.active!==!1&&wt(n,null,14)}}finally{ze=0,me.length=0,za(),Mn=!1,pi=null,(me.length||en.length)&&Va()}}function Mu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[l]||te;p&&(s=n.map(y=>ue(y)?y.trim():y)),d&&(s=n.map(Hl))}let a,c=r[a=os(e)]||r[a=os(Ge(e))];!c&&i&&(c=r[a=os(hn(e))]),c&&Me(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Me(u,t,6,s)}}function Ka(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=u=>{const l=Ka(u,e,!0);l&&(a=!0,de(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ne(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):de(o,i),ne(t)&&r.set(t,o),o)}function Wr(t,e){return!t||!Lr(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,hn(e))||V(t,e))}let xe=null,qa=null;function Er(t){const e=xe;return xe=t,qa=t&&t.type.__scopeId||null,e}function Ir(t,e=xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ao(-1);const i=Er(e);let o;try{o=t(...s)}finally{Er(i),r._d&&ao(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function cs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:d,data:p,setupState:y,ctx:g,inheritAttrs:I}=t;let x,P;const k=Er(t);try{if(n.shapeFlag&4){const M=s||r;x=We(l.call(M,M,d,i,y,p,g)),P=c}else{const M=e;x=We(M.length>1?M(i,{attrs:c,slots:a,emit:u}):M(i,null)),P=e.props?c:Lu(c)}}catch(M){Cn.length=0,Hr(M,t,1),x=re(Bt)}let j=x;if(P&&I!==!1){const M=Object.keys(P),{shapeFlag:ae}=j;M.length&&ae&7&&(o&&M.some(ti)&&(P=Uu(P,o)),j=on(j,P))}return n.dirs&&(j=on(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),x=j,Er(k),x}const Lu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Lr(n))&&((e||(e={}))[n]=t[n]);return e},Uu=(t,e)=>{const n={};for(const r in t)(!ti(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Fu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xi(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let d=0;d<l.length;d++){const p=l[d];if(o[p]!==r[p]&&!Wr(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xi(r,o,u):!0:!!o;return!1}function Xi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wr(n,i))return!0}return!1}function Bu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const $u=t=>t.__isSuspense;function ju(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Nu(t)}const or={};function lr(t,e,n){return Ga(t,e,n)}function Ga(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=te){var a;const c=Xl()===((a=he)==null?void 0:a.scope)?he:null;let u,l=!1,d=!1;if(ge(t)?(u=()=>t.value,l=wr(t)):Qt(t)?(u=()=>t,r=!0):B(t)?(d=!0,l=t.some(M=>Qt(M)||wr(M)),u=()=>t.map(M=>{if(ge(M))return M.value;if(Qt(M))return Gt(M);if(H(M))return wt(M,c,2)})):H(t)?e?u=()=>wt(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return p&&p(),Me(t,c,3,[y])}:u=De,e&&r){const M=u;u=()=>Gt(M())}let p,y=M=>{p=k.onStop=()=>{wt(M,c,4)}},g;if(Fn)if(y=De,e?n&&Me(e,c,3,[u(),d?[]:void 0,y]):u(),s==="sync"){const M=Uf();g=M.__watcherHandles||(M.__watcherHandles=[])}else return De;let I=d?new Array(t.length).fill(or):or;const x=()=>{if(k.active)if(e){const M=k.run();(r||l||(d?M.some((ae,ce)=>Nn(ae,I[ce])):Nn(M,I)))&&(p&&p(),Me(e,c,3,[M,I===or?void 0:d&&I[0]===or?[]:I,y]),I=M)}else k.run()};x.allowRecurse=!!e;let P;s==="sync"?P=x:s==="post"?P=()=>ve(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),P=()=>mi(x));const k=new ci(u,P);e?n?x():I=k.run():s==="post"?ve(k.run.bind(k),c&&c.suspense):k.run();const j=()=>{k.stop(),c&&c.scope&&ni(c.scope.effects,k)};return g&&g.push(j),j}function Hu(t,e,n){const r=this.proxy,s=ue(t)?t.includes(".")?Ja(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=he;an(this);const a=Ga(s,i.bind(r),n);return o?an(o):Lt(),a}function Ja(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Gt(t,e){if(!ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ge(t))Gt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Gt(t[n],e);else if(_a(t)||Xt(t))t.forEach(n=>{Gt(n,e)});else if(va(t))for(const n in t)Gt(t[n],e);return t}function Ct(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(pn(),Me(c,n,8,[t.el,a,t,e]),mn())}}function Ya(t,e){return H(t)?(()=>de({name:t.name},e,{setup:t}))():t}const ur=t=>!!t.type.__asyncLoader,Xa=t=>t.type.__isKeepAlive;function Wu(t,e){Qa(t,"a",e)}function zu(t,e){Qa(t,"da",e)}function Qa(t,e,n=he){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(zr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xa(s.parent.vnode)&&Vu(r,e,n,s),s=s.parent}}function Vu(t,e,n,r){const s=zr(e,t,r,!0);Za(()=>{ni(r[e],s)},n)}function zr(t,e,n=he,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pn(),an(n);const a=Me(e,n,t,o);return Lt(),mn(),a});return r?s.unshift(i):s.push(i),i}}const ot=t=>(e,n=he)=>(!Fn||t==="sp")&&zr(t,(...r)=>e(...r),n),Ku=ot("bm"),qu=ot("m"),Gu=ot("bu"),Ju=ot("u"),Yu=ot("bum"),Za=ot("um"),Xu=ot("sp"),Qu=ot("rtg"),Zu=ot("rtc");function ef(t,e=he){zr("ec",t,e)}const ec="components";function St(t,e){return nf(ec,t,!0,e)||t}const tf=Symbol.for("v-ndc");function nf(t,e,n=!0,r=!1){const s=xe||he;if(s){const i=s.type;if(t===ec){const a=Df(i,!1);if(a&&(a===e||a===Ge(e)||a===Br(Ge(e))))return i}const o=Qi(s[t]||i[t],e)||Qi(s.appContext[t],e);return!o&&r?i:o}}function Qi(t,e){return t&&(t[e]||t[Ge(e)]||t[Br(Ge(e))])}function tc(t,e,n,r){let s;const i=n&&n[r];if(B(t)||ue(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ns=t=>t?dc(t)?vi(t)||t.proxy:Ns(t.parent):null,On=de(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ns(t.parent),$root:t=>Ns(t.root),$emit:t=>t.emit,$options:t=>gi(t),$forceUpdate:t=>t.f||(t.f=()=>mi(t.update)),$nextTick:t=>t.n||(t.n=Ha.bind(t.proxy)),$watch:t=>Hu.bind(t)}),ls=(t,e)=>t!==te&&!t.__isScriptSetup&&V(t,e),rf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ls(r,e))return o[e]=1,r[e];if(s!==te&&V(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&V(u,e))return o[e]=3,i[e];if(n!==te&&V(n,e))return o[e]=4,n[e];Ds&&(o[e]=0)}}const l=On[e];let d,p;if(l)return e==="$attrs"&&we(t,"get",e),l(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==te&&V(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,V(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ls(s,e)?(s[e]=n,!0):r!==te&&V(r,e)?(r[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==te&&V(t,o)||ls(e,o)||(a=i[0])&&V(a,o)||V(r,o)||V(On,o)||V(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zi(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ds=!0;function sf(t){const e=gi(t),n=t.proxy,r=t.ctx;Ds=!1,e.beforeCreate&&eo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:p,beforeUpdate:y,updated:g,activated:I,deactivated:x,beforeDestroy:P,beforeUnmount:k,destroyed:j,unmounted:M,render:ae,renderTracked:ce,renderTriggered:Ee,errorCaptured:Ae,serverPrefetch:Fe,expose:Se,inheritAttrs:at,components:Ot,directives:Be,filters:bn}=e;if(u&&of(u,r,null),o)for(const X in o){const q=o[X];H(q)&&(r[X]=q.bind(n))}if(s){const X=s.call(n,n);ne(X)&&(t.data=jr(X))}if(Ds=!0,i)for(const X in i){const q=i[X],Xe=H(q)?q.bind(n,n):H(q.get)?q.get.bind(n,n):De,ct=!H(q)&&H(q.set)?q.set.bind(n):De,$e=ke({get:Xe,set:ct});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>$e.value,set:be=>$e.value=be})}if(a)for(const X in a)nc(a[X],r,n,X);if(c){const X=H(c)?c.call(n):c;Reflect.ownKeys(X).forEach(q=>{fr(q,X[q])})}l&&eo(l,t,"c");function fe(X,q){B(q)?q.forEach(Xe=>X(Xe.bind(n))):q&&X(q.bind(n))}if(fe(Ku,d),fe(qu,p),fe(Gu,y),fe(Ju,g),fe(Wu,I),fe(zu,x),fe(ef,Ae),fe(Zu,ce),fe(Qu,Ee),fe(Yu,k),fe(Za,M),fe(Xu,Fe),B(Se))if(Se.length){const X=t.exposed||(t.exposed={});Se.forEach(q=>{Object.defineProperty(X,q,{get:()=>n[q],set:Xe=>n[q]=Xe})})}else t.exposed||(t.exposed={});ae&&t.render===De&&(t.render=ae),at!=null&&(t.inheritAttrs=at),Ot&&(t.components=Ot),Be&&(t.directives=Be)}function of(t,e,n=De){B(t)&&(t=Ms(t));for(const r in t){const s=t[r];let i;ne(s)?"default"in s?i=nt(s.from||r,s.default,!0):i=nt(s.from||r):i=nt(s),ge(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function eo(t,e,n){Me(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function nc(t,e,n,r){const s=r.includes(".")?Ja(n,r):()=>n[r];if(ue(t)){const i=e[t];H(i)&&lr(s,i)}else if(H(t))lr(s,t.bind(n));else if(ne(t))if(B(t))t.forEach(i=>nc(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&lr(s,i,t)}}function gi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Tr(c,u,o,!0)),Tr(c,e,o)),ne(e)&&i.set(e,c),c}function Tr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Tr(t,i,n,!0),s&&s.forEach(o=>Tr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=af[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const af={data:to,props:no,emits:no,methods:Sn,computed:Sn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:Sn,directives:Sn,watch:lf,provide:to,inject:cf};function to(t,e){return e?t?function(){return de(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function cf(t,e){return Sn(Ms(t),Ms(e))}function Ms(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Sn(t,e){return t?de(Object.create(null),t,e):e}function no(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:de(Object.create(null),Zi(t),Zi(e??{})):e}function lf(t,e){if(!t)return e;if(!e)return t;const n=de(Object.create(null),t);for(const r in e)n[r]=ye(t[r],e[r]);return n}function rc(){return{app:null,config:{isNativeTag:Ll,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uf=0;function ff(t,e){return function(r,s=null){H(r)||(r=de({},r)),s!=null&&!ne(s)&&(s=null);const i=rc(),o=new Set;let a=!1;const c=i.app={_uid:uf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ff,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...l)):H(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,d){if(!a){const p=re(r,s);return p.appContext=i,l&&e?e(p,u):t(p,u,d),a=!0,c._container=u,u.__vue_app__=c,vi(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c},runWithContext(u){Sr=c;try{return u()}finally{Sr=null}}};return c}}let Sr=null;function fr(t,e){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[t]=e}}function nt(t,e,n=!1){const r=he||xe;if(r||Sr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Sr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function df(t,e,n,r=!1){const s={},i={};vr(i,Kr,1),t.propsDefaults=Object.create(null),sc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Na(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let d=0;d<l.length;d++){let p=l[d];if(Wr(t.emitsOptions,p))continue;const y=e[p];if(c)if(V(i,p))y!==i[p]&&(i[p]=y,u=!0);else{const g=Ge(p);s[g]=Ls(c,a,g,y,t,!1)}else y!==i[p]&&(i[p]=y,u=!0)}}}else{sc(t,e,s,i)&&(u=!0);let l;for(const d in a)(!e||!V(e,d)&&((l=hn(d))===d||!V(e,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(s[d]=Ls(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!V(e,d))&&(delete i[d],u=!0)}u&&st(t,"set","$attrs")}function sc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(cr(c))continue;const u=e[c];let l;s&&V(s,l=Ge(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Wr(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=K(n),u=a||te;for(let l=0;l<i.length;l++){const d=i[l];n[d]=Ls(s,c,d,u[d],t,!V(u,d))}}return o}function Ls(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=V(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(an(s),r=u[n]=c.call(null,e),Lt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===hn(n))&&(r=!0))}return r}function ic(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const l=d=>{c=!0;const[p,y]=ic(d,e,!0);de(o,p),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return ne(t)&&r.set(t,Yt),Yt;if(B(i))for(let l=0;l<i.length;l++){const d=Ge(i[l]);ro(d)&&(o[d]=te)}else if(i)for(const l in i){const d=Ge(l);if(ro(d)){const p=i[l],y=o[d]=B(p)||H(p)?{type:p}:de({},p);if(y){const g=oo(Boolean,y.type),I=oo(String,y.type);y[0]=g>-1,y[1]=I<0||g<I,(g>-1||V(y,"default"))&&a.push(d)}}}const u=[o,a];return ne(t)&&r.set(t,u),u}function ro(t){return t[0]!=="$"}function so(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function io(t,e){return so(t)===so(e)}function oo(t,e){return B(e)?e.findIndex(n=>io(n,t)):H(e)&&io(e,t)?0:-1}const oc=t=>t[0]==="_"||t==="$stable",_i=t=>B(t)?t.map(We):[We(t)],pf=(t,e,n)=>{if(e._n)return e;const r=Ir((...s)=>_i(e(...s)),n);return r._c=!1,r},ac=(t,e,n)=>{const r=t._ctx;for(const s in t){if(oc(s))continue;const i=t[s];if(H(i))e[s]=pf(s,i,r);else if(i!=null){const o=_i(i);e[s]=()=>o}}},cc=(t,e)=>{const n=_i(e);t.slots.default=()=>n},mf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),vr(e,"_",n)):ac(e,t.slots={})}else t.slots={},e&&cc(t,e);vr(t.slots,Kr,1)},gf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(de(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ac(e,s)),o=e}else e&&(cc(t,e),o={default:1});if(i)for(const a in s)!oc(a)&&!(a in o)&&delete s[a]};function Us(t,e,n,r,s=!1){if(B(t)){t.forEach((p,y)=>Us(p,e&&(B(e)?e[y]:e),n,r,s));return}if(ur(r)&&!s)return;const i=r.shapeFlag&4?vi(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===te?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==c&&(ue(u)?(l[u]=null,V(d,u)&&(d[u]=null)):ge(u)&&(u.value=null)),H(c))wt(c,a,12,[o,l]);else{const p=ue(c),y=ge(c);if(p||y){const g=()=>{if(t.f){const I=p?V(d,c)?d[c]:l[c]:c.value;s?B(I)&&ni(I,i):B(I)?I.includes(i)||I.push(i):p?(l[c]=[i],V(d,c)&&(d[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else p?(l[c]=o,V(d,c)&&(d[c]=o)):y&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,ve(g,n)):g()}}}const ve=ju;function _f(t){return yf(t)}function yf(t,e){const n=As();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:p,setScopeId:y=De,insertStaticContent:g}=t,I=(f,h,m,_=null,w=null,E=null,O=!1,S=null,R=!!h.dynamicChildren)=>{if(f===h)return;f&&!wn(f,h)&&(_=v(f),be(f,w,E,!0),f=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:T,ref:L,shapeFlag:N}=h;switch(T){case Vr:x(f,h,m,_);break;case Bt:P(f,h,m,_);break;case us:f==null&&k(h,m,_,O);break;case Te:Ot(f,h,m,_,w,E,O,S,R);break;default:N&1?ae(f,h,m,_,w,E,O,S,R):N&6?Be(f,h,m,_,w,E,O,S,R):(N&64||N&128)&&T.process(f,h,m,_,w,E,O,S,R,A)}L!=null&&w&&Us(L,f&&f.ref,E,h||f,!h)},x=(f,h,m,_)=>{if(f==null)r(h.el=a(h.children),m,_);else{const w=h.el=f.el;h.children!==f.children&&u(w,h.children)}},P=(f,h,m,_)=>{f==null?r(h.el=c(h.children||""),m,_):h.el=f.el},k=(f,h,m,_)=>{[f.el,f.anchor]=g(f.children,h,m,_,f.el,f.anchor)},j=({el:f,anchor:h},m,_)=>{let w;for(;f&&f!==h;)w=p(f),r(f,m,_),f=w;r(h,m,_)},M=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),s(f),f=m;s(h)},ae=(f,h,m,_,w,E,O,S,R)=>{O=O||h.type==="svg",f==null?ce(h,m,_,w,E,O,S,R):Fe(f,h,w,E,O,S,R)},ce=(f,h,m,_,w,E,O,S)=>{let R,T;const{type:L,props:N,shapeFlag:U,transition:$,dirs:W}=f;if(R=f.el=o(f.type,E,N&&N.is,N),U&8?l(R,f.children):U&16&&Ae(f.children,R,null,_,w,E&&L!=="foreignObject",O,S),W&&Ct(f,null,_,"created"),Ee(R,f,f.scopeId,O,_),N){for(const Y in N)Y!=="value"&&!cr(Y)&&i(R,Y,null,N[Y],E,f.children,_,w,pe);"value"in N&&i(R,"value",null,N.value),(T=N.onVnodeBeforeMount)&&He(T,_,f)}W&&Ct(f,null,_,"beforeMount");const Z=(!w||w&&!w.pendingBranch)&&$&&!$.persisted;Z&&$.beforeEnter(R),r(R,h,m),((T=N&&N.onVnodeMounted)||Z||W)&&ve(()=>{T&&He(T,_,f),Z&&$.enter(R),W&&Ct(f,null,_,"mounted")},w)},Ee=(f,h,m,_,w)=>{if(m&&y(f,m),_)for(let E=0;E<_.length;E++)y(f,_[E]);if(w){let E=w.subTree;if(h===E){const O=w.vnode;Ee(f,O,O.scopeId,O.slotScopeIds,w.parent)}}},Ae=(f,h,m,_,w,E,O,S,R=0)=>{for(let T=R;T<f.length;T++){const L=f[T]=S?ht(f[T]):We(f[T]);I(null,L,h,m,_,w,E,O,S)}},Fe=(f,h,m,_,w,E,O)=>{const S=h.el=f.el;let{patchFlag:R,dynamicChildren:T,dirs:L}=h;R|=f.patchFlag&16;const N=f.props||te,U=h.props||te;let $;m&&Pt(m,!1),($=U.onVnodeBeforeUpdate)&&He($,m,h,f),L&&Ct(h,f,m,"beforeUpdate"),m&&Pt(m,!0);const W=w&&h.type!=="foreignObject";if(T?Se(f.dynamicChildren,T,S,m,_,W,E):O||q(f,h,S,null,m,_,W,E,!1),R>0){if(R&16)at(S,h,N,U,m,_,w);else if(R&2&&N.class!==U.class&&i(S,"class",null,U.class,w),R&4&&i(S,"style",N.style,U.style,w),R&8){const Z=h.dynamicProps;for(let Y=0;Y<Z.length;Y++){const se=Z[Y],Oe=N[se],Vt=U[se];(Vt!==Oe||se==="value")&&i(S,se,Oe,Vt,w,f.children,m,_,pe)}}R&1&&f.children!==h.children&&l(S,h.children)}else!O&&T==null&&at(S,h,N,U,m,_,w);(($=U.onVnodeUpdated)||L)&&ve(()=>{$&&He($,m,h,f),L&&Ct(h,f,m,"updated")},_)},Se=(f,h,m,_,w,E,O)=>{for(let S=0;S<h.length;S++){const R=f[S],T=h[S],L=R.el&&(R.type===Te||!wn(R,T)||R.shapeFlag&70)?d(R.el):m;I(R,T,L,null,_,w,E,O,!0)}},at=(f,h,m,_,w,E,O)=>{if(m!==_){if(m!==te)for(const S in m)!cr(S)&&!(S in _)&&i(f,S,m[S],null,O,h.children,w,E,pe);for(const S in _){if(cr(S))continue;const R=_[S],T=m[S];R!==T&&S!=="value"&&i(f,S,T,R,O,h.children,w,E,pe)}"value"in _&&i(f,"value",m.value,_.value)}},Ot=(f,h,m,_,w,E,O,S,R)=>{const T=h.el=f?f.el:a(""),L=h.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:U,slotScopeIds:$}=h;$&&(S=S?S.concat($):$),f==null?(r(T,m,_),r(L,m,_),Ae(h.children,m,L,w,E,O,S,R)):N>0&&N&64&&U&&f.dynamicChildren?(Se(f.dynamicChildren,U,m,w,E,O,S),(h.key!=null||w&&h===w.subTree)&&lc(f,h,!0)):q(f,h,m,L,w,E,O,S,R)},Be=(f,h,m,_,w,E,O,S,R)=>{h.slotScopeIds=S,f==null?h.shapeFlag&512?w.ctx.activate(h,m,_,O,R):bn(h,m,_,w,E,O,R):Ht(f,h,R)},bn=(f,h,m,_,w,E,O)=>{const S=f.component=Cf(f,_,w);if(Xa(f)&&(S.ctx.renderer=A),Pf(S),S.asyncDep){if(w&&w.registerDep(S,fe),!f.el){const R=S.subTree=re(Bt);P(null,R,h,m)}return}fe(S,f,h,m,w,E,O)},Ht=(f,h,m)=>{const _=h.component=f.component;if(Fu(f,h,m))if(_.asyncDep&&!_.asyncResolved){X(_,h,m);return}else _.next=h,xu(_.update),_.update();else h.el=f.el,_.vnode=h},fe=(f,h,m,_,w,E,O)=>{const S=()=>{if(f.isMounted){let{next:L,bu:N,u:U,parent:$,vnode:W}=f,Z=L,Y;Pt(f,!1),L?(L.el=W.el,X(f,L,O)):L=W,N&&as(N),(Y=L.props&&L.props.onVnodeBeforeUpdate)&&He(Y,$,L,W),Pt(f,!0);const se=cs(f),Oe=f.subTree;f.subTree=se,I(Oe,se,d(Oe.el),v(Oe),f,w,E),L.el=se.el,Z===null&&Bu(f,se.el),U&&ve(U,w),(Y=L.props&&L.props.onVnodeUpdated)&&ve(()=>He(Y,$,L,W),w)}else{let L;const{el:N,props:U}=h,{bm:$,m:W,parent:Z}=f,Y=ur(h);if(Pt(f,!1),$&&as($),!Y&&(L=U&&U.onVnodeBeforeMount)&&He(L,Z,h),Pt(f,!0),N&&G){const se=()=>{f.subTree=cs(f),G(N,f.subTree,f,w,null)};Y?h.type.__asyncLoader().then(()=>!f.isUnmounted&&se()):se()}else{const se=f.subTree=cs(f);I(null,se,m,_,f,w,E),h.el=se.el}if(W&&ve(W,w),!Y&&(L=U&&U.onVnodeMounted)){const se=h;ve(()=>He(L,Z,se),w)}(h.shapeFlag&256||Z&&ur(Z.vnode)&&Z.vnode.shapeFlag&256)&&f.a&&ve(f.a,w),f.isMounted=!0,h=m=_=null}},R=f.effect=new ci(S,()=>mi(T),f.scope),T=f.update=()=>R.run();T.id=f.uid,Pt(f,!0),T()},X=(f,h,m)=>{h.component=f;const _=f.vnode.props;f.vnode=h,f.next=null,hf(f,h.props,_,m),gf(f,h.children,m),pn(),Yi(),mn()},q=(f,h,m,_,w,E,O,S,R=!1)=>{const T=f&&f.children,L=f?f.shapeFlag:0,N=h.children,{patchFlag:U,shapeFlag:$}=h;if(U>0){if(U&128){ct(T,N,m,_,w,E,O,S,R);return}else if(U&256){Xe(T,N,m,_,w,E,O,S,R);return}}$&8?(L&16&&pe(T,w,E),N!==T&&l(m,N)):L&16?$&16?ct(T,N,m,_,w,E,O,S,R):pe(T,w,E,!0):(L&8&&l(m,""),$&16&&Ae(N,m,_,w,E,O,S,R))},Xe=(f,h,m,_,w,E,O,S,R)=>{f=f||Yt,h=h||Yt;const T=f.length,L=h.length,N=Math.min(T,L);let U;for(U=0;U<N;U++){const $=h[U]=R?ht(h[U]):We(h[U]);I(f[U],$,m,null,w,E,O,S,R)}T>L?pe(f,w,E,!0,!1,N):Ae(h,m,_,w,E,O,S,R,N)},ct=(f,h,m,_,w,E,O,S,R)=>{let T=0;const L=h.length;let N=f.length-1,U=L-1;for(;T<=N&&T<=U;){const $=f[T],W=h[T]=R?ht(h[T]):We(h[T]);if(wn($,W))I($,W,m,null,w,E,O,S,R);else break;T++}for(;T<=N&&T<=U;){const $=f[N],W=h[U]=R?ht(h[U]):We(h[U]);if(wn($,W))I($,W,m,null,w,E,O,S,R);else break;N--,U--}if(T>N){if(T<=U){const $=U+1,W=$<L?h[$].el:_;for(;T<=U;)I(null,h[T]=R?ht(h[T]):We(h[T]),m,W,w,E,O,S,R),T++}}else if(T>U)for(;T<=N;)be(f[T],w,E,!0),T++;else{const $=T,W=T,Z=new Map;for(T=W;T<=U;T++){const Ie=h[T]=R?ht(h[T]):We(h[T]);Ie.key!=null&&Z.set(Ie.key,T)}let Y,se=0;const Oe=U-W+1;let Vt=!1,Bi=0;const vn=new Array(Oe);for(T=0;T<Oe;T++)vn[T]=0;for(T=$;T<=N;T++){const Ie=f[T];if(se>=Oe){be(Ie,w,E,!0);continue}let je;if(Ie.key!=null)je=Z.get(Ie.key);else for(Y=W;Y<=U;Y++)if(vn[Y-W]===0&&wn(Ie,h[Y])){je=Y;break}je===void 0?be(Ie,w,E,!0):(vn[je-W]=T+1,je>=Bi?Bi=je:Vt=!0,I(Ie,h[je],m,null,w,E,O,S,R),se++)}const $i=Vt?bf(vn):Yt;for(Y=$i.length-1,T=Oe-1;T>=0;T--){const Ie=W+T,je=h[Ie],ji=Ie+1<L?h[Ie+1].el:_;vn[T]===0?I(null,je,m,ji,w,E,O,S,R):Vt&&(Y<0||T!==$i[Y]?$e(je,m,ji,2):Y--)}}},$e=(f,h,m,_,w=null)=>{const{el:E,type:O,transition:S,children:R,shapeFlag:T}=f;if(T&6){$e(f.component.subTree,h,m,_);return}if(T&128){f.suspense.move(h,m,_);return}if(T&64){O.move(f,h,m,A);return}if(O===Te){r(E,h,m);for(let N=0;N<R.length;N++)$e(R[N],h,m,_);r(f.anchor,h,m);return}if(O===us){j(f,h,m);return}if(_!==2&&T&1&&S)if(_===0)S.beforeEnter(E),r(E,h,m),ve(()=>S.enter(E),w);else{const{leave:N,delayLeave:U,afterLeave:$}=S,W=()=>r(E,h,m),Z=()=>{N(E,()=>{W(),$&&$()})};U?U(E,W,Z):Z()}else r(E,h,m)},be=(f,h,m,_=!1,w=!1)=>{const{type:E,props:O,ref:S,children:R,dynamicChildren:T,shapeFlag:L,patchFlag:N,dirs:U}=f;if(S!=null&&Us(S,null,m,f,!0),L&256){h.ctx.deactivate(f);return}const $=L&1&&U,W=!ur(f);let Z;if(W&&(Z=O&&O.onVnodeBeforeUnmount)&&He(Z,h,f),L&6)er(f.component,m,_);else{if(L&128){f.suspense.unmount(m,_);return}$&&Ct(f,null,h,"beforeUnmount"),L&64?f.type.remove(f,h,m,w,A,_):T&&(E!==Te||N>0&&N&64)?pe(T,h,m,!1,!0):(E===Te&&N&384||!w&&L&16)&&pe(R,h,m),_&&Wt(f)}(W&&(Z=O&&O.onVnodeUnmounted)||$)&&ve(()=>{Z&&He(Z,h,f),$&&Ct(f,null,h,"unmounted")},m)},Wt=f=>{const{type:h,el:m,anchor:_,transition:w}=f;if(h===Te){zt(m,_);return}if(h===us){M(f);return}const E=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:S}=w,R=()=>O(m,E);S?S(f.el,E,R):R()}else E()},zt=(f,h)=>{let m;for(;f!==h;)m=p(f),s(f),f=m;s(h)},er=(f,h,m)=>{const{bum:_,scope:w,update:E,subTree:O,um:S}=f;_&&as(_),w.stop(),E&&(E.active=!1,be(O,f,h,m)),S&&ve(S,h),ve(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},pe=(f,h,m,_=!1,w=!1,E=0)=>{for(let O=E;O<f.length;O++)be(f[O],h,m,_,w)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),C=(f,h,m)=>{f==null?h._vnode&&be(h._vnode,null,null,!0):I(h._vnode||null,f,h,null,null,null,m),Yi(),za(),h._vnode=f},A={p:I,um:be,m:$e,r:Wt,mt:bn,mc:Ae,pc:q,pbc:Se,n:v,o:t};let D,G;return e&&([D,G]=e(A)),{render:C,hydrate:D,createApp:ff(C,D)}}function Pt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lc(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ht(s[i]),a.el=o.el),n||lc(o,a)),a.type===Vr&&(a.el=o.el)}}function bf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const vf=t=>t.__isTeleport,Te=Symbol.for("v-fgt"),Vr=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),us=Symbol.for("v-stc"),Cn=[];let Ne=null;function ie(t=!1){Cn.push(Ne=t?null:[])}function wf(){Cn.pop(),Ne=Cn[Cn.length-1]||null}let Un=1;function ao(t){Un+=t}function uc(t){return t.dynamicChildren=Un>0?Ne||Yt:null,wf(),Un>0&&Ne&&Ne.push(t),t}function le(t,e,n,r,s,i){return uc(Q(t,e,n,r,s,i,!0))}function Ef(t,e,n,r,s){return uc(re(t,e,n,r,s,!0))}function Fs(t){return t?t.__v_isVNode===!0:!1}function wn(t,e){return t.type===e.type&&t.key===e.key}const Kr="__vInternal",fc=({key:t})=>t??null,dr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||ge(t)||H(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function Q(t,e=null,n=null,r=0,s=null,i=t===Te?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fc(e),ref:e&&dr(e),scopeId:qa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return a?(yi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),Un>0&&!o&&Ne&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ne.push(c),c}const re=If;function If(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===tf)&&(t=Bt),Fs(t)){const a=on(t,e,!0);return n&&yi(a,n),Un>0&&!i&&Ne&&(a.shapeFlag&6?Ne[Ne.indexOf(t)]=a:Ne.push(a)),a.patchFlag|=-2,a}if(Mf(t)&&(t=t.__vccOpts),e){e=Tf(e);let{class:a,style:c}=e;a&&!ue(a)&&(e.class=oi(a)),ne(c)&&(Ma(c)&&!B(c)&&(c=de({},c)),e.style=ii(c))}const o=ue(t)?1:$u(t)?128:vf(t)?64:ne(t)?4:H(t)?2:0;return Q(t,e,n,r,s,o,i,!0)}function Tf(t){return t?Ma(t)||Kr in t?de({},t):t:null}function on(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Rf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fc(a),ref:e&&e.ref?n&&s?B(s)?s.concat(dr(e)):[s,dr(e)]:dr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&on(t.ssContent),ssFallback:t.ssFallback&&on(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Sf(t=" ",e=0){return re(Vr,null,t,e)}function Mt(t="",e=!1){return e?(ie(),Ef(Bt,null,t)):re(Bt,null,t)}function We(t){return t==null||typeof t=="boolean"?re(Bt):B(t)?re(Te,null,t.slice()):typeof t=="object"?ht(t):re(Vr,null,String(t))}function ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:on(t)}function yi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),yi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Kr in e)?e._ctx=xe:s===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),r&64?(n=16,e=[Sf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Rf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=oi([e.class,r.class]));else if(s==="style")e.style=ii([e.style,r.style]);else if(Lr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function He(t,e,n,r=null){Me(t,e,7,[n,r])}const Af=rc();let Of=0;function Cf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Af,i={uid:Of++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ic(r,s),emitsOptions:Ka(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Mu.bind(null,i),t.ce&&t.ce(i),i}let he=null,bi,Kt,co="__VUE_INSTANCE_SETTERS__";(Kt=As()[co])||(Kt=As()[co]=[]),Kt.push(t=>he=t),bi=t=>{Kt.length>1?Kt.forEach(e=>e(t)):Kt[0](t)};const an=t=>{bi(t),t.scope.on()},Lt=()=>{he&&he.scope.off(),bi(null)};function dc(t){return t.vnode.shapeFlag&4}let Fn=!1;function Pf(t,e=!1){Fn=e;const{props:n,children:r}=t.vnode,s=dc(t);df(t,n,s,e),mf(t,r);const i=s?kf(t,e):void 0;return Fn=!1,i}function kf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=La(new Proxy(t.ctx,rf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Nf(t):null;an(t),pn();const i=wt(r,t,0,[t.props,s]);if(mn(),Lt(),ya(i)){if(i.then(Lt,Lt),e)return i.then(o=>{lo(t,o,e)}).catch(o=>{Hr(o,t,0)});t.asyncDep=i}else lo(t,i,e)}else hc(t,e)}function lo(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=$a(e)),hc(t,n)}let uo;function hc(t,e,n){const r=t.type;if(!t.render){if(!e&&uo&&!r.render){const s=r.template||gi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=de(de({isCustomElement:i,delimiters:a},o),c);r.render=uo(s,u)}}t.render=r.render||De}an(t),pn(),sf(t),mn(),Lt()}function xf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return we(t,"get","$attrs"),e[n]}}))}function Nf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return xf(t)},slots:t.slots,emit:t.emit,expose:e}}function vi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($a(La(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in On)return On[n](t)},has(e,n){return n in e||n in On}}))}function Df(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Mf(t){return H(t)&&"__vccOpts"in t}const ke=(t,e)=>Cu(t,e,Fn);function pc(t,e,n){const r=arguments.length;return r===2?ne(e)&&!B(e)?Fs(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fs(n)&&(n=[n]),re(t,e,n))}const Lf=Symbol.for("v-scx"),Uf=()=>nt(Lf),Ff="3.3.4",Bf="http://www.w3.org/2000/svg",Nt=typeof document<"u"?document:null,fo=Nt&&Nt.createElement("template"),$f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Nt.createElementNS(Bf,t):Nt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Nt.createTextNode(t),createComment:t=>Nt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{fo.innerHTML=r?`<svg>${t}</svg>`:t;const a=fo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function jf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Hf(t,e,n){const r=t.style,s=ue(n);if(n&&!s){if(e&&!ue(e))for(const i in e)n[i]==null&&Bs(r,i,"");for(const i in n)Bs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ho=/\s*!important$/;function Bs(t,e,n){if(B(n))n.forEach(r=>Bs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Wf(t,e);ho.test(n)?t.setProperty(hn(r),n.replace(ho,""),"important"):t[r]=n}}const po=["Webkit","Moz","ms"],fs={};function Wf(t,e){const n=fs[e];if(n)return n;let r=Ge(e);if(r!=="filter"&&r in t)return fs[e]=r;r=Br(r);for(let s=0;s<po.length;s++){const i=po[s]+r;if(i in t)return fs[e]=i}return e}const mo="http://www.w3.org/1999/xlink";function zf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mo,e.slice(6,e.length)):t.setAttributeNS(mo,e,n);else{const i=Gl(e);n==null||i&&!wa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Vf(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,l=n??"";u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=wa(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Kf(t,e,n,r){t.addEventListener(e,n,r)}function qf(t,e,n,r){t.removeEventListener(e,n,r)}function Gf(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Jf(e);if(r){const u=i[e]=Qf(r,s);Kf(t,a,u,c)}else o&&(qf(t,a,o,c),i[e]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function Jf(t){let e;if(go.test(t)){e={};let r;for(;r=t.match(go);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hn(t.slice(2)),e]}let ds=0;const Yf=Promise.resolve(),Xf=()=>ds||(Yf.then(()=>ds=0),ds=Date.now());function Qf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Zf(r,n.value),e,5,[r])};return n.value=t,n.attached=Xf(),n}function Zf(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _o=/^on[a-z]/,ed=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?jf(t,r,s):e==="style"?Hf(t,n,r):Lr(e)?ti(e)||Gf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):td(t,e,r,s))?Vf(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zf(t,e,r,s))};function td(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&_o.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_o.test(e)&&ue(n)?!1:e in t}const nd=de({patchProp:ed},$f);let yo;function rd(){return yo||(yo=_f(nd))}const sd=(...t)=>{const e=rd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=id(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function id(t){return ue(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const qt=typeof window<"u";function od(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const J=Object.assign;function hs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Le(s)?s.map(t):t(s)}return n}const Pn=()=>{},Le=Array.isArray,ad=/\/$/,cd=t=>t.replace(ad,"");function ps(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=dd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function ld(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ud(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cn(e.matched[r],n.matched[s])&&mc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fd(t[n],e[n]))return!1;return!0}function fd(t,e){return Le(t)?vo(t,e):Le(e)?vo(e,t):t===e}function vo(t,e){return Le(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function dd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Bn;(function(t){t.pop="pop",t.push="push"})(Bn||(Bn={}));var kn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(kn||(kn={}));function hd(t){if(!t)if(qt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cd(t)}const pd=/^[^#]+#/;function md(t,e){return t.replace(pd,"#")+e}function gd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const qr=()=>({left:window.pageXOffset,top:window.pageYOffset});function _d(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wo(t,e){return(history.state?history.state.position-e:-1)+t}const $s=new Map;function yd(t,e){$s.set(t,e)}function bd(t){const e=$s.get(t);return $s.delete(t),e}let vd=()=>location.protocol+"//"+location.host;function gc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),bo(c,"")}return bo(n,t)+r+s}function wd(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const y=gc(t,location),g=n.value,I=e.value;let x=0;if(p){if(n.value=y,e.value=p,o&&o===g){o=null;return}x=I?p.position-I.position:0}else r(y);s.forEach(P=>{P(n.value,g,{delta:x,type:Bn.pop,direction:x?x>0?kn.forward:kn.back:kn.unknown})})};function c(){o=n.value}function u(p){s.push(p);const y=()=>{const g=s.indexOf(p);g>-1&&s.splice(g,1)};return i.push(y),y}function l(){const{history:p}=window;p.state&&p.replaceState(J({},p.state,{scroll:qr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function Eo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?qr():null}}function Ed(t){const{history:e,location:n}=window,r={value:gc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:vd()+t+c;try{e[l?"replaceState":"pushState"](u,"",p),s.value=u}catch(y){console.error(y),n[l?"replace":"assign"](p)}}function o(c,u){const l=J({},e.state,Eo(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=J({},s.value,e.state,{forward:c,scroll:qr()});i(l.current,l,!0);const d=J({},Eo(r.value,c,null),{position:l.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Id(t){t=hd(t);const e=Ed(t),n=wd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:md.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Td(t){return typeof t=="string"||t&&typeof t=="object"}function _c(t){return typeof t=="string"||typeof t=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yc=Symbol("");var Io;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Io||(Io={}));function ln(t,e){return J(new Error,{type:t,[yc]:!0},e)}function Qe(t,e){return t instanceof Error&&yc in t&&(e==null||!!(t.type&e))}const To="[^/]+?",Sd={sensitive:!1,strict:!1,start:!0,end:!0},Rd=/[.+*?^${}()[\]/\\]/g;function Ad(t,e){const n=J({},Sd,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let y=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Rd,"\\$&"),y+=40;else if(p.type===1){const{value:g,repeatable:I,optional:x,regexp:P}=p;i.push({name:g,repeatable:I,optional:x});const k=P||To;if(k!==To){y+=10;try{new RegExp(`(${k})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${k}): `+M.message)}}let j=I?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(j=x&&u.length<2?`(?:/${j})`:"/"+j),x&&(j+="?"),s+=j,y+=20,x&&(y+=-8),I&&(y+=-20),k===".*"&&(y+=-50)}l.push(y)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),d={};if(!l)return null;for(let p=1;p<l.length;p++){const y=l[p]||"",g=i[p-1];d[g.name]=y&&g.repeatable?y.split("/"):y}return d}function c(u){let l="",d=!1;for(const p of t){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const y of p)if(y.type===0)l+=y.value;else if(y.type===1){const{value:g,repeatable:I,optional:x}=y,P=g in u?u[g]:"";if(Le(P)&&!I)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const k=Le(P)?P.join("/"):P;if(!k)if(x)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);l+=k}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Od(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Cd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Od(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(So(r))return 1;if(So(s))return-1}return s.length-r.length}function So(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pd={type:0,value:""},kd=/[a-zA-Z0-9_]/;function xd(t){if(!t)return[[]];if(t==="/")return[[Pd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:kd.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function Nd(t,e,n){const r=Ad(xd(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Dd(t,e){const n=[],r=new Map;e=Oo({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,d,p){const y=!p,g=Md(l);g.aliasOf=p&&p.record;const I=Oo(e,l),x=[g];if("alias"in l){const j=typeof l.alias=="string"?[l.alias]:l.alias;for(const M of j)x.push(J({},g,{components:p?p.record.components:g.components,path:M,aliasOf:p?p.record:g}))}let P,k;for(const j of x){const{path:M}=j;if(d&&M[0]!=="/"){const ae=d.record.path,ce=ae[ae.length-1]==="/"?"":"/";j.path=d.record.path+(M&&ce+M)}if(P=Nd(j,d,I),p?p.alias.push(P):(k=k||P,k!==P&&k.alias.push(P),y&&l.name&&!Ao(P)&&o(l.name)),g.children){const ae=g.children;for(let ce=0;ce<ae.length;ce++)i(ae[ce],P,p&&p.children[ce])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return k?()=>{o(k)}:Pn}function o(l){if(_c(l)){const d=r.get(l);d&&(r.delete(l),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(l);d>-1&&(n.splice(d,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let d=0;for(;d<n.length&&Cd(l,n[d])>=0&&(l.record.path!==n[d].record.path||!bc(l,n[d]));)d++;n.splice(d,0,l),l.record.name&&!Ao(l)&&r.set(l.record.name,l)}function u(l,d){let p,y={},g,I;if("name"in l&&l.name){if(p=r.get(l.name),!p)throw ln(1,{location:l});I=p.record.name,y=J(Ro(d.params,p.keys.filter(k=>!k.optional).map(k=>k.name)),l.params&&Ro(l.params,p.keys.map(k=>k.name))),g=p.stringify(y)}else if("path"in l)g=l.path,p=n.find(k=>k.re.test(g)),p&&(y=p.parse(g),I=p.record.name);else{if(p=d.name?r.get(d.name):n.find(k=>k.re.test(d.path)),!p)throw ln(1,{location:l,currentLocation:d});I=p.record.name,y=J({},d.params,l.params),g=p.stringify(y)}const x=[];let P=p;for(;P;)x.unshift(P.record),P=P.parent;return{name:I,path:g,params:y,matched:x,meta:Ud(x)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ro(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Md(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ld(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ld(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ao(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ud(t){return t.reduce((e,n)=>J(e,n.meta),{})}function Oo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function bc(t,e){return e.children.some(n=>n===t||bc(t,n))}const vc=/#/g,Fd=/&/g,Bd=/\//g,$d=/=/g,jd=/\?/g,wc=/\+/g,Hd=/%5B/g,Wd=/%5D/g,Ec=/%5E/g,zd=/%60/g,Ic=/%7B/g,Vd=/%7C/g,Tc=/%7D/g,Kd=/%20/g;function wi(t){return encodeURI(""+t).replace(Vd,"|").replace(Hd,"[").replace(Wd,"]")}function qd(t){return wi(t).replace(Ic,"{").replace(Tc,"}").replace(Ec,"^")}function js(t){return wi(t).replace(wc,"%2B").replace(Kd,"+").replace(vc,"%23").replace(Fd,"%26").replace(zd,"`").replace(Ic,"{").replace(Tc,"}").replace(Ec,"^")}function Gd(t){return js(t).replace($d,"%3D")}function Jd(t){return wi(t).replace(vc,"%23").replace(jd,"%3F")}function Yd(t){return t==null?"":Jd(t).replace(Bd,"%2F")}function Rr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Xd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(wc," "),o=i.indexOf("="),a=Rr(o<0?i:i.slice(0,o)),c=o<0?null:Rr(i.slice(o+1));if(a in e){let u=e[a];Le(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Co(t){let e="";for(let n in t){const r=t[n];if(n=Gd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Le(r)?r.map(i=>i&&js(i)):[r&&js(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Qd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Le(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Zd=Symbol(""),Po=Symbol(""),Ei=Symbol(""),Sc=Symbol(""),Hs=Symbol("");function En(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(ln(4,{from:n,to:e})):d instanceof Error?a(d):Td(d)?a(ln(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(d=>a(d))})}function ms(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(eh(a)){const u=(a.__vccOpts||a)[e];u&&s.push(pt(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=od(u)?u.default:u;i.components[o]=l;const p=(l.__vccOpts||l)[e];return p&&pt(p,n,r,i,o)()}))}}return s}function eh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ko(t){const e=nt(Ei),n=nt(Sc),r=ke(()=>e.resolve(Zt(t.to))),s=ke(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const p=d.findIndex(cn.bind(null,l));if(p>-1)return p;const y=xo(c[u-2]);return u>1&&xo(l)===y&&d[d.length-1].path!==y?d.findIndex(cn.bind(null,c[u-2])):p}),i=ke(()=>s.value>-1&&sh(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&mc(n.params,r.value.params));function a(c={}){return rh(c)?e[Zt(t.replace)?"replace":"push"](Zt(t.to)).catch(Pn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const th=Ya({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ko,setup(t,{slots:e}){const n=jr(ko(t)),{options:r}=nt(Ei),s=ke(()=>({[No(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[No(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:pc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),nh=th;function rh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Le(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function xo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const No=(t,e,n)=>t??e??n,ih=Ya({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=nt(Hs),s=ke(()=>t.route||r.value),i=nt(Po,0),o=ke(()=>{let u=Zt(i);const{matched:l}=s.value;let d;for(;(d=l[u])&&!d.components;)u++;return u}),a=ke(()=>s.value.matched[o.value]);fr(Po,ke(()=>o.value+1)),fr(Zd,a),fr(Hs,s);const c=Tu();return lr(()=>[c.value,a.value,t.name],([u,l,d],[p,y,g])=>{l&&(l.instances[d]=u,y&&y!==l&&u&&u===p&&(l.leaveGuards.size||(l.leaveGuards=y.leaveGuards),l.updateGuards.size||(l.updateGuards=y.updateGuards))),u&&l&&(!y||!cn(l,y)||!p)&&(l.enterCallbacks[d]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,d=a.value,p=d&&d.components[l];if(!p)return Do(n.default,{Component:p,route:u});const y=d.props[l],g=y?y===!0?u.params:typeof y=="function"?y(u):y:null,x=pc(p,J({},g,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[l]=null)},ref:c}));return Do(n.default,{Component:x,route:u})||x}}});function Do(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const oh=ih;function ah(t){const e=Dd(t.routes,t),n=t.parseQuery||Xd,r=t.stringifyQuery||Co,s=t.history,i=En(),o=En(),a=En(),c=Su(ut);let u=ut;qt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=hs.bind(null,v=>""+v),d=hs.bind(null,Yd),p=hs.bind(null,Rr);function y(v,C){let A,D;return _c(v)?(A=e.getRecordMatcher(v),D=C):D=v,e.addRoute(D,A)}function g(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function I(){return e.getRoutes().map(v=>v.record)}function x(v){return!!e.getRecordMatcher(v)}function P(v,C){if(C=J({},C||c.value),typeof v=="string"){const m=ps(n,v,C.path),_=e.resolve({path:m.path},C),w=s.createHref(m.fullPath);return J(m,_,{params:p(_.params),hash:Rr(m.hash),redirectedFrom:void 0,href:w})}let A;if("path"in v)A=J({},v,{path:ps(n,v.path,C.path).path});else{const m=J({},v.params);for(const _ in m)m[_]==null&&delete m[_];A=J({},v,{params:d(m)}),C.params=d(C.params)}const D=e.resolve(A,C),G=v.hash||"";D.params=l(p(D.params));const f=ld(r,J({},v,{hash:qd(G),path:D.path})),h=s.createHref(f);return J({fullPath:f,hash:G,query:r===Co?Qd(v.query):v.query||{}},D,{redirectedFrom:void 0,href:h})}function k(v){return typeof v=="string"?ps(n,v,c.value.path):J({},v)}function j(v,C){if(u!==v)return ln(8,{from:C,to:v})}function M(v){return Ee(v)}function ae(v){return M(J(k(v),{replace:!0}))}function ce(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:A}=C;let D=typeof A=="function"?A(v):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),J({query:v.query,hash:v.hash,params:"path"in D?{}:v.params},D)}}function Ee(v,C){const A=u=P(v),D=c.value,G=v.state,f=v.force,h=v.replace===!0,m=ce(A);if(m)return Ee(J(k(m),{state:typeof m=="object"?J({},G,m.state):G,force:f,replace:h}),C||A);const _=A;_.redirectedFrom=C;let w;return!f&&ud(r,D,A)&&(w=ln(16,{to:_,from:D}),$e(D,D,!0,!1)),(w?Promise.resolve(w):Se(_,D)).catch(E=>Qe(E)?Qe(E,2)?E:ct(E):q(E,_,D)).then(E=>{if(E){if(Qe(E,2))return Ee(J({replace:h},k(E.to),{state:typeof E.to=="object"?J({},G,E.to.state):G,force:f}),C||_)}else E=Ot(_,D,!0,h,G);return at(_,D,E),E})}function Ae(v,C){const A=j(v,C);return A?Promise.reject(A):Promise.resolve()}function Fe(v){const C=zt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(v):v()}function Se(v,C){let A;const[D,G,f]=ch(v,C);A=ms(D.reverse(),"beforeRouteLeave",v,C);for(const m of D)m.leaveGuards.forEach(_=>{A.push(pt(_,v,C))});const h=Ae.bind(null,v,C);return A.push(h),pe(A).then(()=>{A=[];for(const m of i.list())A.push(pt(m,v,C));return A.push(h),pe(A)}).then(()=>{A=ms(G,"beforeRouteUpdate",v,C);for(const m of G)m.updateGuards.forEach(_=>{A.push(pt(_,v,C))});return A.push(h),pe(A)}).then(()=>{A=[];for(const m of f)if(m.beforeEnter)if(Le(m.beforeEnter))for(const _ of m.beforeEnter)A.push(pt(_,v,C));else A.push(pt(m.beforeEnter,v,C));return A.push(h),pe(A)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),A=ms(f,"beforeRouteEnter",v,C),A.push(h),pe(A))).then(()=>{A=[];for(const m of o.list())A.push(pt(m,v,C));return A.push(h),pe(A)}).catch(m=>Qe(m,8)?m:Promise.reject(m))}function at(v,C,A){a.list().forEach(D=>Fe(()=>D(v,C,A)))}function Ot(v,C,A,D,G){const f=j(v,C);if(f)return f;const h=C===ut,m=qt?history.state:{};A&&(D||h?s.replace(v.fullPath,J({scroll:h&&m&&m.scroll},G)):s.push(v.fullPath,G)),c.value=v,$e(v,C,A,h),ct()}let Be;function bn(){Be||(Be=s.listen((v,C,A)=>{if(!er.listening)return;const D=P(v),G=ce(D);if(G){Ee(J(G,{replace:!0}),D).catch(Pn);return}u=D;const f=c.value;qt&&yd(wo(f.fullPath,A.delta),qr()),Se(D,f).catch(h=>Qe(h,12)?h:Qe(h,2)?(Ee(h.to,D).then(m=>{Qe(m,20)&&!A.delta&&A.type===Bn.pop&&s.go(-1,!1)}).catch(Pn),Promise.reject()):(A.delta&&s.go(-A.delta,!1),q(h,D,f))).then(h=>{h=h||Ot(D,f,!1),h&&(A.delta&&!Qe(h,8)?s.go(-A.delta,!1):A.type===Bn.pop&&Qe(h,20)&&s.go(-1,!1)),at(D,f,h)}).catch(Pn)}))}let Ht=En(),fe=En(),X;function q(v,C,A){ct(v);const D=fe.list();return D.length?D.forEach(G=>G(v,C,A)):console.error(v),Promise.reject(v)}function Xe(){return X&&c.value!==ut?Promise.resolve():new Promise((v,C)=>{Ht.add([v,C])})}function ct(v){return X||(X=!v,bn(),Ht.list().forEach(([C,A])=>v?A(v):C()),Ht.reset()),v}function $e(v,C,A,D){const{scrollBehavior:G}=t;if(!qt||!G)return Promise.resolve();const f=!A&&bd(wo(v.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return Ha().then(()=>G(v,C,f)).then(h=>h&&_d(h)).catch(h=>q(h,v,C))}const be=v=>s.go(v);let Wt;const zt=new Set,er={currentRoute:c,listening:!0,addRoute:y,removeRoute:g,hasRoute:x,getRoutes:I,resolve:P,options:t,push:M,replace:ae,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:Xe,install(v){const C=this;v.component("RouterLink",nh),v.component("RouterView",oh),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Zt(c)}),qt&&!Wt&&c.value===ut&&(Wt=!0,M(s.location).catch(G=>{}));const A={};for(const G in ut)Object.defineProperty(A,G,{get:()=>c.value[G],enumerable:!0});v.provide(Ei,C),v.provide(Sc,Na(A)),v.provide(Hs,c);const D=v.unmount;zt.add(v),v.unmount=function(){zt.delete(v),zt.size<1&&(u=ut,Be&&Be(),Be=null,c.value=ut,Wt=!1,X=!1),D()}}};function pe(v){return v.reduce((C,A)=>C.then(()=>Fe(A)),Promise.resolve())}return er}function ch(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>cn(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>cn(u,c))||s.push(c))}return[n,r,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,y=u&63;c||(y=64,o||(p=64)),r.push(n[l],n[d],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw Error();const p=i<<2|a>>4;if(r.push(p),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},uh=function(t){const e=Rc(t);return Ac.encodeByteArray(e,!0)},Oc=function(t){return uh(t).replace(/\./g,"")},Cc=function(t){try{return Ac.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function dh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ph(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mh(){try{return typeof indexedDB=="object"}catch{return!1}}function gh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function _h(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=()=>_h().__FIREBASE_DEFAULTS__,bh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cc(t[1]);return e&&JSON.parse(e)},Ii=()=>{try{return yh()||bh()||vh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wh=t=>{var e,n;return(n=(e=Ii())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Eh=()=>{var t;return(t=Ii())===null||t===void 0?void 0:t.config},Pc=t=>{var e;return(e=Ii())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="FirebaseError";class Rt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Th,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kn.prototype.create)}}class Kn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Rt(s,a,r)}}function Sh(t,e){return t.replace(Rh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rh=/\{\$([^}]+)}/g;function Ah(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ar(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Mo(i)&&Mo(o)){if(!Ar(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Mo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function An(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Oh(t,e){const n=new Ch(t,e);return n.subscribe.bind(n)}class Ch{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ph(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=gs),s.error===void 0&&(s.error=gs),s.complete===void 0&&(s.complete=gs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ph(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ih;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nh(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xh(t){return t===kt?void 0:t}function Nh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Mh={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Lh=ee.INFO,Uh={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Fh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Uh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=Lh,this._logHandler=Fh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Bh=(t,e)=>e.some(n=>t instanceof n);let Lo,Uo;function $h(){return Lo||(Lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jh(){return Uo||(Uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xc=new WeakMap,Ws=new WeakMap,Nc=new WeakMap,_s=new WeakMap,Ti=new WeakMap;function Hh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Et(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xc.set(n,t)}).catch(()=>{}),Ti.set(e,t),e}function Wh(t){if(Ws.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ws.set(t,e)}let zs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ws.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zh(t){zs=t(zs)}function Vh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ys(this),e,...n);return Nc.set(r,e.sort?e.sort():[e]),Et(r)}:jh().includes(t)?function(...e){return t.apply(ys(this),e),Et(xc.get(this))}:function(...e){return Et(t.apply(ys(this),e))}}function Kh(t){return typeof t=="function"?Vh(t):(t instanceof IDBTransaction&&Wh(t),Bh(t,$h())?new Proxy(t,zs):t)}function Et(t){if(t instanceof IDBRequest)return Hh(t);if(_s.has(t))return _s.get(t);const e=Kh(t);return e!==t&&(_s.set(t,e),Ti.set(e,t)),e}const ys=t=>Ti.get(t);function qh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Et(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Et(o.result),c.oldVersion,c.newVersion,Et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Gh=["get","getKey","getAll","getAllKeys","count"],Jh=["put","add","delete","clear"],bs=new Map;function Fo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bs.get(e))return bs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Jh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return bs.set(e,i),i}zh(t=>({...t,get:(e,n,r)=>Fo(e,n)||t.get(e,n,r),has:(e,n)=>!!Fo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vs="@firebase/app",Bo="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new kc("@firebase/app"),Qh="@firebase/app-compat",Zh="@firebase/analytics-compat",ep="@firebase/analytics",tp="@firebase/app-check-compat",np="@firebase/app-check",rp="@firebase/auth",sp="@firebase/auth-compat",ip="@firebase/database",op="@firebase/database-compat",ap="@firebase/functions",cp="@firebase/functions-compat",lp="@firebase/installations",up="@firebase/installations-compat",fp="@firebase/messaging",dp="@firebase/messaging-compat",hp="@firebase/performance",pp="@firebase/performance-compat",mp="@firebase/remote-config",gp="@firebase/remote-config-compat",_p="@firebase/storage",yp="@firebase/storage-compat",bp="@firebase/firestore",vp="@firebase/firestore-compat",wp="firebase",Ep="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="[DEFAULT]",Ip={[Vs]:"fire-core",[Qh]:"fire-core-compat",[ep]:"fire-analytics",[Zh]:"fire-analytics-compat",[np]:"fire-app-check",[tp]:"fire-app-check-compat",[rp]:"fire-auth",[sp]:"fire-auth-compat",[ip]:"fire-rtdb",[op]:"fire-rtdb-compat",[ap]:"fire-fn",[cp]:"fire-fn-compat",[lp]:"fire-iid",[up]:"fire-iid-compat",[fp]:"fire-fcm",[dp]:"fire-fcm-compat",[hp]:"fire-perf",[pp]:"fire-perf-compat",[mp]:"fire-rc",[gp]:"fire-rc-compat",[_p]:"fire-gcs",[yp]:"fire-gcs-compat",[bp]:"fire-fst",[vp]:"fire-fst-compat","fire-js":"fire-js",[wp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Map,qs=new Map;function Tp(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(qs.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;qs.set(e,t);for(const n of Or.values())Tp(n,t);return!0}function Dc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},It=new Kn("app","Firebase",Sp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=Ep;function Mc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ks,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw It.create("bad-app-name",{appName:String(s)});if(n||(n=Eh()),!n)throw It.create("no-options");const i=Or.get(s);if(i){if(Ar(n,i.options)&&Ar(r,i.config))return i;throw It.create("duplicate-app",{appName:s})}const o=new Dh(s);for(const c of qs.values())o.addComponent(c);const a=new Rp(n,r,o);return Or.set(s,a),a}function Ap(t=Ks){const e=Or.get(t);if(!e&&t===Ks)return Mc();if(!e)throw It.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=Ip[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}$n(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="firebase-heartbeat-database",Cp=1,jn="firebase-heartbeat-store";let vs=null;function Lc(){return vs||(vs=qh(Op,Cp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jn)}}}).catch(t=>{throw It.create("idb-open",{originalErrorMessage:t.message})})),vs}async function Pp(t){try{return(await Lc()).transaction(jn).objectStore(jn).get(Uc(t))}catch(e){if(e instanceof Rt)$t.warn(e.message);else{const n=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(n.message)}}}async function $o(t,e){try{const r=(await Lc()).transaction(jn,"readwrite");return await r.objectStore(jn).put(e,Uc(t)),r.done}catch(n){if(n instanceof Rt)$t.warn(n.message);else{const r=It.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function Uc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=1024,xp=30*24*60*60*1e3;class Np{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=xp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jo(),{heartbeatsToSend:n,unsentEntries:r}=Dp(this._heartbeatsCache.heartbeats),s=Oc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function jo(){return new Date().toISOString().substring(0,10)}function Dp(t,e=kp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ho(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ho(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mh()?gh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Pp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ho(t){return Oc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){$n(new un("platform-logger",e=>new Yh(e),"PRIVATE")),$n(new un("heartbeat",e=>new Np(e),"PRIVATE")),tn(Vs,Bo,t),tn(Vs,Bo,"esm2017"),tn("fire-js","")}Lp("");function Si(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Fc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Up=Fc,Bc=new Kn("auth","Firebase",Fc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new kc("@firebase/auth");function hr(t,...e){Wo.logLevel<=ee.ERROR&&Wo.error(`Auth (${Gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,...e){throw Ri(t,...e)}function Ke(t,...e){return Ri(t,...e)}function Fp(t,e,n){const r=Object.assign(Object.assign({},Up()),{[e]:n});return new Kn("auth","Firebase",r).create(e,{appName:t.name})}function Ri(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bc.create(t,...e)}function F(t,e,...n){if(!t)throw Ri(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hr(e),new Error(e)}function it(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map;function tt(t){it(t instanceof Function,"Expected a class definition");let e=zo.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t,e){const n=Dc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ar(i,e??{}))return s;Ue(s,"already-initialized")}return n.initialize({options:e})}function $p(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jp(){return Vo()==="http:"||Vo()==="https:"}function Vo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jp()||dh()||"connection"in navigator)?navigator.onLine:!0}function Wp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=fh()||hh()}get(){return Hp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=new Gn(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gn(t,e,n,r,s={}){return jc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=qn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$c.fetch()(Hc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function jc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zp),e);try{const s=new Kp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ar(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ar(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ar(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ar(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Fp(t,l,u);Ue(t,l)}}catch(s){if(s instanceof Rt)throw s;Ue(t,"network-request-failed")}}async function Jr(t,e,n,r,s={}){const i=await gn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ue(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Hc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ai(t.config,s):`${t.config.apiScheme}://${s}`}class Kp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),Vp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ar(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(t,e){return gn(t,"POST","/v1/accounts:delete",e)}async function Gp(t,e){return gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jp(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=Oi(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xn(ws(s.auth_time)),issuedAtTime:xn(ws(s.iat)),expirationTime:xn(ws(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ws(t){return Number(t)*1e3}function Oi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cc(n);return s?JSON.parse(s):(hr("Failed to decode base64 JWT payload"),null)}catch(s){return hr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Yp(t){const e=Oi(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rt&&Xp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xn(this.lastLoginAt),this.creationTime=xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Hn(t,Gp(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tm(i.providerUserInfo):[],a=em(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wc(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function Zp(t){const e=Je(t);await Pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function em(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tm(t){return t.map(e=>{var{providerId:n}=e,r=Si(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(t,e){const n=await jc(t,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Hc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$c.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Wn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Si(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jp(this,e)}reload(){return Zp(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hn(this,qp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:j,emailVerified:M,isAnonymous:ae,providerData:ce,stsTokenManager:Ee}=n;F(j&&Ee,e,"internal-error");const Ae=Wn.fromJSON(this.name,Ee);F(typeof j=="string",e,"internal-error"),ft(d,e.name),ft(p,e.name),F(typeof M=="boolean",e,"internal-error"),F(typeof ae=="boolean",e,"internal-error"),ft(y,e.name),ft(g,e.name),ft(I,e.name),ft(x,e.name),ft(P,e.name),ft(k,e.name);const Fe=new Ut({uid:j,auth:e,email:p,emailVerified:M,displayName:d,isAnonymous:ae,photoURL:g,phoneNumber:y,tenantId:I,stsTokenManager:Ae,createdAt:P,lastLoginAt:k});return ce&&Array.isArray(ce)&&(Fe.providerData=ce.map(Se=>Object.assign({},Se))),x&&(Fe._redirectEventId=x),Fe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Wn;s.updateFromServerResponse(n);const i=new Ut({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zc.type="NONE";const Ko=zc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e,n){return`firebase:${t}:${e}:${n}`}class nn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=pr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new nn(tt(Ko),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||tt(Ko);const o=pr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const d=Ut._fromJSON(e,l);u!==i&&(a=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new nn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new nn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jc(e))return"Blackberry";if(Yc(e))return"Webos";if(Ci(e))return"Safari";if((e.includes("chrome/")||Kc(e))&&!e.includes("edge/"))return"Chrome";if(Gc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vc(t=_e()){return/firefox\//i.test(t)}function Ci(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kc(t=_e()){return/crios\//i.test(t)}function qc(t=_e()){return/iemobile/i.test(t)}function Gc(t=_e()){return/android/i.test(t)}function Jc(t=_e()){return/blackberry/i.test(t)}function Yc(t=_e()){return/webos/i.test(t)}function Yr(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rm(t=_e()){var e;return Yr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sm(){return ph()&&document.documentMode===10}function Xc(t=_e()){return Yr(t)||Gc(t)||Yc(t)||Jc(t)||/windows phone/i.test(t)||qc(t)}function im(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t,e=[]){let n;switch(t){case"Browser":n=qo(_e());break;case"Worker":n=`${qo(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Go(this),this.idTokenSubscription=new Go(this),this.beforeStateQueue=new om(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Xr(t){return Je(t)}class Go{constructor(e){this.auth=e,this.observer=null,this.addObserver=Oh(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function cm(t,e,n){const r=Xr(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Zc(e),{host:o,port:a}=lm(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||um()}function Zc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lm(t){const e=Zc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Jo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Jo(o)}}}function Jo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function um(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function fm(t,e){return gn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(t,e){return Jr(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}async function hm(t,e){return gn(t,"POST","/v1/accounts:sendOobCode",Jn(t,e))}async function pm(t,e){return hm(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function gm(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Pi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new zn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return dm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mm(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gm(e,{idToken:n,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(t,e){return Jr(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="http://localhost";class jt extends Pi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Si(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rn(e,n)}buildRequest(){const e={requestUri:_m,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bm(t){const e=Rn(An(t)).link,n=e?Rn(An(e)).deep_link_id:null,r=Rn(An(t)).deep_link_id;return(r?Rn(An(r)).link:null)||r||n||e||t}class Qr{constructor(e){var n,r,s,i,o,a;const c=Rn(An(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,d=ym((s=c.mode)!==null&&s!==void 0?s:null);F(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bm(e);try{return new Qr(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,n){return zn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qr.parseLink(n);return F(r,"argument-error"),zn._fromEmailAndCode(e,r.code,r.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends el{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Yn{constructor(){super("facebook.com")}static credential(e){return jt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Yn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gt.credential(n,r)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Yn{constructor(){super("github.com")}static credential(e){return jt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Yn{constructor(){super("twitter.com")}static credential(e,n){return jt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ut._fromIdTokenResponse(e,r,s),o=Yo(r);return new fn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Yo(r);return new fn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Yo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Rt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,kr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new kr(e,n,r,s)}}function tl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?kr._fromErrorAndOperation(t,i,e,r):i})}async function vm(t,e,n=!1){const r=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wm(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Hn(t,tl(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Oi(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),fn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t,e,n=!1){const r="signIn",s=await tl(t,r,e),i=await fn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Em(t,e){return nl(Xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t,e,n){var r;F(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),F(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(F(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(F(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(t,e,n){const r=Je(t),s={requestType:"EMAIL_SIGNIN",email:e};F(n.handleCodeInApp,r,"argument-error"),n&&Im(r,s,n),await pm(r,s)}function Sm(t,e){const n=Qr.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Rm(t,e,n){const r=Je(t),s=_n.credentialWithLink(e,n||Cr());return F(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Em(r,s)}function Am(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function Om(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function Cm(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function Pm(t){return Je(t).signOut()}const xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(){const t=_e();return Ci(t)||Yr(t)}const xm=1e3,Nm=10;class sl extends rl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=km()&&im(),this.fallbackToPolling=Xc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Nm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sl.type="LOCAL";const Dm=sl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends rl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}il.type="SESSION";const ol=il;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Zr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Mm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ki("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function Um(t){qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function Fm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $m(){return al()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="firebaseLocalStorageDb",jm=1,Nr="firebaseLocalStorage",ll="fbase_key";class Xn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function es(t,e){return t.transaction([Nr],e?"readwrite":"readonly").objectStore(Nr)}function Hm(){const t=indexedDB.deleteDatabase(cl);return new Xn(t).toPromise()}function Gs(){const t=indexedDB.open(cl,jm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nr,{keyPath:ll})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nr)?e(r):(r.close(),await Hm(),e(await Gs()))})})}async function Xo(t,e,n){const r=es(t,!0).put({[ll]:e,value:n});return new Xn(r).toPromise()}async function Wm(t,e){const n=es(t,!1).get(e),r=await new Xn(n).toPromise();return r===void 0?null:r.value}function Qo(t,e){const n=es(t,!0).delete(e);return new Xn(n).toPromise()}const zm=800,Vm=3;class ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zr._getInstance($m()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fm(),!this.activeServiceWorker)return;this.sender=new Lm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gs();return await Xo(e,xr,"1"),await Qo(e,xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Wm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=es(s,!1).getAll();return new Xn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ul.type="LOCAL";const Km=ul;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",qm().appendChild(r)})}function Jm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Gn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e){return e?tt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Pi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xm(t){return nl(t.auth,new xi(t),t.bypassAuthState)}function Qm(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),wm(n,new xi(t),t.bypassAuthState)}async function Zm(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),vm(n,new xi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xm;case"linkViaPopup":case"linkViaRedirect":return Zm;case"reauthViaPopup":case"reauthViaRedirect":return Qm;default:Ue(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Gn(2e3,1e4);class Jt extends fl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,eg.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="pendingRedirect",mr=new Map;class ng extends fl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const r=await rg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rg(t,e){const n=og(e),r=ig(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sg(t,e){mr.set(t._key(),e)}function ig(t){return tt(t._redirectPersistence)}function og(t){return pr(tg,t.config.apiKey,t.name)}async function ag(t,e,n=!1){const r=Xr(t),s=Ym(r,e),o=await new ng(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=10*60*1e3;class lg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ug(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zo(e))}saveEventToCache(e){this.cachedEventUids.add(Zo(e)),this.lastProcessedEventTime=Date.now()}}function Zo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ug(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(t,e={}){return gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hg=/^https?/;async function pg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fg(t);for(const n of e)try{if(mg(n))return}catch{}Ue(t,"unauthorized-domain")}function mg(t){const e=Cr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hg.test(n))return!1;if(dg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new Gn(3e4,6e4);function ea(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _g(t){return new Promise((e,n)=>{var r,s,i;function o(){ea(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ea(),n(Ke(t,"network-request-failed"))},timeout:gg.get()})}if(!((s=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qe().gapi)===null||i===void 0)&&i.load)o();else{const a=Jm("iframefcb");return qe()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},Gm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw gr=null,e})}let gr=null;function yg(t){return gr=gr||_g(t),gr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Gn(5e3,15e3),vg="__/auth/iframe",wg="emulator/auth/iframe",Eg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ig=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tg(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ai(e,wg):`https://${t.config.authDomain}/${vg}`,r={apiKey:e.apiKey,appName:t.name,v:Gr},s=Ig.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qn(r).slice(1)}`}async function Sg(t){const e=await yg(t),n=qe().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Tg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Eg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=qe().setTimeout(()=>{i(o)},bg.get());function c(){qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ag=500,Og=600,Cg="_blank",Pg="http://localhost";class ta{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kg(t,e,n,r=Ag,s=Og){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Rg),{width:r.toString(),height:s.toString(),top:i,left:o}),u=_e().toLowerCase();n&&(a=Kc(u)?Cg:n),Vc(u)&&(e=e||Pg,c.scrollbars="yes");const l=Object.entries(c).reduce((p,[y,g])=>`${p}${y}=${g},`,"");if(rm(u)&&a!=="_self")return xg(e||"",a),new ta(null);const d=window.open(e||"",a,l);F(d,t,"popup-blocked");try{d.focus()}catch{}return new ta(d)}function xg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="__/auth/handler",Dg="emulator/auth/handler";function na(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gr,eventId:s};if(e instanceof el){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ah(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Yn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Mg(t)}?${qn(a).slice(1)}`}function Mg({config:t}){return t.emulator?Ai(t,Dg):`https://${t.authDomain}/${Ng}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="webStorageSupport";class Lg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ol,this._completeRedirectFn=ag,this._overrideRedirectResult=sg}async _openPopup(e,n,r,s){var i;it((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=na(e,n,r,Cr(),s);return kg(e,o,ki())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Um(na(e,n,r,Cr(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Sg(e),r=new lg(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Es,{type:Es},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Es];o!==void 0&&n(!!o),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xc()||Ci()||Yr()}}const Ug=Lg;var ra="@firebase/auth",sa="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $g(t){$n(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{F(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qc(t)},l=new am(a,c,u);return $p(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new un("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new Fg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(ra,sa,Bg(t)),tn(ra,sa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=5*60,Hg=Pc("authIdTokenMaxAge")||jg;let ia=null;const Wg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hg)return;const s=n==null?void 0:n.token;ia!==s&&(ia=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Dr(t=Ap()){const e=Dc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bp(t,{popupRedirectResolver:Ug,persistence:[Km,Dm,ol]}),r=Pc("authTokenSyncURL");if(r){const i=Wg(r);Om(n,i,()=>i(n.currentUser)),Am(n,o=>i(o))}const s=wh("auth");return s&&cm(n,`http://${s}`),n}$g("Browser");const zg="/assets/logo-hexagon-96333bda.svg",At=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Vg={props:["user"],methods:{signOut(){const t=Dr();Pm(t)}}},Kg={class:"border border-[#ddd] h-[75px] flex items-center justify-between gap-8"},qg=Q("div",{class:"w-[120px] aspect-square"},[Q("img",{src:zg})],-1),Gg={class:"w-full flex items-center justify-end mr-4 gap-6"},Jg=Q("button",null,"Shopping Cart",-1);function Yg(t,e,n,r,s,i){const o=St("RouterLink");return ie(),le("div",Kg,[re(o,{to:"/",class:"products-link"},{default:Ir(()=>[qg]),_:1}),Q("div",Gg,[n.user?(ie(),le("button",{key:0,onClick:e[0]||(e[0]=(...a)=>i.signOut&&i.signOut(...a)),class:"bg-red-500"},"Sign Out")):Mt("",!0),re(o,{to:"/cart",class:""},{default:Ir(()=>[Jg]),_:1})])])}const Xg=At(Vg,[["render",Yg]]),Qg={name:"App",components:{Navbar:Xg},data(){return{user:null}},created(){const t=Dr();Cm(t,e=>{this.user=e})}},Zg={class:"m-auto max-w-[800px] min-h-screen"};function e_(t,e,n,r,s,i){const o=St("Navbar"),a=St("RouterView");return ie(),le(Te,null,[re(o,{user:s.user},null,8,["user"]),Q("div",Zg,[re(a,{user:s.user},null,8,["user"])])],64)}const t_=At(Qg,[["render",e_]]);function hl(t,e){return function(){return t.apply(e,arguments)}}const{toString:n_}=Object.prototype,{getPrototypeOf:Ni}=Object,ts=(t=>e=>{const n=n_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ye=t=>(t=t.toLowerCase(),e=>ts(e)===t),ns=t=>e=>typeof e===t,{isArray:yn}=Array,Vn=ns("undefined");function r_(t){return t!==null&&!Vn(t)&&t.constructor!==null&&!Vn(t.constructor)&&Re(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const pl=Ye("ArrayBuffer");function s_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&pl(t.buffer),e}const i_=ns("string"),Re=ns("function"),ml=ns("number"),rs=t=>t!==null&&typeof t=="object",o_=t=>t===!0||t===!1,_r=t=>{if(ts(t)!=="object")return!1;const e=Ni(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},a_=Ye("Date"),c_=Ye("File"),l_=Ye("Blob"),u_=Ye("FileList"),f_=t=>rs(t)&&Re(t.pipe),d_=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Re(t.append)&&((e=ts(t))==="formdata"||e==="object"&&Re(t.toString)&&t.toString()==="[object FormData]"))},h_=Ye("URLSearchParams"),p_=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qn(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),yn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function gl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const _l=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),yl=t=>!Vn(t)&&t!==_l;function Js(){const{caseless:t}=yl(this)&&this||{},e={},n=(r,s)=>{const i=t&&gl(e,s)||s;_r(e[i])&&_r(r)?e[i]=Js(e[i],r):_r(r)?e[i]=Js({},r):yn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Qn(arguments[r],n);return e}const m_=(t,e,n,{allOwnKeys:r}={})=>(Qn(e,(s,i)=>{n&&Re(s)?t[i]=hl(s,n):t[i]=s},{allOwnKeys:r}),t),g_=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),__=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},y_=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Ni(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},b_=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},v_=t=>{if(!t)return null;if(yn(t))return t;let e=t.length;if(!ml(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},w_=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ni(Uint8Array)),E_=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},I_=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},T_=Ye("HTMLFormElement"),S_=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),oa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),R_=Ye("RegExp"),bl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Qn(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},A_=t=>{bl(t,(e,n)=>{if(Re(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Re(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},O_=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return yn(t)?r(t):r(String(t).split(e)),n},C_=()=>{},P_=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Is="abcdefghijklmnopqrstuvwxyz",aa="0123456789",vl={DIGIT:aa,ALPHA:Is,ALPHA_DIGIT:Is+Is.toUpperCase()+aa},k_=(t=16,e=vl.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function x_(t){return!!(t&&Re(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const N_=t=>{const e=new Array(10),n=(r,s)=>{if(rs(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=yn(r)?[]:{};return Qn(r,(o,a)=>{const c=n(o,s+1);!Vn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},D_=Ye("AsyncFunction"),M_=t=>t&&(rs(t)||Re(t))&&Re(t.then)&&Re(t.catch),b={isArray:yn,isArrayBuffer:pl,isBuffer:r_,isFormData:d_,isArrayBufferView:s_,isString:i_,isNumber:ml,isBoolean:o_,isObject:rs,isPlainObject:_r,isUndefined:Vn,isDate:a_,isFile:c_,isBlob:l_,isRegExp:R_,isFunction:Re,isStream:f_,isURLSearchParams:h_,isTypedArray:w_,isFileList:u_,forEach:Qn,merge:Js,extend:m_,trim:p_,stripBOM:g_,inherits:__,toFlatObject:y_,kindOf:ts,kindOfTest:Ye,endsWith:b_,toArray:v_,forEachEntry:E_,matchAll:I_,isHTMLForm:T_,hasOwnProperty:oa,hasOwnProp:oa,reduceDescriptors:bl,freezeMethods:A_,toObjectSet:O_,toCamelCase:S_,noop:C_,toFiniteNumber:P_,findKey:gl,global:_l,isContextDefined:yl,ALPHABET:vl,generateString:k_,isSpecCompliantForm:x_,toJSONObject:N_,isAsyncFn:D_,isThenable:M_};function z(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}b.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const wl=z.prototype,El={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{El[t]={value:t}});Object.defineProperties(z,El);Object.defineProperty(wl,"isAxiosError",{value:!0});z.from=(t,e,n,r,s,i)=>{const o=Object.create(wl);return b.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),z.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const L_=null;function Ys(t){return b.isPlainObject(t)||b.isArray(t)}function Il(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function ca(t,e,n){return t?t.concat(e).map(function(s,i){return s=Il(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function U_(t){return b.isArray(t)&&!t.some(Ys)}const F_=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function ss(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(I,x){return!b.isUndefined(x[I])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(s))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(b.isDate(g))return g.toISOString();if(!c&&b.isBlob(g))throw new z("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(g)||b.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function l(g,I,x){let P=g;if(g&&!x&&typeof g=="object"){if(b.endsWith(I,"{}"))I=r?I:I.slice(0,-2),g=JSON.stringify(g);else if(b.isArray(g)&&U_(g)||(b.isFileList(g)||b.endsWith(I,"[]"))&&(P=b.toArray(g)))return I=Il(I),P.forEach(function(j,M){!(b.isUndefined(j)||j===null)&&e.append(o===!0?ca([I],M,i):o===null?I:I+"[]",u(j))}),!1}return Ys(g)?!0:(e.append(ca(x,I,i),u(g)),!1)}const d=[],p=Object.assign(F_,{defaultVisitor:l,convertValue:u,isVisitable:Ys});function y(g,I){if(!b.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+I.join("."));d.push(g),b.forEach(g,function(P,k){(!(b.isUndefined(P)||P===null)&&s.call(e,P,b.isString(k)?k.trim():k,I,p))===!0&&y(P,I?I.concat(k):[k])}),d.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return y(t),e}function la(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Di(t,e){this._pairs=[],t&&ss(t,this,e)}const Tl=Di.prototype;Tl.append=function(e,n){this._pairs.push([e,n])};Tl.toString=function(e){const n=e?function(r){return e.call(this,r,la)}:la;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function B_(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Sl(t,e,n){if(!e)return t;const r=n&&n.encode||B_,s=n&&n.serialize;let i;if(s?i=s(e,n):i=b.isURLSearchParams(e)?e.toString():new Di(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class $_{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ua=$_,Rl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},j_=typeof URLSearchParams<"u"?URLSearchParams:Di,H_=typeof FormData<"u"?FormData:null,W_=typeof Blob<"u"?Blob:null,z_=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),V_=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ve={isBrowser:!0,classes:{URLSearchParams:j_,FormData:H_,Blob:W_},isStandardBrowserEnv:z_,isStandardBrowserWebWorkerEnv:V_,protocols:["http","https","file","blob","url","data"]};function K_(t,e){return ss(t,new Ve.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Ve.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function q_(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function G_(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Al(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&b.isArray(s)?s.length:o,c?(b.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!b.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&b.isArray(s[o])&&(s[o]=G_(s[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,s)=>{e(q_(r),s,n,0)}),n}return null}function J_(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Mi={transitional:Rl,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=b.isObject(e);if(i&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return s&&s?JSON.stringify(Al(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return K_(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ss(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),J_(e)):e}],transformResponse:[function(e){const n=this.transitional||Mi.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?z.from(a,z.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ve.classes.FormData,Blob:Ve.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],t=>{Mi.headers[t]={}});const Li=Mi,Y_=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),X_=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Y_[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},fa=Symbol("internals");function In(t){return t&&String(t).trim().toLowerCase()}function yr(t){return t===!1||t==null?t:b.isArray(t)?t.map(yr):String(t)}function Q_(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Z_=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ts(t,e,n,r,s){if(b.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function ey(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function ty(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class is{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,u){const l=In(c);if(!l)throw new Error("header name must be a non-empty string");const d=b.findKey(s,l);(!d||s[d]===void 0||u===!0||u===void 0&&s[d]!==!1)&&(s[d||c]=yr(a))}const o=(a,c)=>b.forEach(a,(u,l)=>i(u,l,c));return b.isPlainObject(e)||e instanceof this.constructor?o(e,n):b.isString(e)&&(e=e.trim())&&!Z_(e)?o(X_(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=In(e),e){const r=b.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Q_(s);if(b.isFunction(n))return n.call(this,s,r);if(b.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=In(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ts(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=In(o),o){const a=b.findKey(r,o);a&&(!n||Ts(r,r[a],a,n))&&(delete r[a],s=!0)}}return b.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ts(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return b.forEach(this,(s,i)=>{const o=b.findKey(r,i);if(o){n[o]=yr(s),delete n[i];return}const a=e?ey(i):String(i).trim();a!==i&&delete n[i],n[a]=yr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return b.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[fa]=this[fa]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=In(o);r[a]||(ty(s,o),r[a]=!0)}return b.isArray(e)?e.forEach(i):i(e),this}}is.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(is.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});b.freezeMethods(is);const rt=is;function Ss(t,e){const n=this||Li,r=e||n,s=rt.from(r.headers);let i=r.data;return b.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Ol(t){return!!(t&&t.__CANCEL__)}function Zn(t,e,n){z.call(this,t??"canceled",z.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(Zn,z,{__CANCEL__:!0});function ny(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ry=Ve.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),b.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),b.isString(i)&&c.push("path="+i),b.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function sy(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function iy(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Cl(t,e){return t&&!sy(e)?iy(t,e):e}const oy=Ve.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=b.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function ay(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function cy(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),l=r[i];o||(o=u),n[s]=c,r[s]=u;let d=i,p=0;for(;d!==s;)p+=n[d++],d=d%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const y=l&&u-l;return y?Math.round(p*1e3/y):void 0}}function da(t,e){let n=0;const r=cy(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-i)/c:void 0,event:s};l[e?"download":"upload"]=!0,t(l)}}const ly=typeof XMLHttpRequest<"u",uy=ly&&function(t){return new Promise(function(n,r){let s=t.data;const i=rt.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}let u;b.isFormData(s)&&(Ve.isStandardBrowserEnv||Ve.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.getContentType(/^\s*multipart\/form-data/)?b.isString(u=i.getContentType())&&i.setContentType(u.replace(/^\s*(multipart\/form-data);+/,"$1")):i.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(t.auth){const g=t.auth.username||"",I=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+I))}const d=Cl(t.baseURL,t.url);l.open(t.method.toUpperCase(),Sl(d,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function p(){if(!l)return;const g=rt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),x={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:t,request:l};ny(function(k){n(k),c()},function(k){r(k),c()},x),l=null}if("onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new z("Request aborted",z.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new z("Network Error",z.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let I=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const x=t.transitional||Rl;t.timeoutErrorMessage&&(I=t.timeoutErrorMessage),r(new z(I,x.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,l)),l=null},Ve.isStandardBrowserEnv){const g=(t.withCredentials||oy(d))&&t.xsrfCookieName&&ry.read(t.xsrfCookieName);g&&i.set(t.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&b.forEach(i.toJSON(),function(I,x){l.setRequestHeader(x,I)}),b.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",da(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",da(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=g=>{l&&(r(!g||g.type?new Zn(null,t,l):g),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const y=ay(d);if(y&&Ve.protocols.indexOf(y)===-1){r(new z("Unsupported protocol "+y+":",z.ERR_BAD_REQUEST,t));return}l.send(s||null)})},Xs={http:L_,xhr:uy};b.forEach(Xs,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ha=t=>`- ${t}`,fy=t=>b.isFunction(t)||t===null||t===!1,Pl={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!fy(n)&&(r=Xs[(o=String(n)).toLowerCase()],r===void 0))throw new z(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(ha).join(`
`):" "+ha(i[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Xs};function Rs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Zn(null,t)}function pa(t){return Rs(t),t.headers=rt.from(t.headers),t.data=Ss.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Pl.getAdapter(t.adapter||Li.adapter)(t).then(function(r){return Rs(t),r.data=Ss.call(t,t.transformResponse,r),r.headers=rt.from(r.headers),r},function(r){return Ol(r)||(Rs(t),r&&r.response&&(r.response.data=Ss.call(t,t.transformResponse,r.response),r.response.headers=rt.from(r.response.headers))),Promise.reject(r)})}const ma=t=>t instanceof rt?t.toJSON():t;function dn(t,e){e=e||{};const n={};function r(u,l,d){return b.isPlainObject(u)&&b.isPlainObject(l)?b.merge.call({caseless:d},u,l):b.isPlainObject(l)?b.merge({},l):b.isArray(l)?l.slice():l}function s(u,l,d){if(b.isUndefined(l)){if(!b.isUndefined(u))return r(void 0,u,d)}else return r(u,l,d)}function i(u,l){if(!b.isUndefined(l))return r(void 0,l)}function o(u,l){if(b.isUndefined(l)){if(!b.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function a(u,l,d){if(d in e)return r(u,l);if(d in t)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,l)=>s(ma(u),ma(l),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(l){const d=c[l]||s,p=d(t[l],e[l],l);b.isUndefined(p)&&d!==a||(n[l]=p)}),n}const kl="1.5.1",Ui={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ui[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const ga={};Ui.transitional=function(e,n,r){function s(i,o){return"[Axios v"+kl+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new z(s(o," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!ga[o]&&(ga[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function dy(t,e,n){if(typeof t!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new z("option "+i+" must be "+c,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const Qs={assertOptions:dy,validators:Ui},dt=Qs.validators;class Mr{constructor(e){this.defaults=e,this.interceptors={request:new ua,response:new ua}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=dn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Qs.assertOptions(r,{silentJSONParsing:dt.transitional(dt.boolean),forcedJSONParsing:dt.transitional(dt.boolean),clarifyTimeoutError:dt.transitional(dt.boolean)},!1),s!=null&&(b.isFunction(s)?n.paramsSerializer={serialize:s}:Qs.assertOptions(s,{encode:dt.function,serialize:dt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&b.merge(i.common,i[n.method]);i&&b.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=rt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(I){typeof I.runWhen=="function"&&I.runWhen(n)===!1||(c=c&&I.synchronous,a.unshift(I.fulfilled,I.rejected))});const u=[];this.interceptors.response.forEach(function(I){u.push(I.fulfilled,I.rejected)});let l,d=0,p;if(!c){const g=[pa.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),p=g.length,l=Promise.resolve(n);d<p;)l=l.then(g[d++],g[d++]);return l}p=a.length;let y=n;for(d=0;d<p;){const g=a[d++],I=a[d++];try{y=g(y)}catch(x){I.call(this,x);break}}try{l=pa.call(this,y)}catch(g){return Promise.reject(g)}for(d=0,p=u.length;d<p;)l=l.then(u[d++],u[d++]);return l}getUri(e){e=dn(this.defaults,e);const n=Cl(e.baseURL,e.url);return Sl(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){Mr.prototype[e]=function(n,r){return this.request(dn(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(dn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Mr.prototype[e]=n(),Mr.prototype[e+"Form"]=n(!0)});const br=Mr;class Fi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Zn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Fi(function(s){e=s}),cancel:e}}}const hy=Fi;function py(t){return function(n){return t.apply(null,n)}}function my(t){return b.isObject(t)&&t.isAxiosError===!0}const Zs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zs).forEach(([t,e])=>{Zs[e]=t});const gy=Zs;function xl(t){const e=new br(t),n=hl(br.prototype.request,e);return b.extend(n,br.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return xl(dn(t,s))},n}const oe=xl(Li);oe.Axios=br;oe.CanceledError=Zn;oe.CancelToken=hy;oe.isCancel=Ol;oe.VERSION=kl;oe.toFormData=ss;oe.AxiosError=z;oe.Cancel=oe.CanceledError;oe.all=function(e){return Promise.all(e)};oe.spread=py;oe.isAxiosError=my;oe.mergeConfig=dn;oe.AxiosHeaders=rt;oe.formToJSON=t=>Al(b.isHTMLForm(t)?new FormData(t):t);oe.getAdapter=Pl.getAdapter;oe.HttpStatusCode=gy;oe.default=oe;const bt=oe,_y={name:"ProductList",data(){return{products:[]}},async created(){const e=(await bt.get("/api/products")).data;this.products=e}},yy={class:"flex md:items-start items-center justify-center md:justify-start flex-wrap gap-4 mt-14"},by=["src","alt"],vy={class:""},wy={class:""},Ey=Q("button",{class:"w-full"},"View Details",-1);function Iy(t,e,n,r,s,i){const o=St("RouterLink");return ie(),le("div",yy,[(ie(!0),le(Te,null,tc(s.products,a=>(ie(),le("div",{class:"flex flex-col items-center gap-4 justify-center p-4 w-[90%] md:w-[32%] relative mb-3 rounded-lg shadow-cardShad",key:a.id},[Q("img",{src:a.imageUrl,alt:a.name,class:"w-[200px] aspect-square object-contain"},null,8,by),Q("h3",vy,Ft(a.name),1),Q("p",wy,Ft(a.price),1),re(o,{to:"/products/"+a.id,class:"w-full"},{default:Ir(()=>[Ey]),_:2},1032,["to"])]))),128))])}const Ty=At(_y,[["render",Iy]]),Sy=Q("h1",{class:"text-base md:text-3xl"},"Products",-1),Ry={__name:"ProductsPage",setup(t){return(e,n)=>(ie(),le("header",null,[Sy,re(Ty)]))}},Ay={data(){return{show:!1,message:""}},methods:{showToast(t,e=3e3){this.message=t,this.show=!0,setTimeout(()=>{this.hideToast()},e)},hideToast(){this.show=!1,this.message=""}}},Oy={key:0,class:"fixed top-4 right-4 bg-green-500 text-white px-4 py-4 rounded-lg shadow-md flex items-center"};function Cy(t,e,n,r,s,i){return s.show?(ie(),le("div",Oy,[Q("span",null,Ft(s.message),1),Q("div",{onClick:e[0]||(e[0]=(...o)=>i.hideToast&&i.hideToast(...o)),class:"ml-2 focus:outline-none text-base font-semibold"}," ✕ ")])):Mt("",!0)}const Nl=At(Ay,[["render",Cy]]),Py={};function ky(t,e){return ie(),le("h1",null,"404: Page Not Found")}const Dl=At(Py,[["render",ky]]),xy={name:"ProductDetailPage",props:["user"],data(){return{product:{},cartItems:[]}},computed:{itemIsInCart(){return this.cartItems.some(t=>t.id===this.$route.params.productId)}},watch:{async user(t){if(t){const n=(await bt.get(`/api/users/${t.uid}/cart`)).data;this.cartItems=n}}},methods:{async addToCart(){await bt.post(`/api/users/${this.user.uid}/cart`,{id:this.$route.params.productId}),this.$refs.toast.showToast("Successfully added item to cart!")},async signIn(){const t=prompt("Please enter your email to sign in:"),e=Dr(),n={url:`https://olive-ecommerce.onrender.com/products/${this.$route.params.productId}`,handleCodeInApp:!0};await Tm(e,t,n),alert("A login link was sent to the email you provided"),window.localStorage.setItem("emailForSignIn",t)}},components:{NotFoundPage:Dl,Toast:Nl},async created(){const t=Dr();if(Sm(t,window.location.href)){const r=window.localStorage.getItem("emailForSignIn");await Rm(t,r,window.location.href),alert("Successfully signed in!"),window.localStorage.removeItem("emailForSignIn")}const n=(await bt.get(`/api/products/${this.$route.params.productId}`)).data;if(this.product=n,this.user){const s=(await bt.get(`/api/users/${this.user.uid}/cart`)).data;this.cartItems=s}}},Ny={key:0,class:"mt-6 flex items-center justify-center flex-col w-full"},Dy=["src"],My={class:"w-full relative p-3 gap-4 flex flex-col"},Ly={class:"w-full flex items-center justify-between gap-4 border-b border-black pb-2"},Uy={key:1,disabled:"",class:"bg-gray-400 cursor-not-allowed"},Fy={key:1};function By(t,e,n,r,s,i){const o=St("toast"),a=St("NotFoundPage");return s.product?(ie(),le("main",Ny,[Q("div",null,[Q("img",{src:s.product.imageUrl,class:"w-[400px]"},null,8,Dy)]),Q("div",My,[Q("div",Ly,[Q("h3",null,Ft(s.product.name),1),Q("h3",null,Ft(s.product.price),1)]),n.user&&!i.itemIsInCart?(ie(),le("button",{key:0,onClick:e[0]||(e[0]=(...c)=>i.addToCart&&i.addToCart(...c)),class:"add-to-cart"}," Add to cart ")):Mt("",!0),n.user&&i.itemIsInCart?(ie(),le("button",Uy," Already Existed in cart ")):Mt("",!0),n.user?Mt("",!0):(ie(),le("button",{key:2,class:"sign-in",onClick:e[1]||(e[1]=(...c)=>i.signIn&&i.signIn(...c))}," Sign in to add to cart ")),re(o,{ref:"toast"},null,512)])])):(ie(),le("div",Fy,[re(a)]))}const $y=At(xy,[["render",By]]),jy={name:"ShoppingCartList",props:["products"]},Hy=["src"],Wy={class:"px-4 flex-[3]"},zy=["onClick"];function Vy(t,e,n,r,s,i){return ie(!0),le(Te,null,tc(n.products,o=>(ie(),le("div",{class:"flex items-center py-5 border-b border-[#ddd]",key:o==null?void 0:o.id},[Q("img",{class:"flex-1 h-[100px] max-w-[100px]",src:o==null?void 0:o.imageUrl},null,8,Hy),Q("div",Wy,[Q("h3",null,Ft(o==null?void 0:o.name),1),Q("p",null,Ft(o==null?void 0:o.price),1)]),Q("button",{onClick:a=>t.$emit("remove-from-cart",o.id)}," Remove from Cart ",8,zy)]))),128)}const Ky=At(jy,[["render",Vy]]),qy={name:"ShoppingCartPage",props:["user"],components:{ShoppingCartList:Ky,Toast:Nl},data(){return{cartItems:[]}},watch:{async user(t){if(console.log("Changed!"),console.log(t),t){const n=(await bt.get(`/api/users/${t.uid}/cart`)).data;this.cartItems=n}}},methods:{async removeFromCart(t){const n=(await bt.delete(`/api/users/${this.user.uid}/cart/${t}`)).data;this.cartItems=n,this.$refs.toast.showToast("Successfully removed item from cart!")}},async created(){if(this.user){const e=(await bt.get(`/api/users/${this.user.uid}/cart`)).data;this.cartItems=e}}},Gy=Q("h1",null,"Shopping Cart",-1),Jy={key:0},Yy=Q("button",{class:"mt-5 w-full"},"Proceed to Checkout",-1),Xy={key:1};function Qy(t,e,n,r,s,i){const o=St("ShoppingCartList"),a=St("toast");return ie(),le(Te,null,[Gy,s.cartItems.length>0?(ie(),le("div",Jy,[re(o,{onRemoveFromCart:e[0]||(e[0]=c=>i.removeFromCart(c)),products:s.cartItems},null,8,["products"]),Yy])):Mt("",!0),s.cartItems.length===0?(ie(),le("div",Xy," You current have no items in your cart! ")):Mt("",!0),re(a,{ref:"toast"},null,512)],64)}const Zy=At(qy,[["render",Qy]]),eb=ah({history:Id("/"),routes:[{path:"/",name:"products",component:Ry},{path:"/products/:productId",name:"productsdetails",component:$y},{path:"/cart",component:Zy},{path:"/:pathMatch(.*)*",name:"notfound",component:Dl}]});var tb="firebase",nb="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(tb,nb,"app");const rb={apiKey:"AIzaSyAWrP1GQ9OrgP_wkI0rmyh3Vs6d0kGOa5U",authDomain:"ecommerce-39da4.firebaseapp.com",projectId:"ecommerce-39da4",storageBucket:"ecommerce-39da4.appspot.com",messagingSenderId:"552429208577",appId:"1:552429208577:web:c0816f75e326d48e38ac00"};Mc(rb);const Ml=sd(t_);Ml.use(eb);Ml.mount("#app");
