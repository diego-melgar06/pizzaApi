const User = require('../db/models/modelUser')
/**
 * Obtener todos los elementos de la base de datos
 * @param {*} res
 * @param {*} req
 * @param {*} next
 */
const getItems = (req, res, next) => {
  User.find({}).then(user =>
    res.json(user)
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
  User.findById(id).exec().then(user => {
    res.json(user)
  }).catch(err => next(err))
}

/**
 * Crear un elemento de la base de datos
 * @param {*} res
 * @param {*} req
 * @param {*} next
 */
const createItem = (req, res, next) => {
  const { name, lastname, age, state, city, street, numberHouse, phoneNumber, typeUser } = req.body
  const newUser = new User({
    name,
    lastname,
    age,
    state,
    city,
    street,
    numberHouse,
    phoneNumber,
    typeUser,
    dateJoin: new Date()
  })

  newUser.save().then(result => {
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
  const {
    name,
    lastname,
    age,
    state,
    city,
    street,
    numberHouse,
    phoneNumber,
    typeUser, dateJoin
  } = req.body

  const newUserInfo = {
    name,
    lastname,
    age,
    state,
    city,
    street,
    numberHouse,
    phoneNumber,
    typeUser,
    dateJoin
  }

  User.findByIdAndUpdate(id, newUserInfo, { new: true }).exec().then(user => res.json(user).status(200).end()).catch(err => next(err))
}

/**
 * Borrar un elemento de la base de datos
 * @param {*} res
 * @param {*} req
 * @param {*} next
 */
const deleteItem = (req, res, next) => {
  const { id } = req.params
  User.findByIdAndRemove(id).exec().then(() => {
    res.send('The user was remove').status(204).end()
  }).catch(err => {
    next(err)
  })
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }