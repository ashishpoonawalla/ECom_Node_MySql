const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const User = require('./models/User')

app.use(express.json())
app.use(cors())

// DB Connection
const CONNECTION_URL = "mongodb+srv://maucom2:maucom007@cluster0.rmzsy.mongodb.net/INSTAGRAM?retryWrites=true&w=majority"

// DB Connection Part
mongoose.connect(
    CONNECTION_URL, { useNewUrlParser: true }, () => console.log("Database Connected")
)

//Router
const create = require('./router/create.js')
const get = require('./router/get.js')
const update = require('./router/update.js')
const deletes = require('./router/delete.js')

// API
app.use("/create", create)
app.use("/get", get)
app.use("/update", update)
app.use("/delete", deletes)

// Server
app.listen(5000, () => console.log("Running on port 5000"));
