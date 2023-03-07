const { Schema } = require('mongoose')

const userSchema = new Schema({
  name: String,
  lastname: String,
  age: String,
  state: String,
  city: String,
  street: String,
  numberHouse: String,
  phoneNumber: String,
  typeUser: String,
  dateJoin: { type: Date, default: Date }
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = userSchema