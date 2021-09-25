const router = require('express').Router()
const cliente = require('../database/database')

router.get("/",cliente.listar)
router.get("/:id",cliente.pesquisar)
router.post("/",cliente.salvar)
router.put("/:id",cliente.editar)
router.delete("/:id",cliente.deletar)


module.exports = router;