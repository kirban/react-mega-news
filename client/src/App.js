import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Headlines from './Pages/Headlines';
import Sources from './Pages/Sources';
import './App.css';

export default class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Switch>
					<Route exact path="/" component={Headlines} />
					<Route path="/sources" component={Sources} />
				</Switch>
			</div>
		);
	}
}
