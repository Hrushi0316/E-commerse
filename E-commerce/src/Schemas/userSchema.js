const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },cart: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "item",   // refers to your product schema
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
});

module.exports = mongoose.model("user",userSchema);