const apiConfig = require('./config/api.json');
const axios = require('axios');
const queryInterface = require('./models').sequelize.queryInterface;
const newsModel = require('./models').sequelize.models['News'];
const sourcesModel = require('./models').sequelize.models['Sources'];
const Sequelize = require('sequelize');

const withQuery = (url, params) => {                    // that func adds params to url used in query to external API
    if (params === null){
        return url = url + '?apiKey=' + apiConfig.apiKey;
    }
    let query = Object.keys(params)
      .filter(k => params[k] !== '' && params[k] !== undefined)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    url += (url.indexOf('?') === -1 ? '?' : '&') + query + '&apiKey=' + apiConfig.apiKey;
    return url;
  };

function renderNews (req, res) {                        // that func get news from API, sends them to frontend, and Database
    axios.get(withQuery(apiConfig.mainUrl+'top-headlines', {country: 'us'}))
        .then(resp=>{
            res.send(resp.data.articles);
            resp.data.articles.forEach(element => insertOrUpdateNews(element));
        })
        .catch(e => { res.send({ error: true, payload: e }) }) //TODO: вывод ошибок
}

function searchNews (req, res) {
    axios.get(withQuery(apiConfig.mainUrl+'everything', req.body))
        .then(response => {
            res.send(response.data.articles);
        })
        .catch(e => { res.send({ error: true, payload: e }) })
}

function renderSources (req, res) {                         // that func get sources from API, sends them to frontend, and Database
    axios.get(withQuery(apiConfig.mainUrl+'sources', null))
        .then(resp=>{
            res.send(resp.data.sources);
            resp.data.sources.forEach(element => insertOrUpdateSources(element));  // do THIS BEFORE inserting News            
        })
        .catch(e => { res.send({ error: true, payload: e }) }) //TODO: вывод ошибок
}

function insertOrUpdateNews(data) {
    return queryInterface.upsert('news', {
        title: data.title,
        description: data.description,
        url: data.url,
        urlToImage: data.urlToImage,
        publishedAt: data.publishedAt,
        author: data.author,
        source: data.source.id
      },
      {
        title: data.title,
        description: data.description,
        url: data.url,
        urlToImage: data.urlToImage,
        publishedAt: data.publishedAt,
        author: data.author,
        source: data.source.id,
        updatedAt: Sequelize.literal('NOW()')
      },
    {},newsModel,{})   
      .catch((err)=>{
          console.error('there is some error in inserting News: \n"', err.parent.sqlMessage, '"');
          queryInterface.bulkDelete('news', {id: data.id});
      });
}


function insertOrUpdateSources(data) {
    return queryInterface.upsert('sources', {
        id: data.id,
        name: data.name,
        description: data.description,
        url: data.url,
        category: data.category,
        language: data.language,
        country: data.country
      },
      {
        id: data.id,
        name: data.name,
        description: data.description,
        url: data.url,
        category: data.category,
        language: data.language,
        country: data.country,
        updatedAt: Sequelize.literal('NOW()')
      },
    {},sourcesModel,{})   
      .catch((err)=>{
          console.error('there is some error in inserting Sources: \n"', err.parent.sqlMessage, '"');
          queryInterface.bulkDelete('sources', {id: data.id});
      });
}

exports.renderNews = renderNews;
exports.searchNews = searchNews;
exports.renderSources = renderSources;
