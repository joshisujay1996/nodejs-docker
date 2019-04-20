var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


//import the link to connect to db
var config = require('../controller/database');


//import the created user models
var Jobs = require("../models/jobs");

router.post('/delete',function(req,res) {
    //to get the recode with the respective jobid, so then we can delete it.
   Jobs.find({ jobid:req.body.jobid},function (err,jobs) {
       if(jobs[0] === undefined){
           // return next(err);


           res.render('error',{whatKind: "The requested job to be deleted does not exist"}) ;
       }else {
           var rem = jobs[0]['_id'];
           Jobs.findByIdAndRemove(rem).exec();
           res.redirect('jobs');
       }
        // console.log(jobs);

   });



});
//route to delete page
router.get('/delete',function (req,res,next) {
    res.render('delete');

});



//export the module
module.exports = router;