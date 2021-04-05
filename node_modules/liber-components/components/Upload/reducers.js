"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _seamlessImmutable = _interopRequireDefault(require("seamless-immutable"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = (0, _seamlessImmutable["default"])({
  files: {},
  message: ''
});

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.UPLOAD_FILES_START:
      return state;

    case _actionTypes.UPLOAD_FILES_SUCCESS:
      {
        return state.merge({
          files: _objectSpread({}, state.files, _defineProperty({}, action.payload.id, _objectSpread({}, action.payload.result, {
            uploadProgress: 100
          })))
        });
      }

    case _actionTypes.UPLOAD_FILES_FAILED:
      {
        return state.merge({
          message: action.payload.message
        });
      }

    case _actionTypes.UPLOAD_FILES_PROGRESS:
      {
        return state.merge({
          files: _objectSpread({}, state.files, _defineProperty({}, action.payload.id, {
            uploadProgress: action.payload.progress
          }))
        });
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;