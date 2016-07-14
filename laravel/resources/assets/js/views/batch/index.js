var Marionette = require('backbone.marionette');
var template = require('templates/batch/index');

module.exports = Marionette.View.extend({
    id: 'batch-index',

    template: template
});