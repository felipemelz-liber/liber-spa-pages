import reducer, { initialState } from '../ConfirmationHistoryReducer';
import {
  CONFIRMATION_HISTORY_SET_CREDENTIALS,
  FETCH_CONFIRMATION_HISTORY_SUCCESS,
  FETCH_CONFIRMATION_HISTORY_REJECTED,
  FETCH_CONFIRMATION_HISTORY,
  CONFIRMATION_HISTORY_UPDATE_PAGINATION,
  CONFIRMATION_HISTORY_UPDATE_FILTERS,
} from '../../actions';

export const confirmationsMock = [
  {
    slug: 'dcb234z',
    value: 101056,
    created_at: '15/10/2020',
    contract: 'http://demo.liber.local:3002/sacado/confirmacao_titulos',
    details: '#lala',
  },
  {
    slug: 'dcb234f',
    value: 531074,
    created_at: '12/08/2020',
    contract: 'http://demo.liber.local:3002/sacado/confirmacao_titulos',
    details: '#lele',
  },
];

describe('Testing ConfirmationHistoryReducer Reducer', () => {
  it('should return current state by default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should set credentials', () => {
    const action = {
      type: CONFIRMATION_HISTORY_SET_CREDENTIALS,
      payload: {
        token: 'token',
        sacadoId: 'id',
      },
    };
    const newState = initialState.merge({ token: 'token', sacadoId: 'id' });
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it('should set fetch confirmation history', () => {
    const action = {
      type: FETCH_CONFIRMATION_HISTORY,
    };
    const newState = initialState.merge({ error: '', loadingAllPage: true });
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it('should set fetch confirmation history success', () => {
    const pagination = {
      page: '1',
      per: '10',
      total: '2',
    };
    const action = {
      type: FETCH_CONFIRMATION_HISTORY_SUCCESS,
      payload: { confirmations: confirmationsMock, pagination },
    };
    const newState = initialState.merge({
      confirmations: confirmationsMock,
      pagination,
      loadingAllPage: false,
    });
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it('should set fetch confirmation history rejected', () => {
    const action = {
      type: FETCH_CONFIRMATION_HISTORY_REJECTED,
      payload: {
        message: 'Error message',
      },
    };
    const newState = initialState.merge({ loadingAllPage: false, error: 'Error message' });
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it('should set confirmation history update pagination', () => {
    const action = {
      type: CONFIRMATION_HISTORY_UPDATE_PAGINATION,
      payload: {
        pagination: {
          page: '2',
          per: '25',
        },
      },
    };
    const newState = initialState.merge({
      pagination: {
        ...initialState.pagination,
        ...{ page: '2', per: '25' },
      },
    });
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it('should set filters', () => {
    const action = {
      type: CONFIRMATION_HISTORY_UPDATE_FILTERS,
      payload: {
        filters: {
          'q[created_at_eq]': null,
          'q[created_at_gteq]': '01/01/2020',
          'q[created_at_lteq]': '10/01/2020',
        },
      },
    };
    const newState = initialState.merge({
      filters: {
        'q[created_at_eq]': null,
        'q[created_at_gteq]': '01/01/2020',
        'q[created_at_lteq]': '10/01/2020',
      },
    });
    expect(reducer(initialState, action)).toEqual(newState);
  });
});
