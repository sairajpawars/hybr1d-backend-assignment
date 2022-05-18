const { check } = require('express-validator')

exports.addOrderFormCheck = [
    check('productList')
        .isArray()
        .withMessage('ProductList is missing or in wrong format')
]