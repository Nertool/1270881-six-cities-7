import React from 'react';
import PropTypes from 'prop-types';

function MainLocationTab(props) {
  const { cityName, changeCity, cityIndex, className } = props;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${className}`} onClick={ (evt) => { changeCity(evt, cityIndex); } } href="#s">
        <span>{ cityName }</span>
      </a>
    </li>
  );
}

MainLocationTab.propTypes = {
  cityName: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  cityIndex: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default MainLocationTab;
