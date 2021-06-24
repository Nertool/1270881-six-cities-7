export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  FILLING_LIST_OFFERS: 'main/fillingListOffers',
  CHANGE_SORT_OFFERS: 'main/changeSortOffers',
  LOAD_OFFERS: 'data/loadOffers',
};

export const ActionCreator = {
  changeCity: (value) => ({
    type: ActionType.CHANGE_CITY,
    payload: value,
  }),
  fillingListOffers: (index) => ({
    type: ActionType.FILLING_LIST_OFFERS,
    payload: index,
  }),
  changeSortOffers: (type) => ({
    type: ActionType.CHANGE_SORT_OFFERS,
    payload: type,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
};
