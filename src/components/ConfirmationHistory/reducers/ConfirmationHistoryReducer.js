import Immutable from 'seamless-immutable';
import {
  CONFIRMATION_HISTORY_SET_CREDENTIALS,
  FETCH_CONFIRMATION_HISTORY_SUCCESS,
  FETCH_CONFIRMATION_HISTORY_REJECTED,
  FETCH_CONFIRMATION_HISTORY,
  CONFIRMATION_HISTORY_UPDATE_PAGINATION,
  CONFIRMATION_HISTORY_UPDATE_FILTERS,
} from '../actions/index.js';

export const initialState = Immutable({
  token: '',
  sacadoId: null,
  loadingAllPage: true,
  confirmations: [],
  error: '',
  pagination: {
    current: 1,
    previous: null,
    next: null,
    per: 10,
    pages: 1,
    count: 1,
  },
  filters: {
    'q[created_at_eq]': null,
    'q[created_at_gteq]': null,
    'q[created_at_lteq]': null,
  },
});

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CONFIRMATION_HISTORY_SET_CREDENTIALS:
      return state.merge({
        token: action.payload.token,
        sacadoId: action.payload.sacadoId,
      });
    case FETCH_CONFIRMATION_HISTORY_SUCCESS:
      return state.merge({
        confirmations: action.payload.confirmations,
        pagination: action.payload.pagination,
        loadingAllPage: false,
      });
    case FETCH_CONFIRMATION_HISTORY_REJECTED:
      return state.merge({ loadingAllPage: false, error: action.payload.message });
    case FETCH_CONFIRMATION_HISTORY:
      return state.merge({ loadingAllPage: true, error: '' });
    case CONFIRMATION_HISTORY_UPDATE_PAGINATION:
      return state.merge({
        pagination: {
          ...state.pagination,
          ...action.payload.pagination,
        },
      });
    case CONFIRMATION_HISTORY_UPDATE_FILTERS:
      return state.merge({
        filters: {
          ...action.payload.filters,
        },
      });
    default:
      return state;
  }
};
