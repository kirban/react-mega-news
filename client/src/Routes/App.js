import React, { Component } from 'react';

import CNewsList from '../components/NewsList';
import CHeader from '../components/Header';
import CFilters from '../components/Filters';
import '../App.css';


export default class App extends Component { 

  state = {  }
  render() {
    return (
      <div className="wrapper">
        <CHeader currentPage="top-headlines" category="ss"/>
        <CFilters />
        <CNewsList />
      </div>
    );
  }
}