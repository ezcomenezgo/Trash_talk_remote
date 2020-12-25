// includes related packages in project
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashtalk = require('./generate_trashtalk')
const checkCareer = require('./check_career')
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// setting body parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body.target)
  const talk = generateTrashtalk(req.body.target)
  const careerTitle = checkCareer(req.body.target)
  res.render('index', { talk, careerTitle })
})

// start and listen the server
app.listen(port, () => {
  console.log(`This trash talk generator is running on http://localhost:${port}`)
})