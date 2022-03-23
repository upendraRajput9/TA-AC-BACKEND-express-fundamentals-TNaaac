var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));

app.use((req,res,next)=>{
    if (req.url === "/admin") {
        return next("Unauthorized user");
      }
      // other let it pass to next middleware by simply calling next()
      next();
})

app.get('/',(req,res)=>{
    res.send('WELCOME')
})
app.get('/about',(req,res)=>{
    res.send('WELCOME TO ABOUT PAGE')
})

app.use((req,res,next)=>{
    res.send('PAGE NOT FOUND')
})

app.use((err,req,res,next)=>{
    res.send(err)
})


app.listen(3000,()=>{
    console.log('server listening on port 3k');
})