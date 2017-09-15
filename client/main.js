import React from 'react';
import {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import routes from '/imports/startup/client/routes';
import '/node_modules/normalize.css/normalize.css';

Meteor.startup(() => {
  render(routes, document.getElementById('root'));
});