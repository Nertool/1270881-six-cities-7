import {ActionType} from './action';
import {AuthStatus, SortList} from '../const';

const initialState = {
  activeCity: 0,
  offers: [],
  sortValue: SortList.POPULAR,
  isDataLoading: true,
  isDataOfferLoading: true,
  authorizationStatus: AuthStatus.UNKNOWN,
  userData: {},
  offerData: {},
  reviews: [],
  nearData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.FILLING_LIST_OFFERS:
      return state;
    case ActionType.CHANGE_SORT_OFFERS:
      return {
        ...state,
        sortValue: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoading: false,
      };
    case ActionType.SET_AUTH_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.CHANGE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case ActionType.REQUEST_OFFER_DATA:
      return {
        ...state,
        offerData: action.payload,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.LOAD_NEAR_OFFERS:
      return {
        ...state,
        nearData: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
