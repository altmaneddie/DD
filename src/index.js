import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import freezeState from 'redux-freeze-state';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const mapStateToProps = (state) => ({ app: state.app });

const logger           = createLogger();
const middlewares      = [thunk, logger];
const appStore         = createStore(freezeState(rootReducer), applyMiddleware(...middlewares));
const appDomElement    = document.getElementById('root');
const DDApp            = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={appStore}>
    <DDApp />
  </Provider>,
  appDomElement
);

registerServiceWorker();