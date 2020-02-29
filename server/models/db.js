const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SubmissionDB', {useNewUrlParser : true, useUnifiedTopology : true}, (err)=>{
    if(!err) {console.log('MongoDB connection succeeded.')}
    else {console.log('Error in db connection : ' + err)}
});

require('./submission.model');
require('./routeid.model');