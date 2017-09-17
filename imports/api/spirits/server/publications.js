import {Meteor} from 'meteor/meteor';
import {Spirits} from '/imports/api/spirits/spirits.js';

Meteor.publish('spirit', (id) => {
  return Spirits.find(id)
});

Meteor.publish('spirits', () => {
  return Spirits.find({
    deletedAt: {$exists: false}
  })
});

Meteor.publish('spirits.trash', () => {
  return Spirits.find({
    deletedAt: {$exists: true}
  })
});