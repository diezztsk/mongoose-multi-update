var _multiUpdate = function (model, values) {
    var keys = Object.keys(values);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];

        if (undefined === model[key]) {
            continue;
        }

        var value = values[key];
        if ('object' === typeof value && false === Array.isArray(value)) {
            _multiUpdate(model[key], value)
        } else {
            model[key] = value;
        }
    }
};

module.exports = function multiUpdatePlugin(schema, options) {
    schema.methods.multiUpdate = function (values) {
        _multiUpdate(this, values);
        return this;
    };
};
