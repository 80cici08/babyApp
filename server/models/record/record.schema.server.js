const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  type: String,
  url: String,
  name: String,
  longitude: Number,
  latitude: Number,
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  thumbUps: [String],
  dateCreated: String
});

module.exports = recordSchema;
