var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://172.17.7.92:27017/umpack');

var ActionSchema = new Schema({
    name: String,
    pattern: String,
    verbGet: Boolean,
    verbPost: Boolean,
    verbPut: Boolean,
    verbDelete: Boolean

});

var RoleActionSchema = new Schema({
    name: String,
    actions: [ActionSchema]

});

var RoleActions = mongoose.model('RoleActions', RoleActionSchema);

function saveRole(newRole) {

    var dbPromise = RoleActions.findOne({ 'name': newRole.name }).exec();

    return dbPromise
        .then(function(result) {

            if (result)
                throw new Error('role name already exists');

            var newRoleActions = new RoleActions({
                name: newRole.name,
                ations: []
            });

            return newRoleActions.save();

        })
        .then(function(result) {

            return {
                id: result._id,
                name: result.name,
                actions: []
            };


        });

}

function loadRoles() {

    var dbPromise = RoleActions.find({}).exec();
    return dbPromise
        .then(function(result) {

            return result.map(function(item) {
                return {
                    id: item._id,
                    name: item.name,
                    actions: item.actions //TODO map actions 
                }
            })
        });

}

function addActionInRole(roleId, newAction) {

    newAction._id = mongoose.Types.ObjectId();

    var dbPromise = RoleActions.findByIdAndUpdate(roleId, { $push: { 'actions': newAction } }, { safe: true, upsert: true, new: true }).exec();

    return dbPromise.then(function(result) {

        return {
            id: newAction._id,
            name: newAction.name,
            pattern: newAction.pattern,
            verbGet: newAction.verbGet,
            verbPost: newAction.verbPost,
            verbPut: newAction.verbPut,
            verbDelete: newAction.verbDelete
        };
    })


}


module.exports = {
    saveRole: saveRole,
    loadRoles: loadRoles,
    addActionInRole: addActionInRole
}
