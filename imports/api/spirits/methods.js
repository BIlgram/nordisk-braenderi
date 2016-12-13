import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {ValidatedMethod} from 'meteor/mdg:validated-method';

import {Spirits} from '/imports/api/spirits/spirits.js';

export const create = new ValidatedMethod({
    name: 'spirits.create',

    validate: new SimpleSchema({
        name: {type: String, unique: true, min: 1},
        abv: {type: Number, min: 1},
        recipe: {type: String, optional: true},
        process: {type: [String], minCount: 1},
    }).validator(),

    run({name, abv, recipe, process}) {
        return Spirits.insert({
            name: name,
            abv: abv,
            recipe: recipe,
            process: process,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
});

export const update = new ValidatedMethod({
    name: 'spirits.update',

    validate: new SimpleSchema({
        id: {type: String},
        name: {type: String, unique: true, min: 1},
        abv: {type: Number, min: 1},
        recipe: {type: String, optional: true},
        process: {type: [String], minCount: 1},
    }).validator(),

    run({id, name, abv, recipe, process}) {
        return Spirits.update(id, {
            $set: {
                name: name,
                abv: abv,
                recipe: recipe,
                process: process,
                updatedAt: new Date()
            }
        });
    }
});

export const remove = new ValidatedMethod({
    name: 'spirits.remove',

    validate: new SimpleSchema({
        id: {type: String}
    }).validator(),

    run({id}) {
        return Spirits.update(id, {
            $set: {deletedAt: new Date()}
        });
    }
});

export const restore = new ValidatedMethod({
    name: 'spirits.restore',

    validate: new SimpleSchema({
        id: {type: String}
    }).validator(),

    run({id}) {
        return Spirits.update(id, {
            $unset: {deletedAt: ''}
        });
    }
});