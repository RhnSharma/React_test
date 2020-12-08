const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const Blog = mongoose.model("Blog");

router.use(morgan(":date :method :url :status :response-time ms"));
router.use(helmet());
router.use(compression());

router.get("/", async (req, res) => {
  blogs = await Blog.find().sort({ createdAt: -1 });
  res.send(blogs);
});

module.exports = router;
