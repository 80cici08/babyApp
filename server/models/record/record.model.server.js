const mongoose = require('mongoose');
const recordSchema = require('./record.schema.server');

const recordModel = mongoose.model('Record', recordSchema, 'Records');

recordModel.createRecordForUser = createRecordForUser;
recordModel.findAllRecordsForUser = findAllRecordsForUser;
recordModel.findAllRecordsForOwner = findAllRecordsForOwner;
recordModel.findAllRecords = findAllRecords;
recordModel.findRecordById = findRecordById;
recordModel.updateRecord = updateRecord;
recordModel.deleteRecord = deleteRecord;

module.exports = recordModel;

// now implement the functions of recordModel
function createRecordForUser(record) {
  return recordModel.create(record);
}

function findAllRecordsForUser(uid) {
  return recordModel.find({userId: uid});
}
function findAllRecordsForOwner(owner) {
  return recordModel.find({owner: owner});
}

function findAllRecords() {
  return recordModel.find({});
}

function findRecordById(rid) {
  return recordModel.findById(rid);
}

function updateRecord(rid, record) {
  return recordModel.findByIdAndUpdate(
    rid,
    {
      $set: {
        type: record.type,
        url: record.url,
        name: record.name,
        longitude: record.longitude,
        latitude: record.latitude,
        thumbUps: record.thumbUps,
        date: record.date
      }
    },
    {new: true});
}

function deleteRecord(rid) {
  return recordModel.findByIdAndRemove(rid);
}
