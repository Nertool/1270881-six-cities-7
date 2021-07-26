import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../store/api-actions';
import {isAuth} from '../../utils/isAuth';
import {getAuthorizationStatus, getUserData} from '../../store/user/selectors';

function AppHeader(props) {
  const { authStatus, userLogout, userData } = props;
  const { email } = userData;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

            <Link className={`header__logo-link ${document.location.pathname === '/' ? 'header__logo-link--active' : ''}`} to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>

          </div>

          {
            isAuth(authStatus) &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to='/favorites' className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{ email }</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#s" onClick={userLogout}>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          }

          {
            !isAuth(authStatus) &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  );
}

AppHeader.propTypes = {
  authStatus: PropTypes.string.isRequired,
  userLogout: PropTypes.func.isRequired,
  userData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({
  userLogout(evt) {
    evt.preventDefault();
    dispatch(logout());
  },
});

export {AppHeader};
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
