const Meal = require('../db/models/modelMeal')
/**
 * Obtener todos los elementos de la base de datos
 * @param {*} res
 * @param {*} req
 * @param {*} next
 */
const getItems = (req, res, next) => {
  Meal.find({}).then(meals =>
    res.json(meals)
  ).catch(err => next(err))
}
/**
 * Obtener un elemento de la base de datos
 * @param {*} res
 * @param {*} req
 * @param {*} next
 */
const getItem = (req, res, next) => {
  const { id } = req.params
  console.log(id)
  Meal.findById(id).exec().then(meal => {
    res.json(meal)
  }).catch(err => next(err))
}

/**
 * Crear un elemento de la base de datos
 * @param {*} res
 * @param {*} req
 * @param {*} next
 */
const createItem = (req, res) => {
  const { name, description, category, price, comment } = req.body
  const newMeal = new Meal({
    name,
    description,
    category,
    price,
    comments: { body: comment, data: new Date() }
  })

  newMeal.save().then(result => {
    if (result) {
      res.json(result)
    } else {
      res.status(404).end()
    }
  }
  )
}

/**
 * Modificar un elemento de la base de datos
 * @param {*} res
 * @param {*} req
 * @param {*} next
 */
const updateItem = (req, res, next) => {
  const { id } = req.params
  const { name, description, category, price, comment } = req.body

  const newMealInfo = {
    name,
    description,
    category,
    price,
    comments: { body: comment, data: new Date() }
  }

  Meal.findByIdAndUpdate(id, newMealInfo, { new: true }).exec().then(meal => res.json(meal).status(200).end()).catch(err => next(err))
}

/**
 * Borrar un elemento de la base de datos
 * @param {*} res
 * @param {*} req
 * @param {*} next
 */
const deleteItem = (req, res, next) => {
  const { id } = req.params
  Meal.findByIdAndRemove(id).exec().then(() => {
    res.send('The meal was remove').status(204).end()
  }).catch(err => {
    next(err)
  })
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }