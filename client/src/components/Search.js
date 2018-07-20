//search form
import React, { Component } from 'react';

export default class CNewsSearch extends Component {
    render(){
        return(
        <div>
            <input id="query" type="text" placeholder="Search in API news"/>
            <button >Search...</button>
        </div>)
    }
}