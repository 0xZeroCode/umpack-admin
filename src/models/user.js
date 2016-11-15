var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

var UserSchema = new Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    additionalInfo: String,
    isActivated: Boolean,
    roles: [String]
});

UserSchema.methods.assignRole = function(role) {
    if (this.roles.indexOf(role) > -1) return;

    this.roles.push(role);
};

UserSchema.methods.unassignRole = function(role) {
    var index = this.roles.indexOf(role);

    if (index === -1) return;

    this.roles.splice(index, 1); //TODO if user has only one role? what should be done?
};

module.exports = mongoose.model('User', UserSchema);
