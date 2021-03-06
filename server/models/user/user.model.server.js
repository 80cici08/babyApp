const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');

const userModel = mongoose.model('User', userSchema, 'Users');

userModel.createUser = createUser;
userModel.findAllUsers = findAllUsers;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.findUserByFacebookId = findUserByFacebookId;

module.exports = userModel;

// now implement the functions of the userModel
function createUser(user) {
  return userModel.create(user);
}

function findAllUsers() {
  return userModel.find({});
}

function findUserById(uid) {
  return userModel.findById(uid);
}

function findUserByUsername(username) {
  return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});
}

function updateUser(uid, user) {
  return userModel.findByIdAndUpdate(
    uid,
    {
      $set: {
        username: user.username,
        email: user.email,
        role: user.role,
        roleName: user.roleName,
        lastLogin: user.lastLogin
      }
    },
    {new: true});
}

function deleteUser(uid) {
  return userModel.findByIdAndRemove(uid);
}

function findUserByFacebookId(facebookId) {
  return userModel.findOne({'facebook.id': facebookId});
}
