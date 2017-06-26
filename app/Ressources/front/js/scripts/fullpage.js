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
