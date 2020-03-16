const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  frontText: {
    type: String,
  },
  backText: {
    type: String,
  },
  url: {
    type: String,
  },
  invitationLink: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
})

module.exports = mongoose.model('Card', cardSchema)
