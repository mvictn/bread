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
  if (Bread[req.params.arrayIndex]){
    res.render('Show',{
      bread: Bread[req.params.arrayIndex]
    })
  } else{
    res.send('404')
  }
})

module.exports = breads
