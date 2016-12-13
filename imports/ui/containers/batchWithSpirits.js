import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {Batches} from "/imports/api/batches/batches.js";
import {Spirits} from "/imports/api/spirits/spirits.js";

export default (component) => {
    return createContainer(({params}) => {
        const batchHandle = Meteor.subscribe("batch", params.id);
        const spiritsHandle = Meteor.subscribe("spirits");

        return {
            loading: !(batchHandle.ready() && spiritsHandle.ready()),
            batch: Batches.find(params.id).fetch()[0],
            spirits: Spirits.find().fetch()
        }
    }, component);
}
