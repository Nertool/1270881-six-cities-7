import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../offer/offer.prop';

import MainCard from '../../components/main-card/main-card';
import AppHeader from '../../components/app-header/app-header';
import MainLocations from '../../components/main-locations/main-locations';
import MainMap from '../../components/main-map/main-map';
import MainEmpty from '../../components/main-empty/main-empty';

function Main(props) {
  const { offers, locations, isAuth, auth } = props;
  const INIT_INDEX_CITY = 0;
  const CITY_OFFERS_DATA = offers.filter((offer) => offer.city.name === locations[INIT_INDEX_CITY]);
  const SORT_LIST = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

  const [ visibleSortList, setVisibleSortList ] = useState(false);
  const [ offersData, setOffersData ] = useState({
    offersCity: offers.filter((offer) => offer.city.name === locations[INIT_INDEX_CITY]),
    activeCity: INIT_INDEX_CITY,
    totalOffers: CITY_OFFERS_DATA.length,
    cardLocation: {},
    sorting: SORT_LIST[0],
  });

  function changeCity(index) {
    const data = offers.filter((offer) => offer.city.name === locations[index]);

    setOffersData({
      ...offersData,
      offersCity: data,
      activeCity: index,
      totalOffers: data.length,
      cardLocation: {},
      sorting: SORT_LIST[0],
    });
  }

  function showActiveCard(evt, offerLocation) {
    evt.preventDefault();
    setOffersData({
      ...offersData,
      cardLocation: offerLocation,
    });
  }

  function toggleDropVisible() {
    setVisibleSortList(!visibleSortList);
  }

  function sortHandler(evt) {
    const text = evt.target.innerText;
    const data = offersData.offersCity;
    toggleDropVisible(!visibleSortList);
    switch (text) {
      case 'Price: low to high':
        data.sort((a, b) => a.price - b.price);
        break;
      case 'Price: high to low':
        data.sort((a, b) => b.price - a.price);
        break;
      case 'Top rated first':
        data.sort((a, b) => b.rating - a.rating);
        break;
      default:
        data.sort((a, b) => a.id - b.id);
    }
    setOffersData({
      ...offersData,
      offersCity: data,
      sorting: text,
    });
  }

  return (
    <div className="page page--gray page--main">

      <AppHeader isAuth={isAuth} auth={auth} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <MainLocations locations={ locations } activeCity={ offersData.activeCity } changeCity={ changeCity } />

        <div className="cities">

          {
            !!offersData.totalOffers &&
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersData.totalOffers} places to stay in {locations[offersData.activeCity]}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by </span>
                  <span className="places__sorting-type" tabIndex="0" onClick={toggleDropVisible}>
                    { offersData.sorting }
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select">
                      </use>
                    </svg>
                  </span>
                  <ul className={`places__options places__options--custom ${visibleSortList ? 'places__options--opened' : ''}`}>

                    {SORT_LIST.map((item) => <li key={item} onClick={sortHandler} className={`places__option ${offersData.sorting === item ? 'places__option--active' : ''}`} tabIndex="0">{item}</li> )}

                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">

                  {offersData.offersCity.map((offer) => {
                    const keyValue = `${offer.id}-${offer.title}`;
                    return <MainCard key={keyValue} offer={offer} hover={showActiveCard} isAuth={isAuth} />;
                  })}

                </div>
              </section>
              <MainMap cardLocation={offersData.cardLocation} offersList={offersData.offersCity} />
            </div>
          }
          { !offersData.totalOffers && <MainEmpty /> }
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(OffersProp),
  locations: PropTypes.array.isRequired,
  isAuth: PropTypes.bool.isRequired,
  auth: PropTypes.func.isRequired,
};

export default Main;
