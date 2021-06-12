import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import OffersProp from './pages/Offer/Offer.prop';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import Offer from './pages/Offer/Offer';
import NotFound from './pages/NotFound/NotFound';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: props.offers,
      locations: props.locations,
      favorites: props.favorites,
      near: props.near,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main offers={this.state.offers} locations={this.state.locations} />
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/favorites'>
            <Favorites favorites={this.state.favorites} />
          </Route>
          <Route exact path='/offer/:id'>
            <Offer near={this.state.near} />
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(OffersProp),
  locations: PropTypes.array.isRequired,
  favorites: PropTypes.arrayOf(OffersProp),
  near: PropTypes.arrayOf(OffersProp),
};

export default App;
