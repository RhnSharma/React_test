const express = require('express');
const router = express.Router();
const Logger = require('../../logs/log');
const logger = new Logger('app');
const uuidv4 = require('uuid/v4');
const mongoose = require('mongoose');
const RouteID = mongoose.model('RouteID');
const colors = require('colors');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

morgan.token('host', (req, res) => {
    return req.hostname;
})

router.use('/submit',require('./submit'));
router.use('/getForm',require('./form'));
router.use('/getAll',require('./all'));
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
console.log(`Execution Time(GET /) is ${Date.now() - start}ms and ID is ${id}`.green);
morgan(':date :method :url :status :response-time ms');
logger.info(req.method,`APP STARTED | request id: ${id} | Execution Time : ${Date.now() - start}ms`);
});

module.exports = router;