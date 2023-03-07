const { model } = require('mongoose')
const schemaMeal = require('../schemas/schemaMeal')

const Meal = model('Meal', schemaMeal)

module.exports = Meal