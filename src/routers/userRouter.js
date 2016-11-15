var router = require('express').Router();
var userInteractor = require('../interactors/userInteractor');


router.get('/', function(req, res, next) {
    userInteractor.getUsers()
        .then(function(result) {
            res.send({
                data: result
            });
        })
        .catch(function(err) {
            res.status(400).send(err.message);
        });
});


router.put('/:id/roles/:role', function(req, res, next) {
    userInteractor.assignRoleToUser(req.params.id, req.params.role)
        .then(function() {
            res.send();
        })
        .catch(function(err) {
            res.status(400).send(err.message);
        });
});

router.delete('/:id/roles/:role', function(req, res, next) {
    userInteractor.unassignRoleToUser(req.params.id, req.params.role)
        .then(function() {
            res.send();
        })
        .catch(function(err) {
            res.status(400).send(err.message);
        });
});



module.exports = router;
