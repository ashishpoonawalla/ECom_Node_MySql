// import User from '../models/User'
import mysql from 'mysql'

const db = mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'employeeSystem',
})

export const createUser = async (req, res) =>
{
    const name = req.body.name
    const age = req.body.age
    const city = req.body.city
    const country = req.body.country

    db.query(
        "INSERT INTO employees (name, age, city, country) values(?,?,?,?)",
        [name, age, city, country],
        (err, result) =>
        {
            if (err)
            {
                console.log(err)
            } else
            {
                res.send("Data Inserted")
            }
        }
    )
}

export const deleteUser = async (req, res) =>
{
    //const id = req.body._id
    const id = req.params.id

    db.query(

        "DELETE FROM  employees where _id=" + id,


        (err, result) =>
        {
            if (err)
            {
                console.log(err)
            } else
            {
                //res.send("Data Inserted")
            }
        }
    )

    res.status(200).send("Data Deleted")
}

export const updateUser = async (req, res) =>
{
    const id = req.body._id
    const name = req.body.name
    const age = req.body.age
    const city = req.body.city
    const country = req.body.country

    db.query(

        //"UPDATE  employees SET name='" + name + "', age=" + age + ", city='" + city + "', country='" + country + "' where _id=" + id,
        "UPDATE  employees SET name=?, age=?, city=?, country=? where _id=" + id,
        [name, age, city, country],

        (err, result) =>
        {
            if (err)
            {
                console.log(err)
            } else
            {
                //res.send("Data Inserted")
            }
        }
    )

    res.status(200).send("Data Updated")
}

export const getAllUser = async (req, res) =>
{
    db.query("select * from employees", (err, rows) =>
    {
        if (err)
        {
            console.log(err)
        } else
        {
            res.send(rows)
        }
    })
}

export const getUser = async (req, res) =>
{
    const filter = { _id: req.body._id }
    db.query("select * from employees WHERE _id:", (err, rows) =>
    {
        if (err)
        {
            console.log(err)
        } else
        {
            res.send(rows)
        }
    })
}