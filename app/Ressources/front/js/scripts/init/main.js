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
