// const fs = require('fs');
// const { dirname } = require('path');
// const appDir = dirname(require.main.filename);
//const checkPasswordServices = require('../services/checkPassword'); 


const getPassword = (req, res) => {
    //checkPasswordServices.getPassword(req, res);
};

const checkPassword = (req, res) => {
    //checkPasswordServices.checkPassword(req, res);
    //res.sendFile(__dirname + '/views/index.html');
};

module.exports = {
    getPassword,
    checkPassword,
};