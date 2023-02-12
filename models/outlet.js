const mongoose = require("mongoose");

const OutletSchema = new mongoose.Schema({
    name: {type:String, required:true},
    outletId: {type:String},
    password: {type:String, required:true},
    email: {type:String, required:true},
    location: {type:String, required:true},
    numberOfBoxes: {type:String, required: true},
    availableItemsCount: {type:String},
    rating: {type:String},
    offers: {type:String}
});

const Outlet = mongoose.model('Outlet', OutletSchema);
module.exports = Outlet;
