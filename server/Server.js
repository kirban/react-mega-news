let mysql = require('mysql');

// Configuring database settings:
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'nodeadmin',
    password : 'sT16ui24st16ui24'
  });

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//-------------------------------------------------

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
  connection.query("SELECT * FROM reactMegaNews.categories;", function(error,rows,field){
    if(error){
      console.log('Error in query!');
    }
    else{
      console.log('Successful query!\n');
      console.log(rows[0]);
    }
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));

