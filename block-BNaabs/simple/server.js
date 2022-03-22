var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();
app.use(logger('tiny'))
app.get('/',(res,req)=>{
    res.sendFile(__dirname+'/index.html')
})
// app.get('/new',(req,res)=>{
//     res.sendFile(__dirname+'/new.html')
// })
// app.post('/new',(req,res)=>{
    
// })
app.listen(3000,()=>{
    console.log('server listening on port 3k')
})