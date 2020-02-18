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

    const card = await Card.create({
      frontText: req.frontText,
      backText: req.backText,
      userId,
    })

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
      statusCode: 400,
      body: JSON.stringify({
        error,
      }),
    }
  }
}
