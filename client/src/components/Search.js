//search form
import React, { Component } from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
export class CNewsSearch extends Component {
    render(){
        return(
            
            <Navbar.Form pullRight>
                    <FormGroup>
                        <FormControl id="searchQuery" type="text" placeholder="Search" />
                        <Button onClick={()=>{
                            let sq = document.getElementById('searchQuery').value;                            
                            this.props.dispatch({type:'SEARCH_NEWS', payload:{ currentPage: this.props.currentPage, searchQuery: sq } });                            
                            document.getElementById('searchQuery').value = "";
                        }} type="submit">Search</Button>
                    </FormGroup>
                    
            </Navbar.Form>
        )
    }
}

export default connect(state => {
    return {
      news: state
    }
  })(CNewsSearch)