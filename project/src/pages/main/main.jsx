import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {cities, SortList} from '../../const';
import AppHeader from '../../components/app-header/app-header';
import MainLocations from '../../components/main-locations/main-locations';
import MainMap from '../../components/main-map/main-map';
import MainEmpty from '../../components/main-empty/main-empty';
import OffersList from '../../components/offers-list/offers-list';

function Main(props) {
  const { offers, isAuth, activeCity, onChangeCity, sortValue, changeSortOffers } = props;
  const offersList = offers.length ? offers.filter((offer) => offer.city.name === cities[activeCity]) : [];

  const [ visibleSortList, setVisibleSortList ] = useState(false);
  const [ activeOfferData, setActiveOfferData ] = useState({});

  switch (sortValue) {
    case SortList.PRICE_LOW:
      offersList.sort((a, b) => a.price - b.price);
      break;
    case SortList.PRICE_HIGH:
      offersList.sort((a, b) => b.price - a.price);
      break;
    case SortList.TOP_RATED:
      offersList.sort((a, b) => b.rating - a.rating);
      break;
    default:
      offersList.sort((a, b) => a.id - b.id);
  }

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

  function hoverHandler(evt, data) {
    evt.preventDefault();
    setActiveOfferData(data);
  }

  function toggleDropVisible() {
    setVisibleSortList(!visibleSortList);
  }

  function sortHandler(evt) {
    changeSortOffers(evt.target.innerText);
    toggleDropVisible(!visibleSortList);
  }

  return (
    <div className="page page--gray page--main">

      <AppHeader />

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
                    { sortValue }
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select">
                      </use>
                    </svg>
                  </span>
                  <ul className={`places__options places__options--custom ${visibleSortList ? 'places__options--opened' : ''}`}>

                    {getSortListArray().map((item) => <li key={item} onClick={sortHandler} className={`places__option ${sortValue === item ? 'places__option--active' : ''}`} tabIndex="0">{item}</li> )}

                  </ul>
                </form>

                <OffersList data={offersList} hoverHandler={hoverHandler} isAuth={isAuth} className='cities__places-list tabs__content' />

              </section>
              <MainMap cardLocation={activeOfferData} offersList={offersList} />
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
  activeCity: PropTypes.number.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  sortValue: PropTypes.string.isRequired,
  changeSortOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: state.offers,
  sortValue: state.sortValue,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(index) {
    dispatch(ActionCreator.changeCity(index));
    dispatch(ActionCreator.fillingListOffers());
  },
  changeSortOffers(type) {
    dispatch(ActionCreator.changeSortOffers(type));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
