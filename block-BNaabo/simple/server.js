var express = require('express');
var app = express();

app.use((req,res,next)=>{
    console.log(req.method,req.url)
    next()
})

app.use(express.json());
app.use(express.urlencoded({extened:false}))
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.send('WELCOME')
})

app.post('/json',(req,res)=>{
console.log(req.body)    
})

app.post('/contact',(req,res)=>{
    console.log(req.body)    
    })

app.listen(3000,()=>{
    console.log('server listening on port 3k')
})