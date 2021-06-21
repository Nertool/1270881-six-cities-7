import React from 'react';
import PropTypes from 'prop-types';

import MainLocationTab from '../main-location-tab/main-location-tab';

function MainLocations(props) {

  const { locations, activeCity, changeCity } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((city, index) => {
            const keyValue = `${index}-${city}`;
            return (
              <MainLocationTab key={keyValue} cityName={city} cityIndex={index} changeCity={changeCity} className={activeCity === index ? 'tabs__item--active' : ''} />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

MainLocations.propTypes = {
  locations: PropTypes.array.isRequired,
  activeCity: PropTypes.number.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default MainLocations;
