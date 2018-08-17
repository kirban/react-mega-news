import React, { Component } from 'react';
import { store } from '..';
import { connect } from 'react-redux';
import { renderNews, renderSources } from '../Actions';

export class CRefresh extends Component {

    constructor(props){
        super(props);
        this.state = { displayedNews: this.props.news};
        this.resultObject = { }

    }

    static getDerivedStateFromProps(props){
        return props.renderSources();
    }

    

    render(){     
        store.subscribe(()=>{
            console.log('store :', store);
            console.log("store changed", store.getState()); // TODO:здесь надо что-то сделать ...
            let category = { category: store.getState().FiltersReducer.category };
            let country = { country: store.getState().FiltersReducer.country };
            let language = { language: store.getState().FiltersReducer.language };
            this.resultObject = Object.assign(category,country,language);
        })
        return (
            <button onClick={() => {
                if(this.props.currentPage==='top-headlines'){
                    console.warn('this.props.category:',this.props.category);
                    this.props.renderNews(this.resultObject);                     // <- type params here, by default: { country: 'us' }
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
    renderSources,    
};

export default connect(mapStateToProps, mapDispatchToProps)(CRefresh);