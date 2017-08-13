var chai = require('chai');
var expect = chai.expect;
var TestModel = require('./fakeModel/TestModel');

var _getFakeModel = function () {
    return new TestModel({
        foo: {
            bar: 'Bar'
        },
        baz: 'Baz',
        fooArray: [
            'One',
            'Two',
            'Three'
        ],
        booleanField: false
    });
};

describe('Multi Update Plugin Test Case', function () {
    it('Should update one nested field', function () {
        var model = _getFakeModel();
        expect(model.foo.bar).to.equals('Bar');
        expect(model.baz).to.equals('Baz');
        expect(model.fooArray[0]).to.equals('One');
        expect(model.fooArray[1]).to.equals('Two');
        expect(model.fooArray[2]).to.equals('Three');

        model.multiUpdate({
            foo: {
                bar: 'Baz'
            }
        });
        expect(model.foo.bar).to.equals('Baz');
        expect(model.baz).to.equals('Baz');
        expect(model.fooArray[0]).to.equals('One');
        expect(model.fooArray[1]).to.equals('Two');
        expect(model.fooArray[2]).to.equals('Three');
    });

    it('Should update all fields', function () {
        var model = _getFakeModel();
        expect(model.foo.bar).to.equals('Bar');
        expect(model.baz).to.equals('Baz');
        expect(model.fooArray[0]).to.equals('One');
        expect(model.fooArray[1]).to.equals('Two');
        expect(model.fooArray[2]).to.equals('Three');

        model.multiUpdate({
            foo: {
                bar: 'Baz'
            },
            baz: 'Bar',
            fooArray: [
                'One',
                'Two',
                'Four'
            ]
        });
        expect(model.foo.bar).to.equals('Baz');
        expect(model.baz).to.equals('Bar');
        expect(model.fooArray[0]).to.equals('One');
        expect(model.fooArray[1]).to.equals('Two');
        expect(model.fooArray[2]).to.equals('Four');
    });

    it('Should update boolean field', function () {
        var model = _getFakeModel();
        expect(model.booleanField).to.equals(false);

        model.multiUpdate({
            booleanField: true
        });
        expect(model.booleanField).to.equals(true);
    })
});