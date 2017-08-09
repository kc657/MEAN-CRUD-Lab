const db = require('../models')
const bodyParser = require('body-parser')

function show (req, res) {
  db.Comment.find(function (err, comments) {
    res.json(comments)
  })
}

function postComments (req, res) {
  let newComment = {
    author: req.body.author,
    text: req.body.text
  }
  db.Comment.create(newComment, function (err, comment) {
    if (err) return res.status(500).json(err)
    res.json(comment)
  })
}

function updateComment (req, res) {
  db.Comment.findById(req.params.commentId, function (err, comment) {
    if (err) {
      return res.status(500).json(err)
    } else {
      (req.body.author) ? comment.author = req.body.author : null;
      (req.body.text) ? comment.text = req.body.text : null
    }
    comment.save(function (err) {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Comment has been updated' })
    })
  }
  )
}

function deleteComment (req, res) {
  db.Comment.findOneAndRemove({_id: req.params.commentId}, function (err, comment) {
    res.json({message: 'Comment has been deleted'})
  })
}

module.exports = {
  show: show,
  postComments: postComments,
  updateComment: updateComment,
  deleteComment: deleteComment
}
