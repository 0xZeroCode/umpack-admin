var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var roleRouter = require('./routers/roleRouter');
var actionRouter = require('./routers/actionRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('../public'));

app.use('/api/roles',roleRouter);
app.use('/api/actions',actionRouter);

app.use(function(req, res, next) {
    res.redirect('/');
});

app.listen(3000, function() {
    console.log('umpack admin panel started');
})
