import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {Spirits} from "/imports/api/spirits/spirits.js";

export default (component) => {
    return createContainer(() => {
        const handle = Meteor.subscribe("spirits");

        return {
            loading: !handle.ready(),
            spirits: Spirits.find().fetch()
        }
    }, component);
}