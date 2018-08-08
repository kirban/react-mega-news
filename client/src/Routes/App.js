import React, { Component } from 'react';

import CNewsList from '../components/NewsList';
import CHeader from '../components/Header';
import CFilters from '../components/Filters';
import '../App.css';
import { store } from '../index';


export default class App extends Component { 

  // static getDerivedStateFromProps(){
    // return store.dispatch({ type: 'REFRESH_NEWS', payload: { currentPage: 'top-headlines' } });
  // }
  state = {  }
  render() {
    return (
      <div className="wrapper">
        <CHeader currentPage="top-headlines"/>
        <CFilters />
        <CNewsList />
      </div>
    );
  }
}