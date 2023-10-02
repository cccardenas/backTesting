const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  fullName: {
    type: String
    ,
    required: true
  },
  username: {
    type: String
    ,
    required: false
  },
  email: {
    type: String
    ,
    required: true
  },
  password:{
    type: String
    ,
    required: false
  }
});

module.exports = mongoose.model("User", UserSchema);
