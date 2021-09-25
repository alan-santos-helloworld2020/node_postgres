const router = require('express').Router()
const user = require('./user')
const cliente = require('../database/database')
const validation = require('../validation/validation')
const token = require('../token/token')


router.get("/",token.verificarToken,cliente.listar)
router.get("/:id",token.verificarToken,cliente.pesquisar)
router.post("/",validation,token.verificarToken,cliente.salvar)
router.put("/:id",validation,token.verificarToken,cliente.editar)
router.delete("/:id",token.verificarToken,cliente.deletar)


module.exports = router;