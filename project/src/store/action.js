export const ActionType = {
  CHANGE_CITY: 'appAction/changeCity',
  CHANGE_SORT_OFFERS: 'appAction/changeSortOffers',
  SET_LOADING_PAGE: 'appAction/setLoadingPage',
  SET_AUTH_STATUS: 'user/setAuthStatus',
  CHANGE_USER_DATA: 'user/changeUserData',
  LOAD_OFFERS: 'data/loadOffers',
  REQUEST_OFFER_DATA: 'data/requestOfferData',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_NEAR_OFFERS: 'data/loadNearOffers',
  SET_FAVORITE_DATA: 'data/setFavoriteData',
  SET_MESSAGE_ERROR: 'data/setMessageError',
};

export const changeCity = (value) => ({
  type: ActionType.CHANGE_CITY,
  payload: value,
});

export const changeSortOffers = (type) => ({
  type: ActionType.CHANGE_SORT_OFFERS,
  payload: type,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const setAuthStatus = (status) => ({
  type: ActionType.SET_AUTH_STATUS,
  payload: status,
});

export const changeUserData = (data) => ({
  type: ActionType.CHANGE_USER_DATA,
  payload: data,
});

export const requestOfferData = (data) => ({
  type: ActionType.REQUEST_OFFER_DATA,
  payload: data,
});

export const loadReviews = (data) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: data,
});

export const loadNearOffers = (data) => ({
  type: ActionType.LOAD_NEAR_OFFERS,
  payload: data,
});

export const setLoadingPage = (status) => ({
  type: ActionType.SET_LOADING_PAGE,
  payload: status,
});

export const setFavoriteData = (data) => ({
  type: ActionType.SET_FAVORITE_DATA,
  payload: data,
});

export const setMessageError = (message) => ({
  type: ActionType.SET_MESSAGE_ERROR,
  payload: message,
});
