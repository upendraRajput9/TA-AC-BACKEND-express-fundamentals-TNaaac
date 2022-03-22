var express = require('express');
var app = express();

app.use('/',(req,res,next)=>{
    console.log(req.method,req.url);
    next()
})
app.get('/',(req,res)=>{
    res.send('WELCOME')
})

app.listen(4000,()=>{
    console.log('server listening on port 4k')
})