import { createActions, handleActions } from 'redux-actions';

export const initialState = {
	category: 'general',
	country: 'us',
	language: 'en',
	err: null,
};

const actions = createActions({
	SET: {
		CATEGORY: {
			SUCCESS: (category) => ({ category }),
			ERROR: (error) => ({ error }),
		},
		COUNTRY: {
			SUCCESS: (country) => ({ country }),
			ERROR: (error) => ({ error }),
		},
		LANGUAGE: {
			SUCCESS: (language) => ({ language }),
			ERROR: (error) => ({ error }),
		},
	},
}).set;

const FilterReducer = handleActions(
	{
		[actions.category.success](state, { payload: { category } }) {
			return Object.assign({}, state, { category, err: null });
		},
		[actions.category.error](state, { payload: { err } }) {
			return { ...state, err };
		},
		[actions.country.success](state, { payload: { country } }) {
			return Object.assign({}, state, { country, err: null });
		},
		[actions.country.error](state, { payload: { err } }) {
			return { ...state, err };
		},
		[actions.language.success](state, { payload: { language } }) {
			return Object.assign({}, state, { language, err: null });
		},
		[actions.language.error](state, { payload: { err } }) {
			return { ...state, err };
		},
	},
	initialState
);

export default FilterReducer;
export { actions as filterActions };
