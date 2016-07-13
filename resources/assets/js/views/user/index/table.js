var Marionette = require('backbone.marionette');
var TableRowView = require('views/user/index/row');

module.exports = Marionette.CollectionView.extend({
    tagName: 'table',
    
    childView: TableRowView
});