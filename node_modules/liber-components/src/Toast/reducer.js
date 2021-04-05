import Immutable from 'seamless-immutable';

const initialState = Immutable({
  toasts: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return state.merge({
        toasts: [...state.toasts, action.payload],
      });
    case 'REMOVE_TOAST':
      return state.merge({
        toasts: state.toasts.filter(toast => toast.id !== action.payload),
      });
    case 'CLOSE_TOAST': {
      if (action.payload) {
        const index = state.toasts.findIndex(toast => toast.id === action.payload);
        if (index !== -1) {
          const toDispel = state.toasts[index].set('show', false);
          return state.merge({
            toasts: state.toasts.setIn([index], toDispel),
          });
        }
      } else {
        const index = state.toasts.length - 1;
        const toDispel = state.toasts[index].set('show', false);
        return state.merge({
          toasts: state.toasts.setIn([index], toDispel),
        });
      }
      return state;
    }
    default:
      return state;
  }
};
