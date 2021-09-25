const { Client } = require('pg')
const dotenv = require('dotenv').config()

const cliente = new Client({
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT_DATABASE
})

module.exports = cliente;