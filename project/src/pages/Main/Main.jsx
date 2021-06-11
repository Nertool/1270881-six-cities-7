import React, {useState} from 'react';
import PropTypes from 'prop-types';

import OffersProp from '../Offer/Offer.prop';

import MainCard from '../../components/MainCard/MainCard';
import AppHeader from '../../components/AppHeader/AppHeader';
import MainLocations from '../../components/MainLocations/MainLocations';
import MainMap from '../../components/MainMap/MainMap';

function Main(props) {
  const {offers, locations} = props;
  const countPlaces = offers.length;
  const [ cardLocation, setCardLocation ] = useState({});

  function showActiveCard(e, offerLocation) {
    e.preventDefault();
    setCardLocation(offerLocation);
  }

  return (
    <div className="page page--gray page--main">

      <AppHeader />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <MainLocations locations={locations} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ countPlaces } places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {/*open class - places__options--opened*/}
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">

                {offers.map((offer) => {
                  const keyValue = `${offer.id}-${offer.title}`;

                  return (
                    <MainCard key={keyValue} offer={offer} hover={showActiveCard} />
                  );
                })}

              </div>
            </section>

            <MainMap cardLocation={cardLocation} />

          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(OffersProp),
  locations: PropTypes.array.isRequired,
};

export default Main;
