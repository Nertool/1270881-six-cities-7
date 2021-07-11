import React, {useEffect, useState} from 'react';
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
import AppLoader from '../../components/app-loader/app-loader';
import {ActionCreator} from '../../store/action';

function Offer(props) {
  const { nearData, isAuth, getOffer, offerData, getNear, reviewsData, getReviews, isDataLoading, setLoading } = props;
  const { id } = useParams();
  const [ isLoadPage, setIsLoadPage ] = useState(true);

  useEffect(() => {
    setLoading(true);
    getOffer(id);
    getReviews(id);
    getNear(id);
  }, [id]);

  useEffect(() => {
    setIsLoadPage(Object.keys(offerData).length === 0);
  }, [offerData]);

  if (isLoadPage || isDataLoading) {
    return (
      <AppLoader />
    );
  }

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

                <OfferReviews reviews={reviewsData} id={+id} />

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
  offerData: PropTypes.shape(OffersProp),
  getNear: PropTypes.func,
  reviewsData: PropTypes.arrayOf(ReviewsProp),
  getReviews: PropTypes.func,
  isDataLoading: PropTypes.bool,
  setLoading: PropTypes.func,
};

const mapStateInProps = (state) => ({
  offerData: state.offerData,
  nearData: state.nearData,
  reviewsData: state.reviews,
  isDataLoading: state.isDataLoading,
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
  setLoading(status) {
    dispatch(ActionCreator.setLoadingPage(status));
  },
});

export {Offer};
export default connect(mapStateInProps, mapDispatchInProps)(Offer);
