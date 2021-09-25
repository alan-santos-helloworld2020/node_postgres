const router = require('express').Router()
const user = require('./user')
const cliente = require('../database/database')
const validation = require('../validation/validation')


router.get("/",cliente.listar)
router.get("/:id",cliente.pesquisar)
router.post("/",validation,cliente.salvar)
router.put("/:id",validation,cliente.editar)
router.delete("/:id",validation,cliente.deletar)


module.exports = router;