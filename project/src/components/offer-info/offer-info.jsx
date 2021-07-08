import React from 'react';
import useFormatRating from '../../hooks/useFormatRating';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';

function OfferInfo({offerData}) {
  return (
    <>
      {
        offerData.isPremium &&
        <div className="property__mark">
          <span>Premium</span>
        </div>
      }
      <div className="property__name-wrapper">
        <h1 className="property__name">
          { offerData.title }
        </h1>
        <button className={`property__bookmark-button button ${offerData.isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark">
            </use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${useFormatRating(offerData.rating)}%`}}>
          </span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{ offerData.rating }</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire" style={{ textTransform: 'capitalize' }}>
          { offerData.type }
        </li>
        <li className="property__feature property__feature--bedrooms">
          { offerData.bedrooms } Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max { offerData.maxAdults } adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{ offerData.price }</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
    </>
  );
}

OfferInfo.propTypes = {
  offerData: PropTypes.arrayOf(OffersProp),
};

export default OfferInfo;
