import React from 'react';
import style from './app-loader.module.css';

function AppLoader() {
  return (
    <div className={ style['lds-roller-wrapper'] }>
      <div className={ style['lds-roller'] }>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default AppLoader;
