import * as actions from '../actions';

describe('Testing Upload Actions', () => {
  it('should return correct type and payload on uploadFiles call', () => {
    const result = actions.uploadFiles({}, 'actionURL', 'id');
    expect(result).toEqual({
      type: 'UPLOAD_FILES_START',
      payload: {
        files: {},
        actionURL: 'actionURL',
        id: 'id',
      },
    });
  });
  it('should return correct type and payload on uploadFilesSuccess call', () => {
    const result = actions.uploadFilesSuccess({}, 'id');
    expect(result).toEqual({
      type: 'UPLOAD_FILES_SUCCESS',
      payload: {
        result: {},
        id: 'id',
      },
    });
  });
  it('should return correct type and payload on uploadFilesFailed call', () => {
    const result = actions.uploadFilesFailed('error');
    expect(result).toEqual({
      type: 'UPLOAD_FILES_FAILED',
      payload: {
        error: 'error',
      },
    });
  });
  it('should return correct type and payload on uploadFilesProgress call', () => {
    const result = actions.uploadFilesProgress(100, 'id');
    expect(result).toEqual({
      type: 'UPLOAD_FILES_PROGRESS',
      payload: {
        progress: 100,
        id: 'id',
      },
    });
  });
});
