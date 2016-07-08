var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
    routes: {
        '': 'index',
        'spirit': 'spirit'
    },

    index: function () {
        console.log('index');
    },

    spirit: function () {
        console.log('spirit');
    }
});