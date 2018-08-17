import { newsActions } from './Reducers/NewsReducer';
import { sourcesActions } from './Reducers/SourcesReducer';
import { store } from '.';

export const renderNews = (params) => async (dispatch) => {
    dispatch(newsActions.render.loading());
    try {
        console.warn('\n\n\n',params ,'\n\n\n');
        let rBody = (params === undefined) ? { country: 'us' } : params;
        const news = await fetch('/top-headlines', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            responseType: 'json',
            body: JSON.stringify(rBody),
        })
        .then( res => {
            if (res.hasOwnProperty('error') && res.error){
                dispatch(newsActions.render.error(res.payload))
            }
            else {
                return res.json()
            }
        });
        dispatch(newsActions.render.success(news));
    } catch (err) {
        dispatch(newsActions.render.error(err))       //TODO: вывод ошибок
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

export const getCategories = async (dispatch) => {
    try {
         const categories = await fetch('/filters', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({filter: 'category'}),
            responseType: 'json'
         })
         .then( res => res.json())
         .catch(err => {
             throw new err();
         });
         return categories;
    } catch (error) {
        console.error('Error getting cats');
    }
}

export const getLanguages = async () => {
    try {
         const languages = await fetch('/filters', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({filter: 'language'}),
            responseType: 'json'
         })
         .then( res => res.json())
         .catch(err => {
             throw new err();
         });
         return languages;
    } catch (error) {
        console.error('Error getting langs');
    }
}

export const getCountries = async () => {
    try {
        const categories = await fetch('/filters', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({filter: 'country'}),
            responseType: 'json'
         })
         .then( res => res.json())
         .catch(err => {
             throw new err();
         });
         return categories;
    } catch (error) {
        console.error('Error getting countries');
    }
}