import {ReducerType} from '../../const';

export const getAuthorizationStatus = (state) => state[ReducerType.USER].authorizationStatus;
export const getUserData = (state) => state[ReducerType.USER].userData;
