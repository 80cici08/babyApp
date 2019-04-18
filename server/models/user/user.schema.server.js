const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: String,
  roleName: String,
  uploads: [{type: mongoose.Schema.Types.ObjectId, ref: 'Record'}],
  dateCreated: {type: Date, default: Date.now()},
  facebook: {
    id: String,
    token: String
  }
});

module.exports = userSchema;
