'use strict'

// import dependencies
let express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser')

// create instances
let app = express(),
  router = express.Router()

// set port to env or 3000
let port = process.env.API_PORT || 3001

// set db
const db = require('./models')

// set controllers requirement
const controllers = require('./controllers')

// config API to use bodyParser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())

// Prevent CORS errors
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

  // Remove caching
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

// Get homepage
app.get('/', function homepage (req, res) {
  res.sendFile('./public/index.html', ({root: __dirname}))
})

// getting all comments
app.get('/comments', controllers.comments.show)

// posting new comments
app.post('/comments', controllers.comments.postComments)

// update one comment
app.put('/comments/:commentId', controllers.comments.updateComment)

// delete one comment
app.delete('/comments/:commentId', controllers.comments.deleteComment)

// start server
app.listen(port, function () {
  console.log(`api running on port ${port}`)
})
