/*!
 *  Erwan Chedaleux
 *  http://www.erwan-chedaleux.fr
 *  @version: 0.0.5
 *  
 *  Thanks to 
 *
 *  Domready - (c) Dustin Diaz - License MIT
 *  Bean - copyright (c) Jacob Thornton
 *  Reqwest - license MIT (c) Dustin Diaz
 *  Picturefill - http://scottjehl.github.io/picturefill
 *  es6-promise - https://github.com/stefanpenner/es6-promise
 *  
*/

!function n(t,r,e){function i(u,f){if(!r[u]){if(!t[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var s=r[u]={exports:{}};t[u][0].call(s.exports,function(n){var r=t[u][1][n];return i(r||n)},s,s.exports,n,t,r,e)}return r[u].exports}for(var o="function"==typeof require&&require,u=0;u<e.length;u++)i(e[u]);return i}({1:[function(n,t,r){(function(){function t(){r()}var r;r=n("./scripts/init/main.js"),document.addEventListener("DOMContentLoaded",function(){t()})}).call(this)},{"./scripts/init/main.js":2}],2:[function(n,t,r){t.exports=function(){function t(){var t;new(t=n("../sample.js"))}return t}()},{"../sample.js":3}],3:[function(n,t,r){t.exports=function(){function n(){console.log("Site started")}return n}()},{}]},{},[1]);