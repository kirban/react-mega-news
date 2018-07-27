import React, { Component } from 'react';
import { store } from '../index';
import CHeader from '../components/Header';
import CSourcesList from '../components/SourcesList';

class Sources extends Component {
    state = { };
    static getDerivedStateFromProps(){
        return store.dispatch({ type: 'REFRESH_NEWS', payload: { currentPage: 'sources' } });
    }
    render() { 
        return (            
            <div className="wrapper">
                <CHeader currentPage="sources"/>
                <CSourcesList />
            </div>
        );
    }
}
 
export default Sources;