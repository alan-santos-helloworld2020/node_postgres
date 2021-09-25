const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const user = require('./router/user')
const router = require('./router/router')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(user)
app.use(router)


app.listen(port, () => console.log(`http://localhost:${port}`));
module.exports = app;