import React from 'react';
import PropTypes from 'prop-types';

function MainCardPremium(props) {
  return (
    <div className="place-card__mark">
      <span>{ props.children }</span>
    </div>
  );
}

MainCardPremium.propTypes = {
  children: PropTypes.func.isRequired,
};

export default MainCardPremium;
