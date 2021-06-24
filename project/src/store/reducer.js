import offers from '../mocks/offers';
import {ActionType} from './action';
import {SortList} from '../const';

const initialState = {
  activeCity: 0,
  offers: offers,
  sortValue: SortList.POPULAR,
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
    default:
      return state;
  }
};

export {reducer};
