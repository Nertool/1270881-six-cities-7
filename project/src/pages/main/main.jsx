import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import {connect} from 'react-redux';
import {changeCity, changeSortOffers, setLoadingPage} from '../../store/action';
import {cities} from '../../const';
import AppHeader from '../../components/app-header/app-header';
import MainLocations from '../../components/main-locations/main-locations';
import MainMap from '../../components/main-map/main-map';
import MainEmpty from '../../components/main-empty/main-empty';
import OffersList from '../../components/offers-list/offers-list';
import {fetchOffersList} from '../../store/api-actions';
import AppLoader from '../../components/app-loader/app-loader';
import {useLoader} from '../../hooks/useLoader';
import {useSorting} from '../../hooks/useSorting';
import {useHoverCard} from '../../hooks/useHoverCard';

function Main(props) {
  const { offers, isAuth, activeCity, onChangeCity, sortValue, onChangeSortOffers, loadOffersList, isDataLoading, setLoading } = props;
  const offersList = offers.length ? offers.filter((offer) => offer.city.name === cities[activeCity]) : [];
  const isLoadPage = useLoader(offers);
  const [visibleSortList, getSortListArray, toggleDropVisible, sortHandler] = useSorting(sortValue, offersList, onChangeSortOffers);
  const [activeOfferData, hoverHandler] = useHoverCard();

  useEffect(() => {
    if (offers.length === 0) {
      setLoading(true);
      loadOffersList();
    }
  }, []);

  function changeCityHandler(evt, index) {
    evt.preventDefault();
    onChangeCity(index);
  }

  if (isLoadPage || isDataLoading) {
    return (
      <AppLoader />
    );
  }

  return (
    <div className="page page--gray page--main">

      <AppHeader />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <MainLocations locations={ cities } activeCity={ activeCity } changeCity={ changeCityHandler } />

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
  onChangeSortOffers: PropTypes.func.isRequired,
  loadOffersList: PropTypes.func,
  isDataLoading: PropTypes.bool,
  setLoading: PropTypes.func,
};

const mapStateToProps = ({APP, DATA}) => ({
  activeCity: APP.activeCity,
  offers: DATA.offers,
  sortValue: APP.sortValue,
  isDataLoading: DATA.isDataLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(index) {
    dispatch(changeCity(index));
  },
  onChangeSortOffers(type) {
    dispatch(changeSortOffers(type));
  },
  loadOffersList() {
    dispatch(fetchOffersList());
  },
  setLoading(status) {
    dispatch(setLoadingPage(status));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
