import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import ReviewsProp from '../../review.prop';
import {connect} from 'react-redux';
import AppHeader from '../../components/app-header/app-header';
import OfferNear from '../../components/offer-near/offer-near';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import OfferHost from '../../components/offer-host/offer-host';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInfo from '../../components/offer-info/offer-info';
import OfferMap from '../../components/offer-map/offer-map';
import {getNearData, getOfferData, getReviewsList} from '../../store/api-actions';
import {useParams} from 'react-router-dom';

function Offer(props) {
  const { nearData, isAuth, getOffer, offerData, getNear, reviewsData, getReviews } = props;
  const { id } = useParams();

  useEffect(() => {
    getOffer(id);
    getReviews(id);
    getNear(id);
  }, [id]);

  return (
    <div className="page">

      <AppHeader />

      <main className="page__main page__main--property">
        <section className="property">

          <OfferGallery images={offerData.images ?? []} />

          <div className="property__container container">
            <div className="property__wrapper">

              <OfferInfo offerData={offerData} />
              <OfferInside goods={offerData.goods ?? []} />
              <OfferHost host={offerData.host ?? {}} />

              <section className="property__reviews reviews">

                <OfferReviews reviews={reviewsData} />

              </section>
            </div>
          </div>

          { nearData.length && <OfferMap near={nearData}  /> }

        </section>

        <OfferNear near={nearData} isAuth={isAuth} />

      </main>
    </div>
  );
}

Offer.propTypes = {
  nearData: PropTypes.arrayOf(OffersProp),
  isAuth: PropTypes.bool.isRequired,
  getOffer: PropTypes.func,
  offerData: PropTypes.object.isRequired,
  getNear: PropTypes.func,
  reviewsData: PropTypes.arrayOf(ReviewsProp),
  getReviews: PropTypes.func,
};

const mapStateInProps = (state) => ({
  offerData: state.offerData,
  nearData: state.nearData,
  reviewsData: state.reviews,
});

const mapDispatchInProps = (dispatch) => ({
  getOffer(id) {
    dispatch(getOfferData(id));
  },
  getReviews(id) {
    dispatch(getReviewsList(id));
  },
  getNear(id) {
    dispatch(getNearData(id));
  },
});

export {Offer};
export default connect(mapStateInProps, mapDispatchInProps)(Offer);
