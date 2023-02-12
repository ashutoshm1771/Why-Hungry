const express = require('express');
const cors = require('cors')
const bodyParser= require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
// require('dotenv').config();
require('dotenv').config({path: __dirname + '/.env'})
const MongoClient = require('mongodb').MongoClient;
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://dbUser:dbUser@cluster0.rwjjuit.mongodb.net/?retryWrites=true&w=majority';



const loginRoutes = require('./routes/login');
const pinCodeRoutes = require('./routes/pinCode');
const outletRoutes = require('./routes/outlet');
// /api/add/outlet

app.use(cors());
app.use(express.json());

app.use(helmet());
app.use(compression());

app.use(express.static('views'));
app.use(express.static('public'));

app.listen(3000, function() {
    console.log('listening on 3000')
    
});

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

mongoose.connect(
    connectionString, {
        useUnifiedTopology: true
      }, 
    (err, client) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

app.use('/', loginRoutes);
app.use('/', pinCodeRoutes);
app.use('/', outletRoutes);

app.get('/', function (req, res) {
    res.render('index.ejs', {message: "", outletMessage: ""});
});

app.get('/home', function (req, res) {
    res.render('indexsnip.ejs', {message: "", outletMessage: ""});
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/views/adminPanel.html')
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/views/signup.html')
});

// app.get('/home', (req, res) => {
//     res.render('homepage.ejs');
// });

// app.get('/quotes', (req, res) => {
//     console.log(global.bf.toString(16));
//     console.log(req.body);
//     fs.appendFile(__dirname + "/file/test.txt", req.body['name'] + '\n', function(err) {
//         if(err) {
//             return console.log(err);
//         }
//         console.log("The file was saved!");
//     });
//     // res.render('index.ejs', { quotes: req.body })
//     res.redirect('/')
// });