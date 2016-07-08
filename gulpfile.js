var fs = require('fs');
var path = require('path');
var elixir = require('laravel-elixir');
require('laravel-elixir-browserify-official');
require('laravel-elixir-browsersync-official');

function replacement(alias, basePath, ext) {
    if (path.extname(alias)) {
        return basePath + alias;
    }

    if (exists(basePath + alias + '/index' + ext)) {
        return basePath + alias + '/index' + ext;
    }

    if (exists(basePath + alias + ext)) {
        return basePath + alias + ext;
    }
}

function exists(path) {
    try {
        fs.accessSync(path, fs.F_OK);
        return true;
    } catch (e) {
    }
    return false
}


elixir.config.js.browserify.transformers.push({
    name: 'ejsify',
    options: {}
});

elixir.config.js.browserify.transformers.push({
    name: 'aliasify',
    options: {
        replacements: {
            'models/(\\w+)': function (alias) {
                return replacement(alias, './resources/assets/js/', '.js');
            },
            'collections/(\\w+)': function (alias) {
                return replacement(alias, './resources/assets/js/', '.js');
            },
            'views/(\\w+)': function (alias) {
                return replacement(alias, './resources/assets/js/', '.js');
            },
            'templates/(\\w+)': function (alias) {
                return replacement(alias, './resources/assets/js/', '.ejs');
            }
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
