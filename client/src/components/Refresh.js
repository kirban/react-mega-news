import React, { Component } from 'react';
import { store } from '..';
import { connect } from 'react-redux';
import { renderNews, renderSources } from '../Actions';

export class CRefresh extends Component {
	constructor(props) {
		super(props);
		this.state = { displayedNews: this.props.news };
		this.resultObject = {};
	}

	static getDerivedStateFromProps(props) {
		return props.renderSources();
	}

	render() {
		store.subscribe(() => {
			const category = { category: store.getState().FiltersReducer.category };
			const country = { country: store.getState().FiltersReducer.country };
			const language = { language: store.getState().FiltersReducer.language };

			this.resultObject = Object.assign(category, country, language);
		});
		return (
			<button
				onClick={() => {
					this.props.renderNews(this.resultObject); // <- type params here, by default: { country: 'us' }
				}}
				className="refresh"
			>
				<i className="fas fa-sync" />
			</button>
		);
	}
}

const mapStateToProps = (state) => ({
	renderError: state.err,
});

const mapDispatchToProps = {
	renderNews,
	renderSources,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CRefresh);
