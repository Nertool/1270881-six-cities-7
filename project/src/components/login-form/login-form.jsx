import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginFormControl from '../login-form-control/login-form-control';
import {login} from '../../store/api-actions';

function LoginForm(props) {
  const { auth } = props;

  function submitHandler(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    if (formData.get('email') && formData.get('password')) {
      auth({
        email: formData.get('email'),
        password: formData.get('password'),
      });
    }
  }

  return (
    <form className="login__form form" action="#" method="post" onSubmit={submitHandler}>

      <LoginFormControl label='E-mail' type='email' name='email' placeholder='Email' />
      <LoginFormControl label='Password' type='password' name='password' placeholder='Password' />

      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

LoginForm.propTypes = {
  auth: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  auth(data) {
    dispatch(login(data));
  },
});

export {LoginForm};
export default connect(null, mapDispatchToProps)(LoginForm);
