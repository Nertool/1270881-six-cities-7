import axios from 'axios';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

const token = localStorage.getItem('token') ?? '';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onError = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    if (response.status === HttpCode.BAD_REQUEST) {
      // alert(response.data.error);
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
