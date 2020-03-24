require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true}, (err)=>{
    if(!err) {console.log('MongoDB connection succeeded.')}
    else {console.log('Error in db connection : ' + err)}
});

require('./submission.model');
require('./routeid.model');
require('./blog.model');
require('./user.model');