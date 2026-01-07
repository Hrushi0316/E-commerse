const mongoose  = require("mongoose");

const itemsSchma = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   image:{
    type:String,
    required:true
   },
   description:{
     type:String,
     required:true
   },
  vendor: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "vendor",
     required: true
   },
  category: {
     type: String
},
});

module.exports = mongoose.model('item',itemsSchma);