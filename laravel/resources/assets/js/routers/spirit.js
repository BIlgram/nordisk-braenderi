var Backbone = require('backbone');

var Spirit = require('models/spirit');
var Spirits = require('collections/spirits');
var States = require('collections/states');
var SpiritIndexView = require('views/spirit/index');
var SpiritCreateView = require('views/spirit/create');
var SpiritShowView = require('views/spirit/show');
var SpiritEditView = require('views/spirit/edit');

module.exports = Backbone.Router.extend({
    routes: {
        'spirit': 'index',
        'spirit/create': 'create',
        'spirit/:id': 'show',
        'spirit/:id/edit': 'edit'
    },

    initialize: function (options) {
        this.app = options.app;
    },

    index: function () {
        var spirits = new Spirits();

        spirits.fetch().then(() => {
            this.app.rootView.showChildView('content', new SpiritIndexView({
                collection: spirits
            }));
        })
    },

    create: function () {
        var states = new States();

        states.fetch().then(() => {
            console.log(states);
            this.app.rootView.showChildView('content', new SpiritCreateView({
                states: states
            }));
        });
    },

    show: function (id) {
        var spirit = new Spirit({id: id});

        spirit.fetch().then(() => {
            this.app.rootView.showChildView('content', new SpiritShowView({
                model: spirit
            }));
        });
    },

    edit: function (id) {
        var spirit = new Spirit({id: id});

        spirit.fetch().then(() => {
            this.app.rootView.showChildView('content', new SpiritEditView({
                model: spirit
            }));
        })
    }
});