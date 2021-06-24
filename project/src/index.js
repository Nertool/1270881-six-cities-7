import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './services/api';
import {reducer} from './store/reducer';
import {fetchOffersList} from './store/api-actions';

import App from './app';

import favorites from './mocks/favorites';
import near from './mocks/near';
import reviews from './mocks/reviews';

const IS_AUTH = true;

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(fetchOffersList());

ReactDOM.render(
  <Provider store={store}>
    <App favorites={favorites} near={near} isLogged={IS_AUTH} reviews={reviews} />
  </Provider>,
  document.getElementById('root'));
