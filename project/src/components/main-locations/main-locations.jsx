import React, {useState} from 'react';
import PropTypes from 'prop-types';

import MainLocationTab from '../main-location-tab/main-location-tab';

function MainLocations(props) {

  const { locations, activeCity, changeCity } = props;
  let statusActiveClasses = [false, false, false, false, false, false];
  statusActiveClasses[activeCity] = true;
  const [ activeClass, setActiveClass ] = useState(statusActiveClasses);

  function changeLocation(evt, index) {
    evt.preventDefault();
    changeCity(index);
    statusActiveClasses = [false, false, false, false, false, false];
    statusActiveClasses[index] = true;
    setActiveClass(statusActiveClasses);
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {locations.map((location, index) => {
            const keyValue = `${index}-${location}`;
            return (
              <MainLocationTab key={keyValue} location={location} isActive={activeClass[index]} changeLocation={changeLocation} index={index} />
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
