import React, {useState} from 'react';
import PropTypes from 'prop-types';

import MainLocationTab from '../MainLocationTab/MainLocationTab';

function MainLocations(props) {

  const { locations } = props;
  const [ activeClass, setActiveClass ] = useState([true, false, false, false, false, false]);

  function changeLocation(e, index) {
    e.preventDefault();
    const newArr = [false, false, false, false, false, false];
    newArr[index] = true;
    setActiveClass(newArr);
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {locations.map((l, i) => {
            const keyValue = `${i}-${l}`;
            return (
              <MainLocationTab key={keyValue} location={l} isActive={activeClass[i]} changeLocation={changeLocation} index={i} />
            );
          })}

        </ul>
      </section>
    </div>
  );
}

MainLocations.propTypes = {
  locations: PropTypes.array.isRequired,
};

export default MainLocations;
