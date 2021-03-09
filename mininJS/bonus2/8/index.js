const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express()
// 8ddb2ae4d480545c1441bb2374c9ff6d

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const { city } = req.body

  weatherRequest(city)
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server has started on port 3000...')
})