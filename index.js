const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

// Define constants
const app = express()
const PORT = process.env.PORT || 3001

// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Connection with data base
const main = async () => {
  await mongoose.createConnection(process.env.URI_PIZZERIA_DB)
  console.log('The connection to the database was successful')
}

main().catch(err => console.error('Error', err))

app.get('/', (req, res) => {
  res.send('Hola Mundo desde Node :)')
})

app.listen(PORT)
console.log(`Servidor listening in http://localhost:${PORT}`)