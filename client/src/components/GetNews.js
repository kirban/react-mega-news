import React, { Component } from 'react';
import { store } from '../index';
import { connect } from 'react-redux';
//import CNewsList from './NewsList';

export class CGetNews extends Component {

    constructor(props){
        super(props);
        this.state = { displayedNews: this.props.news};
    }

    render(){
        store.subscribe(()=>{
            console.log("store changed", store.getState()); // здесь надо что-то сделать ...
        })
        return (
            <button onClick={() => this.props.dispatch({ type: 'REFRESH_NEWS' })} className="refresh">
                <i className="fas fa-sync"></i>
            </button>
        );
    }
}

export default connect(state => {
    return {
      news: state
    }
  })(CGetNews)