const express = require('express')
const breads = express.Router()
const Bread = require('../modules/breads')

breads.get('/', (req, res) => {
  res.render('Index',
    {
        breads: Bread
    }
  )
})

breads.get('/:arrayIndex', (req, res) => {
  res.send(Bread[req.params.arrayIndex])
})

module.exports = breads
