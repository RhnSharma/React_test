const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const colors = require("colors");

const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

router.use(morgan(":date :method :url :status :response-time ms"));
router.use(helmet());
router.use(compression());

router.post("/", async (req, res) => {
  let user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user
    .save()
    .then((data) => {
      res.send(data);
      console.log("User Created".green, colors.green(data));
    })
    .catch((err) => {
      console.log("Error during user creation: ".red, colors.red(err));
    });
  morgan(":date :method :url :status :response-time ms");
});

module.exports = router;
