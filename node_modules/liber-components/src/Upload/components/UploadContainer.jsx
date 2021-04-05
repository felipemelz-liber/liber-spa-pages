import React from 'react';
import { Provider } from 'react-redux';
import Upload from './Upload';
import store from '../store';

export default props => (
  <Provider store={store}>
    <Upload {...props} />
  </Provider>
);
