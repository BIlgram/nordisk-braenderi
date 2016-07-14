var Backbone = require('backbone');
var Spirit = require('models/spirit');

module.exports = Backbone.Collection.extend({
    url: '/api/spirit',
    model: Spirit
});