var express = require('express');
var router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController.js');
const validatorMiddleware = require('../middlewares/validatorMiddleware');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup',validatorMiddleware.checkEmailValidation,validatorMiddleware.checkEmptyPhone, authController.signup);

router.post('/login', authController.login);

// To Check and verify the token if exist 
router.use(passport.authenticate('jwt', { session : false }))

module.exports = router;
