var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
require('form-serializer');

var ProcessView = require('views/process/base');
var template = require('templates/spirit/edit');

module.exports = Marionette.View.extend({
    id: 'spirit-edit',

    template: template,

    events: {
        'submit form': 'edit'
    },

    regions: {
        process: {
            el: '#process',
            replaceElement: true
        }
    },

    onRender: function () {
        console.log(this.model);
        this.showChildView('process', new ProcessView({
            states: this.getOption('states'),
            process: this.model.get('process')
        }))
    },

    edit: function (e) {
        var that = this;

        e.preventDefault();

        this.model.set($(e.target).serializeObject());

        this.model.save(null, {
            success: function () {
                Backbone.history.navigate('spirit/' + that.model.get('id'), true);
            },
            error: function () {
                console.log("error", arguments);
            }
        });
    }
});