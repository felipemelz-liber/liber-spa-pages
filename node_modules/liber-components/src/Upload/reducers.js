import Immutable from 'seamless-immutable';
import {
  UPLOAD_FILES_START,
  UPLOAD_FILES_PROGRESS,
  UPLOAD_FILES_SUCCESS,
  UPLOAD_FILES_FAILED,
} from './actionTypes';

const INITIAL_STATE = Immutable({
  files: {},
  message: '',
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_FILES_START:
      return state;
    case UPLOAD_FILES_SUCCESS: {
      return state.merge({
        files: {
          ...state.files,
          [action.payload.id]: {
            ...action.payload.result,
            uploadProgress: 100,
          },
        },
      });
    }
    case UPLOAD_FILES_FAILED: {
      return state.merge({
        message: action.payload.message,
      });
    }
    case UPLOAD_FILES_PROGRESS: {
      return state.merge({
        files: {
          ...state.files,
          [action.payload.id]: {
            uploadProgress: action.payload.progress,
          },
        },
      });
    }
    default:
      return state;
  }
};

export default reducer;
