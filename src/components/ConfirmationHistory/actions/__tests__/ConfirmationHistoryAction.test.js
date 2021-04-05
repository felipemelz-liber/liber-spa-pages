import { Thunk } from 'redux-testkit';
import {
  setCredentials,
  fetchConfirmations,
  fetchConfirmationsSuccess,
  fetchConfirmationsRejected,
  updatePagination,
  updateFilters,
  CONFIRMATION_HISTORY_SET_CREDENTIALS,
  FETCH_CONFIRMATION_HISTORY_SUCCESS,
  FETCH_CONFIRMATION_HISTORY_REJECTED,
  FETCH_CONFIRMATION_HISTORY,
  CONFIRMATION_HISTORY_UPDATE_PAGINATION,
  CONFIRMATION_HISTORY_UPDATE_FILTERS,
} from '../ConfirmationHistoryAction';

describe('Testing ConfirmationHistoryAction actions', () => {
  it('setCredentials should return action', () => {
    const action = setCredentials('token', 'id');
    expect(action).toEqual({
      type: CONFIRMATION_HISTORY_SET_CREDENTIALS,
      payload: {
        token: 'token',
        sacadoId: 'id',
      },
    });
  });
  it('fetchInvoices should return action', async () => {
    const dispatches = await Thunk(fetchConfirmations).execute('token');
    expect(dispatches.length).toEqual(1);
    expect(dispatches[0].getAction()).toEqual({
      type: FETCH_CONFIRMATION_HISTORY,
    });
  });
  it('fetchConfirmationsSuccess should return action', () => {
    const action = fetchConfirmationsSuccess([]);
    expect(action).toEqual({
      type: FETCH_CONFIRMATION_HISTORY_SUCCESS,
      payload: [],
    });
  });
  it('fetchConfirmationsRejected should return action', () => {
    const payload = {
      message: 'Error',
    };
    const action = fetchConfirmationsRejected(payload);
    expect(action).toEqual({
      type: FETCH_CONFIRMATION_HISTORY_REJECTED,
      payload: {
        message: 'Error',
      },
    });
  });
  it('updatePagination should return action', () => {
    const params = {
      page: '1',
      per: '10',
    };
    const dispatches = Thunk(updatePagination).execute('token', params);
    expect(dispatches.length).toEqual(2);
    expect(dispatches[0].getAction()).toEqual({
      type: CONFIRMATION_HISTORY_UPDATE_PAGINATION,
      payload: {
        pagination: {
          page: '1',
          per: '10',
        },
      },
    });
  });
  it('updateFilters should return action', () => {
    const action = updateFilters({
      'q[created_at_eq]': null,
      'q[created_at_gteq]': '01/01/2020',
      'q[created_at_lteq]': '10/01/2020',
    });
    expect(action).toEqual({
      type: CONFIRMATION_HISTORY_UPDATE_FILTERS,
      payload: {
        filters: {
          'q[created_at_eq]': null,
          'q[created_at_gteq]': '01/01/2020',
          'q[created_at_lteq]': '10/01/2020',
        },
      },
    });
  });
});
