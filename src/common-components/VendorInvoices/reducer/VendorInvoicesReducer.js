import Immutable from 'seamless-immutable';
import { differenceBy, uniq } from 'lodash';
import { v4 as uuid } from 'uuid';
import {
  FETCH_INVOICES,
  UPDATE_INVOICES,
  NUMBER_FILTER,
  CNPJ_FILTER,
  EXPIRES_EQ_FILTER,
  EXPIRES_GT_FILTER,
  EXPIRES_LT_FILTER,
  TOGGLE_PAGE_SELECTION,
  TOGGLE_INVOICE_SELECTION,
  CHANGE_PAGE,
  CHANGE_LISTING,
  QUOTE_ALL_INVOICES,
  INVOICE_SIMULATION_QUOTE_ALL_SUCCESS,
  CLEAR_INVOICES,
  CHANGE_FILTERS,
  QUOTE_SUCCESS,
  QUOTE_INVOICES,
  REQUEST_SIMULATION_REPORT,
  INVOICE_REPORT_SIMULATION_SUBSCRIBE_RECEIVED,
  ANTICIPATE_ALL_INVOICES,
  ANTICIPATION_SUCCESS,
  ANTICIPATION_ERROR,
  ANTICIPATE_INVOICES,
  FETCH_INVOICES_FAILED,
  VENDOR_INVOICES_UPDATE_SORT,
  UPDATE_VENDOR_AVAILABLE_LIMIT,
  UPDATE_SHOW_LIMIT_ERROR,
  INSUFFICIENT_ANTICIPATION_LIMIT,
  UPDATE_QUOTE_FACE_VALUE,
  UPDATE_SIMULATION_TIMEOUT_ID,
} from '../actions/VendorInvoicesActions';
import {
  convertToCamelCase,
  cleanTaxNumber,
  handleError,
  dispatchDataLayerEvent,
} from '../../../vendor/Utils';
import { hasFilters, parseFloatQuote } from '../utils';
import { SORT_KEY } from '../../../hooks/useSorting';

export const DEFAULT_SORTING = { columnName: 'number', direction: 'asc' };

export const initialState = Immutable({
  invoices: [],
  selectedInvoices: [],
  unselectedInvoices: [],
  invoicesReferences: [],
  pagination: {
    current: 1,
    previous: null,
    next: null,
    per: 10,
    pages: 1,
    count: 1,
  },
  filters: {
    [NUMBER_FILTER]: null,
    [CNPJ_FILTER]: null,
    [EXPIRES_EQ_FILTER]: null,
    [EXPIRES_GT_FILTER]: null,
    [EXPIRES_LT_FILTER]: null,
  },
  sorting: {
    [SORT_KEY]: `${DEFAULT_SORTING.columnName} ${DEFAULT_SORTING.direction}`,
  },
  quote: {
    faceValue: 0,
    discountValue: 0,
    discountRate: 0,
    netValue: 0,
  },
  quoteAll: {
    faceValue: 0,
    discountValue: 0,
    discountRate: 0,
    netValue: 0,
  },
  token: null,
  canInputXml: false,
  inputXmlPath: null,
  vendorId: null,
  isPageSelected: false,
  hasSelectedAllItems: false,
  loading: false,
  loadingButton: false,
  redirectUrl: null,
  rateByPeriod: false,
  isFiltered: false,
  report: {
    successful: false,
    url: null,
    errorMessage: null,
  },
  isAdmin: false,
  availableLimit: null,
  limitError: { show: false, surplusValue: null },
  roomId: uuid(),
  isSimulationOutdated: false,
  simulationTimeoutId: null,
});

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_INVOICES:
    case REQUEST_SIMULATION_REPORT:
    case ANTICIPATE_INVOICES:
      return state.merge({
        loading: true,
      });

    case FETCH_INVOICES_FAILED: {
      handleError();
      return state.merge({
        loading: false,
      });
    }

    case ANTICIPATE_ALL_INVOICES:
      return state.merge({ loadingButton: true });

    case ANTICIPATION_ERROR: {
      const { isAdmin } = state;
      if (payload && payload.message === 'Erro ao criar o borderô dos títulos.') {
        dispatchDataLayerEvent('erroTitulosCriarBordero', isAdmin);

        handleError(
          'Ocorreu um erro com o pedido de antecipação!',
          'Tente novamente ou comunique o suporte',
        );
      } else {
        dispatchDataLayerEvent('erroTitulosKitDocumentoOuTitulo', isAdmin);

        handleError(
          'A antecipação não pode ser realizada!',
          'Tente novamente ou comunique o suporte',
        );
      }
      return state.merge({ loadingButton: false, loading: false });
    }

    case ANTICIPATION_SUCCESS: {
      const {
        payload: { url },
      } = action;

      return state.merge({ redirectUrl: url });
    }

    case INSUFFICIENT_ANTICIPATION_LIMIT:
      return state.merge({ loadingButton: false, loading: false, limitError: { show: true } });

    case UPDATE_INVOICES: {
      const {
        payload: { invoices, pagination, rateByPeriod },
      } = action;

      const { selectedInvoices, invoicesReferences } = state;

      const invoicesToAdd = invoices.map(invoice => {
        const { id } = invoice;
        if (invoicesReferences.find(reference => reference.id === id)) {
          return null;
        }
        return invoice;
      });

      const updatedReferences = invoicesReferences.concat(
        invoicesToAdd.filter(invoice => invoice !== null),
      );

      const isPageSelected =
        differenceBy(invoices, selectedInvoices, item => item.id || item).length === 0;

      return state.merge({
        loading: false,
        invoices,
        pagination,
        isPageSelected,
        rateByPeriod,
        invoicesReferences: updatedReferences,
      });
    }

    case INVOICE_REPORT_SIMULATION_SUBSCRIBE_RECEIVED: {
      const {
        payload: { status, report, error_msg: errorMessage },
      } = action;
      return state.merge({
        report: { successful: status, url: report, errorMessage },
        loading: false,
      });
    }

    case TOGGLE_PAGE_SELECTION: {
      const { isPageSelected, invoices, selectedInvoices, unselectedInvoices } = state;

      let updateUnselected = [];
      let updateSelected = [];

      const invoicesIds = invoices.map(({ id }) => id);

      if (isPageSelected) {
        updateSelected = selectedInvoices.filter(id => !invoicesIds.includes(id));
        updateUnselected = uniq(unselectedInvoices.concat(invoices));
      } else {
        updateUnselected = unselectedInvoices.filter(({ id }) => !invoicesIds.includes(id));
        updateSelected = uniq(selectedInvoices.concat(invoicesIds));
      }

      return state.merge({
        isPageSelected: !isPageSelected,
        unselectedInvoices: updateUnselected,
        selectedInvoices: updateSelected,
      });
    }

    case TOGGLE_INVOICE_SELECTION: {
      const {
        payload: { invoice },
      } = action;
      const { selectedInvoices, invoices, unselectedInvoices } = state;

      let updatedSelectedInvoices = [];
      let updateUnselected = [];

      if (selectedInvoices.includes(invoice.id)) {
        updatedSelectedInvoices = selectedInvoices.filter(id => id !== invoice.id);
        updateUnselected = unselectedInvoices.concat([invoice]);
      } else {
        updatedSelectedInvoices = selectedInvoices.concat([invoice.id]);
        updateUnselected = unselectedInvoices.filter(({ id }) => id !== invoice.id);
      }

      const difference = differenceBy(invoices, updatedSelectedInvoices, item => item.id || item);

      const isPageSelected = difference.length === 0;

      return state.merge({
        isPageSelected,
        selectedInvoices: uniq(updatedSelectedInvoices),
        unselectedInvoices: uniq(updateUnselected),
      });
    }

    case CHANGE_PAGE: {
      const {
        payload: { page },
      } = action;
      const { pagination } = state;

      return state.merge({
        pagination: { ...pagination, current: page },
      });
    }

    case CHANGE_LISTING: {
      const {
        payload: { per },
      } = action;
      const { pagination } = state;

      return state.merge({
        pagination: { ...pagination, current: 1, per },
      });
    }
    case CHANGE_FILTERS: {
      const {
        payload: { filters },
      } = action;
      const { pagination } = state;

      const newFilters = { ...filters, [CNPJ_FILTER]: cleanTaxNumber(filters[CNPJ_FILTER]) };

      return state.merge({
        filters: newFilters,
        isFiltered: hasFilters(newFilters),
        pagination: {
          ...pagination,
          current: 1,
        },
      });
    }

    case QUOTE_INVOICES:
      return state.merge({ isSimulationOutdated: true });

    case QUOTE_SUCCESS: {
      const { hasSelectedAllItems } = state;

      if (hasSelectedAllItems) return state;

      const {
        payload: { quote },
      } = action;

      const formattedQuote = parseFloatQuote(convertToCamelCase(quote));

      const { faceValue, netValue } = formattedQuote;

      return state.merge({
        quote: { ...formattedQuote, discountValue: faceValue - netValue },
        loading: false,
        isSimulationOutdated: false,
      });
    }

    case UPDATE_QUOTE_FACE_VALUE: {
      const { quote } = state;
      const { faceValue } = payload;
      return state.merge({ quote: { ...quote, faceValue } });
    }

    case UPDATE_SIMULATION_TIMEOUT_ID: {
      const { simulationTimeoutId } = payload;
      return state.merge({ simulationTimeoutId });
    }

    case QUOTE_ALL_INVOICES: {
      return state.merge({ loading: true, isSimulationOutdated: true, hasSelectedAllItems: true });
    }

    case CLEAR_INVOICES: {
      return state.merge({
        hasSelectedAllItems: false,
        selectedInvoices: [],
        unselectedInvoices: [],
        isPageSelected: false,
      });
    }

    case INVOICE_SIMULATION_QUOTE_ALL_SUCCESS: {
      const {
        payload: { invoice_id: invoicesIds, quote },
      } = action;

      const formattedQuote = parseFloatQuote(convertToCamelCase(quote));

      const { faceValue, netValue } = formattedQuote;

      return state.merge({
        quoteAll: { ...formattedQuote, discountValue: faceValue - netValue },
        quote: { ...formattedQuote, discountValue: faceValue - netValue },
        selectedInvoices: invoicesIds,
        isPageSelected: true,
        loading: false,
        unselectedInvoices: [],
        isSimulationOutdated: false,
      });
    }

    case VENDOR_INVOICES_UPDATE_SORT: {
      const { sorting } = payload;
      return state.merge({ sorting });
    }

    case UPDATE_VENDOR_AVAILABLE_LIMIT: {
      const { availableLimit } = payload;
      return state.merge({ availableLimit });
    }

    case UPDATE_SHOW_LIMIT_ERROR: {
      const { surplusValue, show } = payload;
      return state.merge({ limitError: { surplusValue, show } });
    }

    default:
      return state;
  }
};
