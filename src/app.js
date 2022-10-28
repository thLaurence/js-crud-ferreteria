const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const invRoutes = require('./routes/inv');
var fs = require("fs");

const path = require('path');

const app = express();
app.set('port', 4000);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// CONEXIÓN LOCAL
app.use(myconnection(mysql, {
    host: "localhost",
    user: "root",
    password: "",
    database: "ferreteria"
}, 'single'));

app.listen(app.get('port'), () =>{
    console.log('Puerto utilizado ', app.get('port'));
});

app.use('/', invRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.use(express.static(path.join(__dirname, '/public')));

