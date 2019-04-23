var express = require('express');
//router for api calls
var router = express.Router();
//ORM for mongoDB
var mongoose = require('mongoose');

//import the link to connect to db
var config = require('../controller/database');

//import the created user models
var Jobs = require("../models/jobs");


//getting the add page, so that user can post
router.get('/add',function(req,res,next){
    res.render('post-jobs.hbs');
});

//POST req to add jobs
router.post('/add',function(req,res,next){
    if( !req.body.jobid || !req.body.jobtitle || !req.body.jobdescription
        || !req.body.jobtype )
    //checking if all fields are entered
    {
        res.json({success: false, msg: 'Please enter all required details'});}
        else{
            //if all fields are entered, create a new job
            var newJob = new Jobs({
                jobid : req.body.jobid,
                jobtype: req.body.jobtype,
                jobtitle: req.body.jobtitle,
                jobdescription: req.body.jobdescription
            });
            //save the job
            newJob.save(function (err) {
                if (err){
                    //handling error, if jobid already exists
                    res.render('error', {whatKind: "The job already exists with the given Job ID"});


                }else   {
                    res.redirect('jobs');
                    // res.json({success:true, msg:"new job has been created"})
                }


            });
        }


});







//export the module
module.exports = router;
