const express = require('express')
const path = require('path');
const app = express()

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/despedida', function(req, res){
    res.send('Bye bye amiguito :c')
})

app.get('/pagina', function(req, res){
    res.sendFile(path.join(_dirname, '/index.html'));
});

app.listen(3000)
console.log('Server started at http://localhost:3000');