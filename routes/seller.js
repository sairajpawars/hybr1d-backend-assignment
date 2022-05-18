const express = require('express')
const router = express.Router()
const sellerController = require('../app/controllers/sellerController')
const { sellerAuth } = require('../app/middlewares/auth/sellerAuth')
const { addCatalogFormCheck } = require('../app/middlewares/validators/catalog')
const { runValidation } =  require('../app/middlewares/validators/runValidation')



// @route   POST  /api/seller/create-catalog
// @desc    Creates a catalog for a seller with a list of items
// @access  seller    
router.post('/create-catalog', sellerAuth, addCatalogFormCheck, runValidation, sellerController.createCatalog)

// @route   GET  /api/seller/orders
// @desc    Creates a catalog for a seller with a list of items
// @access  seller    
router.get('/orders', sellerAuth, sellerController.getAllOrders)


module.exports = router;