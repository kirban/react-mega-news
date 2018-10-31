import FilterReducer, { initialState, filterActions } from './FiltersReducer';

describe('FilterReducer state changing tests', () => {
	// Testing category
	it('should set category success', () => {
		const actionSetCategorySuccess = filterActions.category.success();

		expect(FilterReducer(initialState, actionSetCategorySuccess)).toEqual({
			...initialState,
			category: actionSetCategorySuccess.payload.category,
		});
	});
	it('should set category error', () => {
		const actionSetCategoryError = filterActions.category.error();

		expect(FilterReducer(initialState, actionSetCategoryError)).toEqual({
			...initialState,
			err: actionSetCategoryError.payload.err,
		});
	});
	it('should set country success', () => {
		const actionSetCountrySuccess = filterActions.country.success();

		expect(FilterReducer(initialState, actionSetCountrySuccess)).toEqual({
			...initialState,
			country: actionSetCountrySuccess.payload.country,
		});
	});
	it('should set country error', () => {
		const actionSetCountryError = filterActions.country.error();

		expect(FilterReducer(initialState, actionSetCountryError)).toEqual({
			...initialState,
			err: actionSetCountryError.payload.err,
		});
	});
	it('should set language success', () => {
		const actionSetLanguageSuccess = filterActions.language.success();

		expect(FilterReducer(initialState, actionSetLanguageSuccess)).toEqual({
			...initialState,
			language: actionSetLanguageSuccess.payload.language,
		});
	});
	it('should set language error', () => {
		const actionSetLanguageError = filterActions.language.error();

		expect(FilterReducer(initialState, actionSetLanguageError)).toEqual({
			...initialState,
			err: actionSetLanguageError.payload.err,
		});
	});
});
