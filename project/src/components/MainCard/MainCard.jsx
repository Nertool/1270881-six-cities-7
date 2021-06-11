import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import OfferProp from '../../pages/Offer/Offer.prop';
import MainCardPremium from '../MainCardPremium/MainCardPremium';

function MainCard(props) {

  const {offer, hover = () => {}} = props;

  function formatRating (value) {
    return value * 100 / 5;
  }

  return (
    <article className="cities__place-card place-card" onMouseEnter={(e) => { hover(e, offer.location); }}>

      {offer.isPremium && <MainCardPremium />}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${formatRating(offer.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

MainCard.propTypes = {
  offer: OfferProp,
  hover: PropTypes.func,
};

export default MainCard;
