
var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userLoginSchema = new Schema({
    userName : { type: 'String', required: true },
    password : { type: 'String', required: true }
});

var loginDB = mongoose.model('UserDetails', userLoginSchema);

module.exports = loginDB;