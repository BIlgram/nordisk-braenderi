var $ = require('jquery');
var Backbone = require('backbone');
var template = require('templates/form-confirm/base');

module.exports = Backbone.View.extend({
    className: 'form-confirm',
    
    initialize: function (options) {
        this.$form = $(options.form);
    },

    events: {
        'click button': function (e) {
            if ($(e.target).data('answer') == 'y') {
                this.$form.unbind('submit');
                this.$form.submit();
            } else {
                this.remove();
            }
        }
    },

    render: function () {
        this.$el.html(template);
        return this;
    }
});