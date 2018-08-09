  //connecting to mysql sT16ui24st16ui24 - nodeadmin

const express = require('express');
const config = require('./config/config.json');
const db = require('./models/index').sequelize;
const app = express();
const port = process.env.PORT || config.port;
const renderNews = require('./services').renderNews;
const search = require('./services').search;

app.get("/", (req,res)=>{
  res.send({
    message: `Hello ${req.body}!`
  })
})

app.get('/top-headlines', renderNews);

app.post('/search', search);

db.sync({ })
  .then(()=>{
    console.log(`Yeah`);
    app.listen(port);
    console.log(`Server started on port: ${port}`);
  })
  .catch((err)=>{
    console.error(`Something is wrong with your database! Check this: ${err}`);
  })



