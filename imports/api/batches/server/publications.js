import {Meteor} from "meteor/meteor";
import {Batches} from "/imports/api/batches/batches.js";

Meteor.publish('batch', (id) => {
    return Batches.find(id)
});

Meteor.publish('batches', () => {
    return Batches.find({
        deletedAt: {$exists: false}
    })
});

Meteor.publish('batches.trash', () => {
    return Batches.find({
        deletedAt: {$exists: true}
    })
});
