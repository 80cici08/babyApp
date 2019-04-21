const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const babySchema = new Schema({
  name: String,
  gender: String,
  birthday: String,
  weight: Number,
  height: Number,
  dateCreated: {type: Date, default: Date.now()}
});

module.exports = babySchema;
