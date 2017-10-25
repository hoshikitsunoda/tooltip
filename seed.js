const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/tooltip'

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const tooltips = db.collection('tooltips')

  tooltips.insertMany([
    { tip: 'To save' },
    { tip: 'To undo' },
    { tip: 'To redo' },
    { tip: 'To escape' }
  ])
})
