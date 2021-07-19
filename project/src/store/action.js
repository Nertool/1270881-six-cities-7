export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  CHANGE_SORT_OFFERS: 'main/changeSortOffers',
  LOAD_OFFERS: 'data/loadOffers',
  SET_AUTH_STATUS: 'user/setAuthStatus',
  CHANGE_USER_DATA: 'user/changeUserData',
  REQUEST_OFFER_DATA: 'offer/requestOfferData',
  LOAD_REVIEWS: 'offer/loadReviews',
  LOAD_NEAR_OFFERS: 'offer/loadNearOffers',
  SET_LOADING_PAGE: 'app/setLoadingPage',
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
