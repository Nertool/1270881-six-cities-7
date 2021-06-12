import React from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../pages/Offer/Offer.prop';

import MainCard from '../MainCard/MainCard';

function OfferNear(props) {
  const { near } = props;

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">

          {near.map((n) => <MainCard key={n.id} offer={n}/>)}

        </div>
      </section>
    </div>
  );
}

OfferNear.propTypes = {
  near: PropTypes.arrayOf(OffersProp),
};

export default OfferNear;
