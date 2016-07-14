var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var template = require('templates/batch/show');

module.exports = Marionette.View.extend({
    id: 'batch-show',

    template: template,

    events: {
        'click button': 'delete'
    },

    delete: function () {
        this.model.destroy({
            success: function() {
                Backbone.history.navigate('/batch', true);
            },
            error: function() {
                console.log("error");
            }
        })
    }
});