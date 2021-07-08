import React from 'react';
import PropTypes from 'prop-types';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';
import ReviewsProp from '../../review.prop';

function OfferReviews({ reviews }) {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews.length }</span></h2>

      <OfferReviewsList reviews={reviews} />
      <OfferReviewsForm />
    </>
  );
}

OfferReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewsProp),
};

export default OfferReviews;
