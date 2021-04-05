import { put, take, takeEvery, call, fork } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import axios from 'axios';
import { UPLOAD_FILES_START } from './actionTypes';
import { uploadFilesProgress, uploadFilesSuccess, uploadFilesFailed } from './actions';

export function createUploader(files, actionURL) {
  let emit;
  const channel = eventChannel(emitter => {
    emit = emitter;
    return () => {};
  });
  const uploadProgressCb = ({ total, loaded }) => {
    const percentage = Math.round((loaded * 100) / total);
    emit(percentage);
    if (percentage === 100) emit(END);
  };
  const fileData = new FormData();
  fileData.append('file', files);
  const uploadPromise = axios.post(actionURL, fileData, {
    onUploadProgress: uploadProgressCb,
  });
  return [uploadPromise, channel];
}

function* uploadProgressWatcher(channel, id) {
  while (true) {
    // eslint-disable-line no-constant-condition
    const progress = yield take(channel);
    yield put(uploadFilesProgress(progress, id));
  }
}

export function* uploadFiles({ payload: { files, actionURL, id } }) {
  try {
    const [uploadPromise, channel] = yield call(createUploader, files, actionURL);
    yield fork(uploadProgressWatcher, channel, id);
    const res = yield call(() => uploadPromise);
    const file = {
      ...res.data,
      id,
    };
    yield put(uploadFilesSuccess(file, id));
  } catch (e) {
    yield put(uploadFilesFailed(e));
  }
}

export default function* rootSaga() {
  yield takeEvery(UPLOAD_FILES_START, uploadFiles);
}
