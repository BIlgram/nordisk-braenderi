var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
require('form-serializer');

var User = require('models/user');
var template = require('templates/user/create');

module.exports = Marionette.View.extend({
    id: 'user-create',

    template: template,

    events: {
        'submit form': 'create'
    },

    create: function (e) {
        e.preventDefault();

        var user = new User($(e.target).serializeObject());

        user.save(null, {
            success: function () {
                Backbone.history.navigate('user/' + user.get('id'), true);
            },
            error: function () {
                console.log("error", arguments);
            }
        });
    }
});