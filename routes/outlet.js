const express = require('express');
const router  = express.Router(); 

const outletController = require('../controllers/outlet'); 

router.post('/api/add/outlet', outletController.addOutlet); 
router.get('/outlets', outletController.getOutlet);
router.get('/user/:userId/view/outlets', outletController.viewOutlets);

module.exports = router;