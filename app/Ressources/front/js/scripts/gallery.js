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
