import Router from 'next/router';
import axios from 'axios';
import { AUTHENTICATE, DEAUTHENTICATE } from '../types/authTypes';
import { setCookie, removeCookie } from '../../utils/cookie';
import { createError, removeError } from './errorActions';

// gets token from the api and stores it in the redux store and in a cookie
const authenticate = ({ email, password }, type) => {
  if (type !== 'login' && type !== 'register') {
    throw new Error('Wront API call!');
  }
  return async dispatch => {
    const formData = { email, password };
    try {
      const {
        data: { token },
      } = await axios.post(`/${type}`, formData);
      setCookie('token', token);
      Router.push('/');
      dispatch(removeError());
      dispatch({ type: AUTHENTICATE, payload: token });
    } catch ({ response }) {
      const {
        data: { message },
      } = response;
      dispatch(createError(message));
    }
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = token => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, payload: token });
  };
};

// removing the token
const deauthenticate = () => {
  return dispatch => {
    removeCookie('token');
    Router.push('/');
    dispatch({ type: DEAUTHENTICATE });
  };
};

export default {
  authenticate,
  reauthenticate,
  deauthenticate,
};
