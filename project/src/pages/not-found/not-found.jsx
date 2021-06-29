import React from 'react';
import {Link} from 'react-router-dom';
import style from './not-found.module.css';
import AppHeader from '../../components/app-header/app-header';
import AppFooter from '../../components/app-footer/app-footer';

function NotFound() {
  return (
    <>
      <AppHeader />

      <div className={ style.wrapper }>
        <h1>404</h1>
        <p>Page not found :(</p>
        <Link to='/' className={ style.link }>Go to Main page</Link>
      </div>

      <AppFooter/>
    </>
  );
}

export default NotFound;
