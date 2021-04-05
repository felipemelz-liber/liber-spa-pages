import reducer, { initialState } from '../VendorBorderoShowReducer';
import {
  VENDOR_BORDERO_UPDATE_SUMMARY,
  VENDOR_BORDERO_UPDATE_INVOICES,
  VENDOR_BORDERO_INVOICES_LOADING,
  VENDOR_BORDERO_UPDATE_FILTERS,
  VENDOR_BORDERO_CHANGE_PAGE,
  VENDOR_BORDERO_SET_LISTING,
} from '../../actions/VendorBorderoShowActions';
import { MOCKED_SUMMARY, MOCKED_INVOICES, VENDOR_CNPJ_EQ } from '../../utils';

describe('VendorBorderoShowReducer tests', () => {
  it('should return current state by default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should update summary', () => {
    const action = { type: VENDOR_BORDERO_UPDATE_SUMMARY, payload: MOCKED_SUMMARY };
    const result = initialState.merge({ summary: MOCKED_SUMMARY, summaryLoading: false });
    expect(reducer(initialState, action)).toEqual(result);
  });

  it('should update invoices', () => {
    const action = {
      type: VENDOR_BORDERO_UPDATE_INVOICES,
      payload: { pagination: {}, invoices: MOCKED_INVOICES },
    };
    const result = initialState.merge({
      invoices: MOCKED_INVOICES,
      invoicesLoading: false,
      pagination: {},
    });
    expect(reducer(initialState, action)).toEqual(result);
  });

  it('should set invoice loading', () => {
    const action = {
      type: VENDOR_BORDERO_INVOICES_LOADING,
      payload: true,
    };
    const result = initialState.merge({ invoicesLoading: true });
    expect(reducer(initialState, action)).toEqual(result);
  });

  it('should update filters', () => {
    const action = {
      type: VENDOR_BORDERO_UPDATE_FILTERS,
      payload: { filters: { field: 'mock' } },
    };
    const result = initialState.merge({ filters: { field: 'mock', [VENDOR_CNPJ_EQ]: undefined } });
    expect(reducer(initialState, action)).toEqual(result);
  });

  it('should change page', () => {
    const action = {
      type: VENDOR_BORDERO_CHANGE_PAGE,
      payload: { page: 5 },
    };
    const result = initialState.merge({
      pagination: { ...initialState.pagination, current: 5 },
    });
    expect(reducer(initialState, action)).toEqual(result);
  });

  it('should set listing', () => {
    const action = {
      type: VENDOR_BORDERO_SET_LISTING,
      payload: { per: 25 },
    };
    const result = initialState.merge({
      pagination: { ...initialState.pagination, current: 1, per: 25 },
    });
    expect(reducer(initialState, action)).toEqual(result);
  });
});
