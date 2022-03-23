var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();
app.use(logger('tiny'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/new',(req,res)=>{
    res.sendFile(__dirname+'/new.html')
})
app.post('/new',(req,res)=>{
    console.log(res.body)
   res.json(res.body)
})

app.get('/user/:username',(res,req)=>{
    var username =req.params.username;
    res.send(username)
})
app.listen(3000,()=>{
    console.log('server listening on port 3k')
})