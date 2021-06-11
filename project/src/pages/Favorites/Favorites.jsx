import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../../components/AppHeader/AppHeader';
import AppFooter from '../../components/AppFooter/AppFooter';
import FavoriteList from '../../components/FavoriteList/FavoriteList';
import OffersProp from '../Offer/Offer.prop';

function Favorites(props) {
  const { favorites } = props;

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

      <AppHeader />

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
};

export default Favorites;
