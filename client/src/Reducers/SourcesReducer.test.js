import SourcesReducer, { initialState, sourcesActions } from './SourcesReducer';

describe('SourcesReducer state changing tests', () => {
	// Testing render
	it('should render-loading', () => {
		const actionLoading = sourcesActions.render.loading(); // should have a value {type: "SOURCES/RENDER/LOADING"}

		expect(SourcesReducer(initialState, actionLoading)).toEqual({
			...initialState,
			loading: true,
			sources: [],
			err: null,
		});
	});
	it('should render-success', () => {
		const actionSuccess = sourcesActions.render.success();

		expect(SourcesReducer(initialState, actionSuccess)).toEqual({
			...initialState,
			sources: actionSuccess.payload.sources,
			loading: false,
			err: null,
		});
	});
	it('should render-error', () => {
		const actionError = sourcesActions.render.error();

		expect(SourcesReducer(initialState, actionError)).toEqual({
			...initialState,
			loading: false,
			sources: [],
			err: actionError.payload.err,
		});
	});
});
