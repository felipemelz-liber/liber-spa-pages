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
  componentId: "sc-1oipego-0"
})(["fill:#f8feff;"]);

var Cls2 = _styledComponents["default"].path.withConfig({
  displayName: "Background__Cls2",
  componentId: "sc-1oipego-1"
})(["fill:#fff;"]);

var Cls3 = _styledComponents["default"].path.withConfig({
  displayName: "Background__Cls3",
  componentId: "sc-1oipego-2"
})(["fill:#eefaff;"]);

var Background = function Background(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    preserveAspectRatio: "none",
    id: "Fundo_404",
    "data-name": "Fundo 404",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1366 768"
  }, _react["default"].createElement(Cls1, {
    id: "Tela",
    width: "1366",
    height: "768"
  }), _react["default"].createElement(Cls2, {
    id: "Path_282",
    "data-name": "Path 282",
    d: "M0,40.257V768H187.309c168.5-60.626,302.572-47.192,405.808, 0h735.868c59.718-269.748-313.976-276.945-187.155-548.472C1172.389,154.1,1167.412,71.4,1133.157, 0H536.682C212.751,216.044,114.394,45.416,0,40.257Z"
  }), _react["default"].createElement("g", {
    id: "Group_64",
    "data-name": "Group 64"
  }, _react["default"].createElement(Cls3, {
    id: "Path_283",
    "data-name": "Path 283",
    d: "M192.29,752.209A271.044,271.044,0,0,1,134.754,768h52.555c168.5-60.626,302.572-47.192,405.808,0h32.5C523.264, 705.147,380.754,678.3,192.29,752.209Z"
  }), _react["default"].createElement(Cls3, {
    id: "Path_284",
    "data-name": "Path 284",
    d: "M588.82,5.016c2.25-1.7,4.49-3.362,6.729-5.016H536.682C212.751,216.044,114.394,45.416,0, 40.257V90.591C133.584,37.851,204.6,295.561,588.82,5.016Z"
  }), _react["default"].createElement(Cls3, {
    id: "Path_285",
    "data-name": "Path 285",
    d: "M0,768H65.916A197.819,197.819,0,0,1,0,744.727Z"
  }), _react["default"].createElement(Cls3, {
    id: "Path_286",
    "data-name": "Path 286",
    d: "M1141.83,219.528C1172.389,154.1,1167.412,71.4,1133.157,0h-89.568c55.351,72.678,71.228,171.739,36.455, 246.189C961.252,500.528,1325.837,499.587,1243.857,768h85.128C1388.7,498.252,1015.009,491.055, 1141.83,219.528Z"
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