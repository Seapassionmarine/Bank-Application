require("dotenv").config()
const mongoose = require ("mongoose")
const url = process.env.dbUrl


mongoose.connect(url)
.then(()=>{
    console.log("database established successfully");
}).catch((error)=>{
    console.log("error connecting to database because", error);
})