var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : { type: 'String', required: true},
    lastName : { type: 'String', required: true},
    userName : { type: 'String', required: true },
    password : { type: 'String', required: true}
});

var mongodb = mongoose.model('UserDetails', userSchema);

module.exports = mongodb;