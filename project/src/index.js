import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import offers from './mocks/offers';
import locations from './mocks/locations';
import favorites from './mocks/favorites';
import near from './mocks/near';
import reviews from './mocks/reviews';

const IS_AUTH = true;

ReactDOM.render(
  <App offers={offers} locations={locations} favorites={favorites} near={near} isLogged={IS_AUTH} reviews={reviews} />,
  document.getElementById('root'));
