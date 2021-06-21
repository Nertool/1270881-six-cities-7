import React from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import OffersItem from '../offers-item/offers-item';

function OffersList(props) {

  const { data, isAuth, className } = props;

  return (
    <div className={`places__list ${className}`}>
      {data.map((item) => <OffersItem key={item.id} offer={item} isAuth={isAuth} {...props} />)}
    </div>
  );
}

OffersList.propTypes = {
  data: PropTypes.arrayOf(OffersProp),
  isAuth: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default OffersList;
