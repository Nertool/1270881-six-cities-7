import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './services/api';
import {reducer} from './store/reducer';
import {checkAuth} from './store/api-actions';
import {AuthStatus} from './const';
import {setAuthStatus} from './store/action';

import App from './app';

import favorites from './mocks/favorites';

const api = createAPI(
  () => store.dispatch(setAuthStatus(AuthStatus.NOT_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(checkAuth());

ReactDOM.render(
  <Provider store={store}>
    <App favorites={favorites} />
  </Provider>,
  document.getElementById('root'));
