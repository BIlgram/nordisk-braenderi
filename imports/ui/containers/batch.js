import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {Batches} from "/imports/api/batches/batches.js";

export default (component) => {
    return createContainer(({params}) => {
        const handle = Meteor.subscribe("batch", params.id);

        return {
            loading: !handle.ready(),
            batch: Batches.find(params.id).fetch()[0]
        }
    }, component);
}