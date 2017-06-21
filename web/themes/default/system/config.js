var PROJECT, URL;

PROJECT                             = {};
URL                                 = 'http://localhost/erwan-chedaleux/themes/default/';

PROJECT.Settings = {
    "lang":                         "fr"
};


PROJECT.files = {
    "main": [
        URL + "assets/js/lib.js",
        URL + "assets/js/scripts.js"
    ],
    "promises": [
        URL + "assets/js/polyfill/promises.js"
    ],
    "picturefill": [
        URL + "assets/js/polyfill/picturefill.js"
    ]
};
