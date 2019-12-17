const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'myproject'

// Use connect method to connect to the server
MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err, client) {
    assert.equal(null, err)
    console.log('Connected successfully to server')

    console.log('client: ', client)
    const db = client.db(dbName)
    console.log('db: ', db)

    client.close()
  }
)
