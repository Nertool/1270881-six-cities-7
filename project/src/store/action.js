export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  FILLING_LIST_OFFERS: 'main/fillingListOffers',
};

export const ActionCreator = {
  changeCity: (value) => ({
    type: ActionType.CHANGE_CITY,
    payload: value,
  }),
};
