const mongoose = require("mongoose");

const VounteerSchema = new mongoose.Schema({
    name: {type:String, required:true},
    vounteerId: {type:String, required:true},
    password: {type:String, required:true},
    email: {type:String}
});

const Vounteer = mongoose.model('Vounteer', VounteerSchema);
module.exports = Vounteer;
