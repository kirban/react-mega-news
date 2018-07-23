import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import CNewsSearch from '../components/Search';
import  CGetNews from '../components/GetNews';

export default class CHeader extends Component {
    render(){
        return <Navbar fluid inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React Mega News Project</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        
        <Navbar.Collapse>
            <Nav>
                <CGetNews />
            </Nav>
            <CNewsSearch />
        </Navbar.Collapse>
      </Navbar>;
    }
}
