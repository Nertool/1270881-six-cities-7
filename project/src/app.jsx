import React from 'react';
import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/main/main';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Offer from './pages/offer/offer';
import NotFound from './pages/not-found/not-found';
import PrivateRoute from './components/private-route/private-route';
import history from './utils/history';

function App() {
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
          <Offer />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
