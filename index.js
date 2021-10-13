const path = require("path")
const express = require("express");
const app = express();


const staticpath = path.join(__dirname,"public");
app.use(express.static(staticpath));


app.get("/",(req,res)=>{
    res.send("<h1>hi Syed burhan ali shah</h1>")
})
app.get("/about",(req,res)=>{
    res.send("wellcome to about Page")
})
app.get("/contact",(req,res)=>{
    res.send("wellcome to Contact Page")
})
app.listen(8080,()=>{
    console.log("listening port 8080");
})