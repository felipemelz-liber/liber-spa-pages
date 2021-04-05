import Immutable from 'seamless-immutable';
import reducer from '../reducers';

const INITIAL_STATE = Immutable({
  files: {},
  message: '',
});

describe('Testing Upload reducer', () => {
  it('should return current state by default', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('should handle action UPLOAD_FILES_START', () => {
    const action = {
      type: 'UPLOAD_FILES_START',
      payload: {
        files: {},
        actionURL: 'actionURL',
        id: 'id',
      },
    };
    expect(reducer(undefined, action)).toEqual({ files: {}, message: '' });
  });
  it('should handle action UPLOAD_FILES_SUCCESS', () => {
    const action = {
      type: 'UPLOAD_FILES_SUCCESS',
      payload: {
        result: {
          name: 'file',
        },
        id: '1',
      },
    };
    const testState = INITIAL_STATE.merge({
      files: {
        1: {
          id: '1',
        },
      },
    });
    const newState = INITIAL_STATE.merge({
      files: {
        ...INITIAL_STATE.files,
        [action.payload.id]: {
          ...action.payload.result,
          uploadProgress: 100,
        },
      },
    });
    expect(reducer(testState, action)).toEqual(newState);
  });
  it('should handle action UPLOAD_FILES_FAILED', () => {
    const action = {
      type: 'UPLOAD_FILES_FAILED',
      payload: {
        message: 'error',
      },
    };
    const testState = INITIAL_STATE.merge({
      message: '',
    });
    const newState = INITIAL_STATE.merge({
      message: 'error',
    });
    expect(reducer(testState, action)).toEqual(newState);
  });
  it('should handle action UPLOAD_FILES_PROGRESS', () => {
    const action = {
      type: 'UPLOAD_FILES_PROGRESS',
      payload: {
        progress: 50,
        id: '1',
      },
    };
    const testState = INITIAL_STATE.merge({
      files: {},
    });
    const newState = INITIAL_STATE.merge({
      files: {
        ...INITIAL_STATE.files,
        [action.payload.id]: {
          uploadProgress: action.payload.progress,
        },
      },
    });
    expect(reducer(testState, action)).toEqual(newState);
  });
});
