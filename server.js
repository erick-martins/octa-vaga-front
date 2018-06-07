/* jslint node: true */
'use strict'

const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// Require configuration file defined in app/Config.js
const config = require('./app/Config')

// Connect to database
mongoose.connect(process.env.MONGODB_URI || config.MONGODB_URI)

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/public')))

// Use morgan to log request in dev mode
app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var port = process.env.APP_PORT || config.APP_PORT
app.listen(port) // Listen on port defined in config file

console.log('App listening on port ' + port)

var todoRoutes = require('./app/Routes')

//  Use routes defined in Route.js and prefix with todo
app.use('/api', todoRoutes)

// Server index.html page when request to the root is made
app.get('/', function (req, res, next) {
  res.sendfile('./public/index.html')
})
