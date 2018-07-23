import { Component } from 'react';
import { store } from '../index';

//import CNewsList from './NewsList';

export default class CGetNews extends Component {

    constructor(props){
        super(props);
        this.state = { displayedNews: this.props.news};
    }

    render(){
        store.subscribe(()=>{
            console.log("store changed", store.getState());
        })
        return null;
    }
}