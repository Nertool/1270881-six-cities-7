import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

            <Link className={`header__logo-link ${document.location.pathname === '/' ? 'header__logo-link--active' : ''}`} to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>

          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to='/favorites' className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#s">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>

          {/*не авторизован*/}

          {/*<nav className="header__nav">*/}
          {/*  <ul className="header__nav-list">*/}
          {/*    <li className="header__nav-item user">*/}
          {/*      <a className="header__nav-link header__nav-link--profile" href="#s">*/}
          {/*        <div className="header__avatar-wrapper user__avatar-wrapper">*/}
          {/*        </div>*/}
          {/*        <span className="header__login">Sign in</span>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}

        </div>
      </div>
    </header>
  );
}

export default Header;
