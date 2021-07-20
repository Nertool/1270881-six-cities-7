export const cities = [
  'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf',
];

export const SortList = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  REVIEWS: '/comments',
  FAVORITE: '/favorite',
};

export const AuthStatus = {
  AUTH: 'auth',
  NOT_AUTH: 'notAuth',
  UNKNOWN: 'unknown',
};

export const ReducerType = {
  APP: 'APP',
  USER: 'USER',
  DATA: 'DATA',
};

export const isAuth = (status) => status === AuthStatus.AUTH;
