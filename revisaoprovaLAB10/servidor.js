require("colors");
var http = require ("http");
var express = require ("express");
var mongodb = require("mongodb");
let bodyParser = require("body-parser")

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://hammadehadam:rTedh6tGS0g0U7He@adam.6tzqch3.mongodb.net/?retryWrites=true&w=majority&appName=Adam'
const client = new MongoClient(uri, { useNewUrlParser: true });
const path = require('path');

var dbo = client.db("Adam");
var usuarios = dbo.collection("usuarios");

var app = express ();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor Rodando..." .rainbow);


<!DOCTYPE html>
<html>
    <head>
        <title>servidor</title>
        <meta charset="utf-8">
        <link href="estilo.css" rel="stylesheet">
    </head>
    <body>
        <h1>Servidor rodando...</h1>
    </body>
</html>


