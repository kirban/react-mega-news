import React, { Component } from 'react';

import CNewsList from './components/NewsList'
// import logo from './logo.svg';

import CNewsSearch from './components/Search'

import './App.css';

let REFS = [];

class App extends Component { 
  
  handleSearch(event){
    let searchQuery = event.target.value.toLowerCase();
    let displayedNews = this.state.displayedNews.filter(function(el){
      let searchValue = el.title.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    })
    
    this.setState({
      displayedNews: displayedNews
    });

  }

  render() {
    return (
      <div className="App">   
        <div>Refinements:</div>
        <ul>
          <li>
            <input className="search__field" type="text" onChange={this.handleSearch} placeholder="Type search phrase here:" />
          </li>
          {
            this.state.displayedNews.map(function(el){
            return (
            <CNewsList 
              key={el.id} 
              title={el.title}
              desc={el.desc}
              image={el.imageurl}
              author={el.author}
              pubdate={el.pubdate}
              url={el.url}
              category={el.category}
              country={el.country}
              source={el.source}
            />
            );
          })}
        </ul>
        
      </div>
    );
  }
}

export default App;