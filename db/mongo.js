const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((db) => {
  console.log('The connection to the db was succesfully')
}).catch((err) => {
  console.log('Error: ', err)
})
