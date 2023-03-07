const express = require('express')
const router = express.Router()

const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/meal')

router.get('/', getItem)
router.get('/:id', getItems)
router.post('/', createItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

module.exports = router