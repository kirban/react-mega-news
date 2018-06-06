let mysql = require('mysql');

//    user     : 'db_user',
//password : 'sGf90_14yJs'
var connection = mysql.createConnection({
    host     : 'localhost:3000',
    user     : 'node_admin',
    password : 'sfYj_98iUw'
  });

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });