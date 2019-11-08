// https://docs.atlas.mongodb.com/best-practices-connecting-to-aws-lambda/
const mongoose = require('mongoose')

let cachedDb = null

function connectToDb() {
  console.log(`connect to database `)

  if (cachedDb) {
    console.log(`using cached database`)
    return Promise.resolve(cachedDb)
  }

  return mongoose
    .connect(process.env.REACT_APP_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(db => {
      cachedDb = db
      return cachedDb
    })
}

module.exports = connectToDb
