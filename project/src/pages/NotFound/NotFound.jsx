import React from 'react';
import {Link} from 'react-router-dom';

import style from './NotFound.module.css';

function NotFound() {
  return (
    <div className={ style.wrapper }>
      <h1>404</h1>
      <p>Page not found :(</p>
      <Link to='/' className={ style.link }>Go to Main page</Link>
    </div>
  );
}

export default NotFound;
