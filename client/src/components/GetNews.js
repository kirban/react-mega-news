import React, { Component } from 'react';
import { store } from '../index';
import { connect } from 'react-redux';
import { renderNews } from '../Actions';

export class CGetNews extends Component {

    constructor(props){
        super(props);
        this.state = { displayedNews: this.props.news};
    }

    render(){
        store.subscribe(()=>{
            console.log("store changed", store.getState()); // TODO:здесь надо что-то сделать ...
        })
        return (
            <button onClick={() => this.props.renderNews()} className="refresh">
                <i className="fas fa-sync"></i>                
            </button>
        );
    }
}

const mapStateToProps = state => ({
    renderError: state.err
});

const mapDispatchToProps = {
    renderNews
};

export default connect(mapStateToProps, mapDispatchToProps)(CGetNews);