var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

var roleRouter = require('./routers/roleRouter');
var actionRouter = require('./routers/actionRouter');
var userRouter = require('./routers/userRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('../public'));

mongoose.connect('mongodb://172.17.7.92:27017/umpack');

app.use('/api/roles', roleRouter);
app.use('/api/actions', actionRouter);
app.use('/api/users', userRouter);

app.use(function(req, res, next) {
    res.redirect('/');
});

app.listen(3000, function() {
    console.log('umpack admin panel started');
});
