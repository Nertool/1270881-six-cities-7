import React from 'react';
import PropTypes from 'prop-types';
import OfferReviewsItem from '../offer-reviews-item/offer-reviews-item';
import ReviewsProp from '../../review.prop';

function OfferReviewsList({ reviews }) {
  return (
    <ul className="reviews__list">

      {reviews.map((review) => <OfferReviewsItem key={review.id} review={review} />)}

    </ul>
  );
}

OfferReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewsProp),
};

export default OfferReviewsList;
