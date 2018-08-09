import { createActions, handleActions } from 'redux-actions';

const initialState = {
    news: [],
    err: null
}

const actions = createActions({
    NEWS: {
        SEARCH: {
            LOADING: null,
            SUCCESS: news => ({news}),
            ERROR: error => ({error})
        },
        RENDER: {
            LOADING: null,
            SUCCESS: news => ({news}),
            ERROR: error => ({error})
        }
    }   
}).news;

const NewsReducer = handleActions({
    [actions.search.loading](state) {
        return {...state, news: [], err: null};
    },
    [actions.search.success](state, {payload: {news}}) {
        return Object.assign({}, state, {news, err: null});
    },
    [actions.search.error](state, {payload: {err}}) {
        return {...state, news: [], err: err};
    },
    [actions.render.loading](state) {
        return {...state, news: [], err: null};
    },
    [actions.render.success](state, {payload: {news}}) {
        return Object.assign({}, state, {news, err: null});
    },
    [actions.render.error](state, {payload: {err}}) {
        console.warn(err);
        return {...state, news: [], err: err};              //TODO: вывод ошибок
    }
}, initialState)

export default NewsReducer;
export { actions as newsActions }