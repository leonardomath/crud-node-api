const express = require('express')
const mongoose = require('mongoose')
const routes = require('./src/routes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-j5sgp.mongodb.net/nodeapi?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

require('./src/models/Product')

// app.use("/api", require("./src/routes"))
app.use(routes)

app.listen(3333)