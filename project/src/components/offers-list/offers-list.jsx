import React from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import OffersItem from '../offers-item/offers-item';
import {connect} from 'react-redux';

function OffersList(props) {
  const { data, className } = props;

  return (
    <div className={`places__list ${className}`}>
      {data.map((item) => <OffersItem key={item.id} offer={item} {...props} />)}
    </div>
  );
}

OffersList.propTypes = {
  data: PropTypes.arrayOf(OffersProp),
  className: PropTypes.string.isRequired,
};

export {OffersList};
export default connect(null, null)(OffersList);
