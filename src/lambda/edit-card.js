const { Card } = require('../models')
const connectToDb = require('../connect-to-db')

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    connectToDb()
    const req = JSON.parse(event.body)

    const card = await Card.findById(req.cardId)

    if (req.frontText) {
      card.frontText = req.frontText
    }

    if (req.backText) {
      card.backText = req.backText
    }

    if (req.invitationUrl) {
      card.invitationUrl = req.invitationUrl
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
    console.log(error)
    return {
      statusCode: 403,
      body: JSON.stringify({
        error,
      }),
    }
  }
}
