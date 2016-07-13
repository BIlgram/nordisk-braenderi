var Marionette = require('backbone.marionette');
var TableView = require('views/user/index/table');
var template = require('templates/user/index/base');

module.exports = Marionette.View.extend({
    id: 'user-index',

    template: template,

    regions: {
        header: '#content-header',
        body: '#content-body'
    },
    
    onRender: function () {
        this.showChildView('body', new TableView({collection: this.collection}));
    }
});