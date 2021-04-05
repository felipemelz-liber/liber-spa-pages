"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFilesProgress = exports.uploadFilesFailed = exports.uploadFilesSuccess = exports.uploadFiles = void 0;

var _actionTypes = require("./actionTypes");

var uploadFiles = function uploadFiles(files, actionURL, id) {
  return {
    type: _actionTypes.UPLOAD_FILES_START,
    payload: {
      files: files,
      actionURL: actionURL,
      id: id
    }
  };
};

exports.uploadFiles = uploadFiles;

var uploadFilesSuccess = function uploadFilesSuccess(result, id) {
  return {
    type: _actionTypes.UPLOAD_FILES_SUCCESS,
    payload: {
      result: result,
      id: id
    }
  };
};

exports.uploadFilesSuccess = uploadFilesSuccess;

var uploadFilesFailed = function uploadFilesFailed(error) {
  return {
    type: _actionTypes.UPLOAD_FILES_FAILED,
    payload: {
      error: error
    }
  };
};

exports.uploadFilesFailed = uploadFilesFailed;

var uploadFilesProgress = function uploadFilesProgress(progress, id) {
  return {
    type: _actionTypes.UPLOAD_FILES_PROGRESS,
    payload: {
      progress: progress,
      id: id
    }
  };
};

exports.uploadFilesProgress = uploadFilesProgress;