var Marionette = require('backbone.marionette');
var template = require('templates/user/index/row');

module.exports = Marionette.View.extend({
    tagName: 'tr',

    template: template
});