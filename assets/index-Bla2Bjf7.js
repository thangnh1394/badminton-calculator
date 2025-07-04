(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))o(y);new MutationObserver(y=>{for(const j of y)if(j.type==="childList")for(const z of j.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&o(z)}).observe(document,{childList:!0,subtree:!0});function d(y){const j={};return y.integrity&&(j.integrity=y.integrity),y.referrerPolicy&&(j.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?j.credentials="include":y.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function o(y){if(y.ep)return;y.ep=!0;const j=d(y);fetch(y.href,j)}})();function um(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var xs={exports:{}},su={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function ay(){if(Fh)return su;Fh=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function d(o,y,j){var z=null;if(j!==void 0&&(z=""+j),y.key!==void 0&&(z=""+y.key),"key"in y){j={};for(var G in y)G!=="key"&&(j[G]=y[G])}else j=y;return y=j.ref,{$$typeof:i,type:o,key:z,ref:y!==void 0?y:null,props:j}}return su.Fragment=s,su.jsx=d,su.jsxs=d,su}var Ph;function ny(){return Ph||(Ph=1,xs.exports=ay()),xs.exports}var c=ny(),Ss={exports:{}},it={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function uy(){if(Ih)return it;Ih=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),z=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),Y=Symbol.iterator;function U(m){return m===null||typeof m!="object"?null:(m=Y&&m[Y]||m["@@iterator"],typeof m=="function"?m:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,I={};function ut(m,N,X){this.props=m,this.context=N,this.refs=I,this.updater=X||V}ut.prototype.isReactComponent={},ut.prototype.setState=function(m,N){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,N,"setState")},ut.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ct(){}ct.prototype=ut.prototype;function W(m,N,X){this.props=m,this.context=N,this.refs=I,this.updater=X||V}var J=W.prototype=new ct;J.constructor=W,K(J,ut.prototype),J.isPureReactComponent=!0;var w=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function q(m,N,X,Q,F,dt){return X=dt.ref,{$$typeof:i,type:m,key:N,ref:X!==void 0?X:null,props:dt}}function P(m,N){return q(m.type,N,void 0,void 0,void 0,m.props)}function vt(m){return typeof m=="object"&&m!==null&&m.$$typeof===i}function Ut(m){var N={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(X){return N[X]})}var Qt=/\/+/g;function gt(m,N){return typeof m=="object"&&m!==null&&m.key!=null?Ut(""+m.key):N.toString(36)}function Ft(){}function L(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Ft,Ft):(m.status="pending",m.then(function(N){m.status==="pending"&&(m.status="fulfilled",m.value=N)},function(N){m.status==="pending"&&(m.status="rejected",m.reason=N)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function rt(m,N,X,Q,F){var dt=typeof m;(dt==="undefined"||dt==="boolean")&&(m=null);var et=!1;if(m===null)et=!0;else switch(dt){case"bigint":case"string":case"number":et=!0;break;case"object":switch(m.$$typeof){case i:case s:et=!0;break;case R:return et=m._init,rt(et(m._payload),N,X,Q,F)}}if(et)return F=F(m),et=Q===""?"."+gt(m,0):Q,w(F)?(X="",et!=null&&(X=et.replace(Qt,"$&/")+"/"),rt(F,N,X,"",function(le){return le})):F!=null&&(vt(F)&&(F=P(F,X+(F.key==null||m&&m.key===F.key?"":(""+F.key).replace(Qt,"$&/")+"/")+et)),N.push(F)),1;et=0;var Lt=Q===""?".":Q+":";if(w(m))for(var jt=0;jt<m.length;jt++)Q=m[jt],dt=Lt+gt(Q,jt),et+=rt(Q,N,X,dt,F);else if(jt=U(m),typeof jt=="function")for(m=jt.call(m),jt=0;!(Q=m.next()).done;)Q=Q.value,dt=Lt+gt(Q,jt++),et+=rt(Q,N,X,dt,F);else if(dt==="object"){if(typeof m.then=="function")return rt(L(m),N,X,Q,F);throw N=String(m),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return et}function b(m,N,X){if(m==null)return m;var Q=[],F=0;return rt(m,Q,"","",function(dt){return N.call(X,dt,F++)}),Q}function H(m){if(m._status===-1){var N=m._result;N=N(),N.then(function(X){(m._status===0||m._status===-1)&&(m._status=1,m._result=X)},function(X){(m._status===0||m._status===-1)&&(m._status=2,m._result=X)}),m._status===-1&&(m._status=0,m._result=N)}if(m._status===1)return m._result.default;throw m._result}var $=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function at(){}return it.Children={map:b,forEach:function(m,N,X){b(m,function(){N.apply(this,arguments)},X)},count:function(m){var N=0;return b(m,function(){N++}),N},toArray:function(m){return b(m,function(N){return N})||[]},only:function(m){if(!vt(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},it.Component=ut,it.Fragment=d,it.Profiler=y,it.PureComponent=W,it.StrictMode=o,it.Suspense=E,it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,it.__COMPILER_RUNTIME={__proto__:null,c:function(m){return O.H.useMemoCache(m)}},it.cache=function(m){return function(){return m.apply(null,arguments)}},it.cloneElement=function(m,N,X){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var Q=K({},m.props),F=m.key,dt=void 0;if(N!=null)for(et in N.ref!==void 0&&(dt=void 0),N.key!==void 0&&(F=""+N.key),N)!B.call(N,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&N.ref===void 0||(Q[et]=N[et]);var et=arguments.length-2;if(et===1)Q.children=X;else if(1<et){for(var Lt=Array(et),jt=0;jt<et;jt++)Lt[jt]=arguments[jt+2];Q.children=Lt}return q(m.type,F,void 0,void 0,dt,Q)},it.createContext=function(m){return m={$$typeof:z,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:j,_context:m},m},it.createElement=function(m,N,X){var Q,F={},dt=null;if(N!=null)for(Q in N.key!==void 0&&(dt=""+N.key),N)B.call(N,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(F[Q]=N[Q]);var et=arguments.length-2;if(et===1)F.children=X;else if(1<et){for(var Lt=Array(et),jt=0;jt<et;jt++)Lt[jt]=arguments[jt+2];F.children=Lt}if(m&&m.defaultProps)for(Q in et=m.defaultProps,et)F[Q]===void 0&&(F[Q]=et[Q]);return q(m,dt,void 0,void 0,null,F)},it.createRef=function(){return{current:null}},it.forwardRef=function(m){return{$$typeof:G,render:m}},it.isValidElement=vt,it.lazy=function(m){return{$$typeof:R,_payload:{_status:-1,_result:m},_init:H}},it.memo=function(m,N){return{$$typeof:A,type:m,compare:N===void 0?null:N}},it.startTransition=function(m){var N=O.T,X={};O.T=X;try{var Q=m(),F=O.S;F!==null&&F(X,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(at,$)}catch(dt){$(dt)}finally{O.T=N}},it.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},it.use=function(m){return O.H.use(m)},it.useActionState=function(m,N,X){return O.H.useActionState(m,N,X)},it.useCallback=function(m,N){return O.H.useCallback(m,N)},it.useContext=function(m){return O.H.useContext(m)},it.useDebugValue=function(){},it.useDeferredValue=function(m,N){return O.H.useDeferredValue(m,N)},it.useEffect=function(m,N,X){var Q=O.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(m,N)},it.useId=function(){return O.H.useId()},it.useImperativeHandle=function(m,N,X){return O.H.useImperativeHandle(m,N,X)},it.useInsertionEffect=function(m,N){return O.H.useInsertionEffect(m,N)},it.useLayoutEffect=function(m,N){return O.H.useLayoutEffect(m,N)},it.useMemo=function(m,N){return O.H.useMemo(m,N)},it.useOptimistic=function(m,N){return O.H.useOptimistic(m,N)},it.useReducer=function(m,N,X){return O.H.useReducer(m,N,X)},it.useRef=function(m){return O.H.useRef(m)},it.useState=function(m){return O.H.useState(m)},it.useSyncExternalStore=function(m,N,X){return O.H.useSyncExternalStore(m,N,X)},it.useTransition=function(){return O.H.useTransition()},it.version="19.1.0",it}var t0;function ks(){return t0||(t0=1,Ss.exports=uy()),Ss.exports}var pt=ks();const an=um(pt);var js={exports:{}},ou={},Ts={exports:{}},As={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function iy(){return e0||(e0=1,function(i){function s(b,H){var $=b.length;b.push(H);t:for(;0<$;){var at=$-1>>>1,m=b[at];if(0<y(m,H))b[at]=H,b[$]=m,$=at;else break t}}function d(b){return b.length===0?null:b[0]}function o(b){if(b.length===0)return null;var H=b[0],$=b.pop();if($!==H){b[0]=$;t:for(var at=0,m=b.length,N=m>>>1;at<N;){var X=2*(at+1)-1,Q=b[X],F=X+1,dt=b[F];if(0>y(Q,$))F<m&&0>y(dt,Q)?(b[at]=dt,b[F]=$,at=F):(b[at]=Q,b[X]=$,at=X);else if(F<m&&0>y(dt,$))b[at]=dt,b[F]=$,at=F;else break t}}return H}function y(b,H){var $=b.sortIndex-H.sortIndex;return $!==0?$:b.id-H.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;i.unstable_now=function(){return j.now()}}else{var z=Date,G=z.now();i.unstable_now=function(){return z.now()-G}}var E=[],A=[],R=1,Y=null,U=3,V=!1,K=!1,I=!1,ut=!1,ct=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function w(b){for(var H=d(A);H!==null;){if(H.callback===null)o(A);else if(H.startTime<=b)o(A),H.sortIndex=H.expirationTime,s(E,H);else break;H=d(A)}}function O(b){if(I=!1,w(b),!K)if(d(E)!==null)K=!0,B||(B=!0,gt());else{var H=d(A);H!==null&&rt(O,H.startTime-b)}}var B=!1,q=-1,P=5,vt=-1;function Ut(){return ut?!0:!(i.unstable_now()-vt<P)}function Qt(){if(ut=!1,B){var b=i.unstable_now();vt=b;var H=!0;try{t:{K=!1,I&&(I=!1,W(q),q=-1),V=!0;var $=U;try{e:{for(w(b),Y=d(E);Y!==null&&!(Y.expirationTime>b&&Ut());){var at=Y.callback;if(typeof at=="function"){Y.callback=null,U=Y.priorityLevel;var m=at(Y.expirationTime<=b);if(b=i.unstable_now(),typeof m=="function"){Y.callback=m,w(b),H=!0;break e}Y===d(E)&&o(E),w(b)}else o(E);Y=d(E)}if(Y!==null)H=!0;else{var N=d(A);N!==null&&rt(O,N.startTime-b),H=!1}}break t}finally{Y=null,U=$,V=!1}H=void 0}}finally{H?gt():B=!1}}}var gt;if(typeof J=="function")gt=function(){J(Qt)};else if(typeof MessageChannel<"u"){var Ft=new MessageChannel,L=Ft.port2;Ft.port1.onmessage=Qt,gt=function(){L.postMessage(null)}}else gt=function(){ct(Qt,0)};function rt(b,H){q=ct(function(){b(i.unstable_now())},H)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(b){b.callback=null},i.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<b?Math.floor(1e3/b):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(b){switch(U){case 1:case 2:case 3:var H=3;break;default:H=U}var $=U;U=H;try{return b()}finally{U=$}},i.unstable_requestPaint=function(){ut=!0},i.unstable_runWithPriority=function(b,H){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var $=U;U=b;try{return H()}finally{U=$}},i.unstable_scheduleCallback=function(b,H,$){var at=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?at+$:at):$=at,b){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=$+m,b={id:R++,callback:H,priorityLevel:b,startTime:$,expirationTime:m,sortIndex:-1},$>at?(b.sortIndex=$,s(A,b),d(E)===null&&b===d(A)&&(I?(W(q),q=-1):I=!0,rt(O,$-at))):(b.sortIndex=m,s(E,b),K||V||(K=!0,B||(B=!0,gt()))),b},i.unstable_shouldYield=Ut,i.unstable_wrapCallback=function(b){var H=U;return function(){var $=U;U=H;try{return b.apply(this,arguments)}finally{U=$}}}}(As)),As}var l0;function cy(){return l0||(l0=1,Ts.exports=iy()),Ts.exports}var Ds={exports:{}},ue={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function ry(){if(a0)return ue;a0=1;var i=ks();function s(E){var A="https://react.dev/errors/"+E;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)A+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+E+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(s(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},y=Symbol.for("react.portal");function j(E,A,R){var Y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:Y==null?null:""+Y,children:E,containerInfo:A,implementation:R}}var z=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(E,A){if(E==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ue.createPortal=function(E,A){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(s(299));return j(E,A,null,R)},ue.flushSync=function(E){var A=z.T,R=o.p;try{if(z.T=null,o.p=2,E)return E()}finally{z.T=A,o.p=R,o.d.f()}},ue.preconnect=function(E,A){typeof E=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,o.d.C(E,A))},ue.prefetchDNS=function(E){typeof E=="string"&&o.d.D(E)},ue.preinit=function(E,A){if(typeof E=="string"&&A&&typeof A.as=="string"){var R=A.as,Y=G(R,A.crossOrigin),U=typeof A.integrity=="string"?A.integrity:void 0,V=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;R==="style"?o.d.S(E,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:Y,integrity:U,fetchPriority:V}):R==="script"&&o.d.X(E,{crossOrigin:Y,integrity:U,fetchPriority:V,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},ue.preinitModule=function(E,A){if(typeof E=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var R=G(A.as,A.crossOrigin);o.d.M(E,{crossOrigin:R,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&o.d.M(E)},ue.preload=function(E,A){if(typeof E=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var R=A.as,Y=G(R,A.crossOrigin);o.d.L(E,R,{crossOrigin:Y,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},ue.preloadModule=function(E,A){if(typeof E=="string")if(A){var R=G(A.as,A.crossOrigin);o.d.m(E,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:R,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else o.d.m(E)},ue.requestFormReset=function(E){o.d.r(E)},ue.unstable_batchedUpdates=function(E,A){return E(A)},ue.useFormState=function(E,A,R){return z.H.useFormState(E,A,R)},ue.useFormStatus=function(){return z.H.useHostTransitionStatus()},ue.version="19.1.0",ue}var n0;function sy(){if(n0)return Ds.exports;n0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Ds.exports=ry(),Ds.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function oy(){if(u0)return ou;u0=1;var i=cy(),s=ks(),d=sy();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function j(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function z(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function G(t){if(j(t)!==t)throw Error(o(188))}function E(t){var e=t.alternate;if(!e){if(e=j(t),e===null)throw Error(o(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return G(n),t;if(u===a)return G(n),e;u=u.sibling}throw Error(o(188))}if(l.return!==a.return)l=n,a=u;else{for(var r=!1,f=n.child;f;){if(f===l){r=!0,l=n,a=u;break}if(f===a){r=!0,a=n,l=u;break}f=f.sibling}if(!r){for(f=u.child;f;){if(f===l){r=!0,l=u,a=n;break}if(f===a){r=!0,a=u,l=n;break}f=f.sibling}if(!r)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?t:e}function A(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=A(t),e!==null)return e;t=t.sibling}return null}var R=Object.assign,Y=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),ct=Symbol.for("react.provider"),W=Symbol.for("react.consumer"),J=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),Ut=Symbol.for("react.memo_cache_sentinel"),Qt=Symbol.iterator;function gt(t){return t===null||typeof t!="object"?null:(t=Qt&&t[Qt]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Symbol.for("react.client.reference");function L(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ft?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case ut:return"Profiler";case I:return"StrictMode";case O:return"Suspense";case B:return"SuspenseList";case vt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case V:return"Portal";case J:return(t.displayName||"Context")+".Provider";case W:return(t._context.displayName||"Context")+".Consumer";case w:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case q:return e=t.displayName||null,e!==null?e:L(t.type)||"Memo";case P:e=t._payload,t=t._init;try{return L(t(e))}catch{}}return null}var rt=Array.isArray,b=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},at=[],m=-1;function N(t){return{current:t}}function X(t){0>m||(t.current=at[m],at[m]=null,m--)}function Q(t,e){m++,at[m]=t.current,t.current=e}var F=N(null),dt=N(null),et=N(null),Lt=N(null);function jt(t,e){switch(Q(et,e),Q(dt,t),Q(F,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Dh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Dh(e),t=Eh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(F),Q(F,t)}function le(){X(F),X(dt),X(et)}function $l(t){t.memoizedState!==null&&Q(Lt,t);var e=F.current,l=Eh(e,t.type);e!==l&&(Q(dt,t),Q(F,l))}function el(t){dt.current===t&&(X(F),X(dt)),Lt.current===t&&(X(Lt),nu._currentValue=$)}var Ee=Object.prototype.hasOwnProperty,cc=i.unstable_scheduleCallback,rc=i.unstable_cancelCallback,Hm=i.unstable_shouldYield,Gm=i.unstable_requestPaint,ke=i.unstable_now,wm=i.unstable_getCurrentPriorityLevel,ao=i.unstable_ImmediatePriority,no=i.unstable_UserBlockingPriority,Du=i.unstable_NormalPriority,qm=i.unstable_LowPriority,uo=i.unstable_IdlePriority,Bm=i.log,Ym=i.unstable_setDisableYieldValue,dn=null,ye=null;function vl(t){if(typeof Bm=="function"&&Ym(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(dn,t)}catch{}}var pe=Math.clz32?Math.clz32:$m,Xm=Math.log,Qm=Math.LN2;function $m(t){return t>>>=0,t===0?32:31-(Xm(t)/Qm|0)|0}var Eu=256,Mu=4194304;function Zl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function zu(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,u=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~u,a!==0?n=Zl(a):(r&=f,r!==0?n=Zl(r):l||(l=f&~t,l!==0&&(n=Zl(l))))):(f=a&~u,f!==0?n=Zl(f):r!==0?n=Zl(r):l||(l=a&~t,l!==0&&(n=Zl(l)))),n===0?0:e!==0&&e!==n&&(e&u)===0&&(u=n&-n,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:n}function hn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Zm(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function io(){var t=Eu;return Eu<<=1,(Eu&4194048)===0&&(Eu=256),t}function co(){var t=Mu;return Mu<<=1,(Mu&62914560)===0&&(Mu=4194304),t}function sc(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function mn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Lm(t,e,l,a,n,u){var r=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,h=t.expirationTimes,S=t.hiddenUpdates;for(l=r&~l;0<l;){var M=31-pe(l),C=1<<M;f[M]=0,h[M]=-1;var T=S[M];if(T!==null)for(S[M]=null,M=0;M<T.length;M++){var D=T[M];D!==null&&(D.lane&=-536870913)}l&=~C}a!==0&&ro(t,a,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(r&~e))}function ro(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-pe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function so(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-pe(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function oc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function fc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function oo(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Lh(t.type))}function Vm(t,e){var l=H.p;try{return H.p=t,e()}finally{H.p=l}}var bl=Math.random().toString(36).slice(2),ae="__reactFiber$"+bl,ce="__reactProps$"+bl,ha="__reactContainer$"+bl,dc="__reactEvents$"+bl,Km="__reactListeners$"+bl,km="__reactHandles$"+bl,fo="__reactResources$"+bl,gn="__reactMarker$"+bl;function hc(t){delete t[ae],delete t[ce],delete t[dc],delete t[Km],delete t[km]}function ma(t){var e=t[ae];if(e)return e;for(var l=t.parentNode;l;){if(e=l[ha]||l[ae]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=_h(t);t!==null;){if(l=t[ae])return l;t=_h(t)}return e}t=l,l=t.parentNode}return null}function ga(t){if(t=t[ae]||t[ha]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function yn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function ya(t){var e=t[fo];return e||(e=t[fo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Vt(t){t[gn]=!0}var ho=new Set,mo={};function Ll(t,e){pa(t,e),pa(t+"Capture",e)}function pa(t,e){for(mo[t]=e,t=0;t<e.length;t++)ho.add(e[t])}var Jm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),go={},yo={};function Wm(t){return Ee.call(yo,t)?!0:Ee.call(go,t)?!1:Jm.test(t)?yo[t]=!0:(go[t]=!0,!1)}function Ou(t,e,l){if(Wm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function _u(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ll(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var mc,po;function va(t){if(mc===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||"",po=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mc+t+po}var gc=!1;function yc(t,e){if(!t||gc)return"";gc=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(D){var T=D}Reflect.construct(t,[],C)}else{try{C.call()}catch(D){T=D}t.call(C.prototype)}}else{try{throw Error()}catch(D){T=D}(C=t())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(D){if(D&&T&&typeof D.stack=="string")return[D.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),r=u[0],f=u[1];if(r&&f){var h=r.split(`
`),S=f.split(`
`);for(n=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(a===h.length||n===S.length)for(a=h.length-1,n=S.length-1;1<=a&&0<=n&&h[a]!==S[n];)n--;for(;1<=a&&0<=n;a--,n--)if(h[a]!==S[n]){if(a!==1||n!==1)do if(a--,n--,0>n||h[a]!==S[n]){var M=`
`+h[a].replace(" at new "," at ");return t.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",t.displayName)),M}while(1<=a&&0<=n);break}}}finally{gc=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?va(l):""}function Fm(t){switch(t.tag){case 26:case 27:case 5:return va(t.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return yc(t.type,!1);case 11:return yc(t.type.render,!1);case 1:return yc(t.type,!0);case 31:return va("Activity");default:return""}}function vo(t){try{var e="";do e+=Fm(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Me(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Pm(t){var e=bo(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,u.call(this,r)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ru(t){t._valueTracker||(t._valueTracker=Pm(t))}function xo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=bo(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Im=/[\n"\\]/g;function ze(t){return t.replace(Im,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function pc(t,e,l,a,n,u,r,f){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Me(e)):t.value!==""+Me(e)&&(t.value=""+Me(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?vc(t,r,Me(e)):l!=null?vc(t,r,Me(l)):a!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+Me(f):t.removeAttribute("name")}function So(t,e,l,a,n,u,r,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;l=l!=null?""+Me(l):"",e=e!=null?""+Me(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function vc(t,e,l){e==="number"&&Cu(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function ba(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Me(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function jo(t,e,l){if(e!=null&&(e=""+Me(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Me(l):""}function To(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(o(92));if(rt(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Me(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function xa(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var t1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ao(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||t1.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Do(t,e,l){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Ao(t,n,a)}else for(var u in e)e.hasOwnProperty(u)&&Ao(t,u,e[u])}function bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),l1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nu(t){return l1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var xc=null;function Sc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sa=null,ja=null;function Eo(t){var e=ga(t);if(e&&(t=e.stateNode)){var l=t[ce]||null;t:switch(t=e.stateNode,e.type){case"input":if(pc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ze(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[ce]||null;if(!n)throw Error(o(90));pc(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&xo(a)}break t;case"textarea":jo(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&ba(t,!!l.multiple,e,!1)}}}var jc=!1;function Mo(t,e,l){if(jc)return t(e,l);jc=!0;try{var a=t(e);return a}finally{if(jc=!1,(Sa!==null||ja!==null)&&(vi(),Sa&&(e=Sa,t=ja,ja=Sa=null,Eo(e),t)))for(e=0;e<t.length;e++)Eo(t[e])}}function pn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ce]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(o(231,e,typeof l));return l}var al=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=!1;if(al)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{Tc=!1}var xl=null,Ac=null,Uu=null;function zo(){if(Uu)return Uu;var t,e=Ac,l=e.length,a,n="value"in xl?xl.value:xl.textContent,u=n.length;for(t=0;t<l&&e[t]===n[t];t++);var r=l-t;for(a=1;a<=r&&e[l-a]===n[u-a];a++);return Uu=n.slice(t,1<a?1-a:void 0)}function Hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gu(){return!0}function Oo(){return!1}function re(t){function e(l,a,n,u,r){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=r,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Gu:Oo,this.isPropagationStopped=Oo,this}return R(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Gu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Gu)},persist:function(){},isPersistent:Gu}),e}var Vl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=re(Vl),bn=R({},Vl,{view:0,detail:0}),a1=re(bn),Dc,Ec,xn,qu=R({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xn&&(xn&&t.type==="mousemove"?(Dc=t.screenX-xn.screenX,Ec=t.screenY-xn.screenY):Ec=Dc=0,xn=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),_o=re(qu),n1=R({},qu,{dataTransfer:0}),u1=re(n1),i1=R({},bn,{relatedTarget:0}),Mc=re(i1),c1=R({},Vl,{animationName:0,elapsedTime:0,pseudoElement:0}),r1=re(c1),s1=R({},Vl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o1=re(s1),f1=R({},Vl,{data:0}),Ro=re(f1),d1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=m1[t])?!!e[t]:!1}function zc(){return g1}var y1=R({},bn,{key:function(t){if(t.key){var e=d1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(t){return t.type==="keypress"?Hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p1=re(y1),v1=R({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Co=re(v1),b1=R({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),x1=re(b1),S1=R({},Vl,{propertyName:0,elapsedTime:0,pseudoElement:0}),j1=re(S1),T1=R({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A1=re(T1),D1=R({},Vl,{newState:0,oldState:0}),E1=re(D1),M1=[9,13,27,32],Oc=al&&"CompositionEvent"in window,Sn=null;al&&"documentMode"in document&&(Sn=document.documentMode);var z1=al&&"TextEvent"in window&&!Sn,No=al&&(!Oc||Sn&&8<Sn&&11>=Sn),Uo=" ",Ho=!1;function Go(t,e){switch(t){case"keyup":return M1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ta=!1;function O1(t,e){switch(t){case"compositionend":return wo(e);case"keypress":return e.which!==32?null:(Ho=!0,Uo);case"textInput":return t=e.data,t===Uo&&Ho?null:t;default:return null}}function _1(t,e){if(Ta)return t==="compositionend"||!Oc&&Go(t,e)?(t=zo(),Uu=Ac=xl=null,Ta=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return No&&e.locale!=="ko"?null:e.data;default:return null}}var R1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!R1[t.type]:e==="textarea"}function Bo(t,e,l,a){Sa?ja?ja.push(a):ja=[a]:Sa=a,e=Ai(e,"onChange"),0<e.length&&(l=new wu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var jn=null,Tn=null;function C1(t){xh(t,0)}function Bu(t){var e=yn(t);if(xo(e))return t}function Yo(t,e){if(t==="change")return e}var Xo=!1;if(al){var _c;if(al){var Rc="oninput"in document;if(!Rc){var Qo=document.createElement("div");Qo.setAttribute("oninput","return;"),Rc=typeof Qo.oninput=="function"}_c=Rc}else _c=!1;Xo=_c&&(!document.documentMode||9<document.documentMode)}function $o(){jn&&(jn.detachEvent("onpropertychange",Zo),Tn=jn=null)}function Zo(t){if(t.propertyName==="value"&&Bu(Tn)){var e=[];Bo(e,Tn,t,Sc(t)),Mo(C1,e)}}function N1(t,e,l){t==="focusin"?($o(),jn=e,Tn=l,jn.attachEvent("onpropertychange",Zo)):t==="focusout"&&$o()}function U1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bu(Tn)}function H1(t,e){if(t==="click")return Bu(e)}function G1(t,e){if(t==="input"||t==="change")return Bu(e)}function w1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ve=typeof Object.is=="function"?Object.is:w1;function An(t,e){if(ve(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ee.call(e,n)||!ve(t[n],e[n]))return!1}return!0}function Lo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vo(t,e){var l=Lo(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Lo(l)}}function Ko(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ko(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ko(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Cu(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Cu(t.document)}return e}function Cc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var q1=al&&"documentMode"in document&&11>=document.documentMode,Aa=null,Nc=null,Dn=null,Uc=!1;function Jo(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Uc||Aa==null||Aa!==Cu(a)||(a=Aa,"selectionStart"in a&&Cc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Dn&&An(Dn,a)||(Dn=a,a=Ai(Nc,"onSelect"),0<a.length&&(e=new wu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Aa)))}function Kl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Da={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionrun:Kl("Transition","TransitionRun"),transitionstart:Kl("Transition","TransitionStart"),transitioncancel:Kl("Transition","TransitionCancel"),transitionend:Kl("Transition","TransitionEnd")},Hc={},Wo={};al&&(Wo=document.createElement("div").style,"AnimationEvent"in window||(delete Da.animationend.animation,delete Da.animationiteration.animation,delete Da.animationstart.animation),"TransitionEvent"in window||delete Da.transitionend.transition);function kl(t){if(Hc[t])return Hc[t];if(!Da[t])return t;var e=Da[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Wo)return Hc[t]=e[l];return t}var Fo=kl("animationend"),Po=kl("animationiteration"),Io=kl("animationstart"),B1=kl("transitionrun"),Y1=kl("transitionstart"),X1=kl("transitioncancel"),tf=kl("transitionend"),ef=new Map,Gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gc.push("scrollEnd");function Xe(t,e){ef.set(t,e),Ll(e,[t])}var lf=new WeakMap;function Oe(t,e){if(typeof t=="object"&&t!==null){var l=lf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:vo(e)},lf.set(t,e),e)}return{value:t,source:e,stack:vo(e)}}var _e=[],Ea=0,wc=0;function Yu(){for(var t=Ea,e=wc=Ea=0;e<t;){var l=_e[e];_e[e++]=null;var a=_e[e];_e[e++]=null;var n=_e[e];_e[e++]=null;var u=_e[e];if(_e[e++]=null,a!==null&&n!==null){var r=a.pending;r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n}u!==0&&af(l,n,u)}}function Xu(t,e,l,a){_e[Ea++]=t,_e[Ea++]=e,_e[Ea++]=l,_e[Ea++]=a,wc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function qc(t,e,l,a){return Xu(t,e,l,a),Qu(t)}function Ma(t,e){return Xu(t,null,null,e),Qu(t)}function af(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,n&&e!==null&&(n=31-pe(l),t=u.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),u):null}function Qu(t){if(50<Wn)throw Wn=0,Zr=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var za={};function Q1(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(t,e,l,a){return new Q1(t,e,l,a)}function Bc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nl(t,e){var l=t.alternate;return l===null?(l=be(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function nf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function $u(t,e,l,a,n,u){var r=0;if(a=t,typeof t=="function")Bc(t)&&(r=1);else if(typeof t=="string")r=Zg(t,l,F.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case vt:return t=be(31,l,e,n),t.elementType=vt,t.lanes=u,t;case K:return Jl(l.children,n,u,e);case I:r=8,n|=24;break;case ut:return t=be(12,l,e,n|2),t.elementType=ut,t.lanes=u,t;case O:return t=be(13,l,e,n),t.elementType=O,t.lanes=u,t;case B:return t=be(19,l,e,n),t.elementType=B,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ct:case J:r=10;break t;case W:r=9;break t;case w:r=11;break t;case q:r=14;break t;case P:r=16,a=null;break t}r=29,l=Error(o(130,t===null?"null":typeof t,"")),a=null}return e=be(r,l,e,n),e.elementType=t,e.type=a,e.lanes=u,e}function Jl(t,e,l,a){return t=be(7,t,a,e),t.lanes=l,t}function Yc(t,e,l){return t=be(6,t,null,e),t.lanes=l,t}function Xc(t,e,l){return e=be(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Oa=[],_a=0,Zu=null,Lu=0,Re=[],Ce=0,Wl=null,ul=1,il="";function Fl(t,e){Oa[_a++]=Lu,Oa[_a++]=Zu,Zu=t,Lu=e}function uf(t,e,l){Re[Ce++]=ul,Re[Ce++]=il,Re[Ce++]=Wl,Wl=t;var a=ul;t=il;var n=32-pe(a)-1;a&=~(1<<n),l+=1;var u=32-pe(e)+n;if(30<u){var r=n-n%5;u=(a&(1<<r)-1).toString(32),a>>=r,n-=r,ul=1<<32-pe(e)+n|l<<n|a,il=u+t}else ul=1<<u|l<<n|a,il=t}function Qc(t){t.return!==null&&(Fl(t,1),uf(t,1,0))}function $c(t){for(;t===Zu;)Zu=Oa[--_a],Oa[_a]=null,Lu=Oa[--_a],Oa[_a]=null;for(;t===Wl;)Wl=Re[--Ce],Re[Ce]=null,il=Re[--Ce],Re[Ce]=null,ul=Re[--Ce],Re[Ce]=null}var ie=null,Ht=null,St=!1,Pl=null,Je=!1,Zc=Error(o(519));function Il(t){var e=Error(o(418,""));throw zn(Oe(e,t)),Zc}function cf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[ae]=t,e[ce]=a,l){case"dialog":mt("cancel",e),mt("close",e);break;case"iframe":case"object":case"embed":mt("load",e);break;case"video":case"audio":for(l=0;l<Pn.length;l++)mt(Pn[l],e);break;case"source":mt("error",e);break;case"img":case"image":case"link":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"input":mt("invalid",e),So(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ru(e);break;case"select":mt("invalid",e);break;case"textarea":mt("invalid",e),To(e,a.value,a.defaultValue,a.children),Ru(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Ah(e.textContent,l)?(a.popover!=null&&(mt("beforetoggle",e),mt("toggle",e)),a.onScroll!=null&&mt("scroll",e),a.onScrollEnd!=null&&mt("scrollend",e),a.onClick!=null&&(e.onclick=Di),e=!0):e=!1,e||Il(t)}function rf(t){for(ie=t.return;ie;)switch(ie.tag){case 5:case 13:Je=!1;return;case 27:case 3:Je=!0;return;default:ie=ie.return}}function En(t){if(t!==ie)return!1;if(!St)return rf(t),St=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||is(t.type,t.memoizedProps)),l=!l),l&&Ht&&Il(t),rf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Ht=$e(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Ht=null}}else e===27?(e=Ht,Gl(t.type)?(t=os,os=null,Ht=t):Ht=e):Ht=ie?$e(t.stateNode.nextSibling):null;return!0}function Mn(){Ht=ie=null,St=!1}function sf(){var t=Pl;return t!==null&&(fe===null?fe=t:fe.push.apply(fe,t),Pl=null),t}function zn(t){Pl===null?Pl=[t]:Pl.push(t)}var Lc=N(null),ta=null,cl=null;function Sl(t,e,l){Q(Lc,e._currentValue),e._currentValue=l}function rl(t){t._currentValue=Lc.current,X(Lc)}function Vc(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Kc(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var u=n.dependencies;if(u!==null){var r=n.child;u=u.firstContext;t:for(;u!==null;){var f=u;u=n;for(var h=0;h<e.length;h++)if(f.context===e[h]){u.lanes|=l,f=u.alternate,f!==null&&(f.lanes|=l),Vc(u.return,l,t),a||(r=null);break t}u=f.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(o(341));r.lanes|=l,u=r.alternate,u!==null&&(u.lanes|=l),Vc(r,l,t),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function On(t,e,l,a){t=null;for(var n=e,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var f=n.type;ve(n.pendingProps.value,r.value)||(t!==null?t.push(f):t=[f])}}else if(n===Lt.current){if(r=n.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(nu):t=[nu])}n=n.return}t!==null&&Kc(e,t,l,a),e.flags|=262144}function Vu(t){for(t=t.firstContext;t!==null;){if(!ve(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ea(t){ta=t,cl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ne(t){return of(ta,t)}function Ku(t,e){return ta===null&&ea(t),of(t,e)}function of(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},cl===null){if(t===null)throw Error(o(308));cl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else cl=cl.next=e;return l}var $1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Z1=i.unstable_scheduleCallback,L1=i.unstable_NormalPriority,$t={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kc(){return{controller:new $1,data:new Map,refCount:0}}function _n(t){t.refCount--,t.refCount===0&&Z1(L1,function(){t.controller.abort()})}var Rn=null,Jc=0,Ra=0,Ca=null;function V1(t,e){if(Rn===null){var l=Rn=[];Jc=0,Ra=Fr(),Ca={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Jc++,e.then(ff,ff),e}function ff(){if(--Jc===0&&Rn!==null){Ca!==null&&(Ca.status="fulfilled");var t=Rn;Rn=null,Ra=0,Ca=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function K1(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var df=b.S;b.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&V1(t,e),df!==null&&df(t,e)};var la=N(null);function Wc(){var t=la.current;return t!==null?t:_t.pooledCache}function ku(t,e){e===null?Q(la,la.current):Q(la,e.pool)}function hf(){var t=Wc();return t===null?null:{parent:$t._currentValue,pool:t}}var Cn=Error(o(460)),mf=Error(o(474)),Ju=Error(o(542)),Fc={then:function(){}};function gf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Wu(){}function yf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Wu,Wu),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vf(t),t;default:if(typeof e.status=="string")e.then(Wu,Wu);else{if(t=_t,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vf(t),t}throw Nn=e,Cn}}var Nn=null;function pf(){if(Nn===null)throw Error(o(459));var t=Nn;return Nn=null,t}function vf(t){if(t===Cn||t===Ju)throw Error(o(483))}var jl=!1;function Pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ic(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Tl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Al(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(At&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Qu(t),af(t,null,l),e}return Xu(t,a,e,l),Qu(t)}function Un(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,so(t,l)}}function tr(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var r={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=r:u=u.next=r,l=l.next}while(l!==null);u===null?n=u=e:u=u.next=e}else n=u=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var er=!1;function Hn(){if(er){var t=Ca;if(t!==null)throw t}}function Gn(t,e,l,a){er=!1;var n=t.updateQueue;jl=!1;var u=n.firstBaseUpdate,r=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var h=f,S=h.next;h.next=null,r===null?u=S:r.next=S,r=h;var M=t.alternate;M!==null&&(M=M.updateQueue,f=M.lastBaseUpdate,f!==r&&(f===null?M.firstBaseUpdate=S:f.next=S,M.lastBaseUpdate=h))}if(u!==null){var C=n.baseState;r=0,M=S=h=null,f=u;do{var T=f.lane&-536870913,D=T!==f.lane;if(D?(yt&T)===T:(a&T)===T){T!==0&&T===Ra&&(er=!0),M!==null&&(M=M.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var nt=t,tt=f;T=e;var zt=l;switch(tt.tag){case 1:if(nt=tt.payload,typeof nt=="function"){C=nt.call(zt,C,T);break t}C=nt;break t;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=tt.payload,T=typeof nt=="function"?nt.call(zt,C,T):nt,T==null)break t;C=R({},C,T);break t;case 2:jl=!0}}T=f.callback,T!==null&&(t.flags|=64,D&&(t.flags|=8192),D=n.callbacks,D===null?n.callbacks=[T]:D.push(T))}else D={lane:T,tag:f.tag,payload:f.payload,callback:f.callback,next:null},M===null?(S=M=D,h=C):M=M.next=D,r|=T;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;D=f,f=D.next,D.next=null,n.lastBaseUpdate=D,n.shared.pending=null}}while(!0);M===null&&(h=C),n.baseState=h,n.firstBaseUpdate=S,n.lastBaseUpdate=M,u===null&&(n.shared.lanes=0),Cl|=r,t.lanes=r,t.memoizedState=C}}function bf(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function xf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)bf(l[t],e)}var Na=N(null),Fu=N(0);function Sf(t,e){t=gl,Q(Fu,t),Q(Na,e),gl=t|e.baseLanes}function lr(){Q(Fu,gl),Q(Na,Na.current)}function ar(){gl=Fu.current,X(Na),X(Fu)}var Dl=0,ot=null,Et=null,Bt=null,Pu=!1,Ua=!1,aa=!1,Iu=0,wn=0,Ha=null,k1=0;function wt(){throw Error(o(321))}function nr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!ve(t[l],e[l]))return!1;return!0}function ur(t,e,l,a,n,u){return Dl=u,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,b.H=t===null||t.memoizedState===null?nd:ud,aa=!1,u=l(a,n),aa=!1,Ua&&(u=Tf(e,l,a,n)),jf(t),u}function jf(t){b.H=ui;var e=Et!==null&&Et.next!==null;if(Dl=0,Bt=Et=ot=null,Pu=!1,wn=0,Ha=null,e)throw Error(o(300));t===null||Kt||(t=t.dependencies,t!==null&&Vu(t)&&(Kt=!0))}function Tf(t,e,l,a){ot=t;var n=0;do{if(Ua&&(Ha=null),wn=0,Ua=!1,25<=n)throw Error(o(301));if(n+=1,Bt=Et=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}b.H=eg,u=e(l,a)}while(Ua);return u}function J1(){var t=b.H,e=t.useState()[0];return e=typeof e.then=="function"?qn(e):e,t=t.useState()[0],(Et!==null?Et.memoizedState:null)!==t&&(ot.flags|=1024),e}function ir(){var t=Iu!==0;return Iu=0,t}function cr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function rr(t){if(Pu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Pu=!1}Dl=0,Bt=Et=ot=null,Ua=!1,wn=Iu=0,Ha=null}function se(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?ot.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Yt(){if(Et===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Bt===null?ot.memoizedState:Bt.next;if(e!==null)Bt=e,Et=t;else{if(t===null)throw ot.alternate===null?Error(o(467)):Error(o(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Bt===null?ot.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function sr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qn(t){var e=wn;return wn+=1,Ha===null&&(Ha=[]),t=yf(Ha,t,e),e=ot,(Bt===null?e.memoizedState:Bt.next)===null&&(e=e.alternate,b.H=e===null||e.memoizedState===null?nd:ud),t}function ti(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qn(t);if(t.$$typeof===J)return ne(t)}throw Error(o(438,String(t)))}function or(t){var e=null,l=ot.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=ot.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=sr(),ot.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Ut;return e.index++,l}function sl(t,e){return typeof e=="function"?e(t):e}function ei(t){var e=Yt();return fr(e,Et,t)}function fr(t,e,l){var a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var n=t.baseQueue,u=a.pending;if(u!==null){if(n!==null){var r=n.next;n.next=u.next,u.next=r}e.baseQueue=n=u,a.pending=null}if(u=t.baseState,n===null)t.memoizedState=u;else{e=n.next;var f=r=null,h=null,S=e,M=!1;do{var C=S.lane&-536870913;if(C!==S.lane?(yt&C)===C:(Dl&C)===C){var T=S.revertLane;if(T===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),C===Ra&&(M=!0);else if((Dl&T)===T){S=S.next,T===Ra&&(M=!0);continue}else C={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(f=h=C,r=u):h=h.next=C,ot.lanes|=T,Cl|=T;C=S.action,aa&&l(u,C),u=S.hasEagerState?S.eagerState:l(u,C)}else T={lane:C,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(f=h=T,r=u):h=h.next=T,ot.lanes|=C,Cl|=C;S=S.next}while(S!==null&&S!==e);if(h===null?r=u:h.next=f,!ve(u,t.memoizedState)&&(Kt=!0,M&&(l=Ca,l!==null)))throw l;t.memoizedState=u,t.baseState=r,t.baseQueue=h,a.lastRenderedState=u}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function dr(t){var e=Yt(),l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,u=e.memoizedState;if(n!==null){l.pending=null;var r=n=n.next;do u=t(u,r.action),r=r.next;while(r!==n);ve(u,e.memoizedState)||(Kt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function Af(t,e,l){var a=ot,n=Yt(),u=St;if(u){if(l===void 0)throw Error(o(407));l=l()}else l=e();var r=!ve((Et||n).memoizedState,l);r&&(n.memoizedState=l,Kt=!0),n=n.queue;var f=Mf.bind(null,a,n,t);if(Bn(2048,8,f,[t]),n.getSnapshot!==e||r||Bt!==null&&Bt.memoizedState.tag&1){if(a.flags|=2048,Ga(9,li(),Ef.bind(null,a,n,l,e),null),_t===null)throw Error(o(349));u||(Dl&124)!==0||Df(a,e,l)}return l}function Df(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=ot.updateQueue,e===null?(e=sr(),ot.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Ef(t,e,l,a){e.value=l,e.getSnapshot=a,zf(e)&&Of(t)}function Mf(t,e,l){return l(function(){zf(e)&&Of(t)})}function zf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!ve(t,l)}catch{return!0}}function Of(t){var e=Ma(t,2);e!==null&&Ae(e,t,2)}function hr(t){var e=se();if(typeof t=="function"){var l=t;if(t=l(),aa){vl(!0);try{l()}finally{vl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},e}function _f(t,e,l,a){return t.baseState=l,fr(t,Et,typeof a=="function"?a:sl)}function W1(t,e,l,a,n){if(ni(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){u.listeners.push(r)}};b.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,Rf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Rf(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var u=b.T,r={};b.T=r;try{var f=l(n,a),h=b.S;h!==null&&h(r,f),Cf(t,e,f)}catch(S){mr(t,e,S)}finally{b.T=u}}else try{u=l(n,a),Cf(t,e,u)}catch(S){mr(t,e,S)}}function Cf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Nf(t,e,a)},function(a){return mr(t,e,a)}):Nf(t,e,l)}function Nf(t,e,l){e.status="fulfilled",e.value=l,Uf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Rf(t,l)))}function mr(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Uf(e),e=e.next;while(e!==a)}t.action=null}function Uf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Hf(t,e){return e}function Gf(t,e){if(St){var l=_t.formState;if(l!==null){t:{var a=ot;if(St){if(Ht){e:{for(var n=Ht,u=Je;n.nodeType!==8;){if(!u){n=null;break e}if(n=$e(n.nextSibling),n===null){n=null;break e}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){Ht=$e(n.nextSibling),a=n.data==="F!";break t}}Il(a)}a=!1}a&&(e=l[0])}}return l=se(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hf,lastRenderedState:e},l.queue=a,l=ed.bind(null,ot,a),a.dispatch=l,a=hr(!1),u=br.bind(null,ot,!1,a.queue),a=se(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=W1.bind(null,ot,n,u,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function wf(t){var e=Yt();return qf(e,Et,t)}function qf(t,e,l){if(e=fr(t,e,Hf)[0],t=ei(sl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=qn(e)}catch(r){throw r===Cn?Ju:r}else a=e;e=Yt();var n=e.queue,u=n.dispatch;return l!==e.memoizedState&&(ot.flags|=2048,Ga(9,li(),F1.bind(null,n,l),null)),[a,u,t]}function F1(t,e){t.action=e}function Bf(t){var e=Yt(),l=Et;if(l!==null)return qf(e,l,t);Yt(),e=e.memoizedState,l=Yt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Ga(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=ot.updateQueue,e===null&&(e=sr(),ot.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function li(){return{destroy:void 0,resource:void 0}}function Yf(){return Yt().memoizedState}function ai(t,e,l,a){var n=se();a=a===void 0?null:a,ot.flags|=t,n.memoizedState=Ga(1|e,li(),l,a)}function Bn(t,e,l,a){var n=Yt();a=a===void 0?null:a;var u=n.memoizedState.inst;Et!==null&&a!==null&&nr(a,Et.memoizedState.deps)?n.memoizedState=Ga(e,u,l,a):(ot.flags|=t,n.memoizedState=Ga(1|e,u,l,a))}function Xf(t,e){ai(8390656,8,t,e)}function Qf(t,e){Bn(2048,8,t,e)}function $f(t,e){return Bn(4,2,t,e)}function Zf(t,e){return Bn(4,4,t,e)}function Lf(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vf(t,e,l){l=l!=null?l.concat([t]):null,Bn(4,4,Lf.bind(null,e,t),l)}function gr(){}function Kf(t,e){var l=Yt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&nr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function kf(t,e){var l=Yt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&nr(e,a[1]))return a[0];if(a=t(),aa){vl(!0);try{t()}finally{vl(!1)}}return l.memoizedState=[a,e],a}function yr(t,e,l){return l===void 0||(Dl&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=Fd(),ot.lanes|=t,Cl|=t,l)}function Jf(t,e,l,a){return ve(l,e)?l:Na.current!==null?(t=yr(t,l,a),ve(t,e)||(Kt=!0),t):(Dl&42)===0?(Kt=!0,t.memoizedState=l):(t=Fd(),ot.lanes|=t,Cl|=t,e)}function Wf(t,e,l,a,n){var u=H.p;H.p=u!==0&&8>u?u:8;var r=b.T,f={};b.T=f,br(t,!1,e,l);try{var h=n(),S=b.S;if(S!==null&&S(f,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var M=K1(h,a);Yn(t,e,M,Te(t))}else Yn(t,e,a,Te(t))}catch(C){Yn(t,e,{then:function(){},status:"rejected",reason:C},Te())}finally{H.p=u,b.T=r}}function P1(){}function pr(t,e,l,a){if(t.tag!==5)throw Error(o(476));var n=Ff(t).queue;Wf(t,n,e,$,l===null?P1:function(){return Pf(t),l(a)})}function Ff(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:$},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Pf(t){var e=Ff(t).next.queue;Yn(t,e,{},Te())}function vr(){return ne(nu)}function If(){return Yt().memoizedState}function td(){return Yt().memoizedState}function I1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Te();t=Tl(l);var a=Al(e,t,l);a!==null&&(Ae(a,e,l),Un(a,e,l)),e={cache:kc()},t.payload=e;return}e=e.return}}function tg(t,e,l){var a=Te();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},ni(t)?ld(e,l):(l=qc(t,e,l,a),l!==null&&(Ae(l,t,a),ad(l,e,a)))}function ed(t,e,l){var a=Te();Yn(t,e,l,a)}function Yn(t,e,l,a){var n={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(ni(t))ld(e,n);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var r=e.lastRenderedState,f=u(r,l);if(n.hasEagerState=!0,n.eagerState=f,ve(f,r))return Xu(t,e,n,0),_t===null&&Yu(),!1}catch{}finally{}if(l=qc(t,e,n,a),l!==null)return Ae(l,t,a),ad(l,e,a),!0}return!1}function br(t,e,l,a){if(a={lane:2,revertLane:Fr(),action:a,hasEagerState:!1,eagerState:null,next:null},ni(t)){if(e)throw Error(o(479))}else e=qc(t,l,a,2),e!==null&&Ae(e,t,2)}function ni(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function ld(t,e){Ua=Pu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function ad(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,so(t,l)}}var ui={readContext:ne,use:ti,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt},nd={readContext:ne,use:ti,useCallback:function(t,e){return se().memoizedState=[t,e===void 0?null:e],t},useContext:ne,useEffect:Xf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ai(4194308,4,Lf.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ai(4194308,4,t,e)},useInsertionEffect:function(t,e){ai(4,2,t,e)},useMemo:function(t,e){var l=se();e=e===void 0?null:e;var a=t();if(aa){vl(!0);try{t()}finally{vl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=se();if(l!==void 0){var n=l(e);if(aa){vl(!0);try{l(e)}finally{vl(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=tg.bind(null,ot,t),[a.memoizedState,t]},useRef:function(t){var e=se();return t={current:t},e.memoizedState=t},useState:function(t){t=hr(t);var e=t.queue,l=ed.bind(null,ot,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:gr,useDeferredValue:function(t,e){var l=se();return yr(l,t,e)},useTransition:function(){var t=hr(!1);return t=Wf.bind(null,ot,t.queue,!0,!1),se().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=ot,n=se();if(St){if(l===void 0)throw Error(o(407));l=l()}else{if(l=e(),_t===null)throw Error(o(349));(yt&124)!==0||Df(a,e,l)}n.memoizedState=l;var u={value:l,getSnapshot:e};return n.queue=u,Xf(Mf.bind(null,a,u,t),[t]),a.flags|=2048,Ga(9,li(),Ef.bind(null,a,u,l,e),null),l},useId:function(){var t=se(),e=_t.identifierPrefix;if(St){var l=il,a=ul;l=(a&~(1<<32-pe(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=Iu++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=k1++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:vr,useFormState:Gf,useActionState:Gf,useOptimistic:function(t){var e=se();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=br.bind(null,ot,!0,l),l.dispatch=e,[t,e]},useMemoCache:or,useCacheRefresh:function(){return se().memoizedState=I1.bind(null,ot)}},ud={readContext:ne,use:ti,useCallback:Kf,useContext:ne,useEffect:Qf,useImperativeHandle:Vf,useInsertionEffect:$f,useLayoutEffect:Zf,useMemo:kf,useReducer:ei,useRef:Yf,useState:function(){return ei(sl)},useDebugValue:gr,useDeferredValue:function(t,e){var l=Yt();return Jf(l,Et.memoizedState,t,e)},useTransition:function(){var t=ei(sl)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:qn(t),e]},useSyncExternalStore:Af,useId:If,useHostTransitionStatus:vr,useFormState:wf,useActionState:wf,useOptimistic:function(t,e){var l=Yt();return _f(l,Et,t,e)},useMemoCache:or,useCacheRefresh:td},eg={readContext:ne,use:ti,useCallback:Kf,useContext:ne,useEffect:Qf,useImperativeHandle:Vf,useInsertionEffect:$f,useLayoutEffect:Zf,useMemo:kf,useReducer:dr,useRef:Yf,useState:function(){return dr(sl)},useDebugValue:gr,useDeferredValue:function(t,e){var l=Yt();return Et===null?yr(l,t,e):Jf(l,Et.memoizedState,t,e)},useTransition:function(){var t=dr(sl)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:qn(t),e]},useSyncExternalStore:Af,useId:If,useHostTransitionStatus:vr,useFormState:Bf,useActionState:Bf,useOptimistic:function(t,e){var l=Yt();return Et!==null?_f(l,Et,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:or,useCacheRefresh:td},wa=null,Xn=0;function ii(t){var e=Xn;return Xn+=1,wa===null&&(wa=[]),yf(wa,t,e)}function Qn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ci(t,e){throw e.$$typeof===Y?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function id(t){var e=t._init;return e(t._payload)}function cd(t){function e(v,g){if(t){var x=v.deletions;x===null?(v.deletions=[g],v.flags|=16):x.push(g)}}function l(v,g){if(!t)return null;for(;g!==null;)e(v,g),g=g.sibling;return null}function a(v){for(var g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function n(v,g){return v=nl(v,g),v.index=0,v.sibling=null,v}function u(v,g,x){return v.index=x,t?(x=v.alternate,x!==null?(x=x.index,x<g?(v.flags|=67108866,g):x):(v.flags|=67108866,g)):(v.flags|=1048576,g)}function r(v){return t&&v.alternate===null&&(v.flags|=67108866),v}function f(v,g,x,_){return g===null||g.tag!==6?(g=Yc(x,v.mode,_),g.return=v,g):(g=n(g,x),g.return=v,g)}function h(v,g,x,_){var Z=x.type;return Z===K?M(v,g,x.props.children,_,x.key):g!==null&&(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===P&&id(Z)===g.type)?(g=n(g,x.props),Qn(g,x),g.return=v,g):(g=$u(x.type,x.key,x.props,null,v.mode,_),Qn(g,x),g.return=v,g)}function S(v,g,x,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Xc(x,v.mode,_),g.return=v,g):(g=n(g,x.children||[]),g.return=v,g)}function M(v,g,x,_,Z){return g===null||g.tag!==7?(g=Jl(x,v.mode,_,Z),g.return=v,g):(g=n(g,x),g.return=v,g)}function C(v,g,x){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Yc(""+g,v.mode,x),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case U:return x=$u(g.type,g.key,g.props,null,v.mode,x),Qn(x,g),x.return=v,x;case V:return g=Xc(g,v.mode,x),g.return=v,g;case P:var _=g._init;return g=_(g._payload),C(v,g,x)}if(rt(g)||gt(g))return g=Jl(g,v.mode,x,null),g.return=v,g;if(typeof g.then=="function")return C(v,ii(g),x);if(g.$$typeof===J)return C(v,Ku(v,g),x);ci(v,g)}return null}function T(v,g,x,_){var Z=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return Z!==null?null:f(v,g,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case U:return x.key===Z?h(v,g,x,_):null;case V:return x.key===Z?S(v,g,x,_):null;case P:return Z=x._init,x=Z(x._payload),T(v,g,x,_)}if(rt(x)||gt(x))return Z!==null?null:M(v,g,x,_,null);if(typeof x.then=="function")return T(v,g,ii(x),_);if(x.$$typeof===J)return T(v,g,Ku(v,x),_);ci(v,x)}return null}function D(v,g,x,_,Z){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return v=v.get(x)||null,f(g,v,""+_,Z);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case U:return v=v.get(_.key===null?x:_.key)||null,h(g,v,_,Z);case V:return v=v.get(_.key===null?x:_.key)||null,S(g,v,_,Z);case P:var ft=_._init;return _=ft(_._payload),D(v,g,x,_,Z)}if(rt(_)||gt(_))return v=v.get(x)||null,M(g,v,_,Z,null);if(typeof _.then=="function")return D(v,g,x,ii(_),Z);if(_.$$typeof===J)return D(v,g,x,Ku(g,_),Z);ci(g,_)}return null}function nt(v,g,x,_){for(var Z=null,ft=null,k=g,lt=g=0,Jt=null;k!==null&&lt<x.length;lt++){k.index>lt?(Jt=k,k=null):Jt=k.sibling;var xt=T(v,k,x[lt],_);if(xt===null){k===null&&(k=Jt);break}t&&k&&xt.alternate===null&&e(v,k),g=u(xt,g,lt),ft===null?Z=xt:ft.sibling=xt,ft=xt,k=Jt}if(lt===x.length)return l(v,k),St&&Fl(v,lt),Z;if(k===null){for(;lt<x.length;lt++)k=C(v,x[lt],_),k!==null&&(g=u(k,g,lt),ft===null?Z=k:ft.sibling=k,ft=k);return St&&Fl(v,lt),Z}for(k=a(k);lt<x.length;lt++)Jt=D(k,v,lt,x[lt],_),Jt!==null&&(t&&Jt.alternate!==null&&k.delete(Jt.key===null?lt:Jt.key),g=u(Jt,g,lt),ft===null?Z=Jt:ft.sibling=Jt,ft=Jt);return t&&k.forEach(function(Xl){return e(v,Xl)}),St&&Fl(v,lt),Z}function tt(v,g,x,_){if(x==null)throw Error(o(151));for(var Z=null,ft=null,k=g,lt=g=0,Jt=null,xt=x.next();k!==null&&!xt.done;lt++,xt=x.next()){k.index>lt?(Jt=k,k=null):Jt=k.sibling;var Xl=T(v,k,xt.value,_);if(Xl===null){k===null&&(k=Jt);break}t&&k&&Xl.alternate===null&&e(v,k),g=u(Xl,g,lt),ft===null?Z=Xl:ft.sibling=Xl,ft=Xl,k=Jt}if(xt.done)return l(v,k),St&&Fl(v,lt),Z;if(k===null){for(;!xt.done;lt++,xt=x.next())xt=C(v,xt.value,_),xt!==null&&(g=u(xt,g,lt),ft===null?Z=xt:ft.sibling=xt,ft=xt);return St&&Fl(v,lt),Z}for(k=a(k);!xt.done;lt++,xt=x.next())xt=D(k,v,lt,xt.value,_),xt!==null&&(t&&xt.alternate!==null&&k.delete(xt.key===null?lt:xt.key),g=u(xt,g,lt),ft===null?Z=xt:ft.sibling=xt,ft=xt);return t&&k.forEach(function(ly){return e(v,ly)}),St&&Fl(v,lt),Z}function zt(v,g,x,_){if(typeof x=="object"&&x!==null&&x.type===K&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case U:t:{for(var Z=x.key;g!==null;){if(g.key===Z){if(Z=x.type,Z===K){if(g.tag===7){l(v,g.sibling),_=n(g,x.props.children),_.return=v,v=_;break t}}else if(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===P&&id(Z)===g.type){l(v,g.sibling),_=n(g,x.props),Qn(_,x),_.return=v,v=_;break t}l(v,g);break}else e(v,g);g=g.sibling}x.type===K?(_=Jl(x.props.children,v.mode,_,x.key),_.return=v,v=_):(_=$u(x.type,x.key,x.props,null,v.mode,_),Qn(_,x),_.return=v,v=_)}return r(v);case V:t:{for(Z=x.key;g!==null;){if(g.key===Z)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){l(v,g.sibling),_=n(g,x.children||[]),_.return=v,v=_;break t}else{l(v,g);break}else e(v,g);g=g.sibling}_=Xc(x,v.mode,_),_.return=v,v=_}return r(v);case P:return Z=x._init,x=Z(x._payload),zt(v,g,x,_)}if(rt(x))return nt(v,g,x,_);if(gt(x)){if(Z=gt(x),typeof Z!="function")throw Error(o(150));return x=Z.call(x),tt(v,g,x,_)}if(typeof x.then=="function")return zt(v,g,ii(x),_);if(x.$$typeof===J)return zt(v,g,Ku(v,x),_);ci(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,g!==null&&g.tag===6?(l(v,g.sibling),_=n(g,x),_.return=v,v=_):(l(v,g),_=Yc(x,v.mode,_),_.return=v,v=_),r(v)):l(v,g)}return function(v,g,x,_){try{Xn=0;var Z=zt(v,g,x,_);return wa=null,Z}catch(k){if(k===Cn||k===Ju)throw k;var ft=be(29,k,null,v.mode);return ft.lanes=_,ft.return=v,ft}finally{}}}var qa=cd(!0),rd=cd(!1),Ne=N(null),We=null;function El(t){var e=t.alternate;Q(Zt,Zt.current&1),Q(Ne,t),We===null&&(e===null||Na.current!==null||e.memoizedState!==null)&&(We=t)}function sd(t){if(t.tag===22){if(Q(Zt,Zt.current),Q(Ne,t),We===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(We=t)}}else Ml()}function Ml(){Q(Zt,Zt.current),Q(Ne,Ne.current)}function ol(t){X(Ne),We===t&&(We=null),X(Zt)}var Zt=N(0);function ri(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||ss(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function xr(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:R({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Sr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Te(),n=Tl(a);n.payload=e,l!=null&&(n.callback=l),e=Al(t,n,a),e!==null&&(Ae(e,t,a),Un(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Te(),n=Tl(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=Al(t,n,a),e!==null&&(Ae(e,t,a),Un(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Te(),a=Tl(l);a.tag=2,e!=null&&(a.callback=e),e=Al(t,a,l),e!==null&&(Ae(e,t,l),Un(e,t,l))}};function od(t,e,l,a,n,u,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,r):e.prototype&&e.prototype.isPureReactComponent?!An(l,a)||!An(n,u):!0}function fd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Sr.enqueueReplaceState(e,e.state,null)}function na(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=R({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}var si=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function dd(t){si(t)}function hd(t){console.error(t)}function md(t){si(t)}function oi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function gd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function jr(t,e,l){return l=Tl(l),l.tag=3,l.payload={element:null},l.callback=function(){oi(t,e)},l}function yd(t){return t=Tl(t),t.tag=3,t}function pd(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;t.payload=function(){return n(u)},t.callback=function(){gd(e,l,a)}}var r=l.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){gd(e,l,a),typeof n!="function"&&(Nl===null?Nl=new Set([this]):Nl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function lg(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&On(e,l,n,!0),l=Ne.current,l!==null){switch(l.tag){case 13:return We===null?Vr():l.alternate===null&&Gt===0&&(Gt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Fc?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),kr(t,a,n)),!1;case 22:return l.flags|=65536,a===Fc?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),kr(t,a,n)),!1}throw Error(o(435,l.tag))}return kr(t,a,n),Vr(),!1}if(St)return e=Ne.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Zc&&(t=Error(o(422),{cause:a}),zn(Oe(t,l)))):(a!==Zc&&(e=Error(o(423),{cause:a}),zn(Oe(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=Oe(a,l),n=jr(t.stateNode,a,n),tr(t,n),Gt!==4&&(Gt=2)),!1;var u=Error(o(520),{cause:a});if(u=Oe(u,l),Jn===null?Jn=[u]:Jn.push(u),Gt!==4&&(Gt=2),e===null)return!0;a=Oe(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=jr(l.stateNode,a,t),tr(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Nl===null||!Nl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=yd(n),pd(n,t,l,a),tr(l,n),!1}l=l.return}while(l!==null);return!1}var vd=Error(o(461)),Kt=!1;function Pt(t,e,l,a){e.child=t===null?rd(e,null,l,a):qa(e,t.child,l,a)}function bd(t,e,l,a,n){l=l.render;var u=e.ref;if("ref"in a){var r={};for(var f in a)f!=="ref"&&(r[f]=a[f])}else r=a;return ea(e),a=ur(t,e,l,r,u,n),f=ir(),t!==null&&!Kt?(cr(t,e,n),fl(t,e,n)):(St&&f&&Qc(e),e.flags|=1,Pt(t,e,a,n),e.child)}function xd(t,e,l,a,n){if(t===null){var u=l.type;return typeof u=="function"&&!Bc(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,Sd(t,e,u,a,n)):(t=$u(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!_r(t,n)){var r=u.memoizedProps;if(l=l.compare,l=l!==null?l:An,l(r,a)&&t.ref===e.ref)return fl(t,e,n)}return e.flags|=1,t=nl(u,a),t.ref=e.ref,t.return=e,e.child=t}function Sd(t,e,l,a,n){if(t!==null){var u=t.memoizedProps;if(An(u,a)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=a=u,_r(t,n))(t.flags&131072)!==0&&(Kt=!0);else return e.lanes=t.lanes,fl(t,e,n)}return Tr(t,e,l,a,n)}function jd(t,e,l){var a=e.pendingProps,n=a.children,u=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=u!==null?u.baseLanes|l:l,t!==null){for(n=e.child=t.child,u=0;n!==null;)u=u|n.lanes|n.childLanes,n=n.sibling;e.childLanes=u&~a}else e.childLanes=0,e.child=null;return Td(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ku(e,u!==null?u.cachePool:null),u!==null?Sf(e,u):lr(),sd(e);else return e.lanes=e.childLanes=536870912,Td(t,e,u!==null?u.baseLanes|l:l,l)}else u!==null?(ku(e,u.cachePool),Sf(e,u),Ml(),e.memoizedState=null):(t!==null&&ku(e,null),lr(),Ml());return Pt(t,e,n,l),e.child}function Td(t,e,l,a){var n=Wc();return n=n===null?null:{parent:$t._currentValue,pool:n},e.memoizedState={baseLanes:l,cachePool:n},t!==null&&ku(e,null),lr(),sd(e),t!==null&&On(t,e,a,!0),null}function fi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Tr(t,e,l,a,n){return ea(e),l=ur(t,e,l,a,void 0,n),a=ir(),t!==null&&!Kt?(cr(t,e,n),fl(t,e,n)):(St&&a&&Qc(e),e.flags|=1,Pt(t,e,l,n),e.child)}function Ad(t,e,l,a,n,u){return ea(e),e.updateQueue=null,l=Tf(e,a,l,n),jf(t),a=ir(),t!==null&&!Kt?(cr(t,e,u),fl(t,e,u)):(St&&a&&Qc(e),e.flags|=1,Pt(t,e,l,u),e.child)}function Dd(t,e,l,a,n){if(ea(e),e.stateNode===null){var u=za,r=l.contextType;typeof r=="object"&&r!==null&&(u=ne(r)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Sr,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},Pc(e),r=l.contextType,u.context=typeof r=="object"&&r!==null?ne(r):za,u.state=e.memoizedState,r=l.getDerivedStateFromProps,typeof r=="function"&&(xr(e,l,r,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Sr.enqueueReplaceState(u,u.state,null),Gn(e,a,u,n),Hn(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var f=e.memoizedProps,h=na(l,f);u.props=h;var S=u.context,M=l.contextType;r=za,typeof M=="object"&&M!==null&&(r=ne(M));var C=l.getDerivedStateFromProps;M=typeof C=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,M||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||S!==r)&&fd(e,u,a,r),jl=!1;var T=e.memoizedState;u.state=T,Gn(e,a,u,n),Hn(),S=e.memoizedState,f||T!==S||jl?(typeof C=="function"&&(xr(e,l,C,a),S=e.memoizedState),(h=jl||od(e,l,h,a,T,S,r))?(M||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=S),u.props=a,u.state=S,u.context=r,a=h):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,Ic(t,e),r=e.memoizedProps,M=na(l,r),u.props=M,C=e.pendingProps,T=u.context,S=l.contextType,h=za,typeof S=="object"&&S!==null&&(h=ne(S)),f=l.getDerivedStateFromProps,(S=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(r!==C||T!==h)&&fd(e,u,a,h),jl=!1,T=e.memoizedState,u.state=T,Gn(e,a,u,n),Hn();var D=e.memoizedState;r!==C||T!==D||jl||t!==null&&t.dependencies!==null&&Vu(t.dependencies)?(typeof f=="function"&&(xr(e,l,f,a),D=e.memoizedState),(M=jl||od(e,l,M,a,T,D,h)||t!==null&&t.dependencies!==null&&Vu(t.dependencies))?(S||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,D,h),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,D,h)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=D),u.props=a,u.state=D,u.context=h,a=M):(typeof u.componentDidUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,fi(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=qa(e,t.child,null,n),e.child=qa(e,null,l,n)):Pt(t,e,l,n),e.memoizedState=u.state,t=e.child):t=fl(t,e,n),t}function Ed(t,e,l,a){return Mn(),e.flags|=256,Pt(t,e,l,a),e.child}var Ar={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dr(t){return{baseLanes:t,cachePool:hf()}}function Er(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ue),t}function Md(t,e,l){var a=e.pendingProps,n=!1,u=(e.flags&128)!==0,r;if((r=u)||(r=t!==null&&t.memoizedState===null?!1:(Zt.current&2)!==0),r&&(n=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(St){if(n?El(e):Ml(),St){var f=Ht,h;if(h=f){t:{for(h=f,f=Je;h.nodeType!==8;){if(!f){f=null;break t}if(h=$e(h.nextSibling),h===null){f=null;break t}}f=h}f!==null?(e.memoizedState={dehydrated:f,treeContext:Wl!==null?{id:ul,overflow:il}:null,retryLane:536870912,hydrationErrors:null},h=be(18,null,null,0),h.stateNode=f,h.return=e,e.child=h,ie=e,Ht=null,h=!0):h=!1}h||Il(e)}if(f=e.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return ss(f)?e.lanes=32:e.lanes=536870912,null;ol(e)}return f=a.children,a=a.fallback,n?(Ml(),n=e.mode,f=di({mode:"hidden",children:f},n),a=Jl(a,n,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,n=e.child,n.memoizedState=Dr(l),n.childLanes=Er(t,r,l),e.memoizedState=Ar,a):(El(e),Mr(e,f))}if(h=t.memoizedState,h!==null&&(f=h.dehydrated,f!==null)){if(u)e.flags&256?(El(e),e.flags&=-257,e=zr(t,e,l)):e.memoizedState!==null?(Ml(),e.child=t.child,e.flags|=128,e=null):(Ml(),n=a.fallback,f=e.mode,a=di({mode:"visible",children:a.children},f),n=Jl(n,f,l,null),n.flags|=2,a.return=e,n.return=e,a.sibling=n,e.child=a,qa(e,t.child,null,l),a=e.child,a.memoizedState=Dr(l),a.childLanes=Er(t,r,l),e.memoizedState=Ar,e=n);else if(El(e),ss(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var S=r.dgst;r=S,a=Error(o(419)),a.stack="",a.digest=r,zn({value:a,source:null,stack:null}),e=zr(t,e,l)}else if(Kt||On(t,e,l,!1),r=(l&t.childLanes)!==0,Kt||r){if(r=_t,r!==null&&(a=l&-l,a=(a&42)!==0?1:oc(a),a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==h.retryLane))throw h.retryLane=a,Ma(t,a),Ae(r,t,a),vd;f.data==="$?"||Vr(),e=zr(t,e,l)}else f.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=h.treeContext,Ht=$e(f.nextSibling),ie=e,St=!0,Pl=null,Je=!1,t!==null&&(Re[Ce++]=ul,Re[Ce++]=il,Re[Ce++]=Wl,ul=t.id,il=t.overflow,Wl=e),e=Mr(e,a.children),e.flags|=4096);return e}return n?(Ml(),n=a.fallback,f=e.mode,h=t.child,S=h.sibling,a=nl(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,S!==null?n=nl(S,n):(n=Jl(n,f,l,null),n.flags|=2),n.return=e,a.return=e,a.sibling=n,e.child=a,a=n,n=e.child,f=t.child.memoizedState,f===null?f=Dr(l):(h=f.cachePool,h!==null?(S=$t._currentValue,h=h.parent!==S?{parent:S,pool:S}:h):h=hf(),f={baseLanes:f.baseLanes|l,cachePool:h}),n.memoizedState=f,n.childLanes=Er(t,r,l),e.memoizedState=Ar,a):(El(e),l=t.child,t=l.sibling,l=nl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=l,e.memoizedState=null,l)}function Mr(t,e){return e=di({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function di(t,e){return t=be(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function zr(t,e,l){return qa(e,t.child,null,l),t=Mr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Vc(t.return,e,l)}function Or(t,e,l,a,n){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n)}function Od(t,e,l){var a=e.pendingProps,n=a.revealOrder,u=a.tail;if(Pt(t,e,a.children,l),a=Zt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zd(t,l,e);else if(t.tag===19)zd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(Q(Zt,a),n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&ri(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),Or(e,!1,n,l,u);break;case"backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ri(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}Or(e,!0,l,null,u);break;case"together":Or(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Cl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(On(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,l=nl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=nl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function _r(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Vu(t)))}function ag(t,e,l){switch(e.tag){case 3:jt(e,e.stateNode.containerInfo),Sl(e,$t,t.memoizedState.cache),Mn();break;case 27:case 5:$l(e);break;case 4:jt(e,e.stateNode.containerInfo);break;case 10:Sl(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(El(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Md(t,e,l):(El(e),t=fl(t,e,l),t!==null?t.sibling:null);El(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(On(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Od(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Q(Zt,Zt.current),a)break;return null;case 22:case 23:return e.lanes=0,jd(t,e,l);case 24:Sl(e,$t,t.memoizedState.cache)}return fl(t,e,l)}function _d(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Kt=!0;else{if(!_r(t,l)&&(e.flags&128)===0)return Kt=!1,ag(t,e,l);Kt=(t.flags&131072)!==0}else Kt=!1,St&&(e.flags&1048576)!==0&&uf(e,Lu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,n=a._init;if(a=n(a._payload),e.type=a,typeof a=="function")Bc(a)?(t=na(a,t),e.tag=1,e=Dd(null,e,a,t,l)):(e.tag=0,e=Tr(null,e,a,t,l));else{if(a!=null){if(n=a.$$typeof,n===w){e.tag=11,e=bd(null,e,a,t,l);break t}else if(n===q){e.tag=14,e=xd(null,e,a,t,l);break t}}throw e=L(a)||a,Error(o(306,e,""))}}return e;case 0:return Tr(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=na(a,e.pendingProps),Dd(t,e,a,n,l);case 3:t:{if(jt(e,e.stateNode.containerInfo),t===null)throw Error(o(387));a=e.pendingProps;var u=e.memoizedState;n=u.element,Ic(t,e),Gn(e,a,null,l);var r=e.memoizedState;if(a=r.cache,Sl(e,$t,a),a!==u.cache&&Kc(e,[$t],l,!0),Hn(),a=r.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Ed(t,e,a,l);break t}else if(a!==n){n=Oe(Error(o(424)),e),zn(n),e=Ed(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ht=$e(t.firstChild),ie=e,St=!0,Pl=null,Je=!0,l=rd(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Mn(),a===n){e=fl(t,e,l);break t}Pt(t,e,a,l)}e=e.child}return e;case 26:return fi(t,e),t===null?(l=Uh(e.type,null,e.pendingProps,null))?e.memoizedState=l:St||(l=e.type,t=e.pendingProps,a=Ei(et.current).createElement(l),a[ae]=e,a[ce]=t,te(a,l,t),Vt(a),e.stateNode=a):e.memoizedState=Uh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return $l(e),t===null&&St&&(a=e.stateNode=Rh(e.type,e.pendingProps,et.current),ie=e,Je=!0,n=Ht,Gl(e.type)?(os=n,Ht=$e(a.firstChild)):Ht=n),Pt(t,e,e.pendingProps.children,l),fi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&St&&((n=a=Ht)&&(a=Rg(a,e.type,e.pendingProps,Je),a!==null?(e.stateNode=a,ie=e,Ht=$e(a.firstChild),Je=!1,n=!0):n=!1),n||Il(e)),$l(e),n=e.type,u=e.pendingProps,r=t!==null?t.memoizedProps:null,a=u.children,is(n,u)?a=null:r!==null&&is(n,r)&&(e.flags|=32),e.memoizedState!==null&&(n=ur(t,e,J1,null,null,l),nu._currentValue=n),fi(t,e),Pt(t,e,a,l),e.child;case 6:return t===null&&St&&((t=l=Ht)&&(l=Cg(l,e.pendingProps,Je),l!==null?(e.stateNode=l,ie=e,Ht=null,t=!0):t=!1),t||Il(e)),null;case 13:return Md(t,e,l);case 4:return jt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=qa(e,null,a,l):Pt(t,e,a,l),e.child;case 11:return bd(t,e,e.type,e.pendingProps,l);case 7:return Pt(t,e,e.pendingProps,l),e.child;case 8:return Pt(t,e,e.pendingProps.children,l),e.child;case 12:return Pt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Sl(e,e.type,a.value),Pt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,ea(e),n=ne(n),a=a(n),e.flags|=1,Pt(t,e,a,l),e.child;case 14:return xd(t,e,e.type,e.pendingProps,l);case 15:return Sd(t,e,e.type,e.pendingProps,l);case 19:return Od(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=di(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=nl(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return jd(t,e,l);case 24:return ea(e),a=ne($t),t===null?(n=Wc(),n===null&&(n=_t,u=kc(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),e.memoizedState={parent:a,cache:n},Pc(e),Sl(e,$t,n)):((t.lanes&l)!==0&&(Ic(t,e),Gn(e,null,null,l),Hn()),n=t.memoizedState,u=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Sl(e,$t,a)):(a=u.cache,Sl(e,$t,a),a!==n.cache&&Kc(e,[$t],l,!0))),Pt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function dl(t){t.flags|=4}function Rd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Bh(e)){if(e=Ne.current,e!==null&&((yt&4194048)===yt?We!==null:(yt&62914560)!==yt&&(yt&536870912)===0||e!==We))throw Nn=Fc,mf;t.flags|=8192}}function hi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?co():536870912,t.lanes|=e,Qa|=e)}function $n(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function ng(t,e,l){var a=e.pendingProps;switch($c(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Nt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),rl($t),le(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(En(e)?dl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,sf())),Nt(e),null;case 26:return l=e.memoizedState,t===null?(dl(e),l!==null?(Nt(e),Rd(e,l)):(Nt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(dl(e),Nt(e),Rd(e,l)):(Nt(e),e.flags&=-16777217):(t.memoizedProps!==a&&dl(e),Nt(e),e.flags&=-16777217),null;case 27:el(e),l=et.current;var n=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&dl(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Nt(e),null}t=F.current,En(e)?cf(e):(t=Rh(n,a,l),e.stateNode=t,dl(e))}return Nt(e),null;case 5:if(el(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&dl(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Nt(e),null}if(t=F.current,En(e))cf(e);else{switch(n=Ei(et.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?n.createElement(l,{is:a.is}):n.createElement(l)}}t[ae]=e,t[ce]=a;t:for(n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}e.stateNode=t;t:switch(te(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&dl(e)}}return Nt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&dl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(t=et.current,En(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=ie,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[ae]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Ah(t.nodeValue,l)),t||Il(e)}else t=Ei(t).createTextNode(a),t[ae]=e,e.stateNode=t}return Nt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=En(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(o(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[ae]=e}else Mn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Nt(e),n=!1}else n=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ol(e),e):(ol(e),null)}if(ol(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),hi(e,e.updateQueue),Nt(e),null;case 4:return le(),t===null&&es(e.stateNode.containerInfo),Nt(e),null;case 10:return rl(e.type),Nt(e),null;case 19:if(X(Zt),n=e.memoizedState,n===null)return Nt(e),null;if(a=(e.flags&128)!==0,u=n.rendering,u===null)if(a)$n(n,!1);else{if(Gt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=ri(t),u!==null){for(e.flags|=128,$n(n,!1),t=u.updateQueue,e.updateQueue=t,hi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)nf(l,t),l=l.sibling;return Q(Zt,Zt.current&1|2),e.child}t=t.sibling}n.tail!==null&&ke()>yi&&(e.flags|=128,a=!0,$n(n,!1),e.lanes=4194304)}else{if(!a)if(t=ri(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,hi(e,t),$n(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!St)return Nt(e),null}else 2*ke()-n.renderingStartTime>yi&&l!==536870912&&(e.flags|=128,a=!0,$n(n,!1),e.lanes=4194304);n.isBackwards?(u.sibling=e.child,e.child=u):(t=n.last,t!==null?t.sibling=u:e.child=u,n.last=u)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ke(),e.sibling=null,t=Zt.current,Q(Zt,a?t&1|2:t&1),e):(Nt(e),null);case 22:case 23:return ol(e),ar(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),l=e.updateQueue,l!==null&&hi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&X(la),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),rl($t),Nt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function ug(t,e){switch($c(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rl($t),le(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return el(e),null;case 13:if(ol(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Mn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(Zt),null;case 4:return le(),null;case 10:return rl(e.type),null;case 22:case 23:return ol(e),ar(),t!==null&&X(la),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return rl($t),null;case 25:return null;default:return null}}function Cd(t,e){switch($c(e),e.tag){case 3:rl($t),le();break;case 26:case 27:case 5:el(e);break;case 4:le();break;case 13:ol(e);break;case 19:X(Zt);break;case 10:rl(e.type);break;case 22:case 23:ol(e),ar(),t!==null&&X(la);break;case 24:rl($t)}}function Zn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var u=l.create,r=l.inst;a=u(),r.destroy=a}l=l.next}while(l!==n)}}catch(f){Ot(e,e.return,f)}}function zl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&t)===t){var r=a.inst,f=r.destroy;if(f!==void 0){r.destroy=void 0,n=e;var h=l,S=f;try{S()}catch(M){Ot(n,h,M)}}}a=a.next}while(a!==u)}}catch(M){Ot(e,e.return,M)}}function Nd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{xf(e,l)}catch(a){Ot(t,t.return,a)}}}function Ud(t,e,l){l.props=na(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Ot(t,e,a)}}function Ln(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){Ot(t,e,n)}}function Fe(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Ot(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Ot(t,e,n)}else l.current=null}function Hd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Ot(t,t.return,n)}}function Rr(t,e,l){try{var a=t.stateNode;Eg(a,t.type,l,e),a[ce]=e}catch(n){Ot(t,t.return,n)}}function Gd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Gl(t.type)||t.tag===4}function Cr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Gl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Di));else if(a!==4&&(a===27&&Gl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Nr(t,e,l),t=t.sibling;t!==null;)Nr(t,e,l),t=t.sibling}function mi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Gl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(mi(t,e,l),t=t.sibling;t!==null;)mi(t,e,l),t=t.sibling}function wd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);te(e,a,l),e[ae]=t,e[ce]=l}catch(u){Ot(t,t.return,u)}}var hl=!1,qt=!1,Ur=!1,qd=typeof WeakSet=="function"?WeakSet:Set,kt=null;function ig(t,e){if(t=t.containerInfo,ns=Ci,t=ko(t),Cc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var r=0,f=-1,h=-1,S=0,M=0,C=t,T=null;e:for(;;){for(var D;C!==l||n!==0&&C.nodeType!==3||(f=r+n),C!==u||a!==0&&C.nodeType!==3||(h=r+a),C.nodeType===3&&(r+=C.nodeValue.length),(D=C.firstChild)!==null;)T=C,C=D;for(;;){if(C===t)break e;if(T===l&&++S===n&&(f=r),T===u&&++M===a&&(h=r),(D=C.nextSibling)!==null)break;C=T,T=C.parentNode}C=D}l=f===-1||h===-1?null:{start:f,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(us={focusedElem:t,selectionRange:l},Ci=!1,kt=e;kt!==null;)if(e=kt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,kt=t;else for(;kt!==null;){switch(e=kt,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var nt=na(l.type,n,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(nt,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ot(l,l.return,tt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)rs(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,kt=t;break}kt=e.return}}function Bd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Ol(t,l),a&4&&Zn(5,l);break;case 1:if(Ol(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(r){Ot(l,l.return,r)}else{var n=na(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){Ot(l,l.return,r)}}a&64&&Nd(l),a&512&&Ln(l,l.return);break;case 3:if(Ol(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{xf(t,e)}catch(r){Ot(l,l.return,r)}}break;case 27:e===null&&a&4&&wd(l);case 26:case 5:Ol(t,l),e===null&&a&4&&Hd(l),a&512&&Ln(l,l.return);break;case 12:Ol(t,l);break;case 13:Ol(t,l),a&4&&Qd(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=gg.bind(null,l),Ng(t,l))));break;case 22:if(a=l.memoizedState!==null||hl,!a){e=e!==null&&e.memoizedState!==null||qt,n=hl;var u=qt;hl=a,(qt=e)&&!u?_l(t,l,(l.subtreeFlags&8772)!==0):Ol(t,l),hl=n,qt=u}break;case 30:break;default:Ol(t,l)}}function Yd(t){var e=t.alternate;e!==null&&(t.alternate=null,Yd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&hc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ct=null,oe=!1;function ml(t,e,l){for(l=l.child;l!==null;)Xd(t,e,l),l=l.sibling}function Xd(t,e,l){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(dn,l)}catch{}switch(l.tag){case 26:qt||Fe(l,e),ml(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:qt||Fe(l,e);var a=Ct,n=oe;Gl(l.type)&&(Ct=l.stateNode,oe=!1),ml(t,e,l),tu(l.stateNode),Ct=a,oe=n;break;case 5:qt||Fe(l,e);case 6:if(a=Ct,n=oe,Ct=null,ml(t,e,l),Ct=a,oe=n,Ct!==null)if(oe)try{(Ct.nodeType===9?Ct.body:Ct.nodeName==="HTML"?Ct.ownerDocument.body:Ct).removeChild(l.stateNode)}catch(u){Ot(l,e,u)}else try{Ct.removeChild(l.stateNode)}catch(u){Ot(l,e,u)}break;case 18:Ct!==null&&(oe?(t=Ct,Oh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),ru(t)):Oh(Ct,l.stateNode));break;case 4:a=Ct,n=oe,Ct=l.stateNode.containerInfo,oe=!0,ml(t,e,l),Ct=a,oe=n;break;case 0:case 11:case 14:case 15:qt||zl(2,l,e),qt||zl(4,l,e),ml(t,e,l);break;case 1:qt||(Fe(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Ud(l,e,a)),ml(t,e,l);break;case 21:ml(t,e,l);break;case 22:qt=(a=qt)||l.memoizedState!==null,ml(t,e,l),qt=a;break;default:ml(t,e,l)}}function Qd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ru(t)}catch(l){Ot(e,e.return,l)}}function cg(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new qd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new qd),e;default:throw Error(o(435,t.tag))}}function Hr(t,e){var l=cg(t);e.forEach(function(a){var n=yg.bind(null,t,a);l.has(a)||(l.add(a),a.then(n,n))})}function xe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=t,r=e,f=r;t:for(;f!==null;){switch(f.tag){case 27:if(Gl(f.type)){Ct=f.stateNode,oe=!1;break t}break;case 5:Ct=f.stateNode,oe=!1;break t;case 3:case 4:Ct=f.stateNode.containerInfo,oe=!0;break t}f=f.return}if(Ct===null)throw Error(o(160));Xd(u,r,n),Ct=null,oe=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)$d(e,t),e=e.sibling}var Qe=null;function $d(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xe(e,t),Se(t),a&4&&(zl(3,t,t.return),Zn(3,t),zl(5,t,t.return));break;case 1:xe(e,t),Se(t),a&512&&(qt||l===null||Fe(l,l.return)),a&64&&hl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Qe;if(xe(e,t),Se(t),a&512&&(qt||l===null||Fe(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[gn]||u[ae]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),te(u,a,l),u[ae]=t,Vt(u),a=u;break t;case"link":var r=wh("link","href",n).get(a+(l.href||""));if(r){for(var f=0;f<r.length;f++)if(u=r[f],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){r.splice(f,1);break e}}u=n.createElement(a),te(u,a,l),n.head.appendChild(u);break;case"meta":if(r=wh("meta","content",n).get(a+(l.content||""))){for(f=0;f<r.length;f++)if(u=r[f],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){r.splice(f,1);break e}}u=n.createElement(a),te(u,a,l),n.head.appendChild(u);break;default:throw Error(o(468,a))}u[ae]=t,Vt(u),a=u}t.stateNode=a}else qh(n,t.type,t.stateNode);else t.stateNode=Gh(n,a,t.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?qh(n,t.type,t.stateNode):Gh(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Rr(t,t.memoizedProps,l.memoizedProps)}break;case 27:xe(e,t),Se(t),a&512&&(qt||l===null||Fe(l,l.return)),l!==null&&a&4&&Rr(t,t.memoizedProps,l.memoizedProps);break;case 5:if(xe(e,t),Se(t),a&512&&(qt||l===null||Fe(l,l.return)),t.flags&32){n=t.stateNode;try{xa(n,"")}catch(D){Ot(t,t.return,D)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,Rr(t,n,l!==null?l.memoizedProps:n)),a&1024&&(Ur=!0);break;case 6:if(xe(e,t),Se(t),a&4){if(t.stateNode===null)throw Error(o(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(D){Ot(t,t.return,D)}}break;case 3:if(Oi=null,n=Qe,Qe=Mi(e.containerInfo),xe(e,t),Qe=n,Se(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{ru(e.containerInfo)}catch(D){Ot(t,t.return,D)}Ur&&(Ur=!1,Zd(t));break;case 4:a=Qe,Qe=Mi(t.stateNode.containerInfo),xe(e,t),Se(t),Qe=a;break;case 12:xe(e,t),Se(t);break;case 13:xe(e,t),Se(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Xr=ke()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Hr(t,a)));break;case 22:n=t.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,S=hl,M=qt;if(hl=S||n,qt=M||h,xe(e,t),qt=M,hl=S,Se(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||h||hl||qt||ua(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){h=l=e;try{if(u=h.stateNode,n)r=u.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{f=h.stateNode;var C=h.memoizedProps.style,T=C!=null&&C.hasOwnProperty("display")?C.display:null;f.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(D){Ot(h,h.return,D)}}}else if(e.tag===6){if(l===null){h=e;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(D){Ot(h,h.return,D)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Hr(t,l))));break;case 19:xe(e,t),Se(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Hr(t,a)));break;case 30:break;case 21:break;default:xe(e,t),Se(t)}}function Se(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Gd(a)){l=a;break}a=a.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var n=l.stateNode,u=Cr(t);mi(t,u,n);break;case 5:var r=l.stateNode;l.flags&32&&(xa(r,""),l.flags&=-33);var f=Cr(t);mi(t,f,r);break;case 3:case 4:var h=l.stateNode.containerInfo,S=Cr(t);Nr(t,S,h);break;default:throw Error(o(161))}}catch(M){Ot(t,t.return,M)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Zd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ol(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Bd(t,e.alternate,e),e=e.sibling}function ua(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:zl(4,e,e.return),ua(e);break;case 1:Fe(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Ud(e,e.return,l),ua(e);break;case 27:tu(e.stateNode);case 26:case 5:Fe(e,e.return),ua(e);break;case 22:e.memoizedState===null&&ua(e);break;case 30:ua(e);break;default:ua(e)}t=t.sibling}}function _l(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,u=e,r=u.flags;switch(u.tag){case 0:case 11:case 15:_l(n,u,l),Zn(4,u);break;case 1:if(_l(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){Ot(a,a.return,S)}if(a=u,n=a.updateQueue,n!==null){var f=a.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)bf(h[n],f)}catch(S){Ot(a,a.return,S)}}l&&r&64&&Nd(u),Ln(u,u.return);break;case 27:wd(u);case 26:case 5:_l(n,u,l),l&&a===null&&r&4&&Hd(u),Ln(u,u.return);break;case 12:_l(n,u,l);break;case 13:_l(n,u,l),l&&r&4&&Qd(n,u);break;case 22:u.memoizedState===null&&_l(n,u,l),Ln(u,u.return);break;case 30:break;default:_l(n,u,l)}e=e.sibling}}function Gr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&_n(l))}function wr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_n(t))}function Pe(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ld(t,e,l,a),e=e.sibling}function Ld(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Pe(t,e,l,a),n&2048&&Zn(9,e);break;case 1:Pe(t,e,l,a);break;case 3:Pe(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_n(t)));break;case 12:if(n&2048){Pe(t,e,l,a),t=e.stateNode;try{var u=e.memoizedProps,r=u.id,f=u.onPostCommit;typeof f=="function"&&f(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){Ot(e,e.return,h)}}else Pe(t,e,l,a);break;case 13:Pe(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,r=e.alternate,e.memoizedState!==null?u._visibility&2?Pe(t,e,l,a):Vn(t,e):u._visibility&2?Pe(t,e,l,a):(u._visibility|=2,Ba(t,e,l,a,(e.subtreeFlags&10256)!==0)),n&2048&&Gr(r,e);break;case 24:Pe(t,e,l,a),n&2048&&wr(e.alternate,e);break;default:Pe(t,e,l,a)}}function Ba(t,e,l,a,n){for(n=n&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,r=e,f=l,h=a,S=r.flags;switch(r.tag){case 0:case 11:case 15:Ba(u,r,f,h,n),Zn(8,r);break;case 23:break;case 22:var M=r.stateNode;r.memoizedState!==null?M._visibility&2?Ba(u,r,f,h,n):Vn(u,r):(M._visibility|=2,Ba(u,r,f,h,n)),n&&S&2048&&Gr(r.alternate,r);break;case 24:Ba(u,r,f,h,n),n&&S&2048&&wr(r.alternate,r);break;default:Ba(u,r,f,h,n)}e=e.sibling}}function Vn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:Vn(l,a),n&2048&&Gr(a.alternate,a);break;case 24:Vn(l,a),n&2048&&wr(a.alternate,a);break;default:Vn(l,a)}e=e.sibling}}var Kn=8192;function Ya(t){if(t.subtreeFlags&Kn)for(t=t.child;t!==null;)Vd(t),t=t.sibling}function Vd(t){switch(t.tag){case 26:Ya(t),t.flags&Kn&&t.memoizedState!==null&&Vg(Qe,t.memoizedState,t.memoizedProps);break;case 5:Ya(t);break;case 3:case 4:var e=Qe;Qe=Mi(t.stateNode.containerInfo),Ya(t),Qe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Kn,Kn=16777216,Ya(t),Kn=e):Ya(t));break;default:Ya(t)}}function Kd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function kn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];kt=a,Jd(a,t)}Kd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kd(t),t=t.sibling}function kd(t){switch(t.tag){case 0:case 11:case 15:kn(t),t.flags&2048&&zl(9,t,t.return);break;case 3:kn(t);break;case 12:kn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,gi(t)):kn(t);break;default:kn(t)}}function gi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];kt=a,Jd(a,t)}Kd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:zl(8,e,e.return),gi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,gi(e));break;default:gi(e)}t=t.sibling}}function Jd(t,e){for(;kt!==null;){var l=kt;switch(l.tag){case 0:case 11:case 15:zl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:_n(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,kt=a;else t:for(l=t;kt!==null;){a=kt;var n=a.sibling,u=a.return;if(Yd(a),a===l){kt=null;break t}if(n!==null){n.return=u,kt=n;break t}kt=u}}}var rg={getCacheForType:function(t){var e=ne($t),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},sg=typeof WeakMap=="function"?WeakMap:Map,At=0,_t=null,ht=null,yt=0,Dt=0,je=null,Rl=!1,Xa=!1,qr=!1,gl=0,Gt=0,Cl=0,ia=0,Br=0,Ue=0,Qa=0,Jn=null,fe=null,Yr=!1,Xr=0,yi=1/0,pi=null,Nl=null,It=0,Ul=null,$a=null,Za=0,Qr=0,$r=null,Wd=null,Wn=0,Zr=null;function Te(){if((At&2)!==0&&yt!==0)return yt&-yt;if(b.T!==null){var t=Ra;return t!==0?t:Fr()}return oo()}function Fd(){Ue===0&&(Ue=(yt&536870912)===0||St?io():536870912);var t=Ne.current;return t!==null&&(t.flags|=32),Ue}function Ae(t,e,l){(t===_t&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&(La(t,0),Hl(t,yt,Ue,!1)),mn(t,l),((At&2)===0||t!==_t)&&(t===_t&&((At&2)===0&&(ia|=l),Gt===4&&Hl(t,yt,Ue,!1)),Ie(t))}function Pd(t,e,l){if((At&6)!==0)throw Error(o(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||hn(t,e),n=a?dg(t,e):Kr(t,e,!0),u=a;do{if(n===0){Xa&&!a&&Hl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!og(l)){n=Kr(t,e,!1),u=!1;continue}if(n===2){if(u=e,t.errorRecoveryDisabledLanes&u)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var f=t;n=Jn;var h=f.current.memoizedState.isDehydrated;if(h&&(La(f,r).flags|=256),r=Kr(f,r,!1),r!==2){if(qr&&!h){f.errorRecoveryDisabledLanes|=u,ia|=u,n=4;break t}u=fe,fe=n,u!==null&&(fe===null?fe=u:fe.push.apply(fe,u))}n=r}if(u=!1,n!==2)continue}}if(n===1){La(t,0),Hl(t,e,0,!0);break}t:{switch(a=t,u=n,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Hl(a,e,Ue,!Rl);break t;case 2:fe=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(n=Xr+300-ke(),10<n)){if(Hl(a,e,Ue,!Rl),zu(a,0,!0)!==0)break t;a.timeoutHandle=Mh(Id.bind(null,a,l,fe,pi,Yr,e,Ue,ia,Qa,Rl,u,2,-0,0),n);break t}Id(a,l,fe,pi,Yr,e,Ue,ia,Qa,Rl,u,0,-0,0)}}break}while(!0);Ie(t)}function Id(t,e,l,a,n,u,r,f,h,S,M,C,T,D){if(t.timeoutHandle=-1,C=e.subtreeFlags,(C&8192||(C&16785408)===16785408)&&(au={stylesheets:null,count:0,unsuspend:Lg},Vd(e),C=Kg(),C!==null)){t.cancelPendingCommit=C(ih.bind(null,t,e,u,l,a,n,r,f,h,M,1,T,D)),Hl(t,u,r,!S);return}ih(t,e,u,l,a,n,r,f,h)}function og(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!ve(u(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hl(t,e,l,a){e&=~Br,e&=~ia,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var u=31-pe(n),r=1<<u;a[u]=-1,n&=~r}l!==0&&ro(t,l,e)}function vi(){return(At&6)===0?(Fn(0),!1):!0}function Lr(){if(ht!==null){if(Dt===0)var t=ht.return;else t=ht,cl=ta=null,rr(t),wa=null,Xn=0,t=ht;for(;t!==null;)Cd(t.alternate,t),t=t.return;ht=null}}function La(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,zg(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Lr(),_t=t,ht=l=nl(t.current,null),yt=e,Dt=0,je=null,Rl=!1,Xa=hn(t,e),qr=!1,Qa=Ue=Br=ia=Cl=Gt=0,fe=Jn=null,Yr=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-pe(a),u=1<<n;e|=t[n],a&=~u}return gl=e,Yu(),l}function th(t,e){ot=null,b.H=ui,e===Cn||e===Ju?(e=pf(),Dt=3):e===mf?(e=pf(),Dt=4):Dt=e===vd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,je=e,ht===null&&(Gt=1,oi(t,Oe(e,t.current)))}function eh(){var t=b.H;return b.H=ui,t===null?ui:t}function lh(){var t=b.A;return b.A=rg,t}function Vr(){Gt=4,Rl||(yt&4194048)!==yt&&Ne.current!==null||(Xa=!0),(Cl&134217727)===0&&(ia&134217727)===0||_t===null||Hl(_t,yt,Ue,!1)}function Kr(t,e,l){var a=At;At|=2;var n=eh(),u=lh();(_t!==t||yt!==e)&&(pi=null,La(t,e)),e=!1;var r=Gt;t:do try{if(Dt!==0&&ht!==null){var f=ht,h=je;switch(Dt){case 8:Lr(),r=6;break t;case 3:case 2:case 9:case 6:Ne.current===null&&(e=!0);var S=Dt;if(Dt=0,je=null,Va(t,f,h,S),l&&Xa){r=0;break t}break;default:S=Dt,Dt=0,je=null,Va(t,f,h,S)}}fg(),r=Gt;break}catch(M){th(t,M)}while(!0);return e&&t.shellSuspendCounter++,cl=ta=null,At=a,b.H=n,b.A=u,ht===null&&(_t=null,yt=0,Yu()),r}function fg(){for(;ht!==null;)ah(ht)}function dg(t,e){var l=At;At|=2;var a=eh(),n=lh();_t!==t||yt!==e?(pi=null,yi=ke()+500,La(t,e)):Xa=hn(t,e);t:do try{if(Dt!==0&&ht!==null){e=ht;var u=je;e:switch(Dt){case 1:Dt=0,je=null,Va(t,e,u,1);break;case 2:case 9:if(gf(u)){Dt=0,je=null,nh(e);break}e=function(){Dt!==2&&Dt!==9||_t!==t||(Dt=7),Ie(t)},u.then(e,e);break t;case 3:Dt=7;break t;case 4:Dt=5;break t;case 7:gf(u)?(Dt=0,je=null,nh(e)):(Dt=0,je=null,Va(t,e,u,7));break;case 5:var r=null;switch(ht.tag){case 26:r=ht.memoizedState;case 5:case 27:var f=ht;if(!r||Bh(r)){Dt=0,je=null;var h=f.sibling;if(h!==null)ht=h;else{var S=f.return;S!==null?(ht=S,bi(S)):ht=null}break e}}Dt=0,je=null,Va(t,e,u,5);break;case 6:Dt=0,je=null,Va(t,e,u,6);break;case 8:Lr(),Gt=6;break t;default:throw Error(o(462))}}hg();break}catch(M){th(t,M)}while(!0);return cl=ta=null,b.H=a,b.A=n,At=l,ht!==null?0:(_t=null,yt=0,Yu(),Gt)}function hg(){for(;ht!==null&&!Hm();)ah(ht)}function ah(t){var e=_d(t.alternate,t,gl);t.memoizedProps=t.pendingProps,e===null?bi(t):ht=e}function nh(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ad(l,e,e.pendingProps,e.type,void 0,yt);break;case 11:e=Ad(l,e,e.pendingProps,e.type.render,e.ref,yt);break;case 5:rr(e);default:Cd(l,e),e=ht=nf(e,gl),e=_d(l,e,gl)}t.memoizedProps=t.pendingProps,e===null?bi(t):ht=e}function Va(t,e,l,a){cl=ta=null,rr(e),wa=null,Xn=0;var n=e.return;try{if(lg(t,n,e,l,yt)){Gt=1,oi(t,Oe(l,t.current)),ht=null;return}}catch(u){if(n!==null)throw ht=n,u;Gt=1,oi(t,Oe(l,t.current)),ht=null;return}e.flags&32768?(St||a===1?t=!0:Xa||(yt&536870912)!==0?t=!1:(Rl=t=!0,(a===2||a===9||a===3||a===6)&&(a=Ne.current,a!==null&&a.tag===13&&(a.flags|=16384))),uh(e,t)):bi(e)}function bi(t){var e=t;do{if((e.flags&32768)!==0){uh(e,Rl);return}t=e.return;var l=ng(e.alternate,e,gl);if(l!==null){ht=l;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);Gt===0&&(Gt=5)}function uh(t,e){do{var l=ug(t.alternate,t);if(l!==null){l.flags&=32767,ht=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){ht=t;return}ht=t=l}while(t!==null);Gt=6,ht=null}function ih(t,e,l,a,n,u,r,f,h){t.cancelPendingCommit=null;do xi();while(It!==0);if((At&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(u=e.lanes|e.childLanes,u|=wc,Lm(t,l,u,r,f,h),t===_t&&(ht=_t=null,yt=0),$a=e,Ul=t,Za=l,Qr=u,$r=n,Wd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,pg(Du,function(){return fh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=b.T,b.T=null,n=H.p,H.p=2,r=At,At|=4;try{ig(t,e,l)}finally{At=r,H.p=n,b.T=a}}It=1,ch(),rh(),sh()}}function ch(){if(It===1){It=0;var t=Ul,e=$a,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=b.T,b.T=null;var a=H.p;H.p=2;var n=At;At|=4;try{$d(e,t);var u=us,r=ko(t.containerInfo),f=u.focusedElem,h=u.selectionRange;if(r!==f&&f&&f.ownerDocument&&Ko(f.ownerDocument.documentElement,f)){if(h!==null&&Cc(f)){var S=h.start,M=h.end;if(M===void 0&&(M=S),"selectionStart"in f)f.selectionStart=S,f.selectionEnd=Math.min(M,f.value.length);else{var C=f.ownerDocument||document,T=C&&C.defaultView||window;if(T.getSelection){var D=T.getSelection(),nt=f.textContent.length,tt=Math.min(h.start,nt),zt=h.end===void 0?tt:Math.min(h.end,nt);!D.extend&&tt>zt&&(r=zt,zt=tt,tt=r);var v=Vo(f,tt),g=Vo(f,zt);if(v&&g&&(D.rangeCount!==1||D.anchorNode!==v.node||D.anchorOffset!==v.offset||D.focusNode!==g.node||D.focusOffset!==g.offset)){var x=C.createRange();x.setStart(v.node,v.offset),D.removeAllRanges(),tt>zt?(D.addRange(x),D.extend(g.node,g.offset)):(x.setEnd(g.node,g.offset),D.addRange(x))}}}}for(C=[],D=f;D=D.parentNode;)D.nodeType===1&&C.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<C.length;f++){var _=C[f];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Ci=!!ns,us=ns=null}finally{At=n,H.p=a,b.T=l}}t.current=e,It=2}}function rh(){if(It===2){It=0;var t=Ul,e=$a,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=b.T,b.T=null;var a=H.p;H.p=2;var n=At;At|=4;try{Bd(t,e.alternate,e)}finally{At=n,H.p=a,b.T=l}}It=3}}function sh(){if(It===4||It===3){It=0,Gm();var t=Ul,e=$a,l=Za,a=Wd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?It=5:(It=0,$a=Ul=null,oh(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Nl=null),fc(l),e=e.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(dn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=b.T,n=H.p,H.p=2,b.T=null;try{for(var u=t.onRecoverableError,r=0;r<a.length;r++){var f=a[r];u(f.value,{componentStack:f.stack})}}finally{b.T=e,H.p=n}}(Za&3)!==0&&xi(),Ie(t),n=t.pendingLanes,(l&4194090)!==0&&(n&42)!==0?t===Zr?Wn++:(Wn=0,Zr=t):Wn=0,Fn(0)}}function oh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,_n(e)))}function xi(t){return ch(),rh(),sh(),fh()}function fh(){if(It!==5)return!1;var t=Ul,e=Qr;Qr=0;var l=fc(Za),a=b.T,n=H.p;try{H.p=32>l?32:l,b.T=null,l=$r,$r=null;var u=Ul,r=Za;if(It=0,$a=Ul=null,Za=0,(At&6)!==0)throw Error(o(331));var f=At;if(At|=4,kd(u.current),Ld(u,u.current,r,l),At=f,Fn(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(dn,u)}catch{}return!0}finally{H.p=n,b.T=a,oh(t,e)}}function dh(t,e,l){e=Oe(l,e),e=jr(t.stateNode,e,2),t=Al(t,e,2),t!==null&&(mn(t,2),Ie(t))}function Ot(t,e,l){if(t.tag===3)dh(t,t,l);else for(;e!==null;){if(e.tag===3){dh(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Nl===null||!Nl.has(a))){t=Oe(l,t),l=yd(2),a=Al(e,l,2),a!==null&&(pd(l,a,e,t),mn(a,2),Ie(a));break}}e=e.return}}function kr(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new sg;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(qr=!0,n.add(l),t=mg.bind(null,t,e,l),e.then(t,t))}function mg(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,_t===t&&(yt&l)===l&&(Gt===4||Gt===3&&(yt&62914560)===yt&&300>ke()-Xr?(At&2)===0&&La(t,0):Br|=l,Qa===yt&&(Qa=0)),Ie(t)}function hh(t,e){e===0&&(e=co()),t=Ma(t,e),t!==null&&(mn(t,e),Ie(t))}function gg(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),hh(t,l)}function yg(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),hh(t,l)}function pg(t,e){return cc(t,e)}var Si=null,Ka=null,Jr=!1,ji=!1,Wr=!1,ca=0;function Ie(t){t!==Ka&&t.next===null&&(Ka===null?Si=Ka=t:Ka=Ka.next=t),ji=!0,Jr||(Jr=!0,bg())}function Fn(t,e){if(!Wr&&ji){Wr=!0;do for(var l=!1,a=Si;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var r=a.suspendedLanes,f=a.pingedLanes;u=(1<<31-pe(42|t)+1)-1,u&=n&~(r&~f),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,ph(a,u))}else u=yt,u=zu(a,a===_t?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||hn(a,u)||(l=!0,ph(a,u));a=a.next}while(l);Wr=!1}}function vg(){mh()}function mh(){ji=Jr=!1;var t=0;ca!==0&&(Mg()&&(t=ca),ca=0);for(var e=ke(),l=null,a=Si;a!==null;){var n=a.next,u=gh(a,e);u===0?(a.next=null,l===null?Si=n:l.next=n,n===null&&(Ka=l)):(l=a,(t!==0||(u&3)!==0)&&(ji=!0)),a=n}Fn(t)}function gh(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var r=31-pe(u),f=1<<r,h=n[r];h===-1?((f&l)===0||(f&a)!==0)&&(n[r]=Zm(f,e)):h<=e&&(t.expiredLanes|=f),u&=~f}if(e=_t,l=yt,l=zu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&rc(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||hn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&rc(a),fc(l)){case 2:case 8:l=no;break;case 32:l=Du;break;case 268435456:l=uo;break;default:l=Du}return a=yh.bind(null,t),l=cc(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&rc(a),t.callbackPriority=2,t.callbackNode=null,2}function yh(t,e){if(It!==0&&It!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(xi()&&t.callbackNode!==l)return null;var a=yt;return a=zu(t,t===_t?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Pd(t,a,e),gh(t,ke()),t.callbackNode!=null&&t.callbackNode===l?yh.bind(null,t):null)}function ph(t,e){if(xi())return null;Pd(t,e,!0)}function bg(){Og(function(){(At&6)!==0?cc(ao,vg):mh()})}function Fr(){return ca===0&&(ca=io()),ca}function vh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nu(""+t)}function bh(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function xg(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var u=vh((n[ce]||null).action),r=a.submitter;r&&(e=(e=r[ce]||null)?vh(e.formAction):r.getAttribute("formAction"),e!==null&&(u=e,r=null));var f=new wu("action","action",null,a,n);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ca!==0){var h=r?bh(n,r):new FormData(n);pr(l,{pending:!0,data:h,method:n.method,action:u},null,h)}}else typeof u=="function"&&(f.preventDefault(),h=r?bh(n,r):new FormData(n),pr(l,{pending:!0,data:h,method:n.method,action:u},u,h))},currentTarget:n}]})}}for(var Pr=0;Pr<Gc.length;Pr++){var Ir=Gc[Pr],Sg=Ir.toLowerCase(),jg=Ir[0].toUpperCase()+Ir.slice(1);Xe(Sg,"on"+jg)}Xe(Fo,"onAnimationEnd"),Xe(Po,"onAnimationIteration"),Xe(Io,"onAnimationStart"),Xe("dblclick","onDoubleClick"),Xe("focusin","onFocus"),Xe("focusout","onBlur"),Xe(B1,"onTransitionRun"),Xe(Y1,"onTransitionStart"),Xe(X1,"onTransitionCancel"),Xe(tf,"onTransitionEnd"),pa("onMouseEnter",["mouseout","mouseover"]),pa("onMouseLeave",["mouseout","mouseover"]),pa("onPointerEnter",["pointerout","pointerover"]),pa("onPointerLeave",["pointerout","pointerover"]),Ll("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ll("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ll("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ll("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ll("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ll("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pn));function xh(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var r=a.length-1;0<=r;r--){var f=a[r],h=f.instance,S=f.currentTarget;if(f=f.listener,h!==u&&n.isPropagationStopped())break t;u=f,n.currentTarget=S;try{u(n)}catch(M){si(M)}n.currentTarget=null,u=h}else for(r=0;r<a.length;r++){if(f=a[r],h=f.instance,S=f.currentTarget,f=f.listener,h!==u&&n.isPropagationStopped())break t;u=f,n.currentTarget=S;try{u(n)}catch(M){si(M)}n.currentTarget=null,u=h}}}}function mt(t,e){var l=e[dc];l===void 0&&(l=e[dc]=new Set);var a=t+"__bubble";l.has(a)||(Sh(e,t,2,!1),l.add(a))}function ts(t,e,l){var a=0;e&&(a|=4),Sh(l,t,a,e)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function es(t){if(!t[Ti]){t[Ti]=!0,ho.forEach(function(l){l!=="selectionchange"&&(Tg.has(l)||ts(l,!1,t),ts(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ti]||(e[Ti]=!0,ts("selectionchange",!1,e))}}function Sh(t,e,l,a){switch(Lh(e)){case 2:var n=Wg;break;case 8:n=Fg;break;default:n=gs}l=n.bind(null,e,l,t),n=void 0,!Tc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function ls(t,e,l,a,n){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var f=a.stateNode.containerInfo;if(f===n)break;if(r===4)for(r=a.return;r!==null;){var h=r.tag;if((h===3||h===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;f!==null;){if(r=ma(f),r===null)return;if(h=r.tag,h===5||h===6||h===26||h===27){a=u=r;continue t}f=f.parentNode}}a=a.return}Mo(function(){var S=u,M=Sc(l),C=[];t:{var T=ef.get(t);if(T!==void 0){var D=wu,nt=t;switch(t){case"keypress":if(Hu(l)===0)break t;case"keydown":case"keyup":D=p1;break;case"focusin":nt="focus",D=Mc;break;case"focusout":nt="blur",D=Mc;break;case"beforeblur":case"afterblur":D=Mc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=_o;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=u1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=x1;break;case Fo:case Po:case Io:D=r1;break;case tf:D=j1;break;case"scroll":case"scrollend":D=a1;break;case"wheel":D=A1;break;case"copy":case"cut":case"paste":D=o1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Co;break;case"toggle":case"beforetoggle":D=E1}var tt=(e&4)!==0,zt=!tt&&(t==="scroll"||t==="scrollend"),v=tt?T!==null?T+"Capture":null:T;tt=[];for(var g=S,x;g!==null;){var _=g;if(x=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||x===null||v===null||(_=pn(g,v),_!=null&&tt.push(In(g,_,x))),zt)break;g=g.return}0<tt.length&&(T=new D(T,nt,null,l,M),C.push({event:T,listeners:tt}))}}if((e&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",D=t==="mouseout"||t==="pointerout",T&&l!==xc&&(nt=l.relatedTarget||l.fromElement)&&(ma(nt)||nt[ha]))break t;if((D||T)&&(T=M.window===M?M:(T=M.ownerDocument)?T.defaultView||T.parentWindow:window,D?(nt=l.relatedTarget||l.toElement,D=S,nt=nt?ma(nt):null,nt!==null&&(zt=j(nt),tt=nt.tag,nt!==zt||tt!==5&&tt!==27&&tt!==6)&&(nt=null)):(D=null,nt=S),D!==nt)){if(tt=_o,_="onMouseLeave",v="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Co,_="onPointerLeave",v="onPointerEnter",g="pointer"),zt=D==null?T:yn(D),x=nt==null?T:yn(nt),T=new tt(_,g+"leave",D,l,M),T.target=zt,T.relatedTarget=x,_=null,ma(M)===S&&(tt=new tt(v,g+"enter",nt,l,M),tt.target=x,tt.relatedTarget=zt,_=tt),zt=_,D&&nt)e:{for(tt=D,v=nt,g=0,x=tt;x;x=ka(x))g++;for(x=0,_=v;_;_=ka(_))x++;for(;0<g-x;)tt=ka(tt),g--;for(;0<x-g;)v=ka(v),x--;for(;g--;){if(tt===v||v!==null&&tt===v.alternate)break e;tt=ka(tt),v=ka(v)}tt=null}else tt=null;D!==null&&jh(C,T,D,tt,!1),nt!==null&&zt!==null&&jh(C,zt,nt,tt,!0)}}t:{if(T=S?yn(S):window,D=T.nodeName&&T.nodeName.toLowerCase(),D==="select"||D==="input"&&T.type==="file")var Z=Yo;else if(qo(T))if(Xo)Z=G1;else{Z=U1;var ft=N1}else D=T.nodeName,!D||D.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?S&&bc(S.elementType)&&(Z=Yo):Z=H1;if(Z&&(Z=Z(t,S))){Bo(C,Z,l,M);break t}ft&&ft(t,T,S),t==="focusout"&&S&&T.type==="number"&&S.memoizedProps.value!=null&&vc(T,"number",T.value)}switch(ft=S?yn(S):window,t){case"focusin":(qo(ft)||ft.contentEditable==="true")&&(Aa=ft,Nc=S,Dn=null);break;case"focusout":Dn=Nc=Aa=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,Jo(C,l,M);break;case"selectionchange":if(q1)break;case"keydown":case"keyup":Jo(C,l,M)}var k;if(Oc)t:{switch(t){case"compositionstart":var lt="onCompositionStart";break t;case"compositionend":lt="onCompositionEnd";break t;case"compositionupdate":lt="onCompositionUpdate";break t}lt=void 0}else Ta?Go(t,l)&&(lt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(lt="onCompositionStart");lt&&(No&&l.locale!=="ko"&&(Ta||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Ta&&(k=zo()):(xl=M,Ac="value"in xl?xl.value:xl.textContent,Ta=!0)),ft=Ai(S,lt),0<ft.length&&(lt=new Ro(lt,t,null,l,M),C.push({event:lt,listeners:ft}),k?lt.data=k:(k=wo(l),k!==null&&(lt.data=k)))),(k=z1?O1(t,l):_1(t,l))&&(lt=Ai(S,"onBeforeInput"),0<lt.length&&(ft=new Ro("onBeforeInput","beforeinput",null,l,M),C.push({event:ft,listeners:lt}),ft.data=k)),xg(C,t,S,l,M)}xh(C,e)})}function In(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Ai(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=pn(t,l),n!=null&&a.unshift(In(t,n,u)),n=pn(t,e),n!=null&&a.push(In(t,n,u))),t.tag===3)return a;t=t.return}return[]}function ka(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function jh(t,e,l,a,n){for(var u=e._reactName,r=[];l!==null&&l!==a;){var f=l,h=f.alternate,S=f.stateNode;if(f=f.tag,h!==null&&h===a)break;f!==5&&f!==26&&f!==27||S===null||(h=S,n?(S=pn(l,u),S!=null&&r.unshift(In(l,S,h))):n||(S=pn(l,u),S!=null&&r.push(In(l,S,h)))),l=l.return}r.length!==0&&t.push({event:e,listeners:r})}var Ag=/\r\n?/g,Dg=/\u0000|\uFFFD/g;function Th(t){return(typeof t=="string"?t:""+t).replace(Ag,`
`).replace(Dg,"")}function Ah(t,e){return e=Th(e),Th(t)===e}function Di(){}function Mt(t,e,l,a,n,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||xa(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&xa(t,""+a);break;case"className":_u(t,"class",a);break;case"tabIndex":_u(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":_u(t,l,a);break;case"style":Do(t,a,u);break;case"data":if(e!=="object"){_u(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Nu(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&Mt(t,e,"name",n.name,n,null),Mt(t,e,"formEncType",n.formEncType,n,null),Mt(t,e,"formMethod",n.formMethod,n,null),Mt(t,e,"formTarget",n.formTarget,n,null)):(Mt(t,e,"encType",n.encType,n,null),Mt(t,e,"method",n.method,n,null),Mt(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Nu(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Di);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Nu(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Ou(t,"popover",a);break;case"xlinkActuate":ll(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ll(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ll(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ll(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ll(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ll(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ll(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ll(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ll(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ou(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=e1.get(l)||l,Ou(t,l,a))}}function as(t,e,l,a,n,u){switch(l){case"style":Do(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"children":typeof a=="string"?xa(t,a):(typeof a=="number"||typeof a=="bigint")&&xa(t,""+a);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Di);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mo.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),u=t[ce]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Ou(t,l,a)}}}function te(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var r=l[u];if(r!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Mt(t,e,u,r,l,null)}}n&&Mt(t,e,"srcSet",l.srcSet,l,null),a&&Mt(t,e,"src",l.src,l,null);return;case"input":mt("invalid",t);var f=u=r=n=null,h=null,S=null;for(a in l)if(l.hasOwnProperty(a)){var M=l[a];if(M!=null)switch(a){case"name":n=M;break;case"type":r=M;break;case"checked":h=M;break;case"defaultChecked":S=M;break;case"value":u=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,e));break;default:Mt(t,e,a,M,l,null)}}So(t,u,f,h,S,r,n,!1),Ru(t);return;case"select":mt("invalid",t),a=r=u=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":u=f;break;case"defaultValue":r=f;break;case"multiple":a=f;default:Mt(t,e,n,f,l,null)}e=u,l=r,t.multiple=!!a,e!=null?ba(t,!!a,e,!1):l!=null&&ba(t,!!a,l,!0);return;case"textarea":mt("invalid",t),u=n=a=null;for(r in l)if(l.hasOwnProperty(r)&&(f=l[r],f!=null))switch(r){case"value":a=f;break;case"defaultValue":n=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(o(91));break;default:Mt(t,e,r,f,l,null)}To(t,a,n,u),Ru(t);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Mt(t,e,h,a,l,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(a=0;a<Pn.length;a++)mt(Pn[a],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in l)if(l.hasOwnProperty(S)&&(a=l[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Mt(t,e,S,a,l,null)}return;default:if(bc(e)){for(M in l)l.hasOwnProperty(M)&&(a=l[M],a!==void 0&&as(t,e,M,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&Mt(t,e,f,a,l,null))}function Eg(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,r=null,f=null,h=null,S=null,M=null;for(D in l){var C=l[D];if(l.hasOwnProperty(D)&&C!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":h=C;default:a.hasOwnProperty(D)||Mt(t,e,D,null,a,C)}}for(var T in a){var D=a[T];if(C=l[T],a.hasOwnProperty(T)&&(D!=null||C!=null))switch(T){case"type":u=D;break;case"name":n=D;break;case"checked":S=D;break;case"defaultChecked":M=D;break;case"value":r=D;break;case"defaultValue":f=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,e));break;default:D!==C&&Mt(t,e,T,D,a,C)}}pc(t,r,f,h,S,M,u,n);return;case"select":D=r=f=T=null;for(u in l)if(h=l[u],l.hasOwnProperty(u)&&h!=null)switch(u){case"value":break;case"multiple":D=h;default:a.hasOwnProperty(u)||Mt(t,e,u,null,a,h)}for(n in a)if(u=a[n],h=l[n],a.hasOwnProperty(n)&&(u!=null||h!=null))switch(n){case"value":T=u;break;case"defaultValue":f=u;break;case"multiple":r=u;default:u!==h&&Mt(t,e,n,u,a,h)}e=f,l=r,a=D,T!=null?ba(t,!!l,T,!1):!!a!=!!l&&(e!=null?ba(t,!!l,e,!0):ba(t,!!l,l?[]:"",!1));return;case"textarea":D=T=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Mt(t,e,f,null,a,n)}for(r in a)if(n=a[r],u=l[r],a.hasOwnProperty(r)&&(n!=null||u!=null))switch(r){case"value":T=n;break;case"defaultValue":D=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==u&&Mt(t,e,r,n,a,u)}jo(t,T,D);return;case"option":for(var nt in l)if(T=l[nt],l.hasOwnProperty(nt)&&T!=null&&!a.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:Mt(t,e,nt,null,a,T)}for(h in a)if(T=a[h],D=l[h],a.hasOwnProperty(h)&&T!==D&&(T!=null||D!=null))switch(h){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Mt(t,e,h,T,a,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in l)T=l[tt],l.hasOwnProperty(tt)&&T!=null&&!a.hasOwnProperty(tt)&&Mt(t,e,tt,null,a,T);for(S in a)if(T=a[S],D=l[S],a.hasOwnProperty(S)&&T!==D&&(T!=null||D!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,e));break;default:Mt(t,e,S,T,a,D)}return;default:if(bc(e)){for(var zt in l)T=l[zt],l.hasOwnProperty(zt)&&T!==void 0&&!a.hasOwnProperty(zt)&&as(t,e,zt,void 0,a,T);for(M in a)T=a[M],D=l[M],!a.hasOwnProperty(M)||T===D||T===void 0&&D===void 0||as(t,e,M,T,a,D);return}}for(var v in l)T=l[v],l.hasOwnProperty(v)&&T!=null&&!a.hasOwnProperty(v)&&Mt(t,e,v,null,a,T);for(C in a)T=a[C],D=l[C],!a.hasOwnProperty(C)||T===D||T==null&&D==null||Mt(t,e,C,T,a,D)}var ns=null,us=null;function Ei(t){return t.nodeType===9?t:t.ownerDocument}function Dh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function is(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cs=null;function Mg(){var t=window.event;return t&&t.type==="popstate"?t===cs?!1:(cs=t,!0):(cs=null,!1)}var Mh=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,Og=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(t){return zh.resolve(null).then(t).catch(_g)}:Mh;function _g(t){setTimeout(function(){throw t})}function Gl(t){return t==="head"}function Oh(t,e){var l=e,a=0,n=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"){if(0<a&&8>a){l=a;var r=t.ownerDocument;if(l&1&&tu(r.documentElement),l&2&&tu(r.body),l&4)for(l=r.head,tu(l),r=l.firstChild;r;){var f=r.nextSibling,h=r.nodeName;r[gn]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||l.removeChild(r),r=f}}if(n===0){t.removeChild(u),ru(e);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:a=l.charCodeAt(0)-48;else a=0;l=u}while(l);ru(e)}function rs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":rs(l),hc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Rg(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[gn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=$e(t.nextSibling),t===null)break}return null}function Cg(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=$e(t.nextSibling),t===null))return null;return t}function ss(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Ng(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function $e(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var os=null;function _h(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Rh(t,e,l){switch(e=Ei(l),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function tu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);hc(t)}var He=new Map,Ch=new Set;function Mi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var yl=H.d;H.d={f:Ug,r:Hg,D:Gg,C:wg,L:qg,m:Bg,X:Xg,S:Yg,M:Qg};function Ug(){var t=yl.f(),e=vi();return t||e}function Hg(t){var e=ga(t);e!==null&&e.tag===5&&e.type==="form"?Pf(e):yl.r(t)}var Ja=typeof document>"u"?null:document;function Nh(t,e,l){var a=Ja;if(a&&typeof e=="string"&&e){var n=ze(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Ch.has(n)||(Ch.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),te(e,"link",t),Vt(e),a.head.appendChild(e)))}}function Gg(t){yl.D(t),Nh("dns-prefetch",t,null)}function wg(t,e){yl.C(t,e),Nh("preconnect",t,e)}function qg(t,e,l){yl.L(t,e,l);var a=Ja;if(a&&t&&e){var n='link[rel="preload"][as="'+ze(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ze(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ze(l.imageSizes)+'"]')):n+='[href="'+ze(t)+'"]';var u=n;switch(e){case"style":u=Wa(t);break;case"script":u=Fa(t)}He.has(u)||(t=R({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),He.set(u,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(eu(u))||e==="script"&&a.querySelector(lu(u))||(e=a.createElement("link"),te(e,"link",t),Vt(e),a.head.appendChild(e)))}}function Bg(t,e){yl.m(t,e);var l=Ja;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ze(a)+'"][href="'+ze(t)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Fa(t)}if(!He.has(u)&&(t=R({rel:"modulepreload",href:t},e),He.set(u,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(lu(u)))return}a=l.createElement("link"),te(a,"link",t),Vt(a),l.head.appendChild(a)}}}function Yg(t,e,l){yl.S(t,e,l);var a=Ja;if(a&&t){var n=ya(a).hoistableStyles,u=Wa(t);e=e||"default";var r=n.get(u);if(!r){var f={loading:0,preload:null};if(r=a.querySelector(eu(u)))f.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":e},l),(l=He.get(u))&&fs(t,l);var h=r=a.createElement("link");Vt(h),te(h,"link",t),h._p=new Promise(function(S,M){h.onload=S,h.onerror=M}),h.addEventListener("load",function(){f.loading|=1}),h.addEventListener("error",function(){f.loading|=2}),f.loading|=4,zi(r,e,a)}r={type:"stylesheet",instance:r,count:1,state:f},n.set(u,r)}}}function Xg(t,e){yl.X(t,e);var l=Ja;if(l&&t){var a=ya(l).hoistableScripts,n=Fa(t),u=a.get(n);u||(u=l.querySelector(lu(n)),u||(t=R({src:t,async:!0},e),(e=He.get(n))&&ds(t,e),u=l.createElement("script"),Vt(u),te(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Qg(t,e){yl.M(t,e);var l=Ja;if(l&&t){var a=ya(l).hoistableScripts,n=Fa(t),u=a.get(n);u||(u=l.querySelector(lu(n)),u||(t=R({src:t,async:!0,type:"module"},e),(e=He.get(n))&&ds(t,e),u=l.createElement("script"),Vt(u),te(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Uh(t,e,l,a){var n=(n=et.current)?Mi(n):null;if(!n)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Wa(l.href),l=ya(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Wa(l.href);var u=ya(n).hoistableStyles,r=u.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,r),(u=n.querySelector(eu(t)))&&!u._p&&(r.instance=u,r.state.loading=5),He.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},He.set(t,l),u||$g(n,t,l,r.state))),e&&a===null)throw Error(o(528,""));return r}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Fa(l),l=ya(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Wa(t){return'href="'+ze(t)+'"'}function eu(t){return'link[rel="stylesheet"]['+t+"]"}function Hh(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function $g(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),te(e,"link",l),Vt(e),t.head.appendChild(e))}function Fa(t){return'[src="'+ze(t)+'"]'}function lu(t){return"script[async]"+t}function Gh(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ze(l.href)+'"]');if(a)return e.instance=a,Vt(a),a;var n=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Vt(a),te(a,"style",n),zi(a,l.precedence,t),e.instance=a;case"stylesheet":n=Wa(l.href);var u=t.querySelector(eu(n));if(u)return e.state.loading|=4,e.instance=u,Vt(u),u;a=Hh(l),(n=He.get(n))&&fs(a,n),u=(t.ownerDocument||t).createElement("link"),Vt(u);var r=u;return r._p=new Promise(function(f,h){r.onload=f,r.onerror=h}),te(u,"link",a),e.state.loading|=4,zi(u,l.precedence,t),e.instance=u;case"script":return u=Fa(l.src),(n=t.querySelector(lu(u)))?(e.instance=n,Vt(n),n):(a=l,(n=He.get(u))&&(a=R({},l),ds(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Vt(n),te(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,zi(a,l.precedence,t));return e.instance}function zi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,r=0;r<a.length;r++){var f=a[r];if(f.dataset.precedence===e)u=f;else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function fs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ds(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Oi=null;function wh(t,e,l){if(Oi===null){var a=new Map,n=Oi=new Map;n.set(l,a)}else n=Oi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var u=l[n];if(!(u[gn]||u[ae]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var r=u.getAttribute(e)||"";r=t+r;var f=a.get(r);f?f.push(u):a.set(r,[u])}}return a}function qh(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Zg(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Bh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var au=null;function Lg(){}function Vg(t,e,l){if(au===null)throw Error(o(475));var a=au;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Wa(l.href),u=t.querySelector(eu(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=_i.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=u,Vt(u);return}u=t.ownerDocument||t,l=Hh(l),(n=He.get(n))&&fs(l,n),u=u.createElement("link"),Vt(u);var r=u;r._p=new Promise(function(f,h){r.onload=f,r.onerror=h}),te(u,"link",l),e.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=_i.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Kg(){if(au===null)throw Error(o(475));var t=au;return t.stylesheets&&t.count===0&&hs(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&hs(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function _i(){if(this.count--,this.count===0){if(this.stylesheets)hs(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ri=null;function hs(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ri=new Map,e.forEach(kg,t),Ri=null,_i.call(t))}function kg(t,e){if(!(e.state.loading&4)){var l=Ri.get(t);if(l)var a=l.get(null);else{l=new Map,Ri.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var r=n[u];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(l.set(r.dataset.precedence,r),a=r)}a&&l.set(null,a)}n=e.instance,r=n.getAttribute("data-precedence"),u=l.get(r)||a,u===a&&l.set(null,n),l.set(r,n),this.count++,a=_i.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var nu={$$typeof:J,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Jg(t,e,l,a,n,u,r,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.hiddenUpdates=sc(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Yh(t,e,l,a,n,u,r,f,h,S,M,C){return t=new Jg(t,e,l,r,f,h,S,C),e=1,u===!0&&(e|=24),u=be(3,null,null,e),t.current=u,u.stateNode=t,e=kc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},Pc(u),t}function Xh(t){return t?(t=za,t):za}function Qh(t,e,l,a,n,u){n=Xh(n),a.context===null?a.context=n:a.pendingContext=n,a=Tl(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=Al(t,a,e),l!==null&&(Ae(l,t,e),Un(l,t,e))}function $h(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function ms(t,e){$h(t,e),(t=t.alternate)&&$h(t,e)}function Zh(t){if(t.tag===13){var e=Ma(t,67108864);e!==null&&Ae(e,t,67108864),ms(t,67108864)}}var Ci=!0;function Wg(t,e,l,a){var n=b.T;b.T=null;var u=H.p;try{H.p=2,gs(t,e,l,a)}finally{H.p=u,b.T=n}}function Fg(t,e,l,a){var n=b.T;b.T=null;var u=H.p;try{H.p=8,gs(t,e,l,a)}finally{H.p=u,b.T=n}}function gs(t,e,l,a){if(Ci){var n=ys(a);if(n===null)ls(t,e,a,Ni,l),Vh(t,a);else if(Ig(n,t,e,l,a))a.stopPropagation();else if(Vh(t,a),e&4&&-1<Pg.indexOf(t)){for(;n!==null;){var u=ga(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var r=Zl(u.pendingLanes);if(r!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;r;){var h=1<<31-pe(r);f.entanglements[1]|=h,r&=~h}Ie(u),(At&6)===0&&(yi=ke()+500,Fn(0))}}break;case 13:f=Ma(u,2),f!==null&&Ae(f,u,2),vi(),ms(u,2)}if(u=ys(a),u===null&&ls(t,e,a,Ni,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else ls(t,e,a,null,l)}}function ys(t){return t=Sc(t),ps(t)}var Ni=null;function ps(t){if(Ni=null,t=ma(t),t!==null){var e=j(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=z(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ni=t,null}function Lh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wm()){case ao:return 2;case no:return 8;case Du:case qm:return 32;case uo:return 268435456;default:return 32}default:return 32}}var vs=!1,wl=null,ql=null,Bl=null,uu=new Map,iu=new Map,Yl=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vh(t,e){switch(t){case"focusin":case"focusout":wl=null;break;case"dragenter":case"dragleave":ql=null;break;case"mouseover":case"mouseout":Bl=null;break;case"pointerover":case"pointerout":uu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":iu.delete(e.pointerId)}}function cu(t,e,l,a,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},e!==null&&(e=ga(e),e!==null&&Zh(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Ig(t,e,l,a,n){switch(e){case"focusin":return wl=cu(wl,t,e,l,a,n),!0;case"dragenter":return ql=cu(ql,t,e,l,a,n),!0;case"mouseover":return Bl=cu(Bl,t,e,l,a,n),!0;case"pointerover":var u=n.pointerId;return uu.set(u,cu(uu.get(u)||null,t,e,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,iu.set(u,cu(iu.get(u)||null,t,e,l,a,n)),!0}return!1}function Kh(t){var e=ma(t.target);if(e!==null){var l=j(e);if(l!==null){if(e=l.tag,e===13){if(e=z(l),e!==null){t.blockedOn=e,Vm(t.priority,function(){if(l.tag===13){var a=Te();a=oc(a);var n=Ma(l,a);n!==null&&Ae(n,l,a),ms(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ui(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=ys(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);xc=a,l.target.dispatchEvent(a),xc=null}else return e=ga(l),e!==null&&Zh(e),t.blockedOn=l,!1;e.shift()}return!0}function kh(t,e,l){Ui(t)&&l.delete(e)}function ty(){vs=!1,wl!==null&&Ui(wl)&&(wl=null),ql!==null&&Ui(ql)&&(ql=null),Bl!==null&&Ui(Bl)&&(Bl=null),uu.forEach(kh),iu.forEach(kh)}function Hi(t,e){t.blockedOn===e&&(t.blockedOn=null,vs||(vs=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,ty)))}var Gi=null;function Jh(t){Gi!==t&&(Gi=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Gi===t&&(Gi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(ps(a||l)===null)continue;break}var u=ga(l);u!==null&&(t.splice(e,3),e-=3,pr(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function ru(t){function e(h){return Hi(h,t)}wl!==null&&Hi(wl,t),ql!==null&&Hi(ql,t),Bl!==null&&Hi(Bl,t),uu.forEach(e),iu.forEach(e);for(var l=0;l<Yl.length;l++){var a=Yl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Yl.length&&(l=Yl[0],l.blockedOn===null);)Kh(l),l.blockedOn===null&&Yl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],r=n[ce]||null;if(typeof u=="function")r||Jh(l);else if(r){var f=null;if(u&&u.hasAttribute("formAction")){if(n=u,r=u[ce]||null)f=r.formAction;else if(ps(n)!==null)continue}else f=r.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),Jh(l)}}}function bs(t){this._internalRoot=t}wi.prototype.render=bs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var l=e.current,a=Te();Qh(l,a,t,e,null,null)},wi.prototype.unmount=bs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qh(t.current,2,null,t,null,null),vi(),e[ha]=null}};function wi(t){this._internalRoot=t}wi.prototype.unstable_scheduleHydration=function(t){if(t){var e=oo();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Yl.length&&e!==0&&e<Yl[l].priority;l++);Yl.splice(l,0,t),l===0&&Kh(t)}};var Wh=s.version;if(Wh!=="19.1.0")throw Error(o(527,Wh,"19.1.0"));H.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=E(e),t=t!==null?A(t):null,t=t===null?null:t.stateNode,t};var ey={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{dn=qi.inject(ey),ye=qi}catch{}}return ou.createRoot=function(t,e){if(!y(t))throw Error(o(299));var l=!1,a="",n=dd,u=hd,r=md,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks)),e=Yh(t,1,!1,null,null,l,a,n,u,r,f,null),t[ha]=e.current,es(t),new bs(e)},ou.hydrateRoot=function(t,e,l){if(!y(t))throw Error(o(299));var a=!1,n="",u=dd,r=hd,f=md,h=null,S=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(r=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(h=l.unstable_transitionCallbacks),l.formState!==void 0&&(S=l.formState)),e=Yh(t,1,!0,e,l??null,a,n,u,r,f,h,S),e.context=Xh(null),l=e.current,a=Te(),a=oc(a),n=Tl(a),n.callback=null,Al(l,n,a),l=a,e.current.lanes=l,mn(e,l),Ie(e),t[ha]=e.current,es(t),new wi(e)},ou.version="19.1.0",ou}var i0;function fy(){if(i0)return js.exports;i0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),js.exports=oy(),js.exports}var dy=fy();const hy=um(dy),Be={CONFIG:"badminton-config",MONTHLY_DATA:"badminton-monthly-data",CURRENT_MONTH:"badminton-current-month",GENERATED_REPORT:"badminton-generated-report",REPORT_STATUS:"badminton-report-status"},im={court:{costPerHour:100,hoursPerDay:2,discountPercentage:10},shuttle:{costPerTube:285,defaultTubesPerMonth:3},schedule:{daysOfWeek:["Tuesday","Friday"]},members:["Tran","Thang","Nhut","Thuy","Tin","Bao"],frequentGuests:["Thu","Hang","Nha","Nhan"]},my=()=>{try{const i=localStorage.getItem(Be.CONFIG);if(i)return JSON.parse(i)}catch(i){console.error("Error loading config:",i)}return im},gy=i=>{try{localStorage.setItem(Be.CONFIG,JSON.stringify(i))}catch(s){console.error("Error saving config:",s)}},yy=i=>{try{const s=localStorage.getItem(Be.MONTHLY_DATA);if(s)return JSON.parse(s)[i]||null}catch(s){console.error("Error loading monthly data:",s)}return null},fu=(i,s)=>{try{const d=localStorage.getItem(Be.MONTHLY_DATA),o=d?JSON.parse(d):{};o[i]=s,localStorage.setItem(Be.MONTHLY_DATA,JSON.stringify(o))}catch(d){console.error("Error saving monthly data:",d)}},py=()=>{const i=localStorage.getItem(Be.CURRENT_MONTH);if(i)return i;const s=new Date,d=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`;return Js(d),d},Js=i=>{localStorage.setItem(Be.CURRENT_MONTH,i)},vy=()=>{const i=new Date,s=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`;Js(s)},by=(i,s)=>`${i}-${String(s+1).padStart(2,"0")}`,xy=i=>{try{localStorage.setItem(Be.GENERATED_REPORT,JSON.stringify(i))}catch(s){console.error("Error saving generated report:",s)}},Sy=()=>{try{const i=localStorage.getItem(Be.GENERATED_REPORT);if(i)return JSON.parse(i)}catch(i){console.error("Error loading generated report:",i)}return null},jy=i=>{try{const s=localStorage.getItem(Be.REPORT_STATUS);if(s)return JSON.parse(s)[i]||!1}catch(s){console.error("Error getting report status:",s)}return!1},Ty=(i,s)=>{try{const d=localStorage.getItem(Be.REPORT_STATUS),o=d?JSON.parse(d):{};o[i]=s,localStorage.setItem(Be.REPORT_STATUS,JSON.stringify(o))}catch(d){console.error("Error setting report status:",d)}},Ay=()=>{try{const i=localStorage.getItem("badminton-running-guest-fees");if(i)return JSON.parse(i)}catch(i){console.error("Error loading running guest fees:",i)}return{}},Es=i=>{try{localStorage.setItem("badminton-running-guest-fees",JSON.stringify(i))}catch(s){console.error("Error saving running guest fees:",s)}},Dy=()=>{try{localStorage.removeItem("badminton-running-guest-fees")}catch(i){console.error("Error clearing running guest fees:",i)}},Ey=(i,s)=>{const d=i.court.costPerHour*i.court.hoursPerDay*s.actualPlayingDays,o=d*(i.court.discountPercentage/100),y=d-o,j=i.shuttle.costPerTube*i.shuttle.defaultTubesPerMonth,z=j+s.extraShuttleCost,G=y+z,E=s.previousMonthGuestTotal,A=G-E,R=A/i.members.length,Y=R/s.actualPlayingDays;return{courtFee:d,courtDiscount:o,finalCourtFee:y,shuttleFee:j,extraShuttleCost:s.extraShuttleCost,finalShuttleFee:z,totalFee:G,guestFeeReduction:E,finalAmount:A,perMember:R,costPerDay:Y}},cm=i=>{const s=new Map;return Object.values(i.guestEntries).forEach(d=>{d.forEach(o=>{const y=s.get(o.name)||{totalAmount:0,sessions:0};s.set(o.name,{totalAmount:y.totalAmount+o.amount,sessions:y.sessions+1})})}),Array.from(s.entries()).map(([d,o])=>({name:d,totalAmount:o.totalAmount,sessions:o.sessions}))},Ms=(i,s,d)=>{const o=new Date(i,s,1),y=new Date(i,s+1,0);let j=0;const z={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},G=d.map(E=>z[E]);for(let E=new Date(o);E<=y;E.setDate(E.getDate()+1))G.includes(E.getDay())&&j++;return j},bt=i=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(i),rm=pt.createContext(null),Tu=()=>{const i=pt.useContext(rm);if(!i)throw new Error("useApp must be used within AppProvider");return i},My=({children:i})=>{const[s,d]=pt.useState(im),[o,y]=pt.useState(""),[j,z]=pt.useState({month:"",year:0,guestEntries:{},extraShuttleCost:0,actualPlayingDays:0,previousMonthGuestTotal:0}),[G,E]=pt.useState({});pt.useEffect(()=>{const O=my();d(O);const B=py();y(B),A(B,O);const q=Ay();E(q)},[]);const A=(O,B)=>{let q=yy(O);if(!q){const[P,vt]=O.split("-").map(Number),Ut=Ms(P-1,vt-1,B.schedule.daysOfWeek);q={month:new Date(P,vt-1).toLocaleString("en-US",{month:"long"}),year:P,guestEntries:{},extraShuttleCost:0,actualPlayingDays:Ut,previousMonthGuestTotal:0},fu(O,q)}z(q)},R=O=>{d(O),gy(O);const B={...j},[q,P]=o.split("-").map(Number);B.actualPlayingDays=Ms(q-1,P-1,O.schedule.daysOfWeek),z(B),fu(o,B)},Y=O=>{Js(O),y(O),A(O,s)},U=()=>{vy()},V=(O,B)=>{const q={...B,id:Date.now().toString()},P={...G};P[O]||(P[O]=[]),P[O].push(q),E(P),Es(P)},K=(O,B,q)=>{const P={...G};if(P[O]){const vt=P[O].findIndex(Ut=>Ut.id===B);vt!==-1&&(P[O][vt]={...q,id:B},E(P),Es(P))}},I=(O,B)=>{const q={...G};q[O]&&(q[O]=q[O].filter(P=>P.id!==B),q[O].length===0&&delete q[O],E(q),Es(q))},ut=()=>{let O=0;return Object.values(G).forEach(B=>{B.forEach(q=>{O+=q.amount})}),O},w={config:s,updateConfig:R,currentMonth:o,monthlyData:j,changeMonth:Y,restMonth:U,runningGuestFees:G,addGuest:V,updateGuest:K,deleteGuest:I,getTotalRunningGuestFees:ut,updateExtraShuttleCost:O=>{const B={...j,extraShuttleCost:O};z(B),fu(o,B)},updateActualPlayingDays:O=>{const B={...j,actualPlayingDays:O};z(B),fu(o,B)},generateMonthlyReport:()=>{const O=ut(),[B,q]=o.split("-").map(Number),P=q===12?1:q+1,vt=q===12?B+1:B,Ut=by(vt,P-1),Qt=Ms(vt-1,P-1,s.schedule.daysOfWeek),gt={month:new Date(vt,P-1).toLocaleString("en-US",{month:"long"}),year:vt,guestEntries:{},extraShuttleCost:0,actualPlayingDays:Qt,previousMonthGuestTotal:O};fu(Ut,gt),E({}),Dy(),Y(Ut)}};return c.jsx(rm.Provider,{value:w,children:i})};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Oy=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,d,o)=>o?o.toUpperCase():d.toLowerCase()),c0=i=>{const s=Oy(i);return s.charAt(0).toUpperCase()+s.slice(1)},sm=(...i)=>i.filter((s,d,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===d).join(" ").trim(),_y=i=>{for(const s in i)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ry={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=pt.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:d=2,absoluteStrokeWidth:o,className:y="",children:j,iconNode:z,...G},E)=>pt.createElement("svg",{ref:E,...Ry,width:s,height:s,stroke:i,strokeWidth:o?Number(d)*24/Number(s):d,className:sm("lucide",y),...!j&&!_y(G)&&{"aria-hidden":"true"},...G},[...z.map(([A,R])=>pt.createElement(A,R)),...Array.isArray(j)?j:[j]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(i,s)=>{const d=pt.forwardRef(({className:o,...y},j)=>pt.createElement(Cy,{ref:j,iconNode:s,className:sm(`lucide-${zy(c0(i))}`,`lucide-${i}`,o),...y}));return d.displayName=c0(i),d};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],om=ee("arrow-left",Ny);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],fa=ee("calendar",Uy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Gy=ee("circle-alert",Hy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],qy=ee("circle-check-big",wy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],nn=ee("dollar-sign",By);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ws=ee("file-text",Yy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Qy=ee("house",Xy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Su=ee("info",$y);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],tc=ee("package",Zy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Vy=ee("pen",Ly);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ky=ee("plus",Ky);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Wy=ee("save",Jy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Fs=ee("settings",Fy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Iy=ee("trash-2",Py);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ep=ee("triangle-alert",tp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],da=ee("users",lp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ys=ee("x",ap);var ge=function(){return ge=Object.assign||function(s){for(var d,o=1,y=arguments.length;o<y;o++){d=arguments[o];for(var j in d)Object.prototype.hasOwnProperty.call(d,j)&&(s[j]=d[j])}return s},ge.apply(this,arguments)};function Wi(i,s,d){if(d||arguments.length===2)for(var o=0,y=s.length,j;o<y;o++)(j||!(o in s))&&(j||(j=Array.prototype.slice.call(s,0,o)),j[o]=s[o]);return i.concat(j||Array.prototype.slice.call(s))}var Rt="-ms-",xu="-moz-",Tt="-webkit-",fm="comm",ec="rule",Ps="decl",np="@import",dm="@keyframes",up="@layer",hm=Math.abs,Is=String.fromCharCode,Xs=Object.assign;function ip(i,s){return Wt(i,0)^45?(((s<<2^Wt(i,0))<<2^Wt(i,1))<<2^Wt(i,2))<<2^Wt(i,3):0}function mm(i){return i.trim()}function pl(i,s){return(i=s.exec(i))?i[0]:i}function st(i,s,d){return i.replace(s,d)}function Li(i,s,d){return i.indexOf(s,d)}function Wt(i,s){return i.charCodeAt(s)|0}function un(i,s,d){return i.slice(s,d)}function tl(i){return i.length}function gm(i){return i.length}function bu(i,s){return s.push(i),i}function cp(i,s){return i.map(s).join("")}function r0(i,s){return i.filter(function(d){return!pl(d,s)})}var lc=1,cn=1,ym=0,Ye=0,Xt=0,fn="";function ac(i,s,d,o,y,j,z,G){return{value:i,root:s,parent:d,type:o,props:y,children:j,line:lc,column:cn,length:z,return:"",siblings:G}}function Ql(i,s){return Xs(ac("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},s)}function Pa(i){for(;i.root;)i=Ql(i.root,{children:[i]});bu(i,i.siblings)}function rp(){return Xt}function sp(){return Xt=Ye>0?Wt(fn,--Ye):0,cn--,Xt===10&&(cn=1,lc--),Xt}function Ke(){return Xt=Ye<ym?Wt(fn,Ye++):0,cn++,Xt===10&&(cn=1,lc++),Xt}function sa(){return Wt(fn,Ye)}function Vi(){return Ye}function nc(i,s){return un(fn,i,s)}function Qs(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function op(i){return lc=cn=1,ym=tl(fn=i),Ye=0,[]}function fp(i){return fn="",i}function zs(i){return mm(nc(Ye-1,$s(i===91?i+2:i===40?i+1:i)))}function dp(i){for(;(Xt=sa())&&Xt<33;)Ke();return Qs(i)>2||Qs(Xt)>3?"":" "}function hp(i,s){for(;--s&&Ke()&&!(Xt<48||Xt>102||Xt>57&&Xt<65||Xt>70&&Xt<97););return nc(i,Vi()+(s<6&&sa()==32&&Ke()==32))}function $s(i){for(;Ke();)switch(Xt){case i:return Ye;case 34:case 39:i!==34&&i!==39&&$s(Xt);break;case 40:i===41&&$s(i);break;case 92:Ke();break}return Ye}function mp(i,s){for(;Ke()&&i+Xt!==57;)if(i+Xt===84&&sa()===47)break;return"/*"+nc(s,Ye-1)+"*"+Is(i===47?i:Ke())}function gp(i){for(;!Qs(sa());)Ke();return nc(i,Ye)}function yp(i){return fp(Ki("",null,null,null,[""],i=op(i),0,[0],i))}function Ki(i,s,d,o,y,j,z,G,E){for(var A=0,R=0,Y=z,U=0,V=0,K=0,I=1,ut=1,ct=1,W=0,J="",w=y,O=j,B=o,q=J;ut;)switch(K=W,W=Ke()){case 40:if(K!=108&&Wt(q,Y-1)==58){Li(q+=st(zs(W),"&","&\f"),"&\f",hm(A?G[A-1]:0))!=-1&&(ct=-1);break}case 34:case 39:case 91:q+=zs(W);break;case 9:case 10:case 13:case 32:q+=dp(K);break;case 92:q+=hp(Vi()-1,7);continue;case 47:switch(sa()){case 42:case 47:bu(pp(mp(Ke(),Vi()),s,d,E),E);break;default:q+="/"}break;case 123*I:G[A++]=tl(q)*ct;case 125*I:case 59:case 0:switch(W){case 0:case 125:ut=0;case 59+R:ct==-1&&(q=st(q,/\f/g,"")),V>0&&tl(q)-Y&&bu(V>32?o0(q+";",o,d,Y-1,E):o0(st(q," ","")+";",o,d,Y-2,E),E);break;case 59:q+=";";default:if(bu(B=s0(q,s,d,A,R,y,G,J,w=[],O=[],Y,j),j),W===123)if(R===0)Ki(q,s,B,B,w,j,Y,G,O);else switch(U===99&&Wt(q,3)===110?100:U){case 100:case 108:case 109:case 115:Ki(i,B,B,o&&bu(s0(i,B,B,0,0,y,G,J,y,w=[],Y,O),O),y,O,Y,G,o?w:O);break;default:Ki(q,B,B,B,[""],O,0,G,O)}}A=R=V=0,I=ct=1,J=q="",Y=z;break;case 58:Y=1+tl(q),V=K;default:if(I<1){if(W==123)--I;else if(W==125&&I++==0&&sp()==125)continue}switch(q+=Is(W),W*I){case 38:ct=R>0?1:(q+="\f",-1);break;case 44:G[A++]=(tl(q)-1)*ct,ct=1;break;case 64:sa()===45&&(q+=zs(Ke())),U=sa(),R=Y=tl(J=q+=gp(Vi())),W++;break;case 45:K===45&&tl(q)==2&&(I=0)}}return j}function s0(i,s,d,o,y,j,z,G,E,A,R,Y){for(var U=y-1,V=y===0?j:[""],K=gm(V),I=0,ut=0,ct=0;I<o;++I)for(var W=0,J=un(i,U+1,U=hm(ut=z[I])),w=i;W<K;++W)(w=mm(ut>0?V[W]+" "+J:st(J,/&\f/g,V[W])))&&(E[ct++]=w);return ac(i,s,d,y===0?ec:G,E,A,R,Y)}function pp(i,s,d,o){return ac(i,s,d,fm,Is(rp()),un(i,2,-2),0,o)}function o0(i,s,d,o,y){return ac(i,s,d,Ps,un(i,0,o),un(i,o+1,-1),o,y)}function pm(i,s,d){switch(ip(i,s)){case 5103:return Tt+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Tt+i+i;case 4789:return xu+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return Tt+i+xu+i+Rt+i+i;case 5936:switch(Wt(i,s+11)){case 114:return Tt+i+Rt+st(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return Tt+i+Rt+st(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return Tt+i+Rt+st(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return Tt+i+Rt+i+i;case 6165:return Tt+i+Rt+"flex-"+i+i;case 5187:return Tt+i+st(i,/(\w+).+(:[^]+)/,Tt+"box-$1$2"+Rt+"flex-$1$2")+i;case 5443:return Tt+i+Rt+"flex-item-"+st(i,/flex-|-self/g,"")+(pl(i,/flex-|baseline/)?"":Rt+"grid-row-"+st(i,/flex-|-self/g,""))+i;case 4675:return Tt+i+Rt+"flex-line-pack"+st(i,/align-content|flex-|-self/g,"")+i;case 5548:return Tt+i+Rt+st(i,"shrink","negative")+i;case 5292:return Tt+i+Rt+st(i,"basis","preferred-size")+i;case 6060:return Tt+"box-"+st(i,"-grow","")+Tt+i+Rt+st(i,"grow","positive")+i;case 4554:return Tt+st(i,/([^-])(transform)/g,"$1"+Tt+"$2")+i;case 6187:return st(st(st(i,/(zoom-|grab)/,Tt+"$1"),/(image-set)/,Tt+"$1"),i,"")+i;case 5495:case 3959:return st(i,/(image-set\([^]*)/,Tt+"$1$`$1");case 4968:return st(st(i,/(.+:)(flex-)?(.*)/,Tt+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Tt+i+i;case 4200:if(!pl(i,/flex-|baseline/))return Rt+"grid-column-align"+un(i,s)+i;break;case 2592:case 3360:return Rt+st(i,"template-","")+i;case 4384:case 3616:return d&&d.some(function(o,y){return s=y,pl(o.props,/grid-\w+-end/)})?~Li(i+(d=d[s].value),"span",0)?i:Rt+st(i,"-start","")+i+Rt+"grid-row-span:"+(~Li(d,"span",0)?pl(d,/\d+/):+pl(d,/\d+/)-+pl(i,/\d+/))+";":Rt+st(i,"-start","")+i;case 4896:case 4128:return d&&d.some(function(o){return pl(o.props,/grid-\w+-start/)})?i:Rt+st(st(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return st(i,/(.+)-inline(.+)/,Tt+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tl(i)-1-s>6)switch(Wt(i,s+1)){case 109:if(Wt(i,s+4)!==45)break;case 102:return st(i,/(.+:)(.+)-([^]+)/,"$1"+Tt+"$2-$3$1"+xu+(Wt(i,s+3)==108?"$3":"$2-$3"))+i;case 115:return~Li(i,"stretch",0)?pm(st(i,"stretch","fill-available"),s,d)+i:i}break;case 5152:case 5920:return st(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,y,j,z,G,E,A){return Rt+y+":"+j+A+(z?Rt+y+"-span:"+(G?E:+E-+j)+A:"")+i});case 4949:if(Wt(i,s+6)===121)return st(i,":",":"+Tt)+i;break;case 6444:switch(Wt(i,Wt(i,14)===45?18:11)){case 120:return st(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Tt+(Wt(i,14)===45?"inline-":"")+"box$3$1"+Tt+"$2$3$1"+Rt+"$2box$3")+i;case 100:return st(i,":",":"+Rt)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return st(i,"scroll-","scroll-snap-")+i}return i}function Fi(i,s){for(var d="",o=0;o<i.length;o++)d+=s(i[o],o,i,s)||"";return d}function vp(i,s,d,o){switch(i.type){case up:if(i.children.length)break;case np:case Ps:return i.return=i.return||i.value;case fm:return"";case dm:return i.return=i.value+"{"+Fi(i.children,o)+"}";case ec:if(!tl(i.value=i.props.join(",")))return""}return tl(d=Fi(i.children,o))?i.return=i.value+"{"+d+"}":""}function bp(i){var s=gm(i);return function(d,o,y,j){for(var z="",G=0;G<s;G++)z+=i[G](d,o,y,j)||"";return z}}function xp(i){return function(s){s.root||(s=s.return)&&i(s)}}function Sp(i,s,d,o){if(i.length>-1&&!i.return)switch(i.type){case Ps:i.return=pm(i.value,i.length,d);return;case dm:return Fi([Ql(i,{value:st(i.value,"@","@"+Tt)})],o);case ec:if(i.length)return cp(d=i.props,function(y){switch(pl(y,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pa(Ql(i,{props:[st(y,/:(read-\w+)/,":"+xu+"$1")]})),Pa(Ql(i,{props:[y]})),Xs(i,{props:r0(d,o)});break;case"::placeholder":Pa(Ql(i,{props:[st(y,/:(plac\w+)/,":"+Tt+"input-$1")]})),Pa(Ql(i,{props:[st(y,/:(plac\w+)/,":"+xu+"$1")]})),Pa(Ql(i,{props:[st(y,/:(plac\w+)/,Rt+"input-$1")]})),Pa(Ql(i,{props:[y]})),Xs(i,{props:r0(d,o)});break}return""})}}var jp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},De={},rn=typeof process<"u"&&De!==void 0&&(De.REACT_APP_SC_ATTR||De.SC_ATTR)||"data-styled",vm="active",bm="data-styled-version",uc="6.1.19",to=`/*!sc*/
`,Pi=typeof window<"u"&&typeof document<"u",Tp=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&De!==void 0&&De.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&De.REACT_APP_SC_DISABLE_SPEEDY!==""?De.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&De.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&De!==void 0&&De.SC_DISABLE_SPEEDY!==void 0&&De.SC_DISABLE_SPEEDY!==""&&De.SC_DISABLE_SPEEDY!=="false"&&De.SC_DISABLE_SPEEDY),ic=Object.freeze([]),sn=Object.freeze({});function Ap(i,s,d){return d===void 0&&(d=sn),i.theme!==d.theme&&i.theme||s||d.theme}var xm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Dp=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ep=/(^-|-$)/g;function f0(i){return i.replace(Dp,"-").replace(Ep,"")}var Mp=/(a)(d)/gi,Bi=52,d0=function(i){return String.fromCharCode(i+(i>25?39:97))};function Zs(i){var s,d="";for(s=Math.abs(i);s>Bi;s=s/Bi|0)d=d0(s%Bi)+d;return(d0(s%Bi)+d).replace(Mp,"$1-$2")}var Os,Sm=5381,ln=function(i,s){for(var d=s.length;d;)i=33*i^s.charCodeAt(--d);return i},jm=function(i){return ln(Sm,i)};function zp(i){return Zs(jm(i)>>>0)}function Op(i){return i.displayName||i.name||"Component"}function _s(i){return typeof i=="string"&&!0}var Tm=typeof Symbol=="function"&&Symbol.for,Am=Tm?Symbol.for("react.memo"):60115,_p=Tm?Symbol.for("react.forward_ref"):60112,Rp={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cp={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Np=((Os={})[_p]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Os[Am]=Dm,Os);function h0(i){return("type"in(s=i)&&s.type.$$typeof)===Am?Dm:"$$typeof"in i?Np[i.$$typeof]:Rp;var s}var Up=Object.defineProperty,Hp=Object.getOwnPropertyNames,m0=Object.getOwnPropertySymbols,Gp=Object.getOwnPropertyDescriptor,wp=Object.getPrototypeOf,g0=Object.prototype;function Em(i,s,d){if(typeof s!="string"){if(g0){var o=wp(s);o&&o!==g0&&Em(i,o,d)}var y=Hp(s);m0&&(y=y.concat(m0(s)));for(var j=h0(i),z=h0(s),G=0;G<y.length;++G){var E=y[G];if(!(E in Cp||d&&d[E]||z&&E in z||j&&E in j)){var A=Gp(s,E);try{Up(i,E,A)}catch{}}}}return i}function on(i){return typeof i=="function"}function eo(i){return typeof i=="object"&&"styledComponentId"in i}function ra(i,s){return i&&s?"".concat(i," ").concat(s):i||s||""}function y0(i,s){if(i.length===0)return"";for(var d=i[0],o=1;o<i.length;o++)d+=i[o];return d}function ju(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Ls(i,s,d){if(d===void 0&&(d=!1),!d&&!ju(i)&&!Array.isArray(i))return s;if(Array.isArray(s))for(var o=0;o<s.length;o++)i[o]=Ls(i[o],s[o]);else if(ju(s))for(var o in s)i[o]=Ls(i[o],s[o]);return i}function lo(i,s){Object.defineProperty(i,"toString",{value:s})}function Au(i){for(var s=[],d=1;d<arguments.length;d++)s[d-1]=arguments[d];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var qp=function(){function i(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return i.prototype.indexOfGroup=function(s){for(var d=0,o=0;o<s;o++)d+=this.groupSizes[o];return d},i.prototype.insertRules=function(s,d){if(s>=this.groupSizes.length){for(var o=this.groupSizes,y=o.length,j=y;s>=j;)if((j<<=1)<0)throw Au(16,"".concat(s));this.groupSizes=new Uint32Array(j),this.groupSizes.set(o),this.length=j;for(var z=y;z<j;z++)this.groupSizes[z]=0}for(var G=this.indexOfGroup(s+1),E=(z=0,d.length);z<E;z++)this.tag.insertRule(G,d[z])&&(this.groupSizes[s]++,G++)},i.prototype.clearGroup=function(s){if(s<this.length){var d=this.groupSizes[s],o=this.indexOfGroup(s),y=o+d;this.groupSizes[s]=0;for(var j=o;j<y;j++)this.tag.deleteRule(o)}},i.prototype.getGroup=function(s){var d="";if(s>=this.length||this.groupSizes[s]===0)return d;for(var o=this.groupSizes[s],y=this.indexOfGroup(s),j=y+o,z=y;z<j;z++)d+="".concat(this.tag.getRule(z)).concat(to);return d},i}(),ki=new Map,Ii=new Map,Ji=1,Yi=function(i){if(ki.has(i))return ki.get(i);for(;Ii.has(Ji);)Ji++;var s=Ji++;return ki.set(i,s),Ii.set(s,i),s},Bp=function(i,s){Ji=s+1,ki.set(i,s),Ii.set(s,i)},Yp="style[".concat(rn,"][").concat(bm,'="').concat(uc,'"]'),Xp=new RegExp("^".concat(rn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qp=function(i,s,d){for(var o,y=d.split(","),j=0,z=y.length;j<z;j++)(o=y[j])&&i.registerName(s,o)},$p=function(i,s){for(var d,o=((d=s.textContent)!==null&&d!==void 0?d:"").split(to),y=[],j=0,z=o.length;j<z;j++){var G=o[j].trim();if(G){var E=G.match(Xp);if(E){var A=0|parseInt(E[1],10),R=E[2];A!==0&&(Bp(R,A),Qp(i,R,E[3]),i.getTag().insertRules(A,y)),y.length=0}else y.push(G)}}},p0=function(i){for(var s=document.querySelectorAll(Yp),d=0,o=s.length;d<o;d++){var y=s[d];y&&y.getAttribute(rn)!==vm&&($p(i,y),y.parentNode&&y.parentNode.removeChild(y))}};function Zp(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Mm=function(i){var s=document.head,d=i||s,o=document.createElement("style"),y=function(G){var E=Array.from(G.querySelectorAll("style[".concat(rn,"]")));return E[E.length-1]}(d),j=y!==void 0?y.nextSibling:null;o.setAttribute(rn,vm),o.setAttribute(bm,uc);var z=Zp();return z&&o.setAttribute("nonce",z),d.insertBefore(o,j),o},Lp=function(){function i(s){this.element=Mm(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(d){if(d.sheet)return d.sheet;for(var o=document.styleSheets,y=0,j=o.length;y<j;y++){var z=o[y];if(z.ownerNode===d)return z}throw Au(17)}(this.element),this.length=0}return i.prototype.insertRule=function(s,d){try{return this.sheet.insertRule(d,s),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},i.prototype.getRule=function(s){var d=this.sheet.cssRules[s];return d&&d.cssText?d.cssText:""},i}(),Vp=function(){function i(s){this.element=Mm(s),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(s,d){if(s<=this.length&&s>=0){var o=document.createTextNode(d);return this.element.insertBefore(o,this.nodes[s]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},i.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},i}(),Kp=function(){function i(s){this.rules=[],this.length=0}return i.prototype.insertRule=function(s,d){return s<=this.length&&(this.rules.splice(s,0,d),this.length++,!0)},i.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},i.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},i}(),v0=Pi,kp={isServer:!Pi,useCSSOMInjection:!Tp},zm=function(){function i(s,d,o){s===void 0&&(s=sn),d===void 0&&(d={});var y=this;this.options=ge(ge({},kp),s),this.gs=d,this.names=new Map(o),this.server=!!s.isServer,!this.server&&Pi&&v0&&(v0=!1,p0(this)),lo(this,function(){return function(j){for(var z=j.getTag(),G=z.length,E="",A=function(Y){var U=function(ct){return Ii.get(ct)}(Y);if(U===void 0)return"continue";var V=j.names.get(U),K=z.getGroup(Y);if(V===void 0||!V.size||K.length===0)return"continue";var I="".concat(rn,".g").concat(Y,'[id="').concat(U,'"]'),ut="";V!==void 0&&V.forEach(function(ct){ct.length>0&&(ut+="".concat(ct,","))}),E+="".concat(K).concat(I,'{content:"').concat(ut,'"}').concat(to)},R=0;R<G;R++)A(R);return E}(y)})}return i.registerId=function(s){return Yi(s)},i.prototype.rehydrate=function(){!this.server&&Pi&&p0(this)},i.prototype.reconstructWithOptions=function(s,d){return d===void 0&&(d=!0),new i(ge(ge({},this.options),s),this.gs,d&&this.names||void 0)},i.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(s=function(d){var o=d.useCSSOMInjection,y=d.target;return d.isServer?new Kp(y):o?new Lp(y):new Vp(y)}(this.options),new qp(s)));var s},i.prototype.hasNameForId=function(s,d){return this.names.has(s)&&this.names.get(s).has(d)},i.prototype.registerName=function(s,d){if(Yi(s),this.names.has(s))this.names.get(s).add(d);else{var o=new Set;o.add(d),this.names.set(s,o)}},i.prototype.insertRules=function(s,d,o){this.registerName(s,d),this.getTag().insertRules(Yi(s),o)},i.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},i.prototype.clearRules=function(s){this.getTag().clearGroup(Yi(s)),this.clearNames(s)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Jp=/&/g,Wp=/^\s*\/\/.*$/gm;function Om(i,s){return i.map(function(d){return d.type==="rule"&&(d.value="".concat(s," ").concat(d.value),d.value=d.value.replaceAll(",",",".concat(s," ")),d.props=d.props.map(function(o){return"".concat(s," ").concat(o)})),Array.isArray(d.children)&&d.type!=="@keyframes"&&(d.children=Om(d.children,s)),d})}function Fp(i){var s,d,o,y=sn,j=y.options,z=j===void 0?sn:j,G=y.plugins,E=G===void 0?ic:G,A=function(U,V,K){return K.startsWith(d)&&K.endsWith(d)&&K.replaceAll(d,"").length>0?".".concat(s):U},R=E.slice();R.push(function(U){U.type===ec&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(Jp,d).replace(o,A))}),z.prefix&&R.push(Sp),R.push(vp);var Y=function(U,V,K,I){V===void 0&&(V=""),K===void 0&&(K=""),I===void 0&&(I="&"),s=I,d=V,o=new RegExp("\\".concat(d,"\\b"),"g");var ut=U.replace(Wp,""),ct=yp(K||V?"".concat(K," ").concat(V," { ").concat(ut," }"):ut);z.namespace&&(ct=Om(ct,z.namespace));var W=[];return Fi(ct,bp(R.concat(xp(function(J){return W.push(J)})))),W};return Y.hash=E.length?E.reduce(function(U,V){return V.name||Au(15),ln(U,V.name)},Sm).toString():"",Y}var Pp=new zm,Vs=Fp(),_m=an.createContext({shouldForwardProp:void 0,styleSheet:Pp,stylis:Vs});_m.Consumer;an.createContext(void 0);function b0(){return pt.useContext(_m)}var Ip=function(){function i(s,d){var o=this;this.inject=function(y,j){j===void 0&&(j=Vs);var z=o.name+j.hash;y.hasNameForId(o.id,z)||y.insertRules(o.id,z,j(o.rules,z,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=d,lo(this,function(){throw Au(12,String(o.name))})}return i.prototype.getName=function(s){return s===void 0&&(s=Vs),this.name+s.hash},i}(),tv=function(i){return i>="A"&&i<="Z"};function x0(i){for(var s="",d=0;d<i.length;d++){var o=i[d];if(d===1&&o==="-"&&i[0]==="-")return i;tv(o)?s+="-"+o.toLowerCase():s+=o}return s.startsWith("ms-")?"-"+s:s}var Rm=function(i){return i==null||i===!1||i===""},Cm=function(i){var s,d,o=[];for(var y in i){var j=i[y];i.hasOwnProperty(y)&&!Rm(j)&&(Array.isArray(j)&&j.isCss||on(j)?o.push("".concat(x0(y),":"),j,";"):ju(j)?o.push.apply(o,Wi(Wi(["".concat(y," {")],Cm(j),!1),["}"],!1)):o.push("".concat(x0(y),": ").concat((s=y,(d=j)==null||typeof d=="boolean"||d===""?"":typeof d!="number"||d===0||s in jp||s.startsWith("--")?String(d).trim():"".concat(d,"px")),";")))}return o};function oa(i,s,d,o){if(Rm(i))return[];if(eo(i))return[".".concat(i.styledComponentId)];if(on(i)){if(!on(j=i)||j.prototype&&j.prototype.isReactComponent||!s)return[i];var y=i(s);return oa(y,s,d,o)}var j;return i instanceof Ip?d?(i.inject(d,o),[i.getName(o)]):[i]:ju(i)?Cm(i):Array.isArray(i)?Array.prototype.concat.apply(ic,i.map(function(z){return oa(z,s,d,o)})):[i.toString()]}function ev(i){for(var s=0;s<i.length;s+=1){var d=i[s];if(on(d)&&!eo(d))return!1}return!0}var lv=jm(uc),av=function(){function i(s,d,o){this.rules=s,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&ev(s),this.componentId=d,this.baseHash=ln(lv,d),this.baseStyle=o,zm.registerId(d)}return i.prototype.generateAndInjectStyles=function(s,d,o){var y=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,d,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&d.hasNameForId(this.componentId,this.staticRulesId))y=ra(y,this.staticRulesId);else{var j=y0(oa(this.rules,s,d,o)),z=Zs(ln(this.baseHash,j)>>>0);if(!d.hasNameForId(this.componentId,z)){var G=o(j,".".concat(z),void 0,this.componentId);d.insertRules(this.componentId,z,G)}y=ra(y,z),this.staticRulesId=z}else{for(var E=ln(this.baseHash,o.hash),A="",R=0;R<this.rules.length;R++){var Y=this.rules[R];if(typeof Y=="string")A+=Y;else if(Y){var U=y0(oa(Y,s,d,o));E=ln(E,U+R),A+=U}}if(A){var V=Zs(E>>>0);d.hasNameForId(this.componentId,V)||d.insertRules(this.componentId,V,o(A,".".concat(V),void 0,this.componentId)),y=ra(y,V)}}return y},i}(),Nm=an.createContext(void 0);Nm.Consumer;var Rs={};function nv(i,s,d){var o=eo(i),y=i,j=!_s(i),z=s.attrs,G=z===void 0?ic:z,E=s.componentId,A=E===void 0?function(w,O){var B=typeof w!="string"?"sc":f0(w);Rs[B]=(Rs[B]||0)+1;var q="".concat(B,"-").concat(zp(uc+B+Rs[B]));return O?"".concat(O,"-").concat(q):q}(s.displayName,s.parentComponentId):E,R=s.displayName,Y=R===void 0?function(w){return _s(w)?"styled.".concat(w):"Styled(".concat(Op(w),")")}(i):R,U=s.displayName&&s.componentId?"".concat(f0(s.displayName),"-").concat(s.componentId):s.componentId||A,V=o&&y.attrs?y.attrs.concat(G).filter(Boolean):G,K=s.shouldForwardProp;if(o&&y.shouldForwardProp){var I=y.shouldForwardProp;if(s.shouldForwardProp){var ut=s.shouldForwardProp;K=function(w,O){return I(w,O)&&ut(w,O)}}else K=I}var ct=new av(d,U,o?y.componentStyle:void 0);function W(w,O){return function(B,q,P){var vt=B.attrs,Ut=B.componentStyle,Qt=B.defaultProps,gt=B.foldedComponentIds,Ft=B.styledComponentId,L=B.target,rt=an.useContext(Nm),b=b0(),H=B.shouldForwardProp||b.shouldForwardProp,$=Ap(q,rt,Qt)||sn,at=function(dt,et,Lt){for(var jt,le=ge(ge({},et),{className:void 0,theme:Lt}),$l=0;$l<dt.length;$l+=1){var el=on(jt=dt[$l])?jt(le):jt;for(var Ee in el)le[Ee]=Ee==="className"?ra(le[Ee],el[Ee]):Ee==="style"?ge(ge({},le[Ee]),el[Ee]):el[Ee]}return et.className&&(le.className=ra(le.className,et.className)),le}(vt,q,$),m=at.as||L,N={};for(var X in at)at[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&at.theme===$||(X==="forwardedAs"?N.as=at.forwardedAs:H&&!H(X,m)||(N[X]=at[X]));var Q=function(dt,et){var Lt=b0(),jt=dt.generateAndInjectStyles(et,Lt.styleSheet,Lt.stylis);return jt}(Ut,at),F=ra(gt,Ft);return Q&&(F+=" "+Q),at.className&&(F+=" "+at.className),N[_s(m)&&!xm.has(m)?"class":"className"]=F,P&&(N.ref=P),pt.createElement(m,N)}(J,w,O)}W.displayName=Y;var J=an.forwardRef(W);return J.attrs=V,J.componentStyle=ct,J.displayName=Y,J.shouldForwardProp=K,J.foldedComponentIds=o?ra(y.foldedComponentIds,y.styledComponentId):"",J.styledComponentId=U,J.target=o?y.target:i,Object.defineProperty(J,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=o?function(O){for(var B=[],q=1;q<arguments.length;q++)B[q-1]=arguments[q];for(var P=0,vt=B;P<vt.length;P++)Ls(O,vt[P],!0);return O}({},y.defaultProps,w):w}}),lo(J,function(){return".".concat(J.styledComponentId)}),j&&Em(J,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),J}function S0(i,s){for(var d=[i[0]],o=0,y=s.length;o<y;o+=1)d.push(s[o],i[o+1]);return d}var j0=function(i){return Object.assign(i,{isCss:!0})};function uv(i){for(var s=[],d=1;d<arguments.length;d++)s[d-1]=arguments[d];if(on(i)||ju(i))return j0(oa(S0(ic,Wi([i],s,!0))));var o=i;return s.length===0&&o.length===1&&typeof o[0]=="string"?oa(o):j0(oa(S0(o,s)))}function Ks(i,s,d){if(d===void 0&&(d=sn),!s)throw Au(1,s);var o=function(y){for(var j=[],z=1;z<arguments.length;z++)j[z-1]=arguments[z];return i(s,d,uv.apply(void 0,Wi([y],j,!1)))};return o.attrs=function(y){return Ks(i,s,ge(ge({},d),{attrs:Array.prototype.concat(d.attrs,y).filter(Boolean)}))},o.withConfig=function(y){return Ks(i,s,ge(ge({},d),y))},o}var Um=function(i){return Ks(nv,i)},p=Um;xm.forEach(function(i){p[i]=Um(i)});const iv=p.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`,cv=p.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
`,rv=p.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`,sv=p.button`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${i=>i.$active?"#0d6efd":"#6c757d"};

  &:hover {
    color: #0d6efd;
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`,ov=p.span`
  font-size: 0.75rem;
  font-weight: 500;
`,fv=({activeTab:i,onTabChange:s})=>{const d=[{id:"dashboard",icon:Qy,label:"Dashboard"},{id:"costs",icon:nn,label:"Costs"},{id:"settings",icon:Fs,label:"Settings"}];return c.jsx(iv,{children:c.jsx(cv,{children:c.jsx(rv,{children:d.map(o=>{const y=o.icon;return c.jsxs(sv,{$active:i===o.id,onClick:()=>s(o.id),children:[c.jsx(y,{}),c.jsx(ov,{children:o.label})]},o.id)})})})})},dv=p.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${i=>i.$show?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1050;
  padding: 1rem;
`,hv=p.div`
  background: white;
  border-radius: 0.75rem;
  max-width: 400px;
  width: 100%;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,mv=p.div`
  color: #ffc107;
  margin-bottom: 1rem;
  text-align: center;

  svg {
    width: 48px;
    height: 48px;
  }
`,gv=p.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  text-align: center;
  margin-bottom: 1rem;
`,yv=p.p`
  font-size: 0.875rem;
  color: #495057;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,pv=p.div`
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,vv=p.div`
  font-size: 0.75rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
`,bv=p.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #198754;
`,xv=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`,T0=p.button`
  padding: 0.75rem 1rem;
  background: ${i=>i.$variant==="primary"?"#0d6efd":"white"};
  color: ${i=>i.$variant==="primary"?"white":"#6c757d"};
  border: 1px solid
    ${i=>i.$variant==="primary"?"#0d6efd":"#6c757d"};
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${i=>i.$variant==="primary"?"#0b5ed7":"#f8f9fa"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,Sv=({show:i,guestFeeTotal:s,onCancel:d,onContinue:o})=>i?c.jsx(dv,{$show:i,onClick:d,children:c.jsxs(hv,{onClick:y=>y.stopPropagation(),children:[c.jsx(mv,{children:c.jsx(ep,{})}),c.jsx(gv,{children:"Generate Report"}),c.jsx(yv,{children:"You will use current guest fee to generate next report"}),c.jsxs(pv,{children:[c.jsx(vv,{children:"Current Guest Fee"}),c.jsx(bv,{children:bt(s)})]}),c.jsxs(xv,{children:[c.jsx(T0,{$variant:"secondary",onClick:d,children:"Cancel"}),c.jsx(T0,{$variant:"primary",onClick:o,children:"Continue"})]})]})}):null,jv=p.div`
  padding: 1rem;
  padding-bottom: 5rem; // Space for bottom navigation
  max-width: 768px;
  margin: 0 auto;
`,Tv=p.div`
  margin-bottom: 1.5rem;
`,Av=p.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
  margin-bottom: 0.25rem;
`,Dv=p.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0;
`,Ev=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`,Mv=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  svg {
    width: 20px;
    height: 20px;
  }
`,zv=p.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #495057;
`,Ov=p.div`
  font-size: 2rem;
  font-weight: bold;
  color: #198754;
  margin-top: 0.5rem;
`,_v=p.div`
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 0.25rem;
`,Rv=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`,Cv=p.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
`,Nv=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Uv=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 0.875rem;
`,Hv=p.span`
  color: #495057;
`,Gv=p.span`
  font-weight: 600;
  color: #212529;
`,wv=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
`,A0=p.button`
  background-color: ${i=>i.$variant==="primary"?"#0d6efd":"#198754"};
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 1rem;
  font-weight: 500;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,qv=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`,Bv=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Yv=p.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
`,Xv=p.div`
  font-size: 0.75rem;
  color: #0d6efd;
  font-weight: 500;
`,Qv=p.div`
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
`,$v=p.div`
  font-size: 2rem;
  font-weight: bold;
  color: #0d6efd;
`,Zv=p.div`
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 0.25rem;
`,D0=({onNavigate:i})=>{const{config:s,monthlyData:d,currentMonth:o,runningGuestFees:y,getTotalRunningGuestFees:j}=Tu(),[z,G]=pt.useState(!1),E=cm({...d,guestEntries:y}),A=j(),[R,Y]=o.split("-").map(Number),U=new Date(R,Y-1).toLocaleString("en-US",{month:"long",year:"numeric"}),V=s.schedule.daysOfWeek.includes("Tuesday")?Math.floor(d.actualPlayingDays*.5):0,K=s.schedule.daysOfWeek.includes("Friday")?Math.ceil(d.actualPlayingDays*.5):0,I=jy(o),ut=()=>{G(!0)},ct=()=>{G(!1),i("cost-review")};return c.jsxs(jv,{children:[c.jsxs(Tv,{children:[c.jsx(Av,{children:"Badminton Calculator"}),c.jsxs(Dv,{children:[U,I&&c.jsxs("span",{style:{marginLeft:"0.5rem",display:"inline-flex",alignItems:"center",gap:"0.25rem",color:"#198754",fontSize:"0.75rem",fontWeight:"500"},children:[c.jsx(qy,{size:14}),"Report Generated"]})]})]}),c.jsxs(Ev,{children:[c.jsxs(Mv,{children:[c.jsx(nn,{style:{color:"#198754"}}),c.jsx(zv,{children:"Current Guest Fee"})]}),c.jsx(Ov,{children:bt(A)}),c.jsx(_v,{children:"This month total"})]}),c.jsxs(qv,{children:[c.jsxs(Bv,{children:[c.jsx(Yv,{children:"Playing Schedule"}),c.jsxs(Xv,{children:[d.actualPlayingDays," days (",V,"T•",K,"F)"]})]}),c.jsxs(Qv,{children:[c.jsxs($v,{children:[d.actualPlayingDays," days"]}),c.jsx(Zv,{children:s.schedule.daysOfWeek.join(" & ")})]})]}),E.length>0&&c.jsxs(Rv,{children:[c.jsx(Cv,{children:"Guest Summary"}),c.jsx(Nv,{children:E.map((W,J)=>c.jsxs(Uv,{children:[c.jsx(Hv,{children:W.name}),c.jsx(Gv,{children:bt(W.totalAmount)})]},J))})]}),c.jsxs(wv,{children:[c.jsxs(A0,{$variant:"primary",onClick:()=>i("guests"),children:[c.jsx(ky,{}),c.jsx("span",{children:"Add Guests"})]}),c.jsxs(A0,{$variant:"success",onClick:ut,children:[c.jsx(Ws,{}),c.jsx("span",{children:"Generate Report"})]})]}),c.jsx(Sv,{show:z,guestFeeTotal:A,onCancel:()=>G(!1),onContinue:ct})]})},Lv=p.div`
  padding: 1rem;
  padding-bottom: 5rem; // Space for bottom navigation
  max-width: 768px;
  margin: 0 auto;
`,Vv=p.div`
  margin-bottom: 1.5rem;
`,Kv=p.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
  margin-bottom: 0.25rem;
`,kv=p.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0;
`,du=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`,hu=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  svg {
    width: 18px;
    height: 18px;
  }
`,mu=p.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
`,Ia=p.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,tn=p.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
`,gu=p.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`,Jv=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`,Wv=p.button`
  padding: 0.5rem;
  border: 1px solid ${i=>i.$selected?"#0d6efd":"#ced4da"};
  background-color: ${i=>i.$selected?"#0d6efd":"white"};
  color: ${i=>i.$selected?"white":"#495057"};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${i=>i.$selected?"#0b5ed7":"#f8f9fa"};
  }
`,E0=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,M0=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  background-color: #f8f9fa;
  border-radius: 0.375rem;
`,z0=p.span`
  font-size: 0.875rem;
  color: #495057;
`,O0=p.button`
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 0.25rem;

  &:hover {
    color: #c82333;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,_0=p.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,R0=p.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;

  &:focus {
    outline: none;
    border-color: #0d6efd;
  }
`,C0=p.button`
  padding: 0.5rem 1rem;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #0b5ed7;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`,Fv=p.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #198754;
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #157347;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Pv=p.button`
  width: 100%;
  padding: 0.75rem;
  background-color:rgb(221, 89, 89);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  &:hover {
    background-color: : rgb(221, 89, 89);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Iv=p.div`
  background-color: #cff4fc;
  border: 1px solid #b6effb;
  border-radius: 0.375rem;
  padding: 0.75rem;
  margin-top: 1rem;
  font-size: 0.75rem;
  color: #055160;
`,tb=()=>{const{config:i,updateConfig:s,restMonth:d}=Tu(),[o,y]=pt.useState(i),[j,z]=pt.useState(""),[G,E]=pt.useState(""),[A,R]=pt.useState(!1),Y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];pt.useEffect(()=>{y(i)},[i]),pt.useEffect(()=>{R(JSON.stringify(o)!==JSON.stringify(i))},[o,i]);const U=(w,O,B)=>{y(q=>({...q,[w]:{...q[w],[O]:B}}))},V=w=>{const O=o.schedule.daysOfWeek,B=O.includes(w)?O.filter(q=>q!==w):[...O,w];y(q=>({...q,schedule:{...q.schedule,daysOfWeek:B}}))},K=()=>{j.trim()&&!o.members.includes(j.trim())&&(y(w=>({...w,members:[...w.members,j.trim()]})),z(""))},I=w=>{y(O=>({...O,members:O.members.filter(B=>B!==w)}))},ut=()=>{G.trim()&&!o.frequentGuests.includes(G.trim())&&(y(w=>({...w,frequentGuests:[...w.frequentGuests,G.trim()]})),E(""))},ct=w=>{y(O=>({...O,frequentGuests:O.frequentGuests.filter(B=>B!==w)}))},W=()=>{s(o),R(!1)},J=()=>{d()};return c.jsxs(Lv,{children:[c.jsxs(Vv,{children:[c.jsx(Kv,{children:"Settings"}),c.jsx(kv,{children:"Configure app defaults"})]}),c.jsxs(du,{children:[c.jsxs(hu,{children:[c.jsx(fa,{style:{color:"#0d6efd"}}),c.jsx(mu,{children:"Court Settings"})]}),c.jsxs(Ia,{children:[c.jsx(tn,{children:"Cost per Hour ($)"}),c.jsx(gu,{type:"number",value:o.court.costPerHour,onChange:w=>U("court","costPerHour",Number(w.target.value))})]}),c.jsxs(Ia,{children:[c.jsx(tn,{children:"Hours per Day"}),c.jsx(gu,{type:"number",step:"0.5",value:o.court.hoursPerDay,onChange:w=>U("court","hoursPerDay",Number(w.target.value))})]}),c.jsxs(Ia,{children:[c.jsx(tn,{children:"Discount Percentage (%)"}),c.jsx(gu,{type:"number",value:o.court.discountPercentage,onChange:w=>U("court","discountPercentage",Number(w.target.value))})]})]}),c.jsxs(du,{children:[c.jsxs(hu,{children:[c.jsx(tc,{style:{color:"#198754"}}),c.jsx(mu,{children:"Shuttle Settings"})]}),c.jsxs(Ia,{children:[c.jsx(tn,{children:"Cost per Tube ($)"}),c.jsx(gu,{type:"number",value:o.shuttle.costPerTube,onChange:w=>U("shuttle","costPerTube",Number(w.target.value))})]}),c.jsxs(Ia,{children:[c.jsx(tn,{children:"Default Tubes per Month"}),c.jsx(gu,{type:"number",value:o.shuttle.defaultTubesPerMonth,onChange:w=>U("shuttle","defaultTubesPerMonth",Number(w.target.value))})]})]}),c.jsxs(du,{children:[c.jsxs(hu,{children:[c.jsx(fa,{style:{color:"#6f42c1"}}),c.jsx(mu,{children:"Playing Schedule"})]}),c.jsxs(Ia,{children:[c.jsx(tn,{children:"Playing Days"}),c.jsx(Jv,{children:Y.map(w=>c.jsx(Wv,{$selected:o.schedule.daysOfWeek.includes(w),onClick:()=>V(w),children:w},w))})]})]}),c.jsxs(du,{children:[c.jsxs(hu,{children:[c.jsx(da,{style:{color:"#fd7e14"}}),c.jsx(mu,{children:"Members"})]}),c.jsx(E0,{children:o.members.map((w,O)=>c.jsxs(M0,{children:[c.jsx(z0,{children:w}),c.jsx(O0,{onClick:()=>I(w),children:c.jsx(Ys,{})})]},O))}),c.jsxs(_0,{children:[c.jsx(R0,{type:"text",placeholder:"Add new member",value:j,onChange:w=>z(w.target.value),onKeyPress:w=>w.key==="Enter"&&K()}),c.jsx(C0,{onClick:K,disabled:!j.trim(),children:"Add"})]})]}),c.jsxs(du,{children:[c.jsxs(hu,{children:[c.jsx(da,{style:{color:"#20c997"}}),c.jsx(mu,{children:"Frequent Guests"})]}),c.jsx(E0,{children:o.frequentGuests.map((w,O)=>c.jsxs(M0,{children:[c.jsx(z0,{children:w}),c.jsx(O0,{onClick:()=>ct(w),children:c.jsx(Ys,{})})]},O))}),c.jsxs(_0,{children:[c.jsx(R0,{type:"text",placeholder:"Add frequent guest",value:G,onChange:w=>E(w.target.value),onKeyPress:w=>w.key==="Enter"&&ut()}),c.jsx(C0,{onClick:ut,disabled:!G.trim(),children:"Add"})]})]}),c.jsxs(Pv,{onClick:J,disabled:!1,children:[c.jsx(Fs,{style:{marginRight:"0.5rem"}}),"Reset Month"]}),A&&c.jsxs(c.Fragment,{children:[c.jsx(Iv,{children:"Changes will be applied after saving"}),c.jsxs(Fv,{onClick:W,children:[c.jsx(Wy,{style:{marginRight:"0.5rem"}}),"Save Changes"]})]})]})},eb=p.div`
  padding: 1rem;
  padding-bottom: 5rem; // Space for bottom navigation
  max-width: 768px;
  margin: 0 auto;
`,lb=p.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,ab=p.button`
  background: #f8f9fa;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,nb=p.div`
  flex: 1;
`,ub=p.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
  margin-bottom: 0.25rem;
`,ib=p.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0;
`,cb=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`,rb=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;p.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;p.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6c757d;
  padding: 0.25rem;

  &:hover {
    color: #0d6efd;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;const sb=p.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
`,ob=p.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`,fb=p.div`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6c757d;
  padding: 0.5rem 0;
`,db=p.button`
  aspect-ratio: 1;
  border: 1px solid
    ${i=>i.$isSelected?"#0d6efd":"transparent"};
  background: ${i=>i.$isSelected?"#e7f1ff":i.$isPlayingDay?"#0d6efd":"#f8f9fa"};
  color: ${i=>i.$isPlayingDay&&!i.$isSelected?"white":"#212529"};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: ${i=>i.$isPlayingDay?"500":"400"};
  cursor: ${i=>i.$isPlayingDay?"pointer":"default"};
  position: relative;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${i=>i.$isPlayingDay&&`
      transform: scale(1.05);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `}
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`,hb=p.div`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 6px;
  height: 6px;
  background: #dc3545;
  border-radius: 50%;
`;p.div`
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  background: #dc3545;
  color: white;
  border-radius: 9px;
  font-size: 0.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 1px solid white;
`;const mb=p.div`
  aspect-ratio: 1;
`,gb=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`,N0=p.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
`,Cs=p.div`
  margin-bottom: 1rem;
`,Ns=p.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
`,U0=p.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`,yb=p.textarea`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  resize: vertical;
  min-height: 60px;
  transition: border-color 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`,pb=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`,vb=p.button`
  padding: 0.5rem;
  border: 1px solid ${i=>i.$selected?"#0d6efd":"#ced4da"};
  background: ${i=>i.$selected?"#0d6efd":"white"};
  color: ${i=>i.$selected?"white":"#495057"};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background: ${i=>i.$selected?"#0b5ed7":"#f8f9fa"};
  }
`,bb=p.button`
  width: 100%;
  padding: 0.75rem;
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #0b5ed7;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`,xb=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
`,Sb=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,jb=p.div`
  flex: 1;
`,Tb=p.div`
  font-weight: 500;
  color: #212529;
  font-size: 0.875rem;
`,Ab=p.div`
  font-size: 0.75rem;
  color: #6c757d;
  margin-top: 0.25rem;
`,Db=p.div`
  font-weight: 600;
  color: #198754;
  font-size: 0.875rem;
  margin-right: 0.5rem;
`,Eb=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,H0=p.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: #6c757d;
  transition: color 0.15s ease;

  &:hover {
    color: ${i=>i.color||"#0d6efd"};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Mb=p.div`
  background: #d1ecf1;
  border: 1px solid #bee5eb;
  border-radius: 0.375rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  color: #0c5460;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,zb=({onBack:i})=>{const{config:s,monthlyData:d,currentMonth:o,runningGuestFees:y,addGuest:j,updateGuest:z,deleteGuest:G}=Tu(),[E,A]=pt.useState(""),[R,Y]=pt.useState({name:"",amount:0,note:"",date:""}),[U,V]=pt.useState(null),[K,I]=o.split("-").map(Number),ut=new Date(K,I-1).toLocaleString("en-US",{month:"long",year:"numeric"}),ct=new Date(K,I-1,1).getDay(),W=new Date(K,I,0).getDate(),J=["S","M","T","W","T","F","S"],w=[];for(let L=0;L<ct;L++)w.push(null);for(let L=1;L<=W;L++)w.push(L);const O=L=>{const b=new Date(K,I-1,L).toLocaleDateString("en-US",{weekday:"long"});return s.schedule.daysOfWeek.includes(b)},B=L=>`${K}-${String(I).padStart(2,"0")}-${String(L).padStart(2,"0")}`,q=L=>{if(!O(L))return;const rt=B(L);A(rt),Y({name:"",amount:0,note:"",date:rt}),V(null)},P=L=>{Y(rt=>({...rt,name:L}))},vt=()=>{!R.name||R.amount<=0||(U?(z(E,U,R),V(null)):j(E,R),Y({name:"",amount:0,note:"",date:E}))},Ut=L=>{L.id&&(Y(L),V(L.id))},Qt=L=>{confirm("Are you sure you want to delete this guest?")&&G(E,L)},gt=E?y[E]||[]:[],Ft=E?parseInt(E.split("-")[2]):null;return c.jsxs(eb,{children:[c.jsxs(lb,{children:[c.jsx(ab,{onClick:i,children:c.jsx(om,{})}),c.jsxs(nb,{children:[c.jsx(ub,{children:"Add Guests"}),c.jsx(ib,{children:"Select a playing day"})]})]}),c.jsxs(Mb,{children:[c.jsx(fa,{}),c.jsxs("span",{children:["Tap on any blue playing day (",s.schedule.daysOfWeek.join(" or "),") to add guests for that session."]})]}),c.jsxs(cb,{children:[c.jsx(rb,{children:c.jsx(sb,{children:ut})}),c.jsxs(ob,{children:[J.map((L,rt)=>c.jsx(fb,{children:L},rt)),w.map((L,rt)=>{if(!L)return c.jsx(mb,{},rt);const b=B(L),H=O(L),$=d.guestEntries[b]&&d.guestEntries[b].length>0,at=E===b;return c.jsxs(db,{$isPlayingDay:H,$hasGuests:$,$isSelected:at,onClick:()=>q(L),disabled:!H,children:[L,$&&c.jsx(hb,{})]},rt)})]})]}),E&&c.jsxs(c.Fragment,{children:[c.jsxs(gb,{children:[c.jsxs(N0,{children:[U?"Edit Guest":"Add New Guest"," -"," ",Ft&&new Date(K,I-1,Ft).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})]}),c.jsxs(Cs,{children:[c.jsx(Ns,{children:"Guest Name"}),c.jsx(pb,{children:s.frequentGuests.map(L=>c.jsx(vb,{$selected:R.name===L,onClick:()=>P(L),children:L},L))}),c.jsx(U0,{type:"text",placeholder:"Or enter custom name",value:R.name,onChange:L=>Y(rt=>({...rt,name:L.target.value}))})]}),c.jsxs(Cs,{children:[c.jsx(Ns,{children:"Amount ($)"}),c.jsx(U0,{type:"number",placeholder:"Enter amount",value:R.amount||"",onChange:L=>Y(rt=>({...rt,amount:Number(L.target.value)}))})]}),c.jsxs(Cs,{children:[c.jsx(Ns,{children:"Note (Optional)"}),c.jsx(yb,{placeholder:"Add a note",value:R.note,onChange:L=>Y(rt=>({...rt,note:L.target.value}))})]}),c.jsx(bb,{onClick:vt,disabled:!R.name||R.amount<=0,children:U?"Update Guest":"Add Guest"})]}),gt.length>0&&c.jsxs(xb,{children:[c.jsx(N0,{children:"Guests for this date"}),gt.map(L=>c.jsxs(Sb,{children:[c.jsxs(jb,{children:[c.jsx(Tb,{children:L.name}),L.note&&c.jsx(Ab,{children:L.note})]}),c.jsxs(Eb,{children:[c.jsx(Db,{children:bt(L.amount)}),c.jsx(H0,{onClick:()=>Ut(L),children:c.jsx(Vy,{})}),c.jsx(H0,{onClick:()=>L.id&&Qt(L.id),color:"#dc3545",children:c.jsx(Iy,{})})]})]},L.id))]})]})]})},Ob=p.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${i=>i.$show?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1050;
  padding: 1rem;
`,_b=p.div`
  background: white;
  border-radius: 0.75rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Rb=p.div`
  padding: 1.25rem;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Cb=p.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
`,Nb=p.button`
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
    color: #212529;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,Ub=p.div`
  padding: 1.25rem;
  overflow-y: auto;
  flex: 1;
`,Hb=p.div`
  padding: 1.25rem;
  border-top: 1px solid #dee2e6;
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
`,Gb=p.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #dee2e6;
`,Us=p.button`
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${i=>i.$active?"#0d6efd":"#6c757d"};
  border-bottom: 2px solid
    ${i=>i.$active?"#0d6efd":"transparent"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #0d6efd;
  }
`,Hs=p.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
  }
`,wb=p.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  margin-bottom: 1rem;
`,qb=p.div`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6c757d;
  padding: 0.5rem 0;
`,Bb=p.button`
  aspect-ratio: 1;
  border: 1px solid
    ${i=>i.$isExcluded?"#dc3545":i.$isIncluded?"#198754":"transparent"};
  background: ${i=>i.$isExcluded?"#f8d7da":i.$isIncluded?"#d1e7dd":i.$isPlayingDay?"#e7f1ff":"#f8f9fa"};
  color: ${i=>i.$isExcluded?"#842029":i.$isIncluded?"#0f5132":i.$isPlayingDay?"#0d6efd":"#495057"};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: ${i=>i.$isPlayingDay||i.$isIncluded?"500":"400"};
  cursor: ${i=>i.$disabled?"default":"pointer"};
  transition: all 0.2s ease;
  position: relative;

  &:hover:not(:disabled) {
    transform: scale(1.05);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.5;
  }
`,Yb=p.div`
  aspect-ratio: 1;
`,Xb=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
`,Gs=p.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,ws=p.div`
  width: 16px;
  height: 16px;
  background: ${i=>i.$color};
  border-radius: 0.25rem;
  border: 1px solid
    ${i=>i.$color==="#e7f1ff"?"#0d6efd":"transparent"};
`,Qb=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`,$b=p.div`
  padding: 1rem;
  border: 1px solid ${i=>i.$absent?"#dc3545":"#dee2e6"};
  background: ${i=>i.$absent?"#f8d7da":"white"};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,Zb=p.div`
  font-weight: 500;
  color: #212529;
  margin-bottom: 0.25rem;
`,Lb=p.div`
  font-size: 0.75rem;
  color: ${i=>i.color||"#6c757d"};
`,Vb=p.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,G0=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,w0=p.label`
  font-size: 0.875rem;
  color: #495057;
  min-width: 120px;
`,q0=p.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`,B0=p.button`
  padding: 0.5rem 1rem;
  background: ${i=>i.$variant==="primary"?"#0d6efd":"white"};
  color: ${i=>i.$variant==="primary"?"white":"#6c757d"};
  border: 1px solid
    ${i=>i.$variant==="primary"?"#0d6efd":"#6c757d"};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${i=>i.$variant==="primary"?"#0b5ed7":"#f8f9fa"};
  }
`,Y0=p.div`
  background: #cff4fc;
  border: 1px solid #b6effb;
  border-radius: 0.375rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  color: #055160;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
  }
`,qs=p.div`
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
`,Ze=p.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Le=p.span`
  color: #6c757d;
`,Ve=p.span`
  font-weight: 500;
  color: #212529;
`,Kb=({show:i,onClose:s,onApply:d})=>{const{config:o,monthlyData:y,currentMonth:j}=Tu(),[z,G]=pt.useState("calendar"),[E,A]=pt.useState([]),[R,Y]=pt.useState([]),[U,V]=pt.useState([]),[K,I]=pt.useState(0),[ut,ct]=pt.useState(0),[W,J]=j.split("-").map(Number),w=new Date(W,J-1).toLocaleString("en-US",{month:"long",year:"numeric"}),O=new Date(W,J-1,1).getDay(),B=new Date(W,J,0).getDate(),q=["S","M","T","W","T","F","S"],P=[];for(let b=0;b<O;b++)P.push(null);for(let b=1;b<=B;b++)P.push(b);const vt=b=>{const $=new Date(W,J-1,b).toLocaleDateString("en-US",{weekday:"long"});return o.schedule.daysOfWeek.includes($)},Ut=b=>`${W}-${String(J).padStart(2,"0")}-${String(b).padStart(2,"0")}`,Qt=b=>{const H=Ut(b);vt(b)?E.includes(H)?A(at=>at.filter(m=>m!==H)):A(at=>[...at,H]):R.includes(H)?Y(at=>at.filter(m=>m!==H)):Y(at=>[...at,H])},gt=b=>{U.includes(b)?V(H=>H.filter($=>$!==b)):V(H=>[...H,b])},Ft=()=>{let b=y.actualPlayingDays;return b-=E.length,b+=R.length,Math.max(0,b)},L=()=>{d({playingDays:Ft(),extraShuttleCost:ut+K*o.shuttle.costPerTube,excludedDates:E,includedDates:R,absentMembers:U,extraShuttleTubes:K}),rt()},rt=()=>{A([]),Y([]),V([]),I(0),ct(0),G("calendar"),s()};return i?c.jsx(Ob,{$show:i,onClick:rt,children:c.jsxs(_b,{onClick:b=>b.stopPropagation(),children:[c.jsxs(Rb,{children:[c.jsxs(Cb,{children:["Adjustments for ",w]}),c.jsx(Nb,{onClick:rt,children:c.jsx(Ys,{})})]}),c.jsxs(Ub,{children:[c.jsxs(Gb,{children:[c.jsx(Us,{$active:z==="calendar",onClick:()=>G("calendar"),children:"Calendar"}),c.jsx(Us,{$active:z==="members",onClick:()=>G("members"),children:"Members"}),c.jsx(Us,{$active:z==="shuttle",onClick:()=>G("shuttle"),children:"Shuttle"})]}),z==="calendar"&&c.jsxs(c.Fragment,{children:[c.jsxs(Hs,{children:[c.jsx(fa,{}),"Adjust Playing Days"]}),c.jsxs(Y0,{children:[c.jsx(Su,{}),c.jsx("span",{children:"Tap dates to exclude playing days or include non-playing days"})]}),c.jsxs(wb,{children:[q.map((b,H)=>c.jsx(qb,{children:b},H)),P.map((b,H)=>{if(!b)return c.jsx(Yb,{},H);const $=Ut(b),at=vt(b),m=E.includes($),N=R.includes($);return c.jsx(Bb,{$isPlayingDay:at,$isExcluded:m,$isIncluded:N,onClick:()=>Qt(b),children:b},H)})]}),c.jsxs(Xb,{children:[c.jsxs(Gs,{children:[c.jsx(ws,{$color:"#e7f1ff"}),c.jsx("span",{children:"Default playing day"})]}),c.jsxs(Gs,{children:[c.jsx(ws,{$color:"#f8d7da"}),c.jsx("span",{children:"Excluded"})]}),c.jsxs(Gs,{children:[c.jsx(ws,{$color:"#d1e7dd"}),c.jsx("span",{children:"Added"})]})]}),c.jsxs(qs,{children:[c.jsxs(Ze,{children:[c.jsx(Le,{children:"Original playing days"}),c.jsx(Ve,{children:y.actualPlayingDays})]}),c.jsxs(Ze,{children:[c.jsx(Le,{children:"Excluded days"}),c.jsxs(Ve,{children:["-",E.length]})]}),c.jsxs(Ze,{children:[c.jsx(Le,{children:"Added days"}),c.jsxs(Ve,{children:["+",R.length]})]}),c.jsxs(Ze,{children:[c.jsx(Le,{children:c.jsx("strong",{children:"Adjusted total"})}),c.jsx(Ve,{children:c.jsx("strong",{children:Ft()})})]})]})]}),z==="members"&&c.jsxs(c.Fragment,{children:[c.jsxs(Hs,{children:[c.jsx(da,{}),"Mark Absent Members"]}),c.jsxs(Y0,{children:[c.jsx(Su,{}),c.jsx("span",{children:"Select members who won't participate this month"})]}),c.jsx(Qb,{children:o.members.map((b,H)=>{const $=U.includes(b);return c.jsxs($b,{$absent:$,onClick:()=>gt(b),children:[c.jsx(Zb,{children:b}),c.jsx(Lb,{color:$?"#842029":"#198754",children:$?"Absent":"Present"})]},H)})}),c.jsxs(qs,{children:[c.jsxs(Ze,{children:[c.jsx(Le,{children:"Total members"}),c.jsx(Ve,{children:o.members.length})]}),c.jsxs(Ze,{children:[c.jsx(Le,{children:"Absent members"}),c.jsx(Ve,{children:U.length})]}),c.jsxs(Ze,{children:[c.jsx(Le,{children:c.jsx("strong",{children:"Active members"})}),c.jsx(Ve,{children:c.jsx("strong",{children:o.members.length-U.length})})]})]})]}),z==="shuttle"&&c.jsxs(c.Fragment,{children:[c.jsxs(Hs,{children:[c.jsx(tc,{}),"Shuttle Adjustments"]}),c.jsxs(Vb,{children:[c.jsxs(G0,{children:[c.jsx(w0,{children:"Extra Tubes"}),c.jsx(q0,{type:"number",value:K,onChange:b=>I(Number(b.target.value)),min:"0"})]}),c.jsxs(G0,{children:[c.jsx(w0,{children:"Extra Cost ($)"}),c.jsx(q0,{type:"number",value:ut,onChange:b=>ct(Number(b.target.value)),min:"0"})]})]}),c.jsxs(qs,{children:[c.jsxs(Ze,{children:[c.jsx(Le,{children:"Regular tubes"}),c.jsxs(Ve,{children:[o.shuttle.defaultTubesPerMonth," × $",o.shuttle.costPerTube]})]}),c.jsxs(Ze,{children:[c.jsx(Le,{children:"Extra tubes"}),c.jsxs(Ve,{children:[K," × $",o.shuttle.costPerTube]})]}),c.jsxs(Ze,{children:[c.jsx(Le,{children:"Extra cost"}),c.jsxs(Ve,{children:["$",ut]})]}),c.jsxs(Ze,{children:[c.jsx(Le,{children:c.jsx("strong",{children:"Total extra"})}),c.jsx(Ve,{children:c.jsxs("strong",{children:["$",ut+K*o.shuttle.costPerTube]})})]})]})]})]}),c.jsxs(Hb,{children:[c.jsx(B0,{$variant:"secondary",onClick:rt,children:"Cancel"}),c.jsx(B0,{$variant:"primary",onClick:L,children:"Apply Adjustments"})]})]})}):null},kb=p.div`
  padding: 1rem;
  padding-bottom: 5rem; // Space for bottom navigation
  max-width: 768px;
  margin: 0 auto;
`,Jb=p.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Wb=p.button`
  background: #f8f9fa;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,Fb=p.div`
  flex: 1;
`,Pb=p.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
  margin-bottom: 0.25rem;
`,Ib=p.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0;
`,tx=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`,X0=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  text-align: center;
`,Q0=p.div`
  color: ${i=>i.$color};
  margin-bottom: 0.5rem;

  svg {
    width: 24px;
    height: 24px;
  }
`,$0=p.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
  margin-bottom: 0.25rem;
`,Z0=p.div`
  font-size: 0.75rem;
  color: #6c757d;
`,yu=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`,pu=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,vu=p.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
  }
`;p.button`
  background: none;
  border: none;
  color: #0d6efd;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;const Xi=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,de=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  padding-left: ${i=>i.$indent?"1rem":"0"};

  ${i=>i.$highlight&&`
    font-weight: 600;
    color: #212529;
    padding-top: 0.75rem;
    border-top: 1px solid #dee2e6;
  `}
`,he=p.span`
  color: #495057;
`,me=p.span`
  font-weight: 500;
  color: ${i=>i.$color||"#212529"};
`;p.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
`;p.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.75rem;
`;p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;p.div``;p.label`
  display: block;
  font-size: 0.75rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
`;p.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.875rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;

  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`;const L0=p.div`
  background: #cff4fc;
  border: 1px solid #b6effb;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 0.875rem;
  color: #055160;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin-bottom: 1rem;

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
  }
`;p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
`;const V0=p.button`
  padding: 1rem;
  background: ${i=>i.$variant==="success"?"#198754":"#0d6efd"};
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${i=>i.$variant==="success"?"#157347":"#0b5ed7"};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,ex=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,lx=p.div`
  padding: 0.25rem 0.75rem;
  background: ${i=>i.$inactive?"#f8f9fa":"#e7f1ff"};
  color: ${i=>i.$inactive?"#6c757d":"#0d6efd"};
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: ${i=>i.$inactive?"line-through":"none"};
`,ax=({onBack:i,onNavigateToCostDashboard:s})=>{const{config:d,monthlyData:o,currentMonth:y,runningGuestFees:j,getTotalRunningGuestFees:z,updateExtraShuttleCost:G,updateActualPlayingDays:E,generateMonthlyReport:A}=Tu(),[R,Y]=pt.useState(!1),[U,V]=pt.useState({playingDays:o.actualPlayingDays,extraShuttleCost:o.extraShuttleCost,excludedDates:[],includedDates:[],absentMembers:[],extraShuttleTubes:0}),[K,I]=y.split("-").map(Number),ut=new Date(K,I-1).toLocaleString("en-US",{month:"long",year:"numeric"}),ct={...o,actualPlayingDays:U.playingDays,extraShuttleCost:U.extraShuttleCost},W=Ey(d,ct),J=cm({...o,guestEntries:j}),w=z(),O=d.members.filter(gt=>!U.absentMembers.includes(gt)),B=O.length>0?W.finalAmount/O.length:0,q=d.schedule.daysOfWeek.includes("Tuesday")?Math.floor(U.playingDays*.5):0,P=d.schedule.daysOfWeek.includes("Friday")?Math.ceil(U.playingDays*.5):0,vt=gt=>{V(gt),E(gt.playingDays),G(gt.extraShuttleCost)},Ut=()=>{const gt={monthKey:y,month:o.month,year:o.year,generatedAt:new Date().toISOString(),calculation:{...W,perMember:B},guestSummary:J,playingDays:U.playingDays,members:d.members,activeMembers:O,adjustments:{excludedDates:U.excludedDates,includedDates:U.includedDates,absentMembers:U.absentMembers,extraShuttleTubes:U.extraShuttleTubes}};xy(gt),Ty(y,!0),A(),s()},Qt=U.excludedDates.length>0||U.includedDates.length>0||U.absentMembers.length>0||U.extraShuttleTubes>0||U.extraShuttleCost!==o.extraShuttleCost;return c.jsxs(kb,{children:[c.jsxs(Jb,{children:[c.jsx(Wb,{onClick:i,children:c.jsx(om,{})}),c.jsxs(Fb,{children:[c.jsx(Pb,{children:"Cost Review"}),c.jsx(Ib,{children:ut})]})]}),c.jsxs(tx,{children:[c.jsxs(X0,{children:[c.jsx(Q0,{$color:"#198754",children:c.jsx(nn,{})}),c.jsx($0,{children:bt(B)}),c.jsx(Z0,{children:"Per Member"})]}),c.jsxs(X0,{children:[c.jsx(Q0,{$color:"#0d6efd",children:c.jsx(fa,{})}),c.jsx($0,{children:U.playingDays}),c.jsx(Z0,{children:"Playing Days"})]})]}),c.jsxs(V0,{$variant:"primary",onClick:()=>Y(!0),style:{width:"100%",marginBottom:"1rem"},children:[c.jsx(Fs,{}),c.jsx("span",{children:"Adjust for This Month"})]}),Qt&&c.jsxs(L0,{style:{marginBottom:"1rem"},children:[c.jsx(Su,{}),c.jsxs("div",{children:[c.jsx("strong",{children:"Adjustments Applied:"}),U.excludedDates.length>0&&c.jsxs("div",{children:["• ",U.excludedDates.length," days excluded"]}),U.includedDates.length>0&&c.jsxs("div",{children:["• ",U.includedDates.length," days added"]}),U.absentMembers.length>0&&c.jsxs("div",{children:["• ",U.absentMembers.length," members absent"]}),U.extraShuttleTubes>0&&c.jsxs("div",{children:["• ",U.extraShuttleTubes," extra shuttle tubes"]})]})]}),c.jsxs(yu,{children:[c.jsx(pu,{children:c.jsxs(vu,{children:[c.jsx(fa,{style:{color:"#0d6efd"}}),"Court Cost"]})}),c.jsxs(Xi,{children:[c.jsxs(de,{children:[c.jsx(he,{children:"Rate"}),c.jsxs(me,{children:[bt(d.court.costPerHour),"/hour ×"," ",d.court.hoursPerDay," hours"]})]}),c.jsxs(de,{children:[c.jsx(he,{children:"Playing Days"}),c.jsxs(me,{children:[U.playingDays," days (",q,"T, ",P,"F)"]})]}),c.jsxs(de,{children:[c.jsx(he,{children:"Subtotal"}),c.jsx(me,{children:bt(d.court.costPerHour*d.court.hoursPerDay*U.playingDays)})]}),c.jsxs(de,{$indent:!0,children:[c.jsxs(he,{children:["Discount (",d.court.discountPercentage,"%)"]}),c.jsxs(me,{$color:"#dc3545",children:["-",bt(d.court.costPerHour*d.court.hoursPerDay*U.playingDays*d.court.discountPercentage/100)]})]}),c.jsxs(de,{$highlight:!0,children:[c.jsx(he,{children:"Final Court Cost"}),c.jsx(me,{children:bt(W.finalCourtFee)})]})]})]}),c.jsxs(yu,{children:[c.jsx(pu,{children:c.jsxs(vu,{children:[c.jsx(tc,{style:{color:"#198754"}}),"Shuttle Cost"]})}),c.jsxs(Xi,{children:[c.jsxs(de,{children:[c.jsx(he,{children:"Regular Tubes"}),c.jsxs(me,{children:[d.shuttle.defaultTubesPerMonth," ×"," ",bt(d.shuttle.costPerTube)]})]}),U.extraShuttleCost>0&&c.jsxs(de,{children:[c.jsx(he,{children:"Extra Cost"}),c.jsx(me,{children:bt(U.extraShuttleCost)})]}),c.jsxs(de,{$highlight:!0,children:[c.jsx(he,{children:"Final Shuttle Cost"}),c.jsx(me,{children:bt(W.finalShuttleFee)})]})]})]}),c.jsxs(yu,{children:[c.jsx(pu,{children:c.jsxs(vu,{children:[c.jsx(da,{style:{color:"#6f42c1"}}),"Guest Contributions"]})}),c.jsxs(Xi,{children:[c.jsxs(de,{children:[c.jsx(he,{children:"Current Month Guests"}),c.jsx(me,{children:bt(w)})]}),c.jsxs(de,{children:[c.jsx(he,{children:"Previous Month Reduction"}),c.jsxs(me,{$color:"#198754",children:["-",bt(W.guestFeeReduction)]})]})]}),c.jsxs(L0,{children:[c.jsx(Su,{}),c.jsxs("div",{children:["Current month's guest fees (",bt(w),") will be applied to next month's costs"]})]})]}),c.jsxs(yu,{children:[c.jsx(pu,{children:c.jsxs(vu,{children:[c.jsx(da,{style:{color:"#fd7e14"}}),"Members (",O.length," of ",d.members.length,")"]})}),c.jsx(ex,{children:d.members.map((gt,Ft)=>{const L=U.absentMembers.includes(gt);return c.jsx(lx,{$inactive:L,children:gt},Ft)})})]}),c.jsxs(yu,{children:[c.jsx(pu,{children:c.jsxs(vu,{children:[c.jsx(nn,{style:{color:"#198754"}}),"Final Summary"]})}),c.jsxs(Xi,{children:[c.jsxs(de,{children:[c.jsx(he,{children:"Total Cost"}),c.jsx(me,{children:bt(W.totalFee)})]}),c.jsxs(de,{children:[c.jsx(he,{children:"Guest Reduction"}),c.jsxs(me,{$color:"#198754",children:["-",bt(W.guestFeeReduction)]})]}),c.jsxs(de,{$highlight:!0,children:[c.jsx(he,{children:"Final Amount"}),c.jsx(me,{style:{fontSize:"1.125rem"},children:bt(W.finalAmount)})]}),c.jsxs(de,{$highlight:!0,children:[c.jsxs(he,{children:["Per Member (",O.length," active)"]}),c.jsx(me,{style:{fontSize:"1.125rem",color:"#198754"},children:bt(B)})]})]})]}),c.jsxs(V0,{$variant:"success",onClick:Ut,style:{width:"100%",marginTop:"1.5rem"},children:[c.jsx(Ws,{}),c.jsx("span",{children:"Generate Report"})]}),c.jsx(Kb,{show:R,onClose:()=>Y(!1),onApply:vt})]})},K0=p.div`
  padding: 1rem;
  padding-bottom: 5rem; // Space for bottom navigation
  max-width: 768px;
  margin: 0 auto;
`,k0=p.div`
  margin-bottom: 1.5rem;
`,J0=p.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
  margin-bottom: 0.25rem;
`,W0=p.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,nx=p.span`
  background: #198754;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 1rem;
  font-weight: 500;
`,ux=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 3rem 1.5rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
`,ix=p.div`
  color: #6c757d;
  margin-bottom: 1rem;

  svg {
    width: 48px;
    height: 48px;
  }
`,cx=p.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 0.5rem;
`,rx=p.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0;
`,sx=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`,F0=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  text-align: center;
`,P0=p.div`
  color: ${i=>i.$color};
  margin-bottom: 0.5rem;

  svg {
    width: 24px;
    height: 24px;
  }
`,I0=p.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
  margin-bottom: 0.25rem;
`,tm=p.div`
  font-size: 0.75rem;
  color: #6c757d;
`,Qi=p.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`,$i=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,Zi=p.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`,em=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Ge=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  padding-left: ${i=>i.$indent?"1rem":"0"};

  ${i=>i.$highlight&&`
    font-weight: 600;
    color: #212529;
    padding-top: 0.75rem;
    border-top: 1px solid #dee2e6;
  `}
`,we=p.span`
  color: #495057;
`,qe=p.span`
  font-weight: 500;
  color: ${i=>i.$color||"#212529"};
`,ox=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`,fx=p.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
`,dx=p.div`
  font-size: 0.875rem;
  color: #495057;
  margin-bottom: 0.25rem;
`,hx=p.div`
  font-size: 1.125rem;
  font-weight: bold;
  color: #198754;
`,mx=p.table`
  width: 100%;
  font-size: 0.875rem;
`,gx=p.thead`
  background: #f8f9fa;
`,lm=p.tr`
  border-bottom: 1px solid #dee2e6;
`,Bs=p.th`
  text-align: left;
  padding: 0.75rem;
  font-weight: 600;
  color: #495057;
`,en=p.td`
  padding: 0.75rem;
  color: #212529;
`,yx=p.tr`
  background: #f8f9fa;
  font-weight: 600;
`,am=p.div`
  background: #cff4fc;
  border: 1px solid #b6effb;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 0.875rem;
  color: #055160;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin-top: 1rem;

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
  }
`,nm=p.span`
  display: inline-block;
  background: #ffc107;
  color: #664d03;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
`,px=p.div`
  text-align: center;
  color: #6c757d;
  font-size: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #dee2e6;
`,vx=()=>{const i=Sy();if(!i)return c.jsxs(K0,{children:[c.jsxs(k0,{children:[c.jsx(J0,{children:"Cost Dashboard"}),c.jsx(W0,{children:"View generated reports"})]}),c.jsxs(ux,{children:[c.jsx(ix,{children:c.jsx(Ws,{})}),c.jsx(cx,{children:"No Report Available"}),c.jsx(rx,{children:"Generate a report from the Dashboard to view cost details here"})]})]});const s=`${i.month} ${i.year}`,o=new Date(i.generatedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),y=i.adjustments.excludedDates.length>0||i.adjustments.includedDates.length>0||i.adjustments.absentMembers.length>0||i.adjustments.extraShuttleTubes>0;return c.jsxs(K0,{children:[c.jsxs(k0,{children:[c.jsx(J0,{children:"Cost Dashboard"}),c.jsxs(W0,{children:[s," Report",c.jsx(nx,{children:"Generated"})]})]}),c.jsxs(sx,{children:[c.jsxs(F0,{children:[c.jsx(P0,{$color:"#198754",children:c.jsx(nn,{})}),c.jsx(I0,{children:bt(i.calculation.perMember)}),c.jsx(tm,{children:"Per Member"})]}),c.jsxs(F0,{children:[c.jsx(P0,{$color:"#0d6efd",children:c.jsx(fa,{})}),c.jsx(I0,{children:i.playingDays}),c.jsx(tm,{children:"Playing Days"})]})]}),y&&c.jsxs(am,{style:{marginBottom:"1rem"},children:[c.jsx(Gy,{}),c.jsxs("div",{children:[c.jsx("strong",{children:"Adjustments Applied:"}),i.adjustments.excludedDates.length>0&&c.jsxs("div",{children:["• ",i.adjustments.excludedDates.length," days excluded"]}),i.adjustments.includedDates.length>0&&c.jsxs("div",{children:["• ",i.adjustments.includedDates.length," days added"]}),i.adjustments.absentMembers.length>0&&c.jsxs("div",{children:["• ",i.adjustments.absentMembers.join(", ")," marked absent"]}),i.adjustments.extraShuttleTubes>0&&c.jsxs("div",{children:["• ",i.adjustments.extraShuttleTubes," extra shuttle tubes"]})]})]}),c.jsxs(Qi,{children:[c.jsxs($i,{children:[c.jsx(nn,{style:{color:"#198754"}}),c.jsx(Zi,{children:"Cost Breakdown"})]}),c.jsxs(em,{children:[c.jsxs(Ge,{children:[c.jsx(we,{children:"Court Fee"}),c.jsx(qe,{children:bt(i.calculation.courtFee)})]}),c.jsxs(Ge,{$indent:!0,children:[c.jsx(we,{children:"Discount Applied"}),c.jsxs(qe,{$color:"#dc3545",children:["-",bt(i.calculation.courtDiscount)]})]}),c.jsxs(Ge,{children:[c.jsx(we,{children:"Final Court Fee"}),c.jsx(qe,{children:bt(i.calculation.finalCourtFee)})]}),c.jsxs(Ge,{children:[c.jsx(we,{children:"Shuttle Fee"}),c.jsx(qe,{children:bt(i.calculation.shuttleFee)})]}),i.calculation.extraShuttleCost>0&&c.jsxs(Ge,{$indent:!0,children:[c.jsx(we,{children:"Extra Shuttle Cost"}),c.jsx(qe,{children:bt(i.calculation.extraShuttleCost)})]}),c.jsxs(Ge,{children:[c.jsx(we,{children:"Final Shuttle Fee"}),c.jsx(qe,{children:bt(i.calculation.finalShuttleFee)})]}),c.jsxs(Ge,{$highlight:!0,children:[c.jsx(we,{children:"Total Fee"}),c.jsx(qe,{children:bt(i.calculation.totalFee)})]}),c.jsxs(Ge,{children:[c.jsx(we,{children:"Guest Fee Reduction"}),c.jsxs(qe,{$color:"#198754",children:["-",bt(i.calculation.guestFeeReduction)]})]}),c.jsxs(Ge,{$highlight:!0,children:[c.jsx(we,{children:"Final Amount"}),c.jsx(qe,{style:{fontSize:"1.25rem"},children:bt(i.calculation.finalAmount)})]})]})]}),i.guestSummary.length>0&&c.jsxs(Qi,{children:[c.jsxs($i,{children:[c.jsx(da,{style:{color:"#0d6efd"}}),c.jsx(Zi,{children:"Guest Summary"})]}),c.jsxs(mx,{children:[c.jsx(gx,{children:c.jsxs(lm,{children:[c.jsx(Bs,{children:"Name"}),c.jsx(Bs,{style:{textAlign:"center"},children:"Sessions"}),c.jsx(Bs,{style:{textAlign:"right"},children:"Total"})]})}),c.jsxs("tbody",{children:[i.guestSummary.map((j,z)=>c.jsxs(lm,{children:[c.jsx(en,{children:j.name}),c.jsx(en,{style:{textAlign:"center"},children:j.sessions}),c.jsx(en,{style:{textAlign:"right"},children:bt(j.totalAmount)})]},z)),c.jsxs(yx,{children:[c.jsx(en,{children:"Total"}),c.jsx(en,{style:{textAlign:"center"},children:i.guestSummary.reduce((j,z)=>j+z.sessions,0)}),c.jsx(en,{style:{textAlign:"right"},children:bt(i.guestSummary.reduce((j,z)=>j+z.totalAmount,0))})]})]})]}),c.jsxs(am,{children:[c.jsx(Su,{}),c.jsx("div",{children:"These guest fees have been applied to the next month's costs"})]})]}),c.jsxs(Qi,{children:[c.jsxs($i,{children:[c.jsx(da,{style:{color:"#6f42c1"}}),c.jsxs(Zi,{children:["Cost per Member",i.adjustments.absentMembers.length>0&&c.jsxs(nm,{children:[i.activeMembers.length," of ",i.members.length," active"]})]})]}),c.jsx(ox,{children:i.members.map((j,z)=>{const G=i.adjustments.absentMembers.includes(j);return c.jsxs(fx,{style:{opacity:G?.5:1},children:[c.jsxs(dx,{children:[j,G&&" (Absent)"]}),c.jsx(hx,{children:G?"-":bt(i.calculation.perMember)})]},z)})})]}),c.jsxs(Qi,{children:[c.jsxs($i,{children:[c.jsx(tc,{style:{color:"#fd7e14"}}),c.jsx(Zi,{children:"Summary"})]}),c.jsxs(em,{children:[c.jsxs(Ge,{children:[c.jsx(we,{children:"Playing Days"}),c.jsxs(qe,{children:[i.playingDays,y&&c.jsx(nm,{children:"adjusted"})]})]}),c.jsxs(Ge,{children:[c.jsx(we,{children:"Active Members"}),c.jsxs(qe,{children:[i.activeMembers.length," of ",i.members.length]})]}),c.jsxs(Ge,{children:[c.jsx(we,{children:"Cost per Day"}),c.jsx(qe,{children:bt(i.calculation.costPerDay)})]})]})]}),c.jsxs(px,{children:["Generated on ",o]})]})};function bx(){const[i,s]=pt.useState("dashboard"),d=()=>{switch(i){case"dashboard":return c.jsx(D0,{onNavigate:s});case"settings":return c.jsx(tb,{});case"guests":return c.jsx(zb,{onBack:()=>s("dashboard")});case"cost-review":return c.jsx(ax,{onBack:()=>s("dashboard"),onNavigateToCostDashboard:()=>s("costs")});case"costs":return c.jsx(vx,{});default:return c.jsx(D0,{onNavigate:s})}},o=["dashboard","costs","settings"].includes(i);return c.jsx(My,{children:c.jsxs("div",{className:"app",children:[d(),o&&c.jsx(fv,{activeTab:i,onTabChange:s})]})})}hy.createRoot(document.getElementById("root")).render(c.jsx(an.StrictMode,{children:c.jsx(bx,{})}));
