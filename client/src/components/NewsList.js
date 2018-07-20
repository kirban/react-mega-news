import React, { Component } from 'react';
import { connect } from 'react-redux';

class CNewsList extends Component {

    constructor(props){
        super(props);
        this.state = { displayedNews: this.props.news};
    }

  render() {
    return (
      <ul className="news__list">
      <li>
        <input className="search__field" onChange={this.handleSearch.bind(this)} placeholder="Type search phrase here:" />
      </li>
      <li>
        <button onClick={() => this.props.dispatch({ type: 'REFRESH_NEWS' })}>Refresh news</button>
      </li>
      {this.state.displayedNews.map(n=>{
          return (
            <li className="news__item" key={n.id}>
              <img className="news__image" src={n.urlToImage} width="100px" height="100px" />
              <div className="news__pre">
                <span>Category: {n.category}</span>
                <span>Country: {n.country}</span>
              </div>
              
              <h3 className="news__title">{n.title}</h3>
              <div className="news__desc">{n.description}</div>
              <div className="news__info">
                <span className="news__author">Author:{n.author}</span>
                <span className="news__pubdate">{n.publishedAt}</span>
              </div>
              <div className="news__details">
                <a className="news__details-link" href={n.url}>more info...</a>
              </div>
            </li>
          )
        })
      }
      </ul>
    )
  }

  handleSearch = (event) => {
    let searchQuery = event.target.value.toLowerCase();

    let filteredList = this.props.news.filter(el => {
      let searchValue = el.title.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    })

    this.setState({displayedNews: filteredList});
  }

}

export default connect(state => {
  return {
    news: state
  }
})(CNewsList)