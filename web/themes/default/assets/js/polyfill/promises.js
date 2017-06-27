/*!
 *  es6-promise - a tiny implementation of Promises/A+.
 *  https://github.com/stefanpenner/es6-promise
 *  @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 *  @license   Licensed under MIT license
 *  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 *  
*/

!function t(n,e,r){function o(s,u){if(!e[s]){if(!n[s]){var c="function"==typeof require&&require;if(!u&&c)return c(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var f=e[s]={exports:{}};n[s][0].call(f.exports,function(t){var e=n[s][1][t];return o(e||t)},f,f.exports,t,n,e,r)}return e[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,n,e){Modernizr.promises||t("es6-promise/auto")},{"es6-promise/auto":2}],2:[function(t,n,e){"use strict";n.exports=t("./").polyfill()},{"./":3}],3:[function(t,n,e){(function(r,o){!function(t,r){"object"==typeof e&&void 0!==n?n.exports=r():"function"==typeof define&&define.amd?define(r):t.ES6Promise=r()}(this,function(){"use strict";function n(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function i(t){G=t}function s(t){H=t}function u(){return void 0!==B?function(){B(f)}:c()}function c(){var t=setTimeout;return function(){return t(f,1)}}function f(){for(var t=0;t<W;t+=2){(0,Z[t])(Z[t+1]),Z[t]=void 0,Z[t+1]=void 0}W=0}function a(t,n){var e=arguments,r=this,o=new this.constructor(h);void 0===o[tt]&&C(o);var i=r._state;return i?function(){var t=e[i-1];H(function(){return T(i,o,t,r._result)})}():x(r,o,t,n),o}function l(t){var n=this;if(t&&"object"==typeof t&&t.constructor===n)return t;var e=new n(h);return g(e,t),e}function h(){}function d(){return new TypeError("You cannot resolve a promise with itself")}function p(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(t){return ot.error=t,ot}}function w(t,n,e,r){try{t.call(n,e,r)}catch(t){return t}}function _(t,n,e){H(function(t){var r=!1,o=w(e,n,function(e){r||(r=!0,n!==e?g(t,e):A(t,e))},function(n){r||(r=!0,E(t,n))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,E(t,o))},t)}function m(t,n){n._state===et?A(t,n._result):n._state===rt?E(t,n._result):x(n,void 0,function(n){return g(t,n)},function(n){return E(t,n)})}function y(t,n,r){n.constructor===t.constructor&&r===a&&n.constructor.resolve===l?m(t,n):r===ot?(E(t,ot.error),ot.error=null):void 0===r?A(t,n):e(r)?_(t,n,r):A(t,n)}function g(t,e){t===e?E(t,d()):n(e)?y(t,e,v(e)):A(t,e)}function b(t){t._onerror&&t._onerror(t._result),S(t)}function A(t,n){t._state===nt&&(t._result=n,t._state=et,0!==t._subscribers.length&&H(S,t))}function E(t,n){t._state===nt&&(t._state=rt,t._result=n,H(b,t))}function x(t,n,e,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=n,o[i+et]=e,o[i+rt]=r,0===i&&t._state&&H(S,t)}function S(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<n.length;s+=3)r=n[s],o=n[s+e],r?T(e,r,o,i):o(i);t._subscribers.length=0}}function j(){this.error=null}function M(t,n){try{return t(n)}catch(t){return it.error=t,it}}function T(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,f=void 0;if(i){if(s=M(r,o),s===it?(f=!0,u=s.error,s.error=null):c=!0,n===s)return void E(n,p())}else s=o,c=!0;n._state!==nt||(i&&c?g(n,s):f?E(n,u):t===et?A(n,s):t===rt&&E(n,s))}function k(t,n){try{n(function(n){g(t,n)},function(n){E(t,n)})}catch(n){E(t,n)}}function P(){return st++}function C(t){t[tt]=st++,t._state=void 0,t._result=void 0,t._subscribers=[]}function L(t,n){this._instanceConstructor=t,this.promise=new t(h),this.promise[tt]||C(this.promise),N(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&A(this.promise,this._result))):E(this.promise,O())}function O(){return new Error("Array Methods must be provided an Array")}function q(t){return new L(this,t).promise}function U(t){var n=this;return new n(N(t)?function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)}:function(t,n){return n(new TypeError("You must pass an array to race."))})}function Y(t){var n=this,e=new n(h);return E(e,t),e}function F(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function I(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function z(t){this[tt]=P(),this._result=this._state=void 0,this._subscribers=[],h!==t&&("function"!=typeof t&&F(),this instanceof z?k(this,t):I())}function D(){var t=void 0;if(void 0!==o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var e=null;try{e=Object.prototype.toString.call(n.resolve())}catch(t){}if("[object Promise]"===e&&!n.cast)return}t.Promise=z}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var N=K,W=0,B=void 0,G=void 0,H=function(t,n){Z[W]=t,Z[W+1]=n,2===(W+=2)&&(G?G(f):$())},J="undefined"!=typeof window?window:void 0,Q=J||{},R=Q.MutationObserver||Q.WebKitMutationObserver,V="undefined"==typeof self&&void 0!==r&&"[object process]"==={}.toString.call(r),X="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Z=new Array(1e3),$=void 0;$=V?function(){return function(){return r.nextTick(f)}}():R?function(){var t=0,n=new R(f),e=document.createTextNode("");return n.observe(e,{characterData:!0}),function(){e.data=t=++t%2}}():X?function(){var t=new MessageChannel;return t.port1.onmessage=f,function(){return t.port2.postMessage(0)}}():void 0===J&&"function"==typeof t?function(){try{var n=t,e=n("vertx");return B=e.runOnLoop||e.runOnContext,u()}catch(t){return c()}}():c();var tt=Math.random().toString(36).substring(16),nt=void 0,et=1,rt=2,ot=new j,it=new j,st=0;return L.prototype._enumerate=function(){for(var t=this.length,n=this._input,e=0;this._state===nt&&e<t;e++)this._eachEntry(n[e],e)},L.prototype._eachEntry=function(t,n){var e=this._instanceConstructor,r=e.resolve;if(r===l){var o=v(t);if(o===a&&t._state!==nt)this._settledAt(t._state,n,t._result);else if("function"!=typeof o)this._remaining--,this._result[n]=t;else if(e===z){var i=new e(h);y(i,t,o),this._willSettleAt(i,n)}else this._willSettleAt(new e(function(n){return n(t)}),n)}else this._willSettleAt(r(t),n)},L.prototype._settledAt=function(t,n,e){var r=this.promise;r._state===nt&&(this._remaining--,t===rt?E(r,e):this._result[n]=e),0===this._remaining&&A(r,this._result)},L.prototype._willSettleAt=function(t,n){var e=this;x(t,void 0,function(t){return e._settledAt(et,n,t)},function(t){return e._settledAt(rt,n,t)})},z.all=q,z.race=U,z.resolve=l,z.reject=Y,z._setScheduler=i,z._setAsap=s,z._asap=H,z.prototype={constructor:z,then:a,catch:function(t){return this.then(null,t)}},z.polyfill=D,z.Promise=z,z})}).call(this,t("km4Umf"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{km4Umf:4}],4:[function(t,n,e){function r(){}var o=n.exports={};o.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,n="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(n){var e=[];return window.addEventListener("message",function(t){var n=t.source;if((n===window||null===n)&&"process-tick"===t.data&&(t.stopPropagation(),e.length>0)){e.shift()()}},!0),function(t){e.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),o.title="browser",o.browser=!0,o.env={},o.argv=[],o.on=r,o.addListener=r,o.once=r,o.off=r,o.removeListener=r,o.removeAllListeners=r,o.emit=r,o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")}},{}]},{},[1]);