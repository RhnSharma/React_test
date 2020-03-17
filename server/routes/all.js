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
    const updatedSubmissions = submissions.map(submission => (
        {
            id : submission._id,
            name : submission.name,
            email : submission.email,
            message : submission.message,
            createdAt : submission.createdAt,
            image : Buffer.from(submission.image.data).toString('base64') 
        }));
    res.send(updatedSubmissions);
})

module.exports = router;