import React from 'react';
import CHeader from '../components/Header';
import CNewsList from '../components/NewsList';
import CFilters from '../components/Filters';
import CRefresh from '../components/Refresh';

export default class Headlines extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<CHeader />
				<CRefresh />
				<CFilters />
				<CNewsList />
			</div>
		);
	}
}
