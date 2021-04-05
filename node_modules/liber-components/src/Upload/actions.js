import {
  UPLOAD_FILES_START,
  UPLOAD_FILES_PROGRESS,
  UPLOAD_FILES_SUCCESS,
  UPLOAD_FILES_FAILED,
} from './actionTypes';

export const uploadFiles = (files, actionURL, id) => ({
  type: UPLOAD_FILES_START,
  payload: {
    files,
    actionURL,
    id,
  },
});

export const uploadFilesSuccess = (result, id) => ({
  type: UPLOAD_FILES_SUCCESS,
  payload: {
    result,
    id,
  },
});

export const uploadFilesFailed = error => ({
  type: UPLOAD_FILES_FAILED,
  payload: {
    error,
  },
});

export const uploadFilesProgress = (progress, id) => ({
  type: UPLOAD_FILES_PROGRESS,
  payload: {
    progress,
    id,
  },
});
