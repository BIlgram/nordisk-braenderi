var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var template = require('templates/batch/show');
var MashingView = require('views/batch/steps/mashing');
var BlendingView = require('views/batch/steps/blending');
var BottlingView = require('views/batch/steps/bottling');
var DilutionView = require('views/batch/steps/dilution');
var DistillationView = require('views/batch/steps/distillation');
var FiltrationView = require('views/batch/steps/filtration');
var StorageView = require('views/batch/steps/storage');

module.exports = Marionette.View.extend({
    id: 'batch-show',

    template: function(data) {
        console.log(data);
        return template(data)
    },

    events: {
        'click #delete': 'delete',
        'click #next-step': 'nextStep'
    },

    regions: {
        step: '#step'
    },

    templateContext: function () {
        return {
            state: this.model.state()
        }
    },

    onRender: function () {
        switch (this.model.state().current.id) {
            case 1:
                this.showChildView('step', new MashingView({model: this.model}));
                break;
            case 2:
                this.showChildView('step', new DistillationView({model: this.model}));
                break;
            case 3:
                this.showChildView('step', new DilutionView({model: this.model}));
                break;
            case 4:
                this.showChildView('step', new StorageView({model: this.model}));
                break;
            case 5:
                this.showChildView('step', new FiltrationView({model: this.model}));
                break;
            case 6:
                this.showChildView('step', new BottlingView({model: this.model}));
                break;
            case 7:
                this.showChildView('step', new BlendingView({model: this.model}));
                break;
        }
    },

    delete: function () {
        this.model.destroy()
            .done(() => {
                Backbone.history.navigate('/batch', true);
            })
            .fail(() => {
                console.log(error);
            });
    },

    nextStep: function () {
        var step = this.model.get('step');
        if (step < this.model.get('spirit').process.length - 1) {
            this.model.set('step', step + 1);
        }

        this.model.save({})
            .done(() => {
                this.render();
            })
            .fail((error) => {
                console.log(error)
            });
    }
});