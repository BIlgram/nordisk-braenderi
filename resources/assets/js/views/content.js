var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

module.exports = Backbone.View.extend({
    id: 'primary-content',

    initialize: function(options) {
        
    },
    
    render: function () {
        this.$el.html('hello wrolsdasd');

        return this;
    }
});