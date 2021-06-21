import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import offers from './mocks/offers';
import locations from './mocks/locations';
import favorites from './mocks/favorites';
import near from './mocks/near';

const IS_AUTH = true;
// test

ReactDOM.render(
  <App offers={offers} locations={locations} favorites={favorites} near={near} isLogged={IS_AUTH} />,
  document.getElementById('root'));
