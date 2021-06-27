import React from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import ReviewsProp from '../../review.prop';

import AppHeader from '../../components/app-header/app-header';
import OfferNear from '../../components/offer-near/offer-near';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import OfferHost from '../../components/offer-host/offer-host';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInfo from '../../components/offer-info/offer-info';
import OfferMap from '../../components/offer-map/offer-map';

function Offer(props) {
  const { near, isAuth, reviews } = props;

  return (
    <div className="page">

      <AppHeader />

      <main className="page__main page__main--property">
        <section className="property">

          <OfferGallery />

          <div className="property__container container">
            <div className="property__wrapper">

              <OfferInfo />
              <OfferInside />
              <OfferHost />

              <section className="property__reviews reviews">

                <OfferReviews reviews={reviews} />

              </section>
            </div>
          </div>

          <OfferMap near={near} />

        </section>

        <OfferNear near={near} isAuth={isAuth} />

      </main>
    </div>
  );
}

Offer.propTypes = {
  near: PropTypes.arrayOf(OffersProp),
  isAuth: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(ReviewsProp),
};

export default Offer;
