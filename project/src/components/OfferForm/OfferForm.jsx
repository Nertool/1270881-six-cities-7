import React from 'react';
import OfferFormRating from '../OfferFormRating/OfferFormRating';

class OfferForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      comment: '',
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeControl = this.changeControl.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    // console.log(this.state)
    this.clearForm();
  }

  changeControl(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  changeRating(e) {
    this.setState({ [e.target.name]: +e.target.value });
  }

  clearForm() {
    this.setState({
      rating: 0,
      comment: '',
    });
  }

  render() {
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.submitHandler}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>

        <OfferFormRating value={this.state.rating} changeRating={this.changeRating}/>

        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="comment"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this.changeControl}
          value={this.state.comment}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit">Submit</button>
        </div>
        <div>&nbsp;</div>
        <div>Временный блок с данными / рейтинг: {this.state.rating} / комментарий: {this.state.comment}</div>
      </form>
    );
  }
}

export default OfferForm;
