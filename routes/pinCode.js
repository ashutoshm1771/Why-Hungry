const express = require('express');
const router  = express.Router(); 

const pinCodeController = require('../controllers/pinCode'); 

// router.get('/pin', pinCodeController.viewpinCode); ''
router.get('/user/:userId/outlet/:outletId/pin', pinCodeController.viewpinCode);

module.exports = router;