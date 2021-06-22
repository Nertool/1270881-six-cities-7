import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../../components/app-header/app-header';
import AppFooter from '../../components/app-footer/app-footer';
import FavoriteList from '../../components/favorites-list/favorites-list';
import OffersProp from '../../offer.prop';

function Favorites(props) {
  const { favorites, isAuth, auth } = props;

  const cities = [];
  const favoriteData = [];

  favorites.map((item) => {
    if (!cities.includes(item.city.name)) {
      cities.push(item.city.name);
      favoriteData.push({
        city: item.city.name,
        data: [item],
      });
    } else {
      const index = cities.indexOf(item.city.name);
      const data = favoriteData[index].data;
      data.push(item);
    }
    return item;
  });

  return (
    <div className="page">

      <AppHeader isAuth={isAuth} auth={auth} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              { favoriteData.map((cityData) => <FavoriteList key={cityData.city} cityData={cityData} />) }

            </ul>
          </section>
        </div>
      </main>

      <AppFooter />

    </div>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(OffersProp),
  isAuth: PropTypes.bool.isRequired,
  auth: PropTypes.func.isRequired,
};

export default Favorites;
