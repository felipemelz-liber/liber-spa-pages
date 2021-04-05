"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUploader = createUploader;
exports.uploadFiles = uploadFiles;
exports["default"] = rootSaga;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("regenerator-runtime/runtime");

var _effects = require("redux-saga/effects");

var _reduxSaga = require("redux-saga");

var _axios = _interopRequireDefault(require("axios"));

var _actionTypes = require("./actionTypes");

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(uploadProgressWatcher),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(uploadFiles),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function createUploader(files, actionURL) {
  var emit;
  var channel = (0, _reduxSaga.eventChannel)(function (emitter) {
    emit = emitter;
    return function () {};
  });

  var uploadProgressCb = function uploadProgressCb(_ref) {
    var total = _ref.total,
        loaded = _ref.loaded;
    var percentage = Math.round(loaded * 100 / total);
    emit(percentage);
    if (percentage === 100) emit(_reduxSaga.END);
  };

  var fileData = new FormData();
  fileData.append('file', files);

  var uploadPromise = _axios["default"].post(actionURL, fileData, {
    onUploadProgress: uploadProgressCb
  });

  return [uploadPromise, channel];
}

function uploadProgressWatcher(channel, id) {
  var progress;
  return regeneratorRuntime.wrap(function uploadProgressWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!true) {
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return (0, _effects.take)(channel);

        case 3:
          progress = _context.sent;
          _context.next = 6;
          return (0, _effects.put)((0, _actions.uploadFilesProgress)(progress, id));

        case 6:
          _context.next = 0;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function uploadFiles(_ref2) {
  var _ref2$payload, files, actionURL, id, _ref3, _ref4, uploadPromise, channel, res, file;

  return regeneratorRuntime.wrap(function uploadFiles$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _ref2$payload = _ref2.payload, files = _ref2$payload.files, actionURL = _ref2$payload.actionURL, id = _ref2$payload.id;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.call)(createUploader, files, actionURL);

        case 4:
          _ref3 = _context2.sent;
          _ref4 = _slicedToArray(_ref3, 2);
          uploadPromise = _ref4[0];
          channel = _ref4[1];
          _context2.next = 10;
          return (0, _effects.fork)(uploadProgressWatcher, channel, id);

        case 10:
          _context2.next = 12;
          return (0, _effects.call)(function () {
            return uploadPromise;
          });

        case 12:
          res = _context2.sent;
          file = _objectSpread({}, res.data, {
            id: id
          });
          _context2.next = 16;
          return (0, _effects.put)((0, _actions.uploadFilesSuccess)(file, id));

        case 16:
          _context2.next = 22;
          break;

        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 22;
          return (0, _effects.put)((0, _actions.uploadFilesFailed)(_context2.t0));

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 18]]);
}

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeEvery)(_actionTypes.UPLOAD_FILES_START, uploadFiles);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}