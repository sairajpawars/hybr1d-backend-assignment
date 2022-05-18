const express = require('express')
const router = express.Router()
const buyerController = require('../app/controllers/buyerController')
const { buyerAuth } = require('../app/middlewares/auth/buyerAuth')



// @route   GET /api/buyer/list-of-sellers
// @desc    Get a list of all sellers
// @access  buyer    
router.get('/list-of-sellers', buyerAuth, buyerController.listOfSellers)

// @route   GET /api/buyer/seller-catalog/:seller_id
// @desc    Get a list of all sellers
// @access  buyer    
router.get('/seller-catalog/:seller_id', buyerAuth, buyerController.sellerCatalog)


module.exports = router;