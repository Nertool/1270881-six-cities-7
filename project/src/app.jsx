import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import OffersProp from './pages/offer/offer.prop';

import Main from './pages/main/main';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Offer from './pages/offer/offer';
import NotFound from './pages/not-found/not-found';

function App(props) {
  const { offers,  locations, favorites, near, isLogged } = props;
  const [ isAuth, setIsAuth ] = useState(isLogged);

  function auth() {
    setIsAuth(!isAuth);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main offers={ offers } locations={ locations } isAuth={isAuth} auth={auth} />
        </Route>
        <Route exact path='/login'>
          { isAuth ? <Redirect to="/" /> : <Login auth={auth} /> }
        </Route>
        <Route exact path='/favorites'>
          { !isAuth ? <Redirect to="/login" /> : <Favorites favorites={ favorites } isAuth={isAuth} auth={auth} /> }
        </Route>
        <Route exact path='/offer/:id'>
          <Offer near={ near } isAuth={isAuth} auth={auth} />
        </Route>
        <Route>
          <NotFound isAuth={isAuth} auth={auth} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(OffersProp),
  locations: PropTypes.array.isRequired,
  favorites: PropTypes.arrayOf(OffersProp),
  near: PropTypes.arrayOf(OffersProp),
  isLogged: PropTypes.bool.isRequired,
};

export default App;
