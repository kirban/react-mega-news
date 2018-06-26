import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../App.js';
class CNewsList extends Component{
  
  handleSearch(event){
    let searchQuery = event.target.value.toLowerCase();
    
    // let displayedNews = this.news.filter(function(el){
    //   let searchValue = el.title.toLowerCase();
    //   return searchValue.indexOf(searchQuery) !== -1;
    // })
    
    // this.state = {
    //   displayedNews: displayedNews
    // };

  }

  render(){
    let newsList = this.props.news;
    console.log(newsList);

    return (
      <ul className="news__list">
      <li>
        <input className="search__field" type="text" onChange={
          event => {
            let searchQuery = event.target.value.toLowerCase();
            let displayedNews = this.props.news.filter(el => {
              let searchValue = el.title.toLowerCase();
              return searchValue.indexOf(searchQuery) !== -1;
            });

            console.log(this.props.dispatch({ type:'SEARCH_NEWS', dNews: displayedNews }))

          }
        } placeholder="Type search phrase here:" />
      </li>
      <li>
        <button onClick={() => this.props.dispatch({ type: 'REFRESH_NEWS' })}>Refresh news</button>
      </li>
      {this.props.news.map(n=>{
          return (
            <li className="news__item" key={n.id}>
              <img className="news__image" src={n.imageurl} width="100px" height="100px" />
              <div className="news__pre">
                <span>Category: {n.category}</span>
                <span>Country: {n.country}</span>
              </div>
              
              <h3 className="news__title">{n.title}</h3>
              <div className="news__desc">{n.desc}</div>
              <div className="news__info">
                <span className="news__author">Author:{n.author}</span>
                <span className="news__pubdate">{n.pubdate}</span>
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
}

export default connect(state => {
  return {
    news: state
  }
})(CNewsList)