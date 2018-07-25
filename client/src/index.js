import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Routes/App';
import Sources from './Routes/Sources';
import registerServiceWorker from './registerServiceWorker';
import reducer from './Reducers/Reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
// second argument in createstore is for debugging redux


ReactDOM.render(<Provider store={store}>
                    <HashRouter>
                        <div>
                            <Route exact path="/" component={App}></Route>
                            <Route exact path="/sources" component={Sources}></Route>
                        </div>
                    </HashRouter>
                </Provider>, 
    document.getElementById('root'));
registerServiceWorker();