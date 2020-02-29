const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const Submission = mongoose.model('Submission');

router.use(morgan(':date :method :url :status :response-time ms'));
router.use(helmet());
router.use(compression());

router.get('/', async (req,res) => {
    submissions = await Submission.find();
    submissions.forEach(submission => {
        submission.image.data = Buffer.from(submission.image.data).toString('base64');
        return submission.image.data;
     })
})

module.exports = router;