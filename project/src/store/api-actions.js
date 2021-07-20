import {
  loadOffers,
  setAuthStatus,
  changeUserData,
  requestOfferData,
  loadReviews,
  loadNearOffers
} from './action';
import {APIRoute, AuthStatus} from '../const';
import {formatJSON} from '../utils/format-json';
import history from '../utils/history';

export const fetchOffersList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(formatJSON(data))));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(setAuthStatus(AuthStatus.AUTH));
      dispatch(changeUserData({email: data.email}));
    })
    .catch(() => {})
);

export const login = (userData) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, userData)
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => {
      dispatch(setAuthStatus(AuthStatus.AUTH));
      dispatch(changeUserData({email: userData.email}));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => {
      dispatch(setAuthStatus(AuthStatus.NOT_AUTH));
      dispatch(changeUserData({}));
    })
);

export const getOfferInfo = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(requestOfferData(formatJSON(data))))
    .catch(() => history.push('/404'))
);

export const getReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(formatJSON(data))))
);

export const getNearInfo = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(loadNearOffers(formatJSON(data))))
);

export const postComment = (id, formData) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, formData)
);

export const setFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
);
