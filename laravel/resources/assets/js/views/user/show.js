var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var template = require('templates/user/show');

module.exports = Marionette.View.extend({
    id: 'user-show',

    template: template,

    events: {
        'click button': 'delete'
    },

    delete: function () {
        this.model.destroy()
            .done(() => {
                Backbone.history.navigate('/user', true);
            })
            .fail((error) => {
                console.log(error);
            });
    }
});