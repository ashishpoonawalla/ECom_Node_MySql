import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import UserRoute from './router/users.js'

const app = express()

// DB Connection
const db = mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'employeeSystem',
})

db.connect((err) =>
{
    if (!err)
        console.log("MySql Connected")
    else
        console.log("Error in MySql Connect")
})

//MIDLEWARE
app.use(express.json())
app.use(cors())


// API
app.use("/", UserRoute)


// Server
app.listen(5000, () => console.log("Running on port 5000"));
