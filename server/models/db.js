const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/SubmissionDB';
mongoose.connect(connectionString, {useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex: true}, (err)=>{
    if(!err) {console.log('MongoDB connection succeeded.')}
    else {console.log('Error in db connection : ' + err)}
});

require('./submission.model');
require('./routeid.model');
require('./blog.model');
require('./user.model');