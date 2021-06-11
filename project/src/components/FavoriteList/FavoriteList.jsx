import React from 'react';
import PropTypes from 'prop-types';

import FavoriteCard from '../FavoriteCard/FavoriteCard';
import OffersProp from '../../pages/Offer/Offer.prop';

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

        { cityData.data.map((card) => <FavoriteCard key={card.id} card={card} />) }

      </div>
    </li>
  );
}

FavoriteList.propTypes = {
  cityData: PropTypes.shape({
    city: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape(OffersProp),
    )})};

export default FavoriteList;
