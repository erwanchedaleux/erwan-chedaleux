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
