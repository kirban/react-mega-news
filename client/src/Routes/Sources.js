import React, { Component } from 'react';
import CHeader from '../components/Header';
import CSourcesList from '../components/SourcesList';

class Sources extends Component {
    state = { };
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