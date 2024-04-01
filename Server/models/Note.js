const mongoose = require('mongoose')
const { Schema } = mongoose;
const NotesSchema = new Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  },
  title:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  tag:{
    type: String,
    delete : "General"
  },

  date:{
    type: Date,
    default: Date
  }
  });

  module.exports = mongoose.model('note',NotesSchema)