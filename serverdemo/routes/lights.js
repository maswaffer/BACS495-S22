var express = require('express');
const { route } = require('.');
var router = express.Router();


router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  db.collection("lights")
    .findOne()
    .then(result => {
      console.log(result);
      res.json(result)
    });
});

router.post("/", function(req, res, next){
  const lightcolor = req.body.color;
  console.log(lightcolor);
  var db = req.app.locals.db; 
  db.collection("lights").updateOne(
    {"current": "true"},
    {
      $set:{
        "color": lightcolor
      }
    },
    {upsert: true}
  ); 
  res.json({"message":"color updated"});
});

module.exports = router;
