const express = require('express');
const router  = express.Router(); 

const checkPasswordController = require('../controllers/checkPassword'); 

router.get('/api/password/:password', checkPasswordController.getPassword); 
router.post('/api/check', checkPasswordController.checkPassword);

module.exports = router;