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
    await Card.findById(req.cardId).remove()

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          successMessage: `You deleted a card!`,
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
