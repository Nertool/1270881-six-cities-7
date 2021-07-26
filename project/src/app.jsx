import React from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from './pages/main/main';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Offer from './pages/offer/offer';
import NotFound from './pages/not-found/not-found';
import {isAuth} from './utils/isAuth';
import PrivateRoute from './components/private-route/private-route';
import history from './utils/history';
import {getIsDataLoading} from './store/data/selectors';
import {getAuthorizationStatus} from './store/user/selectors';

function App(props) {
  const { authStatus } = props;

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <PrivateRoute exact path='/favorites' render={() => <Favorites />} />
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
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoading: getIsDataLoading(state),
  authStatus: getAuthorizationStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
