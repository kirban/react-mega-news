const apiConfig = require('./config/api.json');
const axios = require('axios');
const queryInterface = require('./models').sequelize.queryInterface;
const categoriesModel = require('./models').sequelize.models['Categories'];
const languagesModel = require('./models').sequelize.models['Languages'];
const countriesModel = require('./models').sequelize.models['Countries'];
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

  function renderNews (req, res) {
      try {        
            axios.get(withQuery(apiConfig.mainUrl+'top-headlines', req.body))
            .then(response => {
                res.send(response.data.articles);
                
                if(JSON.stringify(req.body) === JSON.stringify({ country: 'us' })){
                    response.data.articles.forEach(element => insertOrUpdateNews(element));
                }                
            })            
      } catch (error) {
        console.log('\n\n\n\n\n\n\n\n\nERROR RENDERING NEWS:\n\n\n\n\n\n\n\n\n ', error);
        res.send({ error: true, payload: error })// TODO: can be an error
      }
  }

function searchNews (req, res) {
    axios.get(withQuery(apiConfig.mainUrl+'everything', req.body))
        .then(response => {
            res.send(response.data.articles);
        })
        // .catch(e => { res.send({ error: true, payload: e }) })
}

function renderSources (req, res) {                         // that func get sources from API, sends them to frontend, and Database
    axios.get(withQuery(apiConfig.mainUrl+'sources', null))
        .then(resp=>{
            res.send(resp.data.sources);
            resp.data.sources.forEach(element => insertOrUpdateSources(element));  // do THIS BEFORE inserting News            
        })
        // .catch(e => { res.send({ error: true, payload: e }) }) //TODO: вывод ошибок
}

function insertOrUpdateNews(data) {
    return queryInterface.bulkInsert('news', [{
        title: data.title,
        description: data.description,
        url: data.url,
        urlToImage: data.urlToImage,
        publishedAt: data.publishedAt,
        author: data.author,
        source: data.source.id
    }], 
    {
        updateOnDuplicate: ['updatedAt'],   // TODO: Deadlock found when trying to get lock; try restarting transaction
    })
      .catch((err)=>{
          console.error('there is some error in inserting News: \n"', err.parent.sqlMessage, '"');
          queryInterface.bulkDelete('news', {id: data.id});
      });
}


function insertOrUpdateSources(data) {
    return queryInterface.bulkInsert('sources', [{
        id: data.id,
        name: data.name,
        description: data.description,
        url: data.url,
        category: data.category,
        language: data.language,
        country: data.country
    }], 
    {
        updateOnDuplicate: ['updatedAt'],   // TODO: Deadlock found when trying to get lock; try restarting transaction
    }) 
    .catch((err)=>{
        console.error('there is some error in inserting Sources: \n"', err.parent.sqlMessage, '"');
        queryInterface.bulkDelete('sources', {id: data.id});
    });
}

function getFilters(req, res){
    let filterName = req.body.filter;  // { }
    
    switch (filterName){
        case 'country':
            countriesModel.findAll({attributes: ['name'], paranoid: true})
            .then(response => {
                console.log('\n\n\nresponse:',response,'\n\n\n');
                res.send(response);
                return;
            });
            break;
        case 'language':
            languagesModel.findAll({attributes: ['name'], paranoid: true})
            .then(response => {
                res.send(response);
                return;
            });
            break;
        case 'category':
            categoriesModel.findAll({attributes: ['name'], paranoid: true})
            .then(response => {
                res.send(response);
                return;
            });
            break;
        default:
            return;
    }


    
}

exports.renderNews = renderNews;
exports.searchNews = searchNews;
exports.renderSources = renderSources;
exports.getFilters = getFilters;
