import React, { Component } from 'react';

import CNewsList from './components/NewsList';
import CHeader from './components/Header';
import './App.css';

// let REFS = [];
export default class App extends Component { 

  render() {
    return (
      <div>
        <CHeader />
        <CNewsList />
      </div>
    );
  }
}