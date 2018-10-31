// search form
import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { searchNews } from '../Actions';

export class CNewsSearch extends Component {
	render() {
		return (
			<Navbar.Form pullRight>
				<FormGroup>
					<FormControl
						inputRef={(input) => (this.keywordInput = input)}
						type="text"
						placeholder="Search"
					/>
					<Button
						onClick={() => {
							// let sq = document.getElementById('searchQuery').value;
							// this.props.dispatch({type:'SEARCH_NEWS', payload:{ currentPage: this.props.currentPage, searchQuery: sq } });
							this.searchNewsHandler();
							// document.getElementById('searchQuery').value = "";
						}}
						type="submit"
					>
						Search
					</Button>
				</FormGroup>
			</Navbar.Form>
		);
	}

	searchNewsHandler = () => {
		const data = JSON.stringify({ q: this.keywordInput.value });

		this.props.searchNews(data);
		this.keywordInput.value = '';
	};
}

const mapStateToProps = (state) => ({
	searchError: state.err,
});

const mapDispatchToProps = {
	searchNews,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CNewsSearch);
