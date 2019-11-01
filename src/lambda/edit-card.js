const { Card } = require('../models')
const connectToDb = require('../connect-to-db')
const { verify } = require('jsonwebtoken')

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    connectToDb()
    const req = JSON.parse(event.body)
    const verifiedToken = verify(req.token, process.env.REACT_APP_APP_SECRET)
    const { userId } = verifiedToken

    // TODO: CHECK THAT USER OWNS THAT CARD
    const card = await Card.findById(req.cardId)

    if (req.frontText) {
      card.frontText = req.frontText
    }

    if (req.backText) {
      card.backText = req.backText
    }

    const updatedCard = await card.save()

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          card: updatedCard,
        },
      }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error,
      }),
    }
  }
}
