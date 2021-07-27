import React from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';

import OffersList from '../offers-list/offers-list';

function OfferNear(props) {
  const { near } = props;

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>

        <OffersList data={near} className='near-places__list' />

      </section>
    </div>
  );
}

OfferNear.propTypes = {
  near: PropTypes.arrayOf(OffersProp),
};

export default OfferNear;
