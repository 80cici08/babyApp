const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  type: String,
  url: String,
  name: String,
  longitude: Number,
  latitude: Number,
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  owner: String,
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  thumbUps: [String],
  date: String
});

module.exports = recordSchema;
