import React, { Component } from 'react';
import { store } from '..';
import { connect } from 'react-redux';
import { renderNews, renderSources } from '../Actions';

export class CRefresh extends Component {

    constructor(props){
        super(props);
        this.state = { displayedNews: this.props.news};
    }

    static getDerivedStateFromProps(){
        renderSources();
    }

    render(){
        store.subscribe(()=>{
            console.log("store changed", store.getState()); // TODO:здесь надо что-то сделать ...
        })
        return (
            <button onClick={() => {
                if(this.props.currentPage==='top-headlines'){
                    this.props.renderNews()
                }
                else if (this.props.currentPage==='sources'){
                    this.props.renderSources()
                }
            }} className="refresh">
                <i className="fas fa-sync"></i>                
            </button>
        );
    }
}

const mapStateToProps = state => ({
    renderError: state.err
});

const mapDispatchToProps = {
    renderNews,
    renderSources
};

export default connect(mapStateToProps, mapDispatchToProps)(CRefresh);