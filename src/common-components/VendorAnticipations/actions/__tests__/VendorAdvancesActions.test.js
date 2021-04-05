import { Thunk } from 'redux-testkit';
import sinon from 'sinon';
import axios from 'axios';
import * as utils from '../../utils';
import {
  VENDOR_ADVANCES_CHANGE_TAB,
  VENDOR_ADVANCES_UPDATE_PAGINATION,
  changeTab,
  updatePagination,
  updateAdvances,
  UPDATE_ADVANCES,
  fetchAdvances,
  VENDOR_ADVANCES_FETCH_ADVANCES,
  handleError,
} from '../VendorAdvancesActions';
import { ADVANCES_URL } from '../../urls';

describe('VendorAdvancesActions tests', () => {
  const token = 'mock';
  const error = { message: 'error' };

  const pagination = { current: 1, per: 10 };

  const getStub = sinon.stub(axios, 'get');

  const convertStub = sinon.stub(utils, 'convertToCamelCase');

  afterEach(() => {
    sinon.resetHistory();
  });

  afterAll(() => {
    sinon.restore();
  });

  it('changeTab should return action', async () => {
    const action = changeTab('newTab');
    expect(action).toEqual({
      type: VENDOR_ADVANCES_CHANGE_TAB,
      payload: {
        tab: 'newTab',
      },
    });
  });
  it('updatePagination should return correct action', () => {
    const paginationMock = {
      page: 5,
      per: 10,
    };
    expect(updatePagination(paginationMock)).toEqual({
      payload: {
        pagination: { current: 5, per: 10 },
      },
      type: VENDOR_ADVANCES_UPDATE_PAGINATION,
    });
  });

  it('updateAdvances should return correct action for pending type', () => {
    const payload = {
      advances: [{ id: 1, user_has_signed: false }],
      pagination: { current: 1, per: 10 },
    };

    convertStub.returns({ id: 1, userHasSigned: false });

    expect(updateAdvances(payload, 'pending')).toEqual({
      type: UPDATE_ADVANCES,
      payload: {
        pendingAdvances: [{ id: 1, userHasSigned: false }],
      },
    });
  });

  it('updateAdvances should return correct action for concluded type', () => {
    const payload = {
      advances: [{ id: 1, user_has_signed: false }],
      pagination: { current: 1, per: 10 },
    };

    convertStub.returns({ id: 1, userHasSigned: false });

    expect(updateAdvances(payload, 'concluded')).toEqual({
      type: UPDATE_ADVANCES,
      payload: {
        concludedAdvances: [{ id: 1, userHasSigned: false }],
        pagination: payload.pagination,
      },
    });
  });

  it('fetchAdvances should dispatch correct actions on success and type = pending', async () => {
    const payload = {
      data: {
        data: { advances: [{ id: 1, user_has_signed: false }], pagination },
      },
    };

    getStub.resolves(payload);

    const dispatches = await Thunk(fetchAdvances)
      .withState({ vendorAdvances: { token, pagination, filters: {} } })
      .execute();

    expect(
      getStub.calledWith(ADVANCES_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { ...utils.STATUS_FILTERS_TYPES.pending },
      }),
    ).toBeTruthy();

    expect(dispatches.length).toBe(2);
    const [fetchAction, updateAction] = dispatches;
    expect(fetchAction.getAction()).toEqual({ type: VENDOR_ADVANCES_FETCH_ADVANCES });
    expect(updateAction.getAction()).toEqual(updateAdvances(payload.data.data, 'pending'));
  });

  it('fetchAdvances should dispatch correct actions on success and type = concluded', async () => {
    const payload = {
      data: {
        data: { advances: [{ id: 1, user_has_signed: false }], pagination },
      },
    };

    getStub.resolves(payload);

    const dispatches = await Thunk(fetchAdvances)
      .withState({ vendorAdvances: { token, pagination, filters: {} } })
      .execute('concluded');

    const { current: page, per } = pagination;

    expect(
      getStub.calledWith(ADVANCES_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { page, per, ...utils.STATUS_FILTERS_TYPES.concluded },
      }),
    ).toBeTruthy();

    expect(dispatches.length).toBe(2);
    const [fetchAction, updateAction] = dispatches;
    expect(fetchAction.getAction()).toEqual({ type: VENDOR_ADVANCES_FETCH_ADVANCES });
    expect(updateAction.getAction()).toEqual(updateAdvances(payload.data.data, 'concluded'));
  });

  it('fetchAdvances should dispatch correct actions on fail', async () => {
    getStub.rejects(error);

    const dispatches = await Thunk(fetchAdvances)
      .withState({ vendorAdvances: { token, pagination, filters: {} } })
      .execute('pending');

    expect(
      getStub.calledWith(ADVANCES_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { ...utils.STATUS_FILTERS_TYPES.pending },
      }),
    ).toBeTruthy();
    expect(dispatches.length).toBe(2);
    const [fetchAction, errorAction] = dispatches;
    expect(fetchAction.getAction()).toEqual({ type: VENDOR_ADVANCES_FETCH_ADVANCES });
    expect(errorAction.getAction()).toEqual(handleError(error));
  });
});
