require('dotenv').config()
require('./db/mongo')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const handleErrors = require('./middleware/handleErrors')
const notFound = require('./middleware/notFound')

// Define constants
const app = express()
const PORT = process.env.PORT || 3001

// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Dinamyc Routes
app.use('/api', require('./routes'))

// Middleware for Errors
app.use(notFound)
app.use(handleErrors)

app.listen(PORT)
console.log(`Servidor listening in http://localhost:${PORT}`)