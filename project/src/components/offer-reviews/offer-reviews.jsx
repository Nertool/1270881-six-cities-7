import React from 'react';
import PropTypes from 'prop-types';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';
import ReviewsProp from '../../review.prop';
import {isAuth} from '../../utils/isAuth';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';

function OfferReviews({ reviews, id, authStatus }) {
  const reviewsList = reviews.length > 10 ? reviews.slice(reviews.length - 10, reviews.length) : reviews;

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviewsList.length }</span></h2>

      <OfferReviewsList reviews={reviewsList} />
      { isAuth(authStatus) && <OfferReviewsForm id={+id} />}
    </>
  );
}

OfferReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewsProp),
  id: PropTypes.number.isRequired,
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
});

export {OfferReviews};
export default connect(mapStateToProps)(OfferReviews);
