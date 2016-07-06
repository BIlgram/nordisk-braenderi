var Backbone = require('backbone');
var State = require('models/state');

module.exports = Backbone.Collection.extend({
    url: '/spirit/states',
    model: State
});