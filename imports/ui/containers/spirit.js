import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {Spirits} from "/imports/api/spirits/spirits.js";

export default (component) => {
    return createContainer(({params}) => {
        const handle = Meteor.subscribe("spirit", params.id);

        return {
            loading: !handle.ready(),
            spirit: Spirits.find(params.id).fetch()[0]
        }
    }, component);
}