const CustomError = require('../middlewares/error-handlers/custom-error') 

class InvalidCredentialError extends CustomError {
  statusCode = 500

  constructor(message) {
    super(message)
    this.message = message
    Object.setPrototypeOf(this, InvalidCredentialError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}

module.exports = InvalidCredentialError

