import {ReducerType} from '../../const';

export const getActiveCity = (state) => state[ReducerType.APP].activeCity;
export const getSortValue = (state) => state[ReducerType.APP].sortValue;
export const getMessageError = (state) => state[ReducerType.APP].messageError;
