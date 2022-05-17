const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/userController')
const {
    loginFormCheck,
    registerFormCheck,
} = require('../app/middlewares/validators/user')
const { runValidation } =  require('../app/middlewares/validators/runValidation')


// @route   POST api/auth/register
// @desc    Register new user
// @access  public    
router.post('/register', registerFormCheck, runValidation, userController.register)

// @route   POST api/auth/login
// @desc    Login user
// @access  public 
router.post('/login', loginFormCheck, runValidation, userController.login)

module.exports = router;