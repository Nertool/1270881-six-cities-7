import {ActionType} from '../action';

const initialState = {
  isDataLoading: true,
  offers: [],
  offerData: {},
  reviews: [],
  nearData: [],
  favorites: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LOADING_PAGE:
      return {
        ...state,
        isDataLoading: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoading: false,
      };
    case ActionType.REQUEST_OFFER_DATA:
      return {
        ...state,
        offerData: action.payload,
        isDataLoading: false,
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
    case ActionType.SET_FAVORITE_DATA:
      return {
        ...state,
        favorites: action.payload,
        isDataLoading: false,
      };
    default:
      return state;
  }
};

export {data};
