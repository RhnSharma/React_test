require('./models/db');
const express = require('express');
const hbs  = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
const Logger = require('../logs/log');
const logger = new Logger('app');
const cors = require('cors');

let app = express();
// var toHttps = require('express-to-https').basic;
// app.use(toHttps);
app.set('view engine', hbs);
app.use(express.static(__dirname + './../views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(expressSession({secret:"yagami", saveUninitialized:false, resave:false}));
app.use(cors());

app.use(require('./routes'));

app.listen(5000, ()=>{
    logger.info("APP LAUNCHED AT PORT 5000");
    console.log('Server is up at port 5000');
})