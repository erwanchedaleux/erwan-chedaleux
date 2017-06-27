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

},{"./scripts/init/main.js":4}],2:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function Fullpage( $fullpage ) {

        $fullpage.fullpage( {
            anchors:                            [ 'home', 'about-me', 'references', 'contact', '' ],
            scrollOverflow:                     true,
            navigation:                         true,
            navigationTooltips:                 [ 'Accueil', 'A propos de moi', 'Références', 'contact', '' ],
            onLeave: function( index ){
                if ( window.matchMedia('(max-width: 639px)').matches ) {
                    if( index === 3 ){
                        $.fn.fullpage.setAutoScrolling( false );
                    } else {
                        $.fn.fullpage.setAutoScrolling( true );
                    }

                }
            }
        } );

    }

    return Fullpage;

}( jQuery ) );

},{}],3:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function Gallery( $gallery ) {

        var ACTIVE_CLASS,
            $filters;

        ACTIVE_CLASS                            = 'active';

        $filters                                = $( '.scr-filtr-filters' );


        $gallery.filterizr( {
            'delay':                            25
        } );

        /**
         * Allos to toggle active css class of current button
         * @return {void}
         */
        function toggleButtons() {

            var $btns, $currentBtn;

            $btns                               = $filters.find( '.btns' );
            $currentBtn                         = $( this ).find( '.btns' );

            $btns.removeClass( ACTIVE_CLASS );
            $currentBtn.addClass( ACTIVE_CLASS );

        }


        $filters.on( 'click', '.scrf-itm', toggleButtons );

    }

    return Gallery;

}( jQuery ) );

},{}],4:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function init() {

        var NavigationMobile, Typerwriter, Fullpage, Gallery,
            $navigationMobile, $typed, $fullpage, $gallery;

        NavigationMobile                        = require( '../navigation-mobile.js' );
        Typerwriter                             = require( '../typewriter.js' );
        Fullpage                                = require( '../fullpage.js' );
        Gallery                                 = require( '../gallery.js' );

        $navigationMobile                       = $( '.site-navigation-mobile' );
        $typed                                  = $( '#sch-typed' );
        $fullpage                               = $( '.fullpage' );
        $gallery                                = $( '.scr-filtr-container' );


        if ( $navigationMobile ) {
            new NavigationMobile( $navigationMobile );

        }

        if ( $typed ) {
            new Typerwriter( $typed );

        }

        if ( $fullpage ) {
            new Fullpage( $fullpage );

        }

        if ( $gallery ) {
            new Gallery( $gallery );

        }

    }


    return init;

} )( jQuery );

},{"../fullpage.js":2,"../gallery.js":3,"../navigation-mobile.js":5,"../typewriter.js":6}],5:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function NavigationMobile( $navigationMobile ) {

        var NAV_OPENED_CLASS, NO_SCROLL_CLASS, ACTIVE_CLASS,
            $body, $mask, $siteNavigation;

        NAV_OPENED_CLASS                    = 'navigation-mobile-opened';
        NO_SCROLL_CLASS                     = "no-scroll";
        ACTIVE_CLASS                        = 'active';

        $body                               = $( 'body' );
        $mask                               = $( '.site-mask' );
        $siteNavigation                     = $( '.site-navigation' );


        /**
         * Allows to toggle body css class to open or close mobile navigation
         * @return {void}
         */
        function toggleMobileNavigation() {
            if ( window.matchMedia('(max-width: 639px)').matches ) {
                $body.toggleClass( NAV_OPENED_CLASS ).toggleClass( NO_SCROLL_CLASS );
                $mask.toggleClass( ACTIVE_CLASS );

            }

            if ( $body.hasClass( NAV_OPENED_CLASS ) ) {
                $.fn.fullpage.setAllowScrolling( false );
            } else {
                $.fn.fullpage.setAllowScrolling( true );
            }

        }

        /**
         * Allows to remove mobile navigation aspect if window is more than 639px
         * Or if user click on item menu
         * @param  {event} e - event
         * @return {void}
         */
        function removeMobileNavigation( e ) {
            if ( e.type === 'resize' && window.matchMedia('(max-width: 639px)').matches ) {
                return;
            }

            $body.removeClass( NAV_OPENED_CLASS ).removeClass( NO_SCROLL_CLASS );
            $mask.removeClass( ACTIVE_CLASS );
            $.fn.fullpage.setAllowScrolling( true );

        }


        $navigationMobile.on( 'click', toggleMobileNavigation );
        $siteNavigation.on( 'click', '.sn-lnk', removeMobileNavigation );
        $( window ).on( 'resize', removeMobileNavigation );

    }

    return NavigationMobile;

}( jQuery ) );

},{}],6:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function Typewriter( $text ) {

        var $title;

        $title                               = $( '.sch-title-1' );


        $title.animate( {
            'opacity':                       1
        }, 1000, startTypewriter );


        /**
         * Allows to animate text on home screen with typewriter effect
         * @return {void}
         */
        function startTypewriter() {
            $text.typed( {
                strings:                     [ 'Intégra^300teur ^300/ ^300Themeur', 'Développeur ^250 Front-^300End', 'Erwan ^500Che^300daleux^750.' ],
                startDelay:                  250,
                typeSpeed:                   50,
                callback: function() {
                    setTimeout( function() {
                        $( '.typed-cursor' ).addClass( 'typed-fade-out' );
                    }, 2000 );

                }
            } );

        }


    }

    return Typewriter;

}( jQuery ) );

},{}]},{},[1])