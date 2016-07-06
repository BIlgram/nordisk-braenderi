var $ = require('jquery');

var States = require('collections/states');
var ProcessView = require('views/process');

require('./modal');
// $.ajaxSetup({
//     headers: {
//         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//     }
// });


var states = new States();

states.fetch().then($.proxy(function () {
    var processView = new ProcessView({states: states});

    $('#process').html(processView.render().el);
}, this));







