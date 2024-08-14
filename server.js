const express = require ("express")
const cors = require('cors')
const router = require("./router/router")
require("./config/db")

const port = process.env.port || 2777

const app = express()
app.use(cors("*"))
app.use(express.json())
app.use('/api/v1/user',router)

app.listen(port,()=>{
    console.log("server is listening to port", port);
})

app.get("/", (req,res)=>{
    res.status(200).json({message:"HELLO WORLD"}) 
}) 