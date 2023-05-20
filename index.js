const express = require('express')
const dotenv = require('dotenv')

// Load Envs
dotenv.config({path: './config/config.env' })

const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is in ${process.env.NODE_ENV} mode, and is listening on ${PORT}`)
})
