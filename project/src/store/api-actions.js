import {ActionCreator} from './action';
import {APIRoute, AuthStatus} from '../const';
import {formatJSON} from '../services/format-json';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(formatJSON(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.setAuthStatus(AuthStatus.AUTH));
      dispatch(ActionCreator.changeUserData({email: data.email}));
    })
    .catch(() => {})
);

export const login = (userData) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, userData)
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => {
      dispatch(ActionCreator.setAuthStatus(AuthStatus.AUTH));
      dispatch(ActionCreator.changeUserData({email: userData.email}));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => {
      dispatch(ActionCreator.setAuthStatus(AuthStatus.NOT_AUTH));
      dispatch(ActionCreator.changeUserData({}));
    })
);
