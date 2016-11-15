var User = require('../models/user');

function getUsers() {
    return User.find({}).exec()
        .then(function(users) {
            return users;
        });
}

function assignRoleToUser(id, role) {
    return User.findOne({
            _id: id
        }).exec()
        .then(function(user) {
            user.assignRole(role);

            return user.save();
        });
}

function unassignRoleToUser(id, role) {
    return User.findOne({
            _id: id
        }).exec()
        .then(function(user) {
            user.unassignRole(role);

            return user.save();
        });
}


module.exports = {
    getUsers: getUsers,
    assignRoleToUser: assignRoleToUser,
    unassignRoleToUser: unassignRoleToUser
};
