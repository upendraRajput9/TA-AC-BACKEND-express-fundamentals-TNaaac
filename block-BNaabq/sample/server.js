var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();
app.use(logger('dev'))

app.use((req,res,next)=>{
    res.cookie("username", "suraj");
    next();
})
app.get('/about',(req,res)=>{
    res.send(`Welcome`)
})
app.listen(3000,()=>{
    console.log('server listening on port 3k')
})