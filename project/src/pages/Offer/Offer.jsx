import React from 'react';
import PropTypes from 'prop-types';
import OffersProp from './Offer.prop';

import AppHeader from '../../components/AppHeader/AppHeader';
import OfferNear from '../../components/OfferNear/OfferNear';
import OfferForm from '../../components/OfferForm/OfferForm';
import OfferReviews from '../../components/OfferReviews/OfferReviews';
import OfferHost from '../../components/OfferHost/OfferHost';
import OfferInside from '../../components/OfferInside/OfferInside';
import OfferGallery from '../../components/OfferGallery/OfferGallery';
import OfferInfo from '../../components/OfferInfo/OfferInfo';
import OfferMap from '../../components/OfferMap/OfferMap';

function Offer(props) {
  const { near } = props;

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

                <OfferReviews />
                <OfferForm />

              </section>
            </div>
          </div>

          <OfferMap/>

        </section>

        <OfferNear near={near} />

      </main>
    </div>
  );
}

Offer.propTypes = {
  near: PropTypes.arrayOf(OffersProp),
};

export default Offer;
