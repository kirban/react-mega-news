import React, { Component } from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import CNewsSearch from '../components/Search';
import CGetNews from '../components/GetNews';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default class CHeader extends Component {
    render(){
        return <Navbar fluid inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
              <Link to="/">React Mega News Project</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>        
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/">
                    <NavItem className="header__nav-item">Top Headlines</NavItem>
                </LinkContainer>

                <LinkContainer to="/sources">
                    <NavItem className="header__nav-item">Sources</NavItem>
                </LinkContainer>             
{console.log('current: ',this.props.currentPage)}
                <CGetNews currentPage={this.props.currentPage}/>    
            </Nav>
            <CNewsSearch currentPage={this.props.currentPage}/>
        </Navbar.Collapse>
      </Navbar>;
    }
}
