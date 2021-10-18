const express = require("express");
const router = express.Router();
const withAuth = require("./../middleware");

const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

router.use(morgan(":date :method :url :status :response-time ms"));
router.use(helmet());
router.use(compression());

router.get("/", withAuth, async (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
