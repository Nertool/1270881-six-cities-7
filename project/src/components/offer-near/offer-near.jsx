import React from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../pages/offer/offer.prop';

import MainCard from '../main-card/main-card';

function OfferNear(props) {
  const { near, isAuth } = props;

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">

          {near.map((n) => <MainCard key={n.id} offer={n} isAuth={isAuth}/>)}

        </div>
      </section>
    </div>
  );
}

OfferNear.propTypes = {
  near: PropTypes.arrayOf(OffersProp),
  isAuth: PropTypes.bool.isRequired,
};

export default OfferNear;
