import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
// second argument in createstore is for debugging redux
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
    document.getElementById('root'));
registerServiceWorker();