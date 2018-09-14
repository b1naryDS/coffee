const express = require('express');
const router = express.Router();

const mongoose = require("mongoose");

var db = mongoose.connection;
//const Kava = require("../models/kava");
var Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

var kavaSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String, 
  grade: Number,
  id: Number
}, {collection: 'kave'}
,{
  versionKey: false // You should be aware of the outcome after set to false
}
);

var KavaData = mongoose.model('KavaData', kavaSchema);


router.get("/", (req, res, next) => {
  KavaData.find()
      .then(result =>{
        console.log(result);
        res.send(result);
      })
});


router.post("/insert", (req, res, next) => {
  const kava = {
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    grade: req.body.grade,
    id: req.body.id,
  };
  console.log("kava");
  console.log(kava);
  var data = new KavaData(kava);
  data
    .save();
  console.log(data);
  res.send(data);
});


router.delete("/delete/:id", (req, res, next) => {
  console.log("ovdje smo");
  console.log(req.params.id);
  //var id = req.params.id;
  KavaData.findByIdAndRemove(req.params.id).exec();
  //res.redirect('/');
  KavaData.find()
      .then(result =>{
        console.log(result);
        res.send(result);
      })
});

router.post("/update/:id",(req,res,next)=>{
  console.log("updejt");
})



module.exports = router;