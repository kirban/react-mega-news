import { newsActions } from './Reducers/NewsReducer';
import { sourcesActions } from './Reducers/SourcesReducer';
import { store } from '.';

export const renderNews = () => async () => {
    store.dispatch(newsActions.render.loading());
    
    try {
        const news = await fetch('/top-headlines', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            responseType: 'json'
        })
        .then( res => {
            if (res.hasOwnProperty('error') && res.error){
                store.dispatch(newsActions.render.error(res.payload))
            }
            else {
                return res.json()
            }
        });
        store.dispatch(newsActions.render.success(news));
    } catch (err) {
        store.dispatch(newsActions.render.error(err))       //TODO: вывод ошибок
    };
}

export const renderSources = () => async () => {
    store.dispatch(sourcesActions.render.loading());
    try {
        const sources = await fetch('/sources', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            responseType: 'json'
        })
        .then( res => {
            if (res.hasOwnProperty('error') && res.error){
                store.dispatch(sourcesActions.render.error(res.payload))
            }
            else {
                return res.json()
            }
        });
        store.dispatch(sourcesActions.render.success(sources));
    } catch (err) {
        store.dispatch(sourcesActions.render.error(err))       //TODO: вывод ошибок
    };
}

export const searchNews = q => async (dispatch) => {
    dispatch(newsActions.search.loading());

    try {
        const news = await fetch('/search', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: q,
            responseType: 'json'
        })
        .then(res => res.json());
        dispatch(newsActions.search.success(news));
    } catch (err) {
        dispatch(newsActions.search.error(err));
    }
    
};