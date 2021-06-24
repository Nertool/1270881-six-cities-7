import {ActionCreator} from './action';
import {APIRoute} from '../const';
import {formatJSON} from '../services/format-json';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(formatJSON(data))))
);
