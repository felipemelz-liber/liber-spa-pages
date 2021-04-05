import sinon from 'sinon';
import lodash from 'lodash';
import * as toastObject from 'liber-components/components/Toast/actions';
import * as utils from '../../utils';

import reducer, { initialState } from '../VendorAdvancesReducer';
import {
  VENDOR_ADVANCES_CHANGE_TAB,
  VENDOR_ADVANCES_UPDATE_PAGINATION,
  VENDOR_ADVANCES_FETCH_NEGOTIATIONS_SUCCESS,
  VENDOR_ADVANCES_FETCH_NEGOTIATIONS_REJECTED,
  VENDOR_ADVANCES_FETCH_NEGOTIATIONS,
  updateAdvances,
  SET_MODAL_OPEN,
  handleError,
  VENDOR_ADVANCES_FETCH_ADVANCES,
} from '../../actions/VendorAdvancesActions';

describe('VendorAdvancesReducer tests', () => {
  const calculateStub = sinon.stub(utils, 'calculateQuote');
  const differenceStub = sinon.stub(lodash, 'differenceBy');
  const toastSpy = sinon.spy(toastObject, 'toast');
  const convertSpy = sinon.spy(utils, 'convertToCamelCase');
  const updateStub = sinon.stub(utils, 'updateAdvances');
  const updateSignedStub = sinon.stub(utils, 'updateSignedAdvances');
  const statusCountStub = sinon.stub(utils, 'getStatusCount');
  const feedbackSpy = sinon.spy(utils, 'handleSignatureFeedback');
  const handleErrorSpy = sinon.stub(utils, 'handleError');

  afterEach(() => {
    calculateStub.resetHistory();
    differenceStub.resetHistory();
    toastSpy.resetHistory();
    convertSpy.resetHistory();
    updateStub.resetHistory();
    updateSignedStub.resetHistory();
    statusCountStub.resetHistory();
    feedbackSpy.resetHistory();
    handleErrorSpy.resetHistory();
  });

  afterAll(() => {
    calculateStub.restore();
    differenceStub.restore();
    toastSpy.restore();
    convertSpy.restore();
    updateStub.restore();
    updateSignedStub.restore();
    statusCountStub.restore();
    feedbackSpy.restore();
    handleErrorSpy.restore();
  });

  it('should return current state by default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should start loading on advances fetch', () => {
    const action = { type: VENDOR_ADVANCES_FETCH_ADVANCES };
    const result = initialState.merge({ loading: true });
    expect(reducer(initialState, action)).toEqual(result);
  });

  it('should set change tab', () => {
    const action = {
      type: VENDOR_ADVANCES_CHANGE_TAB,
      payload: {
        tab: 'newTab',
      },
    };
    const newState = initialState.merge({ activeTab: 'newTab' });
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it('should set update pagination', () => {
    const action = {
      type: VENDOR_ADVANCES_UPDATE_PAGINATION,
      payload: {
        pagination: {
          current: 2,
          per: 25,
        },
      },
    };
    const newState = initialState.merge({
      pagination: {
        ...initialState.pagination,
        current: 2,
        per: 25,
      },
    });
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it('should set fetch negotiations success', () => {
    const action = {
      type: VENDOR_ADVANCES_FETCH_NEGOTIATIONS_SUCCESS,
      payload: {
        negotiations: ['a', 'b'],
        pagination: { per: 100, current: 7 },
      },
    };
    const newState = initialState.merge({
      negotiations: ['a', 'b'],
      pagination: { per: 100, current: 7 },
      loading: false,
    });
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it('should set fetch negotiations rejected', () => {
    const action = {
      type: VENDOR_ADVANCES_FETCH_NEGOTIATIONS_REJECTED,
      payload: {
        message: 'Error',
      },
    };
    const newState = initialState.merge({
      error: 'Error',
      loading: false,
      negotiations: [],
    });
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it('should set fetch negotiations', () => {
    const action = {
      type: VENDOR_ADVANCES_FETCH_NEGOTIATIONS,
    };
    const newState = initialState.merge({
      error: '',
      loading: true,
      negotiations: [],
    });
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should update advances correctly', () => {
    const action = updateAdvances(
      {
        advances: [{ id: 1 }],
        pagination: { current: 1, previous: null, next: null, per: 10, pages: 1, count: 1 },
      },
      'concluded',
    );

    const result = initialState.merge({
      concludedAdvances: [{ id: 1 }],
      pagination: { current: 1, previous: null, next: null, per: 10, pages: 1, count: 1 },
    });

    expect(reducer(initialState, action)).toEqual(result);
  });

  it('should update advances correctly for pending', () => {
    const action = updateAdvances(
      {
        advances: [{ id: 1 }],
        pagination: { current: 1, previous: null, next: null, per: 10, pages: 1, count: 1 },
      },
      'pending',
    );

    const result = initialState.merge({
      pendingAdvances: [{ id: 1 }],
    });

    expect(reducer(initialState, action)).toEqual(result);
  });

  it('should set modal open', () => {
    const result = initialState.merge({ modalOpen: true });
    const action = { type: SET_MODAL_OPEN, payload: { modalOpen: true } };

    expect(reducer(initialState, action)).toEqual(result);
  });

  it('should handle request error on HANDLE_REQUEST_ERROR', () => {
    const newState = initialState.merge({
      buttonLoading: false,
      loading: false,
      isSigningDocuments: false,
    });

    expect(reducer(initialState, handleError('Error'))).toEqual(newState);
    expect(handleErrorSpy.calledWith('Error')).toBeTruthy();
  });
});
