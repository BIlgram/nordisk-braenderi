var Backbone = require('backbone');

var Batches = require('collections/batches');
var Batch = require('models/batch');
var BatchIndexView = require('views/batch/index');

module.exports = Backbone.Router.extend({
    routes: {
        'batch': 'index',
    },

    initialize: function (options) {
        this.app = options.app;
    },

    index: function () {
        var batches = new Batches();
        batches.fetch().then(() => {
            this.app.rootView.showChildView('content', new BatchIndexView({
                collection: batches
            }));
        })
    },
});
