var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var template = require('templates/process/step');

module.exports = Marionette.View.extend({
    tagName: 'tr',

    template: template,

    events: {
        'click button': 'delete'
    },

    templateContext: function () {
        return {
            step: this.getOption('step') ? this.getOption('step') : null,
            states: this.getOption('states').toJSON()
        };
    },

    delete: function () {
        // var model = this.getOption('step');
        // model.trigger('destroy', model, model.collection);
        this.remove();
    }
});