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

router.post("/", withAuth, async (req, res) => {
  req.check("title", "Invalid title").trim().isLength({ min: 2 });
  req.check("description", "Invalid description").trim().isLength({ min: 2 });
  req.check("post", "Invalid post body").trim().isLength({ min: 1 });

  let errors = req.validationErrors();
  if (errors) {
    res.status(400).send(errors);
  } else {
    var blog = new Blog();
    blog.title = req.body.title;
    blog.description = req.body.description;
    blog.post = req.body.post;
    blog
      .save()
      .then((data) => {
        res.send(data);
        console.log(
          "No errors during record insertion".green,
          colors.green(data)
        );
      })
      .catch((err) => {
        console.log("Error during record insertion : ".red, colors.red(err));
      });
    morgan(":date :method :url :status :response-time ms");
  }
});

module.exports = router;
