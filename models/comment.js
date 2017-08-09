'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  author: String,
  text: String
})

module.exports = mongoose.model('Comment', CommentSchema)
