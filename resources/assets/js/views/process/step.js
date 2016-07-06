var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('templates/process/step');

module.exports = Backbone.View.extend({
    tagName: 'tr',

    events: {
        'click input': 'removeProcessStep'
    },

    initialize: function (options) {
        this.states = options.states;
    },

    render: function () {
        this.$el.html(template({states: this.states}));

        return this;
    },

    removeProcessStep: function () {
        this.remove();
    }
});