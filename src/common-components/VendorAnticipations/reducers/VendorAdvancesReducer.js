import Immutable from 'seamless-immutable';
import { calculateQuote, handleError, REQUESTED_LT, REQUESTED_GT, STATUS_IN } from '../utils';
import {
  VENDOR_ADVANCES_CHANGE_TAB,
  VENDOR_ADVANCES_UPDATE_PAGINATION,
  VENDOR_ADVANCES_FETCH_NEGOTIATIONS_SUCCESS,
  VENDOR_ADVANCES_FETCH_NEGOTIATIONS_REJECTED,
  VENDOR_ADVANCES_FETCH_NEGOTIATIONS,
  UPDATE_ADVANCES,
  TOGGLE_SELECT_ALL,
  UPDATE_SELECT_ADVANCES,
  SET_MODAL_OPEN,
  READY_TO_SIGN,
  HANDLE_REQUEST_ERROR,
  UPDATE_NEGOTIATIONS_FILTERS,
  VENDOR_ADVANCES_FETCH_ADVANCES,
  UPDATE_FILTERS,
} from '../actions/VendorAdvancesActions';

export const initialState = Immutable({
  token: null,
  vendorId: null,
  operator: {
    id: null,
    cpf: '',
    name: '',
  },
  error: '',
  pendingAdvances: [],
  concludedAdvances: [],
  filters: {
    [REQUESTED_LT]: null,
    [REQUESTED_GT]: null,
    [STATUS_IN]: null,
  },
  pagination: {
    current: 1,
    previous: null,
    next: null,
    per: 25,
    pages: 1,
    count: 0,
  },
  loading: false,
  isAdmin: false,
});

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case VENDOR_ADVANCES_CHANGE_TAB:
      return state.merge({
        activeTab: action.payload.tab,
      });
    case VENDOR_ADVANCES_UPDATE_PAGINATION: {
      const {
        payload: { pagination: newPagination },
      } = action;
      const { pagination } = state;

      return state.merge({
        pagination: { ...pagination, ...newPagination },
      });
    }
    case VENDOR_ADVANCES_FETCH_NEGOTIATIONS_SUCCESS: {
      const { negotiations, pagination } = action.payload;
      return state.merge({
        loading: false,
        negotiations,
        pagination,
      });
    }
    case VENDOR_ADVANCES_FETCH_NEGOTIATIONS_REJECTED:
      return state.merge({
        error: action.payload.message,
        loading: false,
        negotiations: [],
      });
    case VENDOR_ADVANCES_FETCH_NEGOTIATIONS:
      return state.merge({
        error: '',
        loading: true,
        negotiations: [],
      });
    case SET_MODAL_OPEN: {
      const {
        payload: { modalOpen },
      } = action;
      return state.merge({ modalOpen });
    }

    case READY_TO_SIGN: {
      return state.merge({ buttonLoading: false, modalOpen: true });
    }

    case VENDOR_ADVANCES_FETCH_ADVANCES:
      return state.merge({ loading: true });
    case UPDATE_ADVANCES: {
      const { payload } = action;

      return state.merge({
        loading: false,
        ...payload,
      });
    }

    case UPDATE_FILTERS: {
      const {
        payload: { filters },
      } = action;
      const { pagination } = state;

      return state.merge({
        filters: { ...state.filters, ...filters },
        pagination: { ...pagination, current: 1 },
      });
    }

    case HANDLE_REQUEST_ERROR: {
      const {
        payload: { error },
      } = action;

      handleError(error);

      return state.merge({
        buttonLoading: false,
        loading: false,
        isSigningDocuments: false,
      });
    }

    case TOGGLE_SELECT_ALL: {
      const { advances, isPageFullySelected } = state;

      const selectedAdvances = isPageFullySelected
        ? []
        : advances.filter(({ userHasSigned }) => !userHasSigned);

      const quote = calculateQuote(selectedAdvances);

      return state.merge({ selectedAdvances, isPageFullySelected: !isPageFullySelected, quote });
    }

    case UPDATE_SELECT_ADVANCES: {
      const { selectedAdvances, selectableAdvancesCount } = state;
      const {
        payload: { advance },
      } = action;

      let updatedSelectedAdvances;

      if (selectedAdvances.includes(advance)) {
        updatedSelectedAdvances = selectedAdvances.filter(({ id }) => id !== advance.id);
      } else {
        updatedSelectedAdvances = selectedAdvances.concat([advance]);
      }

      const quote = calculateQuote(updatedSelectedAdvances);

      return state.merge({
        selectedAdvances: updatedSelectedAdvances,
        quote,
        isPageFullySelected: updatedSelectedAdvances.length === selectableAdvancesCount,
      });
    }

    case UPDATE_NEGOTIATIONS_FILTERS:
      return state.merge({ negotiationsFilters: action.payload });

    default:
      return state;
  }
};
