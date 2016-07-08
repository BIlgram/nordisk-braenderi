var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var NavigationView = require('views/navigation');
var ContentView = require('views/content');

module.exports = Backbone.View.extend({
    id: 'primary-container',

    initialize: function(options) {

    },

    render: function () {
        this.$el.html('');
        this.$el.append(
            new NavigationView().render().el,
            new ContentView().render().el
        );

        return this;
    }
});