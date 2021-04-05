import axios from 'axios';
import {
  INVOICES_URL,
  INVOICES_ACTION_CABLE_CHANNEL,
  INVOICES_ACTION_CABLE_ROOM,
  INVOICES_REQUEST_DOWNLOAD_URL,
  INVOICES_REQUEST_ANTICIPATION_URL,
  ADMIN_INVOICES_URL,
  INVOICES_QUOTE_URL,
  INVOICES_QUOTE_ALL_URL,
} from '../urls';
import { convertToCamelCase, dispatchDataLayerEvent } from '../../../vendor/Utils';
import { addRateByPeriodPercentage, getSumFaceValue, debounce } from '../utils';

export const STATUS_FILTER = 'q[status_eq]';
export const STATUS_IN_FILTER = 'q[status_in]';
export const NUMBER_FILTER = 'q[number_in]';
export const CNPJ_FILTER = 'q[emitter_cnpj_eq]';
export const EXPIRES_EQ_FILTER = 'q[expires_at_eq]';
export const EXPIRES_GT_FILTER = 'q[expires_at_gteq]';
export const EXPIRES_LT_FILTER = 'q[expires_at_lteq]';

export const AVAILABLE = 2;
export const BLOCKED = 3;

export const FETCH_INVOICES = 'FETCH_INVOICES';
export const FETCH_INVOICES_FAILED = 'FETCH_INVOICES_FAILED';
export const ANTICIPATE_ALL_INVOICES = 'ANTICIPATE_ALL_INVOICES';
export const ANTICIPATE_INVOICES = 'ANTICIPATE_INVOICES';
export const ANTICIPATION_SUCCESS = 'ANTICIPATION_SUCCESS';
export const ANTICIPATION_ERROR = 'ANTICIPATION_ERROR';
export const UPDATE_INVOICES = 'UPDATE_INVOICES';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const TOGGLE_PAGE_SELECTION = 'TOGGLE_PAGE_SELECTION';
export const TOGGLE_INVOICE_SELECTION = 'TOGGLE_INVOICE_SELECTION';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_LISTING = 'CHANGE_LISTING';
export const QUOTE_ALL_INVOICES = 'QUOTE_ALL_INVOICES';
export const INVOICE_SIMULATION_QUOTE_ALL_SUCCESS = 'INVOICE_SIMULATION_QUOTE_ALL_SUCCESS';
export const CLEAR_INVOICES = 'CLEAR_INVOICES';
export const CHANGE_FILTERS = 'CHANGE_FILTERS';
export const QUOTE_SUCCESS = 'QUOTE_SUCCESS';
export const QUOTE_INVOICES = 'QUOTE_INVOICES';
export const REQUEST_SIMULATION_REPORT = 'REQUEST_SIMULATION_REPORT';
export const INVOICE_SIMULATION_SUBSCRIBE = 'INVOICE_SIMULATION_SUBSCRIBE';
export const INVOICE_REPORT_SIMULATION_SUBSCRIBE_RECEIVED =
  'INVOICE_REPORT_SIMULATION_SUBSCRIBE_RECEIVED';
export const VENDOR_INVOICES_UPDATE_SORT = 'VENDOR_INVOICES_UPDATE_SORT';
export const UPDATE_VENDOR_AVAILABLE_LIMIT = 'UPDATE_VENDOR_AVAILABLE_LIMIT';
export const UPDATE_SHOW_LIMIT_ERROR = 'UPDATE_SHOW_LIMIT_ERROR';
export const INSUFFICIENT_ANTICIPATION_LIMIT = 'INSUFFICIENT_ANTICIPATION_LIMIT';
export const LIMITS_SUBSCRIBE = 'LIMITS_SUBSCRIBE';
export const UPDATE_QUOTE_FACE_VALUE = 'UPDATE_QUOTE_FACE_VALUE';
export const UPDATE_SIMULATION_TIMEOUT_ID = 'UPDATE_SIMULATION_TIMEOUT_ID';

const getInvoicesUrl = (isAdmin, vendorId) =>
  isAdmin ? ADMIN_INVOICES_URL.replace(':id', vendorId) : INVOICES_URL;

export const subscribeInvoices = () => (dispatch, getState) => {
  const {
    vendorInvoices: { vendorId },
  } = getState();
  dispatch({
    type: INVOICE_SIMULATION_SUBSCRIBE,
    channel: INVOICES_ACTION_CABLE_CHANNEL,
    room: INVOICES_ACTION_CABLE_ROOM + vendorId,
  });
};

export const subscribeToLimits = () => (dispatch, getState) => {
  const {
    vendorInvoices: { roomId },
  } = getState();
  dispatch({
    type: LIMITS_SUBSCRIBE,
    channel: 'AnticipationLimitsChannel',
    roomId,
  });
};

export const updateInvoices = data => {
  const { invoices, pagination, rateByPeriod } = data;
  let formattedInvoices = invoices.map(convertToCamelCase);

  if (rateByPeriod) {
    formattedInvoices = formattedInvoices.map(addRateByPeriodPercentage);
  }

  return {
    type: UPDATE_INVOICES,
    payload: {
      invoices: formattedInvoices,
      pagination,
      rateByPeriod,
    },
  };
};

export const fetchInvoices = () => (dispatch, getState) => {
  dispatch({ type: FETCH_INVOICES });
  const {
    vendorInvoices: {
      filters,
      pagination: { current: page, per },
      token,
      isAdmin,
      vendorId,
      sorting,
    },
  } = getState();

  const filterByAvailable = isAdmin
    ? { [STATUS_IN_FILTER]: [AVAILABLE, BLOCKED] }
    : { [STATUS_FILTER]: AVAILABLE };

  return axios
    .get(getInvoicesUrl(isAdmin, vendorId), {
      headers: { Authorization: `Bearer ${token}` },
      params: { ...sorting, ...filters, ...filterByAvailable, page, per },
    })
    .then(payload => {
      const {
        data: { data },
      } = payload;

      dispatch(updateInvoices(data));
    })
    .catch(() => dispatch({ type: FETCH_INVOICES_FAILED }));
};

export const togglePageSelection = () => ({ type: TOGGLE_PAGE_SELECTION });

export const toggleInvoiceSelection = invoice => ({
  type: TOGGLE_INVOICE_SELECTION,
  payload: { invoice },
});

export const setPage = page => ({ type: CHANGE_PAGE, payload: { page } });

export const changeToNextPage = () => (dispatch, getState) => {
  const {
    vendorInvoices: {
      pagination: { next },
    },
  } = getState();

  dispatch(setPage(next));
};

export const changeToPreviousPage = () => (dispatch, getState) => {
  const {
    vendorInvoices: {
      pagination: { previous },
    },
  } = getState();

  dispatch(setPage(previous));
};

export const changeListing = listing => ({
  type: CHANGE_LISTING,
  payload: {
    per: parseInt(listing, 10),
  },
});

export const calculateQuote = () => (dispatch, getState) => {
  const {
    vendorInvoices: {
      invoices,
      selectedInvoices,
      hasSelectedAllItems,
      token,
      filters,
      simulationTimeoutId,
    },
  } = getState();

  if (hasSelectedAllItems) return {};

  dispatch({ type: QUOTE_INVOICES });

  if (!hasSelectedAllItems) {
    const faceValue = getSumFaceValue(invoices, selectedInvoices);
    dispatch({ type: UPDATE_QUOTE_FACE_VALUE, payload: { faceValue } });
  }

  const newSimulationTimeoutId = debounce(
    () =>
      axios({
        method: 'post',
        url: INVOICES_QUOTE_URL,
        headers: {
          'X-HTTP-Method-Override': 'GET',
          Authorization: `Bearer ${token}`,
        },
        data: {
          ...filters,
          ids: selectedInvoices,
        },
      }).catch(() => {}),
    simulationTimeoutId,
  );

  return dispatch({
    type: UPDATE_SIMULATION_TIMEOUT_ID,
    payload: { simulationTimeoutId: newSimulationTimeoutId },
  });
};

export const quoteAllInvoices = () => (dispatch, getState) => {
  const {
    vendorInvoices: { token, filters },
  } = getState();

  dispatch({ type: QUOTE_ALL_INVOICES });

  return axios
    .get(INVOICES_QUOTE_ALL_URL, {
      headers: { Authorization: `Bearer ${token}` },
      params: { ...filters },
    })
    .catch(() => {});
};

export const resetInvoices = () => ({ type: CLEAR_INVOICES });

export const changeFilters = (token, filters, isAdmin) => {
  if (filters[NUMBER_FILTER]) {
    dispatchDataLayerEvent('titulosFiltrarNumero', isAdmin);
  }

  if (filters[CNPJ_FILTER]) {
    dispatchDataLayerEvent('titulosFiltrarCNPJ', isAdmin);
  }

  if (filters[EXPIRES_EQ_FILTER] || filters[EXPIRES_GT_FILTER] || filters[EXPIRES_LT_FILTER]) {
    dispatchDataLayerEvent('titulosFiltrarVencimento', isAdmin);
  }

  if (
    !filters[NUMBER_FILTER] &&
    !filters[CNPJ_FILTER] &&
    !filters[EXPIRES_EQ_FILTER] &&
    !filters[EXPIRES_GT_FILTER] &&
    !filters[EXPIRES_LT_FILTER]
  ) {
    dispatchDataLayerEvent('titulosLimparFiltro', isAdmin);
  }

  return {
    type: CHANGE_FILTERS,
    payload: { filters },
  };
};

export const requestSimulationReport = () => (dispatch, getState) => {
  const {
    vendorInvoices: { token, selectedInvoices },
  } = getState();

  dispatch({ type: REQUEST_SIMULATION_REPORT });

  return axios
    .post(
      INVOICES_REQUEST_DOWNLOAD_URL,
      { file_format: 'xlsx', ids: selectedInvoices },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .catch(() => {});
};

export const showAnticipationLimitError = ({ show, surplusValue }) => ({
  type: UPDATE_SHOW_LIMIT_ERROR,
  payload: { show, surplusValue },
});

export const anticipateInvoices = () => (dispatch, getState) => {
  const {
    vendorInvoices: {
      token,
      selectedInvoices,
      isAdmin,
      availableLimit,
      quote: { netValue },
      roomId,
    },
  } = getState();

  const hasLimitSet = availableLimit !== null && availableLimit !== undefined;

  const surplusValue = parseFloat(netValue) - availableLimit;
  if (hasLimitSet && surplusValue > 0 && selectedInvoices.length) {
    dispatch(showAnticipationLimitError({ show: true, surplusValue }));
    return null;
  }

  dispatchDataLayerEvent(
    selectedInvoices.length === 0 ? 'titulosAnteciparTodos' : 'titulosSolicitarAdiantamento',
    isAdmin,
  );

  dispatch({ type: ANTICIPATE_INVOICES });

  return axios
    .post(
      INVOICES_REQUEST_ANTICIPATION_URL,
      { ids: selectedInvoices, room_id: roomId },
      { headers: { Authorization: `Bearer ${token}` } },
    )
    .catch(() => {
      dispatch({ type: ANTICIPATION_ERROR });
    });
};

export const updateSorting = (sorting = {}) => ({
  type: VENDOR_INVOICES_UPDATE_SORT,
  payload: { sorting },
});

export const updateAvailableLimit = availableLimit => ({
  type: UPDATE_VENDOR_AVAILABLE_LIMIT,
  payload: { availableLimit },
});
