//const apiConfig = require('./config/api.json');
const axios = require('axios');

const apiKey = '330aba15643547cfa7212c01fb7f664f';
const mainUrl = 'https://newsapi.org/v2/';

const withQuery = (url, params) => {
    let query = Object.keys(params)
      .filter(k => params[k] !== '' && params[k] !== undefined)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    url += (url.indexOf('?') === -1 ? '?' : '&') + query + '&apiKey=' + apiKey;
    return url;
  };

function renderNews (req, res, params) {
    axios.get(withQuery(mainUrl+'top-headlines', {country: 'us'}))
        .then(resp=>{
            res.send(resp.data.articles);
            return resp.data.articles;
        })
        .catch(e => {console.error('External API Error!', e);})
}

function search (req, res, params) {
    axios.get(withQuery())
}

exports.renderNews = renderNews;
exports.search = search;

