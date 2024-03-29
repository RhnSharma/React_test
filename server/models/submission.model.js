const mongoose = require("mongoose");

var submissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is required.",
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  newDoc: {
    type: Boolean,
    default: true,
  },
});

mongoose.model("Submission", submissionSchema);
