const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const PinCodeSchema = new mongoose.Schema({
    pincode: {type:String, required:true},
    outletId: {type:String, required: true},
    userId: {type:String, required:true},
    createdTime: {type:Date, required:true},
    isExpired: {type:Boolean, required:true},
});

const PinCode = mongoose.model('PinCode', PinCodeSchema);
module.exports = PinCode;
