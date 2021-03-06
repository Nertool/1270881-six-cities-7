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
import {getNearInfo, getOfferInfo, getReviewsList} from '../../store/api-actions';
import {useParams} from 'react-router-dom';
import AppLoader from '../../components/app-loader/app-loader';
import {setLoadingPage, setMessageError} from '../../store/action';
import {useLoader} from '../../hooks/useLoader';
import {getIsDataLoading, getNearData, getOfferData, getReviews} from '../../store/data/selectors';

function Offer(props) {
  const { nearData, getOffer, offerData, getNear, reviewsData, getReviewsInfo, isDataLoading, setLoading, clearMessageError } = props;
  const { id } = useParams();
  const isLoadPage = useLoader(offerData);

  clearMessageError('');

  useEffect(() => {
    setLoading(true);
    getOffer(id);
    getReviewsInfo(id);
    getNear(id);
  }, [id, setLoading, getOffer, getReviewsInfo, getNear]);

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

          <OfferGallery images={offerData.images} />

          <div className="property__container container">
            <div className="property__wrapper">

              <OfferInfo offerData={offerData} />
              <OfferInside goods={offerData.goods} />
              <OfferHost host={offerData.host} />

              <section className="property__reviews reviews">

                <OfferReviews reviews={reviewsData} id={+id} />

              </section>
            </div>
          </div>

          <OfferMap near={nearData} currentOfferLocation={offerData.location} />

        </section>

        <OfferNear near={nearData} />

      </main>
    </div>
  );
}

Offer.propTypes = {
  nearData: PropTypes.arrayOf(OffersProp),
  getOffer: PropTypes.func,
  offerData: PropTypes.shape(OffersProp),
  getNear: PropTypes.func,
  reviewsData: PropTypes.arrayOf(ReviewsProp),
  getReviewsInfo: PropTypes.func,
  isDataLoading: PropTypes.bool,
  setLoading: PropTypes.func,
  clearMessageError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offerData: getOfferData(state),
  nearData: getNearData(state),
  reviewsData: getReviews(state),
  isDataLoading: getIsDataLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getOffer(id) {
    dispatch(getOfferInfo(id));
  },
  getReviewsInfo(id) {
    dispatch(getReviewsList(id));
  },
  getNear(id) {
    dispatch(getNearInfo(id));
  },
  setLoading(status) {
    dispatch(setLoadingPage(status));
  },
  clearMessageError() {
    dispatch(setMessageError(''));
  },
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
