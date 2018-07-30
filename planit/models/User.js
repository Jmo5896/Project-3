const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  email: { 
    type: String, match: [/.+@.+\..+/, "Not a valid email"]
  },
  username: {
    type: String, unique: true, required: true, trim: true
    },
  password: {
     type: String, required: true 
    },
  // passwordConf: { 
  //   type: String, required: true 
  // },
  name: { 
    type: String 
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }


});


module.exports = User = mongoose.model('users', UserSchema);
