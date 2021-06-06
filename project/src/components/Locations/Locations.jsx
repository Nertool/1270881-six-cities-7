import React from 'react';
import PropTypes from 'prop-types';

function Tab({ city, isActive }) {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#s">
        <span>{ city }</span>
      </a>
    </li>
  );
}

function Locations() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <Tab city='Paris' isActive />
          <Tab city='Cologne' />
          <Tab city='Brussels' />
          <Tab city='Amsterdam' />
          <Tab city='Hamburg' />
          <Tab city='Dusseldorf' />
        </ul>
      </section>
    </div>
  );
}

Tab.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default Locations;
