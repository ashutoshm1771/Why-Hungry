const express = require('express');
const router  = express.Router(); 

const preprocessController = require('../controllers/preprocess'); 
router.post('/api/file', preprocessController.addFile); 
router.get('/api/file/status', preprocessController.checkFileStatus);
module.exports = router;