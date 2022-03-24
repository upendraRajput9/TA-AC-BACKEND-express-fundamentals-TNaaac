var express = require('express');
var logger = require('morgan');
var path = require('path')
var cookieParser = require('cookie-parser')
var app = express();


app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();
})
//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(logger());
app.use(cookieParser());
app.use(express.static(path.join(__dirname+'/public')));

app.use((req,res,next)=>{
    res.cookie('username','xyz');
    next()
})

app.get('/',(req,res)=>{
    res.send('WELCOME')
})

app.get('/users',(req,res)=>{
    res.send('WELCOME to user page')
})
app.use('/main',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.use('/projects',(req,res)=>{
    res.sendFile(path.join(__dirname+'/projects.html'))
})
app.use((req,res,next)=>{
    res.status(404).send('Page not found')
})
app.use((err,req,res,next)=>{
    res.status(500).send(err)
})


app.listen(4000,()=>{
    console.log('server listening on port 4k')
})