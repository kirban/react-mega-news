import NewsReducer, { initialState, newsActions } from './NewsReducer';

describe('NewsReducer state changing tests', () => {
	// Testing render
	it('should render-loading', () => {
		const actionLoading = newsActions.render.loading(); // should have a value {type: "NEWS/RENDER/LOADING"}

		expect(NewsReducer(initialState, actionLoading)).toEqual({
			...initialState,
			loading: true,
			news: [],
			err: null,
		});
	});
	it('should render-success', () => {
		const actionSuccess = newsActions.render.success();

		expect(NewsReducer(initialState, actionSuccess)).toEqual({
			...initialState,
			news: actionSuccess.payload.news,
			loading: false,
			err: null,
		});
	});
	it('should render-error', () => {
		const actionError = newsActions.render.error();

		expect(NewsReducer(initialState, actionError)).toEqual({
			...initialState,
			loading: false,
			news: [],
			err: actionError.payload.err,
		});
	});
	// Testing search
	it('should search-loading', () => {
		const actionLoading = newsActions.search.loading(); // should have a value {type: "NEWS/SEARCH/LOADING"}

		expect(NewsReducer(initialState, actionLoading)).toEqual({
			...initialState,
			news: [],
			loading: true,
			err: null,
		});
	});
	it('should search-success', () => {
		const actionSuccess = newsActions.search.success();

		expect(NewsReducer(initialState, actionSuccess)).toEqual({
			...initialState,
			news: actionSuccess.payload.news,
			loading: false,
			err: null,
		});
	});
	it('should search-error', () => {
		const actionError = newsActions.search.error();

		expect(NewsReducer(initialState, actionError)).toEqual({
			...initialState,
			loading: false,
			news: [],
			err: actionError.payload.err,
		});
	});
});
