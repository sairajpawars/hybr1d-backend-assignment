const express = require('express')
const router = express.Router()
const buyerController = require('../app/controllers/buyerController')
const { buyerAuth } = require('../app/middlewares/auth/buyerAuth')
const { addOrderFormCheck } = require('../app/middlewares/validators/order')
const { runValidation } =  require('../app/middlewares/validators/runValidation')



// @route   GET /api/buyer/list-of-sellers
// @desc    Get a list of all sellers
// @access  buyer    
router.get('/list-of-sellers', buyerAuth, buyerController.listOfSellers)

// @route   GET /api/buyer/seller-catalog/:seller_id
// @desc    Get the sellers catalog
// @access  buyer    
router.get('/seller-catalog/:seller_id', buyerAuth, buyerController.sellerCatalog)

// @route   GET /api/buyer/create-order/:seller_id
// @desc    Create a order from a product list
// @access  buyer    
router.post('/create-order/:seller_id', buyerAuth, addOrderFormCheck, runValidation, buyerController.createOrder)


module.exports = router;