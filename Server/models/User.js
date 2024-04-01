const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required : true,
    min: 3,
    max: 30,
    unique: true
  },
  email: {
    type: String,
    required : true,
    unique: true,
    max: 50
  },
  password: {
    type: String,
    required : true,
    min: 8,
  },
  date: {
    type: Date,
    default: Date,
  },
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
