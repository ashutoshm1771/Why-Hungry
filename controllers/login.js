const fs = require('fs');
const { dirname } = require('path');
const appDir = dirname(require.main.filename);
const User = require('../models/user');
const Outlet = require('../models/outlet');
const Vounteer = require('../models/volunteer');
// const outletController = require('../controllers/outlet'); 

const login = (req, res) => {
    User.findOne({ userId: req.body.userId }, (err, data) => {
        if (data && data.password == req.body.password) {
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

const signup = (req, res) => {
    User.findOne({ userId: req.body.userId }, (err, data) => {
        if (!data) {
            const newUser = new User({
                name: req.body.name,
                userId: req.body.userId,
                password: req.body.password,
                email: req.body.email
            })

            newUser.save((err, data)=>{
                if(err) return res.json({Error: err});
                Outlet.find({}, (err, data2)=>{
                    if (err){
                        // outlets = {};
                    }
                    if (data2 && data2.length > 0) {
                        let outlets = data2;
                        res.render(appDir + '/views/viewOutlets.ejs', {outlets: outlets, user: newUser});
                    } else res.render(appDir + '/views/viewOutlets.ejs', {outlets: "No outlets available", user: newUser});
                });
            });
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"User already exists"});
        }
    });
};

const volunteerSignup = (req, res) => {
    Vounteer.findOne({ userId: req.body.userId }, (err, data) => {
        if (!data) {
            const newVolunteer = new Vounteer({
                name: req.body.name,
                userId: req.body.userId,
                password: req.body.password,
                email: req.body.email
            });
            newVolunteer.save((err, data)=>{
                if(err) return res.json({Error: err});
                Outlet.find({}, (err, data2)=>{
                    if (err){
                    }
                    if (data2 && data2.length > 0) {
                        let outlets = data2;
                        res.render(appDir + '/views/viewOutlets.ejs', {outlets: outlets, user: newVolunteer});
                    } else res.render(appDir + '/views/viewOutlets.ejs', {outlets: "No outlets available", user: newVolunteer});
                });
            });
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"User already exists"});
        }
    });
};


module.exports = {
    login,
    signup,
    volunteerSignup
};