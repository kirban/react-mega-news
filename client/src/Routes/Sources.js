import React, { Component } from 'react';
import { store } from '../index';
import CHeader from '../components/Header';
import CSourcesList from '../components/SourcesList';

class Sources extends Component {
    static getDerivedStateFromProps(){
        return store.dispatch({ type: 'REFRESH_NEWS', payload: { currentPage: 'sources' } });
    }

    render() { 
        return (
            
            <div className="wrapper">
                <CHeader currentPage="top-headlines"/>
                <CSourcesList />
            </div>
        );
    }
}
 
export default Sources;