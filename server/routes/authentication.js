const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const colors = require('colors');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

router.use(morgan(':date :method :url :status :response-time ms'));
router.use(helmet());
router.use(compression());

router.post('/', async (req,res)=>{
    const { email, password } = req.body;
    User.findOne({ email }, function(err, user) {
        if (err) {
          console.error(err);
          res.status(500)
            .json({
            error: 'Internal error please try again'
          });
        } else if (!user) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
            });
        } else {
          user.isCorrectPassword(password, function(err, same) {
            if (err) {
              res.status(500)
                .json({
                  error: 'Internal error please try again'
              });
            } else if (!same) {
              res.status(401)
                .json({
                  error: 'Incorrect email or password'
              });
            } else {
              // Issue token
              const payload = { email };
              const token = jwt.sign(payload, secret, {
                expiresIn: '1h'
              });
              res.cookie('token', token, { httpOnly: true })
                .sendStatus(200);
            }
          });
        }
      });
});

module.exports = router;