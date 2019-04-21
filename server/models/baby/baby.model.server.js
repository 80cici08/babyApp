const mongoose = require('mongoose');
const babySchema = require('./baby.schema.server');

const babyModel = mongoose.model('Baby', babySchema, 'Babies');

babyModel.createBaby = createBaby;
babyModel.findAllBabies = findAllBabies;
babyModel.findBabyById = findBabyById;
babyModel.updateBaby = updateBaby;
babyModel.deleteBaby = deleteBaby;

module.exports = babyModel;

// now implement the functions of the babyModel
function createBaby(baby) {
  return babyModel.create(baby);
}

function findAllBabies() {
  return babyModel.find({});
}

function findBabyById(bid) {
  return babyModel.findById(bid);
}

function updateBaby(bid, baby) {
  return babyModel.findByIdAndUpdate(
    bid,
    {
      $set: {
        name: baby.name,
        gender: baby.gender,
        birthday: baby.birthday,
        weight: baby.weight,
        height: baby.height
      }
    },
    {new: true});
}

function deleteBaby(bid) {
  return babyModel.findByIdAndRemove(bid);
}
