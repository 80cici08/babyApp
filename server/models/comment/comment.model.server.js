const mongoose = require('mongoose');
const commentSchema = require('./comment.schema.server');

const commentModel = mongoose.model('Comment', commentSchema, 'Comments');

commentModel.createComment = createComment;
commentModel.findAllCommentsForRecord = findAllCommentsForRecord;
commentModel.findAllCommentsForUser = findAllCommentsForUser;
commentModel.findAllComments = findAllComments;
commentModel.findCommentById = findCommentById;
commentModel.updateComment = updateComment;
commentModel.deleteComment = deleteComment;

module.exports = commentModel;

// now implement the functions of commentModel
function createComment(comment) {
  return commentModel.create(comment);
}

function findAllCommentsForRecord(rid) {
  return commentModel.find({recordId: rid});
}

function findAllCommentsForUser(uid) {
  return commentModel.find({userId: uid});
}

function findAllComments() {
  return commentModel.find({});
}

function findCommentById(cid) {
  return commentModel.findById(cid);
}

function updateComment(cid, comment) {
  return commentModel.findByIdAndUpdate(
    cid,
    {
      $set: {
        text: comment.text
      }
    },
    {new: true});
}

function deleteComment(cid) {
  return commentModel.findByIdAndRemove(cid);
}
