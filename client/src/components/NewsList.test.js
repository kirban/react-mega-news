import React from 'react'
import { shallow } from 'enzyme'
import { CNewsList } from 'NewsList'

describe('news list', function() {
	const props = {
		news: [],
		loading: null,
		err: null,
	}

	describe('news list is loading', function() {
		it('should should render loading span while news are loading', function() {
			const nextProps = {
				...props,
				loading: true,
			}

			const newsContainer = shallow(<CNewsList {...nextProps} />)
			expect(newsContainer.find('span').text()).toEqual('Loading...')
		})
	})
})
