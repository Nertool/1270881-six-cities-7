import React from 'react';

function MainCardPremium(props) {
  return (
    <div className="place-card__mark">
      <span>{ props.children }</span>
    </div>
  );
}

export default MainCardPremium;
