import { createActions, handleActions } from 'redux-actions';

const initialState = {
    sources: [],
    err: null
}

const actions = createActions({
    SOURCES: {
        RENDER: {
            LOADING: null,
            SUCCESS: sources => ({sources}),
            ERROR: error => ({error})
        }
    }   
}).sources;

const SourcesReducer = handleActions({
    [actions.render.loading](state) {
        return {...state, sources: [], err: null};
    },
    [actions.render.success](state, {payload: {sources}}) {
        return Object.assign({}, state, {sources, err: null});
    },
    [actions.render.error](state, {payload: {err}}) {
        return {...state, sources: [], err: err};
    }
}, initialState)

export default SourcesReducer;
export { actions as sourcesActions };