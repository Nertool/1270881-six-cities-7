import React from 'react';
import PropTypes from 'prop-types';

function OfferInside({ goods }) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {
          goods.map((good, index) => {
            const keyVal = `${index + good}`;
            return (
              <li key={keyVal} className="property__inside-item">
                { good }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

OfferInside.propTypes = {
  goods: PropTypes.array,
};

export default OfferInside;
