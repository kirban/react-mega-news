import React, { Component } from 'react';

import CNewsList from './components/NewsList'

import CNewsSearch from './components/Search';

import './App.css';
import CGetNews from './components/GetNews';

let REFS = [];

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=330aba15643547cfa7212c01fb7f664f';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//       console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
//       console.log(response.status); // 200
//       return response.json();
//      })
//      .then(function(res){
//        console.log(res.articles);
//      })

export default class App extends Component { 

  render() {
    return (
      <div>
        <CGetNews />
        <CNewsSearch />
        <CNewsList />
      </div>
    );
  }
}