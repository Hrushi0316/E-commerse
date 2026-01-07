const app = require("./src/app");
require("dotenv").config({silent:true});//silent is used to avoid in case of any warnings if .env file is missing.
const port = 3001;
require("./src/db/db")

app.listen(port,(req,res)=>{
    console.log(`✅ Server is running in the port ${port}.`)
});