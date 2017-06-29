/* global jQuery */
module.exports = ( function ( $ ) {

    function init() {

        var NavigationMobile, Typerwriter, Fullpage, Gallery, Form,
            $navigationMobile, $typed, $fullpage, $gallery, $forms;

        NavigationMobile                        = require( '../navigation-mobile.js' );
        Typerwriter                             = require( '../typewriter.js' );
        Fullpage                                = require( '../fullpage.js' );
        Gallery                                 = require( '../gallery.js' );
        Form                                    = require( '../form.js' );

        $navigationMobile                       = $( '.site-navigation-mobile' );
        $typed                                  = $( '#sch-typed' );
        $fullpage                               = $( '.fullpage' );
        $gallery                                = $( '.scr-filtr-container' );
        $forms                                  = $( '.forms' );


        if ( $navigationMobile ) {
            new NavigationMobile( $navigationMobile );

        }

        if ( $typed ) {
            new Typerwriter( $typed );

        }

        if ( $fullpage ) {
            new Fullpage( $fullpage );

        }

        if ( $gallery.length ) {
            new Gallery( $gallery );

        }

        if ( $forms.length ) {
            $forms.each( function( index, form ) {
                new Form( $( form ) );

            } );

        }

    }


    return init;

} )( jQuery );
