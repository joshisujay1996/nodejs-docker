var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//import the link to connect to db
var config = require('../controller/database');

//import the created user models
var Jobs = require("../models/jobs");

//route to get all jobs posted in the page.
router.get('/jobs', function(req, res) {
    Jobs.find({},function (err,jobs) {
        if(err) {
            //handling the error
            res.render('error',{whatKind:"Cannot find Jobs, Error with database"})
        }
        //rendering the page
        res.render('jobs',{list1 : jobs});

    });

});


//export the module
module.exports = router;