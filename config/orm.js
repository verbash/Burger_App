// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================


var orm = {



    selectAll: function(input, callBack) {
        var s = "SELECT * FROM " + input + ";";
        connection.query(s , function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);

        });
    },

    insertOne: function(input, newBurger, callBack) {
        var s = "INSERT INTO " + input + " (burger_name, devoured) VALUES(" + newBurger + ", false);"
        connection.query(s, function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },

    updateOne: function(input, eatBurger, callBack) {
        var s = "UPDATE " + input + " SET devoured = true WHERE burger_name = " + eatBurger + ";";
        connection.query(s, function(err,result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },

};

module.exports = orm;