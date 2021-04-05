import { takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import rootSaga, { uploadFiles, createUploader } from '../sagas';

describe('SAGAS', () => {
  it('should dispatch action "UPLOAD_FILES_START" ', () => {
    const generator = rootSaga();
    expect(generator.next().value).toEqual(takeEvery('UPLOAD_FILES_START', uploadFiles));
    expect(generator.next().done).toBeTruthy();
  });
  it('should test createUploader function', () => {
    const promise = new Promise(() => {});
    const channel = eventChannel(() => () => {});
    expect(JSON.stringify(createUploader({}, 'url'))).toEqual(JSON.stringify([promise, channel]));
  });
});
