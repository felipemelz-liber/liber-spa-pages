import Immutable from 'seamless-immutable';

const initialState = Immutable({
  messages: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.merge({
        messages: [...state.messages, action.payload],
      });
    case 'REMOVE_MESSAGE':
      return state.merge({
        messages: state.messages.filter(msg => msg.id !== action.payload),
      });
    case 'CLOSE_MESSAGE': {
      let index;
      if (action.payload) {
        index = state.messages.findIndex(toast => toast.id === action.payload);
      } else {
        index = state.messages.length - 1;
      }
      const dispel = state.messages[index].set('show', false);
      return state.merge({
        messages: state.messages.setIn([index], dispel),
      });
    }
    default:
      return state;
  }
};
