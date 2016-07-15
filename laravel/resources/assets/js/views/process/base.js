// optional collection med process
// required collection med states
var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var StepView = require('views/process/step');
var template = require('templates/process/base');

module.exports = Marionette.View.extend({
    id: 'process',

    template: template,

    ui: {
        table: 'table'
    },

    events: {
        'click button': 'add'
    },

    onRender: function () {
        var process = this.getOption('process');

        if(process) {
            process.forEach((step) => {
                this.ui.table.append(new StepView({
                    step: step,
                    states: this.getOption('states')
                }).render().el)
            })
        } else {
            this.add()
        }
    },

    add: function () {
        this.ui.table.append(new StepView({
            states: this.getOption('states')
        }).render().el);
    }
});