var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    urlRoot: '/api/batch',

    state: function () {
        var step = this.get('step');
        var process = this.get('spirit').process;

        var states = {
            current: process[step]
        };

        if (step < process.length) {
            states.next = process[step + 1]
        }

        if(step > 0) {
            states.prev = process[step - 1]
        }

        return states
    }
});