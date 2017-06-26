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
