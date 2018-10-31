import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { getCategories, getLanguages, getCountries } from '../Actions';
import { filterActions } from '../Reducers/FiltersReducer';
import { store } from '..';

export default class CFilters extends Component {
	constructor(params) {
		super(params);
		this.state = {
			categoriesArr: [],
			langsArr: [],
			countriesArr: [],
			country: 'us',
			language: 'en',
			category: 'general',
		};

		this.handleCountryChange = this.handleCountryChange.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleLanguageChange = this.handleLanguageChange.bind(this);
	}

	componentWillMount() {
		this.getCats().then((result) => this.setState({ categoriesArr: result }));
		this.getLangs().then((result) => this.setState({ langsArr: result }));
		this.getCountrs().then((result) => this.setState({ countriesArr: result }));
	}

	handleCountryChange(event) {
		this.setState({ ...this.state, country: event.target.value });
		store.dispatch(filterActions.country.success(event.target.value));
	}

	handleLanguageChange(event) {
		this.setState({ ...this.state, language: event.target.value });
		store.dispatch(filterActions.language.success(event.target.value));
	}

	handleCategoryChange(event) {
		this.setState({ ...this.state, category: event.target.value });
		store.dispatch(filterActions.category.success(event.target.value));
	}

	getCountrs() {
		return getCountries();
	}

	getLangs() {
		return getLanguages();
	}

	getCats() {
		return getCategories();
	}

	render() {
		return (
			<Form className="filters__form" inline>
				<FormGroup
					className="filters__form-group"
					controlId="formInlineCountry"
				>
					<ControlLabel>Country: </ControlLabel>{' '}
					<FormControl
						componentClass="select"
						value={this.state.country}
						onChange={this.handleCountryChange}
						placeholder="Choose country:"
					>
						{this.state.countriesArr.map((element, i) => (
							<option key={i} value={element.name}>
								{element.name}
							</option>
						))}
					</FormControl>
				</FormGroup>
				<FormGroup
					className="filters__form-group"
					controlId="formInlineLanguage"
				>
					<ControlLabel>Language: </ControlLabel>{' '}
					<FormControl
						componentClass="select"
						value={this.state.language}
						onChange={this.handleLanguageChange}
						placeholder="language"
					>
						{this.state.langsArr.map((element, i) => (
							<option key={i} value={element.name}>
								{element.name}
							</option>
						))}
					</FormControl>
				</FormGroup>
				<FormGroup
					className="filters__form-group"
					controlId="formInlineCategory"
				>
					<ControlLabel>Category: </ControlLabel>{' '}
					<FormControl
						componentClass="select"
						value={this.state.category}
						onChange={this.handleCategoryChange}
						placeholder="category"
					>
						{this.state.categoriesArr.map((element, i) => (
							<option key={i} value={element.name}>
								{element.name}
							</option>
						))}
					</FormControl>
				</FormGroup>
			</Form>
		);
	}
}
