var express = require("express");

var app = express();

//morgan logger
app.use((err,res,req,next)=>{
    console.log(err)
    var today = new Data();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(req.methods,req.url,time)
    next()
})
app.use((res,req,next)=>{
    req.body = JSON.parse(req.body)
    next()
})
app.use((path,req,res,next)=>{

    req.url=req.url+path;
    next();
})
app.listen(3000,()=>{
    console.log('server listening on port 3k')
})