import React, {useState} from 'react';
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

function App(props) {
  const { favorites, near, isLogged, reviews, isDataLoading } = props;
  const [ isAuth, setIsAuth ] = useState(isLogged);

  function auth() {
    setIsAuth(!isAuth);
  }

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
          { isAuth ? <Redirect to="/" /> : <Login auth={auth} /> }
        </Route>
        <Route exact path='/favorites'>
          { !isAuth ? <Redirect to="/login" /> : <Favorites favorites={ favorites } isAuth={isAuth} auth={auth} /> }
        </Route>
        <Route exact path='/offer/:id'>
          <Offer near={ near } isAuth={isAuth} auth={auth} reviews={reviews} />
        </Route>
        <Route>
          <NotFound isAuth={isAuth} auth={auth} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  favorites: PropTypes.arrayOf(OffersProp),
  near: PropTypes.arrayOf(OffersProp),
  isLogged: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(ReviewsProp),
  isDataLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoading: state.isDataLoading,
});

export {App};
export default connect(mapStateToProps)(App);
