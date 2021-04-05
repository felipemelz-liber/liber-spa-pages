import axios from 'axios';
import {
  VENDOR_BORDERO_SHOW_URL,
  VENDOR_BORDERO_INVOICES_URL,
  ADMIN_VENDOR_BORDERO_SHOW_URL,
  ADMIN_VENDOR_BORDERO_INVOICES_URL,
} from '../urls';
import { convertToCamelCase, dispatchDataLayerEvent } from '../../../vendor/Utils';
import {
  formatFilters,
  STATUS_REFERENCE,
  DUPLICATA_NUMBER_IN_BORDERO,
  VENDOR_CNPJ_EQ,
  BORDERO_STATUS_IN,
} from '../utils';

export const VENDOR_BORDERO_UPDATE_SUMMARY = 'VENDOR_BORDERO_UPDATE_SUMMARY';
export const VENDOR_BORDERO_UPDATE_INVOICES = 'VENDOR_BORDERO_UPDATE_INVOICES';
export const VENDOR_BORDERO_INVOICES_LOADING = 'VENDOR_BORDERO_INVOICES_LOADING';
export const VENDOR_BORDERO_UPDATE_FILTERS = 'VENDOR_BORDERO_UPDATE_FILTERS';
export const VENDOR_BORDERO_CHANGE_PAGE = 'VENDOR_BORDERO_CHANGE_PAGE';
export const VENDOR_BORDERO_SET_LISTING = 'VENDOR_BORDERO_SET_LISTING';

const getBorderoShowUrl = (isAdmin, fornecedorId, borderoId) =>
  isAdmin
    ? ADMIN_VENDOR_BORDERO_SHOW_URL.replace(':id', fornecedorId).replace(':bordero_id', borderoId)
    : `${VENDOR_BORDERO_SHOW_URL}/${borderoId}`;
const getBorderoInvoicesUrl = (isAdmin, fornecedorId, borderoId) =>
  isAdmin
    ? ADMIN_VENDOR_BORDERO_INVOICES_URL.replace(':id', fornecedorId).replace(
        ':bordero_id',
        borderoId,
      )
    : VENDOR_BORDERO_INVOICES_URL.replace(':id', borderoId);

export const updateSummary = data => ({ type: VENDOR_BORDERO_UPDATE_SUMMARY, payload: data });

export function fetchSummary() {
  return (dispatch, getState) => {
    const {
      vendorBorderoShow: { token, borderoIds, isAdmin, fornecedorId },
    } = getState();

    if (borderoIds[0]) {
      return axios
        .get(getBorderoShowUrl(isAdmin, fornecedorId, borderoIds[0]), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(payload => {
          const formattedData = convertToCamelCase(payload.data.data);
          dispatch(updateSummary(formattedData));
        })
        .catch(e => console.log(e));
    }
    return null;
  };
}

export const updateInvoices = data => ({ type: VENDOR_BORDERO_UPDATE_INVOICES, payload: data });

export const setInvoicesLoading = loading => ({
  type: VENDOR_BORDERO_INVOICES_LOADING,
  payload: loading,
});

export function fetchInvoices() {
  return (dispatch, getState) => {
    dispatch(setInvoicesLoading(true));

    const {
      vendorBorderoShow: {
        token,
        filters,
        pagination: { current: page, per },
        borderoIds,
        isAdmin,
        fornecedorId,
      },
    } = getState();

    const params = { page, per, ...formatFilters(filters) };

    if (borderoIds[0]) {
      return axios
        .get(getBorderoInvoicesUrl(isAdmin, fornecedorId, borderoIds[0]), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params,
        })
        .then(payload => {
          const formattedData = convertToCamelCase(payload.data.data);
          dispatch(updateInvoices(formattedData));
        })
        .catch(e => console.log(e));
    }
    return null;
  };
}

export const updateFilters = (filters, isAdmin) => {
  if (filters[DUPLICATA_NUMBER_IN_BORDERO]) {
    dispatchDataLayerEvent('showBorderoFiltrarNumero', isAdmin);
  }

  if (filters[VENDOR_CNPJ_EQ]) {
    dispatchDataLayerEvent('showBorderoFiltrarCNPJ', isAdmin);
  }

  if (filters[BORDERO_STATUS_IN]) {
    dispatchDataLayerEvent('showBorderoFiltrarStatus', isAdmin, {
      filtroStatusShowDoBordero: filters[BORDERO_STATUS_IN].map(
        status => STATUS_REFERENCE[status],
      ).join(' | '),
    });
  }

  if (
    !filters[DUPLICATA_NUMBER_IN_BORDERO] &&
    !filters[VENDOR_CNPJ_EQ] &&
    !filters[BORDERO_STATUS_IN]
  ) {
    dispatchDataLayerEvent('showBorderoLimparFiltro', isAdmin);
  }

  return {
    type: VENDOR_BORDERO_UPDATE_FILTERS,
    payload: { filters },
  };
};

export const setPage = page => ({ type: VENDOR_BORDERO_CHANGE_PAGE, payload: { page } });

export const nextPage = () => (dispatch, getState) => {
  const {
    vendorBorderoShow: {
      pagination: { next },
    },
  } = getState();

  dispatch(setPage(next));
};

export const previousPage = () => (dispatch, getState) => {
  const {
    vendorBorderoShow: {
      pagination: { previous },
    },
  } = getState();

  dispatch(setPage(previous));
};

export const setListing = listing => ({
  type: VENDOR_BORDERO_SET_LISTING,
  payload: {
    per: parseInt(listing, 10),
  },
});
