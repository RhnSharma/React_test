const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Submission = mongoose.model("Submission");
const Logger = require("../../logs/log");
const logger = new Logger("app");
const colors = require("colors");

const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

router.use(morgan(":date :method :url :status :response-time ms"));
router.use(helmet());
router.use(compression());

router.post("/", async (req, res) => {
  let start = Date.now();
  req.check("name", "Invalid name").trim().isLength({ min: 2 });
  req.check("email", "Invalid email").trim().isEmail();
  req.check("message", "Invalid message").trim().isLength({ min: 1 });

  let errors = req.validationErrors();

  if (errors) {
    res.status(400).send(errors);
  } else {
    var submission = new Submission();
    submission.name = req.body.name;
    submission.email = req.body.email;
    submission.message = req.body.message;
    submission.createdAt = new Date(Date.now()).toString();
    submission
      .save()
      .then((data) => {
        res.send(data);
        console.log(
          "No errors during record insertion".green,
          colors.green(data)
        );
        logger.info("DATA INSERTED WITHOUT ANY ERROR");
      })
      .catch((err) => {
        console.log("Error during record insertion : ".red, colors.red(err));
        logger.error("ERROR DURING DATA INSERTION", err);
      });
    console.log(
      `Execution Time(POST /submit) is ${Date.now() - start}ms`.green
    );
    morgan(":date :method :url :status :response-time ms");
  }
});

module.exports = router;
