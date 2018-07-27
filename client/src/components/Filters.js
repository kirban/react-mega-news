import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
class CFilters extends Component {
    render() {
        return (
            <Form className="filters__form" inline>
                <FormGroup className="filters__form-group" controlId="formInlineCountry">
                    <ControlLabel>Country: </ControlLabel>{' '}
                    <FormControl componentClass="select" placeholder="country">
                        <option value="c1">Country 1</option>
                        <option value="c2">Country 2</option>
                    </FormControl>
                </FormGroup>
                <FormGroup className="filters__form-group" controlId="formInlineLanguage">
                    <ControlLabel>Language: </ControlLabel>{' '}
                    <FormControl componentClass="select" placeholder="language">
                        <option value="l1">Language 1</option>
                        <option value="l2">Language 2</option>
                    </FormControl>
                </FormGroup>
                <FormGroup className="filters__form-group" controlId="formInlineCategory">
                    <ControlLabel>Category: </ControlLabel>{' '}
                    <FormControl componentClass="select" placeholder="category">
                        <option value="cat1">Category 1</option>
                        <option value="cat2">Category 2</option>
                    </FormControl>
                </FormGroup>
            </Form>
        );
    }
}

export default CFilters;