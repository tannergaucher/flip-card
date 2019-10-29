const { User } = require('../models')
const connectToDb = require('../connect-to-db')
const { verify } = require('jsonwebtoken')

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    connectToDb()
    const req = JSON.parse(event.body)
    const verifiedToken = verify(req.token, process.env.REACT_APP_APP_SECRET)
    const { userId } = verifiedToken
    const user = await User.findById(userId)

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          user,
        },
      }),
    }
  } catch (error) {
    return {
      statusCode: 200,
      body: error.toString(),
    }
  }
}
