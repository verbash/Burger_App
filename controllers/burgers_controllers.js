var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
    burgers.all(function(burgerData) {
      var burgerObject = {
        burger_data: burgerData
      };
      console.log(burgerObject);
      console.log(burgerData[0].devoured);
      res.render("index", burgerObject);
    });
  });
  
  router.post('/api/burgers', function(req, res) {
    burgers.create(req.body.burgers, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put('/api/burgers/:id', function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.update({
      sleepy: req.body.sleepy
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  




module.exports = router;