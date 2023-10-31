const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser')
const app = express()
const PORT = 3030;

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/',(req,res)=> res.sendFile(path.join(__dirname, 'views','home.html')))
app.get('/registro',(req,res)=> res.sendFile(path.join(__dirname, 'views','registro.html')))
app.post('/registro',(req,res)=> {
    console.log(req.body);
    res.redirect("/")
})
app.listen(PORT,() => console.log(`server running http://localhost:${PORT}`));