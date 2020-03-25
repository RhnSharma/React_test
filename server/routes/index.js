const express = require('express');
const router = express.Router();
const Logger = require('../../logs/log');
const logger = new Logger('app');
const uuidv4 = require('uuid/v4');
const mongoose = require('mongoose');
const RouteID = mongoose.model('RouteID');
const colors = require('colors');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

morgan.token('host', (req, res) => {
    return req.hostname;
})

router.use('/submit',require('./submit'));
router.use('/getAll',require('./all'));
router.use('/getBlogs',require('./blogs'));
router.use('/getBlog',require('./blog'));
router.use('/addblogpost',require('./addblog'));
router.use('/editblogpost',require('./editblog'));
router.use('/deleteblogpost',require('./deleteblog'));
router.use('/adduser',require('./users'));
router.use('/authenticate',require('./authentication'));
router.use('/checktoken',require('./checktoken'));
router.use('/getImage',require('./image'));
router.use(morgan(':date :method :url :status :response-time ms'));
router.use(helmet());
router.use(compression());

router.get('/', async  (req,res) => {
let start = Date.now();
let id = req._id;
let routeid = new RouteID();
await RouteID.findOne({name:req.originalUrl}, (err,doc) => { 
if (err) throw err;
if(doc)
{
id = doc.id;
console.log('ID ALREADY EXISTS!'.green,id.red);
} 
else
{
routeid.id = uuidv4();
routeid.name = req.originalUrl;
id = routeid.id;
routeid.save()
.then(data=>{
    console.log('ID CREATED'.green,data.id.red);
    logger.info('ID CREATED',data.id.green);
})
.catch(err=> {
    console.log('Error during ID creation : ' + err)
    logger.error('ERROR DURING ID creation',err);
});
}
});
req.session.errors = null;
req.session.success = null;
res.sendFile(path.join(__dirname, '../client/build/index.html'));

console.log(`Execution Time(GET /) is ${Date.now() - start}ms and ID is ${id}`.green);
morgan(':date :method :url :status :response-time ms');
logger.info(req.method,`APP STARTED | request id: ${id} | Execution Time : ${Date.now() - start}ms`);
});

module.exports = router;