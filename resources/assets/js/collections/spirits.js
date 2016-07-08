var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Spirit = require('models/spirit');

module.exports = Backbone.Collection.extend({
    url: '/api/spirit',
    model: Spirit
});