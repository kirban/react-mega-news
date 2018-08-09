//const apiConfig = require('./config/api.json');
const axios = require('axios');

const apiKey = '330aba15643547cfa7212c01fb7f664f';
const mainUrl = 'https://newsapi.org/v2/';

const withQuery = (url, params) => {
    if (params === null){
        return url = url + '?apiKey=' + apiKey;
    }
    let query = Object.keys(params)
      .filter(k => params[k] !== '' && params[k] !== undefined)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    url += (url.indexOf('?') === -1 ? '?' : '&') + query + '&apiKey=' + apiKey;
    return url;
  };

function renderNews (req, res) {
    axios.get(withQuery(mainUrl+'top-headlines', {country: 'us'}))
        .then(resp=>{
            res.send(resp.data.articles);
            return resp.data.articles;
        })
        .catch(e => { res.send({ error: true, payload: e }) }) //TODO: вывод ошибок
}

function searchNews (req, res) {
    axios.get(withQuery(mainUrl+'everything', req.body))
        .then(response => {
            res.send(response.data.articles);
            return response.data.articles;
        })
        .catch(e => { res.send({ error: true, payload: e }) })
}

function renderSources (req, res) {
    axios.get(withQuery(mainUrl+'sources', null))
        .then(resp=>{
            res.send(resp.data.sources);
            return resp.data.sources;
        })
        .catch(e => { res.send({ error: true, payload: e }) }) //TODO: вывод ошибок
}

exports.renderNews = renderNews;
exports.searchNews = searchNews;
exports.renderSources = renderSources;
