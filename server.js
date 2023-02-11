const express = require('express');
const cors = require('cors')
const bodyParser= require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const app = express();
const fs = require('fs');
// require('dotenv').config();
require('dotenv').config({path: __dirname + '/.env'})

const MongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb+srv://dbUser:dbUser@cluster0.rwjjuit.mongodb.net/?retryWrites=true&w=majority';



const preprocessRoutes = require('./routes/preprocess');
const checkPasswordRoutes = require('./routes/checkPassword');


app.use(cors());
app.use(express.json());

app.use(helmet());
app.use(compression());

app.listen(3000, function() {
    console.log('listening on 3000')
    
})




app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

MongoClient.connect(connectionString, {
    useUnifiedTopology: true
}, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
});

app.use('/', preprocessRoutes);
app.use('/', checkPasswordRoutes);


app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

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