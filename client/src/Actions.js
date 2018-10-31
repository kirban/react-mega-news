import { newsActions } from './Reducers/NewsReducer';
import { sourcesActions } from './Reducers/SourcesReducer';
import { filterActions } from './Reducers/FiltersReducer';

export const renderNews = (params) => async (dispatch) => {
	dispatch(newsActions.render.loading());
	try {
		const rBody = params === undefined ? { country: 'us' } : params;
		const news = await fetch('/top-headlines', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			responseType: 'json',
			body: JSON.stringify(rBody),
		}).then((res) => {
			if (res.error) {
				dispatch(newsActions.render.error(res.payload));
			} else {
				return res.json();
			}
		});

		dispatch(newsActions.render.success(news));
	} catch (err) {
		dispatch(newsActions.render.error(err)); // TODO: вывод ошибок
	}
};

export const renderSources = () => async (dispatch) => {
	dispatch(sourcesActions.render.loading());
	try {
		const sources = await fetch('/sources', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			responseType: 'json',
		}).then((res) => {
			if (res.error) {
				dispatch(sourcesActions.render.error(res.payload));
			} else {
				return res.json();
			}
		});

		dispatch(sourcesActions.render.success(sources));
	} catch (err) {
		dispatch(sourcesActions.render.error(err)); // TODO: вывод ошибок
	}
};

export const searchNews = (q) => async (dispatch) => {
	dispatch(newsActions.search.loading());
	try {
		const news = await fetch('/search', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: q,
			responseType: 'json',
		}).then((res) => res.json());

		dispatch(newsActions.search.success(news));
	} catch (err) {
		dispatch(newsActions.search.error(err));
	}
};

export const getCategories = async (dispatch) => {
	try {
		const categories = await fetch('/filters', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ filter: 'category' }),
			responseType: 'json',
		})
			.then((res) => res.json())
			.catch((err) => {
				throw new err();
			});

		
        //dispatch(filterActions.category.success(categories));
		return categories;
	} catch (error) {
		dispatch(filterActions.categories.error(error));
	}
};

export const getLanguages = async (dispatch) => {
	try {
		const languages = await fetch('/filters', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ filter: 'language' }),
			responseType: 'json',
		})
			.then((res) => res.json())
			.catch((err) => {
				throw new err();
			});
		//dispatch(filterActions.languages.success(languages));
		return languages;
	} catch (error) {
		console.error('Error getting langs');
		dispatch(filterActions.languages.error(error));
	}
};

export const getCountries = async (dispatch) => {
	try {
		const categories = await fetch('/filters', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ filter: 'country' }),
			responseType: 'json',
		})
			.then((res) => res.json())
			.catch((err) => {
				throw new err();
			});
		//dispatch(filterActions.countries.success(categories));
		return categories;
	} catch (error) {
		console.error('Error getting countries');
		dispatch(filterActions.countries.error(error));
	}
};
