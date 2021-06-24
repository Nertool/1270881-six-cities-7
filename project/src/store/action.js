export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  FILLING_LIST_OFFERS: 'main/fillingListOffers',
  CHANGE_SORT_OFFERS: 'main/changeSortOffers',
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
};
