const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config.json');
const db = require('./models/index').sequelize;
const app = express();
const port = process.env.PORT || config.port;
const renderNews = require('./services').renderNews;
const searchNews = require('./services').searchNews;
const renderSources = require('./services').renderSources;
const getFilters = require('./services').getFilters;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
  res.send({
    message: `Hello ${req.body}!`
  })
})

app.post('/top-headlines', renderNews);

app.get('/sources', renderSources);

app.post('/search', searchNews);

app.post('/filters', getFilters);

db.sync({ })
  .then(()=>{
    console.log(`Yeah`);
    app.listen(port);
    console.log(`Server started on port: ${port}`);
  })
  .catch((err)=>{
    console.error(`Something is wrong with your database! Check this: ${err}`);
  })



