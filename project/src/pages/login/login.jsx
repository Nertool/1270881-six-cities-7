import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../../components/app-header/app-header';
import LoginForm from '../../components/login-form/login-form';

function Login(props) {
  const { auth } = props;
  return (
    <div className="page page--gray page--login">

      <AppHeader isAuth={false} auth={auth} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <LoginForm auth={auth} />

          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#s" >
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Login.propTypes = {
  auth: PropTypes.func.isRequired,
};

export default Login;
