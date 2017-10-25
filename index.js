const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/tooltip'
const express = require('express')
const app = express()

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const tooltips = db.collection('tooltips')

  app.use(express.static('./public'))

  app.get('/tooltips', (req, res) => {
    tooltips
      .find({})
      .toArray()
      .then(response => res.send(response))
      .catch(err => console.error(err))
  })
  app.listen('3000', () => console.log('listening...'))
})
