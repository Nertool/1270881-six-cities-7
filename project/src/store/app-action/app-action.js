import {ActionType} from '../action';
import {SortList} from '../../const';

const initialState = {
  activeCity: 0,
  sortValue: SortList.POPULAR,
};

const appAction = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.CHANGE_SORT_OFFERS:
      return {
        ...state,
        sortValue: action.payload,
      };
    default:
      return state;
  }
};

export {appAction};
