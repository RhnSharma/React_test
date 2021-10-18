const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Blog = mongoose.model("Blog");
const colors = require("colors");
const withAuth = require("./../middleware");

const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

router.use(morgan(":date :method :url :status :response-time ms"));
router.use(helmet());
router.use(compression());

router.post("/:slug", withAuth, async (req, res) => {
  req.check("title", "Invalid title").trim().isLength({ min: 2 });
  req.check("description", "Invalid description").trim().isLength({ min: 2 });
  req.check("post", "Invalid post body").trim().isLength({ min: 1 });

  let errors = req.validationErrors();
  if (errors) {
    res.status(400).send(errors);
  } else {
    const doc = await Blog.findOne({ slug: req.params.slug });
    doc.title = req.body.title;
    doc.description = req.body.description;
    doc.post = req.body.post;
    doc
      .save()
      .then((data) => {
        res.send(data);
        console.log("Post updated".green, colors.green(data));
      })
      .catch((err) => console.log(colors.red(err)));
    morgan(":date :method :url :status :response-time ms");
  }
});

module.exports = router;
