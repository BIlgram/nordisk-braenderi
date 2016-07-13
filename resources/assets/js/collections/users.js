var Backbone = require('backbone');
var User = require('models/user');

module.exports = Backbone.Collection.extend({
    url: '/api/user',
    model: User
});