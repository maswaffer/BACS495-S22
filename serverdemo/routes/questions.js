var express = require('express');
const { route } = require('.');
var router = express.Router();


router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var cursor = db.collection("questions").find();
  cursor.toArray().then(c => res.json(c));
});

router.post("/", function(req, res, next){
  const question = {
    "id": req.body.id,
    "question": req.body.question
  }
  var db = req.app.locals.db; 
  db.collection("questions").insertOne(question); 
  res.json({"message":"question inserted"});
});

router.patch("/", function(req, res, next){
  const question = {
    "id": req.body.id
  }
  var db = req.app.locals.db; 
  db.collection("questions").updateOne(question
                                      , {$set: {"votes": req.body.votes}}
                                      , {upsert: true}); 
  res.json({"message": " - " + req.body.votes + " votes registered for: " + req.body.id});
});

module.exports = router;
