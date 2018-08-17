import { createActions, handleActions } from 'redux-actions';

const initialState = {
    category: 'general',
    country: 'us',
    language: 'en'
}

const actions = createActions({
    SET: {
        CATEGORY: {
            SUCCESS: category => ({category}),
            ERROR: error => ({error}),
        },
        COUNTRY: {
            SUCCESS: country => ({country}),
            ERROR: error => ({error}),
        },
        LANGUAGE: {
            SUCCESS: language => ({language}),
            ERROR: error => ({error}),
        }
    }
}).set;

const FilterReducer = handleActions({
    [actions.country.success](state, {payload: {country}}) {
        return Object.assign({}, state, {country  , err: null});
    },
    [actions.category.success](state, {payload: {category}}) {
        return Object.assign({}, state, {category  , err: null});
    },
    [actions.language.success](state, {payload: {language}}) {
        return Object.assign({}, state, {language  , err: null});
    },
},initialState)

export default FilterReducer;
export { actions as filterActions }
