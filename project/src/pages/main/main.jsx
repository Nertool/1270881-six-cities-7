import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import AppHeader from '../../components/app-header/app-header';
import MainLocations from '../../components/main-locations/main-locations';
import MainMap from '../../components/main-map/main-map';
import MainEmpty from '../../components/main-empty/main-empty';
import OffersList from '../../components/offers-list/offers-list';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {cities, SortList} from '../../const';

function Main(props) {
  const { offers, isAuth, auth, activeCity, onChangeCity } = props;
  const offersList = offers.length ? offers.filter((offer) => offer.city.name === cities[activeCity]) : [];

  const [ visibleSortList, setVisibleSortList ] = useState(false);
  const [ offersData, setOffersData ] = useState({
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
    onChangeCity(index);
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
    const data = offers;
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
      sorting: text,
    });
  }

  return (
    <div className="page page--gray page--main">

      <AppHeader isAuth={isAuth} auth={auth} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <MainLocations locations={ cities } activeCity={ activeCity } changeCity={ changeCity } />

        <div className="cities">

          {
            !!offersList.length &&
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersList.length} places to stay in {cities[activeCity]}</b>
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

                <OffersList data={offersList} hoverHandler={hoverHandler} isAuth={isAuth} className='cities__places-list tabs__content' />

              </section>
              <MainMap cardLocation={offersData.cardLocation} offersList={offersList} />
            </div>
          }
          { !offersList.length && <MainEmpty /> }
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(OffersProp),
  isAuth: PropTypes.bool.isRequired,
  auth: PropTypes.func.isRequired,
  activeCity: PropTypes.number.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(index) {
    dispatch(ActionCreator.changeCity(index));
    dispatch(ActionCreator.fillingListOffers());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
