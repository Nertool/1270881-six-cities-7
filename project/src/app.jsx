import React from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import OffersProp from './offer.prop';
import {connect} from 'react-redux';
import Main from './pages/main/main';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Offer from './pages/offer/offer';
import NotFound from './pages/not-found/not-found';
import {isAuth} from './const';
import PrivateRoute from './components/private-route/private-route';
import history from './utils/history';

function App(props) {
  const { favorites, authStatus } = props;

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path='/'>
          <Main isAuth={isAuth(authStatus)} />
        </Route>
        <Route exact path='/login'>
          { isAuth(authStatus) ? <Redirect to="/" /> : <Login /> }
        </Route>
        <PrivateRoute exact path='/favorites' render={() => <Favorites favorites={favorites} />} />
        <Route exact path='/offer/:id'>
          <Offer isAuth={isAuth(authStatus)} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  favorites: PropTypes.arrayOf(OffersProp),
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoading: state.isDataLoading,
  authStatus: state.authorizationStatus,
});

export {App};
export default connect(mapStateToProps)(App);
