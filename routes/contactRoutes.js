var express = require('express');
var router = express.Router();
const ContactsController = require('../controllers/contactsController');
const passport = require('passport');
const validatorMiddleware = require('../middlewares/validatorMiddleware');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// To Check and verify the token if exist 
router.use(passport.authenticate('jwt', { session : false }))

router.post('/addContact', ContactsController.addNewContact,validatorMiddleware.checkEmailValidation,validatorMiddleware.checkEmptyPhone);
router.get('/getList', ContactsController.findUserContacts);
router.get('/getRecentList', ContactsController.getRecentContacts);


module.exports = router;
