import {ActionType} from '../action';
import {AuthStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthStatus.UNKNOWN,
  userData: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export {user};
