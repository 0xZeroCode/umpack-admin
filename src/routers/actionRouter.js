var router = require('express').Router();



router.post('/', function(req, res, next) {
    console.log(req.body);

    //var newAction = { name: 'my new action', pattern: 'api/newaction/*', get:true,post:true,put:true,delete:true };
    var newAction = req.body;
    res.send({ data: newAction });
})




module.exports = router;
