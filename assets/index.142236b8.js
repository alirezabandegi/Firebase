function OR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function DR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),MR=Symbol.for("react.portal"),$R=Symbol.for("react.fragment"),LR=Symbol.for("react.strict_mode"),FR=Symbol.for("react.profiler"),UR=Symbol.for("react.provider"),VR=Symbol.for("react.context"),zR=Symbol.for("react.forward_ref"),BR=Symbol.for("react.suspense"),jR=Symbol.for("react.memo"),WR=Symbol.for("react.lazy"),u0=Symbol.iterator;function HR(t){return t===null||typeof t!="object"?null:(t=u0&&t[u0]||t["@@iterator"],typeof t=="function"?t:null)}var fE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pE=Object.assign,mE={};function wo(t,e,n){this.props=t,this.context=e,this.refs=mE,this.updater=n||fE}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gE(){}gE.prototype=wo.prototype;function Qm(t,e,n){this.props=t,this.context=e,this.refs=mE,this.updater=n||fE}var Ym=Qm.prototype=new gE;Ym.constructor=Qm;pE(Ym,wo.prototype);Ym.isPureReactComponent=!0;var c0=Array.isArray,yE=Object.prototype.hasOwnProperty,Xm={current:null},vE={key:!0,ref:!0,__self:!0,__source:!0};function _E(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yE.call(e,r)&&!vE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cl,type:t,key:s,ref:o,props:i,_owner:Xm.current}}function qR(t,e){return{$$typeof:Cl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cl}function KR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var h0=/\/+/g;function Kd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KR(""+t.key):e.toString(36)}function ju(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cl:case MR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Kd(o,0):r,c0(i)?(n="",t!=null&&(n=t.replace(h0,"$&/")+"/"),ju(i,e,n,"",function(u){return u})):i!=null&&(Jm(i)&&(i=qR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(h0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",c0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Kd(s,a);o+=ju(s,e,n,l,i)}else if(l=HR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Kd(s,a++),o+=ju(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cu(t,e,n){if(t==null)return t;var r=[],i=0;return ju(t,r,"","",function(s){return e.call(n,s,i++)}),r}function GR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},Wu={transition:null},QR={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Wu,ReactCurrentOwner:Xm};ee.Children={map:cu,forEach:function(t,e,n){cu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cu(t,function(){e++}),e},toArray:function(t){return cu(t,function(e){return e})||[]},only:function(t){if(!Jm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=wo;ee.Fragment=$R;ee.Profiler=FR;ee.PureComponent=Qm;ee.StrictMode=LR;ee.Suspense=BR;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QR;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)yE.call(e,l)&&!vE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Cl,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:VR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:UR,_context:t},t.Consumer=t};ee.createElement=_E;ee.createFactory=function(t){var e=_E.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:zR,render:t}};ee.isValidElement=Jm;ee.lazy=function(t){return{$$typeof:WR,_payload:{_status:-1,_result:t},_init:GR}};ee.memo=function(t,e){return{$$typeof:jR,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Wu.transition;Wu.transition={};try{t()}finally{Wu.transition=e}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(t,e){return Rt.current.useCallback(t,e)};ee.useContext=function(t){return Rt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return Rt.current.useEffect(t,e)};ee.useId=function(){return Rt.current.useId()};ee.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Rt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};ee.useRef=function(t){return Rt.current.useRef(t)};ee.useState=function(t){return Rt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return Rt.current.useTransition()};ee.version="18.2.0";(function(t){t.exports=ee})(b);const bh=DR(b.exports),d0=OR({__proto__:null,default:bh},[b.exports]);var np={},wE={exports:{}},tn={},EE={exports:{}},SE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,z){var q=A.length;A.push(z);e:for(;0<q;){var Ce=q-1>>>1,Ae=A[Ce];if(0<i(Ae,z))A[Ce]=z,A[q]=Ae,q=Ce;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var z=A[0],q=A.pop();if(q!==z){A[0]=q;e:for(var Ce=0,Ae=A.length,os=Ae>>>1;Ce<os;){var Et=2*(Ce+1)-1,_r=A[Et],yn=Et+1,as=A[yn];if(0>i(_r,q))yn<Ae&&0>i(as,_r)?(A[Ce]=as,A[yn]=q,Ce=yn):(A[Ce]=_r,A[Et]=q,Ce=Et);else if(yn<Ae&&0>i(as,q))A[Ce]=as,A[yn]=q,Ce=yn;else break e}}return z}function i(A,z){var q=A.sortIndex-z.sortIndex;return q!==0?q:A.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=A)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function _(A){if(y=!1,v(A),!p)if(n(l)!==null)p=!0,qt(E);else{var z=n(u);z!==null&&Wn(_,z.startTime-A)}}function E(A,z){p=!1,y&&(y=!1,g(R),R=-1),f=!0;var q=d;try{for(v(z),h=n(l);h!==null&&(!(h.expirationTime>z)||A&&!ie());){var Ce=h.callback;if(typeof Ce=="function"){h.callback=null,d=h.priorityLevel;var Ae=Ce(h.expirationTime<=z);z=t.unstable_now(),typeof Ae=="function"?h.callback=Ae:h===n(l)&&r(l),v(z)}else r(l);h=n(l)}if(h!==null)var os=!0;else{var Et=n(u);Et!==null&&Wn(_,Et.startTime-z),os=!1}return os}finally{h=null,d=q,f=!1}}var S=!1,C=null,R=-1,G=5,N=-1;function ie(){return!(t.unstable_now()-N<G)}function Se(){if(C!==null){var A=t.unstable_now();N=A;var z=!0;try{z=C(!0,A)}finally{z?Fe():(S=!1,C=null)}}else S=!1}var Fe;if(typeof m=="function")Fe=function(){m(Se)};else if(typeof MessageChannel<"u"){var Wt=new MessageChannel,Ht=Wt.port2;Wt.port1.onmessage=Se,Fe=function(){Ht.postMessage(null)}}else Fe=function(){w(Se,0)};function qt(A){C=A,S||(S=!0,Fe())}function Wn(A,z){R=w(function(){A(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){p||f||(p=!0,qt(E))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var q=d;d=z;try{return A()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,z){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var q=d;d=A;try{return z()}finally{d=q}},t.unstable_scheduleCallback=function(A,z,q){var Ce=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Ce+q:Ce):q=Ce,A){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=q+Ae,A={id:c++,callback:z,priorityLevel:A,startTime:q,expirationTime:Ae,sortIndex:-1},q>Ce?(A.sortIndex=q,e(u,A),n(l)===null&&A===n(u)&&(y?(g(R),R=-1):y=!0,Wn(_,q-Ce))):(A.sortIndex=Ae,e(l,A),p||f||(p=!0,qt(E))),A},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(A){var z=d;return function(){var q=d;d=z;try{return A.apply(this,arguments)}finally{d=q}}}})(SE);(function(t){t.exports=SE})(EE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CE=b.exports,Jt=EE.exports;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var TE=new Set,Na={};function Yi(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Na[t]=e,t=0;t<e.length;t++)TE.add(e[t])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rp=Object.prototype.hasOwnProperty,YR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f0={},p0={};function XR(t){return rp.call(p0,t)?!0:rp.call(f0,t)?!1:YR.test(t)?p0[t]=!0:(f0[t]=!0,!1)}function JR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ZR(t,e,n,r){if(e===null||typeof e>"u"||JR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zm=/[\-:]([a-z])/g;function eg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zm,eg);ut[e]=new Nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zm,eg);ut[e]=new Nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zm,eg);ut[e]=new Nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Nt(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function tg(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ZR(e,n,i,r)&&(n=null),r||i===null?XR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mr=CE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hu=Symbol.for("react.element"),gs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),ng=Symbol.for("react.strict_mode"),ip=Symbol.for("react.profiler"),IE=Symbol.for("react.provider"),kE=Symbol.for("react.context"),rg=Symbol.for("react.forward_ref"),sp=Symbol.for("react.suspense"),op=Symbol.for("react.suspense_list"),ig=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),bE=Symbol.for("react.offscreen"),m0=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=m0&&t[m0]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Gd;function ra(t){if(Gd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gd=e&&e[1]||""}return`
`+Gd+t}var Qd=!1;function Yd(t,e){if(!t||Qd)return"";Qd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ra(t):""}function eN(t){switch(t.tag){case 5:return ra(t.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return t=Yd(t.type,!1),t;case 11:return t=Yd(t.type.render,!1),t;case 1:return t=Yd(t.type,!0),t;default:return""}}function ap(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case gs:return"Portal";case ip:return"Profiler";case ng:return"StrictMode";case sp:return"Suspense";case op:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kE:return(t.displayName||"Context")+".Consumer";case IE:return(t._context.displayName||"Context")+".Provider";case rg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ig:return e=t.displayName||null,e!==null?e:ap(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return ap(t(e))}catch{}}return null}function tN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ap(e);case 8:return e===ng?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nN(t){var e=xE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function du(t){t._valueTracker||(t._valueTracker=nN(t))}function RE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lp(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function g0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function NE(t,e){e=e.checked,e!=null&&tg(t,"checked",e,!1)}function up(t,e){NE(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cp(t,e.type,n):e.hasOwnProperty("defaultValue")&&cp(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function y0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cp(t,e,n){(e!=="number"||yc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function Ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function v0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(ia(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function AE(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function PE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?PE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fu,OE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fu=fu||document.createElement("div"),fu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rN=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){rN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function DE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function ME(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=DE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var iN=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fp(t,e){if(e){if(iN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function pp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mp=null;function sg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gp=null,Os=null,Ds=null;function w0(t){if(t=kl(t)){if(typeof gp!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Ph(e),gp(t.stateNode,t.type,e))}}function $E(t){Os?Ds?Ds.push(t):Ds=[t]:Os=t}function LE(){if(Os){var t=Os,e=Ds;if(Ds=Os=null,w0(t),e)for(t=0;t<e.length;t++)w0(e[t])}}function FE(t,e){return t(e)}function UE(){}var Xd=!1;function VE(t,e,n){if(Xd)return t(e,n);Xd=!0;try{return FE(t,e,n)}finally{Xd=!1,(Os!==null||Ds!==null)&&(UE(),LE())}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var r=Ph(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var yp=!1;if(or)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){yp=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{yp=!1}function sN(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ha=!1,vc=null,_c=!1,vp=null,oN={onError:function(t){ha=!0,vc=t}};function aN(t,e,n,r,i,s,o,a,l){ha=!1,vc=null,sN.apply(oN,arguments)}function lN(t,e,n,r,i,s,o,a,l){if(aN.apply(this,arguments),ha){if(ha){var u=vc;ha=!1,vc=null}else throw Error(I(198));_c||(_c=!0,vp=u)}}function Xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function E0(t){if(Xi(t)!==t)throw Error(I(188))}function uN(t){var e=t.alternate;if(!e){if(e=Xi(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return E0(i),t;if(s===r)return E0(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function BE(t){return t=uN(t),t!==null?jE(t):null}function jE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jE(t);if(e!==null)return e;t=t.sibling}return null}var WE=Jt.unstable_scheduleCallback,S0=Jt.unstable_cancelCallback,cN=Jt.unstable_shouldYield,hN=Jt.unstable_requestPaint,Ne=Jt.unstable_now,dN=Jt.unstable_getCurrentPriorityLevel,og=Jt.unstable_ImmediatePriority,HE=Jt.unstable_UserBlockingPriority,wc=Jt.unstable_NormalPriority,fN=Jt.unstable_LowPriority,qE=Jt.unstable_IdlePriority,xh=null,Mn=null;function pN(t){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(xh,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:yN,mN=Math.log,gN=Math.LN2;function yN(t){return t>>>=0,t===0?32:31-(mN(t)/gN|0)|0}var pu=64,mu=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=sa(a):(s&=o,s!==0&&(r=sa(s)))}else o=n&~i,o!==0?r=sa(o):s!==0&&(r=sa(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kn(e),i=1<<n,r|=t[n],e&=~i;return r}function vN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _N(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=vN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _p(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function KE(){var t=pu;return pu<<=1,(pu&4194240)===0&&(pu=64),t}function Jd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function wN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-kn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ag(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function GE(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var QE,lg,YE,XE,JE,wp=!1,gu=[],Pr=null,Or=null,Dr=null,Oa=new Map,Da=new Map,Ir=[],EN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function C0(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=kl(e),e!==null&&lg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function SN(t,e,n,r,i){switch(e){case"focusin":return Pr=jo(Pr,t,e,n,r,i),!0;case"dragenter":return Or=jo(Or,t,e,n,r,i),!0;case"mouseover":return Dr=jo(Dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oa.set(s,jo(Oa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Da.set(s,jo(Da.get(s)||null,t,e,n,r,i)),!0}return!1}function ZE(t){var e=fi(t.target);if(e!==null){var n=Xi(e);if(n!==null){if(e=n.tag,e===13){if(e=zE(n),e!==null){t.blockedOn=e,JE(t.priority,function(){YE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ep(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mp=r,n.target.dispatchEvent(r),mp=null}else return e=kl(n),e!==null&&lg(e),t.blockedOn=n,!1;e.shift()}return!0}function T0(t,e,n){Hu(t)&&n.delete(e)}function CN(){wp=!1,Pr!==null&&Hu(Pr)&&(Pr=null),Or!==null&&Hu(Or)&&(Or=null),Dr!==null&&Hu(Dr)&&(Dr=null),Oa.forEach(T0),Da.forEach(T0)}function Wo(t,e){t.blockedOn===e&&(t.blockedOn=null,wp||(wp=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,CN)))}function Ma(t){function e(i){return Wo(i,t)}if(0<gu.length){Wo(gu[0],t);for(var n=1;n<gu.length;n++){var r=gu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pr!==null&&Wo(Pr,t),Or!==null&&Wo(Or,t),Dr!==null&&Wo(Dr,t),Oa.forEach(e),Da.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)ZE(n),n.blockedOn===null&&Ir.shift()}var Ms=mr.ReactCurrentBatchConfig,Sc=!0;function TN(t,e,n,r){var i=ue,s=Ms.transition;Ms.transition=null;try{ue=1,ug(t,e,n,r)}finally{ue=i,Ms.transition=s}}function IN(t,e,n,r){var i=ue,s=Ms.transition;Ms.transition=null;try{ue=4,ug(t,e,n,r)}finally{ue=i,Ms.transition=s}}function ug(t,e,n,r){if(Sc){var i=Ep(t,e,n,r);if(i===null)uf(t,e,r,Cc,n),C0(t,r);else if(SN(i,t,e,n,r))r.stopPropagation();else if(C0(t,r),e&4&&-1<EN.indexOf(t)){for(;i!==null;){var s=kl(i);if(s!==null&&QE(s),s=Ep(t,e,n,r),s===null&&uf(t,e,r,Cc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uf(t,e,r,null,n)}}var Cc=null;function Ep(t,e,n,r){if(Cc=null,t=sg(r),t=fi(t),t!==null)if(e=Xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cc=t,null}function eS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dN()){case og:return 1;case HE:return 4;case wc:case fN:return 16;case qE:return 536870912;default:return 16}default:return 16}}var Nr=null,cg=null,qu=null;function tS(){if(qu)return qu;var t,e=cg,n=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return qu=i.slice(t,1<r?1-r:void 0)}function Ku(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yu(){return!0}function I0(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yu:I0,this.isPropagationStopped=I0,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yu)},persist:function(){},isPersistent:yu}),e}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hg=nn(Eo),Il=ke({},Eo,{view:0,detail:0}),kN=nn(Il),Zd,ef,Ho,Rh=ke({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(Zd=t.screenX-Ho.screenX,ef=t.screenY-Ho.screenY):ef=Zd=0,Ho=t),Zd)},movementY:function(t){return"movementY"in t?t.movementY:ef}}),k0=nn(Rh),bN=ke({},Rh,{dataTransfer:0}),xN=nn(bN),RN=ke({},Il,{relatedTarget:0}),tf=nn(RN),NN=ke({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),AN=nn(NN),PN=ke({},Eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ON=nn(PN),DN=ke({},Eo,{data:0}),b0=nn(DN),MN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$N={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LN[t])?!!e[t]:!1}function dg(){return FN}var UN=ke({},Il,{key:function(t){if(t.key){var e=MN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ku(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$N[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dg,charCode:function(t){return t.type==="keypress"?Ku(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ku(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VN=nn(UN),zN=ke({},Rh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x0=nn(zN),BN=ke({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dg}),jN=nn(BN),WN=ke({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),HN=nn(WN),qN=ke({},Rh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KN=nn(qN),GN=[9,13,27,32],fg=or&&"CompositionEvent"in window,da=null;or&&"documentMode"in document&&(da=document.documentMode);var QN=or&&"TextEvent"in window&&!da,nS=or&&(!fg||da&&8<da&&11>=da),R0=String.fromCharCode(32),N0=!1;function rS(t,e){switch(t){case"keyup":return GN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function YN(t,e){switch(t){case"compositionend":return iS(e);case"keypress":return e.which!==32?null:(N0=!0,R0);case"textInput":return t=e.data,t===R0&&N0?null:t;default:return null}}function XN(t,e){if(vs)return t==="compositionend"||!fg&&rS(t,e)?(t=tS(),qu=cg=Nr=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nS&&e.locale!=="ko"?null:e.data;default:return null}}var JN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function A0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!JN[t.type]:e==="textarea"}function sS(t,e,n,r){$E(r),e=Tc(e,"onChange"),0<e.length&&(n=new hg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fa=null,$a=null;function ZN(t){gS(t,0)}function Nh(t){var e=Es(t);if(RE(e))return t}function eA(t,e){if(t==="change")return e}var oS=!1;if(or){var nf;if(or){var rf="oninput"in document;if(!rf){var P0=document.createElement("div");P0.setAttribute("oninput","return;"),rf=typeof P0.oninput=="function"}nf=rf}else nf=!1;oS=nf&&(!document.documentMode||9<document.documentMode)}function O0(){fa&&(fa.detachEvent("onpropertychange",aS),$a=fa=null)}function aS(t){if(t.propertyName==="value"&&Nh($a)){var e=[];sS(e,$a,t,sg(t)),VE(ZN,e)}}function tA(t,e,n){t==="focusin"?(O0(),fa=e,$a=n,fa.attachEvent("onpropertychange",aS)):t==="focusout"&&O0()}function nA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nh($a)}function rA(t,e){if(t==="click")return Nh(e)}function iA(t,e){if(t==="input"||t==="change")return Nh(e)}function sA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:sA;function La(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rp.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function D0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function M0(t,e){var n=D0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=D0(n)}}function lS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uS(){for(var t=window,e=yc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yc(t.document)}return e}function pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oA(t){var e=uS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lS(n.ownerDocument.documentElement,n)){if(r!==null&&pg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=M0(n,s);var o=M0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aA=or&&"documentMode"in document&&11>=document.documentMode,_s=null,Sp=null,pa=null,Cp=!1;function $0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cp||_s==null||_s!==yc(r)||(r=_s,"selectionStart"in r&&pg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pa&&La(pa,r)||(pa=r,r=Tc(Sp,"onSelect"),0<r.length&&(e=new hg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function vu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:vu("Animation","AnimationEnd"),animationiteration:vu("Animation","AnimationIteration"),animationstart:vu("Animation","AnimationStart"),transitionend:vu("Transition","TransitionEnd")},sf={},cS={};or&&(cS=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Ah(t){if(sf[t])return sf[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cS)return sf[t]=e[n];return t}var hS=Ah("animationend"),dS=Ah("animationiteration"),fS=Ah("animationstart"),pS=Ah("transitionend"),mS=new Map,L0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){mS.set(t,e),Yi(e,[t])}for(var of=0;of<L0.length;of++){var af=L0[of],lA=af.toLowerCase(),uA=af[0].toUpperCase()+af.slice(1);Xr(lA,"on"+uA)}Xr(hS,"onAnimationEnd");Xr(dS,"onAnimationIteration");Xr(fS,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(pS,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cA=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function F0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lN(r,e,void 0,t),t.currentTarget=null}function gS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;F0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;F0(i,a,u),s=l}}}if(_c)throw t=vp,_c=!1,vp=null,t}function me(t,e){var n=e[xp];n===void 0&&(n=e[xp]=new Set);var r=t+"__bubble";n.has(r)||(yS(e,t,2,!1),n.add(r))}function lf(t,e,n){var r=0;e&&(r|=4),yS(n,t,r,e)}var _u="_reactListening"+Math.random().toString(36).slice(2);function Fa(t){if(!t[_u]){t[_u]=!0,TE.forEach(function(n){n!=="selectionchange"&&(cA.has(n)||lf(n,!1,t),lf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_u]||(e[_u]=!0,lf("selectionchange",!1,e))}}function yS(t,e,n,r){switch(eS(e)){case 1:var i=TN;break;case 4:i=IN;break;default:i=ug}n=i.bind(null,e,n,t),i=void 0,!yp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uf(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}VE(function(){var u=s,c=sg(n),h=[];e:{var d=mS.get(t);if(d!==void 0){var f=hg,p=t;switch(t){case"keypress":if(Ku(n)===0)break e;case"keydown":case"keyup":f=VN;break;case"focusin":p="focus",f=tf;break;case"focusout":p="blur",f=tf;break;case"beforeblur":case"afterblur":f=tf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=k0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=xN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=jN;break;case hS:case dS:case fS:f=AN;break;case pS:f=HN;break;case"scroll":f=kN;break;case"wheel":f=KN;break;case"copy":case"cut":case"paste":f=ON;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=x0}var y=(e&4)!==0,w=!y&&t==="scroll",g=y?d!==null?d+"Capture":null:d;y=[];for(var m=u,v;m!==null;){v=m;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,g!==null&&(_=Pa(m,g),_!=null&&y.push(Ua(m,_,v)))),w)break;m=m.return}0<y.length&&(d=new f(d,p,null,n,c),h.push({event:d,listeners:y}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==mp&&(p=n.relatedTarget||n.fromElement)&&(fi(p)||p[ar]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=u,p=p?fi(p):null,p!==null&&(w=Xi(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(f=null,p=u),f!==p)){if(y=k0,_="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=x0,_="onPointerLeave",g="onPointerEnter",m="pointer"),w=f==null?d:Es(f),v=p==null?d:Es(p),d=new y(_,m+"leave",f,n,c),d.target=w,d.relatedTarget=v,_=null,fi(c)===u&&(y=new y(g,m+"enter",p,n,c),y.target=v,y.relatedTarget=w,_=y),w=_,f&&p)t:{for(y=f,g=p,m=0,v=y;v;v=ls(v))m++;for(v=0,_=g;_;_=ls(_))v++;for(;0<m-v;)y=ls(y),m--;for(;0<v-m;)g=ls(g),v--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=ls(y),g=ls(g)}y=null}else y=null;f!==null&&U0(h,d,f,y,!1),p!==null&&w!==null&&U0(h,w,p,y,!0)}}e:{if(d=u?Es(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var E=eA;else if(A0(d))if(oS)E=iA;else{E=nA;var S=tA}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=rA);if(E&&(E=E(t,u))){sS(h,E,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&cp(d,"number",d.value)}switch(S=u?Es(u):window,t){case"focusin":(A0(S)||S.contentEditable==="true")&&(_s=S,Sp=u,pa=null);break;case"focusout":pa=Sp=_s=null;break;case"mousedown":Cp=!0;break;case"contextmenu":case"mouseup":case"dragend":Cp=!1,$0(h,n,c);break;case"selectionchange":if(aA)break;case"keydown":case"keyup":$0(h,n,c)}var C;if(fg)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else vs?rS(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(nS&&n.locale!=="ko"&&(vs||R!=="onCompositionStart"?R==="onCompositionEnd"&&vs&&(C=tS()):(Nr=c,cg="value"in Nr?Nr.value:Nr.textContent,vs=!0)),S=Tc(u,R),0<S.length&&(R=new b0(R,t,null,n,c),h.push({event:R,listeners:S}),C?R.data=C:(C=iS(n),C!==null&&(R.data=C)))),(C=QN?YN(t,n):XN(t,n))&&(u=Tc(u,"onBeforeInput"),0<u.length&&(c=new b0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=C))}gS(h,e)})}function Ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Pa(t,n),s!=null&&r.unshift(Ua(t,s,i)),s=Pa(t,e),s!=null&&r.push(Ua(t,s,i))),t=t.return}return r}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function U0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Pa(n,s),l!=null&&o.unshift(Ua(n,l,a))):i||(l=Pa(n,s),l!=null&&o.push(Ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hA=/\r\n?/g,dA=/\u0000|\uFFFD/g;function V0(t){return(typeof t=="string"?t:""+t).replace(hA,`
`).replace(dA,"")}function wu(t,e,n){if(e=V0(e),V0(t)!==e&&n)throw Error(I(425))}function Ic(){}var Tp=null,Ip=null;function kp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bp=typeof setTimeout=="function"?setTimeout:void 0,fA=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,pA=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(t){return z0.resolve(null).then(t).catch(mA)}:bp;function mA(t){setTimeout(function(){throw t})}function cf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ma(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ma(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function B0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),Dn="__reactFiber$"+So,Va="__reactProps$"+So,ar="__reactContainer$"+So,xp="__reactEvents$"+So,gA="__reactListeners$"+So,yA="__reactHandles$"+So;function fi(t){var e=t[Dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ar]||n[Dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=B0(t);t!==null;){if(n=t[Dn])return n;t=B0(t)}return e}t=n,n=t.parentNode}return null}function kl(t){return t=t[Dn]||t[ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Ph(t){return t[Va]||null}var Rp=[],Ss=-1;function Jr(t){return{current:t}}function ye(t){0>Ss||(t.current=Rp[Ss],Rp[Ss]=null,Ss--)}function fe(t,e){Ss++,Rp[Ss]=t.current,t.current=e}var Wr={},wt=Jr(Wr),Ut=Jr(!1),Ni=Wr;function Qs(t,e){var n=t.type.contextTypes;if(!n)return Wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function kc(){ye(Ut),ye(wt)}function j0(t,e,n){if(wt.current!==Wr)throw Error(I(168));fe(wt,e),fe(Ut,n)}function vS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,tN(t)||"Unknown",i));return ke({},n,r)}function bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wr,Ni=wt.current,fe(wt,t),fe(Ut,Ut.current),!0}function W0(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=vS(t,e,Ni),r.__reactInternalMemoizedMergedChildContext=t,ye(Ut),ye(wt),fe(wt,t)):ye(Ut),fe(Ut,n)}var Kn=null,Oh=!1,hf=!1;function _S(t){Kn===null?Kn=[t]:Kn.push(t)}function vA(t){Oh=!0,_S(t)}function Zr(){if(!hf&&Kn!==null){hf=!0;var t=0,e=ue;try{var n=Kn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kn=null,Oh=!1}catch(i){throw Kn!==null&&(Kn=Kn.slice(t+1)),WE(og,Zr),i}finally{ue=e,hf=!1}}return null}var Cs=[],Ts=0,xc=null,Rc=0,an=[],ln=0,Ai=null,Qn=1,Yn="";function ai(t,e){Cs[Ts++]=Rc,Cs[Ts++]=xc,xc=t,Rc=e}function wS(t,e,n){an[ln++]=Qn,an[ln++]=Yn,an[ln++]=Ai,Ai=t;var r=Qn;t=Yn;var i=32-kn(r)-1;r&=~(1<<i),n+=1;var s=32-kn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qn=1<<32-kn(e)+i|n<<i|r,Yn=s+t}else Qn=1<<s|n<<i|r,Yn=t}function mg(t){t.return!==null&&(ai(t,1),wS(t,1,0))}function gg(t){for(;t===xc;)xc=Cs[--Ts],Cs[Ts]=null,Rc=Cs[--Ts],Cs[Ts]=null;for(;t===Ai;)Ai=an[--ln],an[ln]=null,Yn=an[--ln],an[ln]=null,Qn=an[--ln],an[ln]=null}var Qt=null,Gt=null,_e=!1,En=null;function ES(t,e){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function H0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qt=t,Gt=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qt=t,Gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ai!==null?{id:Qn,overflow:Yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qt=t,Gt=null,!0):!1;default:return!1}}function Np(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ap(t){if(_e){var e=Gt;if(e){var n=e;if(!H0(t,e)){if(Np(t))throw Error(I(418));e=Mr(n.nextSibling);var r=Qt;e&&H0(t,e)?ES(r,n):(t.flags=t.flags&-4097|2,_e=!1,Qt=t)}}else{if(Np(t))throw Error(I(418));t.flags=t.flags&-4097|2,_e=!1,Qt=t}}}function q0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qt=t}function Eu(t){if(t!==Qt)return!1;if(!_e)return q0(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kp(t.type,t.memoizedProps)),e&&(e=Gt)){if(Np(t))throw SS(),Error(I(418));for(;e;)ES(t,e),e=Mr(e.nextSibling)}if(q0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gt=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gt=null}}else Gt=Qt?Mr(t.stateNode.nextSibling):null;return!0}function SS(){for(var t=Gt;t;)t=Mr(t.nextSibling)}function Ys(){Gt=Qt=null,_e=!1}function yg(t){En===null?En=[t]:En.push(t)}var _A=mr.ReactCurrentBatchConfig;function _n(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Nc=Jr(null),Ac=null,Is=null,vg=null;function _g(){vg=Is=Ac=null}function wg(t){var e=Nc.current;ye(Nc),t._currentValue=e}function Pp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){Ac=t,vg=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Mt=!0),t.firstContext=null)}function fn(t){var e=t._currentValue;if(vg!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(Ac===null)throw Error(I(308));Is=t,Ac.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var pi=null;function Eg(t){pi===null?pi=[t]:pi.push(t)}function CS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Eg(e)):(n.next=i.next,i.next=n),e.interleaved=n,lr(t,r)}function lr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function Sg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function TS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(re&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,lr(t,n)}return i=r.interleaved,i===null?(e.next=e,Eg(r)):(e.next=i.next,i.next=e),r.interleaved=e,lr(t,n)}function Gu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ag(t,n)}}function K0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pc(t,e,n,r){var i=t.updateQueue;Tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,y=a;switch(d=e,f=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,d=typeof p=="function"?p.call(f,h,d):p,d==null)break e;h=ke({},h,d);break e;case 2:Tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Oi|=o,t.lanes=o,t.memoizedState=h}}function G0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var IS=new CE.Component().refs;function Op(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dh={isMounted:function(t){return(t=t._reactInternals)?Xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Fr(t),s=tr(r,i);s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(bn(e,t,i,r),Gu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Fr(t),s=tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(bn(e,t,i,r),Gu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=Fr(t),i=tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=$r(t,i,r),e!==null&&(bn(e,t,r,n),Gu(e,t,r))}};function Q0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,r)||!La(i,s):!0}function kS(t,e,n){var r=!1,i=Wr,s=e.contextType;return typeof s=="object"&&s!==null?s=fn(s):(i=Vt(e)?Ni:wt.current,r=e.contextTypes,s=(r=r!=null)?Qs(t,i):Wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Y0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dh.enqueueReplaceState(e,e.state,null)}function Dp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=IS,Sg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=fn(s):(s=Vt(e)?Ni:wt.current,i.context=Qs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Op(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dh.enqueueReplaceState(i,i.state,null),Pc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===IS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Su(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function X0(t){var e=t._init;return e(t._payload)}function bS(t){function e(g,m){if(t){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Ur(g,m),g.index=0,g.sibling=null,g}function s(g,m,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,v,_){return m===null||m.tag!==6?(m=vf(v,g.mode,_),m.return=g,m):(m=i(m,v),m.return=g,m)}function l(g,m,v,_){var E=v.type;return E===ys?c(g,m,v.props.children,_,v.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Cr&&X0(E)===m.type)?(_=i(m,v.props),_.ref=qo(g,m,v),_.return=g,_):(_=ec(v.type,v.key,v.props,null,g.mode,_),_.ref=qo(g,m,v),_.return=g,_)}function u(g,m,v,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=_f(v,g.mode,_),m.return=g,m):(m=i(m,v.children||[]),m.return=g,m)}function c(g,m,v,_,E){return m===null||m.tag!==7?(m=Ti(v,g.mode,_,E),m.return=g,m):(m=i(m,v),m.return=g,m)}function h(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=vf(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hu:return v=ec(m.type,m.key,m.props,null,g.mode,v),v.ref=qo(g,null,m),v.return=g,v;case gs:return m=_f(m,g.mode,v),m.return=g,m;case Cr:var _=m._init;return h(g,_(m._payload),v)}if(ia(m)||zo(m))return m=Ti(m,g.mode,v,null),m.return=g,m;Su(g,m)}return null}function d(g,m,v,_){var E=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(g,m,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hu:return v.key===E?l(g,m,v,_):null;case gs:return v.key===E?u(g,m,v,_):null;case Cr:return E=v._init,d(g,m,E(v._payload),_)}if(ia(v)||zo(v))return E!==null?null:c(g,m,v,_,null);Su(g,v)}return null}function f(g,m,v,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(v)||null,a(m,g,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case hu:return g=g.get(_.key===null?v:_.key)||null,l(m,g,_,E);case gs:return g=g.get(_.key===null?v:_.key)||null,u(m,g,_,E);case Cr:var S=_._init;return f(g,m,v,S(_._payload),E)}if(ia(_)||zo(_))return g=g.get(v)||null,c(m,g,_,E,null);Su(m,_)}return null}function p(g,m,v,_){for(var E=null,S=null,C=m,R=m=0,G=null;C!==null&&R<v.length;R++){C.index>R?(G=C,C=null):G=C.sibling;var N=d(g,C,v[R],_);if(N===null){C===null&&(C=G);break}t&&C&&N.alternate===null&&e(g,C),m=s(N,m,R),S===null?E=N:S.sibling=N,S=N,C=G}if(R===v.length)return n(g,C),_e&&ai(g,R),E;if(C===null){for(;R<v.length;R++)C=h(g,v[R],_),C!==null&&(m=s(C,m,R),S===null?E=C:S.sibling=C,S=C);return _e&&ai(g,R),E}for(C=r(g,C);R<v.length;R++)G=f(C,g,R,v[R],_),G!==null&&(t&&G.alternate!==null&&C.delete(G.key===null?R:G.key),m=s(G,m,R),S===null?E=G:S.sibling=G,S=G);return t&&C.forEach(function(ie){return e(g,ie)}),_e&&ai(g,R),E}function y(g,m,v,_){var E=zo(v);if(typeof E!="function")throw Error(I(150));if(v=E.call(v),v==null)throw Error(I(151));for(var S=E=null,C=m,R=m=0,G=null,N=v.next();C!==null&&!N.done;R++,N=v.next()){C.index>R?(G=C,C=null):G=C.sibling;var ie=d(g,C,N.value,_);if(ie===null){C===null&&(C=G);break}t&&C&&ie.alternate===null&&e(g,C),m=s(ie,m,R),S===null?E=ie:S.sibling=ie,S=ie,C=G}if(N.done)return n(g,C),_e&&ai(g,R),E;if(C===null){for(;!N.done;R++,N=v.next())N=h(g,N.value,_),N!==null&&(m=s(N,m,R),S===null?E=N:S.sibling=N,S=N);return _e&&ai(g,R),E}for(C=r(g,C);!N.done;R++,N=v.next())N=f(C,g,R,N.value,_),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?R:N.key),m=s(N,m,R),S===null?E=N:S.sibling=N,S=N);return t&&C.forEach(function(Se){return e(g,Se)}),_e&&ai(g,R),E}function w(g,m,v,_){if(typeof v=="object"&&v!==null&&v.type===ys&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case hu:e:{for(var E=v.key,S=m;S!==null;){if(S.key===E){if(E=v.type,E===ys){if(S.tag===7){n(g,S.sibling),m=i(S,v.props.children),m.return=g,g=m;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Cr&&X0(E)===S.type){n(g,S.sibling),m=i(S,v.props),m.ref=qo(g,S,v),m.return=g,g=m;break e}n(g,S);break}else e(g,S);S=S.sibling}v.type===ys?(m=Ti(v.props.children,g.mode,_,v.key),m.return=g,g=m):(_=ec(v.type,v.key,v.props,null,g.mode,_),_.ref=qo(g,m,v),_.return=g,g=_)}return o(g);case gs:e:{for(S=v.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(g,m.sibling),m=i(m,v.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=_f(v,g.mode,_),m.return=g,g=m}return o(g);case Cr:return S=v._init,w(g,m,S(v._payload),_)}if(ia(v))return p(g,m,v,_);if(zo(v))return y(g,m,v,_);Su(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,v),m.return=g,g=m):(n(g,m),m=vf(v,g.mode,_),m.return=g,g=m),o(g)):n(g,m)}return w}var Xs=bS(!0),xS=bS(!1),bl={},$n=Jr(bl),za=Jr(bl),Ba=Jr(bl);function mi(t){if(t===bl)throw Error(I(174));return t}function Cg(t,e){switch(fe(Ba,e),fe(za,t),fe($n,bl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dp(e,t)}ye($n),fe($n,e)}function Js(){ye($n),ye(za),ye(Ba)}function RS(t){mi(Ba.current);var e=mi($n.current),n=dp(e,t.type);e!==n&&(fe(za,t),fe($n,n))}function Tg(t){za.current===t&&(ye($n),ye(za))}var Te=Jr(0);function Oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var df=[];function Ig(){for(var t=0;t<df.length;t++)df[t]._workInProgressVersionPrimary=null;df.length=0}var Qu=mr.ReactCurrentDispatcher,ff=mr.ReactCurrentBatchConfig,Pi=0,Ie=null,Ue=null,Ge=null,Dc=!1,ma=!1,ja=0,wA=0;function dt(){throw Error(I(321))}function kg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function bg(t,e,n,r,i,s){if(Pi=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qu.current=t===null||t.memoizedState===null?TA:IA,t=n(r,i),ma){s=0;do{if(ma=!1,ja=0,25<=s)throw Error(I(301));s+=1,Ge=Ue=null,e.updateQueue=null,Qu.current=kA,t=n(r,i)}while(ma)}if(Qu.current=Mc,e=Ue!==null&&Ue.next!==null,Pi=0,Ge=Ue=Ie=null,Dc=!1,e)throw Error(I(300));return t}function xg(){var t=ja!==0;return ja=0,t}function An(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ie.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function pn(){if(Ue===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Ge===null?Ie.memoizedState:Ge.next;if(e!==null)Ge=e,Ue=t;else{if(t===null)throw Error(I(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ge===null?Ie.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function Wa(t,e){return typeof e=="function"?e(t):e}function pf(t){var e=pn(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Pi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ie.lanes|=c,Oi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Rn(r,e.memoizedState)||(Mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mf(t){var e=pn(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(Mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function NS(){}function AS(t,e){var n=Ie,r=pn(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Mt=!0),r=r.queue,Rg(DS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Ha(9,OS.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(I(349));(Pi&30)!==0||PS(n,e,i)}return i}function PS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function OS(t,e,n,r){e.value=n,e.getSnapshot=r,MS(e)&&$S(t)}function DS(t,e,n){return n(function(){MS(e)&&$S(t)})}function MS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function $S(t){var e=lr(t,1);e!==null&&bn(e,t,1,-1)}function J0(t){var e=An();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},e.queue=t,t=t.dispatch=CA.bind(null,Ie,t),[e.memoizedState,t]}function Ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function LS(){return pn().memoizedState}function Yu(t,e,n,r){var i=An();Ie.flags|=t,i.memoizedState=Ha(1|e,n,void 0,r===void 0?null:r)}function Mh(t,e,n,r){var i=pn();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&kg(r,o.deps)){i.memoizedState=Ha(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Ha(1|e,n,s,r)}function Z0(t,e){return Yu(8390656,8,t,e)}function Rg(t,e){return Mh(2048,8,t,e)}function FS(t,e){return Mh(4,2,t,e)}function US(t,e){return Mh(4,4,t,e)}function VS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zS(t,e,n){return n=n!=null?n.concat([t]):null,Mh(4,4,VS.bind(null,e,t),n)}function Ng(){}function BS(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jS(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function WS(t,e,n){return(Pi&21)===0?(t.baseState&&(t.baseState=!1,Mt=!0),t.memoizedState=n):(Rn(n,e)||(n=KE(),Ie.lanes|=n,Oi|=n,t.baseState=!0),e)}function EA(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=ff.transition;ff.transition={};try{t(!1),e()}finally{ue=n,ff.transition=r}}function HS(){return pn().memoizedState}function SA(t,e,n){var r=Fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qS(t))KS(e,n);else if(n=CS(t,e,n,r),n!==null){var i=bt();bn(n,t,r,i),GS(n,e,r)}}function CA(t,e,n){var r=Fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qS(t))KS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(i.next=i,Eg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=CS(t,e,i,r),n!==null&&(i=bt(),bn(n,t,r,i),GS(n,e,r))}}function qS(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function KS(t,e){ma=Dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function GS(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ag(t,n)}}var Mc={readContext:fn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},TA={readContext:fn,useCallback:function(t,e){return An().memoizedState=[t,e===void 0?null:e],t},useContext:fn,useEffect:Z0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yu(4194308,4,VS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yu(4,2,t,e)},useMemo:function(t,e){var n=An();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=An();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SA.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=An();return t={current:t},e.memoizedState=t},useState:J0,useDebugValue:Ng,useDeferredValue:function(t){return An().memoizedState=t},useTransition:function(){var t=J0(!1),e=t[0];return t=EA.bind(null,t[1]),An().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=An();if(_e){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Xe===null)throw Error(I(349));(Pi&30)!==0||PS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Z0(DS.bind(null,r,s,t),[t]),r.flags|=2048,Ha(9,OS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=An(),e=Xe.identifierPrefix;if(_e){var n=Yn,r=Qn;n=(r&~(1<<32-kn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},IA={readContext:fn,useCallback:BS,useContext:fn,useEffect:Rg,useImperativeHandle:zS,useInsertionEffect:FS,useLayoutEffect:US,useMemo:jS,useReducer:pf,useRef:LS,useState:function(){return pf(Wa)},useDebugValue:Ng,useDeferredValue:function(t){var e=pn();return WS(e,Ue.memoizedState,t)},useTransition:function(){var t=pf(Wa)[0],e=pn().memoizedState;return[t,e]},useMutableSource:NS,useSyncExternalStore:AS,useId:HS,unstable_isNewReconciler:!1},kA={readContext:fn,useCallback:BS,useContext:fn,useEffect:Rg,useImperativeHandle:zS,useInsertionEffect:FS,useLayoutEffect:US,useMemo:jS,useReducer:mf,useRef:LS,useState:function(){return mf(Wa)},useDebugValue:Ng,useDeferredValue:function(t){var e=pn();return Ue===null?e.memoizedState=t:WS(e,Ue.memoizedState,t)},useTransition:function(){var t=mf(Wa)[0],e=pn().memoizedState;return[t,e]},useMutableSource:NS,useSyncExternalStore:AS,useId:HS,unstable_isNewReconciler:!1};function Zs(t,e){try{var n="",r=e;do n+=eN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gf(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Mp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bA=typeof WeakMap=="function"?WeakMap:Map;function QS(t,e,n){n=tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Lc||(Lc=!0,Hp=r),Mp(t,e)},n}function YS(t,e,n){n=tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mp(t,e),typeof r!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function e_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zA.bind(null,t,e,n),e.then(t,t))}function t_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function n_(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tr(-1,1),e.tag=2,$r(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var xA=mr.ReactCurrentOwner,Mt=!1;function St(t,e,n,r){e.child=t===null?xS(e,null,n,r):Xs(e,t.child,n,r)}function r_(t,e,n,r,i){n=n.render;var s=e.ref;return $s(e,i),r=bg(t,e,n,r,s,i),n=xg(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ur(t,e,i)):(_e&&n&&mg(e),e.flags|=1,St(t,e,r,i),e.child)}function i_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,XS(t,e,s,r,i)):(t=ec(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,r)&&t.ref===e.ref)return ur(t,e,i)}return e.flags|=1,t=Ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function XS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(La(s,r)&&t.ref===e.ref)if(Mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Mt=!0);else return e.lanes=t.lanes,ur(t,e,i)}return $p(t,e,n,r,i)}function JS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(bs,Kt),Kt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(bs,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(bs,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(bs,Kt),Kt|=r;return St(t,e,i,n),e.child}function ZS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $p(t,e,n,r,i){var s=Vt(n)?Ni:wt.current;return s=Qs(e,s),$s(e,i),n=bg(t,e,n,r,s,i),r=xg(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ur(t,e,i)):(_e&&r&&mg(e),e.flags|=1,St(t,e,n,i),e.child)}function s_(t,e,n,r,i){if(Vt(n)){var s=!0;bc(e)}else s=!1;if($s(e,i),e.stateNode===null)Xu(t,e),kS(e,n,r),Dp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=fn(u):(u=Vt(n)?Ni:wt.current,u=Qs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Y0(e,o,r,u),Tr=!1;var d=e.memoizedState;o.state=d,Pc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ut.current||Tr?(typeof c=="function"&&(Op(e,n,c,r),l=e.memoizedState),(a=Tr||Q0(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,TS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_n(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=fn(l):(l=Vt(n)?Ni:wt.current,l=Qs(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Y0(e,o,r,l),Tr=!1,d=e.memoizedState,o.state=d,Pc(e,r,o,i);var p=e.memoizedState;a!==h||d!==p||Ut.current||Tr?(typeof f=="function"&&(Op(e,n,f,r),p=e.memoizedState),(u=Tr||Q0(e,n,u,r,d,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Lp(t,e,n,r,s,i)}function Lp(t,e,n,r,i,s){ZS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&W0(e,n,!1),ur(t,e,s);r=e.stateNode,xA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):St(t,e,a,s),e.memoizedState=r.state,i&&W0(e,n,!0),e.child}function eC(t){var e=t.stateNode;e.pendingContext?j0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&j0(t,e.context,!1),Cg(t,e.containerInfo)}function o_(t,e,n,r,i){return Ys(),yg(i),e.flags|=256,St(t,e,n,r),e.child}var Fp={dehydrated:null,treeContext:null,retryLane:0};function Up(t){return{baseLanes:t,cachePool:null,transitions:null}}function tC(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(Te,i&1),t===null)return Ap(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fh(o,r,0,null),t=Ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Up(n),e.memoizedState=Fp,t):Ag(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return RA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=Ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Up(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fp,r}return s=t.child,t=s.sibling,r=Ur(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ag(t,e){return e=Fh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cu(t,e,n,r){return r!==null&&yg(r),Xs(e,t.child,null,n),t=Ag(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gf(Error(I(422))),Cu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fh({mode:"visible",children:r.children},i,0,null),s=Ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Xs(e,t.child,null,o),e.child.memoizedState=Up(o),e.memoizedState=Fp,s);if((e.mode&1)===0)return Cu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=gf(s,r,void 0),Cu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Mt||a){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,lr(t,i),bn(r,t,i,-1))}return Lg(),r=gf(Error(I(421))),Cu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Gt=Mr(i.nextSibling),Qt=e,_e=!0,En=null,t!==null&&(an[ln++]=Qn,an[ln++]=Yn,an[ln++]=Ai,Qn=t.id,Yn=t.overflow,Ai=e),e=Ag(e,r.children),e.flags|=4096,e)}function a_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pp(t.return,e,n)}function yf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nC(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(St(t,e,r.children,n),r=Te.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&a_(t,n,e);else if(t.tag===19)a_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Te,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Oc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Oc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yf(e,!0,n,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xu(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Oi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NA(t,e,n){switch(e.tag){case 3:eC(e),Ys();break;case 5:RS(e);break;case 1:Vt(e.type)&&bc(e);break;case 4:Cg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(Nc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Te,Te.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?tC(t,e,n):(fe(Te,Te.current&1),t=ur(t,e,n),t!==null?t.sibling:null);fe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return nC(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,JS(t,e,n)}return ur(t,e,n)}var rC,Vp,iC,sC;rC=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vp=function(){};iC=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mi($n.current);var s=null;switch(n){case"input":i=lp(t,i),r=lp(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=hp(t,i),r=hp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ic)}fp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Na.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Na.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&me("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};sC=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ko(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function AA(t,e,n){var r=e.pendingProps;switch(gg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Vt(e.type)&&kc(),ft(e),null;case 3:return r=e.stateNode,Js(),ye(Ut),ye(wt),Ig(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Eu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,En!==null&&(Gp(En),En=null))),Vp(t,e),ft(e),null;case 5:Tg(e);var i=mi(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)iC(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return ft(e),null}if(t=mi($n.current),Eu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dn]=e,r[Va]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<oa.length;i++)me(oa[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":g0(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":v0(r,s),me("invalid",r)}fp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wu(r.textContent,a,t),i=["children",""+a]):Na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":du(r),y0(r,s,!0);break;case"textarea":du(r),_0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ic)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=PE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dn]=e,t[Va]=r,rC(t,e,!1,!1),e.stateNode=t;e:{switch(o=pp(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<oa.length;i++)me(oa[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":g0(t,r),i=lp(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),me("invalid",t);break;case"textarea":v0(t,r),i=hp(t,r),me("invalid",t);break;default:i=r}fp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ME(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&OE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Aa(t,l):typeof l=="number"&&Aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&me("scroll",t):l!=null&&tg(t,s,l,o))}switch(n){case"input":du(t),y0(t,r,!1);break;case"textarea":du(t),_0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ic)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)sC(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=mi(Ba.current),mi($n.current),Eu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dn]=e,(s=r.nodeValue!==n)&&(t=Qt,t!==null))switch(t.tag){case 3:wu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=e,e.stateNode=r}return ft(e),null;case 13:if(ye(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&Gt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)SS(),Ys(),e.flags|=98560,s=!1;else if(s=Eu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Dn]=e}else Ys(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else En!==null&&(Gp(En),En=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Te.current&1)!==0?ze===0&&(ze=3):Lg())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Js(),Vp(t,e),t===null&&Fa(e.stateNode.containerInfo),ft(e),null;case 10:return wg(e.type._context),ft(e),null;case 17:return Vt(e.type)&&kc(),ft(e),null;case 19:if(ye(Te),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ko(s,!1);else{if(ze!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Oc(t),o!==null){for(e.flags|=128,Ko(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>eo&&(e.flags|=128,r=!0,Ko(s,!1),e.lanes=4194304)}else{if(!r)if(t=Oc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return ft(e),null}else 2*Ne()-s.renderingStartTime>eo&&n!==1073741824&&(e.flags|=128,r=!0,Ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Te.current,fe(Te,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return $g(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Kt&1073741824)!==0&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function PA(t,e){switch(gg(e),e.tag){case 1:return Vt(e.type)&&kc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),ye(Ut),ye(wt),Ig(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Tg(e),null;case 13:if(ye(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Te),null;case 4:return Js(),null;case 10:return wg(e.type._context),null;case 22:case 23:return $g(),null;case 24:return null;default:return null}}var Tu=!1,mt=!1,OA=typeof WeakSet=="function"?WeakSet:Set,P=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function zp(t,e,n){try{n()}catch(r){be(t,e,r)}}var l_=!1;function DA(t,e){if(Tp=Sc,t=uS(),pg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ip={focusedElem:t,selectionRange:n},Sc=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var p=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,w=p.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:_n(e.type,y),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(_){be(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return p=l_,l_=!1,p}function ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zp(e,n,s)}i=i.next}while(i!==r)}}function $h(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function oC(t){var e=t.alternate;e!==null&&(t.alternate=null,oC(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dn],delete e[Va],delete e[xp],delete e[gA],delete e[yA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function aC(t){return t.tag===5||t.tag===3||t.tag===4}function u_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||aC(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ic));else if(r!==4&&(t=t.child,t!==null))for(jp(t,e,n),t=t.sibling;t!==null;)jp(t,e,n),t=t.sibling}function Wp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wp(t,e,n),t=t.sibling;t!==null;)Wp(t,e,n),t=t.sibling}var rt=null,wn=!1;function wr(t,e,n){for(n=n.child;n!==null;)lC(t,e,n),n=n.sibling}function lC(t,e,n){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(xh,n)}catch{}switch(n.tag){case 5:mt||ks(n,e);case 6:var r=rt,i=wn;rt=null,wr(t,e,n),rt=r,wn=i,rt!==null&&(wn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(wn?(t=rt,n=n.stateNode,t.nodeType===8?cf(t.parentNode,n):t.nodeType===1&&cf(t,n),Ma(t)):cf(rt,n.stateNode));break;case 4:r=rt,i=wn,rt=n.stateNode.containerInfo,wn=!0,wr(t,e,n),rt=r,wn=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&zp(n,e,o),i=i.next}while(i!==r)}wr(t,e,n);break;case 1:if(!mt&&(ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,e,a)}wr(t,e,n);break;case 21:wr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,wr(t,e,n),mt=r):wr(t,e,n);break;default:wr(t,e,n)}}function c_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OA),e.forEach(function(r){var i=jA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,wn=!1;break e;case 3:rt=a.stateNode.containerInfo,wn=!0;break e;case 4:rt=a.stateNode.containerInfo,wn=!0;break e}a=a.return}if(rt===null)throw Error(I(160));lC(s,o,i),rt=null,wn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){be(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uC(e,t),e=e.sibling}function uC(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vn(e,t),Nn(t),r&4){try{ga(3,t,t.return),$h(3,t)}catch(y){be(t,t.return,y)}try{ga(5,t,t.return)}catch(y){be(t,t.return,y)}}break;case 1:vn(e,t),Nn(t),r&512&&n!==null&&ks(n,n.return);break;case 5:if(vn(e,t),Nn(t),r&512&&n!==null&&ks(n,n.return),t.flags&32){var i=t.stateNode;try{Aa(i,"")}catch(y){be(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&NE(i,s),pp(a,o);var u=pp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?ME(i,h):c==="dangerouslySetInnerHTML"?OE(i,h):c==="children"?Aa(i,h):tg(i,c,h,u)}switch(a){case"input":up(i,s);break;case"textarea":AE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Ps(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ps(i,!!s.multiple,s.defaultValue,!0):Ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[Va]=s}catch(y){be(t,t.return,y)}}break;case 6:if(vn(e,t),Nn(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){be(t,t.return,y)}}break;case 3:if(vn(e,t),Nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(y){be(t,t.return,y)}break;case 4:vn(e,t),Nn(t);break;case 13:vn(e,t),Nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dg=Ne())),r&4&&c_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(u=mt)||c,vn(e,t),mt=u):vn(e,t),Nn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(P=t,c=t.child;c!==null;){for(h=P=c;P!==null;){switch(d=P,f=d.child,d.tag){case 0:case 11:case 14:case 15:ga(4,d,d.return);break;case 1:ks(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(y){be(r,n,y)}}break;case 5:ks(d,d.return);break;case 22:if(d.memoizedState!==null){d_(h);continue}}f!==null?(f.return=d,P=f):d_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=DE("display",o))}catch(y){be(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){be(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:vn(e,t),Nn(t),r&4&&c_(t);break;case 21:break;default:vn(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(aC(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Aa(i,""),r.flags&=-33);var s=u_(t);Wp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=u_(t);jp(t,a,o);break;default:throw Error(I(161))}}catch(l){be(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function MA(t,e,n){P=t,cC(t)}function cC(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||mt;a=Tu;var u=mt;if(Tu=o,(mt=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?f_(i):l!==null?(l.return=o,P=l):f_(i);for(;s!==null;)P=s,cC(s),s=s.sibling;P=i,Tu=a,mt=u}h_(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,P=s):h_(t)}}function h_(t){for(;P!==null;){var e=P;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:mt||$h(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&G0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}G0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ma(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}mt||e.flags&512&&Bp(e)}catch(d){be(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function d_(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function f_(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$h(4,e)}catch(l){be(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){be(e,i,l)}}var s=e.return;try{Bp(e)}catch(l){be(e,s,l)}break;case 5:var o=e.return;try{Bp(e)}catch(l){be(e,o,l)}}}catch(l){be(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var $A=Math.ceil,$c=mr.ReactCurrentDispatcher,Pg=mr.ReactCurrentOwner,hn=mr.ReactCurrentBatchConfig,re=0,Xe=null,Me=null,ot=0,Kt=0,bs=Jr(0),ze=0,qa=null,Oi=0,Lh=0,Og=0,ya=null,Ot=null,Dg=0,eo=1/0,qn=null,Lc=!1,Hp=null,Lr=null,Iu=!1,Ar=null,Fc=0,va=0,qp=null,Ju=-1,Zu=0;function bt(){return(re&6)!==0?Ne():Ju!==-1?Ju:Ju=Ne()}function Fr(t){return(t.mode&1)===0?1:(re&2)!==0&&ot!==0?ot&-ot:_A.transition!==null?(Zu===0&&(Zu=KE()),Zu):(t=ue,t!==0||(t=window.event,t=t===void 0?16:eS(t.type)),t)}function bn(t,e,n,r){if(50<va)throw va=0,qp=null,Error(I(185));Tl(t,n,r),((re&2)===0||t!==Xe)&&(t===Xe&&((re&2)===0&&(Lh|=n),ze===4&&kr(t,ot)),zt(t,r),n===1&&re===0&&(e.mode&1)===0&&(eo=Ne()+500,Oh&&Zr()))}function zt(t,e){var n=t.callbackNode;_N(t,e);var r=Ec(t,t===Xe?ot:0);if(r===0)n!==null&&S0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&S0(n),e===1)t.tag===0?vA(p_.bind(null,t)):_S(p_.bind(null,t)),pA(function(){(re&6)===0&&Zr()}),n=null;else{switch(GE(r)){case 1:n=og;break;case 4:n=HE;break;case 16:n=wc;break;case 536870912:n=qE;break;default:n=wc}n=vC(n,hC.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hC(t,e){if(Ju=-1,Zu=0,(re&6)!==0)throw Error(I(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var r=Ec(t,t===Xe?ot:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Uc(t,r);else{e=r;var i=re;re|=2;var s=fC();(Xe!==t||ot!==e)&&(qn=null,eo=Ne()+500,Ci(t,e));do try{UA();break}catch(a){dC(t,a)}while(1);_g(),$c.current=s,re=i,Me!==null?e=0:(Xe=null,ot=0,e=ze)}if(e!==0){if(e===2&&(i=_p(t),i!==0&&(r=i,e=Kp(t,i))),e===1)throw n=qa,Ci(t,0),kr(t,r),zt(t,Ne()),n;if(e===6)kr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!LA(i)&&(e=Uc(t,r),e===2&&(s=_p(t),s!==0&&(r=s,e=Kp(t,s))),e===1))throw n=qa,Ci(t,0),kr(t,r),zt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:li(t,Ot,qn);break;case 3:if(kr(t,r),(r&130023424)===r&&(e=Dg+500-Ne(),10<e)){if(Ec(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bp(li.bind(null,t,Ot,qn),e);break}li(t,Ot,qn);break;case 4:if(kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-kn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$A(r/1960))-r,10<r){t.timeoutHandle=bp(li.bind(null,t,Ot,qn),r);break}li(t,Ot,qn);break;case 5:li(t,Ot,qn);break;default:throw Error(I(329))}}}return zt(t,Ne()),t.callbackNode===n?hC.bind(null,t):null}function Kp(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(Ci(t,e).flags|=256),t=Uc(t,e),t!==2&&(e=Ot,Ot=n,e!==null&&Gp(e)),t}function Gp(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function LA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~Og,e&=~Lh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),r=1<<n;t[n]=-1,e&=~r}}function p_(t){if((re&6)!==0)throw Error(I(327));Ls();var e=Ec(t,0);if((e&1)===0)return zt(t,Ne()),null;var n=Uc(t,e);if(t.tag!==0&&n===2){var r=_p(t);r!==0&&(e=r,n=Kp(t,r))}if(n===1)throw n=qa,Ci(t,0),kr(t,e),zt(t,Ne()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,li(t,Ot,qn),zt(t,Ne()),null}function Mg(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(eo=Ne()+500,Oh&&Zr())}}function Di(t){Ar!==null&&Ar.tag===0&&(re&6)===0&&Ls();var e=re;re|=1;var n=hn.transition,r=ue;try{if(hn.transition=null,ue=1,t)return t()}finally{ue=r,hn.transition=n,re=e,(re&6)===0&&Zr()}}function $g(){Kt=bs.current,ye(bs)}function Ci(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fA(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(gg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kc();break;case 3:Js(),ye(Ut),ye(wt),Ig();break;case 5:Tg(r);break;case 4:Js();break;case 13:ye(Te);break;case 19:ye(Te);break;case 10:wg(r.type._context);break;case 22:case 23:$g()}n=n.return}if(Xe=t,Me=t=Ur(t.current,null),ot=Kt=e,ze=0,qa=null,Og=Lh=Oi=0,Ot=ya=null,pi!==null){for(e=0;e<pi.length;e++)if(n=pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}pi=null}return t}function dC(t,e){do{var n=Me;try{if(_g(),Qu.current=Mc,Dc){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dc=!1}if(Pi=0,Ge=Ue=Ie=null,ma=!1,ja=0,Pg.current=null,n===null||n.return===null){ze=1,qa=e,Me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=t_(o);if(f!==null){f.flags&=-257,n_(f,o,a,s,e),f.mode&1&&e_(s,u,e),e=f,l=u;var p=e.updateQueue;if(p===null){var y=new Set;y.add(l),e.updateQueue=y}else p.add(l);break e}else{if((e&1)===0){e_(s,u,e),Lg();break e}l=Error(I(426))}}else if(_e&&a.mode&1){var w=t_(o);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),n_(w,o,a,s,e),yg(Zs(l,a));break e}}s=l=Zs(l,a),ze!==4&&(ze=2),ya===null?ya=[s]:ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=QS(s,l,e);K0(s,g);break e;case 1:a=l;var m=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Lr===null||!Lr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=YS(s,a,e);K0(s,_);break e}}s=s.return}while(s!==null)}mC(n)}catch(E){e=E,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function fC(){var t=$c.current;return $c.current=Mc,t===null?Mc:t}function Lg(){(ze===0||ze===3||ze===2)&&(ze=4),Xe===null||(Oi&268435455)===0&&(Lh&268435455)===0||kr(Xe,ot)}function Uc(t,e){var n=re;re|=2;var r=fC();(Xe!==t||ot!==e)&&(qn=null,Ci(t,e));do try{FA();break}catch(i){dC(t,i)}while(1);if(_g(),re=n,$c.current=r,Me!==null)throw Error(I(261));return Xe=null,ot=0,ze}function FA(){for(;Me!==null;)pC(Me)}function UA(){for(;Me!==null&&!cN();)pC(Me)}function pC(t){var e=yC(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?mC(t):Me=e,Pg.current=null}function mC(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=AA(n,e,Kt),n!==null){Me=n;return}}else{if(n=PA(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Me=null;return}}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);ze===0&&(ze=5)}function li(t,e,n){var r=ue,i=hn.transition;try{hn.transition=null,ue=1,VA(t,e,n,r)}finally{hn.transition=i,ue=r}return null}function VA(t,e,n,r){do Ls();while(Ar!==null);if((re&6)!==0)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wN(t,s),t===Xe&&(Me=Xe=null,ot=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Iu||(Iu=!0,vC(wc,function(){return Ls(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=hn.transition,hn.transition=null;var o=ue;ue=1;var a=re;re|=4,Pg.current=null,DA(t,n),uC(n,t),oA(Ip),Sc=!!Tp,Ip=Tp=null,t.current=n,MA(n),hN(),re=a,ue=o,hn.transition=s}else t.current=n;if(Iu&&(Iu=!1,Ar=t,Fc=i),s=t.pendingLanes,s===0&&(Lr=null),pN(n.stateNode),zt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lc)throw Lc=!1,t=Hp,Hp=null,t;return(Fc&1)!==0&&t.tag!==0&&Ls(),s=t.pendingLanes,(s&1)!==0?t===qp?va++:(va=0,qp=t):va=0,Zr(),null}function Ls(){if(Ar!==null){var t=GE(Fc),e=hn.transition,n=ue;try{if(hn.transition=null,ue=16>t?16:t,Ar===null)var r=!1;else{if(t=Ar,Ar=null,Fc=0,(re&6)!==0)throw Error(I(331));var i=re;for(re|=4,P=t.current;P!==null;){var s=P,o=s.child;if((P.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:ga(8,c,s)}var h=c.child;if(h!==null)h.return=c,P=h;else for(;P!==null;){c=P;var d=c.sibling,f=c.return;if(oC(c),c===u){P=null;break}if(d!==null){d.return=f,P=d;break}P=f}}}var p=s.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,P=g;break e}P=s.return}}var m=t.current;for(P=m;P!==null;){o=P;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,P=v;else e:for(o=m;P!==null;){if(a=P,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:$h(9,a)}}catch(E){be(a,a.return,E)}if(a===o){P=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,P=_;break e}P=a.return}}if(re=i,Zr(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(xh,t)}catch{}r=!0}return r}finally{ue=n,hn.transition=e}}return!1}function m_(t,e,n){e=Zs(n,e),e=QS(t,e,1),t=$r(t,e,1),e=bt(),t!==null&&(Tl(t,1,e),zt(t,e))}function be(t,e,n){if(t.tag===3)m_(t,t,n);else for(;e!==null;){if(e.tag===3){m_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lr===null||!Lr.has(r))){t=Zs(n,t),t=YS(e,t,1),e=$r(e,t,1),t=bt(),e!==null&&(Tl(e,1,t),zt(e,t));break}}e=e.return}}function zA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(ot&n)===n&&(ze===4||ze===3&&(ot&130023424)===ot&&500>Ne()-Dg?Ci(t,0):Og|=n),zt(t,e)}function gC(t,e){e===0&&((t.mode&1)===0?e=1:(e=mu,mu<<=1,(mu&130023424)===0&&(mu=4194304)));var n=bt();t=lr(t,e),t!==null&&(Tl(t,e,n),zt(t,n))}function BA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gC(t,n)}function jA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),gC(t,n)}var yC;yC=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Mt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Mt=!1,NA(t,e,n);Mt=(t.flags&131072)!==0}else Mt=!1,_e&&(e.flags&1048576)!==0&&wS(e,Rc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xu(t,e),t=e.pendingProps;var i=Qs(e,wt.current);$s(e,n),i=bg(null,e,r,t,i,n);var s=xg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(s=!0,bc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sg(e),i.updater=Dh,e.stateNode=i,i._reactInternals=e,Dp(e,r,t,n),e=Lp(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&mg(e),St(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HA(r),t=_n(r,t),i){case 0:e=$p(null,e,r,t,n);break e;case 1:e=s_(null,e,r,t,n);break e;case 11:e=r_(null,e,r,t,n);break e;case 14:e=i_(null,e,r,_n(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),$p(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),s_(t,e,r,i,n);case 3:e:{if(eC(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,TS(t,e),Pc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zs(Error(I(423)),e),e=o_(t,e,r,n,i);break e}else if(r!==i){i=Zs(Error(I(424)),e),e=o_(t,e,r,n,i);break e}else for(Gt=Mr(e.stateNode.containerInfo.firstChild),Qt=e,_e=!0,En=null,n=xS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),r===i){e=ur(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return RS(e),t===null&&Ap(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kp(r,i)?o=null:s!==null&&kp(r,s)&&(e.flags|=32),ZS(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Ap(e),null;case 13:return tC(t,e,n);case 4:return Cg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xs(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),r_(t,e,r,i,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(Nc,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!Ut.current){e=ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=tr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}St(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$s(e,n),i=fn(i),r=r(i),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,i=_n(r,e.pendingProps),i=_n(r.type,i),i_(t,e,r,i,n);case 15:return XS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Xu(t,e),e.tag=1,Vt(r)?(t=!0,bc(e)):t=!1,$s(e,n),kS(e,r,i),Dp(e,r,i,n),Lp(null,e,r,!0,t,n);case 19:return nC(t,e,n);case 22:return JS(t,e,n)}throw Error(I(156,e.tag))};function vC(t,e){return WE(t,e)}function WA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(t,e,n,r){return new WA(t,e,n,r)}function Fg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HA(t){if(typeof t=="function")return Fg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rg)return 11;if(t===ig)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ec(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return Ti(n.children,i,s,e);case ng:o=8,i|=8;break;case ip:return t=cn(12,n,e,i|2),t.elementType=ip,t.lanes=s,t;case sp:return t=cn(13,n,e,i),t.elementType=sp,t.lanes=s,t;case op:return t=cn(19,n,e,i),t.elementType=op,t.lanes=s,t;case bE:return Fh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case IE:o=10;break e;case kE:o=9;break e;case rg:o=11;break e;case ig:o=14;break e;case Cr:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=cn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ti(t,e,n,r){return t=cn(7,t,r,e),t.lanes=n,t}function Fh(t,e,n,r){return t=cn(22,t,r,e),t.elementType=bE,t.lanes=n,t.stateNode={isHidden:!1},t}function vf(t,e,n){return t=cn(6,t,null,e),t.lanes=n,t}function _f(t,e,n){return e=cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jd(0),this.expirationTimes=Jd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ug(t,e,n,r,i,s,o,a,l){return t=new qA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sg(s),t}function KA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _C(t){if(!t)return Wr;t=t._reactInternals;e:{if(Xi(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Vt(n))return vS(t,n,e)}return e}function wC(t,e,n,r,i,s,o,a,l){return t=Ug(n,r,!0,t,i,s,o,a,l),t.context=_C(null),n=t.current,r=bt(),i=Fr(n),s=tr(r,i),s.callback=e!=null?e:null,$r(n,s,i),t.current.lanes=i,Tl(t,i,r),zt(t,r),t}function Uh(t,e,n,r){var i=e.current,s=bt(),o=Fr(i);return n=_C(n),e.context===null?e.context=n:e.pendingContext=n,e=tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=$r(i,e,o),t!==null&&(bn(t,i,o,s),Gu(t,i,o)),o}function Vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function g_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vg(t,e){g_(t,e),(t=t.alternate)&&g_(t,e)}function GA(){return null}var EC=typeof reportError=="function"?reportError:function(t){console.error(t)};function zg(t){this._internalRoot=t}Vh.prototype.render=zg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Uh(t,e,null,null)};Vh.prototype.unmount=zg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Di(function(){Uh(null,t,null,null)}),e[ar]=null}};function Vh(t){this._internalRoot=t}Vh.prototype.unstable_scheduleHydration=function(t){if(t){var e=XE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&ZE(t)}};function Bg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function y_(){}function QA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Vc(o);s.call(u)}}var o=wC(e,r,t,0,null,!1,!1,"",y_);return t._reactRootContainer=o,t[ar]=o.current,Fa(t.nodeType===8?t.parentNode:t),Di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Vc(l);a.call(u)}}var l=Ug(t,0,!1,null,null,!1,!1,"",y_);return t._reactRootContainer=l,t[ar]=l.current,Fa(t.nodeType===8?t.parentNode:t),Di(function(){Uh(e,l,n,r)}),l}function Bh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Vc(o);a.call(l)}}Uh(e,o,t,i)}else o=QA(n,e,t,i,r);return Vc(o)}QE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(ag(e,n|1),zt(e,Ne()),(re&6)===0&&(eo=Ne()+500,Zr()))}break;case 13:Di(function(){var r=lr(t,1);if(r!==null){var i=bt();bn(r,t,1,i)}}),Vg(t,1)}};lg=function(t){if(t.tag===13){var e=lr(t,134217728);if(e!==null){var n=bt();bn(e,t,134217728,n)}Vg(t,134217728)}};YE=function(t){if(t.tag===13){var e=Fr(t),n=lr(t,e);if(n!==null){var r=bt();bn(n,t,e,r)}Vg(t,e)}};XE=function(){return ue};JE=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};gp=function(t,e,n){switch(e){case"input":if(up(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ph(r);if(!i)throw Error(I(90));RE(r),up(r,i)}}}break;case"textarea":AE(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};FE=Mg;UE=Di;var YA={usingClientEntryPoint:!1,Events:[kl,Es,Ph,$E,LE,Mg]},Go={findFiberByHostInstance:fi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},XA={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=BE(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||GA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{xh=ku.inject(XA),Mn=ku}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YA;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bg(e))throw Error(I(200));return KA(t,e,null,n)};tn.createRoot=function(t,e){if(!Bg(t))throw Error(I(299));var n=!1,r="",i=EC;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ug(t,1,!1,null,null,n,!1,r,i),t[ar]=e.current,Fa(t.nodeType===8?t.parentNode:t),new zg(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=BE(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return Di(t)};tn.hydrate=function(t,e,n){if(!zh(e))throw Error(I(200));return Bh(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!Bg(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=EC;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wC(e,null,t,1,n!=null?n:null,i,!1,s,o),t[ar]=e.current,Fa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vh(e)};tn.render=function(t,e,n){if(!zh(e))throw Error(I(200));return Bh(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!zh(t))throw Error(I(40));return t._reactRootContainer?(Di(function(){Bh(null,null,t,!1,function(){t._reactRootContainer=null,t[ar]=null})}),!0):!1};tn.unstable_batchedUpdates=Mg;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zh(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Bh(t,e,n,!1,r)};tn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=tn})(wE);var v_=wE.exports;np.createRoot=v_.createRoot,np.hydrateRoot=v_.hydrateRoot;/**
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
 */const SC={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw Co(e)},Co=function(t){return new Error("Firebase Database ("+SC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const CC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},JA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(CC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},TC=function(t){const e=CC(t);return jg.encodeByteArray(e,!0)},IC=function(t){return TC(t).replace(/\./g,"")},Qp=function(t){try{return jg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ZA(t){return kC(void 0,t)}function kC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eP(n)||(t[n]=kC(t[n],e[n]));return t}function eP(t){return t!=="__proto__"}/**
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
 */class Wg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function bC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tP(){return Ze().indexOf("Electron/")>=0}function xC(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nP(){return Ze().indexOf("MSAppHost/")>=0}function RC(){return SC.NODE_ADMIN===!0}function NC(){return typeof indexedDB=="object"}function rP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const iP="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iP,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gn(i,a,r)}}function sP(t,e){return t.replace(oP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const oP=/\{\$([^}]+)}/g;/**
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
 */function Ka(t){return JSON.parse(t)}function Ye(t){return JSON.stringify(t)}/**
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
 */const AC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ka(Qp(s[0])||""),n=Ka(Qp(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},aP=function(t){const e=AC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lP=function(t){const e=AC(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function gr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function to(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Yp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Bc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(__(s)&&__(o)){if(!Bc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function __(t){return t!==null&&typeof t=="object"}/**
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
 */function To(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class uP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function cP(t,e){const n=new hP(t,e);return n.subscribe.bind(n)}class hP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wf),i.error===void 0&&(i.error=wf),i.complete===void 0&&(i.complete=wf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wf(){}function PC(t,e){return`${t} failed: ${e} argument `}/**
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
 */const fP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const pP=1e3,mP=2,gP=4*60*60*1e3,yP=.5;function vP(t,e=pP,n=mP){const r=e*Math.pow(n,t),i=Math.round(yP*r*(Math.random()-.5)*2);return Math.min(gP,r+i)}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ui="[DEFAULT]";/**
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
 */class _P{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EP(e))try{this.getOrInitializeService({instanceIdentifier:ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ui){return this.instances.has(e)}getOptions(e=ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ui){return this.component?this.component.multipleInstances?e:ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wP(t){return t===ui?void 0:t}function EP(t){return t.instantiationMode==="EAGER"}/**
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
 */class SP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _P(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const CP={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},TP=ne.INFO,IP={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},kP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=IP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=TP,this._logHandler=kP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const bP=(t,e)=>e.some(n=>t instanceof n);let w_,E_;function xP(){return w_||(w_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RP(){return E_||(E_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OC=new WeakMap,Xp=new WeakMap,DC=new WeakMap,Ef=new WeakMap,qg=new WeakMap;function NP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&OC.set(n,t)}).catch(()=>{}),qg.set(e,t),e}function AP(t){if(Xp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xp.set(t,e)}let Jp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||DC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PP(t){Jp=t(Jp)}function OP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sf(this),e,...n);return DC.set(r,e.sort?e.sort():[e]),Vr(r)}:RP().includes(t)?function(...e){return t.apply(Sf(this),e),Vr(OC.get(this))}:function(...e){return Vr(t.apply(Sf(this),e))}}function DP(t){return typeof t=="function"?OP(t):(t instanceof IDBTransaction&&AP(t),bP(t,xP())?new Proxy(t,Jp):t)}function Vr(t){if(t instanceof IDBRequest)return NP(t);if(Ef.has(t))return Ef.get(t);const e=DP(t);return e!==t&&(Ef.set(t,e),qg.set(e,t)),e}const Sf=t=>qg.get(t);function MC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vr(o.result),l.oldVersion,l.newVersion,Vr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const MP=["get","getKey","getAll","getAllKeys","count"],$P=["put","add","delete","clear"],Cf=new Map;function S_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cf.get(e))return Cf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$P.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cf.set(e,s),s}PP(t=>({...t,get:(e,n,r)=>S_(e,n)||t.get(e,n,r),has:(e,n)=>!!S_(e,n)||t.has(e,n)}));/**
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
 */class LP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zp="@firebase/app",C_="0.7.32";/**
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
 */const Mi=new xl("@firebase/app"),UP="@firebase/app-compat",VP="@firebase/analytics-compat",zP="@firebase/analytics",BP="@firebase/app-check-compat",jP="@firebase/app-check",WP="@firebase/auth",HP="@firebase/auth-compat",qP="@firebase/database",KP="@firebase/database-compat",GP="@firebase/functions",QP="@firebase/functions-compat",YP="@firebase/installations",XP="@firebase/installations-compat",JP="@firebase/messaging",ZP="@firebase/messaging-compat",eO="@firebase/performance",tO="@firebase/performance-compat",nO="@firebase/remote-config",rO="@firebase/remote-config-compat",iO="@firebase/storage",sO="@firebase/storage-compat",oO="@firebase/firestore",aO="@firebase/firestore-compat",lO="firebase",uO="9.9.4";/**
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
 */const $C="[DEFAULT]",cO={[Zp]:"fire-core",[UP]:"fire-core-compat",[zP]:"fire-analytics",[VP]:"fire-analytics-compat",[jP]:"fire-app-check",[BP]:"fire-app-check-compat",[WP]:"fire-auth",[HP]:"fire-auth-compat",[qP]:"fire-rtdb",[KP]:"fire-rtdb-compat",[GP]:"fire-fn",[QP]:"fire-fn-compat",[YP]:"fire-iid",[XP]:"fire-iid-compat",[JP]:"fire-fcm",[ZP]:"fire-fcm-compat",[eO]:"fire-perf",[tO]:"fire-perf-compat",[nO]:"fire-rc",[rO]:"fire-rc-compat",[iO]:"fire-gcs",[sO]:"fire-gcs-compat",[oO]:"fire-fst",[aO]:"fire-fst-compat","fire-js":"fire-js",[lO]:"fire-js-all"};/**
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
 */const Ga=new Map,em=new Map;function hO(t,e){try{t.container.addComponent(e)}catch(n){Mi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mn(t){const e=t.name;if(em.has(e))return Mi.debug(`There were multiple attempts to register component ${e}.`),!1;em.set(e,t);for(const n of Ga.values())hO(n,t);return!0}function Io(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const dO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$i=new Ji("app","Firebase",dO);/**
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
 */class fO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $i.create("app-deleted",{appName:this._name})}}/**
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
 */const ei=uO;function pO(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:$C,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw $i.create("bad-app-name",{appName:String(r)});const i=Ga.get(r);if(i){if(Bc(t,i.options)&&Bc(n,i.config))return i;throw $i.create("duplicate-app",{appName:r})}const s=new SP(r);for(const a of em.values())s.addComponent(a);const o=new fO(t,n,s);return Ga.set(r,o),o}function Kg(t=$C){const e=Ga.get(t);if(!e)throw $i.create("no-app",{appName:t});return e}function mO(){return Array.from(Ga.values())}function $e(t,e,n){var r;let i=(r=cO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mi.warn(a.join(" "));return}mn(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gO="firebase-heartbeat-database",yO=1,Qa="firebase-heartbeat-store";let Tf=null;function LC(){return Tf||(Tf=MC(gO,yO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qa)}}}).catch(t=>{throw $i.create("idb-open",{originalErrorMessage:t.message})})),Tf}async function vO(t){var e;try{return(await LC()).transaction(Qa).objectStore(Qa).get(FC(t))}catch(n){if(n instanceof gn)Mi.warn(n.message);else{const r=$i.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Mi.warn(r.message)}}}async function T_(t,e){var n;try{const i=(await LC()).transaction(Qa,"readwrite");return await i.objectStore(Qa).put(e,FC(t)),i.done}catch(r){if(r instanceof gn)Mi.warn(r.message);else{const i=$i.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Mi.warn(i.message)}}}function FC(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _O=1024,wO=30*24*60*60*1e3;class EO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=I_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=wO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=I_(),{heartbeatsToSend:n,unsentEntries:r}=SO(this._heartbeatsCache.heartbeats),i=IC(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function I_(){return new Date().toISOString().substring(0,10)}function SO(t,e=_O){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),k_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),k_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NC()?rP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return T_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return T_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function k_(t){return IC(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function TO(t){mn(new Zt("platform-logger",e=>new LP(e),"PRIVATE")),mn(new Zt("heartbeat",e=>new EO(e),"PRIVATE")),$e(Zp,C_,t),$e(Zp,C_,"esm2017"),$e("fire-js","")}TO("");function Gg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function UC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IO=UC,VC=new Ji("auth","Firebase",UC());/**
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
 */const b_=new xl("@firebase/auth");function tc(t,...e){b_.logLevel<=ne.ERROR&&b_.error(`Auth (${ei}): ${t}`,...e)}/**
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
 */function zn(t,...e){throw Qg(t,...e)}function Ln(t,...e){return Qg(t,...e)}function zC(t,e,n){const r=Object.assign(Object.assign({},IO()),{[e]:n});return new Ji("auth","Firebase",r).create(e,{appName:t.name})}function kO(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&zn(t,"argument-error"),zC(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return VC.create(t,...e)}function B(t,e,...n){if(!t)throw Qg(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tc(e),new Error(e)}function cr(t,e){t||Xn(e)}/**
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
 */const x_=new Map;function Jn(t){cr(t instanceof Function,"Expected a class definition");let e=x_.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,x_.set(t,e),e)}/**
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
 */function bO(t,e){const n=Io(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bc(s,e!=null?e:{}))return i;zn(i,"already-initialized")}return n.initialize({options:e})}function xO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function tm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RO(){return R_()==="http:"||R_()==="https:"}function R_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function NO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RO()||bC()||"connection"in navigator)?navigator.onLine:!0}function AO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Rl{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=jh()||Hg()}get(){return NO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yg(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class BC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const OO=new Rl(3e4,6e4);function DO(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hh(t,e,n,r,i={}){return jC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=To(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),BC.fetch()(WC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function jC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PO),e);try{const i=new $O(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zC(t,c,u);zn(t,c)}}catch(i){if(i instanceof gn)throw i;zn(t,"network-request-failed")}}async function MO(t,e,n,r,i={}){const s=await Hh(t,e,n,r,i);return"mfaPendingCredential"in s&&zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function WC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Yg(t.config,i):`${t.config.apiScheme}://${i}`}class $O{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ln(this.auth,"network-request-failed")),OO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ln(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function LO(t,e){return Hh(t,"POST","/v1/accounts:delete",e)}async function FO(t,e){return Hh(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _a(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UO(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=Xg(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_a(If(i.auth_time)),issuedAtTime:_a(If(i.iat)),expirationTime:_a(If(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function If(t){return Number(t)*1e3}function Xg(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return tc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qp(r);return s?JSON.parse(s):(tc("Failed to decode base64 JWT payload"),null)}catch(s){return tc("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function VO(t){const e=Xg(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ya(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&zO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class HC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_a(this.lastLoginAt),this.creationTime=_a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ya(t,FO(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?HO(s.providerUserInfo):[],a=WO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new HC(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function jO(t){const e=et(t);await jc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HO(t){return t.map(e=>{var{providerId:n}=e,r=Gg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function qO(t,e){const n=await jC(t,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=WC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",BC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Xa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Xa;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xa,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
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
 */function Er(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ii{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Gg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new HC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ya(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UO(this,e)}reload(){return jO(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ya(this,LO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:_,isAnonymous:E,providerData:S,stsTokenManager:C}=n;B(v&&C,e,"internal-error");const R=Xa.fromJSON(this.name,C);B(typeof v=="string",e,"internal-error"),Er(h,e.name),Er(d,e.name),B(typeof _=="boolean",e,"internal-error"),B(typeof E=="boolean",e,"internal-error"),Er(f,e.name),Er(p,e.name),Er(y,e.name),Er(w,e.name),Er(g,e.name),Er(m,e.name);const G=new Ii({uid:v,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:E,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:R,createdAt:g,lastLoginAt:m});return S&&Array.isArray(S)&&(G.providerData=S.map(N=>Object.assign({},N))),w&&(G._redirectEventId=w),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new Xa;i.updateFromServerResponse(n);const s=new Ii({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jc(s),s}}/**
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
 */class qC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qC.type="NONE";const N_=qC;/**
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
 */function nc(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nc(this.userKey,i.apiKey,s),this.fullPersistenceKey=nc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(Jn(N_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Jn(N_);const o=nc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ii._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Fs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Fs(s,e,r))}}/**
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
 */function A_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(XC(e))return"Blackberry";if(JC(e))return"Webos";if(Jg(e))return"Safari";if((e.includes("chrome/")||GC(e))&&!e.includes("edge/"))return"Chrome";if(YC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KC(t=Ze()){return/firefox\//i.test(t)}function Jg(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GC(t=Ze()){return/crios\//i.test(t)}function QC(t=Ze()){return/iemobile/i.test(t)}function YC(t=Ze()){return/android/i.test(t)}function XC(t=Ze()){return/blackberry/i.test(t)}function JC(t=Ze()){return/webos/i.test(t)}function qh(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KO(t=Ze()){var e;return qh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GO(){return xC()&&document.documentMode===10}function ZC(t=Ze()){return qh(t)||YC(t)||JC(t)||XC(t)||/windows phone/i.test(t)||QC(t)}function QO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function eT(t,e=[]){let n;switch(t){case"Browser":n=A_(Ze());break;case"Worker":n=`${A_(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ei}/${r}`}/**
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
 */class YO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class XO{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new P_(this),this.idTokenSubscription=new P_(this),this.beforeStateQueue=new YO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VC,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await jc(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Zg(t){return et(t)}class P_{constructor(e){this.auth=e,this.observer=null,this.addObserver=cP(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class tT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}/**
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
 */async function Us(t,e){return MO(t,"POST","/v1/accounts:signInWithIdp",DO(t,e))}/**
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
 */const JO="http://localhost";class Li extends tT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Gg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:JO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=To(n)}return e}}/**
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
 */class ey{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nl extends ey{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class br extends Nl{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.FACEBOOK_SIGN_IN_METHOD="facebook.com";br.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends Nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class xr extends Nl{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
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
 */class Rr extends Nl{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
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
 */class no{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ii._fromIdTokenResponse(e,r,i),o=O_(r);return new no({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=O_(r);return new no({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function O_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wc extends gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wc(e,n,r,i)}}function nT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wc._fromErrorAndOperation(t,s,e,r):s})}async function ZO(t,e,n=!1){const r=await Ya(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return no._forOperation(t,"link",r)}/**
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
 */async function eD(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Ya(t,nT(i,s,e,t),n);B(o.idToken,i,"internal-error");const a=Xg(o.idToken);B(a,i,"internal-error");const{sub:l}=a;return B(t.uid===l,i,"user-mismatch"),no._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&zn(i,"user-mismatch"),o}}/**
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
 */async function tD(t,e,n=!1){const r="signIn",i=await nT(t,r,e),s=await no._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function nD(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function rD(t){et(t).useDeviceLanguage()}function iD(t){return et(t).signOut()}const Hc="__sak";/**
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
 */class rT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hc,"1"),this.storage.removeItem(Hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sD(){const t=Ze();return Jg(t)||qh(t)}const oD=1e3,aD=10;class iT extends rT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sD()&&QO(),this.fallbackToPolling=ZC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iT.type="LOCAL";const lD=iT;/**
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
 */class sT extends rT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sT.type="SESSION";const oT=sT;/**
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
 */function uD(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Kh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await uD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kh.receivers=[];/**
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
 */function ty(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ty("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Fn(){return window}function hD(t){Fn().location.href=t}/**
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
 */function aT(){return typeof Fn().WorkerGlobalScope<"u"&&typeof Fn().importScripts=="function"}async function dD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pD(){return aT()?self:null}/**
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
 */const lT="firebaseLocalStorageDb",mD=1,qc="firebaseLocalStorage",uT="fbase_key";class Al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gh(t,e){return t.transaction([qc],e?"readwrite":"readonly").objectStore(qc)}function gD(){const t=indexedDB.deleteDatabase(lT);return new Al(t).toPromise()}function nm(){const t=indexedDB.open(lT,mD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qc,{keyPath:uT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qc)?e(r):(r.close(),await gD(),e(await nm()))})})}async function D_(t,e,n){const r=Gh(t,!0).put({[uT]:e,value:n});return new Al(r).toPromise()}async function yD(t,e){const n=Gh(t,!1).get(e),r=await new Al(n).toPromise();return r===void 0?null:r.value}function M_(t,e){const n=Gh(t,!0).delete(e);return new Al(n).toPromise()}const vD=800,_D=3;class cT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_D)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kh._getInstance(pD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dD(),!this.activeServiceWorker)return;this.sender=new cD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nm();return await D_(e,Hc,"1"),await M_(e,Hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>D_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>M_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gh(i,!1).getAll();return new Al(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cT.type="LOCAL";const wD=cT;/**
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
 */function ED(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function SD(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ED().appendChild(r)})}function CD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Rl(3e4,6e4);/**
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
 */function hT(t,e){return e?Jn(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ny extends tT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TD(t){return tD(t.auth,new ny(t),t.bypassAuthState)}function ID(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),eD(n,new ny(t),t.bypassAuthState)}async function kD(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),ZO(n,new ny(t),t.bypassAuthState)}/**
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
 */class dT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TD;case"linkViaPopup":case"linkViaRedirect":return kD;case"reauthViaPopup":case"reauthViaRedirect":return ID;default:zn(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bD=new Rl(2e3,1e4);async function xD(t,e,n){const r=Zg(t);kO(t,e,ey);const i=hT(r,n);return new gi(r,"signInViaPopup",e,i).executeNotNull()}class gi extends dT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gi.currentPopupAction&&gi.currentPopupAction.cancel(),gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=ty();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,bD.get())};e()}}gi.currentPopupAction=null;/**
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
 */const RD="pendingRedirect",rc=new Map;class ND extends dT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rc.get(this.auth._key());if(!e){try{const r=await AD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rc.set(this.auth._key(),e)}return this.bypassAuthState||rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AD(t,e){const n=DD(e),r=OD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function PD(t,e){rc.set(t._key(),e)}function OD(t){return Jn(t._redirectPersistence)}function DD(t){return nc(RD,t.config.apiKey,t.name)}async function MD(t,e,n=!1){const r=Zg(t),i=hT(r,e),o=await new ND(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $D=10*60*1e3;class LD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$D&&this.cachedEventUids.clear(),this.cachedEventUids.has($_(e))}saveEventToCache(e){this.cachedEventUids.add($_(e)),this.lastProcessedEventTime=Date.now()}}function $_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fT(t);default:return!1}}/**
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
 */async function UD(t,e={}){return Hh(t,"GET","/v1/projects",e)}/**
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
 */const VD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zD=/^https?/;async function BD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UD(t);for(const n of e)try{if(jD(n))return}catch{}zn(t,"unauthorized-domain")}function jD(t){const e=tm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zD.test(n))return!1;if(VD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const WD=new Rl(3e4,6e4);function L_(){const t=Fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HD(t){return new Promise((e,n)=>{var r,i,s;function o(){L_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L_(),n(Ln(t,"network-request-failed"))},timeout:WD.get()})}if(!((i=(r=Fn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Fn().gapi)===null||s===void 0)&&s.load)o();else{const a=CD("iframefcb");return Fn()[a]=()=>{gapi.load?o():n(Ln(t,"network-request-failed"))},SD(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ic=null,e})}let ic=null;function qD(t){return ic=ic||HD(t),ic}/**
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
 */const KD=new Rl(5e3,15e3),GD="__/auth/iframe",QD="emulator/auth/iframe",YD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JD(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yg(e,QD):`https://${t.config.authDomain}/${GD}`,r={apiKey:e.apiKey,appName:t.name,v:ei},i=XD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${To(r).slice(1)}`}async function ZD(t){const e=await qD(t),n=Fn().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:JD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ln(t,"network-request-failed"),a=Fn().setTimeout(()=>{s(o)},KD.get());function l(){Fn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const eM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tM=500,nM=600,rM="_blank",iM="http://localhost";class F_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sM(t,e,n,r=tM,i=nM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ze().toLowerCase();n&&(a=GC(u)?rM:n),KC(u)&&(e=e||iM,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(KO(u)&&a!=="_self")return oM(e||"",a),new F_(null);const h=window.open(e||"",a,c);B(h,t,"popup-blocked");try{h.focus()}catch{}return new F_(h)}function oM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aM="__/auth/handler",lM="emulator/auth/handler";function U_(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ei,eventId:i};if(e instanceof ey){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Nl){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${uM(t)}?${To(a).slice(1)}`}function uM({config:t}){return t.emulator?Yg(t,lM):`https://${t.authDomain}/${aM}`}/**
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
 */const kf="webStorageSupport";class cM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oT,this._completeRedirectFn=MD,this._overrideRedirectResult=PD}async _openPopup(e,n,r,i){var s;cr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=U_(e,n,r,tm(),i);return sM(e,o,ty())}async _openRedirect(e,n,r,i){return await this._originValidation(e),hD(U_(e,n,r,tm(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZD(e),r=new LD(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kf,{type:kf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[kf];o!==void 0&&n(!!o),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZC()||Jg()||qh()}}const hM=cM;var V_="@firebase/auth",z_="0.20.6";/**
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
 */class dM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pM(t){mn(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{B(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eT(t)},c=new XO(a,l,u);return xO(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mn(new Zt("auth-internal",e=>{const n=Zg(e.getProvider("auth").getImmediate());return(r=>new dM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$e(V_,z_,fM(t)),$e(V_,z_,"esm2017")}/**
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
 */function mM(t=Kg()){const e=Io(t,"auth");return e.isInitialized()?e.getImmediate():bO(t,{popupRedirectResolver:hM,persistence:[wD,lD,oT]})}pM("Browser");const B_="@firebase/database",j_="0.13.6";/**
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
 */let pT="";function gM(t){pT=t}/**
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
 */class yM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ka(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class vM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const mT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yM(e)}}catch{}return new vM},yi=mT("localStorage"),rm=mT("sessionStorage");/**
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
 */const Vs=new xl("@firebase/database"),_M=function(){let t=1;return function(){return t++}}(),gT=function(t){const e=fP(t),n=new uP;n.update(e);const r=n.digest();return jg.encodeByteArray(r)},Pl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Pl.apply(null,r):typeof r=="object"?e+=Ye(r):e+=r,e+=" "}return e};let ki=null,W_=!0;const wM=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Vs.logLevel=ne.VERBOSE,ki=Vs.log.bind(Vs),e&&rm.set("logging_enabled",!0)):typeof t=="function"?ki=t:(ki=null,rm.remove("logging_enabled"))},gt=function(...t){if(W_===!0&&(W_=!1,ki===null&&rm.get("logging_enabled")===!0&&wM(!0)),ki){const e=Pl.apply(null,t);ki(e)}},Ol=function(t){return function(...e){gt(t,...e)}},im=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pl(...t);Vs.error(e)},Fi=function(...t){const e=`FIREBASE FATAL ERROR: ${Pl(...t)}`;throw Vs.error(e),new Error(e)},Yt=function(...t){const e="FIREBASE WARNING: "+Pl(...t);Vs.warn(e)},EM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},SM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ro="[MIN_NAME]",Ui="[MAX_NAME]",ko=function(t,e){if(t===e)return 0;if(t===ro||e===Ui)return-1;if(e===ro||t===Ui)return 1;{const n=H_(t),r=H_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},CM=function(t,e){return t===e?0:t<e?-1:1},Qo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ye(e))},ry=function(t){if(typeof t!="object"||t===null)return Ye(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ye(e[r]),n+=":",n+=ry(t[e[r]]);return n+="}",n},vT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Bt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _T=function(t){x(!yT(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},TM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},IM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const bM=new RegExp("^-?(0*)\\d{1,10}$"),xM=-2147483648,RM=2147483647,H_=function(t){if(bM.test(t)){const e=Number(t);if(e>=xM&&e<=RM)return e}return null},Dl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},NM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class AM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class PM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yt(e)}}class sm{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sm.OWNER="owner";/**
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
 */const iy="5",wT="v",ET="s",ST="r",CT="f",TT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,IT="ls",kT="p",om="ac",bT="websocket",xT="long_polling";/**
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
 */class OM{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function DM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function RT(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===bT)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===xT)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);DM(t)&&(n.ns=t.namespace);const i=[];return Bt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class MM{constructor(){this.counters_={}}incrementCounter(e,n=1){gr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZA(this.counters_)}}/**
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
 */const bf={},xf={};function sy(t){const e=t.toString();return bf[e]||(bf[e]=new MM),bf[e]}function $M(t,e){const n=t.toString();return xf[n]||(xf[n]=e()),xf[n]}/**
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
 */class LM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Dl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const q_="start",FM="close",UM="pLPCommand",VM="pRTLPCB",NT="id",AT="pw",PT="ser",zM="cb",BM="seg",jM="ts",WM="d",HM="dframe",OT=1870,DT=30,qM=OT-DT,KM=25e3,GM=3e4;class xs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ol(e),this.stats_=sy(n),this.urlFn=l=>(this.appCheckToken&&(l[om]=this.appCheckToken),RT(n,xT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GM)),SM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new oy((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===q_)this.id=a,this.password=l;else if(o===FM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[q_]="t",r[PT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[zM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[wT]=iy,this.transportSessionId&&(r[ET]=this.transportSessionId),this.lastSessionId&&(r[IT]=this.lastSessionId),this.applicationId&&(r[kT]=this.applicationId),this.appCheckToken&&(r[om]=this.appCheckToken),typeof location<"u"&&location.hostname&&TT.test(location.hostname)&&(r[ST]=CT);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xs.forceAllow_=!0}static forceDisallow(){xs.forceDisallow_=!0}static isAvailable(){return xs.forceAllow_?!0:!xs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TM()&&!IM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=TC(n),i=vT(r,qM);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[HM]="t",r[NT]=e,r[AT]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class oy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_M(),window[UM+this.uniqueCallbackIdentifier]=e,window[VM+this.uniqueCallbackIdentifier]=n,this.myIFrame=oy.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){gt("frame writing exception"),a.stack&&gt(a.stack),gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[NT]=this.myID,e[AT]=this.myPW,e[PT]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+DT+r.length<=OT;){const o=this.pendingSegs.shift();r=r+"&"+BM+i+"="+o.seg+"&"+jM+i+"="+o.ts+"&"+WM+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(KM)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const QM=16384,YM=45e3;let Kc=null;typeof MozWebSocket<"u"?Kc=MozWebSocket:typeof WebSocket<"u"&&(Kc=WebSocket);class Sn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ol(this.connId),this.stats_=sy(n),this.connURL=Sn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[wT]=iy,typeof location<"u"&&location.hostname&&TT.test(location.hostname)&&(o[ST]=CT),n&&(o[ET]=n),r&&(o[IT]=r),i&&(o[om]=i),s&&(o[kT]=s),RT(e,bT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yi.set("previous_websocket_failure",!0);try{let r;RC(),this.mySock=new Kc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Kc!==null&&!Sn.forceDisallow_}static previouslyFailed(){return yi.isInMemoryStorage||yi.get("previous_websocket_failure")===!0}markConnectionHealthy(){yi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ka(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=vT(n,QM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Sn.responsesRequiredToBeHealthy=2;Sn.healthyTimeout=3e4;/**
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
 */class Ja{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xs,Sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Sn&&Sn.isAvailable();let r=n&&!Sn.previouslyFailed();if(e.webSocketOnly&&(n||Yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Sn];else{const i=this.transports_=[];for(const s of Ja.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ja.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ja.globalTransportInitialized_=!1;/**
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
 */const XM=6e4,JM=5e3,ZM=10*1024,e$=100*1024,Rf="t",K_="d",t$="s",G_="r",n$="e",Q_="o",Y_="a",X_="n",J_="p",r$="h";class i${constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ol("c:"+this.id+":"),this.transportManager_=new Ja(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>e$?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rf in e){const n=e[Rf];n===Y_?this.upgradeIfSecondaryHealthy_():n===G_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Q_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qo("t",e),r=Qo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:J_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Y_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:X_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qo("t",e),r=Qo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qo(Rf,e);if(K_ in e){const r=e[K_];if(n===r$)this.onHandshake_(r);else if(n===X_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===t$?this.onConnectionShutdown_(r):n===G_?this.onReset_(r):n===n$?im("Server Error: "+r):n===Q_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):im("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),iy!==r&&Yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),wa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:J_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class MT{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $T{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Gc extends $T{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Gc}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Z_=32,ew=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new he("")}function X(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hr(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function LT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function s$(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function FT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function UT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function Ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof he)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new he(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function $t(t,e){const n=X(t),r=X(e);if(n===null)return e;if(n===r)return $t(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ay(t,e){if(Hr(t)!==Hr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Cn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Hr(t)>Hr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class o${constructor(e,n){this.errorPrefix_=n,this.parts_=FT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wh(this.parts_[r]);VT(this)}}function a$(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wh(e),VT(t)}function l$(t){const e=t.parts_.pop();t.byteLength_-=Wh(e),t.parts_.length>0&&(t.byteLength_-=1)}function VT(t){if(t.byteLength_>ew)throw new Error(t.errorPrefix_+"has a key path longer than "+ew+" bytes ("+t.byteLength_+").");if(t.parts_.length>Z_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Z_+") or object contains a cycle "+ci(t))}function ci(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ly extends $T{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ly}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Yo=1e3,u$=60*5*1e3,tw=30*1e3,c$=1.3,h$=3e4,d$="server_kill",nw=3;class nr extends MT{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=nr.nextPersistentConnectionId_++,this.log_=Ol("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yo,this.maxReconnectDelay_=u$,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!RC())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ly.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ye(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Wg,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;nr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gr(e,"w")){const r=to(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=aP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ye(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):im("Unrecognized action received from server: "+Ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>h$&&(this.reconnectDelay_=Yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*c$)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new i$(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{Yt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(d$)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Yt(h),l())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yp(this.interruptReasons_)&&(this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ry(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new he(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nw&&(this.reconnectDelay_=tw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+pT.replace(/\./g,"-")]=1,jh()?e["framework.cordova"]=1:Hg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gc.getInstance().currentlyOnline();return Yp(this.interruptReasons_)&&e}}nr.nextPersistentConnectionId_=0;nr.nextConnectionId_=0;/**
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
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
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
 */class Qh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Q(ro,e),i=new Q(ro,n);return this.compare(r,i)!==0}minPost(){return Q.MIN}}/**
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
 */let xu;class zT extends Qh{static get __EMPTY_NODE(){return xu}static set __EMPTY_NODE(e){xu=e}compare(e,n){return ko(e.name,n.name)}isDefinedOn(e){throw Co("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Ui,xu)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,xu)}toString(){return".key"}}const zs=new zT;/**
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
 */class Ru{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Qe.RED,this.left=i!=null?i:Lt.EMPTY_NODE,this.right=s!=null?s:Lt.EMPTY_NODE}copy(e,n,r,i,s){return new Qe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Lt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Lt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class f${copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Lt{constructor(e,n=Lt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Lt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Lt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ru(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ru(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ru(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ru(this.root_,null,this.comparator_,!0,e)}}Lt.EMPTY_NODE=new f$;/**
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
 */function p$(t,e){return ko(t.name,e.name)}function uy(t,e){return ko(t,e)}/**
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
 */let am;function m$(t){am=t}const BT=function(t){return typeof t=="number"?"number:"+_T(t):"string:"+t},jT=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gr(e,".sv"),"Priority must be a string or number.")}else x(t===am||t.isEmpty(),"priority of unexpected type.");x(t===am||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let rw;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jT(this.priorityNode_)}static set __childrenNodeConstructor(e){rw=e}static get __childrenNodeConstructor(){return rw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:X(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=X(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Hr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+BT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_T(this.value_):e+=this.value_,this.lazyHash_=gT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),s=qe.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let WT,HT;function g$(t){WT=t}function y$(t){HT=t}class v$ extends Qh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ko(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Ui,new qe("[PRIORITY-POST]",HT))}makePost(e,n){const r=WT(e);return new Q(n,new qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Re=new v$;/**
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
 */const _$=Math.log(2);class w${constructor(e){const n=s=>parseInt(Math.log(s)/_$,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new Qe(d,h.node,Qe.BLACK,null,null);{const f=parseInt(c/2,10)+l,p=i(l,f),y=i(f+1,u);return h=t[f],d=n?n(h):h,new Qe(d,h.node,Qe.BLACK,p,y)}},s=function(l){let u=null,c=null,h=t.length;const d=function(p,y){const w=h-p,g=h;h-=p;const m=i(w+1,g),v=t[w],_=n?n(v):v;f(new Qe(_,v.node,y,null,m))},f=function(p){u?(u.left=p,u=p):(c=p,u=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(p+1));y?d(w,Qe.BLACK):(d(w,Qe.BLACK),d(w,Qe.RED))}return c},o=new w$(t.length),a=s(o);return new Lt(r||e,a)};/**
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
 */let Nf;const us={};class Zn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(us&&Re,"ChildrenNode.ts has not been loaded"),Nf=Nf||new Zn({".priority":us},{".priority":Re}),Nf}get(e){const n=to(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Lt?n:null}hasIndex(e){return gr(this.indexSet_,e.toString())}addIndex(e,n){x(e!==zs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Qc(r,e.getCompare()):a=us;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Zn(c,u)}addToIndexes(e,n){const r=zc(this.indexes_,(i,s)=>{const o=to(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===us)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Q.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Qc(a,o.getCompare())}else return us;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Q(e.name,a))),l.insert(e,e.node)}});return new Zn(r,this.indexSet_)}removeFromIndexes(e,n){const r=zc(this.indexes_,i=>{if(i===us)return i;{const s=n.get(e.name);return s?i.remove(new Q(e.name,s)):i}});return new Zn(r,this.indexSet_)}}/**
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
 */let Xo;class U{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&jT(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xo||(Xo=new U(new Lt(uy),null,Zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xo}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xo:n}}getChild(e){const n=X(e);return n===null?this:this.getImmediateChild(n).getChild(de(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Xo:this.priorityNode_;return new U(i,o,s)}}updateChild(e,n){const r=X(e);if(r===null)return n;{x(X(e)!==".priority"||Hr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(de(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Re,(o,a)=>{n[o]=a.val(e),r++,s&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+BT(this.getPriority().val())+":"),this.forEachChild(Re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ml?-1:0}withIndex(e){if(e===zs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===zs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Re),i=n.getIterator(Re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zs?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class E$ extends U{constructor(){super(new Lt(uy),U.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const Ml=new E$;Object.defineProperties(Q,{MIN:{value:new Q(ro,U.EMPTY_NODE)},MAX:{value:new Q(Ui,Ml)}});zT.__EMPTY_NODE=U.EMPTY_NODE;qe.__childrenNodeConstructor=U;m$(Ml);y$(Ml);/**
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
 */const S$=!0;function yt(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,yt(e))}if(!(t instanceof Array)&&S$){const n=[];let r=!1;if(Bt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=yt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Q(o,l)))}}),n.length===0)return U.EMPTY_NODE;const s=Qc(n,p$,o=>o.name,uy);if(r){const o=Qc(n,Re.getCompare());return new U(s,yt(e),new Zn({".priority":o},{".priority":Re}))}else return new U(s,yt(e),Zn.Default)}else{let n=U.EMPTY_NODE;return Bt(t,(r,i)=>{if(gr(t,r)&&r.substring(0,1)!=="."){const s=yt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(yt(e))}}g$(yt);/**
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
 */class C$ extends Qh{constructor(e){super(),this.indexPath_=e,x(!J(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ko(e.name,n.name):s}makePost(e,n){const r=yt(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,Ml);return new Q(Ui,e)}toString(){return FT(this.indexPath_,0).join("/")}}/**
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
 */class T$ extends Qh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ko(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const r=yt(e);return new Q(n,r)}toString(){return".value"}}const I$=new T$;/**
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
 */function qT(t){return{type:"value",snapshotNode:t}}function io(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Za(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function el(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function k$(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class cy{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Za(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(io(n,r)):o.trackChildChange(el(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Re,(i,s)=>{n.hasChild(i)||r.trackChildChange(Za(i,s))}),n.isLeafNode()||n.forEachChild(Re,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(el(i,s,o))}else r.trackChildChange(io(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class tl{constructor(e){this.indexedFilter_=new cy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=tl.getStartPost_(e),this.endPost_=tl.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new Q(n,r))||(r=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(Re,(o,a)=>{s.matches(new Q(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class b${constructor(e){this.rangedFilter_=new tl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Q(n,r))||(r=U.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const h=l.getNext();!c&&a(s,h)<=0&&(c=!0),c&&u<this.limit_&&a(h,o)<=0?u++:i=i.updateImmediateChild(h.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new Q(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(el(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Za(n,h));const y=a.updateImmediateChild(n,U.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(io(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Za(u.name,u.node)),s.trackChildChange(io(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,U.EMPTY_NODE)):e}}/**
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
 */class hy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ro}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ui}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new hy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function x$(t){return t.loadsAllData()?new cy(t.getIndex()):t.hasLimit()?new b$(t):new tl(t)}function iw(t){const e={};if(t.isDefault())return e;let n;return t.index_===Re?n="$priority":t.index_===I$?n="$value":t.index_===zs?n="$key":(x(t.index_ instanceof C$,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ye(n),t.startSet_&&(e.startAt=Ye(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ye(t.indexStartName_))),t.endSet_&&(e.endAt=Ye(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ye(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Re&&(e.i=t.index_.toString()),e}/**
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
 */class Yc extends MT{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ol("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Yc.getListenId_(e,r),a={};this.listens_[o]=a;const l=iw(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),to(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Yc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=iw(e._queryParams),r=e._path.toString(),i=new Wg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+To(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ka(a.responseText)}catch{Yt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Yt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class R${constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Xc(){return{value:null,children:new Map}}function KT(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=X(e);t.children.has(r)||t.children.set(r,Xc());const i=t.children.get(r);e=de(e),KT(i,e,n)}}function lm(t,e,n){t.value!==null?n(e,t.value):N$(t,(r,i)=>{const s=new he(e.toString()+"/"+r);lm(i,s,n)})}function N$(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class A${constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Bt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const ow=10*1e3,P$=30*1e3,O$=5*60*1e3;class D${constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new A$(e);const r=ow+(P$-ow)*Math.random();wa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Bt(e,(i,s)=>{s>0&&gr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),wa(this.reportStats_.bind(this),Math.floor(Math.random()*2*O$))}}/**
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
 */var Tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tn||(Tn={}));function GT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Jc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Tn.ACK_USER_WRITE,this.source=GT()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new Jc(oe(),n,this.revert)}}else return x(X(this.path)===e,"operationForChild called for unrelated child."),new Jc(de(this.path),this.affectedTree,this.revert)}}/**
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
 */class nl{constructor(e,n){this.source=e,this.path=n,this.type=Tn.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new nl(this.source,oe()):new nl(this.source,de(this.path))}}/**
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
 */class Vi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Tn.OVERWRITE}operationForChild(e){return J(this.path)?new Vi(this.source,oe(),this.snap.getImmediateChild(e)):new Vi(this.source,de(this.path),this.snap)}}/**
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
 */class rl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Tn.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new Vi(this.source,oe(),n.value):new rl(this.source,oe(),n)}else return x(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rl(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class zi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=X(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class M${constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $$(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(k$(o.childName,o.snapshotNode))}),Jo(t,i,"child_removed",e,r,n),Jo(t,i,"child_added",e,r,n),Jo(t,i,"child_moved",s,r,n),Jo(t,i,"child_changed",e,r,n),Jo(t,i,"value",e,r,n),i}function Jo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>F$(t,a,l)),o.forEach(a=>{const l=L$(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function L$(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function F$(t,e,n){if(e.childName==null||n.childName==null)throw Co("Should only compare child_ events.");const r=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Yh(t,e){return{eventCache:t,serverCache:e}}function Ea(t,e,n,r){return Yh(new zi(e,n,r),t.serverCache)}function QT(t,e,n,r){return Yh(t.eventCache,new zi(e,n,r))}function um(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Af;const U$=()=>(Af||(Af=new Lt(CM)),Af);class ge{constructor(e,n=U$()){this.value=e,this.children=n}static fromObject(e){let n=new ge(null);return Bt(e,(r,i)=>{n=n.set(new he(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(J(e))return null;{const r=X(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(de(e),n);return s!=null?{path:Ve(new he(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=X(e),r=this.children.get(n);return r!==null?r.subtree(de(e)):new ge(null)}}set(e,n){if(J(e))return new ge(n,this.children);{const r=X(e),s=(this.children.get(r)||new ge(null)).set(de(e),n),o=this.children.insert(r,s);return new ge(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=X(e),r=this.children.get(n);if(r){const i=r.remove(de(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ge(null):new ge(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=X(e),r=this.children.get(n);return r?r.get(de(e)):null}}setTree(e,n){if(J(e))return n;{const r=X(e),s=(this.children.get(r)||new ge(null)).setTree(de(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ge(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ve(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(J(e))return null;{const s=X(e),o=this.children.get(s);return o?o.findOnPath_(de(e),Ve(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,r){if(J(e))return this;{this.value&&r(n,this.value);const i=X(e),s=this.children.get(i);return s?s.foreachOnPath_(de(e),Ve(n,i),r):new ge(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class xn{constructor(e){this.writeTree_=e}static empty(){return new xn(new ge(null))}}function Sa(t,e,n){if(J(e))return new xn(new ge(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=$t(i,e);return s=s.updateChild(o,n),new xn(t.writeTree_.set(i,s))}else{const i=new ge(n),s=t.writeTree_.setTree(e,i);return new xn(s)}}}function aw(t,e,n){let r=t;return Bt(n,(i,s)=>{r=Sa(r,Ve(e,i),s)}),r}function lw(t,e){if(J(e))return xn.empty();{const n=t.writeTree_.setTree(e,new ge(null));return new xn(n)}}function cm(t,e){return Zi(t,e)!=null}function Zi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($t(n.path,e)):null}function uw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Re,(r,i)=>{e.push(new Q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Q(r,i.value))}),e}function zr(t,e){if(J(e))return t;{const n=Zi(t,e);return n!=null?new xn(new ge(n)):new xn(t.writeTree_.subtree(e))}}function hm(t){return t.writeTree_.isEmpty()}function so(t,e){return YT(oe(),t.writeTree_,e)}function YT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=YT(Ve(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ve(t,".priority"),r)),n}}/**
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
 */function py(t,e){return eI(e,t)}function V$(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Sa(t.visibleWrites,e,n)),t.lastWriteId=r}function z$(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function B$(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&j$(a,r.path)?i=!1:Cn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return W$(t),!0;if(r.snap)t.visibleWrites=lw(t.visibleWrites,r.path);else{const a=r.children;Bt(a,l=>{t.visibleWrites=lw(t.visibleWrites,Ve(r.path,l))})}return!0}else return!1}function j$(t,e){if(t.snap)return Cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Cn(Ve(t.path,n),e))return!0;return!1}function W$(t){t.visibleWrites=XT(t.allWrites,H$,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function H$(t){return t.visible}function XT(t,e,n){let r=xn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Cn(n,o)?(a=$t(n,o),r=Sa(r,a,s.snap)):Cn(o,n)&&(a=$t(o,n),r=Sa(r,oe(),s.snap.getChild(a)));else if(s.children){if(Cn(n,o))a=$t(n,o),r=aw(r,a,s.children);else if(Cn(o,n))if(a=$t(o,n),J(a))r=aw(r,oe(),s.children);else{const l=to(s.children,X(a));if(l){const u=l.getChild(de(a));r=Sa(r,oe(),u)}}}else throw Co("WriteRecord should have .snap or .children")}}return r}function JT(t,e,n,r,i){if(!r&&!i){const s=Zi(t.visibleWrites,e);if(s!=null)return s;{const o=zr(t.visibleWrites,e);if(hm(o))return n;if(n==null&&!cm(o,oe()))return null;{const a=n||U.EMPTY_NODE;return so(o,a)}}}else{const s=zr(t.visibleWrites,e);if(!i&&hm(s))return n;if(!i&&n==null&&!cm(s,oe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Cn(u.path,e)||Cn(e,u.path))},a=XT(t.allWrites,o,e),l=n||U.EMPTY_NODE;return so(a,l)}}}function q$(t,e,n){let r=U.EMPTY_NODE;const i=Zi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=zr(t.visibleWrites,e);return n.forEachChild(Re,(o,a)=>{const l=so(zr(s,new he(o)),a);r=r.updateImmediateChild(o,l)}),uw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=zr(t.visibleWrites,e);return uw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function K$(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ve(e,n);if(cm(t.visibleWrites,s))return null;{const o=zr(t.visibleWrites,s);return hm(o)?i.getChild(n):so(o,i.getChild(n))}}function G$(t,e,n,r){const i=Ve(e,n),s=Zi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=zr(t.visibleWrites,i);return so(o,r.getNode().getImmediateChild(n))}else return null}function Q$(t,e){return Zi(t.visibleWrites,e)}function Y$(t,e,n,r,i,s,o){let a;const l=zr(t.visibleWrites,e),u=Zi(l,oe());if(u!=null)a=u;else if(n!=null)a=so(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&c.length<i;)h(f,r)!==0&&c.push(f),f=d.getNext();return c}else return[]}function X$(){return{visibleWrites:xn.empty(),allWrites:[],lastWriteId:-1}}function Zc(t,e,n,r){return JT(t.writeTree,t.treePath,e,n,r)}function my(t,e){return q$(t.writeTree,t.treePath,e)}function cw(t,e,n,r){return K$(t.writeTree,t.treePath,e,n,r)}function eh(t,e){return Q$(t.writeTree,Ve(t.treePath,e))}function J$(t,e,n,r,i,s){return Y$(t.writeTree,t.treePath,e,n,r,i,s)}function gy(t,e,n){return G$(t.writeTree,t.treePath,e,n)}function ZT(t,e){return eI(Ve(t.treePath,e),t.writeTree)}function eI(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Z${constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,el(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Za(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,io(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,el(r,e.snapshotNode,i.oldSnap));else throw Co("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class eL{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const tI=new eL;class yy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bi(this.viewCache_),s=J$(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function tL(t){return{filter:t}}function nL(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rL(t,e,n,r,i){const s=new Z$;let o,a;if(n.type===Tn.OVERWRITE){const u=n;u.source.fromUser?o=dm(t,e,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!J(u.path),o=th(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Tn.MERGE){const u=n;u.source.fromUser?o=sL(t,e,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=fm(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Tn.ACK_USER_WRITE){const u=n;u.revert?o=lL(t,e,u.path,r,i,s):o=oL(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Tn.LISTEN_COMPLETE)o=aL(t,e,n.path,r,s);else throw Co("Unknown operation type: "+n.type);const l=s.getChanges();return iL(e,o,l),{viewCache:o,changes:l}}function iL(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=um(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(qT(um(e)))}}function nI(t,e,n,r,i,s){const o=e.eventCache;if(eh(r,n)!=null)return e;{let a,l;if(J(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Bi(e),c=u instanceof U?u:U.EMPTY_NODE,h=my(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Zc(r,Bi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=X(n);if(u===".priority"){x(Hr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=cw(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=de(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=cw(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=gy(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return Ea(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function th(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(J(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=X(n);if(!l.isCompleteForPath(n)&&Hr(n)>1)return e;const p=de(n),w=l.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),f,w,p,tI,null)}const h=QT(e,u,l.isFullyInitialized()||J(n),c.filtersNodes()),d=new yy(i,h,s);return nI(t,h,n,i,d,a)}function dm(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new yy(i,e,s);if(J(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ea(e,u,!0,t.filter.filtersNodes());else{const h=X(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ea(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=de(n),f=a.getNode().getImmediateChild(h);let p;if(J(d))p=r;else{const y=c.getCompleteChild(h);y!=null?LT(d)===".priority"&&y.getChild(UT(d)).isEmpty()?p=y:p=y.updateChild(d,r):p=U.EMPTY_NODE}if(f.equals(p))l=e;else{const y=t.filter.updateChild(a.getNode(),h,p,d,c,o);l=Ea(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function hw(t,e){return t.eventCache.isCompleteForChild(e)}function sL(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ve(n,l);hw(e,X(c))&&(a=dm(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ve(n,l);hw(e,X(c))||(a=dm(t,a,c,u,i,s,o))}),a}function dw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function fm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;J(n)?u=r:u=new ge(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=dw(t,f,d);l=th(t,l,new he(h),p,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),y=dw(t,p,d);l=th(t,l,new he(h),y,i,s,o,a)}}),l}function oL(t,e,n,r,i,s,o){if(eh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return th(t,e,n,l.getNode().getChild(n),i,s,a,o);if(J(n)){let u=new ge(null);return l.getNode().forEachChild(zs,(c,h)=>{u=u.set(new he(c),h)}),fm(t,e,n,u,i,s,a,o)}else return e}else{let u=new ge(null);return r.foreach((c,h)=>{const d=Ve(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),fm(t,e,n,u,i,s,a,o)}}function aL(t,e,n,r,i){const s=e.serverCache,o=QT(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return nI(t,o,n,r,tI,i)}function lL(t,e,n,r,i,s){let o;if(eh(r,n)!=null)return e;{const a=new yy(r,e,i),l=e.eventCache.getNode();let u;if(J(n)||X(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Zc(r,Bi(e));else{const h=e.serverCache.getNode();x(h instanceof U,"serverChildren would be complete if leaf node"),c=my(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=X(n);let h=gy(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,de(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,U.EMPTY_NODE,de(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zc(r,Bi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||eh(r,oe())!=null,Ea(e,u,o,t.filter.filtersNodes())}}/**
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
 */class uL{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new cy(r.getIndex()),s=x$(r);this.processor_=tL(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(U.EMPTY_NODE,a.getNode(),null),c=new zi(l,o.isFullyInitialized(),i.filtersNodes()),h=new zi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Yh(h,c),this.eventGenerator_=new M$(this.query_)}get query(){return this.query_}}function cL(t){return t.viewCache_.serverCache.getNode()}function hL(t,e){const n=Bi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(X(e)).isEmpty())?n.getChild(e):null}function fw(t){return t.eventRegistrations_.length===0}function dL(t,e){t.eventRegistrations_.push(e)}function pw(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function mw(t,e,n,r){e.type===Tn.MERGE&&e.source.queryId!==null&&(x(Bi(t.viewCache_),"We should always have a full cache before handling merges"),x(um(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=rL(t.processor_,i,e,n,r);return nL(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,rI(t,s.changes,s.viewCache.eventCache.getNode(),null)}function fL(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Re,(s,o)=>{r.push(io(s,o))}),n.isFullyInitialized()&&r.push(qT(n.getNode())),rI(t,r,n.getNode(),e)}function rI(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return $$(t.eventGenerator_,e,n,i)}/**
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
 */let nh;class pL{constructor(){this.views=new Map}}function mL(t){x(!nh,"__referenceConstructor has already been defined"),nh=t}function gL(){return x(nh,"Reference.ts has not been loaded"),nh}function yL(t){return t.views.size===0}function vy(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),mw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(mw(o,e,n,r));return s}}function vL(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Zc(n,i?r:null),l=!1;a?l=!0:r instanceof U?(a=my(n,r),l=!1):(a=U.EMPTY_NODE,l=!1);const u=Yh(new zi(a,l,!1),new zi(r,i,!1));return new uL(e,u)}return o}function _L(t,e,n,r,i,s){const o=vL(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),dL(o,n),fL(o,n)}function wL(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=qr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(pw(u,n,r)),fw(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(pw(l,n,r)),fw(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!qr(t)&&s.push(new(gL())(e._repo,e._path)),{removed:s,events:o}}function iI(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Bs(t,e){let n=null;for(const r of t.views.values())n=n||hL(r,e);return n}function sI(t,e){if(e._queryParams.loadsAllData())return Xh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function oI(t,e){return sI(t,e)!=null}function qr(t){return Xh(t)!=null}function Xh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let rh;function EL(t){x(!rh,"__referenceConstructor has already been defined"),rh=t}function SL(){return x(rh,"Reference.ts has not been loaded"),rh}let CL=1;class gw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=X$(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function TL(t,e,n,r,i){return V$(t.pendingWriteTree_,e,n,r,i),i?$l(t,new Vi(GT(),e,n)):[]}function Rs(t,e,n=!1){const r=z$(t.pendingWriteTree_,e);if(B$(t.pendingWriteTree_,e)){let s=new ge(null);return r.snap!=null?s=s.set(oe(),!0):Bt(r.children,o=>{s=s.set(new he(o),!0)}),$l(t,new Jc(r.path,s,n))}else return[]}function Jh(t,e,n){return $l(t,new Vi(dy(),e,n))}function IL(t,e,n){const r=ge.fromObject(n);return $l(t,new rl(dy(),e,r))}function kL(t,e){return $l(t,new nl(dy(),e))}function bL(t,e,n){const r=_y(t,n);if(r){const i=wy(r),s=i.path,o=i.queryId,a=$t(s,e),l=new nl(fy(o),a);return Ey(t,s,l)}else return[]}function pm(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||oI(o,e))){const l=wL(o,e,n,r);yL(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,f)=>qr(f));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=NL(d);for(let p=0;p<f.length;++p){const y=f[p],w=y.query,g=cI(t,y);t.listenProvider_.startListening(Ca(w),ih(t,w),g.hashFn,g.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ca(e),null):u.forEach(d=>{const f=t.queryToTagMap.get(Zh(d));t.listenProvider_.stopListening(Ca(d),f)}))}AL(t,u)}return a}function xL(t,e,n,r){const i=_y(t,r);if(i!=null){const s=wy(i),o=s.path,a=s.queryId,l=$t(o,e),u=new Vi(fy(a),l,n);return Ey(t,o,u)}else return[]}function RL(t,e,n,r){const i=_y(t,r);if(i){const s=wy(i),o=s.path,a=s.queryId,l=$t(o,e),u=ge.fromObject(n),c=new rl(fy(a),l,u);return Ey(t,o,c)}else return[]}function yw(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=$t(d,i);s=s||Bs(f,p),o=o||qr(f)});let a=t.syncPointTree_.get(i);a?(o=o||qr(a),s=s||Bs(a,oe())):(a=new pL,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const y=Bs(p,oe());y&&(s=s.updateImmediateChild(f,y))}));const u=oI(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=Zh(e);x(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=PL();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const c=py(t.pendingWriteTree_,i);let h=_L(a,e,n,c,s,l);if(!u&&!o&&!r){const d=sI(a,e);h=h.concat(OL(t,e,d))}return h}function aI(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=$t(o,e),u=Bs(a,l);if(u)return u});return JT(i,e,s,n,!0)}function $l(t,e){return lI(e,t.syncPointTree_,null,py(t.pendingWriteTree_,oe()))}function lI(t,e,n,r){if(J(t.path))return uI(t,e,n,r);{const i=e.get(oe());n==null&&i!=null&&(n=Bs(i,oe()));let s=[];const o=X(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=ZT(r,o);s=s.concat(lI(a,l,u,c))}return i&&(s=s.concat(vy(i,t,r,n))),s}}function uI(t,e,n,r){const i=e.get(oe());n==null&&i!=null&&(n=Bs(i,oe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=ZT(r,o),c=t.operationForChild(o);c&&(s=s.concat(uI(c,a,l,u)))}),i&&(s=s.concat(vy(i,t,r,n))),s}function cI(t,e){const n=e.query,r=ih(t,n);return{hashFn:()=>(cL(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?bL(t,n._path,r):kL(t,n._path);{const s=kM(i,n);return pm(t,n,null,s)}}}}function ih(t,e){const n=Zh(e);return t.queryToTagMap.get(n)}function Zh(t){return t._path.toString()+"$"+t._queryIdentifier}function _y(t,e){return t.tagToQueryMap.get(e)}function wy(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function Ey(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=py(t.pendingWriteTree_,e);return vy(r,n,i,null)}function NL(t){return t.fold((e,n,r)=>{if(n&&qr(n))return[Xh(n)];{let i=[];return n&&(i=iI(n)),Bt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ca(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(SL())(t._repo,t._path):t}function AL(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Zh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function PL(){return CL++}function OL(t,e,n){const r=e._path,i=ih(t,e),s=cI(t,n),o=t.listenProvider_.startListening(Ca(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!qr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!J(u)&&c&&qr(c))return[Xh(c).query];{let d=[];return c&&(d=d.concat(iI(c).map(f=>f.query))),Bt(h,(f,p)=>{d=d.concat(p)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Ca(c),ih(t,c))}}return o}/**
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
 */class Sy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sy(n)}node(){return this.node_}}class Cy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new Cy(this.syncTree_,n)}node(){return aI(this.syncTree_,this.path_)}}const DL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},vw=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ML(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $L(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ML=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},$L=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},LL=function(t,e,n,r){return Ty(e,new Cy(n,t),r)},FL=function(t,e,n){return Ty(t,new Sy(e),n)};function Ty(t,e,n){const r=t.getPriority().val(),i=vw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=vw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new qe(a,yt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new qe(i))),o.forEachChild(Re,(a,l)=>{const u=Ty(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Iy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ky(t,e){let n=e instanceof he?e:new he(e),r=t,i=X(n);for(;i!==null;){const s=to(r.node.children,i)||{children:{},childCount:0};r=new Iy(i,r,s),n=de(n),i=X(n)}return r}function bo(t){return t.node.value}function hI(t,e){t.node.value=e,mm(t)}function dI(t){return t.node.childCount>0}function UL(t){return bo(t)===void 0&&!dI(t)}function ed(t,e){Bt(t.node.children,(n,r)=>{e(new Iy(n,t,r))})}function fI(t,e,n,r){n&&!r&&e(t),ed(t,i=>{fI(i,e,!0,r)}),n&&r&&e(t)}function VL(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ll(t){return new he(t.parent===null?t.name:Ll(t.parent)+"/"+t.name)}function mm(t){t.parent!==null&&zL(t.parent,t.name,t)}function zL(t,e,n){const r=UL(n),i=gr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,mm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,mm(t))}/**
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
 */const BL=/[\[\].#$\/\u0000-\u001F\u007F]/,jL=/[\[\].#$\u0000-\u001F\u007F]/,Pf=10*1024*1024,pI=function(t){return typeof t=="string"&&t.length!==0&&!BL.test(t)},mI=function(t){return typeof t=="string"&&t.length!==0&&!jL.test(t)},WL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mI(t)},gI=function(t,e,n){const r=n instanceof he?new o$(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ci(r));if(typeof e=="function")throw new Error(t+"contains a function "+ci(r)+" with contents = "+e.toString());if(yT(e))throw new Error(t+"contains "+e.toString()+" "+ci(r));if(typeof e=="string"&&e.length>Pf/3&&Wh(e)>Pf)throw new Error(t+"contains a string greater than "+Pf+" utf8 bytes "+ci(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Bt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!pI(o)))throw new Error(t+" contains an invalid key ("+o+") "+ci(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);a$(r,o),gI(t,a,r),l$(r)}),i&&s)throw new Error(t+' contains ".value" child '+ci(r)+" in addition to actual children.")}},yI=function(t,e,n,r){if(!(r&&n===void 0)&&!mI(n))throw new Error(PC(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yI(t,e,n,r)},qL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!WL(n))throw new Error(PC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class KL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vI(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ay(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function _I(t,e,n){vI(t,n),wI(t,r=>ay(r,e))}function es(t,e,n){vI(t,n),wI(t,r=>Cn(r,e)||Cn(e,r))}function wI(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(GL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function GL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ki&&gt("event: "+n.toString()),Dl(r)}}}/**
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
 */const QL="repo_interrupt",YL=25;class XL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xc(),this.transactionQueueTree_=new Iy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JL(t,e,n){if(t.stats_=sy(t.repoInfo_),t.forceRestClient_||NM())t.server_=new Yc(t.repoInfo_,(r,i,s,o)=>{_w(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ww(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ye(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new nr(t.repoInfo_,e,(r,i,s,o)=>{_w(t,r,i,s,o)},r=>{ww(t,r)},r=>{e2(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=$M(t.repoInfo_,()=>new D$(t.stats_,t.server_)),t.infoData_=new R$,t.infoSyncTree_=new gw({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Jh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),by(t,"connected",!1),t.serverSyncTree_=new gw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);es(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ZL(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function EI(t){return DL({timestamp:ZL(t)})}function _w(t,e,n,r,i){t.dataUpdateCount++;const s=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=zc(n,u=>yt(u));o=RL(t.serverSyncTree_,s,l,i)}else{const l=yt(n);o=xL(t.serverSyncTree_,s,l,i)}else if(r){const l=zc(n,u=>yt(u));o=IL(t.serverSyncTree_,s,l)}else{const l=yt(n);o=Jh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ry(t,s)),es(t.eventQueue_,a,o)}function ww(t,e){by(t,"connected",e),e===!1&&n2(t)}function e2(t,e){Bt(e,(n,r)=>{by(t,n,r)})}function by(t,e,n){const r=new he("/.info/"+e),i=yt(n);t.infoData_.updateSnapshot(r,i);const s=Jh(t.infoSyncTree_,r,i);es(t.eventQueue_,r,s)}function t2(t){return t.nextWriteId_++}function n2(t){SI(t,"onDisconnectEvents");const e=EI(t),n=Xc();lm(t.onDisconnect_,oe(),(i,s)=>{const o=LL(i,s,t.serverSyncTree_,e);KT(n,i,o)});let r=[];lm(n,oe(),(i,s)=>{r=r.concat(Jh(t.serverSyncTree_,i,s));const o=a2(t,i);Ry(t,o)}),t.onDisconnect_=Xc(),es(t.eventQueue_,oe(),r)}function r2(t,e,n){let r;X(e._path)===".info"?r=yw(t.infoSyncTree_,e,n):r=yw(t.serverSyncTree_,e,n),_I(t.eventQueue_,e._path,r)}function Ew(t,e,n){let r;X(e._path)===".info"?r=pm(t.infoSyncTree_,e,n):r=pm(t.serverSyncTree_,e,n),_I(t.eventQueue_,e._path,r)}function i2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(QL)}function SI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function CI(t,e,n){return aI(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function xy(t,e=t.transactionQueueTree_){if(e||td(t,e),bo(e)){const n=II(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&s2(t,Ll(e),n)}else dI(e)&&ed(e,n=>{xy(t,n)})}function s2(t,e,n){const r=n.map(u=>u.currentWriteId),i=CI(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];x(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=$t(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{SI(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Rs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();td(t,ky(t.transactionQueueTree_,e)),xy(t,t.transactionQueueTree_),es(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Dl(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Yt("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Ry(t,e)}},o)}function Ry(t,e){const n=TI(t,e),r=Ll(n),i=II(t,n);return o2(t,i,r),r}function o2(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=$t(n,l.path);let c=!1,h;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(Rs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=YL)c=!0,h="maxretry",i=i.concat(Rs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=CI(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){gI("transaction failed: Data returned ",f,l.path);let p=yt(f);typeof f=="object"&&f!=null&&gr(f,".priority")||(p=p.updatePriority(d.getPriority()));const w=l.currentWriteId,g=EI(t),m=FL(p,d,g);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=t2(t),o.splice(o.indexOf(w),1),i=i.concat(TL(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(Rs(t.serverSyncTree_,w,!0))}else c=!0,h="nodata",i=i.concat(Rs(t.serverSyncTree_,l.currentWriteId,!0))}es(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}td(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Dl(r[a]);xy(t,t.transactionQueueTree_)}function TI(t,e){let n,r=t.transactionQueueTree_;for(n=X(e);n!==null&&bo(r)===void 0;)r=ky(r,n),e=de(e),n=X(e);return r}function II(t,e){const n=[];return kI(t,e,n),n.sort((r,i)=>r.order-i.order),n}function kI(t,e,n){const r=bo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ed(e,i=>{kI(t,i,n)})}function td(t,e){const n=bo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,hI(e,n.length>0?n:void 0)}ed(e,r=>{td(t,r)})}function a2(t,e){const n=Ll(TI(t,e)),r=ky(t.transactionQueueTree_,e);return VL(r,i=>{Of(t,i)}),Of(t,r),fI(r,i=>{Of(t,i)}),n}function Of(t,e){const n=bo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Rs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?hI(e,void 0):n.length=s+1,es(t.eventQueue_,Ll(e),i);for(let o=0;o<r.length;o++)Dl(r[o])}}/**
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
 */function l2(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function u2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sw=function(t,e){const n=c2(t),r=n.namespace;n.domain==="firebase.com"&&Fi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Fi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||EM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new OM(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new he(n.pathString)}},c2=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=l2(t.substring(c,h)));const d=u2(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class bI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ye(this.snapshot.exportVal())}}class xI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class h2{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ny{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return J(this._path)?null:LT(this._path)}get ref(){return new yr(this._repo,this._path)}get _queryIdentifier(){const e=sw(this._queryParams),n=ry(e);return n==="{}"?"default":n}get _queryObject(){return sw(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof Ny))return!1;const n=this._repo===e._repo,r=ay(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+s$(this._path)}}class yr extends Ny{constructor(e,n){super(e,n,new hy,!1)}get parent(){const e=UT(this._path);return e===null?null:new yr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class il{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new he(e),r=gm(this.ref,e);return new il(this._node.getChild(n),r,Re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new il(i,gm(this.ref,r),Re)))}hasChild(e){const n=new he(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gm(t,e){return t=et(t),X(t._path)===null?HL("child","path",e,!1):yI("child","path",e,!1),new yr(t._repo,Ve(t._path,e))}class Ay{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new bI("value",this,new il(e.snapshotNode,new yr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xI(this,e,n):null}matches(e){return e instanceof Ay?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Py{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xI(this,e,n):null}createEvent(e,n){x(e.childName!=null,"Child events should have a childName.");const r=gm(new yr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new bI(e.type,this,new il(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Py?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Fl(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{Ew(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new h2(n,s||void 0),a=e==="value"?new Ay(o):new Py(e,o);return r2(t._repo,t,a),()=>Ew(t._repo,t,a)}function d2(t,e,n,r){return Fl(t,"value",e,n,r)}function f2(t,e,n,r){return Fl(t,"child_added",e,n,r)}function p2(t,e,n,r){return Fl(t,"child_changed",e,n,r)}function m2(t,e,n,r){return Fl(t,"child_moved",e,n,r)}function g2(t,e,n,r){return Fl(t,"child_removed",e,n,r)}mL(yr);EL(yr);/**
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
 */const y2="FIREBASE_DATABASE_EMULATOR_HOST",ym={};let v2=!1;function _2(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Fi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sw(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[y2]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Sw(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new sm(sm.OWNER):new PM(t.name,t.options,e);qL("Invalid Firebase Database URL",o),J(o.path)||Fi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=E2(a,t,c,new AM(t.name,n));return new S2(h,t)}function w2(t,e){const n=ym[e];(!n||n[t.key]!==t)&&Fi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),i2(t),delete n[t.key]}function E2(t,e,n,r){let i=ym[e.name];i||(i={},ym[e.name]=i);let s=i[t.toURLString()];return s&&Fi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new XL(t,v2,n,r),i[t.toURLString()]=s,s}class S2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yr(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(w2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fi("Cannot call "+e+" on a deleted database.")}}function C2(t=Kg(),e){return Io(t,"database").getImmediate({identifier:e})}/**
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
 */function T2(t){gM(ei),mn(new Zt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return _2(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),$e(B_,j_,t),$e(B_,j_,"esm2017")}nr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};T2();var I2="firebase",k2="9.9.4";/**
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
 */$e(I2,k2,"app");var b2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Oy=Oy||{},V=b2||self;function sh(){}function vm(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ul(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function x2(t){return Object.prototype.hasOwnProperty.call(t,Df)&&t[Df]||(t[Df]=++R2)}var Df="closure_uid_"+(1e9*Math.random()>>>0),R2=0;function N2(t,e,n){return t.call.apply(t.bind,arguments)}function A2(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=N2:at=A2,at.apply(null,arguments)}function Nu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ht(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ti(){this.s=this.s,this.o=this.o}var P2=0;ti.prototype.s=!1;ti.prototype.na=function(){!this.s&&(this.s=!0,this.M(),P2!=0)&&x2(this)};ti.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const RI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},NI=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function O2(t){e:{var e=TF;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Cw(t){return Array.prototype.concat.apply([],arguments)}function Dy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function oh(t){return/^[\s\xa0]*$/.test(t)}var Tw=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Tt(t,e){return t.indexOf(e)!=-1}function Mf(t,e){return t<e?-1:t>e?1:0}var It;e:{var Iw=V.navigator;if(Iw){var kw=Iw.userAgent;if(kw){It=kw;break e}}It=""}function My(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function AI(t){const e={};for(const n in t)e[n]=t[n];return e}var bw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function PI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<bw.length;s++)n=bw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $y(t){return $y[" "](t),t}$y[" "]=sh;function D2(t){var e=L2;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var M2=Tt(It,"Opera"),oo=Tt(It,"Trident")||Tt(It,"MSIE"),OI=Tt(It,"Edge"),_m=OI||oo,DI=Tt(It,"Gecko")&&!(Tt(It.toLowerCase(),"webkit")&&!Tt(It,"Edge"))&&!(Tt(It,"Trident")||Tt(It,"MSIE"))&&!Tt(It,"Edge"),$2=Tt(It.toLowerCase(),"webkit")&&!Tt(It,"Edge");function MI(){var t=V.document;return t?t.documentMode:void 0}var ah;e:{var $f="",Lf=function(){var t=It;if(DI)return/rv:([^\);]+)(\)|;)/.exec(t);if(OI)return/Edge\/([\d\.]+)/.exec(t);if(oo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($2)return/WebKit\/(\S+)/.exec(t);if(M2)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Lf&&($f=Lf?Lf[1]:""),oo){var Ff=MI();if(Ff!=null&&Ff>parseFloat($f)){ah=String(Ff);break e}}ah=$f}var L2={};function F2(){return D2(function(){let t=0;const e=Tw(String(ah)).split("."),n=Tw("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Mf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Mf(i[2].length==0,s[2].length==0)||Mf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var wm;if(V.document&&oo){var xw=MI();wm=xw||parseInt(ah,10)||void 0}else wm=void 0;var U2=wm,V2=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",sh,e),V.removeEventListener("test",sh,e)}catch{}return t}();function _t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};function sl(t,e){if(_t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(DI){e:{try{$y(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:z2[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&sl.Z.h.call(this)}}ht(sl,_t);var z2={2:"touch",3:"pen",4:"mouse"};sl.prototype.h=function(){sl.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vl="closure_listenable_"+(1e6*Math.random()|0),B2=0;function j2(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++B2,this.ca=this.fa=!1}function nd(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function rd(t){this.src=t,this.g={},this.h=0}rd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Sm(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new j2(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Em(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=RI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(nd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Ly="closure_lm_"+(1e6*Math.random()|0),Uf={};function $I(t,e,n,r,i){if(r&&r.once)return FI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$I(t,e[s],n,r,i);return null}return n=Vy(n),t&&t[Vl]?t.N(e,n,Ul(r)?!!r.capture:!!r,i):LI(t,e,n,!1,r,i)}function LI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ul(i)?!!i.capture:!!i,a=Uy(t);if(a||(t[Ly]=a=new rd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=W2(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)V2||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(VI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function W2(){function t(n){return e.call(t.src,t.listener,n)}var e=H2;return t}function FI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)FI(t,e[s],n,r,i);return null}return n=Vy(n),t&&t[Vl]?t.O(e,n,Ul(r)?!!r.capture:!!r,i):LI(t,e,n,!0,r,i)}function UI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)UI(t,e[s],n,r,i);else r=Ul(r)?!!r.capture:!!r,n=Vy(n),t&&t[Vl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Sm(s,n,r,i),-1<n&&(nd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Uy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sm(e,n,r,i)),(n=-1<t?e[t]:null)&&Fy(n))}function Fy(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Vl])Em(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(VI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Uy(e))?(Em(n,t),n.h==0&&(n.src=null,e[Ly]=null)):nd(t)}}}function VI(t){return t in Uf?Uf[t]:Uf[t]="on"+t}function H2(t,e){if(t.ca)t=!0;else{e=new sl(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Fy(t),t=n.call(r,e)}return t}function Uy(t){return t=t[Ly],t instanceof rd?t:null}var Vf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vy(t){return typeof t=="function"?t:(t[Vf]||(t[Vf]=function(e){return t.handleEvent(e)}),t[Vf])}function tt(){ti.call(this),this.i=new rd(this),this.P=this,this.I=null}ht(tt,ti);tt.prototype[Vl]=!0;tt.prototype.removeEventListener=function(t,e,n,r){UI(this,t,e,n,r)};function lt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new _t(e,t);else if(e instanceof _t)e.target=e.target||t;else{var i=e;e=new _t(r,t),PI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Au(o,r,!0,e)&&i}if(o=e.g=t,i=Au(o,r,!0,e)&&i,i=Au(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Au(o,r,!1,e)&&i}tt.prototype.M=function(){if(tt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)nd(n[r]);delete t.g[e],t.h--}}this.I=null};tt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Au(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Em(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var zy=V.JSON.stringify;function q2(){var t=BI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class K2{constructor(){this.h=this.g=null}add(e,n){const r=zI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var zI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new G2,t=>t.reset());class G2{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Q2(t){V.setTimeout(()=>{throw t},0)}function By(t,e){Cm||Y2(),Tm||(Cm(),Tm=!0),BI.add(t,e)}var Cm;function Y2(){var t=V.Promise.resolve(void 0);Cm=function(){t.then(X2)}}var Tm=!1,BI=new K2;function X2(){for(var t;t=q2();){try{t.h.call(t.g)}catch(n){Q2(n)}var e=zI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Tm=!1}function id(t,e){tt.call(this),this.h=t||1,this.g=e||V,this.j=at(this.kb,this),this.l=Date.now()}ht(id,tt);O=id.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),lt(this,"tick"),this.da&&(jy(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jy(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){id.Z.M.call(this),jy(this),delete this.g};function Wy(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function jI(t){t.g=Wy(()=>{t.g=null,t.i&&(t.i=!1,jI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class J2 extends ti{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:jI(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ol(t){ti.call(this),this.h=t,this.g={}}ht(ol,ti);var Rw=[];function WI(t,e,n,r){Array.isArray(n)||(n&&(Rw[0]=n.toString()),n=Rw);for(var i=0;i<n.length;i++){var s=$I(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function HI(t){My(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fy(e)},t),t.g={}}ol.prototype.M=function(){ol.Z.M.call(this),HI(this)};ol.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sd(){this.g=!0}sd.prototype.Aa=function(){this.g=!1};function Z2(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function eF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ns(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nF(t,n)+(r?" "+r:"")})}function tF(t,e){t.info(function(){return"TIMEOUT: "+e})}sd.prototype.info=function(){};function nF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zy(n)}catch{return e}}var ts={},Nw=null;function od(){return Nw=Nw||new tt}ts.Ma="serverreachability";function qI(t){_t.call(this,ts.Ma,t)}ht(qI,_t);function al(t){const e=od();lt(e,new qI(e))}ts.STAT_EVENT="statevent";function KI(t,e){_t.call(this,ts.STAT_EVENT,t),this.stat=e}ht(KI,_t);function kt(t){const e=od();lt(e,new KI(e,t))}ts.Na="timingevent";function GI(t,e){_t.call(this,ts.Na,t),this.size=e}ht(GI,_t);function zl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var ad={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},QI={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Hy(){}Hy.prototype.h=null;function Aw(t){return t.h||(t.h=t.i())}function YI(){}var Bl={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function qy(){_t.call(this,"d")}ht(qy,_t);function Ky(){_t.call(this,"c")}ht(Ky,_t);var Im;function ld(){}ht(ld,Hy);ld.prototype.g=function(){return new XMLHttpRequest};ld.prototype.i=function(){return{}};Im=new ld;function jl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ol(this),this.P=rF,t=_m?125:void 0,this.W=new id(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new XI}function XI(){this.i=null,this.g="",this.h=!1}var rF=45e3,km={},lh={};O=jl.prototype;O.setTimeout=function(t){this.P=t};function bm(t,e,n){t.K=1,t.v=cd(hr(e)),t.s=n,t.U=!0,JI(t,null)}function JI(t,e){t.F=Date.now(),Wl(t),t.A=hr(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),sk(n.h,"t",r),t.C=0,n=t.l.H,t.h=new XI,t.g=Ik(t.l,n?e:null,!t.s),0<t.O&&(t.L=new J2(at(t.Ia,t,t.g),t.O)),WI(t.V,t.g,"readystatechange",t.gb),e=t.H?AI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),al(),Z2(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&er(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const c=er(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||_m||this.g&&(this.h.h||this.g.ga()||Mw(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?al(3):al(2)),ud(this);var n=this.g.ba();this.N=n;t:if(ZI(this)){var r=Mw(this.g);t="";var i=r.length,s=er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vi(this),Ta(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,eF(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oh(a)){var u=a;break t}}u=null}if(n=u)Ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xm(this,n);else{this.i=!1,this.o=3,kt(12),vi(this),Ta(this);break e}}this.U?(ek(this,c,o),_m&&this.i&&c==3&&(WI(this.V,this.W,"tick",this.fb),this.W.start())):(Ns(this.j,this.m,o,null),xm(this,o)),c==4&&vi(this),this.i&&!this.I&&(c==4?Ek(this.l,this):(this.i=!1,Wl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,kt(12)):(this.o=0,kt(13)),vi(this),Ta(this)}}}catch{}finally{}};function ZI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ek(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=iF(t,n),i==lh){e==4&&(t.o=4,kt(14),r=!1),Ns(t.j,t.m,null,"[Incomplete Response]");break}else if(i==km){t.o=4,kt(15),Ns(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ns(t.j,t.m,i,null),xm(t,i);ZI(t)&&i!=lh&&i!=km&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,kt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),nv(e),e.L=!0,kt(11))):(Ns(t.j,t.m,n,"[Invalid Chunked Response]"),vi(t),Ta(t))}O.fb=function(){if(this.g){var t=er(this.g),e=this.g.ga();this.C<e.length&&(ud(this),ek(this,t,e),this.i&&t!=4&&Wl(this))}};function iF(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?lh:(n=Number(e.substring(n,r)),isNaN(n)?km:(r+=1,r+n>e.length?lh:(e=e.substr(r,n),t.C=r+n,e)))}O.cancel=function(){this.I=!0,vi(this)};function Wl(t){t.Y=Date.now()+t.P,tk(t,t.P)}function tk(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zl(at(t.eb,t),e)}function ud(t){t.B&&(V.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(tF(this.j,this.A),this.K!=2&&(al(),kt(17)),vi(this),this.o=2,Ta(this)):tk(this,this.Y-t)};function Ta(t){t.l.G==0||t.I||Ek(t.l,t)}function vi(t){ud(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,jy(t.W),HI(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xm(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Rm(n.i,t))){if(n.I=t.N,!t.J&&Rm(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)dh(n),fd(n);else break e;tv(n),kt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=zl(at(n.ab,n),6e3));if(1>=lk(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else _i(n,11)}else if((t.J||n.g==t)&&dh(n),!oh(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;!s.g&&(Tt(p,"spdy")||Tt(p,"quic")||Tt(p,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Yy(s,s.h),s.h=null))}if(r.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.sa=y,we(r.F,r.D,y))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Tk(r,r.H?r.la:null,r.W),o.J){uk(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(ud(a),Wl(a)),r.g=o}else _k(r);0<n.l.length&&pd(n)}else u[0]!="stop"&&u[0]!="close"||_i(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?_i(n,7):ev(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}al(4)}catch{}}function sF(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(vm(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Gy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vm(t)||typeof t=="string")NI(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(vm(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=sF(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function xo(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof xo)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}O=xo.prototype;O.R=function(){Qy(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return Qy(this),this.g.concat()};function Qy(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ji(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ji(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}O.get=function(t,e){return ji(this.h,t)?this.h[t]:e};O.set=function(t,e){ji(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ji(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var nk=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function oF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wi(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Wi){this.g=e!==void 0?e:t.g,uh(this,t.j),this.s=t.s,ch(this,t.i),hh(this,t.m),this.l=t.l,e=t.h;var n=new ll;n.i=e.i,e.g&&(n.g=new xo(e.g),n.h=e.h),Pw(this,n),this.o=t.o}else t&&(n=String(t).match(nk))?(this.g=!!e,uh(this,n[1]||"",!0),this.s=Ia(n[2]||""),ch(this,n[3]||"",!0),hh(this,n[4]),this.l=Ia(n[5]||"",!0),Pw(this,n[6]||"",!0),this.o=Ia(n[7]||"")):(this.g=!!e,this.h=new ll(null,this.g))}Wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(aa(e,Ow,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(aa(e,Ow,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(aa(n,n.charAt(0)=="/"?hF:cF,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",aa(n,fF)),t.join("")};function hr(t){return new Wi(t)}function uh(t,e,n){t.j=n?Ia(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ch(t,e,n){t.i=n?Ia(e,!0):e}function hh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pw(t,e,n){e instanceof ll?(t.h=e,pF(t.h,t.g)):(n||(e=aa(e,dF)),t.h=new ll(e,t.g))}function we(t,e,n){t.h.set(e,n)}function cd(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function aF(t){return t instanceof Wi?hr(t):new Wi(t,void 0)}function lF(t,e,n,r){var i=new Wi(null,void 0);return t&&uh(i,t),e&&ch(i,e),n&&hh(i,n),r&&(i.l=r),i}function Ia(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function aa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ow=/[#\/\?@]/g,cF=/[#\?:]/g,hF=/[#\?]/g,dF=/[#\?@]/g,fF=/#/g;function ll(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ni(t){t.g||(t.g=new xo,t.h=0,t.i&&oF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=ll.prototype;O.add=function(t,e){ni(this),this.i=null,t=Ro(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function rk(t,e){ni(t),e=Ro(t,e),ji(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ji(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Qy(t)))}function ik(t,e){return ni(t),e=Ro(t,e),ji(t.g.h,e)}O.forEach=function(t,e){ni(this),this.g.forEach(function(n,r){NI(n,function(i){t.call(e,i,r,this)},this)},this)};O.T=function(){ni(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};O.R=function(t){ni(this);var e=[];if(typeof t=="string")ik(this,t)&&(e=Cw(e,this.g.get(Ro(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Cw(e,t[n])}return e};O.set=function(t,e){return ni(this),this.i=null,t=Ro(this,t),ik(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function sk(t,e,n){rk(t,e),0<n.length&&(t.i=null,t.g.set(Ro(t,e),Dy(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Ro(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pF(t,e){e&&!t.j&&(ni(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(rk(this,r),sk(this,i,n))},t)),t.j=e}var mF=class{constructor(t,e){this.h=t,this.g=e}};function ok(t){this.l=t||gF,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ea&&V.g.Ea()&&V.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gF=10;function ak(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function lk(t){return t.h?1:t.g?t.g.size:0}function Rm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yy(t,e){t.g?t.g.add(e):t.h=e}function uk(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ok.prototype.cancel=function(){if(this.i=ck(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ck(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Dy(t.i)}function Xy(){}Xy.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Xy.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function yF(){this.g=new Xy}function vF(t,e,n){const r=n||"";try{Gy(t,function(i,s){let o=i;Ul(i)&&(o=zy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _F(t,e){const n=new sd;if(V.Image){const r=new Image;r.onload=Nu(Pu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Nu(Pu,n,r,"TestLoadImage: error",!1,e),r.onabort=Nu(Pu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Nu(Pu,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Pu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Hl(t){this.l=t.$b||null,this.j=t.ib||!1}ht(Hl,Hy);Hl.prototype.g=function(){return new hd(this.l,this.j)};Hl.prototype.i=function(t){return function(){return t}}({});function hd(t,e){tt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Jy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ht(hd,tt);var Jy=0;O=hd.prototype;O.open=function(t,e){if(this.readyState!=Jy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ul(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ql(this)),this.readyState=Jy};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ul(this)),this.g&&(this.readyState=3,ul(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hk(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function hk(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ql(this):ul(this),this.readyState==3&&hk(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,ql(this))};O.Ta=function(t){this.g&&(this.response=t,ql(this))};O.ha=function(){this.g&&ql(this)};function ql(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ul(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ul(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wF=V.JSON.parse;function Le(t){tt.call(this),this.headers=new xo,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=dk,this.K=this.L=!1}ht(Le,tt);var dk="",EF=/^https?$/i,SF=["POST","PUT"];O=Le.prototype;O.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Im.g(),this.C=this.u?Aw(this.u):Aw(Im),this.g.onreadystatechange=at(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Dw(this,s);return}t=n||"";const i=new xo(this.headers);r&&Gy(r,function(s,o){i.set(o,s)}),r=O2(i.T()),n=V.FormData&&t instanceof V.FormData,!(0<=RI(SF,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{mk(this),0<this.B&&((this.K=CF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.pa,this)):this.A=Wy(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Dw(this,s)}};function CF(t){return oo&&F2()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function TF(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof Oy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function Dw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fk(t),dd(t)}function fk(t){t.D||(t.D=!0,lt(t,"complete"),lt(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),dd(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dd(this,!0)),Le.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?pk(this):this.cb())};O.cb=function(){pk(this)};function pk(t){if(t.h&&typeof Oy<"u"&&(!t.C[1]||er(t)!=4||t.ba()!=2)){if(t.v&&er(t)==4)Wy(t.Fa,0,t);else if(lt(t,"readystatechange"),er(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(nk)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!EF.test(i?i.toLowerCase():"")}n=r}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var o=2<er(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",fk(t)}}finally{dd(t)}}}}function dd(t,e){if(t.g){mk(t);const n=t.g,r=t.C[0]?sh:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=r}catch{}}}function mk(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function er(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<er(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wF(e)}};function Mw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case dk:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function IF(t){let e="";return My(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=IF(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Zo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gk(t){this.za=0,this.l=[],this.h=new sd,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Zo("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Zo("baseRetryDelayMs",5e3,t),this.$a=Zo("retryDelaySeedMs",1e4,t),this.Ya=Zo("forwardChannelMaxRetries",2,t),this.ra=Zo("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ok(t&&t.concurrentRequestLimit),this.Ca=new yF,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=gk.prototype;O.ma=8;O.G=1;function ev(t){if(yk(t),t.G==3){var e=t.V++,n=hr(t.F);we(n,"SID",t.J),we(n,"RID",e),we(n,"TYPE","terminate"),Kl(t,n),e=new jl(t,t.h,e,void 0),e.K=2,e.v=cd(hr(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ik(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Wl(e)}Ck(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function fd(t){t.g&&(nv(t),t.g.cancel(),t.g=null)}function yk(t){fd(t),t.u&&(V.clearTimeout(t.u),t.u=null),dh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function zf(t,e){t.l.push(new mF(t.Za++,e)),t.G==3&&pd(t)}function pd(t){ak(t.i)||t.m||(t.m=!0,By(t.Ha,t),t.C=0)}function kF(t,e){return lk(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=zl(at(t.Ha,t,e),Sk(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new jl(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=AI(s),PI(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vk(this,i,e),n=hr(this.F),we(n,"RID",t),we(n,"CVER",22),this.D&&we(n,"X-HTTP-Session-Id",this.D),Kl(this,n),this.o&&s&&Zy(n,this.o,s),Yy(this.i,i),this.Ra&&we(n,"TYPE","init"),this.ja?(we(n,"$req",e),we(n,"SID","null"),i.$=!0,bm(i,n,null)):bm(i,n,e),this.G=2}}else this.G==3&&(t?$w(this,t):this.l.length==0||ak(this.i)||$w(this))};function $w(t,e){var n;e?n=e.m:n=t.V++;const r=hr(t.F);we(r,"SID",t.J),we(r,"RID",n),we(r,"AID",t.U),Kl(t,r),t.o&&t.s&&Zy(r,t.o,t.s),n=new jl(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=vk(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Yy(t.i,n),bm(n,r,e)}function Kl(t,e){t.j&&Gy({},function(n,r){we(e,r,n)})}function vk(t,e,n){n=Math.min(t.l.length,n);var r=t.j?at(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{vF(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function _k(t){t.g||t.u||(t.Y=1,By(t.Ga,t),t.A=0)}function tv(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=zl(at(t.Ga,t),Sk(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,wk(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=zl(at(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,kt(10),fd(this),wk(this))};function nv(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function wk(t){t.g=new jl(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=hr(t.oa);we(e,"RID","rpc"),we(e,"SID",t.J),we(e,"CI",t.N?"0":"1"),we(e,"AID",t.U),Kl(t,e),we(e,"TYPE","xmlhttp"),t.o&&t.s&&Zy(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=cd(hr(e)),n.s=null,n.U=!0,JI(n,t)}O.ab=function(){this.v!=null&&(this.v=null,fd(this),tv(this),kt(19))};function dh(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function Ek(t,e){var n=null;if(t.g==e){dh(t),nv(t),t.g=null;var r=2}else if(Rm(t.i,e))n=e.D,uk(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=od(),lt(r,new GI(r,n)),pd(t)}else _k(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&kF(t,e)||r==2&&tv(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:_i(t,5);break;case 4:_i(t,10);break;case 3:_i(t,6);break;default:_i(t,2)}}}function Sk(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function _i(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=at(t.jb,t);n||(n=new Wi("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||uh(n,"https"),cd(n)),_F(n.toString(),r)}else kt(2);t.G=0,t.j&&t.j.va(e),Ck(t),yk(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),kt(2)):(this.h.info("Failed to ping google.com"),kt(1))};function Ck(t){t.G=0,t.I=-1,t.j&&((ck(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Dy(t.l),t.l.length=0),t.j.ua())}function Tk(t,e,n){let r=aF(n);if(r.i!="")e&&ch(r,e+"."+r.i),hh(r,r.m);else{const i=V.location;r=lF(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&My(t.aa,function(i,s){we(r,s,i)}),e=t.D,n=t.sa,e&&n&&we(r,e,n),we(r,"VER",t.ma),Kl(t,r),r}function Ik(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Le(new Hl({ib:!0})):new Le(t.qa),e.L=t.H,e}function kk(){}O=kk.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function fh(){if(oo&&!(10<=Number(U2)))throw Error("Environmental error: no available transport.")}fh.prototype.g=function(t,e){return new en(t,e)};function en(t,e){tt.call(this),this.g=new gk(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!oh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oh(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new No(this)}ht(en,tt);en.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),By(at(t.hb,t,e))),kt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Tk(t,null,t.W),pd(t)};en.prototype.close=function(){ev(this.g)};en.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,zf(this.g,e)}else this.v?(e={},e.__data__=zy(t),zf(this.g,e)):zf(this.g,t)};en.prototype.M=function(){this.g.j=null,delete this.j,ev(this.g),delete this.g,en.Z.M.call(this)};function bk(t){qy.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ht(bk,qy);function xk(){Ky.call(this),this.status=1}ht(xk,Ky);function No(t){this.g=t}ht(No,kk);No.prototype.xa=function(){lt(this.g,"a")};No.prototype.wa=function(t){lt(this.g,new bk(t))};No.prototype.va=function(t){lt(this.g,new xk)};No.prototype.ua=function(){lt(this.g,"b")};fh.prototype.createWebChannel=fh.prototype.g;en.prototype.send=en.prototype.u;en.prototype.open=en.prototype.m;en.prototype.close=en.prototype.close;ad.NO_ERROR=0;ad.TIMEOUT=8;ad.HTTP_ERROR=6;QI.COMPLETE="complete";YI.EventType=Bl;Bl.OPEN="a";Bl.CLOSE="b";Bl.ERROR="c";Bl.MESSAGE="d";tt.prototype.listen=tt.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.La;Le.prototype.getLastErrorCode=Le.prototype.Da;Le.prototype.getStatus=Le.prototype.ba;Le.prototype.getResponseJson=Le.prototype.Qa;Le.prototype.getResponseText=Le.prototype.ga;Le.prototype.send=Le.prototype.ea;var bF=function(){return new fh},xF=function(){return od()},Bf=ad,RF=QI,NF=ts,Lw={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},AF=Hl,Ou=YI,PF=Le;const Fw="@firebase/firestore";/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let Ao="9.9.4";/**
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
 */const Hi=new xl("@firebase/firestore");function Uw(){return Hi.logLevel}function M(t,...e){if(Hi.logLevel<=ne.DEBUG){const n=e.map(rv);Hi.debug(`Firestore (${Ao}): ${t}`,...n)}}function dr(t,...e){if(Hi.logLevel<=ne.ERROR){const n=e.map(rv);Hi.error(`Firestore (${Ao}): ${t}`,...n)}}function Vw(t,...e){if(Hi.logLevel<=ne.WARN){const n=e.map(rv);Hi.warn(`Firestore (${Ao}): ${t}`,...n)}}function rv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function j(t="Unexpected state"){const e=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: `+t;throw dr(e),new Error(e)}function pe(t,e){t||j()}function H(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class OF{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DF{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class MF{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new bi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string"),new OF(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new At(e)}}class $F{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=At.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(pe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class LF{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new $F(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FF{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UF{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.A=n.token,new FF(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function VF(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Rk{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=VF(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function ao(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Be(0,0))}static max(){return new Y(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends cl{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const zF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends cl{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return zF.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(Ee.fromString(e))}static fromName(e){return new F(Ee.fromString(e).popFirst(5))}static empty(){return new F(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new Ee(e.slice()))}}function BF(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Kr(i,F.empty(),e)}function jF(t){return new Kr(t.readTime,t.key,-1)}class Kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kr(Y.min(),F.empty(),-1)}static max(){return new Kr(Y.max(),F.empty(),-1)}}function WF(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const HF="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gl(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==HF)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ql(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class iv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function zw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Po(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Nk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */iv.at=-1;class He{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Du(this.root,e,this.comparator,!1)}getReverseIterator(){return new Du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Du(this.root,e,this.comparator,!0)}}class Du{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:it.RED,this.left=i!=null?i:it.EMPTY,this.right=s!=null?s:it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,r,i){return this}insert(t,e,n){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bw(this.data.getIterator())}getIteratorFrom(e){return new Bw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Bw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new Un([])}unionWith(e){let n=new je(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ao(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ct(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const KF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(t){if(pe(!!t),typeof t=="string"){let e=0;const n=KF.exec(t);if(pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function lo(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */function Ak(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pk(t){const e=t.mapValue.fields.__previous_value__;return Ak(e)?Pk(e):e}function hl(t){const e=Gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class GF{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class dl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new dl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof dl&&e.projectId===this.projectId&&e.database===this.database}}function md(t){return t==null}function ph(t){return t===0&&1/t==-1/0}function QF(t){return typeof t=="number"&&Number.isInteger(t)&&!ph(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Mu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ak(t)?4:YF(t)?9007199254740991:10:j()}function Bn(t,e){if(t===e)return!0;const n=qi(t);if(n!==qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hl(t).isEqual(hl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Gr(r.timestampValue),o=Gr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return lo(r.bytesValue).isEqual(lo(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Oe(r.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(r.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Oe(r.integerValue)===Oe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Oe(r.doubleValue),o=Oe(i.doubleValue);return s===o?ph(s)===ph(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ao(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(zw(s)!==zw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Bn(s[a],o[a])))return!1;return!0}(t,e);default:return j()}}function fl(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function uo(t,e){if(t===e)return 0;const n=qi(t),r=qi(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Oe(i.integerValue||i.doubleValue),a=Oe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return jw(t.timestampValue,e.timestampValue);case 4:return jw(hl(t),hl(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,s){const o=lo(i),a=lo(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=le(o[l],a[l]);if(u!==0)return u}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=le(Oe(i.latitude),Oe(s.latitude));return o!==0?o:le(Oe(i.longitude),Oe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=uo(o[l],a[l]);if(u)return u}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Mu.mapValue&&s===Mu.mapValue)return 0;if(i===Mu.mapValue)return 1;if(s===Mu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=le(a[c],u[c]);if(h!==0)return h;const d=uo(o[a[c]],l[u[c]]);if(d!==0)return d}return le(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function jw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Gr(t),r=Gr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function js(t){return Nm(t)}function Nm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Gr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?lo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Nm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Nm(r.fields[a])}`;return s+"}"}(t.mapValue):j();var e,n}function Am(t){return!!t&&"integerValue"in t}function sv(t){return!!t&&"arrayValue"in t}function Ww(t){return!!t&&"nullValue"in t}function Hw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sc(t){return!!t&&"mapValue"in t}function ka(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Po(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ka(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ka(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ka(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ka(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());sc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];sc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Po(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new un(ka(this.value))}}function Ok(t){const e=[];return Po(t.fields,(n,r)=>{const i=new vt([n]);if(sc(r)){const s=Ok(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Un(e)}/**
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
 */class st{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new st(e,0,Y.min(),Y.min(),un.empty(),0)}static newFoundDocument(e,n,r){return new st(e,1,n,Y.min(),r,0)}static newNoDocument(e,n){return new st(e,2,n,Y.min(),un.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,Y.min(),un.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class XF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function qw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new XF(t,e,n,r,i,s,o)}function ov(t){const e=H(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+js(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),md(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>js(r)).join(",")),e.ht=n}return e.ht}function JF(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${js(r.value)}`;var r}).join(", ")}]`),md(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>js(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>js(n)).join(",")),`Target(${e})`}function av(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!oU(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Bn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gw(t.startAt,e.startAt)&&Gw(t.endAt,e.endAt)}function Pm(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ft extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new ZF(e,n,r):n==="array-contains"?new nU(e,r):n==="in"?new rU(e,r):n==="not-in"?new iU(e,r):n==="array-contains-any"?new sU(e,r):new Ft(e,n,r)}static lt(e,n,r){return n==="in"?new eU(e,r):new tU(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(uo(n,this.value)):n!==null&&qi(this.value)===qi(n)&&this.ft(uo(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ZF extends Ft{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.ft(n)}}class eU extends Ft{constructor(e,n){super(e,"in",n),this.keys=Dk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tU extends Ft{constructor(e,n){super(e,"not-in",n),this.keys=Dk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class nU extends Ft{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sv(n)&&fl(n.arrayValue,this.value)}}class rU extends Ft{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fl(this.value.arrayValue,n)}}class iU extends Ft{constructor(e,n){super(e,"not-in",n)}matches(e){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fl(this.value.arrayValue,n)}}class sU extends Ft{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fl(this.value.arrayValue,r))}}class mh{constructor(e,n){this.position=e,this.inclusive=n}}class Ws{constructor(e,n="asc"){this.field=e,this.dir=n}}function oU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Kw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=uo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function aU(t,e,n,r,i,s,o,a){return new Yl(t,e,n,r,i,s,o,a)}function lv(t){return new Yl(t)}function Qw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Mk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $k(t){for(const e of t.filters)if(e.dt())return e.field;return null}function lU(t){return t.collectionGroup!==null}function pl(t){const e=H(t);if(e._t===null){e._t=[];const n=$k(e),r=Mk(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Ws(n)),e._t.push(new Ws(vt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ws(vt.keyField(),s))}}}return e._t}function fr(t){const e=H(t);if(!e.wt)if(e.limitType==="F")e.wt=qw(e.path,e.collectionGroup,pl(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of pl(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ws(s.field,o))}const r=e.endAt?new mh(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new mh(e.startAt.position,e.startAt.inclusive):null;e.wt=qw(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function gh(t,e,n){return new Yl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xl(t,e){return av(fr(t),fr(e))&&t.limitType===e.limitType}function Lk(t){return`${ov(fr(t))}|lt:${t.limitType}`}function Om(t){return`Query(target=${JF(fr(t))}; limitType=${t.limitType})`}function uv(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Kw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,pl(n),r)||n.endAt&&!function(i,s,o){const a=Kw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,pl(n),r))}(t,e)}function uU(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fk(t){return(e,n)=>{let r=!1;for(const i of pl(t)){const s=cU(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cU(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?uo(a,l):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
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
 */function Uk(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ph(e)?"-0":e}}function Vk(t){return{integerValue:""+t}}function hU(t,e){return QF(e)?Vk(e):Uk(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class gd{constructor(){this._=void 0}}function dU(t,e,n){return t instanceof ml?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof gl?Bk(t,e):t instanceof yl?jk(t,e):function(r,i){const s=zk(r,i),o=Yw(s)+Yw(r.yt);return Am(s)&&Am(r.yt)?Vk(o):Uk(r.It,o)}(t,e)}function fU(t,e,n){return t instanceof gl?Bk(t,e):t instanceof yl?jk(t,e):n}function zk(t,e){return t instanceof yh?Am(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ml extends gd{}class gl extends gd{constructor(e){super(),this.elements=e}}function Bk(t,e){const n=Wk(e);for(const r of t.elements)n.some(i=>Bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class yl extends gd{constructor(e){super(),this.elements=e}}function jk(t,e){let n=Wk(e);for(const r of t.elements)n=n.filter(i=>!Bn(i,r));return{arrayValue:{values:n}}}class yh extends gd{constructor(e,n){super(),this.It=e,this.yt=n}}function Yw(t){return Oe(t.integerValue||t.doubleValue)}function Wk(t){return sv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class pU{constructor(e,n){this.field=e,this.transform=n}}function mU(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof gl&&r instanceof gl||n instanceof yl&&r instanceof yl?ao(n.elements,r.elements,Bn):n instanceof yh&&r instanceof yh?Bn(n.yt,r.yt):n instanceof ml&&r instanceof ml}(t.transform,e.transform)}class gU{constructor(e,n){this.version=e,this.transformResults=n}}class rr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rr}static exists(e){return new rr(void 0,e)}static updateTime(e){return new rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yd{}function Hk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kk(t.key,rr.none()):new Jl(t.key,t.data,rr.none());{const n=t.data,r=un.empty();let i=new je(vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ns(t.key,r,new Un(i.toArray()),rr.none())}}function yU(t,e,n){t instanceof Jl?function(r,i,s){const o=r.value.clone(),a=Jw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ns?function(r,i,s){if(!oc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Jw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(qk(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ba(t,e,n,r){return t instanceof Jl?function(i,s,o,a){if(!oc(i.precondition,s))return o;const l=i.value.clone(),u=Zw(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ns?function(i,s,o,a){if(!oc(i.precondition,s))return o;const l=Zw(i.fieldTransforms,a,s),u=s.data;return u.setAll(qk(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return oc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function vU(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=zk(r.transform,i||null);s!=null&&(n===null&&(n=un.empty()),n.set(r.field,s))}return n||null}function Xw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ao(n,r,(i,s)=>mU(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jl extends yd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ns extends yd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jw(t,e,n){const r=new Map;pe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,fU(o,a,n[i]))}return r}function Zw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,dU(s,o,e))}return r}class Kk extends yd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _U extends yd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wU{constructor(e){this.count=e}}/**
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
 */var Pe,te;function EU(t){switch(t){default:return j();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Gk(t){if(t===void 0)return dr("GRPC error has no .code"),T.UNKNOWN;switch(t){case Pe.OK:return T.OK;case Pe.CANCELLED:return T.CANCELLED;case Pe.UNKNOWN:return T.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return T.INTERNAL;case Pe.UNAVAILABLE:return T.UNAVAILABLE;case Pe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Pe.NOT_FOUND:return T.NOT_FOUND;case Pe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Pe.ABORTED:return T.ABORTED;case Pe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Pe.DATA_LOSS:return T.DATA_LOSS;default:return j()}}(te=Pe||(Pe={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Oo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Po(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Nk(this.inner)}size(){return this.innerSize}}/**
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
 */const SU=new He(F.comparator);function pr(){return SU}const Qk=new He(F.comparator);function la(...t){let e=Qk;for(const n of t)e=e.insert(n.key,n);return e}function Yk(t){let e=Qk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wi(){return xa()}function Xk(){return xa()}function xa(){return new Oo(t=>t.toString(),(t,e)=>t.isEqual(e))}const CU=new He(F.comparator),TU=new je(F.comparator);function Z(...t){let e=TU;for(const n of t)e=e.add(n);return e}const IU=new je(le);function Jk(){return IU}/**
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
 */class vd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Zl.createSynthesizedTargetChangeForCurrentChange(e,n)),new vd(Y.min(),r,Jk(),pr(),Z())}}class Zl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Zl(ct.EMPTY_BYTE_STRING,n,Z(),Z(),Z())}}/**
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
 */class ac{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class Zk{constructor(e,n){this.targetId=e,this.At=n}}class eb{constructor(e,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class e1{constructor(){this.Rt=0,this.bt=n1(),this.Pt=ct.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Z(),n=Z(),r=Z();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new Zl(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=n1()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class kU{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=pr(),this.qt=t1(),this.Kt=new je(le)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Pm(s))if(r===0){const o=new F(s.path);this.jt(n,o,st.newNoDocument(o,Y.min()))}else pe(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Pm(a.target)){const l=new F(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,st.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=Z();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new vd(e,n,this.Kt,this.Ut,r);return this.Ut=pr(),this.qt=t1(),this.Kt=new je(le),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new e1,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new je(le),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new e1),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function t1(){return new He(F.comparator)}function n1(){return new He(F.comparator)}/**
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
 */const bU=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xU=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class RU{constructor(e,n){this.databaseId=e,this.gt=n}}function vh(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tb(t,e){return t.gt?e.toBase64():e.toUint8Array()}function NU(t,e){return vh(t,e.toTimestamp())}function ir(t){return pe(!!t),Y.fromTimestamp(function(e){const n=Gr(e);return new Be(n.seconds,n.nanos)}(t))}function cv(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function nb(t){const e=Ee.fromString(t);return pe(sb(e)),e}function Dm(t,e){return cv(t.databaseId,e.path)}function jf(t,e){const n=nb(e);if(n.get(1)!==t.databaseId.projectId)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(rb(n))}function Mm(t,e){return cv(t.databaseId,e)}function AU(t){const e=nb(t);return e.length===4?Ee.emptyPath():rb(e)}function $m(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rb(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function r1(t,e,n){return{name:Dm(t,e),fields:n.value.mapValue.fields}}function PU(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(pe(u===void 0||typeof u=="string"),ct.fromBase64String(u||"")):(pe(u===void 0||u instanceof Uint8Array),ct.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:Gk(l.code);return new L(u,l.message||"")}(o);n=new eb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jf(t,r.document.name),s=ir(r.document.updateTime),o=new un({mapValue:{fields:r.document.fields}}),a=st.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ac(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jf(t,r.document),s=r.readTime?ir(r.readTime):Y.min(),o=st.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ac([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jf(t,r.document),s=r.removedTargetIds||[];n=new ac([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new wU(i),o=r.targetId;n=new Zk(o,s)}}return n}function OU(t,e){let n;if(e instanceof Jl)n={update:r1(t,e.key,e.value)};else if(e instanceof Kk)n={delete:Dm(t,e.key)};else if(e instanceof ns)n={update:r1(t,e.key,e.data),updateMask:jU(e.fieldMask)};else{if(!(e instanceof _U))return j();n={verify:Dm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ml)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof gl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof yl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yh)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:NU(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(t,e.precondition)),n}function DU(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?ir(r.updateTime):ir(i);return s.isEqual(Y.min())&&(s=ir(i)),new gU(s,r.transformResults||[])}(n,e))):[]}function MU(t,e){return{documents:[Mm(t,e.path)]}}function $U(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Mm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Mm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Hw(h.value))return{unaryFilter:{field:cs(h.field),op:"IS_NAN"}};if(Ww(h.value))return{unaryFilter:{field:cs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Hw(h.value))return{unaryFilter:{field:cs(h.field),op:"IS_NOT_NAN"}};if(Ww(h.value))return{unaryFilter:{field:cs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(h.field),op:VU(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:cs(c.field),direction:UU(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||md(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function LU(t){let e=AU(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=ib(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ws(As(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,md(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new mh(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new mh(d,h)}(n.endAt)),aU(e,i,o,s,a,"F",l,u)}function FU(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ib(t){return t?t.unaryFilter!==void 0?[BU(t)]:t.fieldFilter!==void 0?[zU(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ib(e)).reduce((e,n)=>e.concat(n)):j():[]}function UU(t){return bU[t]}function VU(t){return xU[t]}function cs(t){return{fieldPath:t.canonicalString()}}function As(t){return vt.fromServerFormat(t.fieldPath)}function zU(t){return Ft.create(As(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}function BU(t){switch(t.unaryFilter.op){case"IS_NAN":const e=As(t.unaryFilter.field);return Ft.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=As(t.unaryFilter.field);return Ft.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=As(t.unaryFilter.field);return Ft.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=As(t.unaryFilter.field);return Ft.create(i,"!=",{nullValue:"NULL_VALUE"});default:return j()}}function jU(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class WU{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yU(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ba(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ba(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Xk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Hk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&ao(this.mutations,e.mutations,(n,r)=>Xw(n,r))&&ao(this.baseMutations,e.baseMutations,(n,r)=>Xw(n,r))}}class hv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){pe(e.mutations.length===r.length);let i=CU;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new hv(e,n,r,i)}}/**
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
 */class HU{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class xi{constructor(e,n,r,i,s=Y.min(),o=Y.min(),a=ct.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new xi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class qU{constructor(e){this.re=e}}function KU(t){const e=LU({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gh(e,e.limit,"L"):e}/**
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
 */class GU{constructor(){this.Ye=new QU}addToCollectionParentIndex(e,n){return this.Ye.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Kr.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Kr.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class QU{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(Ee.comparator)).toArray()}}/**
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
 */class co{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new co(0)}static vn(){return new co(-1)}}/**
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
 */class YU{constructor(){this.changes=new Oo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JU{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ba(r.mutation,i,Un.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=la();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=pr();const o=xa(),a=xa();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ns)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),ba(c.mutation,u,c.mutation.getFieldMask(),Be.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new XU(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=xa();let i=new He((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Un.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Z()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Xk();c.forEach(d=>{if(!s.has(d)){const f=Hk(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lU(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(wi());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Z())).next(c=>({batchId:a,changes:Yk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let i=la();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=la();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,c){return new Yl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,st.newInvalidDocument(u)))});let o=la();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&ba(u.mutation,l,Un.empty(),Be.now()),uv(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):k.resolve(st.newInvalidDocument(n))}}/**
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
 */class ZU{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return k.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:ir(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:KU(r.bundledQuery),readTime:ir(r.readTime)}}(n)),k.resolve()}}/**
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
 */class e3{constructor(){this.overlays=new He(F.comparator),this.es=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wi();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=wi(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new He((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=wi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=wi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HU(n,r));let s=this.es.get(n);s===void 0&&(s=Z(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class dv{constructor(){this.ns=new je(Ke.ss),this.rs=new je(Ke.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ke(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new F(new Ee([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new F(new Ee([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=Z();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return F.comparator(e.key,n.key)||le(e._s,n._s)}static os(e,n){return le(e._s,n._s)||F.comparator(e.key,n.key)}}/**
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
 */class t3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new je(Ke.ss)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WU(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(le);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),k.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new F(s),0);let a=new je(le);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),k.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return k.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ke(n,0),i=this.gs.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class n3{constructor(e){this.Es=e,this.docs=new He(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=pr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),k.resolve(r)}getAllFromCollection(e,n,r){let i=pr();const s=new F(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||WF(jF(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,r,i){j()}As(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new r3(this)}getSize(e){return k.resolve(this.size)}}class r3 extends YU{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class i3{constructor(e){this.persistence=e,this.Rs=new Oo(n=>ov(n),av),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.bs=0,this.Ps=new dv,this.targetCount=0,this.vs=co.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),k.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new co(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Dn(n),k.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Ps.containsKey(n))}}/**
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
 */class s3{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new iv(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new i3(this),this.indexManager=new GU,this.remoteDocumentCache=function(r){return new n3(r)}(r=>this.referenceDelegate.xs(r)),this.It=new qU(n),this.Ns=new ZU(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new e3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new t3(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new o3(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return k.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class o3 extends qF{constructor(e){super(),this.currentSequenceNumber=e}}class fv{constructor(e){this.persistence=e,this.Fs=new dv,this.$s=null}static Bs(e){return new fv(e)}get Ls(){if(this.$s)return this.$s;throw j()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),k.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Ls,r=>{const i=F.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return k.or([()=>k.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class pv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new pv(e,n.fromCache,r,i)}}/**
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
 */class a3{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(Qw(n))return k.resolve(null);let r=fr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gh(n,null,"F"),r=fr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,gh(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return Qw(n)||i.isEqual(Y.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(Uw()<=ne.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Om(n)),this.Bi(e,o,n,BF(i,-1)))})}Fi(e,n){let r=new je(Fk(e));return n.forEach((i,s)=>{uv(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Uw()<=ne.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Om(n)),this.Ni.getDocumentsMatchingQuery(e,n,Kr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class l3{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new He(le),this.qi=new Oo(s=>ov(s),av),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JU(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function u3(t,e,n,r){return new l3(t,e,n,r)}async function ob(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Z();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function c3(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=k.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const y=l.docVersions.get(f);pe(y!==null),p.version.compareTo(y)<0&&(c.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Z();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ab(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function h3(t,e){const n=H(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(ct.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(p,y,w){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let l=pr(),u=Z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(d3(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(Y.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function d3(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=pr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function f3(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function p3(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new xi(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Lm(t,e,n){const r=H(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ql(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function i1(t,e,n){const r=H(t);let i=Y.min(),s=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=H(a),h=c.qi.get(u);return h!==void 0?k.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,fr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:Z())).next(a=>(m3(r,uU(e),a),{documents:a,Hi:s})))}function m3(t,e,n){let r=Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class s1{constructor(){this.activeTargetIds=Jk()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g3{constructor(){this.Lr=new s1,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new s1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class y3{qr(e){}shutdown(){}}/**
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
 */class o1{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const v3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class _3{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class w3 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);M("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(M("RestConnection","Received: ",l),l),l=>{throw Vw("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ao,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=v3[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new PF;a.listenOnce(RF.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bf.NO_ERROR:const u=a.getResponseJson();M("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Bf.TIMEOUT:M("Connection",'RPC "'+e+'" timed out'),o(new L(T.DEADLINE_EXCEEDED,"Request time out"));break;case Bf.HTTP_ERROR:const c=a.getStatus();if(M("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(p)>=0?p:T.UNKNOWN}(h.status);o(new L(d,h.message))}else o(new L(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(T.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{M("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=bF(),o=xF(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new AF({})),this.ho(a.initMessageHeaders,n,r),jh()||Hg()||tP()||xC()||nP()||bC()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");M("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new _3({Hr:p=>{h?M("Connection","Not sending because WebChannel is closed:",p):(c||(M("Connection","Opening WebChannel transport."),u.open(),c=!0),M("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),f=(p,y,w)=>{p.listen(y,g=>{try{w(g)}catch(m){setTimeout(()=>{throw m},0)}})};return f(u,Ou.EventType.OPEN,()=>{h||M("Connection","WebChannel transport opened.")}),f(u,Ou.EventType.CLOSE,()=>{h||(h=!0,M("Connection","WebChannel transport closed"),d.io())}),f(u,Ou.EventType.ERROR,p=>{h||(h=!0,Vw("Connection","WebChannel transport errored:",p),d.io(new L(T.UNAVAILABLE,"The operation could not be completed")))}),f(u,Ou.EventType.MESSAGE,p=>{var y;if(!h){const w=p.data[0];pe(!!w);const g=w,m=g.error||((y=g[0])===null||y===void 0?void 0:y.error);if(m){M("Connection","WebChannel received error:",m);const v=m.status;let _=function(S){const C=Pe[S];if(C!==void 0)return Gk(C)}(v),E=m.message;_===void 0&&(_=T.INTERNAL,E="Unknown error status: "+v+" with message "+m.message),h=!0,d.io(new L(_,E)),u.close()}else M("Connection","WebChannel received:",w),d.ro(w)}}),f(o,NF.STAT_EVENT,p=>{p.stat===Lw.PROXY?M("Connection","Detected buffering proxy"):p.stat===Lw.NOPROXY&&M("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Wf(){return typeof document<"u"?document:null}/**
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
 */function _d(t){return new RU(t,!0)}class lb{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class ub{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new lb(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new L(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E3 extends ub{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=PU(this.It,e),r=function(i){if(!("targetChange"in i))return Y.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Y.min():s.readTime?ir(s.readTime):Y.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=$m(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Pm(a)?{documents:MU(i,a)}:{query:$U(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=tb(i,s.resumeToken):s.snapshotVersion.compareTo(Y.min())>0&&(o.readTime=vh(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=FU(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=$m(this.It),n.removeTarget=e,this.Bo(n)}}class S3 extends ub{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=DU(e.writeResults,e.commitTime),r=ir(e.commitTime);return this.listener.Zo(r,n)}return pe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=$m(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>OU(this.It,r))};this.Bo(n)}}/**
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
 */class C3 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(T.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(T.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class T3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(dr(n),this.ou=!1):M("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class I3{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{rs(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=H(a);l._u.add(4),await eu(l),l.gu.set("Unknown"),l._u.delete(4),await wd(l)}(this))})}),this.gu=new T3(r,i)}}async function wd(t){if(rs(t))for(const e of t.wu)await e(!0)}async function eu(t){for(const e of t.wu)await e(!1)}function cb(t,e){const n=H(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),yv(n)?gv(n):Do(n).ko()&&mv(n,e))}function hb(t,e){const n=H(t),r=Do(n);n.du.delete(e),r.ko()&&db(n,e),n.du.size===0&&(r.ko()?r.Fo():rs(n)&&n.gu.set("Unknown"))}function mv(t,e){t.yu.Ot(e.targetId),Do(t).zo(e)}function db(t,e){t.yu.Ot(e),Do(t).Ho(e)}function gv(t){t.yu=new kU({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Do(t).start(),t.gu.uu()}function yv(t){return rs(t)&&!Do(t).No()&&t.du.size>0}function rs(t){return H(t)._u.size===0}function fb(t){t.yu=void 0}async function k3(t){t.du.forEach((e,n)=>{mv(t,e)})}async function b3(t,e){fb(t),yv(t)?(t.gu.hu(e),gv(t)):t.gu.set("Unknown")}async function x3(t,e,n){if(t.gu.set("Online"),e instanceof eb&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _h(t,r)}else if(e instanceof ac?t.yu.Gt(e):e instanceof Zk?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(Y.min()))try{const r=await ab(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(ct.EMPTY_BYTE_STRING,l.snapshotVersion)),db(i,a);const u=new xi(l.target,a,1,l.sequenceNumber);mv(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await _h(t,r)}}async function _h(t,e,n){if(!Ql(e))throw e;t._u.add(1),await eu(t),t.gu.set("Offline"),n||(n=()=>ab(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await wd(t)})}function pb(t,e){return e().catch(n=>_h(t,n,e))}async function Ed(t){const e=H(t),n=Qr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;R3(e);)try{const i=await f3(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,N3(e,i)}catch(i){await _h(e,i)}mb(e)&&gb(e)}function R3(t){return rs(t)&&t.fu.length<10}function N3(t,e){t.fu.push(e);const n=Qr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function mb(t){return rs(t)&&!Qr(t).No()&&t.fu.length>0}function gb(t){Qr(t).start()}async function A3(t){Qr(t).eu()}async function P3(t){const e=Qr(t);for(const n of t.fu)e.Xo(n.mutations)}async function O3(t,e,n){const r=t.fu.shift(),i=hv.from(r,e,n);await pb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ed(t)}async function D3(t,e){e&&Qr(t).Yo&&await async function(n,r){if(i=r.code,EU(i)&&i!==T.ABORTED){const s=n.fu.shift();Qr(n).Oo(),await pb(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ed(n)}var i}(t,e),mb(t)&&gb(t)}async function a1(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=rs(n);n._u.add(3),await eu(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await wd(n)}async function M3(t,e){const n=H(t);e?(n._u.delete(2),await wd(n)):e||(n._u.add(2),await eu(n),n.gu.set("Unknown"))}function Do(t){return t.pu||(t.pu=function(e,n,r){const i=H(e);return i.su(),new E3(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:k3.bind(null,t),Zr:b3.bind(null,t),Wo:x3.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),yv(t)?gv(t):t.gu.set("Unknown")):(await t.pu.stop(),fb(t))})),t.pu}function Qr(t){return t.Iu||(t.Iu=function(e,n,r){const i=H(e);return i.su(),new S3(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:A3.bind(null,t),Zr:D3.bind(null,t),tu:P3.bind(null,t),Zo:O3.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await Ed(t)):(await t.Iu.stop(),t.fu.length>0&&(M("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class vv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new vv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _v(t,e){if(dr("AsyncQueue",`${e}: ${t}`),Ql(t))return new L(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=la(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class l1{constructor(){this.Tu=new He(F.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):j():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ho{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new ho(e,n,Hs.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class $3{constructor(){this.Au=void 0,this.listeners=[]}}class L3{constructor(){this.queries=new Oo(e=>Lk(e),Xl),this.onlineState="Unknown",this.Ru=new Set}}async function F3(t,e){const n=H(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new $3),i)try{s.Au=await n.onListen(r)}catch(o){const a=_v(o,`Initialization of query '${Om(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&wv(n)}async function U3(t,e){const n=H(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function V3(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&wv(n)}function z3(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function wv(t){t.Ru.forEach(e=>{e.next()})}class B3{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ho(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
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
 */class yb{constructor(e){this.key=e}}class vb{constructor(e){this.key=e}}class j3{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=Z(),this.mutatedKeys=Z(),this.Ku=Fk(e),this.Gu=new Hs(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new l1,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=uv(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?p!==y&&(r.track({type:3,doc:f}),w=!0):this.zu(d,f)||(r.track({type:2,doc:f}),w=!0,(l&&this.Ku(f,l)>0||u&&this.Ku(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return f(h)-f(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new ho(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new l1,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=Z(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new vb(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new yb(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=Z();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return ho.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class W3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class H3{constructor(e){this.key=e,this.ec=!1}}class q3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Oo(a=>Lk(a),Xl),this.ic=new Map,this.rc=new Set,this.oc=new He(F.comparator),this.uc=new Map,this.cc=new dv,this.ac={},this.hc=new Map,this.lc=co.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function K3(t,e){const n=r4(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await p3(n.localStore,fr(e));n.isPrimaryClient&&cb(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await G3(n,e,r,a==="current")}return i}async function G3(t,e,n,r){t.dc=(c,h,d)=>async function(f,p,y,w){let g=p.view.ju(y);g.$i&&(g=await i1(f.localStore,p.query,!1).then(({documents:_})=>p.view.ju(_,g)));const m=w&&w.targetChanges.get(p.targetId),v=p.view.applyChanges(g,f.isPrimaryClient,m);return c1(f,p.targetId,v.Yu),v.snapshot}(t,c,h,d);const i=await i1(t.localStore,e,!0),s=new j3(e,i.Hi),o=s.ju(i.documents),a=Zl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);c1(t,n,l.Yu);const u=new W3(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function Q3(t,e){const n=H(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Xl(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Lm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hb(n.remoteStore,r.targetId),Fm(n,r.targetId)}).catch(Gl)):(Fm(n,r.targetId),await Lm(n.localStore,r.targetId,!0))}async function Y3(t,e,n){const r=i4(t);try{const i=await function(s,o){const a=H(s),l=Be.now(),u=o.reduce((d,f)=>d.add(f.key),Z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=pr(),p=Z();return a.Gi.getEntries(d,u).next(y=>{f=y,f.forEach((w,g)=>{g.isValidDocument()||(p=p.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{c=y;const w=[];for(const g of o){const m=vU(g,c.get(g.key).overlayedDocument);m!=null&&w.push(new ns(g.key,m,Ok(m.value.mapValue),rr.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(c,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Yk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new He(le)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await tu(r,i.changes),await Ed(r.remoteStore)}catch(i){const s=_v(i,"Failed to persist write");n.reject(s)}}async function _b(t,e){const n=H(t);try{const r=await h3(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?pe(o.ec):i.removedDocuments.size>0&&(pe(o.ec),o.ec=!1))}),await tu(n,r,e)}catch(r){await Gl(r)}}function u1(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=H(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&wv(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function X3(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new He(F.comparator);o=o.insert(s,st.newNoDocument(s,Y.min()));const a=Z().add(s),l=new vd(Y.min(),new Map,new je(le),o,a);await _b(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Ev(r)}else await Lm(r.localStore,e,!1).then(()=>Fm(r,e,n)).catch(Gl)}async function J3(t,e){const n=H(t),r=e.batch.batchId;try{const i=await c3(n.localStore,e);Eb(n,r,null),wb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tu(n,i)}catch(i){await Gl(i)}}async function Z3(t,e,n){const r=H(t);try{const i=await function(s,o){const a=H(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(pe(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Eb(r,e,n),wb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tu(r,i)}catch(i){await Gl(i)}}function wb(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Eb(t,e,n){const r=H(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Fm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||Sb(t,r)})}function Sb(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(hb(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Ev(t))}function c1(t,e,n){for(const r of n)r instanceof yb?(t.cc.addReference(r.key,e),e4(t,r)):r instanceof vb?(M("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||Sb(t,r.key)):j()}function e4(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(M("SyncEngine","New document in limbo: "+n),t.rc.add(r),Ev(t))}function Ev(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new F(Ee.fromString(e)),r=t.lc.next();t.uc.set(r,new H3(n)),t.oc=t.oc.insert(n,r),cb(t.remoteStore,new xi(fr(lv(n.path)),r,2,iv.at))}}async function tu(t,e,n){const r=H(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=pv.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=H(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>k.forEach(l,h=>k.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>k.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ql(c))throw c;M("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.Ui=u.Ui.insert(h,p)}}}(r.localStore,s))}async function t4(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await ob(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new L(T.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tu(n,r.ji)}}function n4(t,e){const n=H(t),r=n.uc.get(e);if(r&&r.ec)return Z().add(r.key);{let i=Z();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function r4(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_b.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=n4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=X3.bind(null,e),e.nc.Wo=V3.bind(null,e.eventManager),e.nc._c=z3.bind(null,e.eventManager),e}function i4(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=J3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Z3.bind(null,e),e}class s4{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=_d(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return u3(this.persistence,new a3,e.initialUser,this.It)}gc(e){return new s3(fv.Bs,this.It)}mc(e){return new g3}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class o4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>u1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=t4.bind(null,this.syncEngine),await M3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new L3}createDatastore(e){const n=_d(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new w3(i));var i;return function(s,o,a,l){return new C3(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>u1(this.syncEngine,a,0),o=o1.C()?new o1:new y3,new I3(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new q3(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=H(e);M("RemoteStore","RemoteStore shutting down."),n._u.add(5),await eu(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */class a4{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class l4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=At.UNAUTHENTICATED,this.clientId=Rk.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_v(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function u4(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ob(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function c4(t,e){t.asyncQueue.verifyOperationInProgress();const n=await h4(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>a1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>a1(e.remoteStore,s)),t.onlineComponents=e}async function h4(t){return t.offlineComponents||(M("FirestoreClient","Using default OfflineComponentProvider"),await u4(t,new s4)),t.offlineComponents}async function Cb(t){return t.onlineComponents||(M("FirestoreClient","Using default OnlineComponentProvider"),await c4(t,new o4)),t.onlineComponents}function d4(t){return Cb(t).then(e=>e.syncEngine)}async function h1(t){const e=await Cb(t),n=e.eventManager;return n.onListen=K3.bind(null,e.syncEngine),n.onUnlisten=Q3.bind(null,e.syncEngine),n}const d1=new Map;/**
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
 */function Tb(t,e,n){if(!n)throw new L(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function f4(t,e,n,r){if(e===!0&&r===!0)throw new L(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function f1(t){if(!F.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function p1(t){if(F.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function lc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sv(t);throw new L(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function p4(t,e){if(e<=0)throw new L(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class m1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,f4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Cv{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new m1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new m1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new DF;switch(n.type){case"gapi":const r=n.client;return new LF(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=d1.get(e);n&&(M("ComponentProvider","Removing Datastore"),d1.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class dn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dn(this.firestore,e,this._key)}}class Yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yr(this.firestore,e,this._query)}}class Br extends Yr{constructor(e,n,r){super(e,n,lv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dn(this.firestore,null,new F(e))}withConverter(e){return new Br(this.firestore,e,this._path)}}function m4(t,e,...n){if(t=et(t),Tb("collection","path",e),t instanceof Cv){const r=Ee.fromString(e,...n);return p1(r),new Br(t,null,r)}{if(!(t instanceof dn||t instanceof Br))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return p1(r),new Br(t.firestore,null,r)}}function g4(t,e,...n){if(t=et(t),arguments.length===1&&(e=Rk.R()),Tb("doc","path",e),t instanceof Cv){const r=Ee.fromString(e,...n);return f1(r),new dn(t,null,new F(r))}{if(!(t instanceof dn||t instanceof Br))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return f1(r),new dn(t.firestore,t instanceof Br?t.converter:null,new F(r))}}function y4(t,e){return t=et(t),e=et(e),t instanceof Yr&&e instanceof Yr&&t.firestore===e.firestore&&Xl(t._query,e._query)&&t.converter===e.converter}/**
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
 */class v4{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new lb(this,"async_queue_retry"),this.jc=()=>{const n=Wf();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Wf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Wf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new bi;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Ql(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw dr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=vv.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&j()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function g1(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class wh extends Cv{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new v4,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kb(this),this._firestoreClient.terminate()}}function _4(t,e){const n=typeof t=="object"?t:Kg(),r=typeof t=="string"?t:e||"(default)";return Io(n,"firestore").getImmediate({identifier:r})}function Ib(t){return t._firestoreClient||kb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kb(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new GF(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new l4(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 *//**
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
 */class Tv{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fo(ct.fromBase64String(e))}catch(n){throw new L(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fo(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Iv{constructor(e){this._methodName=e}}/**
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
 */class kv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const w4=/^__.*__$/;class E4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jl(e,this.data,n,this.fieldTransforms)}}function bb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class bv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new bv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Eh(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(bb(this.na)&&w4.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class S4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||_d(e)}fa(e,n,r,i=!1){return new bv({na:e,methodName:n,la:r,path:vt.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function C4(t){const e=t._freezeSettings(),n=_d(t._databaseId);return new S4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function T4(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);Ab("Data must be an object, but it was:",o,r);const a=Rb(r,o);let l,u;if(s.merge)l=new Un(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=I4(e,h,n);if(!o.contains(d))throw new L(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);b4(c,d)||c.push(d)}l=new Un(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new E4(new un(a),l,u)}class xv extends Iv{_toFieldTransform(e){return new pU(e.path,new ml)}isEqual(e){return e instanceof xv}}function xb(t,e){if(Nb(t=et(t)))return Ab("Unsupported field value:",e,t),Rb(t,e);if(t instanceof Iv)return function(n,r){if(!bb(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=xb(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hU(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Be.fromDate(n);return{timestampValue:vh(r.It,i)}}if(n instanceof Be){const i=new Be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vh(r.It,i)}}if(n instanceof kv)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof fo)return{bytesValue:tb(r.It,n._byteString)};if(n instanceof dn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cv(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${Sv(n)}`)}(t,e)}function Rb(t,e){const n={};return Nk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Po(t,(r,i)=>{const s=xb(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Nb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof kv||t instanceof fo||t instanceof dn||t instanceof Iv)}function Ab(t,e,n){if(!Nb(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Sv(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function I4(t,e,n){if((e=et(e))instanceof Tv)return e._internalPath;if(typeof e=="string")return Pb(t,e);throw Eh("Field path arguments must be of type string or ",t,!1,void 0,n)}const k4=new RegExp("[~\\*/\\[\\]]");function Pb(t,e,n){if(e.search(k4)>=0)throw Eh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tv(...e.split("."))._internalPath}catch{throw Eh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Eh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(T.INVALID_ARGUMENT,a+t+l)}function b4(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ob{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new x4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class x4 extends Ob{data(){return super.data()}}function Rv(t,e){return typeof e=="string"?Pb(t,e):e instanceof Tv?e._internalPath:e._delegate._internalPath}/**
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
 */class ua{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Db extends Ob{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Rv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class uc extends Db{data(e={}){return super.data(e)}}class R4{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ua(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new uc(this._firestore,this._userDataWriter,r.key,r,new ua(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new uc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ua(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new uc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ua(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:N4(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function N4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
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
 */function A4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mb{}function P4(t,...e){for(const n of e)t=n._apply(t);return t}class O4 extends Mb{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new L(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new L(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ws(i,s);return function(a,l){if(Mk(a)===null){const u=$k(a);u!==null&&L4(a,u,l.field)}}(r,o),o}(e._query,this.wa,this.ya);return new Yr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Yl(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function D4(t,e="asc"){const n=e,r=Rv("orderBy",t);return new O4(r,n)}class M4 extends Mb{constructor(e,n,r){super(),this.type=e,this.pa=n,this.Ia=r}_apply(e){return new Yr(e.firestore,e.converter,gh(e._query,this.pa,this.Ia))}}function $4(t){return p4("limit",t),new M4("limit",t,"F")}function L4(t,e,n){if(!n.isEqual(e))throw new L(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class F4{convertValue(e,n="none"){switch(qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(lo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const r={};return Po(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new kv(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pk(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hl(e));default:return null}}convertTimestamp(e){const n=Gr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);pe(sb(r));const i=new dl(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||dr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function U4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class $b extends F4{constructor(e){super(),this.firestore=e}convertBytes(e){return new fo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dn(this.firestore,null,n)}}function V4(t,e){const n=lc(t.firestore,wh),r=g4(t),i=U4(t.converter,e);return B4(n,[T4(C4(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,rr.exists(!1))]).then(()=>r)}function z4(t,...e){var n,r,i;t=et(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||g1(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(g1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof dn)u=lc(t.firestore,wh),c=lv(t._key.path),l={next:h=>{e[o]&&e[o](j4(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=lc(t,Yr);u=lc(h.firestore,wh),c=h._query;const d=new $b(u);l={next:f=>{e[o]&&e[o](new R4(u,d,h,f))},error:e[o+1],complete:e[o+2]},A4(t._query)}return function(h,d,f,p){const y=new a4(p),w=new B3(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>F3(await h1(h),w)),()=>{y.Rc(),h.asyncQueue.enqueueAndForget(async()=>U3(await h1(h),w))}}(Ib(u),c,a,l)}function B4(t,e){return function(n,r){const i=new bi;return n.asyncQueue.enqueueAndForget(async()=>Y3(await d4(n),r,i)),i.promise}(Ib(t),e)}function j4(t,e,n){const r=n.docs.get(e._key),i=new $b(t);return new Db(t,i,e._key,r,new ua(n.hasPendingWrites,n.fromCache),e.converter)}function W4(){return new xv("serverTimestamp")}(function(t,e=!0){(function(n){Ao=n})(ei),mn(new Zt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new wh(new MF(n.getProvider("auth-internal")),new UF(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),$e(Fw,"3.4.15",t),$e(Fw,"3.4.15","esm2017")})();/**
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
 */const H4="functions";/**
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
 */class q4{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
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
 */const y1="us-central1";class K4{constructor(e,n,r,i,s=y1,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new q4(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=y1}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const v1="@firebase/functions",_1="0.8.4";/**
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
 */const G4="auth-internal",Q4="app-check-internal",Y4="messaging-internal";function X4(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(G4),a=r.getProvider(Y4),l=r.getProvider(Q4);return new K4(s,o,a,l,i,t)};mn(new Zt(H4,n,"PUBLIC").setMultipleInstances(!0)),$e(v1,_1,e),$e(v1,_1,"esm2017")}X4(fetch.bind(self));/**
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
 */const Lb="firebasestorage.googleapis.com",J4="storageBucket",Z4=2*60*1e3,eV=10*60*1e3;/**
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
 */class jn extends gn{constructor(e,n){super(Hf(e),`Firebase Storage: ${n} (${Hf(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jn.prototype)}_codeEquals(e){return Hf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Hf(t){return"storage/"+t}function tV(){const t="An unknown error occurred, please check the error payload for server response.";return new jn("unknown",t)}function nV(){return new jn("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function rV(){return new jn("canceled","User canceled the upload/download.")}function iV(t){return new jn("invalid-url","Invalid URL '"+t+"'.")}function sV(t){return new jn("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function w1(t){return new jn("invalid-argument",t)}function Fb(){return new jn("app-deleted","The Firebase app was deleted.")}function oV(t){return new jn("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class In{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=In.makeFromUrl(e,n)}catch{return new In(e,"")}if(r.path==="")return r;throw sV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},y=n===Lb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${y}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<v.length;_++){const E=v[_],S=E.regex.exec(e);if(S){const C=S[E.indices.bucket];let R=S[E.indices.path];R||(R=""),r=new In(C,R),E.postModify(r);break}}if(r==null)throw iV(e);return r}}class aV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function lV(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function d(){s&&clearTimeout(s)}function f(w,...g){if(u){d();return}if(w){d(),c.call(null,w,...g);return}if(l()||o){d(),c.call(null,w,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let p=!1;function y(w){p||(p=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function uV(t){t(!1)}/**
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
 */function cV(t){return t!==void 0}function E1(t,e,n,r){if(r<e)throw w1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw w1(`Invalid value for '${t}'. Expected ${n} or less.`)}function hV(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Sh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Sh||(Sh={}));/**
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
 */class dV{constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new $u(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Sh.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===Sh.ABORT;r(!1,new $u(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new $u(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());cV(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=tV();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Fb():rV();o(l)}else{const l=nV();o(l)}};this.canceled_?n(!1,new $u(!1,null,!0)):this.backoffId_=lV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class $u{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function mV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function yV(t,e,n,r,i,s){const o=hV(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return mV(l,e),fV(l,n),pV(l,s),gV(l,r),new dV(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function vV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _V(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ch{constructor(e,n){this._service=e,n instanceof In?this._location=n:this._location=In.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ch(e,n)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _V(this._location.path)}get storage(){return this._service}get parent(){const e=vV(this._location.path);if(e===null)return null;const n=new In(this._location.bucket,e);return new Ch(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw oV(e)}}function S1(t,e){const n=e==null?void 0:e[J4];return n==null?null:In.makeFromBucketSpec(n,t)}class wV{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Lb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Z4,this._maxUploadRetryTime=eV,this._requests=new Set,i!=null?this._bucket=In.makeFromBucketSpec(i,this._host):this._bucket=S1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=S1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){E1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){E1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ch(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new aV(Fb());{const s=yV(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const C1="@firebase/storage",T1="0.9.9";/**
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
 */const EV="storage";function SV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new wV(n,r,i,e,ei)}function CV(){mn(new Zt(EV,SV,"PUBLIC").setMultipleInstances(!0)),$e(C1,T1,""),$e(C1,T1,"esm2017")}CV();const Ub="@firebase/installations",Nv="0.5.12";/**
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
 */const Vb=1e4,zb=`w:${Nv}`,Bb="FIS_v2",TV="https://firebaseinstallations.googleapis.com/v1",IV=60*60*1e3,kV="installations",bV="Installations";/**
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
 */const xV={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ki=new Ji(kV,bV,xV);function jb(t){return t instanceof gn&&t.code.includes("request-failed")}/**
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
 */function Wb({projectId:t}){return`${TV}/projects/${t}/installations`}function Hb(t){return{token:t.token,requestStatus:2,expiresIn:NV(t.expiresIn),creationTime:Date.now()}}async function qb(t,e){const r=(await e.json()).error;return Ki.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Kb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function RV(t,{refreshToken:e}){const n=Kb(t);return n.append("Authorization",AV(e)),n}async function Gb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function NV(t){return Number(t.replace("s","000"))}function AV(t){return`${Bb} ${t}`}/**
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
 */async function PV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Wb(t),i=Kb(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Bb,appId:t.appId,sdkVersion:zb},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Gb(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Hb(u.authToken)}}else throw await qb("Create Installation",l)}/**
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
 */function Qb(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function OV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const DV=/^[cdef][\w-]{21}$/,Um="";function MV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$V(t);return DV.test(n)?n:Um}catch{return Um}}function $V(t){return OV(t).substr(0,22)}/**
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
 */function Sd(t){return`${t.appName}!${t.appId}`}/**
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
 */const Yb=new Map;function Xb(t,e){const n=Sd(t);Jb(n,e),LV(n,e)}function Jb(t,e){const n=Yb.get(t);if(!!n)for(const r of n)r(e)}function LV(t,e){const n=FV();n&&n.postMessage({key:t,fid:e}),UV()}let Ei=null;function FV(){return!Ei&&"BroadcastChannel"in self&&(Ei=new BroadcastChannel("[Firebase] FID Change"),Ei.onmessage=t=>{Jb(t.data.key,t.data.fid)}),Ei}function UV(){Yb.size===0&&Ei&&(Ei.close(),Ei=null)}/**
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
 */const VV="firebase-installations-database",zV=1,Gi="firebase-installations-store";let qf=null;function Av(){return qf||(qf=MC(VV,zV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gi)}}})),qf}async function Th(t,e){const n=Sd(t),i=(await Av()).transaction(Gi,"readwrite"),s=i.objectStore(Gi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Xb(t,e.fid),e}async function Zb(t){const e=Sd(t),r=(await Av()).transaction(Gi,"readwrite");await r.objectStore(Gi).delete(e),await r.done}async function Cd(t,e){const n=Sd(t),i=(await Av()).transaction(Gi,"readwrite"),s=i.objectStore(Gi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Xb(t,a.fid),a}/**
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
 */async function Pv(t){let e;const n=await Cd(t.appConfig,r=>{const i=BV(r),s=jV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Um?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function BV(t){const e=t||{fid:MV(),registrationStatus:0};return ex(e)}function jV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ki.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=WV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:HV(t)}:{installationEntry:e}}async function WV(t,e){try{const n=await PV(t,e);return Th(t.appConfig,n)}catch(n){throw jb(n)&&n.customData.serverCode===409?await Zb(t.appConfig):await Th(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function HV(t){let e=await I1(t.appConfig);for(;e.registrationStatus===1;)await Qb(100),e=await I1(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pv(t);return r||n}return e}function I1(t){return Cd(t,e=>{if(!e)throw Ki.create("installation-not-found");return ex(e)})}function ex(t){return qV(t)?{fid:t.fid,registrationStatus:0}:t}function qV(t){return t.registrationStatus===1&&t.registrationTime+Vb<Date.now()}/**
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
 */async function KV({appConfig:t,heartbeatServiceProvider:e},n){const r=GV(t,n),i=RV(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:zb,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Gb(()=>fetch(r,a));if(l.ok){const u=await l.json();return Hb(u)}else throw await qb("Generate Auth Token",l)}function GV(t,{fid:e}){return`${Wb(t)}/${e}/authTokens:generate`}/**
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
 */async function Ov(t,e=!1){let n;const r=await Cd(t.appConfig,s=>{if(!tx(s))throw Ki.create("not-registered");const o=s.authToken;if(!e&&XV(o))return s;if(o.requestStatus===1)return n=QV(t,e),s;{if(!navigator.onLine)throw Ki.create("app-offline");const a=ZV(s);return n=YV(t,a),a}});return n?await n:r.authToken}async function QV(t,e){let n=await k1(t.appConfig);for(;n.authToken.requestStatus===1;)await Qb(100),n=await k1(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ov(t,e):r}function k1(t){return Cd(t,e=>{if(!tx(e))throw Ki.create("not-registered");const n=e.authToken;return ez(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function YV(t,e){try{const n=await KV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Th(t.appConfig,r),n}catch(n){if(jb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zb(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Th(t.appConfig,r)}throw n}}function tx(t){return t!==void 0&&t.registrationStatus===2}function XV(t){return t.requestStatus===2&&!JV(t)}function JV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+IV}function ZV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ez(t){return t.requestStatus===1&&t.requestTime+Vb<Date.now()}/**
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
 */async function tz(t){const e=t,{installationEntry:n,registrationPromise:r}=await Pv(e);return r?r.catch(console.error):Ov(e).catch(console.error),n.fid}/**
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
 */async function nz(t,e=!1){const n=t;return await rz(n),(await Ov(n,e)).token}async function rz(t){const{registrationPromise:e}=await Pv(t);e&&await e}/**
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
 */function iz(t){if(!t||!t.options)throw Kf("App Configuration");if(!t.name)throw Kf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Kf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Kf(t){return Ki.create("missing-app-config-values",{valueName:t})}/**
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
 */const nx="installations",sz="installations-internal",oz=t=>{const e=t.getProvider("app").getImmediate(),n=iz(e),r=Io(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},az=t=>{const e=t.getProvider("app").getImmediate(),n=Io(e,nx).getImmediate();return{getId:()=>tz(n),getToken:i=>nz(n,i)}};function lz(){mn(new Zt(nx,oz,"PUBLIC")),mn(new Zt(sz,az,"PRIVATE"))}lz();$e(Ub,Nv);$e(Ub,Nv,"esm2017");const Gf="@firebase/remote-config",b1="0.3.11";/**
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
 */const uz="remote-config";/**
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
 */const cz={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},Dt=new Ji("remoteconfig","Remote Config",cz);function hz(t){const e=et(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class dz{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function fz(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class pz{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){var n,r,i;const[s,o]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),l=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,u={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:s,app_instance_id_token:o,app_id:this.appId,language_code:fz()},h={method:"POST",headers:u,body:JSON.stringify(c)},d=fetch(l,h),f=new Promise((v,_)=>{e.signal.addEventListener(()=>{const E=new Error("The operation was aborted.");E.name="AbortError",_(E)})});let p;try{await Promise.race([d,f]),p=await d}catch(v){let _="fetch-client-network";throw((n=v)===null||n===void 0?void 0:n.name)==="AbortError"&&(_="fetch-timeout"),Dt.create(_,{originalErrorMessage:(r=v)===null||r===void 0?void 0:r.message})}let y=p.status;const w=p.headers.get("ETag")||void 0;let g,m;if(p.status===200){let v;try{v=await p.json()}catch(_){throw Dt.create("fetch-client-parse",{originalErrorMessage:(i=_)===null||i===void 0?void 0:i.message})}g=v.entries,m=v.state}if(m==="INSTANCE_STATE_UNSPECIFIED"?y=500:m==="NO_CHANGE"?y=304:(m==="NO_TEMPLATE"||m==="EMPTY_CONFIG")&&(g={}),y!==304&&y!==200)throw Dt.create("fetch-status",{httpStatus:y});return{status:y,eTag:w,config:g}}}/**
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
 */function mz(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gz(t){if(!(t instanceof gn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class yz{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await mz(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!gz(i))throw i;const s={throttleEndTimeMillis:Date.now()+vP(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const vz=60*1e3,_z=12*60*60*1e3;class wz{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:vz,minimumFetchIntervalMillis:_z},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function cc(t,e){var n;const r=t.target.error||void 0;return Dt.create(e,{originalErrorMessage:r&&((n=r)===null||n===void 0?void 0:n.message)})}const hi="app_namespace_store",Ez="firebase_remote_config",Sz=1;function Cz(){return new Promise((t,e)=>{var n;try{const r=indexedDB.open(Ez,Sz);r.onerror=i=>{e(cc(i,"storage-open"))},r.onsuccess=i=>{t(i.target.result)},r.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(hi,{keyPath:"compositeKey"})}}}catch(r){e(Dt.create("storage-open",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message}))}})}class Tz{constructor(e,n,r,i=Cz()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([hi],"readonly").objectStore(hi),l=this.createCompositeKey(e);try{const u=a.get(l);u.onerror=c=>{i(cc(c,"storage-get"))},u.onsuccess=c=>{const h=c.target.result;r(h?h.value:void 0)}}catch(u){i(Dt.create("storage-get",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{var o;const l=r.transaction([hi],"readwrite").objectStore(hi),u=this.createCompositeKey(e);try{const c=l.put({compositeKey:u,value:n});c.onerror=h=>{s(cc(h,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(Dt.create("storage-set",{originalErrorMessage:(o=c)===null||o===void 0?void 0:o.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([hi],"readwrite").objectStore(hi),l=this.createCompositeKey(e);try{const u=a.delete(l);u.onerror=c=>{i(cc(c,"storage-delete"))},u.onsuccess=()=>{r()}}catch(u){i(Dt.create("storage-delete",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class Iz{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
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
 */function kz(){mn(new Zt(uz,t,"PUBLIC").setMultipleInstances(!0)),$e(Gf,b1),$e(Gf,b1,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw Dt.create("registration-window");if(!NC())throw Dt.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw Dt.create("registration-project-id");if(!o)throw Dt.create("registration-api-key");if(!a)throw Dt.create("registration-app-id");n=n||"firebase";const l=new Tz(a,r.name,n),u=new Iz(l),c=new xl(Gf);c.logLevel=ne.ERROR;const h=new pz(i,ei,n,s,o,a),d=new yz(h,l),f=new dz(d,l,u,c),p=new wz(r,f,u,l,c);return hz(p),p}}kz();var Td={exports:{}},Id={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bz=b.exports,xz=Symbol.for("react.element"),Rz=Symbol.for("react.fragment"),Nz=Object.prototype.hasOwnProperty,Az=bz.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pz={key:!0,ref:!0,__self:!0,__source:!0};function rx(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Nz.call(e,r)&&!Pz.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xz,type:t,key:s,ref:o,props:i,_owner:Az.current}}Id.Fragment=Rz;Id.jsx=rx;Id.jsxs=rx;(function(t){t.exports=Id})(Td);const Oz=Td.exports.Fragment,W=Td.exports.jsx,is=Td.exports.jsxs;var Vm=function(t,e){return Vm=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Vm(t,e)};function vr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Vm(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Dz(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function ix(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function po(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function mo(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function go(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function qs(t){return this instanceof qs?(this.v=t,this):new qs(t)}function Mz(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(d){r[d]&&(i[d]=function(f){return new Promise(function(p,y){s.push([d,f,p,y])>1||a(d,f)})})}function a(d,f){try{l(r[d](f))}catch(p){h(s[0][3],p)}}function l(d){d.value instanceof qs?Promise.resolve(d.value.v).then(u,c):h(s[0][2],d)}function u(d){a("next",d)}function c(d){a("throw",d)}function h(d,f){d(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}function $z(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof po=="function"?po(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){o=t[s](o),i(a,l,o.done,o.value)})}}function i(s,o,a,l){Promise.resolve(l).then(function(u){s({value:u,done:a})},o)}}function We(t){return typeof t=="function"}function Dv(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Qf=Dv(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Ih(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var nu=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=po(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(y){e={error:y}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(We(c))try{c()}catch(y){s=y instanceof Qf?y.errors:[y]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=po(h),f=d.next();!f.done;f=d.next()){var p=f.value;try{x1(p)}catch(y){s=s!=null?s:[],y instanceof Qf?s=go(go([],mo(s)),mo(y.errors)):s.push(y)}}}catch(y){r={error:y}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new Qf(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)x1(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Ih(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Ih(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),sx=nu.EMPTY;function ox(t){return t instanceof nu||t&&"closed"in t&&We(t.remove)&&We(t.add)&&We(t.unsubscribe)}function x1(t){We(t)?t():t.unsubscribe()}var ax={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Lz={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,go([t,e],mo(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function lx(t){Lz.setTimeout(function(){throw t})}function R1(){}function hc(t){t()}var Mv=function(t){vr(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ox(n)&&n.add(r)):r.destination=zz,r}return e.create=function(n,r,i){return new vl(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(nu),Fz=Function.prototype.bind;function Yf(t,e){return Fz.call(t,e)}var Uz=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){Lu(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){Lu(r)}else Lu(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){Lu(n)}},t}(),vl=function(t){vr(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(We(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&ax.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&Yf(n.next,a),error:n.error&&Yf(n.error,a),complete:n.complete&&Yf(n.complete,a)}):o=n}return s.destination=new Uz(o),s}return e}(Mv);function Lu(t){lx(t)}function Vz(t){throw t}var zz={closed:!0,next:R1,error:Vz,complete:R1},$v=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function ux(t){return t}function Bz(t){return t.length===0?ux:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var xt=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=Wz(e)?e:new vl(e,n,r);return hc(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=N1(n),new n(function(i,s){var o=new vl({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[$v]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Bz(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=N1(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function N1(t){var e;return(e=t!=null?t:ax.Promise)!==null&&e!==void 0?e:Promise}function jz(t){return t&&We(t.next)&&We(t.error)&&We(t.complete)}function Wz(t){return t&&t instanceof Mv||jz(t)&&ox(t)}function Hz(t){return We(t==null?void 0:t.lift)}function ss(t){return function(e){if(Hz(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function yo(t,e,n,r,i){return new qz(t,e,n,r,i)}var qz=function(t){vr(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(Mv),Kz=Dv(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),kd=function(t){vr(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new A1(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new Kz},e.prototype.next=function(n){var r=this;hc(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=po(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;hc(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;hc(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?sx:(this.currentObservers=null,a.push(n),new nu(function(){r.currentObservers=null,Ih(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new xt;return n.source=this,n},e.create=function(n,r){return new A1(n,r)},e}(xt),A1=function(t){vr(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:sx},e}(kd),Lv={now:function(){return(Lv.delegate||Date).now()},delegate:void 0},Gz=function(t){vr(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=Lv);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e}(kd),Qz=function(t){vr(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(nu),zm={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=zm.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,go([t,e],mo(n))):setInterval.apply(void 0,go([t,e],mo(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},Yz=function(t){vr(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),zm.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;zm.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Ih(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(Qz),P1=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=Lv.now,t}(),Xz=function(t){vr(e,t);function e(n,r){r===void 0&&(r=P1.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(P1);new Xz(Yz);var Jz=new xt(function(t){return t.complete()});function Zz(t){return t?eB(t):Jz}function eB(t){return new xt(function(e){return t.schedule(function(){return e.complete()})})}function tB(t){return t&&We(t.schedule)}function nB(t){return t[t.length-1]}function rB(t){return tB(nB(t))?t.pop():void 0}var cx=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function hx(t){return We(t==null?void 0:t.then)}function dx(t){return We(t[$v])}function fx(t){return Symbol.asyncIterator&&We(t==null?void 0:t[Symbol.asyncIterator])}function px(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function iB(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var mx=iB();function gx(t){return We(t==null?void 0:t[mx])}function yx(t){return Mz(this,arguments,function(){var e,n,r,i;return ix(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,qs(e.read())];case 3:return n=s.sent(),r=n.value,i=n.done,i?[4,qs(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,qs(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function vx(t){return We(t==null?void 0:t.getReader)}function Mo(t){if(t instanceof xt)return t;if(t!=null){if(dx(t))return sB(t);if(cx(t))return oB(t);if(hx(t))return aB(t);if(fx(t))return _x(t);if(gx(t))return lB(t);if(vx(t))return uB(t)}throw px(t)}function sB(t){return new xt(function(e){var n=t[$v]();if(We(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function oB(t){return new xt(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function aB(t){return new xt(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,lx)})}function lB(t){return new xt(function(e){var n,r;try{for(var i=po(t),s=i.next();!s.done;s=i.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}e.complete()})}function _x(t){return new xt(function(e){cB(t,e).catch(function(n){return e.error(n)})})}function uB(t){return _x(yx(t))}function cB(t,e){var n,r,i,s;return Dz(this,void 0,void 0,function(){var o,a;return ix(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=$z(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(o=r.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),i={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Ri(t,e,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}function wx(t,e){return e===void 0&&(e=0),ss(function(n,r){n.subscribe(yo(r,function(i){return Ri(r,t,function(){return r.next(i)},e)},function(){return Ri(r,t,function(){return r.complete()},e)},function(i){return Ri(r,t,function(){return r.error(i)},e)}))})}function Ex(t,e){return e===void 0&&(e=0),ss(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function hB(t,e){return Mo(t).pipe(Ex(e),wx(e))}function dB(t,e){return Mo(t).pipe(Ex(e),wx(e))}function fB(t,e){return new xt(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function pB(t,e){return new xt(function(n){var r;return Ri(n,e,function(){r=t[mx](),Ri(n,e,function(){var i,s,o;try{i=r.next(),s=i.value,o=i.done}catch(a){n.error(a);return}o?n.complete():n.next(s)},0,!0)}),function(){return We(r==null?void 0:r.return)&&r.return()}})}function Sx(t,e){if(!t)throw new Error("Iterable cannot be null");return new xt(function(n){Ri(n,e,function(){var r=t[Symbol.asyncIterator]();Ri(n,e,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function mB(t,e){return Sx(yx(t),e)}function gB(t,e){if(t!=null){if(dx(t))return hB(t,e);if(cx(t))return fB(t,e);if(hx(t))return dB(t,e);if(fx(t))return Sx(t,e);if(gx(t))return pB(t,e);if(vx(t))return mB(t,e)}throw px(t)}function Cx(t,e){return e?gB(t,e):Mo(t)}function O1(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=rB(t);return Cx(t,n)}Dv(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function Fv(t,e){return ss(function(n,r){var i=0;n.subscribe(yo(r,function(s){r.next(t.call(e,s,i++))}))})}function Tx(t){return ss(function(e,n){var r=null,i=!1,s;r=e.subscribe(yo(n,void 0,void 0,function(o){s=Mo(t(o,Tx(t)(e))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}function yB(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new kd}:e,r=t.resetOnError,i=r===void 0?!0:r,s=t.resetOnComplete,o=s===void 0?!0:s,a=t.resetOnRefCountZero,l=a===void 0?!0:a;return function(u){var c,h,d,f=0,p=!1,y=!1,w=function(){h==null||h.unsubscribe(),h=void 0},g=function(){w(),c=d=void 0,p=y=!1},m=function(){var v=c;g(),v==null||v.unsubscribe()};return ss(function(v,_){f++,!y&&!p&&w();var E=d=d!=null?d:n();_.add(function(){f--,f===0&&!y&&!p&&(h=Xf(m,l))}),E.subscribe(_),!c&&f>0&&(c=new vl({next:function(S){return E.next(S)},error:function(S){y=!0,w(),h=Xf(g,i,S),E.error(S)},complete:function(){p=!0,w(),h=Xf(g,o),E.complete()}}),Mo(v).subscribe(c))})(u)}}function Xf(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var i=new vl({next:function(){i.unsubscribe(),t()}});return e.apply(void 0,go([],mo(n))).subscribe(i)}}function vB(t,e,n){var r,i,s,o,a=!1;return t&&typeof t=="object"?(r=t.bufferSize,o=r===void 0?1/0:r,i=t.windowTime,e=i===void 0?1/0:i,s=t.refCount,a=s===void 0?!1:s,n=t.scheduler):o=t!=null?t:1/0,yB({connector:function(){return new Gz(o,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function _B(t,e){return ss(function(n,r){var i=null,s=0,o=!1,a=function(){return o&&!i&&r.complete()};n.subscribe(yo(r,function(l){i==null||i.unsubscribe();var u=0,c=s++;Mo(t(l,c)).subscribe(i=yo(r,function(h){return r.next(e?e(l,h,c,u++):h)},function(){i=null,a()}))},function(){o=!0,a()}))})}function wB(t,e,n){var r=We(t)||e||n?{next:t,error:e,complete:n}:t;return r?ss(function(i,s){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var a=!0;i.subscribe(yo(s,function(l){var u;(u=r.next)===null||u===void 0||u.call(r,l),s.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),s.complete()},function(l){var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),s.error(l)},function(){var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):ux}function Ix(t){return new xt(function(e){var n=nD(t,e.next.bind(e),e.error.bind(e),e.complete.bind(e));return{unsubscribe:n}})}const EB="[DEFAULT]",kx=b.exports.createContext(void 0),bx=b.exports.createContext(!1),SB="4.2.2",CB=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function TB(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=b.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=mO().find(o=>o.name===(n||EB));if(s){if(e&&CB(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=b.exports.version||"unknown";return $e("react",o),$e("reactfire",SB),pO(e,n)}},[t.firebaseApp,e,n]);return b.exports.createElement(kx.Provider,{value:i},W(bx.Provider,{...Object.assign({value:r!=null?r:!1},t)}))}function IB(t){let e=b.exports.useContext(bx);return t!==void 0?t:e}function xx(){const t=b.exports.useContext(kx);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}function kB(t){var e;const n=zv(),r=`auth:user:${n.name}`,i=Ix(n),s=(e=Object.assign({},t))!==null&&e!==void 0?e:{};return n.currentUser!==void 0&&(s.initialData=n.currentUser,s.startWithValue=n.currentUser),Uv(r,i,s)}function Rx(t){if((t==null?void 0:t.hasOwnProperty("requiredClaims"))&&(t==null?void 0:t.hasOwnProperty("validateCustomClaims")))throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');const e=zv();let n=`auth:signInCheck:${e.name}::forceRefresh:${!!(t!=null&&t.forceRefresh)}`;t!=null&&t.forceRefresh&&(n=`${n}:forceRefresh:${t.forceRefresh}`),t!=null&&t.hasOwnProperty("requiredClaims")?n=`${n}:requiredClaims:${JSON.stringify(t.requiredClaims)}`:t!=null&&t.hasOwnProperty("validateCustomClaims")&&(n=`${n}:validateCustomClaims:${JSON.stringify(t.validateCustomClaims)}`);const r=Ix(e).pipe(_B(i=>{var s;return i?t&&(t.hasOwnProperty("requiredClaims")||t.hasOwnProperty("validateCustomClaims"))?Cx(i.getIdTokenResult((s=t==null?void 0:t.forceRefresh)!==null&&s!==void 0?s:!1)).pipe(Fv(o=>{let a;t.hasOwnProperty("requiredClaims")?a=bB(t.requiredClaims):a=t.validateCustomClaims;const{hasRequiredClaims:l,errors:u}=a(o.claims);return{signedIn:!0,hasRequiredClaims:l,errors:u,user:i}})):O1({signedIn:!0,hasRequiredClaims:!0,errors:{},user:i}):O1({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})}));return Uv(n,r)}function bB(t){return function(e){const n={};return Object.keys(t).forEach(r=>{t[r]!==e[r]&&(n[r]=[new Bv("auth/missing-claim",`Expected "${t[r]}", but user has "${e[r]}" instead`)])}),{hasRequiredClaims:Object.keys(n).length===0,errors:n}}}/**
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
 */var oi,di;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(di||(di={}));Object.freeze((oi={},oi[di.added]=f2,oi[di.removed]=g2,oi[di.changed]=p2,oi[di.moved]=m2,oi[di.value]=d2,oi));const xB=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=xB);/**
 * @license
 * Copyright 2018 Google LLC
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
 */var RB={includeMetadataChanges:!1};function NB(t,e){return e===void 0&&(e=RB),new xt(function(n){var r=z4(t,e,{next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return{unsubscribe:r}})}function AB(t,e){e===void 0&&(e={});var n=t.data();return!t.exists()||typeof n!="object"||n===null||e.idField&&(n[e.idField]=t.id),n}function PB(t){return NB(t,{includeMetadataChanges:!0}).pipe(Fv(function(e){return e.docs}))}function OB(t,e){return e===void 0&&(e={}),PB(t).pipe(Fv(function(n){return n.map(function(r){return AB(r,e)})}))}class DB extends kd{constructor(e,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(r=>this._resolveFirstEmission=r),this._innerObservable=e.pipe(wB({next:r=>{this._next(r)},error:r=>{this._error=r,this._resolveFirstEmission()}}),Tx(()=>Zz()),vB(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(e){this._hasValue=!0,this._value=e,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(e=>this._resolveFirstEmission=e)}_subscribe(e){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(e),this._innerSubscriber}get ourError(){return this._error}}const MB=3e4,dc=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=dc);function $B(t,e){if(dc.has(e))return dc.get(e);{const n=new DB(t,MB);return dc.set(e,n),n}}function LB(t){return function(e,n){const r=Object.assign(Object.assign({},e),{hasEmitted:e.hasEmitted||t.hasValue,error:t.ourError,firstValuePromise:t.firstEmission});switch(t.hasValue&&(r.data=t.value),n){case"value":return r.status="success",r;case"error":return r.status="error",r;case"complete":return r.isComplete=!0,r;default:throw new Error(`invalid action "${n}"`)}}}function Uv(t,e,n={}){var r;if(!t)throw new Error("cannot call useObservable without an observableId");const i=$B(e,t),s=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=i.hasValue||s;if(IB(n.suspense)===!0&&!o)throw i.firstEmission;const a={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:i.hasValue?i.value:(r=n==null?void 0:n.initialData)!==null&&r!==void 0?r:n==null?void 0:n.startWithValue,error:i.ourError,firstValuePromise:i.firstEmission},[l,u]=b.exports.useReducer(LB(i),a);return b.exports.useEffect(()=>{const c=i.subscribe({next:()=>{u("value")},error:h=>{throw u("error"),h},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[i]),l}const Bm=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=Bm);function FB(t){const e=Bm.findIndex(n=>y4(n,t));return e>-1?e:Bm.push(t)-1}function UB(t,e){const n=e?qB(e):"NO_ID_FIELD",r=`firestore:collectionData:${FB(t)}:idField=${n}`,i=OB(t,{idField:n});return Uv(r,i,e)}b.exports.createContext(void 0);const Nx=b.exports.createContext(void 0);b.exports.createContext(void 0);const VB=b.exports.createContext(void 0),Ax=b.exports.createContext(void 0);b.exports.createContext(void 0);b.exports.createContext(void 0);b.exports.createContext(void 0);b.exports.createContext(void 0);function Vv(t){return function(e){var n,r;if(!e.sdk)throw new Error("no sdk provided");const i=xx().name;if(((r=(n=e==null?void 0:e.sdk)===null||n===void 0?void 0:n.app)===null||r===void 0?void 0:r.name)!==i)throw new Error("sdk was initialized with a different firebase app");return b.exports.createElement(t.Provider,Object.assign({value:e.sdk},e))}}function Px(t){const e=b.exports.useContext(t);if(!e)throw new Error("SDK not found. useSdk must be called from within a provider");return e}const zB=Vv(Nx),BB=Vv(VB),jB=Vv(Ax),zv=()=>Px(Nx),WB=()=>Px(Ax);class Bv extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="ReactFireError",Object.setPrototypeOf(this,Bv.prototype)}}function HB(t,e){if(e==="idField"||e==="initialData"||e==="suspense")return t?t[e]:void 0;throw new Error(`Field "${e}" is not a valid key in ReactFireOptions`)}function qB(t){return HB(t,"idField")}function KB({messagesCollection:t}){const[e,n]=b.exports.useState(""),{data:r}=kB(),{uid:i,displayName:s,photoURL:o}=r;return is("form",{onSubmit:u=>{u.preventDefault();const c=e.trim();c&&(V4(t,{text:c,createdAt:W4(),uid:i,displayName:s,photoURL:o}),n(""))},children:[W("input",{value:e,onChange:u=>{n(u.target.value)},placeholder:"Type your message here..."}),W("button",{disabled:!e,children:"Send"})]})}function Je(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $(){return $=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$.apply(this,arguments)}function Ox(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Ox(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Ct(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Ox(t))&&(r&&(r+=" "),r+=e);return r}function Fu(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function sr(t,e,n={clone:!0}){const r=n.clone?$({},t):t;return Fu(t)&&Fu(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(Fu(e[i])&&i in t&&Fu(t[i])?r[i]=sr(t[i],e[i],n):r[i]=e[i])}),r}function vo(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function xe(t){if(typeof t!="string")throw new Error(vo(7));return t.charAt(0).toUpperCase()+t.slice(1)}function D1(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const GB=typeof window<"u"?b.exports.useLayoutEffect:b.exports.useEffect,QB=GB;function Uu(t){const e=b.exports.useRef(t);return QB(()=>{e.current=t}),b.exports.useCallback((...n)=>(0,e.current)(...n),[])}function Jf(t,e){return b.exports.useMemo(()=>t==null&&e==null?null:n=>{D1(t,n),D1(e,n)},[t,e])}let bd=!0,jm=!1,M1;const YB={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function XB(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&YB[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function JB(t){t.metaKey||t.altKey||t.ctrlKey||(bd=!0)}function Zf(){bd=!1}function ZB(){this.visibilityState==="hidden"&&jm&&(bd=!0)}function ej(t){t.addEventListener("keydown",JB,!0),t.addEventListener("mousedown",Zf,!0),t.addEventListener("pointerdown",Zf,!0),t.addEventListener("touchstart",Zf,!0),t.addEventListener("visibilitychange",ZB,!0)}function tj(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return bd||XB(e)}function nj(){const t=b.exports.useCallback(i=>{i!=null&&ej(i.ownerDocument)},[]),e=b.exports.useRef(!1);function n(){return e.current?(jm=!0,window.clearTimeout(M1),M1=window.setTimeout(()=>{jm=!1},100),e.current=!1,!0):!1}function r(i){return tj(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function Dx(t,e){const n=$({},e);return Object.keys(t).forEach(r=>{n[r]===void 0&&(n[r]=t[r])}),n}function ru(t,e,n){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((s,o)=>(o&&(s.push(e(o)),n&&n[o]&&s.push(n[o])),s),[]).join(" ")}),r}const $1=t=>t,rj=()=>{let t=$1;return{configure(e){t=e},generate(e){return t(e)},reset(){t=$1}}},ij=rj(),sj=ij,oj={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function $o(t,e,n="Mui"){const r=oj[e];return r?`${n}-${r}`:`${sj.generate(t)}-${e}`}function Lo(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=$o(t,i,n)}),r}function Mx(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var aj=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,lj=Mx(function(t){return aj.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function uj(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function cj(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var hj=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(cj(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=uj(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),pt="-ms-",kh="-moz-",se="-webkit-",$x="comm",jv="rule",Wv="decl",dj="@import",Lx="@keyframes",fj=Math.abs,xd=String.fromCharCode,pj=Object.assign;function mj(t,e){return(((e<<2^Pt(t,0))<<2^Pt(t,1))<<2^Pt(t,2))<<2^Pt(t,3)}function Fx(t){return t.trim()}function gj(t,e){return(t=e.exec(t))?t[0]:t}function ae(t,e,n){return t.replace(e,n)}function Wm(t,e){return t.indexOf(e)}function Pt(t,e){return t.charCodeAt(e)|0}function _l(t,e,n){return t.slice(e,n)}function Pn(t){return t.length}function Hv(t){return t.length}function Vu(t,e){return e.push(t),t}function yj(t,e){return t.map(e).join("")}var Rd=1,_o=1,Ux=0,jt=0,De=0,Fo="";function Nd(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Rd,column:_o,length:o,return:""}}function ea(t,e){return pj(Nd("",null,null,"",null,null,0),t,{length:-t.length},e)}function vj(){return De}function _j(){return De=jt>0?Pt(Fo,--jt):0,_o--,De===10&&(_o=1,Rd--),De}function Xt(){return De=jt<Ux?Pt(Fo,jt++):0,_o++,De===10&&(_o=1,Rd++),De}function Vn(){return Pt(Fo,jt)}function fc(){return jt}function iu(t,e){return _l(Fo,t,e)}function wl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vx(t){return Rd=_o=1,Ux=Pn(Fo=t),jt=0,[]}function zx(t){return Fo="",t}function pc(t){return Fx(iu(jt-1,Hm(t===91?t+2:t===40?t+1:t)))}function wj(t){for(;(De=Vn())&&De<33;)Xt();return wl(t)>2||wl(De)>3?"":" "}function Ej(t,e){for(;--e&&Xt()&&!(De<48||De>102||De>57&&De<65||De>70&&De<97););return iu(t,fc()+(e<6&&Vn()==32&&Xt()==32))}function Hm(t){for(;Xt();)switch(De){case t:return jt;case 34:case 39:t!==34&&t!==39&&Hm(De);break;case 40:t===41&&Hm(t);break;case 92:Xt();break}return jt}function Sj(t,e){for(;Xt()&&t+De!==47+10;)if(t+De===42+42&&Vn()===47)break;return"/*"+iu(e,jt-1)+"*"+xd(t===47?t:Xt())}function Cj(t){for(;!wl(Vn());)Xt();return iu(t,jt)}function Tj(t){return zx(mc("",null,null,null,[""],t=Vx(t),0,[0],t))}function mc(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,f=0,p=0,y=1,w=1,g=1,m=0,v="",_=i,E=s,S=r,C=v;w;)switch(p=m,m=Xt()){case 40:if(p!=108&&C.charCodeAt(h-1)==58){Wm(C+=ae(pc(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:C+=pc(m);break;case 9:case 10:case 13:case 32:C+=wj(p);break;case 92:C+=Ej(fc()-1,7);continue;case 47:switch(Vn()){case 42:case 47:Vu(Ij(Sj(Xt(),fc()),e,n),l);break;default:C+="/"}break;case 123*y:a[u++]=Pn(C)*g;case 125*y:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:f>0&&Pn(C)-h&&Vu(f>32?F1(C+";",r,n,h-1):F1(ae(C," ","")+";",r,n,h-2),l);break;case 59:C+=";";default:if(Vu(S=L1(C,e,n,u,c,i,a,v,_=[],E=[],h),s),m===123)if(c===0)mc(C,e,S,S,_,s,h,a,E);else switch(d){case 100:case 109:case 115:mc(t,S,S,r&&Vu(L1(t,S,S,0,0,i,a,v,i,_=[],h),E),i,E,h,a,r?_:E);break;default:mc(C,S,S,S,[""],E,0,a,E)}}u=c=f=0,y=g=1,v=C="",h=o;break;case 58:h=1+Pn(C),f=p;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&_j()==125)continue}switch(C+=xd(m),m*y){case 38:g=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(Pn(C)-1)*g,g=1;break;case 64:Vn()===45&&(C+=pc(Xt())),d=Vn(),c=h=Pn(v=C+=Cj(fc())),m++;break;case 45:p===45&&Pn(C)==2&&(y=0)}}return s}function L1(t,e,n,r,i,s,o,a,l,u,c){for(var h=i-1,d=i===0?s:[""],f=Hv(d),p=0,y=0,w=0;p<r;++p)for(var g=0,m=_l(t,h+1,h=fj(y=o[p])),v=t;g<f;++g)(v=Fx(y>0?d[g]+" "+m:ae(m,/&\f/g,d[g])))&&(l[w++]=v);return Nd(t,e,n,i===0?jv:a,l,u,c)}function Ij(t,e,n){return Nd(t,e,n,$x,xd(vj()),_l(t,2,-2),0)}function F1(t,e,n,r){return Nd(t,e,n,Wv,_l(t,0,r),_l(t,r+1,-1),r)}function Bx(t,e){switch(mj(t,e)){case 5103:return se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return se+t+kh+t+pt+t+t;case 6828:case 4268:return se+t+pt+t+t;case 6165:return se+t+pt+"flex-"+t+t;case 5187:return se+t+ae(t,/(\w+).+(:[^]+)/,se+"box-$1$2"+pt+"flex-$1$2")+t;case 5443:return se+t+pt+"flex-item-"+ae(t,/flex-|-self/,"")+t;case 4675:return se+t+pt+"flex-line-pack"+ae(t,/align-content|flex-|-self/,"")+t;case 5548:return se+t+pt+ae(t,"shrink","negative")+t;case 5292:return se+t+pt+ae(t,"basis","preferred-size")+t;case 6060:return se+"box-"+ae(t,"-grow","")+se+t+pt+ae(t,"grow","positive")+t;case 4554:return se+ae(t,/([^-])(transform)/g,"$1"+se+"$2")+t;case 6187:return ae(ae(ae(t,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),t,"")+t;case 5495:case 3959:return ae(t,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return ae(ae(t,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+t+t;case 4095:case 3583:case 4068:case 2532:return ae(t,/(.+)-inline(.+)/,se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pn(t)-1-e>6)switch(Pt(t,e+1)){case 109:if(Pt(t,e+4)!==45)break;case 102:return ae(t,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+kh+(Pt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Wm(t,"stretch")?Bx(ae(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Pt(t,e+1)!==115)break;case 6444:switch(Pt(t,Pn(t)-3-(~Wm(t,"!important")&&10))){case 107:return ae(t,":",":"+se)+t;case 101:return ae(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+(Pt(t,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+pt+"$2box$3")+t}break;case 5936:switch(Pt(t,e+11)){case 114:return se+t+pt+ae(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return se+t+pt+ae(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return se+t+pt+ae(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return se+t+pt+t+t}return t}function Ks(t,e){for(var n="",r=Hv(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function kj(t,e,n,r){switch(t.type){case dj:case Wv:return t.return=t.return||t.value;case $x:return"";case Lx:return t.return=t.value+"{"+Ks(t.children,r)+"}";case jv:t.value=t.props.join(",")}return Pn(n=Ks(t.children,r))?t.return=t.value+"{"+n+"}":""}function bj(t){var e=Hv(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function xj(t){return function(e){e.root||(e=e.return)&&t(e)}}function Rj(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Wv:t.return=Bx(t.value,t.length);break;case Lx:return Ks([ea(t,{value:ae(t.value,"@","@"+se)})],r);case jv:if(t.length)return yj(t.props,function(i){switch(gj(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ks([ea(t,{props:[ae(i,/:(read-\w+)/,":"+kh+"$1")]})],r);case"::placeholder":return Ks([ea(t,{props:[ae(i,/:(plac\w+)/,":"+se+"input-$1")]}),ea(t,{props:[ae(i,/:(plac\w+)/,":"+kh+"$1")]}),ea(t,{props:[ae(i,/:(plac\w+)/,pt+"input-$1")]})],r)}return""})}}var Nj=function(e,n,r){for(var i=0,s=0;i=s,s=Vn(),i===38&&s===12&&(n[r]=1),!wl(s);)Xt();return iu(e,jt)},Aj=function(e,n){var r=-1,i=44;do switch(wl(i)){case 0:i===38&&Vn()===12&&(n[r]=1),e[r]+=Nj(jt-1,n,r);break;case 2:e[r]+=pc(i);break;case 4:if(i===44){e[++r]=Vn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=xd(i)}while(i=Xt());return e},Pj=function(e,n){return zx(Aj(Vx(e),n))},U1=new WeakMap,Oj=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!U1.get(r))&&!i){U1.set(e,!0);for(var s=[],o=Pj(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},Dj=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}},Mj=[Rj],$j=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var w=y.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=e.stylisPlugins||Mj,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var w=y.getAttribute("data-emotion").split(" "),g=1;g<w.length;g++)s[w[g]]=!0;a.push(y)});var l,u=[Oj,Dj];{var c,h=[kj,xj(function(y){c.insert(y)})],d=bj(u.concat(i,h)),f=function(w){return Ks(Tj(w),d)};l=function(w,g,m,v){c=m,f(w?w+"{"+g.styles+"}":g.styles),v&&(p.inserted[g.name]=!0)}}var p={key:n,sheet:new hj({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return p.sheet.hydrate(a),p},jx={exports:{}},ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=typeof Symbol=="function"&&Symbol.for,qv=nt?Symbol.for("react.element"):60103,Kv=nt?Symbol.for("react.portal"):60106,Ad=nt?Symbol.for("react.fragment"):60107,Pd=nt?Symbol.for("react.strict_mode"):60108,Od=nt?Symbol.for("react.profiler"):60114,Dd=nt?Symbol.for("react.provider"):60109,Md=nt?Symbol.for("react.context"):60110,Gv=nt?Symbol.for("react.async_mode"):60111,$d=nt?Symbol.for("react.concurrent_mode"):60111,Ld=nt?Symbol.for("react.forward_ref"):60112,Fd=nt?Symbol.for("react.suspense"):60113,Lj=nt?Symbol.for("react.suspense_list"):60120,Ud=nt?Symbol.for("react.memo"):60115,Vd=nt?Symbol.for("react.lazy"):60116,Fj=nt?Symbol.for("react.block"):60121,Uj=nt?Symbol.for("react.fundamental"):60117,Vj=nt?Symbol.for("react.responder"):60118,zj=nt?Symbol.for("react.scope"):60119;function rn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case qv:switch(t=t.type,t){case Gv:case $d:case Ad:case Od:case Pd:case Fd:return t;default:switch(t=t&&t.$$typeof,t){case Md:case Ld:case Vd:case Ud:case Dd:return t;default:return e}}case Kv:return e}}}function Wx(t){return rn(t)===$d}ce.AsyncMode=Gv;ce.ConcurrentMode=$d;ce.ContextConsumer=Md;ce.ContextProvider=Dd;ce.Element=qv;ce.ForwardRef=Ld;ce.Fragment=Ad;ce.Lazy=Vd;ce.Memo=Ud;ce.Portal=Kv;ce.Profiler=Od;ce.StrictMode=Pd;ce.Suspense=Fd;ce.isAsyncMode=function(t){return Wx(t)||rn(t)===Gv};ce.isConcurrentMode=Wx;ce.isContextConsumer=function(t){return rn(t)===Md};ce.isContextProvider=function(t){return rn(t)===Dd};ce.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===qv};ce.isForwardRef=function(t){return rn(t)===Ld};ce.isFragment=function(t){return rn(t)===Ad};ce.isLazy=function(t){return rn(t)===Vd};ce.isMemo=function(t){return rn(t)===Ud};ce.isPortal=function(t){return rn(t)===Kv};ce.isProfiler=function(t){return rn(t)===Od};ce.isStrictMode=function(t){return rn(t)===Pd};ce.isSuspense=function(t){return rn(t)===Fd};ce.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ad||t===$d||t===Od||t===Pd||t===Fd||t===Lj||typeof t=="object"&&t!==null&&(t.$$typeof===Vd||t.$$typeof===Ud||t.$$typeof===Dd||t.$$typeof===Md||t.$$typeof===Ld||t.$$typeof===Uj||t.$$typeof===Vj||t.$$typeof===zj||t.$$typeof===Fj)};ce.typeOf=rn;(function(t){t.exports=ce})(jx);var Hx=jx.exports,Bj={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jj={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qx={};qx[Hx.ForwardRef]=Bj;qx[Hx.Memo]=jj;var Wj=!0;function Hj(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var Kx=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||Wj===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},qj=function(e,n,r){Kx(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Kj(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Gj={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qj=/[A-Z]|^ms/g,Yj=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Gx=function(e){return e.charCodeAt(1)===45},V1=function(e){return e!=null&&typeof e!="boolean"},ep=Mx(function(t){return Gx(t)?t:t.replace(Qj,"-$&").toLowerCase()}),z1=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Yj,function(r,i,s){return On={name:i,styles:s,next:On},i})}return Gj[e]!==1&&!Gx(e)&&typeof n=="number"&&n!==0?n+"px":n};function El(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return On={name:n.name,styles:n.styles,next:On},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)On={name:r.name,styles:r.styles,next:On},r=r.next;var i=n.styles+";";return i}return Xj(t,e,n)}case"function":{if(t!==void 0){var s=On,o=n(t);return On=s,El(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function Xj(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=El(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":V1(o)&&(r+=ep(s)+":"+z1(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)V1(o[a])&&(r+=ep(s)+":"+z1(s,o[a])+";");else{var l=El(t,e,o);switch(s){case"animation":case"animationName":{r+=ep(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var B1=/label:\s*([^\s;\n{]+)\s*(;|$)/g,On,Qx=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";On=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=El(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=El(r,n,e[a]),i&&(s+=o[a]);B1.lastIndex=0;for(var l="",u;(u=B1.exec(s))!==null;)l+="-"+u[1];var c=Kj(s)+l;return{name:c,styles:s,next:On}},Jj=function(e){return e()},Zj=d0["useInsertionEffect"]?d0["useInsertionEffect"]:!1,e5=Zj||Jj,Yx=b.exports.createContext(typeof HTMLElement<"u"?$j({key:"css"}):null);Yx.Provider;var t5=function(e){return b.exports.forwardRef(function(n,r){var i=b.exports.useContext(Yx);return e(n,i,r)})},n5=b.exports.createContext({});function Qv(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Qx(e)}var su=function(){var e=Qv.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},r5=lj,i5=function(e){return e!=="theme"},j1=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?r5:i5},W1=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},s5=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return Kx(n,r,i),e5(function(){return qj(n,r,i)}),null},o5=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=W1(e,n,r),l=a||j1(i),u=!l("as");return function(){var c=arguments,h=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&h.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)h.push.apply(h,c);else{h.push(c[0][0]);for(var d=c.length,f=1;f<d;f++)h.push(c[f],c[0][f])}var p=t5(function(y,w,g){var m=u&&y.as||i,v="",_=[],E=y;if(y.theme==null){E={};for(var S in y)E[S]=y[S];E.theme=b.exports.useContext(n5)}typeof y.className=="string"?v=Hj(w.registered,_,y.className):y.className!=null&&(v=y.className+" ");var C=Qx(h.concat(_),w.registered,E);v+=w.key+"-"+C.name,o!==void 0&&(v+=" "+o);var R=u&&a===void 0?j1(m):l,G={};for(var N in y)u&&N==="as"||R(N)&&(G[N]=y[N]);return G.className=v,G.ref=g,b.exports.createElement(b.exports.Fragment,null,b.exports.createElement(s5,{cache:w,serialized:C,isStringTag:typeof m=="string"}),b.exports.createElement(m,G))});return p.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",p.defaultProps=e.defaultProps,p.__emotion_real=p,p.__emotion_base=i,p.__emotion_styles=h,p.__emotion_forwardProp=a,Object.defineProperty(p,"toString",{value:function(){return"."+o}}),p.withComponent=function(y,w){return t(y,$({},n,w,{shouldForwardProp:W1(p,w,!0)})).apply(void 0,h)},p}},a5=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],qm=o5.bind();a5.forEach(function(t){qm[t]=qm(t)});const l5=qm;/** @license MUI v5.10.5
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function u5(t,e){return l5(t,e)}const c5=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))};function Ra(t,e){return e?sr(t,e,{clone:!1}):t}const Yv={xs:0,sm:600,md:900,lg:1200,xl:1536},H1={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Yv[t]}px)`};function ri(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||H1;return e.reduce((o,a,l)=>(o[s.up(s.keys[l])]=n(e[l]),o),{})}if(typeof e=="object"){const s=r.breakpoints||H1;return Object.keys(e).reduce((o,a)=>{if(Object.keys(s.values||Yv).indexOf(a)!==-1){const l=s.up(a);o[l]=n(e[a],a)}else{const l=a;o[l]=e[l]}return o},{})}return n(e)}function h5(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function d5(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function Xv(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function q1(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=Xv(t,n)||r,e&&(i=e(i)),i}function D(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],l=o.theme,u=Xv(l,r)||{};return ri(o,a,h=>{let d=q1(u,i,h);return h===d&&typeof h=="string"&&(d=q1(u,i,`${e}${h==="default"?"":xe(h)}`,h)),n===!1?d:{[n]:d}})};return s.propTypes={},s.filterProps=[e],s}function ii(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?Ra(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function f5(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const p5={m:"margin",p:"padding"},m5={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},K1={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},g5=f5(t=>{if(t.length>2)if(K1[t])t=K1[t];else return[t];const[e,n]=t.split(""),r=p5[e],i=m5[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),y5=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],v5=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],Xx=[...y5,...v5];function ou(t,e,n,r){var i;const s=(i=Xv(t,e,!1))!=null?i:n;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function Jx(t){return ou(t,"spacing",8)}function au(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function _5(t,e){return n=>t.reduce((r,i)=>(r[i]=au(e,n),r),{})}function w5(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=g5(n),s=_5(i,r),o=t[n];return ri(t,o,s)}function E5(t,e){const n=Jx(t.theme);return Object.keys(t).map(r=>w5(t,e,r,n)).reduce(Ra,{})}function zd(t){return E5(t,Xx)}zd.propTypes={};zd.filterProps=Xx;function lu(t){return typeof t!="number"?t:`${t}px solid`}const S5=D({prop:"border",themeKey:"borders",transform:lu}),C5=D({prop:"borderTop",themeKey:"borders",transform:lu}),T5=D({prop:"borderRight",themeKey:"borders",transform:lu}),I5=D({prop:"borderBottom",themeKey:"borders",transform:lu}),k5=D({prop:"borderLeft",themeKey:"borders",transform:lu}),b5=D({prop:"borderColor",themeKey:"palette"}),x5=D({prop:"borderTopColor",themeKey:"palette"}),R5=D({prop:"borderRightColor",themeKey:"palette"}),N5=D({prop:"borderBottomColor",themeKey:"palette"}),A5=D({prop:"borderLeftColor",themeKey:"palette"}),Jv=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=ou(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:au(e,r)});return ri(t,t.borderRadius,n)}return null};Jv.propTypes={};Jv.filterProps=["borderRadius"];const P5=ii(S5,C5,T5,I5,k5,b5,x5,R5,N5,A5,Jv),Zx=P5,O5=D({prop:"displayPrint",cssProperty:!1,transform:t=>({"@media print":{display:t}})}),D5=D({prop:"display"}),M5=D({prop:"overflow"}),$5=D({prop:"textOverflow"}),L5=D({prop:"visibility"}),F5=D({prop:"whiteSpace"}),eR=ii(O5,D5,M5,$5,L5,F5),U5=D({prop:"flexBasis"}),V5=D({prop:"flexDirection"}),z5=D({prop:"flexWrap"}),B5=D({prop:"justifyContent"}),j5=D({prop:"alignItems"}),W5=D({prop:"alignContent"}),H5=D({prop:"order"}),q5=D({prop:"flex"}),K5=D({prop:"flexGrow"}),G5=D({prop:"flexShrink"}),Q5=D({prop:"alignSelf"}),Y5=D({prop:"justifyItems"}),X5=D({prop:"justifySelf"}),J5=ii(U5,V5,z5,B5,j5,W5,H5,q5,K5,G5,Q5,Y5,X5),tR=J5,Zv=t=>{if(t.gap!==void 0&&t.gap!==null){const e=ou(t.theme,"spacing",8),n=r=>({gap:au(e,r)});return ri(t,t.gap,n)}return null};Zv.propTypes={};Zv.filterProps=["gap"];const e0=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=ou(t.theme,"spacing",8),n=r=>({columnGap:au(e,r)});return ri(t,t.columnGap,n)}return null};e0.propTypes={};e0.filterProps=["columnGap"];const t0=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=ou(t.theme,"spacing",8),n=r=>({rowGap:au(e,r)});return ri(t,t.rowGap,n)}return null};t0.propTypes={};t0.filterProps=["rowGap"];const Z5=D({prop:"gridColumn"}),e6=D({prop:"gridRow"}),t6=D({prop:"gridAutoFlow"}),n6=D({prop:"gridAutoColumns"}),r6=D({prop:"gridAutoRows"}),i6=D({prop:"gridTemplateColumns"}),s6=D({prop:"gridTemplateRows"}),o6=D({prop:"gridTemplateAreas"}),a6=D({prop:"gridArea"}),l6=ii(Zv,e0,t0,Z5,e6,t6,n6,r6,i6,s6,o6,a6),nR=l6,u6=D({prop:"color",themeKey:"palette"}),c6=D({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),h6=D({prop:"backgroundColor",themeKey:"palette"}),d6=ii(u6,c6,h6),rR=d6,f6=D({prop:"position"}),p6=D({prop:"zIndex",themeKey:"zIndex"}),m6=D({prop:"top"}),g6=D({prop:"right"}),y6=D({prop:"bottom"}),v6=D({prop:"left"}),iR=ii(f6,p6,m6,g6,y6,v6),_6=D({prop:"boxShadow",themeKey:"shadows"}),sR=_6;function si(t){return t<=1&&t!==0?`${t*100}%`:t}const w6=D({prop:"width",transform:si}),oR=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i,s;return{maxWidth:((r=t.theme)==null||(i=r.breakpoints)==null||(s=i.values)==null?void 0:s[n])||Yv[n]||si(n)}};return ri(t,t.maxWidth,e)}return null};oR.filterProps=["maxWidth"];const E6=D({prop:"minWidth",transform:si}),S6=D({prop:"height",transform:si}),C6=D({prop:"maxHeight",transform:si}),T6=D({prop:"minHeight",transform:si});D({prop:"size",cssProperty:"width",transform:si});D({prop:"size",cssProperty:"height",transform:si});const I6=D({prop:"boxSizing"}),k6=ii(w6,oR,E6,S6,C6,T6,I6),aR=k6,b6=D({prop:"fontFamily",themeKey:"typography"}),x6=D({prop:"fontSize",themeKey:"typography"}),R6=D({prop:"fontStyle",themeKey:"typography"}),N6=D({prop:"fontWeight",themeKey:"typography"}),A6=D({prop:"letterSpacing"}),P6=D({prop:"textTransform"}),O6=D({prop:"lineHeight"}),D6=D({prop:"textAlign"}),M6=D({prop:"typography",cssProperty:!1,themeKey:"typography"}),$6=ii(M6,b6,x6,R6,N6,A6,O6,D6,P6),lR=$6,G1={borders:Zx.filterProps,display:eR.filterProps,flexbox:tR.filterProps,grid:nR.filterProps,positions:iR.filterProps,palette:rR.filterProps,shadows:sR.filterProps,sizing:aR.filterProps,spacing:zd.filterProps,typography:lR.filterProps},uR={borders:Zx,display:eR,flexbox:tR,grid:nR,positions:iR,palette:rR,shadows:sR,sizing:aR,spacing:zd,typography:lR};Object.keys(G1).reduce((t,e)=>(G1[e].forEach(n=>{t[n]=uR[e]}),t),{});function L6(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function F6(t,e){return typeof t=="function"?t(e):t}function U6(t=uR){const e=Object.keys(t).reduce((i,s)=>(t[s].filterProps.forEach(o=>{i[o]=t[s]}),i),{});function n(i,s,o){const a={[i]:s,theme:o},l=e[i];return l?l(a):{[i]:s}}function r(i){const{sx:s,theme:o={}}=i||{};if(!s)return null;function a(l){let u=l;if(typeof l=="function")u=l(o);else if(typeof l!="object")return l;if(!u)return null;const c=h5(o.breakpoints),h=Object.keys(c);let d=c;return Object.keys(u).forEach(f=>{const p=F6(u[f],o);if(p!=null)if(typeof p=="object")if(e[f])d=Ra(d,n(f,p,o));else{const y=ri({theme:o},p,w=>({[f]:w}));L6(y,p)?d[f]=r({sx:p,theme:o}):d=Ra(d,y)}else d=Ra(d,n(f,p,o))}),d5(h,d)}return Array.isArray(s)?s.map(a):a(s)}return r}const cR=U6();cR.filterProps=["sx"];const V6=cR,z6=["values","unit","step"],B6=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>$({},n,{[r.key]:r.val}),{})};function j6(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=Je(t,z6),s=B6(e),o=Object.keys(s);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-r/100}${n})`}function u(d,f){const p=o.indexOf(f);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(p!==-1&&typeof e[o[p]]=="number"?e[o[p]]:f)-r/100}${n})`}function c(d){return o.indexOf(d)+1<o.length?u(d,o[o.indexOf(d)+1]):a(d)}function h(d){const f=o.indexOf(d);return f===0?a(o[1]):f===o.length-1?l(o[f]):u(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return $({keys:o,values:s,up:a,down:l,between:u,only:c,not:h,unit:n},i)}const W6={borderRadius:4},H6=W6;function q6(t=8){if(t.mui)return t;const e=Jx({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}const K6=["breakpoints","palette","spacing","shape"];function n0(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={}}=t,o=Je(t,K6),a=j6(n),l=q6(i);let u=sr({breakpoints:a,direction:"ltr",components:{},palette:$({mode:"light"},r),spacing:l,shape:$({},H6,s)},o);return u=e.reduce((c,h)=>sr(c,h),u),u}const G6=b.exports.createContext(null),Q6=G6;function Y6(){return b.exports.useContext(Q6)}function X6(t){return Object.keys(t).length===0}function J6(t=null){const e=Y6();return!e||X6(e)?t:e}const Z6=n0();function eW(t=Z6){return J6(t)}const tW=["variant"];function Q1(t){return t.length===0}function hR(t){const{variant:e}=t,n=Je(t,tW);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=Q1(r)?t[i]:xe(t[i]):r+=`${Q1(r)?i:xe(i)}${xe(t[i].toString())}`}),r}const nW=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],rW=["theme"],iW=["theme"];function ta(t){return Object.keys(t).length===0}function sW(t){return typeof t=="string"&&t.charCodeAt(0)>96}const oW=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,aW=(t,e)=>{let n=[];e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants);const r={};return n.forEach(i=>{const s=hR(i.props);r[s]=i.style}),r},lW=(t,e,n,r)=>{var i,s;const{ownerState:o={}}=t,a=[],l=n==null||(i=n.components)==null||(s=i[r])==null?void 0:s.variants;return l&&l.forEach(u=>{let c=!0;Object.keys(u.props).forEach(h=>{o[h]!==u.props[h]&&t[h]!==u.props[h]&&(c=!1)}),c&&a.push(e[hR(u.props)])}),a};function gc(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const uW=n0();function cW(t={}){const{defaultTheme:e=uW,rootShouldForwardProp:n=gc,slotShouldForwardProp:r=gc,styleFunctionSx:i=V6}=t,s=o=>{const a=ta(o.theme)?e:o.theme;return i($({},o,{theme:a}))};return s.__mui_systemSx=!0,(o,a={})=>{c5(o,_=>_.filter(E=>!(E!=null&&E.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:h,overridesResolver:d}=a,f=Je(a,nW),p=c!==void 0?c:u&&u!=="Root"||!1,y=h||!1;let w,g=gc;u==="Root"?g=n:u?g=r:sW(o)&&(g=void 0);const m=u5(o,$({shouldForwardProp:g,label:w},f)),v=(_,...E)=>{const S=E?E.map(N=>typeof N=="function"&&N.__emotion_real!==N?ie=>{let{theme:Se}=ie,Fe=Je(ie,rW);return N($({theme:ta(Se)?e:Se},Fe))}:N):[];let C=_;l&&d&&S.push(N=>{const ie=ta(N.theme)?e:N.theme,Se=oW(l,ie);if(Se){const Fe={};return Object.entries(Se).forEach(([Wt,Ht])=>{Fe[Wt]=typeof Ht=="function"?Ht($({},N,{theme:ie})):Ht}),d(N,Fe)}return null}),l&&!p&&S.push(N=>{const ie=ta(N.theme)?e:N.theme;return lW(N,aW(l,ie),ie,l)}),y||S.push(s);const R=S.length-E.length;if(Array.isArray(_)&&R>0){const N=new Array(R).fill("");C=[..._,...N],C.raw=[..._.raw,...N]}else typeof _=="function"&&_.__emotion_real!==_&&(C=N=>{let{theme:ie}=N,Se=Je(N,iW);return _($({theme:ta(ie)?e:ie},Se))});return m(C,...S)};return m.withConfig&&(v.withConfig=m.withConfig),v}}function hW(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:Dx(e.components[n].defaultProps,r)}function dW({props:t,name:e,defaultTheme:n}){const r=eW(n);return hW({theme:r,name:e,props:t})}function r0(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function fW(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Qi(t){if(t.type)return t;if(t.charAt(0)==="#")return Qi(fW(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(vo(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(vo(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}function Bd(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function pW(t){t=Qi(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(u,c=(u+n/30)%12)=>i-s*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),Bd({type:a,values:l})}function Y1(t){t=Qi(t);let e=t.type==="hsl"?Qi(pW(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function mW(t,e){const n=Y1(t),r=Y1(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function zu(t,e){return t=Qi(t),e=r0(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Bd(t)}function gW(t,e){if(t=Qi(t),e=r0(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Bd(t)}function yW(t,e){if(t=Qi(t),e=r0(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Bd(t)}function vW(t,e){return $({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const _W={black:"#000",white:"#fff"},Sl=_W,wW={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},EW=wW,SW={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},hs=SW,CW={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},ds=CW,TW={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},na=TW,IW={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},fs=IW,kW={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},ps=kW,bW={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},ms=bW,xW=["mode","contrastThreshold","tonalOffset"],X1={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Sl.white,default:Sl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},tp={text:{primary:Sl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Sl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function J1(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=yW(t.main,i):e==="dark"&&(t.dark=gW(t.main,s)))}function RW(t="light"){return t==="dark"?{main:fs[200],light:fs[50],dark:fs[400]}:{main:fs[700],light:fs[400],dark:fs[800]}}function NW(t="light"){return t==="dark"?{main:hs[200],light:hs[50],dark:hs[400]}:{main:hs[500],light:hs[300],dark:hs[700]}}function AW(t="light"){return t==="dark"?{main:ds[500],light:ds[300],dark:ds[700]}:{main:ds[700],light:ds[400],dark:ds[800]}}function PW(t="light"){return t==="dark"?{main:ps[400],light:ps[300],dark:ps[700]}:{main:ps[700],light:ps[500],dark:ps[900]}}function OW(t="light"){return t==="dark"?{main:ms[400],light:ms[300],dark:ms[700]}:{main:ms[800],light:ms[500],dark:ms[900]}}function DW(t="light"){return t==="dark"?{main:na[400],light:na[300],dark:na[700]}:{main:"#ed6c02",light:na[500],dark:na[900]}}function MW(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=Je(t,xW),s=t.primary||RW(e),o=t.secondary||NW(e),a=t.error||AW(e),l=t.info||PW(e),u=t.success||OW(e),c=t.warning||DW(e);function h(y){return mW(y,tp.text.primary)>=n?tp.text.primary:X1.text.primary}const d=({color:y,name:w,mainShade:g=500,lightShade:m=300,darkShade:v=700})=>{if(y=$({},y),!y.main&&y[g]&&(y.main=y[g]),!y.hasOwnProperty("main"))throw new Error(vo(11,w?` (${w})`:"",g));if(typeof y.main!="string")throw new Error(vo(12,w?` (${w})`:"",JSON.stringify(y.main)));return J1(y,"light",m,r),J1(y,"dark",v,r),y.contrastText||(y.contrastText=h(y.main)),y},f={dark:tp,light:X1};return sr($({common:$({},Sl),mode:e,primary:d({color:s,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:c,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:u,name:"success"}),grey:EW,contrastThreshold:n,getContrastText:h,augmentColor:d,tonalOffset:r},f[e]),i)}const $W=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function LW(t){return Math.round(t*1e5)/1e5}const Z1={textTransform:"uppercase"},eE='"Roboto", "Helvetica", "Arial", sans-serif';function FW(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=eE,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:h}=n,d=Je(n,$W),f=i/14,p=h||(g=>`${g/u*f}rem`),y=(g,m,v,_,E)=>$({fontFamily:r,fontWeight:g,fontSize:p(m),lineHeight:v},r===eE?{letterSpacing:`${LW(_/m)}em`}:{},E,c),w={h1:y(s,96,1.167,-1.5),h2:y(s,60,1.2,-.5),h3:y(o,48,1.167,0),h4:y(o,34,1.235,.25),h5:y(o,24,1.334,0),h6:y(a,20,1.6,.15),subtitle1:y(o,16,1.75,.15),subtitle2:y(a,14,1.57,.1),body1:y(o,16,1.5,.15),body2:y(o,14,1.43,.15),button:y(a,14,1.75,.4,Z1),caption:y(o,12,1.66,.4),overline:y(o,12,2.66,1,Z1)};return sr($({htmlFontSize:u,pxToRem:p,fontFamily:r,fontSize:i,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:a,fontWeightBold:l},w),d,{clone:!1})}const UW=.2,VW=.14,zW=.12;function ve(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${UW})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${VW})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${zW})`].join(",")}const BW=["none",ve(0,2,1,-1,0,1,1,0,0,1,3,0),ve(0,3,1,-2,0,2,2,0,0,1,5,0),ve(0,3,3,-2,0,3,4,0,0,1,8,0),ve(0,2,4,-1,0,4,5,0,0,1,10,0),ve(0,3,5,-1,0,5,8,0,0,1,14,0),ve(0,3,5,-1,0,6,10,0,0,1,18,0),ve(0,4,5,-2,0,7,10,1,0,2,16,1),ve(0,5,5,-3,0,8,10,1,0,3,14,2),ve(0,5,6,-3,0,9,12,1,0,3,16,2),ve(0,6,6,-3,0,10,14,1,0,4,18,3),ve(0,6,7,-4,0,11,15,1,0,4,20,3),ve(0,7,8,-4,0,12,17,2,0,5,22,4),ve(0,7,8,-4,0,13,19,2,0,5,24,4),ve(0,7,9,-4,0,14,21,2,0,5,26,4),ve(0,8,9,-5,0,15,22,2,0,6,28,5),ve(0,8,10,-5,0,16,24,2,0,6,30,5),ve(0,8,11,-5,0,17,26,2,0,6,32,5),ve(0,9,11,-5,0,18,28,2,0,7,34,6),ve(0,9,12,-6,0,19,29,2,0,7,36,6),ve(0,10,13,-6,0,20,31,3,0,8,38,7),ve(0,10,13,-6,0,21,33,3,0,8,40,7),ve(0,10,14,-6,0,22,35,3,0,8,42,7),ve(0,11,14,-7,0,23,36,3,0,9,44,8),ve(0,11,15,-7,0,24,38,3,0,9,46,8)],jW=BW,WW=["duration","easing","delay"],HW={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},qW={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function tE(t){return`${Math.round(t)}ms`}function KW(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function GW(t){const e=$({},HW,t.easing),n=$({},qW,t.duration);return $({getAutoHeightDuration:KW,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:l=0}=s;return Je(s,WW),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof o=="string"?o:tE(o)} ${a} ${typeof l=="string"?l:tE(l)}`).join(",")}},t,{easing:e,duration:n})}const QW={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},YW=QW,XW=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function JW(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:s={}}=t,o=Je(t,XW);if(t.vars)throw new Error(vo(18));const a=MW(r),l=n0(t);let u=sr(l,{mixins:vW(l.breakpoints,n),palette:a,shadows:jW.slice(),typography:FW(a,s),transitions:GW(i),zIndex:$({},YW)});return u=sr(u,o),u=e.reduce((c,h)=>sr(c,h),u),u}const ZW=JW(),dR=ZW,fR=t=>gc(t)&&t!=="classes",eH=cW({defaultTheme:dR,rootShouldForwardProp:fR}),sn=eH;function Uo({props:t,name:e}){return dW({props:t,name:e,defaultTheme:dR})}function tH(t){return $o("MuiSvgIcon",t)}Lo("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const nH=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],rH=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${xe(e)}`,`fontSize${xe(n)}`]};return ru(i,tH,r)},iH=sn("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${xe(n.color)}`],e[`fontSize${xe(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,s,o,a,l,u,c,h,d,f,p,y,w,g,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(s=i.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((o=t.typography)==null||(a=o.pxToRem)==null?void 0:a.call(o,20))||"1.25rem",medium:((l=t.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((c=t.typography)==null||(h=c.pxToRem)==null?void 0:h.call(c,35))||"2.1875"}[e.fontSize],color:(d=(f=(t.vars||t).palette)==null||(p=f[e.color])==null?void 0:p.main)!=null?d:{action:(y=(t.vars||t).palette)==null||(w=y.action)==null?void 0:w.active,disabled:(g=(t.vars||t).palette)==null||(m=g.action)==null?void 0:m.disabled,inherit:void 0}[e.color]}}),pR=b.exports.forwardRef(function(e,n){const r=Uo({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:c=!1,titleAccess:h,viewBox:d="0 0 24 24"}=r,f=Je(r,nH),p=$({},r,{color:o,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:c,viewBox:d}),y={};c||(y.viewBox=d);const w=rH(p);return is(iH,$({as:a,className:Ct(w.root,s),ownerState:p,focusable:"false",color:u,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},y,f,{children:[i,h?W("title",{children:h}):null]}))});pR.muiName="SvgIcon";const nE=pR;function sH(t,e){const n=(r,i)=>W(nE,$({"data-testid":`${e}Icon`,ref:i},r,{children:t}));return n.muiName=nE.muiName,b.exports.memo(b.exports.forwardRef(n))}const oH=sH(W("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function aH(t){return $o("MuiAvatar",t)}Lo("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const lH=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],uH=t=>{const{classes:e,variant:n,colorDefault:r}=t;return ru({root:["root",n,r&&"colorDefault"],img:["img"],fallback:["fallback"]},aH,e)},cH=sn("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.colorDefault&&e.colorDefault]}})(({theme:t,ownerState:e})=>$({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.variant==="square"&&{borderRadius:0},e.colorDefault&&$({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}))),hH=sn("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),dH=sn(oH,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function fH({crossOrigin:t,referrerPolicy:e,src:n,srcSet:r}){const[i,s]=b.exports.useState(!1);return b.exports.useEffect(()=>{if(!n&&!r)return;s(!1);let o=!0;const a=new Image;return a.onload=()=>{!o||s("loaded")},a.onerror=()=>{!o||s("error")},a.crossOrigin=t,a.referrerPolicy=e,a.src=n,r&&(a.srcset=r),()=>{o=!1}},[t,e,n,r]),i}const pH=b.exports.forwardRef(function(e,n){const r=Uo({props:e,name:"MuiAvatar"}),{alt:i,children:s,className:o,component:a="div",imgProps:l,sizes:u,src:c,srcSet:h,variant:d="circular"}=r,f=Je(r,lH);let p=null;const y=fH($({},l,{src:c,srcSet:h})),w=c||h,g=w&&y!=="error",m=$({},r,{colorDefault:!g,component:a,variant:d}),v=uH(m);return g?p=W(hH,$({alt:i,src:c,srcSet:h,sizes:u,ownerState:m,className:v.img},l)):s!=null?p=s:w&&i?p=i[0]:p=W(dH,{className:v.fallback}),W(cH,$({as:a,ownerState:m,className:Ct(v.root,o),ref:n},f,{children:p}))}),mH=pH,gH=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1});function yH(t){let e=0,n;for(n=0;n<t.length;n+=1)e=t.charCodeAt(n)+((e<<5)-e);let r="#";for(n=0;n<3;n+=1)r+=`00${(e>>n*8&255).toString(16)}`.slice(-2);return r}function vH(t){return{sx:{bgcolor:yH(t)},children:`${t.split(" ")[0][0]}${t.split(" ")[1][0]}`}}function _H({createdAt:t,text:e,displayName:n}){return is("div",{children:["[",t!=null&&t.seconds?W("span",{children:gH.format(new Date(t.seconds*1e3))}):null,"]"," ",W(mH,{...vH("a c")}),W("strong",{children:n||null})," ",e]})}function wH({messages:t}){return W("pre",{children:t==null?void 0:t.map(e=>W(_H,{...e},e.id))})}function EH(t){return $o("MuiCircularProgress",t)}Lo("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const SH=["className","color","disableShrink","size","style","thickness","value","variant"];let jd=t=>t,rE,iE,sE,oE;const Sr=44,CH=su(rE||(rE=jd`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),TH=su(iE||(iE=jd`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),IH=t=>{const{classes:e,variant:n,color:r,disableShrink:i}=t,s={root:["root",n,`color${xe(r)}`],svg:["svg"],circle:["circle",`circle${xe(n)}`,i&&"circleDisableShrink"]};return ru(s,EH,e)},kH=sn("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`color${xe(n.color)}`]]}})(({ownerState:t,theme:e})=>$({display:"inline-block"},t.variant==="determinate"&&{transition:e.transitions.create("transform")},t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&Qv(sE||(sE=jd`
      animation: ${0} 1.4s linear infinite;
    `),CH)),bH=sn("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),xH=sn("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.circle,e[`circle${xe(n.variant)}`],n.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>$({stroke:"currentColor"},t.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&Qv(oE||(oE=jd`
      animation: ${0} 1.4s ease-in-out infinite;
    `),TH)),RH=b.exports.forwardRef(function(e,n){const r=Uo({props:e,name:"MuiCircularProgress"}),{className:i,color:s="primary",disableShrink:o=!1,size:a=40,style:l,thickness:u=3.6,value:c=0,variant:h="indeterminate"}=r,d=Je(r,SH),f=$({},r,{color:s,disableShrink:o,size:a,thickness:u,value:c,variant:h}),p=IH(f),y={},w={},g={};if(h==="determinate"){const m=2*Math.PI*((Sr-u)/2);y.strokeDasharray=m.toFixed(3),g["aria-valuenow"]=Math.round(c),y.strokeDashoffset=`${((100-c)/100*m).toFixed(3)}px`,w.transform="rotate(-90deg)"}return W(kH,$({className:Ct(p.root,i),style:$({width:a,height:a},w,l),ownerState:f,ref:n,role:"progressbar"},g,d,{children:W(bH,{className:p.svg,ownerState:f,viewBox:`${Sr/2} ${Sr/2} ${Sr} ${Sr}`,children:W(xH,{className:p.circle,style:y,ownerState:f,cx:Sr,cy:Sr,r:(Sr-u)/2,fill:"none",strokeWidth:u})})}))}),NH=RH;function AH(){const t=WB(),e=m4(t,"messages"),n=P4(e,D4("createdAt"),$4(100)),{status:r,data:i}=UB(n,{idField:"id"});return is("div",{children:[r==="loading"?W(NH,{color:"success"}):W(wH,{messages:i}),W(KB,{messagesCollection:e})]})}const PH=async t=>{rD(t),await xD(t,new Gn)},OH=()=>{const t=globalThis._reactFirePreloadedObservables;Array.from(t.keys()).forEach(e=>e.includes("firestore")&&t.delete(e))},DH=async t=>{await iD(t),OH()};function Km(t,e){return Km=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Km(t,e)}function MH(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Km(t,e)}const aE=bh.createContext(null);function $H(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i0(t,e){var n=function(s){return e&&b.exports.isValidElement(s)?e(s):s},r=Object.create(null);return t&&b.exports.Children.map(t,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function LH(t,e){t=t||{},e=e||{};function n(c){return c in e?e[c]:t[c]}var r=Object.create(null),i=[];for(var s in t)s in e?i.length&&(r[s]=i,i=[]):i.push(s);var o,a={};for(var l in e){if(r[l])for(o=0;o<r[l].length;o++){var u=r[l][o];a[r[l][o]]=n(u)}a[l]=n(l)}for(o=0;o<i.length;o++)a[i[o]]=n(i[o]);return a}function Si(t,e,n){return n[e]!=null?n[e]:t.props[e]}function FH(t,e){return i0(t.children,function(n){return b.exports.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:Si(n,"appear",t),enter:Si(n,"enter",t),exit:Si(n,"exit",t)})})}function UH(t,e,n){var r=i0(t.children),i=LH(e,r);return Object.keys(i).forEach(function(s){var o=i[s];if(!!b.exports.isValidElement(o)){var a=s in e,l=s in r,u=e[s],c=b.exports.isValidElement(u)&&!u.props.in;l&&(!a||c)?i[s]=b.exports.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:Si(o,"exit",t),enter:Si(o,"enter",t)}):!l&&a&&!c?i[s]=b.exports.cloneElement(o,{in:!1}):l&&a&&b.exports.isValidElement(u)&&(i[s]=b.exports.cloneElement(o,{onExited:n.bind(null,o),in:u.props.in,exit:Si(o,"exit",t),enter:Si(o,"enter",t)}))}}),i}var VH=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},zH={component:"div",childFactory:function(e){return e}},s0=function(t){MH(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=s.handleExited.bind($H(s));return s.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},s}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,s){var o=s.children,a=s.handleExited,l=s.firstRender;return{children:l?FH(i,a):UH(i,o,a),firstRender:!1}},n.handleExited=function(i,s){var o=i0(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(s),this.mounted&&this.setState(function(a){var l=$({},a.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,s=i.component,o=i.childFactory,a=Je(i,["component","childFactory"]),l=this.state.contextValue,u=VH(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,s===null?W(aE.Provider,{value:l,children:u}):W(aE.Provider,{value:l,children:W(s,{...a,children:u})})},e}(bh.Component);s0.propTypes={};s0.defaultProps=zH;const BH=s0;function jH(t){const{className:e,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:o,in:a,onExited:l,timeout:u}=t,[c,h]=b.exports.useState(!1),d=Ct(e,n.ripple,n.rippleVisible,r&&n.ripplePulsate),f={width:o,height:o,top:-(o/2)+s,left:-(o/2)+i},p=Ct(n.child,c&&n.childLeaving,r&&n.childPulsate);return!a&&!c&&h(!0),b.exports.useEffect(()=>{if(!a&&l!=null){const y=setTimeout(l,u);return()=>{clearTimeout(y)}}},[l,a,u]),W("span",{className:d,style:f,children:W("span",{className:p})})}const WH=Lo("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),on=WH,HH=["center","classes","className"];let Wd=t=>t,lE,uE,cE,hE;const Gm=550,qH=80,KH=su(lE||(lE=Wd`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),GH=su(uE||(uE=Wd`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),QH=su(cE||(cE=Wd`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),YH=sn("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),XH=sn(jH,{name:"MuiTouchRipple",slot:"Ripple"})(hE||(hE=Wd`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),on.rippleVisible,KH,Gm,({theme:t})=>t.transitions.easing.easeInOut,on.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,on.child,on.childLeaving,GH,Gm,({theme:t})=>t.transitions.easing.easeInOut,on.childPulsate,QH,({theme:t})=>t.transitions.easing.easeInOut),JH=b.exports.forwardRef(function(e,n){const r=Uo({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:o}=r,a=Je(r,HH),[l,u]=b.exports.useState([]),c=b.exports.useRef(0),h=b.exports.useRef(null);b.exports.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const d=b.exports.useRef(!1),f=b.exports.useRef(null),p=b.exports.useRef(null),y=b.exports.useRef(null);b.exports.useEffect(()=>()=>{clearTimeout(f.current)},[]);const w=b.exports.useCallback(_=>{const{pulsate:E,rippleX:S,rippleY:C,rippleSize:R,cb:G}=_;u(N=>[...N,W(XH,{classes:{ripple:Ct(s.ripple,on.ripple),rippleVisible:Ct(s.rippleVisible,on.rippleVisible),ripplePulsate:Ct(s.ripplePulsate,on.ripplePulsate),child:Ct(s.child,on.child),childLeaving:Ct(s.childLeaving,on.childLeaving),childPulsate:Ct(s.childPulsate,on.childPulsate)},timeout:Gm,pulsate:E,rippleX:S,rippleY:C,rippleSize:R},c.current)]),c.current+=1,h.current=G},[s]),g=b.exports.useCallback((_={},E={},S)=>{const{pulsate:C=!1,center:R=i||E.pulsate,fakeElement:G=!1}=E;if((_==null?void 0:_.type)==="mousedown"&&d.current){d.current=!1;return}(_==null?void 0:_.type)==="touchstart"&&(d.current=!0);const N=G?null:y.current,ie=N?N.getBoundingClientRect():{width:0,height:0,left:0,top:0};let Se,Fe,Wt;if(R||_===void 0||_.clientX===0&&_.clientY===0||!_.clientX&&!_.touches)Se=Math.round(ie.width/2),Fe=Math.round(ie.height/2);else{const{clientX:Ht,clientY:qt}=_.touches&&_.touches.length>0?_.touches[0]:_;Se=Math.round(Ht-ie.left),Fe=Math.round(qt-ie.top)}if(R)Wt=Math.sqrt((2*ie.width**2+ie.height**2)/3),Wt%2===0&&(Wt+=1);else{const Ht=Math.max(Math.abs((N?N.clientWidth:0)-Se),Se)*2+2,qt=Math.max(Math.abs((N?N.clientHeight:0)-Fe),Fe)*2+2;Wt=Math.sqrt(Ht**2+qt**2)}_!=null&&_.touches?p.current===null&&(p.current=()=>{w({pulsate:C,rippleX:Se,rippleY:Fe,rippleSize:Wt,cb:S})},f.current=setTimeout(()=>{p.current&&(p.current(),p.current=null)},qH)):w({pulsate:C,rippleX:Se,rippleY:Fe,rippleSize:Wt,cb:S})},[i,w]),m=b.exports.useCallback(()=>{g({},{pulsate:!0})},[g]),v=b.exports.useCallback((_,E)=>{if(clearTimeout(f.current),(_==null?void 0:_.type)==="touchend"&&p.current){p.current(),p.current=null,f.current=setTimeout(()=>{v(_,E)});return}p.current=null,u(S=>S.length>0?S.slice(1):S),h.current=E},[]);return b.exports.useImperativeHandle(n,()=>({pulsate:m,start:g,stop:v}),[m,g,v]),W(YH,$({className:Ct(on.root,s.root,o),ref:y},a,{children:W(BH,{component:null,exit:!0,children:l})}))}),ZH=JH;function eq(t){return $o("MuiButtonBase",t)}const tq=Lo("MuiButtonBase",["root","disabled","focusVisible"]),nq=tq,rq=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],iq=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:r,classes:i}=t,o=ru({root:["root",e&&"disabled",n&&"focusVisible"]},eq,i);return n&&r&&(o.root+=` ${r}`),o},sq=sn("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${nq.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),oq=b.exports.forwardRef(function(e,n){const r=Uo({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:s=!1,children:o,className:a,component:l="button",disabled:u=!1,disableRipple:c=!1,disableTouchRipple:h=!1,focusRipple:d=!1,LinkComponent:f="a",onBlur:p,onClick:y,onContextMenu:w,onDragLeave:g,onFocus:m,onFocusVisible:v,onKeyDown:_,onKeyUp:E,onMouseDown:S,onMouseLeave:C,onMouseUp:R,onTouchEnd:G,onTouchMove:N,onTouchStart:ie,tabIndex:Se=0,TouchRippleProps:Fe,touchRippleRef:Wt,type:Ht}=r,qt=Je(r,rq),Wn=b.exports.useRef(null),A=b.exports.useRef(null),z=Jf(A,Wt),{isFocusVisibleRef:q,onFocus:Ce,onBlur:Ae,ref:os}=nj(),[Et,_r]=b.exports.useState(!1);u&&Et&&_r(!1),b.exports.useImperativeHandle(i,()=>({focusVisible:()=>{_r(!0),Wn.current.focus()}}),[]);const[yn,as]=b.exports.useState(!1);b.exports.useEffect(()=>{as(!0)},[]);const gR=yn&&!c&&!u;b.exports.useEffect(()=>{Et&&d&&!c&&yn&&A.current.pulsate()},[c,d,Et,yn]);function Hn(K,a0,PR=h){return Uu(l0=>(a0&&a0(l0),!PR&&A.current&&A.current[K](l0),!0))}const yR=Hn("start",S),vR=Hn("stop",w),_R=Hn("stop",g),wR=Hn("stop",R),ER=Hn("stop",K=>{Et&&K.preventDefault(),C&&C(K)}),SR=Hn("start",ie),CR=Hn("stop",G),TR=Hn("stop",N),IR=Hn("stop",K=>{Ae(K),q.current===!1&&_r(!1),p&&p(K)},!1),kR=Uu(K=>{Wn.current||(Wn.current=K.currentTarget),Ce(K),q.current===!0&&(_r(!0),v&&v(K)),m&&m(K)}),Hd=()=>{const K=Wn.current;return l&&l!=="button"&&!(K.tagName==="A"&&K.href)},qd=b.exports.useRef(!1),bR=Uu(K=>{d&&!qd.current&&Et&&A.current&&K.key===" "&&(qd.current=!0,A.current.stop(K,()=>{A.current.start(K)})),K.target===K.currentTarget&&Hd()&&K.key===" "&&K.preventDefault(),_&&_(K),K.target===K.currentTarget&&Hd()&&K.key==="Enter"&&!u&&(K.preventDefault(),y&&y(K))}),xR=Uu(K=>{d&&K.key===" "&&A.current&&Et&&!K.defaultPrevented&&(qd.current=!1,A.current.stop(K,()=>{A.current.pulsate(K)})),E&&E(K),y&&K.target===K.currentTarget&&Hd()&&K.key===" "&&!K.defaultPrevented&&y(K)});let uu=l;uu==="button"&&(qt.href||qt.to)&&(uu=f);const Vo={};uu==="button"?(Vo.type=Ht===void 0?"button":Ht,Vo.disabled=u):(!qt.href&&!qt.to&&(Vo.role="button"),u&&(Vo["aria-disabled"]=u));const RR=Jf(os,Wn),NR=Jf(n,RR),o0=$({},r,{centerRipple:s,component:l,disabled:u,disableRipple:c,disableTouchRipple:h,focusRipple:d,tabIndex:Se,focusVisible:Et}),AR=iq(o0);return is(sq,$({as:uu,className:Ct(AR.root,a),ownerState:o0,onBlur:IR,onClick:y,onContextMenu:vR,onFocus:kR,onKeyDown:bR,onKeyUp:xR,onMouseDown:yR,onMouseLeave:ER,onMouseUp:wR,onDragLeave:_R,onTouchEnd:CR,onTouchMove:TR,onTouchStart:SR,ref:NR,tabIndex:u?-1:Se,type:Ht},Vo,qt,{children:[o,gR?W(ZH,$({ref:z,center:s},Fe)):null]}))}),aq=oq;function lq(t){return $o("MuiButton",t)}const uq=Lo("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Bu=uq,cq=b.exports.createContext({}),hq=cq,dq=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],fq=["root"],pq=t=>{const{color:e,disableElevation:n,fullWidth:r,size:i,variant:s,classes:o}=t,a={root:["root",s,`${s}${xe(e)}`,`size${xe(i)}`,`${s}Size${xe(i)}`,e==="inherit"&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${xe(i)}`],endIcon:["endIcon",`iconSize${xe(i)}`]},l=ru(a,lq,o);return $({},o,l)},mR=t=>$({},t.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},t.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},t.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),mq=sn(aq,{shouldForwardProp:t=>fR(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`${n.variant}${xe(n.color)}`],e[`size${xe(n.size)}`],e[`${n.variant}Size${xe(n.size)}`],n.color==="inherit"&&e.colorInherit,n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth]}})(({theme:t,ownerState:e})=>{var n,r;return $({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":$({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:zu(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="text"&&e.color!=="inherit"&&{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:zu(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="outlined"&&e.color!=="inherit"&&{border:`1px solid ${(t.vars||t).palette[e.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:zu(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="contained"&&{backgroundColor:(t.vars||t).palette.grey.A100,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},e.variant==="contained"&&e.color!=="inherit"&&{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}}),"&:active":$({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${Bu.focusVisible}`]:$({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${Bu.disabled}`]:$({color:(t.vars||t).palette.action.disabled},e.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},e.variant==="outlined"&&e.color==="secondary"&&{border:`1px solid ${(t.vars||t).palette.action.disabled}`},e.variant==="contained"&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},e.variant==="text"&&{padding:"6px 8px"},e.variant==="text"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main},e.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},e.variant==="outlined"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${zu(t.palette[e.color].main,.5)}`},e.variant==="contained"&&{color:t.vars?t.vars.palette.text.primary:(n=(r=t.palette).getContrastText)==null?void 0:n.call(r,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],boxShadow:(t.vars||t).shadows[2]},e.variant==="contained"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main},e.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},e.size==="small"&&e.variant==="text"&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="text"&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="outlined"&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="outlined"&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="contained"&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="contained"&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})},({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Bu.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Bu.disabled}`]:{boxShadow:"none"}}),gq=sn("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.startIcon,e[`iconSize${xe(n.size)}`]]}})(({ownerState:t})=>$({display:"inherit",marginRight:8,marginLeft:-4},t.size==="small"&&{marginLeft:-2},mR(t))),yq=sn("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.endIcon,e[`iconSize${xe(n.size)}`]]}})(({ownerState:t})=>$({display:"inherit",marginRight:-4,marginLeft:8},t.size==="small"&&{marginRight:-2},mR(t))),vq=b.exports.forwardRef(function(e,n){const r=b.exports.useContext(hq),i=Dx(r,e),s=Uo({props:i,name:"MuiButton"}),{children:o,color:a="primary",component:l="button",className:u,disabled:c=!1,disableElevation:h=!1,disableFocusRipple:d=!1,endIcon:f,focusVisibleClassName:p,fullWidth:y=!1,size:w="medium",startIcon:g,type:m,variant:v="text"}=s,_=Je(s,dq),E=$({},s,{color:a,component:l,disabled:c,disableElevation:h,disableFocusRipple:d,fullWidth:y,size:w,type:m,variant:v}),S=pq(E),{root:C}=S,R=Je(S,fq),G=g&&W(gq,{className:R.startIcon,ownerState:E,children:g}),N=f&&W(yq,{className:R.endIcon,ownerState:E,children:f});return is(mq,$({ownerState:E,className:Ct(r.className,C,u),component:l,disabled:c,focusRipple:!d,focusVisibleClassName:Ct(R.focusVisible,p),ref:n,type:m},_,{classes:R,children:[G,o,N]}))}),dE=vq;function _q(){const{data:t}=Rx(),e=zv();return t.signedIn?W(dE,{variant:"contained",onClick:()=>DH(e),children:"Sign out"}):W(dE,{variant:"contained",onClick:()=>PH(e),children:"Sign in with Google"})}function wq(){const{status:t,data:e}=Rx();return t==="loading"?W("span",{children:"loading..."}):is(Oz,{children:[W(_q,{}),e.signedIn&&W(AH,{})]})}const Eq={apiKey:"AIzaSyCxXnUidB20eJPotUbQjUUQmVDk_LFIzQk",authDomain:"example-44ced.firebaseapp.com",projectId:"example-44ced",storageBucket:"example-44ced.appspot.com",messagingSenderId:"340859330515",appId:"1:340859330515:web:98a9e55130e5fbcaced926"};function Sq({children:t}){const e=xx(),n=mM(e),r=C2(e);return W(jB,{sdk:_4(e),children:W(zB,{sdk:n,children:W(BB,{sdk:r,children:t})})})}np.createRoot(document.getElementById("root")).render(W(bh.StrictMode,{children:W(TB,{firebaseConfig:Eq,children:W(Sq,{children:W(wq,{})})})}));
