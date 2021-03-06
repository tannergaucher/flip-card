const { Card } = require('../models')
const connectToDb = require('../connect-to-db')

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    connectToDb()
    const req = JSON.parse(event.body)

    const card = await Card.findById(req.cardId)

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          card,
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
