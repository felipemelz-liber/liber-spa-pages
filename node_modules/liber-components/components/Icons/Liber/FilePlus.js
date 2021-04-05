"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FilePlus = function FilePlus(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    width: "52",
    height: "52",
    viewBox: "0 0 3000 1792",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    d: "m1152,512l0,-472q22,14 36,28l408,408q14,14 28,36l-472,0zm-128,32q0,40 28,68t68,28l544,0l0,1056q0,40 -28,68t-68,28l-1344,0q-40,0 -68,-28t-28,-68l0,-1600q0,-40 28,-68t68,-28l800,0l0,544z"
  }), _react["default"].createElement("path", {
    d: "m2584.99997,835.45454l0,121.0909q0,25.22727 -16.7642,42.88636t-40.71307,17.65909l-249.06817,0l0,262.36362q0,25.22727-16.7642,42.88636t-40.71307, 17.65909l-114.95454,0q-23.94886,0 -40.71307,-17.65909t-16.7642,-42.88636l0,-262.36362l-249.06817,0q-23.94886, 0 -40.71307,-17.65909t-16.7642,-42.88636l0,-121.0909q0,-25.22727 16.7642,-42.88636t40.71307, -17.65909l249.06817,0l0,-262.36362q0,-25.22727 16.7642,-42.88636t40.71307, -17.65909l114.95454,0q23.94886,0 40.71307,17.65909t16.7642,42.88636l0,262.36362l249.06817, 0q23.94886,0 40.71307,17.65909t16.7642,42.88636z"
  }));
};

FilePlus.displayName = 'FilePlus';
FilePlus.propTypes = {
  className: _propTypes["default"].string
};
FilePlus.defaultProps = {
  className: ''
};
var _default = FilePlus;
exports["default"] = _default;