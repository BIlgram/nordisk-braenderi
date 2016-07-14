var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var SpiritRouter = require('routers/spirit');
var UserRouter = require('routers/user');
var BatchRouter = require('routers/batch');
var RootView = require('views/root');

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

var App = Marionette.Application.extend({
    region: '#application',
    
    onStart: function () {
        this.rootView = new RootView();
        this.showView(this.rootView);

        new SpiritRouter({app: this});
        new UserRouter({app: this});
        new BatchRouter({app: this});


        Backbone.history.start({pushState: true});

        $(document).on('click', 'a[href]:not([data-bypass])', function (e) {
            var href = {prop: $(this).prop('href'), attr: $(this).attr('href')};
            var root = location.protocol + '//' + location.host;
            if (href.prop.slice(0, root.length) === root) {
                e.preventDefault();
                Backbone.history.navigate(href.attr, true);
            }
        });
    }
});

var app = new App();

app.start();