const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-commerse")
.then((res,rej)=>{
    console.log("✅ Database connected successfully!.")
}).catch((err)=>{
    console.log("Something went wrong.",err);
});