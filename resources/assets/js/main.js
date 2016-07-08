var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Router = require('./router');
var AppView = require('views/app');
var NavigationView = require('views/navigation');

var App = Marionette.Application.extend({
    region: '#application',
    onStart: function () {
        this.showView(new AppView());
    }
});

var app = new App();

app.on('start', function () {
    var router = new Router();

    Backbone.history.start({pushState: true});

    $(document).on('click', 'a[href]:not([data-bypass])', function (e) {
        var href = {prop: $(this).prop("href"), attr: $(this).attr("href")};
        var root = location.protocol + "//" + location.host;
        if (href.prop.slice(0, root.length) === root) {
            e.preventDefault();
            Backbone.history.navigate(href.attr, true);
        }
    });
});

app.start();