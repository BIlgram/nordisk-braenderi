var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var moment = require('moment');
require('form-serializer');

var Batch = require('models/batch');
var template = require('templates/batch/create');

module.exports = Marionette.View.extend({
    id: 'batch-create',

    template: template,

    events: {
        'submit form': 'create'
    },

    templateContext: function () {
        return {
            moment: moment,
            spirits: this.getOption('spirits').toJSON()
        }
    },

    create: function (e) {
        e.preventDefault();

        var batch = new Batch($(e.target).serializeObject());

        batch.save(null, {
            success: function () {
                Backbone.history.navigate('batch/' + batch.get('id'), true);
            },
            error: function () {
                console.log("error", arguments);
            }
        });
    }
});