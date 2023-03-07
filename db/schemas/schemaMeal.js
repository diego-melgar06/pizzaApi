const { Schema } = require('mongoose')

const mealsSchema = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  comments: { body: String, data: Date }
})

mealsSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mealsSchema
