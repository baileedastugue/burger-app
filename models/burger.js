// import ORM
var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cd) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;