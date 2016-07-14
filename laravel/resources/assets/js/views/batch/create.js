var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
require('form-serializer');

var Batch = require('models/batch');
var template = require('templates/batch/create');

module.exports = Marionette.View.extend({
    id: 'batch-create',

    template: function () {
        return template;
    },

    events: {
        'submit form': 'create'
    },

    create: function (e) {
        e.preventDefault();

        var batch = new Batch($(e.target).serializeObject());

        batch.save(null, {
            success: function () {
                Backbone.history.navigate('spirit/' + batch.get('id'), true);
            },
            error: function () {
                console.log("error", arguments);
            }
        });
    }
});