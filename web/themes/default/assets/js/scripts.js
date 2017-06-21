(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
( function() {

    var mainInit;

    mainInit                                = require( './scripts/init/main.js' );


    function init() {
        mainInit();

    }


    document.addEventListener( 'DOMContentLoaded', function() {
        init();
    } );

} ).call( this );

},{"./scripts/init/main.js":2}],2:[function(require,module,exports){
module.exports = ( function () {

    function init() {

        var Sample;

        Sample                              = require( '../sample.js' );


        new Sample();

    }


    return init;

} )();

},{"../sample.js":3}],3:[function(require,module,exports){
module.exports = ( function() {

    function Sample() {
        console.log( 'Site started' );
    }

    return Sample;

}() );

},{}]},{},[1])