const CustomError = require('../middlewares/error-handlers/custom-error') 

class DatabaseConnectionError extends CustomError {
  statusCode = 500

  constructor(message) {
    super(message);
    this.message = message
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}

module.exports = DatabaseConnectionError
