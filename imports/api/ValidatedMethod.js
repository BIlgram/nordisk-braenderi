import {Meteor} from 'meteor/meteor';

export class ValidatedMethod {
  constructor({name, options = {}, schema = null, run}) {
    this.name = name;
    this.options = Object.assign({}, {
      returnStubValue: true,
      throwStubExceptions: true,
    }, options);
    this.schema = schema;
    this.run = run;

    Meteor.methods({
      [this.name]: (args) => {
        return this._execute(args);
      },
    });
  }

  _execute(args) {
    const result = this.schema.validate(args);
    if (result.error) {
      throw result;
    }
    return this.run(args);
  }

  call(args, callback) {
    try {
      return Meteor.apply(this.name, [args], this.options, callback);
    } catch (err) {
      if (callback) callback(err);
      else throw err;
    }
  }
}

export default ValidatedMethod;