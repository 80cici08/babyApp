const mongoose = require('mongoose');

// const db = "mongodb://localhost:27017/babyApp";
console.log(process.env.MLAB_USERNAME_WEBDEV);
const db = `mongodb://${process.env.MLAB_USERNAME_WEBDEV}:${process.env.MLAB_PASSWORD_WEBDEV}@ds145356.mlab.com:45356/heroku_hhjktfqg`;
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
