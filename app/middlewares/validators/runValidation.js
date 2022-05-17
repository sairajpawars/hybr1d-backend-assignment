const { validationResult } = require("express-validator");
const RequestValidationError = require("../../errors/request-validation-error");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new RequestValidationError(errors.array()));
  }
  next();
};
