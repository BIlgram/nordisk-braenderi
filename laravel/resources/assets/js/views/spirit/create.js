var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
require('form-serializer');

var Spirit = require('models/spirit');
var template = require('templates/spirit/create');

module.exports = Marionette.View.extend({
    id: 'spirit-create',

    template: template,

    events: {
        'submit form': 'create'
    },

    create: function (e) {
        e.preventDefault();
        
        var spirit = new Spirit($(e.target).serializeObject());

        spirit.save(null, {
            success: function () {
                Backbone.history.navigate('spirit/' + spirit.get('id'), true);
            },
            error: function () {
                console.log("error", arguments);
            }
        });
    }
});