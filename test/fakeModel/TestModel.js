var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multiUpdate = require('../../index');

var TestSchema = new Schema({
    foo: new Schema({
        bar: {
            type: String
        }
    }),
    baz: {
        type: String
    },
    fooArray: {
        type: Array
    }
});

TestSchema.plugin(multiUpdate);

var TestModel = mongoose.model('Test', TestSchema);

module.exports = TestModel;