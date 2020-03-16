const { Card } = require('../models')
const connectToDb = require('../connect-to-db')

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    connectToDb()
    const req = JSON.parse(event.body)

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
      statusCode: 403,
      body: JSON.stringify({
        error,
      }),
    }
  }
}
