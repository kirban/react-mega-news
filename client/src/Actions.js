import { store } from './index';
import axios from 'axios';

let apiKey = '330aba15643547cfa7212c01fb7f664f';
let mainUrl = 'https://newsapi.org/v2/';

const withQuery = (url, params) => {
    let query = Object.keys(params)
      .filter(k => params[k] !== '' && params[k] !== undefined)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    url += (url.indexOf('?') === -1 ? '?' : '&') + query + '&apiKey=' + apiKey;
    return url;
  };

export default function updateNews (endPoint, params){
        
        axios.get(withQuery(mainUrl+endPoint, params))
        .then(response=>{
            if (response.status === 200) {
                store.dispatch({type: 'RENDER_NEWS', payload: response.data.articles});
                return response.data.articles;
            }
            throw new Error('Response to API status:', response.status);
        })

}
