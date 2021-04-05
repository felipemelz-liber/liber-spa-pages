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

var Cls1 = _styledComponents["default"].circle.withConfig({
  displayName: "EmptyOpen__Cls1",
  componentId: "sc-1ckmh8c-0"
})(["fill:none;"]);

var Cls3 = _styledComponents["default"].circle.withConfig({
  displayName: "EmptyOpen__Cls3",
  componentId: "sc-1ckmh8c-1"
})(["fill:#009dff;fill-opacity:0.2;"]);

var Cls4 = _styledComponents["default"].polygon.withConfig({
  displayName: "EmptyOpen__Cls4",
  componentId: "sc-1ckmh8c-2"
})(["fill:#fff;stroke:#007ecc;stroke-miterlimit:10;stroke-width:2px;stroke-dasharray:12;"]);

var Cls5 = _styledComponents["default"].polyline.withConfig({
  displayName: "EmptyOpen__Cls5",
  componentId: "sc-1ckmh8c-3"
})(["fill:#fafafa;stroke:#007ecc;stroke-miterlimit:10;stroke-width:2px;stroke-dasharray:12;"]);

var Cls6 = _styledComponents["default"].rect.withConfig({
  displayName: "EmptyOpen__Cls6",
  componentId: "sc-1ckmh8c-4"
})(["fill:#007ecc;opacity:0.4;"]);

var Cls7 = _styledComponents["default"].path.withConfig({
  displayName: "EmptyOpen__Cls7",
  componentId: "sc-1ckmh8c-5"
})(["fill:none;opacity:0.4;stroke:#007ecc;stroke-miterlimit:10;stroke-linecap:round;stroke-width:3px;"]);

var EmptyOpen = function EmptyOpen(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    width: "52",
    height: "52",
    viewBox: "0 0 470 474",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("defs", null, _react["default"].createElement("clipPath", {
    id: "clip-path-empty-open",
    transform: "translate(-1.41)"
  }, _react["default"].createElement(Cls1, {
    cx: "235.5",
    cy: "235.5",
    r: "235.5"
  }))), _react["default"].createElement("g", {
    id: "icon",
    "data-name": "empty-open",
    clipPath: "url(#clip-path-empty-open)"
  }, _react["default"].createElement(Cls3, {
    cx: "235",
    cy: "235",
    r: "235"
  }), _react["default"].createElement(Cls4, {
    points: "92.98 473 92.98 137 275.93 137 277.94 137 377.02 242 377.02 473 92.98 473"
  }), _react["default"].createElement(Cls5, {
    points: "379.59 241.54 280.59 138 279.59 244 377.59 245"
  }), _react["default"].createElement(Cls6, {
    x: "136.05",
    y: "259.5",
    width: "198.73",
    height: "10",
    rx: "2",
    ry: "2"
  }), _react["default"].createElement(Cls6, {
    x: "136.05",
    y: "300.14",
    width: "198.73",
    height: "10",
    rx: "2",
    ry: "2"
  }), _react["default"].createElement(Cls6, {
    x: "136.05",
    y: "340.79",
    width: "198.73",
    height: "10",
    rx: "2",
    ry: "2"
  }), _react["default"].createElement(Cls6, {
    x: "136.05",
    y: "381.43",
    width: "198.73",
    height: "10",
    rx: "2",
    ry: "2"
  }), _react["default"].createElement(Cls6, {
    x: "136.05",
    y: "422.07",
    width: "198.73",
    height: "10",
    rx: "2",
    ry: "2"
  }), _react["default"].createElement(Cls6, {
    x: "136.05",
    y: "462.71",
    width: "198.73",
    height: "10",
    rx: "2",
    ry: "2"
  }), _react["default"].createElement(Cls7, {
    d: "M167.36,200c1.76-5.2,3-4.94,4.47-8,1.07-2.26,1.8-5-.15-7a2.85,2.85,0,0,0-3.48-.66,2.72,2.72, 0,0,0-.67,3.45,4.39,4.39,0,0,0,3.56,2A13.33,13.33,0,0,0,175,190c3.36-.67,6.67-2,10.14-1.36,5.24.91,9.79,4,15.26, 3.81a17.18,17.18,0,0,0,7.66-2.13c1-.56,2.06-1.69,1.47-2.95a4.21,4.21,0,0,0-1.8-1.51q-1.25-.77-2.52-1.5a64.81, 64.81,0,0,0-14.69-6.24c-1.53-.42-3.83-1-5.18.13a2.31,2.31,0,0,0-.47,3.23,6.23,6.23,0,0,0,3,1.95c5.12,2,10.9, 2.41,16.33,2.92l3.89.35a19.62,19.62,0,0,0,3.43.23c1.58-.14,1-1.37.41-2.34a39.77,39.77,0,0,0-2.72-4.15,25.74,25.74, 0,0,0-7.1-6.69c-2-1.19-5.71-2.83-7.43-.33s1.91,4.26,3.71,5c3.14,1.27,6.36,2.28,9.43,3.74a55,55,0,0,1,8.92,5.24, 43.53,43.53,0,0,1,3.9,3.2c1.18,1.09,2.59,2.32,3,3.94A2.75,2.75,0,0,1,222,198c-1.44.49-2.95-.13-4.39-.24-1.2-.09-3, .16-3.3,1.63-.31,1.85,2.91,1.44,3.93,1.3a25.94,25.94,0,0,1,5.36-.7,7.16,7.16,0,0,1,4.35,1.82c2.09,1.93,2.37, 5.58-.82,6.49-2.93.83-5.24-1.44-7.92-2.15-3.26-.86-5.67.92-8.31,2.53a6.54,6.54,0,0, 1-4.15.94c-1.75-.23-2.5-1.34-3.67-2.49a14,14,0,0,0-7.4-3.64,17.35,17.35,0,0,0-7.73.44c-2.28.66-2.14,1.85-3.94, 3.35a23.17,23.17,0,0,1-9,3.92,10.9,10.9,0,0,1-4.63-.63c-1.78-.53-3.55-1.1-5.35-1.58a13.55,13.55,0,0,0-10.09.78c-3, 1.53-5.55,3.79-8.39,5.59a17.87,17.87,0,0,1-4.77,2.24c-1.23.34-3.61.81-4.69-.12s-.1-2.43.81-3.16a13.69,13.69,0,0,1, 3.83-1.93,35.55,35.55,0,0,0,8.75-4.63,37.61,37.61,0,0,0,3.83-3.27,19.12,19.12,0,0,1,3.59-3,7.18,7.18,0,0,1,4.14-1, 11.15,11.15,0,0,1,3.56,1.34",
    transform: "translate(-1.41)"
  })));
};

EmptyOpen.displayName = 'EmptyOpen';
EmptyOpen.propTypes = {
  className: _propTypes["default"].string
};
EmptyOpen.defaultProps = {
  className: ''
};
var _default = EmptyOpen;
exports["default"] = _default;