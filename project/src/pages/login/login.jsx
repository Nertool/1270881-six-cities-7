import React, {useEffect} from 'react';
import AppHeader from '../../components/app-header/app-header';
import LoginForm from '../../components/login-form/login-form';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {isAuth} from '../../utils/isAuth';
import history from '../../utils/history';

function Login(props) {
  const { authStatus } = props;
  const isAuthStatus = isAuth(authStatus);

  useEffect(() => {
    if (isAuthStatus) {
      history.push('/');
    }
  }, [authStatus]);

  return (
    <div className="page page--gray page--login">

      <AppHeader />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <LoginForm />

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
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
});

export {Login};
export default connect(mapStateToProps, null)(Login);
