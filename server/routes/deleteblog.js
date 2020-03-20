const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const Blog = mongoose.model('Blog');
const withAuth = require('./../middleware');

router.use(morgan(':date :method :url :status :response-time ms'));
router.use(helmet());
router.use(compression());

router.delete('/:slug', withAuth, async (req,res) => {
    await Blog.findOneAndRemove({slug : req.params.slug},(err) => {
        if (err) throw err;
    });
})

module.exports = router;