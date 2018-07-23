//search form
import React, { Component } from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
export default class CNewsSearch extends Component {
    render(){
        return(
            <Navbar.Form pullRight>
                    <FormGroup>
                        <FormControl id="searchQuery" type="text" placeholder="Search" />
                    </FormGroup>
                    <Button type="submit">Search</Button>
            </Navbar.Form>
        )
    }
}