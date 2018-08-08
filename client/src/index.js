import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Routes/App';
import Sources from './Routes/Sources';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './Reducers/index';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)) )


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