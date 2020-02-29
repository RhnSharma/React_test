const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const Submission = mongoose.model('Submission');
let document,name,email,message,image;

router.use(morgan(':date :method :url :status :response-time ms'));
router.use(helmet());
router.use(compression());


router.get('/', async (req,res) => {
    document = await Submission.findOne().sort({$natural:-1});
    image = new Buffer(document.image.data).toString('base64');
    name = document.name;
    email = document.email;
    message = document.message;
})

module.exports = router;
