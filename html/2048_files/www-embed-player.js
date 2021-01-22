(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function t(a,b){if(b)a:{for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
function pa(){this.o=!1;this.i=null;this.m=void 0;this.h=1;this.C=this.l=0;this.j=null}
function qa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
pa.prototype.u=function(a){this.m=a};
function ra(a,b){a.j={xa:b,Ya:!0};a.h=a.l||a.C}
pa.prototype["return"]=function(a){this.j={"return":a};this.h=this.C};
function sa(a,b,c){a.h=c;return{value:b}}
function ta(a){a.l=0;var b=a.j.xa;a.j=null;return b}
function ua(a){this.h=new pa;this.i=a}
function va(a,b){qa(a.h);var c=a.h.i;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.i=null,ra(a.h,g),ya(a)}a.h.i=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,ra(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ya)throw b.xa;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){qa(a.h);a.h.i?b=xa(a,a.h.i.next,b,a.h.u):(a.h.u(b),b=ya(a));return b};
this["throw"]=function(b){qa(a.h);a.h.i?b=xa(a,a.h.i["throw"],b,a.h.u):(ra(a.h,b),b=ya(a));return b};
this["return"]=function(b){return va(a,b)};
this[Symbol.iterator]=function(){return this}}
function Aa(a,b){var c=new za(new ua(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)x(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.J),reject:g(this.m)}};
b.prototype.J=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.T(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.I(g):this.o(g)}};
b.prototype.I=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.U(h,g):this.o(g)};
b.prototype.m=function(g){this.C(2,g)};
b.prototype.o=function(g){this.C(1,g)};
b.prototype.C=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.K();this.B()};
b.prototype.K=function(){var g=this;e(function(){if(g.F()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.T=function(g){var h=this.l();g.ia(h.resolve,h.reject)};
b.prototype.U=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(w){try{l(q(w))}catch(A){m(A)}}:r}
var l,m,n=new b(function(q,r){l=q;m=r});
this.ia(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ia=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ia(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(A){q[w]=A;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).ia(n(q.length-1),m),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)x(b,d)&&c.push([d,b[d]]);return c}});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!x(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!x(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&x(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&x(k,g)&&x(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&x(k,g)&&x(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&x(h.i,l))for(var n=0;n<m.length;n++){var q=m[n];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:n,D:q}}return{id:l,list:m,index:-1,D:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.D?l.D.value=k:(l.D={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.D),this.h.previous.next=l.D,this.h.previous=l.D,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.D&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.D.previous.next=h.D.next,h.D.next.previous=h.D.previous,h.D.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).D};
e.prototype.get=function(h){return(h=d(this,h).D)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype["delete"]=function(c){c=this.h["delete"](c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)x(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ea(a){if(a&&a!=y)return Fa(a.document);null===Ga&&(Ga=Fa(y.document));return Ga}
var Ha=/^[\w+/_-]+[=]{0,2}$/,Ga=null;function Fa(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ha.test(a)?a:""}
function B(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ia(){}
function Ja(a){a.qa=void 0;a.getInstance=function(){return a.qa?a.qa:a.qa=new a}}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function C(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ma(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Oa)}
var Na="closure_uid_"+(1E9*Math.random()>>>0),Oa=0;function Pa(a,b,c){return a.call.apply(a.bind,arguments)}
function Qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function E(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E=Pa:E=Qa;return E.apply(null,arguments)}
function Ra(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function F(){return Date.now()}
function Sa(a,b){z(a,b,void 0)}
function G(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.qk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ta(a){return a}
;function Ua(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ua);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Ua,Error);Ua.prototype.name="CustomError";function Va(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Wa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Xa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ya=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Za=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},$a=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ab(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function bb(a,b){var c=Xa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function cb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function db(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function eb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function fb(a,b){var c=La(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function gb(a){var b=hb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ib(a){for(var b in a)return!1;return!0}
function jb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function kb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function lb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var pb;function qb(){if(void 0===pb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ta,createScript:Ta,createScriptURL:Ta})}catch(c){y.console&&y.console.error(c.message)}pb=a}else pb=a}return pb}
;function rb(a,b){this.j=b===sb?a:""}
rb.prototype.W=!0;rb.prototype.V=function(){return this.j.toString()};
rb.prototype.i=!0;rb.prototype.h=function(){return 1};
function tb(a){if(a instanceof rb&&a.constructor===rb)return a.j;Ka(a);return"type_error:TrustedResourceUrl"}
var sb={};var ub=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function vb(a,b){if(b)a=a.replace(wb,"&amp;").replace(xb,"&lt;").replace(yb,"&gt;").replace(zb,"&quot;").replace(Ab,"&#39;").replace(Bb,"&#0;");else{if(!Cb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(wb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(xb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(yb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(zb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ab,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Bb,"&#0;"))}return a}
var wb=/&/g,xb=/</g,yb=/>/g,zb=/"/g,Ab=/'/g,Bb=/\x00/g,Cb=/[\x00&<>"']/;function Db(a,b){return a<b?-1:a>b?1:0}
;function I(a,b){this.j=b===Eb?a:""}
I.prototype.W=!0;I.prototype.V=function(){return this.j.toString()};
I.prototype.i=!0;I.prototype.h=function(){return 1};
function Fb(a){if(a instanceof I&&a.constructor===I)return a.j;Ka(a);return"type_error:SafeUrl"}
var Gb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Hb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof I)return a;a="object"==typeof a&&a.W?a.V():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return new I(a,Eb)}
var Eb={},Kb=new I("about:invalid#zClosurez",Eb);var Lb;a:{var Mb=y.navigator;if(Mb){var Nb=Mb.userAgent;if(Nb){Lb=Nb;break a}}Lb=""}function J(a){return-1!=Lb.indexOf(a)}
;function Ob(a,b,c){this.j=c===Pb?a:"";this.l=b}
Ob.prototype.i=!0;Ob.prototype.h=function(){return this.l};
Ob.prototype.W=!0;Ob.prototype.V=function(){return this.j.toString()};
var Pb={};function Qb(a,b){var c=qb();c=c?c.createHTML(a):a;return new Ob(c,b,Pb)}
;function Rb(a,b){var c=b instanceof I?b:Jb(b);a.href=Fb(c)}
function Sb(a,b){a.src=tb(b);var c=Ea(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Tb(a){return a=vb(a,void 0)}
function Ub(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wb(a){return a?decodeURI(a):a}
function Xb(a){return Wb(a.match(Vb)[3]||null)}
function Yb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Yb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Zb(a){var b=[],c;for(c in a)Yb(c,a[c],b);return b.join("&")}
function $b(a,b){var c=Zb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var ac=/#|$/;function bc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function cc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function dc(a){dc[" "](a);return a}
dc[" "]=Ia;var ec=J("Opera"),fc=J("Trident")||J("MSIE"),gc=J("Edge"),hc=J("Gecko")&&!(-1!=Lb.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),ic=-1!=Lb.toLowerCase().indexOf("webkit")&&!J("Edge");function jc(){var a=y.document;return a?a.documentMode:void 0}
var kc;a:{var lc="",mc=function(){var a=Lb;if(hc)return/rv:([^\);]+)(\)|;)/.exec(a);if(gc)return/Edge\/([\d\.]+)/.exec(a);if(fc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ic)return/WebKit\/(\S+)/.exec(a);if(ec)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
mc&&(lc=mc?mc[1]:"");if(fc){var nc=jc();if(null!=nc&&nc>parseFloat(lc)){kc=String(nc);break a}}kc=lc}var pc=kc,qc={},rc;if(y.document&&fc){var sc=jc();rc=sc?sc:parseInt(pc,10)||void 0}else rc=void 0;var tc=rc;var uc=J("Firefox")||J("FxiOS"),vc=cc()||J("iPod"),wc=J("iPad"),xc=J("Safari")&&!((J("Chrome")||J("CriOS"))&&!J("Edge")||J("Coast")||J("Opera")||J("Edge")||J("Edg/")||J("OPR")||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))&&!(cc()||J("iPad")||J("iPod"));var yc={},zc=null;
function Ac(a){var b=3;La(a);void 0===b&&(b=0);if(!zc){zc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));yc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===zc[h]&&(zc[h]=g)}}}b=yc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var K=window;var Bc=!fc||9<=Number(tc);function Cc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
p=Cc.prototype;p.clone=function(){return new Cc(this.x,this.y)};
p.equals=function(a){return a instanceof Cc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Dc(a,b){this.width=a;this.height=b}
p=Dc.prototype;p.clone=function(){return new Dc(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.isEmpty=function(){return!(this.width*this.height)};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ec(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Fc(a,b){eb(b,function(c,d){c&&"object"==typeof c&&c.W&&(c=c.V());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Gc.hasOwnProperty(d)?a.setAttribute(Gc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Gc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Hc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Bc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Tb(g.name),'"');if(g.type){f.push(' type="',Tb(g.type),'"');var h={};ob(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Ic(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Fc(f,g));2<d.length&&Jc(e,f,d);return f}
function Jc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!La(f)||C(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(C(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}H(g?cb(f):f,d)}}}
function Ic(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Kc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Lc(a){var b=Mc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Nc(){var a=[];Lc(function(b){a.push(b)});
return a}
var Mc={Gb:"allow-forms",Hb:"allow-modals",Ib:"allow-orientation-lock",Jb:"allow-pointer-lock",Kb:"allow-popups",Lb:"allow-popups-to-escape-sandbox",Mb:"allow-presentation",Nb:"allow-same-origin",Ob:"allow-scripts",Pb:"allow-top-navigation",Qb:"allow-top-navigation-by-user-activation"},Oc=Wa(function(){return Nc()});
function Pc(){var a=Ic(document,"IFRAME"),b={};H(Oc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function L(){this.i=this.i;this.C=this.C}
L.prototype.i=!1;L.prototype.dispose=function(){this.i||(this.i=!0,this.A())};
function Qc(a,b){a.i?b():(a.C||(a.C=[]),a.C.push(b))}
L.prototype.A=function(){if(this.C)for(;this.C.length;)this.C.shift()()};
function Rc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Sc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];La(d)?Sc.apply(null,d):Rc(d)}}
;var Tc={};function Uc(a){if(a!==Tc)throw Error("Bad secret");}
;function Vc(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var Wc;function Xc(){}
function Yc(a,b){Uc(b);this.h=a}
v(Yc,Xc);Yc.prototype.toString=function(){return this.h.toString()};
var Zc=null===(Wc=Vc())||void 0===Wc?void 0:Wc.emptyHTML;new Yc(null!==Zc&&void 0!==Zc?Zc:"",Tc);var $c;function ad(){}
function bd(a,b){Uc(b);this.h=a}
v(bd,ad);bd.prototype.toString=function(){return this.h.toString()};
var cd=null===($c=Vc())||void 0===$c?void 0:$c.emptyScript;new bd(null!==cd&&void 0!==cd?cd:"",Tc);function dd(){}
function ed(a,b){Uc(b);this.h=a}
v(ed,dd);ed.prototype.toString=function(){return this.h};new ed("about:blank",Tc);new ed("about:invalid#zTSz",Tc);function fd(a){gd();var b=qb();a=b?b.createScriptURL(a):a;return new rb(a,sb)}
var gd=Ia;function hd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;function id(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=jd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,kd[c])c=kd[c];else{c=String(c);if(!kd[c]){var f=/function\s+([^\(]+)/m.exec(c);kd[c]=f?f[1]:"[Anonymous]"}c=kd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function jd(a,b){b||(b={});b[ld(a)]=!0;var c=a.stack||"",d=a.rk;d&&!b[ld(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=jd(d,b));return c}
function ld(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var kd={};function md(a){this.h=a||{cookie:""}}
p=md.prototype;p.isEnabled=function(){return navigator.cookieEnabled};
p.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Bk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ya}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ub(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ya:0,path:b,domain:c});return d};
p.isEmpty=function(){return!this.h.cookie};
p.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ub(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var nd=new md("undefined"==typeof document?null:document);var od=(new Date).getTime();function pd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function qd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var q=g,r=0;64>r;r+=4)q[r/4]=n[r]<<24|n[r+1]<<16|n[r+2]<<8|n[r+3];for(r=16;80>r;r++)n=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],A=e[2],D=e[3],ca=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var wa=D^w&(A^D);var oc=1518500249}else wa=w^A^D,oc=1859775393;else 60>r?(wa=w&A|D&(w|A),oc=2400959708):(wa=w^A^D,oc=3395469782);wa=((n<<5|n>>>27)&4294967295)+wa+ca+oc+q[r]&4294967295;ca=D;D=A;A=(w<<30|w>>>2)&4294967295;w=n;n=wa}e[0]=e[0]+n&4294967295;e[1]=e[1]+
w&4294967295;e[2]=e[2]+A&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+ca&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var r=[],w=0,A=n.length;w<A;++w)r.push(n.charCodeAt(w));n=r}q||(q=n.length);r=0;if(0==l)for(;r+64<q;)b(n.slice(r,r+64)),r+=64,m+=64;for(;r<q;)if(f[l++]=n[r++],m++,64==l)for(l=0,b(f);r+64<q;)b(n.slice(r,r+64)),r+=64,m+=64}
function d(){var n=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var w=24;0<=w;w-=8)n[q++]=e[r]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ka:function(){for(var n=d(),q="",r=0;r<n.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(n[r]/16))+"0123456789ABCDEF".charAt(n[r]%16);return q}}}
;function rd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),sd(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=sd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function sd(a){var b=qd();b.update(a);return b.Ka().toLowerCase()}
;function td(a){var b=pd(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new md(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?y.__SAPISID:y.__APISID,c||(c=new md(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,rd(pd(d),
c,a||null)].join(" "):null}return null}
;function ud(){this.i=[];this.h=-1}
ud.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.h=-1)};
ud.prototype.get=function(a){return!!this.i[a]};
function vd(a){-1==a.h&&(a.h=$a(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function wd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
wd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function xd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function yd(a){y.setTimeout(function(){throw a;},0)}
var zd;
function Ad(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Ic(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=E(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ua;c.ua=null;e()}};
return function(e){d.next={ua:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Bd(){this.i=this.h=null}
Bd.prototype.add=function(a,b){var c=Cd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Bd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Cd=new wd(function(){return new Dd},function(a){return a.reset()});
function Dd(){this.next=this.scope=this.h=null}
Dd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Dd.prototype.reset=function(){this.next=this.scope=this.h=null};function Ed(a,b){Fd||Gd();Hd||(Fd(),Hd=!0);Id.add(a,b)}
var Fd;function Gd(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Fd=function(){a.then(Jd)}}else Fd=function(){var b=Jd;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!J("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(zd||(zd=Ad()),zd(b)):y.setImmediate(b)}}
var Hd=!1,Id=new Bd;function Jd(){for(var a;a=Id.remove();){try{a.h.call(a.scope)}catch(b){yd(b)}xd(Cd,a)}Hd=!1}
;function Kd(){this.i=-1}
;function Ld(){this.i=64;this.h=[];this.o=[];this.u=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
G(Ld,Kd);Ld.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Md(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ld.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Md(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Md(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Md(this,e);f=0;break}}this.j=f;this.m+=b}};
Ld.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Md(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};var Nd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Od(){}
Od.prototype.next=function(){throw Nd;};
Od.prototype.M=function(){return this};
function Pd(a){if(a instanceof Od)return a;if("function"==typeof a.M)return a.M(!1);if(La(a)){var b=0,c=new Od;c.next=function(){for(;;){if(b>=a.length)throw Nd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Qd(a,b){if(La(a))try{H(a,b,void 0)}catch(c){if(c!==Nd)throw c;}else{a=Pd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Nd)throw c;}}}
function Rd(a){if(La(a))return cb(a);a=Pd(a);var b=[];Qd(a,function(c){b.push(c)});
return b}
;function Sd(a,b){this.j={};this.h=[];this.P=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Sd)for(c=Td(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Td(a){Ud(a);return a.h.concat()}
p=Sd.prototype;p.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||Vd;Ud(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Vd(a,b){return a===b}
p.isEmpty=function(){return 0==this.i};
p.clear=function(){this.j={};this.P=this.i=this.h.length=0};
p.remove=function(a){return Object.prototype.hasOwnProperty.call(this.j,a)?(delete this.j[a],this.i--,this.P++,this.h.length>2*this.i&&Ud(this),!0):!1};
function Ud(a){if(a.i!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.j,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.i!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
p.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.j,a)?this.j[a]:b};
p.set=function(a,b){Object.prototype.hasOwnProperty.call(this.j,a)||(this.i++,this.h.push(a),this.P++);this.j[a]=b};
p.forEach=function(a,b){for(var c=Td(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
p.clone=function(){return new Sd(this)};
p.M=function(a){Ud(this);var b=0,c=this.P,d=this,e=new Od;e.next=function(){if(c!=d.P)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Nd;var f=d.h[b++];return a?f:d.j[f]};
return e};function Wd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Xd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Yd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Wd(a).match(/\S+/g)||[],c=0<=Xa(c,b);return c}
function Zd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Yd(a,"inverted-hdpi")&&Xd(a,Ya(a.classList?a.classList:Wd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var $d=!fc||9<=Number(tc),ae;
if(ae=fc){var be;if(Object.prototype.hasOwnProperty.call(qc,"9"))be=qc["9"];else{for(var ce=0,de=ub(String(pc)).split("."),ee=ub("9").split("."),fe=Math.max(de.length,ee.length),ge=0;0==ce&&ge<fe;ge++){var he=de[ge]||"",ie=ee[ge]||"";do{var je=/(\d*)(\D*)(.*)/.exec(he)||["","","",""],ke=/(\d*)(\D*)(.*)/.exec(ie)||["","","",""];if(0==je[0].length&&0==ke[0].length)break;ce=Db(0==je[1].length?0:parseInt(je[1],10),0==ke[1].length?0:parseInt(ke[1],10))||Db(0==je[2].length,0==ke[2].length)||Db(je[2],ke[2]);
he=je[3];ie=ke[3]}while(0==ce)}be=qc["9"]=0<=ce}ae=!be}var le=ae,me=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ia,b),y.removeEventListener("test",Ia,b)}catch(c){}return a}();function ne(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.i=!1}
ne.prototype.stopPropagation=function(){this.i=!0};
ne.prototype.preventDefault=function(){this.defaultPrevented=!0};function oe(a,b){ne.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
G(oe,ne);var pe={2:"touch",3:"pen",4:"mouse"};
oe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(hc){a:{try{dc(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:pe[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&this.preventDefault()};
oe.prototype.stopPropagation=function(){oe.L.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
oe.prototype.preventDefault=function(){oe.L.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,le)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var qe="closure_listenable_"+(1E6*Math.random()|0),re=0;function se(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ja=e;this.key=++re;this.X=this.ha=!1}
function te(a){a.X=!0;a.listener=null;a.h=null;a.src=null;a.ja=null}
;function ue(a){this.src=a;this.listeners={};this.h=0}
ue.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ve(a,b,d,e);-1<g?(b=a[g],c||(b.ha=!1)):(b=new se(b,this.src,f,!!d,e),b.ha=c,a.push(b));return b};
ue.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ve(e,b,c,d);return-1<b?(te(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function we(a,b){var c=b.type;c in a.listeners&&bb(a.listeners[c],b)&&(te(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ve(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.X&&f.listener==b&&f.capture==!!c&&f.ja==d)return e}return-1}
;var xe="closure_lm_"+(1E6*Math.random()|0),ye={},ze=0;function Ae(a,b,c,d,e){if(d&&d.once)Be(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ae(a,b[f],c,d,e);else c=Ce(c),a&&a[qe]?De(a,b,c,C(d)?!!d.capture:!!d,e):Ee(a,b,c,!1,d,e)}
function Ee(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=C(e)?!!e.capture:!!e,h=Fe(a);h||(a[xe]=h=new ue(a));c=h.add(b,c,d,g,f);if(!c.h){d=Ge();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)me||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(He(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ze++}}
function Ge(){var a=Ie,b=$d?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Be(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Be(a,b[f],c,d,e);else c=Ce(c),a&&a[qe]?a.h.add(String(b),c,!0,C(d)?!!d.capture:!!d,e):Ee(a,b,c,!0,d,e)}
function Je(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else(d=C(d)?!!d.capture:!!d,c=Ce(c),a&&a[qe])?a.h.remove(String(b),c,d,e):a&&(a=Fe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ve(b,c,d,e)),(c=-1<a?b[a]:null)&&Ke(c))}
function Ke(a){if("number"!==typeof a&&a&&!a.X){var b=a.src;if(b&&b[qe])we(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(He(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ze--;(c=Fe(b))?(we(c,a),0==c.h&&(c.src=null,b[xe]=null)):te(a)}}}
function He(a){return a in ye?ye[a]:ye[a]="on"+a}
function Le(a,b,c,d){var e=!0;if(a=Fe(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.X&&(f=Me(f,d),e=e&&!1!==f)}return e}
function Me(a,b){var c=a.listener,d=a.ja||a.src;a.ha&&Ke(a);return c.call(d,b)}
function Ie(a,b){if(a.X)return!0;if(!$d){var c=b||B("window.event"),d=new oe(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.h;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.h=c[g];var h=Le(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.h=c[g],h=Le(c[g],f,!1,d),e=e&&h}return e}return Me(a,new oe(b,this))}
function Fe(a){a=a[xe];return a instanceof ue?a:null}
var Ne="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ce(a){if("function"===typeof a)return a;a[Ne]||(a[Ne]=function(b){return a.handleEvent(b)});
return a[Ne]}
;function Oe(){L.call(this);this.h=new ue(this);this.B=this;this.m=null}
G(Oe,L);Oe.prototype[qe]=!0;Oe.prototype.addEventListener=function(a,b,c,d){Ae(this,a,b,c,d)};
Oe.prototype.removeEventListener=function(a,b,c,d){Je(this,a,b,c,d)};
Oe.prototype.dispatchEvent=function(a){var b=this.m;if(b){var c=[];for(var d=1;b;b=b.m)c.push(b),++d}b=this.B;d=a.type||a;if("string"===typeof a)a=new ne(a,b);else if(a instanceof ne)a.target=a.target||b;else{var e=a;a=new ne(d,b);ob(a,e)}e=!0;if(c)for(var f=c.length-1;!a.i&&0<=f;f--){var g=a.h=c[f];e=Pe(g,d,!0,a)&&e}a.i||(g=a.h=b,e=Pe(g,d,!0,a)&&e,a.i||(e=Pe(g,d,!1,a)&&e));if(c)for(f=0;!a.i&&f<c.length;f++)g=a.h=c[f],e=Pe(g,d,!1,a)&&e;return e};
Oe.prototype.A=function(){Oe.L.A.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,te(d[e]);delete a.listeners[c];a.h--}}this.m=null};
function De(a,b,c,d,e){a.h.add(String(b),c,!1,d,e)}
function Pe(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.X&&g.capture==c){var h=g.listener,k=g.ja||g.src;g.ha&&we(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Qe(a){var b=[];Re(new Se,a,b);return b.join("")}
function Se(){}
function Re(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Re(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Te(d,c),c.push(":"),Re(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Te(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ue={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ve=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Te(a,b){b.push('"',a.replace(Ve,function(c){var d=Ue[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Ue[c]=d);return d}),'"')}
;function We(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Xe(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){Ye(b,2,c)},function(c){Ye(b,3,c)})}catch(c){Ye(this,3,c)}}
function Ze(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Ze.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var $e=new wd(function(){return new Ze},function(a){a.reset()});
function af(a,b,c){var d=$e.get();d.i=a;d.onRejected=b;d.context=c;return d}
function bf(a){return new Xe(function(b,c){c(a)})}
Xe.prototype.then=function(a,b,c){return cf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Xe.prototype.$goog_Thenable=!0;function df(a,b){return cf(a,null,b,void 0)}
Xe.prototype.cancel=function(a){if(0==this.h){var b=new ef(a);Ed(function(){ff(this,b)},this)}};
function ff(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?ff(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):gf(c),hf(c,e,3,b)))}a.j=null}else Ye(a,3,b)}
function jf(a,b){a.i||2!=a.h&&3!=a.h||kf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function cf(a,b,c,d){var e=af(null,null,null);e.h=new Xe(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ef?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;jf(a,e);return e.h}
Xe.prototype.B=function(a){this.h=0;Ye(this,2,a)};
Xe.prototype.F=function(a){this.h=0;Ye(this,3,a)};
function Ye(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.B,f=a.F;if(d instanceof Xe){jf(d,af(e||Ia,f||null,a));var g=!0}else if(We(d))d.then(e,f,a),g=!0;else{if(C(d))try{var h=d.then;if("function"===typeof h){lf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,kf(a),3!=b||c instanceof ef||mf(a,c))}}
function lf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function kf(a){a.o||(a.o=!0,Ed(a.C,a))}
function gf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Xe.prototype.C=function(){for(var a;a=gf(this);)hf(this,a,this.h,this.u);this.o=!1};
function hf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,nf(b,c,d);else try{b.j?b.i.call(b.context):nf(b,c,d)}catch(e){of.call(null,e)}xd($e,b)}
function nf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function mf(a,b){a.m=!0;Ed(function(){a.m&&of.call(null,b)})}
var of=yd;function ef(a){Ua.call(this,a)}
G(ef,Ua);ef.prototype.name="cancel";function M(a){L.call(this);this.o=1;this.l=[];this.m=0;this.h=[];this.j={};this.u=!!a}
G(M,L);p=M.prototype;p.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
function pf(a,b,c,d){if(b=a.j[b]){var e=a.h;(b=ab(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Y(b)}}
p.Y=function(a){var b=this.h[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.h[a+1]=Ia):(c&&bb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.R=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];qf(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Y(c)}}return 0!=e}return!1};
function qf(a,b,c){Ed(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.j[a];b&&(H(b,this.Y,this),delete this.j[a])}else this.h.length=0,this.j={}};
p.A=function(){M.L.A.call(this);this.clear();this.l.length=0};function rf(a){this.h=a}
rf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Qe(b))};
rf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
rf.prototype.remove=function(a){this.h.remove(a)};function sf(a){this.h=a}
G(sf,rf);function tf(a){this.data=a}
function uf(a){return void 0===a||a instanceof tf?a:new tf(a)}
sf.prototype.set=function(a,b){sf.L.set.call(this,a,uf(b))};
sf.prototype.i=function(a){a=sf.L.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
sf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function vf(a){this.h=a}
G(vf,sf);vf.prototype.set=function(a,b,c){if(b=uf(b)){if(c){if(c<F()){vf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=F()}vf.L.set.call(this,a,b)};
vf.prototype.i=function(a){var b=vf.L.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<F()||c&&c>F())vf.prototype.remove.call(this,a);else return b}};function wf(){}
;function xf(){}
G(xf,wf);xf.prototype.clear=function(){var a=Rd(this.M(!0)),b=this;H(a,function(c){b.remove(c)})};function yf(a){this.h=a}
G(yf,xf);p=yf.prototype;p.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
p.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.h.removeItem(a)};
p.M=function(a){var b=0,c=this.h,d=new Od;d.next=function(){if(b>=c.length)throw Nd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){this.h.clear()};
p.key=function(a){return this.h.key(a)};function zf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
G(zf,yf);function Af(a,b){this.i=a;this.h=null;if(fc&&!(9<=Number(tc))){Bf||(Bf=new Sd);this.h=Bf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Bf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
G(Af,xf);var Cf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Bf=null;function Df(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Cf[b]})}
p=Af.prototype;p.isAvailable=function(){return!!this.h};
p.set=function(a,b){this.h.setAttribute(Df(a),b);Ef(this)};
p.get=function(a){a=this.h.getAttribute(Df(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.h.removeAttribute(Df(a));Ef(this)};
p.M=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Od;d.next=function(){if(b>=c.length)throw Nd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ef(this)};
function Ef(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ff(a,b){this.i=a;this.h=b+"::"}
G(Ff,xf);Ff.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ff.prototype.get=function(a){return this.i.get(this.h+a)};
Ff.prototype.remove=function(a){this.i.remove(this.h+a)};
Ff.prototype.M=function(a){var b=this.i.M(!0),c=this,d=new Od;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function Gf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Hf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",Hf,void 0);function N(a){Gf(Hf,arguments)}
function O(a,b){return a in Hf?Hf[a]:b}
function If(){return O("PLAYER_CONFIG",{})}
;var Jf=[];function Kf(a){Jf.forEach(function(b){return b(a)})}
function Lf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Mf(b),Kf(b)}}:a}
function Mf(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),N("ERRORS",b))}
function Nf(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),N("ERRORS",b))}
;var Of=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Of,void 0);function Pf(a){Gf(Of,arguments)}
;function Qf(a,b,c,d){nd.set(""+a,b,{ya:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function P(a){a=Rf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Sf(a,b){var c=Rf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Rf(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;function Tf(a){a&&(a.dataset?a.dataset[Uf("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Vf(a,b){return a?a.dataset?a.dataset[Uf(b)]:a.getAttribute("data-"+b):null}
var Wf={};function Uf(a){return Wf[a]||(Wf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function Q(a,b){"function"===typeof a&&(a=Lf(a));return window.setTimeout(a,b)}
function Xf(a){window.clearTimeout(a)}
;var Yf=y.ytPubsubPubsubInstance||new M,Zf=y.ytPubsubPubsubSubscribedKeys||{},$f=y.ytPubsubPubsubTopicToKeys||{},ag=y.ytPubsubPubsubIsSynchronous||{};function bg(a,b){var c=cg();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Zf[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{ag[a]?f():Q(f,0)}catch(g){Mf(g)}},void 0);
Zf[d]=!0;$f[a]||($f[a]=[]);$f[a].push(d);return d}return 0}
function dg(a){var b=cg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),H(a,function(c){b.unsubscribeByKey(c);delete Zf[c]}))}
function eg(a,b){var c=cg();c&&c.publish.apply(c,arguments)}
function fg(a){var b=cg();if(b)if(b.clear(a),a)gg(a);else for(var c in $f)gg(c)}
function cg(){return y.ytPubsubPubsubInstance}
function gg(a){$f[a]&&(a=$f[a],H(a,function(b){Zf[b]&&delete Zf[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Y;M.prototype.publish=M.prototype.R;M.prototype.clear=M.prototype.clear;z("ytPubsubPubsubInstance",Yf,void 0);z("ytPubsubPubsubTopicToKeys",$f,void 0);z("ytPubsubPubsubIsSynchronous",ag,void 0);z("ytPubsubPubsubSubscribedKeys",Zf,void 0);var hg=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,ig=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function jg(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(hg,""),c=c.replace(ig,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else kg(a,b,c)}
function kg(a,b,c){c=void 0===c?null:c;var d=lg(a),e=document.getElementById(d),f=e&&Vf(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=bg(d,b),b=""+Ma(b),mg[b]=f),g||(e=ng(a,d,function(){Vf(e,"loaded")||(Tf(e),eg(d),Q(Ra(fg,d),0))},c)))}
function ng(a,b,c,d){d=void 0===d?null:d;var e=Ic(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sb(e,fd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function og(a){a=lg(a);var b=document.getElementById(a);b&&(fg(a),b.parentNode.removeChild(b))}
function pg(a,b){if(a&&b){var c=""+Ma(b);(c=mg[c])&&dg(c)}}
function lg(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ub(a)}
var mg={};function qg(){}
function rg(a,b){return sg(a,1,b)}
;function tg(){qg.apply(this,arguments)}
v(tg,qg);function sg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Q(a,c||0)}
function ug(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):Xf(a)}}
tg.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
tg.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
Ja(tg);tg.getInstance();var vg=[],wg=!1;function xg(){if(!P("disable_ad_status_on_html5_clients")&&(!P("condition_ad_status_fetch_on_consent_cookie_html5_clients")||nd.get("CONSENT","").startsWith("YES+"))&&"1"!=fb(If(),"args","privembed")){var a=function(){wg=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
try{jg("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}vg.push(rg(function(){if(!(wg||"google_ad_status"in window)){try{pg("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}wg=!0;N("DCLKSTAT",3)}},5E3))}}
function yg(){return parseInt(O("DCLKSTAT",0),10)}
;var zg=0;z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++zg},void 0);var Ag={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Bg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ag||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Cg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Bg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Bg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Bg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var hb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",hb,void 0);var Dg=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Dg,void 0);
function Eg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return gb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=C(e[4])&&C(d)&&kb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Fg=Wa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Gg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Eg(a,b,c,d);if(e)return e;e=++Dg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Bg(h);if(!Kc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Bg(h);
h.currentTarget=a;return c.call(a,h)};
g=Lf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Fg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);hb[e]=[a,b,c,g,d];return e}
function Hg(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in hb){var c=hb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Fg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete hb[b]}}))}
;var Ig=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Jg(a){this.B=a;this.h=null;this.m=0;this.u=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.I=Gg(window,"mousemove",E(this.J,this));a=E(this.F,this);"function"===typeof a&&(a=Lf(a));this.K=window.setInterval(a,25)}
G(Jg,L);Jg.prototype.J=function(a){void 0===a.h&&Cg(a);var b=a.h;void 0===a.i&&Cg(a);this.h=new Cc(b,a.i)};
Jg.prototype.F=function(){if(this.h){var a=Ig();if(0!=this.m){var b=this.u,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.B();this.o=d}this.m=a;this.u=this.h;this.l=(this.l+1)%4}};
Jg.prototype.A=function(){window.clearInterval(this.K);Hg(this.I)};var Kg={};
function Lg(a){var b=void 0===a?{}:a;a=void 0===b.Qa?!0:b.Qa;b=void 0===b.hb?!1:b.hb;if(null==B("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?F()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Mg();Gg(document,"keydown",Mg);Gg(document,"keyup",Mg);Gg(document,"mousedown",Mg);Gg(document,"mouseup",Mg);a&&(b?Gg(window,"touchmove",function(){Ng("touchmove",200)},{passive:!0}):(Gg(window,"resize",function(){Ng("resize",200)}),Gg(window,"scroll",function(){Ng("scroll",200)})));
new Jg(function(){Ng("mouse",100)});
Gg(document,"touchstart",Mg,{passive:!0});Gg(document,"touchend",Mg,{passive:!0})}}
function Ng(a,b){Kg[a]||(Kg[a]=!0,rg(function(){Mg();Kg[a]=!1},b))}
function Mg(){null==B("_lact",window)&&Lg();var a=F();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Og(){var a=B("_lact",window);return null==a?-1:Math.max(F()-a,0)}
;var Pg=window,R=Pg.ytcsi&&Pg.ytcsi.now?Pg.ytcsi.now:Pg.performance&&Pg.performance.timing&&Pg.performance.now&&Pg.performance.timing.navigationStart?function(){return Pg.performance.timing.navigationStart+Pg.performance.now()}:function(){return(new Date).getTime()};var Qg=Sf("initial_gel_batch_timeout",1E3),Rg=Math.pow(2,16)-1,Sg=null,Tg=0,Ug=void 0,Vg=0,Wg=0,Xg=0,Yg=!0,Zg=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Zg,void 0);var $g=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",$g,void 0);function ah(a){a=void 0===a?!1:a;return new Xe(function(b){Xf(Vg);Xf(Wg);Wg=0;Ug&&Ug.isReady()?(bh(b,a),Zg.clear()):(ch(),b())})}
function ch(){P("web_gel_timeout_cap")&&!Wg&&(Wg=Q(ah,6E4));Xf(Vg);var a=O("LOGGING_BATCH_TIMEOUT",Sf("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&Yg&&(a=Qg);Vg=Q(ah,a)}
function bh(a,b){var c=Ug;b=void 0===b?!1:b;for(var d=Math.round(R()),e=Zg.size,f=u(Zg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=mb({context:dh(c.H||eh())});h.events=k;(k=$g[g])&&fh(h,g,k);delete $g[g];gh(h,d);hh(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Tg=Math.round(R()-d)},
onError:function(){e--;e||a()},
ub:b});Yg=!1}}
function gh(a,b){a.requestTimeMs=String(b);P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=O("EVENT_ID",void 0);if(c){var d=O("BATCH_CLIENT_COUNTER",void 0)||0;!d&&P("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Rg/2));d++;d>Rg&&(d=1);N("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Sg&&Tg&&P("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Sg,roundtripMs:String(Tg)});Sg=c;Tg=0}}
function fh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var ih=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",ih,void 0);
function jh(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||R());e[a]=b;a=Og();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.O&&(a=e.context,b=d.O,ih[b]=b in ih?ih[b]+1:0,a.sequence={index:ih[b],groupKey:b},d.La&&delete ih[d.O]);d=d.N;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),$g[d.token]=a,a=d.token);d=Zg.get(a)||[];Zg.set(a,d);d.push(e);c&&(Ug=new c);c=Sf("web_logging_max_batch")||
100;e=R();d.length>=c?ah(!0):10<=e-Xg&&(ch(),Xg=e)}
;function kh(){var a=lh;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function mh(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var nh=/^[\w.]*$/,oh={q:!0,search_query:!0};function ph(a,b){for(var c=a.split(b),d={},e=0,f=c.length;e<f;e++){var g=c[e].split("=");if(1==g.length&&g[0]||2==g.length)try{var h=qh(g[0]||""),k=qh(g[1]||"");h in d?Array.isArray(d[h])?db(d[h],k):d[h]=[d[h],k]:d[h]=k}catch(q){var l=q,m=g[0],n=String(ph);l.args=[{key:m,value:g[1],query:a,method:rh==n?"unchanged":n}];oh.hasOwnProperty(m)||("ReferenceError"===l.name?Nf(l):Mf(l))}}return d}
var rh=String(ph);function sh(a){var b=[];eb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function th(a){"?"==a.charAt(0)&&(a=a.substr(1));return ph(a,"&")}
function uh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=th(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return $b(a,e)+d}
function qh(a){return a&&a.match(nh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function vh(a){var b=wh;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=od;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ca){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(ca){h=0}e.u_his=h;e.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,
e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(ca){}try{var m=h.outerWidth;var n=h.outerHeight}catch(ca){}try{var q=h.innerWidth;var r=h.innerHeight}catch(ca){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,m,n,q,
r];l=b.h.top;try{var w=(l||window).document,A="CSS1Compat"==w.compatMode?w.documentElement:w.body;var D=(new Dc(A.clientWidth,A.clientHeight)).round()}catch(ca){D=new Dc(-12245933,-12245933)}w=D;D={};A=new ud;y.SVGElement&&y.document.createElementNS&&A.set(0);l=Pc();l["allow-top-navigation-by-user-activation"]&&A.set(1);l["allow-popups-to-escape-sandbox"]&&A.set(2);y.crypto&&y.crypto.subtle&&A.set(3);y.TextDecoder&&y.TextEncoder&&A.set(4);A=vd(A);D.bc=A;D.bih=w.height;D.biw=w.width;D.brdim=k.join();
b=b.i;b=(D.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,D.wgl=!!K.WebGLRenderingContext,D);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var wh=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return sh(vh(a))},void 0);var xh="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function yh(){if(!xh)return null;var a=xh();return"open"in a?a:null}
function zh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var Ah={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Bh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
Ch=!1;
function Dh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Vb)[1]||null,e=Xb(a);d&&e?(d=c,c=a.match(Vb),d=d.match(Vb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Xb(c)==e&&(Number(c.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;d=P("web_ajax_ignore_global_headers_if_set");for(var f in Ah)e=O(Ah[f]),!e||!c&&Xb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Xb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Xb(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Xb(a))b["X-YouTube-Ad-Signals"]=sh(vh(void 0));return b}
function Eh(a){var b=window.location.search,c=Xb(a),d=Wb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=th(b),f={};H(Bh,function(g){e[g]&&(f[g]=e[g])});
return uh(a,f||{},!1)}
function Fh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Gh(a,b);var d=Hh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Xf(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||y;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ra&&b.ra.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Ca&&0<b.timeout&&(f=Q(function(){e||(e=!0,Xf(f),b.Ca.call(b.context||y))},b.timeout))}else Ih(a,b)}
function Ih(a,b){var c=b.format||"JSON";a=Gh(a,b);var d=Hh(a,b),e=!1,f=Jh(a,function(k){if(!e){e=!0;h&&Xf(h);var l=zh(k),m=null,n=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||n||q)m=Kh(a,c,k,b.sk);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};n=b.context||y;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.ra&&b.ra.call(n,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.Z&&0<b.timeout){var g=b.Z;var h=Q(function(){e||(e=!0,f.abort(),Xf(h),g.call(b.context||y,f))},b.timeout)}return f}
function Gh(a,b){b.vk&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.tb;d&&(d[c]&&delete d[c],a=uh(a,d||{},!0));return a}
function Hh(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.G,g=O("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.uk||Xb(a)&&!b.withCredentials&&Xb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.G&&b.G[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=th(e),ob(e,f),e=b.Da&&"JSON"==b.Da?JSON.stringify(e):Zb(e));f=e||f&&!ib(f);!Ch&&f&&"POST"!=b.method&&(Ch=!0,Mf(Error("AJAX request with postData should use POST")));
return e}
function Kh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Nf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Lh(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Mh(g)})}d&&Nh(e);
return e}
function Nh(a){if(C(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else Nh(a[b])}}
function Lh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Mh(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Jh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Lf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=yh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=Eh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Dh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Oh(){return"INNERTUBE_API_KEY"in Hf&&"INNERTUBE_API_VERSION"in Hf}
function eh(){return{innertubeApiKey:O("INNERTUBE_API_KEY",void 0),innertubeApiVersion:O("INNERTUBE_API_VERSION",void 0),Ra:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Sa:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ua:O("INNERTUBE_CONTEXT_HL",void 0),Ta:O("INNERTUBE_CONTEXT_GL",void 0),Va:O("INNERTUBE_HOST_OVERRIDE",void 0)||"",Xa:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Wa:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function dh(a){var b={client:{hl:a.Ua,gl:a.Ta,clientName:a.Sa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ra}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=O("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=O("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=O("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&P("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);O("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(th(O("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function Ph(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.pk||O("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().nk:b=td([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
;function Qh(a){a=Object.assign({},a);delete a.Authorization;var b=td();if(b){var c=new Ld;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Ac(c.digest())}return a}
;function Rh(a){var b=new zf;(b=b.isAvailable()?a?new Ff(b,a):b:null)||(a=new Af(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new vf(a):null;this.i=document.domain||window.location.hostname}
Rh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,F()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Qe(b))}catch(f){return}else e=escape(b);Qf(a,e,c,this.i)};
Rh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=nd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Rh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;nd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Sh;function Th(){Sh||(Sh=new Rh("yt.innertube"));return Sh}
function Uh(a,b,c,d){if(d)return null;d=Th().get("nextId",!0)||1;var e=Th().get("requests",!0)||{};e[d]={method:a,request:b,authState:Qh(c),requestTime:Math.round(R())};Th().set("nextId",d+1,86400,!0);Th().set("requests",e,86400,!0);return d}
function Vh(a){var b=Th().get("requests",!0)||{};delete b[a];Th().set("requests",b,86400,!0)}
function Wh(a){var b=Th().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=Qh(Ph(!1));kb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),hh(a,d.method,e,{}));delete b[c]}}Th().set("requests",b,86400,!0)}}
;function Xh(a,b){this.version=a;this.args=b}
;function Yh(a,b){this.topic=a;this.h=b}
Yh.prototype.toString=function(){return this.topic};var Zh=B("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Y;M.prototype.publish=M.prototype.R;M.prototype.clear=M.prototype.clear;z("ytPubsub2Pubsub2Instance",Zh,void 0);var $h=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",$h,void 0);var ai=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",ai,void 0);var bi=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",bi,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function ci(a,b){var c=di();c&&c.publish.call(c,a.toString(),a,b)}
function ei(a){var b=fi,c=di();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if($h[d])try{if(f&&b instanceof Yh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.P){var l=new h;h.P=l.version}var m=h.P}catch(n){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
cb(k.args))}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){Mf(n)}},bi[b.toString()]?B("yt.scheduler.instance")?rg(g):Q(g,0):g())});
$h[d]=!0;ai[b.toString()]||(ai[b.toString()]=[]);ai[b.toString()].push(d);return d}
function gi(){var a=hi,b=ei(function(c){a.apply(void 0,arguments);ii(b)});
return b}
function ii(a){var b=di();b&&("number"===typeof a&&(a=[a]),H(a,function(c){b.unsubscribeByKey(c);delete $h[c]}))}
function di(){return B("ytPubsub2Pubsub2Instance")}
;var ji=vc||wc;function ki(a){var b=Lb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var li=[],mi=!1;function ni(a,b){mi||(li.push({type:"EVENT",eventType:a,payload:b}),10<li.length&&li.shift())}
;function S(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
v(S,Error);var oi={},pi=(oi.AUTH_INVALID="No user identifier specified.",oi.EXPLICIT_ABORT="Transaction was explicitly aborted.",oi.IDB_NOT_SUPPORTED="IndexedDB is not supported.",oi.MISSING_OBJECT_STORE="Object store not created.",oi.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",oi.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",oi.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",oi);
function qi(a,b,c){b=void 0===b?{}:b;c=void 0===c?pi[a]:c;S.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,qi.prototype);mi||(li.push({type:"ERROR",payload:this}),10<li.length&&li.shift())}
v(qi,S);function ri(a){qi.call(this,"MISSING_OBJECT_STORE",{wk:a},pi.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,ri.prototype)}
v(ri,qi);function si(a){if(!a)throw Error();throw a;}
function ti(a){return a}
function T(a){var b=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];this.i(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.h);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
T.all=function(a){return new T(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={S:0};f.S<a.length;f={S:f.S},++f.S)ui(T.resolve(a[f.S]).then(function(g){return function(h){d[g.S]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
T.resolve=function(a){return new T(function(b,c){a instanceof T?a.then(b,c):b(a)})};
T.reject=function(a){return new T(function(b,c){c(a)})};
T.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:ti,e=null!==b&&void 0!==b?b:si;return new T(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){vi(c,c,d,f,g)}),c.onRejected.push(function(){wi(c,c,e,f,g)})):"FULFILLED"===c.state.status?vi(c,c,d,f,g):"REJECTED"===c.state.status&&wi(c,c,e,f,g)})};
function ui(a,b){a.then(void 0,b)}
function vi(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof T?xi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function wi(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof T?xi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function xi(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof T?xi(a,b,f,d,e):d(f)},function(f){e(f)})}
;function yi(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function zi(a){return new Promise(function(b,c){yi(a,b,c)})}
function U(a){return new T(function(b,c){yi(a,b,c)})}
;function Ai(a,b){return new T(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Bi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}
p=Bi.prototype;p.add=function(a,b,c){return Ci(this,[a],"readwrite",function(d){return Di(d,a).add(b,c)})};
p.clear=function(a){return Ci(this,[a],"readwrite",function(b){return Di(b,a).clear()})};
p.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Ci(this,[a],"readonly",function(c){return Di(c,a).count(b)})};
p["delete"]=function(a,b){return Ci(this,[a],"readwrite",function(c){return Di(c,a)["delete"](b)})};
p.get=function(a,b){return Ci(this,[a],"readwrite",function(c){return Di(c,a).get(b)})};
function Ci(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.h.transaction(b,c);d=Ei(e,d)["catch"](function(f){var g=a.h.name,h=b.join();f instanceof qi||f instanceof S||("QuotaExceededError"===f.name?f=new qi("QUOTA_EXCEEDED",{objectStoreNames:h,dbName:g}):xc&&"UnknownError"===f.name?f=new qi("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:h,dbName:g}):(Object.setPrototypeOf(f,S.prototype),f.args=[{name:"IdbError",yk:f.name,dbName:g,objectStoreNames:h}]));throw f;});
Fi(a,d,b.join(),c);return d}
function Fi(a,b,c,d){bc(a,function f(){var g,h,k=this,l,m,n;return Aa(f,function(q){if(1==q.h)return g=Math.round(R()),q.l=2,sa(q,b,4);2!=q.h?(h=Math.round(R()),Gi(k,!0,c,h-g),q.h=0,q.l=0):(l=ta(q),m=Math.round(R()),n=m-g,l instanceof qi&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&ni("QUOTA_EXCEEDED",{dbName:k.h.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d}),l instanceof qi&&"UNKNOWN_ABORT"===l.type&&(ni("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:n,transactionCount:k.transactionCount,dbDuration:m-k.j}),k.i=!0),Gi(k,!1,c,n),q.h=0)})})}
function Gi(a,b,c,d){ni("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function Hi(a){this.h=a}
p=Hi.prototype;p.add=function(a,b){return U(this.h.add(a,b))};
p.clear=function(){return U(this.h.clear()).then(function(){})};
p.count=function(a){return U(this.h.count(a))};
function Ii(a,b){return Ji(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
p["delete"]=function(a){return a instanceof IDBKeyRange?Ii(this,a):U(this.h["delete"](a))};
p.get=function(a){return U(this.h.get(a))};
p.index=function(a){return new Ki(this.h.index(a))};
p.getName=function(){return this.h.name};
function Ji(a,b,c){a=a.h.openCursor(b.query,b.direction);return Li(a).then(function(d){return Ai(d,c)})}
function Mi(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=qi;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Ei(a,b){var c=new Mi(a);return Ni(c,b)}
function Ni(a,b){var c=new Promise(function(d,e){ui(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Mi.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new qi("EXPLICIT_ABORT");};
Mi.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function Di(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new Hi(c),a.i.set(c,d));return d}
function Ki(a){this.h=a}
Ki.prototype.count=function(a){return U(this.h.count(a))};
Ki.prototype["delete"]=function(a){return Oi(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Ki.prototype.get=function(a){return U(this.h.get(a))};
Ki.prototype.getKey=function(a){return U(this.h.getKey(a))};
function Oi(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Li(a).then(function(d){return Ai(d,c)})}
function Pi(a,b){this.request=a;this.cursor=b}
function Li(a){return U(a).then(function(b){return null===b?null:new Pi(a,b)})}
p=Pi.prototype;p.advance=function(a){this.cursor.advance(a);return Li(this.request)};
p["continue"]=function(a){this.cursor["continue"](a);return Li(this.request)};
p["delete"]=function(){return U(this.cursor["delete"]()).then(function(){})};
p.getKey=function(){return this.cursor.key};
p.getValue=function(){return this.cursor.value};
p.update=function(a){return U(this.cursor.update(a))};function Qi(a,b,c){return bc(this,function e(){var f,g,h,k,l,m,n,q,r,w;return Aa(e,function(A){if(1==A.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.sb,m=g.upgrade,n=g.closed,r=function(){q||(q=new Bi(f.result,{closed:n}));return q},f.addEventListener("upgradeneeded",function(D){if(null===D.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");D.dataLoss&&"none"!==D.dataLoss&&ni("IDB_DATA_CORRUPTED",{reason:D.dataLossMessage||"unknown reason",dbName:a});var ca=r(),wa=new Mi(f.transaction);m&&m(ca,D.oldVersion,D.newVersion,wa)}),h&&f.addEventListener("blocked",function(){h()}),sa(A,zi(f),2);
w=A.m;k&&w.addEventListener("versionchange",function(){k(r())});
w.addEventListener("close",function(){ni("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:w.version});l&&l()});
return A["return"](r())})})}
function Ri(a,b){b=void 0===b?{}:b;return bc(this,function d(){var e,f,g;return Aa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return sa(h,zi(e),0)})})}
;function Si(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function Ti(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Qi(a,b,c)}
Si.prototype["delete"]=function(a){a=void 0===a?{}:a;return Ri(this.name,a)};
Si.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,sb:c,upgrade:this.options.upgrade},e=function(){return bc(a,function g(){var h=this,k,l,m;return Aa(g,function(n){switch(n.h){case 1:return n.l=2,sa(n,Ti(h.name,h.options.version,d),4);case 4:k=n.m;if(!uc){n.h=5;break}a:{var q=u(Object.keys(h.options.bb));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.h.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){n.h=5;break}if(!uc||h.i){n.h=7;break}h.i=!0;return sa(n,h["delete"](),8);case 8:return n["return"](e());case 7:throw new ri(l);
case 5:return n["return"](k);case 2:m=ta(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n["return"](Ti(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.h=b=e()}return this.h};var Ui=new Si({bb:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Vi(a){return bc(this,function c(){var d;return Aa(c,function(e){if(1==e.h)return sa(e,Ui.open(),2);d=e.m;return e["return"](Ci(d,["databases"],"readwrite",function(f){var g=Di(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return U(g.h.put(a,void 0)).then(function(){})})}))})})}
function Wi(){return bc(this,function b(){var c;return Aa(b,function(d){if(1==d.h)return sa(d,Ui.open(),2);c=d.m;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;var Xi;
function Yi(){return bc(this,function b(){var c,d;return Aa(b,function(e){switch(e.h){case 1:var f;if(f=ji)f=/WebKit\/([0-9]+)/.exec(Lb),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Lb),f=!(f&&602<=parseInt(f[1],10)));if(f&&!P("ytidb_allow_on_ios_safari_v8_and_v9")||gc)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.l=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return sa(e,Vi(d),4);case 4:return sa(e,Wi(),5);case 5:return e["return"](!0);case 2:return ta(e),e["return"](!1)}})})}
function Zi(){if(void 0!==Xi)return Xi;mi=!0;return Xi=Yi().then(function(a){mi=!1;return a})}
;var $i;function aj(){$i||($i=new Rh("yt.offline"));return $i}
;function bj(){Oe.call(this);this.o=this.u=this.j=!1;this.l=cj();dj(this);ej(this)}
v(bj,Oe);function cj(){var a=window.navigator.onLine;return void 0===a?!0:a}
function ej(a){window.addEventListener("online",function(){a.l=!0;a.j&&a.dispatchEvent("ytnetworkstatus-online");fj(a);if(a.o&&P("offline_error_handling")){var b=aj().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new S(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;Mf(d)}aj().set("errors",{},2592E3,!0)}}})}
function dj(a){window.addEventListener("offline",function(){a.l=!1;a.j&&a.dispatchEvent("ytnetworkstatus-offline");fj(a)})}
function fj(a){a.u&&(Nf(new S("NetworkStatusManager state did not match poll",R()-0)),a.u=!1)}
;function gj(a){a=void 0===a?{}:a;Oe.call(this);var b=this;this.l=this.u=0;bj.h||(bj.h=new bj);this.j=bj.h;this.j.j=!0;a.Za&&(this.j.o=!0);a.ka?(this.ka=a.ka,De(this.j,"ytnetworkstatus-online",function(){hj(b,"publicytnetworkstatus-online")}),De(this.j,"ytnetworkstatus-offline",function(){hj(b,"publicytnetworkstatus-offline")})):(De(this.j,"ytnetworkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),De(this.j,"ytnetworkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")}))}
v(gj,Oe);function hj(a,b){a.ka?a.l?(ug(a.u),a.u=rg(function(){a.o!==b&&(a.dispatchEvent(b),a.o=b,a.l=R())},a.ka-(R()-a.l))):(a.dispatchEvent(b),a.o=b,a.l=R()):a.dispatchEvent(b)}
;var ij;function jj(a,b){b=void 0===b?{}:b;Zi().then(function(){ij||(ij=new gj({Za:!0}));ij.j.l!==cj()&&Nf(new S("NetworkStatusManager isOnline does not match window status"));Ih(a,b)})}
function kj(a,b){b=void 0===b?{}:b;Zi().then(function(){Ih(a,b)})}
;function lj(a){var b=this;this.H=null;a?this.H=a:Oh()&&(this.H=eh());sg(function(){Wh(b)},0,5E3)}
lj.prototype.isReady=function(){!this.H&&Oh()&&(this.H=eh());return!!this.H};
function hh(a,b,c,d){!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Nf(new S("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new S("innertube xhrclient not ready",b,c,d);Mf(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",G:c,Da:"JSON",Z:function(){d.Z()},
Ca:d.Z,onSuccess:function(n,q){if(d.onSuccess)d.onSuccess(q)},
Ba:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,q){if(d.onError)d.onError(q)},
xk:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.H.Va)&&(g=e);var h=a.H.Xa||!1,k=Ph(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.H.innertubeApiVersion+"/"+b;var l={alt:"json"};a.H.Wa&&f.headers.Authorization||(l.key=a.H.innertubeApiKey);var m=uh(""+g+e,l||{},!0);Zi().then(function(n){if(d.retry&&P("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(P("networkless_gel")&&!n||!P("networkless_gel"))var q=Uh(b,
c,k,h);if(q){var r=f.onSuccess,w=f.Ba;f.onSuccess=function(A,D){Vh(q);r(A,D)};
c.Ba=function(A,D){Vh(q);w(A,D)}}}try{P("use_fetch_for_op_xhr")?Fh(m,f):P("networkless_gel")&&d.retry?(f.method="POST",!d.ub&&P("nwl_send_fast_on_unload")?kj(m,f):jj(m,f)):(f.method="POST",f.G||(f.G={}),Ih(m,f))}catch(A){if("InvalidAccessError"==A.name)q&&(Vh(q),q=0),Nf(Error("An extension is blocking network request."));
else throw A;}q&&sg(function(){Wh(a)},0,5E3)})}
;function V(a,b,c){c=void 0===c?{}:c;var d=lj;O("ytLoggingEventsDefaultDisabled",!1)&&lj==lj&&(d=null);jh(a,b,d,c)}
;var mj=[{za:function(a){return"Cannot read property '"+a.key+"'"},
sa:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{za:function(a){return"Cannot call '"+a.key+"'"},
sa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];
function nj(a){for(var b=u(mj),c=b.next();!c.done;c=b.next())if(c=c.value,c.sa[a.name])for(var d=u(c.sa[a.name]),e=d.next();!e.done;e=d.next()){var f=e.value;if(e=a.message.match(f.regexp)){a.params["params.error.original"]=e[0];d=f.groups;f={};for(var g=0;g<d.length;g++)f[d[g]]=e[g+1],a.params["params.error."+d[g]]=e[g+1];a.message=c.za(f);break}}return a}
;function oj(){this.h=[];this.i=[]}
var pj;function qj(){pj||(pj=new oj);return pj}
function rj(a){return"msg="+a.i.length+"&cb="+a.h.length}
;var sj=new M;function tj(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=uj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=uj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=uj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function uj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function vj(a,b,c,d){c+="."+a;a=wj(b);d[c]=a;return c.length+a.length}
function wj(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
function xj(a,b){var c=id(a),d=c.message||"Unknown Error",e=c.name||"UnknownError",f=c.stack||a.h||"Not available";if(f.startsWith(e+": "+d)){var g=f.split("\n");g.shift();f=g.join("\n")}g=c.lineNumber||"Not available";c=c.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0,k=0;k<a.args.length;k++){var l=a.args[k],m="params."+k;h+=m.length;if(l)if(Array.isArray(l)){var n=b,q=h;for(h=0;h<l.length&&!(l[h]&&(q+=vj(h,l[h],m,n),500<q));h++);h=q}else if("object"===typeof l)for(n in n=
void 0,q=b,l){if(l[n]){var r=n;var w=l[n],A=q;r="string"!==typeof w||"clickTrackingParams"!==r&&"trackingParams"!==r?0:(w=tj(atob(w.replace(/-/g,"+").replace(/_/g,"/"))))?vj(r+".ve",w,m,A):0;h+=r;h+=vj(n,l[n],m,q);if(500<h)break}}else b[m]=wj(l),h+=b[m].length;else b[m]=wj(l),h+=b[m].length;if(500<=h)break}else if(a.hasOwnProperty("params")&&a.params)if(l=a.params,"object"===typeof a.params)for(k in m=0,l){if(l[k]&&(n="params."+k,q=wj(l[k]),b[n]=q,m+=n.length+q.length,500<m))break}else b.params=wj(l);
navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);d={message:d,name:e,lineNumber:g,fileName:c,stack:f,params:b,sampleWeight:1};e=Number(a.columnNumber);isNaN(e)||(d.lineNumber=d.lineNumber+":"+e);if(void 0!==a.sampleWeight)e=a.sampleWeight;else a:{e=qj();g=u(e.i);for(c=g.next();!c.done;c=g.next())if(c=c.value,d.message&&d.message.match(c.h)){e=c.weight;break a}e=u(e.h);for(g=e.next();!g.done;g=e.next())if(g=g.value,g.Ja(d)){e=g.weight;break a}e=1}d.sampleWeight=
e;return d}
;var yj=new Set,zj=0,Aj=0,Bj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Cj(a){Dj(a,"WARNING")}
function Dj(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(P("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=zj||(P("kevlar_js_fixes")?
(a=nj(xj(a,c)),a.params||(a.params={}),c=qj(),a.params["params.errorServiceSignature"]=rj(c),a.params["params.serviceWorker"]="false",a.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length)):a=nj(xj(a,c)),window.yterr&&"function"===typeof window.yterr&&window.yterr(a),c=P("kevlar_js_fixes")?0===a.sampleWeight:0<=a.stack.indexOf("/YouTubeCenter.js")||0<=a.stack.indexOf("/mytube.js"),yj.has(a.message)||c)))){"ERROR"===b?(sj.R("handleError",a),P("record_app_crashed_web")&&
0===Aj&&V("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"}),Aj++):"WARNING"===b&&sj.R("handleWarning",a);if(P("kevlar_gel_error_routing")){d=b;a:{c=u(Bj);for(e=c.next();!e.done;e=c.next())if(ki(e.value.toLowerCase())){c=!0;break a}c=!1}if(!c){e={stackTrace:a.stack};a.fileName&&(e.filename=a.fileName);c=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(e.lineNumber=Number(c[0]),
e.columnNumber=Number(c[1])):e.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:a.message,errorClassName:a.name,sampleWeight:a.sampleWeight};"ERROR"===d?c.level="ERROR_LEVEL_ERROR":"WARNING"===d&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:e};e={pageUrl:window.location.href};O("FEXP_EXPERIMENTS")&&(e.experimentIds=O("FEXP_EXPERIMENTS"));e.kvPairs=P("kevlar_js_fixes")?[]:[{key:"client.params.errorServiceSignature",value:rj(qj())},{key:"client.params.serviceWorker",
value:"false"}];if(f=a.params)for(var g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});f=O("SERVER_NAME",void 0);g=O("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));V("clientError",{errorMetadata:e,stackTrace:d,logMessage:c});ah()}}if(!P("suppress_error_204_logging")){c=a.params||{};b={tb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:a.lineNumber,
level:b,"client.name":c.name},G:{url:O("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(b["client.version"]=c.version);if(b.G){a.stack&&(b.G.stack=a.stack);d=u(Object.keys(c));for(e=d.next();!e.done;e=d.next())e=e.value,b.G["client."+e]=c[e];if(c=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=u(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,b.G[e]=c[e];c=O("SERVER_NAME",void 0);d=O("SERVER_VERSION",void 0);c&&d&&(b.G["server.name"]=c,b.G["server.version"]=
d)}Ih(O("ECATCHER_REPORT_HOST","")+"/error_204",b)}yj.add(a.message);zj++}}
function Ej(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:ha(u(c)))}
;function Fj(){this.i=!1;this.h=null}
Fj.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,jg(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?Gj(g,c,d,f,h):(og(b),Cj(new S("Unable to load Botguard","from "+b)))},e)):a&&(e=Ic(document,"SCRIPT"),e.textContent=a,e.nonce=Ea(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?Gj(this,c,d,f,a):Cj(Error("Unable to load Botguard from JS")))};
function Gj(a,b,c,d,e){e=e?window.trayride.ad:window.botguard.bg;if(d)try{a.h=new e(b,c?function(){return c(b)}:Ia)}catch(f){Cj(f)}else{try{a.h=new e(b)}catch(f){Cj(f)}c&&c(b)}}
Fj.prototype.dispose=function(){this.h=null};var Hj=new Fj;function Ij(){return!!Hj.h}
function Jj(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Hj.h?Hj.h.hot?Hj.h.hot(void 0,void 0,a):Hj.h.invoke(void 0,void 0,a):null}
;var Kj=F().toString();
function Lj(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=F();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Kj)for(a=1,b=0;b<Kj.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Kj.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Mj=y.ytLoggingDocDocumentNonce_||Lj();z("ytLoggingDocDocumentNonce_",Mj,void 0);var Nj={Ud:0,ec:1,nc:2,Wg:3,Vd:4,Uj:5,Ih:6,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS"};var Oj=1;function Pj(a){this.h=a}
function Qj(a){return new Pj({trackingParams:a})}
Pj.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Pj.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Pj.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Rj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Sj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Tj(a){return O(Sj(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Tj,void 0);function Uj(a){return(a=Tj(void 0===a?0:a))?new Pj({veType:a,youtubeData:void 0}):null}
function Vj(){var a=O("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function W(a){a=void 0===a?0:a;var b=O(Rj(a));if(!b&&!O("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",W,void 0);function Wj(a,b,c){var d=Vj();(c=W(c))&&delete d[c];b&&(d[a]=b)}
function Xj(a){return Vj()[a]}
z("yt_logging_screen.getCttAuthInfo",Xj,void 0);function Yj(a,b,c,d){c=void 0===c?0:c;if(a!==O(Rj(c))||b!==O(Sj(c)))if(Wj(a,d,c),N(Rj(c),a),N(Sj(c),b),0==c||P("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&jh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Mj,clientScreenNonce:a},lj)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",Yj,void 0);function Zj(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Xb(window.location.href);g&&f.push(g);g=Xb(d);if(0<=Xa(f,g)||!g&&0==d.lastIndexOf("/",0))if(P("autoescape_tempdata_url")&&(f=document.createElement("a"),Rb(f,d),d=f.href),d){g=d.match(Vb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:W()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Ub(d).toString(36),e=e?Zb(e):"",Qf(b,e,k||5))}else k=b,e="ST-"+Ub(d).toString(36),k=k?Zb(k):"",Qf(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var n=void 0===n?window:n;c=n.location;a=$b(a,l)+m;a=a instanceof I?a:Jb(a);c.href=Fb(a)}return!0}
;function ak(a){Xh.call(this,1,arguments);this.csn=a}
v(ak,Xh);var fi=new Yh("screen-created",ak),bk=[],dk=ck,ek=0;function fk(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:Za(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(ib(e)||!e.trackingParams&&!e.veType)&&Cj(Error("Child VE logged with no data"));d={N:Xj(b),O:b};"UNDEFINED_CSN"==b?gk("visualElementAttached",c,d):a?jh("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function hk(a,b){var c=P("use_default_events_client")?void 0:lj,d={csn:a,ve:b.getAsJson(),eventType:1},e={N:Xj(a),O:a};"UNDEFINED_CSN"==a?gk("visualElementShown",d,e):c?jh("visualElementShown",d,c,e):V("visualElementShown",d,e)}
function ik(a,b,c){var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={N:Xj(b),O:b};"UNDEFINED_CSN"==b?gk("visualElementGestured",c,d):a?jh("visualElementGestured",c,a,d):V("visualElementGestured",c,d)}
function ck(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Ac(b)}
function gk(a,b,c){bk.push({payloadName:a,payload:b,options:c});ek||(ek=gi())}
function hi(a){if(bk){for(var b=u(bk),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,jh(c.payloadName,c.payload,null,c.options));bk.length=0}ek=0}
;function jk(a,b,c){fk(P("use_default_events_client")?void 0:lj,a,b,[c])}
;var kk={ac:29434,dc:3611,Ge:3854,Wf:42993,Di:4724,kj:96370,vb:27686,wb:85013,xb:23462,zb:42016,Ab:62407,Bb:26926,yb:43781,Cb:51236,Db:79148,Eb:50160,Fb:77504,Rb:87907,Sb:18630,Tb:54445,Ub:80935,Vb:105675,Wb:37521,Xb:47786,Yb:98349,Zb:6827,cc:7282,hc:32276,fc:76278,ic:93911,jc:106531,kc:27259,lc:27262,mc:27263,oc:21759,pc:27107,qc:62936,sc:49568,tc:38408,uc:80637,wc:68727,xc:68728,yc:80353,zc:80356,Ac:74610,Bc:45707,Cc:83962,Dc:83970,Ec:46713,Fc:89711,Gc:74612,Hc:93265,Ic:74611,Kc:113533,Lc:93252,
Mc:99357,Oc:94521,Pc:114252,Qc:113532,Rc:94522,Nc:94583,Sc:88E3,Tc:93253,Uc:93254,Vc:94387,Wc:94388,Xc:93255,Yc:97424,Jc:72502,Zc:110111,bd:76019,dd:117092,ed:117093,cd:89431,fd:110466,gd:77240,hd:60508,jd:105350,kd:73393,ld:113534,md:92098,nd:84517,od:83759,pd:80357,qd:86113,rd:72598,sd:72733,td:107349,ud:97615,vd:31402,wd:84774,xd:95117,yd:98930,zd:98931,Ad:98932,Bd:43347,Cd:45474,Dd:100352,Ed:84758,Fd:98443,Gd:74613,Hd:74614,Id:64502,Jd:74615,Kd:74616,Ld:74617,Md:77820,Nd:74618,Od:93278,Pd:93274,
Qd:93275,Rd:93276,Sd:22110,Td:29433,Wd:82047,Xd:113550,Yd:75836,Zd:75837,ae:42352,be:84512,ce:76065,de:75989,ee:16623,ge:32594,he:27240,ie:32633,je:74858,le:3945,ke:16989,me:45520,ne:25488,oe:25492,pe:25494,qe:55760,re:14057,se:18451,te:57204,ue:57203,we:17897,xe:57205,ye:18198,ze:17898,Ae:17909,Be:43980,Ce:46220,De:11721,Ee:49954,Fe:96369,He:56251,Ie:25624,Je:16906,Ke:99999,Le:68172,Me:27068,Ne:47973,Oe:72773,Pe:26970,Qe:26971,Re:96805,Se:17752,Te:73233,Ue:109512,Ve:22256,We:14115,Xe:22696,Ye:89278,
Ze:89277,af:109513,bf:43278,cf:43459,df:43464,ef:89279,ff:43717,gf:55764,hf:22255,jf:89281,kf:40963,lf:43277,mf:43442,nf:91824,pf:96367,qf:36850,rf:72694,sf:37414,tf:36851,uf:73491,vf:54473,wf:43375,xf:46674,yf:32473,zf:72901,Af:72906,Bf:50947,Cf:50612,Df:50613,Ef:50942,Ff:84938,Gf:84943,Hf:84939,If:84941,Jf:84944,Kf:84940,Lf:84942,Mf:35585,Nf:51926,Of:79983,Pf:63238,Qf:18921,Rf:63241,Sf:57893,Tf:41182,Uf:33424,Vf:22207,Xf:36229,Yf:22206,Zf:22205,ag:18993,cg:19001,dg:18990,eg:18991,fg:18997,gg:18725,
hg:19003,jg:36874,kg:44763,lg:33427,mg:67793,ng:22182,og:37091,pg:34650,qg:50617,rg:47261,sg:22287,tg:25144,ug:97917,vg:62397,wg:36961,xg:108035,yg:27426,zg:27857,Ag:27846,Bg:27854,Cg:69692,Dg:61411,Eg:39299,Fg:38696,Gg:62520,Hg:36382,Ig:108701,Jg:50663,Kg:36387,Lg:14908,Mg:37533,Ng:105443,Og:61635,Pg:62274,Qg:65702,Rg:65703,Sg:65701,Tg:76256,Ug:37671,Vg:49953,Xg:36216,Yg:28237,Zg:39553,ah:29222,bh:26107,dh:38050,eh:26108,fh:26109,gh:26110,hh:66881,ih:28236,jh:14586,kh:57929,lh:74723,mh:44098,nh:44099,
oh:23528,ph:61699,qh:59149,rh:101951,sh:97346,uh:95102,vh:64882,wh:63595,xh:63349,yh:95101,zh:75240,Ah:27039,Bh:68823,Ch:21537,Dh:83464,Eh:75707,Fh:83113,Gh:101952,Hh:101953,Jh:79610,Kh:24402,Lh:24400,Mh:32925,Nh:57173,Oh:64423,Ph:64424,Qh:33986,Rh:100828,Sh:21409,Th:11070,Uh:11074,Vh:17880,Wh:14001,Yh:30709,Zh:30707,ai:30711,bi:30710,ci:30708,Xh:26984,di:63648,fi:63649,gi:51879,hi:111059,ii:5754,ji:20445,ki:110386,li:113746,mi:66557,ni:17310,oi:28631,ri:21589,si:68012,ti:60480,vi:31571,wi:76980,
xi:41577,yi:45469,zi:38669,Ai:13768,Bi:13777,Ci:62985,Ei:59369,Fi:43927,Gi:43928,Hi:12924,Ii:100355,Ki:56219,Li:27669,Mi:10337,Ji:47896,Ni:107598,Oi:96639,Pi:107536,Qi:96661,Ri:96658,Si:116646,Ti:96660,Ui:104443,Vi:96659,Wi:106442,Xi:63667,Yi:63668,Zi:63669,aj:78314,bj:55761,cj:96368,dj:67374,ej:48992,fj:49956,gj:31961,hj:26388,ij:23811,jj:5E4,lj:47355,mj:47356,nj:37935,oj:45521,pj:21760,qj:83769,rj:49977,sj:49974,tj:93497,uj:93498,vj:34325,wj:115803,xj:100081,yj:35309,zj:68314,Aj:25602,Bj:100339,
Cj:59018,Dj:18248,Ej:50625,Fj:9729,Gj:37168,Hj:37169,Ij:21667,Jj:16749,Kj:18635,Lj:39305,Mj:18046,Nj:53969,Oj:8213,Pj:93926,Qj:102852,Rj:110099,Sj:22678,Tj:69076,Vj:100856,Wj:17736,Xj:3832,Yj:55759,Zj:64031,ak:93044,bk:93045,ck:34388,dk:17657,ek:17655,fk:39579,gk:39578,hk:77448,ik:8196,jk:11357,kk:69877,lk:8197,mk:82039};function lk(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||lb(b);this.assets=a.assets||{};this.attrs=a.attrs||lb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
lk.prototype.clone=function(){var a=new lk,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ka(c)?a[b]=lb(c):a[b]=c}return a};function mk(){L.call(this);this.h=[]}
v(mk,L);mk.prototype.A=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.Ja)}L.prototype.A.call(this)};var nk=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ok(a){a=a||"";if(window.spf){var b=a.match(nk);spf.style.load(a,b?b[1]:"",void 0)}else pk(a)}
function pk(a){var b=qk(a),c=document.getElementById(b),d=c&&Vf(c,"loaded");d||c&&!d||(c=rk(a,b,function(){Vf(c,"loaded")||(Tf(c),eg(b),Q(Ra(fg,b),0))}))}
function rk(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=fd(a);d.rel="stylesheet";d.href=tb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function qk(a){var b=Ic(document,"A");Rb(b,new I(a,Eb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ub(a)}
;function sk(a,b,c,d){L.call(this);var e=this;this.u=this.ea=a;this.J=b;this.B=!1;this.api={};this.ca=this.I=null;this.K=new M;Qc(this,Ra(Rc,this.K));this.m={};this.U=this.da=this.l=this.ma=this.h=null;this.T=!1;this.o=this.F=null;this.fa={};this.Ga=["onReady"];this.la=null;this.ta=NaN;this.aa={};this.j=d;tk(this);this.ga("WATCH_LATER_VIDEO_ADDED",this.cb.bind(this));this.ga("WATCH_LATER_VIDEO_REMOVED",this.eb.bind(this));this.ga("onAdAnnounce",this.Ia.bind(this));this.Ha=new mk(this);Qc(this,Ra(Rc,
this.Ha));this.ba=0;c?this.ba=Q(function(){e.loadNewVideoConfig(c)},0):d&&(uk(this),vk(this))}
v(sk,L);p=sk.prototype;p.getId=function(){return this.J};
p.loadNewVideoConfig=function(a){if(!this.i){this.ba&&(Xf(this.ba),this.ba=0);a instanceof lk||(a=new lk(a));this.ma=a;this.h=a.clone();uk(this);this.da||(this.da=wk(this,this.h.args.jsapicallback||"onYouTubePlayerReady"));this.h.args.jsapicallback=null;if(a=this.h.attrs.width)this.u.style.width=hd(Number(a)||String(a));if(a=this.h.attrs.height)this.u.style.height=hd(Number(a)||String(a));vk(this);this.B&&xk(this)}};
function uk(a){var b;a.j?b=a.j.rootElementId:b=a.h.attrs.id;a.l=b||a.l;"video-player"==a.l&&(a.l=a.J,a.j?a.j.rootElementId=a.J:a.h.attrs.id=a.J);a.u.id==a.l&&(a.l+="-player",a.j?a.j.rootElementId=a.l:a.h.attrs.id=a.l)}
p.Na=function(){return this.ma};
function xk(a){a.h&&!a.h.loaded&&(a.h.loaded=!0,"0"!=a.h.args.autoplay?a.api.loadVideoByPlayerVars(a.h.args):a.api.cueVideoByPlayerVars(a.h.args))}
function yk(a){var b=!0,c=zk(a);c&&a.h&&(a=Ak(a),b=Vf(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function vk(a){if(!a.i&&!a.T){var b=yk(a);if(b&&"html5"==(zk(a)?"html5":null))a.U="html5",a.B||Bk(a);else if(Ck(a),a.U="html5",b&&a.o)a.ea.appendChild(a.o),Bk(a);else{a.h&&(a.h.loaded=!0);var c=!1;a.F=function(){c=!0;var d=Dk(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.h?a.h.clone():void 0;d(a.ea,e,a.j);Bk(a)};
a.T=!0;b?a.F():(jg(Ak(a),a.F),(b=a.j?a.j.cssUrl:a.h.assets.css)&&ok(b),Ek(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function zk(a){var b=Ec(a.l);!b&&a.u&&a.u.querySelector&&(b=a.u.querySelector("#"+a.l));return b}
function Bk(a){if(!a.i){var b=zk(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.T=!1,!Dk(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.h&&b.isNotServable(a.h.args.video_id)||Fk(a)):a.ta=Q(function(){Bk(a)},50)}}
function Fk(a){tk(a);a.B=!0;var b=zk(a);b.addEventListener&&(a.I=Gk(a,b,"addEventListener"));b.removeEventListener&&(a.ca=Gk(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Gk(a,b,e))}for(var f in a.m)a.I(f,a.m[f]);xk(a);a.da&&a.da(a.api);a.K.R("onReady",a.api)}
function Gk(a,b,c){var d=b[c];return function(){try{return a.la=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.la=e,Nf(e))}}}
function tk(a){a.B=!1;if(a.ca)for(var b in a.m)a.ca(b,a.m[b]);for(var c in a.aa)Xf(parseInt(c,10));a.aa={};a.I=null;a.ca=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ga.bind(a);a.api.removeEventListener=a.jb.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Oa.bind(a);a.api.getPlayerType=a.Pa.bind(a);a.api.getCurrentVideoConfig=a.Na.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.ab.bind(a)}
p.ab=function(){return this.B};
p.ga=function(a,b){var c=this,d=wk(this,b);if(d){if(!(0<=Xa(this.Ga,a)||this.m[a])){var e=Hk(this,a);this.I&&this.I(a,e)}this.K.subscribe(a,d);"onReady"==a&&this.B&&Q(function(){d(c.api)},0)}};
p.jb=function(a,b){if(!this.i){var c=wk(this,b);c&&pf(this.K,a,c)}};
function wk(a,b){var c=b;if("string"==typeof b){if(a.fa[b])return a.fa[b];c=function(){var d=B(b);d&&d.apply(y,arguments)};
a.fa[b]=c}return c?c:null}
function Hk(a,b){var c="ytPlayer"+b+a.J;a.m[b]=c;y[c]=function(d){var e=Q(function(){if(!a.i){a.K.R(b,d);var f=a.aa,g=String(e);g in f&&delete f[g]}},0);
jb(a.aa,String(e))};
return c}
p.Ia=function(a){eg("a11y-announce",a)};
p.cb=function(a){eg("WATCH_LATER_VIDEO_ADDED",a)};
p.eb=function(a){eg("WATCH_LATER_VIDEO_REMOVED",a)};
p.Pa=function(){return this.U||(zk(this)?"html5":null)};
p.Oa=function(){return this.la};
function Ck(a){a.cancel();tk(a);a.U=null;a.h&&(a.h.loaded=!1);var b=zk(a);b&&(yk(a)||!Ek(a)?a.o=b:(b&&b.destroy&&b.destroy(),a.o=null));for(a=a.ea;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.F&&pg(Ak(this),this.F);Xf(this.ta);this.T=!1};
p.A=function(){Ck(this);if(this.o&&this.h&&this.o.destroy)try{this.o.destroy()}catch(b){Mf(b)}this.fa=null;for(var a in this.m)y[this.m[a]]=null;this.ma=this.h=this.api=null;delete this.ea;delete this.u;L.prototype.A.call(this)};
function Ek(a){return a.h&&a.h.args&&a.h.args.fflags?-1!=a.h.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Ak(a){return a.j?a.j.jsUrl:a.h.assets.js}
function Dk(a,b){if(a.j)var c=a.j.serializedExperimentFlags;else a.h&&a.h.args&&(c=a.h.args.fflags);return"true"==ph(c||"","&")[b]}
;var Ik={},Jk="player_uid_"+(1E9*Math.random()>>>0);
function Kk(a,b,c){var d="player";c=void 0===c?!0:c;var e;"string"===typeof d?e=Ec(d):e=d;d=e;e=Jk+"_"+Ma(d);var f=Ik[e];if(f&&c)return(b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true"))?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new sk(d,e,a,b);Ik[e]=f;eg("player-added",f.api);Qc(f,Ra(Lk,f));return f.api}
function Lk(a){delete Ik[a.getId()]}
;function Mk(a){a=void 0===a?!1:a;L.call(this);this.h=new M(a);Qc(this,Ra(Rc,this.h))}
G(Mk,L);Mk.prototype.subscribe=function(a,b,c){return this.i?0:this.h.subscribe(a,b,c)};
Mk.prototype.m=function(a,b){this.i||this.h.R.apply(this.h,arguments)};function Nk(a,b,c){Mk.call(this);this.j=a;this.l=b;this.o=c}
v(Nk,Mk);function Ok(a,b,c){if(!a.i){var d=a.j;d.i||a.l!=d.h||(a={id:a.o,command:b},c&&(a.data=c),d.h.postMessage(Qe(a),d.l))}}
Nk.prototype.A=function(){this.l=this.j=null;Mk.prototype.A.call(this)};function Pk(a){L.call(this);this.h=a;this.h.subscribe("command",this.Ea,this);this.j={};this.m=!1}
v(Pk,L);p=Pk.prototype;p.start=function(){this.m||this.i||(this.m=!0,Ok(this.h,"RECEIVING"))};
p.Ea=function(a,b,c){if(this.m&&!this.i){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.j||(c=E(this.lb,this,a),this.j[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Qk(this,d.event);break;default:this.l.isReady()&&this.l.isExternalMethodAvailable(a,c||null)&&(b=Rk(a,b||{}),c=this.l.handleExternalCall(a,b,c||null),(c=Sk(a,c))&&this.m&&!this.i&&Ok(this.h,a,c))}}};
p.lb=function(a,b){this.m&&!this.i&&Ok(this.h,a,this.na(a,b))};
p.na=function(a,b){if(null!=b)return{value:b}};
function Qk(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
p.A=function(){var a=this.h;a.i||pf(a.h,"command",this.Ea,this);this.h=null;for(var b in this.j)Qk(this,b);L.prototype.A.call(this)};function Tk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Uk(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Vk(a)}
function Vk(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Wk(a,b,c,d){if(C(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Xk(a,b){Pk.call(this,b);this.l=a;this.start()}
v(Xk,Pk);Xk.prototype.addEventListener=function(a,b){this.l.addEventListener(a,b)};
Xk.prototype.removeEventListener=function(a,b){this.l.removeEventListener(a,b)};
function Rk(a,b){switch(a){case "loadVideoById":return b=Vk(b),[b];case "cueVideoById":return b=Vk(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Wk(b),[b];case "cuePlaylist":return b=Wk(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Sk(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Xk.prototype.na=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Pk.prototype.na.call(this,a,b)};
Xk.prototype.A=function(){Pk.prototype.A.call(this);delete this.l};function Yk(a,b,c){L.call(this);var d=this;c=c||O("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.B="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.u=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.B=e.origin);d.j=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.m&&(!d.o||0<=Xa(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.h=this.m=null;window.addEventListener("message",this.u)}
v(Yk,L);Yk.prototype.sendMessage=function(a,b){var c=b||this.j;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.B)}catch(e){Nf(e)}}};
Yk.prototype.A=function(){window.removeEventListener("message",this.u);L.prototype.A.call(this)};function Zk(){var a=this.i=new Yk(!!O("WIDGET_ID_ENFORCE")),b=E(this.ib,this);a.m=b;a.o=null;this.i.channel="widget";if(a=O("WIDGET_ID"))this.i.sessionId=a;this.l=[];this.o=!1;this.m={}}
p=Zk.prototype;p.ib=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.m[a]||"onReady"==a||(this.addEventListener(a,$k(this,a)),this.m[a]=!0)):this.Aa(a,b,c)};
p.Aa=function(){};
function $k(a,b){return E(function(c){this.sendMessage(b,c)},a)}
p.addEventListener=function(){};
p.Ma=function(){this.o=!0;this.sendMessage("initialDelivery",this.oa());this.sendMessage("onReady");H(this.l,this.Fa,this);this.l=[]};
p.oa=function(){return null};
function al(a,b){a.sendMessage("infoDelivery",b)}
p.Fa=function(a){this.o?this.i.sendMessage(a):this.l.push(a)};
p.sendMessage=function(a,b){this.Fa({event:a,info:void 0==b?null:b})};
p.dispose=function(){this.i=null};function bl(a){Zk.call(this);this.h=a;this.j=[];this.addEventListener("onReady",E(this.fb,this));this.addEventListener("onVideoProgress",E(this.pb,this));this.addEventListener("onVolumeChange",E(this.qb,this));this.addEventListener("onApiChange",E(this.kb,this));this.addEventListener("onPlaybackQualityChange",E(this.mb,this));this.addEventListener("onPlaybackRateChange",E(this.nb,this));this.addEventListener("onStateChange",E(this.ob,this));this.addEventListener("onWebglSettingsChanged",E(this.rb,
this))}
v(bl,Zk);p=bl.prototype;p.Aa=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Tk(a)){var d=b;if(C(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Vk.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Uk.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Wk.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);Tk(a)&&al(this,this.oa())}};
p.fb=function(){var a=E(this.Ma,this);this.i.h=a};
p.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
p.oa=function(){if(!this.h)return null;var a=this.h.getApiInterface();bb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=F()/1E3;return b};
p.ob=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:F()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());al(this,a)};
p.mb=function(a){al(this,{playbackQuality:a})};
p.nb=function(a){al(this,{playbackRate:a})};
p.kb=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.qb=function(){al(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
p.pb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:F()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());al(this,a)};
p.rb=function(){var a={sphericalProperties:this.h.getSphericalProperties()};al(this,a)};
p.dispose=function(){Zk.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function cl(a,b,c){L.call(this);this.h=a;this.l=c;this.m=Gg(window,"message",E(this.o,this));this.j=new Nk(this,a,b);Qc(this,Ra(Rc,this.j))}
v(cl,L);cl.prototype.o=function(a){var b;if(b=!this.i)if(b=a.origin==this.l)a:{b=this.h;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.j,c.i||c.m("command",b.command,b.data,a.origin))}};
cl.prototype.A=function(){Hg(this.m);this.h=null;L.prototype.A.call(this)};function dl(){var a=lb(el),b;return df(new Xe(function(c,d){a.onSuccess=function(e){zh(e)?c(e):d(new fl("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new fl("Unknown request error","net.unknown",e))};
a.Z=function(e){d(new fl("Request timed out","net.timeout",e))};
b=Ih("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof ef&&b.abort();
return bf(c)})}
function fl(a,b,c){Ua.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(fl,Ua);function gl(){this.i=0;this.h=null}
gl.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),We(a)?a:hl(a)):2===this.i&&b?(a=b.call(c,this.h),We(a)?a:il(a)):this};
gl.prototype.getValue=function(){return this.h};
gl.prototype.$goog_Thenable=!0;function il(a){var b=new gl;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function hl(a){var b=new gl;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function jl(a){Ua.call(this,a.message||a.description||a.name);this.isMissing=a instanceof kl;this.isTimeout=a instanceof fl&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ef}
v(jl,Ua);jl.prototype.name="BiscottiError";function kl(){Ua.call(this,"Biscotti ID is missing from server")}
v(kl,Ua);kl.prototype.name="BiscottiMissingError";var el={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ll=null;
function lh(){if(P("disable_biscotti_fetch_on_html5_clients"))return bf(Error("Fetching biscotti ID is disabled."));if(P("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!nd.get("CONSENT","").startsWith("YES+"))return bf(Error("User has not consented - not fetching biscotti id."));if("1"===fb(If(),"args","privembed"))return bf(Error("Biscotti ID is not available in private embed mode"));ll||(ll=df(dl().then(ml),function(a){return nl(2,a)}));
return ll}
function ml(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new kl;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new kl;a=a.id;mh(a);ll=hl(a);ol(18E5,2);return a}
function nl(a,b){var c=new jl(b);mh("");ll=il(c);0<a&&ol(12E4,a-1);throw c;}
function ol(a,b){Q(function(){df(dl().then(ml,function(c){return nl(b,c)}),Ia)},a)}
function pl(){try{var a=B("yt.ads.biscotti.getId_");return a?a():lh()}catch(b){return bf(b)}}
;function ql(a){if("1"!==fb(If(),"args","privembed")){a&&kh();try{pl().then(function(){},function(){}),Q(ql,18E5)}catch(b){Mf(b)}}}
;var X=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",X,void 0);function rl(){this.h=O("ALT_PREF_COOKIE_NAME","PREF");this.i=O("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=nd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(X[d]=c.toString())}}}
p=rl.prototype;p.get=function(a,b){sl(a);tl(a);var c=void 0!==X[a]?X[a].toString():null;return null!=c?c:b?b:""};
p.set=function(a,b){sl(a);tl(a);if(null==b)throw Error("ExpectedNotNull");X[a]=b.toString()};
p.remove=function(a){sl(a);tl(a);delete X[a]};
p.save=function(){Qf(this.h,this.dump(),63072E3,this.i)};
p.clear=function(){for(var a in X)delete X[a]};
p.dump=function(){var a=[],b;for(b in X)a.push(b+"="+encodeURIComponent(String(X[b])));return a.join("&")};
function tl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function sl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ul(a){a=void 0!==X[a]?X[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ja(rl);function vl(){this.i=new Set;this.h=new Set;this.j=new Map}
vl.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ja(vl);function wl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!xl(a)||c.some(function(e){return!xl(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())yl(a,d.value);return a}
function yl(a,b){for(var c in b)if(xl(b[c])){if(c in a&&!xl(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});yl(a[c],b[c])}else if(zl(b[c])){if(c in a&&!zl(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Al(a[c],b[c])}else a[c]=b[c];return a}
function Al(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,xl(d)?a.push(yl({},d)):zl(d)?a.push(Al([],d)):a.push(d);return a}
function xl(a){return"object"===typeof a&&!Array.isArray(a)}
function zl(a){return"object"===typeof a&&Array.isArray(a)}
;var Bl={},Cl=0;
function Dl(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!ki("cobalt")){if(a){a instanceof I||(a="object"==typeof a&&a.W?a.V():String(a),Ib.test(a)?a=new I(a,Eb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Hb))&&Gb.test(b[1])?new I(a,Eb):null));a=Fb(a||Kb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Ob)){b="object"==typeof a;var f=null;b&&a.i&&(f=a.h());a=Qb(vb(b&&a.W?a.V():String(a)),f)}a instanceof Ob&&a.constructor===Ob?a=a.j:(Ka(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Qe(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Hc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Jh(a,b,"POST",e,d);else if(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Jh(a,b,"GET","",d);else{b:{try{var g=new Va({url:a});if(g.j&&g.i||g.l){var h=Wb(a.match(Vb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(ac);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var n=a.charCodeAt(c+2);if(!n||61==n||38==n||35==n){var q=c;break d}}c+=3}q=-1}if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>l)w=l;q+=3;r=decodeURIComponent(a.substr(q,w-q).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(A){}f=!1}f?El(a)?(b&&b(),f=!0):f=!1:f=!1;f||Fl(a,b)}}
function El(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Fl(a,b){var c=new Image,d=""+Cl++;Bl[d]=c;c.onload=c.onerror=function(){b&&Bl[d]&&b();delete Bl[d]};
c.src=a}
;function Gl(a,b){Xh.call(this,1,arguments)}
v(Gl,Xh);function Hl(a,b){Xh.call(this,1,arguments)}
v(Hl,Xh);var Il=new Yh("aft-recorded",Gl),Jl=new Yh("timing-sent",Hl);var Kl=window;function Ll(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Ml=Kl.performance||Kl.mozPerformance||Kl.msPerformance||Kl.webkitPerformance||new Ll;var Nl=!1;E(Ml.clearResourceTimings||Ml.webkitClearResourceTimings||Ml.mozClearResourceTimings||Ml.msClearResourceTimings||Ml.oClearResourceTimings||Ia,Ml);function Ol(a){var b=Pl(a);if(b.aft)return b.aft;a=O((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Ql(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Sa("ytcsi."+(a||"")+"data_",b));return b}
function Rl(a){a=Ql(a);a.info||(a.info={});return a.info}
function Pl(a){a=Ql(a);a.tick||(a.tick={});return a.tick}
function Sl(a){var b=Ql(a).nonce;b||(b=Lj(),Ql(a).nonce=b);return b}
function Tl(a){var b=Pl(a||""),c=Ol(a);c&&!Nl&&(ci(Il,new Gl(Math.round(c-b._start),a)),Nl=!0)}
;function Ul(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function Vl(a){a=a||"";var b=B("ytcsi.reference");b||(Ul(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Ul(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Wl=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Wl,void 0);function Xl(){this.h=0}
function Yl(){Xl.h||(Xl.h=new Xl);return Xl.h}
Xl.prototype.tick=function(a,b,c){Zl(this,"tick_"+a+"_"+b)||V("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Xl.prototype.info=function(a,b){var c=Object.keys(a).join("");Zl(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,V("latencyActionInfo",c))};
Xl.prototype.span=function(a,b){var c=Object.keys(a).join("");Zl(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a))};
function Zl(a,b){Wl[b]=Wl[b]||{count:0};var c=Wl[b];c.count++;c.time=R();a.h||(a.h=sg(function(){var d=R(),e;for(e in Wl)Wl[e]&&6E4<d-Wl[e].time&&delete Wl[e];a&&(a.h=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new S("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Cj(c)),!0):!1}
;var Y={},$l=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid=
"requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",
Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",
Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),am="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),bm={},cm=(bm.ccs="CANARY_STATE_",
bm.mver="MEASUREMENT_VERSION_",bm.pis="PLAYER_INITIALIZED_STATE_",bm.yt_pt="LATENCY_PLAYER_",bm.pa="LATENCY_ACTION_",bm.yt_vst="VIDEO_STREAM_TYPE_",bm),dm="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function em(a){return!!O("FORCE_CSI_ON_GEL",!1)||P("csi_on_gel")||!!Ql(a).useGel}
function fm(a){a=Ql(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
;function gm(a,b,c){if(null!==b)if(Rl(c)[a]=b,em(c)){var d=b;b=fm(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in $l){b=$l[a];0<=Xa(am,b)&&(d=!!d);a in cm&&"string"===typeof d&&(d=cm[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=wl({},e)}else 0<=Xa(dm,a)||Cj(new S("Unknown label logged with GEL CSI",
a)),f=void 0;f&&em(c)&&(b=Vl(c||""),wl(b.info,f),b=fm(c),b.gelInfos||(b.gelInfos={}),wl(b.gelInfos,f),c=Sl(c),Yl().info(f,c))}else Vl(c||"").info[a]=b}
function hm(a,b,c){var d=Pl(c);if(P("use_first_tick")&&im(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Ml.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Ml.mark(e))}e=b||R();d[a]=e;e=fm(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||R();if(em(c)){Vl(c||"").tick[a]=b||R();e=Sl(c);if("_start"===a){var f=Yl();Zl(f,"baseline_"+e)||V("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Yl().tick(a,e,b);Tl(c);e=!0}else e=!1;if(!e){if(!B("yt.timing."+(c||"")+"pingSent_")&&
(f=O((c||"")+"TIMING_ACTION",void 0),e=Pl(c),B("ytglobal.timing"+(c||"")+"ready_")&&f&&im("_start")&&Ol(c)))if(Tl(c),c)jm(c);else{f=!0;var g=O("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&jm(c)}Vl(c||"").tick[a]=b||R()}return d[a]}
function im(a,b){var c=Pl(b);return a in c}
function jm(a){if(!em(a)){var b=Pl(a),c=Rl(a),d=b._start,e=O("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:O((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Ol(a);var h=Pl(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Rl(a).yt_pvis&&"youtube"===e&&(gm("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=R();m={};e=[];for(var n in b)"_"!==n.charAt(0)&&(k=Math.round(b[n]-d),m[n]=k,e.push(n+"."+k));f.rt=
e.join(",");b=!!c.ap;P("debug_csi_data")&&(c=B("yt.timing.csiData"),c||(c=[],Sa("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&(b||P("always_send_csi_204_with_beacon"))){var r=void 0===r?"":r;El(f,r)||Dl(f,void 0,void 0,void 0,r)}else Dl(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);ci(Jl,new Hl(m.aft+(Number(g)||0),a))}}
var km=window;km.ytcsi&&(km.ytcsi.info=gm,km.ytcsi.tick=hm);function lm(){this.l=[];this.m=[];this.h=[];this.i=!1;this.o=new Map}
function mm(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i&&a.j&&a.j();var g=W(c),h=Uj(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&fk(a.client,g,h,[Qj(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&fk(a.client,g,h,[Qj(d.playerResponse.trackingParams)]))})}
function nm(a,b,c,d){if(a.i&&!d)a.l.push([b,c]);else{var e=W(d);c=c||Uj(d);e&&c&&fk(a.client,e,c,[b])}}
lm.prototype.clickCommand=function(a){var b=W();if(!a.clickTrackingParams||!b)return!1;ik(this.client,b,Qj(a.clickTrackingParams));return!0};
function om(a,b,c){c=void 0===c?{}:c;a.i=!0;a.j=function(){pm(a,b,c);var f=Uj(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,nm(a,h[0],h[1]||f,c.layer);f=u(a.m);for(g=f.next();!g.done;g=f.next()){h=g.value;g=h[0];var k=h[1];if(a.i)a.m.push([g,k]);else{var l=Qj(g);if(h=W())g=a.client,k={csn:h,ve:l.getAsJson(),clientData:k},l={N:Xj(h),O:h},"UNDEFINED_CSN"==h?gk("visualElementStateChanged",k,l):g?jh("visualElementStateChanged",k,g,l):V("visualElementStateChanged",k,l)}}}};
W(c.layer)||a.j();if(c.wa)for(var d=u(c.wa),e=d.next();!e.done;e=d.next())mm(a,e.value,c.layer);else Dj(Error("Delayed screen needs a data promise."))}
function pm(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.gb?c.gb:c.layer;var e=W(d);d=Uj(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.va,l=c.N,m=dk(),n={csn:m,pageVe:(new Pj({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?n.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&Cj(new S("newScreen() parent element does not have a VE - rootVe",
b));k&&(n.cloneCsn=k);k={N:l,O:m};g?jh("screenCreated",n,g,k):V("screenCreated",n,k);ci(fi,new ak(m));var q=m}catch(r){Ej(r,{Ak:b,rootVe:d,parentVisualElement:void 0,tk:e,zk:f,va:c.va});Dj(r);return}Yj(q,b,c.layer,c.N);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=P("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(Nj));for(f=b.next();!f.done;f=b.next())if(W(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={N:Xj(e),O:e,
La:f},"UNDEFINED_CSN"==e?gk("visualElementHidden",d,f):b?jh("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");gm("csn",q);vl.getInstance().clear();d=Uj(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&hk(q,d);a.i=!1;a.j=void 0;e=u(a.o);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value===c.layer&&d&&nm(a,b,d,c.layer)}
;var Z=null,qm=null,rm=null,sm={};function tm(a){var b=a.id;a=a.ve_type;var c=Oj++;a=new Pj({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});sm[b]=a;b=W();c=Uj();b&&c&&jk(b,c,a)}
function um(){var a=Z.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function vm(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Yj(b,a),a=Uj()))for(var c in sm){var d=sm[c];d&&jk(b,a,d)}}
function wm(a){sm[a.id]=Qj(a.tracking_params)}
function xm(a){var b=W();a=sm[a.id];b&&a&&ik(P("use_default_events_client")?void 0:lj,b,a)}
function ym(a){a=a.ids;var b=W();if(b)for(var c=0;c<a.length;c++){var d=sm[a[c]];d&&hk(b,d)}}
;z("yt.setConfig",N,void 0);z("yt.config.set",N,void 0);z("yt.setMsg",Pf,void 0);z("yt.msgs.set",Pf,void 0);z("yt.logging.errors.log",Dj,void 0);
z("writeEmbed",function(){var a=O("PLAYER_CONFIG",void 0);if(!a){var b=O("PLAYER_VARS",void 0);b&&(a={args:b})}ql(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=O("POST_MESSAGE_ORIGIN");window!=window.top&&c&&c!=document.URL&&(a.args.loaderUrl=c);if((c=O("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){if(!c.serializedForcedExperimentIds){var d=
window.location.href;-1!=d.indexOf("?")?(d=(d||"").split("#")[0],d=d.split("?",2),d=th(1<d.length?d[1]:d[0])):d={};d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Z=Kk(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1)}else Z=Kk(a);Z.addEventListener("onScreenChanged",vm);Z.addEventListener("onLogClientVeCreated",tm);Z.addEventListener("onLogServerVeCreated",wm);Z.addEventListener("onLogVeClicked",xm);Z.addEventListener("onLogVesShown",ym);Z.addEventListener("onVideoDataChange",
um);a=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?rm=new bl(Z):O("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(qm=new cl(window.parent,a,b),rm=new Xk(Z,qm.j));xg()},void 0);
var zm=Lf(function(){hm("ol");var a=rl.getInstance(),b=!!((ul("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Yd(document.body,"exp-invert-logo"))if(c&&!Yd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Yd(d,"inverted-hdpi")){var e=Wd(d);Xd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Yd(document.body,"inverted-hdpi")&&Zd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=ul(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete X[b]:(c=d.toString(16),X[b]=c.toString()),a.save());lm.h||(lm.h=new lm);a=lm.h;c=16623;var f=void 0===f?{}:f;Object.values(kk).includes(c)||(Cj(new S("createClientScreen() called with a non-page VE",c)),c=83769);f.isHistoryNavigation||a.h.push({rootVe:c,key:f.key||""});a.l=[];a.m=[];f.wa?om(a,c,f):pm(a,c,f)}),Am=Lf(function(){Z&&Z.sendAbandonmentPing&&Z.sendAbandonmentPing();
O("PL_ATT")&&Hj.dispose();for(var a=0,b=vg.length;a<b;a++)ug(vg[a]);vg.length=0;og("//static.doubleclick.net/instream/ad_status.js");wg=!1;N("DCLKSTAT",0);Sc(rm,qm);Z&&(Z.removeEventListener("onScreenChanged",vm),Z.removeEventListener("onLogClientVeCreated",tm),Z.removeEventListener("onLogServerVeCreated",wm),Z.removeEventListener("onLogVeClicked",xm),Z.removeEventListener("onLogVesShown",ym),Z.removeEventListener("onVideoDataChange",um),Z.destroy());sm={}});
window.addEventListener?(window.addEventListener("load",zm),window.addEventListener("unload",Am)):window.attachEvent&&(window.attachEvent("onload",zm),window.attachEvent("onunload",Am));Sa("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Ij);Sa("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Jj);Sa("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||yg);
Sa("yt.player.exports.navigate",B("yt.player.exports.navigate")||Zj);Sa("yt.util.activity.init",B("yt.util.activity.init")||Lg);Sa("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Og);Sa("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Mg);}).call(this);
