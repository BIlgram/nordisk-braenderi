var Backbone = require('backbone');
var State = require('models/state');

module.exports = Backbone.Collection.extend({
    url: '/api/state',
    model: State
});