const Outlet = require('../models/outlet');
const User = require('../models/user');
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

const getOutlet = (req, res) => {
    Outlet.find({}, (err, data2)=>{
        if (err){
            outlets = {};
        }
        if (data2 && data2.length > 0) {
            let outlets = data2;
            res.render(appDir + '/views/homepage.ejs', {outlets: outlets});
        } else res.render(appDir + '/views/homepage.ejs', {outlets: "No outlets available"});
    });
};

const viewOutlets = (req, res) => {
    let userId = req.params.userId;
    User.findOne({ userId: userId }, (err, data) => {
        if (data) {
            Outlet.find({}, (err, data2)=>{
                if (err){
                    outlets = {};
                }
                if (data2 && data2.length > 0) {
                    let outlets = data2;
                    res.render(appDir + '/views/viewOutlets.ejs', {outlets: outlets, user: data});
                } else res.render(appDir + '/views/viewOutlets.ejs', {outlets: "No outlets available", user: data});
            });
        } else {
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            res.render(appDir + '/views/index.ejs', {message: "invalid credentials"});
        }
    });
};

const addOutlet = (req, res) => {
    Outlet.findOne({ email: req.body.email }, (err, data) => {
        if (!data) {
            const newOutlet = new Outlet({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location
            });
            
            newOutlet.save((err, data)=>{
                if(err) return res.json({Error: err});
                let outlets;
                Outlet.find({}, (err, data2)=>{
                    if (err){
                        outlets = {};
                    }
                    if (data2 && data2.length > 0) {
                        let outlets = data2;
                        res.render(appDir + '/views/homepage.ejs', {outlets: outlets});
                    } else res.render(appDir + '/views/homepage.ejs', {outlets: "No outlets available"});
                });
                
            });
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"Outlet already exists"});
        }
    });
};

module.exports = {
    getOutlet,
    addOutlet,
    viewOutlets
};