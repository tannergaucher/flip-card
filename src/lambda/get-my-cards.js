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

    const cards = await Card.find({
      userId,
    }).sort({ _id: -1 })

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          cards,
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
