const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Submission = mongoose.model('Submission');
const Logger = require('../../logs/log');
const logger = new Logger('app');
const uuidv4 = require('uuid/v4');
const RouteID = mongoose.model('RouteID');
const colors = require('colors');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const storage = multer.memoryStorage();
let multerError;
const upload = multer({ 
  storage: storage,
  fileFilter: (res, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null,false);
      multerError = {'msg' : 'Only png,jpeg and jpg are allowed.','param':'image'};
      return multerError;
    }
  },
  limits: { fileSize: 1024 * 1024 }
 });

const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

router.use(morgan(':date :method :url :status :response-time ms'));
router.use(helmet());
router.use(compression());

router.post('/',upload.single('image'), async (req,res)=>{
let start = Date.now();
// let routeid = new RouteID();
// let id = req._id;
// await RouteID.findOne({name:req.originalUrl}, (err,doc) => { 
// if (err) throw err;
// if(doc)
// {
//   id = doc.id;
//   console.log('ID ALREADY EXISTS!'.green,id.red);
// } 
// else
// {
// routeid.id = uuidv4();
// routeid.name = req.originalUrl;
// id = routeid.id;
// routeid.save()
// .then(data=>{
//     console.log('ID CREATED'.green,data.id.red);
//     logger.info('ID CREATED',data.id);
// })
// .catch(err=> {
//     console.log('Error during ID creation : ' + err)
//     logger.error('ERROR DURING ID creation',err);
// });
// }
req.check('name','Invalid name').trim().isLength({min:2});
req.check('email','Invalid email').trim().isEmail();
req.check('message','Invalid message').trim().isLength({min:1});

let errors = req.validationErrors();

// const body = req.body;
//   let error = {};
//   // Adding body of the request as log data
//   logger.setLogData(body);
//   logger.info(req.method,"Request received at /submit", req.body);
//   // We are expecting name,email and message in the body of the request
//   if (body.name == null || body.name == "") {
//     logger.error("Name field is empty")
//     error["name"] = "name field is empty"
//   }
//   if (body.email == null || body.email == "") {
//     logger.error("Email field is empty")
//     error["email"] = "email field is empty"
//   }
//   if (body.message == null || body.message == "") {
//     logger.error("Messsage field is empty")
//     error["message"] = "message field is empty"
//   }
// else{
//   logger.info("Return success response", {
//     "success": true
//   })
// }
if(errors){
  res.status(422).send(errors);
}else{
    var submission = new Submission();
    submission.name = req.body.name;
    submission.email = req.body.email;
    submission.message = req.body.message;
    submission.createdAt = new Date(Date.now()).toString();
    // submission.image.id  = `${req.body.name}-${req.file.originalname}`;
    submission.image.data = req.file.buffer;
    submission.image.contentType = 'image/jpeg';
    submission.save()
    .then(data=>{
      res.send(data);
      console.log('No errors during record insertion'.green,colors.green(data));
      logger.info('DATA INSERTED WITHOUT ANY ERROR');
    })
    .catch(err=> {
      console.log('Error during record insertion : '.red,colors.red(err));
      logger.error('ERROR DURING DATA INSERTION',err);
    });
    console.log(`Execution Time(POST /submit) is ${Date.now() - start}ms`.green);
    morgan(':date :method :url :status :response-time ms');
    logger.info(req.method,`request id: ${id} | Execution Time : ${Date.now() - start}ms`);
}
});

module.exports = router;
