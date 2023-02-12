const { time } = require('console');
const { dirname } = require('path');
const PinCode = require('../models/pincode');
const appDir = dirname(require.main.filename);

const viewpinCode = (req, res) => {
    let userId = req.params.userId;
    let outletId = req.params.outletId;
    let pinCode = generatePinCode(userId, outletId);
    //console.log(pinCode);
    let pCode = (Math.floor(1000 + Math.random() * 9000)) % 4;
    let pins = [1313, 6754, 4323, 5676];
    res.render(appDir + '/views/viewPinCode.ejs', {pinCode: pins[pCode], userId: userId, outletId: outletId});
};

const generatePinCode = (userId, outletId) => {
    const newPinCode = new PinCode({
        pincode: Math.floor(100000 + Math.random() * 900000),
        outletId: outletId,
        userId: userId,
        createdTime: new Date().getTime(),
        isExpired: false
    });
    
    newPinCode.save((err, data)=>{
        if(err) return res.json({Error: err});
        else return newPinCode;
    });
}

module.exports = {
    viewpinCode,
};