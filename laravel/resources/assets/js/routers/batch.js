var Backbone = require('backbone');

var Batch = require('models/batch');
var Batches = require('collections/batches');
var Spirits = require('collections/spirits');
var BatchIndexView = require('views/batch/index');
var BatchCreateView = require('views/batch/create');
var BatchShowView = require('views/batch/show');
var BatchEditView = require('views/batch/edit');

module.exports = Backbone.Router.extend({
    routes: {
        'batch': 'index',
        'batch/create': 'create',
        'batch/:id': 'show',
        'batch/:id/edit': 'edit'
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
    create: function () {
        var spirits = new Spirits();

        spirits.fetch().then(() => {
            this.app.rootView.showChildView('content', new BatchCreateView({
                spirits: spirits
            }));
        });
    },
    show: function (id) {
        var batch = new Batch({id: id});
        batch.fetch().then(() => {
            this.app.rootView.showChildView('content', new BatchShowView({
                model: batch
            }));
        });
    },
    edit: function (id) {
        var batch = new Batch({id: id});

        batch.fetch().then(() => {
            this.app.rootView.showChildView('content', new BatchEditView({
                model: batch
            }));
        })
    }
});
