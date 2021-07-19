import {ReducerType} from '../../const';

export const getIsDataLoading = (state) => state[ReducerType.DATA].isDataLoading;
export const getOffers = (state) => state[ReducerType.DATA].offers;
export const getOfferData = (state) => state[ReducerType.DATA].offerData;
export const getReviews = (state) => state[ReducerType.DATA].reviews;
export const getNearData = (state) => state[ReducerType.DATA].nearData;
