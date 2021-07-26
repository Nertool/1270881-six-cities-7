import React, {useState} from 'react';
import OfferReviewsFormRating from '../offer-reviews-form-rating/offer-reviews-form-rating';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getReviewsList, postComment} from '../../store/api-actions';
import {getMessageError} from "../../store/app-action/selectors";

function OfferReviewsForm ({ id, submitCommentHandler, messageError }) {

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

  const isValidForm = ({rating, comment}) => rating && comment.length >= 50;

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
        maxLength="500"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValidForm(formData)}>Submit</button>
      </div>
      { messageError.length > 0 && <div style={{ color: '#ec364e' }}>Error: Request failed with status code 400</div> }
    </form>
  );
}

OfferReviewsForm.propTypes = {
  id: PropTypes.number.isRequired,
  submitCommentHandler: PropTypes.func,
  messageError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  messageError: getMessageError(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitCommentHandler(id, data) {
    dispatch(postComment(id, data));
  },
});

export {OfferReviewsForm};
export default connect(mapStateToProps, mapDispatchToProps)(OfferReviewsForm);

