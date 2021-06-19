import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginFormControl from '../login-form-control/login-form-control';

function LoginForm(props) {
  const { auth } = props;
  const history = useHistory();

  function submitHandler(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    if (formData.get('email') && formData.get('password')) {
      auth();
      history.push('/');
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

export default LoginForm;
