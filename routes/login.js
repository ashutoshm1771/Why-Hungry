const express = require('express');
const router  = express.Router(); 

const loginController = require('../controllers/login'); 

router.post('/api/login', loginController.login); 
router.post('/api/signup', loginController.signup);
router.post('/api/volunteer/signup', loginController.volunteerSignup);

module.exports = router;