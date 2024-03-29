const express = require("express");
const router = express.Router();
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

morgan.token("host", (req, res) => {
  return req.hostname;
});

router.use("/submit", require("./submit"));
router.use("/getAll", require("./all"));
router.use("/getBlogs", require("./blogs"));
router.use("/getBlog", require("./blog"));
router.use("/addblogpost", require("./addblog"));
router.use("/editblogpost", require("./editblog"));
router.use("/deleteblogpost", require("./deleteblog"));
router.use("/adduser", require("./users"));
router.use("/authenticate", require("./authentication"));
router.use("/checktoken", require("./checktoken"));
router.use(morgan(":date :method :url :status :response-time ms"));
router.use(helmet());
router.use(compression());

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
