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

app.use(require('./routes'));

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(process.env.port || 5000, ()=>{
    logger.info("APP LAUNCHED AT PORT 5000");
    console.log('Server is up at port 5000');
})