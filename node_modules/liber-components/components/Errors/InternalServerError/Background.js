"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cls1 = _styledComponents["default"].rect.withConfig({
  displayName: "Background__Cls1",
  componentId: "moojgn-0"
})(["fill:#f8feff;"]);

var Cls2 = _styledComponents["default"].path.withConfig({
  displayName: "Background__Cls2",
  componentId: "moojgn-1"
})(["fill:#eefaff;"]);

var Cls3 = _styledComponents["default"].path.withConfig({
  displayName: "Background__Cls3",
  componentId: "moojgn-2"
})(["fill:#fff;"]);

var Background = function Background(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1366 768",
    className: className
  }, _react["default"].createElement("g", {
    id: "Fundo_500",
    "data-name": "Fundo 500",
    transform: "translate(0 -815)"
  }, _react["default"].createElement(Cls1, {
    id: "Tela",
    width: "1366",
    height: "768",
    transform: "translate(0 815)"
  }), _react["default"].createElement("g", {
    id: "Group_21",
    "data-name": "Group 21"
  }, _react["default"].createElement(Cls2, {
    id: "Path_126",
    "data-name": "Path 126",
    d: "M1252.518,1201.6,1029.315,815H114.627L0,1013.54v376.116L111.627,1583h920.688Z"
  })), _react["default"].createElement(Cls3, {
    id: "Path_127",
    "data-name": "Path 127",
    d: "M970.227,1583,1190.3,1201.831,966.958,815H158.41L0,1089.374v224.916L155.14,1583Z"
  })));
};

Background.propTypes = {
  className: _propTypes["default"].string
};
Background.defaultProps = {
  className: ''
};
var _default = Background;
exports["default"] = _default;