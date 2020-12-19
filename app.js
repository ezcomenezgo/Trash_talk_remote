// includes related packages in project
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

// start and listen the server
app.listen(port, () => {
  console.log(`This trash talk generator is running on http://localhost:${port}`)
})