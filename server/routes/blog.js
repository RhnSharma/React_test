const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const Blog = mongoose.model('Blog');

router.use(morgan(':date :method :url :status :response-time ms'));
router.use(helmet());
router.use(compression());

router.get('/:slug', async (req,res) => {
    blog = await Blog.findOne({ slug : req.params.slug });
    res.send(blog);
})

module.exports = router;