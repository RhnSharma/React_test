require('./models/db');
require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
const Logger = require('../logs/log');
const logger = new Logger('app');
const cors = require('cors');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(expressSession({secret:"yagami", saveUninitialized:false, resave:false}));
app.use(cors());

app.use(express.static(path.join(__dirname,'../client/build')));

app.use(require('./routes'));

app.listen(process.env.PORT || 5000, ()=>{
    logger.info("APP LAUNCHED AT PORT 5000");
    console.log(`Server is up at port ${process.env.PORT}`);
})