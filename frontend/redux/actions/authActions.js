import Router from 'next/router';
//import axios from 'axios';
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
    const res = await fetch(`/${type}`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await res.json();
    if (res.status === 200) {
      const { token } = responseData;
      setCookie('token', token);
      Router.push('/');
      dispatch(removeError());
      dispatch({ type: AUTHENTICATE, payload: token });
    } else {
      const { message } = responseData;
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
