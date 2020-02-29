const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const Submission = mongoose.model('Submission');
let image,submission,imageData;

router.use(morgan(':date :method :url :status :response-time ms'));
router.use(helmet());
router.use(compression());

router.get('/:id', async (req,res) => {
submission = await Submission.findById(req.params.id);
if(submission){
    image = Buffer.from(submission.image.data).toString('base64');
    imageData = `"data:image/jpeg;base64,${image}"`;
    res.send(imageData);
}
else {
    res.send('Image not found!');
}
})

module.exports = router;