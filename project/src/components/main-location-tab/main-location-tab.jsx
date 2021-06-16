import React from 'react';
import PropTypes from 'prop-types';

function MainLocationTab(props) {
  const { location, isActive, changeLocation, index } = props;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} onClick={ (e) => { changeLocation(e, index); } } href="#s">
        <span>{ location }</span>
      </a>
    </li>
  );
}

MainLocationTab.propTypes = {
  location: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  changeLocation: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default MainLocationTab;
