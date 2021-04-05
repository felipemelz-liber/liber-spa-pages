import axios from 'axios';

import { ADVANCES_URL, ADMIN_ADVANCES_URL } from '../urls';

import { convertToCamelCase, STATUS_FILTERS_TYPES, STATUS_IN } from '../utils';

export const VENDOR_ADVANCES_CHANGE_TAB = 'VENDOR_ADVANCES_CHANGE_TAB';
export const VENDOR_ADVANCES_UPDATE_PAGINATION = 'VENDOR_ADVANCES_UPDATE_PAGINATION';
export const VENDOR_ADVANCES_FETCH_NEGOTIATIONS_SUCCESS =
  'VENDOR_ADVANCES_FETCH_NEGOTIATIONS_SUCCESS';
export const VENDOR_ADVANCES_FETCH_NEGOTIATIONS_REJECTED =
  'VENDOR_ADVANCES_FETCH_NEGOTIATIONS_REJECTED';
export const VENDOR_ADVANCES_FETCH_NEGOTIATIONS = 'VENDOR_ADVANCES_FETCH_NEGOTIATIONS';
export const VENDOR_ADVANCES_FETCH_ADVANCES = 'VENDOR_ADVANCES_FETCH_ADVANCES';
export const UPDATE_ADVANCES = 'UPDATE_ADVANCES';
export const TOGGLE_SELECT_ALL = 'TOGGLE_SELECT_ALL';
export const UPDATE_SELECT_ADVANCES = 'UPDATE_SELECT_ADVANCES';
export const SETUP_DOCUMENTS = 'SETUP_DOCUMENTS';
export const SIGN_DOCUMENTS = 'SIGN_DOCUMENTS';
export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';
export const DOCUMENTS_READY = 'DOCUMENTS_READY';
export const DOCUMENTS_SIGNED = 'DOCUMENTS_SIGNED';
export const DOCUMENTS_ERROR = 'DOCUMENTS_ERROR';
export const READY_TO_SIGN = 'READY_TO_SIGN';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const ADVANCES_SUBSCRIBE = 'ADVANCES_SUBSCRIBE';
export const HANDLE_REQUEST_ERROR = 'HANDLE_REQUEST_ERROR';
export const UPDATE_NEGOTIATIONS_FILTERS = 'UPDATE_NEGOTIATIONS_FILTERS';

const getAdvancesUrl = (isAdmin, vendorId) =>
  isAdmin ? ADMIN_ADVANCES_URL.replace(':id', vendorId) : ADVANCES_URL;

export const changeTab = tab => ({
  type: VENDOR_ADVANCES_CHANGE_TAB,
  payload: {
    tab,
  },
});

export function handleError(error) {
  return {
    type: HANDLE_REQUEST_ERROR,
    payload: { error },
  };
}

export function updateAdvances(payload, type) {
  const { advances, pagination } = payload;

  const formattedAdvances = advances.map(convertToCamelCase);

  const paginationInfo = type === 'concluded' ? { pagination } : {};

  return {
    type: UPDATE_ADVANCES,
    payload: { [`${type}Advances`]: formattedAdvances, ...paginationInfo },
  };
}

export function fetchAdvances(type = 'pending') {
  return (dispatch, getState) => {
    dispatch({
      type: VENDOR_ADVANCES_FETCH_ADVANCES,
    });

    let params = {};

    const {
      vendorAdvances: {
        filters,
        token,
        pagination: { current, per },
        isAdmin,
        vendorId,
      },
    } = getState();

    if (type === 'concluded') {
      params = filters[STATUS_IN]
        ? { ...filters, page: current, per }
        : { ...filters, ...STATUS_FILTERS_TYPES[type], page: current, per };
    } else {
      params = { ...STATUS_FILTERS_TYPES[type] };
    }

    return axios
      .get(getAdvancesUrl(isAdmin, vendorId), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      })
      .then(payload => {
        const {
          data: { data },
        } = payload;

        dispatch(updateAdvances(data, type));
      })
      .catch(error => dispatch(handleError(error)));
  };
}

export const updateFilter = filters => {
  return {
    type: UPDATE_FILTERS,
    payload: {
      filters,
    },
  };
};
export function updatePagination(params) {
  const { page: current, per } = params;
  return {
    type: VENDOR_ADVANCES_UPDATE_PAGINATION,
    payload: {
      pagination: {
        current,
        per,
      },
    },
  };
}
