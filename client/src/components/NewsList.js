//TODO: Rewrite NewsList Component in functional style
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CNewsList extends Component {
	render() {
		console.error('News Props: ', this.props)
		if (this.props.loading) {
			return <span>Loading ...</span>
		}
		if (this.props.error) {
			return <div>{this.props.error.err}</div>
		}
		if (Array.isArray(this.props.news)) {
			return (
				<ul className="news__list">
					{this.props.news.map((n, i) => {
						return (
							<li className="news__item" key={i}>
								<img
									className="news__image"
									alt="newsapi"
									src={n.urlToImage}
									width="100px"
									height="100px"
								/>

								<h3 className="news__title">{n.title}</h3>
								<div className="news__desc">{n.description}</div>
								<div className="news__info">
									<span className="news__author">
										Author:
										{n.author}
									</span>
									<span className="news__pubdate">{n.publishedAt}</span>
								</div>
								<div className="news__details">
									<a className="news__details-link" href={n.url}>
										more info...
									</a>
								</div>
							</li>
						)
					})}
				</ul>
			)
		} else {
			return (
				// <span>{this.props.news.payload.stack}</span>
				<div>{console.log(this.props.news)}</div>
			)
		}
	}
}

const mapStateToProps = state => ({
	news: state.NewsReducer.news,
	loading: state.NewsReducer.loading,
	err: state.NewsReducer.err,
})

export default connect(mapStateToProps)(CNewsList)
