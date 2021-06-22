import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import AppHeader from '../../components/app-header/app-header';
import MainLocations from '../../components/main-locations/main-locations';
import MainMap from '../../components/main-map/main-map';
import MainEmpty from '../../components/main-empty/main-empty';
import OffersList from '../../components/offers-list/offers-list';

function Main(props) {
  const { offers, locations, isAuth, auth } = props;
  const INIT_INDEX_CITY = 0;
  const CITY_OFFERS_DATA = offers.filter((offer) => offer.city.name === locations[INIT_INDEX_CITY]);

  const SortList = {
    POPULAR: 'Popular',
    PRICE_LOW: 'Price: low to high',
    PRICE_HIGH: 'Price: high to low',
    TOP_RATED: 'Top rated first',
  };

  const [ visibleSortList, setVisibleSortList ] = useState(false);
  const [ offersData, setOffersData ] = useState({
    offersCity: offers.filter((offer) => offer.city.name === locations[INIT_INDEX_CITY]),
    activeCity: INIT_INDEX_CITY,
    totalOffers: CITY_OFFERS_DATA.length,
    cardLocation: {},
    sorting: SortList.POPULAR,
  });

  function getSortListArray() {
    const SortListArray = [];

    for (const key in SortList) {
      SortListArray.push(SortList[key]);
    }

    return SortListArray;
  }

  function changeCity(evt, index) {
    evt.preventDefault();

    const data = offers.filter((offer) => offer.city.name === locations[index]);

    setOffersData({
      ...offersData,
      offersCity: data,
      activeCity: index,
      totalOffers: data.length,
      cardLocation: {},
      sorting: SortList.POPULAR,
    });
  }

  function hoverHandler(evt, offerLocation) {
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
      case SortList.PRICE_LOW:
        data.sort((a, b) => a.price - b.price);
        break;
      case SortList.PRICE_HIGH:
        data.sort((a, b) => b.price - a.price);
        break;
      case SortList.TOP_RATED:
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

                    {getSortListArray().map((item) => <li key={item} onClick={sortHandler} className={`places__option ${offersData.sorting === item ? 'places__option--active' : ''}`} tabIndex="0">{item}</li> )}

                  </ul>
                </form>

                <OffersList data={offersData.offersCity} hoverHandler={hoverHandler} isAuth={isAuth} className='cities__places-list tabs__content' />

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
