var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

module.exports = Backbone.Model.extend({
    urlRoot: '/api/spirit'
});