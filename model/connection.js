const mysql = require("mysql");
const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : 'node'
});
conn.connect(function(err){
    if(err) throw err;
    console.log("Connected With Database");
})
module.exports = conn;