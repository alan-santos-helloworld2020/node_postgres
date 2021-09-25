const cliente = require('./config')

class ConexaoController {
    constructor() {
        cliente.connect()
    }

    listar = async (req, res) => {
        await cliente.query('SELECT * FROM cliente ORDER BY id ASC ', (err, resp) => {
            if (err) {
                console.error(`Erro: ${err.message}`)

            } else {
                console.table(resp.rows)
                res.json(resp.rows)
            }

        })
    }
    //****************************************************************************** */

    pesquisar = async (req, res) => {
        var id = req.params.id;
        await cliente.query('SELECT * FROM cliente WHERE id=$1', [id], (err, resp) => {
            if (err) {
                console.error(`Erro: ${err.message}`)

            } else {
                console.table(resp.rows)
                res.json(resp.rows)
            }

        })
    }
    //****************************************************************************** */
    salvar = async (req, res) => {
        var dados = { ...req.body }
        dados.data = new Date().toLocaleDateString()
        await cliente.query('INSERT INTO cliente (data,nome,telefone,email,cep) VALUES ($1,$2,$3,$4,$5)', [dados.data, dados.nome, dados.telefone, dados.email, dados.cep], (err, resp) => {
            if (err) {
                console.error(`Erro: ${err.message}`)

            } else {
                if (resp.rowCount > 0) {
                    res.json({ msg: true })
                } else {
                    res.json({ msg: false })
                }
            }

        })
    }
    //****************************************************************************** */
    editar = async (req, res) => {
        var id = req.params.id
        var dados = { ...req.body }
        
        await cliente.query('UPDATE cliente SET nome=$1,telefone=$2,email=$3,cep=$4 WHERE id=$5', [dados.nome, dados.telefone, dados.email, dados.cep,id], (err, resp) => {
            if (err) {
                console.error(`Erro: ${err.message}`)

            } else {
                if (resp.rowCount > 0) {
                    res.json({ msg: true })
                } else {
                    res.json({ msg: false })
                }
            }

        })
    }
    //****************************************************************************** */
    deletar = async (req, res) => {
        var id = req.params.id;
        await cliente.query('DELETE FROM cliente WHERE id=$1', [id], (err, resp) => {
            if (err) console.error(`Erro: ${err.message}`)

            if (resp.rowCount > 0) {
                res.json({ msg: true })
            } else {
                res.json({ msg: false })
            }

        })
    }

}

module.exports = new ConexaoController()