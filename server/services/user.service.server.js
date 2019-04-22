const express = require('express');
const path = require('path');
const multer = require('multer');
const ejs = require('ejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const bcrypt = require('bcrypt-nodejs');
module.exports = function (app) {

  // get hold of the user model, record model and comment model
  const userModel = require('../models/user/user.model.server');
  const recordModel = require('../models/record/record.model.server');
  const commentModel = require('../models/comment/comment.model.server');


  // delegate the authentication to facebook
  app.get('/facebook/login', passport.authenticate('facebook', {scope: 'email'}));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook',
      {
        successRedirect: '/#/record',
        failureRedirect: '/#/login'
      }));


  passport.use(new LocalStrategy(localStrategyCallback));
  const facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
  };

  passport.use(new FacebookStrategy(facebookConfig, facebookStrategyCallback));
  // to serialize and deserialize the user
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      (user) => done(null, user),
      (err) => done(err, null)
    );
  }

  function localStrategyCallback(username, password, done) {
    userModel.findUserByUsername(username).then(
      (user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      },
      (err) => {
        if (err) {
          return done(err, null);
        }
      }
    );
  }

  function facebookStrategyCallback(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id).then(
      (user) => {
        if (user) {
          return done(null, user);
        } else {
          const names = profile.displayName.split(' ');
          const newFacebookUser = {
            username: `${names[0]} ${names[1]}`,
            password: names[0] + names[1],
            email: profile.emails ? profile.emails[0].value : '',
            role: 'Other',
            roleName: names[0],
            lastLogin: new Date().toLocaleString(),
            facebook: {
              id: profile.id,
              token: token
            }
          };
          return userModel.createUser(newFacebookUser);
        }
      },
      (err) => {
        if (err) {
          return done(err, null);
        }
      }
    );
  }


  // login service call
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    const user = req.user;
    console.log('Logged in...');
    user.lastLogin = new Date().toLocaleString();
    user.save();
    res.json(user);
  });

  // logout service call
  app.post('/api/logout', (req, res) => {
    req.logOut();
    console.log('Logged out...');
    res.status(200).send({});
  });

  // register service call
  app.post('/api/register', (req, res) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user).then((postedUser) => {
      if (postedUser) {
        req.login(postedUser, (err) => {
          if (err) {
            res.status(400).send(err);
          } else {
            console.log('Registered a new user!');
            res.status(200).json(postedUser);
          }
        })
      }
    });
  });

  // the check log in service endpoint
  app.get('/api/loggedin', (req, res) => {
    res.send(req.isAuthenticated() ? req.user : '0');
  });

  // to get all the users to test
  app.get('/api/users', (req, res) => {
    console.log('Getting all users...');
    userModel.findAllUsers().exec((err, users) => {
      if (err) {
        console.log('Error getting all users!');
      } else {
        res.status(200).json(users);
      }
    });
  });

  // Now implement the CRUD http call apis

  // find user by Id
  app.get("/api/user/:uid", function (req, res) {
    const userId = req.params.uid;
    console.log("User Id to query: " + userId);
    userModel.findUserById(userId).exec((err, user) => {
      if (err) {
        console.log('Error finding user by id!');
        res.status(400).send(err);
      } else {
        console.log('Found the user with id: ' + userId);
        res.status(200).json(user);
      }
    });
  });

  // find user by credentials and find user by username
  function findUserByUsername(res, username) {
    userModel.findUserByUsername(username).exec((err, user) => {
      if (err) {
        console.log('Error finding the user by username!');
        res.status(400).send(err);
      } else {
        if (user) {
          console.log('Found the user with username: ' + username);
          res.status(200).json(user);
        } else {
          console.log('No user found with username: ' + username + '!');
          res.send(null);
        }
      }
    });
  }

  function findUserByCredentials(res, username, password) {
    userModel.findUserByCredentials(username, password).exec((err, user) => {
      if (err) {
        console.log('Error finding the user by credentials!');
        res.status(400).send(err);
      } else {
        if (user) {
          console.log('Found the user with credentials.');
          res.status(200).json(user);
        } else {
          console.log('Cannot find the user with the given credentials!');
          res.send(null);
        }
      }
    });
  }

  app.get("/api/user", function (req, res) {
    const username = req.query.username;
    const password = req.query.password;
    if (typeof username != "undefined" && typeof password != "undefined") {
      console.log(
        "User username to query: " + username + ", and password: " + password
      );
      findUserByCredentials(res, username, password);
    } else if (typeof password == "undefined") {
      console.log("User username to query: " + username);
      console.log("Password is: " + password);
      findUserByUsername(res, username);
    }
  });

  // update user
  app.put("/api/user/:uid", function (req, res) {
    const userId = req.params.uid;
    const newUser = req.body;
    console.log("New User Id: " + userId + ", and new user: ");
    console.log(newUser);
    userModel.updateUser(userId, newUser).exec((err, updatedUser) => {
      if (err) {
        console.log('Error updating the user with userId: ' + userId);
        res.status(400).send(err);
      } else {
        if (updatedUser) {
          console.log('Finished updating the user.');
          res.status(200).json(updatedUser);
        } else {
          console.log('Cannot find the user given userId: ' + userId);
          res.send(null);
        }
      }
    });
  });

  // delete user
  app.delete("/api/user/:uid", function (req, res) {
    const userId = req.params.uid;
    console.log("User Id to delete: " + userId);
    // req.logOut();
    userModel.deleteUser(userId).exec((err, deletedUser) => {
      if (err) {
        console.log('Error deleting the user given userId: ' + userId);
        res.status(400).send(err);
      } else {
        if (deletedUser) {
          // delete all records and comments
          for (let i = 0; i < deletedUser.records.length; i++) {
            recordModel.deleteRecord(deletedUser.records[i]).exec((errRecord, r) => {
              for (let j = 0; j < r.comments.length; j++) {
                commentModel.deleteComment(r.comments[j]).exec();
              }
            });
          }
          console.log('Finished deleting all the records and comments for the userId: ' + userId);
          console.log('Finished deleting the user given userId: ' + userId);
          res.status(200).json(deletedUser);
        } else {
          console.log('Cannot find the user given userId: ' + userId);
          res.send(null);
        }
      }
    });
  });

  // create user
  app.post('/api/user', (req, res) => {
    const newUser = req.body;
    console.log('Posted new user: ');
    console.log(newUser);
    userModel.createUser(newUser).then(
      (postedUser) => {
        console.log('Finished posting the user.');
        res.status(200).json(postedUser);
      },
      (err) => {
        console.log('Error posting the new user!');
        res.status(400).send(err);
      }
    );
  });

  // upload the image by user
  // before start, use the public assets folder to hold uploads
  console.log('Public assets folder: ');
  console.log(path.join(__dirname, '/../../src/assets/uploads'));
  app.use(express.static(path.join(__dirname, '/../../src/assets/uploads')));

  // first, set up storage engine
  const storage = multer.diskStorage({
    destination: './src/assets/uploads',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });

  // init upload
  const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000000},
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    }
  }).single('recordFile');

  // check file type helper
  function checkFileType(file, cb) {
    // allowed extension
    const fileTypes = /jpeg|png|gif|jpg|tiff|avi|mp4|mov|rmvb/;
    // first check extension name
    const extnameValid = fileTypes.test(path.extname(file.originalname).toLowerCase());
    // second, check mime
    const mimetypeValid = fileTypes.test(file.mimetype);
    // then check if both are true
    if (extnameValid && mimetypeValid) {
      return cb(null, true);
    } else {
      // cb({
      //   message: 'Error: Images Only!'
      // });
      cb('Error: Images and Videos Only!');
    }
  }

  // make post request
  app.post('/api/upload', function (req, res) {
    // call the upload
    upload(req, res, (err) => {
      // get the const variables
      const userId = req.body.userId;
      const recordId = req.body.recordId;
      const recordListUrl = `#/record/${recordId}`;
      if (err) {
        console.log(err.message);
        res.status(400).send(err.message);
      } else {
        console.log(req.body);
        console.log(req.file);
        if (req.file === undefined) {
          console.log('No file selected!');
          // res.status(400).send('No file selected!');
        } else {
          // res.status(200).send(req.file.path);
          recordModel.findRecordById(recordId).exec((findRecordError, record) => {
            if (findRecordError) {
              console.log('Error finding the record when upload a new media file! recordId: ' + recordId);
              res.status(400).send(findRecordError);
            } else {
              record.url = `/${req.file.filename}`;
              record.save();
              res.redirect(recordListUrl);
            }
          });
        }
      }
    })
  });

};
