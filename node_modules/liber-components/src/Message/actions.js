import store from './store';

const genId = () => Math.random().toString(36).substr(2, 5);

const addMessage = (type, message, action, duration, id) => ({
  type: 'ADD_MESSAGE',
  payload: {
    type,
    message,
    action: action || null,
    duration: duration || 1500,
    id,
    show: true,
  },
});

export const removeMessage = id => ({
  type: 'REMOVE_MESSAGE',
  payload: id,
});

export const closeMessage = index => ({
  type: 'CLOSE_MESSAGE',
  payload: index,
});

const makePromise = id =>
  new Promise(resolve => {
    store.subscribe(() => {
      const state = store.getState();
      const { messages } = state;
      const msg = messages.find(message => message.id === id);
      if (!msg) {
        resolve();
      }
    });
  });

export const message = (msg, type, duration, action, id = genId()) => {
  store.dispatch(addMessage(type, msg, action, duration, id));
  return makePromise(id);
};

const basic = (msg, duration, action, id = genId()) => message(msg, 'basic', duration, action, id);
const dark = (msg, duration, action, id = genId()) => message(msg, 'dark', duration, action, id);
const primary = (msg, duration, action, id = genId()) =>
  message(msg, 'primary', duration, action, id);
const success = (msg, duration, action, id = genId()) =>
  message(msg, 'success', duration, action, id);
const alert = (msg, duration, action, id = genId()) => message(msg, 'alert', duration, action, id);
const error = (msg, duration, action, id = genId()) => message(msg, 'error', duration, action, id);

export const dispel = id => {
  store.dispatch(closeMessage(id));
};

message.dark = dark;
message.basic = basic;
message.notice = basic;
message.info = basic;
message.primary = primary;
message.success = success;
message.alert = alert;
message.warning = alert;
message.error = error;
message.dispel = dispel;
