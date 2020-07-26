import { ERROR, REMOVE_ERROR } from '../types/errorTypes';

const initialState = {
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, message: action.payload };
    case REMOVE_ERROR:
      return { ...state, message: null };
    default:
      return state;
  }
};
