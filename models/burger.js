var orm = require("../config/orm.js");

var burgers = {
    all: function(callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(newBurger, callback) {
      orm.insertOne("burgers", newBurger, function(res) {
        callback(res);
      });
    },
    update: function(eatBurger, callback) {
      orm.updateOne("burgers", eatBurger, function(res) {
        callback(res);
      });
    }
  };

module.exports = burgers;