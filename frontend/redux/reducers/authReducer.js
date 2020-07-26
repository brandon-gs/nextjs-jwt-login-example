import { AUTHENTICATE, DEAUTHENTICATE } from '../types/authTypes';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.authentication };
    case AUTHENTICATE:
      return { ...state, token: action.payload };
    case DEAUTHENTICATE:
      return { ...state, token: null };
    default:
      return state;
  }
};
