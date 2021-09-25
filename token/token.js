const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()


class TokenConfig {

    gerarToken = (req, res) => {
        const { username, password } = req.body

        if (username === "admin" && password === "123") {

            jwt.sign({ username }, process.env.ACCESS_KEY, { expiresIn: '1h' }, (err, token) => {

                return res.status(200).json({ msg: true, status: "autorizado", token: token })
            })

        } else {
            return res.status(401).json({ msg: false, status: "não autorizado", token: null })
        }

    }

    verificarToken = (req, res, next) => {
        const token = req.headers['authorization'].split(" ")[1]

        try {

                jwt.verify(token, process.env.ACCESS_KEY, (err, decode) => {
                    if (err) console.error(`Erro: ${err.message}`)
                    req.username = decode.username
                    console.log(req.username)
                    next()

                })

        } catch (error) {
            res.status(500).json({ msg: false, token: null })

        }

    }


}

module.exports = new TokenConfig()