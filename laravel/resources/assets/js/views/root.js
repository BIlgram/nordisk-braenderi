var Marionette = require('backbone.marionette');
var template = require('templates/root');

module.exports = Marionette.View.extend({
    id: 'root',

    template: template,
    
    regions: {
        content: '#content'
    }
});