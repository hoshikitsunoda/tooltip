const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/tooltip'

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const tooltips = db.collection('tooltips')

  tooltips.insertMany([
    { tip: 'Click here to save!' },
    { tip: 'Click here to undo!' },
    { tip: 'Click here to redo' },
    { tip: 'Click here to escape' }
  ])
})
