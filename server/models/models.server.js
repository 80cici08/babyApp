const mongoose = require('mongoose');


// const db = "mongodb://localhost:27017/babyApp";
const db = `mongodb://admin:admin123@ds145356.mlab.com:45356/heroku_hhjktfqg`;
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
