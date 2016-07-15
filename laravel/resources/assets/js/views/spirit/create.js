var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
require('form-serializer');

var Spirit = require('models/spirit');
var ProcessView = require('views/process/base');
var template = require('templates/spirit/create');

module.exports = Marionette.View.extend({
    id: 'spirit-create',

    template: template,

    regions: {
        process: {
            el: '#process',
            replaceElement: true
        }
    },

    events: {
        'submit form': 'create'
    },

    onRender: function () {
        this.showChildView('process', new ProcessView({
            states: this.getOption('states'),
        }))
    },

    create: function (e) {
        e.preventDefault();

        var spirit = new Spirit($(e.target).serializeObject());

        spirit.save(null, {
            success: function () {
                Backbone.history.navigate('spirit/' + spirit.get('id'), true);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
});
