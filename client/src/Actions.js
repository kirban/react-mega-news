// import { store } from './index';
//import axios from 'axios';

// let apiKey = '330aba15643547cfa7212c01fb7f664f';
// let mainUrl = 'https://newsapi.org/v2/';

// const withQuery = (url, params) => {
//     let query = Object.keys(params)
//       .filter(k => params[k] !== '' && params[k] !== undefined)
//       .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
//       .join('&');
//     url += (url.indexOf('?') === -1 ? '?' : '&') + query + '&apiKey=' + apiKey;
//     return url;
//   };

// export default function updateNews (endPoint, params){  // endPoint could be: 'top-headlines' - to render news on the main page
//                                                         // and 'everything' - to render news search results       
//         axios.get(withQuery(mainUrl+endPoint, params))
//         .then(response=>{
//             if (response.status === 200) {
//                 store.dispatch({type: 'RENDER_NEWS', payload: response.data.articles});
//                 return response.data.articles;
//             } else{
//                 throw new Error('Response to API status:', response.status);
//             }
//         })

// }

// export function getSources (params = {}) {
//     axios.get(withQuery(mainUrl + 'sources', params))
//     .then(response => {
//         if (response.status === 200) {
//             store.dispatch({type: 'RENDER_NEWS', payload: response.data.sources});
//             return response.data.sources;
//         } else {
//             throw new Error('Response to API status:', response.status);
//         }
//     })
// }

// export function refreshNews(){}
// export function searchNews(){}

import { newsActions } from './Reducers/NewsReducer';
//import { sourcesActions } from './Reducers/SourcesReducer';
import { store } from './index';

export const renderNews = () => async () => {
    store.dispatch(newsActions.render.loading());

    const news = await fetch('/top-headlines', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        responseType: 'json'
    })
    .then ( res => res.json() )
    .then ( res => res)
    .catch(err => store.dispatch(newsActions.render.error(err)));
    
    store.dispatch(newsActions.render.success(news));

}

export const searchNews = q => async (dispatch) => {
    dispatch(newsActions.search.loading());

    const news = await fetch('/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: q,
        responseType: 'json'
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => dispatch(newsActions.search.error(err)));
    
    dispatch(newsActions.search.success(news))
};