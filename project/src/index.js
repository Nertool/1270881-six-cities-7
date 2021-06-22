import React from 'react';
import ReactDOM from 'react-dom';
import {reducer} from './store/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './app';

import offers from './mocks/offers';
import favorites from './mocks/favorites';
import near from './mocks/near';
import reviews from './mocks/reviews';

const IS_AUTH = true;

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App offers={offers} favorites={favorites} near={near} isLogged={IS_AUTH} reviews={reviews} />
  </Provider>,
  document.getElementById('root'));
