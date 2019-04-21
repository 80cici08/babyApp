const mongoose = require('mongoose');

// const db = "mongodb://localhost:27017/babyApp";
const db = ``;
mongoose.Promise = global.Promise;

const dbConnection = mongoose.connect(
  db,
  {useNewUrlParser: true, useFindAndModify: false},
  (err) => {
    if (err) {
      console.log('Error! ' + err);
    } else {
      console.log('Connected to database!');
    }
  }
);

module.exports = dbConnection;
