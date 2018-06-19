// *****
// This code will run after building an application. Its' purpose is to create user,
// create database, create tables and rows
// *****

var mysql = require('mysql'); 

let mysql = require('mysql');

// Configuring database settings:
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'nodeadmin',
    password : 'sT16ui24st16ui24'
  });

  //connecting to mysql
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //checking that db not exists (else drop database) and create new
    console.log(connection.query("SHOW DATABASES LIKE 'reactMegaNews'"));
  });


