import axios from 'axios';
import { toast } from 'liber-components/components/Toast';

import { CONFIRMATIONS_HISTORY_URL } from '../urls';

export const CONFIRMATION_HISTORY_SET_CREDENTIALS = 'CONFIRMATION_HISTORY_SET_CREDENTIALS';
export const FETCH_CONFIRMATION_HISTORY_SUCCESS = 'FETCH_CONFIRMATION_HISTORY_SUCCESS';
export const FETCH_CONFIRMATION_HISTORY_REJECTED = 'FETCH_CONFIRMATION_HISTORY_REJECTED';
export const FETCH_CONFIRMATION_HISTORY = 'FETCH_CONFIRMATION_HISTORY';
export const CONFIRMATION_HISTORY_UPDATE_PAGINATION = 'CONFIRMATION_HISTORY_UPDATE_PAGINATION';
export const CONFIRMATION_HISTORY_UPDATE_FILTERS = 'CONFIRMATION_HISTORY_UPDATE_FILTERS';

export const setCredentials = (token, sacadoId) => ({
  type: CONFIRMATION_HISTORY_SET_CREDENTIALS,
  payload: {
    token,
    sacadoId,
  },
});

export const fetchConfirmationsSuccess = confirmations => ({
  type: FETCH_CONFIRMATION_HISTORY_SUCCESS,
  payload: confirmations,
});

export const fetchConfirmationsRejected = error => ({
  type: FETCH_CONFIRMATION_HISTORY_REJECTED,
  payload: {
    message: error.message,
  },
});

export function fetchConfirmations({ token, params = {} }) {
  return async dispatch => {
    dispatch({
      type: FETCH_CONFIRMATION_HISTORY,
    });

    axios
      .get(CONFIRMATIONS_HISTORY_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      })
      .then(payload => {
        dispatch(fetchConfirmationsSuccess(payload.data.data));
      })
      .catch(error => {
        toast(
          {
            message: 'Histórico de Confirmações',
            info: 'Falha ao listar as confirmações',
          },
          'error',
          5000,
        );
        dispatch(fetchConfirmationsRejected(error));
      });
  };
}

export function updatePagination(token, params) {
  return dispatch => {
    dispatch({
      type: CONFIRMATION_HISTORY_UPDATE_PAGINATION,
      payload: {
        pagination: params,
      },
    });
    dispatch(
      fetchConfirmations({
        token,
        params,
      }),
    );
  };
}

export const updateFilters = filters => ({
  type: CONFIRMATION_HISTORY_UPDATE_FILTERS,
  payload: {
    filters,
  },
});
