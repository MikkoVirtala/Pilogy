const express = require('express')
const app = express()
const uuidv1 = require('uuid/v1')
const bodyParser = require('body-parser')
const cors = require('cors')
const { createPicture } = require('./picture/createPicture')
const mongoose = require('mongoose')
const { Picture } = require('./models')
const path = require('path')

const url = `mongodb://localhost:27017/pilogy`

app.use(bodyParser.json({ limit: '50mb' }))

app.use(cors())

app.use(express.static('client/build'))

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => {
    console.log('error: ', error.stack)
  })

//////////////////////////////

// const pictureSchema = new mongoose.Schema({
//   shapes: Object
// })

// PICTURES //////////////////////////////////////////

// app.post('/pictures', (request, response) => {
//   const body = request.body
//   if (
//     body &&
//     body.picture &&
//     body.picture.shapes &&
//     typeof body.picture.shapes === 'object'
//   ) {
//     // const Picture = mongoose.model('Picture', pictureSchema)
//     const picture = new Picture({
//       shapes: body.picture.shapes
//     })

//     picture
//       .save()
//       .then(response => {
//         if (response.id) {
//           console.log('response.id: ', response.id)
//           console.log('response: ', response)
//         }
//         // mongoose.connection.close()
//       })
//       .catch(error => console.log(error))
//   }

//   // const picture = new Picture({
//   //   shapes: body.content.toJSON()
//   // })

//   response.json({ hello: 'world' })
//   // picture.save().then(picture => {
//   //   response.json(picture)
//   // })
// })

app.post('/pictures/new', (request, response) => {
  console.log('request: ', request.body.maxNumberOfShapesInPicture)
  let maxNumberOfShapesInPicture = 10000
  console.log('request.body: ', request.body)
  if (request.body && request.body.maxNumberOfShapesInPicture) {
    const number = Number(request.body.maxNumberOfShapesInPicture)
    if (number !== NaN && number > 0 && number <= 60000) {
      maxNumberOfShapesInPicture = number
    }
  }
  const picture = {
    id: uuidv1(),
    shapes: createPicture(maxNumberOfShapesInPicture)
  }

  console.log('shapes ready: ', picture.shapes.length)

  response.json(picture)
})

////////////////////////////////////////////////////////

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

// if (process.env.NODE_ENV === 'production') {
// Set static folder
// app.use(express.static('client/build'))

// }

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
