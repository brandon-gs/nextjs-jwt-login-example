import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export const wrapper = createWrapper(initStore, { debug: false });
