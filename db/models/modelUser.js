const { model } = require('mongoose')
const schemaUser = require('../schemas/schemaUser')

const User = model('User', schemaUser)

module.exports = User