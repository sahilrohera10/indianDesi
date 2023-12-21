const userController = require('../Controllers/userController');
const router = require('express').Router();
const adminController = require('../Controllers/adminController');

//admin APIs
router.post('/addFood', adminController.uploadProduct);
router.get('/getMeal/:selectedMeal',adminController.getFoodByType)


//user APIs
router.post('/signUp', userController.signUp);
router.post('/login', userController.login);

module.exports = router;
