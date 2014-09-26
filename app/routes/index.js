var Expense = require('./../models/expense');
var express = require('express');

module.exports = function(app) {

    var router = express.Router();

    // backend routes =========================================================

    router.use(function(req,res,next){
        console.log('Something is requested via the API');
        next();
    })

    app.use('/api',router);

    require('./expense')(router);
    require('./revenue')(router);


    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });


};
