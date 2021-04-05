import sinon from 'sinon';
import axios from 'axios';
import { Thunk } from 'redux-testkit';
import * as localUtils from '../../utils';
import * as generalUtils from '../../../../vendor/Utils';
import {
  subscribeInvoices,
  INVOICE_SIMULATION_SUBSCRIBE,
  updateInvoices,
  UPDATE_INVOICES,
  fetchInvoices,
  FETCH_INVOICES,
  togglePageSelection,
  TOGGLE_PAGE_SELECTION,
  toggleInvoiceSelection,
  TOGGLE_INVOICE_SELECTION,
  setPage,
  CHANGE_PAGE,
  changeToNextPage,
  changeToPreviousPage,
  CHANGE_LISTING,
  changeListing,
  calculateQuote,
  quoteAllInvoices,
  QUOTE_ALL_INVOICES,
  CLEAR_INVOICES,
  resetInvoices,
  changeFilters,
  CHANGE_FILTERS,
  requestSimulationReport,
  REQUEST_SIMULATION_REPORT,
  anticipateInvoices,
  ANTICIPATE_INVOICES,
  VENDOR_INVOICES_UPDATE_SORT,
  updateSorting,
  QUOTE_INVOICES,
  UPDATE_SIMULATION_TIMEOUT_ID,
  UPDATE_QUOTE_FACE_VALUE,
} from '../VendorInvoicesActions';
import {
  INVOICES_ACTION_CABLE_CHANNEL,
  INVOICES_ACTION_CABLE_ROOM,
  INVOICES_REQUEST_DOWNLOAD_URL,
  INVOICES_REQUEST_ANTICIPATION_URL,
} from '../../urls';

describe('vendor invoices actions tests', () => {
  const token = 'mock';

  const convertStub = sinon.stub(generalUtils, 'convertToCamelCase');
  const addPercentStub = sinon.stub(localUtils, 'addRateByPeriodPercentage');
  const getStub = sinon.stub(axios, 'get');
  const postStub = sinon.stub(axios, 'post');
  sinon.stub(localUtils, 'debounce').returns(1);

  afterEach(() => {
    sinon.resetHistory();
  });

  afterAll(() => {
    sinon.restore();
  });

  it(' subscribeInvoices should dispatch correct actions', async () => {
    const dispatches = await Thunk(subscribeInvoices)
      .withState({ vendorInvoices: { vendorId: 'mockId' } })
      .execute();

    expect(dispatches.length).toBe(1);
    const [subscribe] = dispatches;

    expect(subscribe.getAction()).toEqual({
      type: INVOICE_SIMULATION_SUBSCRIBE,
      channel: INVOICES_ACTION_CABLE_CHANNEL,
      room: `${INVOICES_ACTION_CABLE_ROOM}mockId`,
    });
  });

  it('updateInvoices should return correct action with rateByPeriod: false', () => {
    const data = {
      invoices: [{ id: 1 }, { id: 2 }],
      rateByPeriod: false,
      pagination: { field: 'mock' },
    };

    convertStub.onFirstCall().returns({ id: 1 }).onSecondCall().returns({ id: 2 });

    const { invoices, pagination, rateByPeriod } = data;
    expect(updateInvoices(data)).toEqual({
      type: UPDATE_INVOICES,
      payload: { invoices, rateByPeriod, pagination },
    });

    expect(convertStub.callCount).toBe(invoices.length);
    expect(addPercentStub.called).toBeFalsy();
  });

  it('updateInvoices should return correct action with rateByPeriod: false', () => {
    const data = {
      invoices: [{ id: 1 }, { id: 2 }],
      rateByPeriod: true,
      pagination: { field: 'mock' },
    };

    convertStub.onFirstCall().returns({ id: 1 }).onSecondCall().returns({ id: 2 });
    addPercentStub.onFirstCall().returns({ id: 1 }).onSecondCall().returns({ id: 2 });

    const { invoices, pagination, rateByPeriod } = data;
    expect(updateInvoices(data)).toEqual({
      type: UPDATE_INVOICES,
      payload: { invoices, rateByPeriod, pagination },
    });

    expect(convertStub.callCount).toBe(invoices.length);
    expect(addPercentStub.callCount).toBe(invoices.length);
  });

  it('fetchInvoices should dispatch correct actions on success ', async () => {
    const filters = { filter: 'mock' };
    const pagination = { per: 10, current: 2 };

    const response = { data: { data: { invoices: [] } } };
    getStub.resolves(response);

    const dispatches = await Thunk(fetchInvoices)
      .withState({ vendorInvoices: { filters, token, pagination } })
      .execute();

    expect(dispatches.length).toBe(2);

    const [fetchAction, updateAction] = dispatches;

    expect(fetchAction.getAction()).toEqual({ type: FETCH_INVOICES });
    expect(updateAction.getAction()).toEqual({
      type: UPDATE_INVOICES,
      payload: { invoices: [], pagination: undefined, rateByPeriod: undefined },
    });
  });

  // deal with error
  // it('fetchInvoices should dispatch correct actions on error ', async () => {
  //   const filters = { filter: 'mock' };
  //   const pagination = { per: 10, current: 2 };

  //   const response = { data: { data: { invoices: [] } } };
  //   getStub.rejects(response);

  //   const dispatches = await Thunk(fetchInvoices)
  //     .withState({ vendorInvoices: { filters, token, pagination } })
  //     .execute();

  //   expect(dispatches.length).toBe(2);

  //   const [fetchAction, updateAction] = dispatches;

  //   expect(fetchAction.getAction()).toEqual({ type: FETCH_INVOICES });
  //   expect(updateAction.getAction()).toEqual({
  //     type: UPDATE_INVOICES,
  //     payload: { invoices: [], pagination: undefined, rateByPeriod: undefined },
  //   });
  // });

  it('togglePageSelection should return correct action', () => {
    expect(togglePageSelection()).toEqual({ type: TOGGLE_PAGE_SELECTION });
  });

  it('toggleInvoiceSelection should return correct action', () => {
    const invoice = { id: 1 };
    expect(toggleInvoiceSelection(invoice)).toEqual({
      type: TOGGLE_INVOICE_SELECTION,
      payload: { invoice },
    });
  });

  it('setPage should return correct action', () => {
    const page = 2;
    expect(setPage(page)).toEqual({
      type: CHANGE_PAGE,
      payload: { page },
    });
  });

  it('changeToNextPage should dispatch correct action', async () => {
    const dispatches = await Thunk(changeToNextPage)
      .withState({
        vendorInvoices: { pagination: { next: 3 } },
      })
      .execute();

    expect(dispatches.length).toBe(1);
    const [pageAction] = dispatches;
    expect(pageAction.getAction()).toEqual(setPage(3));
  });

  it('changeToPreviousPage should dispatch correct action', async () => {
    const dispatches = await Thunk(changeToPreviousPage)
      .withState({
        vendorInvoices: { pagination: { previous: 3 } },
      })
      .execute();

    expect(dispatches.length).toBe(1);
    const [pageAction] = dispatches;
    expect(pageAction.getAction()).toEqual(setPage(3));
  });

  it('changeListing should return correct action', () => {
    expect(changeListing('10')).toEqual({ type: CHANGE_LISTING, payload: { per: 10 } });
  });

  it('calculateQuote should dispatch correct actions when user has not selected all items', async () => {
    const vendorInvoices = {
      invoices: [
        { id: 1, face: 100 },
        { id: 2, face: 200 },
      ],
      selectedInvoices: [1],
      hasSelectedAllItems: false,
      token: 'mock',
      filters: {},
      simulationTimeoutId: null,
    };

    const dispatches = await Thunk(calculateQuote).withState({ vendorInvoices }).execute();

    expect(dispatches.length).toBe(3);
    const [calculateAction, updateFaceValueAction, timeoutIdAction] = dispatches;

    expect(calculateAction.getAction()).toEqual({ type: QUOTE_INVOICES });
    expect(updateFaceValueAction.getAction()).toEqual({
      type: UPDATE_QUOTE_FACE_VALUE,
      payload: { faceValue: 100 },
    });
    expect(timeoutIdAction.getAction()).toEqual({
      type: UPDATE_SIMULATION_TIMEOUT_ID,
      payload: { simulationTimeoutId: 1 },
    });
  });

  it('calculateQuote should dispatch no action when user has selected all items', async () => {
    const dispatches = await Thunk(calculateQuote)
      .withState({
        vendorInvoices: { hasSelectedAllItems: true },
      })
      .execute();

    expect(dispatches.length).toBe(0);
  });

  it('quoteAllInvoices should  dispatch correct actions on success', async () => {
    getStub.resolves({});

    const filters = { filed: 'mock' };

    const dispatches = await Thunk(quoteAllInvoices)
      .withState({ vendorInvoices: { token, filters } })
      .execute();

    expect(dispatches.length).toBe(1);
    const [quoteAction] = dispatches;

    expect(quoteAction.getAction()).toEqual({ type: QUOTE_ALL_INVOICES });
  });

  // it('quoteAllInvoices should  dispatch correct actions on error', async () => {
  //   getStub.resolves({});

  //   const filters = { filed: 'mock' };

  //   const dispatches = await Thunk(quoteAllInvoices)
  //     .withState({ vendorInvoices: { token, filters } })
  //     .execute();

  //   expect(dispatches.length).toBe(1);
  //   const [quoteAction] = dispatches;

  //   expect(quoteAction.getAction()).toEqual({ type: QUOTE_ALL_INVOICES });
  // });

  it('resetInvoices should return correct action', () => {
    expect(resetInvoices()).toEqual({ type: CLEAR_INVOICES });
  });

  it('changeFilters should return correct action', () => {
    const filters = { field: 'mock' };
    expect(changeFilters(token, filters)).toEqual({ type: CHANGE_FILTERS, payload: { filters } });
  });

  it('requestSimulationReport should disptach correct actions on success', async () => {
    postStub.resolves({});

    const selectedInvoices = [1, 2, 3];

    const data = { file_format: 'xlsx', ids: selectedInvoices };
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    const dispatches = await Thunk(requestSimulationReport)
      .withState({ vendorInvoices: { token, selectedInvoices } })
      .execute();

    expect(dispatches.length).toBe(1);
    const [requestAction] = dispatches;
    expect(requestAction.getAction()).toEqual({ type: REQUEST_SIMULATION_REPORT });
    expect(postStub.calledWith(INVOICES_REQUEST_DOWNLOAD_URL, data, headers)).toBeTruthy();
  });

  // it('requestSimulationReport should disptach correct actions on error', async () => {
  //   postStub.rejects({});

  //   const selectedInvoices = [1, 2, 3];

  //   const data = { file_format: 'xlsx', ids: selectedInvoices };
  //   const headers = { headers: { Authorization: `Bearer ${token}` } };

  //   const dispatches = await Thunk(requestSimulationReport)
  //     .withState({ vendorInvoices: { token, selectedInvoices } })
  //     .execute();

  //   expect(dispatches.length).toBe(1);
  //   const [requestAction] = dispatches;
  //   expect(requestAction.getAction()).toEqual({ type: REQUEST_SIMULATION_REPORT });
  //   expect(postStub.calledWith(INVOICES_REQUEST_DOWNLOAD_URL, data, headers)).toBeTruthy();
  // });

  // request tests

  it('anticipateInvoices should dispatch correct actions on success', async () => {
    postStub.resolves({});

    const testState = {
      vendorInvoices: {
        token,
        selectedInvoices: [1, 2, 3],
        quote: { netValue: 456.7 },
        roomId: 'uuid',
      },
    };

    const dispatches = await Thunk(anticipateInvoices).withState(testState).execute();

    expect(dispatches.length).toBe(1);
    expect(
      postStub.calledWith(
        INVOICES_REQUEST_ANTICIPATION_URL,
        { ids: [1, 2, 3], room_id: 'uuid' },
        { headers: { Authorization: `Bearer ${token}` } },
      ),
    ).toBeTruthy();
    const [anticipateAction] = dispatches;

    expect(anticipateAction.getAction()).toEqual({ type: ANTICIPATE_INVOICES });
  });

  // it('anticipateInvoices should dispatch correct actions on error', async () => {
  //   postStub.rejects({});

  //   const testState = { vendorInvoices: { token, selectedInvoices: [1, 2, 3] } };

  //   const dispatches = await Thunk(anticipateInvoices)
  //     .withState(testState)
  //     .execute();

  //   expect(dispatches.length).toBe(1);
  //   expect(
  //     postStub.calledWith(
  //       INVOICES_REQUEST_ANTICIPATION_URL,
  //       { ids: [1, 2, 3] },
  //       { headers: { Authorization: `Bearer ${token}` } },
  //     ),
  //   ).toBeTruthy();
  //   const [anticipateAction] = dispatches;

  //   expect(anticipateAction.getAction()).toEqual({ type: ANTICIPATE_INVOICES });
  // });

  it('should return correct action for updateSorting', () => {
    const mockedSorting = { sortKey: 'mockSort' };
    expect(updateSorting(mockedSorting)).toEqual({
      type: VENDOR_INVOICES_UPDATE_SORT,
      payload: { sorting: mockedSorting },
    });
  });
});
