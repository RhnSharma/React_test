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

router.get('/:id', async (req,res) => {
    blog = await Blog.findById(req.params.id);
    res.send(blog);
})

module.exports = router;