var router = require('express').Router();
var db = require('./db');



router.get('/', function(req, res, next) {

    db.loadRoles()
        .then(function(result) {
            res.send({ data: result });
        })
        .catch(function(err) {
            res.status(400).send(err.message);
        })


})


router.post('/', function(req, res, next) {


    var newRole = req.body;

    db.saveRole(newRole)
        .then(function(role) {
            res.send({ data: role });
        })
        .catch(function(err) {
            res.status(400).send(err.message);
        });



})




module.exports = router;
