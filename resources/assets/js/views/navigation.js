var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var template = require('templates/navigation');

module.exports = Backbone.View.extend({
    tagName: 'nav',
    id: 'primary-navigation',
    
    initialize: function (options) {

    },

    render: function () {
        this.$el.html(template);

        return this;
    }
});