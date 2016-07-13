var fs = require('fs');
var path = require('path');
var elixir = require('laravel-elixir');
require('laravel-elixir-browserify-official');
require('laravel-elixir-browsersync-official');

elixir.config.js.browserify.transformers.push({
    name: 'ejsify',
    options: {}
});

elixir.config.js.browserify.transformers.push({
    name: 'aliasify',
    options: {
        aliases: {
            'models': './resources/assets/js/models',
            'collections': './resources/assets/js/collections',
            'views': './resources/assets/js/views',
            'routers': './resources/assets/js/routers'
        },
        replacements: {
            'templates/(.+)': './resources/assets/js/templates/$1.ejs'
        }
    }
});

elixir(function (mix) {
    mix.sass('main.scss');
    mix.browserify('main.js');
    mix.browserSync({
        proxy: "nordiskbraenderi.local"
    });
});
