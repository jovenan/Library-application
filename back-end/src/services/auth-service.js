require('dotenv').config()

exports.authorize = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token']

    if (!token) {
        res.status(401).json({
            message: "Acesso restrito"
        })
    } else {
        if (token !== process.env.API_TOKEN) {
            res.status(401).json({
                message: "Token Inválido"
            })
        } else {
            next()
        }
    }
}