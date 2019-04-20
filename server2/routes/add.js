var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//import the link to connect to db
var config = require('../controller/database');

//import the created user models
var Jobs = require("../models/jobs");


router.get('/add',function(req,res,next){
    res.render('post-jobs.hbs');
});

//to add a job
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
                    res.render('error', {whatKind: "The job already exists with the given Job ID"});
                    // res.redirect('error', {whatkind : "job already exists with this id"});
                    // return res.json({success: false, msg: 'job already exists.'});

                }else   {
                    res.redirect('jobs');
                    // res.json({success:true, msg:"new job has been created"})
                }


            });
        }


});







//export the module
module.exports = router;
