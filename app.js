const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

var mongoDB = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;

const kaveRoutes = require('./api/routes/kave');

app.use('/kave', kaveRoutes);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//let uri = `mongodb://127.0.0.1:27017`;

//mongoose.connect(uri,{useMongoClient: true});

//app.get('/', (req, res) => res.send('Hello World!'))
//app.use(bodyParser.urlencoded({extended:true}));

module.exports = app;