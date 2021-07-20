import React from 'react';
import useFormatRating from '../../hooks/useFormatRating';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {setFavoriteStatus} from '../../store/api-actions';
import {useFavorite} from '../../hooks/useFavorite';

function OfferInfo(props) {
  const {offerData, authStatus, setFavorite} = props;
  const [isFavorite, toggleFavorite] = useFavorite(offerData, authStatus, setFavorite);

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
        <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button" onClick={toggleFavorite}>
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
  offerData: PropTypes.shape(OffersProp),
  setFavorite: PropTypes.func,
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFavorite(id, value) {
    dispatch(setFavoriteStatus(id, value));
  },
});

export {OfferInfo};
export default connect(mapStateToProps, mapDispatchToProps)(OfferInfo);
