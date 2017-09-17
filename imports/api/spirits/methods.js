import Joi from 'joi';
import Spirits from '/imports/api/spirits/spirits.js';
import ValidatedMethod from '/imports/api/ValidatedMethod';

export const create = new ValidatedMethod({
  name: 'spirits.create',

  schema: Joi.object().keys({
    name: Joi.string().required(),
    abv: Joi.number().required(),
    recipe: Joi.string().required(),
    process: Joi.array().min(1).required(),
  }),

  run({name, abv, recipe, process}) {
    return Spirits.insert({
      name, abv, recipe, process,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  },
});