import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import OfferProp from '../../offer.prop';
import useFormatRating from '../../hooks/useFormatRating';
import MainCardPremium from '../main-card-premium/main-card-premium';

function OffersItem(props) {
  const {offer, hoverHandler = () => {}, isAuth} = props;
  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);
  const history = useHistory();

  function toggleFavorite(evt) {
    evt.preventDefault();
    if (isAuth) {
      setIsFavorite(!isFavorite);
    } else {
      history.push('/login');
    }
  }

  return (
    <article className="cities__place-card place-card" onMouseEnter={(e) => { hoverHandler(e, offer.location); }}>

      {offer.isPremium && <MainCardPremium>Premium</MainCardPremium>}

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
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button" onClick={toggleFavorite}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark">
              </use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${useFormatRating(offer.rating)}%` }}>
            </span>
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

OffersItem.propTypes = {
  offer: OfferProp,
  hoverHandler: PropTypes.func,
  isAuth: PropTypes.bool.isRequired,
};

export default OffersItem;
