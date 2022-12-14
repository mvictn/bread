
const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controllers/breads_controller')
app.use('/breads',breadsController)

app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.get('*', (req,res) => {
  res.send('404')
}) 

app.use(express.urlencoded({extended: true}))