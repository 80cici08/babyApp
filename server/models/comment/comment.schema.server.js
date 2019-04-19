const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: String,
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  recordId: {type: mongoose.Schema.Types.ObjectId, ref: 'Record'},
  dateCreated: {type: Date, default: Date.now()}
});

module.exports = commentSchema;
