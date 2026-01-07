const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
    companyName:{
      type:String,
      unique:true
    },
    email:{
     type:String,
     required:true,
     unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    phoneNo:{  
     type:Number,
     unique:true
    },
    address:{
        type:String,
        required:true
    }
}) ;

module.exports = mongoose.model("vendor",vendorSchema);