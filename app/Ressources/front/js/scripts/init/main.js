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
