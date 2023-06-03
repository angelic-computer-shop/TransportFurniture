const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres BOOKTRUCK' })
  })
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

  app.get('/drivers', db.getUsers)
  app.get('/drivers/:id', db.getUserById)
  app.post('/drivers', db.createUser)
  app.put('/drivers/:id', db.updateUser)
  app.delete('/drivers/:id', db.deleteUser)
  
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  
  