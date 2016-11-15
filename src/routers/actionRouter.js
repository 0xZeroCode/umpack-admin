var router = require('express').Router();
var db = require('./db');


router.post('/', function(req, res, next) {
    db.addActionInRole(req.body.roleId, req.body.action)
        .then(function(result) {
            
            res.send({ data: result });

        })
        .catch(function(err) {
            res.status(400).send(err.message);
        })

    

})




module.exports = router;
