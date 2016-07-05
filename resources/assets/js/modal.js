var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../templates/modal.ejs');

var $form = $('form.confirm');

var ModalView = Backbone.View.extend({
    className: 'modal',

    events: {
        'click button': function (e) {
            if ($(e.target).data('answer') == 'y') {
                $form.unbind('submit');
                $form.submit();
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

$form.submit(function (e) {
    e.preventDefault();

    $('body').prepend(new ModalView().render().el)
});
