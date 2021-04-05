import Immutable from 'seamless-immutable';
import {
  VENDOR_BORDERO_UPDATE_SUMMARY,
  VENDOR_BORDERO_UPDATE_INVOICES,
  VENDOR_BORDERO_UPDATE_FILTERS,
  VENDOR_BORDERO_INVOICES_LOADING,
  VENDOR_BORDERO_CHANGE_PAGE,
  VENDOR_BORDERO_SET_LISTING,
} from '../actions/VendorBorderoShowActions';
import { VENDOR_CNPJ_EQ } from '../utils';
import { cleanTaxNumber } from '../../../vendor/Utils';

export const initialState = Immutable({
  token: null,
  fornecedorId: null,
  operator: {
    id: null,
    cpf: '',
    name: '',
  },
  borderoIds: [],
  error: '',
  summaryLoading: true,
  invoicesLoading: false,
  summary: {
    buyer: {
      name: null,
      cnpj: null,
    },
    paidValue: null,
    netValue: null,
    invoiceCount: null,
    paidInvoiceCount: null,
    requestedAt: null,
    operators: [],
    bankAccount: null,
    signatureCertificateUrl: '#1',
    invoiceTransferAgreementUrl: '#2',
    signatures: {
      required: 1,
    },
  },
  invoices: [],
  filters: {},
  pagination: {
    current: 1,
    previous: null,
    next: null,
    per: 10,
    pages: 1,
    count: 0,
  },
  isAdmin: false,
});

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case VENDOR_BORDERO_UPDATE_SUMMARY:
      return state.merge({
        summary: action.payload,
        summaryLoading: false,
      });
    case VENDOR_BORDERO_UPDATE_INVOICES: {
      const { pagination, invoices } = action.payload;
      return state.merge({
        invoicesLoading: false,
        pagination: {
          ...pagination,
        },
        invoices,
      });
    }
    case VENDOR_BORDERO_INVOICES_LOADING:
      return state.merge({ invoicesLoading: action.payload });
    case VENDOR_BORDERO_UPDATE_FILTERS: {
      const { pagination } = state;
      const {
        payload: { filters },
      } = action;

      const newFilters = {
        ...filters,
        [VENDOR_CNPJ_EQ]: cleanTaxNumber(filters[VENDOR_CNPJ_EQ]),
      };

      return state.merge({
        filters: newFilters,
        pagination: { ...pagination, current: 1 },
      });
    }
    case VENDOR_BORDERO_CHANGE_PAGE: {
      const {
        payload: { page },
      } = action;
      const { pagination } = state;

      return state.merge({
        pagination: { ...pagination, current: page },
      });
    }
    case VENDOR_BORDERO_SET_LISTING: {
      const {
        payload: { per },
      } = action;
      const { pagination } = state;

      return state.merge({
        pagination: { ...pagination, current: 1, per },
      });
    }
    default:
      return state;
  }
};
