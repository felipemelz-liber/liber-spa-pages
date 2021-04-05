import store from './store';

const genId = () => Math.random().toString(36).substr(2, 5);

const addToast = (message, info, content, type = null, duration, id) => ({
  type: 'ADD_TOAST',
  payload: {
    id,
    type,
    message,
    info,
    content,
    duration,
    show: true,
  },
});

export const removeToast = id => ({
  type: 'REMOVE_TOAST',
  payload: id,
});

export const closeToast = id => ({
  type: 'CLOSE_TOAST',
  payload: id,
});

const otherToast = (message, type, duration, id = genId()) => {
  store.dispatch(addToast(message, '', '', type, duration, id));
  return id;
};

const objToast = (message = '', info, content, type, duration, id) => {
  store.dispatch(addToast(message, info, content, type, duration, id));
  return id;
};

export const toast = (message, type, duration, id = genId()) => {
  if (message && typeof message === 'object' && message.constructor === Object) {
    return objToast(message.message, message.info, message.content, type, duration, id);
  }
  return otherToast(message, type, duration, id);
};

export const dispel = id => {
  store.dispatch(closeToast(id));
};
