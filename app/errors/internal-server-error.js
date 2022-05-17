const CustomError = require('../middlewares/error-handlers/custom-error') 

class InternalServerError extends CustomError {
  statusCode = 500

  constructor(message) {
    super(message)
    this.message = message
    Object.setPrototypeOf(this, InternalServerError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}

module.exports = InternalServerError
