const router = require('express').Router()
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const uservalidation = require('../validation/uservalidation')


router.post("/user",uservalidation,(req, res) => {

    const { username, password } = req.body

    if (username === "admin" && password === "123") {

        jwt.sign({ username }, process.env.ACCESS_KEY, { expiresIn: '1h' }, (err, token) => {

            return res.status(200).json({ msg: true, status: "autorizado", token: token })
        })
        
    } else {
        return res.status(401).json({ msg: false, status: "não autorizado", token: null })
    }
})



module.exports = router;