var express = require("express");

var app = express();

//morgan logger
app.use((err,res,req,next)=>{
    console.log(err)
    console.log(req.methods,req.url)
    next()
})
app.use((res,req,next)=>{
    let parase = JSON.parse(req.body)
    console.log(parase);
    next()
})
app.use((req,res,next)=>{
    if (req.url.split(".").pop() === "css") {
        res.setHeader("Content-Type", "text/css");
        res.sendFile(__dirname+"/public/stylesheet/style.css")
      }else if(req.url.split(".").pop() === "png"){
        res.sendFile(__dirname+"/public/stylesheet/images.css")
      }
})
app.listen(3000,()=>{
    console.log('server listening on port 3k')
})