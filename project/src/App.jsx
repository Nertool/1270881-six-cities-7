import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import Offer from './pages/Offer/Offer';
import NotFound from './pages/NotFound/NotFound';


function App({hotels}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main hotels={hotels} />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/favorites'>
          <Favorites/>
        </Route>
        <Route exact path='/offer/:id'>
          <Offer/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  hotels: PropTypes.array.isRequired,
};

export default App;
