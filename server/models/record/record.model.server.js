const mongoose = require('mongoose');
const recordSchema = require('./record.schema.server');

const recordModel = mongoose.model('Record', recordSchema, 'Records');

recordModel.createRecordForUser = createRecordForUser;
recordModel.findAllRecordsForUser = findAllRecordsForUser;
recordModel.findRecordById = findRecordById;
recordModel.updateRecord = updateRecord;
recordModel.deleteRecord = deleteRecord;

module.exports = recordSchema;

// now implement the functions of recordModel
function createRecordForUser(record) {
  return recordModel.create(record);
}

function findAllRecordsForUser(uid) {
  return recordModel.find({userId: uid});
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
        description: record.description,
        longitude: record.longitude,
        latitude: record.latitude
      }
    },
    {new: true});
}

function deleteRecord(rid) {
  return recordModel.findByIdAndRemove(rid);
}
