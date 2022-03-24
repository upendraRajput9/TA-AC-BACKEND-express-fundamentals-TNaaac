var express = require('express');
var logger = require('morgan');
var path = require('path')
var cookieParser = require('cookie-parser')

//instantiate the app
var app = express();



//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname+"/public"));
app.use(logger("dev"));
app.use(cookieParser());


app.use((req,res,next)=>{
    res.cookie('username','xyz');
    next()
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get('/users',(req,res)=>{
    res.send('WELCOME to user page')
})
app.get('/projects',(req,res)=>{
    res.sendFile(__dirname+"/projects.html")
})
app.use((req,res,next)=>{
    res.send('Page not found')
})
app.use((err,req,res,next)=>{
    res.status(500).send(err)
})


app.listen(4000,()=>{
    console.log('server listening on port 4k')
})