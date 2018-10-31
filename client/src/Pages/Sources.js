import React from 'react';
import CHeader from '../components/Header';
import CSourcesList from '../components/SourcesList';

export default class Sources extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<CHeader />
				<CSourcesList />
			</div>
		);
	}
}
