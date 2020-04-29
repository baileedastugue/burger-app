// require the connection to MySQL
var connection = require("./connection.js");

function questionMarks(number) {
    var qArray = [];
    for (var i = 0; i < number; i++) {
        qArray.push("?");
    }
    return qArray.toString();
}

// MySQL commands 
var orm = {
    // selectAll
    selectAll: function(table, cb) {
        var qString = "SELECT * FROM ? ;";
        connection.query(qString, [table], function(err, result) {
            if (err) throw err;
            // this passes the result from the database to another function
            console.log(result);
            cb(result);
        })
    },
    // insertOne - insert into table (burger_name) values (?)
    insertOne: function(table, cols, vals, cb) {
        var qString = "INSERT INTO " + table + " (";
        qString += cols.toString(); + ") VALUES (";
        qString += questionMarks(vals.length) + ");";
        connection.query(qString, vals, function(err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    // updateOne - UPDATE burgers SET ?? 

};
// export the orm object