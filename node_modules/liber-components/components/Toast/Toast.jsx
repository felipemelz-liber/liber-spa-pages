import React from 'react';
import { BaseToast } from './styles';


const Toast = ({ type }) => {
  switch (type) {
    case 'info':
    case 'success':
    case 'error':
    case 'warning':
    default:
      return <BaseToast />;
  }
};

export default Toast;
