var orm = require("../config/orm.js");

var burgers = {
    all: function(callback) {
      orm.all("burgers", function(res) {
        callback(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(newBurger, callback) {
      orm.create("burgers", newBurger, function(res) {
        callback(res);
      });
    },
    update: function(eatBurger, callback) {
      orm.update("burgers", eatBurger, function(res) {
        calback(res);
      });
    }
  };

module.exports = burgers;