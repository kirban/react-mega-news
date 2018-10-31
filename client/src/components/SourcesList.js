import React, { Component } from 'react';
import { connect } from 'react-redux';

class CSourcesList extends Component {
	state = {};

	render() {
		if (Array.isArray(this.props.sources)) {
			return (
				<ul className="sources__list">
					{this.props.sources.map((source, i) => (
						<li className="sources__item" key={i}>
							<a className="source__link" href={source.url}>
								<h4 className="source__name">{source.name}</h4>
							</a>
							<p className="source__desc">{source.description}</p>
							<span className="source__language">
								Language:
								{source.language},{' '}
							</span>
							<span className="source__category">
								Category:
								{source.category},{' '}
							</span>
							<span className="source__country">
								Country:
								{source.country}
							</span>
						</li>
					))}
				</ul>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	sources: state.SourcesReducer.sources,
});

export default connect(mapStateToProps)(CSourcesList);
