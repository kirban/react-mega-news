import { store } from './index';

export default function updateNews (country='us', sources='', apiKey='330aba15643547cfa7212c01fb7f664f'){
    var url = `https://newsapi.org/v2/top-headlines?${ sources !== '' ? `sources=` + sources : `country=` + country }&apiKey=${ apiKey }`;
    
        var req = new Request(url);
        fetch(req)
            .then(function(response) {
                return ((response.headers.get('Content-Type') === "application/json; charset=utf-8") && (response.status === 200)) ? response.json() : console.error('Connection to API Error!');
            })
            .then(function(res){
                //console.log(res.articles);
                store.dispatch({type: 'RENDER_NEWS', payload: res.articles});
                return res.articles;     //вот тут надо как-то передать массив новостей                  
            })
}
