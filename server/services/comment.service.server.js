module.exports = function (app) {

  // get hold of the user model, record model and comment model
  const userModel = require('../models/user/user.model.server');
  const recordModel = require('../models/record/record.model.server');
  const commentModel = require('../models/comment/comment.model.server');

  // the http calls

  // create a new comment
  app.post("/api/record/:rid/comment", function (req, res) {
    const recordId = req.params.rid;
    const newComment = req.body;
    console.log("Creating a new comment for recordId " + recordId + ": ");
    console.log("Created the following new comment: ");
    console.log(newComment);
    commentModel.createComment(newComment).then(
      (postedComment) => {
        recordModel.findRecordById(recordId).exec((findRecordError, record) => {
          if (findRecordError) {
            console.log('Error finding the record when post new comment! recordId: ' + recordId);
            res.status(400).send(findRecordError);
          } else {
            record.comments.push(postedComment);
            record.save((saveRecordError, savedRecord) => {
              if (saveRecordError) {
                console.log('Error saving the record after posting the new comment!');
                res.status(400).send(saveRecordError);
              } else {
                postedComment.save((saveCommentError, savedComment) => {
                  if (saveCommentError) {
                    console.log('Error saving the comment after saving the updated record!');
                    res.status(400).send(saveCommentError);
                  } else {
                    res.status(200).json(savedComment);
                  }
                })
              }
            })
          }
        });
      },
      (err) => {
        console.log('Error posting the new comment!');
        res.status(400).send(err);
      }
    );
  });

  // find all comments for record id
  app.get("/api/record/:rid/comment", function (req, res) {
    const recordId = req.params.rid;
    console.log("Getting all comments for recordId " + recordId + ": ");
    commentModel.findAllCommentsForRecord(recordId).exec((err, comments) => {
      if (err) {
        console.log('Error finding all comments for recordId: ' + recordId);
        res.status(400).send(err);
      } else {
        console.log('Finished finding all comments for recordId: ' + recordId);
        res.status(200).json(comments);
      }
    });
  });

  // find all comments for user id
  app.get("/api/user/:uid/comment", function (req, res) {
    const userId = req.params.uid;
    console.log("Getting all comments for userId " + userId + ": ");
    commentModel.findAllCommentsForUser(userId).exec((err, comments) => {
      if (err) {
        console.log('Error finding all comments for userId: ' + userId);
        res.status(400).send(err);
      } else {
        console.log('Finished finding all comments for userId: ' + userId);
        res.status(200).json(comments);
      }
    });
  });

  // find comment by its id
  app.get("/api/comment/:cid", function (req, res) {
    const commentId = req.params.cid;
    console.log("Getting the comment id " + commentId + ": ");
    commentModel.findCommentById(commentId).exec((err, comment) => {
      if (err) {
        console.log('Error finding the comment for commentId: ' + commentId);
        res.status(400).send(err);
      } else if (comment) {
        console.log('Found the comment for commentId:' + commentId);
        res.status(200).json(comment);
      } else {
        console.log('Cannot find the comment for commentId: ' + commentId);
        res.send(null);
      }
    });
  });

  // update a comment by its id
  app.put("/api/comment/:cid", function (req, res) {
    const commentId = req.params.cid;
    const newComment = req.body;
    console.log("Updating the comment id " + commentId + ": ");
    commentModel.updateComment(commentId, newComment).exec((err, updatedComment) => {
      if (err) {
        console.log('Error updating the comment for commentId: ' + commentId);
        res.status(400).send(err);
      } else if (updatedComment) {
        console.log('Finished updating the comment for commentId: ' + commentId);
        res.status(200).json(updatedComment);
      } else {
        console.log('Cannot find the comment for commentId: ' + commentId);
        res.send(null);
      }
    });
  });

  // delete comment
  app.delete("/api/comment/:cid", function (req, res) {
    const commentId = req.params.cid;
    console.log("Deleting the comment id " + commentId + ": ");
    commentModel.deleteComment(commentId).exec((err, deletedComment) => {
      if (err) {
        console.log('Error deleting the comment for commentId: ' + commentId);
        res.status(400).send(err);
      } else if (deletedComment) {
        recordModel.findRecordById(deletedComment.recordId).exec((findRecordError, record) => {
          if (findRecordError) {
            console.log('Error finding the record when delete comment!');
            res.status(400).send(findRecordError);
          } else {
            let commentIndex = record.comments.indexOf(commentId);
            record.comments.splice(commentIndex, 1);
            record.save();
            res.status(200).json(deletedComment);
          }
        });
      } else {
        console.log('Cannot find the comment when delete, commentId: ' + commentId);
        res.send(null);
      }
    });
  });



};
