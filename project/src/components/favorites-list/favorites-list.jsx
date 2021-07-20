import React from 'react';
import PropTypes from 'prop-types';
import FavoritesCard from '../favorites-card/favorites-card';
import OffersProp from '../../offer.prop';

function FavoriteList(props) {
  const { cityData } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#s">
            <span>{ cityData.city }</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">

        { cityData.data.map((card) => <FavoritesCard key={card.id} card={card} />) }

      </div>
    </li>
  );
}

FavoriteList.propTypes = {
  cityData: PropTypes.shape({
    city: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape(OffersProp),
    )}),
};

export default FavoriteList;
