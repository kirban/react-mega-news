//search form
import React, { Component } from 'react';

export default class CNewsSearch extends Component {
    render(){
        return(
        <div>
            <input id="query" type="text" placeholder="Search in API news"/>
            <button onAction={console.log(document.getElementById('query').value)}>Search...</button>
        </div>)
    }
}