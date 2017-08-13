Mongoose Multi Update Plugin
============================

Mongoose plugin that allows you to update multiple fields at once.

## Installation
`npm install mongoose-multi-update --save`

## Usage
Require plugin in your schema
```javascript
// UserSchema.js
var multiUpdate = require('mongoose-multi-update');

var UserSchema = new Schema({
    username: String,
    email: String,
    address: new Schema({
        city: String,
        zip: Number,
        street: String,
        phone: String
    })
});

//require plugin
UserSchema.plugin(multiUpdate);
```
You may update one nested field: 
```javascript
User.findById('someID', function(err, user) {
    user
        .multiUpdate({
            address: {
                city: 'London'
            }
        })
        .save();
});

```
You may update all fields at once:
```javascript
User.findById('someID', function(err, user) {
    user
        .multiUpdate({
            username: 'John Doe',
            email: 'john_doe@gmail.com',
            address: {
                city: 'London',
                zip: 'EC2R 6AB'
            }
        })
        .save();
});
```