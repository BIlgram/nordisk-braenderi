var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var StepView = require('views/process/step');
var template = require('templates/process');

module.exports = Backbone.View.extend({
    el: '#process',

    events: {
        'click button': 'addProcessStep'
    },

    initialize: function(options) {
      this.states = options.states;
    },

    render: function () {
        this.$el.html(template());

        this.addProcessStep();

        return this;
    },

    addProcessStep: function () {
        var stepView = new StepView({states: this.states});

        this.$('#steps').append(stepView.render().el);
    }
});