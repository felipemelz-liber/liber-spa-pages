import React from 'react';
import { Provider } from 'react-redux';
import MessageList from './MessageList';
import store from '../store';

export default props => (
  <Provider store={store}>
    <MessageList {...props} />
  </Provider>
);
