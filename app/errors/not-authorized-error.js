const CustomError = require('../middlewares/error-handlers/custom-error') 

class NotAuthorizedError extends CustomError {
  statusCode = 500

  constructor(message) {
    super(message)
    this.message = message
    Object.setPrototypeOf(this, NotAuthorizedError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}

module.exports = NotAuthorizedError


