import React from 'react';
import { Provider } from 'react-redux';
import ToastList from './ToastList';
import store from '../store';

export default props => (
  <Provider store={store}>
    <ToastList {...props} />
  </Provider>
);
