const { check } = require('express-validator')

exports.addCatalogFormCheck = [
    check('productList')
        .isArray()
        .withMessage('ProductList is missing or in wrong format')
]