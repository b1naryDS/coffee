const express = require('express');
const router = express.Router();

const mongoose = require("mongoose");

var db = mongoose.connection;
//const Kava = require("../models/kava");
var Schema = mongoose.Schema;

var kavaSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String, 
  grade: Number,
  id: Number
}, {collection: 'kave'});

var KavaData = mongoose.model('KavaData', kavaSchema);

router.get("/", (req, res, next) => {
  KavaData.find()
      .then(result =>{
        console.log(result);
      })
});
  router.post("/insert", (req, res, next) => {
    const kava = new Kava({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      grade: req.body.grade,
      id: req.body.id,
    });
    console.log(kava);
    //kava
     // .save()
      //.then(result => {
       // console.log(result);
        //res.status(201).json({
         // message: "Handling POST requests to /products",
         // createdProduct: result
        //});
      //})
      //.catch(err => {
       // console.log(err);
        //res.status(500).json({
         //   message: "Handling POST requests to /products"
        //});
      //});
  });

module.exports = router;