import { Component } from 'react';
import updateNews from '../Actions';
//import CNewsList from './NewsList';

export default class CGetNews extends Component {

    constructor(props){
        super(props);
        this.state = { displayedNews: this.props.news};
    }

    render(){
        // updateNews();
        return null;
    }
}