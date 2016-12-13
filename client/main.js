import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {routes} from '/imports/startup/client/routes.jsx';
import 'moment/locale/da';
import moment from 'moment';

Meteor.startup(() => {
    moment.locale('da');
    render(routes(), document.getElementById('root'));
});