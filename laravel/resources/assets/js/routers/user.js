var Backbone = require('backbone');

var User = require('models/user');
var Users = require('collections/users');
var UserIndexView = require('views/user/index');
var UserCreateView = require('views/user/create');
var UserShowView = require('views/user/show');
var UserEditView = require('views/user/edit');

module.exports = Backbone.Router.extend({
    routes: {
        'user': 'index',
        'user/create': 'create',
        'user/:id': 'show',
        'user/:id/edit': 'edit'
    },

    initialize: function (options) {
        this.app = options.app;
    },

    index: function () {
        var users = new Users();

        users.fetch().then(() => {
            this.app.rootView.showChildView('content', new UserIndexView({
                collection: users
            }));
        })
    },

    create: function () {
        this.app.rootView.showChildView('content', new UserCreateView());
    },

    show: function (id) {
        var user = new User({id: id});

        user.fetch().then(() => {
            this.app.rootView.showChildView('content', new UserShowView({
                model: user
            }));
        });
    },

    edit: function (id) {
        var user = new User({id: id});

        user.fetch().then(() => {
            this.app.rootView.showChildView('content', new UserEditView({
                model: user
            }));
        });
    }
});

