//search form
import React, { Component } from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
import { store } from '../index';
import { connect } from 'react-redux';
export class CNewsSearch extends Component {
    render(){
        return(
            <Navbar.Form pullRight>
                    <FormGroup>
                        <FormControl id="searchQuery" type="text" placeholder="Search" />
                    </FormGroup>
                    <Button onClick={()=>{
                            let sq = document.getElementById('searchQuery').value;
                            this.props.dispatch({type:'SEARCH_NEWS', payload:{ searchQuery: sq } })
                        }} type="submit">Search</Button>
            </Navbar.Form>
        )
    }
}

export default connect(state => {
    return {
      news: state
    }
  })(CNewsSearch)