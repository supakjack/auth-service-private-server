const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
const cors = require('cors')
const corsOptions = require('./helpers/cors_option')

const indexRoure = require('./routers/indexRoute')
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/', cors(corsOptions), indexRoure)

app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
