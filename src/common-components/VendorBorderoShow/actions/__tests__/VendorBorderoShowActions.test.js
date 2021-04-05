import sinon from 'sinon';
import axios from 'axios';
import { Thunk } from 'redux-testkit';
import {
  updateSummary,
  VENDOR_BORDERO_UPDATE_SUMMARY,
  fetchSummary,
  updateInvoices,
  VENDOR_BORDERO_UPDATE_INVOICES,
  setInvoicesLoading,
  VENDOR_BORDERO_INVOICES_LOADING,
  fetchInvoices,
  updateFilters,
  VENDOR_BORDERO_UPDATE_FILTERS,
  setPage,
  VENDOR_BORDERO_CHANGE_PAGE,
  nextPage,
  previousPage,
  setListing,
  VENDOR_BORDERO_SET_LISTING,
} from '../VendorBorderoShowActions';
import { MOCKED_SUMMARY, MOCKED_INVOICES } from '../../utils';
import { convertToCamelCase } from '../../../../vendor/Utils';
import { filtersMock } from '../../components/Filters/__tests__/BorderoInvoicesFilters.test';

describe('VendorBorderoShowActions tests', () => {
  const getStub = sinon.stub(axios, 'get');

  it('updateSummary should return correct action', () => {
    expect(updateSummary(MOCKED_SUMMARY)).toEqual({
      type: VENDOR_BORDERO_UPDATE_SUMMARY,
      payload: MOCKED_SUMMARY,
    });
  });

  it('fetchSummary should return correct action', async () => {
    getStub.resolves({
      data: { data: MOCKED_SUMMARY },
    });

    const dispatches = await Thunk(fetchSummary)
      .withState({ vendorBorderoShow: { token: 'token', borderoIds: [6] } })
      .execute();

    expect(dispatches.length).toBe(1);
    const [update] = dispatches;

    expect(update.getAction()).toEqual({
      type: VENDOR_BORDERO_UPDATE_SUMMARY,
      payload: convertToCamelCase(MOCKED_SUMMARY),
    });
  });

  it('updateInvoices should return correct action', () => {
    expect(updateInvoices(MOCKED_INVOICES)).toEqual({
      type: VENDOR_BORDERO_UPDATE_INVOICES,
      payload: MOCKED_INVOICES,
    });
  });

  it('setInvoicesLoading should return correct action', () => {
    expect(setInvoicesLoading(true)).toEqual({
      type: VENDOR_BORDERO_INVOICES_LOADING,
      payload: true,
    });
  });

  it('fetchInvoices should return correct actions', async () => {
    getStub.resolves({
      data: { data: MOCKED_INVOICES },
    });

    const dispatches = await Thunk(fetchInvoices)
      .withState({
        vendorBorderoShow: {
          token: 'token',
          filters: {},
          pagination: { current: 1, per: 10 },
          borderoIds: [6],
        },
      })
      .execute();

    expect(dispatches.length).toBe(2);
    const [setLoading, update] = dispatches;

    expect(setLoading.getAction()).toEqual({
      type: VENDOR_BORDERO_INVOICES_LOADING,
      payload: true,
    });

    expect(update.getAction()).toEqual({
      type: VENDOR_BORDERO_UPDATE_INVOICES,
      payload: convertToCamelCase(MOCKED_INVOICES),
    });
  });

  it('updateFilters should return correct actions', () => {
    expect(updateFilters(filtersMock)).toEqual({
      type: VENDOR_BORDERO_UPDATE_FILTERS,
      payload: { filters: filtersMock },
    });
  });

  it('setPage should return correct action', () => {
    expect(setPage(2)).toEqual({
      type: VENDOR_BORDERO_CHANGE_PAGE,
      payload: { page: 2 },
    });
  });

  it('nextPage should return correct action', async () => {
    const dispatches = await Thunk(nextPage)
      .withState({
        vendorBorderoShow: {
          pagination: { next: 5 },
        },
      })
      .execute();

    expect(dispatches.length).toBe(1);
    const [pageDispatch] = dispatches;

    expect(pageDispatch.getAction()).toEqual({
      type: VENDOR_BORDERO_CHANGE_PAGE,
      payload: { page: 5 },
    });
  });

  it('previousPage should return correct action', async () => {
    const dispatches = await Thunk(previousPage)
      .withState({
        vendorBorderoShow: {
          pagination: { previous: 3 },
        },
      })
      .execute();

    expect(dispatches.length).toBe(1);
    const [pageDispatch] = dispatches;

    expect(pageDispatch.getAction()).toEqual({
      type: VENDOR_BORDERO_CHANGE_PAGE,
      payload: { page: 3 },
    });
  });

  it('setListing should return correct action', () => {
    expect(setListing('25')).toEqual({
      type: VENDOR_BORDERO_SET_LISTING,
      payload: { per: 25 },
    });
  });
});
