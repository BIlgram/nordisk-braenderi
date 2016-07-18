var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var template = require('templates/batch/steps/mashing');
require('form-serializer');

module.exports = Marionette.View.extend({
    template: template,

    events: {
        'submit form': 'save'
    },

    save: function (e) {
        e.preventDefault();

        //this.model.set($(e.target).serializeObject());

        // this.model.save(null, {
        //     success: () => {
        //         Backbone.history.navigate('batch/' + this.model.get('id'), true);
        //     },
        //     error: () => {
        //         console.log("error", arguments);
        //     }
        // });
    }
});