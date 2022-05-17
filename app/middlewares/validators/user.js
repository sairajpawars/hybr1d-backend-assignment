const { check } = require('express-validator')

exports.loginFormCheck = [
    check('userName')
        .not()
        .isEmpty()
        .withMessage('Username is required'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Password is required'),
]

exports.registerFormCheck = [
    check('userName')
        .not()
        .isEmpty()
        .withMessage('Username is required'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Password is required'),
    check('userType')
        .isIn(['buyer', 'seller'])
        .withMessage('User type incorrect'),
]