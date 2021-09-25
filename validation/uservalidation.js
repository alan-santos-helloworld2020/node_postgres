const uservalidation = (req, res, next) => {

    const { username, password } = req.body
    if (username === null || username === "" || username === undefined) {
        res.status(500).json({ msg: "o campo username é obrigatório" })

    } else if (password === null || password === "" || password === undefined) {
        res.status(500).json({ msg: "o campo password é obrigatório" })
    } else {
        next()
    }


}

module.exports = uservalidation;