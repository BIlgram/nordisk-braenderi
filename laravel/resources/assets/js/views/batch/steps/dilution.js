var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var template = require('templates/batch/steps/dilution');

module.exports = Marionette.View.extend({
    template: template
});