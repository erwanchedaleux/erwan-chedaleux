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
