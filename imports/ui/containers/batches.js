import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {Batches} from "/imports/api/batches/batches.js";

export default (component) => {
    return createContainer(() => {
        const handle = Meteor.subscribe("batches");

        return {
            loading: !handle.ready(),
            batches: Batches.find().fetch()
        }
    }, component);
}