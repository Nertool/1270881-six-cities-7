export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  FILLING_LIST_OFFERS: 'main/fillingListOffers',
  CHANGE_SORT_OFFERS: 'main/changeSortOffers',
  LOAD_OFFERS: 'data/loadOffers',
  SET_AUTH_STATUS: 'user/setAuthStatus',
  CHANGE_USER_DATA: 'user/changeUserData',
  REQUEST_OFFER_DATA: 'offer/requestOfferData',
  LOAD_REVIEWS: 'offer/loadReviews',
  LOAD_NEAR_OFFERS: 'offer/loadNearOffers',
};

export const ActionCreator = {
  changeCity: (value) => ({
    type: ActionType.CHANGE_CITY,
    payload: value,
  }),
  fillingListOffers: (index) => ({
    type: ActionType.FILLING_LIST_OFFERS,
    payload: index,
  }),
  changeSortOffers: (type) => ({
    type: ActionType.CHANGE_SORT_OFFERS,
    payload: type,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  setAuthStatus: (status) => ({
    type: ActionType.SET_AUTH_STATUS,
    payload: status,
  }),
  changeUserData: (data) => ({
    type: ActionType.CHANGE_USER_DATA,
    payload: data,
  }),
  requestOfferData: (data) => ({
    type: ActionType.REQUEST_OFFER_DATA,
    payload: data,
  }),
  loadReviews: (data) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: data,
  }),
  loadNearOffers: (data) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: data,
  }),
};
