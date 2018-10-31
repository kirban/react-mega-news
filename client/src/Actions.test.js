import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';

import { renderNews } from './Actions';
import { newsActions } from './Reducers/NewsReducer';
import { filterActions } from './Reducers/FiltersReducer';
import { sourcesActions } from './Reducers/SourcesReducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockResult = [
	{
		title: 'first',
	},
	{
		title: 'second',
	},
	{
		title: 'third',
	},
];

describe('NewsActions', () => {
	describe('async actions', () => {
		afterEach(() => {
			fetchMock.reset();
			fetchMock.restore();
		});

		it('creates NEWS/RENDER/SUCCESS when fetching news has been done', () => {
			/*
                {
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ news:[{ title: 'first' }, { title: 'second' }, { title: 'third' }] })
            }
            */
			fetchMock.postOnce('/top-headlines', mockResult);

			const expectedActions = [
				newsActions.render.loading(), // {type: 'NEWS/RENDER/LOADING'}
				newsActions.render.success(mockResult), // {type: 'NEWS/RENDER/SUCCESS', payload: (...mockResult)}
			];

			const store = mockStore({});

			return store.dispatch(renderNews()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});
});
