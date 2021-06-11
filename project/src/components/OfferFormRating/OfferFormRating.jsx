import React from 'react';
import PropTypes from 'prop-types';

function OfferFormRating(props) {
  const stars = ['5-stars', '4-stars', '3-stars', '2-stars', '1-stars'];
  const { value, changeRating } = props;

  return (
    <div className="reviews__rating-form form__rating">

      {stars.map((s, i) => <Star value={5 - i} id={s} key={s} changeRating={changeRating} checked={value === (5 - i)} />)}

    </div>
  );
}

function Star(props) {
  const { value, id, changeRating, checked } = props;

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={id} type="radio" onChange={changeRating} checked={checked}/>
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

OfferFormRating.propTypes = {
  value: PropTypes.number.isRequired || PropTypes.string.isRequired,
  changeRating: PropTypes.func.isRequired,
};

Star.propTypes = {
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  changeRating: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default OfferFormRating;
