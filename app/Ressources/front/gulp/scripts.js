module.exports = function( gulp, pkg, config ) {
    var browserify, gulpConcat, projectVars, stringifyOptions;

    projectVars                         = require( '../data/variables.json' );
    browserify                          = require( 'gulp-browserify' );
    gulpConcat                          = require( 'gulp-concat' );

    stringifyOptions                    = [ "stringify",
        {
            "extension":                                ".html",
            "minify":                                   true,
            "minifier": {
                "extensions":                           [ '.html' ],
                "options": {
                    "removeComments":                   true,
                    "removeCommentsFromCDATA":          true,
                    "removeCDATASectionsFromCDATA":     true,
                    "collapseWhitespace":               true,
                    "conservativeCollapse":             false,
                    "preserveLineBreaks":               false,
                    "collapseBooleanAttributes":        false,
                    "removeAttributeQuotes":            true,
                    "removeRedundantAttributes":        false,
                    "useShortDoctype":                  false,
                    "removeEmptyAttributes":            false,
                    "removeScriptTypeAttributes":       false,
                    "removeStyleLinkTypeAttributes":    false,
                    "removeOptionalTags":               false,
                    "removeIgnored":                    false,
                    "removeEmptyElements":              false,
                    "lint":                             false,
                    "keepClosingSlash":                 false,
                    "caseSensitive":                    false,
                    "minifyJS":                         false,
                    "minifyCSS":                        false,
                    "minifyURLs":                       false
                }
            }
        }
    ];

    gulp.task( 'browserify',  function() {
        return gulp
                .src( [
                    config.path.resources.js + 'scripts.js'
                ] )
                .pipe( browserify( {
                    "transform": [
                        stringifyOptions
                        // [ "browserify-replace", {
                        //     "replace": [
                        //         { "from": /['"]{{content.innerWidth}}['"]/, "to": projectVars.content.innerWidth }
                        //     ]
                        // } ]
                    ],
                    "external":                                             []
                } ) )
                .pipe( gulp.dest( config.path.web.js ) );
    } );

    gulp.task( 'browserifyPolyfill',  function() {
        return gulp
                .src( [
                    config.path.resources.js + 'vendor/polyfill/promises.js',
                    config.path.resources.js + 'vendor/polyfill/picturefill.js'
                ] )
                .pipe( browserify( {
                    "transform": [
                        stringifyOptions
                        // [ "browserify-replace", {
                        //     "replace": [
                        //         { "from": /['"]{{content.innerWidth}}['"]/, "to": projectVars.content.innerWidth }
                        //     ]
                        // } ]
                    ],
                    "external":                                             []
                } ) )
                .pipe( gulp.dest( config.path.web.js + 'polyfill/' ) );
    } );



    gulp.task( 'concatMain',  function() {
        return gulp
                .src( [
                    config.path.resources.js + 'vendor/modernizr/modernizr.js',
                    config.path.resources.js + 'vendor/modernizr/addons.js',
                    config.path.resources.js + 'vendor/modernizr/old-browser-redirect.js',
                    config.path.resources.js + 'config/starter-config.js'
                ] )
                .pipe( gulpConcat( 'main.js' ) )
                .pipe( gulp.dest( config.path.web.js ) );
    } );



    gulp.task( 'concatLib',  function() {
        return gulp
                .src( [
                    config.path.resources.js + 'vendor/polyfill/polyfill.js',
                ] )
                .pipe( gulpConcat( 'lib.js' ) )
                .pipe( gulp.dest( config.path.web.js ) );
    } );

    gulp.task( 'concatInlineJS',  function() {
        return gulp
                .src( [
                    config.path.resources.js + 'vendor/loadcss/loadCSS.js',
                    config.path.resources.js + 'vendor/loadcss/cssrelpreload.js'
                ] )
                .pipe( gulpConcat( 'inlineJS.js' ) )
                .pipe( gulp.dest( config.path.web.system ) );
    } );

};
