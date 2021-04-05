import Immutable from 'seamless-immutable';
import reducer from '../reducer';

const initialState = Immutable({
  toasts: [],
});

describe('Testing Toast reducer', () => {
  it('should return current state by default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should handle action ADD_TOAST', () => {
    const action = {
      type: 'ADD_TOAST',
      payload: { id: '2' },
    };
    const testState = initialState.merge({ toasts: [{ id: '1' }] });
    const newState = initialState.merge({ toasts: [{ id: '1' }, { id: '2' }] });
    expect(reducer(testState, action)).toEqual(newState);
  });
  it('should handle action REMOVE_TOAST', () => {
    const action = {
      type: 'REMOVE_TOAST',
      payload: '1',
    };
    const testState = initialState.merge({ toasts: [{ id: '1' }] });
    const newState = initialState.merge({ toasts: [] });
    expect(reducer(testState, action)).toEqual(newState);
  });
  it('should handle action CLOSE_TOAST with payload', () => {
    const action = {
      type: 'CLOSE_TOAST',
      payload: '2',
    };
    const testState = initialState.merge({
      toasts: [
        { id: '1', show: true },
        { id: '2', show: true },
        { id: '3', show: true },
      ],
    });
    const newState = initialState.merge({
      toasts: [
        { id: '1', show: true },
        { id: '2', show: false },
        { id: '3', show: true },
      ],
    });
    expect(reducer(testState, action)).toEqual(newState);
  });
  it('should handle action CLOSE_TOAST withou payload', () => {
    const action = {
      type: 'CLOSE_TOAST',
      payload: null,
    };
    const testState = initialState.merge({
      toasts: [
        { id: '1', show: true },
        { id: '2', show: true },
        { id: '3', show: true },
      ],
    });
    const newState = initialState.merge({
      toasts: [
        { id: '1', show: true },
        { id: '2', show: true },
        { id: '3', show: false },
      ],
    });
    expect(reducer(testState, action)).toEqual(newState);
  });
});
