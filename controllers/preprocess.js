// const fs = require('fs');
// const { dirname } = require('path');
// const appDir = dirname(require.main.filename);
//const preprocessServices = require('../services/preprocess'); 


const addFile = (req, res) => {
    //preprocessServices.preprocessFile(req, res);
};

const checkFileStatus = (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
};

module.exports = {
    addFile,
    checkFileStatus,
};