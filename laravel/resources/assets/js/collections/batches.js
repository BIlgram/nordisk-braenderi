var Backbone = require('backbone');
var Batch = require('models/batch');

module.exports = Backbone.Collection.extend({
    url: '/api/batch',
    model: Batch
});
