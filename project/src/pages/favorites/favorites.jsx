import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../../components/app-header/app-header';
import AppFooter from '../../components/app-footer/app-footer';
import FavoriteList from '../../components/favorites-list/favorites-list';
import OffersProp from '../../offer.prop';
import {connect} from 'react-redux';
import {getFavorites} from '../../store/api-actions';
import {getFavoritesData, getIsDataLoading} from '../../store/data/selectors';
import AppLoader from '../../components/app-loader/app-loader';
import {setLoadingPage} from '../../store/action';
import FavoritesEmpty from "../../components/favorites-empty/favorites-empty";

function Favorites(props) {
  const { favorites, getFavoritesList, isDataLoading, setLoading } = props;
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getFavoritesList();
  }, []);

  useEffect(() => {
    if (favorites.length) {
      const cities = [];
      const favoriteList = [];

      favorites.map((item) => {
        if (!cities.includes(item.city.name)) {
          cities.push(item.city.name);
          favoriteList.push({
            city: item.city.name,
            data: [item],
          });
        } else {
          const index = cities.indexOf(item.city.name);
          const data = favoriteList[index].data;
          data.push(item);
        }
        return item;
      });

      setFavoriteData(favoriteList);
    } else {
      setFavoriteData([]);
    }
  }, [favorites]);

  if (isDataLoading) {
    return (
      <AppLoader />
    );
  }

  return (
    <div className="page">

      <AppHeader />

      {
        favoriteData.length > 0 &&
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">

                { favoriteData.map((cityData) => <FavoriteList key={cityData.city} cityData={cityData} />) }

              </ul>
            </section>
          </div>
        </main>
      }

      { !favoriteData.length && <FavoritesEmpty /> }
      <AppFooter />

    </div>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(OffersProp),
  getFavoritesList: PropTypes.func,
  isDataLoading: PropTypes.bool,
  setLoading: PropTypes.func,
};

const mapStateToProps = (state) => ({
  favorites: getFavoritesData(state),
  isDataLoading: getIsDataLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFavoritesList() {
    dispatch(getFavorites());
  },
  setLoading(status) {
    dispatch(setLoadingPage(status));
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
