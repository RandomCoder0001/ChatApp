const express = require('express');
const dotenv = require("dotenv");

const app = express();


app.get("/" ,(req , res)=>{
    res.send("hi");
})

const PORT = process.env.PORT || 5000;

app.listen(5000 , ()=> {
    console.log("server active at 5000");
})