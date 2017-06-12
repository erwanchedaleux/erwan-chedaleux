module.exports = function( gulp, pkg, config ) {
    var cleanTask;

    cleanTask                           = require( 'gulp-clean' );


    gulp.task( 'clean',  function() {
        return gulp
            .src( [
                config.path.web.js,
                config.path.web.css
            ], { "read": false } )
            .pipe( cleanTask( { "force": true } ) );
    } );
};
