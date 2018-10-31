import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducers';
// import registerServiceWorker from './registerServiceWorker';
import App from './App';

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
// registerServiceWorker();