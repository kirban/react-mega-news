import React, { Component } from 'react';

import CNewsList from './components/NewsList'

import CNewsSearch from './components/Search';

import './App.css';

let REFS = [];
export default class App extends Component { 

  render() {
    return (
      <div>
        <CNewsSearch />
        <CNewsList />
      </div>
    );
  }
}