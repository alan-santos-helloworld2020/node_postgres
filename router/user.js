const router = require('express').Router()
const uservalidation = require('../validation/uservalidation')
const token = require('../token/token')


router.post("/user",uservalidation,token.gerarToken)



module.exports = router;