const CustomError = require('../middlewares/error-handlers/custom-error') 

class NotFoundError extends CustomError {
  statusCode = 400

  constructor(message) {
    super(message)
    this.message = message
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}

module.exports = NotFoundError


