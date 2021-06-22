import offers from '../mocks/offers';
import {ActionType} from './action';

const initialState = {
  activeCity: 0,
  offers: offers,
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
    default:
      return state;
  }
};

export {reducer};
