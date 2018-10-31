import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import CNewsSearch from './Search';

export default class CHeader extends Component {
	render() {
		return (
			<Navbar fluid inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">React Mega News Project</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<LinkContainer exact to="/">
							<NavItem className="header__nav-item">Top Headlines</NavItem>
						</LinkContainer>

						<LinkContainer exact to="/sources">
							<NavItem className="header__nav-item">Sources</NavItem>
						</LinkContainer>
					</Nav>
					<CNewsSearch />
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
