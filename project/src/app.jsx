import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import OffersProp from './offer.prop';
import ReviewsProp from './review.prop';
import {connect} from 'react-redux';
import Main from './pages/main/main';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Offer from './pages/offer/offer';
import NotFound from './pages/not-found/not-found';
import AppLoader from './components/app-loader/app-loader';
import {AuthStatus} from './const';
import PrivateRoute from './components/private-route/private-route';

function App(props) {
  const { favorites, near, reviews, isDataLoading, authStatus } = props;

  const isAuth = authStatus === AuthStatus.AUTH;

  const auth = () => {
    // checkAuth()
  };

  if (isDataLoading) {
    return (
      <AppLoader />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main isAuth={isAuth} auth={auth} />
        </Route>
        <Route exact path='/login'>
          { isAuth ? <Redirect to="/" /> : <Login /> }
        </Route>
        <PrivateRoute exact path='/favorites' render={() => <Favorites favorites={favorites} />} />
        <Route exact path='/offer/:id'>
          <Offer near={near} isAuth={isAuth} reviews={reviews} />
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
  near: PropTypes.arrayOf(OffersProp),
  reviews: PropTypes.arrayOf(ReviewsProp),
  isDataLoading: PropTypes.bool.isRequired,
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoading: state.isDataLoading,
  authStatus: state.authorizationStatus,
});

export {App};
export default connect(mapStateToProps)(App);
