import React, {useState} from 'react';
import OfferReviewsFormRating from '../offer-reviews-form-rating/offer-reviews-form-rating';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getReviewsList, postComment} from '../../store/api-actions';

function OfferReviewsForm ({ id, submitCommentHandler }) {

  const [ formData, setFormData ] = useState({
    rating: 0,
    comment: '',
  });

  const changeRating = (evt) => {
    setFormData({
      ...formData,
      rating: +evt.target.value,
    });
  };

  const changeControl = (evt) => {
    setFormData({
      ...formData,
      comment: evt.target.value,
    });
  };

  const clearForm = () => {
    setFormData({
      ...formData,
      rating: 0,
      comment: '',
    });
  };

  const isValidForm = ({rating, comment}) => rating && comment.length;

  const submitHandler = (evt) => {
    evt.preventDefault();
    submitCommentHandler(id, formData);
    clearForm();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <OfferReviewsFormRating value={formData.rating} changeRating={changeRating}/>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={changeControl}
        value={formData.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValidForm(formData)}>Submit</button>
      </div>
    </form>
  );
}

OfferReviewsForm.propTypes = {
  id: PropTypes.number.isRequired,
  submitCommentHandler: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  submitCommentHandler(id, data) {
    dispatch(postComment(id, data));
    dispatch(getReviewsList(id));
  },
});

export {OfferReviewsForm};
export default connect(null, mapDispatchToProps)(OfferReviewsForm);

