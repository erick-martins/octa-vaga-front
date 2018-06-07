'use strict'

var express = require('express')
var todoRoutes = express.Router()


// get all todo items in the db

todoRoutes.route('/all').get(function (req, res, next) {
  Todo.find(function (err, todos) {
    if (err) {
      return next(new Error(err))
    }
    res.json(todos) // return all todos
  })
})

module.exports = todoRoutes
