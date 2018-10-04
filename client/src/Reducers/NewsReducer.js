import { createActions, handleActions } from 'redux-actions'

const initialState = {
	news: [],
	err: null,
	loading: null,
}

const actions = createActions({
	NEWS: {
		SEARCH: {
			LOADING: null,
			SUCCESS: news => ({ news }),
			ERROR: error => ({ error }),
		},
		RENDER: {
			LOADING: null,
			SUCCESS: news => ({ news }),
			ERROR: error => ({ error }),
		},
	},
}).news

const NewsReducer = handleActions(
	{
		[actions.search.loading](state) {
			return { ...state, news: [], loading: true, err: null }
		},
		[actions.search.success](state, { payload: { news } }) {
			return Object.assign({}, state, { news, loading: false, err: null })
		},
		[actions.search.error](state, { payload: { err } }) {
			return { ...state, news: [], loading: false, err: err }
		},
		[actions.render.loading](state) {
			return { ...state, loading: true, news: [], err: null }
		},
		[actions.render.success](state, { payload: { news } }) {
			return Object.assign({}, state, { news, loading: false, err: null })
		},
		[actions.render.error](state, { payload: { err } }) {
			return { ...state, loading: false, news: [], err: err } //TODO: вывод ошибок
		},
	},
	initialState,
)

export default NewsReducer
export { actions as newsActions }
