var Backbone = require('backbone');

var StepView = require('views/process/step');
var template = require('templates/process/base');

module.exports = Backbone.View.extend({
    el: '#process',

    events: {
        'click button': 'addStep'
    },

    initialize: function () {
        var states = this.$('input[name="states"]').val();
        if(states) {
            this.states = new Backbone.Collection(JSON.parse(states));
        }

        var process = this.$('input[name="process"]').val();
        if(process) {
            this.process = new Backbone.Collection(JSON.parse(process));
        }

        console.log(process);
    },

    render: function () {
        this.$el.html(template());

        this.addStep();

        return this;
    },

    addStep: function () {
        var stepView = new StepView({states: this.states});

        this.$('#steps').append(stepView.render().el);
    }
});