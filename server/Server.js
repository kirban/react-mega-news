  //connecting to mysql sT16ui24st16ui24 - nodeadmin

const express = require('express');
const config = require('./config/config.json');
const db = require('./models/index').sequelize;
const app = express();
const port = process.env.PORT || config.port;


console.log(`Db: ${Object.keys(db)}`);
app.post("/", (req,res)=>{
  res.send({
    message: `Hello ${req.body}!`
  })
})

//console.log(`Here's bd: ${Object.keys(db.Sequelize)} `);
db.sync({ })
  .then(()=>{
    console.log(`Yeah`);
    app.listen(port);
    console.log(`Server started on port: ${port}`);
  })
  .catch((err)=>{
    console.error(`Something is wrong with your database! Check this: ${err}`);
  })


