import React from 'react';
import ReactDOM from 'react-dom';

import offers from './mocks/offers';
import locations from './mocks/locations';
import favorites from './mocks/favorites';
import near from './mocks/near';

import App from './App';

ReactDOM.render(
  <App offers={offers} locations={locations} favorites={favorites} near={near} />,
  document.getElementById('root'));
