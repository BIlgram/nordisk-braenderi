var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var template = require('templates/spirit/show');

module.exports = Marionette.View.extend({
    id: 'spirit-show',

    template: template,
    
    events: {
        'click button': 'delete'
    },

    delete: function () {
        this.model.destroy({
            success: function() {
                Backbone.history.navigate('/spirit', true);
            },
            error: function() {
                console.log("error");
            }
        })
    }
});