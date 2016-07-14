var Marionette = require('backbone.marionette');
var template = require('templates/user/index');

module.exports = Marionette.View.extend({
    id: 'user-index',

    template: template
});