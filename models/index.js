const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern-comment-box')

const Comment = require('./comment.js')

module.exports.Comment = Comment
