module.exports = function (app) {

  // get hold of the user model, record model and comment model
  const userModel = require('../models/user/user.model.server');
  const recordModel = require('../models/record/record.model.server');
  const commentModel = require('../models/comment/comment.model.server');

  // the http CRUD operations on records

  // find all records
  app.get('/api/records', function (req, res) {
    console.log("Getting all the records...");
    recordModel.findAllRecords().exec((err, records) => {
      if (err) {
        console.log('Error getting all the records!');
        res.status(400).send(err);
      } else {
        console.log('Finished getting all the records.');
        res.status(200).json(records);
      }
    });
  });

  // find all records for user with given userId
  app.get("/api/user/:uid/record", function (req, res) {
    const userId = req.params.uid;
    console.log("Getting the records for user " + userId + ": ");
    recordModel.findAllRecordsForUser(userId).exec((err, records) => {
      if (err) {
        console.log('Error finding the records for userId: ' + userId);
        res.status(400).send(err);
      } else {
        console.log('Finished finding the records for userId: ' + userId);
        res.status(200).json(records);
      }
    });
  });

  // find record by record Id
  app.get('/api/record/:rid', function (req, res) {
    const recordId = req.params.rid;
    console.log('Getting the record for Id ' + recordId + ': ');
    recordModel.findRecordById(recordId).exec((err, record) => {
      if (err) {
        console.log('Error retrieving the record by Id: ' + recordId);
        res.status(400).send(err);
      } else {
        if (record) {
          console.log('Found the record by Id: ' + recordId);
          res.status(200).json(record);
        } else {
          console.log('Cannot find the record by Id: ' + recordId);
          res.send(null);
        }
      }
    });
  });

  // update the record associated with the record Id
  app.put('/api/record/:rid', function (req, res) {
    const recordId = req.params.rid;
    const newRecord = req.body;
    console.log('Updating the record for Id ' + recordId + ': ');
    recordModel.updateRecord(recordId, newRecord).exec((err, updatedRecord) => {
      if (err) {
        console.log('Error updating the record by Id: ' + recordId);
        res.status(400).send(err);
      } else {
        if (updatedRecord) {
          console.log('Finished updating the record by Id: ' + recordId);
          res.status(200).json(updatedRecord);
        } else {
          console.log('Cannot find the record by Id: ' + recordId);
          res.send(null);
        }
      }
    });
  });

  // delete record
  app.delete('/api/record/:rid', function (req, res) {
    const recordId = req.params.rid;
    console.log('Deleting the record for Id ' + recordId + ': ');
    recordModel.deleteRecord(recordId).exec((err, deletedRecord) => {
      if (err) {
        console.log('Error deleting the record by Id: ' + recordId);
        res.status(400).send(err);
      } else {
        if (deletedRecord) {
          // delete all comments for the website
          for (let i = 0; i < deletedRecord.comments.length; i++) {
            commentModel.deleteComment(deletedRecord.comments[i]).exec();
          }
          console.log('Finished deleting the comments in the recordId: ' + recordId);
          userModel.findUserById(deletedRecord.userId).exec((findUserError, user) => {
            if (findUserError) {
              console.log('Error finding the user by Id when delete record!');
              res.status(400).send(findUserError);
            } else {
              user.records.splice(user.records.indexOf(recordId), 1);
              user.save((postUserError, postedUser) => {
                if (postUserError) {
                  console.log('Error posting the new user after deleting the record!');
                  res.status(400).send(postUserError);
                } else {
                  console.log('Finished deleting the record by Id: ' + recordId);
                  res.status(200).json(deletedRecord);
                }
              });
            }
          });
        } else {
          console.log('Cannot find the record by Id: ' + recordId);
          res.send(null);
        }
      }
    });
  });

  // create record
  app.post('/api/user/:uid/record', function (req, res) {
    const userId = req.params.uid;
    const newRecord = req.body;
    console.log('Posting new record: ');
    console.log(newRecord);
    recordModel.createRecordForUser(newRecord).then(
      (postedRecord) => {
        userModel.findUserById(userId).exec((findUserError, user) => {
          if (findUserError) {
            console.log('Error finding the user by userId: ' + userId);
            res.status(400).send(findUserError);
          } else {
            user.records.push(postedRecord);
            user.save((postUserError, postedUser) => {
              if (postUserError) {
                console.log('Error posting the new user with new record!');
                res.status(400).send(postUserError);
              } else {
                console.log('Finished posting the new record for userId: ' + userId);
                res.status(200).json(postedRecord);
              }
            })
          }
        });
      },
      (err) => {
        console.log('Error posting the record!');
        res.status(400).send(err);
      }
    );
  })

};
