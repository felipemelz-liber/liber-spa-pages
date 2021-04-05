"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.function.name");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactOnRails = _interopRequireDefault(require("react-on-rails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var generateToken = function generateToken(rails) {
  if (rails) {
    var csrfToken = _reactOnRails["default"].authenticityToken();

    return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("input", {
      name: "utf8",
      type: "hidden",
      value: "✓"
    }), _react["default"].createElement("input", {
      type: "hidden",
      name: "authenticity_token",
      value: csrfToken || ''
    }));
  }

  return null;
};

var Form = function Form(_ref) {
  var name = _ref.name,
      action = _ref.action,
      method = _ref.method,
      id = _ref.id,
      className = _ref.className,
      children = _ref.children,
      onSubmit = _ref.onSubmit,
      autocomplete = _ref.autocomplete,
      rails = _ref.rails;
  return _react["default"].createElement("form", {
    name: name,
    action: action,
    method: method,
    id: id,
    className: className,
    onSubmit: onSubmit,
    autoComplete: autocomplete
  }, generateToken(rails), children);
};

Form.propTypes = {
  name: _propTypes["default"].string,
  action: _propTypes["default"].string,
  method: _propTypes["default"].string,
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  autocomplete: _propTypes["default"].string,
  children: _propTypes["default"].arrayOf(_propTypes["default"].element),
  onSubmit: _propTypes["default"].func,
  rails: _propTypes["default"].bool
};
Form.defaultProps = {
  name: '',
  action: '',
  method: '',
  id: '',
  className: '',
  autocomplete: 'off',
  children: [],
  onSubmit: function onSubmit() {},
  rails: true
};
var _default = Form;
exports["default"] = _default;