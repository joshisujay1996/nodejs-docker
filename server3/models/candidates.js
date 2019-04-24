//imports
var mongoose = require('mongoose');

//mongoose schema
var Schema = mongoose.Schema;

var CandidateSchema = new Schema({
    jobid: {
        type: Number,
        required : true
    },
    jobtitle:{
        type: String,
        required : true

    },
    email:{
        type : String,
        unique : true,
        required : true
    },
    username:{
      type:String,
      required :true
    },
    resume:{
        type:String,
        required :true

    },
    company:{type:String, default: "Pineapple, Inc"},
    //current format is epoch
    time : { type: String, default: (new Date()) }


});
//can also add time stamp for created and updated at time and data
// JobSchema.set('timestamps', true);

module.exports = mongoose.model('candidates', CandidateSchema);