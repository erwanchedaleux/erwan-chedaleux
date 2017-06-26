(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global jQuery, document */
( function() {

    var mainInit;

    mainInit                                = require( './scripts/init/main.js' );


    function init() {
        mainInit();

    }


    jQuery( document ).ready(function() {
        init();
    } );

} ).call( this );

},{"./scripts/init/main.js":3}],2:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( /*$*/ ) {

    function Anchorcroll( $fullpage ) {

        $fullpage.fullpage( {
            anchors:                            [ 'home', 'about-me', 'references', 'contact' ],
            // menu:                               '.sn-list',
            navigationTooltips:                 [ 'Accueil', 'A propos de moi', 'Références' ],
            scrollOverflow:                     true,
            navigation:                         true
        } );

    }

    return Anchorcroll;

}( jQuery ) );

},{}],3:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function init() {

        var NavigationMobile, Fullpage,
            $navigationMobile, $fullpage;

        NavigationMobile                        = require( '../navigation-mobile.js' );
        Fullpage                                = require( '../fullpage.js' );

        $navigationMobile                       = $( '.site-navigation-mobile' );
        $fullpage                               = $( '.fullpage' );


        if ( $navigationMobile ) {
            new NavigationMobile( $navigationMobile );

        }

        if ( $fullpage ) {
            new Fullpage( $fullpage );

        }

    }


    return init;

} )( jQuery );

},{"../fullpage.js":2,"../navigation-mobile.js":4}],4:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function NavigationMobile( $navigationMobile ) {

        var NAV_OPENED_CLASS, NO_SCROLL_CLASS, ACTIVE_CLASS,
            $body, $mask;

        NAV_OPENED_CLASS                    = 'navigation-mobile-opened';
        NO_SCROLL_CLASS                     = "no-scroll";
        ACTIVE_CLASS                        = 'active';

        $body                               = $( 'body' );
        $mask                               = $( '.site-mask' );


        /**
         * Allows to toggle body css class to open or close mobile navigation
         * @return {void}
         */
        function toggleMobileNavigation() {
            if ( window.matchMedia('(max-width: 639px)').matches ) {
                $body.toggleClass( NAV_OPENED_CLASS ).toggleClass( NO_SCROLL_CLASS );
                $mask.toggleClass( ACTIVE_CLASS );

            }

        }


        $navigationMobile.on( 'click', toggleMobileNavigation );

    }

    return NavigationMobile;

}( jQuery ) );

},{}]},{},[1])