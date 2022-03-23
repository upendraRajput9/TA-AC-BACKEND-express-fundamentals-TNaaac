var express= require('express');
var logger = require('morgan');
const path = require('path');
var fs = require('fs');
const cookieParser = require('cookie-parser');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger('tiny'))
app.use(cookieParser())
//routs

app.use('/server',(req,res,next)=>{
next('unauthorized user')
})

app.use((req,res,next)=>{
    let count = req.cookies.count;

    if(count){
        res.cookie("count",count+1)
    }
    next()
})


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/about',(req,res)=>{
    res.send('My name is qwerty')
})
app.post('/form',(req,res)=>{
    res.send(req.body);
})
app.post('/json',(req,res)=>{
    let parse = JSON.stringify(req.body);
    res.send(parse);
})
app.get(`/users/:username`,(req,res)=>{
    var username = req.params.username;
    res.send(username)
})

app.use((req,res,next)=>{
    res.status(404).send('Page not found')
});
app.use((err,req,res,next)=>{
    res.status(500).send(err)
})

app.listen(3000,()=>{
    console.log(' server listening on port 3k')
})