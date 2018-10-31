import { createActions, handleActions } from 'redux-actions';

export const initialState = {
	sources: [],
	err: null,
	loading: null,
};

const actions = createActions({
	SOURCES: {
		RENDER: {
			LOADING: null,
			SUCCESS: (sources) => ({ sources }),
			ERROR: (error) => ({ error }),
		},
	},
}).sources;

const SourcesReducer = handleActions(
	{
		[actions.render.loading](state) {
			return {
				...state,
				sources: [],
				loading: true,
				err: null,
			};
		},
		[actions.render.success](state, { payload: { sources } }) {
			return Object.assign({}, state, { sources, loading: false, err: null });
		},
		[actions.render.error](state, { payload: { err } }) {
			return {
				...state,
				sources: [],
				loading: false,
				err,
			};
		},
	},
	initialState
);

export default SourcesReducer;
export { actions as sourcesActions };
