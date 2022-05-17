const CustomError = require('./custom-error')

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ ok: false, errors: err.serializeErrors() })
    }
    return res.status(400).send({
        ok: false,
        errors: [{ message: 'Unhandled Server Error', err }],
    })
}

module.exports = errorHandler
