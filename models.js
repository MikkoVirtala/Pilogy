const mongoose = require('mongoose')
const { pictureSchema } = require('./schemas')

module.exports.Picture = mongoose.model('Picture', pictureSchema)
