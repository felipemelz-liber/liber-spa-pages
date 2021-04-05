"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMethodPost = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Form = _interopRequireDefault(require("./Form"));

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Form',
  parameters: {
    jest: ['Form']
  }
};
exports["default"] = _default;

var withMethodPost = function withMethodPost() {
  return _react["default"].createElement(_Form["default"], {
    method: "post"
  }, _react["default"].createElement(_Inputs.TextField, null));
};

exports.withMethodPost = withMethodPost;
withMethodPost.story = {
  name: 'with method post'
};