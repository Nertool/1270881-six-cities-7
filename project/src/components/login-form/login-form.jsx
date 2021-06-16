import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

function LoginForm(props) {
  const { auth } = props;
  const history = useHistory();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  function changeControl(evt) {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function submitHandler(evt) {
    evt.preventDefault();
    if (userData.email && userData.password) {
      auth();
      history.push('/');
    }
  }

  return (
    <form className="login__form form" action="#" method="post" onSubmit={submitHandler}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={changeControl} value={userData.email}/>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={changeControl} value={userData.password} />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

LoginForm.propTypes = {
  auth: PropTypes.func.isRequired,
};

export default LoginForm;
